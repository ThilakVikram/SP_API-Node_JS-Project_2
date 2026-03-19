import { FbainventorySpApi } from "@amazon-sp-api-release/amazon-sp-api-sdk-js"
import SpApiConfig from "../../config/SpApiConfig.js";
import { DataTypes } from "./DataTypes.js";


export default class FbaInventory extends SpApiConfig {
    static types = class {
        static regions = DataTypes.region
        static marketplaces = DataTypes.marketplace
    }
    static #marketplace = DataTypes.marketplace
    constructor(region = DataTypes.region.None, marketplace = null) {
        super()
        try {
            this.marketplace = marketplace
            this.region = region
            this.baseUrl = DataTypes.baseUrl[region]
            this.refreshToken = (() => {
                switch (region) {
                    case "NA":
                        return this.SP_NA_REFRESH_TOKEN
                    case "EU":
                        return this.SP_EU_REFRESH_TOKEN
                    case "FE":
                        return this.SP_FE_REFRESH_TOKEN
                    default:
                        throw new Error("Invalid Marketplace for Refresh Token Select")
                }
            })()
        }
        catch (err) {
            throw new Error(err)
        }
        this.ApiClient = new FbainventorySpApi.ApiClient(this.baseUrl)
        this.ApiClient.enableAutoRetrievalAccessToken(
            this.SP_CLIENT_ID,
            this.SP_CLIENT_SECRET,
            this.refreshToken
        )
        this.FbaInventoryApi = new FbainventorySpApi.FbaInventoryApi(this.ApiClient)
    }
    async #getInventorySummary(marketplace, nextToken) {
        const granularityType = "Marketplace"
        const marketplaceID = DataTypes.marketplaceId[this.region][marketplace]
        const granularityId = marketplaceID
        const marketplaceIds = [marketplaceID]
        return await this.FbaInventoryApi.getInventorySummaries(
            granularityType,
            granularityId,
            marketplaceIds,
            { nextToken, details: true }
        )
    }
    async* getInventorySummaries(marketplace) {
        let nextToken = null
        // let returned = 0
        while (nextToken != "") {
            // if(returned > 5)
            // break
            try {
                const response = await this.#getInventorySummary(marketplace, nextToken)
                nextToken = response?.pagination?.nextToken || ""
                yield response.payload.inventorySummaries
                // returned++
            }
            catch (err) {
                if (err.code === 'ETIMEDOUT' || err.code === 'ECONNRESET') {
                    process.stdout.write(" Network timeout. Retrying...");

                    await new Promise(res => setTimeout(res, 3000));
                    continue;
                }
                switch (err.status) {
                    case 429:
                        await new Promise(res => setTimeout(res, 3000))
                        continue
                    default:
                        console.log(nextToken)
                        throw new Error(err.status || err)
                }
            }
        }
    }
}