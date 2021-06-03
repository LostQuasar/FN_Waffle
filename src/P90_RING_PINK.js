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

        SpaceApi.AddItemSlotFilter("5cf7acfcd7f00c1084477cf2", itemId, SpaceApi.FindSlotIndex("5cf7acfcd7f00c1084477cf2", "mod_mount_000"));
        SpaceApi.AddItemSlotFilter("5cc70102e4a949035e43ba74", itemId, SpaceApi.FindSlotIndex("5cc70102e4a949035e43ba74", "mod_mount_000"));
        SpaceApi.AddItemSlotFilter("P90_UPPER_PINK", itemId, SpaceApi.FindSlotIndex("P90_UPPER_PINK", "mod_mount_000"));

        SpaceApi.CreateHandbookItem(itemId, itemCategory, itemFleaPrice);
        SpaceApi.CreateNewItemLocale("en", itemId, itemLongName, itemShortName, itemDescription);
    }
}

module.exports = P90_RING_PINK;