import { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { logger } from '../logger';

dotenv.config();

const allowedOrigins = process.env.CORS_ALLOWED_ORIGINS?.split(',') || ['http://localhost:5173'];

const isAllowedOrigin = (origin: string | undefined) => !origin || allowedOrigins.includes(origin);

const corsOptions = {
    origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
        if (isAllowedOrigin(origin)) {
            callback(null, true);
        } else {
            logger.warn(`⚠️ Origin ${origin} not allowed by CORS`);
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
};

const corsMiddleware = cors(corsOptions);

export const handleCors = (req: Request, res: Response, next: NextFunction) => {
    corsMiddleware(req, res, next);
};

