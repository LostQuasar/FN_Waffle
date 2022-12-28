"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConfigTypes_1 = require("C:/snapshot/project/obj/models/enums/ConfigTypes");
const Money_1 = require("C:/snapshot/project/obj/models/enums/Money");
const baseJson = __importStar(require("../res/trader.json"));
class FN_Waffle {
    constructor() {
        this.mod = "fn_waffle";
        this.moneyType = Money_1.Money.ROUBLES;
    }
    preAkiLoad(container) {
        this.logger = container.resolve("WinstonLogger");
        this.logger.debug(`[${this.mod}] preAki Loading... `);
        this.jsonUtil = container.resolve("JsonUtil");
        const preAkiModLoader = container.resolve("PreAkiModLoader");
        const imageRouter = container.resolve("ImageRouter");
        const configServer = container.resolve("ConfigServer");
        const traderConfig = configServer.getConfig(ConfigTypes_1.ConfigTypes.TRADER);
        this.registerProfileImage(preAkiModLoader, imageRouter);
        this.setupTraderUpdateTime(traderConfig);
        this.logger.debug(`[${this.mod}] preAki Loaded`);
    }
    postDBLoad(container) {
        this.logger.debug(`[${this.mod}] postDb Loading... `);
        const VFS = container.resolve("VFS");
        const configServer = container.resolve("ConfigServer");
        const traderConfig = configServer.getConfig(ConfigTypes_1.ConfigTypes.TRADER);
        const ragfairConfig = configServer.getConfig(ConfigTypes_1.ConfigTypes.RAGFAIR);
        const databaseServer = container.resolve("DatabaseServer");
        const databaseImporter = container.resolve("DatabaseImporter");
        this.databaseTables = databaseServer.getTables();
        const preAkiModLoader = container.resolve("PreAkiModLoader");
        ragfairConfig.traders[baseJson._id] = true;
        traderConfig.durabilityPurchaseThreshhold[baseJson._id] = 60;
        const modPath = preAkiModLoader.getModPath(this.mod);
        const waffle_db = databaseImporter.loadRecursive(`${modPath}database/`);
        const itemPath = `${modPath}database/templates/items/`;
        const handbookPath = `${modPath}database/templates/handbook/`;
        for (const itemFile in waffle_db.templates.items) {
            const databaseitem = this.jsonUtil.deserialize(VFS.readFile(`${itemPath}${itemFile}.json`));
            const handbookItem = this.jsonUtil.deserialize(VFS.readFile(`${handbookPath}${itemFile}.json`));
            this.databaseTables.templates.items[databaseitem._id] = databaseitem;
            this.databaseTables.templates.handbook.Items.push({
                "Id": databaseitem._id,
                "ParentId": handbookItem.ParentId,
                "Price": handbookItem.Price
            });
        }
        for (const localeID in this.databaseTables.locales.global) {
            for (const id in waffle_db.locales.en.templates) {
                const item = waffle_db.locales.en.templates[id];
                for (const locale in item) {
                    this.databaseTables.locales.global[localeID][`${id} ${locale}`] = item[locale];
                }
            }
        }
        for (const localeID in waffle_db.locales) {
            for (const id in waffle_db.locales[localeID].templates) {
                const item = waffle_db.locales[localeID].templates[id];
                for (const locale in item) {
                    this.databaseTables.locales.global[localeID][`${id}`] = item[locale];
                }
            }
        }
        this.addTraderToDb(baseJson);
        this.addTraderToLocales(this.databaseTables, baseJson.name, "FN Waffle", baseJson.nickname, baseJson.location, "A shop for all your FN needs");
        this.logger.debug(`[${this.mod}] postDb Loaded`);
    }
    registerProfileImage(preAkiModLoader, imageRouter) {
        const imageFilepath = `./${preAkiModLoader.getModPath(this.mod)}res`;
        imageRouter.addRoute(baseJson.avatar.replace(".jpg", ""), `${imageFilepath}/fn_waffle.jpg`);
    }
    setupTraderUpdateTime(traderConfig) {
        const traderRefreshRecord = { traderId: baseJson._id, seconds: 3600 };
        traderConfig.updateTime.push(traderRefreshRecord);
    }
    addTraderToDb(traderDetailsToAdd) {
        this.databaseTables.traders[traderDetailsToAdd._id] = {
            assort: this.createAssortTable(this.databaseTables),
            base: this.jsonUtil.deserialize(this.jsonUtil.serialize(traderDetailsToAdd)),
            questassort: {
                started: {},
                success: {},
                fail: {}
            }
        };
    }
    createAssortTable(tables) {
        const assortTable = {
            nextResupply: 0,
            items: [],
            barter_scheme: {},
            loyal_level_items: {}
        };
        this.addTestItemToAssort(assortTable, "fiveseven_50rnd_0", 1);
        this.addSingleItemToAssort(assortTable, "5cc80f53e4a949000e1ea4f8", 1);
        this.addSingleItemToAssort(assortTable, "5cc86832d7f00c000d3a6e6c", 1);
        this.addSingleItemToAssort(assortTable, "5cc86840d7f00c002412c56c", 1);
        this.addSingleItemToAssort(assortTable, "5cc80f67e4a949035e43bbba", 1);
        this.addSingleItemToAssort(assortTable, "5cc80f38e4a949001152b560", 1);
        this.addSingleItemToAssort(assortTable, "5cc80f8fe4a949033b0224a2", 1);
        this.addSingleItemToAssort(assortTable, "5cc80f79e4a949033c7343b2", 1);
        this.addSingleItemToAssort(assortTable, "5d7b6bafa4b93652786f4c76", 1);
        this.addSingleItemToAssort(assortTable, "5cc82d76e24e8d00134b4b83", 2);
        this.addSingleItemToAssort(assortTable, "5cc701aae4a949000e1ea45c", 2);
        this.addSingleItemToAssort(assortTable, "5cc701d7e4a94900100ac4e7", 2);
        this.addSingleItemToAssort(assortTable, "5cc82796e24e8d000f5859a8", 2);
        this.addSingleItemToAssort(assortTable, "5cc6ea78e4a949000e1ea3c1", 2);
        this.addSingleItemToAssort(assortTable, "5cc6ea85e4a949000e1ea3c3", 2);
        this.addSingleItemToAssort(assortTable, "5cc700d4e4a949000f0f0f28", 2);
        this.addSingleItemToAssort(assortTable, "5cc700ede4a949033c734315", 2);
        this.addSingleItemToAssort(assortTable, "5cc700cae4a949035e43ba72", 2);
        this.addSingleItemToAssort(assortTable, "5cc70093e4a949033c734312", 2);
        this.addSingleItemToAssort(assortTable, "5cebec00d7f00c065c53522a", 2);
        this.addSingleItemToAssort(assortTable, "5cc700b9e4a949000f0f0f25", 2);
        this.addSingleItemToAssort(assortTable, "5cc70102e4a949035e43ba74", 2);
        this.addSingleItemToAssort(assortTable, "5cebec10d7f00c065703d185", 2);
        this.addSingleItemToAssort(assortTable, "5cf7acfcd7f00c1084477cf2", 2);
        this.addSingleItemToAssort(assortTable, "5b0bbe4e5acfc40dc528a72d", 2);
        this.addSingleItemToAssort(assortTable, "5b099a765acfc47a8607efe3", 3);
        this.addSingleItemToAssort(assortTable, "5b7be1125acfc4001876c0e5", 3);
        this.addSingleItemToAssort(assortTable, "5b7be1265acfc400161d0798", 3);
        this.addSingleItemToAssort(assortTable, "5b7d679f5acfc4001a5c4024", 3);
        this.addSingleItemToAssort(assortTable, "5b7bed205acfc400161d08cc", 3);
        this.addSingleItemToAssort(assortTable, "5b7d671b5acfc43d82528ddd", 3);
        this.addSingleItemToAssort(assortTable, "5b7bedd75acfc43d825283f9", 3);
        this.addSingleItemToAssort(assortTable, "5b7bee755acfc400196d5383", 3);
        this.addSingleItemToAssort(assortTable, "5b7d678a5acfc4001a5c4022", 3);
        this.addSingleItemToAssort(assortTable, "5b099bb25acfc400186331e8", 3);
        this.addSingleItemToAssort(assortTable, "5b0bc22d5acfc47a8607f085", 3);
        this.addSingleItemToAssort(assortTable, "5b7be2345acfc400196d524a", 3);
        this.addSingleItemToAssort(assortTable, "5b7bef1e5acfc43d82528402", 3);
        this.addSingleItemToAssort(assortTable, "5b099ac65acfc400186331e1", 3);
        this.addSingleItemToAssort(assortTable, "5b7bef5d5acfc43bca7067a3", 3);
        this.addSingleItemToAssort(assortTable, "5b7bef9c5acfc43d102852ec", 3);
        this.addSingleItemToAssort(assortTable, "5b7d37845acfc400170e2f87", 3);
        this.addSingleItemToAssort(assortTable, "5b7c2d1d5acfc43d1028532a", 3);
        this.addSingleItemToAssort(assortTable, "5b7bebc85acfc43bca706666", 3);
        this.addSingleItemToAssort(assortTable, "5b7be1ca5acfc400170e2d2f", 3);
        this.addSingleItemToAssort(assortTable, "5b099a9d5acfc47a8607efe7", 3);
        this.addSingleItemToAssort(assortTable, "5b7d6c105acfc40015109a5f", 3);
        this.addSingleItemToAssort(assortTable, "5b099b965acfc400186331e6", 3);
        this.addSingleItemToAssort(assortTable, "5b7d64555acfc4001876c8e2", 3);
        this.addSingleItemToAssort(assortTable, "5b099bf25acfc4001637e683", 3);
        this.addSingleItemToAssort(assortTable, "5b7d63cf5acfc4001876c8df", 3);
        this.addSingleItemToAssort(assortTable, "5b7d645e5acfc400170e2f90", 3);
        this.addSingleItemToAssort(assortTable, "5b7d63b75acfc400170e2f8a", 3);
        this.addSingleItemToAssort(assortTable, "5b7d63de5acfc400170e2f8d", 3);
        this.addSingleItemToAssort(assortTable, "5ede474b0c226a66f5402622", 4);
        this.addSingleItemToAssort(assortTable, "5ede475b549eed7c6d5c18fb", 4);
        this.addSingleItemToAssort(assortTable, "5ede4739e0350d05467f73e8", 4);
        this.addSingleItemToAssort(assortTable, "5f0c892565703e5c461894e9", 4);
        this.addSingleItemToAssort(assortTable, "5ede47405b097655935d7d16", 4);
        this.addSingleItemToAssort(assortTable, "5ede475339ee016e8c534742", 4);
        const FIVE_SEVEN_PRESET = tables.globals.ItemPresets["5d51290186f77419093e7c24"]._items;
        this.addCollectionToAssort(assortTable, FIVE_SEVEN_PRESET, 1);
        const FIVE_SEVEN_FDE_PRESET = tables.globals.ItemPresets["5d7b845786f7743c1e531da7"]._items;
        this.addCollectionToAssort(assortTable, FIVE_SEVEN_FDE_PRESET, 1);
        const FIVE_SEVEN_THREADED_SILENCE = [
            {
                "_id": "five_seven_barrel_threaded",
                "_tpl": "5d3eb59ea4b9361c284bb4b2",
                "parentId": "hideout",
                "slotId": "hideout"
            },
            {
                "_id": "five_seven_silencer",
                "_tpl": "5d3ef698a4b9361182109872",
                "parentId": "five_seven_barrel_threaded",
                "slotId": "mod_muzzle"
            }
        ];
        this.addCollectionToAssort(assortTable, FIVE_SEVEN_THREADED_SILENCE, 1);
        const FN_GL40_PRESET = tables.globals.ItemPresets["5f06d6e1475d472556679d16"]._items.concat([
            {
                "_id": "fngl_40_front_sight",
                "_tpl": "5c18b90d2e2216152142466b",
                "parentId": "5f06d6e1475d472556679d19",
                "slotId": "mod_sight_front"
            },
            {
                "_id": "fngl_40_rear_sight",
                "_tpl": "5c18b9192e2216398b5a8104",
                "parentId": "5f06d6e1475d472556679d19",
                "slotId": "mod_sight_rear"
            }
        ]);
        this.addCollectionToAssort(assortTable, FN_GL40_PRESET, 4);
        return assortTable;
    }
    addSingleItemToAssort(assortTable, itemTpl, loyaltyLevel) {
        const newItem = {
            _id: itemTpl,
            _tpl: itemTpl,
            parentId: "hideout",
            slotId: "hideout",
            upd: {
                UnlimitedCount: true,
                StackObjectsCount: 9999999
            }
        };
        assortTable.items.push(newItem);
        assortTable.barter_scheme[itemTpl] = [
            [
                {
                    count: this.databaseTables.templates.clientItems.data[itemTpl]._props.CreditsPrice,
                    _tpl: this.moneyType
                }
            ]
        ];
        assortTable.loyal_level_items[itemTpl] = loyaltyLevel;
    }
    addTestItemToAssort(assortTable, itemTpl, loyaltyLevel) {
        const newItem = {
            _id: itemTpl,
            _tpl: itemTpl,
            parentId: "hideout",
            slotId: "hideout",
            upd: {
                UnlimitedCount: true,
                StackObjectsCount: 9999999
            }
        };
        assortTable.items.push(newItem);
        assortTable.barter_scheme[itemTpl] = [
            [
                {
                    count: 6249,
                    _tpl: this.moneyType
                }
            ]
        ];
        assortTable.loyal_level_items[itemTpl] = loyaltyLevel;
    }
    addCollectionToAssort(assortTable, items, loyaltyLevel) {
        const collectionToAdd = this.jsonUtil.deserialize(this.jsonUtil.serialize(items));
        collectionToAdd[0].upd = {
            UnlimitedCount: true,
            StackObjectsCount: 9999999
        };
        collectionToAdd[0].parentId = "hideout";
        collectionToAdd[0].slotId = "hideout";
        assortTable.items.push(...collectionToAdd);
        var price = 0;
        for (const item in items) {
            price += this.databaseTables.templates.clientItems.data[items[item]._tpl]._props.CreditsPrice;
        }
        assortTable.barter_scheme[collectionToAdd[0]._id] = [
            [
                {
                    count: price,
                    _tpl: this.moneyType
                }
            ]
        ];
        assortTable.loyal_level_items[collectionToAdd[0]._id] = loyaltyLevel;
    }
    addTraderToLocales(tables, fullName, firstName, nickName, location, description) {
        const locales = Object.values(tables.locales.global);
        for (const locale of locales) {
            locale[`${baseJson._id} FullName`] = fullName;
            locale[`${baseJson._id} FirstName`] = firstName;
            locale[`${baseJson._id} Nickname`] = nickName;
            locale[`${baseJson._id} Location`] = location;
            locale[`${baseJson._id} Description`] = description;
        }
    }
    addItemToLocales(tables, itemTpl, name, shortName, Description) {
        const locales = Object.values(tables.locales.global);
        for (const locale of locales) {
            locale[`${itemTpl} Name`] = name;
            locale[`${itemTpl} ShortName`] = shortName;
            locale[`${itemTpl} Description`] = Description;
        }
    }
}
module.exports = { mod: new FN_Waffle() };
