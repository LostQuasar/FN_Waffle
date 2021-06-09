"use strict";

const SpaceApi = require("../../spaceman-api/api");
const config = require("../config.json");

class FIVE_SEVEN_10RND {
    static onLoadMod() {
        const itemId = "033021_FIVESEVEN_10RND0";
        const itemClone = "5d3eb5eca4b9363b1f22f8e4";
        const itemCategory = "5b5f754a86f774094242f19b";
        const itemFleaPrice = 6400;
        const itemPrefabPath = "FIVE_SEVEN_10RND.bundle";
        const itemLongName = "Five-seveN 10-Round 5.7x28 magazine";
        const itemShortName = "5.7x28 57";
        const itemDescription = "State-Compliant 10-round 5.7x28 magazine for Five-seveN.";

        if (config.debug){
            Logger.info(`Loading: ${itemId}`);
        }

        let item = JsonUtil.clone(DatabaseServer.tables.templates.items[itemClone]);
        item._id = itemId;
        item._props.Cartridges[0]._max_count = 10;
        DatabaseServer.tables.templates.items[itemId] = item;

        SpaceApi.PlaceItemSlotsFilteredBy(itemClone, itemId);
        SpaceApi.CreateHandbookItem(itemId, itemCategory, itemFleaPrice);
        SpaceApi.CreateNewItemLocale("en", itemId, itemLongName, itemShortName, itemDescription);
        SpaceApi.CreateTraderAssort(itemId, itemId, "FN_WAFFLE", itemFleaPrice, "RUB", 1, true);
    }
}
module.exports = FIVE_SEVEN_10RND;