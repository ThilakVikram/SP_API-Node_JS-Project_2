import { Router } from "express";
import { getCurrentUpdatedDateData } from "../controllers/warehousestock/getCurrentUpdatedDateData.js";

const ApiRouter = Router()

ApiRouter.get("/getCurrentInventorySummary",(req,res)=>{
    getCurrentUpdatedDateData().then(queryResult=>{
        res.json(queryResult)
    })
    
    // res.send()
})

export {ApiRouter}