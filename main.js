"use strict";
const HE109_57_28 = require("./src/HE109_57_28.js");
const FIVE_SEVEN_FDE_SLIDE = require("./src/FIVE_SEVEN_FDE_SLIDE.js");
const FIVE_SEVEN_10RND = require("./src/FIVE_SEVEN_10RND.js");
const FIVE_SEVEN_50RND = require("./src/FIVE_SEVEN_50RND.js");
const FIVE_SEVEN_FRAME_RED = require("./src/FIVE_SEVEN_FRAME_RED.js")
const P90_STOCK_RED = require("./src/P90_STOCK_RED.js")
const P90_75RND = require("./src/P90_75RND.js")
const FN_WAFFLE = require("./src/FN_WAFFLE.js");

class main{
    constructor(){
        Logger.info(`Loading: HE109_57_28`);
        ModLoader.onLoad["HE109_57_28"] = HE109_57_28.onLoadMod; 
        Logger.info(`Loading: FIVE_SEVEN_FDE_SLIDE`);
        ModLoader.onLoad["FIVE_SEVEN_FDE_SLIDE"] = FIVE_SEVEN_FDE_SLIDE.onLoadMod; 
        Logger.info(`Loading: FIVE_SEVEN_10RND`);
        ModLoader.onLoad["FIVE_SEVEN_10RND"] = FIVE_SEVEN_10RND.onLoadMod; 
        Logger.info(`Loading: FIVE_SEVEN_50RND`);
        ModLoader.onLoad["FIVE_SEVEN_50RND"] = FIVE_SEVEN_50RND.onLoadMod; 
        Logger.info(`Loading: FIVE_SEVEN_FRAME_RED`);
        ModLoader.onLoad["FIVE_SEVEN_FRAME_RED"] = FIVE_SEVEN_FRAME_RED.onLoadMod; 
        Logger.info(`Loading: P90_STOCK_RED`);
        ModLoader.onLoad["P90_STOCK_RED"] = P90_STOCK_RED.onLoadMod; 
        Logger.info(`Loading: P90_75RND`);
        ModLoader.onLoad["P90_75RND"] = P90_75RND.onLoadMod; 
    }

    static createItemHandbookEntry(i_id, i_category, i_fprice){
        // add item to handbook
        DatabaseServer.tables.templates.handbook.Items.push({
            "Id": i_id,
            "ParentId": i_category,
            "Price": i_fprice
        });
    }

    static createItemLocale(i_id, i_lname, i_sname, i_desc){
        for (const localeID in DatabaseServer.tables.locales.global)
        {
            DatabaseServer.tables.locales.global[localeID].templates[i_id] = {
                "Name": i_lname,
                "ShortName": i_sname,
                "Description": i_desc
            }
        }
    }

} 

module.exports.main = new main();
module.exports.fn_waffle = new FN_WAFFLE();
module.exports.createItemHandbookEntry = (i_id, i_category, i_fprice) => main.createItemHandbookEntry(i_id, i_category, i_fprice);
module.exports.createItemLocale = (i_id, i_lname, i_sname, i_desc) => main.createItemLocale(i_id, i_lname, i_sname, i_desc);
