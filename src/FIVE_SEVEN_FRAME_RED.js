"use strict";

const SpaceApi = require("../../spaceman-api/api");
const config = require("../config.json");

class FIVE_SEVEN_FRAME_RED {
    static onLoadMod() {
        const itemId = "040721_FIVE_SEVEN_FRAME_RED0";
        const itemClone = "5d3eb3b0a4b93615055e84d2";
        const itemCategory = "5b5f792486f77447ed5636b3";
        const itemPrefabPath = "FIVE_SEVEN_FRAME_RED/weapon_fn_five_seven_57x28_fde_container.bundle";
        const itemLongName = "FN Five-seveN MK2 Red Frame 5.7x28 pistol";
        const itemFleaPrice = 29238;
        const itemShortName = "FN 5-7 Red";
        const itemDescription = "The FN Five-seven, trademarked as the Five-seveN, is a semi-automatic pistol designed and manufactured by FN Herstal in Belgium. Model with a Red frame.";

        if (config.debug){
            Logger.info(`Loading: ${itemId}`);
        }

        let item = JsonUtil.clone(DatabaseServer.tables.templates.items[itemClone]);
        item._id = itemId;
        item._props.Prefab.path = itemPrefabPath;
        item._props.weapFireType.push("fullauto");
        DatabaseServer.tables.templates.items[itemId] = item;

        SpaceApi.CreateHandbookItem(itemId, itemCategory, itemFleaPrice);
        SpaceApi.CreateNewItemLocale("en", itemId, itemLongName, itemShortName, itemDescription);
        const addonItems = ["5d3eb44aa4b93650d64e4979","5d3eb5eca4b9363b1f22f8e4","5d3eb5b6a4b9361eab311902","5d3eb536a4b9363b1f22f8e2","5d3eb4aba4b93650d64e497d"];
        
        var addonPrice = 0; 
        for (const currentItem in addonItems){
            addonPrice += DatabaseServer.tables.templates.items[addonItems[currentItem]]._props.CreditsPrice;
        }
        SpaceApi.CreateTraderAssort(itemId, itemId, "FN_WAFFLE", itemFleaPrice + addonPrice, "RUB", 2);
        SpaceApi.AddonTraderAssortSale("FIVE_SEVEN_SLIDE_RED", "5d3eb44aa4b93650d64e4979", "FN_WAFFLE", itemId, "mod_reciever");
        SpaceApi.AddonTraderAssortSale("FIVE_SEVEN_20RND_RED", "5d3eb5eca4b9363b1f22f8e4", "FN_WAFFLE", itemId, "mod_magazine");
        SpaceApi.AddonTraderAssortSale("FIVE_SEVEN_BARREL_RED", "5d3eb5b6a4b9361eab311902", "FN_WAFFLE", itemId, "mod_barrel");
        SpaceApi.AddonTraderAssortSale("FIVE_SEVEN_FS_RED", "5d3eb536a4b9363b1f22f8e2", "FN_WAFFLE", "FIVE_SEVEN_SLIDE_RED", "mod_sight_front");
        SpaceApi.AddonTraderAssortSale("FIVE_SEVEN_RS_RED", "5d3eb4aba4b93650d64e497d", "FN_WAFFLE", "FIVE_SEVEN_SLIDE_RED", "mod_sight_rear");
    }
}

module.exports = FIVE_SEVEN_FRAME_RED;