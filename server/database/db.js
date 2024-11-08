import { Sequelize } from 'sequelize';

const db = new Sequelize('hic_db', 'mr_robot', 'hic-admin', {
    host: '54.167.92.130', // o la dirección IP del servidor
    dialect: 'mariadb',
    port: 3306, // Asegúrate de que el puerto sea correcto
    dialectOptions: {
        connectTimeout: 3000 // Tiempo de espera en milisegundos
    }
});

export default db;
