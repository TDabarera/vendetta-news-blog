import { dbConnect } from '../../../lib/dbConnect';
import User from '../../../models/User';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  await dbConnect();
  const body = await req.json();

  try {
    const hashedPassword = await bcrypt.hash(body.password, 10);
    const user = await User.create({
      ...body,
      password: hashedPassword,
    });
    return new Response(JSON.stringify(user), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

export async function GET() {
  await dbConnect();
  try {
    const users = await User.find().select('-password');
    return new Response(JSON.stringify(users));
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
