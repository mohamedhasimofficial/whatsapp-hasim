(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _whatsapp_contact_save_contact_save_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./whatsapp/contact-save/contact-save.component */ "./src/app/whatsapp/contact-save/contact-save.component.ts");
/* harmony import */ var _whatsapp_whatsapp_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./whatsapp/whatsapp.component */ "./src/app/whatsapp/whatsapp.component.ts");






const routes = [
    { path: '', component: _whatsapp_whatsapp_component__WEBPACK_IMPORTED_MODULE_3__["WhatsappComponent"] },
    { path: 'home', component: _whatsapp_whatsapp_component__WEBPACK_IMPORTED_MODULE_3__["WhatsappComponent"] },
    { path: 'data', component: _whatsapp_contact_save_contact_save_component__WEBPACK_IMPORTED_MODULE_2__["ContactSaveComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'whatsapp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _whatsapp_whatsapp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./whatsapp/whatsapp.component */ "./src/app/whatsapp/whatsapp.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _whatsapp_contact_save_contact_save_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./whatsapp/contact-save/contact-save.component */ "./src/app/whatsapp/contact-save/contact-save.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./slider/slider.component */ "./src/app/slider/slider.component.ts");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _whatsapp_whatsapp_component__WEBPACK_IMPORTED_MODULE_4__["WhatsappComponent"],
        _whatsapp_contact_save_contact_save_component__WEBPACK_IMPORTED_MODULE_6__["ContactSaveComponent"],
        _shared_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
        _slider_slider_component__WEBPACK_IMPORTED_MODULE_9__["SliderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _whatsapp_whatsapp_component__WEBPACK_IMPORTED_MODULE_4__["WhatsappComponent"],
                    _whatsapp_contact_save_contact_save_component__WEBPACK_IMPORTED_MODULE_6__["ContactSaveComponent"],
                    _shared_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                    _slider_slider_component__WEBPACK_IMPORTED_MODULE_9__["SliderComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() {
        this.currentYear = new Date().getFullYear();
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 26, vars: 1, consts: [["id", "footer"], [1, "footer-top"], [1, "container"], [1, "row"], [1, "col-sm-12"], [1, "footer-info"], [1, "social-links", "mt-3"], ["href", "https://wa.me/+918524865763", 1, "whatsapp"], [1, "bx", "bxl-whatsapp"], ["href", "https://github.com/mohamedhasimofficial", 1, "github"], [1, "bx", "bxl-github"], ["href", "https://mohamedhasimofficial.github.io", 1, "google-plus"], [1, "bx", "bxl-google"], ["href", "https://www.linkedin.com/in/mohamedhasim-k/", 1, "linkedin"], [1, "bx", "bxl-linkedin"], [1, "copyright"], [1, "credits"], ["href", "https://mohamedhasimofficial.github.io"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "KRM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, ". All Rights Reserved ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Designed by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "K.MOHAMED HASIM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A9 Copyright ", ctx.currentYear, " ");
    } }, styles: ["footer[_ngcontent-%COMP%] {\r\n    background-color: rgb(6, 6, 88);\r\n    color: white;\r\n    width: 100%;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: rgb(41, 228, 24);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQStCO0lBQy9CLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYsIDYsIDg4KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5hIHtcclxuICAgIGNvbG9yOiByZ2IoNDEsIDIyOCwgMjQpO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HeaderComponent {
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 15, vars: 0, consts: [["id", "header", 1, "fixed-top", "d-flex", "align-items-center", "header-transparent", 2, "background-color", "#010351"], [1, "container", "d-flex", "align-items-center"], [1, "logo", "mr-auto"], [1, "text-light"], ["href", "index.html"], [1, "nav-menu", "navbar-expand-md"], ["routerLinkActive", "active"], ["routerLink", "/home"], ["routerLink", "/data"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "KRM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nav", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Instant message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Store Your Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/slider/slider.component.ts":
/*!********************************************!*\
  !*** ./src/app/slider/slider.component.ts ***!
  \********************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SliderComponent {
    constructor() { }
    ngOnInit() {
    }
}
SliderComponent.ɵfac = function SliderComponent_Factory(t) { return new (t || SliderComponent)(); };
SliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SliderComponent, selectors: [["app-slider"]], decls: 13, vars: 0, consts: [["id", "hero"], [1, "container"], [1, "row"], [1, "col-lg-7", "pt-5", "pt-lg-0", "order-2", "order-lg-1", "d-flex", "align-items-center"], ["data-aos", "zoom-out"], ["data-aos", "zoom-out", "data-aos-delay", "300", 1, "col-lg-5", "order-1", "order-lg-2", "hero-img"], ["src", "assets/img/hero-img.png", "alt", "", 1, "img-fluid", "animated"]], template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Start Your Chat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "whatsapp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Without Saving Number in Your Contact to Chat on Whatsapp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-slider',
                templateUrl: './slider.component.html',
                styleUrls: ['./slider.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/whatsapp/contact-save/contact-save.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/whatsapp/contact-save/contact-save.component.ts ***!
  \*****************************************************************/
/*! exports provided: ContactSaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactSaveComponent", function() { return ContactSaveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _contact_save_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-save.service */ "./src/app/whatsapp/contact-save/contact-save.service.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../footer/footer.component */ "./src/app/footer/footer.component.ts");







function ContactSaveComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ENTER CUSTOMER NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactSaveComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ENTER CUSTOMER PHONE NUMBER");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactSaveComponent_h3_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactSaveComponent_p_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Data is Not");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactSaveComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactSaveComponent_div_31_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const val_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.deleteContactSave(val_r8.contactPersonName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const val_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](val_r8.contactPersonName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://wa.me/+91", val_r8.contactPersonNumber, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](val_r8.contactPersonNumber);
} }
class ContactSaveComponent {
    constructor(contactSaveService) {
        this.contactSaveService = contactSaveService;
        this.name = 'test';
        this.ContactSave = [];
        this.VisibleContactSave = [];
        this.loader = false;
    }
    ngOnInit() {
        this.getContactSave();
    }
    addContactSave(data) {
        this.text = data.value;
        this.ContactSave.push(this.text);
        // debugger;
        console.log('this.ContactSave', this.ContactSave);
        localStorage.setItem('userData', JSON.stringify(this.ContactSave));
        data.reset();
    }
    getContactSave() {
        this.ContactSave = (JSON.parse(localStorage.getItem('userData')) != null && JSON.parse(localStorage.getItem('userData')) != undefined && JSON.parse(localStorage.getItem('userData')) != '') ? JSON.parse(localStorage.getItem('userData')) : [];
        // var chkLocStrUsrVal = JSON.parse(localStorage.getItem('userData'));
        // if(chkLocStrUsrVal != null && chkLocStrUsrVal != undefined && chkLocStrUsrVal != ''){
        //     this.ContactSave = chkLocStrUsrVal;
        // } else {
        //     this.ContactSave = [];
        // }
        this.loader = false;
        console.log(this.ContactSave);
        this.VisibleContactSave = this.ContactSave;
    }
    deleteContactSave(todoText) {
        let ContactSave = JSON.parse(localStorage.getItem('userData'));
        for (let i = 0; i < ContactSave.length; i++) {
            if (ContactSave[i].contactPersonName == todoText) {
                ContactSave.splice(i, 1);
            }
        }
        // Set New Todos
        localStorage.setItem('userData', JSON.stringify(ContactSave));
        this.getContactSave();
    }
    // onSearch(){
    //    this.VisibleContactSave = this.VisibleContactSave.filter(res =>{
    //       return res.contactPersonName.toLocaleLowerCase().match(this.contactPersonName.toLocaleLowerCase());
    //    });
    // }
    search() {
        if (this.serachText != "") {
            this.VisibleContactSave = this.VisibleContactSave.filter(res => {
                return res.contactPersonName.toLocaleLowerCase().match(this.serachText.toLocaleLowerCase());
                // console.log(res);
            });
        }
        else if (this.serachText == "") {
            // alert("enter only List data");
            this.loader = true;
            this.ngOnInit();
        }
        else {
            alert("Enter Valid Data");
        }
    }
}
ContactSaveComponent.ɵfac = function ContactSaveComponent_Factory(t) { return new (t || ContactSaveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_contact_save_service__WEBPACK_IMPORTED_MODULE_1__["ContactSaveService"])); };
ContactSaveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactSaveComponent, selectors: [["app-contact-save"]], decls: 33, vars: 9, consts: [[1, "container", "mt-5"], [1, "row"], [1, "col-sm-12"], [3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["type", "text", "required", "", "name", "contactPersonName", "placeholder", "Enter Contact Person Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pname", "ngModel"], ["class", "alert alert-danger text-center", 4, "ngIf"], ["type", "tel", "minlength", "10", "maxlength", "10", "placeholder", "Enter Phone Number", "pattern", "^[1-9]+[0-9]*$", "required", "", "name", "contactPersonNumber", 1, "form-control", 3, "ngModel", "ngModelChange"], ["pnumber", "ngModel"], [1, "btn", "btn-block", "btn-primary", 3, "disabled"], [1, "navbar"], ["type", "text", "name", "search", "placeholder", "Enter Name to Search...", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], [4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "panel panel-success", 4, "ngFor", "ngForOf"], [1, "alert", "alert-danger", "text-center"], [1, "lds-roller"], [1, "alert", "alert-danger"], [1, "panel", "panel-success"], [1, "panel-heading"], [1, "panel-body"], [1, "col-sm-8", "col-md-6"], [1, "col-7", "col-md-6"], [1, "btn", "btn-success", 2, "padding", "10px 35px 10px 20px"], [1, "whatsapp"], [1, "mt-1", "pr-3", "bx", "bxl-whatsapp"], [2, "text-decoration", "none", "color", "white", 3, "href"], [1, "col-2", "col-md-2", "mt-2"], [1, "btn", "btn-danger", 2, "padding", "7px 20px", 3, "click"], [1, "bx", "bx-trash-alt", 2, "font-size", "20px"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Future it Will Work", 1, "col-2", "col-md-2", "mt-2"], ["disabled", "", 1, "btn", "btn-primary", "disabled", 2, "padding", "7px 20px"], [1, "bx", "bx-edit-alt", 2, "font-size", "20px"]], template: function ContactSaveComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactSaveComponent_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx.addContactSave(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Enter Contact Person Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactSaveComponent_Template_input_ngModelChange_12_listener($event) { return ctx.contactPersonName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ContactSaveComponent_div_14_Template, 3, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Enter Contact Person Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactSaveComponent_Template_input_ngModelChange_18_listener($event) { return ctx.contactPersonNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ContactSaveComponent_div_20_Template, 3, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "nav", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactSaveComponent_Template_input_ngModelChange_26_listener($event) { return ctx.serachText = $event; })("input", function ContactSaveComponent_Template_input_input_26_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ContactSaveComponent_h3_27_Template, 10, 0, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ContactSaveComponent_p_28_Template, 2, 0, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ContactSaveComponent_div_31_Template, 22, 3, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "app-footer");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contactPersonName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r1.valid && _r1.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contactPersonNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r3.valid && _r3.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.serachText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.VisibleContactSave.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.VisibleContactSave);
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["PatternValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: [".fa-whatsapp[_ngcontent-%COMP%]{\r\n    color: rgb(255, 255, 255);\r\n    float: left;\r\n    padding-right:5px;\r\n}\r\n\r\n.whatsapp[_ngcontent-%COMP%]{\r\n  font-size: 15.5px;\r\n}\r\n\r\n.fa-trash[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n    color: white;\r\n    float: right;\r\n}\r\n\r\n.ng-invalid.ng-touched[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    border: 2px solid #c43634;\r\n}\r\n\r\n.lds-roller[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    width: 80px;\r\n    height: 80px;\r\n  }\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n    transform-origin: 40px 40px;\r\n  }\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n    content: \" \";\r\n    display: block;\r\n    position: absolute;\r\n    width: 7px;\r\n    height: 7px;\r\n    border-radius: 50%;\r\n    background: red;\r\n    margin: -4px 0 0 -4px;\r\n  }\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\r\n    animation-delay: -0.036s;\r\n  }\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1):after {\r\n    top: 63px;\r\n    left: 63px;\r\n  }\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\r\n    animation-delay: -0.072s;\r\n  }\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2):after {\r\n    top: 68px;\r\n    left: 56px;\r\n  }\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\r\n    animation-delay: -0.108s;\r\n  }\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3):after {\r\n    top: 71px;\r\n    left: 48px;\r\n  }\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\r\n    animation-delay: -0.144s;\r\n  }\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4):after {\r\n    top: 72px;\r\n    left: 40px;\r\n  }\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5) {\r\n    animation-delay: -0.18s;\r\n  }\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5):after {\r\n    top: 71px;\r\n    left: 32px;\r\n  }\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6) {\r\n    animation-delay: -0.216s;\r\n  }\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6):after {\r\n    top: 68px;\r\n    left: 24px;\r\n  }\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7) {\r\n    animation-delay: -0.252s;\r\n  }\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7):after {\r\n    top: 63px;\r\n    left: 17px;\r\n  }\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8) {\r\n    animation-delay: -0.288s;\r\n  }\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8):after {\r\n    top: 56px;\r\n    left: 12px;\r\n  }\r\n\r\n@keyframes lds-roller {\r\n    0% {\r\n      transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2hhdHNhcHAvY29udGFjdC1zYXZlL2NvbnRhY3Qtc2F2ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsV0FBVztJQUNYLFlBQVk7RUFDZDs7QUFDQTtJQUNFLGdFQUFnRTtJQUNoRSwyQkFBMkI7RUFDN0I7O0FBQ0E7SUFDRSxZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YscUJBQXFCO0VBQ3ZCOztBQUNBO0lBQ0Usd0JBQXdCO0VBQzFCOztBQUNBO0lBQ0UsU0FBUztJQUNULFVBQVU7RUFDWjs7QUFDQTtJQUNFLHdCQUF3QjtFQUMxQjs7QUFDQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0VBQ1o7O0FBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7O0FBQ0E7SUFDRSxTQUFTO0lBQ1QsVUFBVTtFQUNaOztBQUNBO0lBQ0Usd0JBQXdCO0VBQzFCOztBQUNBO0lBQ0UsU0FBUztJQUNULFVBQVU7RUFDWjs7QUFDQTtJQUNFLHVCQUF1QjtFQUN6Qjs7QUFDQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0VBQ1o7O0FBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7O0FBQ0E7SUFDRSxTQUFTO0lBQ1QsVUFBVTtFQUNaOztBQUNBO0lBQ0Usd0JBQXdCO0VBQzFCOztBQUNBO0lBQ0UsU0FBUztJQUNULFVBQVU7RUFDWjs7QUFDQTtJQUNFLHdCQUF3QjtFQUMxQjs7QUFDQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0VBQ1o7O0FBQ0E7SUFDRTtNQUNFLHVCQUF1QjtJQUN6QjtJQUNBO01BQ0UseUJBQXlCO0lBQzNCO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC93aGF0c2FwcC9jb250YWN0LXNhdmUvY29udGFjdC1zYXZlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmEtd2hhdHNhcHB7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjVweDtcclxufVxyXG5cclxuLndoYXRzYXBwe1xyXG4gIGZvbnQtc2l6ZTogMTUuNXB4O1xyXG59XHJcblxyXG4uZmEtdHJhc2h7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5uZy1pbnZhbGlkLm5nLXRvdWNoZWQgaW5wdXR7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYzQzNjM0O1xyXG59XHJcblxyXG4ubGRzLXJvbGxlciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gIH1cclxuICAubGRzLXJvbGxlciBkaXYge1xyXG4gICAgYW5pbWF0aW9uOiBsZHMtcm9sbGVyIDEuMnMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC41LCAxKSBpbmZpbml0ZTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDQwcHggNDBweDtcclxuICB9XHJcbiAgLmxkcy1yb2xsZXIgZGl2OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogN3B4O1xyXG4gICAgaGVpZ2h0OiA3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICBtYXJnaW46IC00cHggMCAwIC00cHg7XHJcbiAgfVxyXG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMSkge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4wMzZzO1xyXG4gIH1cclxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDEpOmFmdGVyIHtcclxuICAgIHRvcDogNjNweDtcclxuICAgIGxlZnQ6IDYzcHg7XHJcbiAgfVxyXG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4wNzJzO1xyXG4gIH1cclxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDIpOmFmdGVyIHtcclxuICAgIHRvcDogNjhweDtcclxuICAgIGxlZnQ6IDU2cHg7XHJcbiAgfVxyXG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMykge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xMDhzO1xyXG4gIH1cclxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDMpOmFmdGVyIHtcclxuICAgIHRvcDogNzFweDtcclxuICAgIGxlZnQ6IDQ4cHg7XHJcbiAgfVxyXG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNCkge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNDRzO1xyXG4gIH1cclxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDQpOmFmdGVyIHtcclxuICAgIHRvcDogNzJweDtcclxuICAgIGxlZnQ6IDQwcHg7XHJcbiAgfVxyXG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNSkge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xOHM7XHJcbiAgfVxyXG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNSk6YWZ0ZXIge1xyXG4gICAgdG9wOiA3MXB4O1xyXG4gICAgbGVmdDogMzJweDtcclxuICB9XHJcbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg2KSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjIxNnM7XHJcbiAgfVxyXG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNik6YWZ0ZXIge1xyXG4gICAgdG9wOiA2OHB4O1xyXG4gICAgbGVmdDogMjRweDtcclxuICB9XHJcbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg3KSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjI1MnM7XHJcbiAgfVxyXG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNyk6YWZ0ZXIge1xyXG4gICAgdG9wOiA2M3B4O1xyXG4gICAgbGVmdDogMTdweDtcclxuICB9XHJcbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg4KSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjI4OHM7XHJcbiAgfVxyXG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoOCk6YWZ0ZXIge1xyXG4gICAgdG9wOiA1NnB4O1xyXG4gICAgbGVmdDogMTJweDtcclxuICB9XHJcbiAgQGtleWZyYW1lcyBsZHMtcm9sbGVyIHtcclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactSaveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-save',
                templateUrl: './contact-save.component.html',
                styleUrls: ['./contact-save.component.css']
            }]
    }], function () { return [{ type: _contact_save_service__WEBPACK_IMPORTED_MODULE_1__["ContactSaveService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/whatsapp/contact-save/contact-save.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/whatsapp/contact-save/contact-save.service.ts ***!
  \***************************************************************/
/*! exports provided: ContactSaveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactSaveService", function() { return ContactSaveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ContactSaveService {
    constructor() { }
    addTodo(newContactSave) {
        let ContactSave = JSON.parse(localStorage.getItem('contactSave'));
        // Add New ContactSave
        ContactSave.push(newContactSave);
        // Set New ContactSave
        localStorage.setItem('contactSave', JSON.stringify(ContactSave));
    }
}
ContactSaveService.ɵfac = function ContactSaveService_Factory(t) { return new (t || ContactSaveService)(); };
ContactSaveService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContactSaveService, factory: ContactSaveService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactSaveService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/whatsapp/whatsapp.component.ts":
/*!************************************************!*\
  !*** ./src/app/whatsapp/whatsapp.component.ts ***!
  \************************************************/
/*! exports provided: WhatsappComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatsappComponent", function() { return WhatsappComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../slider/slider.component */ "./src/app/slider/slider.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");







function WhatsappComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ENTER VALID PHONE NUMBER");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WhatsappComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://wa.me/+91", ctx_r3.phone_number, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("CONTINUE TO CHAT - ", ctx_r3.phone_number, "");
} }
class WhatsappComponent {
    onSubmit(formRes) {
        console.log(formRes.value);
        console.log(this.phone_number);
    }
}
WhatsappComponent.ɵfac = function WhatsappComponent_Factory(t) { return new (t || WhatsappComponent)(); };
WhatsappComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WhatsappComponent, selectors: [["app-whatsapp"]], decls: 22, vars: 3, consts: [[1, "container"], [1, "panel", "panel-default"], [1, "panel-heading"], [1, "panel-body"], [3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "phone_number"], ["type", "tel", "id", "phone_number", "minlength", "10", "maxlength", "10", "placeholder", "Enter Phone Number", "pattern", "^[1-9]+[0-9]*$", "required", "", "name", "phone_number", 1, "form-control", 3, "ngModel", "ngModelChange"], ["phone", "ngModel"], ["class", "alert alert-danger text-center", 4, "ngIf"], ["class", "alert alert-success text-center", 4, "ngIf"], [1, "panel-footer"], ["href", "http://www.krminfotech.epizy.com", "target", "_blank"], [1, "alert", "alert-danger", "text-center"], [1, "alert", "alert-success", "text-center"], [2, "text-decoration", "none", 3, "href"]], template: function WhatsappComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "With Out Saving Mobile Number to Chat!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function WhatsappComponent_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Phone Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WhatsappComponent_Template_input_ngModelChange_12_listener($event) { return ctx.phone_number = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, WhatsappComponent_div_14_Template, 3, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, WhatsappComponent_div_15_Template, 3, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Developed by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "K.Mohamed Hasim");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-footer");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.phone_number);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r1.valid && _r1.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.valid);
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _slider_slider_component__WEBPACK_IMPORTED_MODULE_2__["SliderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: [".container[_ngcontent-%COMP%]{\r\n    margin-top: 60px;\r\n}\r\n\r\n.ng-invalid.ng-touched[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    border: 2px solid red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2hhdHNhcHAvd2hhdHNhcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3doYXRzYXBwL3doYXRzYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDtcclxufVxyXG5cclxuLm5nLWludmFsaWQubmctdG91Y2hlZCBpbnB1dHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WhatsappComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-whatsapp',
                templateUrl: './whatsapp.component.html',
                styleUrls: ['./whatsapp.component.css'],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\angular\whatsapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map