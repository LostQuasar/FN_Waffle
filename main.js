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
        ModLoader.onLoad["P90_75RND"] = P90_75RND.onLoadMod;
        ModLoader.onLoad["RMR_GREEN_TRIANGLE"] = RMR_GREEN_TRIANGLE.onLoadMod;
        ModLoader.onLoad["FN_GL40_BLACK"] = FN_GL40_BLACK.onLoadMod;
    }
}

module.exports.fn_waffle = new FN_WAFFLE();
module.exports.main = new main();
