"use strict";
(self["webpackChunkcharon"] = self["webpackChunkcharon"] || []).push([["projects_charon_src_app_technical_technical_module_ts"],{

/***/ 59664:
/*!**********************************************************!*\
  !*** ./projects/charon/src/app/technical/pages/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TECHNICAL_PAGES": () => (/* binding */ TECHNICAL_PAGES),
/* harmony export */   "TechnicalPageComponent": () => (/* reexport safe */ _technical_page__WEBPACK_IMPORTED_MODULE_0__.TechnicalPageComponent)
/* harmony export */ });
/* harmony import */ var _technical_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./technical-page */ 53357);


const TECHNICAL_PAGES = [
    _technical_page__WEBPACK_IMPORTED_MODULE_0__.TechnicalPageComponent,
];


/***/ }),

/***/ 53357:
/*!*************************************************************************!*\
  !*** ./projects/charon/src/app/technical/pages/technical-page/index.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TechnicalPageComponent": () => (/* reexport safe */ _technical_page_component__WEBPACK_IMPORTED_MODULE_0__.TechnicalPageComponent)
/* harmony export */ });
/* harmony import */ var _technical_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./technical-page.component */ 57806);
/* harmony import */ var _technical_page_definitons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./technical-page.definitons */ 8746);




/***/ }),

/***/ 57806:
/*!********************************************************************************************!*\
  !*** ./projects/charon/src/app/technical/pages/technical-page/technical-page.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TechnicalPageComponent": () => (/* binding */ TechnicalPageComponent)
/* harmony export */ });
/* harmony import */ var _shared_utils_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/utils/browser */ 94240);
/* harmony import */ var _shared_svg_icons_logo_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/svg-icons/logo-icon */ 42536);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 45113);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/svg-icon */ 66722);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngneat/transloco */ 47860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 11048);
/* harmony import */ var _shared_components_network_selector_network_selector_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../shared/components/network-selector/network-selector.component */ 91992);








function TechnicalPageComponent_div_0_app_network_selector_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-network-selector", 5);
} }
function TechnicalPageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "svg-icon", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, TechnicalPageComponent_div_0_app_network_selector_3_Template, 1, 0, "app-network-selector", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const translate_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", translate_r1(ctx_r0.i18nPageKey + ".title"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isNetworkSelectorVisible);
} }
class TechnicalPageComponent {
    constructor(activatedRoute, svgIconRegistry) {
        this.activatedRoute = activatedRoute;
        this.isOpenedInPopup = (0,_shared_utils_browser__WEBPACK_IMPORTED_MODULE_0__.isOpenedInPopup)();
        const routeData = this.activatedRoute.snapshot.data;
        this.i18nPageKey = routeData.i18nPageKey;
        this.isNetworkSelectorVisible = routeData.isNetworkSelectorVisible;
        svgIconRegistry.register([
            _shared_svg_icons_logo_icon__WEBPACK_IMPORTED_MODULE_1__.svgLogoIcon,
        ]);
    }
}
TechnicalPageComponent.ɵfac = function TechnicalPageComponent_Factory(t) { return new (t || TechnicalPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_5__.SvgIconRegistry)); };
TechnicalPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TechnicalPageComponent, selectors: [["app-technical-page"]], hostVars: 2, hostBindings: function TechnicalPageComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mod-popup-view", ctx.isOpenedInPopup);
    } }, decls: 1, vars: 1, consts: [["class", "container technical-page__container", 4, "transloco", "translocoRead"], [1, "container", "technical-page__container"], ["key", "logo-icon", "size", "xxl", 1, "technical-page__logo-icon"], [1, "technical-page__title", 3, "innerHTML"], ["class", "technical-page__network-selector", 4, "ngIf"], [1, "technical-page__network-selector"]], template: function TechnicalPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, TechnicalPageComponent_div_0_Template, 4, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("translocoRead", "technical");
    } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_6__.TranslocoDirective, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_5__.SvgIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_components_network_selector_network_selector_component__WEBPACK_IMPORTED_MODULE_2__.NetworkSelectorComponent], styles: ["[_nghost-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  justify-content: center;\n  min-height: 600px;\n  padding: 24px;\n}\n[_nghost-%COMP%]  a {\n  color: var(--color-technical-link);\n}\n.mod-popup-view[_nghost-%COMP%] {\n  max-width: 376px;\n}\n.technical-page__container[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n}\n.technical-page__logo-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.technical-page__title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 500;\n  line-height: 1.5;\n  margin-top: 1rem;\n  text-align: center;\n  white-space: pre-wrap;\n}\n.technical-page__network-selector[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}"], changeDetection: 0 });


/***/ }),

/***/ 8746:
/*!*********************************************************************************************!*\
  !*** ./projects/charon/src/app/technical/pages/technical-page/technical-page.definitons.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 63745:
/*!***********************************************************************!*\
  !*** ./projects/charon/src/app/technical/technical-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TechnicalRoutingModule": () => (/* binding */ TechnicalRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 45113);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages */ 59664);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 89724);




const ROUTES = [
    {
        path: '',
        component: _pages__WEBPACK_IMPORTED_MODULE_0__.TechnicalPageComponent,
    },
];
class TechnicalRoutingModule {
}
TechnicalRoutingModule.ɵfac = function TechnicalRoutingModule_Factory(t) { return new (t || TechnicalRoutingModule)(); };
TechnicalRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TechnicalRoutingModule });
TechnicalRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(ROUTES),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TechnicalRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 75006:
/*!***************************************************************!*\
  !*** ./projects/charon/src/app/technical/technical.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TechnicalModule": () => (/* binding */ TechnicalModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 11048);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngneat/svg-icon */ 66722);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/transloco */ 47860);
/* harmony import */ var _shared_components_network_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/components/network-selector */ 76505);
/* harmony import */ var _technical_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./technical-routing.module */ 63745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _pages_technical_page_technical_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/technical-page/technical-page.component */ 57806);







class TechnicalModule {
}
TechnicalModule.ɵfac = function TechnicalModule_Factory(t) { return new (t || TechnicalModule)(); };
TechnicalModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: TechnicalModule });
TechnicalModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__.TRANSLOCO_SCOPE,
            useValue: 'technical',
        },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _shared_components_network_selector__WEBPACK_IMPORTED_MODULE_0__.NetworkSelectorModule,
            _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_6__.SvgIconsModule,
            _ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__.TranslocoModule,
            _technical_routing_module__WEBPACK_IMPORTED_MODULE_1__.TechnicalRoutingModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TechnicalModule, { declarations: [_pages_technical_page_technical_page_component__WEBPACK_IMPORTED_MODULE_2__.TechnicalPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _shared_components_network_selector__WEBPACK_IMPORTED_MODULE_0__.NetworkSelectorModule,
        _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_6__.SvgIconsModule,
        _ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__.TranslocoModule,
        _technical_routing_module__WEBPACK_IMPORTED_MODULE_1__.TechnicalRoutingModule] }); })();


/***/ })

}]);