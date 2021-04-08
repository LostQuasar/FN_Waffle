"use strict";

class P90_75RND{
    static onLoadMod(){
        const main = require('../main')

        var supportedWeapons = {
            P90: "5cc82d76e24e8d00134b4b83"
        }

        const itemId = "040721_P90_75RND0";
        const itemClone = "5cc70093e4a949033c734312";
        const itemCategory = "5b5f754a86f774094242f19b";
        const itemPrefabPath = "P90_75RND.bundle";
        const itemLongName = "FN magazine for P90, 75-round capacity";
        const itemFleaPrice = 15500;
        const itemShortName = "P90 75RND";
        const itemDescription = "75-round polymer magazine for 5.7x28 mm P90.";

        // add to frames
        for (var weapon in supportedWeapons){
            let currentWeapon = JsonUtil.clone(DatabaseServer.tables.templates.items[supportedWeapons[weapon]]);
            currentWeapon._props.Slots[0]._props.filters[0].Filter.push(itemId);
            DatabaseServer.tables.templates.items[supportedWeapons[weapon]] = currentWeapon;
        };

        let item = JsonUtil.clone(DatabaseServer.tables.templates.items[itemClone]);

        // change item properties
        item._id = itemId;
        item._props.Cartridges[0]._max_count = 75
        item._props.Prefab.path = itemPrefabPath;

        // add item back to database
        DatabaseServer.tables.templates.items[itemId] = item;
        
        main.createItemHandbookEntry(itemId, itemCategory, itemFleaPrice);
        main.createItemLocale(itemId, itemLongName, itemShortName, itemDescription);
    }
}

module.exports = P90_75RND;