"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFontFormatsList = exports.getFontFormatsMap = void 0;
const data_1 = __importDefault(require("./data"));
const getFontFormatsMap = (browsersList, minimize = false) => {
    const formats = ["svg", "ttf", "eot", "woff", "woff2"];
    const maxSupport = browsersList.reduce((acc, browserVersion) => {
        formats.forEach(format => {
            var _a;
            if (data_1.default[format][browserVersion]) {
                if (acc.has(format)) {
                    (_a = acc.get(format)) === null || _a === void 0 ? void 0 : _a.add(browserVersion);
                }
                else {
                    acc.set(format, new Set([browserVersion]));
                }
            }
        });
        return acc;
    }, new Map());
    if (minimize) {
        maxSupport.forEach((value1, key1) => {
            maxSupport.forEach((value2, key2) => {
                if (key1 !== key2) {
                    if ([...value1].every(v => [...value2].includes(v))) {
                        maxSupport.delete(key1);
                    }
                }
            });
        });
    }
    return maxSupport;
};
exports.getFontFormatsMap = getFontFormatsMap;
const getFontFormatsList = (browsersList, minimize = false) => [...(0, exports.getFontFormatsMap)(browsersList, minimize).keys()];
exports.getFontFormatsList = getFontFormatsList;
