"use strict";
exports.id = 536;
exports.ids = [536];
exports.modules = {

/***/ 536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IE": () => (/* binding */ BaseLayout)
/* harmony export */ });
/* unused harmony exports pages, default, Sidebar */
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_3__);



/** @jsxImportSource @emotion/react */ 
const pages = {
    "get_started": {
        link: '',
        title: 'Get Started'
    },
    "button": {
        link: 'button',
        title: 'Button'
    },
    "input": {
        link: 'input',
        title: 'Input'
    }
};
function AboutPage({ children  }) {
    return(/*#__PURE__*/ _jsx("div", {
        style: {
            textAlign: "center"
        },
        children: children
    }));
};
const styles = {
    main: _emotion_react__WEBPACK_IMPORTED_MODULE_3__.css`display: flex;height: 100vh;overflow: hidden;`,
    section: _emotion_react__WEBPACK_IMPORTED_MODULE_3__.css`
        width: calc(100% - 320px);
        height: 100vh;
        overflow: auto;
        padding: 40px 52px 0;
    `,
    brandlogo: _emotion_react__WEBPACK_IMPORTED_MODULE_3__.css`
    width: 200px;
    height: auto;
    margin: auto;
    padding: 30px 0 24px;
     > img {
         height: 100%;
         width: 100%;
     }
    `,
    header: _emotion_react__WEBPACK_IMPORTED_MODULE_3__.css`
    text-align: center;
    `,
    font: _emotion_react__WEBPACK_IMPORTED_MODULE_3__.css`
    @font-face {
        font-family: 'Monaco';
        font-display: swap;
        font-weight: 400;
        src: url(https://storage.googleapis.com/full-assets/DesignSystem/font/Monaco.woff);
    }
    `
};
function BaseLayout({ children , currentPage ={}  }) {
    return(/*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: currentPage
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "stylesheet",
                        href: "https://storage.googleapis.com/front-office/global-styles/v0.6/main.css"
                    })
                ]
            }),
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                css: styles.main,
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react__WEBPACK_IMPORTED_MODULE_3__.Global, {
                        styles: styles.font
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Sidebar, {
                        currentPage: currentPage
                    }),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MainLayout, {
                        children: children
                    })
                ]
            })
        ]
    }));
}
function MainLayout(props) {
    return(/*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        css: styles.section,
        ...props
    }));
}
function Sidebar({ children , currentPage  }) {
    return(/*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
        className: "g-sidebar",
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                css: styles.header,
                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                    css: styles.brandlogo,
                    children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "https://storage.googleapis.com/full-assets/anywhereworks/images/aw_logo-horizontal-black-1x.png",
                        alt: "brand-logo"
                    })
                })
            }),
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: "g-sidebar-list",
                children: Object.values(pages).map((page)=>/*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: currentPage == page.title ? 'selected' : '',
                        onClick: ()=>{
                            window.location.href = `\/${page.link}`;
                        },
                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: page.title
                            })
                        })
                    })
                )
            })
        ]
    }));
}


/***/ })

};
;