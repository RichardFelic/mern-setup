import app from './app';
import { logger } from './logger';
import dotenv from 'dotenv';
// import database  from './configs/database.config';

dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
    logger.info(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  });

//   (async () => {
//     try {
//         await database(); // Conectar a la base de datos
//         app.listen(PORT, () => {
//             logger.info(`🚀 Servidor corriendo en http://localhost:${PORT}`);
//         });
//     } catch (error) {
//         logger.error('❌ Error al iniciar el servidor', error);
//         process.exit(1);
//     }
// })();