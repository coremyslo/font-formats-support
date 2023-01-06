import type { FontFormat } from "./types";
export declare const getFontFormatsMap: (browsersList: string[], minimize?: boolean) => Map<FontFormat, Set<string>>;
export declare const getFontFormatsList: (browsersList: string[], minimize?: boolean) => FontFormat[];
