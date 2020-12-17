webpackHotUpdate_name_("swagger-ui-bundle",{

/***/ "./src/core/components/parameters/parameters.jsx":
/*!*******************************************************!*\
  !*** ./src/core/components/parameters/parameters.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Parameters; });
/* harmony import */ var _babel_runtime_corejs2_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createSuper */ "./node_modules/@babel/runtime-corejs2/helpers/createSuper.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createSuper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createSuper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_immutable_proptypes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-immutable-proptypes */ "./node_modules/react-immutable-proptypes/dist/ImmutablePropTypes.js");
/* harmony import */ var react_immutable_proptypes__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_immutable_proptypes__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils */ "./src/core/utils.js");






// More readable, just iterate over maps, only
var eachMap = function eachMap(iterable, fn) {return iterable.valueSeq().filter(immutable__WEBPACK_IMPORTED_MODULE_9___default.a.Map.isMap).map(fn);};var

Parameters = /*#__PURE__*/function (_Component) {_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Parameters, _Component);var _super = _babel_runtime_corejs2_helpers_createSuper__WEBPACK_IMPORTED_MODULE_5___default()(Parameters);

  function Parameters(props) {var _this;_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Parameters);
    _this = _super.call(this, props);_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "onChange",



































    function (param, value, isXml) {var _this$props =



      _this.props,changeParamByIdentity = _this$props.specActions.changeParamByIdentity,onChangeKey = _this$props.onChangeKey;

      changeParamByIdentity(onChangeKey, param, value, isXml);
    });_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "onChangeConsumesWrapper",

    function (val) {var _this$props2 =



      _this.props,changeConsumesValue = _this$props2.specActions.changeConsumesValue,onChangeKey = _this$props2.onChangeKey;

      changeConsumesValue(onChangeKey, val);
    });_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "toggleTab",

    function (tab) {
      if (tab === "parameters") {
        return _this.setState({
          parametersVisible: true,
          callbackVisible: false });

      } else if (tab === "callbacks") {
        return _this.setState({
          callbackVisible: true,
          parametersVisible: false });

      }
    });_this.state = { callbackVisible: false, parametersVisible: true };return _this;}_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Parameters, [{ key: "render", value: function render()

    {var _this2 = this;var _this$props3 =



















      this.props,onTryoutClick = _this$props3.onTryoutClick,onCancelClick = _this$props3.onCancelClick,parameters = _this$props3.parameters,allowTryItOut = _this$props3.allowTryItOut,tryItOutEnabled = _this$props3.tryItOutEnabled,specPath = _this$props3.specPath,fn = _this$props3.fn,getComponent = _this$props3.getComponent,getConfigs = _this$props3.getConfigs,specSelectors = _this$props3.specSelectors,specActions = _this$props3.specActions,pathMethod = _this$props3.pathMethod,oas3Actions = _this$props3.oas3Actions,oas3Selectors = _this$props3.oas3Selectors,operation = _this$props3.operation,authSelectors = _this$props3.authSelectors;

      var ParameterRow = getComponent("parameterRow");
      var TryItOutButton = getComponent("TryItOutButton");
      var ContentType = getComponent("contentType");
      var Callbacks = getComponent("Callbacks", true);
      var RequestBody = getComponent("RequestBody", true);

      var isExecute = tryItOutEnabled && allowTryItOut;
      var isOAS3 = specSelectors.isOAS3();
      // let authorized = authSelectors.authorized();
      // let authorizedValues = authorized.toJS()
      // Rewrite JSON examples
      var _requestBody = operation.get("requestBody");
      if (_requestBody) {
        _requestBody = _requestBody.toJS();
        if (_requestBody.content) {
          for (var contentType in _requestBody.content) {
            var mediaTypeValue = _requestBody.content[contentType];
            var schemaForMediaType = mediaTypeValue.schema;
            var examplesForMediaType = mediaTypeValue.examples;
            if (schemaForMediaType && examplesForMediaType) {
              for (var exampleName in examplesForMediaType) {
                var mediaTypeExampleValue = examplesForMediaType[exampleName].value;
                if (mediaTypeExampleValue) {
                  var updatedValue = Object(_utils__WEBPACK_IMPORTED_MODULE_11__["parseExample"])(schemaForMediaType, mediaTypeExampleValue, contentType, authorizedValues);
                  _requestBody.content[contentType].examples[exampleName].value = updatedValue;
                }
              }
            }
          }
        }
      }

      var requestBody = Object(immutable__WEBPACK_IMPORTED_MODULE_9__["fromJS"])(_requestBody);

      return /*#__PURE__*/(
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", { className: "opblock-section" }, /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", { className: "opblock-section-header" },
        isOAS3 ? /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", { className: "tab-header" }, /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", { onClick: function onClick() {return _this2.toggleTab("parameters");}, className: "tab-item ".concat(this.state.parametersVisible && "active") }, /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", { className: "opblock-title" }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, "Parameters"))),

        operation.get("callbacks") ? /*#__PURE__*/

        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", { onClick: function onClick() {return _this2.toggleTab("callbacks");}, className: "tab-item ".concat(this.state.callbackVisible && "active") }, /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", { className: "opblock-title" }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, "Callbacks"))) :

        null) : /*#__PURE__*/



        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", { className: "tab-header" }, /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", { className: "opblock-title" }, "Parameters")),


        allowTryItOut ? /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TryItOutButton, { enabled: tryItOutEnabled, onCancelClick: onCancelClick, onTryoutClick: onTryoutClick }) :
        null),

        this.state.parametersVisible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", { className: "parameters-container" },
        !parameters.count() ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", { className: "opblock-description-wrapper" }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", null, "No parameters")) : /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", { className: "table-container" }, /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("table", { className: "parameters" }, /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("thead", null, /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", null, /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", { className: "col_header parameters-col_name" }, "Name"), /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", { className: "col_header parameters-col_description" }, "Description"))), /*#__PURE__*/


        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tbody", null,

        eachMap(parameters, function (parameter, i) {return /*#__PURE__*/(
            react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ParameterRow, {
              fn: fn,
              specPath: specPath.push(i.toString()),
              getComponent: getComponent,
              getConfigs: getConfigs,
              rawParam: parameter,
              param: specSelectors.parameterWithMetaByIdentity(pathMethod, parameter),
              key: "".concat(parameter.get("in"), ".").concat(parameter.get("name")),
              onChange: _this2.onChange,
              onChangeConsumes: _this2.onChangeConsumesWrapper,
              specSelectors: specSelectors,
              specActions: specActions,
              oas3Actions: oas3Actions,
              oas3Selectors: oas3Selectors,
              pathMethod: pathMethod,
              isExecute: isExecute }));}).
        toArray())))) :





        null,

        this.state.callbackVisible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", { className: "callbacks-container opblock-description-wrapper" }, /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Callbacks, {
          callbacks: Object(immutable__WEBPACK_IMPORTED_MODULE_9__["Map"])(operation.get("callbacks")),
          specPath: specPath.slice(0, -1).push("callbacks") })) :

        null,

        isOAS3 && requestBody && this.state.parametersVisible && /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", { className: "opblock-section opblock-section-request-body" }, /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", { className: "opblock-section-header" }, /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", { className: "opblock-title parameter__name ".concat(requestBody.get("required") && "required") }, "Request body"), /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", null, /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ContentType, {
          value: oas3Selectors.requestContentType.apply(oas3Selectors, _babel_runtime_corejs2_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(pathMethod)),
          contentTypes: requestBody.get("content", Object(immutable__WEBPACK_IMPORTED_MODULE_9__["List"])()).keySeq(),
          onChange: function onChange(value) {
            oas3Actions.setRequestContentType({ value: value, pathMethod: pathMethod });
            var requestBodyValue = oas3Selectors.requestBodyValue.apply(oas3Selectors, _babel_runtime_corejs2_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(pathMethod));
            oas3Actions.setRequestBodyValue({ requestBodyValue: requestBodyValue, pathMethod: pathMethod });
            oas3Actions.initRequestBodyValidateError({ pathMethod: pathMethod });
          },
          className: "body-param-content-type" }))), /*#__PURE__*/


        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", { className: "opblock-description-wrapper" }, /*#__PURE__*/
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(RequestBody, {
          specPath: specPath.slice(0, -1).push("requestBody"),
          requestBody: requestBody,
          requestBodyValue: oas3Selectors.requestBodyValue.apply(oas3Selectors, _babel_runtime_corejs2_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(pathMethod)),
          requestBodyInclusionSetting: oas3Selectors.requestBodyInclusionSetting.apply(oas3Selectors, _babel_runtime_corejs2_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(pathMethod)),
          requestBodyErrors: oas3Selectors.requestBodyErrors.apply(oas3Selectors, _babel_runtime_corejs2_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(pathMethod)),
          isExecute: isExecute,
          activeExamplesKey: oas3Selectors.activeExamplesMember.apply(oas3Selectors, _babel_runtime_corejs2_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(
          pathMethod).concat([
          "requestBody",
          "requestBody" // RBs are currently not stored per-mediaType
          ])),
          updateActiveExamplesKey: function updateActiveExamplesKey(key) {
            _this2.props.oas3Actions.setActiveExamplesMember({
              name: key,
              pathMethod: _this2.props.pathMethod,
              contextType: "requestBody",
              contextName: "requestBody" // RBs are currently not stored per-mediaType
            });
          },

          onChange: function onChange(value, path) {
            if (path) {
              var lastValue = oas3Selectors.requestBodyValue.apply(oas3Selectors, _babel_runtime_corejs2_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(pathMethod));
              var usableValue = immutable__WEBPACK_IMPORTED_MODULE_9__["Map"].isMap(lastValue) ? lastValue : Object(immutable__WEBPACK_IMPORTED_MODULE_9__["Map"])();
              return oas3Actions.setRequestBodyValue({
                pathMethod: pathMethod,
                value: usableValue.setIn(path, value) });

            }
            oas3Actions.setRequestBodyValue({ value: value, pathMethod: pathMethod });
          },
          onChangeIncludeEmpty: function onChangeIncludeEmpty(name, value) {
            oas3Actions.setRequestBodyInclusion({
              pathMethod: pathMethod,
              value: value,
              name: name });

          },
          contentType: oas3Selectors.requestContentType.apply(oas3Selectors, _babel_runtime_corejs2_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(pathMethod)) })))));





    } }]);return Parameters;}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(Parameters, "defaultProps", { onTryoutClick: Function.prototype, onCancelClick: Function.prototype, tryItOutEnabled: false, allowTryItOut: true, onChangeKey: [], specPath: [] });

/***/ })

})
//# sourceMappingURL=swagger-ui-bundle.31b84be45e1da4f36117.hot-update.js.map