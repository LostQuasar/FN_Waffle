"use strict";

const SpaceApi = require("../../spaceman-api/api");
const config = require("../config.json");

class RMR_GREEN_TRIANGLE {
    static onLoadMod() {
        const itemId = "RMR_GREEN_TRIANGLE";
        const itemClone = "5a32aa8bc4a2826c6e06d737";
        const itemCategory = "5b5f744786f774094242f197";
        const itemFleaPrice = 22215;
        const itemPrefabPath = "RMR_GREEN_TRIANGLE.bundle";
        const itemLongName = "Trijicon RMR Green Triangle";
        const itemShortName = "GREEN";
        const itemDescription = "RMR(Ruggedized Miniature Reflex) - Durable and lightweight compact reflex sight with a green triangle reticle.";

        let item = JsonUtil.clone(DatabaseServer.tables.templates.items[itemClone]);
        item._id = itemId;
        item._props.Prefab.path = itemPrefabPath;
        DatabaseServer.tables.templates.items[itemId] = item;
        
        if (config.debug){
            Logger.info(`Loading: ${itemId}`);
        }

        SpaceApi.AddItemCopyFilter(itemClone, itemId);
        SpaceApi.CreateHandbookItem(itemId, itemCategory, itemFleaPrice);
        SpaceApi.CreateNewItemLocale("en", itemId, itemLongName, itemShortName, itemDescription);
        SpaceApi.CreateTraderAssort(itemId, itemId, "FN_WAFFLE", itemFleaPrice, "RUB", 1, true);
    }
}
module.exports = RMR_GREEN_TRIANGLE;