const { port } = require('./config/config');
const app = require('./server');

/**
 * Inicialización del servidor
 * Fecha creación: 09/12/2024
 * Autor: Hector García
 * Descripción:
 *              Archivo principal encargado de inicializar el servidor.
 * Referencias:
 *              Configuraciones desde server.js,
 *              Variable de entorno (port) desde config.js.
 */
app.listen(port, () => {
    console.log(`Servidor inicializado en http://localhost:${port}`);
});