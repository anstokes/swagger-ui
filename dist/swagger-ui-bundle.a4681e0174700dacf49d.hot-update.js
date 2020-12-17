webpackHotUpdate_name_("swagger-ui-bundle",{

/***/ "./src/core/utils.js":
/*!***************************!*\
  !*** ./src/core/utils.js ***!
  \***************************/
/*! exports provided: isImmutable, isJSONObject, objectify, arrayify, fromJSOrdered, createObjWithHashedKeys, bindToState, normalizeArray, isFn, isObject, isFunc, isArray, memoize, objMap, objReduce, systemThunkMiddleware, defaultStatusCode, getList, mapToList, extractFileNameFromContentDispositionHeader, pascalCase, pascalCaseFilename, propChecker, validateMaximum, validateMinimum, validateNumber, validateInteger, validateFile, validateBoolean, validateString, validateDateTime, validateGuid, validateMaxLength, validateMinLength, validatePattern, validateParam, getSampleSchema, parseSearch, serializeSearch, btoa, sorters, buildFormData, shallowEqualKeys, sanitizeUrl, requiresValidationURL, getAcceptControllingResponse, createDeepLinkPath, escapeDeepLinkPath, getExtensions, getCommonExtensions, deeplyStripKey, stringify, numberToString, paramToIdentifier, paramToValue, generateCodeVerifier, createCodeChallenge, isEmptyValue, parseExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isImmutable", function() { return isImmutable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isJSONObject", function() { return isJSONObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectify", function() { return objectify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayify", function() { return arrayify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromJSOrdered", function() { return fromJSOrdered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createObjWithHashedKeys", function() { return createObjWithHashedKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindToState", function() { return bindToState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeArray", function() { return normalizeArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFn", function() { return isFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunc", function() { return isFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memoize", function() { return memoize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objMap", function() { return objMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objReduce", function() { return objReduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "systemThunkMiddleware", function() { return systemThunkMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultStatusCode", function() { return defaultStatusCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getList", function() { return getList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapToList", function() { return mapToList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractFileNameFromContentDispositionHeader", function() { return extractFileNameFromContentDispositionHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pascalCase", function() { return pascalCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pascalCaseFilename", function() { return pascalCaseFilename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propChecker", function() { return propChecker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateMaximum", function() { return validateMaximum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateMinimum", function() { return validateMinimum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateNumber", function() { return validateNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateInteger", function() { return validateInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateFile", function() { return validateFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateBoolean", function() { return validateBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateString", function() { return validateString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateDateTime", function() { return validateDateTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateGuid", function() { return validateGuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateMaxLength", function() { return validateMaxLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateMinLength", function() { return validateMinLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatePattern", function() { return validatePattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateParam", function() { return validateParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSampleSchema", function() { return getSampleSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseSearch", function() { return parseSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeSearch", function() { return serializeSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "btoa", function() { return btoa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sorters", function() { return sorters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildFormData", function() { return buildFormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowEqualKeys", function() { return shallowEqualKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanitizeUrl", function() { return sanitizeUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requiresValidationURL", function() { return requiresValidationURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAcceptControllingResponse", function() { return getAcceptControllingResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDeepLinkPath", function() { return createDeepLinkPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeDeepLinkPath", function() { return escapeDeepLinkPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExtensions", function() { return getExtensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCommonExtensions", function() { return getCommonExtensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deeplyStripKey", function() { return deeplyStripKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return stringify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberToString", function() { return numberToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paramToIdentifier", function() { return paramToIdentifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paramToValue", function() { return paramToValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateCodeVerifier", function() { return generateCodeVerifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCodeChallenge", function() { return createCodeChallenge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyValue", function() { return isEmptyValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseExample", function() { return parseExample; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createForOfIteratorHelper */ "./node_modules/@babel/runtime-corejs2/helpers/createForOfIteratorHelper.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_typeof__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_typeof__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_typeof__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _braintree_sanitize_url__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @braintree/sanitize-url */ "./node_modules/@braintree/sanitize-url/index.js");
/* harmony import */ var _braintree_sanitize_url__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_braintree_sanitize_url__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/camelCase */ "./node_modules/lodash/camelCase.js");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_upperFirst__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash/upperFirst */ "./node_modules/lodash/upperFirst.js");
/* harmony import */ var lodash_upperFirst__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_upperFirst__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_memoize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/memoize */ "./node_modules/lodash/memoize.js");
/* harmony import */ var lodash_memoize__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_memoize__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash_some__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash/some */ "./node_modules/lodash/some.js");
/* harmony import */ var lodash_some__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash_some__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var lodash_eq__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash/eq */ "./node_modules/lodash/eq.js");
/* harmony import */ var lodash_eq__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash_eq__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lodash/isFunction */ "./node_modules/lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _plugins_samples_fn__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./plugins/samples/fn */ "./src/core/plugins/samples/fn.js");
/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./window */ "./src/core/window.js");
/* harmony import */ var css_escape__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! css.escape */ "./node_modules/css.escape/css.escape.js");
/* harmony import */ var css_escape__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(css_escape__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _helpers_get_parameter_schema__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../helpers/get-parameter-schema */ "./src/helpers/get-parameter-schema.js");
/* harmony import */ var randombytes__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! randombytes */ "./node_modules/randombytes/browser.js");
/* harmony import */ var randombytes__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(randombytes__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var sha_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! sha.js */ "./node_modules/sha.js/index.js");
/* harmony import */ var sha_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(sha_js__WEBPACK_IMPORTED_MODULE_21__);
 /* 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ATTENTION! This file (but not the functions within) is deprecated.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  You should probably add a new file to `./helpers/` instead of adding a new
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  function here.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  One-function-per-file is a better pattern than what we have here.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  If you're refactoring something in here, feel free to break it out to a file
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  in `./helpers` if you have the time.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


















var DEFAULT_RESPONSE_KEY = "default";

var isImmutable = function isImmutable(maybe) {return immutable__WEBPACK_IMPORTED_MODULE_7___default.a.Iterable.isIterable(maybe);};

function isJSONObject(str) {
  try {
    var o = JSON.parse(str);

    // Handle non-exception-throwing cases:
    // Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
    // but... JSON.parse(null) returns null, and typeof null === "object",
    // so we must check for that, too. Thankfully, null is falsey, so this suffices:
    if (o && _babel_runtime_corejs2_helpers_typeof__WEBPACK_IMPORTED_MODULE_6___default()(o) === "object") {
      return o;
    }
  }
  catch (e) {
    // do nothing
  }

  return false;
}

function objectify(thing) {
  if (!isObject(thing))
  return {};
  if (isImmutable(thing))
  return thing.toJS();
  return thing;
}

function arrayify(thing) {
  if (!thing)
  return [];

  if (thing.toArray)
  return thing.toArray();

  return normalizeArray(thing);
}

function fromJSOrdered(js) {
  if (isImmutable(js)) {
    return js; // Can't do much here
  }
  if (js instanceof _window__WEBPACK_IMPORTED_MODULE_17__["default"].File) {
    return js;
  }
  if (!isObject(js)) {
    return js;
  }
  if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_5___default()(js)) {
    return immutable__WEBPACK_IMPORTED_MODULE_7___default.a.Seq(js).map(fromJSOrdered).toList();
  }
  if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_15___default()(js.entries)) {
    // handle multipart/form-data
    var objWithHashedKeys = createObjWithHashedKeys(js);
    return immutable__WEBPACK_IMPORTED_MODULE_7___default.a.OrderedMap(objWithHashedKeys).map(fromJSOrdered);
  }
  return immutable__WEBPACK_IMPORTED_MODULE_7___default.a.OrderedMap(js).map(fromJSOrdered);
}

/**
   * Convert a FormData object into plain object
   * Append a hashIdx and counter to the key name, if multiple exists
   * if single, key name = <original>
   * if multiple, key name = <original><hashIdx><count>
   * @example <caption>single entry for vegetable</caption>
   * fdObj.entries.vegtables: "carrot"
   * // returns newObj.vegetables : "carrot"
   * @example <caption>multiple entries for fruits[]</caption>
   * fdObj.entries.fruits[]: "apple"
   * // returns newObj.fruits[]_**[]1 : "apple"
   * fdObj.entries.fruits[]: "banana"
   * // returns newObj.fruits[]_**[]2 : "banana"
   * fdObj.entries.fruits[]: "grape"
   * // returns newObj.fruits[]_**[]3 : "grape"
   * @param {FormData} fdObj - a FormData object
   * @return {Object} - a plain object
   */
function createObjWithHashedKeys(fdObj) {
  if (!lodash_isFunction__WEBPACK_IMPORTED_MODULE_15___default()(fdObj.entries)) {
    return fdObj; // not a FormData object with iterable
  }
  var newObj = {};
  var hashIdx = "_**[]"; // our internal identifier
  var trackKeys = {};var _iterator = _babel_runtime_corejs2_helpers_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_4___default()(
  fdObj.entries()),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var pair = _step.value;
      if (!newObj[pair[0]] && !(trackKeys[pair[0]] && trackKeys[pair[0]].containsMultiple)) {
        newObj[pair[0]] = pair[1]; // first key name: no hash required
      } else {
        if (!trackKeys[pair[0]]) {
          // initiate tracking key for multiple
          trackKeys[pair[0]] = {
            containsMultiple: true,
            length: 1 };

          // "reassign" first pair to matching hashed format for multiple
          var hashedKeyFirst = "".concat(pair[0]).concat(hashIdx).concat(trackKeys[pair[0]].length);
          newObj[hashedKeyFirst] = newObj[pair[0]];
          // remove non-hashed key of multiple
          delete newObj[pair[0]]; // first
        }
        trackKeys[pair[0]].length += 1;
        var hashedKeyCurrent = "".concat(pair[0]).concat(hashIdx).concat(trackKeys[pair[0]].length);
        newObj[hashedKeyCurrent] = pair[1];
      }
    }} catch (err) {_iterator.e(err);} finally {_iterator.f();}
  return newObj;
}

function bindToState(obj, state) {
  var newObj = {};
  _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(obj).
  filter(function (key) {return typeof obj[key] === "function";}).
  forEach(function (key) {return newObj[key] = obj[key].bind(null, state);});
  return newObj;
}

function normalizeArray(arr) {
  if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_5___default()(arr))
  return arr;
  return [arr];
}

function isFn(fn) {
  return typeof fn === "function";
}

function isObject(obj) {
  return !!obj && _babel_runtime_corejs2_helpers_typeof__WEBPACK_IMPORTED_MODULE_6___default()(obj) === "object";
}

function isFunc(thing) {
  return typeof thing === "function";
}

function isArray(thing) {
  return _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_5___default()(thing);
}

// I've changed memoize libs more than once, so I'm using this a way to make that simpler
var memoize = lodash_memoize__WEBPACK_IMPORTED_MODULE_11___default.a;

function objMap(obj, fn) {
  return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(obj).reduce(function (newObj, key) {
    newObj[key] = fn(obj[key], key);
    return newObj;
  }, {});
}

function objReduce(obj, fn) {
  return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(obj).reduce(function (newObj, key) {
    var res = fn(obj[key], key);
    if (res && _babel_runtime_corejs2_helpers_typeof__WEBPACK_IMPORTED_MODULE_6___default()(res) === "object")
    _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()(newObj, res);
    return newObj;
  }, {});
}

// Redux middleware that exposes the system to async actions (like redux-thunk, but with out system instead of (dispatch, getState)
function systemThunkMiddleware(getSystem) {
  return function (_ref) {var dispatch = _ref.dispatch,getState = _ref.getState; // eslint-disable-line no-unused-vars
    return function (next) {return function (action) {
        if (typeof action === "function") {
          return action(getSystem());
        }

        return next(action);
      };};
  };
}

function defaultStatusCode(responses) {
  var codes = responses.keySeq();
  return codes.contains(DEFAULT_RESPONSE_KEY) ? DEFAULT_RESPONSE_KEY : codes.filter(function (key) {return (key + "")[0] === "2";}).sort().first();
}


/**
   * Returns an Immutable List, safely
   * @param {Immutable.Iterable} iterable the iterable to get the key from
   * @param {String|[String]} key either an array of keys, or a single key
   * @returns {Immutable.List} either iterable.get(keys) or an empty Immutable.List
   */
function getList(iterable, keys) {
  if (!immutable__WEBPACK_IMPORTED_MODULE_7___default.a.Iterable.isIterable(iterable)) {
    return immutable__WEBPACK_IMPORTED_MODULE_7___default.a.List();
  }
  var val = iterable.getIn(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_5___default()(keys) ? keys : [keys]);
  return immutable__WEBPACK_IMPORTED_MODULE_7___default.a.List.isList(val) ? val : immutable__WEBPACK_IMPORTED_MODULE_7___default.a.List();
}

/**
  
   * Take an immutable map, and convert to a list.
   * Where the keys are merged with the value objects
   * @param {Immutable.Map} map, the map to convert
   * @param {String} key the key to use, when merging the `key`
   * @returns {Immutable.List}
   */
function mapToList(map) {var keyNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "key";var collectedKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : immutable__WEBPACK_IMPORTED_MODULE_7___default.a.Map();
  if (!immutable__WEBPACK_IMPORTED_MODULE_7___default.a.Map.isMap(map) || !map.size) {
    return immutable__WEBPACK_IMPORTED_MODULE_7___default.a.List();
  }

  if (!_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_5___default()(keyNames)) {
    keyNames = [keyNames];
  }

  if (keyNames.length < 1) {
    return map.merge(collectedKeys);
  }

  // I need to avoid `flatMap` from merging in the Maps, as well as the lists
  var list = immutable__WEBPACK_IMPORTED_MODULE_7___default.a.List();
  var keyName = keyNames[0];var _iterator2 = _babel_runtime_corejs2_helpers_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_4___default()(
  map.entries()),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var entry = _step2.value;var _entry = _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(
      entry, 2),key = _entry[0],val = _entry[1];
      var nextList = mapToList(val, keyNames.slice(1), collectedKeys.set(keyName, key));
      if (immutable__WEBPACK_IMPORTED_MODULE_7___default.a.List.isList(nextList)) {
        list = list.concat(nextList);
      } else {
        list = list.push(nextList);
      }
    }} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}

  return list;
}

function extractFileNameFromContentDispositionHeader(value) {
  var patterns = [
  /filename\*=[^']+'\w*'"([^"]+)";?/i,
  /filename\*=[^']+'\w*'([^;]+);?/i,
  /filename="([^;]*);?"/i,
  /filename=([^;]*);?/i];


  var responseFilename;
  patterns.some(function (regex) {
    responseFilename = regex.exec(value);
    return responseFilename !== null;
  });

  if (responseFilename !== null && responseFilename.length > 1) {
    try {
      return decodeURIComponent(responseFilename[1]);
    } catch (e) {
      console.error(e);
    }
  }

  return null;
}

// PascalCase, aka UpperCamelCase
function pascalCase(str) {
  return lodash_upperFirst__WEBPACK_IMPORTED_MODULE_10___default()(lodash_camelCase__WEBPACK_IMPORTED_MODULE_9___default()(str));
}

// Remove the ext of a filename, and pascalCase it
function pascalCaseFilename(filename) {
  return pascalCase(filename.replace(/\.[^./]*$/, ""));
}

// Check if ...
// - new props
// - If immutable, use .is()
// - if in explicit objectList, then compare using _.eq
// - else use ===
var propChecker = function propChecker(props, nextProps) {var objectList = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var ignoreList = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

  if (_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(props).length !== _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(nextProps).length) {
    return true;
  }

  return (
    lodash_some__WEBPACK_IMPORTED_MODULE_13___default()(props, function (a, name) {
      if (ignoreList.includes(name)) {
        return false;
      }
      var b = nextProps[name];

      if (immutable__WEBPACK_IMPORTED_MODULE_7___default.a.Iterable.isIterable(a)) {
        return !immutable__WEBPACK_IMPORTED_MODULE_7___default.a.is(a, b);
      }

      // Not going to compare objects
      if (_babel_runtime_corejs2_helpers_typeof__WEBPACK_IMPORTED_MODULE_6___default()(a) === "object" && _babel_runtime_corejs2_helpers_typeof__WEBPACK_IMPORTED_MODULE_6___default()(b) === "object") {
        return false;
      }

      return a !== b;
    }) ||
    objectList.some(function (objectPropName) {return !lodash_eq__WEBPACK_IMPORTED_MODULE_14___default()(props[objectPropName], nextProps[objectPropName]);}));
};

var validateMaximum = function validateMaximum(val, max) {
  if (val > max) {
    return "Value must be less than ".concat(max);
  }
};

var validateMinimum = function validateMinimum(val, min) {
  if (val < min) {
    return "Value must be greater than ".concat(min);
  }
};

var validateNumber = function validateNumber(val) {
  if (!/^-?\d+(\.?\d+)?$/.test(val)) {
    return "Value must be a number";
  }
};

var validateInteger = function validateInteger(val) {
  if (!/^-?\d+$/.test(val)) {
    return "Value must be an integer";
  }
};

var validateFile = function validateFile(val) {
  if (val && !(val instanceof _window__WEBPACK_IMPORTED_MODULE_17__["default"].File)) {
    return "Value must be a file";
  }
};

var validateBoolean = function validateBoolean(val) {
  if (!(val === "true" || val === "false" || val === true || val === false)) {
    return "Value must be a boolean";
  }
};

var validateString = function validateString(val) {
  if (val && typeof val !== "string") {
    return "Value must be a string";
  }
};

var validateDateTime = function validateDateTime(val) {
  if (isNaN(Date.parse(val))) {
    return "Value must be a DateTime";
  }
};

var validateGuid = function validateGuid(val) {
  val = val.toString().toLowerCase();
  if (!/^[{(]?[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}[)}]?$/.test(val)) {
    return "Value must be a Guid";
  }
};

var validateMaxLength = function validateMaxLength(val, max) {
  if (val.length > max) {
    return "Value must be no longer than ".concat(max, " character").concat(max !== 1 ? "s" : "");
  }
};

var validateMinLength = function validateMinLength(val, min) {
  if (val.length < min) {
    return "Value must be at least ".concat(min, " character").concat(min !== 1 ? "s" : "");
  }
};

var validatePattern = function validatePattern(val, rxPattern) {
  var patt = new RegExp(rxPattern);
  if (!patt.test(val)) {
    return "Value must follow pattern " + rxPattern;
  }
};

// validation of parameters before execute
var validateParam = function validateParam(param, value) {var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},_ref2$isOAS = _ref2.isOAS3,isOAS3 = _ref2$isOAS === void 0 ? false : _ref2$isOAS,_ref2$bypassRequiredC = _ref2.bypassRequiredCheck,bypassRequiredCheck = _ref2$bypassRequiredC === void 0 ? false : _ref2$bypassRequiredC;

  var errors = [];

  var paramRequired = param.get("required");var _getParameterSchema =

  Object(_helpers_get_parameter_schema__WEBPACK_IMPORTED_MODULE_19__["default"])(param, { isOAS3: isOAS3 }),paramDetails = _getParameterSchema.schema,parameterContentMediaType = _getParameterSchema.parameterContentMediaType;

  if (!paramDetails) return errors;

  var required = paramDetails.get("required");
  var maximum = paramDetails.get("maximum");
  var minimum = paramDetails.get("minimum");
  var type = paramDetails.get("type");
  var format = paramDetails.get("format");
  var maxLength = paramDetails.get("maxLength");
  var minLength = paramDetails.get("minLength");
  var pattern = paramDetails.get("pattern");

  /*
                                               If the parameter is required OR the parameter has a value (meaning optional, but filled in)
                                               then we should do our validation routine.
                                               Only bother validating the parameter if the type was specified.
                                             */
  if (type && (paramRequired || required || value)) {
    // These checks should evaluate to true if there is a parameter
    var stringCheck = type === "string" && value;
    var arrayCheck = type === "array" && _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_5___default()(value) && value.length;
    var arrayListCheck = type === "array" && immutable__WEBPACK_IMPORTED_MODULE_7___default.a.List.isList(value) && value.count();
    var arrayStringCheck = type === "array" && typeof value === "string" && value;
    var fileCheck = type === "file" && value instanceof _window__WEBPACK_IMPORTED_MODULE_17__["default"].File;
    var booleanCheck = type === "boolean" && (value || value === false);
    var numberCheck = type === "number" && (value || value === 0);
    var integerCheck = type === "integer" && (value || value === 0);
    var objectCheck = type === "object" && _babel_runtime_corejs2_helpers_typeof__WEBPACK_IMPORTED_MODULE_6___default()(value) === "object" && value !== null;
    var objectStringCheck = type === "object" && typeof value === "string" && value;

    var allChecks = [
    stringCheck, arrayCheck, arrayListCheck, arrayStringCheck, fileCheck,
    booleanCheck, numberCheck, integerCheck, objectCheck, objectStringCheck];


    var passedAnyCheck = allChecks.some(function (v) {return !!v;});

    if ((paramRequired || required) && !passedAnyCheck && !bypassRequiredCheck) {
      errors.push("Required field is not provided");
      return errors;
    }

    if (
    type === "object" &&
    typeof value === "string" && (
    parameterContentMediaType === null ||
    parameterContentMediaType === "application/json"))
    {
      try {
        JSON.parse(value);
      } catch (e) {
        errors.push("Parameter string value must be valid JSON");
        return errors;
      }
    }

    if (pattern) {
      var _err = validatePattern(value, pattern);
      if (_err) errors.push(_err);
    }

    if (maxLength || maxLength === 0) {
      var _err2 = validateMaxLength(value, maxLength);
      if (_err2) errors.push(_err2);
    }

    if (minLength) {
      var _err3 = validateMinLength(value, minLength);
      if (_err3) errors.push(_err3);
    }

    if (maximum || maximum === 0) {
      var _err4 = validateMaximum(value, maximum);
      if (_err4) errors.push(_err4);
    }

    if (minimum || minimum === 0) {
      var _err5 = validateMinimum(value, minimum);
      if (_err5) errors.push(_err5);
    }

    if (type === "string") {
      var _err6;
      if (format === "date-time") {
        _err6 = validateDateTime(value);
      } else if (format === "uuid") {
        _err6 = validateGuid(value);
      } else {
        _err6 = validateString(value);
      }
      if (!_err6) return errors;
      errors.push(_err6);
    } else if (type === "boolean") {
      var _err7 = validateBoolean(value);
      if (!_err7) return errors;
      errors.push(_err7);
    } else if (type === "number") {
      var _err8 = validateNumber(value);
      if (!_err8) return errors;
      errors.push(_err8);
    } else if (type === "integer") {
      var _err9 = validateInteger(value);
      if (!_err9) return errors;
      errors.push(_err9);
    } else if (type === "array") {
      var itemType;

      if (!arrayListCheck || !value.count()) {return errors;}

      itemType = paramDetails.getIn(["items", "type"]);

      value.forEach(function (item, index) {
        var err;

        if (itemType === "number") {
          err = validateNumber(item);
        } else if (itemType === "integer") {
          err = validateInteger(item);
        } else if (itemType === "string") {
          err = validateString(item);
        }

        if (err) {
          errors.push({ index: index, error: err });
        }
      });
    } else if (type === "file") {
      var _err10 = validateFile(value);
      if (!_err10) return errors;
      errors.push(_err10);
    }
  }

  return errors;
};

var getSampleSchema = function getSampleSchema(schema) {var contentType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (/xml/.test(contentType)) {
    if (!schema.xml || !schema.xml.name) {
      schema.xml = schema.xml || {};

      if (schema.$$ref) {
        var match = schema.$$ref.match(/\S*\/(\S+)$/);
        schema.xml.name = match[1];
      } else if (schema.type || schema.items || schema.properties || schema.additionalProperties) {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!-- XML example cannot be generated; root element name is undefined -->";
      } else {
        return null;
      }
    }
    return Object(_plugins_samples_fn__WEBPACK_IMPORTED_MODULE_16__["memoizedCreateXMLExample"])(schema, config);
  }

  var res = Object(_plugins_samples_fn__WEBPACK_IMPORTED_MODULE_16__["memoizedSampleFromSchema"])(schema, config);

  return _babel_runtime_corejs2_helpers_typeof__WEBPACK_IMPORTED_MODULE_6___default()(res) === "object" ? _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(res, null, 2) : res;
};

var parseSearch = function parseSearch() {
  var map = {};
  var search = _window__WEBPACK_IMPORTED_MODULE_17__["default"].location.search;

  if (!search)
  return {};

  if (search != "") {
    var params = search.substr(1).split("&");

    for (var i in params) {
      if (!params.hasOwnProperty(i)) {
        continue;
      }
      i = params[i].split("=");
      map[decodeURIComponent(i[0])] = i[1] && decodeURIComponent(i[1]) || "";
    }
  }

  return map;
};

var serializeSearch = function serializeSearch(searchMap) {
  return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(searchMap).map(function (k) {
    return encodeURIComponent(k) + "=" + encodeURIComponent(searchMap[k]);
  }).join("&");
};

var btoa = function btoa(str) {
  var buffer;

  if (str instanceof Buffer) {
    buffer = str;
  } else {
    buffer = new Buffer(str.toString(), "utf-8");
  }

  return buffer.toString("base64");
};

var sorters = {
  operationsSorter: {
    alpha: function alpha(a, b) {return a.get("path").localeCompare(b.get("path"));},
    method: function method(a, b) {return a.get("method").localeCompare(b.get("method"));} },

  tagsSorter: {
    alpha: function alpha(a, b) {return a.localeCompare(b);} } };



var buildFormData = function buildFormData(data) {
  var formArr = [];

  for (var name in data) {
    var val = data[name];
    if (val !== undefined && val !== "") {
      formArr.push([name, "=", encodeURIComponent(val).replace(/%20/g, "+")].join(""));
    }
  }
  return formArr.join("&");
};

// Is this really required as a helper? Perhaps. TODO: expose the system of presets.apis in docs, so we know what is supported
var shallowEqualKeys = function shallowEqualKeys(a, b, keys) {
  return !!lodash_find__WEBPACK_IMPORTED_MODULE_12___default()(keys, function (key) {
    return lodash_eq__WEBPACK_IMPORTED_MODULE_14___default()(a[key], b[key]);
  });
};

function sanitizeUrl(url) {
  if (typeof url !== "string" || url === "") {
    return "";
  }

  return Object(_braintree_sanitize_url__WEBPACK_IMPORTED_MODULE_8__["sanitizeUrl"])(url);
}

function requiresValidationURL(uri) {
  if (!uri || uri.indexOf("localhost") >= 0 || uri.indexOf("127.0.0.1") >= 0 || uri === "none") {
    return false;
  }
  return true;
}


function getAcceptControllingResponse(responses) {
  if (!immutable__WEBPACK_IMPORTED_MODULE_7___default.a.OrderedMap.isOrderedMap(responses)) {
    // wrong type!
    return null;
  }

  if (!responses.size) {
    // responses is empty
    return null;
  }

  var suitable2xxResponse = responses.find(function (res, k) {
    return k.startsWith("2") && _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(res.get("content") || {}).length > 0;
  });

  // try to find a suitable `default` responses
  var defaultResponse = responses.get("default") || immutable__WEBPACK_IMPORTED_MODULE_7___default.a.OrderedMap();
  var defaultResponseMediaTypes = (defaultResponse.get("content") || immutable__WEBPACK_IMPORTED_MODULE_7___default.a.OrderedMap()).keySeq().toJS();
  var suitableDefaultResponse = defaultResponseMediaTypes.length ? defaultResponse : null;

  return suitable2xxResponse || suitableDefaultResponse;
}

// suitable for use in URL fragments
var createDeepLinkPath = function createDeepLinkPath(str) {return typeof str == "string" || str instanceof String ? str.trim().replace(/\s/g, "%20") : "";};
// suitable for use in CSS classes and ids
var escapeDeepLinkPath = function escapeDeepLinkPath(str) {return css_escape__WEBPACK_IMPORTED_MODULE_18___default()(createDeepLinkPath(str).replace(/%20/g, "_"));};

var getExtensions = function getExtensions(defObj) {return defObj.filter(function (v, k) {return /^x-/.test(k);});};
var getCommonExtensions = function getCommonExtensions(defObj) {return defObj.filter(function (v, k) {return /^pattern|maxLength|minLength|maximum|minimum/.test(k);});};

// Deeply strips a specific key from an object.
//
// `predicate` can be used to discriminate the stripping further,
// by preserving the key's place in the object based on its value.
function deeplyStripKey(input, keyToStrip) {var predicate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {return true;};
  if (_babel_runtime_corejs2_helpers_typeof__WEBPACK_IMPORTED_MODULE_6___default()(input) !== "object" || _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_5___default()(input) || input === null || !keyToStrip) {
    return input;
  }

  var obj = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, input);

  _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(obj).forEach(function (k) {
    if (k === keyToStrip && predicate(obj[k], k)) {
      delete obj[k];
      return;
    }
    obj[k] = deeplyStripKey(obj[k], keyToStrip, predicate);
  });

  return obj;
}

function stringify(thing) {
  if (typeof thing === "string") {
    return thing;
  }

  if (thing && thing.toJS) {
    thing = thing.toJS();
  }

  if (_babel_runtime_corejs2_helpers_typeof__WEBPACK_IMPORTED_MODULE_6___default()(thing) === "object" && thing !== null) {
    try {
      return _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(thing, null, 2);
    }
    catch (e) {
      return String(thing);
    }
  }

  if (thing === null || thing === undefined) {
    return "";
  }

  return thing.toString();
}

function numberToString(thing) {
  if (typeof thing === "number") {
    return thing.toString();
  }

  return thing;
}

function paramToIdentifier(param) {var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},_ref3$returnAll = _ref3.returnAll,returnAll = _ref3$returnAll === void 0 ? false : _ref3$returnAll,_ref3$allowHashes = _ref3.allowHashes,allowHashes = _ref3$allowHashes === void 0 ? true : _ref3$allowHashes;
  if (!immutable__WEBPACK_IMPORTED_MODULE_7___default.a.Map.isMap(param)) {
    throw new Error("paramToIdentifier: received a non-Im.Map parameter as input");
  }
  var paramName = param.get("name");
  var paramIn = param.get("in");

  var generatedIdentifiers = [];

  // Generate identifiers in order of most to least specificity

  if (param && param.hashCode && paramIn && paramName && allowHashes) {
    generatedIdentifiers.push("".concat(paramIn, ".").concat(paramName, ".hash-").concat(param.hashCode()));
  }

  if (paramIn && paramName) {
    generatedIdentifiers.push("".concat(paramIn, ".").concat(paramName));
  }

  generatedIdentifiers.push(paramName);

  // Return the most preferred identifier, or all if requested

  return returnAll ? generatedIdentifiers : generatedIdentifiers[0] || "";
}

function paramToValue(param, paramValues) {
  var allIdentifiers = paramToIdentifier(param, { returnAll: true });

  // Map identifiers to values in the provided value hash, filter undefined values,
  // and return the first value found
  var values = allIdentifiers.
  map(function (id) {
    return paramValues[id];
  }).
  filter(function (value) {return value !== undefined;});

  return values[0];
}

// adapted from https://auth0.com/docs/flows/guides/auth-code-pkce/includes/create-code-verifier
function generateCodeVerifier() {
  return b64toB64UrlEncoded(
  randombytes__WEBPACK_IMPORTED_MODULE_20___default()(32).toString("base64"));

}

function createCodeChallenge(codeVerifier) {
  return b64toB64UrlEncoded(
  sha_js__WEBPACK_IMPORTED_MODULE_21___default()("sha256").
  update(codeVerifier).
  digest("base64"));

}

function b64toB64UrlEncoded(str) {
  return str.
  replace(/\+/g, "-").
  replace(/\//g, "_").
  replace(/=/g, "");
}

var isEmptyValue = function isEmptyValue(value) {
  if (!value) {
    return true;
  }

  if (isImmutable(value) && value.isEmpty()) {
    return true;
  }

  return false;
};

function parseExample(schema, example, mediaType, authorizedValues) {

  // parse request body
  if (example && isJSONObject(stringify(example))) {
    var example = JSON.parse(stringify(example));
    var _schema = JSON.parse(stringify(schema));

    // loop through properties
    for (var index in schema.properties) {
      // check for property

      // console.log(getCookie(index))
      if (example[index] !== undefined) {
        if (example[index]) {
          //update example on schema
          _schema.properties[index].example = example[index];
        } else {
          // remove property; not provided in example
          delete _schema.properties[index];
          delete example[index];
        }
      }
    }
    // convert to xml if required
    if (/xml/i.test(mediaType)) {
      example = stringify(getSampleSchema(_schema, mediaType));
    }
  }

  return example;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/node-libs-browser/node_modules/buffer/index.js */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ })

})
//# sourceMappingURL=swagger-ui-bundle.a4681e0174700dacf49d.hot-update.js.map