import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema(
  {
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    parentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }, // for replies
  },
  { timestamps: true }
);

export default mongoose.models.Comment || mongoose.model('Comment', CommentSchema);
