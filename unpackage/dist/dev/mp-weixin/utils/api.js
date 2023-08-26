"use strict";
const utils_http = require("./http.js");
const getDungeonedConfig = (params) => utils_http.http.get("game/getDungeonedConfig", params);
const getDungeonedCustomsList = (params) => utils_http.http.get("game/getDungeonedCustomsList", params);
const getDungeonedThumbList = (params) => utils_http.http.get("game/getDungeonedThumbList", params);
exports.getDungeonedConfig = getDungeonedConfig;
exports.getDungeonedCustomsList = getDungeonedCustomsList;
exports.getDungeonedThumbList = getDungeonedThumbList;
