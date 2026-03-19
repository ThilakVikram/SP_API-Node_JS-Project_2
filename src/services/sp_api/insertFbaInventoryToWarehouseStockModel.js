import WarehouseStockModel from "../../models/WarehouseStockModel.js";
import FbaInventory from "../../utils/sp_api/FbaInventory.js";

export async function insertFbaInventoryToWarehouseStockModel() {
    const regions = Object.values(FbaInventory.types.regions).filter(v => v)
    for (const region of regions) {
        const marketplaces = Object.values(FbaInventory.types.marketplaces[region])
        for (const marketplace of marketplaces) {
            const fbaInventory = new FbaInventory(region)
            let dataInserted = 0
            // console.log("")
            for await (const inventorySummaries of fbaInventory.getInventorySummaries(marketplace)) {
                dataInserted += inventorySummaries.length
                const warehouseStockDataArray = []
                for await (const inventorySummary of inventorySummaries) {
                    // console.log(inventorySummary)
                    // break
                    warehouseStockDataArray.push(
                        WarehouseStockModel.modelTemplate({
                            asin: inventorySummary.asin,
                            fnsku: inventorySummary.fnSku,
                            sku: inventorySummary.sellerSku,
                            overall_quantity:inventorySummary.totalQuantity,
                            damaged_quantity:inventorySummary.inventoryDetails.unfulfillableQuantity.totalUnfulfillableQuantity,
                            inbound_quantity:inventorySummary.inventoryDetails.inboundReceivingQuantity,
                            outbound_quantity:0,
                            quantity: inventorySummary.inventoryDetails.fulfillableQuantity,
                            reviewing_quantity: inventorySummary.inventoryDetails.researchingQuantity.totalResearchingQuantity,
                            warehouse: "FBA "+marketplace
                        })
                    )
                }
                WarehouseStockModel.insertManyData(warehouseStockDataArray).catch(console.log)
                // break
                process.stdout.write(`\rCurrenty Extracting Region (${region}) - Marketplace (${marketplace}) Fba Inventory Summary, Data Inserted ${dataInserted}`)
            }
            console.log(`\rCurrenty Extracting Region (${region}) - Marketplace (${marketplace}) Fba Inventory Summary, Data Inserted ${dataInserted} : Completed`)
        }
    }
}