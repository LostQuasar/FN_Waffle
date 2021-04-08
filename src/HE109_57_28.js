"use strict";

class HE109_57_28{
    static onLoadMod(){      
        const main = require('../main')

        var supportedWeapons = {
            FDE_FIVE_SEVEN: "5d3eb3b0a4b93615055e84d2", 
            BLK_FIVE_SEVEN: "5d67abc1a4b93614ec50137f",
            P90: "5cc82d76e24e8d00134b4b83"
        }
        var supportedMags = {
            FIVE_SEVEN_20RND: "5d3eb5eca4b9363b1f22f8e4", 
            P90_MAG: "5cc70093e4a949033c734312"
        }

        const itemId = "033021_HE1095728_0";
        const itemClone = "5cc80f38e4a949001152b560";
        const itemCategory = "5b47574386f77428ca22b33b";
        const itemFleaPrice = 540;
        const itemPrefabPath = "HE109_57_28.bundle";
        const itemLongName = "5.7x28 mm HE109";
        const itemShortName = "HE109";
        const itemDescription = "An explosive round for the 5.7x27mm Caliber. Careful, it tends to be unstable.";
        
        let itemObject = JsonUtil.clone(DatabaseServer.tables.templates.items[itemClone]);

        // change item properties
        itemObject._id = itemId;
        itemObject._props.HasGrenaderComponent = true;
        itemObject._props.PenetrationChance = 0.6;
        itemObject._props.RicochetChance = 0.32;
        itemObject._props.FuzeArmTimeSec = 0;
        itemObject._props.ammoRec = 25;
        itemObject._props.ExplosionStrength = 5;
        itemObject._props.MinExplosionDistance = 1;
        itemObject._props.MaxExplosionDistance = 4;
        itemObject._props.FragmentsCount = 8;
        itemObject._props.FragmentType = "5996f6d686f77467977ba6cc";
        itemObject._props.ShowHitEffectOnExplode = true;
        itemObject._props.ExplosionType = "big_round_impact";
        itemObject._props.Prefab.path = itemPrefabPath;
        DatabaseServer.tables.templates.items[itemObject._id] = itemObject;

        for (var weapon in supportedWeapons){
            let currentWeapon = JsonUtil.clone(DatabaseServer.tables.templates.items[supportedWeapons[weapon]]);
            currentWeapon._props.Chambers[0]._props.filters[0].Filter.push(itemId);
            DatabaseServer.tables.templates.items[supportedWeapons[weapon]] = currentWeapon;
        };
    
        for (var mag in supportedMags){
            let currentMag = JsonUtil.clone(DatabaseServer.tables.templates.items[supportedMags[mag]]);
            currentMag._props.Cartridges[0]._props.filters[0].Filter.push(itemId);
            DatabaseServer.tables.templates.items[supportedMags[mag]] = currentMag;
        };

        // pass info to functions bellow
        main.createItemHandbookEntry(itemId, itemCategory, itemFleaPrice);
        main.createItemLocale(itemId, itemLongName, itemShortName, itemDescription);
    }
}
module.exports = HE109_57_28;
