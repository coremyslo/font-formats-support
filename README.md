# fontslist [![npm](https://img.shields.io/npm/v/fontslist)](https://www.npmjs.com/package/fontslist) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/coremyslo/fontslist/blob/master/LICENSE)

This module returns a list or map of font formats that are supported based on the data provided by the `browserslist()` function from the [browserslist](https://github.com/browserslist/browserslist) package.

## Installation

```shell
$ yarn add fontslist
```

## Usage

```typescript
import { getFontFormatsList, getFontFormatsMap } from "fontslist";
import browserslist from "browserslist";

const browsersList = browserslist("ie 8, ie 11, chrome 108");

getFontFormatsList(browsersList);
// [ 'ttf', 'woff', 'woff2', 'eot' ]

getFontFormatsList(browsersList, true);
// [ 'woff', 'eot' ]

getFontFormatsMap(browsersList);
//  Map(4) {
//    'ttf' => Set(1) { 'chrome 108' },
//    'woff' => Set(2) { 'chrome 108', 'ie 11' },
//    'woff2' => Set(1) { 'chrome 108' },
//    'eot' => Set(2) { 'ie 11', 'ie 8' }
//  }

getFontFormatsMap(browsersList, true);
//  Map(2) {
//    'woff' => Set(2) { 'chrome 108', 'ie 11' },
//    'eot' => Set(2) { 'ie 11', 'ie 8' }
//  }
```

## API
### `getFontFormatsList(browsersList, minimize)`
Returns an array of supported font formats.
* `browsersList: string[]`: A list of [browserslist](https://github.com/browserslist/browserslist) data.
* `minimize: boolean`: When set to `true`, omits font formats that are supported by a subset of browser versions of other font formats. This can be useful when injecting fonts using base64 to reduce the page size. The default value is `false`.
### `getFontFormatsMap(browsersList, minimize)`
Returns a map of supported font formats, where each map element contains the set of browser versions it is needed for.
* `browsersList: string[]`: Same as above.
* `minimize: boolean`: Same as above.

## How it works
The `getFontFormatsMap` and `getFontFormatsList` functions retrieve data from a predefined mapping.

This mapping is created for each font format and browser version using the [caniuse-api](https://www.npmjs.com/package/caniuse-api) package and is stored in the `data.ts` file using the `generate` function. This is done for performance reasons, as calling `caniuse.isSupported` on the fly is not efficient.

Although the `generate` function can be used periodically to update this module, it is not necessary for module to function properly, as all newer browser versions support woff2.
