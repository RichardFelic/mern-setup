import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import {logger, stream} from './logger';
import dotenv from 'dotenv';
import handleCors from 'cors';
import { errorHandler } from './middlewares/errorHandler.middleware';
// Cargar variables de entorno
dotenv.config();

// Configuraciones de la app
const app = express();
const env = process.env.NODE_ENV || 'development';

// Middlewares
app.use(express.json()); // Para recibir JSON
app.use(helmet()); // Para proteger la app
app.use(handleCors()); // Para habilitar CORS


// Logs HTTP segun el entorno
// Si el entorno es de desarrollo
if (env === 'development') {
    // Usar morgan en modo 'dev' para logs detallados
    app.use(morgan('dev', { stream }));
    // Log de información sobre el modo de desarrollo
    logger.info('🛠️  Modo desarrollo - morgan dev activado');
}

// Si el entorno es de producción
if (env === 'production') {
    // Usar morgan en modo 'combined' para logs combinados
    app.use(morgan('combined', { stream }));
    // Log de información sobre el modo de producción
    logger.info('🚀 Modo produccion - morgan combined activado');
}

app.get('/', (req, res, next) => {
    try {
        res.json({ status: 200,  message: 'Ejemplo de mensaje exitoso' });
    } catch (err) {
        next(err);
    }
});

app.get('/example', (req, res, next) => {
    try {
      throw { status: 400, message: 'Esto es un error de ejemplo' };
    } catch (error) {
      next(error);
    }
  });

app.use(errorHandler); // Middleware para manejar errores

export default app;