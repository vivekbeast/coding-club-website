export default {
    schema: "./utils/schema.js",
    dialect: 'mysql2',
    dbCredentials: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: 3306 // Default port
    }
  };