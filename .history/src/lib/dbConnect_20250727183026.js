import mongoose from 'mongoose';

let isConnected;

export const dbConnect = async () => {
    if (isConnected) return;
    
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'vendetta',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        isConnected = db.connections[0].readyState;
        console.log('MongoDB connected:', db.connection.name);
    } catch (error) {
        console.error('MongoDB connection error:', error);
        throw new Error('Failed to connect to MongoDB');
    }
};
