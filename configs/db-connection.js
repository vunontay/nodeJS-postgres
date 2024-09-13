const { Sequelize } = require("sequelize");

class DatabaseConnection {
    constructor() {
        const dbName = process.env.DB_NAME;
        const dbUsername = process.env.DB_USERNAME;
        const dbPassword = process.env.DB_PASSWORD;
        const dbHost = process.env.DB_HOST;
        const dbDialect = process.env.DB_DIALECT;

        this.sequelize = new Sequelize(dbName, dbUsername, dbPassword, {
            host: dbHost,
            dialect: dbDialect,
            logging: false,
        });
    }

    static getInstance() {
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection();
        }
        return DatabaseConnection.instance;
    }

    async connect() {
        try {
            await this.sequelize.authenticate();
            console.log("Connection has been established successfully.");
        } catch (error) {
            console.error("Unable to connect to the database:", error);
        }
    }

    getSequelize() {
        return this.sequelize;
    }
}

module.exports = DatabaseConnection;
