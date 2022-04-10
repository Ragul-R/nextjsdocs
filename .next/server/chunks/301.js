"use strict";
exports.id = 301;
exports.ids = [301];
exports.modules = {

/***/ 301:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "E": () => (/* binding */ Code)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(834);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(727);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__]);
_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



/** @jsxImportSource @emotion/react */ 


const styles = {
    h1: _emotion_react__WEBPACK_IMPORTED_MODULE_3__.css`
    font-weight: 600;
    font-size: 32px;
    line-height: 48px;
    margin-bottom: 24px;
  `,
    h2: _emotion_react__WEBPACK_IMPORTED_MODULE_3__.css`
    font-weight: 600;
    font-size: 28px;
    line-height: 40px;
  `,
    p: _emotion_react__WEBPACK_IMPORTED_MODULE_3__.css`
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 24px;
    span {
      display: inline-block;
      vertical-align: middle;
    }
  `,
    code: _emotion_react__WEBPACK_IMPORTED_MODULE_3__.css`
    font-family: 'Monaco';
    font-size: 16px;
    line-height: 22px;
    display: inline-block;
    vertical-align: middle;

    > pre {
      background: unset !important;
      padding: 0 !important;
    }
  `,
    h3: _emotion_react__WEBPACK_IMPORTED_MODULE_3__.css`
  font-size: 22px;
  line-height: 32px;
  margin: 14px 0;
  `,
    img: _emotion_react__WEBPACK_IMPORTED_MODULE_3__.css`
    margin: 24px auto;
    max-width: calc(100% - 100px);

    > img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  `
};
const mdComponents = {
    h1: (props)=>/*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
            css: styles.h1,
            ...props
        })
    ,
    h2: (props)=>/*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
            css: styles.h2,
            ...props
        })
    ,
    h3: (props)=>/*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
            css: styles.h3,
            ...props
        })
    ,
    p: (props)=>/*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            css: styles.p,
            ...props
        })
    ,
    code: (props)=>/*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Code, {
            ...props
        })
    ,
    img: (props)=>/*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
            css: styles.img,
            children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                ...props
            })
        })
};
function Code(props) {
    return(/*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "code-snippet",
        css: styles.code,
        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_4___default()), {
            language: "jsx",
            style: react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_5__.githubGist,
            children: props.children
        })
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ children  })=>/*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.MDXProvider, {
        components: mdComponents,
        children: children
    }));


});

/***/ })

};
;