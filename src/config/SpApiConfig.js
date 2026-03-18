import { SP_CLIENT_ID, SP_CLIENT_SECRET, SP_EU_REFRESH_TOKEN, SP_FE_REFRESH_TOKEN, SP_NA_REFRESH_TOKEN } from "../../config.js";

export default class SpApiConfig{
    constructor(){
        this.SP_CLIENT_ID = SP_CLIENT_ID
        this.SP_CLIENT_SECRET = SP_CLIENT_SECRET
        this.SP_EU_REFRESH_TOKEN = SP_EU_REFRESH_TOKEN
        this.SP_FE_REFRESH_TOKEN = SP_FE_REFRESH_TOKEN
        this.SP_NA_REFRESH_TOKEN = SP_NA_REFRESH_TOKEN
    }
}