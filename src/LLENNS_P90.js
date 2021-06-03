"use strict";

const SpaceApi = require("../../spaceman-api/api");

class LLENNS_P90 {
    static onLoadMod() {
        const assortId = "LLENNS_P90";
        var totalPrice = 45200;
        const addonList = ["5cc701aae4a949000e1ea45c", "P90_FLASHHIDER_PINK", "P90_CHARGE_PINK", "P90_UPPER_PINK", "P90_RING_PINK", "P90_STOCK_PINK", "P90_BUTTPAD_PINK"];
        const traderId = "FN_WAFFLE";

        for (const currentItem in addonList){
            totalPrice += DatabaseServer.tables.templates.items[addonList[currentItem]]._props.CreditsPrice;
        }

        SpaceApi.CreateTraderAssort(assortId, "5cc82d76e24e8d00134b4b83", traderId, totalPrice, "RUB", 2);

        SpaceApi.AddonTraderAssortSale(assortId+"_BARREL", "5cc701aae4a949000e1ea45c", traderId, assortId, "mod_barrel");
        SpaceApi.AddonTraderAssortSale(assortId+"_FLASHHIDER", "P90_FLASHHIDER_PINK", traderId, assortId+"_BARREL", "mod_muzzle");

        SpaceApi.AddonTraderAssortSale(assortId+"_CHARGE", "P90_CHARGE_PINK", traderId, assortId, "mod_charge");

        SpaceApi.AddonTraderAssortSale(assortId+"_UPPER", "P90_UPPER_PINK", traderId, assortId, "mod_reciever");
        SpaceApi.AddonTraderAssortSale(assortId+"_RING", "P90_RING_PINK", traderId, assortId+"_UPPER", "mod_mount_000");

        SpaceApi.AddonTraderAssortSale(assortId+"_STOCK", "P90_STOCK_PINK", traderId, assortId, "mod_stock");
        SpaceApi.AddonTraderAssortSale(assortId+"_BUTTPAD", "P90_BUTTPAD_PINK", traderId, assortId+"_STOCK", "mod_stock_000");

        SpaceApi.AddonTraderAssortSale(assortId+"_MAG", "P90_MAG_PINK", traderId, assortId, "mod_magazine");
    }
}

module.exports = LLENNS_P90;