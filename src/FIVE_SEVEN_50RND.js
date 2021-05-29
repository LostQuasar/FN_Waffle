"use strict";

const SpaceApi = require("../../spaceman-api/api");
const config = require("../config.json");

class FIVE_SEVEN_50RND {
    static onLoadMod() {
        const itemId = "033021_FIVESEVEN_50RND0";
        const itemClone = "5a718f958dc32e00094b97e7";
        const itemCategory = "5b5f754a86f774094242f19b";
        const itemFleaPrice = 8661;
        const itemPrefabPath = "FIVE_SEVEN_50RND.bundle";
        const itemLongName = "Five-seveN 50-Round 5.7x28 magazine";
        const itemShortName = "5.7x28 57";
        const itemDescription = "A Drum 50-round 5.7x28 magazine for Five-seveN.";

        if (config.debug){
            Logger.info(`Loading: ${itemId}`);
        }

        let item = JsonUtil.clone(DatabaseServer.tables.templates.items[itemClone]);
        item._id = itemId;
        item._props.Cartridges[0]._id = "5d3eb5eca4b9363b1f22f8e6";
        item._props.Cartridges[0]._parent = "5d3eb5eca4b9363b1f22f8e4";
        item._props.Cartridges[0]._props.filters[0].Filter[0] = "5cc80f53e4a949000e1ea4f8";
        item._props.Cartridges[0]._props.filters[0].Filter[1] = "5cc86832d7f00c000d3a6e6c";
        item._props.Cartridges[0]._props.filters[0].Filter[2] = "5cc86840d7f00c002412c56c";
        item._props.Cartridges[0]._props.filters[0].Filter[3] = "5cc80f67e4a949035e43bbba";
        item._props.Cartridges[0]._props.filters[0].Filter[4] = "5cc80f38e4a949001152b560";
        item._props.Cartridges[0]._props.filters[0].Filter[5] = "5cc80f8fe4a949033b0224a2";
        item._props.Cartridges[0]._props.filters[0].Filter[6] = "5cc80f79e4a949033c7343b2";
        item._props.Cartridges[0]._props.filters[0].Filter[7] = "033021_HE1095728_0";
        item._props.Prefab.path = itemPrefabPath;
        DatabaseServer.tables.templates.items[itemId] = item;

        SpaceApi.AddItemSlotFilter("5d3eb3b0a4b93615055e84d2", itemId, SpaceApi.FindSlotIndex("5d3eb3b0a4b93615055e84d2", "mod_magazine"));
        SpaceApi.AddItemSlotFilter("5d67abc1a4b93614ec50137f", itemId, SpaceApi.FindSlotIndex("5d67abc1a4b93614ec50137f", "mod_magazine"));

        SpaceApi.CreateHandbookItem(itemId, itemCategory, itemFleaPrice);
        SpaceApi.CreateNewItemLocale("en", itemId, itemLongName, itemShortName, itemDescription);

        SpaceApi.CreateTraderAssort(itemId, itemId, "FN_WAFFLE", itemFleaPrice, "RUB", 2, true);
    }
}

module.exports = FIVE_SEVEN_50RND;