module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("universal-cookie");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(1);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "next/app"
var app_ = __webpack_require__(10);
var app__default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(11);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external__isomorphic_unfetch_ = __webpack_require__(12);
var external__isomorphic_unfetch__default = /*#__PURE__*/__webpack_require__.n(external__isomorphic_unfetch_);

// EXTERNAL MODULE: external "apollo-boost"
var external__apollo_boost_ = __webpack_require__(13);
var external__apollo_boost__default = /*#__PURE__*/__webpack_require__.n(external__apollo_boost_);

// EXTERNAL MODULE: external "apollo-link-context"
var external__apollo_link_context_ = __webpack_require__(14);
var external__apollo_link_context__default = /*#__PURE__*/__webpack_require__.n(external__apollo_link_context_);

// EXTERNAL MODULE: external "apollo-link"
var external__apollo_link_ = __webpack_require__(15);
var external__apollo_link__default = /*#__PURE__*/__webpack_require__.n(external__apollo_link_);

// EXTERNAL MODULE: external "apollo-link-ws"
var external__apollo_link_ws_ = __webpack_require__(16);
var external__apollo_link_ws__default = /*#__PURE__*/__webpack_require__.n(external__apollo_link_ws_);

// EXTERNAL MODULE: external "apollo-utilities"
var external__apollo_utilities_ = __webpack_require__(17);
var external__apollo_utilities__default = /*#__PURE__*/__webpack_require__.n(external__apollo_utilities_);

// CONCATENATED MODULE: ./libs/createApolloClient.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function applyWsLink(httpLink) {
  if (!process.browser) {
    return httpLink;
  }

  var wsLink = new external__apollo_link_ws_["WebSocketLink"]({
    uri: "ws://localhost:3000/subscriptions",
    options: {
      reconnect: true
    }
  });
  var link = Object(external__apollo_link_["split"])( // split based on operation type
  function (_ref) {
    var query = _ref.query;

    var _getMainDefinition = Object(external__apollo_utilities_["getMainDefinition"])(query),
        kind = _getMainDefinition.kind,
        operation = _getMainDefinition.operation;

    return kind === 'OperationDefinition' && operation === 'subscription';
  }, wsLink, httpLink);
  return link;
}

function c(store) {
  var initState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var httpLink = new external__apollo_boost_["HttpLink"]({
    uri: 'http://localhost:3000/graphql'
  });
  var authLink = Object(external__apollo_link_context_["setContext"])(function (_, _ref2) {
    var headers = _ref2.headers;

    if (!store) {
      return {
        headers: headers
      };
    }

    var state = store.getState();
    var token = state.auth.token; //console.log(state)

    return {
      headers: _objectSpread({}, headers, {
        authorization: token ? "".concat(token) : ""
      })
    };
  });
  var link = applyWsLink(authLink.concat(httpLink));
  var client = new external__apollo_boost_["ApolloClient"]({
    link: link,
    cache: new external__apollo_boost_["InMemoryCache"]().restore(initState)
  });
  return client;
}

/* harmony default export */ var createApolloClient = (c);
// EXTERNAL MODULE: external "redux"
var external__redux_ = __webpack_require__(7);
var external__redux__default = /*#__PURE__*/__webpack_require__.n(external__redux_);

// CONCATENATED MODULE: ./reducers/index.js
function reducers__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { reducers__defineProperty(target, key, source[key]); }); } return target; }

function reducers__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }



var counterReducer = function counterReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'INCREASE_COUNTER':
      return state + 1;

    default:
      return state;
  }
};

var postReducer = function postReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'CREATE_POST':
      return _toConsumableArray(state).concat([{
        title: action.title,
        content: action.content
      }]);

    case 'RECEIVE_POST':
      return _toConsumableArray(state).concat(_toConsumableArray(action.posts));

    default:
      return state;
  }
};

var authReducer = function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return reducers__objectSpread({}, state, {
        token: action.token
      });

    case 'LOGOUT':
      return {};

    default:
      return state;
  }
};

var reducer = Object(external__redux_["combineReducers"])({
  counter: counterReducer,
  posts: postReducer,
  auth: authReducer
});
/* harmony default export */ var reducers = (reducer);
// EXTERNAL MODULE: external "redux-thunk"
var external__redux_thunk_ = __webpack_require__(18);
var external__redux_thunk__default = /*#__PURE__*/__webpack_require__.n(external__redux_thunk_);

// CONCATENATED MODULE: ./libs/createReduxStore.js




function createReduxStore(initState) {
  var store = Object(external__redux_["createStore"])(reducers, initState, Object(external__redux_["compose"])(Object(external__redux_["applyMiddleware"])(external__redux_thunk__default.a) //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));
  return store;
}

/* harmony default export */ var libs_createReduxStore = (createReduxStore);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(19);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "react-apollo"
var external__react_apollo_ = __webpack_require__(2);
var external__react_apollo__default = /*#__PURE__*/__webpack_require__.n(external__react_apollo_);

// EXTERNAL MODULE: external "universal-cookie"
var external__universal_cookie_ = __webpack_require__(3);
var external__universal_cookie__default = /*#__PURE__*/__webpack_require__.n(external__universal_cookie_);

// CONCATENATED MODULE: ./libs/with-apollo-client.js



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function with_apollo_client__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { with_apollo_client__defineProperty(target, key, source[key]); }); } return target; }

function with_apollo_client__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






/* harmony default export */ var with_apollo_client = (function (App) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Apollo, _React$Component);

    _createClass(Apollo, null, [{
      key: "getInitialProps",
      value: function () {
        var _getInitialProps = _asyncToGenerator(
        /*#__PURE__*/
        regenerator__default.a.mark(function _callee(_ref) {
          var Component, router, ctx, appProps, cookies, token, initState, store, apollo, apolloState, reduxState;
          return regenerator__default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  Component = _ref.Component, router = _ref.router, ctx = _ref.ctx;
                  appProps = {};

                  if (!App.getInitialProps) {
                    _context.next = 6;
                    break;
                  }

                  _context.next = 5;
                  return App.getInitialProps({
                    Component: Component,
                    router: router,
                    ctx: ctx
                  });

                case 5:
                  appProps = _context.sent;

                case 6:
                  cookies = new external__universal_cookie__default.a(ctx.req ? ctx.req.headers.cookie : undefined);
                  token = cookies.get('token');
                  initState = {
                    auth: {
                      token: token
                    }
                  };
                  store = libs_createReduxStore(initState);
                  apollo = createApolloClient(store);

                  if (process.browser) {
                    _context.next = 21;
                    break;
                  }

                  _context.prev = 12;
                  _context.next = 15;
                  return Object(external__react_apollo_["getDataFromTree"])(external__react__default.a.createElement(App, _extends({}, appProps, {
                    Component: Component,
                    router: router,
                    apolloClient: apollo,
                    reduxStore: store
                  })));

                case 15:
                  _context.next = 20;
                  break;

                case 17:
                  _context.prev = 17;
                  _context.t0 = _context["catch"](12);
                  // Prevent Apollo Client GraphQL errors from crashing SSR.
                  // Handle them in components via the data.error prop:
                  // http://dev.apollodata.com/react/api-queries.html#graphql-query-data-error
                  console.error('Error while running `getDataFromTree`', _context.t0);

                case 20:
                  // getDataFromTree does not call componentWillUnmount
                  // head side effect therefore need to be cleared manually
                  head__default.a.rewind();

                case 21:
                  // Extract query data from the Apollo store
                  apolloState = apollo.cache.extract();
                  reduxState = store.getState();
                  return _context.abrupt("return", with_apollo_client__objectSpread({}, appProps, {
                    apolloState: apolloState,
                    reduxState: reduxState
                  }));

                case 24:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[12, 17]]);
        }));

        return function getInitialProps(_x) {
          return _getInitialProps.apply(this, arguments);
        };
      }()
    }]);

    function Apollo(props) {
      var _this;

      _classCallCheck(this, Apollo);

      _this = _possibleConstructorReturn(this, (Apollo.__proto__ || Object.getPrototypeOf(Apollo)).call(this, props));
      _this.reduxStore = libs_createReduxStore(props.reduxState);
      _this.apolloClient = createApolloClient(_this.reduxStore, props.apolloState); //this.apolloClient = createApolloClient(props.apolloState)

      return _this;
    }

    _createClass(Apollo, [{
      key: "render",
      value: function render() {
        return external__react__default.a.createElement(App, _extends({}, this.props, {
          apolloClient: this.apolloClient,
          reduxStore: this.reduxStore
        }));
      }
    }]);

    return Apollo;
  }(external__react__default.a.Component), Object.defineProperty(_class, "displayName", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: 'withApollo(App)'
  }), _temp;
});
// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(4);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// CONCATENATED MODULE: ./pages/_app.js


function _app__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _app__typeof = function _typeof(obj) { return typeof obj; }; } else { _app__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _app__typeof(obj); }

function _app__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _app__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _app__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _app__createClass(Constructor, protoProps, staticProps) { if (protoProps) _app__defineProperties(Constructor.prototype, protoProps); if (staticProps) _app__defineProperties(Constructor, staticProps); return Constructor; }

function _app__possibleConstructorReturn(self, call) { if (call && (_app__typeof(call) === "object" || typeof call === "function")) { return call; } return _app__assertThisInitialized(self); }

function _app__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _app__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var _app_MyApp =
/*#__PURE__*/
function (_App) {
  _app__inherits(MyApp, _App);

  function MyApp() {
    _app__classCallCheck(this, MyApp);

    return _app__possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).apply(this, arguments));
  }

  _app__createClass(MyApp, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          Component = _props.Component,
          apolloClient = _props.apolloClient,
          reduxStore = _props.reduxStore;
      return external__react__default.a.createElement(external__react_redux_["Provider"], {
        store: reduxStore
      }, external__react__default.a.createElement(external__react_apollo_["ApolloProvider"], {
        client: apolloClient
      }, external__react__default.a.createElement(app_["Container"], null, external__react__default.a.createElement("div", null, external__react__default.a.createElement(link__default.a, {
        href: "/"
      }, external__react__default.a.createElement("a", null, "home")), external__react__default.a.createElement(link__default.a, {
        href: "/login"
      }, external__react__default.a.createElement("a", null, "login"))), external__react__default.a.createElement(Component, this.props))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _app__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee(_ref) {
        var Component, router, ctx, pageProps;
        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, router = _ref.router, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context.sent;

              case 6:
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return MyApp;
}(app__default.a);

/* harmony default export */ var _app = __webpack_exports__["default"] = (with_apollo_client(_app_MyApp));

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-context");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("apollo-link");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-ws");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("apollo-utilities");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })
/******/ ]);