// src/lib/dbConnect.js
import mongoose from 'mongoose';

let isConnected = false;

export async function dbConnect() {
  if (isConnected) return;

  if (!process.env.MONGODB_URI) {
    throw new Error('MONGODB_URI is not defined in .env');
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'vendetta', // Optional: specify db name
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log('✅ MongoDB connected');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    throw error;
  }
}
