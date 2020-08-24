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
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_form_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/form/form.component */ "./src/app/components/form/form.component.ts");
/* harmony import */ var _components_game_game_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/game/game.component */ "./src/app/components/game/game.component.ts");







const routes = [
    { path: 'form', component: _components_form_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"] },
    { path: 'game', component: _components_game_game_component__WEBPACK_IMPORTED_MODULE_4__["GameComponent"] },
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
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
/* harmony import */ var _clr_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @clr/icons */ "./node_modules/@clr/icons/index.js");
/* harmony import */ var _clr_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_clr_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _clr_icons_shapes_all_shapes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clr/icons/shapes/all-shapes */ "./node_modules/@clr/icons/shapes/all-shapes.js");
/* harmony import */ var _clr_icons_shapes_all_shapes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_clr_icons_shapes_all_shapes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _components_form_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/form/form.component */ "./src/app/components/form/form.component.ts");
/* harmony import */ var _components_game_game_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/game/game.component */ "./src/app/components/game/game.component.ts");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClarityModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _components_form_form_component__WEBPACK_IMPORTED_MODULE_8__["FormComponent"],
        _components_game_game_component__WEBPACK_IMPORTED_MODULE_9__["GameComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClarityModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _components_form_form_component__WEBPACK_IMPORTED_MODULE_8__["FormComponent"],
                    _components_game_game_component__WEBPACK_IMPORTED_MODULE_9__["GameComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClarityModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/form/form.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/form/form.component.ts ***!
  \***************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2503097647525141479$$SRC_APP_COMPONENTS_FORM_FORM_COMPONENT_TS_1 = goog.getMsg("Pyramid Game");
    I18N_0 = MSG_EXTERNAL_2503097647525141479$$SRC_APP_COMPONENTS_FORM_FORM_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟4d360b0bbaf4b2025e116977c1e228fd922d7655␟2503097647525141479:Pyramid Game`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2821179408673282599$$SRC_APP_COMPONENTS_FORM_FORM_COMPONENT_TS_3 = goog.getMsg("Home");
    I18N_2 = MSG_EXTERNAL_2821179408673282599$$SRC_APP_COMPONENTS_FORM_FORM_COMPONENT_TS_3;
}
else {
    I18N_2 = $localize `:␟92eee6be6de0b11c924e3ab27db30257159c0a7c␟2821179408673282599:Home`;
}
function FormComponent_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r7);
} }
function FormComponent_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Height is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormComponent_div_24_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.height.errors.required);
} }
function FormComponent_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r9);
} }
function FormComponent_div_32_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Height is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormComponent_div_32_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.height.errors.required);
} }
function FormComponent_option_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r11);
} }
function FormComponent_div_40_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Number of players is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormComponent_div_40_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.f.numberPlayers.errors.required);
} }
function FormComponent_div_41_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormComponent_div_41_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormComponent_div_41_div_5_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ticket_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ticket_r13.controls.name.errors.required);
} }
const _c4 = function (a0) { return { "is-invalid": a0 }; };
function FormComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FormComponent_div_41_div_5_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ticket_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ticket_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("placeholder", "Player ", i_r14 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c4, ctx_r6.submitted && ticket_r13.controls.name.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.submitted && ticket_r13.controls.name.errors);
} }
const _c5 = function () { return ["Hard", "Normal"]; };
const _c6 = function () { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; };
const _c7 = function () { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; };
class FormComponent {
    constructor(formBuilder, route) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.submitted = false;
    }
    ngOnInit() {
        this.dynamicForm = this.formBuilder.group({
            mode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            height: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            numberPlayers: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            players: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([])
        });
    }
    // convenience getters for easy access to form fields
    get f() { return this.dynamicForm.controls; }
    get t() { return this.f.players; }
    get h() { return this.f.height; }
    get m() { return this.f.mode; }
    onChangeTickets(e) {
        const numberPlayers = e.target.value || 0;
        if (this.t.length < numberPlayers) {
            for (let i = this.t.length; i < numberPlayers; i++) {
                this.t.push(this.formBuilder.group({
                    name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
                }));
            }
        }
        else {
            for (let i = this.t.length; i >= numberPlayers; i--) {
                this.t.removeAt(i);
            }
        }
    }
    checkRepeatedPlayers() {
        let checkPlayers = [];
        let result = "";
        this.f.players.value.forEach(player => {
            if (checkPlayers.includes(player.name)) {
                result = 'error';
            }
            else {
                checkPlayers.push(player.name);
            }
        });
        return result;
    }
    onSubmit() {
        this.submitted = true;
        // Check is any name is repeated
        let test = this.checkRepeatedPlayers();
        if (test === 'error') {
            alert('Check names');
            return;
        }
        // stop here if form is invalid
        if (this.dynamicForm.invalid) {
            return;
        }
        // Save Game data in Local Storage
        localStorage.setItem('pyramid_height', this.f.height.value);
        localStorage.setItem('pyramid_mode', this.f.mode.value);
        localStorage.setItem('pyramid_users', JSON.stringify(this.f.players.value));
        this.route.navigate(['/game']);
    }
    onReset() {
        // reset whole form back to initial state
        this.submitted = false;
        this.dynamicForm.reset();
        this.t.clear();
    }
    onClear() {
        // clear errors and reset ticket fields
        this.submitted = false;
        this.t.reset();
        this.h.reset();
        this.m.reset();
    }
}
FormComponent.ɵfac = function FormComponent_Factory(t) { return new (t || FormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
FormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormComponent, selectors: [["app-form"]], decls: 52, vars: 21, consts: [[1, "header-nav", 3, "clr-nav-level"], [1, "branding"], ["href", "https://lpsoftware.space", 1, "nav-link"], ["shape", "happy-face"], [1, "title"], ["routerLink", "/", "routerLinkActive", "active", 1, "active", "nav-link", "nav-text"], [1, "content-container", "body-container"], [1, "content-area", "center-content"], [3, "formGroup", "ngSubmit"], [1, "div-form"], ["formControlName", "mode", 1, "form-control", "select-form", 3, "ngClass"], ["value", ""], [4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "height", 1, "form-control", "select-form", 3, "ngClass"], ["formControlName", "numberPlayers", 1, "form-control", "select-form", 3, "ngClass", "change"], ["class", "list-group list-group-flush", 4, "ngFor", "ngForOf"], [1, "card-footer", "text-center"], [1, "btn", "btn-primary", "mr-1"], ["type", "reset", 1, "btn", "btn-secondary", "mr-1", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "invalid-feedback"], ["class", "error", 4, "ngIf"], [1, "error"], [1, "list-group", "list-group-flush"], [1, "list-group-item"], [1, "input-form", "card", 3, "formGroup"], [1, "form-group", "col-6"], ["type", "text", "formControlName", "name", 1, "form-control", "input-form-text", 3, "placeholder", "ngClass"]], template: function FormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-main-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "clr-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](7, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](9, I18N_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "main", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormComponent_Template_form_ngSubmit_12_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Set game data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, FormComponent_option_23_Template, 2, 1, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, FormComponent_div_24_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, FormComponent_option_31_Template, 2, 1, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, FormComponent_div_32_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Number of players");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FormComponent_Template_select_change_37_listener($event) { return ctx.onChangeTickets($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, FormComponent_option_39_Template, 2, 1, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, FormComponent_div_40_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, FormComponent_div_41_Template, 6, 6, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Play");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormComponent_Template_button_click_48_listener() { return ctx.onReset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormComponent_Template_button_click_50_listener() { return ctx.onClear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clr-nav-level", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.dynamicForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c4, ctx.submitted && ctx.f.mode.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.height.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c4, ctx.submitted && ctx.f.height.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.height.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c4, ctx.submitted && ctx.f.numberPlayers.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.numberPlayers.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.t.controls);
    } }, directives: [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrMainContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["MainContainerWillyWonka"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrHeader"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["NavDetectionOompaLoompa"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrNavLevel"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIconCustomTag"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"]], styles: [".title[_ngcontent-%COMP%] {\n    text-align: center;\n    font-weight: bold;\n}\n.div-form[_ngcontent-%COMP%] {\n    width: 70%;\n    margin-left: 15%;\n}\n.select-form[_ngcontent-%COMP%] {\n    margin-left: 10px;\n    margin-bottom: 1%;\n    margin-top: 1%;\n\tfont-size: 14px;\n\tfont-weight: 700;\n\tcolor: #444;\n\tline-height: 1;\n\tpadding: .6em 1.4em .5em .8em;\n\twidth: auto;\n\tmax-width: 50%;\n\tbox-sizing: border-box;\n\tborder: 1px solid #aaa;\n\tbox-shadow: 0 1px 0 1px rgba(0,0,0,.04);\n\tborder-radius: .5em;\n\t-moz-appearance: none;\n\t-webkit-appearance: none;\n\tappearance: none;\n\tbackground-color: #fff;\n\tbackground-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),\n\t  linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);\n\tbackground-repeat: no-repeat, repeat;\n\tbackground-position: right .7em top 50%, 0 0;\n\tbackground-size: .65em auto, 100%;\n}\n.input-form[_ngcontent-%COMP%] {\n    margin-left: 1%;\n    margin-bottom: 15px;\n    margin-top: 15px;\n    width: 100%;\n    outline-width: 0ch;\n    text-align: center;\n}\n.input-form-text[_ngcontent-%COMP%] {\n    margin-left: 1%;\n    margin-bottom: 10px;\n    margin-top: 10px;\n    border: 0ch;\n    width: 80%;\n    text-align: center;\n}\n.error[_ngcontent-%COMP%] {\n    color: crimson;\n    font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JtL2Zvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsY0FBYztDQUNqQixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLFdBQVc7Q0FDWCxjQUFjO0NBQ2QsNkJBQTZCO0NBQzdCLFdBQVc7Q0FDWCxjQUFjO0NBQ2Qsc0JBQXNCO0NBQ3RCLHNCQUFzQjtDQUN0Qix1Q0FBdUM7Q0FDdkMsbUJBQW1CO0NBQ25CLHFCQUFxQjtDQUNyQix3QkFBd0I7Q0FDeEIsZ0JBQWdCO0NBQ2hCLHNCQUFzQjtDQUN0QjtzREFDcUQ7Q0FDckQsb0NBQW9DO0NBQ3BDLDRDQUE0QztDQUM1QyxpQ0FBaUM7QUFDbEM7QUFDQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsVUFBVTtJQUNWLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybS9mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5kaXYtZm9ybSB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xufVxuLnNlbGVjdC1mb3JtIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxJTtcbiAgICBtYXJnaW4tdG9wOiAxJTtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRmb250LXdlaWdodDogNzAwO1xuXHRjb2xvcjogIzQ0NDtcblx0bGluZS1oZWlnaHQ6IDE7XG5cdHBhZGRpbmc6IC42ZW0gMS40ZW0gLjVlbSAuOGVtO1xuXHR3aWR0aDogYXV0bztcblx0bWF4LXdpZHRoOiA1MCU7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XG5cdGJveC1zaGFkb3c6IDAgMXB4IDAgMXB4IHJnYmEoMCwwLDAsLjA0KTtcblx0Ym9yZGVyLXJhZGl1czogLjVlbTtcblx0LW1vei1hcHBlYXJhbmNlOiBub25lO1xuXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG5cdGFwcGVhcmFuY2U6IG5vbmU7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVMtQVNDSUksJTNDc3ZnJTIweG1sbnMlM0QlMjJodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmclMjIlMjB3aWR0aCUzRCUyMjI5Mi40JTIyJTIwaGVpZ2h0JTNEJTIyMjkyLjQlMjIlM0UlM0NwYXRoJTIwZmlsbCUzRCUyMiUyMzAwN0NCMiUyMiUyMGQlM0QlMjJNMjg3JTIwNjkuNGExNy42JTIwMTcuNiUyMDAlMjAwJTIwMC0xMy01LjRIMTguNGMtNSUyMDAtOS4zJTIwMS44LTEyLjklMjA1LjRBMTcuNiUyMDE3LjYlMjAwJTIwMCUyMDAlMjAwJTIwODIuMmMwJTIwNSUyMDEuOCUyMDkuMyUyMDUuNCUyMDEyLjlsMTI4JTIwMTI3LjljMy42JTIwMy42JTIwNy44JTIwNS40JTIwMTIuOCUyMDUuNHM5LjItMS44JTIwMTIuOC01LjRMMjg3JTIwOTVjMy41LTMuNSUyMDUuNC03LjglMjA1LjQtMTIuOCUyMDAtNS0xLjktOS4yLTUuNS0xMi44eiUyMiUyRiUzRSUzQyUyRnN2ZyUzRScpLFxuXHQgIGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZmZmZmYgMCUsI2U1ZTVlNSAxMDAlKTtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCwgcmVwZWF0O1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAuN2VtIHRvcCA1MCUsIDAgMDtcblx0YmFja2dyb3VuZC1zaXplOiAuNjVlbSBhdXRvLCAxMDAlO1xufVxuLmlucHV0LWZvcm0ge1xuICAgIG1hcmdpbi1sZWZ0OiAxJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3V0bGluZS13aWR0aDogMGNoO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pbnB1dC1mb3JtLXRleHQge1xuICAgIG1hcmdpbi1sZWZ0OiAxJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYm9yZGVyOiAwY2g7XG4gICAgd2lkdGg6IDgwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZXJyb3Ige1xuICAgIGNvbG9yOiBjcmltc29uO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form',
                templateUrl: './form.component.html',
                styleUrls: ['./form.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/game/game.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/game/game.component.ts ***!
  \***************************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2503097647525141479$$SRC_APP_COMPONENTS_GAME_GAME_COMPONENT_TS_1 = goog.getMsg("Pyramid Game");
    I18N_0 = MSG_EXTERNAL_2503097647525141479$$SRC_APP_COMPONENTS_GAME_GAME_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟4d360b0bbaf4b2025e116977c1e228fd922d7655␟2503097647525141479:Pyramid Game`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1045500808588981286$$SRC_APP_COMPONENTS_GAME_GAME_COMPONENT_TS_3 = goog.getMsg("Finish game");
    I18N_2 = MSG_EXTERNAL_1045500808588981286$$SRC_APP_COMPONENTS_GAME_GAME_COMPONENT_TS_3;
}
else {
    I18N_2 = $localize `:␟65adc5f96aba4c3f838b2625b338e0e904067c0d␟1045500808588981286:Finish game`;
}
function GameComponent_tr_14_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_tr_14_td_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const item_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.playCard(item_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r4.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.checkCard(item_r4.number));
} }
function GameComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameComponent_tr_14_td_1_Template, 2, 2, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r2);
} }
function GameComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r7.cards);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r7.drinks);
} }
class GameComponent {
    constructor(route) {
        this.route = route;
        this.userDrinks = [];
        this.structure = [];
        this.cardInGame = '0';
        this.userCardList = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K",
            "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K",
            "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K",
            "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        this.boardCardList = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K",
            "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K",
            "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K",
            "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        this.userCardsInGame = [];
    }
    ngOnInit() {
        this.mode = localStorage.getItem('pyramid_mode');
        this.height = localStorage.getItem('pyramid_height');
        this.mode = localStorage.getItem('pyramid_mode');
        this.players = JSON.parse(localStorage.getItem('pyramid_users')) || [];
        this.setGame(this.mode);
    }
    setGame(mode) {
        this.setUserVars(this.players);
        if (mode === 'Hard') {
            this.setNumberCardsInGame();
            this.setUserCards('Hard');
            if (this.numberCardsInGame > this.userCardsInGame.length) {
                let diff = this.numberCardsInGame - this.userCardsInGame.length;
                this.fillBoard(diff);
            }
            this.setStructure('Hard');
        }
        else if (mode === 'Normal') {
            this.setNumberCardsInGame();
            this.setUserCards('Normal');
            this.setStructure('Normal');
        }
    }
    setNumberCardsInGame() {
        let number_cards = 0;
        for (let i = 1; i < Number(this.height) + 1; i++) {
            number_cards += i;
        }
        this.numberCardsInGame = number_cards;
    }
    setUserCards(mode) {
        let userData = [];
        if (mode === 'Hard') {
            this.players.forEach(user => {
                let card1 = this.setCards('user', mode, false);
                let card2 = this.setCards('user', mode, false);
                userData.push({ 'name': user['name'], 'cards': [card1, card2] });
                if (!this.userCardsInGame.includes(card1)) {
                    this.userCardsInGame.push(card1);
                    this.userCardsInGame.push(card1);
                    this.userCardsInGame.push(card1);
                    this.userCardsInGame.push(card1);
                }
                if (!this.userCardsInGame.includes(card2)) {
                    this.userCardsInGame.push(card2);
                    this.userCardsInGame.push(card2);
                    this.userCardsInGame.push(card2);
                    this.userCardsInGame.push(card2);
                }
            });
        }
        else if (mode === 'Normal') {
            this.players.forEach(user => {
                let card1 = this.setCards('user', mode, false);
                let card2 = this.setCards('user', mode, false);
                userData.push({ 'name': user['name'], 'cards': [card1, card2] });
                if (!this.userCardsInGame.includes(card1)) {
                    this.userCardsInGame.push(card1);
                }
                if (!this.userCardsInGame.includes(card2)) {
                    this.userCardsInGame.push(card2);
                }
            });
        }
        this.setUserDrinks(userData);
    }
    // Fill Board
    // If diff cards > 7 , fill with 'all drinks' and 7 repeated cards from users
    fillBoard(diff) {
        let originalCards = this.userCardsInGame;
        let diffCards = diff;
        if (diff > 7) {
            diffCards = 7;
            for (let i = 0; i < diff - 7; i++) {
                this.userCardsInGame.push('0');
            }
        }
        for (let i = 0; i < diffCards; i++) {
            let randomCard = originalCards[Math.floor(Math.random() * originalCards.length)];
            this.userCardsInGame.push(randomCard);
        }
    }
    setUserVars(users) {
        let userList = [];
        users.forEach(user => {
            userList.push(user.name);
            localStorage.setItem('pyramid_user_' + user.name, '0');
        });
        this.userList = userList;
    }
    // Set structure by mode
    // If normal and card without user fill with 'all drinks' card
    setStructure(mode) {
        let set_structure = [];
        let cont = this.numberCardsInGame;
        let rowNumber = Number(this.height) - 1;
        for (let index = 1; index < Number(this.height) + 1; index++) {
            let row = [];
            for (let data = 0; data < index; data++) {
                if (index === 1) {
                    row.push({ card: this.setCards('board', mode, true), number: cont - 1, row: rowNumber });
                    cont = cont - 1;
                }
                else {
                    row.push({ card: this.setCards('board', mode, false), number: cont - 1, row: rowNumber });
                    cont = cont - 1;
                }
            }
            rowNumber = rowNumber - 1;
            set_structure.push(row.reverse());
        }
        this.lastCard = this.numberCardsInGame;
        this.structure = set_structure;
    }
    // Set cards, first card never is 'all drinks'
    // 5 tries to get another card. If not found put all drinks card
    setCards(type, mode, first) {
        if (type === 'board') {
            if (mode === 'Hard') {
                let randomCard = this.userCardsInGame[Math.floor(Math.random() * this.userCardsInGame.length)];
                if (first) {
                    let cont = 0;
                    while (cont < 5) {
                        let card = this.userCardsInGame[Math.floor(Math.random() * this.userCardsInGame.length)];
                        if (card !== '0') {
                            randomCard = card;
                            cont = 5;
                        }
                    }
                }
                // Remove cards from list
                let new_card_list = this.userCardsInGame;
                for (let index = 0; index < new_card_list.length; index++) {
                    if (randomCard === new_card_list[index]) {
                        delete new_card_list[index];
                        break;
                    }
                }
                // Remove undefined items
                const new_card_list_clean = [];
                for (let index = 0; index < new_card_list.length; index++) {
                    if (new_card_list[index] !== undefined) {
                        new_card_list_clean.push(new_card_list[index]);
                    }
                }
                this.userCardsInGame = new_card_list_clean;
                return randomCard;
            }
            else if (mode === 'Normal') {
                let randomCard = this.boardCardList[Math.floor(Math.random() * this.boardCardList.length)];
                if (first) {
                    let cont = 0;
                    while (cont < 5) {
                        let card = this.boardCardList[Math.floor(Math.random() * this.boardCardList.length)];
                        if (this.userCardsInGame.includes(card)) {
                            randomCard = card;
                            cont = 5;
                        }
                    }
                }
                // Remove cards from list
                let new_card_list = this.boardCardList;
                for (let index = 0; index < new_card_list.length; index++) {
                    if (randomCard === new_card_list[index]) {
                        delete new_card_list[index];
                        break;
                    }
                }
                // Remove undefined items
                const new_card_list_clean = [];
                for (let index = 0; index < new_card_list.length; index++) {
                    if (new_card_list[index] !== undefined) {
                        new_card_list_clean.push(new_card_list[index]);
                    }
                }
                this.boardCardList = new_card_list_clean;
                if (!this.userCardsInGame.includes(randomCard)) {
                    return '0';
                }
                else {
                    return randomCard;
                }
            }
        }
        else if (type === 'user') {
            let randomCard = this.userCardList[Math.floor(Math.random() * this.userCardList.length)];
            // Remove cards from list
            let new_card_list = this.userCardList;
            for (let index = 0; index < new_card_list.length; index++) {
                if (randomCard === new_card_list[index]) {
                    delete new_card_list[index];
                    break;
                }
            }
            // Remove undefined items
            const new_card_list_clean = [];
            for (let index = 0; index < new_card_list.length; index++) {
                if (new_card_list[index] !== undefined) {
                    new_card_list_clean.push(new_card_list[index]);
                }
            }
            this.userCardList = new_card_list_clean;
            return randomCard;
        }
        else {
            return '';
        }
    }
    checkCard(id) {
        if (this.cardInGame != id) {
            return true;
        }
        else {
            return false;
        }
    }
    playCard(item) {
        this.cardInGame = (Number(this.cardInGame) + 1).toString();
        let users = this.getUsersWithCard(item['card']);
        users.forEach(user => {
            this.addDrinks(user, item.row + 1);
        });
        if (item.number + 1 === this.lastCard) {
            this.finish();
        }
    }
    getUsersWithCard(card) {
        if (card === '0') {
            let users = [];
            this.userDrinks.forEach(user => {
                users.push(user['name']);
            });
            return users;
        }
        else {
            let users = [];
            this.userDrinks.forEach(user => {
                if (user['cards'].includes(card)) {
                    users.push(user['name']);
                }
            });
            return users;
        }
    }
    addDrinks(user, numberDrinks) {
        let beforeDrinks = localStorage.getItem('pyramid_user_' + user);
        let newDrinks = Number(beforeDrinks) + numberDrinks;
        localStorage.setItem('pyramid_user_' + user, newDrinks.toString());
        this.updateUserDrinks();
    }
    setUserDrinks(userData) {
        let userDrinks = [];
        userData.forEach(user => {
            let userData = { name: user['name'], cards: user['cards'], drinks: localStorage.getItem('pyramid_user_' + user['name']) };
            userDrinks.push(userData);
        });
        this.userDrinks = userDrinks;
    }
    updateUserDrinks() {
        let userDrinks = [];
        this.userDrinks.forEach(user => {
            let userData = { name: user['name'], cards: user['cards'], drinks: localStorage.getItem('pyramid_user_' + user['name']) };
            userDrinks.push(userData);
        });
        userDrinks.sort((a, b) => {
            return b['drinks'] - a['drinks'];
        });
        this.userDrinks = userDrinks;
    }
    userMoreDrinks() {
        let maxDrinks = -1;
        let maxDrinksUser = '';
        this.userList.forEach(user => {
            let drinks = Number(localStorage.getItem('pyramid_user_' + user));
            if (drinks > maxDrinks) {
                maxDrinks = drinks;
                maxDrinksUser = user;
            }
            else if (drinks === maxDrinks) {
                maxDrinksUser = maxDrinksUser + ',' + user;
            }
        });
        return [maxDrinksUser, maxDrinks];
    }
    finish() {
        let userDrinks = this.userMoreDrinks();
        alert('The winner is => ' + userDrinks[0] + ' with ' + userDrinks[1] + ' drinks !!!');
        localStorage.removeItem('pyramid_height');
        localStorage.removeItem('pyramid_mode');
        localStorage.removeItem('pyramid_users');
        this.userList.forEach(user => {
            localStorage.removeItem('pyramid_user_' + user);
        });
        this.route.navigate(['/']);
    }
}
GameComponent.ɵfac = function GameComponent_Factory(t) { return new (t || GameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
GameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameComponent, selectors: [["app-game"]], decls: 29, vars: 4, consts: [[1, "header-nav", 3, "clr-nav-level"], [1, "branding"], ["href", "https://lpsoftware.space", 1, "nav-link"], ["shape", "happy-face"], [1, "title"], ["routerLink", "/", 1, "nav-link", "nav-text", 3, "click"], [1, "content-container"], [1, "content-area", "center-content"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "sidenav", 3, "clr-nav-level"], [2, "text-align", "center"], [1, "table", "table-users"], [4, "ngFor", "ngForOf"], [1, "row"], [1, "card", "button", 3, "id", "disabled", "click"]], template: function GameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-main-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "clr-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](7, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_Template_a_click_8_listener() { return ctx.finish(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](9, I18N_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "main", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, GameComponent_tr_14_Template, 2, 1, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nav", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Drinks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Drinks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, GameComponent_tr_28_Template, 7, 3, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clr-nav-level", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.structure);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clr-nav-level", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userDrinks);
    } }, directives: [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrMainContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["MainContainerWillyWonka"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrHeader"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["NavDetectionOompaLoompa"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrNavLevel"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrIconCustomTag"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".center-content[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n}\n.row[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n}\n.card[_ngcontent-%COMP%] {\n    height:42px;\n    width:30px;\n    margin: 15%;\n    background: url('Card.png') no-repeat top center;\n    background-size: 100%;\n}\n.button[_ngcontent-%COMP%] {\n    cursor: pointer;\n    outline: none;\n    color: blue;\n    border: none;\n    box-shadow: 0 2px #999;\n}\n.button[_ngcontent-%COMP%]:hover {background-color: #3e8e41}\n.button[_ngcontent-%COMP%]:active {\n    background-color: #3e8e41;\n    box-shadow: 0 5px #666;\n    transform: translateY(4px);\n}\n.button[_ngcontent-%COMP%]:disabled {\n    background: black;\n}\n.table-users[_ngcontent-%COMP%] {\n    width: 90%;\n    margin-left: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYW1lL2dhbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsV0FBVztJQUNYLGdEQUFnRTtJQUNoRSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7QUFDQSxlQUFlLHlCQUF5QjtBQUN4QztJQUNJLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFVBQVU7SUFDVixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9nYW1lL2dhbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXItY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY2FyZCB7XG4gICAgaGVpZ2h0OjQycHg7XG4gICAgd2lkdGg6MzBweDtcbiAgICBtYXJnaW46IDE1JTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvQ2FyZC5wbmdcIikgbm8tcmVwZWF0IHRvcCBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xufVxuLmJ1dHRvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY29sb3I6IGJsdWU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4ICM5OTk7XG59XG4uYnV0dG9uOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4ZTQxfVxuLmJ1dHRvbjphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZThlNDE7XG4gICAgYm94LXNoYWRvdzogMCA1cHggIzY2NjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbn1cbi5idXR0b246ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuLnRhYmxlLXVzZXJzIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game',
                templateUrl: './game.component.html',
                styleUrls: ['./game.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _clr_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @clr/icons */ "./node_modules/@clr/icons/index.js");
/* harmony import */ var _clr_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_clr_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _clr_icons_shapes_all_shapes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clr/icons/shapes/all-shapes */ "./node_modules/@clr/icons/shapes/all-shapes.js");
/* harmony import */ var _clr_icons_shapes_all_shapes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_clr_icons_shapes_all_shapes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2503097647525141479$$SRC_APP_COMPONENTS_HOME_HOME_COMPONENT_TS_1 = goog.getMsg("Pyramid Game");
    I18N_0 = MSG_EXTERNAL_2503097647525141479$$SRC_APP_COMPONENTS_HOME_HOME_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟4d360b0bbaf4b2025e116977c1e228fd922d7655␟2503097647525141479:Pyramid Game`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2821179408673282599$$SRC_APP_COMPONENTS_HOME_HOME_COMPONENT_TS_3 = goog.getMsg("Home");
    I18N_2 = MSG_EXTERNAL_2821179408673282599$$SRC_APP_COMPONENTS_HOME_HOME_COMPONENT_TS_3;
}
else {
    I18N_2 = $localize `:␟92eee6be6de0b11c924e3ab27db30257159c0a7c␟2821179408673282599:Home`;
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1697741001671518509$$SRC_APP_COMPONENTS_HOME_HOME_COMPONENT_TS_5 = goog.getMsg("Start Game");
    I18N_4 = MSG_EXTERNAL_1697741001671518509$$SRC_APP_COMPONENTS_HOME_HOME_COMPONENT_TS_5;
}
else {
    I18N_4 = $localize `:␟37939fa361d820d0469c58e2101ef8ac545bd546␟1697741001671518509:Start Game`;
}
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2503097647525141479$$SRC_APP_COMPONENTS_HOME_HOME_COMPONENT_TS_7 = goog.getMsg("Pyramid Game");
    I18N_6 = MSG_EXTERNAL_2503097647525141479$$SRC_APP_COMPONENTS_HOME_HOME_COMPONENT_TS_7;
}
else {
    I18N_6 = $localize `:␟4d360b0bbaf4b2025e116977c1e228fd922d7655␟2503097647525141479:Pyramid Game`;
}
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1534367694207535197$$SRC_APP_COMPONENTS_HOME_HOME_COMPONENT_TS_9 = goog.getMsg("Steps");
    I18N_8 = MSG_EXTERNAL_1534367694207535197$$SRC_APP_COMPONENTS_HOME_HOME_COMPONENT_TS_9;
}
else {
    I18N_8 = $localize `:␟02f8ee7117d0f306f5726d1c578a9f18c4ba5b6d␟1534367694207535197:Steps`;
}
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5445475613742732775$$SRC_APP_COMPONENTS_HOME_HOME_COMPONENT_TS_11 = goog.getMsg("Ingrese nombre de jugadores");
    I18N_10 = MSG_EXTERNAL_5445475613742732775$$SRC_APP_COMPONENTS_HOME_HOME_COMPONENT_TS_11;
}
else {
    I18N_10 = $localize `:␟a94c1929ff1348760c21af3e30a29f81526e754e␟5445475613742732775:Ingrese nombre de jugadores`;
}
var I18N_12;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_139423710282621313$$SRC_APP_COMPONENTS_HOME_HOME_COMPONENT_TS_13 = goog.getMsg("1-26 players");
    I18N_12 = MSG_EXTERNAL_139423710282621313$$SRC_APP_COMPONENTS_HOME_HOME_COMPONENT_TS_13;
}
else {
    I18N_12 = $localize `:␟7944f42bf2eac086f8ac7a1c2f4efb4cfddca790␟139423710282621313:1-26 players`;
}
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2583640967428006211$$SRC_APP_COMPONENTS_HOME_HOME_COMPONENT_TS_15 = goog.getMsg("Ingrese altura de pir\u00E1mide");
    I18N_14 = MSG_EXTERNAL_2583640967428006211$$SRC_APP_COMPONENTS_HOME_HOME_COMPONENT_TS_15;
}
else {
    I18N_14 = $localize `:␟fb9ed4c53c32b8aaa079e227a36fab2aa97e9b91␟2583640967428006211:Ingrese altura de pirámide`;
}
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8064179538901380962$$SRC_APP_COMPONENTS_HOME_HOME_COMPONENT_TS_17 = goog.getMsg("1-10");
    I18N_16 = MSG_EXTERNAL_8064179538901380962$$SRC_APP_COMPONENTS_HOME_HOME_COMPONENT_TS_17;
}
else {
    I18N_16 = $localize `:␟4cfc28ee2d91e1d513c73699925bbfcd21130744␟8064179538901380962:1-10`;
}
var I18N_18;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8471304146830003347$$SRC_APP_COMPONENTS_HOME_HOME_COMPONENT_TS_19 = goog.getMsg("Empiece a jugar y beber");
    I18N_18 = MSG_EXTERNAL_8471304146830003347$$SRC_APP_COMPONENTS_HOME_HOME_COMPONENT_TS_19;
}
else {
    I18N_18 = $localize `:␟5116ca7195838132798d6c73d0b2bbe57ca2ac74␟8471304146830003347:Empiece a jugar y beber`;
}
var I18N_20;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4645345687322304891$$SRC_APP_COMPONENTS_HOME_HOME_COMPONENT_TS_21 = goog.getMsg("Rules");
    I18N_20 = MSG_EXTERNAL_4645345687322304891$$SRC_APP_COMPONENTS_HOME_HOME_COMPONENT_TS_21;
}
else {
    I18N_20 = $localize `:␟2489eefea00931942b91f4a1ae109514b591e2e1␟4645345687322304891:Rules`;
}
var I18N_22;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2696408418505284205$$SRC_APP_COMPONENTS_HOME_HOME_COMPONENT_TS_23 = goog.getMsg("Se asignan 2 cartas al azar por jugador");
    I18N_22 = MSG_EXTERNAL_2696408418505284205$$SRC_APP_COMPONENTS_HOME_HOME_COMPONENT_TS_23;
}
else {
    I18N_22 = $localize `:␟dedf5c10dcf1949632038ad446dc288fcdad54fc␟2696408418505284205:Se asignan 2 cartas al azar por jugador`;
}
var I18N_24;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3025938575676841381$$SRC_APP_COMPONENTS_HOME_HOME_COMPONENT_TS_25 = goog.getMsg("La dificultad depende de la altura de la piramide");
    I18N_24 = MSG_EXTERNAL_3025938575676841381$$SRC_APP_COMPONENTS_HOME_HOME_COMPONENT_TS_25;
}
else {
    I18N_24 = $localize `:␟f7233fa4c38c9813513ab81fb2ac1bf884a6af76␟3025938575676841381:La dificultad depende de la altura de la piramide`;
}
class HomeComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.titleService.setTitle("Pyramid Game");
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 53, vars: 2, consts: [[1, "header-nav", 3, "clr-nav-level"], [1, "branding"], ["href", "https://lpsoftware.space", 1, "nav-link"], ["shape", "happy-face"], [1, "title"], ["routerLink", "/", "routerLinkActive", "active", 1, "active", "nav-link", "nav-text"], ["routerLink", "/form", 1, "nav-link", "nav-text"], [1, "content-container", "body-container"], [1, "content-area", "center-content"], [1, "clr-timeline", "clr-timeline-vertical"], [1, "clr-timeline-step"], ["shape", "circle", "aria-label", "Not started"], [1, "clr-timeline-step-body"], [1, "clr-timeline-step-title"], [1, "clr-timeline-step-description"], ["shape", "success-standard", "aria-label", "Completed"], ["shape", "dot-circle", "aria-current", "true", "aria-label", "Current"], [1, "sidenav", "body-container", 3, "clr-nav-level"], ["src", "../../../assets/Example.png", "alt", "Example", 1, "image"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-main-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "clr-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](7, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](9, I18N_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](11, I18N_4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "main", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](15, I18N_6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](17, I18N_8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "clr-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](23, I18N_10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](25, I18N_12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "clr-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](30, I18N_14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](32, I18N_16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "clr-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](37, I18N_18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](39, I18N_20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "clr-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](45, I18N_22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "clr-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](50, I18N_24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "nav", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clr-nav-level", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clr-nav-level", 2);
    } }, directives: [_clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrMainContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["MainContainerWillyWonka"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrHeader"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["NavDetectionOompaLoompa"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrNavLevel"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrIconCustomTag"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"]], styles: [".title[_ngcontent-%COMP%] {\n    text-align: center;\n    font-weight: bold;\n}\n.center-content[_ngcontent-%COMP%] {\n    display: grid;\n    justify-content: center;\n}\n.image[_ngcontent-%COMP%] {\n    width: 80%;\n    height: auto;\n    top: 25%;\n    position: relative;\n    align-self: center;\n}\n.body-container[_ngcontent-%COMP%] {\n    background: white;\n    background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osUUFBUTtJQUNSLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQix1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY2VudGVyLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaW1hZ2Uge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHRvcDogMjUlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4uYm9keS1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }]; }, null); })();


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

module.exports = __webpack_require__(/*! /Users/peixe/Desktop/LPSoftware/Pyramid-Game-Angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map