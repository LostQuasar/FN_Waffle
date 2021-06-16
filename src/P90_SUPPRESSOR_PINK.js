"use strict";

const SpaceApi = require("../../spaceman-api/api");
const config = require("../config.json");

class P90_SUPPRESSOR_PINK {
    static onLoadMod() {
        const itemId = "P90_SUPPRESSOR_PINK";
        const itemClone = "5cebec00d7f00c065c53522a";
        const itemCategory = "5b5f724c86f774093f2ecf15";
        const itemPrefabPath = "P90_SUPPRESSOR_PINK.bundle";
        const itemLongName = "Pink FN Attenuator 5.7x28 silencer";
        const itemFleaPrice = 63350;
        const itemShortName = "Attenuator";
        const itemDescription = "A pink variant of the Attenuator is a 5.7x28 mm suppressor produced by Fabrique Nationale Herstal.";

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
        SpaceApi.CreateTraderAssort(itemId, itemId, "FN_WAFFLE", itemFleaPrice, "RUB", 2);
    }
}

module.exports = P90_SUPPRESSOR_PINK;