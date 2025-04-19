import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { logger } from '../logger';

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

const database = async () => {
    try {
        await mongoose.connect(MONGO_URL || '');
        logger.info('⚙️ Database connected');
    } catch (error) {
        logger.error('❌ Error connecting to database', error);
        process.exit(1);
    }
};

export default database;
