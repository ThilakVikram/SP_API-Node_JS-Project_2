import WarehouseStockModel from "./models/WarehouseStockModel.js";
import { ApiRouter } from "./routers/api.js";
import FbaInventory from "./utils/sp_api/FbaInventory.js";
import express from "express"
import cron from "cron"

const app = express()

app.get("/name",(req,res)=>{
    res.json({
        name:"thilak vikram R",
        role:"Data Analyst"
    })
})


app.listen(3000,err=>{
    if(err)
        throw new Error("Error on Host")
    console.log("Listening on Port 3000")
})

// const USFba = new FbaInventory(FbaInventory.region.NA.marketplace.US)
// console.log(FbaInventory.marketplace.NA.US)

app.use("/api",ApiRouter)