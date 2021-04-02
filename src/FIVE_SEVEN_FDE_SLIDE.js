"use strict";

class FIVE_SEVEN_FDE_SLIDE{
    static onLoadMod(){
        const main = require('../main')

        var supportedWeapons = {
            FDE_FIVE_SEVEN: "5d3eb3b0a4b93615055e84d2", 
            BLK_FIVE_SEVEN: "5d67abc1a4b93614ec50137f",
        }

        const itemId = "040121_FIVE_SEVEN_FDE_SLIDE0";
        const itemClone = "5d3eb44aa4b93650d64e4979";
        const itemCategory = "5b5f764186f77447ec5d7714";
        const itemPrefabPath = "FIVE_SEVEN_FDE_SLIDE.bundle";
        const itemLongName = "Five-seveN MK2 FDE pistol slide";
        const itemFleaPrice = 4210;
        const itemShortName = "57 Slide";
        const itemDescription = "FDE slide for Five-seveN MK2, product by Fabrique Nationale of Herstal.";

        // add to frames
        for (var weapon in supportedWeapons){
            let currentWeapon = JsonUtil.clone(DatabaseServer.tables.templates.items[supportedWeapons[weapon]]);
            currentWeapon._props.Slots[1]._props.filters[0].Filter.push(itemId);
            DatabaseServer.tables.templates.items[supportedWeapons[weapon]] = currentWeapon;
        };

        let item = JsonUtil.clone(DatabaseServer.tables.templates.items[itemClone]);

        // change item properties
        item._id = itemId;
        item._props.Prefab.path = itemPrefabPath;

        // add item back to database
        DatabaseServer.tables.templates.items[itemId] = item;
        
        main.createItemHandbookEntry(itemId, itemCategory, itemFleaPrice);
        main.createItemLocale(itemId, itemLongName, itemShortName, itemDescription);
        main.createItemOffer(itemId);
    }
}

module.exports = FIVE_SEVEN_FDE_SLIDE;