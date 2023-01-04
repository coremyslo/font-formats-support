import { FontFormat } from "./types";
import data from "./data";

export const getFontsSupport = (browsersList: string[], minimize: boolean = true): Record<FontFormat, string[]> => {
    const maxSupport = browsersList.reduce((acc:Record<FontFormat, string[]>, val) => {
        if (data.svg[val]) {
            acc.svg.push(val);
        }
        if (data.ttf[val]) {
            acc.ttf.push(val);
        }
        if (data.eot[val]) {
            acc.eot.push(val);
        }
        if (data.woff[val]) {
            acc.woff.push(val);
        }
        if (data.woff2[val]) {
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
        const keys = Object.keys(maxSupport) as Array<FontFormat>;
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
export const getFontsSupportList = (browsersList: string[], minimize: boolean = true): Array<FontFormat> => Object.keys(getFontsSupport(browsersList, minimize)) as Array<FontFormat>;
