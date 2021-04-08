"use strict";

class FN_WAFFLE {
	constructor() {
        Logger.info(`Loading: FN_WAFFLE`);
        this.mod = "spaceman-fn_waffle";
        ModLoader.onLoad[this.mod] = this.load.bind(this);    
        this.funcptr = HttpServer.onRespond["IMAGE"];    
        HttpServer.onRespond["IMAGE"] = this.getImage.bind(this);
    }

    getImage(sessionID, req, resp, body){
        const filepath = `${ModLoader.getModPath(this.mod)}res/`;

        if (req.url.includes("/avatar/FN_WAFFLE"))
        {
            HttpServer.sendFile(resp, `${filepath}/FN_WAFFLE.png`);
            return;
        }

        this.funcptr(sessionID, req, resp, body);
    }

    load(){
        RagfairConfig.traders["FN_WAFFLE"] = true;
        const filepath = `${ModLoader.getModPath(this.mod)}db/`;
        DatabaseServer.tables.traders.FN_WAFFLE = {
            "assort":       JsonUtil.deserialize(VFS.readFile(`${filepath}assort.json`)),
            "base":         JsonUtil.deserialize(VFS.readFile(`${filepath}base.json`)),
            "dialogue":     JsonUtil.deserialize(VFS.readFile(`${filepath}dialogue.json`)),
            "questassort":  JsonUtil.deserialize(VFS.readFile(`${filepath}questassort.json`)),
            //"suits":        JsonUtil.deserialize(VFS.readFile(`${filepath}suits.json`))
        };
        let locales = DatabaseServer.tables.locales.global;

        for (const locale in locales)
        {
            locales[locale].trading.FN_WAFFLE = {
                "FullName": "FN Waffle",
                "FirstName": "FN",
                "Nickname": "FN Waffle",
                "Location": "Belgium",
                "Description": "Vendor for all of FN-Herstal Products"
            };
        }

        DatabaseServer.tables.locales.global = locales;
    }
}

module.exports = FN_WAFFLE;
