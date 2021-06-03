"use strict";

const HE109_57_28 = require("./src/HE109_57_28.js");
const FIVE_SEVEN_FDE_SLIDE = require("./src/FIVE_SEVEN_FDE_SLIDE.js");
const FIVE_SEVEN_10RND = require("./src/FIVE_SEVEN_10RND.js");
const FIVE_SEVEN_50RND = require("./src/FIVE_SEVEN_50RND.js");
const FIVE_SEVEN_FRAME_RED = require("./src/FIVE_SEVEN_FRAME_RED.js");
const P90_STOCK_RED = require("./src/P90_STOCK_RED.js");
const P90_75RND = require("./src/P90_75RND.js");
const FN_WAFFLE = require("./src/FN_WAFFLE.js");
const FIVE_SEVEN_DELTA_POINT = require("./src/FIVE_SEVEN_DELTA_POINT.js");
const RMR_GREEN_TRIANGLE = require("./src/RMR_GREEN_TRIANGLE.js");
const FN_GL40_BLACK = require("./src/FN_GL40_BLACK.js");
const P90_STOCK_PINK = require("./src/P90_STOCK_PINK.js");
const P90_FLASHHIDER_PINK = require("./src/P90_FLASHHIDER_PINK.js");
const P90_BUTTPAD_PINK = require("./src/P90_BUTTPAD_PINK.js");
const P90_UPPER_PINK = require("./src/P90_UPPER_PINK.js");
const P90_RING_PINK = require("./src/P90_RING_PINK.js");
const P90_SUPPRESSOR_PINK = require("./src/P90_SUPPRESSOR_PINK.js");
const P90_CHARGE_PINK = require("./src/P90_CHARGE_PINK.js");
const LLENNS_P90 = require("./src/LLENNS_P90.js");
const P90_MAG_PINK = require("./src/P90_MAG_PINK.js");

class main {
    constructor() {
        Logger.info(`Loading: spaceman-fn_waffle`);

        ModLoader.onLoad["HE109_57_28"] = HE109_57_28.onLoadMod;
        ModLoader.onLoad["FIVE_SEVEN_FDE_SLIDE"] = FIVE_SEVEN_FDE_SLIDE.onLoadMod;
        ModLoader.onLoad["FIVE_SEVEN_10RND"] = FIVE_SEVEN_10RND.onLoadMod;
        ModLoader.onLoad["FIVE_SEVEN_50RND"] = FIVE_SEVEN_50RND.onLoadMod;
        ModLoader.onLoad["FIVE_SEVEN_FRAME_RED"] = FIVE_SEVEN_FRAME_RED.onLoadMod;
        ModLoader.onLoad["FIVE_SEVEN_DELTA_POINT"] = FIVE_SEVEN_DELTA_POINT.onLoadMod;
        ModLoader.onLoad["P90_STOCK_RED"] = P90_STOCK_RED.onLoadMod;
        ModLoader.onLoad["P90_STOCK_PINK"] = P90_STOCK_PINK.onLoadMod;
        ModLoader.onLoad["P90_BUTTPAD_PINK"] = P90_BUTTPAD_PINK.onLoadMod;
        ModLoader.onLoad["P90_FLASHHIDER_PINK"] = P90_FLASHHIDER_PINK.onLoadMod;
        ModLoader.onLoad["P90_SUPPRESSOR_PINK"] = P90_SUPPRESSOR_PINK.onLoadMod;        
        ModLoader.onLoad["P90_CHARGE_PINK"] = P90_CHARGE_PINK.onLoadMod;        
        ModLoader.onLoad["P90_MAG_PINK"] = P90_MAG_PINK.onLoadMod;        
        ModLoader.onLoad["P90_UPPER_PINK"] = P90_UPPER_PINK.onLoadMod;        
        ModLoader.onLoad["P90_RING_PINK"] = P90_RING_PINK.onLoadMod;        
        ModLoader.onLoad["P90_75RND"] = P90_75RND.onLoadMod;
        ModLoader.onLoad["RMR_GREEN_TRIANGLE"] = RMR_GREEN_TRIANGLE.onLoadMod;
        ModLoader.onLoad["FN_GL40_BLACK"] = FN_GL40_BLACK.onLoadMod;
        ModLoader.onLoad["LLENNS_P90"] = LLENNS_P90.onLoadMod;
    }
}

module.exports.fn_waffle = new FN_WAFFLE();
module.exports.main = new main();
