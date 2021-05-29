"use strict";

const SpaceApi = require("../../spaceman-api/api");
const config = require("../config.json");

class P90_75RND {
    static onLoadMod() {
        const itemId = "040721_P90_75RND0";
        const itemClone = "5cc70093e4a949033c734312";
        const itemCategory = "5b5f754a86f774094242f19b";
        const itemPrefabPath = "P90_75RND.bundle";
        const itemLongName = "FN magazine for P90, 75-round capacity";
        const itemFleaPrice = 15500;
        const itemShortName = "P90 75RND";
        const itemDescription = "75-round polymer magazine for 5.7x28 mm P90.";

        if (config.debug){
            Logger.info(`Loading: ${itemId}`);
        }

        let item = JsonUtil.clone(DatabaseServer.tables.templates.items[itemClone]);
        item._id = itemId;
        item._props.Cartridges[0]._max_count = 75
        item._props.Prefab.path = itemPrefabPath;
        DatabaseServer.tables.templates.items[itemId] = item;

        SpaceApi.AddItemSlotFilter("5cc82d76e24e8d00134b4b83", itemId, SpaceApi.FindSlotIndex("5cc82d76e24e8d00134b4b83", "mod_magazine"))
        
        SpaceApi.CreateHandbookItem(itemId, itemCategory, itemFleaPrice);
        SpaceApi.CreateNewItemLocale("en", itemId, itemLongName, itemShortName, itemDescription);
        SpaceApi.CreateTraderAssort(itemId, itemId, "FN_WAFFLE", itemFleaPrice, "RUB", 3)
    }
}

module.exports = P90_75RND;