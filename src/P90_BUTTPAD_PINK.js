"use strict";

const SpaceApi = require("../../spaceman-api/api");
const config = require("../config.json");

class P90_BUTTPAD_PINK {
    static onLoadMod() {
        const itemId = "P90_BUTTPAD_PINK";
        const itemClone = "5cc700cae4a949035e43ba72";
        const itemCategory = "5b5f757486f774093e6cb507";
        const itemPrefabPath = "P90_BUTTPAD_PINK.bundle";
        const itemLongName = "Pink FN Butt pad for P90";
        const itemFleaPrice = 2250;
        const itemShortName = "P90 butt";
        const itemDescription = "A pink variant of the Regular butt-pad for P90, produced by Fabrique Nationale Herstal.";

        if (config.debug){
            Logger.info(`Loading: ${itemId}`);
        }

        let item = JsonUtil.clone(DatabaseServer.tables.templates.items[itemClone]);
        item._id = itemId;
        item._props.Prefab.path = itemPrefabPath;
        DatabaseServer.tables.templates.items[itemId] = item;

        SpaceApi.AddItemSlotFilter("P90_STOCK_PINK", itemId, SpaceApi.FindSlotIndex("P90_STOCK_PINK", "mod_stock_000"));
        SpaceApi.AddItemSlotFilter("040721_P90_STOCK_RED0", itemId, SpaceApi.FindSlotIndex("040721_P90_STOCK_RED0", "mod_stock_000"));
        SpaceApi.AddItemSlotFilter("5cc700b9e4a949000f0f0f25", itemId, SpaceApi.FindSlotIndex("5cc700b9e4a949000f0f0f25", "mod_stock_000"));
        SpaceApi.AddItemSlotFilter("5cebec10d7f00c065703d185", itemId, SpaceApi.FindSlotIndex("5cebec10d7f00c065703d185", "mod_stock_000"));

        SpaceApi.CreateHandbookItem(itemId, itemCategory, itemFleaPrice);
        SpaceApi.CreateNewItemLocale("en", itemId, itemLongName, itemShortName, itemDescription);
    }
}

module.exports = P90_BUTTPAD_PINK;