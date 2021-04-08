"use strict";

class FIVE_SEVEN_FRAME_RED{
    static onLoadMod(){
        const main = require('../main')

        const itemId = "040721_FIVE_SEVEN_FRAME_RED0";
        const itemClone = "5d3eb3b0a4b93615055e84d2";
        const itemCategory = "5b5f757486f774093e6cb507";
        const itemPrefabPath = "FIVE_SEVEN_FRAME_RED/weapon_fn_five_seven_57x28_fde_container.bundle";
        const itemLongName = "FN Five-seveN MK2 Red Frame 5.7x28 pistol";
        const itemFleaPrice = 14238;
        const itemShortName = "FN 5-7 Red";
        const itemDescription = "The FN Five-seven, trademarked as the Five-seveN, is a semi-automatic pistol designed and manufactured by FN Herstal in Belgium. Model with a Red frame.";

        let item = JsonUtil.clone(DatabaseServer.tables.templates.items[itemClone]);

        // change item properties
        item._id = itemId;
        item._props.Prefab.path = itemPrefabPath;
        item._props.weapFireType.push("fullauto");
        item._props.bFirerate = 650;
        // add item back to database
        DatabaseServer.tables.templates.items[itemId] = item;
        
        main.createItemHandbookEntry(itemId, itemCategory, itemFleaPrice);
        main.createItemLocale(itemId, itemLongName, itemShortName, itemDescription);
    }
}

module.exports = FIVE_SEVEN_FRAME_RED;