/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./flame.svg */ "./src/flame.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./splash.svg */ "./src/splash.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".field {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: x-large;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    width:50px;\n    height: 50px;\n    border-width: 1px;\n    border-style: solid;\n    border-color: #52483b;\n}\n\n.row {\n    display: flex;\n    flex-direction: row;\n}\n\n#main {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    justify-content: center;\n    align-items: center;\n    gap: 30px;\n}\n\n.hit {\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #efa00b;\n    color: #800000;\n    pointer-events: none;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n}\n\n\n.take-over {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    background-color: rgba(128, 128, 128, 0.281);\n    backdrop-filter: blur(8px); \n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    display: flex\n}\n\n.winner-message {\n    font-size: xx-large;\n}\n\n.miss {\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    color: #aca9a5;\n    pointer-events: none;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size: cover;\n}\n\n#nav-buttons {\n    display: flex;\n    gap: 10px;\n    height: 50px;\n    margin-top: 50px;\n    width: 100%;\n}\n\n\nbutton {\n\nwidth: 120px;\n  background-color: #FFFFFF;\n  border: 1px solid rgb(209,213,219);\n  border-radius: .5rem;\n  box-sizing: border-box;\n  color: #111827;\n  font-family: \"Inter var\",ui-sans-serif,system-ui,-apple-system,system-ui,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";\n  font-size: .875rem;\n  font-weight: 600;\n  line-height: 1.25rem;\n  padding: .75rem 1rem;\n  text-align: center;\n  text-decoration: none #D1D5DB solid;\n  text-decoration-thickness: auto;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  cursor: pointer;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n}\n\nbutton:hover {\n  background-color: rgb(249,250,251);\n}\n\nbutton:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\nbutton:focus-visible {\n  box-shadow: none;\n}\n\n\n#shipsection {\n    display: flex;\n    height: 100%;\n    flex-direction: column;\n    justify-content: center;\n    gap: 10px;\n}\n\n#shipcontainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between\n}\n\n.material-symbols-outlined {\n    font-variation-settings:\n    'FILL' 0,\n    'wght' 400,\n    'GRAD' 0,\n    'opsz' 48\n  }\n\n.ship {\n    display:flex;\n    height: 50px;\n}\n\n#carrier { \n    width: 250px;\n    background-color: #b1ddf1;\n}\n\n#battleship { \n    width: 200px;\n    background-color: #9f87af;\n}\n\n#cruiser { \n    width: 150px;\n    background-color: #88527f;\n}\n\n#submarine { \n    width: 150px;\n    background-color: #614344;\n}\n\n#destroyer { \n    width: 100px;\n    background-color: #332c23;\n}\n\n.carrier { \n    background-color: #b1ddf1;\n}\n\n.battleship { \n    background-color: #9f87af;\n}\n\n.cruiser { \n    background-color: #88527f;\n}\n\n.submarine { \n    background-color: #614344;\n}\n\n.destroyer { \n    background-color: #332c23;\n}\n\n.drag-over {\n    background-color: #575a4b7c;\n}\n\n.hide {\n    display: none;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,4DAA4D;IAC5D,UAAU;IACV,YAAY;IACZ,iBAAiB;IACjB,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,yBAAyB;IACzB,cAAc;IACd,oBAAoB;IACpB,yDAAkC;IAClC,sBAAsB;AAC1B;;;AAGA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,OAAO;IACP,MAAM;IACN,4CAA4C;IAC5C,0BAA0B;IAC1B,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT;AACJ;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,cAAc;IACd,oBAAoB;IACpB,yDAAmC;IACnC,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,SAAS;IACT,YAAY;IACZ,gBAAgB;IAChB,WAAW;AACf;;;AAGA;;AAEA,YAAY;EACV,yBAAyB;EACzB,kCAAkC;EAClC,oBAAoB;EACpB,sBAAsB;EACtB,cAAc;EACd,kNAAkN;EAClN,kBAAkB;EAClB,gBAAgB;EAChB,oBAAoB;EACpB,oBAAoB;EACpB,kBAAkB;EAClB,mCAAmC;EACnC,+BAA+B;EAC/B,2CAA2C;EAC3C,eAAe;EACf,iBAAiB;EACjB,yBAAyB;EACzB,0BAA0B;AAC5B;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;;AAGA;IACI,aAAa;IACb,YAAY;IACZ,sBAAsB;IACtB,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB;AACJ;;AAEA;IACI;;;;;EAKF;;AAEF;IACI,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,aAAa;AACjB","sourcesContent":[".field {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: x-large;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    width:50px;\n    height: 50px;\n    border-width: 1px;\n    border-style: solid;\n    border-color: #52483b;\n}\n\n.row {\n    display: flex;\n    flex-direction: row;\n}\n\n#main {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    justify-content: center;\n    align-items: center;\n    gap: 30px;\n}\n\n.hit {\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #efa00b;\n    color: #800000;\n    pointer-events: none;\n    background-image: url(./flame.svg);\n    background-size: cover;\n}\n\n\n.take-over {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    background-color: rgba(128, 128, 128, 0.281);\n    backdrop-filter: blur(8px); \n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    display: flex\n}\n\n.winner-message {\n    font-size: xx-large;\n}\n\n.miss {\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    color: #aca9a5;\n    pointer-events: none;\n    background-image: url(./splash.svg);\n    background-size: cover;\n}\n\n#nav-buttons {\n    display: flex;\n    gap: 10px;\n    height: 50px;\n    margin-top: 50px;\n    width: 100%;\n}\n\n\nbutton {\n\nwidth: 120px;\n  background-color: #FFFFFF;\n  border: 1px solid rgb(209,213,219);\n  border-radius: .5rem;\n  box-sizing: border-box;\n  color: #111827;\n  font-family: \"Inter var\",ui-sans-serif,system-ui,-apple-system,system-ui,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";\n  font-size: .875rem;\n  font-weight: 600;\n  line-height: 1.25rem;\n  padding: .75rem 1rem;\n  text-align: center;\n  text-decoration: none #D1D5DB solid;\n  text-decoration-thickness: auto;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  cursor: pointer;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n}\n\nbutton:hover {\n  background-color: rgb(249,250,251);\n}\n\nbutton:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\nbutton:focus-visible {\n  box-shadow: none;\n}\n\n\n#shipsection {\n    display: flex;\n    height: 100%;\n    flex-direction: column;\n    justify-content: center;\n    gap: 10px;\n}\n\n#shipcontainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between\n}\n\n.material-symbols-outlined {\n    font-variation-settings:\n    'FILL' 0,\n    'wght' 400,\n    'GRAD' 0,\n    'opsz' 48\n  }\n\n.ship {\n    display:flex;\n    height: 50px;\n}\n\n#carrier { \n    width: 250px;\n    background-color: #b1ddf1;\n}\n\n#battleship { \n    width: 200px;\n    background-color: #9f87af;\n}\n\n#cruiser { \n    width: 150px;\n    background-color: #88527f;\n}\n\n#submarine { \n    width: 150px;\n    background-color: #614344;\n}\n\n#destroyer { \n    width: 100px;\n    background-color: #332c23;\n}\n\n.carrier { \n    background-color: #b1ddf1;\n}\n\n.battleship { \n    background-color: #9f87af;\n}\n\n.cruiser { \n    background-color: #88527f;\n}\n\n.submarine { \n    background-color: #614344;\n}\n\n.destroyer { \n    background-color: #332c23;\n}\n\n.drag-over {\n    background-color: #575a4b7c;\n}\n\n.hide {\n    display: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/pubsub-js/src/pubsub.js":
/*!**********************************************!*\
  !*** ./node_modules/pubsub-js/src/pubsub.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * Copyright (c) 2010,2011,2012,2013,2014 Morgan Roderick http://roderick.dk
 * License: MIT - http://mrgnrdrck.mit-license.org
 *
 * https://github.com/mroderick/PubSubJS
 */

(function (root, factory){
    'use strict';

    var PubSub = {};

    if (root.PubSub) {
        PubSub = root.PubSub;
        console.warn("PubSub already loaded, using existing version");
    } else {
        root.PubSub = PubSub;
        factory(PubSub);
    }
    // CommonJS and Node.js module support
    if (true){
        if (module !== undefined && module.exports) {
            exports = module.exports = PubSub; // Node.js specific `module.exports`
        }
        exports.PubSub = PubSub; // CommonJS module 1.1.1 spec
        module.exports = exports = PubSub; // CommonJS
    }
    // AMD support
    /* eslint-disable no-undef */
    else {}

}(( typeof window === 'object' && window ) || this, function (PubSub){
    'use strict';

    var messages = {},
        lastUid = -1,
        ALL_SUBSCRIBING_MSG = '*';

    function hasKeys(obj){
        var key;

        for (key in obj){
            if ( Object.prototype.hasOwnProperty.call(obj, key) ){
                return true;
            }
        }
        return false;
    }

    /**
     * Returns a function that throws the passed exception, for use as argument for setTimeout
     * @alias throwException
     * @function
     * @param { Object } ex An Error object
     */
    function throwException( ex ){
        return function reThrowException(){
            throw ex;
        };
    }

    function callSubscriberWithDelayedExceptions( subscriber, message, data ){
        try {
            subscriber( message, data );
        } catch( ex ){
            setTimeout( throwException( ex ), 0);
        }
    }

    function callSubscriberWithImmediateExceptions( subscriber, message, data ){
        subscriber( message, data );
    }

    function deliverMessage( originalMessage, matchedMessage, data, immediateExceptions ){
        var subscribers = messages[matchedMessage],
            callSubscriber = immediateExceptions ? callSubscriberWithImmediateExceptions : callSubscriberWithDelayedExceptions,
            s;

        if ( !Object.prototype.hasOwnProperty.call( messages, matchedMessage ) ) {
            return;
        }

        for (s in subscribers){
            if ( Object.prototype.hasOwnProperty.call(subscribers, s)){
                callSubscriber( subscribers[s], originalMessage, data );
            }
        }
    }

    function createDeliveryFunction( message, data, immediateExceptions ){
        return function deliverNamespaced(){
            var topic = String( message ),
                position = topic.lastIndexOf( '.' );

            // deliver the message as it is now
            deliverMessage(message, message, data, immediateExceptions);

            // trim the hierarchy and deliver message to each level
            while( position !== -1 ){
                topic = topic.substr( 0, position );
                position = topic.lastIndexOf('.');
                deliverMessage( message, topic, data, immediateExceptions );
            }

            deliverMessage(message, ALL_SUBSCRIBING_MSG, data, immediateExceptions);
        };
    }

    function hasDirectSubscribersFor( message ) {
        var topic = String( message ),
            found = Boolean(Object.prototype.hasOwnProperty.call( messages, topic ) && hasKeys(messages[topic]));

        return found;
    }

    function messageHasSubscribers( message ){
        var topic = String( message ),
            found = hasDirectSubscribersFor(topic) || hasDirectSubscribersFor(ALL_SUBSCRIBING_MSG),
            position = topic.lastIndexOf( '.' );

        while ( !found && position !== -1 ){
            topic = topic.substr( 0, position );
            position = topic.lastIndexOf( '.' );
            found = hasDirectSubscribersFor(topic);
        }

        return found;
    }

    function publish( message, data, sync, immediateExceptions ){
        message = (typeof message === 'symbol') ? message.toString() : message;

        var deliver = createDeliveryFunction( message, data, immediateExceptions ),
            hasSubscribers = messageHasSubscribers( message );

        if ( !hasSubscribers ){
            return false;
        }

        if ( sync === true ){
            deliver();
        } else {
            setTimeout( deliver, 0 );
        }
        return true;
    }

    /**
     * Publishes the message, passing the data to it's subscribers
     * @function
     * @alias publish
     * @param { String } message The message to publish
     * @param {} data The data to pass to subscribers
     * @return { Boolean }
     */
    PubSub.publish = function( message, data ){
        return publish( message, data, false, PubSub.immediateExceptions );
    };

    /**
     * Publishes the message synchronously, passing the data to it's subscribers
     * @function
     * @alias publishSync
     * @param { String } message The message to publish
     * @param {} data The data to pass to subscribers
     * @return { Boolean }
     */
    PubSub.publishSync = function( message, data ){
        return publish( message, data, true, PubSub.immediateExceptions );
    };

    /**
     * Subscribes the passed function to the passed message. Every returned token is unique and should be stored if you need to unsubscribe
     * @function
     * @alias subscribe
     * @param { String } message The message to subscribe to
     * @param { Function } func The function to call when a new message is published
     * @return { String }
     */
    PubSub.subscribe = function( message, func ){
        if ( typeof func !== 'function'){
            return false;
        }

        message = (typeof message === 'symbol') ? message.toString() : message;

        // message is not registered yet
        if ( !Object.prototype.hasOwnProperty.call( messages, message ) ){
            messages[message] = {};
        }

        // forcing token as String, to allow for future expansions without breaking usage
        // and allow for easy use as key names for the 'messages' object
        var token = 'uid_' + String(++lastUid);
        messages[message][token] = func;

        // return token for unsubscribing
        return token;
    };

    PubSub.subscribeAll = function( func ){
        return PubSub.subscribe(ALL_SUBSCRIBING_MSG, func);
    };

    /**
     * Subscribes the passed function to the passed message once
     * @function
     * @alias subscribeOnce
     * @param { String } message The message to subscribe to
     * @param { Function } func The function to call when a new message is published
     * @return { PubSub }
     */
    PubSub.subscribeOnce = function( message, func ){
        var token = PubSub.subscribe( message, function(){
            // before func apply, unsubscribe message
            PubSub.unsubscribe( token );
            func.apply( this, arguments );
        });
        return PubSub;
    };

    /**
     * Clears all subscriptions
     * @function
     * @public
     * @alias clearAllSubscriptions
     */
    PubSub.clearAllSubscriptions = function clearAllSubscriptions(){
        messages = {};
    };

    /**
     * Clear subscriptions by the topic
     * @function
     * @public
     * @alias clearAllSubscriptions
     * @return { int }
     */
    PubSub.clearSubscriptions = function clearSubscriptions(topic){
        var m;
        for (m in messages){
            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0){
                delete messages[m];
            }
        }
    };

    /**
       Count subscriptions by the topic
     * @function
     * @public
     * @alias countSubscriptions
     * @return { Array }
    */
    PubSub.countSubscriptions = function countSubscriptions(topic){
        var m;
        // eslint-disable-next-line no-unused-vars
        var token;
        var count = 0;
        for (m in messages) {
            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0) {
                for (token in messages[m]) {
                    count++;
                }
                break;
            }
        }
        return count;
    };


    /**
       Gets subscriptions by the topic
     * @function
     * @public
     * @alias getSubscriptions
    */
    PubSub.getSubscriptions = function getSubscriptions(topic){
        var m;
        var list = [];
        for (m in messages){
            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0){
                list.push(m);
            }
        }
        return list;
    };

    /**
     * Removes subscriptions
     *
     * - When passed a token, removes a specific subscription.
     *
	 * - When passed a function, removes all subscriptions for that function
     *
	 * - When passed a topic, removes all subscriptions for that topic (hierarchy)
     * @function
     * @public
     * @alias subscribeOnce
     * @param { String | Function } value A token, function or topic to unsubscribe from
     * @example // Unsubscribing with a token
     * var token = PubSub.subscribe('mytopic', myFunc);
     * PubSub.unsubscribe(token);
     * @example // Unsubscribing with a function
     * PubSub.unsubscribe(myFunc);
     * @example // Unsubscribing from a topic
     * PubSub.unsubscribe('mytopic');
     */
    PubSub.unsubscribe = function(value){
        var descendantTopicExists = function(topic) {
                var m;
                for ( m in messages ){
                    if ( Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0 ){
                        // a descendant of the topic exists:
                        return true;
                    }
                }

                return false;
            },
            isTopic    = typeof value === 'string' && ( Object.prototype.hasOwnProperty.call(messages, value) || descendantTopicExists(value) ),
            isToken    = !isTopic && typeof value === 'string',
            isFunction = typeof value === 'function',
            result = false,
            m, message, t;

        if (isTopic){
            PubSub.clearSubscriptions(value);
            return;
        }

        for ( m in messages ){
            if ( Object.prototype.hasOwnProperty.call( messages, m ) ){
                message = messages[m];

                if ( isToken && message[value] ){
                    delete message[value];
                    result = value;
                    // tokens are unique, so we can just stop here
                    break;
                }

                if (isFunction) {
                    for ( t in message ){
                        if (Object.prototype.hasOwnProperty.call(message, t) && message[t] === value){
                            delete message[t];
                            result = true;
                        }
                    }
                }
            }
        }

        return result;
    };
}));


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom-helper.js":
/*!***************************!*\
  !*** ./src/dom-helper.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domHelper": () => (/* binding */ domHelper)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");


function domHelper() { return {
    

    drawBoard(user) {

    let main = document.getElementById("main")
    let owner = document.createElement('div')
    owner.className = user
        for (let i = 10; i>0; i--) {
            let row = document.createElement('div')
            row.className = "row"
            for (let j = 1; j<11; j++) {
                let field = document.createElement('div')
                field.className = "field"
                field.id = user + "x" + j + "y" + i
                field.dataset.x = j
                field.dataset.y = i
                field.addEventListener('dragenter', (e) => {
                    PubSub.publish('drag', e)})
                field.addEventListener('dragOver', (e) => {
                    PubSub.publish('drag', e)})
                field.addEventListener('dragleave', (e) => {
                    e.preventDefault();
                    PubSub.publish('dragLeave', e)})
                field.addEventListener("drop", (e) => {
                    e.preventDefault()
                    let id = e.dataTransfer.getData('text');
                    let message = []
                    message.push({"id" : id}, {"x": e.target.dataset.x}, {"y": e.target.dataset.y}, {e})

                    PubSub.publish('drop', message)})
                if (user == "computer") {
                    field.addEventListener('click', () => {
                        PubSub.publish('button-click', [j, i]);
                    })
                }
                row.appendChild(field)
            }
            owner.appendChild(row)
        }
    main.insertBefore(owner, main.firstChild)

    this.draggAndDrop()

    },

    draggAndDrop () {

        document.addEventListener("dragover", function(event) {
            event.preventDefault();
          });

        var dragover = function (msg, data) {
            data.preventDefault();
            data.target.classList.add('drag-over');
        }
        var dragleave = function (msg, data) {
            data.preventDefault();
            data.target.classList.remove('drag-over');
        }

        var dragstart = function(message, data) {
            data.preventDefault();
            data.dataTransfer.setData("text", data.target.id);
            setTimeout(() => {
                data.target.classList.add('hide');
            }, 0);
        }

        var drop = function(message, data) {
            data[3].e.target.classList.remove('drag-over')
            let ship = document.getElementById(data[0].id)
            ship.remove()
        }

        var noOption = function(message, data) {
            let ship = document.getElementById(data.newShip.name)
            ship.classList.remove('hide')
        }

        PubSub.subscribe('drag', dragover);
        PubSub.subscribe('dragLeave', dragleave);
        PubSub.subscribe('dragstart', dragstart);
        PubSub.subscribe('drop', drop);
        PubSub.subscribe('no-option', noOption);
    

    },
    
    removeShipSection () {
        let shipSection = document.getElementById("shipcontainer")
        shipSection.remove()
    },
    
    drawShipsManual() {
        let main = document.getElementById("main")
        let shipList = ["carrier", "battleship", "cruiser", "submarine", "destroyer"]
        let clearCheck  = document.getElementById("shipcontainer")
        if (clearCheck !== null) clearCheck.remove()
        let shipContainer = document.createElement("div")
        shipContainer.id = "shipcontainer"

        let shipSection = document.createElement("div")
        shipSection.id = "shipsection"

        let buttons = document.createElement("div")
        buttons.id = "nav-buttons"

        let deployRandom = document.createElement("button")
        deployRandom.id = "deploy-random"
        deployRandom.textContent = "Randomise"
        deployRandom.addEventListener('click', (e) => {
            PubSub.publish('deploy-random', e)
        })

        let clearBoard = document.createElement("button")
        clearBoard.id = "clear-board"
        clearBoard.textContent = "Clear"
        clearBoard.addEventListener('click', (e) => {
            PubSub.publish('clear-board', e)
        })


        shipList.forEach(el => {
            let el1 = document.createElement("div")
            el1.id = el
            el1.className = "ship"
            el1.draggable = true
            el1.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData("text", e.target.id);
                PubSub.publish('dragstart', e)
            })
            shipSection.appendChild(el1)
        })
        buttons.appendChild(clearBoard)
        buttons.appendChild(deployRandom)
        shipContainer.appendChild(shipSection)
        shipContainer.appendChild(buttons)


  
        main.appendChild(shipContainer)
    },

    checkIfAllShipsPlaced() {
        let checkDiv = document.getElementById("shipsection")
        let removeDiv = document.getElementById("shipcontainer")
        if (checkDiv.innerHTML == "") {
            removeDiv.remove()
            return true
        }
        else 
            return false

    },
    
    updateCell (user, x, y, type)
        {
            let cell = document.getElementById(user + "x"+x+"y"+ y)
            switch (type) {
                case "miss":
                    cell.classList.add("miss")
                    break
                case "hit":
                    cell.classList.add("hit")
                    break
            }
        },

    markShips(board, user) {
        if (user !== "computer") {
        board.forEach(element => {
            let cell = document.getElementById(user + "x"+element.x+"y"+element.y)
            {cell.classList.add(element.name)}
        });

        }
        else {
            
        board.forEach(element => {
            let cell = document.getElementById(user + "x"+element.x+"y"+element.y)
            { if (element.hit == true) {   
                cell.classList.add(element.name)
            }
            }})

        }
    },

    winnerTakeover(user) {
        let winnerDiv = document.createElement('div')
        let winnerMsg = document.createElement('div')
        let winnerBtn = document.createElement('button')
        winnerDiv.classList.add("take-over")
        winnerDiv.id = "take-over"
        winnerMsg.textContent = user + " wins!"
        winnerMsg.classList.add("winner-message")
        winnerBtn.textContent = "Replay?"
        winnerBtn.addEventListener('click', () => {
            PubSub.publish('new-round')
        })
        winnerDiv.appendChild(winnerMsg)
        winnerDiv.appendChild(winnerBtn)
        document.body.appendChild(winnerDiv)
    },

    clearScreen() {
        let main = document.getElementById("main")
        let takeOver = document.getElementById("take-over")
        main.innerHTML = ""
        if (takeOver !== null) takeOver.remove()
    },
    
    clearBoard(board, user) {
        if (user !== "computer") {
            board.forEach(element => {
                let cell = document.getElementById(user + "x"+element.x+"y"+element.y)
                {cell.className = "field"}
            });
    
            }
            else {
                
            board.forEach(element => {
                let cell = document.getElementById(user + "x"+element.x+"y"+element.y)
                { if (element.hit == true) {   
                    cell.className = "field"
                }
                }})
    
            }
    }
}   


}



/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "game": () => (/* binding */ game),
/* harmony export */   "gameController": () => (/* binding */ gameController),
/* harmony export */   "mainGameLoop": () => (/* binding */ mainGameLoop)
/* harmony export */ });
/* harmony import */ var _dom_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-helper */ "./src/dom-helper.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./players */ "./src/players.js");
/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ships */ "./src/ships.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_4__);







function gameController(name) {
    mainGameLoop(name)
}

function game(playername) { return {
    player1: (0,_players__WEBPACK_IMPORTED_MODULE_2__.player)(playername, false),
    player2 : (0,_players__WEBPACK_IMPORTED_MODULE_2__.player)("computer", true),
    player1Gameboard : (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.gameboard)(),
    cpuGameboard: (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.gameboard)(),
    currentTurn: "",

    refresh() {
        let dom = (0,_dom_helper__WEBPACK_IMPORTED_MODULE_0__.domHelper)()
        // dom.drawBoard(this.player2.name)
        dom.drawBoard(this.player1.name)
        dom.markShips(this.player1Gameboard.coordinates, this.player1.name)
    },

    deployShips(player) {
        let playerboard = null
        let randomNumber = () => {
            let result = Math.floor(Math.random() * 10) + 1
            return result}
        let carrier = (0,_ships__WEBPACK_IMPORTED_MODULE_3__.ship)(5, "carrier")
        let battleship = (0,_ships__WEBPACK_IMPORTED_MODULE_3__.ship)(4, "battleship")
        let cruiser = (0,_ships__WEBPACK_IMPORTED_MODULE_3__.ship)(3, "cruiser")
        let submarine = (0,_ships__WEBPACK_IMPORTED_MODULE_3__.ship)(3, "submarine")
        let destroyer = (0,_ships__WEBPACK_IMPORTED_MODULE_3__.ship)(2, "destroyer")
        let shipArr = []
        shipArr.push(carrier, battleship, cruiser, submarine,destroyer)
        if(player == this.player1) {playerboard = this.player1Gameboard} else {playerboard = this.cpuGameboard}
        
        shipArr.forEach(ship => {
            if (playerboard.placeShip(ship,randomNumber(), randomNumber())) {return} else {playerboard.placeShip(ship,randomNumber(), randomNumber())}})



        return playerboard.coordinatess

    },

    deployShipManual(shipName, x, y) {
        let shipArr = [{"name" : "carrier", "length" : 5}, {"name" : "battleship" , "length" : 4}, {"name" : "cruiser" , "length" : 3}, {"name" : "submarine" , "length" : 3}, {"name" : "destroyer" , "length" : 2}]
        let shipLength = shipArr.find(el => {
                if (el.name == shipName)
                {return el.length}
            })
        let newShip = (0,_ships__WEBPACK_IMPORTED_MODULE_3__.ship)(shipLength.length, shipName)
        if (!this.player1Gameboard.placeShip(newShip, x, y)) {
            let details = {newShip, x, y}
            pubsub_js__WEBPACK_IMPORTED_MODULE_4___default().publish('no-option', details)
        }

        return this.player1Gameboard.coordinates
    }


}

}

function mainGameLoop (name) {
    let dom = (0,_dom_helper__WEBPACK_IMPORTED_MODULE_0__.domHelper)()
    let newGame = game(name)

    var clear = function (msg,data) {

        dom.clearBoard(newGame.player1Gameboard.coordinates, newGame.player1.name)
        newGame.player1Gameboard.coordinates = []
        dom.drawShipsManual()
        dom.markShips(newGame.player1Gameboard.coordinates, newGame.player1.name)
    }

    var randomise = function (msg,data) {
        dom.clearBoard(newGame.player1Gameboard.coordinates, newGame.player1.name)
        newGame.player1Gameboard.coordinates = []
        newGame.deployShips(newGame.player1)
        dom.markShips(newGame.player1Gameboard.coordinates, newGame.player1.name)
        dom.removeShipSection()
        dom.drawBoard(newGame.player2.name)

    }

    newGame.deployShips(newGame.player2)
    newGame.cpuGameboard.populateMoves()
    newGame.refresh()
    dom.drawShipsManual()
    var shipDroppped = function (msg, data) {
        newGame.deployShipManual(data[0].id, data[1].x, data[2].y)
        dom.markShips(newGame.player1Gameboard.coordinates, newGame.player1.name)
        if (dom.checkIfAllShipsPlaced()) dom.drawBoard(newGame.player2.name)
    }

    var mySubscriber = function (msg, data) {
        let result = newGame.cpuGameboard.receiveAttack(data[0], data[1])
        if (typeof result == "object") {
        dom.updateCell("computer", data[0], data[1],"miss")
        }
        else {dom.updateCell("computer", data[0], data[1],"hit")}
        if (newGame.cpuGameboard.checkGameEnd()) dom.winnerTakeover(newGame.player1.name)

        let cpuCoordinates = newGame.cpuGameboard.launchAttack()
        let resultcpu = newGame.player1Gameboard.receiveAttack(cpuCoordinates[0], cpuCoordinates[1])
        if (typeof resultcpu == "object") {
        dom.updateCell(newGame.player1.name, cpuCoordinates[0], cpuCoordinates[1],"miss")
        }
        else {
            dom.updateCell(newGame.player1.name, cpuCoordinates[0], cpuCoordinates[1],"hit");
            newGame.cpuGameboard.hitHunt(cpuCoordinates)
        }
        
        
        if (newGame.player1Gameboard.checkGameEnd()) {
            dom.winnerTakeover(newGame.player2.name)
            return
        }
    };

    var cleanUp = () => {
        dom.clearScreen()
        newGame = {}
        location.reload()


    }
    var token = pubsub_js__WEBPACK_IMPORTED_MODULE_4___default().subscribe('button-click', mySubscriber);
    pubsub_js__WEBPACK_IMPORTED_MODULE_4___default().subscribe('drop', shipDroppped);
    pubsub_js__WEBPACK_IMPORTED_MODULE_4___default().subscribe('deploy-random', randomise);
    pubsub_js__WEBPACK_IMPORTED_MODULE_4___default().subscribe('clear-board', clear);
    pubsub_js__WEBPACK_IMPORTED_MODULE_4___default().subscribe('new-round', cleanUp)

    

}





/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameboard": () => (/* binding */ gameboard)
/* harmony export */ });
// create the main gameboard

function gameboard () { return {

    possibleMoves: [],

    coordinates: [],

    missedShots: [],

    targetOptions: [],

    evaluatePlacement(ship, x, y) {
        let possiblePlacements = []
        x = parseInt(x)
        y = parseInt(y)
        
        for (let i=0; i<ship.length; i++) {
            let coordsRight = {
                "x" : (x + i),
                "y" : y,
                "pos": 1
            }
            let coordsLeft = {
                "x" : (x - i),
                "y" : y,
                "pos": 2
            }
            let coordsTop = {
                "x" : x,
                "y" : (y + i),
                "pos": 3
            }
            let coordsBottom = {
                "x" : x,
                "y" : (y - i),
                "pos": 4
            }
        possiblePlacements.push(coordsRight, coordsLeft, coordsTop, coordsBottom)
        }
        let toRemove = []
        for (let i = 0; i<possiblePlacements.length; i ++) {
            if (possiblePlacements[i].x > 10 || possiblePlacements[i].y >10 || possiblePlacements[i].x <1 || possiblePlacements[i].y <1) {
                toRemove.push(possiblePlacements[i].pos)
            }
        }

        toRemove = toRemove.filter((value, index, array) => array.indexOf(value) === index)
        if (toRemove) {
            toRemove.forEach(el => {
                possiblePlacements = possiblePlacements.filter(function(value, index, array){
                return value.pos !== el
            }) 

            })

        }

        let notUnique = []
        for (let i = 0; i<possiblePlacements.length; i ++) {
            this.coordinates.forEach(el => {
            if (possiblePlacements[i].x == el.x && possiblePlacements[i].y  == el.y) {
                notUnique.push(possiblePlacements[i].pos)
            }
        })
        }

        notUnique = notUnique.filter((value, index, array) => array.indexOf(value) === index)
        if (notUnique) {
            notUnique.forEach(el => {
                possiblePlacements = possiblePlacements.filter(function(value, index, array){
                return value.pos !== el
            }) 

            })
            return possiblePlacements
        }



    if (possiblePlacements.length == 0) {return false}
    else return possiblePlacements
    },


    placeShip(ship, x, y) {
        let evaluation = this.evaluatePlacement(ship, x, y)
        if (evaluation == false) return false
        else {
            let options = [...new Set(evaluation.map(item=>item.pos))]
            let selection = options[Math.floor(Math.random() * options.length)]
            evaluation = evaluation.filter(el => el.pos == selection)
            let i = evaluation.length
            evaluation.forEach(el => {
                let placedShip = {
                    x: el.x,
                    y: el.y,
                    name: ship.name,
                    hit: false
                }
                this.coordinates.push(placedShip)
            })
            return evaluation
        }
    },

    populateMoves() {
        for(let x =  1; x<11; x++) {
            for (let y = 1; y<11; y++) {
                this.possibleMoves.push([x, y])
            }
        }
    },

    launchAttack() {

        if (this.targetOptions.length == 0) {
        const randomIndex = Math.floor(Math.random() * this.possibleMoves.length);
        let result = this.possibleMoves[randomIndex]
        this.possibleMoves.splice(randomIndex,1)
        return result
        }
        else {
            let result = this.targetOptions[0];
            this.targetOptions.splice(0,1)
            return result
        }

    },

    hitHunt(coords) {
        let tempArray = []
        tempArray.push([coords[0] -1 , coords[1]], [coords[0] +1 , coords[1]], [coords[0], coords[1] -1], [coords[0], coords[1] + 1])
        tempArray = tempArray.filter(function(el) {
            return el[0] < 11 && el[0] > 0 && el[1] < 11 && el[1]
        })
        tempArray.forEach(el => {
            for (let i=0; i<this.possibleMoves.length; i++) {
                if (el[0] == this.possibleMoves[i][0] && el[1] == this.possibleMoves[i][1]) {
                    this.targetOptions.push(el)
                    this.possibleMoves.splice(i, 1)
                }
            }
            }
        )


        },


    receiveAttack(x, y) {
        let hitCheck = this.coordinates.find(element => {
            if (element.x == x && element.y == y) {
                return element
            }})
        if (hitCheck) {
            hitCheck.hit = true
            return hitCheck.name
        }
        else {
            let missedShot = {x, y}
            this.missedShots.push(missedShot)
            return {
                "missed" : missedShot
            }
        }
    },

    checkGameEnd() {
        let result = true
        this.coordinates.forEach(element => {
            if (element.hit == false) {
                result = false
            }
        } 
        )
    return result
    }
}
}



/***/ }),

/***/ "./src/players.js":
/*!************************!*\
  !*** ./src/players.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "player": () => (/* binding */ player)
/* harmony export */ });
function player (name, cpu) { return {

    name: name,
    cpu: cpu,
    currentTurn: false
}
}



/***/ }),

/***/ "./src/ships.js":
/*!**********************!*\
  !*** ./src/ships.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ship": () => (/* binding */ ship)
/* harmony export */ });
// create a factory for individual ships

function ship (length, name) {return {
    name: name,
    length: length,
    hits: 0,
    hitReceived() {
        this.hits = this.hits + 1
        if (this.length == this.hits) {
            this.isSunk = true
        }
    },
    isSunk: false,
}}



/***/ }),

/***/ "./src/flame.svg":
/*!***********************!*\
  !*** ./src/flame.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "05b81a48501353f5ffc0.svg";

/***/ }),

/***/ "./src/splash.svg":
/*!************************!*\
  !*** ./src/splash.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "71750b99b0d035713347.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ "./src/game.js");
/* harmony import */ var _src_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/styles.css */ "./src/styles.css");




(0,_game_js__WEBPACK_IMPORTED_MODULE_0__.gameController)("John")

})();

/******/ })()
;
//# sourceMappingURL=main.js.map