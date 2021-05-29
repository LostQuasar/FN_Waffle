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

        SpaceApi.CreateHandbookItem(itemId, itemCategory, itemFleaPrice);
        SpaceApi.CreateNewItemLocale("en", itemId, itemLongName, itemShortName, itemDescription);
        SpaceApi.CreateTraderAssort(itemId, itemId, "FN_WAFFLE", itemFleaPrice, "RUB", 1, true);

        SpaceApi.AddItemSlotFilter("5a33b2c9c4a282000c5a9511", itemId, SpaceApi.FindSlotIndex("5a33b2c9c4a282000c5a9511", "mod_scope"));
        SpaceApi.AddItemSlotFilter("5a32aa0cc4a28232996e405f", itemId, SpaceApi.FindSlotIndex("5a32aa0cc4a28232996e405f", "mod_scope"));
        SpaceApi.AddItemSlotFilter("5a33bab6c4a28200741e22f8", itemId, SpaceApi.FindSlotIndex("5a33bab6c4a28200741e22f8", "mod_scope"));
        SpaceApi.AddItemSlotFilter("5a33b652c4a28232996e407c", itemId, SpaceApi.FindSlotIndex("5a33b652c4a28232996e407c", "mod_scope"));
        SpaceApi.AddItemSlotFilter("5a71e4f48dc32e001207fb26", itemId, SpaceApi.FindSlotIndex("5a71e4f48dc32e001207fb26", "mod_scope"));
        SpaceApi.AddItemSlotFilter("5d7b6bafa4b93652786f4c76", itemId, SpaceApi.FindSlotIndex("5d7b6bafa4b93652786f4c76", "mod_scope"));
        SpaceApi.AddItemSlotFilter("5a71e22f8dc32e00094b97f4", itemId, SpaceApi.FindSlotIndex("5a71e22f8dc32e00094b97f4", "mod_scope"));
    }
}
module.exports = RMR_GREEN_TRIANGLE;