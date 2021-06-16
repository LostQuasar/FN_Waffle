"use strict";

const SpaceApi = require("../../spaceman-api/api");
const config = require("../config.json");

class FIVE_SEVEN_FDE_SLIDE {
    static onLoadMod() {
        const itemId = "040121_FIVE_SEVEN_FDE_SLIDE0";
        const itemClone = "5d3eb44aa4b93650d64e4979";
        const itemCategory = "5b5f764186f77447ec5d7714";
        const itemPrefabPath = "FIVE_SEVEN_FDE_SLIDE.bundle";
        const itemLongName = "Five-seveN MK2 FDE pistol slide";
        const itemFleaPrice = 4210;
        const itemShortName = "57 Slide";
        const itemDescription = "FDE slide for Five-seveN MK2, product by Fabrique Nationale of Herstal.";

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

        SpaceApi.AddonTraderAssortSale("FIVE_SEVEN_SLIDE_FDE", itemId, "FN_WAFFLE", "FIVE_SEVEN_FRAME_FDE","mod_reciever");
        SpaceApi.AddonTraderAssortSale("FIVE_SEVEN_FS_FDE", "5d3eb536a4b9363b1f22f8e2", "FN_WAFFLE", "FIVE_SEVEN_SLIDE_FDE", "mod_sight_front");
        SpaceApi.AddonTraderAssortSale("FIVE_SEVEN_RS_FDE", "5d3eb4aba4b93650d64e497d", "FN_WAFFLE", "FIVE_SEVEN_SLIDE_FDE", "mod_sight_rear");
    }
}

module.exports = FIVE_SEVEN_FDE_SLIDE;