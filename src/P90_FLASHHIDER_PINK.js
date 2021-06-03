"use strict";

const SpaceApi = require("../../spaceman-api/api");
const config = require("../config.json");

class P90_FLASHHIDER_PINK {
    static onLoadMod() {
        const itemId = "P90_FLASHHIDER_PINK";
        const itemClone = "5cc82796e24e8d000f5859a8";
        const itemCategory = "5b5f724c86f774093f2ecf15";
        const itemPrefabPath = "P90_FLASHHIDER_PINK.bundle";
        const itemLongName = "Pink FN P90 5.7x28 flash hider";
        const itemFleaPrice = 1600;
        const itemShortName = "P90 FH";
        const itemDescription = "A pink variant of the Regular P90 flash hider, produced by Fabrique Nationale Herstal.";

        if (config.debug){
            Logger.info(`Loading: ${itemId}`);
        }

        let item = JsonUtil.clone(DatabaseServer.tables.templates.items[itemClone]);
        item._id = itemId;
        item._props.Prefab.path = itemPrefabPath;
        DatabaseServer.tables.templates.items[itemId] = item;

        SpaceApi.AddItemSlotFilter("5cc701aae4a949000e1ea45c", itemId, SpaceApi.FindSlotIndex("5cc701aae4a949000e1ea45c", "mod_muzzle"));

        SpaceApi.CreateHandbookItem(itemId, itemCategory, itemFleaPrice);
        SpaceApi.CreateNewItemLocale("en", itemId, itemLongName, itemShortName, itemDescription);
    }
}

module.exports = P90_FLASHHIDER_PINK;