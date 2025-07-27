import { dbConnect } from '@/lib/dbConnect';
import Post from '@/models/Post';
import slugify from 'slugify';

export async function POST(req) {
  await dbConnect();
  const body = await req.json();

  try {
    const slug = slugify(body.title, { lower: true });
    const post = await Post.create({ ...body, slug });
    return Response.json(post, { status: 201 });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}

export async function GET() {
  await dbConnect();
  try {
    const posts = await Post.find().populate('author', 'username alignment');
    return Response.json(posts);
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
