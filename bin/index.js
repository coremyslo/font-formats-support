#!/usr/bin/env node

const { getFontsSupport, getFontsSupportList } = require("../dist/index")
const browserslist = require("browserslist");

console.log(getFontsSupport(browserslist("> 0.1%, ie 8, ie 11")));
console.log(getFontsSupportList(browserslist("> 0.1%, ie 8, ie 11")));

