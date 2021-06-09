"use strict";

const SpaceApi = require("../../spaceman-api/api");
const config = require("../config.json");
const items = DatabaseServer.tables.templates.items;
const traderId = "FN_WAFFLE";

class FN_WAFFLE_ASSORT {
    static onLoadMod() {
        if (config.debug) {
            Logger.info(`Loading: FN_WAFFLE_ASSORT`);
        }

        const massSellList =
        {
            "5cc80f53e4a949000e1ea4f8": 1,
            "5cc86832d7f00c000d3a6e6c": 1,
            "5cc86840d7f00c002412c56c": 1,
            "5cc80f67e4a949035e43bbba": 1,
            "5cc80f38e4a949001152b560": 1,
            "5cc80f8fe4a949033b0224a2": 1,
            "5cc80f79e4a949033c7343b2": 1,
            "5d7b6bafa4b93652786f4c76": 1,
            "5cc82d76e24e8d00134b4b83": 2,
            "5cc701aae4a949000e1ea45c": 2,
            "5cc701d7e4a94900100ac4e7": 2,
            "5cc82796e24e8d000f5859a8": 2,
            "5cc6ea78e4a949000e1ea3c1": 2,
            "5cc6ea85e4a949000e1ea3c3": 2,
            "5cc700d4e4a949000f0f0f28": 2,
            "5cc700ede4a949033c734315": 2,
            "5cc700cae4a949035e43ba72": 2,
            "5cc70093e4a949033c734312": 2,
            "5cebec00d7f00c065c53522a": 2,
            "5cc700b9e4a949000f0f0f25": 2,
            "5cc70102e4a949035e43ba74": 2,
            "5cebec10d7f00c065703d185": 2,
            "5cf7acfcd7f00c1084477cf2": 2,
            "5b0bbe4e5acfc40dc528a72d": 2,
            "5b099a765acfc47a8607efe3": 3,
            "5b7be1125acfc4001876c0e5": 3,
            "5b7be1265acfc400161d0798": 3,
            "5b7d679f5acfc4001a5c4024": 3,
            "5b7bed205acfc400161d08cc": 3,
            "5b7d671b5acfc43d82528ddd": 3,
            "5b7bedd75acfc43d825283f9": 3,
            "5b7bee755acfc400196d5383": 3,
            "5b7d678a5acfc4001a5c4022": 3,
            "5b099bb25acfc400186331e8": 3,
            "5b0bc22d5acfc47a8607f085": 3,
            "5b7be2345acfc400196d524a": 3,
            "5b7bef1e5acfc43d82528402": 3,
            "5b099ac65acfc400186331e1": 3,
            "5b7bef5d5acfc43bca7067a3": 3,
            "5b7bef9c5acfc43d102852ec": 3,
            "5b7d37845acfc400170e2f87": 3,
            "5b7c2d1d5acfc43d1028532a": 3,
            "5b7bebc85acfc43bca706666": 3,
            "5b7be1ca5acfc400170e2d2f": 3,
            "5b099a9d5acfc47a8607efe7": 3,
            "5b7d6c105acfc40015109a5f": 3,
            "5b099b965acfc400186331e6": 3,
            "5b7d64555acfc4001876c8e2": 3,
            "5b099bf25acfc4001637e683": 3,
            "5b7d63cf5acfc4001876c8df": 3,
            "5b7d645e5acfc400170e2f90": 3,
            "5b7d63b75acfc400170e2f8a": 3,
            "5b7d63de5acfc400170e2f8d": 3,
            "5ede474b0c226a66f5402622": 4,
            "5ede475b549eed7c6d5c18fb": 4,
            "5ede4739e0350d05467f73e8": 4,
            "5f0c892565703e5c461894e9": 4,
            "5ede47405b097655935d7d16": 4,
            "5ede475339ee016e8c534742": 4
        }


        const fiveSevenBlkPrice = SpaceApi.GetPriceOfList(["5d3eb3b0a4b93615055e84d2", "5d3eb5eca4b9363b1f22f8e4", "5d3eb5b6a4b9361eab311902", "5d3eb44aa4b93650d64e4979", "5d3eb536a4b9363b1f22f8e2", "5d3eb4aba4b93650d64e497d"])
        SpaceApi.CreateTraderAssort("FIVE_SEVEN_FRAME_BLK", "5d3eb3b0a4b93615055e84d2", traderId, fiveSevenBlkPrice, "RUB", 1);
        SpaceApi.AddonTraderAssortSale("FIVE_SEVEN_20RND_BLK", "5d3eb5eca4b9363b1f22f8e4", traderId, "FIVE_SEVEN_FRAME_BLK", "mod_magazine");
        SpaceApi.AddonTraderAssortSale("FIVE_SEVEN_BARREL_BLK", "5d3eb5b6a4b9361eab311902", traderId, "FIVE_SEVEN_FRAME_BLK", "mod_barrel");
        SpaceApi.AddonTraderAssortSale("FIVE_SEVEN_SLIDE_BLK", "5d3eb44aa4b93650d64e4979", traderId, "FIVE_SEVEN_FRAME_BLK", "mod_reciever");
        SpaceApi.AddonTraderAssortSale("FIVE_SEVEN_FS_BLACK", "5d3eb536a4b9363b1f22f8e2", traderId, "FIVE_SEVEN_SLIDE_BLK", "mod_sight_front");
        SpaceApi.AddonTraderAssortSale("FIVE_SEVEN_RS_BLACK", "5d3eb4aba4b93650d64e497d", traderId, "FIVE_SEVEN_SLIDE_BLK", "mod_sight_rear");

        const fiveSevenFdePrice = SpaceApi.GetPriceOfList(["5d67abc1a4b93614ec50137f", "5d3eb5eca4b9363b1f22f8e4", "5d3eb5b6a4b9361eab311902", "5d3eb44aa4b93650d64e4979", "5d3eb536a4b9363b1f22f8e2", "5d3eb4aba4b93650d64e497d"]);
        SpaceApi.CreateTraderAssort("FIVE_SEVEN_FRAME_FDE", "5d67abc1a4b93614ec50137f", traderId, fiveSevenFdePrice, "RUB", 1);
        SpaceApi.AddonTraderAssortSale("FIVE_SEVEN_20RND_FDE", "5d3eb5eca4b9363b1f22f8e4", traderId, "FIVE_SEVEN_FRAME_FDE", "mod_magazine");
        SpaceApi.AddonTraderAssortSale("FIVE_SEVEN_BARREL_FDE", "5d3eb5b6a4b9361eab311902", traderId, "FIVE_SEVEN_FRAME_FDE", "mod_barrel");

        const fiveSevenThreadedPrice = SpaceApi.GetPriceOfList(["5d3eb59ea4b9361c284bb4b2", "5d3ef698a4b9361182109872"]);
        SpaceApi.CreateTraderAssort("FIVE_SEVEN_THREADED_BARREL", "5d3eb59ea4b9361c284bb4b2", traderId, fiveSevenThreadedPrice, "RUB", 1);
        SpaceApi.AddonTraderAssortSale("FIVE_SEVEN_SILENCER", "5d3ef698a4b9361182109872", traderId, "FIVE_SEVEN_THREADED_BARREL", "mod_muzzle");


        const gl40Price = SpaceApi.GetPriceOfList(["5e81ebcd8e146c7080625e15", "571659bb2459771fb2755a12", "5c18b90d2e2216152142466b", "5c18b9192e2216398b5a8104"]);
        SpaceApi.CreateTraderAssort("FN_GL40", "5e81ebcd8e146c7080625e15", traderId, gl40Price, "RUB", 4);
        SpaceApi.AddonTraderAssortSale("FN_GL40_PG", "571659bb2459771fb2755a12", traderId, "FN_GL40", "mod_pistol_grip");
        SpaceApi.AddonTraderAssortSale("FN_GL40_FS", "5c18b90d2e2216152142466b", traderId, "FN_GL40", "mod_sight_front");
        SpaceApi.AddonTraderAssortSale("FN_GL40_RS", "5c18b9192e2216398b5a8104", traderId, "FN_GL40", "mod_sight_rear");


        for (var item in massSellList) {
            SpaceApi.CreateTraderAssort(item + "_fn_waffle", item, traderId, items[item]._props.CreditsPrice, "RUB", massSellList[item]);
        }
    }
}

module.exports = FN_WAFFLE_ASSORT;