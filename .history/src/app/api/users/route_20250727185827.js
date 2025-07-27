import { dbConnect } from '@/lib/dbConnect';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import { z } from 'zod';

const userSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(['admin', 'writer']),
  alignment: z.enum(['far-left', 'left', 'center', 'right', 'far-right']),
});

export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();
    const parsed = userSchema.parse(body);

    const hashedPassword = await bcrypt.hash(parsed.password, 10);

    const user = await User.create({
      ...parsed,
      password: hashedPassword,
    });

    const { password, ...safeUser } = user.toObject();

    return new Response(JSON.stringify(safeUser), { status: 201 });

  } catch (error) {
    console.error('❌ [USER_CREATE_ERROR]', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
