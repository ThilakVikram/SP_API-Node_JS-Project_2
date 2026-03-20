import { DataTypes } from "sequelize";
import DatabaseConnectionService from "../services/DatabaseConnectionService.js";
import { WarehouseStockModelDetail } from "../../config.js";

const WAREHOUSE_STRUCTURE = {
    entry_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    updated_date: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW
    },

    asin: {
        type: DataTypes.STRING(20)
    },

    sku: {
        type: DataTypes.STRING(100)
    },

    fnsku: {
        type: DataTypes.STRING(100)
    },

    item_name: {
        type: DataTypes.STRING(500)
    },

    quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },

    inbound_quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    outbound_quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },

    reviewing_quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },

    damaged_quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },

    overall_quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },

    warehouse: {
        type: DataTypes.STRING(100)
    },

    warehouse_id: {
        type: DataTypes.STRING(150),
        allowNull: true
    },

    unstructured_name: {
        type: DataTypes.STRING(150),
        allowNull: true
    }
}
class WarehouseStockModel {
    constructor() {
        this.connection = DatabaseConnectionService
        this.sequelize = this.connection.sequelize
        this.table = this.sequelize.define(
            WarehouseStockModelDetail.tableName,
            { ...WAREHOUSE_STRUCTURE },
            { tableName: WarehouseStockModelDetail.tableName, timestamps: false }
        )
    }
    restartModel() {
        this.connection.restartConnection()
        this.sequelize = this.connection.sequelize
        this.table = this.sequelize.define(
            WarehouseStockModelDetail.tableName,
            { ...WAREHOUSE_STRUCTURE },
            {tableName:WarehouseStockModelDetail.tableName,timestamps:false}
        )
    }
    modelTemplate({
        updated_date,
        asin,
        sku,
        fnsku,
        item_name,
        quantity,
        inbound_quantity,
        outbound_quantity,
        reviewing_quantity,
        damaged_quantity,
        overall_quantity,
        warehouse,
        warehouse_id,
        unstructured_name
    }) {
        return {
            updated_date,
            asin,
            sku,
            fnsku,
            item_name,
            quantity,
            inbound_quantity,
            outbound_quantity,
            reviewing_quantity,
            damaged_quantity,
            overall_quantity,
            warehouse,
            warehouse_id,
            unstructured_name
        }
    }
    async insertData(data = this.modelTemplate()) {
        try {
            return await this.table.create(data)
        }
        catch (err) {
            throw err
        }
    }
    async insertManyData(datas = [this.modelTemplate()]) {
        try {
            return this.table.bulkCreate(datas)
        }
        catch (err) {
            throw err
        }
    }
    getData(){
        return this.table.findOne
    }
    getManyData(){
        return this.table.findAll
    }
}

export default new WarehouseStockModel()
// console.log(Object.keys(WAREHOUSE_STRUCTURE))

// {
//     entry_id,
//         updated_date,
//         asin, sku,
//         fnsku, item_name,
//         quantity, inbound_quantity,
//         outbound_quantity, reviewing_quantity,
//         damaged_quantity, overall_quantity,
//         warehouse, warehouse_id,
//         unstructured_name
// }