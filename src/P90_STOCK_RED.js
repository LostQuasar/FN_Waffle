"use strict";

class P90_STOCK_RED{
    static onLoadMod(){
        const main = require('../main')

        var supportedWeapons = {
            P90: "5cc82d76e24e8d00134b4b83"
        }

        const itemId = "040721_P90_STOCK_RED0";
        const itemClone = "5cc700b9e4a949000f0f0f25";
        const itemCategory = "5b5f757486f774093e6cb507";
        const itemPrefabPath = "P90_STOCK_RED.bundle";
        const itemLongName = "Red FN P90 stock";
        const itemFleaPrice = 3500;
        const itemShortName = "Red FN P90 stock";
        const itemDescription = "A red varient of the regular polymer P90 stock produced by Fabrique Nationale Herstal.";

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
    }
}

module.exports = P90_STOCK_RED;