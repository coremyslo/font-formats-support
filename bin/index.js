#!/usr/bin/env node

const { getFontFormatsMap, getFontFormatsList } = require("../dist/index")
const browserslist = require("browserslist");

console.log(getFontFormatsMap(browserslist("ie 8, ie 11, chrome 108")));
console.log(getFontFormatsMap(browserslist("ie 8, ie 11, chrome 108"), true));

console.log(getFontFormatsList(browserslist("ie 8, ie 11, chrome 108")));
console.log(getFontFormatsList(browserslist("ie 8, ie 11, chrome 108"), true));
