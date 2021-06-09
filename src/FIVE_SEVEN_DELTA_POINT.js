"use strict";

const SpaceApi = require("../../spaceman-api/api");
const config = require("../config.json");

class FIVE_SEVEN_DELTA_POINT {
    static onLoadMod() {
        const itemId = "041921_FIVE_SEVEN_DELTA_POINT0";
        const itemClone = "5d7b6bafa4b93652786f4c76";
        const itemCategory = "5b5f755f86f77447ec5d770e";
        //const itemPrefabPath = "FIVE_SEVEN_DELTA_POINT.bundle";
        const itemLongName = "FN Deltapoint Mount for 5-7 Mk.2";
        const itemFleaPrice = 1625;
        const itemShortName = "57 DP";
        const itemDescription = "Fabrique Nationale herstal Leupold DeltaPoint sight mount.";

        if (config.debug){
            Logger.info(`Loading: ${itemId}`);
        }

        let item = JsonUtil.clone(DatabaseServer.tables.templates.items[itemClone]);
        item._id = itemId;
        //item._props.Prefab.path = itemPrefabPath;
        item._props.Slots[0]._props.filters[0].Filter = ["58d268fc86f774111273f8c2"];
        DatabaseServer.tables.templates.items[itemId] = item;

        SpaceApi.PlaceItemSlotsFilteredBy(itemClone, itemId);
        SpaceApi.CreateHandbookItem(itemId, itemCategory, itemFleaPrice);
        SpaceApi.CreateNewItemLocale("en", itemId, itemLongName, itemShortName, itemDescription);

        SpaceApi.CreateTraderAssort(itemId, itemId, "FN_WAFFLE", itemFleaPrice + DatabaseServer.tables.templates.items["58d268fc86f774111273f8c2"]._props.CreditsPrice, "RUB", 1, true);
        SpaceApi.AddonTraderAssortSale("DELTA_POINT","58d268fc86f774111273f8c2","FN_WAFFLE", itemId, "mod_scope");
    }
}

module.exports = FIVE_SEVEN_DELTA_POINT;