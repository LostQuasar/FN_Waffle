"use strict";

class FIVE_SEVEN_10RND{
    static onLoadMod(){      
        const main = require('../main')

        var supportedWeapons = {
            FDE_FIVE_SEVEN: "5d3eb3b0a4b93615055e84d2", 
            BLK_FIVE_SEVEN: "5d67abc1a4b93614ec50137f",
        }

        // base
        const itemId = "033021_FIVESEVEN_10RND0";
        const itemClone = "5d3eb5eca4b9363b1f22f8e4";
        const itemCategory = "5b5f754a86f774094242f19b";
        const itemFleaPrice = 6400;
        const itemPrefabPath = "FIVE_SEVEN_10RND.bundle";
        const itemLongName = "Five-seveN 10-Round 5.7x28 magazine";
        const itemShortName = "5.7x28 57";
        const itemDescription = "State-Compliant 10-round 5.7x28 magazine for Five-seveN.";

        // Add to frame compat
        for (var weapon in supportedWeapons){
            let currentWeapon = JsonUtil.clone(DatabaseServer.tables.templates.items[supportedWeapons[weapon]]);
            currentWeapon._props.Slots[2]._props.filters[0].Filter.push(itemId);
            DatabaseServer.tables.templates.items[supportedWeapons[weapon]] = currentWeapon;
        };

        let item = JsonUtil.clone(DatabaseServer.tables.templates.items[itemClone]);

        // change item properties
        item._id = itemId;
        item._props.Cartridges[0]._max_count = 10;

        // add item back to database
        DatabaseServer.tables.templates.items[itemId] = item;

        // add custom item names to all languages/LOCALES
        main.createItemHandbookEntry(itemId, itemCategory, itemFleaPrice);
        main.createItemLocale(itemId, itemLongName, itemShortName, itemDescription);
    }
}
module.exports = FIVE_SEVEN_10RND;