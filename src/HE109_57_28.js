"use strict";

const SpaceApi = require("../../spaceman-api/api");
const config = require("../config.json");

class HE109_57_28 {
    static onLoadMod() {
        const itemId = "033021_HE1095728_0";
        const itemClone = "5cc80f38e4a949001152b560";
        const itemCategory = "5b47574386f77428ca22b33b";
        const itemFleaPrice = 540;
        const itemPrefabPath = "HE109_57_28.bundle";
        const itemLongName = "5.7x28 mm HE109";
        const itemShortName = "HE109";
        const itemDescription = "An explosive round for the 5.7x27mm Caliber. Careful, it tends to be unstable.";

        if (config.debug){
            Logger.info(`Loading: ${itemId}`);
        }

        let item = JsonUtil.clone(DatabaseServer.tables.templates.items[itemClone]);
        item._id = itemId;
        item._props.HasGrenaderComponent = true;
        item._props.PenetrationChance = 0.6;
        item._props.RicochetChance = 0.32;
        item._props.FuzeArmTimeSec = 0;
        item._props.ammoRec = 25;
        item._props.ExplosionStrength = 5;
        item._props.MinExplosionDistance = 1;
        item._props.MaxExplosionDistance = 4;
        item._props.FragmentsCount = 8;
        item._props.FragmentType = "5996f6d686f77467977ba6cc";
        item._props.ShowHitEffectOnExplode = true;
        item._props.ExplosionType = "big_round_impact";
        item._props.Prefab.path = itemPrefabPath;
        DatabaseServer.tables.templates.items[item._id] = item;

        SpaceApi.AddItemCopyFilter(itemClone, itemId);
        SpaceApi.CreateHandbookItem(itemId, itemCategory, itemFleaPrice);
        SpaceApi.CreateNewItemLocale("en", itemId, itemLongName, itemShortName, itemDescription);
        SpaceApi.CreateTraderAssort(itemId, itemId, "FN_WAFFLE", itemFleaPrice, "RUB", 2, true)
    }
}
module.exports = HE109_57_28;
