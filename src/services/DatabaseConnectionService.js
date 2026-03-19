import { Sequelize } from "sequelize";
import DatabaseConfig from "../config/databaseConfig.js";

class DatabaseConnection extends DatabaseConfig {
    constructor() {
        super()
        this.sequelize = new Sequelize(
            this.DB_NAME,
            this.DB_USERNAME,
            this.DB_PASSWORD,
            {
                host: this.DB_HOST,
                dialect: "mysql",
                logging: false
            }
        )
    }
    restartConnection() {
        try {
            this.sequelize.close()
            this.sequelize = new Sequelize(
                this.DB_NAME,
                this.DB_USERNAME,
                this.DB_PASSWORD,
                {
                    host: this.DB_HOST,
                    dialect: "mysql"
                }
            )
        }
        catch (err) {
            throw new Error("Connection Error")
        }
    }
}
const DatabaseConnectionService = new DatabaseConnection()
export default DatabaseConnectionService