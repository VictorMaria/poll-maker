import { config } from 'dotenv';
import { hashPassword, createToken, comparePassword } from '../../helpers/auth';
import { User } from '../../models';

export const signUp = async (details) => {
    const { firstName, lastName, email, password } = details;
    const refinedEmail =  email.toLowerCase();
    const user = await User.findOne({ email: refinedEmail });
    if (user) {
        return {
            status: 'failed',
            message: 'Email already exists'
        };
    }

    const newUser = await User.create({
        firstName,
        lastName,
        email: refinedEmail,
        password: hashPassword(password),
    });

    const payload = {
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email,
    };

    const token = createToken(payload, process.env.TOKEN_DURATION);

    return { 
        status: 'success',
        message: 'Sign up Successful',
        data: {
            token,
        }
    }
};

export const signIn = async (details) => {
    const { email, password } = details;

    const refinedEmail =  email.toLowerCase();
    const user = await User.findOne({ email: refinedEmail });
    
    if (!user) {
        return {
            status: 'failed',
            message: 'Invalid user credentials',
        };
    }

    const result = comparePassword(password, user.password);
        if (!result) {
            return {
                status: 'failed',
                message: 'Invalid user credentials',
            };
        }

        const payload = {
            firstName: user.firstName,
            lastName: user.lastName,
            email,
        };
    
        const token = createToken(payload, process.env.TOKEN_DURATION);
    
        return { 
            status: 'success',
            message: 'Sign in Successful',
            data: {
                token,
            }
        }

}

