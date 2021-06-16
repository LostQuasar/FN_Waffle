"use strict";

const SpaceApi = require("../../spaceman-api/api");
const config = require("../config.json");

class P90_UPPER_PINK {
    static onLoadMod() {
        const itemId = "P90_UPPER_PINK";
        const itemClone = "5cc70102e4a949035e43ba74";
        const itemCategory = "5b5f764186f77447ec5d7714";
        const itemPrefabPath = "P90_UPPER_PINK/reciever_p90_fn_p90_std.bundle";
        const itemLongName = "Pink FN Upper receiver for P90";
        const itemFleaPrice = 2400;
        const itemShortName = "P90 Upper";
        const itemDescription = "A pink variant of the Regular upper receiver for P90, produced by Fabrique Nationale Herstal.";

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

module.exports = P90_UPPER_PINK;