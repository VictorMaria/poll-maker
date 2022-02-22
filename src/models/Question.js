import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    pollId: {
        type: Schema.Types.ObjectId,
        ref: 'Poll',
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    answerType: {
        type: String,
        enum: [ 'text', 'option', 'file' ],
        required: true,
    },
    answers: [ String ],
}, {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
});

const Question = mongoose.model('Question', QuestionSchema);
export default Question;
