"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFontsSupportList = exports.getFontsSupport = void 0;
const data_1 = __importDefault(require("./data"));
const getFontsSupport = (browsersList, minimize = true) => {
    const maxSupport = browsersList.reduce((acc, val) => {
        if (data_1.default.svg[val]) {
            acc.svg.push(val);
        }
        if (data_1.default.ttf[val]) {
            acc.ttf.push(val);
        }
        if (data_1.default.eot[val]) {
            acc.eot.push(val);
        }
        if (data_1.default.woff[val]) {
            acc.woff.push(val);
        }
        if (data_1.default.woff2[val]) {
            acc.woff2.push(val);
        }
        return acc;
    }, {
        svg: [],
        ttf: [],
        eot: [],
        woff: [],
        woff2: [],
    });
    if (minimize) {
        const keys = Object.keys(maxSupport);
        for (const key1 of keys) {
            for (const key2 of keys) {
                if (key1 !== key2 && maxSupport[key1] && maxSupport[key2] && maxSupport[key1].every(v => maxSupport[key2].includes(v))) {
                    delete maxSupport[key1];
                }
            }
        }
    }
    return maxSupport;
};
exports.getFontsSupport = getFontsSupport;
const getFontsSupportList = (browsersList, minimize = true) => Object.keys((0, exports.getFontsSupport)(browsersList, minimize));
exports.getFontsSupportList = getFontsSupportList;
