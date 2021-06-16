"use strict";

const SpaceApi = require("../../spaceman-api/api");
const config = require("../config.json");

class FN_GL40_BLACK {
    static onLoadMod() {
        const itemId = "050221_FN_GL40_BLACK0";
        const itemClone = "5e81ebcd8e146c7080625e15";
        const itemCategory = "5b5f79d186f774093f2ed3c2";
        const itemPrefabPath = "FN_GL40_BLACK/weapon_fn_40gl_s_container.bundle";
        const itemLongName = "FN GL40 Mk.2 grenade launcher (Black)";
        const itemFleaPrice = 110000;
        const itemShortName = "GL40";
        const itemDescription = "Standalone buttstock assembly with an attached FN GL40 Mk.2 grenade launcher. It is designed to use the full variety of NATO standard 40mm grenades.";

        if (config.debug){
            Logger.info(`Loading: ${itemId}`);
        }

        let item = JsonUtil.clone(DatabaseServer.tables.templates.items[itemClone]);
        item._id = itemId;
        item._props.Prefab.path = itemPrefabPath;
        DatabaseServer.tables.templates.items[itemId] = item;

        SpaceApi.CreateHandbookItem(itemId, itemCategory, itemFleaPrice);
        SpaceApi.CreateNewItemLocale("en", itemId, itemLongName, itemShortName, itemDescription);
        const addonItems = ["55d4b9964bdc2d1d4e8b456e","5bc09a30d4351e00367fb7c8","5bc09a18d4351e003562b68e"];
        
        var addonPrice = 0; 
        for (const currentItem in addonItems){
            addonPrice += DatabaseServer.tables.templates.items[addonItems[currentItem]]._props.CreditsPrice;
        }
        
        SpaceApi.CreateTraderAssort(itemId, itemId, "FN_WAFFLE", itemFleaPrice + addonPrice, "RUB", 4);
        SpaceApi.AddonTraderAssortSale("FN_GL40_BLACK_PG", "55d4b9964bdc2d1d4e8b456e", "FN_WAFFLE", itemId, "mod_pistol_grip");
        SpaceApi.AddonTraderAssortSale("FN_GL40_BLACK_FS", "5bc09a30d4351e00367fb7c8", "FN_WAFFLE", itemId, "mod_sight_front");
        SpaceApi.AddonTraderAssortSale("FN_GL40_BLACK_RS", "5bc09a18d4351e003562b68e", "FN_WAFFLE", itemId, "mod_sight_rear");
    }
}

module.exports = FN_GL40_BLACK;