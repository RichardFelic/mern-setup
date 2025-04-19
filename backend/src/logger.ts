import winston from 'winston';

const env = process.env.NODE_ENV || 'development';

/**
 * Transportes para el logger
 * @type {(winston.transports.ConsoleTransportInstance |
 *     winston.transports.FileTransportInstance)[]}
 */
// si el entorno es de desarrollo
const transports: (winston.transports.ConsoleTransportInstance |
    winston.transports.FileTransportInstance)[] = [
    /**
     * Transporte para la consola
     */
    new winston.transports.Console({
        /**
         * Nivel de log para la consola
         */
        level: 'info',
        /**
         * Formato para la consola
         */
        format: winston.format.combine(
            /**
             * Formato para colorear los mensajes de log
             */
            winston.format.colorize(),
            /**
             * Formato simple para los mensajes de log
             */
            winston.format.simple()
        )
    })
];

// Si el entorno es de producción
if (env === 'production') {
    /**
     * Transporte para el archivo de errores
     */
    transports.push(
        new winston.transports.File({
            /**
             * Ruta del archivo de errores
             */
            filename: 'logs/error.log',
            /**
             * Nivel de log para el archivo de errores
             */
            level: 'error'
        })
    );
    /**
     * Transporte para el archivo de logs combinados
     */
    transports.push(
        new winston.transports.File({
            /**
             * Ruta del archivo de logs combinados
             */
            filename: 'logs/combined.log'
        })
    );
}

/**
 * Logger principal
 */
export const logger = winston.createLogger({
    /**
     * Nivel de log principal
     */
    level: 'info',
    /**
     * Niveles de log
     */
    levels: winston.config.npm.levels,
    /**
     * Formato principal para los mensajes de log
     */
    format: winston.format.combine(
        /**
         * Formato para errores con stack trace
         */
        winston.format.errors({ stack: true }),
        /**
         * Formato para mensajes de log en formato JSON
         */
        winston.format.json()
    ),
    /**
     * Transportes para el logger
     */
    transports
});

/**
 * Stream para el logger
 */
export const stream = {
    /**
     * Escribe un mensaje de log en el stream
     * @param {string} message Mensaje de log
     */
    write: (message: string) => {
        logger.info(message);
    }
};

