if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const icons = {
    "id": "2852637",
    "name": "uniui\u56FE\u6807\u5E93",
    "font_family": "uniicons",
    "css_prefix_text": "uniui-",
    "description": "",
    "glyphs": [
      {
        "icon_id": "25027049",
        "name": "yanse",
        "font_class": "color",
        "unicode": "e6cf",
        "unicode_decimal": 59087
      },
      {
        "icon_id": "25027048",
        "name": "wallet",
        "font_class": "wallet",
        "unicode": "e6b1",
        "unicode_decimal": 59057
      },
      {
        "icon_id": "25015720",
        "name": "settings-filled",
        "font_class": "settings-filled",
        "unicode": "e6ce",
        "unicode_decimal": 59086
      },
      {
        "icon_id": "25015434",
        "name": "shimingrenzheng-filled",
        "font_class": "auth-filled",
        "unicode": "e6cc",
        "unicode_decimal": 59084
      },
      {
        "icon_id": "24934246",
        "name": "shop-filled",
        "font_class": "shop-filled",
        "unicode": "e6cd",
        "unicode_decimal": 59085
      },
      {
        "icon_id": "24934159",
        "name": "staff-filled-01",
        "font_class": "staff-filled",
        "unicode": "e6cb",
        "unicode_decimal": 59083
      },
      {
        "icon_id": "24932461",
        "name": "VIP-filled",
        "font_class": "vip-filled",
        "unicode": "e6c6",
        "unicode_decimal": 59078
      },
      {
        "icon_id": "24932462",
        "name": "plus_circle_fill",
        "font_class": "plus-filled",
        "unicode": "e6c7",
        "unicode_decimal": 59079
      },
      {
        "icon_id": "24932463",
        "name": "folder_add-filled",
        "font_class": "folder-add-filled",
        "unicode": "e6c8",
        "unicode_decimal": 59080
      },
      {
        "icon_id": "24932464",
        "name": "yanse-filled",
        "font_class": "color-filled",
        "unicode": "e6c9",
        "unicode_decimal": 59081
      },
      {
        "icon_id": "24932465",
        "name": "tune-filled",
        "font_class": "tune-filled",
        "unicode": "e6ca",
        "unicode_decimal": 59082
      },
      {
        "icon_id": "24932455",
        "name": "a-rilidaka-filled",
        "font_class": "calendar-filled",
        "unicode": "e6c0",
        "unicode_decimal": 59072
      },
      {
        "icon_id": "24932456",
        "name": "notification-filled",
        "font_class": "notification-filled",
        "unicode": "e6c1",
        "unicode_decimal": 59073
      },
      {
        "icon_id": "24932457",
        "name": "wallet-filled",
        "font_class": "wallet-filled",
        "unicode": "e6c2",
        "unicode_decimal": 59074
      },
      {
        "icon_id": "24932458",
        "name": "paihangbang-filled",
        "font_class": "medal-filled",
        "unicode": "e6c3",
        "unicode_decimal": 59075
      },
      {
        "icon_id": "24932459",
        "name": "gift-filled",
        "font_class": "gift-filled",
        "unicode": "e6c4",
        "unicode_decimal": 59076
      },
      {
        "icon_id": "24932460",
        "name": "fire-filled",
        "font_class": "fire-filled",
        "unicode": "e6c5",
        "unicode_decimal": 59077
      },
      {
        "icon_id": "24928001",
        "name": "refreshempty",
        "font_class": "refreshempty",
        "unicode": "e6bf",
        "unicode_decimal": 59071
      },
      {
        "icon_id": "24926853",
        "name": "location-ellipse",
        "font_class": "location-filled",
        "unicode": "e6af",
        "unicode_decimal": 59055
      },
      {
        "icon_id": "24926735",
        "name": "person-filled",
        "font_class": "person-filled",
        "unicode": "e69d",
        "unicode_decimal": 59037
      },
      {
        "icon_id": "24926703",
        "name": "personadd-filled",
        "font_class": "personadd-filled",
        "unicode": "e698",
        "unicode_decimal": 59032
      },
      {
        "icon_id": "24923351",
        "name": "back",
        "font_class": "back",
        "unicode": "e6b9",
        "unicode_decimal": 59065
      },
      {
        "icon_id": "24923352",
        "name": "forward",
        "font_class": "forward",
        "unicode": "e6ba",
        "unicode_decimal": 59066
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrow-right",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrowthinright",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrow-left",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrowthinleft",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrow-up",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrowthinup",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrow-down",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrowthindown",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "bottom",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "arrowdown",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "right",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "arrowright",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "top",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "arrowup",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "left",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "arrowleft",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923334",
        "name": "eye",
        "font_class": "eye",
        "unicode": "e651",
        "unicode_decimal": 58961
      },
      {
        "icon_id": "24923335",
        "name": "eye-filled",
        "font_class": "eye-filled",
        "unicode": "e66a",
        "unicode_decimal": 58986
      },
      {
        "icon_id": "24923336",
        "name": "eye-slash",
        "font_class": "eye-slash",
        "unicode": "e6b3",
        "unicode_decimal": 59059
      },
      {
        "icon_id": "24923337",
        "name": "eye-slash-filled",
        "font_class": "eye-slash-filled",
        "unicode": "e6b4",
        "unicode_decimal": 59060
      },
      {
        "icon_id": "24923305",
        "name": "info-filled",
        "font_class": "info-filled",
        "unicode": "e649",
        "unicode_decimal": 58953
      },
      {
        "icon_id": "24923299",
        "name": "reload-01",
        "font_class": "reload",
        "unicode": "e6b2",
        "unicode_decimal": 59058
      },
      {
        "icon_id": "24923195",
        "name": "mic_slash_fill",
        "font_class": "micoff-filled",
        "unicode": "e6b0",
        "unicode_decimal": 59056
      },
      {
        "icon_id": "24923165",
        "name": "map-pin-ellipse",
        "font_class": "map-pin-ellipse",
        "unicode": "e6ac",
        "unicode_decimal": 59052
      },
      {
        "icon_id": "24923166",
        "name": "map-pin",
        "font_class": "map-pin",
        "unicode": "e6ad",
        "unicode_decimal": 59053
      },
      {
        "icon_id": "24923167",
        "name": "location",
        "font_class": "location",
        "unicode": "e6ae",
        "unicode_decimal": 59054
      },
      {
        "icon_id": "24923064",
        "name": "starhalf",
        "font_class": "starhalf",
        "unicode": "e683",
        "unicode_decimal": 59011
      },
      {
        "icon_id": "24923065",
        "name": "star",
        "font_class": "star",
        "unicode": "e688",
        "unicode_decimal": 59016
      },
      {
        "icon_id": "24923066",
        "name": "star-filled",
        "font_class": "star-filled",
        "unicode": "e68f",
        "unicode_decimal": 59023
      },
      {
        "icon_id": "24899646",
        "name": "a-rilidaka",
        "font_class": "calendar",
        "unicode": "e6a0",
        "unicode_decimal": 59040
      },
      {
        "icon_id": "24899647",
        "name": "fire",
        "font_class": "fire",
        "unicode": "e6a1",
        "unicode_decimal": 59041
      },
      {
        "icon_id": "24899648",
        "name": "paihangbang",
        "font_class": "medal",
        "unicode": "e6a2",
        "unicode_decimal": 59042
      },
      {
        "icon_id": "24899649",
        "name": "font",
        "font_class": "font",
        "unicode": "e6a3",
        "unicode_decimal": 59043
      },
      {
        "icon_id": "24899650",
        "name": "gift",
        "font_class": "gift",
        "unicode": "e6a4",
        "unicode_decimal": 59044
      },
      {
        "icon_id": "24899651",
        "name": "link",
        "font_class": "link",
        "unicode": "e6a5",
        "unicode_decimal": 59045
      },
      {
        "icon_id": "24899652",
        "name": "notification",
        "font_class": "notification",
        "unicode": "e6a6",
        "unicode_decimal": 59046
      },
      {
        "icon_id": "24899653",
        "name": "staff",
        "font_class": "staff",
        "unicode": "e6a7",
        "unicode_decimal": 59047
      },
      {
        "icon_id": "24899654",
        "name": "VIP",
        "font_class": "vip",
        "unicode": "e6a8",
        "unicode_decimal": 59048
      },
      {
        "icon_id": "24899655",
        "name": "folder_add",
        "font_class": "folder-add",
        "unicode": "e6a9",
        "unicode_decimal": 59049
      },
      {
        "icon_id": "24899656",
        "name": "tune",
        "font_class": "tune",
        "unicode": "e6aa",
        "unicode_decimal": 59050
      },
      {
        "icon_id": "24899657",
        "name": "shimingrenzheng",
        "font_class": "auth",
        "unicode": "e6ab",
        "unicode_decimal": 59051
      },
      {
        "icon_id": "24899565",
        "name": "person",
        "font_class": "person",
        "unicode": "e699",
        "unicode_decimal": 59033
      },
      {
        "icon_id": "24899566",
        "name": "email-filled",
        "font_class": "email-filled",
        "unicode": "e69a",
        "unicode_decimal": 59034
      },
      {
        "icon_id": "24899567",
        "name": "phone-filled",
        "font_class": "phone-filled",
        "unicode": "e69b",
        "unicode_decimal": 59035
      },
      {
        "icon_id": "24899568",
        "name": "phone",
        "font_class": "phone",
        "unicode": "e69c",
        "unicode_decimal": 59036
      },
      {
        "icon_id": "24899570",
        "name": "email",
        "font_class": "email",
        "unicode": "e69e",
        "unicode_decimal": 59038
      },
      {
        "icon_id": "24899571",
        "name": "personadd",
        "font_class": "personadd",
        "unicode": "e69f",
        "unicode_decimal": 59039
      },
      {
        "icon_id": "24899558",
        "name": "chatboxes-filled",
        "font_class": "chatboxes-filled",
        "unicode": "e692",
        "unicode_decimal": 59026
      },
      {
        "icon_id": "24899559",
        "name": "contact",
        "font_class": "contact",
        "unicode": "e693",
        "unicode_decimal": 59027
      },
      {
        "icon_id": "24899560",
        "name": "chatbubble-filled",
        "font_class": "chatbubble-filled",
        "unicode": "e694",
        "unicode_decimal": 59028
      },
      {
        "icon_id": "24899561",
        "name": "contact-filled",
        "font_class": "contact-filled",
        "unicode": "e695",
        "unicode_decimal": 59029
      },
      {
        "icon_id": "24899562",
        "name": "chatboxes",
        "font_class": "chatboxes",
        "unicode": "e696",
        "unicode_decimal": 59030
      },
      {
        "icon_id": "24899563",
        "name": "chatbubble",
        "font_class": "chatbubble",
        "unicode": "e697",
        "unicode_decimal": 59031
      },
      {
        "icon_id": "24881290",
        "name": "upload-filled",
        "font_class": "upload-filled",
        "unicode": "e68e",
        "unicode_decimal": 59022
      },
      {
        "icon_id": "24881292",
        "name": "upload",
        "font_class": "upload",
        "unicode": "e690",
        "unicode_decimal": 59024
      },
      {
        "icon_id": "24881293",
        "name": "weixin",
        "font_class": "weixin",
        "unicode": "e691",
        "unicode_decimal": 59025
      },
      {
        "icon_id": "24881274",
        "name": "compose",
        "font_class": "compose",
        "unicode": "e67f",
        "unicode_decimal": 59007
      },
      {
        "icon_id": "24881275",
        "name": "qq",
        "font_class": "qq",
        "unicode": "e680",
        "unicode_decimal": 59008
      },
      {
        "icon_id": "24881276",
        "name": "download-filled",
        "font_class": "download-filled",
        "unicode": "e681",
        "unicode_decimal": 59009
      },
      {
        "icon_id": "24881277",
        "name": "pengyouquan",
        "font_class": "pyq",
        "unicode": "e682",
        "unicode_decimal": 59010
      },
      {
        "icon_id": "24881279",
        "name": "sound",
        "font_class": "sound",
        "unicode": "e684",
        "unicode_decimal": 59012
      },
      {
        "icon_id": "24881280",
        "name": "trash-filled",
        "font_class": "trash-filled",
        "unicode": "e685",
        "unicode_decimal": 59013
      },
      {
        "icon_id": "24881281",
        "name": "sound-filled",
        "font_class": "sound-filled",
        "unicode": "e686",
        "unicode_decimal": 59014
      },
      {
        "icon_id": "24881282",
        "name": "trash",
        "font_class": "trash",
        "unicode": "e687",
        "unicode_decimal": 59015
      },
      {
        "icon_id": "24881284",
        "name": "videocam-filled",
        "font_class": "videocam-filled",
        "unicode": "e689",
        "unicode_decimal": 59017
      },
      {
        "icon_id": "24881285",
        "name": "spinner-cycle",
        "font_class": "spinner-cycle",
        "unicode": "e68a",
        "unicode_decimal": 59018
      },
      {
        "icon_id": "24881286",
        "name": "weibo",
        "font_class": "weibo",
        "unicode": "e68b",
        "unicode_decimal": 59019
      },
      {
        "icon_id": "24881288",
        "name": "videocam",
        "font_class": "videocam",
        "unicode": "e68c",
        "unicode_decimal": 59020
      },
      {
        "icon_id": "24881289",
        "name": "download",
        "font_class": "download",
        "unicode": "e68d",
        "unicode_decimal": 59021
      },
      {
        "icon_id": "24879601",
        "name": "help",
        "font_class": "help",
        "unicode": "e679",
        "unicode_decimal": 59001
      },
      {
        "icon_id": "24879602",
        "name": "navigate-filled",
        "font_class": "navigate-filled",
        "unicode": "e67a",
        "unicode_decimal": 59002
      },
      {
        "icon_id": "24879603",
        "name": "plusempty",
        "font_class": "plusempty",
        "unicode": "e67b",
        "unicode_decimal": 59003
      },
      {
        "icon_id": "24879604",
        "name": "smallcircle",
        "font_class": "smallcircle",
        "unicode": "e67c",
        "unicode_decimal": 59004
      },
      {
        "icon_id": "24879605",
        "name": "minus-filled",
        "font_class": "minus-filled",
        "unicode": "e67d",
        "unicode_decimal": 59005
      },
      {
        "icon_id": "24879606",
        "name": "micoff",
        "font_class": "micoff",
        "unicode": "e67e",
        "unicode_decimal": 59006
      },
      {
        "icon_id": "24879588",
        "name": "closeempty",
        "font_class": "closeempty",
        "unicode": "e66c",
        "unicode_decimal": 58988
      },
      {
        "icon_id": "24879589",
        "name": "clear",
        "font_class": "clear",
        "unicode": "e66d",
        "unicode_decimal": 58989
      },
      {
        "icon_id": "24879590",
        "name": "navigate",
        "font_class": "navigate",
        "unicode": "e66e",
        "unicode_decimal": 58990
      },
      {
        "icon_id": "24879591",
        "name": "minus",
        "font_class": "minus",
        "unicode": "e66f",
        "unicode_decimal": 58991
      },
      {
        "icon_id": "24879592",
        "name": "image",
        "font_class": "image",
        "unicode": "e670",
        "unicode_decimal": 58992
      },
      {
        "icon_id": "24879593",
        "name": "mic",
        "font_class": "mic",
        "unicode": "e671",
        "unicode_decimal": 58993
      },
      {
        "icon_id": "24879594",
        "name": "paperplane",
        "font_class": "paperplane",
        "unicode": "e672",
        "unicode_decimal": 58994
      },
      {
        "icon_id": "24879595",
        "name": "close",
        "font_class": "close",
        "unicode": "e673",
        "unicode_decimal": 58995
      },
      {
        "icon_id": "24879596",
        "name": "help-filled",
        "font_class": "help-filled",
        "unicode": "e674",
        "unicode_decimal": 58996
      },
      {
        "icon_id": "24879597",
        "name": "plus-filled",
        "font_class": "paperplane-filled",
        "unicode": "e675",
        "unicode_decimal": 58997
      },
      {
        "icon_id": "24879598",
        "name": "plus",
        "font_class": "plus",
        "unicode": "e676",
        "unicode_decimal": 58998
      },
      {
        "icon_id": "24879599",
        "name": "mic-filled",
        "font_class": "mic-filled",
        "unicode": "e677",
        "unicode_decimal": 58999
      },
      {
        "icon_id": "24879600",
        "name": "image-filled",
        "font_class": "image-filled",
        "unicode": "e678",
        "unicode_decimal": 59e3
      },
      {
        "icon_id": "24855900",
        "name": "locked-filled",
        "font_class": "locked-filled",
        "unicode": "e668",
        "unicode_decimal": 58984
      },
      {
        "icon_id": "24855901",
        "name": "info",
        "font_class": "info",
        "unicode": "e669",
        "unicode_decimal": 58985
      },
      {
        "icon_id": "24855903",
        "name": "locked",
        "font_class": "locked",
        "unicode": "e66b",
        "unicode_decimal": 58987
      },
      {
        "icon_id": "24855884",
        "name": "camera-filled",
        "font_class": "camera-filled",
        "unicode": "e658",
        "unicode_decimal": 58968
      },
      {
        "icon_id": "24855885",
        "name": "chat-filled",
        "font_class": "chat-filled",
        "unicode": "e659",
        "unicode_decimal": 58969
      },
      {
        "icon_id": "24855886",
        "name": "camera",
        "font_class": "camera",
        "unicode": "e65a",
        "unicode_decimal": 58970
      },
      {
        "icon_id": "24855887",
        "name": "circle",
        "font_class": "circle",
        "unicode": "e65b",
        "unicode_decimal": 58971
      },
      {
        "icon_id": "24855888",
        "name": "checkmarkempty",
        "font_class": "checkmarkempty",
        "unicode": "e65c",
        "unicode_decimal": 58972
      },
      {
        "icon_id": "24855889",
        "name": "chat",
        "font_class": "chat",
        "unicode": "e65d",
        "unicode_decimal": 58973
      },
      {
        "icon_id": "24855890",
        "name": "circle-filled",
        "font_class": "circle-filled",
        "unicode": "e65e",
        "unicode_decimal": 58974
      },
      {
        "icon_id": "24855891",
        "name": "flag",
        "font_class": "flag",
        "unicode": "e65f",
        "unicode_decimal": 58975
      },
      {
        "icon_id": "24855892",
        "name": "flag-filled",
        "font_class": "flag-filled",
        "unicode": "e660",
        "unicode_decimal": 58976
      },
      {
        "icon_id": "24855893",
        "name": "gear-filled",
        "font_class": "gear-filled",
        "unicode": "e661",
        "unicode_decimal": 58977
      },
      {
        "icon_id": "24855894",
        "name": "home",
        "font_class": "home",
        "unicode": "e662",
        "unicode_decimal": 58978
      },
      {
        "icon_id": "24855895",
        "name": "home-filled",
        "font_class": "home-filled",
        "unicode": "e663",
        "unicode_decimal": 58979
      },
      {
        "icon_id": "24855896",
        "name": "gear",
        "font_class": "gear",
        "unicode": "e664",
        "unicode_decimal": 58980
      },
      {
        "icon_id": "24855897",
        "name": "smallcircle-filled",
        "font_class": "smallcircle-filled",
        "unicode": "e665",
        "unicode_decimal": 58981
      },
      {
        "icon_id": "24855898",
        "name": "map-filled",
        "font_class": "map-filled",
        "unicode": "e666",
        "unicode_decimal": 58982
      },
      {
        "icon_id": "24855899",
        "name": "map",
        "font_class": "map",
        "unicode": "e667",
        "unicode_decimal": 58983
      },
      {
        "icon_id": "24855825",
        "name": "refresh-filled",
        "font_class": "refresh-filled",
        "unicode": "e656",
        "unicode_decimal": 58966
      },
      {
        "icon_id": "24855826",
        "name": "refresh",
        "font_class": "refresh",
        "unicode": "e657",
        "unicode_decimal": 58967
      },
      {
        "icon_id": "24855808",
        "name": "cloud-upload",
        "font_class": "cloud-upload",
        "unicode": "e645",
        "unicode_decimal": 58949
      },
      {
        "icon_id": "24855809",
        "name": "cloud-download-filled",
        "font_class": "cloud-download-filled",
        "unicode": "e646",
        "unicode_decimal": 58950
      },
      {
        "icon_id": "24855810",
        "name": "cloud-download",
        "font_class": "cloud-download",
        "unicode": "e647",
        "unicode_decimal": 58951
      },
      {
        "icon_id": "24855811",
        "name": "cloud-upload-filled",
        "font_class": "cloud-upload-filled",
        "unicode": "e648",
        "unicode_decimal": 58952
      },
      {
        "icon_id": "24855813",
        "name": "redo",
        "font_class": "redo",
        "unicode": "e64a",
        "unicode_decimal": 58954
      },
      {
        "icon_id": "24855814",
        "name": "images-filled",
        "font_class": "images-filled",
        "unicode": "e64b",
        "unicode_decimal": 58955
      },
      {
        "icon_id": "24855815",
        "name": "undo-filled",
        "font_class": "undo-filled",
        "unicode": "e64c",
        "unicode_decimal": 58956
      },
      {
        "icon_id": "24855816",
        "name": "more",
        "font_class": "more",
        "unicode": "e64d",
        "unicode_decimal": 58957
      },
      {
        "icon_id": "24855817",
        "name": "more-filled",
        "font_class": "more-filled",
        "unicode": "e64e",
        "unicode_decimal": 58958
      },
      {
        "icon_id": "24855818",
        "name": "undo",
        "font_class": "undo",
        "unicode": "e64f",
        "unicode_decimal": 58959
      },
      {
        "icon_id": "24855819",
        "name": "images",
        "font_class": "images",
        "unicode": "e650",
        "unicode_decimal": 58960
      },
      {
        "icon_id": "24855821",
        "name": "paperclip",
        "font_class": "paperclip",
        "unicode": "e652",
        "unicode_decimal": 58962
      },
      {
        "icon_id": "24855822",
        "name": "settings",
        "font_class": "settings",
        "unicode": "e653",
        "unicode_decimal": 58963
      },
      {
        "icon_id": "24855823",
        "name": "search",
        "font_class": "search",
        "unicode": "e654",
        "unicode_decimal": 58964
      },
      {
        "icon_id": "24855824",
        "name": "redo-filled",
        "font_class": "redo-filled",
        "unicode": "e655",
        "unicode_decimal": 58965
      },
      {
        "icon_id": "24841702",
        "name": "list",
        "font_class": "list",
        "unicode": "e644",
        "unicode_decimal": 58948
      },
      {
        "icon_id": "24841489",
        "name": "mail-open-filled",
        "font_class": "mail-open-filled",
        "unicode": "e63a",
        "unicode_decimal": 58938
      },
      {
        "icon_id": "24841491",
        "name": "hand-thumbsdown-filled",
        "font_class": "hand-down-filled",
        "unicode": "e63c",
        "unicode_decimal": 58940
      },
      {
        "icon_id": "24841492",
        "name": "hand-thumbsdown",
        "font_class": "hand-down",
        "unicode": "e63d",
        "unicode_decimal": 58941
      },
      {
        "icon_id": "24841493",
        "name": "hand-thumbsup-filled",
        "font_class": "hand-up-filled",
        "unicode": "e63e",
        "unicode_decimal": 58942
      },
      {
        "icon_id": "24841494",
        "name": "hand-thumbsup",
        "font_class": "hand-up",
        "unicode": "e63f",
        "unicode_decimal": 58943
      },
      {
        "icon_id": "24841496",
        "name": "heart-filled",
        "font_class": "heart-filled",
        "unicode": "e641",
        "unicode_decimal": 58945
      },
      {
        "icon_id": "24841498",
        "name": "mail-open",
        "font_class": "mail-open",
        "unicode": "e643",
        "unicode_decimal": 58947
      },
      {
        "icon_id": "24841488",
        "name": "heart",
        "font_class": "heart",
        "unicode": "e639",
        "unicode_decimal": 58937
      },
      {
        "icon_id": "24839963",
        "name": "loop",
        "font_class": "loop",
        "unicode": "e633",
        "unicode_decimal": 58931
      },
      {
        "icon_id": "24839866",
        "name": "pulldown",
        "font_class": "pulldown",
        "unicode": "e632",
        "unicode_decimal": 58930
      },
      {
        "icon_id": "24813798",
        "name": "scan",
        "font_class": "scan",
        "unicode": "e62a",
        "unicode_decimal": 58922
      },
      {
        "icon_id": "24813786",
        "name": "bars",
        "font_class": "bars",
        "unicode": "e627",
        "unicode_decimal": 58919
      },
      {
        "icon_id": "24813788",
        "name": "cart-filled",
        "font_class": "cart-filled",
        "unicode": "e629",
        "unicode_decimal": 58921
      },
      {
        "icon_id": "24813790",
        "name": "checkbox",
        "font_class": "checkbox",
        "unicode": "e62b",
        "unicode_decimal": 58923
      },
      {
        "icon_id": "24813791",
        "name": "checkbox-filled",
        "font_class": "checkbox-filled",
        "unicode": "e62c",
        "unicode_decimal": 58924
      },
      {
        "icon_id": "24813794",
        "name": "shop",
        "font_class": "shop",
        "unicode": "e62f",
        "unicode_decimal": 58927
      },
      {
        "icon_id": "24813795",
        "name": "headphones",
        "font_class": "headphones",
        "unicode": "e630",
        "unicode_decimal": 58928
      },
      {
        "icon_id": "24813796",
        "name": "cart",
        "font_class": "cart",
        "unicode": "e631",
        "unicode_decimal": 58929
      }
    ]
  };
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$b = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: icons.glyphs
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v) => v.font_class === this.type);
        if (code) {
          return unescape(`%u${code.unicode}`);
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("text", {
      style: vue.normalizeStyle({ color: $props.color, "font-size": $options.iconSize }),
      class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
      onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
    }, null, 6);
  }
  const __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$6], ["__scopeId", "data-v-d31e1c47"], ["__file", "D:/Users/WHW/Desktop/uniapp/\u9B54\u5854/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  const _sfc_main$a = {
    name: "UniBadge",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: "error"
      },
      inverted: {
        type: Boolean,
        default: false
      },
      isDot: {
        type: Boolean,
        default: false
      },
      maxNum: {
        type: Number,
        default: 99
      },
      absolute: {
        type: String,
        default: ""
      },
      offset: {
        type: Array,
        default() {
          return [0, 0];
        }
      },
      text: {
        type: [String, Number],
        default: ""
      },
      size: {
        type: String,
        default: "small"
      },
      customStyle: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    data() {
      return {};
    },
    computed: {
      width() {
        return String(this.text).length * 8 + 12;
      },
      classNames() {
        const {
          inverted,
          type,
          size,
          absolute
        } = this;
        return [
          inverted ? "uni-badge--" + type + "-inverted" : "",
          "uni-badge--" + type,
          "uni-badge--" + size,
          absolute ? "uni-badge--absolute" : ""
        ].join(" ");
      },
      positionStyle() {
        if (!this.absolute)
          return {};
        let w = this.width / 2, h = 10;
        if (this.isDot) {
          w = 5;
          h = 5;
        }
        const x = `${-w + this.offset[0]}px`;
        const y = `${-h + this.offset[1]}px`;
        const whiteList = {
          rightTop: {
            right: x,
            top: y
          },
          rightBottom: {
            right: x,
            bottom: y
          },
          leftBottom: {
            left: x,
            bottom: y
          },
          leftTop: {
            left: x,
            top: y
          }
        };
        const match = whiteList[this.absolute];
        return match ? match : whiteList["rightTop"];
      },
      dotStyle() {
        if (!this.isDot)
          return {};
        return {
          width: "10px",
          minWidth: "0",
          height: "10px",
          padding: "0",
          borderRadius: "10px"
        };
      },
      displayValue() {
        const {
          isDot,
          text,
          maxNum
        } = this;
        return isDot ? "" : Number(text) > maxNum ? `${maxNum}+` : text;
      }
    },
    methods: {
      onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-badge--x" }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
      $props.text ? (vue.openBlock(), vue.createElementBlock("text", {
        key: 0,
        class: vue.normalizeClass([$options.classNames, "uni-badge"]),
        style: vue.normalizeStyle([$options.positionStyle, $props.customStyle, $options.dotStyle]),
        onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick())
      }, vue.toDisplayString($options.displayValue), 7)) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$5], ["__scopeId", "data-v-c97cb896"], ["__file", "D:/Users/WHW/Desktop/uniapp/\u9B54\u5854/uni_modules/uni-badge/components/uni-badge/uni-badge.vue"]]);
  const _sfc_main$9 = {
    name: "UniListItem",
    emits: ["click", "switchChange"],
    props: {
      direction: {
        type: String,
        default: "row"
      },
      title: {
        type: String,
        default: ""
      },
      note: {
        type: String,
        default: ""
      },
      ellipsis: {
        type: [Number, String],
        default: 0
      },
      disabled: {
        type: [Boolean, String],
        default: false
      },
      clickable: {
        type: Boolean,
        default: false
      },
      showArrow: {
        type: [Boolean, String],
        default: false
      },
      link: {
        type: [Boolean, String],
        default: false
      },
      to: {
        type: String,
        default: ""
      },
      showBadge: {
        type: [Boolean, String],
        default: false
      },
      showSwitch: {
        type: [Boolean, String],
        default: false
      },
      switchChecked: {
        type: [Boolean, String],
        default: false
      },
      badgeText: {
        type: String,
        default: ""
      },
      badgeType: {
        type: String,
        default: "success"
      },
      badgeStyle: {
        type: Object,
        default() {
          return {};
        }
      },
      rightText: {
        type: String,
        default: ""
      },
      thumb: {
        type: String,
        default: ""
      },
      thumbSize: {
        type: String,
        default: "base"
      },
      showExtraIcon: {
        type: [Boolean, String],
        default: false
      },
      extraIcon: {
        type: Object,
        default() {
          return {
            type: "",
            color: "#000000",
            size: 20,
            customPrefix: ""
          };
        }
      },
      border: {
        type: Boolean,
        default: true
      },
      customStyle: {
        type: Object,
        default() {
          return {
            padding: "",
            backgroundColor: "#FFFFFF"
          };
        }
      },
      keepScrollPosition: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      "customStyle.padding": {
        handler(padding) {
          if (typeof padding == "number") {
            padding += "";
          }
          let paddingArr = padding.split(" ");
          if (paddingArr.length === 1) {
            this.padding = {
              "top": padding,
              "right": padding,
              "bottom": padding,
              "left": padding
            };
          } else if (paddingArr.length === 2) {
            this.padding = {
              "top": padding[0],
              "right": padding[1],
              "bottom": padding[0],
              "left": padding[1]
            };
          } else if (paddingArr.length === 4) {
            this.padding = {
              "top": padding[0],
              "right": padding[1],
              "bottom": padding[2],
              "left": padding[3]
            };
          }
        },
        immediate: true
      }
    },
    data() {
      return {
        isFirstChild: false,
        padding: {
          top: "",
          right: "",
          bottom: "",
          left: ""
        }
      };
    },
    mounted() {
      this.list = this.getForm();
      if (this.list) {
        if (!this.list.firstChildAppend) {
          this.list.firstChildAppend = true;
          this.isFirstChild = true;
        }
      }
    },
    methods: {
      getForm(name = "uniList") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      },
      onClick() {
        if (this.to !== "") {
          this.openPage();
          return;
        }
        if (this.clickable || this.link) {
          this.$emit("click", {
            data: {}
          });
        }
      },
      onSwitchChange(e) {
        this.$emit("switchChange", e.detail);
      },
      openPage() {
        if (["navigateTo", "redirectTo", "reLaunch", "switchTab"].indexOf(this.link) !== -1) {
          this.pageApi(this.link);
        } else {
          this.pageApi("navigateTo");
        }
      },
      pageApi(api) {
        let callback = {
          url: this.to,
          success: (res) => {
            this.$emit("click", {
              data: res
            });
          },
          fail: (err) => {
            this.$emit("click", {
              data: err
            });
          }
        };
        switch (api) {
          case "navigateTo":
            uni.navigateTo(callback);
            break;
          case "redirectTo":
            uni.redirectTo(callback);
            break;
          case "reLaunch":
            uni.reLaunch(callback);
            break;
          case "switchTab":
            uni.switchTab(callback);
            break;
          default:
            uni.navigateTo(callback);
        }
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$3);
    const _component_uni_badge = resolveEasycom(vue.resolveDynamicComponent("uni-badge"), __easycom_1$2);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass([{ "uni-list-item--disabled": $props.disabled }, "uni-list-item"]),
      style: vue.normalizeStyle({ "background-color": $props.customStyle.backgroundColor }),
      "hover-class": !$props.clickable && !$props.link || $props.disabled || $props.showSwitch ? "" : "uni-list-item--hover",
      onClick: _cache[1] || (_cache[1] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      !$data.isFirstChild ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: vue.normalizeClass(["border--left", { "uni-list--border": $props.border }])
      }, null, 2)) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["uni-list-item__container", { "container--right": $props.showArrow || $props.link, "flex--direction": $props.direction === "column" }]),
        style: vue.normalizeStyle({ paddingTop: $data.padding.top, paddingLeft: $data.padding.left, paddingRight: $data.padding.right, paddingBottom: $data.padding.bottom })
      }, [
        vue.renderSlot(_ctx.$slots, "header", {}, () => [
          vue.createElementVNode("view", { class: "uni-list-item__header" }, [
            $props.thumb ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "uni-list-item__icon"
            }, [
              vue.createElementVNode("image", {
                src: $props.thumb,
                class: vue.normalizeClass(["uni-list-item__icon-img", ["uni-list--" + $props.thumbSize]])
              }, null, 10, ["src"])
            ])) : $props.showExtraIcon ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "uni-list-item__icon"
            }, [
              vue.createVNode(_component_uni_icons, {
                customPrefix: $props.extraIcon.customPrefix,
                color: $props.extraIcon.color,
                size: $props.extraIcon.size,
                type: $props.extraIcon.type
              }, null, 8, ["customPrefix", "color", "size", "type"])
            ])) : vue.createCommentVNode("v-if", true)
          ])
        ], true),
        vue.renderSlot(_ctx.$slots, "body", {}, () => [
          vue.createElementVNode("view", {
            class: vue.normalizeClass(["uni-list-item__content", { "uni-list-item__content--center": $props.thumb || $props.showExtraIcon || $props.showBadge || $props.showSwitch }])
          }, [
            $props.title ? (vue.openBlock(), vue.createElementBlock("text", {
              key: 0,
              class: vue.normalizeClass(["uni-list-item__content-title", [$props.ellipsis !== 0 && $props.ellipsis <= 2 ? "uni-ellipsis-" + $props.ellipsis : ""]])
            }, vue.toDisplayString($props.title), 3)) : vue.createCommentVNode("v-if", true),
            $props.note ? (vue.openBlock(), vue.createElementBlock("text", {
              key: 1,
              class: "uni-list-item__content-note"
            }, vue.toDisplayString($props.note), 1)) : vue.createCommentVNode("v-if", true)
          ], 2)
        ], true),
        vue.renderSlot(_ctx.$slots, "footer", {}, () => [
          $props.rightText || $props.showBadge || $props.showSwitch ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: vue.normalizeClass(["uni-list-item__extra", { "flex--justify": $props.direction === "column" }])
          }, [
            $props.rightText ? (vue.openBlock(), vue.createElementBlock("text", {
              key: 0,
              class: "uni-list-item__extra-text"
            }, vue.toDisplayString($props.rightText), 1)) : vue.createCommentVNode("v-if", true),
            $props.showBadge ? (vue.openBlock(), vue.createBlock(_component_uni_badge, {
              key: 1,
              type: $props.badgeType,
              text: $props.badgeText,
              "custom-style": $props.badgeStyle
            }, null, 8, ["type", "text", "custom-style"])) : vue.createCommentVNode("v-if", true),
            $props.showSwitch ? (vue.openBlock(), vue.createElementBlock("switch", {
              key: 2,
              disabled: $props.disabled,
              checked: $props.switchChecked,
              onChange: _cache[0] || (_cache[0] = (...args) => $options.onSwitchChange && $options.onSwitchChange(...args))
            }, null, 40, ["disabled", "checked"])) : vue.createCommentVNode("v-if", true)
          ], 2)) : vue.createCommentVNode("v-if", true)
        ], true)
      ], 6),
      $props.showArrow || $props.link ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
        key: 1,
        size: 16,
        class: "uni-icon-wrapper",
        color: "#bbb",
        type: "arrowright"
      })) : vue.createCommentVNode("v-if", true)
    ], 14, ["hover-class"]);
  }
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$4], ["__scopeId", "data-v-c7524739"], ["__file", "D:/Users/WHW/Desktop/uniapp/\u9B54\u5854/uni_modules/uni-list/components/uni-list-item/uni-list-item.vue"]]);
  const _sfc_main$8 = {
    name: "uniList",
    "mp-weixin": {
      options: {
        multipleSlots: false
      }
    },
    props: {
      stackFromEnd: {
        type: Boolean,
        default: false
      },
      enableBackToTop: {
        type: [Boolean, String],
        default: false
      },
      scrollY: {
        type: [Boolean, String],
        default: false
      },
      border: {
        type: Boolean,
        default: true
      },
      renderReverse: {
        type: Boolean,
        default: false
      }
    },
    created() {
      this.firstChildAppend = false;
    },
    methods: {
      loadMore(e) {
        this.$emit("scrolltolower");
      },
      scroll(e) {
        this.$emit("scroll", e);
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-list uni-border-top-bottom" }, [
      $props.border ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "uni-list--border-top"
      })) : vue.createCommentVNode("v-if", true),
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
      $props.border ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "uni-list--border-bottom"
      })) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$3], ["__scopeId", "data-v-c2f1266a"], ["__file", "D:/Users/WHW/Desktop/uniapp/\u9B54\u5854/uni_modules/uni-list/components/uni-list/uni-list.vue"]]);
  const _sfc_main$7 = {
    __name: "combatInterface",
    props: {
      attribute: {
        type: Object,
        default: {}
      }
    },
    emits: ["success"],
    setup(__props, { emit }) {
      const props = __props;
      let attackState = vue.ref(false), a, b;
      animation();
      function animation() {
        let attribute = props.attribute;
        a = setInterval(() => {
          attackState.value = !attackState.value;
          if (attribute.monster.hp <= 0 || attribute.user.hp <= 0) {
            close();
          }
        }, 2e3);
        setTimeout(() => {
          attribute.monster.hp -= attribute.user.hurt;
          b = setInterval(() => {
            if (attackState.value) {
              attribute.user.hp -= attribute.monster.hurt;
            } else {
              attribute.monster.hp -= attribute.user.hurt;
            }
          }, 2e3);
        }, 1e3);
      }
      function close() {
        clearInterval(a);
        clearInterval(b);
        emit("success", props.attribute.user.dropBlood);
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", { class: "box" }, [
          vue.createElementVNode("div", { class: "hero-box" }, [
            vue.createElementVNode("p", null, "\u751F\u547D:" + vue.toDisplayString(__props.attribute.user.hp), 1),
            vue.createElementVNode("p", null, "\u653B\u51FB:" + vue.toDisplayString(__props.attribute.user.attack), 1),
            vue.createElementVNode("p", null, "\u9632\u5FA1:" + vue.toDisplayString(__props.attribute.user.defense), 1)
          ]),
          vue.createElementVNode("div", { class: "hero-hp" }, [
            vue.createElementVNode("p", {
              class: vue.normalizeClass(["hero-hp-p", vue.unref(attackState) ? "heroHp" : ""])
            }, "-" + vue.toDisplayString(__props.attribute.monster.hurt), 3)
          ]),
          vue.createElementVNode("div", {
            class: vue.normalizeClass(["hero-img", vue.unref(attackState) ? "heroDefense" : "heroAttack"])
          }, [
            vue.createElementVNode("image", {
              style: { "width": "50px", "height": "50px" },
              mode: "scaleToFill",
              src: "http://jiuaibuni.top/dome/img/dungeoned/1.png"
            })
          ], 2),
          vue.createElementVNode("div", { class: "monster-box" }, [
            vue.createElementVNode("p", null, "\u751F\u547D:" + vue.toDisplayString(__props.attribute.monster.hp), 1),
            vue.createElementVNode("p", null, "\u653B\u51FB:" + vue.toDisplayString(__props.attribute.monster.attack), 1),
            vue.createElementVNode("p", null, "\u9632\u5FA1:" + vue.toDisplayString(__props.attribute.monster.defense), 1)
          ]),
          vue.createElementVNode("div", { class: "monster-hp" }, [
            vue.createElementVNode("p", {
              class: vue.normalizeClass(["monster-hp-p", vue.unref(attackState) ? "" : "monsterHp"])
            }, "-" + vue.toDisplayString(__props.attribute.user.hurt), 3)
          ]),
          vue.createElementVNode("div", {
            class: vue.normalizeClass(["monster-img", vue.unref(attackState) ? "monsterAttack" : "monsterDefense"])
          }, [
            vue.createElementVNode("image", {
              style: { "width": "50px", "height": "50px" },
              mode: "scaleToFill",
              src: "http://jiuaibuni.top/dome/img/dungeoned/" + __props.attribute.monster.id + ".png"
            }, null, 8, ["src"])
          ], 2),
          vue.createElementVNode("div", {
            class: "close-hit",
            onClick: close
          }, "\u5173\u95ED\u52A8\u753B")
        ]);
      };
    }
  };
  const combatInterface = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-a0a9e427"], ["__file", "D:/Users/WHW/Desktop/uniapp/\u9B54\u5854/pages/index/combatInterface.vue"]]);
  const popup = {
    data() {
      return {};
    },
    created() {
      this.popup = this.getParent();
    },
    methods: {
      getParent(name = "uniPopup") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      }
    }
  };
  const isObject = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index = 0;
    const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index < tokens.length) {
      const token = tokens[index];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    const lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      [locale, messages2] = [
        messages2,
        locale
      ];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  const en = {
    "uni-popup.cancel": "cancel",
    "uni-popup.ok": "ok",
    "uni-popup.placeholder": "pleace enter",
    "uni-popup.title": "Hint",
    "uni-popup.shareTitle": "Share to"
  };
  const zhHans = {
    "uni-popup.cancel": "\u53D6\u6D88",
    "uni-popup.ok": "\u786E\u5B9A",
    "uni-popup.placeholder": "\u8BF7\u8F93\u5165",
    "uni-popup.title": "\u63D0\u793A",
    "uni-popup.shareTitle": "\u5206\u4EAB\u5230"
  };
  const zhHant = {
    "uni-popup.cancel": "\u53D6\u6D88",
    "uni-popup.ok": "\u78BA\u5B9A",
    "uni-popup.placeholder": "\u8ACB\u8F38\u5165",
    "uni-popup.title": "\u63D0\u793A",
    "uni-popup.shareTitle": "\u5206\u4EAB\u5230"
  };
  const messages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  const { t } = initVueI18n(messages);
  const _sfc_main$6 = {
    name: "uniPopupDialog",
    mixins: [popup],
    emits: ["confirm", "close"],
    props: {
      inputType: {
        type: String,
        default: "text"
      },
      value: {
        type: [String, Number],
        default: ""
      },
      placeholder: {
        type: [String, Number],
        default: ""
      },
      type: {
        type: String,
        default: "error"
      },
      mode: {
        type: String,
        default: "base"
      },
      title: {
        type: String,
        default: ""
      },
      content: {
        type: String,
        default: ""
      },
      beforeClose: {
        type: Boolean,
        default: false
      },
      cancelText: {
        type: String,
        default: ""
      },
      confirmText: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        dialogType: "error",
        focus: false,
        val: ""
      };
    },
    computed: {
      okText() {
        return this.confirmText || t("uni-popup.ok");
      },
      closeText() {
        return this.cancelText || t("uni-popup.cancel");
      },
      placeholderText() {
        return this.placeholder || t("uni-popup.placeholder");
      },
      titleText() {
        return this.title || t("uni-popup.title");
      }
    },
    watch: {
      type(val) {
        this.dialogType = val;
      },
      mode(val) {
        if (val === "input") {
          this.dialogType = "info";
        }
      },
      value(val) {
        this.val = val;
      }
    },
    created() {
      this.popup.disableMask();
      if (this.mode === "input") {
        this.dialogType = "info";
        this.val = this.value;
      } else {
        this.dialogType = this.type;
      }
    },
    mounted() {
      this.focus = true;
    },
    methods: {
      onOk() {
        if (this.mode === "input") {
          this.$emit("confirm", this.val);
        } else {
          this.$emit("confirm");
        }
        if (this.beforeClose)
          return;
        this.popup.close();
      },
      closeDialog() {
        this.$emit("close");
        if (this.beforeClose)
          return;
        this.popup.close();
      },
      close() {
        this.popup.close();
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-popup-dialog" }, [
      vue.createElementVNode("view", { class: "uni-dialog-title" }, [
        vue.createElementVNode("text", {
          class: vue.normalizeClass(["uni-dialog-title-text", ["uni-popup__" + $data.dialogType]])
        }, vue.toDisplayString($options.titleText), 3)
      ]),
      $props.mode === "base" ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "uni-dialog-content"
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.createElementVNode("text", { class: "uni-dialog-content-text" }, vue.toDisplayString($props.content), 1)
        ], true)
      ])) : (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "uni-dialog-content"
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.withDirectives(vue.createElementVNode("input", {
            class: "uni-dialog-input",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.val = $event),
            type: $props.inputType,
            placeholder: $options.placeholderText,
            focus: $data.focus
          }, null, 8, ["type", "placeholder", "focus"]), [
            [vue.vModelDynamic, $data.val]
          ])
        ], true)
      ])),
      vue.createElementVNode("view", { class: "uni-dialog-button-group" }, [
        vue.createElementVNode("view", {
          class: "uni-dialog-button",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.closeDialog && $options.closeDialog(...args))
        }, [
          vue.createElementVNode("text", { class: "uni-dialog-button-text" }, vue.toDisplayString($options.closeText), 1)
        ]),
        vue.createElementVNode("view", {
          class: "uni-dialog-button uni-border-left",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.onOk && $options.onOk(...args))
        }, [
          vue.createElementVNode("text", { class: "uni-dialog-button-text uni-button-color" }, vue.toDisplayString($options.okText), 1)
        ])
      ])
    ]);
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$2], ["__scopeId", "data-v-d78c88b7"], ["__file", "D:/Users/WHW/Desktop/uniapp/\u9B54\u5854/uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.vue"]]);
  class MPAnimation {
    constructor(options, _this) {
      this.options = options;
      this.animation = uni.createAnimation(options);
      this.currentStepAnimates = {};
      this.next = 0;
      this.$ = _this;
    }
    _nvuePushAnimates(type, args) {
      let aniObj = this.currentStepAnimates[this.next];
      let styles = {};
      if (!aniObj) {
        styles = {
          styles: {},
          config: {}
        };
      } else {
        styles = aniObj;
      }
      if (animateTypes1.includes(type)) {
        if (!styles.styles.transform) {
          styles.styles.transform = "";
        }
        let unit = "";
        if (type === "rotate") {
          unit = "deg";
        }
        styles.styles.transform += `${type}(${args + unit}) `;
      } else {
        styles.styles[type] = `${args}`;
      }
      this.currentStepAnimates[this.next] = styles;
    }
    _animateRun(styles = {}, config = {}) {
      let ref = this.$.$refs["ani"].ref;
      if (!ref)
        return;
      return new Promise((resolve, reject) => {
        nvueAnimation.transition(ref, {
          styles,
          ...config
        }, (res) => {
          resolve();
        });
      });
    }
    _nvueNextAnimate(animates, step = 0, fn) {
      let obj = animates[step];
      if (obj) {
        let {
          styles,
          config
        } = obj;
        this._animateRun(styles, config).then(() => {
          step += 1;
          this._nvueNextAnimate(animates, step, fn);
        });
      } else {
        this.currentStepAnimates = {};
        typeof fn === "function" && fn();
        this.isEnd = true;
      }
    }
    step(config = {}) {
      this.animation.step(config);
      return this;
    }
    run(fn) {
      this.$.animationData = this.animation.export();
      this.$.timer = setTimeout(() => {
        typeof fn === "function" && fn();
      }, this.$.durationTime);
    }
  }
  const animateTypes1 = [
    "matrix",
    "matrix3d",
    "rotate",
    "rotate3d",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "scale3d",
    "scaleX",
    "scaleY",
    "scaleZ",
    "skew",
    "skewX",
    "skewY",
    "translate",
    "translate3d",
    "translateX",
    "translateY",
    "translateZ"
  ];
  const animateTypes2 = ["opacity", "backgroundColor"];
  const animateTypes3 = ["width", "height", "left", "right", "top", "bottom"];
  animateTypes1.concat(animateTypes2, animateTypes3).forEach((type) => {
    MPAnimation.prototype[type] = function(...args) {
      this.animation[type](...args);
      return this;
    };
  });
  function createAnimation(option, _this) {
    if (!_this)
      return;
    clearTimeout(_this.timer);
    return new MPAnimation(option, _this);
  }
  const _sfc_main$5 = {
    name: "uniTransition",
    emits: ["click", "change"],
    props: {
      show: {
        type: Boolean,
        default: false
      },
      modeClass: {
        type: [Array, String],
        default() {
          return "fade";
        }
      },
      duration: {
        type: Number,
        default: 300
      },
      styles: {
        type: Object,
        default() {
          return {};
        }
      },
      customClass: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        isShow: false,
        transform: "",
        opacity: 1,
        animationData: {},
        durationTime: 300,
        config: {}
      };
    },
    watch: {
      show: {
        handler(newVal) {
          if (newVal) {
            this.open();
          } else {
            if (this.isShow) {
              this.close();
            }
          }
        },
        immediate: true
      }
    },
    computed: {
      stylesObject() {
        let styles = {
          ...this.styles,
          "transition-duration": this.duration / 1e3 + "s"
        };
        let transform = "";
        for (let i in styles) {
          let line = this.toLine(i);
          transform += line + ":" + styles[i] + ";";
        }
        return transform;
      },
      transformStyles() {
        return "transform:" + this.transform + ";opacity:" + this.opacity + ";" + this.stylesObject;
      }
    },
    created() {
      this.config = {
        duration: this.duration,
        timingFunction: "ease",
        transformOrigin: "50% 50%",
        delay: 0
      };
      this.durationTime = this.duration;
    },
    methods: {
      init(obj = {}) {
        if (obj.duration) {
          this.durationTime = obj.duration;
        }
        this.animation = createAnimation(Object.assign(this.config, obj), this);
      },
      onClick() {
        this.$emit("click", {
          detail: this.isShow
        });
      },
      step(obj, config = {}) {
        if (!this.animation)
          return;
        for (let i in obj) {
          try {
            if (typeof obj[i] === "object") {
              this.animation[i](...obj[i]);
            } else {
              this.animation[i](obj[i]);
            }
          } catch (e) {
            formatAppLog("error", "at uni_modules/uni-transition/components/uni-transition/uni-transition.vue:139", `\u65B9\u6CD5 ${i} \u4E0D\u5B58\u5728`);
          }
        }
        this.animation.step(config);
        return this;
      },
      run(fn) {
        if (!this.animation)
          return;
        this.animation.run(fn);
      },
      open() {
        clearTimeout(this.timer);
        this.transform = "";
        this.isShow = true;
        let { opacity, transform } = this.styleInit(false);
        if (typeof opacity !== "undefined") {
          this.opacity = opacity;
        }
        this.transform = transform;
        this.$nextTick(() => {
          this.timer = setTimeout(() => {
            this.animation = createAnimation(this.config, this);
            this.tranfromInit(false).step();
            this.animation.run();
            this.$emit("change", {
              detail: this.isShow
            });
          }, 20);
        });
      },
      close(type) {
        if (!this.animation)
          return;
        this.tranfromInit(true).step().run(() => {
          this.isShow = false;
          this.animationData = null;
          this.animation = null;
          let { opacity, transform } = this.styleInit(false);
          this.opacity = opacity || 1;
          this.transform = transform;
          this.$emit("change", {
            detail: this.isShow
          });
        });
      },
      styleInit(type) {
        let styles = {
          transform: ""
        };
        let buildStyle = (type2, mode) => {
          if (mode === "fade") {
            styles.opacity = this.animationType(type2)[mode];
          } else {
            styles.transform += this.animationType(type2)[mode] + " ";
          }
        };
        if (typeof this.modeClass === "string") {
          buildStyle(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildStyle(type, mode);
          });
        }
        return styles;
      },
      tranfromInit(type) {
        let buildTranfrom = (type2, mode) => {
          let aniNum = null;
          if (mode === "fade") {
            aniNum = type2 ? 0 : 1;
          } else {
            aniNum = type2 ? "-100%" : "0";
            if (mode === "zoom-in") {
              aniNum = type2 ? 0.8 : 1;
            }
            if (mode === "zoom-out") {
              aniNum = type2 ? 1.2 : 1;
            }
            if (mode === "slide-right") {
              aniNum = type2 ? "100%" : "0";
            }
            if (mode === "slide-bottom") {
              aniNum = type2 ? "100%" : "0";
            }
          }
          this.animation[this.animationMode()[mode]](aniNum);
        };
        if (typeof this.modeClass === "string") {
          buildTranfrom(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildTranfrom(type, mode);
          });
        }
        return this.animation;
      },
      animationType(type) {
        return {
          fade: type ? 1 : 0,
          "slide-top": `translateY(${type ? "0" : "-100%"})`,
          "slide-right": `translateX(${type ? "0" : "100%"})`,
          "slide-bottom": `translateY(${type ? "0" : "100%"})`,
          "slide-left": `translateX(${type ? "0" : "-100%"})`,
          "zoom-in": `scaleX(${type ? 1 : 0.8}) scaleY(${type ? 1 : 0.8})`,
          "zoom-out": `scaleX(${type ? 1 : 1.2}) scaleY(${type ? 1 : 1.2})`
        };
      },
      animationMode() {
        return {
          fade: "opacity",
          "slide-top": "translateY",
          "slide-right": "translateX",
          "slide-bottom": "translateY",
          "slide-left": "translateX",
          "zoom-in": "scale",
          "zoom-out": "scale"
        };
      },
      toLine(name) {
        return name.replace(/([A-Z])/g, "-$1").toLowerCase();
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.isShow ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      ref: "ani",
      animation: $data.animationData,
      class: vue.normalizeClass($props.customClass),
      style: vue.normalizeStyle($options.transformStyles),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 14, ["animation"])) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$1], ["__file", "D:/Users/WHW/Desktop/uniapp/\u9B54\u5854/uni_modules/uni-transition/components/uni-transition/uni-transition.vue"]]);
  const _sfc_main$4 = {
    name: "uniPopup",
    components: {},
    emits: ["change", "maskClick"],
    props: {
      animation: {
        type: Boolean,
        default: true
      },
      type: {
        type: String,
        default: "center"
      },
      isMaskClick: {
        type: Boolean,
        default: null
      },
      maskClick: {
        type: Boolean,
        default: null
      },
      backgroundColor: {
        type: String,
        default: "none"
      },
      safeArea: {
        type: Boolean,
        default: true
      },
      maskBackgroundColor: {
        type: String,
        default: "rgba(0, 0, 0, 0.4)"
      }
    },
    watch: {
      type: {
        handler: function(type) {
          if (!this.config[type])
            return;
          this[this.config[type]](true);
        },
        immediate: true
      },
      isDesktop: {
        handler: function(newVal) {
          if (!this.config[newVal])
            return;
          this[this.config[this.type]](true);
        },
        immediate: true
      },
      maskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      isMaskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      showPopup(show) {
      }
    },
    data() {
      return {
        duration: 300,
        ani: [],
        showPopup: false,
        showTrans: false,
        popupWidth: 0,
        popupHeight: 0,
        config: {
          top: "top",
          bottom: "bottom",
          center: "center",
          left: "left",
          right: "right",
          message: "top",
          dialog: "center",
          share: "bottom"
        },
        maskClass: {
          position: "fixed",
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)"
        },
        transClass: {
          position: "fixed",
          left: 0,
          right: 0
        },
        maskShow: true,
        mkclick: true,
        popupstyle: this.isDesktop ? "fixforpc-top" : "top"
      };
    },
    computed: {
      isDesktop() {
        return this.popupWidth >= 500 && this.popupHeight >= 500;
      },
      bg() {
        if (this.backgroundColor === "" || this.backgroundColor === "none") {
          return "transparent";
        }
        return this.backgroundColor;
      }
    },
    mounted() {
      const fixSize = () => {
        const {
          windowWidth,
          windowHeight,
          windowTop,
          safeArea,
          screenHeight,
          safeAreaInsets
        } = uni.getSystemInfoSync();
        this.popupWidth = windowWidth;
        this.popupHeight = windowHeight + (windowTop || 0);
        if (safeArea && this.safeArea) {
          this.safeAreaInsets = safeAreaInsets.bottom;
        } else {
          this.safeAreaInsets = 0;
        }
      };
      fixSize();
    },
    unmounted() {
      this.setH5Visible();
    },
    created() {
      if (this.isMaskClick === null && this.maskClick === null) {
        this.mkclick = true;
      } else {
        this.mkclick = this.isMaskClick !== null ? this.isMaskClick : this.maskClick;
      }
      if (this.animation) {
        this.duration = 300;
      } else {
        this.duration = 0;
      }
      this.messageChild = null;
      this.clearPropagation = false;
      this.maskClass.backgroundColor = this.maskBackgroundColor;
    },
    methods: {
      setH5Visible() {
      },
      closeMask() {
        this.maskShow = false;
      },
      disableMask() {
        this.mkclick = false;
      },
      clear(e) {
        e.stopPropagation();
        this.clearPropagation = true;
      },
      open(direction) {
        if (this.showPopup) {
          clearTimeout(this.timer);
          this.showPopup = false;
        }
        let innerType = ["top", "center", "bottom", "left", "right", "message", "dialog", "share"];
        if (!(direction && innerType.indexOf(direction) !== -1)) {
          direction = this.type;
        }
        if (!this.config[direction]) {
          formatAppLog("error", "at uni_modules/uni-popup/components/uni-popup/uni-popup.vue:280", "\u7F3A\u5C11\u7C7B\u578B\uFF1A", direction);
          return;
        }
        this[this.config[direction]]();
        this.$emit("change", {
          show: true,
          type: direction
        });
      },
      close(type) {
        this.showTrans = false;
        this.$emit("change", {
          show: false,
          type: this.type
        });
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.showPopup = false;
        }, 300);
      },
      touchstart() {
        this.clearPropagation = false;
      },
      onTap() {
        if (this.clearPropagation) {
          this.clearPropagation = false;
          return;
        }
        this.$emit("maskClick");
        if (!this.mkclick)
          return;
        this.close();
      },
      top(type) {
        this.popupstyle = this.isDesktop ? "fixforpc-top" : "top";
        this.ani = ["slide-top"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
        this.$nextTick(() => {
          if (this.messageChild && this.type === "message") {
            this.messageChild.timerClose();
          }
        });
      },
      bottom(type) {
        this.popupstyle = "bottom";
        this.ani = ["slide-bottom"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          paddingBottom: this.safeAreaInsets + "px",
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      center(type) {
        this.popupstyle = "center";
        this.ani = ["zoom-out", "fade"];
        this.transClass = {
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          justifyContent: "center",
          alignItems: "center"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      left(type) {
        this.popupstyle = "left";
        this.ani = ["slide-left"];
        this.transClass = {
          position: "fixed",
          left: 0,
          bottom: 0,
          top: 0,
          backgroundColor: this.bg,
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      right(type) {
        this.popupstyle = "right";
        this.ani = ["slide-right"];
        this.transClass = {
          position: "fixed",
          bottom: 0,
          right: 0,
          top: 0,
          backgroundColor: this.bg,
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_transition = resolveEasycom(vue.resolveDynamicComponent("uni-transition"), __easycom_0);
    return $data.showPopup ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      class: vue.normalizeClass(["uni-popup", [$data.popupstyle, $options.isDesktop ? "fixforpc-z-index" : ""]])
    }, [
      vue.createElementVNode("view", {
        onTouchstart: _cache[1] || (_cache[1] = (...args) => $options.touchstart && $options.touchstart(...args))
      }, [
        $data.maskShow ? (vue.openBlock(), vue.createBlock(_component_uni_transition, {
          key: "1",
          name: "mask",
          "mode-class": "fade",
          styles: $data.maskClass,
          duration: $data.duration,
          show: $data.showTrans,
          onClick: $options.onTap
        }, null, 8, ["styles", "duration", "show", "onClick"])) : vue.createCommentVNode("v-if", true),
        vue.createVNode(_component_uni_transition, {
          key: "2",
          "mode-class": $data.ani,
          name: "content",
          styles: $data.transClass,
          duration: $data.duration,
          show: $data.showTrans,
          onClick: $options.onTap
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", {
              class: vue.normalizeClass(["uni-popup__wrapper", [$data.popupstyle]]),
              style: vue.normalizeStyle({ backgroundColor: $options.bg }),
              onClick: _cache[0] || (_cache[0] = (...args) => $options.clear && $options.clear(...args))
            }, [
              vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ], 6)
          ]),
          _: 3
        }, 8, ["mode-class", "styles", "duration", "show", "onClick"])
      ], 32)
    ], 2)) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render], ["__scopeId", "data-v-4dd3c44b"], ["__file", "D:/Users/WHW/Desktop/uniapp/\u9B54\u5854/uni_modules/uni-popup/components/uni-popup/uni-popup.vue"]]);
  const _sfc_main$3 = {
    __name: "index",
    props: {
      dialog: {
        type: Object,
        default: {}
      },
      open: {
        type: Boolean,
        default: false
      }
    },
    emits: ["success", "filled"],
    setup(__props, { emit }) {
      const props = __props;
      const state = vue.reactive({
        alertDialog: alertDialog2
      });
      const { alertDialog: alertDialog2 } = vue.toRefs(state);
      vue.watch(() => props.open, (newVal, oldVal) => {
        if (newVal) {
          alertDialog2.value.open();
        }
      });
      function dialogConfirm() {
        emit("success", props.dialog);
      }
      function dialogClose() {
        emit("filled", props.dialog);
      }
      return (_ctx, _cache) => {
        const _component_uni_popup_dialog = resolveEasycom(vue.resolveDynamicComponent("uni-popup-dialog"), __easycom_0$1);
        const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_1);
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createElementVNode("p", null, "aaaaaaa"),
          vue.createVNode(_component_uni_popup, {
            ref_key: "alertDialog",
            ref: alertDialog2,
            type: "dialog"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_popup_dialog, {
                type: __props.dialog.type ? __props.dialog.type : "success",
                cancelText: __props.dialog.cancelText ? __props.dialog.cancelText : "\u53D6\u6D88",
                confirmText: __props.dialog.confirmText ? __props.dialog.confirmText : "\u786E\u5B9A",
                title: __props.dialog.title ? __props.dialog.title : "\u901A\u77E5",
                content: __props.dialog.content ? __props.dialog.content : "",
                onConfirm: dialogConfirm,
                onClose: dialogClose
              }, null, 8, ["type", "cancelText", "confirmText", "title", "content"])
            ]),
            _: 1
          }, 512)
        ], 64);
      };
    }
  };
  const alertDialog = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "D:/Users/WHW/Desktop/uniapp/\u9B54\u5854/components/alertDialog/index.vue"]]);
  const _sfc_main$2 = {
    __name: "dungeoned",
    props: {
      user: {
        type: Object,
        default: {}
      },
      map: {
        type: Array,
        default: []
      },
      monster: {
        type: Object,
        default: {}
      },
      dungeonedShow: {
        type: Boolean,
        default: false
      }
    },
    emits: ["close", "success"],
    setup(__props, { emit }) {
      const props = __props;
      const floor = vue.ref(0), peoplex = vue.ref(0), peopley = vue.ref(0), idBefore = vue.ref(101), dialog = vue.reactive({
        open: false
      }), attribute = vue.reactive({
        show: false,
        user: {
          hp: 0,
          attack: 0,
          defense: 0,
          hurt: 0
        },
        monster: {
          id: 0,
          hp: 0,
          attack: 0,
          defense: 0,
          hurt: 0
        }
      });
      let timer, interval;
      vue.onMounted(() => {
        heroic();
      });
      function upKeyUp(e) {
        let peopleX = peoplex.value;
        let peopleY = peopley.value;
        if (e && e.keyCode == 38) {
          if (peopleX > 0) {
            userMove(peopleX, peopleY, peopleX - 1, peopleY);
          }
        } else if (e && e.keyCode == 37) {
          userMove(peopleX, peopleY, peopleX, peopleY - 1);
        } else if (e && e.keyCode == 40) {
          if (peopleX >= 0 && peopleX <= 9) {
            userMove(peopleX, peopleY, peopleX + 1, peopleY);
          }
        } else if (e && e.keyCode == 39) {
          userMove(peopleX, peopleY, peopleX, peopleY + 1);
        }
      }
      function touchStartKey(e) {
        timer = setTimeout(() => {
          interval = setInterval(() => {
            upKeyUp(e);
          }, 400);
        }, 500);
      }
      function touchEndKey() {
        if (timer) {
          clearTimeout(timer);
          clearInterval(interval);
        }
      }
      function userMove(x, y, x1, y1) {
        if (!props.dungeonedShow)
          return;
        let map = props.map;
        let user2 = props.user;
        let id = map[floor.value][x1][y1] > 200 ? 101 : map[floor.value][x1][y1];
        formatAppLog("log", "at pages/index/dungeoned.vue:143", idBefore.value);
        if (map[floor.value][x1][y1] == 2) {
          if (user2.hp >= 0) {
            dialog.id = 1;
            dialog.content = "\u901A\u5173\u6210\u529F";
            dialog.open = true;
          }
          return;
        } else if (map[floor.value][x1][y1] == 3) {
          if (floor.value >= 0 && floor.value < map.length - 1) {
            floor.value++;
            heroic();
          }
          return;
        } else if (map[floor.value][x1][y1] == 4) {
          if (floor.value >= 1 && floor.value < map.length) {
            floor.value--;
            heroic();
          }
          return;
        } else if (map[floor.value][x1][y1] == 101) {
          map[floor.value][x1][y1] = 1;
          map[floor.value][x][y] = idBefore.value;
        } else if (map[floor.value][x1][y1] == 102) {
          map[floor.value][x1][y1] = 1;
          map[floor.value][x][y] = idBefore.value;
        } else if (map[floor.value][x1][y1] == 201 && user2.copperKey > 0) {
          map[floor.value][x1][y1] = 1;
          map[floor.value][x][y] = idBefore.value;
          user2.copperKey--;
        } else if (map[floor.value][x1][y1] == 202 && user2.silverKey > 0) {
          map[floor.value][x1][y1] = 1;
          map[floor.value][x][y] = idBefore.value;
          user2.silverKey--;
        } else if (map[floor.value][x1][y1] == 203 && user2.goldenKey > 0) {
          map[floor.value][x1][y1] = 1;
          map[floor.value][x][y] = idBefore.value;
          user2.goldenKey--;
        } else if (map[floor.value][x1][y1] == 301) {
          map[floor.value][x1][y1] = 1;
          map[floor.value][x][y] = idBefore.value;
          user2.copperKey++;
        } else if (map[floor.value][x1][y1] == 302) {
          map[floor.value][x1][y1] = 1;
          map[floor.value][x][y] = idBefore.value;
          user2.silverKey++;
        } else if (map[floor.value][x1][y1] == 303) {
          map[floor.value][x1][y1] = 1;
          map[floor.value][x][y] = idBefore.value;
          user2.goldenKey++;
        } else if (map[floor.value][x1][y1] > 800 && map[floor.value][x1][y1] < 900) {
          if (map[floor.value][x1][y1] == 801) {
            user2.attack += 1;
          } else if (map[floor.value][x1][y1] == 802) {
            user2.defense += 1;
          } else if (map[floor.value][x1][y1] == 803) {
            user2.hp += 10;
          } else if (map[floor.value][x1][y1] == 804) {
            user2.attack += 3;
          } else if (map[floor.value][x1][y1] == 805) {
            user2.defense += 3;
          } else if (map[floor.value][x1][y1] == 806) {
            user2.hp += 30;
          }
          map[floor.value][x1][y1] = 1;
          map[floor.value][x][y] = idBefore.value;
        } else if (map[floor.value][x1][y1] > 900 && map[floor.value][x1][y1] < 999 && user2.hp > 0) {
          let monster = props.monster;
          let blon = true;
          monster.map((item) => {
            if (map[floor.value][x1][y1] == item.id) {
              const monsterBeHurt = user2.attack - item.attribute.defense > 0 ? user2.attack - item.attribute.defense : 1;
              const userBeHurt = item.attribute.attack - user2.defense > 0 ? item.attribute.attack - user2.defense : 1;
              attribute.user = {
                hp: user2.hp,
                attack: user2.attack,
                defense: user2.defense,
                hurt: monsterBeHurt,
                dropBlood: (Math.ceil(item.attribute.hp / monsterBeHurt) - 1) * userBeHurt
              };
              attribute.monster = {
                id: item.id,
                hp: item.attribute.hp,
                attack: item.attribute.attack,
                defense: item.attribute.defense,
                hurt: userBeHurt
              };
              attribute.show = true;
              if (item.attribute.hp >= monsterBeHurt) {
                user2.hp -= (Math.ceil(item.attribute.hp / monsterBeHurt) - 1) * userBeHurt;
                if (user2.hp < 1) {
                  blon = false;
                }
              }
            }
          });
          if (blon) {
            map[floor.value][x1][y1] = 1;
            map[floor.value][x][y] = idBefore.value;
          } else {
            return;
          }
        } else {
          return;
        }
        peoplex.value = x1;
        peopley.value = y1;
        idBefore.value = id;
      }
      function heroic() {
        let userPoston = {
          peoplex: 0,
          peopley: 0,
          boolean: false
        };
        props.map[floor.value].forEach((item, key) => {
          item.forEach((i, k) => {
            if (i == 1) {
              userPoston.boolean = true;
              peoplex.value = key;
              peopley.value = k;
            } else if (i == 4 || i == 99) {
              userPoston.peoplex = key;
              userPoston.peopley = k;
            }
          });
        });
        if (!userPoston.boolean) {
          peoplex.value = userPoston.peoplex;
          peopley.value = userPoston.peopley;
          idBefore.value = 4;
          props.map[floor.value][userPoston.peoplex][userPoston.peopley] = 99;
        }
        formatAppLog("log", "at pages/index/dungeoned.vue:279", peoplex.value, peopley.value);
      }
      function alertDialogSuccess() {
        if (dialog.id === 1)
          success();
        if (dialog.id === 2)
          close();
      }
      function alertDialogFilled() {
        if (dialog.id === 1)
          success();
        if (dialog.id === 2)
          user.hp += number;
      }
      function tooip(number2) {
        attribute.show = false;
        let user2 = props.user;
        if (user2.hp < 1) {
          dialog.id = 2;
          dialog.type = "warning";
          dialog.confirmText = "\u9000\u51FA";
          dialog.cancelText = "\u62A2\u6551\u4E00\u4E0B";
          dialog.content = "\u4F60\u6B7B\u4E86,\u8BF7\u5C1D\u8BD5\u6362\u4E2A\u601D\u8DEF";
          dialog.title = "\u63D0\u793A";
        }
      }
      function success() {
        emit("success", true);
      }
      function close() {
        emit("close", false);
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createElementVNode("div", { class: "dungeonedBox" }, [
            vue.createElementVNode("div", { class: "G_box" }, [
              vue.createElementVNode("div", { class: "map_box" }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(__props.map[floor.value], (i, k) => {
                  return vue.openBlock(), vue.createElementBlock("div", {
                    class: "map_content_box",
                    key: k
                  }, [
                    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(i, (item, key) => {
                      return vue.openBlock(), vue.createElementBlock("div", {
                        class: "map_content_box",
                        key
                      }, [
                        vue.createElementVNode("img", {
                          class: "G_image",
                          src: "http://jiuaibuni.top/dome/img/dungeoned/" + item + ".png"
                        }, null, 8, ["src"])
                      ]);
                    }), 128))
                  ]);
                }), 128))
              ])
            ]),
            vue.createElementVNode("div", { class: "choose_box" }, [
              vue.createElementVNode("div", { class: "user_box" }, [
                vue.createElementVNode("div", { class: "user_content" }, [
                  vue.createElementVNode("p", { class: "p" }, "\u697C\u5C42:" + vue.toDisplayString(floor.value + 1), 1)
                ]),
                vue.createElementVNode("div", { class: "user_content" }, [
                  vue.createElementVNode("p", { class: "p" }, "\u751F\u547D:" + vue.toDisplayString(__props.user.hp), 1),
                  vue.createElementVNode("p", { class: "p" }, "\u653B\u51FB:" + vue.toDisplayString(__props.user.attack), 1),
                  vue.createElementVNode("p", { class: "p" }, "\u9632\u5FA1:" + vue.toDisplayString(__props.user.defense), 1)
                ]),
                vue.createElementVNode("div", { class: "user_content" }, [
                  vue.createElementVNode("p", { class: "p" }, "\u94DC\u94A5\u5319:" + vue.toDisplayString(__props.user.copperKey), 1),
                  vue.createElementVNode("p", { class: "p" }, "\u94F6\u94A5\u5319:" + vue.toDisplayString(__props.user.silverKey), 1),
                  vue.createElementVNode("p", { class: "p" }, "\u91D1\u94A5\u5319:" + vue.toDisplayString(__props.user.goldenKey), 1)
                ])
              ]),
              vue.createElementVNode("div", { class: "postion_box" }, [
                vue.createElementVNode("div", { class: "postion_button" }, "\u56FE\u9274"),
                vue.createElementVNode("div", {
                  class: "postion_button",
                  onClick: _cache[0] || (_cache[0] = ($event) => upKeyUp({ keyCode: 38 })),
                  onTouchstart: _cache[1] || (_cache[1] = ($event) => touchStartKey({ keyCode: 38 })),
                  onTouchend: _cache[2] || (_cache[2] = ($event) => touchEndKey())
                }, "\u4E0A", 32),
                vue.createElementVNode("div", {
                  class: "postion_button",
                  onClick: success
                }, "\u9000\u51FA"),
                vue.createElementVNode("div", {
                  class: "postion_button",
                  onClick: _cache[3] || (_cache[3] = ($event) => upKeyUp({ keyCode: 37 })),
                  onTouchstart: _cache[4] || (_cache[4] = ($event) => touchStartKey({ keyCode: 37 })),
                  onTouchend: _cache[5] || (_cache[5] = ($event) => touchEndKey())
                }, "\u5DE6", 32),
                vue.createElementVNode("div", {
                  class: "postion_button",
                  onClick: _cache[6] || (_cache[6] = ($event) => upKeyUp({ keyCode: 40 })),
                  onTouchstart: _cache[7] || (_cache[7] = ($event) => touchStartKey({ keyCode: 40 })),
                  onTouchend: _cache[8] || (_cache[8] = ($event) => touchEndKey())
                }, "\u4E0B", 32),
                vue.createElementVNode("div", {
                  class: "postion_button",
                  onClick: _cache[9] || (_cache[9] = ($event) => upKeyUp({ keyCode: 39 })),
                  onTouchstart: _cache[10] || (_cache[10] = ($event) => touchStartKey({ keyCode: 39 })),
                  onTouchend: _cache[11] || (_cache[11] = ($event) => touchEndKey())
                }, "\u53F3", 32)
              ])
            ])
          ]),
          vue.createElementVNode("div", { style: { "clear": "both" } }),
          vue.createVNode(alertDialog, {
            dialog,
            open: dialog.open,
            onSuccess: alertDialogSuccess,
            onFilled: alertDialogFilled
          }, null, 8, ["dialog", "open"]),
          attribute.show ? (vue.openBlock(), vue.createBlock(combatInterface, {
            key: 0,
            attribute,
            onSuccess: tooip
          }, null, 8, ["attribute"])) : vue.createCommentVNode("v-if", true)
        ], 64);
      };
    }
  };
  const PagesIndexDungeoned = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-dc88a529"], ["__file", "D:/Users/WHW/Desktop/uniapp/\u9B54\u5854/pages/index/dungeoned.vue"]]);
  const http = {
    api: "http://jiuaibuni.top:9099/",
    getDeviceInfo(key) {
      let res = uni.getSystemInfoSync();
      if (key) {
        return res[key];
      }
      return res;
    },
    getTimestamp() {
      let d = new Date();
      return d.getTime();
    },
    setHeader() {
      return {
        "token": "aa1170338b82e4e54586beb9fd618317"
      };
    },
    request(url, method, data, isLoad) {
      let _this = this;
      if (isLoad) {
        uni.showLoading({
          title: "\u52A0\u8F7D\u4E2D..."
        });
      }
      return new Promise((resolve, reject) => {
        uni.request({
          url: _this.api + url,
          data,
          header: _this.setHeader(),
          method,
          success(res) {
            resolve(_this.response(res.data, _this.api + url));
          },
          fail(res) {
            formatAppLog("log", "at utils/http.js:36", res);
            uni.showToast({
              title: "\u8BF7\u6C42\u8D85\u65F6\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5!",
              icon: "none"
            });
          },
          complete() {
            if (isLoad) {
              uni.hideLoading();
            }
          }
        });
      });
    },
    response(result, url) {
      if (result.code == "0000") {
        return result;
      }
      switch (result.error_code) {
        case 401:
          formatAppLog("log", "at utils/http.js:59", "\u6743\u9650\u4E0D\u8DB3\uFF0C\u67E5\u770B\u8BF7\u6C42\u5934");
          break;
        case 402:
          uni.removeStorageSync("token");
          formatAppLog("log", "at utils/http.js:64", "\u672A\u767B\u9646\uFF0C\u8BF7\u505A\u8F6C\u767B\u9646\u9875\u9762");
          uni.navigateTo({
            url: "/pages/login/login"
          });
          break;
        case 403:
          formatAppLog("log", "at utils/http.js:71", result);
          formatAppLog("log", "at utils/http.js:72", "\u8BF7\u6C42\u53C2\u6570\u6709\u8BEF");
          return result;
        case 404:
          return result;
        case 500:
          formatAppLog("log", "at utils/http.js:81", "\u670D\u52A1\u5668\u9519\u8BEF");
          formatAppLog("log", "at utils/http.js:82", url);
          break;
      }
    },
    async get(url, data = {}, isLoad = true) {
      return await this.request(url, "GET", data, isLoad);
    },
    async post(url, data = {}, isLoad = true) {
      return await this.request(url, "POST", data, isLoad);
    },
    async put(url, data = {}, isLoad = true) {
      return await this.request(url, "PUT", data, isLoad);
    },
    async delete(url, isLoad = true, data = {}) {
      return await this.request(url, "DELETE", data, isLoad);
    },
    upload(url, file, progress, name = "file", data = {}, isLoad = false) {
      const _this = this;
      let filePath = "";
      let files = [];
      if (typeof file === "string") {
        filePath = file;
      } else {
        files = file;
      }
      return new Promise((resolve, reject) => {
        const up = uni.uploadFile({
          url: this.api + url,
          data,
          header: _this.setHeader(),
          filePath,
          name,
          files,
          success(res) {
            resolve(res);
            formatAppLog("log", "at utils/http.js:117", res);
          },
          fail(res) {
            formatAppLog("log", "at utils/http.js:120", res);
          }
        });
        if (progress) {
          up.onProgressUpdate((res) => {
            progress(res.progress);
          });
        }
      });
    },
    uploadToHW(url, file, data, progress) {
      return new Promise((resolve, reject) => {
        const up = uni.uploadFile({
          url,
          formData: data,
          filePath: file,
          name: "file",
          success(res) {
            formatAppLog("log", "at utils/http.js:139", res);
            resolve(res);
          },
          fail(res) {
            reject(res);
            formatAppLog("log", "at utils/http.js:144", res);
          },
          complete() {
          }
        });
        up.onProgressUpdate((res) => {
          progress(res.progress);
        });
      });
    }
  };
  const getDungeonedConfig = (params) => http.get("game/getDungeonedConfig", params);
  const getDungeonedCustomsList = (params) => http.get("game/getDungeonedCustomsList", params);
  const getDungeonedThumbList = (params) => http.get("game/getDungeonedThumbList", params);
  const _sfc_main$1 = {
    __name: "index",
    setup(__props) {
      const Dungeoned = vue.reactive({
        user: [],
        map: {},
        monster: [],
        show: false,
        customsList: [],
        thumbList: []
      });
      const state = vue.reactive({
        customsShow: false,
        thumbShow: false,
        customsScrollTop: 0,
        thumbScrollTop: 0,
        dungeonedId: ""
      });
      const { thumbScrollTop, customsScrollTop, dungeonedId, thumbShow, customsShow } = vue.toRefs(state);
      function getCustomsList() {
        getDungeonedCustomsList({
          currentPage: 1,
          pageSize: 10
        }).then((res) => {
          if (res.code === "0000") {
            Dungeoned.customsList = res.data.list;
            state.customsShow = true;
          }
        });
      }
      function getThumbList() {
        getDungeonedThumbList({
          currentPage: 1,
          pageSize: 10
        }).then((res) => {
          if (res.code === "0000") {
            Dungeoned.thumbList = res.data.list;
            state.thumbShow = true;
          }
        });
      }
      function getData(value) {
        value ? state.dungeonedId = value : "";
        getDungeonedConfig({
          dungeonedId: state.dungeonedId
        }).then((res) => {
          if (res.code === "0000") {
            Dungeoned.user = JSON.parse(res.data[0].user);
            Dungeoned.map = JSON.parse(res.data[0].map);
            Dungeoned.show = true;
            Dungeoned.monster = drawer[drawer.length - 1].config;
          }
        });
      }
      function closeList() {
        state.thumbShow = false;
        state.customsShow = false;
      }
      function close(blon) {
        Dungeoned.show = blon;
      }
      function success() {
        Dungeoned.show = false;
      }
      function upper(e) {
        formatAppLog("log", "at pages/index/index.vue:108", e);
      }
      function lower(e) {
        formatAppLog("log", "at pages/index/index.vue:111", e);
      }
      function scroll(e) {
        formatAppLog("log", "at pages/index/index.vue:114", e);
      }
      const drawer = [
        {
          name: "\u5EFA\u7B51",
          config: [
            {
              id: "0",
              name: "\u5899"
            },
            {
              id: "3",
              name: "\u697C\u68AF(\u4E0A\u697C)"
            },
            {
              id: "4",
              name: "\u697C\u68AF(\u4E0B\u697C)"
            },
            {
              id: "101",
              name: "\u5730\u677F"
            },
            {
              id: "102",
              name: "\u5BC6\u9053"
            },
            {
              id: "201",
              name: "\u94DC\u95E8"
            },
            {
              id: "202",
              name: "\u94F6\u95E8"
            },
            {
              id: "203",
              name: "\u91D1\u95E8"
            }
          ]
        },
        {
          name: "\u4EBA\u7269",
          config: [
            {
              id: "1",
              name: "\u4E3B\u89D2"
            },
            {
              id: "2",
              name: "\u516C\u4E3B"
            }
          ]
        },
        {
          name: "\u9053\u5177",
          config: [
            {
              id: "301",
              name: "\u94DC\u94A5\u5319"
            },
            {
              id: "302",
              name: "\u94F6\u94A5\u5319"
            },
            {
              id: "303",
              name: "\u91D1\u94A5\u5319"
            }
          ]
        },
        {
          name: "\u589E\u76CA\u9053\u5177",
          config: [
            {
              id: "801",
              name: "\u5C0F\u5251(+1\u529F)"
            },
            {
              id: "802",
              name: "\u5C0F\u76FE(+1\u9632)"
            },
            {
              id: "803",
              name: "\u5C0F\u8840(+10\u8840)"
            },
            {
              id: "804",
              name: "\u4E2D\u5251(+3\u529F)"
            },
            {
              id: "805",
              name: "\u4E2D\u76FE(+3\u9632)"
            },
            {
              id: "806",
              name: "\u4E2D\u8840(+30\u8840)"
            }
          ]
        },
        {
          name: "\u602A\u7269",
          config: [
            {
              id: "901",
              name: "\u53F2\u83B1\u5990",
              attribute: {
                hp: 80,
                attack: 15,
                defense: 10
              }
            },
            {
              id: "902",
              name: "\u8759\u8760",
              attribute: {
                hp: 100,
                attack: 15,
                defense: 15
              }
            },
            {
              id: "903",
              name: "\u9AB7\u9AC5\u58EB\u5175",
              attribute: {
                hp: 120,
                attack: 40,
                defense: 8
              }
            },
            {
              id: "904",
              name: "\u9AB7\u9AC5\u5B88\u536B",
              attribute: {
                hp: 250,
                attack: 8,
                defense: 30
              }
            },
            {
              id: "905",
              name: "\u53F2\u83B1\u59C6",
              attribute: {
                hp: 120,
                attack: 12,
                defense: 8
              }
            },
            {
              id: "906",
              name: "\u6CD5\u5E08",
              attribute: {
                hp: 80,
                attack: 100,
                defense: 20
              }
            },
            {
              id: "907",
              name: "\u91CE\u4EBA",
              attribute: {
                hp: 230,
                attack: 80,
                defense: 40
              }
            },
            {
              id: "908",
              name: "\u7687\u5BB6\u5B88\u536B",
              attribute: {
                hp: 500,
                attack: 100,
                defense: 100
              }
            },
            {
              id: "909",
              name: "BOSS",
              attribute: {
                hp: 1e3,
                attack: 200,
                defense: 200
              }
            }
          ]
        }
      ];
      return (_ctx, _cache) => {
        const _component_uni_list_item = resolveEasycom(vue.resolveDynamicComponent("uni-list-item"), __easycom_0$2);
        const _component_uni_list = resolveEasycom(vue.resolveDynamicComponent("uni-list"), __easycom_1$1);
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createElementVNode("div", { class: "content" }, [
            vue.withDirectives(vue.createElementVNode("input", {
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(dungeonedId) ? dungeonedId.value = $event : null),
              placeholder: "\u8BF7\u8F93\u5165\u8981\u5F00\u542F\u7684\u5730\u56FE\u7F16\u53F7"
            }, null, 512), [
              [vue.vModelText, vue.unref(dungeonedId)]
            ]),
            vue.createElementVNode("button", {
              type: "success",
              onClick: _cache[1] || (_cache[1] = ($event) => getData(false)),
              plain: ""
            }, "\u5F00\u59CB\u6E38\u620F"),
            vue.createElementVNode("button", {
              type: "success",
              onClick: getCustomsList,
              plain: ""
            }, "\u901A\u5173\u699C"),
            vue.createElementVNode("button", {
              type: "success",
              onClick: getThumbList,
              plain: ""
            }, "\u70B9\u8D5E\u699C")
          ]),
          Dungeoned.show ? (vue.openBlock(), vue.createBlock(PagesIndexDungeoned, {
            key: 0,
            user: Dungeoned.user,
            map: Dungeoned.map,
            dungeonedShow: Dungeoned.show,
            onClose: close,
            monster: Dungeoned.monster,
            onSuccess: success
          }, null, 8, ["user", "map", "dungeonedShow", "monster"])) : vue.createCommentVNode("v-if", true),
          vue.withDirectives(vue.createElementVNode("scroll-view", {
            "scroll-top": vue.unref(customsScrollTop),
            "scroll-y": "true",
            class: "scroll-Y",
            onScrolltoupper: upper,
            onScrolltolower: lower,
            onScroll: scroll
          }, [
            vue.createVNode(_component_uni_list, null, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_uni_list_item, {
                  title: "\u5173\u95ED\u699C\u5355",
                  clickable: "",
                  onClick: _cache[2] || (_cache[2] = ($event) => closeList())
                }),
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(Dungeoned.customsList, (item, index) => {
                  return vue.openBlock(), vue.createBlock(_component_uni_list_item, {
                    key: index,
                    title: item.id,
                    note: "\u901A\u5173\u6B21\u6570" + item.customs,
                    avatarCircle: true,
                    showArrow: "",
                    thumb: "http://jiuaibuni.top/dome/img/dungeoned/90" + (index + 1) + ".png",
                    "thumb-size": "lg",
                    rightText: "\u70B9\u51FB\u8FDB\u5165\u5730\u56FE",
                    link: "",
                    onClick: ($event) => getData(item.id)
                  }, null, 8, ["title", "note", "thumb", "onClick"]);
                }), 128))
              ]),
              _: 1
            })
          ], 40, ["scroll-top"]), [
            [vue.vShow, vue.unref(customsShow)]
          ]),
          vue.withDirectives(vue.createElementVNode("scroll-view", {
            "scroll-top": vue.unref(thumbScrollTop),
            "scroll-y": "true",
            class: "scroll-Y",
            onScrolltoupper: upper,
            onScrolltolower: lower,
            onScroll: scroll
          }, [
            vue.createVNode(_component_uni_list, null, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_uni_list_item, {
                  title: "\u5173\u95ED\u699C\u5355",
                  clickable: "",
                  onClick: _cache[3] || (_cache[3] = ($event) => closeList())
                }),
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(Dungeoned.thumbList, (item, index) => {
                  return vue.openBlock(), vue.createBlock(_component_uni_list_item, {
                    key: index,
                    title: item.id,
                    note: "\u70B9\u8D5E\u6570" + item.thumb,
                    avatarCircle: true,
                    showArrow: "",
                    thumb: "http://jiuaibuni.top/dome/img/dungeoned/90" + (index + 1) + ".png",
                    "thumb-size": "lg",
                    rightText: "\u70B9\u51FB\u8FDB\u5165\u5730\u56FE",
                    link: "",
                    onClick: ($event) => getData(item.id)
                  }, null, 8, ["title", "note", "thumb", "onClick"]);
                }), 128))
              ]),
              _: 1
            })
          ], 40, ["scroll-top"]), [
            [vue.vShow, vue.unref(thumbShow)]
          ])
        ], 64);
      };
    }
  };
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "D:/Users/WHW/Desktop/uniapp/\u9B54\u5854/pages/index/index.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/index/dungeoned", PagesIndexDungeoned);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/Users/WHW/Desktop/uniapp/\u9B54\u5854/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
