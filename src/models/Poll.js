import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PollSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
}, {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
});

const Poll = mongoose.model('Poll', PollSchema);
export default Poll;
