import mongoose from 'mongoose';
import 'dotenv/config';

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI no está definida en .env');
}

const clientOptions: mongoose.ConnectOptions = {
  serverApi: {
    version: '1',
    strict: true,
    deprecationErrors: true
  },
  retryWrites: true,
  w: 'majority'
};


export async function connectToDatabase() {
  try {
    const connection = await mongoose.connect(MONGODB_URI, clientOptions);
    
    if (!connection.connection.db) {
      throw new Error('No se pudo establecer conexión con la base de datos');
    }

    console.log('Conectado a MongoDB en:', connection.connection.host);
    
    try {
      await connection.connection.db.admin().command({ ping: 1 });
      console.log('Ping a MongoDB exitoso');
    } catch (pingError) {
      console.warn('No se pudo hacer ping a MongoDB:', pingError);
    }

    return connection;
  } catch (error) {
    console.error('Error de conexión a MongoDB:', error);
    throw error;
  }
}