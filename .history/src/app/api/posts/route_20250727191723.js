import { dbConnect } from '../../../lib/dbConnect';
import Post from '../../../models/Post';
import slugify from 'slugify';

export async function POST(req) {
  await dbConnect();
  const body = await req.json();

  try {
    const slug = slugify(body.title, { lower: true });
    const post = await Post.create({ ...body, slug });
    return new Response(JSON.stringify(post), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

export async function GET() {
  await dbConnect();
  try {
    const posts = await Post.find().populate('author', 'username alignment');
    return new Response(JSON.stringify(posts));
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
