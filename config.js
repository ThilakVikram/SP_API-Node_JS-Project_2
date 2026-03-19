import dotenv from "dotenv"

dotenv.config()

export const SP_CLIENT_ID = process.env.SP_CLIENT_ID
export const SP_CLIENT_SECRET = process.env.SP_CLIENT_SECRET
export const SP_NA_REFRESH_TOKEN = process.env.SP_NA_REFRESH_TOKEN
export const SP_EU_REFRESH_TOKEN = process.env.SP_EU_REFRESH_TOKEN
export const SP_FE_REFRESH_TOKEN = process.env.SP_FE_REFRESH_TOKEN

export const DB_USERNAME = process.env.DB_USERNAME
export const DB_PASSWORD = process.env.DB_PASSWORD
export const DB_NAME = process.env.DB_NAME
export const DB_HOST = process.env.DB_HOST
export const DB_PORT = process.env.DB_PORT

export const WarehouseStockModelDetail = {
    tableName:"WarehouseStock1"
}