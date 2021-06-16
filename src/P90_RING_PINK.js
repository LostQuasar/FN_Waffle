"use strict";

const SpaceApi = require("../../spaceman-api/api");
const config = require("../config.json");

class P90_RING_PINK {
    static onLoadMod() {
        const itemId = "P90_RING_PINK";
        const itemClone = "5cebec38d7f00c00110a652a";
        const itemCategory = "5b5f742686f774093e6cb4ff";
        const itemPrefabPath = "P90_RING_PINK.bundle";
        const itemLongName = "Pink FN Ring sight reflex sight";
        const itemFleaPrice = 15500;
        const itemShortName = "Ring";
        const itemDescription = "A pink variant of the Ring sight is a reflex sight produced by Fabrique Nationale Herstal.";

        if (config.debug){
            Logger.info(`Loading: ${itemId}`);
        }

        let item = JsonUtil.clone(DatabaseServer.tables.templates.items[itemClone]);
        item._id = itemId;
        item._props.Prefab.path = itemPrefabPath;
        DatabaseServer.tables.templates.items[itemId] = item;

        SpaceApi.AddItemCopyFilter(itemClone, itemId);
        SpaceApi.CreateHandbookItem(itemId, itemCategory, itemFleaPrice);
        SpaceApi.CreateNewItemLocale("en", itemId, itemLongName, itemShortName, itemDescription);
    }
}

module.exports = P90_RING_PINK;