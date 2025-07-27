import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
  {
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: Object, required: true }, // Rich text JSON for Tiptap or Lexical
    metaDescription: String,
    metaImage: String,
    tags: [String],
    challengeTo: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
  },
  { timestamps: true }
);

export default mongoose.models.Post || mongoose.model('Post', PostSchema);
