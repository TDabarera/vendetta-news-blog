import dbConnect from '@/lib/db';
import User from '@/models/User';

export async function POST(req) {
  try {
    console.log('📡 Connecting to MongoDB...');
    await dbConnect();
    console.log('✅ Connected to DB');

    const body = await req.json();
    console.log('📥 Request Body:', body);

    console.log('🧩 User Model:', User);

    const user = await User.create({
      username: body.username,
      email: body.email,
      password: body.password,
      role: body.role,
      alignment: body.alignment,
    });

    console.log('✅ User created:', user);

    return new Response(JSON.stringify(user), { status: 201 });

  } catch (error) {
    console.error('❌ [USER_CREATE_ERROR]', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
