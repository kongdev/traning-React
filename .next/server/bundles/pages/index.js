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
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
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

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(26);


/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(1);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "graphql-tag"
var external__graphql_tag_ = __webpack_require__(6);
var external__graphql_tag__default = /*#__PURE__*/__webpack_require__.n(external__graphql_tag_);

// EXTERNAL MODULE: external "react-apollo"
var external__react_apollo_ = __webpack_require__(2);
var external__react_apollo__default = /*#__PURE__*/__webpack_require__.n(external__react_apollo_);

// EXTERNAL MODULE: external "styled-components"
var external__styled_components_ = __webpack_require__(5);
var external__styled_components__default = /*#__PURE__*/__webpack_require__.n(external__styled_components_);

// CONCATENATED MODULE: ./components/PostListItem.js
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n\tbackground : #fff;\n\tpadding : 16px;\n\tmargin-bottom : 24px;\n\tborder : 1px solid #eee;\n\n\t.post-title {\n\t\tfont-size:20px;\n\t\tcolor :blue;\n\t}\n\n\tp{\n\t\tfont-size:16px;\n\t\tcolor : #606060;\n\t}\n"]);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var PostItemBox = external__styled_components__default.a.div(_templateObject);

var PostListItem_PostListItem =
/*#__PURE__*/
function (_Component) {
  _inherits(PostListItem, _Component);

  function PostListItem() {
    _classCallCheck(this, PostListItem);

    return _possibleConstructorReturn(this, (PostListItem.__proto__ || Object.getPrototypeOf(PostListItem)).apply(this, arguments));
  }

  _createClass(PostListItem, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement(PostItemBox, null, external__react__default.a.createElement("h4", {
        className: "post-title"
      }, this.props.post.title), external__react__default.a.createElement("p", null, this.props.post.content));
    }
  }]);

  return PostListItem;
}(external__react_["Component"]);


// CONCATENATED MODULE: ./components/PostList.js
function PostList__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { PostList__typeof = function _typeof(obj) { return typeof obj; }; } else { PostList__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return PostList__typeof(obj); }

function PostList__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PostList__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PostList__createClass(Constructor, protoProps, staticProps) { if (protoProps) PostList__defineProperties(Constructor.prototype, protoProps); if (staticProps) PostList__defineProperties(Constructor, staticProps); return Constructor; }

function PostList__possibleConstructorReturn(self, call) { if (call && (PostList__typeof(call) === "object" || typeof call === "function")) { return call; } return PostList__assertThisInitialized(self); }

function PostList__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function PostList__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var PostList_PostList =
/*#__PURE__*/
function (_Component) {
  PostList__inherits(PostList, _Component);

  function PostList() {
    PostList__classCallCheck(this, PostList);

    return PostList__possibleConstructorReturn(this, (PostList.__proto__ || Object.getPrototypeOf(PostList)).apply(this, arguments));
  }

  PostList__createClass(PostList, [{
    key: "render",
    value: function render() {
      var postListItem = this.props.posts.map(function (post, key) {
        return external__react__default.a.createElement(PostListItem_PostListItem, {
          key: key,
          post: post
        });
      });
      return external__react__default.a.createElement("div", null, postListItem);
    }
  }]);

  return PostList;
}(external__react_["Component"]);


// CONCATENATED MODULE: ./components/NewPostForm.js
function NewPostForm__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { NewPostForm__typeof = function _typeof(obj) { return typeof obj; }; } else { NewPostForm__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return NewPostForm__typeof(obj); }

function NewPostForm__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function NewPostForm__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function NewPostForm__createClass(Constructor, protoProps, staticProps) { if (protoProps) NewPostForm__defineProperties(Constructor.prototype, protoProps); if (staticProps) NewPostForm__defineProperties(Constructor, staticProps); return Constructor; }

function NewPostForm__possibleConstructorReturn(self, call) { if (call && (NewPostForm__typeof(call) === "object" || typeof call === "function")) { return call; } return NewPostForm__assertThisInitialized(self); }

function NewPostForm__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function NewPostForm__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var NewPostForm_NewPostForm =
/*#__PURE__*/
function (_Component) {
  NewPostForm__inherits(NewPostForm, _Component);

  function NewPostForm() {
    var _ref;

    var _temp, _this;

    NewPostForm__classCallCheck(this, NewPostForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return NewPostForm__possibleConstructorReturn(_this, (_temp = _this = NewPostForm__possibleConstructorReturn(this, (_ref = NewPostForm.__proto__ || Object.getPrototypeOf(NewPostForm)).call.apply(_ref, [this].concat(args))), Object.defineProperty(NewPostForm__assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        inputValue: '',
        textareaValue: ''
      }
    }), Object.defineProperty(NewPostForm__assertThisInitialized(_this), "handleInputChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        //console.log(e.target.value)
        _this.setState({
          inputValue: e.target.value
        });
      }
    }), Object.defineProperty(NewPostForm__assertThisInitialized(_this), "handleTextareaChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        //console.log(e.target.value)
        _this.setState({
          textareaValue: e.target.value
        });
      }
    }), Object.defineProperty(NewPostForm__assertThisInitialized(_this), "handleSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        e.preventDefault();
        console.log(_this.state);

        _this.props.onCreatePost({
          title: _this.state.inputValue,
          content: _this.state.textareaValue
        });
      }
    }), _temp));
  }

  NewPostForm__createClass(NewPostForm, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement("form", {
        onSubmit: this.handleSubmit
      }, external__react__default.a.createElement("div", null, external__react__default.a.createElement("input", {
        placeholder: "text",
        type: "text",
        value: this.state.inputValue,
        onChange: this.handleInputChange
      })), external__react__default.a.createElement("div", null, external__react__default.a.createElement("textarea", {
        placeholder: "content",
        value: this.state.textareaValue,
        onChange: this.handleTextareaChange
      })), external__react__default.a.createElement("button", {
        type: "submit"
      }, "Post")));
    }
  }]);

  return NewPostForm;
}(external__react_["Component"]);


// CONCATENATED MODULE: ./components/GuestBookApollo.js
var GuestBookApollo__templateObject = /*#__PURE__*/ GuestBookApollo__taggedTemplateLiteral(["\nfragment postFragment on Post {\n\tid\n    title\n    tags {\n      name\n    }\n    content\n}"]),
    _templateObject2 = /*#__PURE__*/ GuestBookApollo__taggedTemplateLiteral(["\n    query listPost {\n\t\tposts {\n\t\t\t...postFragment\n\t\t}\n}\n", ""]),
    _templateObject3 = /*#__PURE__*/ GuestBookApollo__taggedTemplateLiteral(["subscription postCreate{\n\t\tpostCreated {\n\t\t\t...postFragment\n\t\t}\n}\n", ""]),
    _templateObject4 = /*#__PURE__*/ GuestBookApollo__taggedTemplateLiteral(["mutation createPost($postData : PostData!) {\n    post :createPost(data: $postData){\n      ...postFragment\n    }\n  }\n\t", ""]);

function GuestBookApollo__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { GuestBookApollo__typeof = function _typeof(obj) { return typeof obj; }; } else { GuestBookApollo__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return GuestBookApollo__typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function GuestBookApollo__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GuestBookApollo__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function GuestBookApollo__createClass(Constructor, protoProps, staticProps) { if (protoProps) GuestBookApollo__defineProperties(Constructor.prototype, protoProps); if (staticProps) GuestBookApollo__defineProperties(Constructor, staticProps); return Constructor; }

function GuestBookApollo__possibleConstructorReturn(self, call) { if (call && (GuestBookApollo__typeof(call) === "object" || typeof call === "function")) { return call; } return GuestBookApollo__assertThisInitialized(self); }

function GuestBookApollo__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function GuestBookApollo__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function GuestBookApollo__taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var _postFragment = external__graphql_tag__default()(GuestBookApollo__templateObject);

var postsQuery = external__graphql_tag__default()(_templateObject2, _postFragment);
var postCreatedSub = external__graphql_tag__default()(_templateObject3, _postFragment);
var GuestBookApollo_createPostMutation = external__graphql_tag__default()(_templateObject4, _postFragment);
/*
export default class GuestBookApollo extends Component {
    render() {
        return (
            <Query query={postsQuery}>
                {({ data, loading, error }) => {
                    if (loading) {
                        return <div>loading..</div>
                    }
                    return <PostList posts={data.posts} />
                }}
            </Query>
        )
    }
}*/

var GuestBookApollo_GuestBookApollo =
/*#__PURE__*/
function (_Component) {
  GuestBookApollo__inherits(GuestBookApollo, _Component);

  function GuestBookApollo() {
    GuestBookApollo__classCallCheck(this, GuestBookApollo);

    return GuestBookApollo__possibleConstructorReturn(this, (GuestBookApollo.__proto__ || Object.getPrototypeOf(GuestBookApollo)).apply(this, arguments));
  }

  GuestBookApollo__createClass(GuestBookApollo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.subscribe();
    }
  }, {
    key: "render",
    value: function render() {
      //console.log(this.props.data)
      if (this.props.loading) {
        return external__react__default.a.createElement("div", null, "loading..");
      }

      return external__react__default.a.createElement(external__react__default.a.Fragment, null, external__react__default.a.createElement(external__react_apollo_["Mutation"], {
        mutation: GuestBookApollo_createPostMutation,
        update: function update(cache, result) {
          console.log(result.data.post);

          var _cache$readQuery = cache.readQuery({
            query: postsQuery
          }),
              posts = _cache$readQuery.posts;

          var newPosts = _toConsumableArray(posts).concat([result.data.post]);

          cache.writeQuery({
            query: postsQuery,
            data: {
              posts: newPosts
            }
          });
        }
      }, function (createPostMutation) {
        return external__react__default.a.createElement(NewPostForm_NewPostForm, {
          onCreatePost: function onCreatePost(_ref) {
            var title = _ref.title,
                content = _ref.content;
            var postData = {
              title: title,
              content: content
            };
            var variables = {
              postData: postData
            };
            createPostMutation({
              variables: variables
            });
          }
        });
      }), external__react__default.a.createElement(PostList_PostList, {
        posts: this.props.posts
      }));
    }
  }]);

  return GuestBookApollo;
}(external__react_["Component"]);

/* harmony default export */ var components_GuestBookApollo = (Object(external__react_apollo_["graphql"])(postsQuery, {
  props: function props(res) {
    //console.log(res)
    return {
      posts: res.data.posts,
      loading: res.data.loading,
      subscribe: function subscribe() {
        res.data.subscribeToMore({
          document: postCreatedSub,
          updateQuery: function updateQuery(prev, _ref2) {
            var subscriptionData = _ref2.subscriptionData;
            if (!subscriptionData.data.postCreated) return prev;
            var postCreated = subscriptionData.data.postCreated;
            return Object.assign({}, prev, {
              posts: _toConsumableArray(prev.posts).concat([postCreated])
            }); //console.log('prev', prev)
            //console.log('res', res)
            //return prev
          }
        });
      }
    };
  }
})(GuestBookApollo_GuestBookApollo));
// CONCATENATED MODULE: ./pages/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pages_index; });


function pages__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pages__typeof = function _typeof(obj) { return typeof obj; }; } else { pages__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pages__typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function pages__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pages__createClass(Constructor, protoProps, staticProps) { if (protoProps) pages__defineProperties(Constructor.prototype, protoProps); if (staticProps) pages__defineProperties(Constructor, staticProps); return Constructor; }

function pages__possibleConstructorReturn(self, call) { if (call && (pages__typeof(call) === "object" || typeof call === "function")) { return call; } return pages__assertThisInitialized(self); }

function pages__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function pages__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var pages_index =
/*#__PURE__*/
function (_Component) {
  pages__inherits(index, _Component);

  function index() {
    pages__classCallCheck(this, index);

    return pages__possibleConstructorReturn(this, (index.__proto__ || Object.getPrototypeOf(index)).apply(this, arguments));
  }

  pages__createClass(index, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement(components_GuestBookApollo, null);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee() {
        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", {
                  name: 'kong'
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return index;
}(external__react_["Component"]);



/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ })

/******/ });