"use strict";

const SpaceApi = require("../../spaceman-api/api");
const config = require("../config.json");

class P90_CHARGE_PINK {
    static onLoadMod() {
        const itemId = "P90_CHARGE_PINK";
        const itemClone = "5cebec00d7f00c065c53522a";
        const itemCategory = "5b5f724c86f774093f2ecf15";
        const itemPrefabPath = "P90_CHARGE_PINK.bundle";
        const itemLongName = "Pink FN charge handle for P90";
        const itemFleaPrice = 1600;
        const itemShortName = "FN Chrg.";
        const itemDescription = "A pink variant of the Regular charging handle for P90, produced by Fabrique Nationale Herstal.";

        if (config.debug){
            Logger.info(`Loading: ${itemId}`);
        }

        let item = JsonUtil.clone(DatabaseServer.tables.templates.items[itemClone]);
        item._id = itemId;
        item._props.Prefab.path = itemPrefabPath;
        DatabaseServer.tables.templates.items[itemId] = item;

        SpaceApi.AddItemSlotFilter("5cc82d76e24e8d00134b4b83", itemId, SpaceApi.FindSlotIndex("5cc82d76e24e8d00134b4b83", "mod_charge"));

        SpaceApi.CreateHandbookItem(itemId, itemCategory, itemFleaPrice);
        SpaceApi.CreateNewItemLocale("en", itemId, itemLongName, itemShortName, itemDescription);
    }
}

module.exports = P90_CHARGE_PINK;