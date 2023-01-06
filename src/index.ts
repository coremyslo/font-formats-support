import type { FontFormat } from "./types";
import data from "./data";

export const getFontFormatsMap = (browsersList: string[], minimize = false): Map<FontFormat, Set<string>> => {
    const formats: FontFormat[] = ["svg", "ttf", "eot", "woff", "woff2"];

    const maxSupport = browsersList.reduce((acc:Map<FontFormat, Set<string>>, browserVersion) => {
        formats.forEach(format => {
            if (data[format][browserVersion]) {
                if (acc.has(format)) {
                    acc.get(format)?.add(browserVersion);
                } else {
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
export const getFontFormatsList = (browsersList: string[], minimize = false): FontFormat[] => [...getFontFormatsMap(browsersList, minimize).keys()];
