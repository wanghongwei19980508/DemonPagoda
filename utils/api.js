import http from "./http.js";

export const getDungeonedConfig = params => http.get('game/getDungeonedConfig', params)
export const getDungeonedCustomsList = params => http.get('game/getDungeonedCustomsList', params)
export const getDungeonedThumbList = params => http.get('game/getDungeonedThumbList', params)