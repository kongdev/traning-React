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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(28);


/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(1);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(4);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// EXTERNAL MODULE: external "universal-cookie"
var external__universal_cookie_ = __webpack_require__(3);
var external__universal_cookie__default = /*#__PURE__*/__webpack_require__.n(external__universal_cookie_);

// CONCATENATED MODULE: ./actions/auth.js

function loginSuccess(token) {
  return function (dispatch) {
    var cookies = new external__universal_cookie__default.a();
    cookies.set('token', token, {
      path: '/'
    });
    dispatch({
      type: 'LOGIN_SUCCESS',
      token: token
    });
  };
}
function logout() {
  return function (dispatch) {
    var cookies = new external__universal_cookie__default.a();
    cookies.remove('token');
    dispatch({
      type: 'LOGOUT'
    });
  };
}
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(29);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "react-apollo"
var external__react_apollo_ = __webpack_require__(2);
var external__react_apollo__default = /*#__PURE__*/__webpack_require__.n(external__react_apollo_);

// EXTERNAL MODULE: external "graphql-tag"
var external__graphql_tag_ = __webpack_require__(6);
var external__graphql_tag__default = /*#__PURE__*/__webpack_require__.n(external__graphql_tag_);

// CONCATENATED MODULE: ./components/LoginForm.js


var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["mutation login($username : String! , $password: String!) {\n    token : login(username :$username , password : $password)\n  }\n"]);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



 //import { withRouter } from 'react-router-dom'




var loginMutation = external__graphql_tag__default()(_templateObject);

var LoginForm_LoginForm =
/*#__PURE__*/
function (_Component) {
  _inherits(LoginForm, _Component);

  function LoginForm() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, LoginForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        username: '',
        password: ''
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onUsernameChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.setState({
          username: e.target.value
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onPasswordChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.setState({
          password: e.target.value
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        e.preventDefault();
        fetch('http://localhost:3000/login', {
          method: 'POST',
          body: JSON.stringify({
            username: _this.state.username,
            password: _this.state.password
          }),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then(function (res) {
          return res.json();
        }).then(function (json) {
          //console.log(json)
          _this.props.onLoginSuccess(json.token);
        }).catch(function (e) {
          console.error(e);
        });
      }
    }), _temp));
  }

  _createClass(LoginForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.props.isLoggedIn) {
        return external__react__default.a.createElement("div", null, external__react__default.a.createElement("p", null, "LoggedIn "), external__react__default.a.createElement("button", {
          onClick: this.props.onLogout
        }, "logout"));
      }

      return external__react__default.a.createElement(external__react_apollo_["Mutation"], {
        mutation: loginMutation
      }, function (mutateFn, result) {
        return external__react__default.a.createElement("div", null, external__react__default.a.createElement("form", {
          onSubmit:
          /*#__PURE__*/
          function () {
            var _ref2 = _asyncToGenerator(
            /*#__PURE__*/
            regenerator__default.a.mark(function _callee(e) {
              var result;
              return regenerator__default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      e.preventDefault();
                      _context.next = 3;
                      return mutateFn({
                        variables: {
                          username: _this2.state.username,
                          password: _this2.state.password
                        }
                      });

                    case 3:
                      result = _context.sent;

                      if (result.data.token) {
                        _context.next = 6;
                        break;
                      }

                      return _context.abrupt("return", alert('Login Fail'));

                    case 6:
                      console.log(result);

                      _this2.props.onLoginSuccess(result.data.token);

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            return function (_x) {
              return _ref2.apply(this, arguments);
            };
          }()
        }, external__react__default.a.createElement("div", null, external__react__default.a.createElement("input", {
          placeholder: "username",
          type: "text",
          onChange: _this2.onUsernameChange
        })), external__react__default.a.createElement("div", null, external__react__default.a.createElement("input", {
          placeholder: "password",
          type: "password",
          onChange: _this2.onPasswordChange
        })), external__react__default.a.createElement("button", {
          type: "submit"
        }, "login")));
      });
    }
  }]);

  return LoginForm;
}(external__react_["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    isLoggedIn: state.auth.token != null //isLoggedIn :typeof state.auth.token !== 'undefined'

  };
};

var LoginForm_mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  //console.log(ownProps)
  return {
    onLoginSuccess: function onLoginSuccess(token) {
      dispatch(loginSuccess(token));
      console.log(ownProps);
      ownProps.router.replace('/'); //ownProps.history.replace('/')
    },
    onLogout: function onLogout() {
      dispatch(logout());
    }
  };
};

/* harmony default export */ var components_LoginForm = (Object(router_["withRouter"])(Object(external__react_redux_["connect"])(mapStateToProps, LoginForm_mapDispatchToProps)(LoginForm_LoginForm)));
// CONCATENATED MODULE: ./pages/login.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return login_Login; });
function login__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { login__typeof = function _typeof(obj) { return typeof obj; }; } else { login__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return login__typeof(obj); }

function login__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function login__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function login__createClass(Constructor, protoProps, staticProps) { if (protoProps) login__defineProperties(Constructor.prototype, protoProps); if (staticProps) login__defineProperties(Constructor, staticProps); return Constructor; }

function login__possibleConstructorReturn(self, call) { if (call && (login__typeof(call) === "object" || typeof call === "function")) { return call; } return login__assertThisInitialized(self); }

function login__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function login__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var login_Login =
/*#__PURE__*/
function (_Component) {
  login__inherits(Login, _Component);

  function Login() {
    login__classCallCheck(this, Login);

    return login__possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
  }

  login__createClass(Login, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement(components_LoginForm, null);
    }
  }]);

  return Login;
}(external__react_["Component"]);



/***/ }),

/***/ 29:
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("universal-cookie");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ })

/******/ });