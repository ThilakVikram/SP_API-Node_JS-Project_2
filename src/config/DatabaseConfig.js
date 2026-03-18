import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME } from "../../config.js";

export default class DatabaseConfig{
    constructor(){
        this.DB_HOST = DB_HOST
        this.DB_PORT = DB_PORT
        this.DB_USERNAME = DB_USERNAME
        this.DB_PASSWORD = DB_PASSWORD
        this.DB_NAME = DB_NAME
    }
}