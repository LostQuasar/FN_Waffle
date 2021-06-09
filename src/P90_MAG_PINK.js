"use strict";

const SpaceApi = require("../../spaceman-api/api");
const config = require("../config.json");

class P90_MAG_PINK {
    static onLoadMod() {
        const itemId = "P90_MAG_PINK";
        const itemClone = "5cc70093e4a949033c734312";
        const itemCategory = "5b5f754a86f774094242f19b";
        const itemPrefabPath = "P90_MAG_PINK.bundle";
        const itemLongName = "Pink FN magazine for P90, 50-round capacity";
        const itemFleaPrice = 10500;
        const itemShortName = "FN reg.";
        const itemDescription = "A pink variant of the 50-round polymer magazine for 5.7x28 mm P90.";

        if (config.debug){
            Logger.info(`Loading: ${itemId}`);
        }

        let item = JsonUtil.clone(DatabaseServer.tables.templates.items[itemClone]);
        item._id = itemId;
        item._props.Prefab.path = itemPrefabPath;
        DatabaseServer.tables.templates.items[itemId] = item;
        
        SpaceApi.PlaceItemSlotsFilteredBy(itemClone, itemId);
        SpaceApi.CreateHandbookItem(itemId, itemCategory, itemFleaPrice);
        SpaceApi.CreateNewItemLocale("en", itemId, itemLongName, itemShortName, itemDescription);
    }
}

module.exports = P90_MAG_PINK;