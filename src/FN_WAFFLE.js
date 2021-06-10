"use strict";

const SpaceApi = require("../../spaceman-api/api");
const config = require("../config.json");

class FN_WAFFLE {
	constructor() {
        SpaceApi.CreateNewTrader("FN_WAFFLE", true, "/files/trader/avatar/FN_WAFFLE.png", "RUB");
        SpaceApi.CreateNewTraderLocale("en", "FN_WAFFLE", "FN Waffle", "FN", "FN Waffle", "Belgium", "Vendor for all of FN-Herstal's Products");
        SpaceApi.EditTraderLL("FN_WAFFLE", "1", 15, 250000, 0);
        SpaceApi.EditTraderLL("FN_WAFFLE", "2", 25, 500000, 0);
        SpaceApi.EditTraderLL("FN_WAFFLE", "3", 35, 1000000, 0);
        RagfairConfig.traders["FN_WAFFLE"] = true;

        this.funcptr = HttpServer.onRespond["IMAGE"];    
        HttpServer.onRespond["IMAGE"] = this.getImage.bind(this);

        if (config.debug){
            Logger.info(`Loading: FN_WAFFLE`);
        }
    }

    getImage(sessionID, req, resp, body){
        const filepath = "spaceman-fn_waffle/res/";

        if (req.url.includes("/avatar/FN_WAFFLE"))
        {
            HttpServer.sendFile(resp, `${filepath}/FN_WAFFLE.png`);
            return;
        }

        this.funcptr(sessionID, req, resp, body);
    }
}

module.exports = FN_WAFFLE;
