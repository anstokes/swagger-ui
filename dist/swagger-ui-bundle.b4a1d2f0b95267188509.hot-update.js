webpackHotUpdate_name_("swagger-ui-bundle",{

/***/ "./src/core/plugins/oas3/components/request-body.jsx":
/*!***********************************************************!*\
  !*** ./src/core/plugins/oas3/components/request-body.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_immutable_proptypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-immutable-proptypes */ "./node_modules/react-immutable-proptypes/dist/ImmutablePropTypes.js");
/* harmony import */ var react_immutable_proptypes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_immutable_proptypes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils */ "./src/core/utils.js");






function getDefaultRequestBodyValue(requestBody, mediaType, activeExamplesKey) {
  var mediaTypeValue = requestBody.getIn(["content", mediaType]);
  var schema = mediaTypeValue.get("schema").toJS();
  var example =
  mediaTypeValue.get("example") !== undefined ?
  mediaTypeValue.get("example") :
  null;
  var currentExamplesValue = mediaTypeValue.getIn([
  "examples",
  activeExamplesKey,
  "value"]);


  if (mediaTypeValue.get("examples")) {
    // the media type DOES have examples
    return Object(_utils__WEBPACK_IMPORTED_MODULE_5__["stringify"])(currentExamplesValue) || "";
  } else {
    // the media type DOES NOT have examples
    return Object(_utils__WEBPACK_IMPORTED_MODULE_5__["stringify"])(
    example ||
    Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getSampleSchema"])(schema, mediaType, {
      includeWriteOnly: true }) ||

    "");

  }
}



var RequestBody = function RequestBody(_ref)















{var requestBody = _ref.requestBody,requestBodyValue = _ref.requestBodyValue,requestBodyInclusionSetting = _ref.requestBodyInclusionSetting,requestBodyErrors = _ref.requestBodyErrors,getComponent = _ref.getComponent,getConfigs = _ref.getConfigs,specSelectors = _ref.specSelectors,fn = _ref.fn,contentType = _ref.contentType,isExecute = _ref.isExecute,specPath = _ref.specPath,_onChange = _ref.onChange,onChangeIncludeEmpty = _ref.onChangeIncludeEmpty,activeExamplesKey = _ref.activeExamplesKey,updateActiveExamplesKey = _ref.updateActiveExamplesKey;
  var handleFile = function handleFile(e) {
    _onChange(e.target.files[0]);
  };
  var setIsIncludedOptions = function setIsIncludedOptions(key) {
    var options = {
      key: key,
      shouldDispatchInit: false,
      defaultValue: true };

    var currentInclusion = requestBodyInclusionSetting.get(key, "no value");
    if (currentInclusion === "no value") {
      options.shouldDispatchInit = true;
      // future: can get/set defaultValue from a config setting
    }
    return options;
  };

  var Markdown = getComponent("Markdown", true);
  var ModelExample = getComponent("modelExample");
  var RequestBodyEditor = getComponent("RequestBodyEditor");
  var HighlightCode = getComponent("highlightCode");
  var ExamplesSelectValueRetainer = getComponent("ExamplesSelectValueRetainer");
  var Example = getComponent("Example");
  var ParameterIncludeEmpty = getComponent("ParameterIncludeEmpty");var _getConfigs =

  getConfigs(),showCommonExtensions = _getConfigs.showCommonExtensions;

  var requestBodyDescription = requestBody && requestBody.get("description") || null;
  var requestBodyContent = requestBody && requestBody.get("content") || new immutable__WEBPACK_IMPORTED_MODULE_4__["OrderedMap"]();
  contentType = contentType || requestBodyContent.keySeq().first() || "";

  var mediaTypeValue = requestBodyContent.get(contentType, Object(immutable__WEBPACK_IMPORTED_MODULE_4__["OrderedMap"])());
  var schemaForMediaType = mediaTypeValue.get("schema", Object(immutable__WEBPACK_IMPORTED_MODULE_4__["OrderedMap"])());
  var examplesForMediaType = mediaTypeValue.get("examples", null);

  var handleExamplesSelect = function handleExamplesSelect(key /*, { isSyntheticChange } */) {
    updateActiveExamplesKey(key);
  };
  requestBodyErrors = immutable__WEBPACK_IMPORTED_MODULE_4__["List"].isList(requestBodyErrors) ? requestBodyErrors : Object(immutable__WEBPACK_IMPORTED_MODULE_4__["List"])();

  if (!mediaTypeValue.size) {
    return null;
  }

  var isObjectContent = mediaTypeValue.getIn(["schema", "type"]) === "object";

  if (
  contentType === "application/octet-stream" ||
  contentType.indexOf("image/") === 0 ||
  contentType.indexOf("audio/") === 0 ||
  contentType.indexOf("video/") === 0)
  {
    var Input = getComponent("Input");

    if (!isExecute) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", null, "Example values are not available for ", /*#__PURE__*/
      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("code", null, "application/octet-stream"), " media types.");

    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, { type: "file", onChange: handleFile });
  }

  if (
  isObjectContent && (

  contentType === "application/x-www-form-urlencoded" ||
  contentType.indexOf("multipart/") === 0) &&

  schemaForMediaType.get("properties", Object(immutable__WEBPACK_IMPORTED_MODULE_4__["OrderedMap"])()).size > 0)
  {
    var JsonSchemaForm = getComponent("JsonSchemaForm");
    var ParameterExt = getComponent("ParameterExt");
    var bodyProperties = schemaForMediaType.get("properties", Object(immutable__WEBPACK_IMPORTED_MODULE_4__["OrderedMap"])());
    requestBodyValue = immutable__WEBPACK_IMPORTED_MODULE_4__["Map"].isMap(requestBodyValue) ? requestBodyValue : Object(immutable__WEBPACK_IMPORTED_MODULE_4__["OrderedMap"])();
    console.log(get);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "table-container" },
    requestBodyDescription && /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Markdown, { source: requestBodyDescription }), /*#__PURE__*/

    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", null, /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", null,

    bodyProperties.map(function (prop, key) {
      var commonExt = showCommonExtensions ? Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getCommonExtensions"])(prop) : null;
      var required = schemaForMediaType.get("required", Object(immutable__WEBPACK_IMPORTED_MODULE_4__["List"])()).includes(key);
      var type = prop.get("type");
      var format = prop.get("format");
      var description = prop.get("description");
      var currentValue = requestBodyValue.getIn([key, "value"]);
      var currentErrors = requestBodyValue.getIn([key, "errors"]) || requestBodyErrors;

      var initialValue = prop.get("default") || prop.get("example") || "";

      if (initialValue === "" && type === "object") {
        initialValue = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getSampleSchema"])(prop, false, {
          includeWriteOnly: true });

      }

      if (typeof initialValue !== "string" && type === "object") {
        initialValue = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["stringify"])(initialValue);
      }

      var isFile = type === "string" && (format === "binary" || format === "base64");

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", { key: key, className: "parameters", "data-property-name": key }, /*#__PURE__*/
      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", { className: "parameters-col_name" }, /*#__PURE__*/
      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: required ? "parameter__name required" : "parameter__name" },
      key), /*#__PURE__*/

      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "parameter__type" },
      type,
      format && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: "prop-format" }, "($", format, ")"),
      !showCommonExtensions || !commonExt.size ? null : commonExt.entrySeq().map(function (_ref2) {var _ref3 = _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, 2),key = _ref3[0],v = _ref3[1];return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ParameterExt, { key: "".concat(key, "-").concat(v), xKey: key, xVal: v });})), /*#__PURE__*/

      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "parameter__deprecated" },
      prop.get("deprecated") ? "deprecated" : null)), /*#__PURE__*/


      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", { className: "parameters-col_description" }, /*#__PURE__*/
      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Markdown, { source: description }),
      isExecute ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/
      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(JsonSchemaForm, {
        fn: fn,
        dispatchInitialValue: !isFile,
        schema: prop,
        description: key,
        getComponent: getComponent,
        value: currentValue === undefined ? initialValue : currentValue,
        required: required,
        errors: currentErrors,
        onChange: function onChange(value) {
          _onChange(value, [key]);
        } }),

      required ? null : /*#__PURE__*/
      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ParameterIncludeEmpty, {
        onChange: function onChange(value) {return onChangeIncludeEmpty(key, value);},
        isIncluded: requestBodyInclusionSetting.get(key) || false,
        isIncludedOptions: setIsIncludedOptions(key),
        isDisabled: !Object(_utils__WEBPACK_IMPORTED_MODULE_5__["isEmptyValue"])(currentValue) })) :


      null));


    }))));




  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
  requestBodyDescription && /*#__PURE__*/
  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Markdown, { source: requestBodyDescription }),


  examplesForMediaType ? /*#__PURE__*/
  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ExamplesSelectValueRetainer, {
    examples: examplesForMediaType,
    currentKey: activeExamplesKey,
    currentUserInputValue: requestBodyValue,
    onSelect: handleExamplesSelect,
    updateValue: _onChange,
    defaultToFirstExample: true,
    getComponent: getComponent }) :

  null,


  isExecute ? /*#__PURE__*/
  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/
  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RequestBodyEditor, {
    value: requestBodyValue,
    errors: requestBodyErrors,
    defaultValue: getDefaultRequestBodyValue(
    requestBody,
    contentType,
    activeExamplesKey),

    onChange: _onChange,
    getComponent: getComponent })) : /*#__PURE__*/



  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ModelExample, {
    getComponent: getComponent,
    getConfigs: getConfigs,
    specSelectors: specSelectors,
    expandDepth: 1,
    isExecute: isExecute,
    schema: mediaTypeValue.get("schema"),
    specPath: specPath.push("content", contentType),
    example: /*#__PURE__*/
    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HighlightCode, {
      className: "body-param__example",
      value: Object(_utils__WEBPACK_IMPORTED_MODULE_5__["stringify"])(requestBodyValue) || getDefaultRequestBodyValue(
      requestBody,
      contentType,
      activeExamplesKey) }),



    includeWriteOnly: true }),




  examplesForMediaType ? /*#__PURE__*/
  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Example, {
    example: examplesForMediaType.get(activeExamplesKey),
    getComponent: getComponent }) :

  null);


};



















/* harmony default export */ __webpack_exports__["default"] = (RequestBody);

/***/ })

})
//# sourceMappingURL=swagger-ui-bundle.b4a1d2f0b95267188509.hot-update.js.map