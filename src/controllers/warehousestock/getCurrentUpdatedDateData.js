// import { where } from "sequelize";
import { Op } from "sequelize";
import WarehouseStockModel from "../../models/WarehouseStockModel.js";

// WarehouseStockModel.modelTemplate()
export async function getCurrentUpdatedDateData(){
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const date = currentDate.getDate()
    const getData = WarehouseStockModel.getData()
    const currentDate1 = `${year}-${month}-${date}` || "2026-02-10"
    // const currentDate1 = "2026-02-10"
    console.log(`${year}-0${month}-${date-1}`)
    WarehouseStockModel.restartModel()
    const response = await WarehouseStockModel.table.findAll({where:{updated_date:currentDate1,overall_quantity:{
        [Op.gt]:0
    }}})
    return response
}

getCurrentUpdatedDateData().then(console.log)