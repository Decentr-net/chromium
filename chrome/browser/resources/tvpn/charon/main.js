(self["webpackChunkcharon"] = self["webpackChunkcharon"] || []).push([["main"],{

/***/ 41380:
/*!*************************************************!*\
  !*** ./environments/environment.definitions.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Environment": () => (/* binding */ Environment)
/* harmony export */ });
class Environment {
}


/***/ }),

/***/ 53629:
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    avatars: 'https://public.decentr.xyz/avatars',
    config: 'https://public.decentr.xyz/config.json',
    currencyApi: 'https://api.coingecko.com/api/v3',
    explorer: 'https://explorer.decentr.net',
    ga: 'G-WRD07301LN',
    help: 'dc44855d-b3e4-48b7-9f92-31ed086a56a5',
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4473:
/*!**********************************************!*\
  !*** ./projects/charon/src/app/app-route.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoute": () => (/* binding */ AppRoute)
/* harmony export */ });
var AppRoute;
(function (AppRoute) {
    AppRoute["Hub"] = "hub";
    AppRoute["Login"] = "login";
    AppRoute["Maintenance"] = "maintenance";
    AppRoute["Offline"] = "offline";
    AppRoute["Portal"] = "portal";
    AppRoute["SignUp"] = "sign-up";
    AppRoute["User"] = "user";
    AppRoute["Update"] = "update";
    AppRoute["Welcome"] = "welcome";
})(AppRoute || (AppRoute = {}));


/***/ }),

/***/ 2944:
/*!*******************************************************!*\
  !*** ./projects/charon/src/app/app-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 45113);
/* harmony import */ var _core_guards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/guards */ 61179);
/* harmony import */ var _core_layout_authorized_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/layout/authorized-layout */ 86084);
/* harmony import */ var _core_lock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/lock */ 86126);
/* harmony import */ var _app_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-route */ 4473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 89724);







const ROUTES = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: _app_route__WEBPACK_IMPORTED_MODULE_3__.AppRoute.Portal,
    },
    // {
    //   path: AppRoute.Login,
    //   component: PublicLayoutComponent,
    //   data: {
    //     [PUBLIC_LAYOUT_INCLUDE_LOGO_KEY]: true,
    //   },
    //   loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
    //   canActivate: [
    //     SupportedVersionGuard,
    //   ],
    // },
    // {
    //   path: AppRoute.SignUp,
    //   component: PublicLayoutComponent,
    //   data: {
    //     [PUBLIC_LAYOUT_INCLUDE_LOGO_KEY]: true,
    //   },
    //   loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpModule),
    //   canActivate: [
    //     SupportedVersionGuard,
    //     BrowserTabGuard,
    //   ],
    // },
    // {
    //   path: AppRoute.User,
    //   component: AuthorizedLayoutComponent,
    //   loadChildren: () => import('./user/user.module').then(x => x.UserModule),
    //   canLoad: [
    //     AuthCompletedRegistrationGuard,
    //   ],
    //   canActivate: [
    //     SupportedVersionGuard,
    //     AuthCompletedRegistrationGuard,
    //     LockGuard,
    //     BrowserTabGuard,
    //   ],
    //   canDeactivate: [
    //     LockGuard,
    //   ],
    // },
    {
        path: _app_route__WEBPACK_IMPORTED_MODULE_3__.AppRoute.Portal,
        component: _core_layout_authorized_layout__WEBPACK_IMPORTED_MODULE_1__.AuthorizedLayoutComponent,
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("projects_charon_src_app_portal_portal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./portal/portal.module */ 68410)).then(x => x.PortalModule),
        // canLoad: [
        //   AuthCompletedRegistrationGuard,
        // ],
        // canActivate: [
        //   SupportedVersionGuard,
        //   AuthCompletedRegistrationGuard,
        //   LockGuard,
        // ],
        // canDeactivate: [
        //   LockGuard,
        // ],
    },
    // {
    //   path: AppRoute.Welcome,
    //   component: PublicLayoutComponent,
    //   loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule),
    //   canLoad: [
    //     UnauthGuard,
    //   ],
    //   canActivate: [
    //     SupportedVersionGuard,
    //     BrowserTabGuard,
    //     UnauthGuard,
    //   ],
    // },
    {
        path: _app_route__WEBPACK_IMPORTED_MODULE_3__.AppRoute.Hub,
        component: _core_layout_authorized_layout__WEBPACK_IMPORTED_MODULE_1__.AuthorizedLayoutComponent,
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_charon_src_app_portal_modules_assets_pages_index_ts-shared_components_button-b18e2f"), __webpack_require__.e("common"), __webpack_require__.e("projects_charon_src_app_hub_hub_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./hub/hub.module */ 38024)).then(m => m.HubModule),
        canLoad: [
            _core_guards__WEBPACK_IMPORTED_MODULE_0__.AuthCompletedRegistrationGuard,
        ],
        canActivate: [
            _core_guards__WEBPACK_IMPORTED_MODULE_0__.SupportedVersionGuard,
            _core_guards__WEBPACK_IMPORTED_MODULE_0__.BrowserTabGuard,
            _core_guards__WEBPACK_IMPORTED_MODULE_0__.AuthCompletedRegistrationGuard,
            _core_lock__WEBPACK_IMPORTED_MODULE_2__.LockGuard,
        ],
        canDeactivate: [
            _core_lock__WEBPACK_IMPORTED_MODULE_2__.LockGuard,
        ],
    },
    {
        path: _app_route__WEBPACK_IMPORTED_MODULE_3__.AppRoute.Update,
        loadChildren: () => __webpack_require__.e(/*! import() */ "projects_charon_src_app_technical_technical_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./technical/technical.module */ 75006)).then(m => m.TechnicalModule),
        canActivate: [
            _core_guards__WEBPACK_IMPORTED_MODULE_0__.UpdateGuard,
        ],
        data: {
            i18nPageKey: 'update_page',
        },
    },
    {
        path: _app_route__WEBPACK_IMPORTED_MODULE_3__.AppRoute.Maintenance,
        loadChildren: () => __webpack_require__.e(/*! import() */ "projects_charon_src_app_technical_technical_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./technical/technical.module */ 75006)).then(m => m.TechnicalModule),
        canActivate: [
            _core_guards__WEBPACK_IMPORTED_MODULE_0__.MaintenanceGuard,
        ],
        data: {
            i18nPageKey: 'maintenance_page',
            isNetworkSelectorVisible: true,
        },
    },
    {
        path: _app_route__WEBPACK_IMPORTED_MODULE_3__.AppRoute.Offline,
        loadChildren: () => __webpack_require__.e(/*! import() */ "projects_charon_src_app_technical_technical_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./technical/technical.module */ 75006)).then(m => m.TechnicalModule),
        canActivate: [
            _core_guards__WEBPACK_IMPORTED_MODULE_0__.OfflineGuard,
        ],
        data: {
            i18nPageKey: 'offline_page',
        },
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(ROUTES, { useHash: true, relativeLinkResolution: 'legacy' }),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 19984:
/*!**************************************************!*\
  !*** ./projects/charon/src/app/app.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _shared_svg_icons_logo_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/svg-icons/logo-icon */ 42536);
/* harmony import */ var _shared_utils_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/utils/browser */ 94240);
/* harmony import */ var _shared_utils_version__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/utils/version */ 19266);
/* harmony import */ var _app_definitions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.definitions */ 62797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services */ 88718);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngneat/svg-icon */ 66722);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 14800);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngneat/transloco */ 47860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 11048);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 45113);











function AppComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "svg-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const translate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", translate_r1("message"), " ");
} }
function AppComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AppComponent_ng_container_0_div_1_Template, 4, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.isInitLoading);
} }
class AppComponent {
    constructor(helpService, svgIconRegistry, titleService) {
        this.appVersion = _shared_utils_version__WEBPACK_IMPORTED_MODULE_2__.APP_VERSION;
        this.isOpenedInPopup = (0,_shared_utils_browser__WEBPACK_IMPORTED_MODULE_1__.isOpenedInPopup)();
        this.isOpenedInTab = (0,_shared_utils_browser__WEBPACK_IMPORTED_MODULE_1__.isOpenedInTab)();
        this.isInitLoading = true;
        helpService.initialize();
        svgIconRegistry.register([
            _shared_svg_icons_logo_icon__WEBPACK_IMPORTED_MODULE_0__.svgLogoIcon,
        ]);
        titleService.setTitle(_app_definitions__WEBPACK_IMPORTED_MODULE_3__.APP_TITLE);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_4__.HelpService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_6__.SvgIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.Title)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostVars: 5, hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("version", ctx.appVersion);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("mod-popup-view", ctx.isOpenedInPopup)("mod-tab-view", ctx.isOpenedInTab);
    } }, decls: 2, vars: 1, consts: [[4, "transloco", "translocoRead"], [3, "activate"], ["class", "app-init-loading", 4, "ngIf"], [1, "app-init-loading"], ["key", "logo-icon", "size", "xxl", 1, "app-init-loading__icon"], [1, "app-init-loading__message"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AppComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "router-outlet", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("activate", function AppComponent_Template_router_outlet_activate_1_listener() { return ctx.isInitLoading = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("translocoRead", "loading");
    } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_8__.TranslocoDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_6__.SvgIconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterOutlet], styles: ["body[_ngcontent-%COMP%]   .typeface-caption[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 16px;\n}\n\nbody[_ngcontent-%COMP%]   .typeface-paragraph[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\nbody[_ngcontent-%COMP%]   .typeface-subheader[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 36px;\n}\n\nbody[_ngcontent-%COMP%]   .typeface-header-4[_ngcontent-%COMP%] {\n  font-size: 36px;\n  line-height: 54px;\n}\n\nbody[_ngcontent-%COMP%]   .typeface-header-3[_ngcontent-%COMP%] {\n  font-size: 54px;\n  line-height: 68px;\n}\n\nbody[_ngcontent-%COMP%]   .typeface-header-2[_ngcontent-%COMP%] {\n  font-size: 80px;\n  line-height: 100px;\n}\n\nbody[_ngcontent-%COMP%]   .typeface-header-1[_ngcontent-%COMP%] {\n  font-size: 120px;\n  line-height: 140px;\n}\n\n[_nghost-%COMP%] {\n  background-color: var(--color-main-background);\n  color: var(--color-main-text);\n  display: block;\n  min-width: max-content;\n}\n\n.mod-popup-view[_nghost-%COMP%]   .app-init-loading[_ngcontent-%COMP%] {\n  min-height: 594px;\n}\n\n[_nghost-%COMP%]   .app-init-loading[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100vh;\n}\n\n[_nghost-%COMP%]   .app-init-loading__icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  margin-bottom: 0.5rem;\n}\n\n[_nghost-%COMP%]   .app-init-loading__message[_ngcontent-%COMP%] {\n  font-size: 16px;\n}"], changeDetection: 0 });


/***/ }),

/***/ 62797:
/*!****************************************************!*\
  !*** ./projects/charon/src/app/app.definitions.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APP_TITLE": () => (/* binding */ APP_TITLE)
/* harmony export */ });
const APP_TITLE = 'Charon';


/***/ }),

/***/ 52074:
/*!***********************************************!*\
  !*** ./projects/charon/src/app/app.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 14800);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ 32953);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 19725);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngneat/svg-icon */ 66722);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngneat/transloco */ 47860);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 19984);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 2944);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core */ 53043);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 89724);









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.BrowserAnimationsModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _core__WEBPACK_IMPORTED_MODULE_2__.CoreModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
            _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_7__.SvgIconsModule,
            _ngneat_transloco__WEBPACK_IMPORTED_MODULE_8__.TranslocoModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.BrowserAnimationsModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _core__WEBPACK_IMPORTED_MODULE_2__.CoreModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
        _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_7__.SvgIconsModule,
        _ngneat_transloco__WEBPACK_IMPORTED_MODULE_8__.TranslocoModule] }); })();


/***/ }),

/***/ 9102:
/*!**********************************************************!*\
  !*** ./projects/charon/src/app/core/auth/auth.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ 71453);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 89724);


class AuthModule {
    static forRoot() {
        return {
            ngModule: AuthModule,
            providers: [
                _services__WEBPACK_IMPORTED_MODULE_0__.AuthService,
            ],
        };
    }
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});


/***/ }),

/***/ 51519:
/*!****************************************************!*\
  !*** ./projects/charon/src/app/core/auth/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* reexport safe */ _auth_module__WEBPACK_IMPORTED_MODULE_0__.AuthModule),
/* harmony export */   "AuthService": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_1__.AuthService)
/* harmony export */ });
/* harmony import */ var _auth_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.module */ 9102);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ 71453);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models */ 15312);





/***/ }),

/***/ 56614:
/*!***************************************************************!*\
  !*** ./projects/charon/src/app/core/auth/models/auth-user.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 15312:
/*!***********************************************************!*\
  !*** ./projects/charon/src/app/core/auth/models/index.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-user */ 56614);



/***/ }),

/***/ 34384:
/*!********************************************************************!*\
  !*** ./projects/charon/src/app/core/auth/services/auth.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 54121);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 57445);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 33072);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 11588);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 42147);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 65619);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 74970);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 79676);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/until-destroy */ 78177);
/* harmony import */ var _shared_services_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/auth */ 7439);
/* harmony import */ var _shared_utils_crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/utils/crypto */ 80323);
/* harmony import */ var _shared_utils_uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/utils/uuid */ 30847);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 45113);
var AuthService_1;









let AuthService = AuthService_1 = class AuthService {
    constructor(router) {
        this.router = router;
        this.vpnUser = {
            encryptedSeed: 'U2FsdGVkX1/3FaIhkOoawKqraqX1LLK7HLvnntVnMOPJ+O7zbW41jEIEXUpeHSlDKYFzb9v3fXMgtXdskX/UPJroY7K+zOGKtKV1K3eQpCmGICQtuhGHk6UJcxdVBijDe6F81UuTNa+2XUed2dD8PDTcEbELeDumkEbNPEevHrjO0Cm4lARuFr1B/BXDPADtYzhzvBodK38V7eLoU6inXccnC2MJCEk0jaRJ3PSiMIM=',
            id: 'bd991320-4cc7-4b02-a5f3-b2c2d72b8724',
            passwordHash: '76f4bb102398930072f940a9cd6604127daac808dd21a323742806eff9f7a4a9',
            wallet: {
                address: 'decentr12ypr8cv26jcamtuppskaq6ltlkhr3mljpfxq7a',
                privateKey: 'be6a4f9f59ac49414f96524fa539dd38324bbaf010c79b3492869a8932063112',
                publicKey: '03bd208d5c070ac4a187bd7090716cde7b0f82501ae5ea76bd5fd9855942f62ea0',
                validatorAddress: 'decentrvaloper12ypr8cv26jcamtuppskaq6ltlkhr3mlj7xdvr2',
            },
        };
        this.activeUser$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(this.vpnUser);
        this.authStorage = new _shared_services_auth__WEBPACK_IMPORTED_MODULE_0__.AuthBrowserStorageService();
    }
    get isLoggedIn() {
        return !!this.getActiveUserInstant();
    }
    static encryptPassword(password) {
        return (0,_shared_utils_crypto__WEBPACK_IMPORTED_MODULE_1__.sha256)(password);
    }
    init() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.authStorage.getActiveUser().pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.untilDestroyed)(this)).subscribe(this.activeUser$);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(this.activeUser$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.skip)(1))).then();
        });
    }
    getActiveUser() {
        return this.activeUser$.asObservable();
    }
    getActiveUserInstant() {
        return this.activeUser$.value;
    }
    getActiveUserAddress() {
        return this.getActiveUser().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)((user) => { var _a; return (_a = user === null || user === void 0 ? void 0 : user.wallet) === null || _a === void 0 ? void 0 : _a.address; }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)());
    }
    createUser(user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const id = (0,_shared_utils_uuid__WEBPACK_IMPORTED_MODULE_2__.uuid)();
            const passwordHash = yield AuthService_1.encryptPassword(user.password);
            yield this.authStorage.createUser({
                id,
                passwordHash,
                primaryEmail: user.primaryEmail,
                encryptedSeed: (0,_shared_utils_crypto__WEBPACK_IMPORTED_MODULE_1__.aesEncrypt)(user.seed, user.password),
                wallet: user.wallet,
            });
            yield this.updateUser(id, Object.assign(Object.assign({}, user), { oldPassword: user.password }));
            return id;
        });
    }
    changeUser(userId) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.defer)(() => this.authStorage.setActiveUserId(userId)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mergeMap)(() => this.activeUser$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.filter)((activeUser) => (activeUser === null || activeUser === void 0 ? void 0 : activeUser.id) === userId), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(() => void 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.first)());
    }
    removeUser(userId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.isLoggedIn && userId === this.getActiveUserInstant().id) {
                yield this.logout();
            }
            yield this.authStorage.removeUser(userId);
        });
    }
    logout() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(this.changeUser(undefined))
            .then(() => this.router.navigate(['/']))
            .then();
    }
    validateCurrentUserPassword(password) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const passwordHash = yield AuthService_1.encryptPassword(password);
            return passwordHash === this.getActiveUserInstant().passwordHash;
        });
    }
    updateUser(userId, update) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const passwordHash = update.password
                ? yield AuthService_1.encryptPassword(update.password)
                : undefined;
            const user = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(this.authStorage.getUser(userId));
            const shouldUpdateEncryptedSeed = user.encryptedSeed && update.password;
            if (shouldUpdateEncryptedSeed && !update.oldPassword) {
                throw new Error('User update: provide old password to re-encrypt seed phrase!');
            }
            const newEncryptedSeed = shouldUpdateEncryptedSeed
                ? (0,_shared_utils_crypto__WEBPACK_IMPORTED_MODULE_1__.aesEncrypt)((0,_shared_utils_crypto__WEBPACK_IMPORTED_MODULE_1__.aesDecrypt)(user.encryptedSeed, update.oldPassword), update.password)
                : undefined;
            return this.authStorage.updateUser(userId, Object.assign({ encryptedSeed: newEncryptedSeed || user.encryptedSeed }, passwordHash ? { passwordHash } : {}));
        });
    }
    restoreSeedPhrase(password) {
        const encryptedSeed = this.getActiveUserInstant().encryptedSeed;
        return (0,_shared_utils_crypto__WEBPACK_IMPORTED_MODULE_1__.aesDecrypt)(encryptedSeed, password);
    }
};
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });
AuthService = AuthService_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.UntilDestroy)()
], AuthService);



/***/ }),

/***/ 71453:
/*!*************************************************************!*\
  !*** ./projects/charon/src/app/core/auth/services/index.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* reexport safe */ _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)
/* harmony export */ });
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 34384);



/***/ }),

/***/ 88325:
/*!*****************************************************!*\
  !*** ./projects/charon/src/app/core/core.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule),
/* harmony export */   "initAuthFactory": () => (/* binding */ initAuthFactory),
/* harmony export */   "initNetworkFactory": () => (/* binding */ initNetworkFactory),
/* harmony export */   "isMaintenanceFactory": () => (/* binding */ isMaintenanceFactory)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/common */ 11048);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/cdk/overlay */ 9160);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! rxjs */ 57445);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ngx-toastr */ 92870);
/* harmony import */ var _environments_environment_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @environments/environment.definitions */ 41380);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @environments/environment */ 53629);
/* harmony import */ var _shared_analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/analytics */ 47471);
/* harmony import */ var _shared_components_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/components/menu */ 91009);
/* harmony import */ var _shared_components_network_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/components/network-selector */ 76505);
/* harmony import */ var _shared_components_slot__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/components/slot */ 83836);
/* harmony import */ var _shared_services_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/services/auth */ 7439);
/* harmony import */ var _shared_services_network_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/services/network-storage */ 98420);
/* harmony import */ var _shared_services_notification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/services/notification */ 86333);
/* harmony import */ var _shared_services_pdv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/services/pdv */ 65466);
/* harmony import */ var _shared_services_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/services/settings */ 31922);
/* harmony import */ var _scripts_background_config_sources_config_port_source__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @scripts/background/config/sources/config-port-source */ 34857);
/* harmony import */ var _core_notifications__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @core/notifications */ 21796);
/* harmony import */ var _app_route__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../app-route */ 4473);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth */ 51519);
/* harmony import */ var _layout_authorized_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layout/authorized-layout */ 86084);
/* harmony import */ var _lock__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lock */ 86126);
/* harmony import */ var _shared_services_configuration__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @shared/services/configuration */ 1683);
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./guards */ 61179);
/* harmony import */ var _interceptors__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./interceptors */ 9171);
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./navigation */ 12089);
/* harmony import */ var _shared_permissions__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @shared/permissions */ 6032);
/* harmony import */ var _layout_public_layout__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./layout/public-layout */ 97075);
/* harmony import */ var _svg_icons__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./svg-icons */ 47738);
/* harmony import */ var _transloco__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./transloco */ 40371);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services */ 88718);
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./permissions */ 57637);
/* harmony import */ var _shared_components_password__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @shared/components/password */ 35197);
/* harmony import */ var _shared_components_theme__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @shared/components/theme */ 36020);
/* harmony import */ var _shared_services_wireguard__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @shared/services/wireguard */ 67598);
/* harmony import */ var _shared_services_pdv_surf_storage_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @shared/services/pdv/surf-storage.service */ 85513);
/* harmony import */ var _shared_analytics_analytics_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../../../shared/analytics/analytics.module */ 50771);
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./auth/auth.module */ 9102);
/* harmony import */ var _lock_lock_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./lock/lock.module */ 20412);
/* harmony import */ var _shared_components_menu_menu_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../../../shared/components/menu/menu.module */ 2262);
/* harmony import */ var _shared_services_notification_notifications_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../../../shared/services/notification/notifications.module */ 17596);
/* harmony import */ var _shared_components_password_password_module__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../../../shared/components/password/password.module */ 53733);
/* harmony import */ var _shared_permissions_permissions_module__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../../../../shared/permissions/permissions.module */ 48679);
/* harmony import */ var _shared_services_settings_settings_module__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../../../../shared/services/settings/settings.module */ 74393);
/* harmony import */ var _shared_components_slot_slot_module__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../../../../shared/components/slot/slot.module */ 50621);
/* harmony import */ var _shared_components_theme_theme_module__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../../../../shared/components/theme/theme.module */ 70540);
















































function initAuthFactory(authService) {
    return () => authService.init();
}
function isMaintenanceFactory(configService, navigationService) {
    return () => {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_41__.firstValueFrom)(configService.getMaintenanceStatus()).then((isMaintenance) => {
            if (isMaintenance) {
                throw new Error();
            }
        }).catch(() => {
            navigationService.redirectToMaintenancePage();
        });
    };
}
function initNetworkFactory(networkService) {
    return () => networkService.init();
}
class CoreModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule has already been loaded. Import CoreModule in the AppModule only.');
        }
    }
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_42__["ɵɵinject"](CoreModule, 12)); };
CoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_42__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_42__["ɵɵdefineInjector"]({ providers: [
        _guards__WEBPACK_IMPORTED_MODULE_18__.CORE_GUARDS,
        _services__WEBPACK_IMPORTED_MODULE_25__.CORE_SERVICES,
        _interceptors__WEBPACK_IMPORTED_MODULE_19__.INTERCEPTORS_PROVIDERS,
        _angular_common__WEBPACK_IMPORTED_MODULE_43__.DecimalPipe,
        _shared_services_wireguard__WEBPACK_IMPORTED_MODULE_29__.WireguardService,
        {
            provide: _shared_services_auth__WEBPACK_IMPORTED_MODULE_6__.AuthBrowserStorageService,
            useClass: _shared_services_auth__WEBPACK_IMPORTED_MODULE_6__.AuthBrowserStorageService,
        },
        {
            provide: _shared_services_network_storage__WEBPACK_IMPORTED_MODULE_7__.NetworkBrowserStorageService,
            useClass: _shared_services_network_storage__WEBPACK_IMPORTED_MODULE_7__.NetworkBrowserStorageService,
        },
        {
            provide: _shared_services_pdv__WEBPACK_IMPORTED_MODULE_9__.PDVStorageService,
            useClass: _shared_services_pdv__WEBPACK_IMPORTED_MODULE_9__.PDVStorageService,
        },
        {
            provide: _shared_services_pdv_surf_storage_service__WEBPACK_IMPORTED_MODULE_30__.SurfStorageService,
            useClass: _shared_services_pdv_surf_storage_service__WEBPACK_IMPORTED_MODULE_30__.SurfStorageService,
        },
        {
            provide: _shared_components_network_selector__WEBPACK_IMPORTED_MODULE_4__.NetworkSelectorService,
            useExisting: _services__WEBPACK_IMPORTED_MODULE_25__.NetworkSelectorService,
        },
        {
            provide: _shared_services_configuration__WEBPACK_IMPORTED_MODULE_17__.ConfigSource,
            useClass: _scripts_background_config_sources_config_port_source__WEBPACK_IMPORTED_MODULE_11__.ConfigPortSource,
        },
        {
            provide: _environments_environment_definitions__WEBPACK_IMPORTED_MODULE_0__.Environment,
            useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment,
        },
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_42__.APP_INITIALIZER,
            useFactory: isMaintenanceFactory,
            deps: [_shared_services_configuration__WEBPACK_IMPORTED_MODULE_17__.ConfigService, _navigation__WEBPACK_IMPORTED_MODULE_20__.NavigationService],
            multi: true,
        },
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_42__.APP_INITIALIZER,
            useFactory: initAuthFactory,
            deps: [_auth__WEBPACK_IMPORTED_MODULE_14__.AuthService],
            multi: true,
        },
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_42__.APP_INITIALIZER,
            useFactory: initNetworkFactory,
            deps: [_services__WEBPACK_IMPORTED_MODULE_25__.NetworkService],
            multi: true,
        },
    ], imports: [[
            _shared_analytics__WEBPACK_IMPORTED_MODULE_2__.AnalyticsModule.forRoot(),
            _auth__WEBPACK_IMPORTED_MODULE_14__.AuthModule.forRoot(),
            _layout_authorized_layout__WEBPACK_IMPORTED_MODULE_15__.AuthorizedLayoutModule,
            _shared_services_configuration__WEBPACK_IMPORTED_MODULE_17__.ConfigurationModule,
            _lock__WEBPACK_IMPORTED_MODULE_16__.LockModule.forRoot({
                redirectUrl: `/${_app_route__WEBPACK_IMPORTED_MODULE_13__.AppRoute.Login}`,
            }),
            _shared_components_menu__WEBPACK_IMPORTED_MODULE_3__.MenuModule.forRoot({
                service: _services__WEBPACK_IMPORTED_MODULE_25__.MenuService,
            }),
            _navigation__WEBPACK_IMPORTED_MODULE_20__.NavigationModule,
            _shared_components_network_selector__WEBPACK_IMPORTED_MODULE_4__.NetworkSelectorModule,
            _shared_services_notification__WEBPACK_IMPORTED_MODULE_8__.NotificationsModule.forRoot({
                errorProcessors: _core_notifications__WEBPACK_IMPORTED_MODULE_12__.ERROR_PROCESSORS,
                fallbackErrorProcessor: _core_notifications__WEBPACK_IMPORTED_MODULE_12__.FallbackErrorProcessor,
            }),
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_44__.OverlayModule,
            _shared_components_password__WEBPACK_IMPORTED_MODULE_27__.PasswordModule.forRoot({
                validation: {
                    minlength: 8,
                    digit: true,
                    lowerCase: true,
                    specialCharacter: true,
                    upperCase: true,
                },
            }),
            _shared_permissions__WEBPACK_IMPORTED_MODULE_21__.PermissionsModule.forRoot(_permissions__WEBPACK_IMPORTED_MODULE_26__.PermissionsService),
            _layout_public_layout__WEBPACK_IMPORTED_MODULE_22__.PublicLayoutModule,
            _shared_services_settings__WEBPACK_IMPORTED_MODULE_10__.SettingsModule.forRoot(),
            _shared_components_slot__WEBPACK_IMPORTED_MODULE_5__.SlotModule.forRoot(),
            _svg_icons__WEBPACK_IMPORTED_MODULE_23__.SvgIconRootModule,
            _shared_components_theme__WEBPACK_IMPORTED_MODULE_28__.ThemeModule.forRoot(),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_45__.ToastrModule.forRoot({
                closeButton: true,
                positionClass: 'toast-top-center',
                timeOut: 4000,
            }),
            _transloco__WEBPACK_IMPORTED_MODULE_24__.TranslocoRootModule,
            // NgxGoogleAnalyticsModule.forRoot('G-WRD07301LN'),
            // NgxGoogleAnalyticsRouterModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_42__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_shared_analytics_analytics_module__WEBPACK_IMPORTED_MODULE_31__.AnalyticsModule, _auth_auth_module__WEBPACK_IMPORTED_MODULE_32__.AuthModule, _layout_authorized_layout__WEBPACK_IMPORTED_MODULE_15__.AuthorizedLayoutModule,
        _shared_services_configuration__WEBPACK_IMPORTED_MODULE_17__.ConfigurationModule, _lock_lock_module__WEBPACK_IMPORTED_MODULE_33__.LockModule, _shared_components_menu_menu_module__WEBPACK_IMPORTED_MODULE_34__.MenuModule, _navigation__WEBPACK_IMPORTED_MODULE_20__.NavigationModule,
        _shared_components_network_selector__WEBPACK_IMPORTED_MODULE_4__.NetworkSelectorModule, _shared_services_notification_notifications_module__WEBPACK_IMPORTED_MODULE_35__.NotificationsModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_44__.OverlayModule, _shared_components_password_password_module__WEBPACK_IMPORTED_MODULE_36__.PasswordModule, _shared_permissions_permissions_module__WEBPACK_IMPORTED_MODULE_37__.PermissionsModule, _layout_public_layout__WEBPACK_IMPORTED_MODULE_22__.PublicLayoutModule, _shared_services_settings_settings_module__WEBPACK_IMPORTED_MODULE_38__.SettingsModule, _shared_components_slot_slot_module__WEBPACK_IMPORTED_MODULE_39__.SlotModule, _svg_icons__WEBPACK_IMPORTED_MODULE_23__.SvgIconRootModule, _shared_components_theme_theme_module__WEBPACK_IMPORTED_MODULE_40__.ThemeModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_45__.ToastrModule, _transloco__WEBPACK_IMPORTED_MODULE_24__.TranslocoRootModule] }); })();


/***/ }),

/***/ 54155:
/*!***************************************************************************************!*\
  !*** ./projects/charon/src/app/core/guards/auth/auth-completed-registration.guard.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthCompletedRegistrationGuard": () => (/* binding */ AuthCompletedRegistrationGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 57445);
/* harmony import */ var _app_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app-route */ 4473);
/* harmony import */ var _shared_services_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/configuration */ 1683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _core_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/auth */ 51519);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services */ 88718);
/* harmony import */ var _shared_services_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/services/settings */ 31922);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 45113);









class AuthCompletedRegistrationGuard {
    constructor(authService, networkService, userService, settingsService, router) {
        this.authService = authService;
        this.networkService = networkService;
        this.userService = userService;
        this.settingsService = settingsService;
        this.router = router;
    }
    static isProfileFilledIn(authService, userService) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const isUserCreated = authService.isLoggedIn;
            if (!isUserCreated) {
                return false;
            }
            const wallet = authService.getActiveUserInstant().wallet;
            const profile = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(userService.getProfile(wallet.address, wallet.privateKey));
            return !!((_a = profile === null || profile === void 0 ? void 0 : profile.emails) === null || _a === void 0 ? void 0 : _a.length);
        });
    }
    static isPDVCollectionConfirmed(authService, settingsService) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const isUserCreated = authService.isLoggedIn;
            if (!isUserCreated) {
                return false;
            }
            const walletAddress = authService.getActiveUserInstant().wallet.address;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(settingsService.getUserSettingsService(walletAddress)
                .pdv
                .getCollectionConfirmed());
        });
    }
    static isAuthFlowCompleted(authService, networkService, userService, settingsService) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const isUserCreated = authService.isLoggedIn;
            if (!isUserCreated) {
                return false;
            }
            const isTestnetNetwork = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(networkService.getActiveNetworkId())
                .then((networkId) => networkId === _shared_services_configuration__WEBPACK_IMPORTED_MODULE_1__.NetworkId.Testnet);
            if (isTestnetNetwork) {
                yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(userService.createTestnetAccount(authService.getActiveUserInstant().wallet.address));
            }
            return Promise.all([
                AuthCompletedRegistrationGuard.isProfileFilledIn(authService, userService),
                AuthCompletedRegistrationGuard.isPDVCollectionConfirmed(authService, settingsService),
            ]).then((conditions) => conditions.every(Boolean));
        });
    }
    canActivate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.authService.isLoggedIn) {
                return this.router.createUrlTree(['/', _app_route__WEBPACK_IMPORTED_MODULE_0__.AppRoute.Welcome]);
            }
            const isAuthFlowCompleted = yield AuthCompletedRegistrationGuard.isAuthFlowCompleted(this.authService, this.networkService, this.userService, this.settingsService);
            return isAuthFlowCompleted || this.router.createUrlTree(['/', _app_route__WEBPACK_IMPORTED_MODULE_0__.AppRoute.SignUp]);
        });
    }
    canActivateChild() {
        return this.canActivate();
    }
    canLoad() {
        return this.canActivate();
    }
}
AuthCompletedRegistrationGuard.ɵfac = function AuthCompletedRegistrationGuard_Factory(t) { return new (t || AuthCompletedRegistrationGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_core_auth__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_3__.NetworkService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_3__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_shared_services_settings__WEBPACK_IMPORTED_MODULE_4__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router)); };
AuthCompletedRegistrationGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: AuthCompletedRegistrationGuard, factory: AuthCompletedRegistrationGuard.ɵfac });


/***/ }),

/***/ 61319:
/*!***********************************************************!*\
  !*** ./projects/charon/src/app/core/guards/auth/index.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AUTH_GUARDS": () => (/* binding */ AUTH_GUARDS),
/* harmony export */   "AuthCompletedRegistrationGuard": () => (/* reexport safe */ _auth_completed_registration_guard__WEBPACK_IMPORTED_MODULE_0__.AuthCompletedRegistrationGuard),
/* harmony export */   "UnauthGuard": () => (/* reexport safe */ _unauth_guard__WEBPACK_IMPORTED_MODULE_1__.UnauthGuard)
/* harmony export */ });
/* harmony import */ var _auth_completed_registration_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-completed-registration.guard */ 54155);
/* harmony import */ var _unauth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unauth.guard */ 71491);




const AUTH_GUARDS = [
    _auth_completed_registration_guard__WEBPACK_IMPORTED_MODULE_0__.AuthCompletedRegistrationGuard,
    _unauth_guard__WEBPACK_IMPORTED_MODULE_1__.UnauthGuard,
];


/***/ }),

/***/ 71491:
/*!******************************************************************!*\
  !*** ./projects/charon/src/app/core/guards/auth/unauth.guard.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnauthGuard": () => (/* binding */ UnauthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auth */ 51519);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 45113);



class UnauthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (!this.authService.isLoggedIn) {
            return true;
        }
        return this.router.createUrlTree(['/']);
    }
    canActivateChild() {
        return this.canActivate();
    }
    canLoad() {
        return this.canActivate();
    }
}
UnauthGuard.ɵfac = function UnauthGuard_Factory(t) { return new (t || UnauthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
UnauthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UnauthGuard, factory: UnauthGuard.ɵfac });


/***/ }),

/***/ 6890:
/*!******************************************************************!*\
  !*** ./projects/charon/src/app/core/guards/browser-tab.guard.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserTabGuard": () => (/* binding */ BrowserTabGuard)
/* harmony export */ });
/* harmony import */ var _shared_utils_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/utils/browser */ 94240);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _core_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/navigation */ 12089);



class BrowserTabGuard {
    constructor(navigationService) {
        this.navigationService = navigationService;
    }
    canActivate(route, state) {
        if ((0,_shared_utils_browser__WEBPACK_IMPORTED_MODULE_0__.isOpenedInTab)()) {
            return true;
        }
        this.navigationService.openInNewTab(state.url);
        window.close();
        return false;
    }
    canActivateChild(childRoute, state) {
        return this.canActivate(childRoute, state);
    }
}
BrowserTabGuard.ɵfac = function BrowserTabGuard_Factory(t) { return new (t || BrowserTabGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_navigation__WEBPACK_IMPORTED_MODULE_1__.NavigationService)); };
BrowserTabGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: BrowserTabGuard, factory: BrowserTabGuard.ɵfac });


/***/ }),

/***/ 61179:
/*!******************************************************!*\
  !*** ./projects/charon/src/app/core/guards/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthCompletedRegistrationGuard": () => (/* reexport safe */ _auth__WEBPACK_IMPORTED_MODULE_0__.AuthCompletedRegistrationGuard),
/* harmony export */   "BrowserTabGuard": () => (/* reexport safe */ _browser_tab_guard__WEBPACK_IMPORTED_MODULE_1__.BrowserTabGuard),
/* harmony export */   "CORE_GUARDS": () => (/* binding */ CORE_GUARDS),
/* harmony export */   "MainnetGuard": () => (/* reexport safe */ _mainnet_guard__WEBPACK_IMPORTED_MODULE_2__.MainnetGuard),
/* harmony export */   "MaintenanceGuard": () => (/* reexport safe */ _maintenance_guard__WEBPACK_IMPORTED_MODULE_3__.MaintenanceGuard),
/* harmony export */   "OfflineGuard": () => (/* reexport safe */ _offline_guard__WEBPACK_IMPORTED_MODULE_4__.OfflineGuard),
/* harmony export */   "SupportedVersionGuard": () => (/* reexport safe */ _supported_version_guard__WEBPACK_IMPORTED_MODULE_5__.SupportedVersionGuard),
/* harmony export */   "UnauthGuard": () => (/* reexport safe */ _auth__WEBPACK_IMPORTED_MODULE_0__.UnauthGuard),
/* harmony export */   "UpdateGuard": () => (/* reexport safe */ _update_guard__WEBPACK_IMPORTED_MODULE_6__.UpdateGuard)
/* harmony export */ });
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth */ 61319);
/* harmony import */ var _browser_tab_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browser-tab.guard */ 6890);
/* harmony import */ var _mainnet_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainnet.guard */ 28669);
/* harmony import */ var _maintenance_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maintenance.guard */ 13129);
/* harmony import */ var _offline_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./offline.guard */ 8431);
/* harmony import */ var _supported_version_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./supported-version.guard */ 6949);
/* harmony import */ var _update_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update.guard */ 25387);














const CORE_GUARDS = [
    ..._auth__WEBPACK_IMPORTED_MODULE_0__.AUTH_GUARDS,
    _browser_tab_guard__WEBPACK_IMPORTED_MODULE_1__.BrowserTabGuard,
    _maintenance_guard__WEBPACK_IMPORTED_MODULE_3__.MaintenanceGuard,
    _mainnet_guard__WEBPACK_IMPORTED_MODULE_2__.MainnetGuard,
    _offline_guard__WEBPACK_IMPORTED_MODULE_4__.OfflineGuard,
    _supported_version_guard__WEBPACK_IMPORTED_MODULE_5__.SupportedVersionGuard,
    _update_guard__WEBPACK_IMPORTED_MODULE_6__.UpdateGuard,
];


/***/ }),

/***/ 28669:
/*!**************************************************************!*\
  !*** ./projects/charon/src/app/core/guards/mainnet.guard.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainnetGuard": () => (/* binding */ MainnetGuard)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 65598);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var _shared_services_configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/configuration */ 1683);
/* harmony import */ var _shared_utils_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/utils/routing */ 79945);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services */ 88718);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 45113);






class MainnetGuard {
    constructor(networkService, router) {
        this.networkService = networkService;
        this.router = router;
    }
    canActivate(route, routerState) {
        return this.networkService.getActiveNetworkId().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((networkId) => networkId === _shared_services_configuration__WEBPACK_IMPORTED_MODULE_0__.NetworkId.Mainnet
            || this.router.createUrlTree([(0,_shared_utils_routing__WEBPACK_IMPORTED_MODULE_1__.getParentUrlFromSnapshots)(route, routerState)])));
    }
}
MainnetGuard.ɵfac = function MainnetGuard_Factory(t) { return new (t || MainnetGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_2__.NetworkService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
MainnetGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: MainnetGuard, factory: MainnetGuard.ɵfac });


/***/ }),

/***/ 13129:
/*!******************************************************************!*\
  !*** ./projects/charon/src/app/core/guards/maintenance.guard.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaintenanceGuard": () => (/* binding */ MaintenanceGuard)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 33568);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 84945);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _shared_services_configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/configuration */ 1683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 45113);





class MaintenanceGuard {
    constructor(configService, router) {
        this.configService = configService;
        this.router = router;
    }
    canActivate() {
        return this.configService.getMaintenanceStatus().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(canActivate => canActivate || this.router.createUrlTree(['/'])));
    }
}
MaintenanceGuard.ɵfac = function MaintenanceGuard_Factory(t) { return new (t || MaintenanceGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_shared_services_configuration__WEBPACK_IMPORTED_MODULE_0__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
MaintenanceGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: MaintenanceGuard, factory: MaintenanceGuard.ɵfac });


/***/ }),

/***/ 8431:
/*!**************************************************************!*\
  !*** ./projects/charon/src/app/core/guards/offline.guard.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfflineGuard": () => (/* binding */ OfflineGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../navigation */ 12089);


class OfflineGuard {
    constructor(navigationService) {
        this.navigationService = navigationService;
    }
    canActivate() {
        if (navigator.onLine) {
            this.navigationService.back(['/']);
            return false;
        }
        return true;
    }
}
OfflineGuard.ɵfac = function OfflineGuard_Factory(t) { return new (t || OfflineGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_navigation__WEBPACK_IMPORTED_MODULE_0__.NavigationService)); };
OfflineGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OfflineGuard, factory: OfflineGuard.ɵfac });


/***/ }),

/***/ 6949:
/*!************************************************************************!*\
  !*** ./projects/charon/src/app/core/guards/supported-version.guard.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportedVersionGuard": () => (/* binding */ SupportedVersionGuard)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var _shared_utils_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/utils/number */ 55298);
/* harmony import */ var _shared_utils_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/utils/version */ 19266);
/* harmony import */ var _app_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-route */ 4473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _shared_services_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services/configuration */ 1683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 45113);







class SupportedVersionGuard {
    constructor(configService, router) {
        this.configService = configService;
        this.router = router;
    }
    canActivate() {
        return this.configService.getAppMinVersionRequired().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((minVersion) => (0,_shared_utils_number__WEBPACK_IMPORTED_MODULE_0__.compareSemver)(_shared_utils_version__WEBPACK_IMPORTED_MODULE_1__.APP_VERSION, minVersion)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((diff) => diff >= 0 || this.router.createUrlTree(['/', _app_route__WEBPACK_IMPORTED_MODULE_2__.AppRoute.Update])));
    }
    canLoad() {
        return this.canActivate();
    }
}
SupportedVersionGuard.ɵfac = function SupportedVersionGuard_Factory(t) { return new (t || SupportedVersionGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_shared_services_configuration__WEBPACK_IMPORTED_MODULE_3__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
SupportedVersionGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: SupportedVersionGuard, factory: SupportedVersionGuard.ɵfac });


/***/ }),

/***/ 25387:
/*!*************************************************************!*\
  !*** ./projects/charon/src/app/core/guards/update.guard.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateGuard": () => (/* binding */ UpdateGuard)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 45113);
/* harmony import */ var _supported_version_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supported-version.guard */ 6949);




class UpdateGuard {
    constructor(router, supportedVersionGuard) {
        this.router = router;
        this.supportedVersionGuard = supportedVersionGuard;
    }
    canActivate() {
        return this.supportedVersionGuard.canActivate().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((isActualOrUrlTree) => {
            return typeof isActualOrUrlTree === 'object' || this.router.createUrlTree(['/']);
        }));
    }
    canLoad() {
        return this.canActivate();
    }
}
UpdateGuard.ɵfac = function UpdateGuard_Factory(t) { return new (t || UpdateGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_supported_version_guard__WEBPACK_IMPORTED_MODULE_0__.SupportedVersionGuard)); };
UpdateGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UpdateGuard, factory: UpdateGuard.ɵfac });


/***/ }),

/***/ 53043:
/*!***********************************************!*\
  !*** ./projects/charon/src/app/core/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* reexport safe */ _core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule),
/* harmony export */   "initAuthFactory": () => (/* reexport safe */ _core_module__WEBPACK_IMPORTED_MODULE_0__.initAuthFactory),
/* harmony export */   "initNetworkFactory": () => (/* reexport safe */ _core_module__WEBPACK_IMPORTED_MODULE_0__.initNetworkFactory),
/* harmony export */   "isMaintenanceFactory": () => (/* reexport safe */ _core_module__WEBPACK_IMPORTED_MODULE_0__.isMaintenanceFactory)
/* harmony export */ });
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.module */ 88325);



/***/ }),

/***/ 9171:
/*!************************************************************!*\
  !*** ./projects/charon/src/app/core/interceptors/index.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INTERCEPTORS_PROVIDERS": () => (/* binding */ INTERCEPTORS_PROVIDERS),
/* harmony export */   "MaintenanceInterceptor": () => (/* reexport safe */ _maintenance_interceptor__WEBPACK_IMPORTED_MODULE_0__.MaintenanceInterceptor),
/* harmony export */   "OfflineInterceptor": () => (/* reexport safe */ _offline_interceptor__WEBPACK_IMPORTED_MODULE_1__.OfflineInterceptor),
/* harmony export */   "SKIP_MAINTENANCE_INTERCEPTOR_HEADER": () => (/* reexport safe */ _maintenance_interceptor__WEBPACK_IMPORTED_MODULE_0__.SKIP_MAINTENANCE_INTERCEPTOR_HEADER)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 19725);
/* harmony import */ var _maintenance_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maintenance.interceptor */ 87525);
/* harmony import */ var _offline_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offline.interceptor */ 90629);





const INTERCEPTORS_PROVIDERS = [
    {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HTTP_INTERCEPTORS,
        useClass: _offline_interceptor__WEBPACK_IMPORTED_MODULE_1__.OfflineInterceptor,
        multi: true,
    },
    {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HTTP_INTERCEPTORS,
        useClass: _maintenance_interceptor__WEBPACK_IMPORTED_MODULE_0__.MaintenanceInterceptor,
        multi: true,
    },
];


/***/ }),

/***/ 87525:
/*!******************************************************************************!*\
  !*** ./projects/charon/src/app/core/interceptors/maintenance.interceptor.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaintenanceInterceptor": () => (/* binding */ MaintenanceInterceptor),
/* harmony export */   "SKIP_MAINTENANCE_INTERCEPTOR_HEADER": () => (/* binding */ SKIP_MAINTENANCE_INTERCEPTOR_HEADER)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 19725);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 83787);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 33568);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 65619);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _shared_services_configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/configuration */ 1683);
/* harmony import */ var _core_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/navigation */ 12089);






const SKIP_MAINTENANCE_INTERCEPTOR_HEADER = 'skip_maintenance_interceptor';
class MaintenanceInterceptor {
    constructor(configService, navigationService) {
        this.configService = configService;
        this.navigationService = navigationService;
    }
    intercept(req, next) {
        if (req.headers.has(SKIP_MAINTENANCE_INTERCEPTOR_HEADER)) {
            const newRequest = req.clone({ headers: req.headers.delete(SKIP_MAINTENANCE_INTERCEPTOR_HEADER) });
            return next.handle(newRequest);
        }
        return this.configService.getMaintenanceStatus().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => {
            this.navigationService.redirectToMaintenancePage();
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)((isMaintenance) => next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpResponse && isMaintenance) {
                this.navigationService.redirectToMaintenancePage();
            }
            return event;
        }))));
    }
}
MaintenanceInterceptor.ɵfac = function MaintenanceInterceptor_Factory(t) { return new (t || MaintenanceInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_shared_services_configuration__WEBPACK_IMPORTED_MODULE_0__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_core_navigation__WEBPACK_IMPORTED_MODULE_1__.NavigationService)); };
MaintenanceInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: MaintenanceInterceptor, factory: MaintenanceInterceptor.ɵfac });


/***/ }),

/***/ 90629:
/*!**************************************************************************!*\
  !*** ./projects/charon/src/app/core/interceptors/offline.interceptor.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfflineInterceptor": () => (/* binding */ OfflineInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 84945);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 65619);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../navigation */ 12089);




class OfflineInterceptor {
    constructor(navigationService) {
        this.navigationService = navigationService;
    }
    intercept(req, next) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(navigator.onLine).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)((isOnline) => next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((event) => {
            if (!isOnline) {
                this.navigationService.redirectToOfflinePage();
            }
            return event;
        }))));
    }
}
OfflineInterceptor.ɵfac = function OfflineInterceptor_Factory(t) { return new (t || OfflineInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_navigation__WEBPACK_IMPORTED_MODULE_0__.NavigationService)); };
OfflineInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: OfflineInterceptor, factory: OfflineInterceptor.ɵfac });


/***/ }),

/***/ 96759:
/*!******************************************************************************************************************************!*\
  !*** ./projects/charon/src/app/core/layout/authorized-layout/authorized-layout-header/authorized-layout-header.component.ts ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AUTHORIZED_LAYOUT_HEADER_ACTIONS_SLOT": () => (/* binding */ AUTHORIZED_LAYOUT_HEADER_ACTIONS_SLOT),
/* harmony export */   "AUTHORIZED_LAYOUT_HEADER_LOGO_SLOT": () => (/* binding */ AUTHORIZED_LAYOUT_HEADER_LOGO_SLOT),
/* harmony export */   "AUTHORIZED_LAYOUT_HEADER_META_SLOT": () => (/* binding */ AUTHORIZED_LAYOUT_HEADER_META_SLOT),
/* harmony export */   "AuthorizedLayoutHeaderComponent": () => (/* binding */ AuthorizedLayoutHeaderComponent)
/* harmony export */ });
/* harmony import */ var _shared_utils_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/utils/browser */ 94240);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _shared_components_slot_slot_container_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../shared/components/slot/slot-container.directive */ 40673);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 45113);
/* harmony import */ var _shared_components_menu_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../shared/components/menu/menu/menu.component */ 61545);





const _c0 = function () { return ["./"]; };
function AuthorizedLayoutHeaderComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c0))("target", ctx_r0.isOpenedInPopup ? "blank" : "");
} }
function AuthorizedLayoutHeaderComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
} }
function AuthorizedLayoutHeaderComponent_ng_template_6_Template(rf, ctx) { }
const AUTHORIZED_LAYOUT_HEADER_LOGO_SLOT = Symbol('AUTHORIZED_LAYOUT_HEADER_LOGO_SLOT');
const AUTHORIZED_LAYOUT_HEADER_META_SLOT = Symbol('AUTHORIZED_LAYOUT_HEADER_META_SLOT');
const AUTHORIZED_LAYOUT_HEADER_ACTIONS_SLOT = Symbol('AUTHORIZED_LAYOUT_HEADER_ACTIONS_SLOT');
class AuthorizedLayoutHeaderComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.logoSlotName = AUTHORIZED_LAYOUT_HEADER_LOGO_SLOT;
        this.metaSlotName = AUTHORIZED_LAYOUT_HEADER_META_SLOT;
        this.actionsSlotName = AUTHORIZED_LAYOUT_HEADER_ACTIONS_SLOT;
    }
    ngOnInit() {
        this.isOpenedInPopup = !(0,_shared_utils_browser__WEBPACK_IMPORTED_MODULE_0__.isOpenedInTab)();
    }
}
AuthorizedLayoutHeaderComponent.ɵfac = function AuthorizedLayoutHeaderComponent_Factory(t) { return new (t || AuthorizedLayoutHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef)); };
AuthorizedLayoutHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AuthorizedLayoutHeaderComponent, selectors: [["app-authorized-layout-header"]], decls: 8, vars: 4, consts: [[1, "authorized-layout-header__section"], ["class", "authorized-layout-header__logo", 3, "routerLink", "target", 4, "appSlotContainer"], [1, "authorized-layout-header__meta-container"], [4, "appSlotContainer", "appSlotContainerRootElement"], [1, "authorized-layout-header__actions-container"], [3, "appSlotContainer"], [1, "authorized-layout-header__logo", 3, "routerLink", "target"], [1, "authorized-layout-header__logo-icon"]], template: function AuthorizedLayoutHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AuthorizedLayoutHeaderComponent_a_1_Template, 2, 3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AuthorizedLayoutHeaderComponent_ng_container_3_Template, 1, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 0)(5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, AuthorizedLayoutHeaderComponent_ng_template_6_Template, 0, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("appSlotContainer", ctx.logoSlotName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("appSlotContainer", ctx.metaSlotName)("appSlotContainerRootElement", ctx.elementRef.nativeElement);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("appSlotContainer", ctx.actionsSlotName);
    } }, directives: [_shared_components_slot_slot_container_directive__WEBPACK_IMPORTED_MODULE_1__.SlotContainerDirective, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _shared_components_menu_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__.MenuComponent], styles: ["[_nghost-%COMP%] {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  height: 76px;\n}\n.mod-popup-view   [_nghost-%COMP%]   .authorized-layout-header__section[_ngcontent-%COMP%] {\n  column-gap: 16px;\n}\n.authorized-layout-header__section[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  column-gap: 24px;\n}\n.authorized-layout-header__actions-container[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  overflow: hidden;\n}\n.authorized-layout-header__logo[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.authorized-layout-header__logo-icon[_ngcontent-%COMP%] {\n  background-image: var(--logo-dhub);\n  background-repeat: no-repeat;\n  display: inline-flex;\n  height: 40px;\n  width: 147px;\n}\n.authorized-layout-header__meta-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n.authorized-layout-header__meta-container[_ngcontent-%COMP%]:empty {\n  display: none;\n}"], changeDetection: 0 });


/***/ }),

/***/ 23293:
/*!*************************************************************************************************!*\
  !*** ./projects/charon/src/app/core/layout/authorized-layout/authorized-layout-header/index.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AUTHORIZED_LAYOUT_HEADER_ACTIONS_SLOT": () => (/* reexport safe */ _authorized_layout_header_component__WEBPACK_IMPORTED_MODULE_0__.AUTHORIZED_LAYOUT_HEADER_ACTIONS_SLOT),
/* harmony export */   "AUTHORIZED_LAYOUT_HEADER_LOGO_SLOT": () => (/* reexport safe */ _authorized_layout_header_component__WEBPACK_IMPORTED_MODULE_0__.AUTHORIZED_LAYOUT_HEADER_LOGO_SLOT),
/* harmony export */   "AUTHORIZED_LAYOUT_HEADER_META_SLOT": () => (/* reexport safe */ _authorized_layout_header_component__WEBPACK_IMPORTED_MODULE_0__.AUTHORIZED_LAYOUT_HEADER_META_SLOT),
/* harmony export */   "AuthorizedLayoutHeaderComponent": () => (/* reexport safe */ _authorized_layout_header_component__WEBPACK_IMPORTED_MODULE_0__.AuthorizedLayoutHeaderComponent)
/* harmony export */ });
/* harmony import */ var _authorized_layout_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authorized-layout-header.component */ 96759);



/***/ }),

/***/ 82496:
/*!****************************************************************************************************************************************************!*\
  !*** ./projects/charon/src/app/core/layout/authorized-layout/authorized-layout-navigation-link/authorized-layout-navigation-link-def.directive.ts ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorizedLayoutNavigationLinkDefDirective": () => (/* binding */ AuthorizedLayoutNavigationLinkDefDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _authorized_layout_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../authorized-layout-navigation */ 45345);


class AuthorizedLayoutNavigationLinkDefDirective {
    constructor(navigationDef, templateRef) {
        this.navigationDef = navigationDef;
        this.templateRef = templateRef;
        this.dot = false;
        this.colorClass = '';
        this.exact = true;
    }
    ngOnInit() {
        this.navigationDef.registerLinkDef(this);
    }
    ngOnDestroy() {
        this.navigationDef.unregisterLinkDef(this);
    }
}
AuthorizedLayoutNavigationLinkDefDirective.ɵfac = function AuthorizedLayoutNavigationLinkDefDirective_Factory(t) { return new (t || AuthorizedLayoutNavigationLinkDefDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_authorized_layout_navigation__WEBPACK_IMPORTED_MODULE_0__.AuthorizedLayoutNavigationDefDirective), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef)); };
AuthorizedLayoutNavigationLinkDefDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AuthorizedLayoutNavigationLinkDefDirective, selectors: [["", "appAuthorizedLayoutNavigationLinkDef", ""]], inputs: { link: ["appAuthorizedLayoutNavigationLinkDef", "link"], dot: ["appAuthorizedLayoutNavigationLinkDefDot", "dot"], colorClass: ["appAuthorizedLayoutNavigationLinkDefColorClass", "colorClass"], exact: ["appAuthorizedLayoutNavigationLinkDefExact", "exact"] } });


/***/ }),

/***/ 60856:
/*!************************************************************************************************************************************************!*\
  !*** ./projects/charon/src/app/core/layout/authorized-layout/authorized-layout-navigation-link/authorized-layout-navigation-link.component.ts ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorizedLayoutNavigationLinkComponent": () => (/* binding */ AuthorizedLayoutNavigationLinkComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 11048);


const _c0 = ["titleContainer"];
const _c1 = ["app-authorized-layout-navigation-link", ""];
function AuthorizedLayoutNavigationLinkComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 4);
} }
const _c2 = ["*"];
class AuthorizedLayoutNavigationLinkComponent {
    constructor() {
        this.dot = true;
    }
    ngAfterViewInit() {
        this.title = this.titleContainer.nativeElement.innerText;
    }
}
AuthorizedLayoutNavigationLinkComponent.ɵfac = function AuthorizedLayoutNavigationLinkComponent_Factory(t) { return new (t || AuthorizedLayoutNavigationLinkComponent)(); };
AuthorizedLayoutNavigationLinkComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthorizedLayoutNavigationLinkComponent, selectors: [["a", "app-authorized-layout-navigation-link", ""]], viewQuery: function AuthorizedLayoutNavigationLinkComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.titleContainer = _t.first);
    } }, inputs: { dot: "dot" }, attrs: _c1, ngContentSelectors: _c2, decls: 5, vars: 2, consts: [["class", "hub-navigation-link__dot", 4, "ngIf"], [1, "hub-navigation-link__title"], ["titleContainer", ""], [1, "hub-navigation-link__border"], [1, "hub-navigation-link__dot"]], template: function AuthorizedLayoutNavigationLinkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AuthorizedLayoutNavigationLinkComponent_span_0_Template, 1, 0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dot);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-title", ctx.title);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["[_nghost-%COMP%] {\n  align-items: center;\n  display: inline-flex;\n  height: 100%;\n  justify-content: center;\n  position: relative;\n  text-decoration: none;\n  -webkit-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  white-space: nowrap;\n}\n[_nghost-%COMP%]:hover   .hub-navigation-link__title[_ngcontent-%COMP%] {\n  color: var(--color-dhub-header-navigation-link-hover);\n}\n.is-active[_nghost-%COMP%]   .hub-navigation-link__title[_ngcontent-%COMP%] {\n  color: var(--color-dhub-header-navigation-link-active);\n  font-weight: 700;\n}\n.is-active[_nghost-%COMP%]   .hub-navigation-link__dot[_ngcontent-%COMP%] {\n  display: none;\n}\n.is-active[_nghost-%COMP%]   .hub-navigation-link__border[_ngcontent-%COMP%] {\n  display: block;\n}\n.hub-navigation-link__dot[_ngcontent-%COMP%] {\n  background: currentColor;\n  border-radius: 50%;\n  height: 4px;\n  left: -8px;\n  position: absolute;\n  width: 4px;\n}\n.hub-navigation-link__title[_ngcontent-%COMP%] {\n  color: var(--color-dhub-header-navigation-link);\n  font-weight: 500;\n}\n.hub-navigation-link__title[_ngcontent-%COMP%]:after {\n  display: block;\n  content: attr(data-title);\n  font-weight: bold;\n  height: 0;\n  overflow: hidden;\n  visibility: hidden;\n}\n.hub-navigation-link__border[_ngcontent-%COMP%] {\n  background: currentColor;\n  bottom: 0;\n  display: none;\n  height: 4px;\n  left: 0;\n  position: absolute;\n  right: 0;\n}"], changeDetection: 0 });


/***/ }),

/***/ 53938:
/*!**********************************************************************************************************!*\
  !*** ./projects/charon/src/app/core/layout/authorized-layout/authorized-layout-navigation-link/index.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorizedLayoutNavigationLinkComponent": () => (/* reexport safe */ _authorized_layout_navigation_link_component__WEBPACK_IMPORTED_MODULE_0__.AuthorizedLayoutNavigationLinkComponent),
/* harmony export */   "AuthorizedLayoutNavigationLinkDefDirective": () => (/* reexport safe */ _authorized_layout_navigation_link_def_directive__WEBPACK_IMPORTED_MODULE_1__.AuthorizedLayoutNavigationLinkDefDirective)
/* harmony export */ });
/* harmony import */ var _authorized_layout_navigation_link_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authorized-layout-navigation-link.component */ 60856);
/* harmony import */ var _authorized_layout_navigation_link_def_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authorized-layout-navigation-link-def.directive */ 82496);




/***/ }),

/***/ 96605:
/*!******************************************************************************************************************************************!*\
  !*** ./projects/charon/src/app/core/layout/authorized-layout/authorized-layout-navigation/authorized-layout-navigation-def.directive.ts ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorizedLayoutNavigationDefDirective": () => (/* binding */ AuthorizedLayoutNavigationDefDirective)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 54121);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 83151);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _authorized_layout_navigation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authorized-layout-navigation.service */ 95017);




class AuthorizedLayoutNavigationDefDirective {
    constructor(authorizedLayoutService, templateRef, viewContainerRef) {
        this.authorizedLayoutService = authorizedLayoutService;
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.linksDefs = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
    }
    ngOnInit() {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
        this.authorizedLayoutService.registerNavigation(this);
    }
    ngOnDestroy() {
        this.authorizedLayoutService.unregisterNavigation(this);
    }
    getLinksDefs() {
        return this.linksDefs.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.debounceTime)(0));
    }
    registerLinkDef(linkDef) {
        this.unregisterLinkDef(linkDef);
        this.linksDefs.next([...this.linksDefs.value, linkDef]);
    }
    unregisterLinkDef(linkDef) {
        this.linksDefs.next(this.linksDefs.value.filter((item) => item !== linkDef));
    }
}
AuthorizedLayoutNavigationDefDirective.ɵfac = function AuthorizedLayoutNavigationDefDirective_Factory(t) { return new (t || AuthorizedLayoutNavigationDefDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_authorized_layout_navigation_service__WEBPACK_IMPORTED_MODULE_0__.AuthorizedLayoutNavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewContainerRef)); };
AuthorizedLayoutNavigationDefDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: AuthorizedLayoutNavigationDefDirective, selectors: [["", "appAuthorizedLayoutNavigationDef", ""]] });


/***/ }),

/***/ 12819:
/*!**************************************************************************************************************************************!*\
  !*** ./projects/charon/src/app/core/layout/authorized-layout/authorized-layout-navigation/authorized-layout-navigation.component.ts ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorizedLayoutNavigationComponent": () => (/* binding */ AuthorizedLayoutNavigationComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 84945);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 61528);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _authorized_layout_navigation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authorized-layout-navigation.service */ 95017);
/* harmony import */ var _shared_directives_drag_scroll_drag_scroll_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../shared/directives/drag-scroll/drag-scroll.directive */ 3975);
/* harmony import */ var _shared_directives_mouse_wheel_horizontal_scroll_mouse_wheel_horizontal_scroll_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../shared/directives/mouse-wheel-horizontal-scroll/mouse-wheel-horizontal-scroll.directive */ 66989);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 11048);
/* harmony import */ var _authorized_layout_navigation_link_authorized_layout_navigation_link_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authorized-layout-navigation-link/authorized-layout-navigation-link.component */ 60856);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 45113);
/* harmony import */ var _shared_directives_router_link_scroll_anchor_router_link_scroll_anchor_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../shared/directives/router-link-scroll-anchor/router-link-scroll-anchor.directive */ 87175);










function AuthorizedLayoutNavigationComponent_a_1_ng_template_1_Template(rf, ctx) { }
const _c0 = function (a0) { return { exact: a0 }; };
function AuthorizedLayoutNavigationComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AuthorizedLayoutNavigationComponent_a_1_ng_template_1_Template, 0, 0, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const linkDef_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", linkDef_r1.colorClass)("routerLink", linkDef_r1.link)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c0, linkDef_r1.exact))("dot", linkDef_r1.dot);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", linkDef_r1.templateRef);
} }
class AuthorizedLayoutNavigationComponent {
    constructor(authorizedLayoutNavigationService) {
        this.authorizedLayoutNavigationService = authorizedLayoutNavigationService;
    }
    ngOnInit() {
        this.linksDefs$ = this.authorizedLayoutNavigationService.getCurrentNavigation().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((navigation) => (navigation === null || navigation === void 0 ? void 0 : navigation.getLinksDefs()) || (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([])));
    }
}
AuthorizedLayoutNavigationComponent.ɵfac = function AuthorizedLayoutNavigationComponent_Factory(t) { return new (t || AuthorizedLayoutNavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_authorized_layout_navigation_service__WEBPACK_IMPORTED_MODULE_0__.AuthorizedLayoutNavigationService)); };
AuthorizedLayoutNavigationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AuthorizedLayoutNavigationComponent, selectors: [["app-authorized-layout-navigation"]], decls: 3, vars: 3, consts: [["appDragScroll", "", "appMouseWheelHorizontalScroll", "", 1, "authorized-layout-navigation__container"], ["class", "authorized-layout-navigation__link", "app-authorized-layout-navigation-link", "", "routerLinkActive", "is-active", "appRouterLinkScrollAnchor", "", 3, "ngClass", "routerLink", "routerLinkActiveOptions", "dot", 4, "ngFor", "ngForOf"], ["app-authorized-layout-navigation-link", "", "routerLinkActive", "is-active", "appRouterLinkScrollAnchor", "", 1, "authorized-layout-navigation__link", 3, "ngClass", "routerLink", "routerLinkActiveOptions", "dot"], [3, "ngTemplateOutlet"]], template: function AuthorizedLayoutNavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AuthorizedLayoutNavigationComponent_a_1_Template, 2, 7, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, ctx.linksDefs$));
    } }, directives: [_shared_directives_drag_scroll_drag_scroll_directive__WEBPACK_IMPORTED_MODULE_1__.DragScrollDirective, _shared_directives_mouse_wheel_horizontal_scroll_mouse_wheel_horizontal_scroll_directive__WEBPACK_IMPORTED_MODULE_2__.MouseWheelHorizontalScrollDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _authorized_layout_navigation_link_authorized_layout_navigation_link_component__WEBPACK_IMPORTED_MODULE_3__.AuthorizedLayoutNavigationLinkComponent, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkActive, _shared_directives_router_link_scroll_anchor_router_link_scroll_anchor_directive__WEBPACK_IMPORTED_MODULE_4__.RouterLinkScrollAnchorDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  height: 48px;\n}\n\n.authorized-layout-navigation__container[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  height: 100%;\n  overflow-x: auto;\n  scrollbar-width: none;\n  width: 100%;\n}\n\n.authorized-layout-navigation__container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.authorized-layout-navigation__link[_ngcontent-%COMP%]    + .authorized-layout-navigation__link[_ngcontent-%COMP%] {\n  margin-left: 24px;\n}"], changeDetection: 0 });


/***/ }),

/***/ 95017:
/*!************************************************************************************************************************************!*\
  !*** ./projects/charon/src/app/core/layout/authorized-layout/authorized-layout-navigation/authorized-layout-navigation.service.ts ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorizedLayoutNavigationService": () => (/* binding */ AuthorizedLayoutNavigationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 54121);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 89724);



class AuthorizedLayoutNavigationService {
    constructor() {
        this.navigation = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    }
    getCurrentNavigation() {
        return this.navigation.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((navigation) => navigation[navigation.length - 1]));
    }
    registerNavigation(navigation) {
        this.unregisterNavigation(navigation);
        this.navigation.next([...this.navigation.value, navigation]);
    }
    unregisterNavigation(navigation) {
        this.navigation.next(this.navigation.value.filter((item) => item !== navigation));
    }
}
AuthorizedLayoutNavigationService.ɵfac = function AuthorizedLayoutNavigationService_Factory(t) { return new (t || AuthorizedLayoutNavigationService)(); };
AuthorizedLayoutNavigationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthorizedLayoutNavigationService, factory: AuthorizedLayoutNavigationService.ɵfac });


/***/ }),

/***/ 45345:
/*!*****************************************************************************************************!*\
  !*** ./projects/charon/src/app/core/layout/authorized-layout/authorized-layout-navigation/index.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorizedLayoutNavigationComponent": () => (/* reexport safe */ _authorized_layout_navigation_component__WEBPACK_IMPORTED_MODULE_0__.AuthorizedLayoutNavigationComponent),
/* harmony export */   "AuthorizedLayoutNavigationDefDirective": () => (/* reexport safe */ _authorized_layout_navigation_def_directive__WEBPACK_IMPORTED_MODULE_2__.AuthorizedLayoutNavigationDefDirective),
/* harmony export */   "AuthorizedLayoutNavigationService": () => (/* reexport safe */ _authorized_layout_navigation_service__WEBPACK_IMPORTED_MODULE_1__.AuthorizedLayoutNavigationService)
/* harmony export */ });
/* harmony import */ var _authorized_layout_navigation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authorized-layout-navigation.component */ 12819);
/* harmony import */ var _authorized_layout_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authorized-layout-navigation.service */ 95017);
/* harmony import */ var _authorized_layout_navigation_def_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authorized-layout-navigation-def.directive */ 96605);





/***/ }),

/***/ 47884:
/*!**********************************************************************************************!*\
  !*** ./projects/charon/src/app/core/layout/authorized-layout/authorized-layout.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AUTHORIZED_LAYOUT_FOOTER_SLOT": () => (/* binding */ AUTHORIZED_LAYOUT_FOOTER_SLOT),
/* harmony export */   "AuthorizedLayoutComponent": () => (/* binding */ AuthorizedLayoutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngneat/until-destroy */ 78177);
/* harmony import */ var _authorized_layout_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authorized-layout-navigation */ 45345);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 45113);
/* harmony import */ var _shared_components_slot_slot_container_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../shared/components/slot/slot-container.directive */ 40673);
/* harmony import */ var _shared_directives_browser_view_browser_tab_view_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../shared/directives/browser-view/browser-tab-view.directive */ 59896);
/* harmony import */ var _layout_footer_layout_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout-footer/layout-footer.component */ 9181);










const _c0 = ["contentContainer"];
function AuthorizedLayoutComponent_ng_container_3_app_layout_footer_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-layout-footer");
} }
function AuthorizedLayoutComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AuthorizedLayoutComponent_ng_container_3_app_layout_footer_1_Template, 1, 0, "app-layout-footer", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
const AUTHORIZED_LAYOUT_FOOTER_SLOT = Symbol('AUTHORIZED_LAYOUT_FOOTER_SLOT');
let AuthorizedLayoutComponent = class AuthorizedLayoutComponent {
    constructor(authorizedLayoutNavigationService, changeDetectorRef) {
        this.authorizedLayoutNavigationService = authorizedLayoutNavigationService;
        this.changeDetectorRef = changeDetectorRef;
        this.footerSlotName = AUTHORIZED_LAYOUT_FOOTER_SLOT;
    }
    ngOnInit() {
        this.authorizedLayoutNavigationService.getCurrentNavigation().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(Boolean), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__.untilDestroyed)(this)).subscribe((hasNavigation) => {
            this.hasNavigation = hasNavigation;
            this.changeDetectorRef.markForCheck();
        });
    }
    scrollToTop() {
        this.contentContainer.nativeElement.scrollTop = 0;
    }
};
AuthorizedLayoutComponent.ɵfac = function AuthorizedLayoutComponent_Factory(t) { return new (t || AuthorizedLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_authorized_layout_navigation__WEBPACK_IMPORTED_MODULE_0__.AuthorizedLayoutNavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef)); };
AuthorizedLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AuthorizedLayoutComponent, selectors: [["app-authorized-layout"]], viewQuery: function AuthorizedLayoutComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.contentContainer = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([
            _authorized_layout_navigation__WEBPACK_IMPORTED_MODULE_0__.AuthorizedLayoutNavigationService,
        ])], decls: 4, vars: 1, consts: [[1, "authorized-layout__content-container"], ["contentContainer", ""], [4, "appSlotContainer"], [4, "appBrowserTabView"]], template: function AuthorizedLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, AuthorizedLayoutComponent_ng_container_3_Template, 2, 0, "ng-container", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("appSlotContainer", ctx.footerSlotName);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _shared_components_slot_slot_container_directive__WEBPACK_IMPORTED_MODULE_1__.SlotContainerDirective, _shared_directives_browser_view_browser_tab_view_directive__WEBPACK_IMPORTED_MODULE_2__.BrowserTabViewDirective, _layout_footer_layout_footer_component__WEBPACK_IMPORTED_MODULE_3__.LayoutFooterComponent], styles: [".mod-tab-view   [_nghost-%COMP%] {\n  display: grid;\n  grid-template-rows: max-content 1fr max-content;\n  height: 100vh;\n}\n.mod-popup-view   [_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 600px;\n  overflow: hidden;\n  width: 420px;\n}\n.mod-popup-view   [_nghost-%COMP%]   .authorized-layout__header-container[_ngcontent-%COMP%] {\n  width: 420px;\n}\n.mod-popup-view   [_nghost-%COMP%]   .authorized-layout__header[_ngcontent-%COMP%], .mod-popup-view   [_nghost-%COMP%]   .authorized-layout__navigation[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  padding-right: 16px;\n  width: auto;\n}\n.mod-popup-view   [_nghost-%COMP%]   .authorized-layout__header[_ngcontent-%COMP%] {\n  padding-bottom: 12px;\n}\n.authorized-layout__header-container[_ngcontent-%COMP%] {\n  background-color: var(--color-header-background);\n  border-bottom: 1px solid var(--color-outlines);\n}\n.authorized-layout__header[_ngcontent-%COMP%] {\n  margin: auto;\n  padding: 16px 24px;\n  width: 1248px;\n}\n.authorized-layout__navigation[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  padding: 0 24px;\n  width: 1248px;\n}\n.authorized-layout__content-container[_ngcontent-%COMP%] {\n  overflow: auto;\n}"], changeDetection: 0 });
AuthorizedLayoutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__.UntilDestroy)()
], AuthorizedLayoutComponent);



/***/ }),

/***/ 6321:
/*!*******************************************************************************************!*\
  !*** ./projects/charon/src/app/core/layout/authorized-layout/authorized-layout.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorizedLayoutModule": () => (/* binding */ AuthorizedLayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 11048);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 45113);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngneat/svg-icon */ 66722);
/* harmony import */ var _shared_components_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/components/menu */ 91009);
/* harmony import */ var _shared_components_slot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/components/slot */ 83836);
/* harmony import */ var _shared_directives_browser_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/directives/browser-view */ 61349);
/* harmony import */ var _shared_directives_drag_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/directives/drag-scroll */ 56784);
/* harmony import */ var _shared_directives_mouse_wheel_horizontal_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/directives/mouse-wheel-horizontal-scroll */ 53299);
/* harmony import */ var _shared_directives_router_link_scroll_anchor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/directives/router-link-scroll-anchor */ 79062);
/* harmony import */ var _layout_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layout-footer */ 87568);
/* harmony import */ var _authorized_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./authorized-layout.component */ 47884);
/* harmony import */ var _authorized_layout_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./authorized-layout-header */ 23293);
/* harmony import */ var _authorized_layout_navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./authorized-layout-navigation */ 45345);
/* harmony import */ var _authorized_layout_navigation_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./authorized-layout-navigation-link */ 53938);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 89724);















class AuthorizedLayoutModule {
}
AuthorizedLayoutModule.ɵfac = function AuthorizedLayoutModule_Factory(t) { return new (t || AuthorizedLayoutModule)(); };
AuthorizedLayoutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AuthorizedLayoutModule });
AuthorizedLayoutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[
            _shared_directives_browser_view__WEBPACK_IMPORTED_MODULE_2__.BrowserViewModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _shared_directives_drag_scroll__WEBPACK_IMPORTED_MODULE_3__.DragScrollModule,
            _layout_footer__WEBPACK_IMPORTED_MODULE_6__.LayoutFooterModule,
            _shared_components_menu__WEBPACK_IMPORTED_MODULE_0__.MenuModule,
            _shared_directives_mouse_wheel_horizontal_scroll__WEBPACK_IMPORTED_MODULE_4__.MouseWheelHorizontalScrollModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule,
            _shared_directives_router_link_scroll_anchor__WEBPACK_IMPORTED_MODULE_5__.RouterLinkScrollAnchorModule,
            _shared_components_slot__WEBPACK_IMPORTED_MODULE_1__.SlotModule,
            _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_14__.SvgIconsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AuthorizedLayoutModule, { declarations: [_authorized_layout_component__WEBPACK_IMPORTED_MODULE_7__.AuthorizedLayoutComponent,
        _authorized_layout_header__WEBPACK_IMPORTED_MODULE_8__.AuthorizedLayoutHeaderComponent,
        _authorized_layout_navigation__WEBPACK_IMPORTED_MODULE_9__.AuthorizedLayoutNavigationComponent,
        _authorized_layout_navigation__WEBPACK_IMPORTED_MODULE_9__.AuthorizedLayoutNavigationDefDirective,
        _authorized_layout_navigation_link__WEBPACK_IMPORTED_MODULE_10__.AuthorizedLayoutNavigationLinkComponent,
        _authorized_layout_navigation_link__WEBPACK_IMPORTED_MODULE_10__.AuthorizedLayoutNavigationLinkDefDirective], imports: [_shared_directives_browser_view__WEBPACK_IMPORTED_MODULE_2__.BrowserViewModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _shared_directives_drag_scroll__WEBPACK_IMPORTED_MODULE_3__.DragScrollModule,
        _layout_footer__WEBPACK_IMPORTED_MODULE_6__.LayoutFooterModule,
        _shared_components_menu__WEBPACK_IMPORTED_MODULE_0__.MenuModule,
        _shared_directives_mouse_wheel_horizontal_scroll__WEBPACK_IMPORTED_MODULE_4__.MouseWheelHorizontalScrollModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule,
        _shared_directives_router_link_scroll_anchor__WEBPACK_IMPORTED_MODULE_5__.RouterLinkScrollAnchorModule,
        _shared_components_slot__WEBPACK_IMPORTED_MODULE_1__.SlotModule,
        _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_14__.SvgIconsModule], exports: [_authorized_layout_component__WEBPACK_IMPORTED_MODULE_7__.AuthorizedLayoutComponent,
        _authorized_layout_navigation__WEBPACK_IMPORTED_MODULE_9__.AuthorizedLayoutNavigationDefDirective,
        _authorized_layout_navigation_link__WEBPACK_IMPORTED_MODULE_10__.AuthorizedLayoutNavigationLinkDefDirective] }); })();


/***/ }),

/***/ 86084:
/*!************************************************************************!*\
  !*** ./projects/charon/src/app/core/layout/authorized-layout/index.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AUTHORIZED_LAYOUT_FOOTER_SLOT": () => (/* reexport safe */ _authorized_layout_component__WEBPACK_IMPORTED_MODULE_0__.AUTHORIZED_LAYOUT_FOOTER_SLOT),
/* harmony export */   "AUTHORIZED_LAYOUT_HEADER_ACTIONS_SLOT": () => (/* reexport safe */ _authorized_layout_header__WEBPACK_IMPORTED_MODULE_1__.AUTHORIZED_LAYOUT_HEADER_ACTIONS_SLOT),
/* harmony export */   "AUTHORIZED_LAYOUT_HEADER_LOGO_SLOT": () => (/* reexport safe */ _authorized_layout_header__WEBPACK_IMPORTED_MODULE_1__.AUTHORIZED_LAYOUT_HEADER_LOGO_SLOT),
/* harmony export */   "AUTHORIZED_LAYOUT_HEADER_META_SLOT": () => (/* reexport safe */ _authorized_layout_header__WEBPACK_IMPORTED_MODULE_1__.AUTHORIZED_LAYOUT_HEADER_META_SLOT),
/* harmony export */   "AuthorizedLayoutComponent": () => (/* reexport safe */ _authorized_layout_component__WEBPACK_IMPORTED_MODULE_0__.AuthorizedLayoutComponent),
/* harmony export */   "AuthorizedLayoutModule": () => (/* reexport safe */ _authorized_layout_module__WEBPACK_IMPORTED_MODULE_2__.AuthorizedLayoutModule)
/* harmony export */ });
/* harmony import */ var _authorized_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authorized-layout.component */ 47884);
/* harmony import */ var _authorized_layout_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authorized-layout-header */ 23293);
/* harmony import */ var _authorized_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authorized-layout.module */ 6321);





/***/ }),

/***/ 87568:
/*!********************************************************************!*\
  !*** ./projects/charon/src/app/core/layout/layout-footer/index.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutFooterModule": () => (/* reexport safe */ _layout_footer_module__WEBPACK_IMPORTED_MODULE_0__.LayoutFooterModule)
/* harmony export */ });
/* harmony import */ var _layout_footer_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout-footer.module */ 54767);



/***/ }),

/***/ 9181:
/*!**************************************************************************************!*\
  !*** ./projects/charon/src/app/core/layout/layout-footer/layout-footer.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutFooterComponent": () => (/* binding */ LayoutFooterComponent)
/* harmony export */ });
/* harmony import */ var _shared_svg_icons_discord__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/svg-icons/discord */ 70201);
/* harmony import */ var _shared_svg_icons_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/svg-icons/github */ 21403);
/* harmony import */ var _shared_svg_icons_logo_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/svg-icons/logo-icon */ 42536);
/* harmony import */ var _shared_svg_icons_medium__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/svg-icons/medium */ 61324);
/* harmony import */ var _shared_svg_icons_telegram__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/svg-icons/telegram */ 98399);
/* harmony import */ var _shared_svg_icons_twitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/svg-icons/twitter */ 85011);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngneat/svg-icon */ 66722);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngneat/transloco */ 47860);
/* harmony import */ var _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../shared/directives/typeface/typeface.directive */ 31857);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 11048);











function LayoutFooterComponent_div_0_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "svg-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const socialLink_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("href", socialLink_r3.url, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("title", socialLink_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("key", socialLink_r3.iconKey);
} }
const _c0 = function (a0) { return { year: a0 }; };
function LayoutFooterComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1)(1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "svg-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, LayoutFooterComponent_div_0_a_8_Template, 2, 3, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const translate_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", translate_r1("decentr"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" \u00A9 ", translate_r1("copyright", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](3, _c0, ctx_r0.currentYear)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.socialLinks);
} }
class LayoutFooterComponent {
    constructor(svgIconRegistry) {
        this.currentYear = new Date().getFullYear();
        this.socialLinks = [
            {
                iconKey: _shared_svg_icons_github__WEBPACK_IMPORTED_MODULE_1__.svgGithub.name,
                title: 'GitHub',
                url: 'https://github.com/Decentr-net',
            },
            {
                iconKey: _shared_svg_icons_telegram__WEBPACK_IMPORTED_MODULE_4__.svgTelegram.name,
                title: 'Telegram',
                url: 'https://t.me/DecentrNet',
            },
            {
                iconKey: _shared_svg_icons_twitter__WEBPACK_IMPORTED_MODULE_5__.svgTwitter.name,
                title: 'Twitter',
                url: 'https://twitter.com/decentrnet',
            },
            {
                iconKey: _shared_svg_icons_medium__WEBPACK_IMPORTED_MODULE_3__.svgMedium.name,
                title: 'Medium',
                url: 'https://decentrnet.medium.com/',
            },
            {
                iconKey: _shared_svg_icons_discord__WEBPACK_IMPORTED_MODULE_0__.svgDiscord.name,
                title: 'Discord',
                url: 'https://discord.gg/VMUt7yw92B',
            },
        ];
        svgIconRegistry.register([
            _shared_svg_icons_discord__WEBPACK_IMPORTED_MODULE_0__.svgDiscord,
            _shared_svg_icons_github__WEBPACK_IMPORTED_MODULE_1__.svgGithub,
            _shared_svg_icons_logo_icon__WEBPACK_IMPORTED_MODULE_2__.svgLogoIcon,
            _shared_svg_icons_medium__WEBPACK_IMPORTED_MODULE_3__.svgMedium,
            _shared_svg_icons_telegram__WEBPACK_IMPORTED_MODULE_4__.svgTelegram,
            _shared_svg_icons_twitter__WEBPACK_IMPORTED_MODULE_5__.svgTwitter,
        ]);
    }
}
LayoutFooterComponent.ɵfac = function LayoutFooterComponent_Factory(t) { return new (t || LayoutFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_8__.SvgIconRegistry)); };
LayoutFooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: LayoutFooterComponent, selectors: [["app-layout-footer"]], decls: 1, vars: 2, consts: [["class", "layout-footer__container", 4, "transloco", "translocoRead", "translocoScope"], [1, "layout-footer__container"], ["href", "https://decentr.net", "target", "_blank", 1, "layout-footer__logo"], ["key", "logo-icon"], ["appTypeface", "paragraph"], ["appTypeface", "caption", 1, "layout-footer__copyright"], [1, "layout-footer__social-links-container"], ["class", "layout-footer__social-link", "target", "_blank", 3, "href", "title", 4, "ngFor", "ngForOf"], ["target", "_blank", 1, "layout-footer__social-link", 3, "href", "title"], [3, "key"]], template: function LayoutFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, LayoutFooterComponent_div_0_Template, 9, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("translocoRead", "core.layout.footer")("translocoScope", "core");
    } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_9__.TranslocoDirective, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_8__.SvgIconComponent, _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_6__.TypefaceDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf], styles: ["[_nghost-%COMP%] {\n  background-color: var(--color-footer-background);\n  border-top: 1px solid var(--color-footer-top-border);\n  display: block;\n  width: 100%;\n}\n\n.layout-footer__container[_ngcontent-%COMP%] {\n  align-items: center;\n  color: var(--color-footer-container);\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  margin: 12px auto;\n  padding: 0 24px;\n  max-width: 1248px;\n}\n\n.layout-footer__logo[_ngcontent-%COMP%] {\n  color: var(--color-footer-logo);\n  display: inline-flex;\n  gap: 8px;\n  font-weight: 700;\n}\n\n.layout-footer__copyright[_ngcontent-%COMP%] {\n  color: var(--color-footer-copyright);\n  text-align: center;\n}\n\n.layout-footer__social-links-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  justify-content: flex-end;\n}\n\n.layout-footer__social-link[_ngcontent-%COMP%] {\n  color: var(--color-footer-social-link);\n  transition: all 0.3s ease;\n}\n\n.layout-footer__social-link[_ngcontent-%COMP%]:hover {\n  color: var(--color-footer-social-link-hover);\n}"], changeDetection: 0 });


/***/ }),

/***/ 54767:
/*!***********************************************************************************!*\
  !*** ./projects/charon/src/app/core/layout/layout-footer/layout-footer.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutFooterModule": () => (/* binding */ LayoutFooterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 11048);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/svg-icon */ 66722);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/transloco */ 47860);
/* harmony import */ var _shared_directives_typeface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/directives/typeface */ 2703);
/* harmony import */ var _layout_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout-footer.component */ 9181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 89724);






class LayoutFooterModule {
}
LayoutFooterModule.ɵfac = function LayoutFooterModule_Factory(t) { return new (t || LayoutFooterModule)(); };
LayoutFooterModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LayoutFooterModule });
LayoutFooterModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_4__.SvgIconsModule,
            _ngneat_transloco__WEBPACK_IMPORTED_MODULE_5__.TranslocoModule,
            _shared_directives_typeface__WEBPACK_IMPORTED_MODULE_0__.TypefaceModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LayoutFooterModule, { declarations: [_layout_footer_component__WEBPACK_IMPORTED_MODULE_1__.LayoutFooterComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_4__.SvgIconsModule,
        _ngneat_transloco__WEBPACK_IMPORTED_MODULE_5__.TranslocoModule,
        _shared_directives_typeface__WEBPACK_IMPORTED_MODULE_0__.TypefaceModule], exports: [_layout_footer_component__WEBPACK_IMPORTED_MODULE_1__.LayoutFooterComponent] }); })();


/***/ }),

/***/ 97075:
/*!********************************************************************!*\
  !*** ./projects/charon/src/app/core/layout/public-layout/index.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PUBLIC_LAYOUT_INCLUDE_LOGO_KEY": () => (/* reexport safe */ _public_layout_component__WEBPACK_IMPORTED_MODULE_1__.PUBLIC_LAYOUT_INCLUDE_LOGO_KEY),
/* harmony export */   "PublicLayoutComponent": () => (/* reexport safe */ _public_layout_component__WEBPACK_IMPORTED_MODULE_1__.PublicLayoutComponent),
/* harmony export */   "PublicLayoutModule": () => (/* reexport safe */ _public_layout_module__WEBPACK_IMPORTED_MODULE_0__.PublicLayoutModule)
/* harmony export */ });
/* harmony import */ var _public_layout_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-layout.module */ 53571);
/* harmony import */ var _public_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public-layout.component */ 79643);




/***/ }),

/***/ 79643:
/*!**************************************************************************************!*\
  !*** ./projects/charon/src/app/core/layout/public-layout/public-layout.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PUBLIC_LAYOUT_INCLUDE_LOGO_KEY": () => (/* binding */ PUBLIC_LAYOUT_INCLUDE_LOGO_KEY),
/* harmony export */   "PublicLayoutComponent": () => (/* binding */ PublicLayoutComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 42993);
/* harmony import */ var _shared_svg_icons_logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/svg-icons/logo */ 54778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 45113);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngneat/svg-icon */ 66722);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 11048);
/* harmony import */ var _shared_directives_browser_view_browser_tab_view_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../shared/directives/browser-view/browser-tab-view.directive */ 59896);
/* harmony import */ var _layout_footer_layout_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout-footer/layout-footer.component */ 9181);








function PublicLayoutComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 3);
} }
function PublicLayoutComponent_app_layout_footer_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-layout-footer", 4);
} }
const PUBLIC_LAYOUT_INCLUDE_LOGO_KEY = 'includeLogo';
class PublicLayoutComponent {
    constructor(activatedRoute, svgIconRegistry) {
        this.activatedRoute = activatedRoute;
        this.svgIconRegistry = svgIconRegistry;
    }
    ngOnInit() {
        this.svgIconRegistry.register([
            _shared_svg_icons_logo__WEBPACK_IMPORTED_MODULE_0__.svgLogo,
        ]);
        this.includeLogo$ = this.activatedRoute.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.pluck)(PUBLIC_LAYOUT_INCLUDE_LOGO_KEY));
    }
}
PublicLayoutComponent.ɵfac = function PublicLayoutComponent_Factory(t) { return new (t || PublicLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_6__.SvgIconRegistry)); };
PublicLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PublicLayoutComponent, selectors: [["app-public-layout"]], decls: 6, vars: 3, consts: [[1, "public-layout__logo-container"], ["class", "public-layout__logo", 4, "ngIf"], ["class", "public-layout__footer", 4, "appBrowserTabView"], [1, "public-layout__logo"], [1, "public-layout__footer"]], template: function PublicLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PublicLayoutComponent_div_1_Template, 1, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, PublicLayoutComponent_app_layout_footer_5_Template, 1, 0, "app-layout-footer", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx.includeLogo$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _shared_directives_browser_view_browser_tab_view_directive__WEBPACK_IMPORTED_MODULE_1__.BrowserTabViewDirective, _layout_footer_layout_footer_component__WEBPACK_IMPORTED_MODULE_2__.LayoutFooterComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe], styles: ["[_nghost-%COMP%] {\n  display: grid;\n  grid-template-rows: max-content minmax(0, 1fr) max-content;\n}\n.mod-tab-view   [_nghost-%COMP%] {\n  min-height: 100vh;\n}\n.mod-tab-view   [_nghost-%COMP%]   .public-layout__logo[_ngcontent-%COMP%] {\n  margin: 40px auto;\n}\n.public-layout__logo[_ngcontent-%COMP%] {\n  background-image: var(--logo-dhub);\n  background-repeat: no-repeat;\n  display: block;\n  height: 40px;\n  margin: 16px auto;\n  width: 147px;\n}\n.public-layout__footer[_ngcontent-%COMP%] {\n  bottom: 0;\n  position: sticky;\n}"], changeDetection: 0 });


/***/ }),

/***/ 53571:
/*!***********************************************************************************!*\
  !*** ./projects/charon/src/app/core/layout/public-layout/public-layout.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicLayoutModule": () => (/* binding */ PublicLayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 11048);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 45113);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngneat/svg-icon */ 66722);
/* harmony import */ var _shared_directives_browser_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/directives/browser-view */ 61349);
/* harmony import */ var _layout_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout-footer */ 87568);
/* harmony import */ var _public_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./public-layout.component */ 79643);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 89724);







class PublicLayoutModule {
}
PublicLayoutModule.ɵfac = function PublicLayoutModule_Factory(t) { return new (t || PublicLayoutModule)(); };
PublicLayoutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PublicLayoutModule });
PublicLayoutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _shared_directives_browser_view__WEBPACK_IMPORTED_MODULE_0__.BrowserViewModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _layout_footer__WEBPACK_IMPORTED_MODULE_1__.LayoutFooterModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
            _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_6__.SvgIconsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PublicLayoutModule, { declarations: [_public_layout_component__WEBPACK_IMPORTED_MODULE_2__.PublicLayoutComponent], imports: [_shared_directives_browser_view__WEBPACK_IMPORTED_MODULE_0__.BrowserViewModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _layout_footer__WEBPACK_IMPORTED_MODULE_1__.LayoutFooterModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
        _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_6__.SvgIconsModule], exports: [_public_layout_component__WEBPACK_IMPORTED_MODULE_2__.PublicLayoutComponent] }); })();


/***/ }),

/***/ 43109:
/*!***********************************************************!*\
  !*** ./projects/charon/src/app/core/lock/guards/index.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOCK_GUARDS": () => (/* binding */ LOCK_GUARDS),
/* harmony export */   "LockGuard": () => (/* reexport safe */ _lock_guard__WEBPACK_IMPORTED_MODULE_0__.LockGuard)
/* harmony export */ });
/* harmony import */ var _lock_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lock.guard */ 80495);

const LOCK_GUARDS = [
    _lock_guard__WEBPACK_IMPORTED_MODULE_0__.LockGuard,
];



/***/ }),

/***/ 80495:
/*!****************************************************************!*\
  !*** ./projects/charon/src/app/core/lock/guards/lock.guard.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LockGuard": () => (/* binding */ LockGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 57445);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ 27062);




class LockGuard {
    constructor(lockService) {
        this.lockService = lockService;
    }
    canActivate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const isLocked = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.firstValueFrom)(this.lockService.lockedState$);
            if (isLocked) {
                yield this.lockService.navigateToLockedUrl();
                return false;
            }
            this.lockService.start();
            return true;
        });
    }
    canActivateChild() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return this.canActivate();
        });
    }
    canDeactivate() {
        this.lockService.stop();
        return true;
    }
}
LockGuard.ɵfac = function LockGuard_Factory(t) { return new (t || LockGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_0__.LockService)); };
LockGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: LockGuard, factory: LockGuard.ɵfac });


/***/ }),

/***/ 86126:
/*!****************************************************!*\
  !*** ./projects/charon/src/app/core/lock/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOCK_GUARDS": () => (/* reexport safe */ _guards__WEBPACK_IMPORTED_MODULE_0__.LOCK_GUARDS),
/* harmony export */   "LOCK_SERVICES": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_1__.LOCK_SERVICES),
/* harmony export */   "LockGuard": () => (/* reexport safe */ _guards__WEBPACK_IMPORTED_MODULE_0__.LockGuard),
/* harmony export */   "LockModule": () => (/* reexport safe */ _lock_module__WEBPACK_IMPORTED_MODULE_2__.LockModule),
/* harmony export */   "LockParam": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_1__.LockParam),
/* harmony export */   "LockReturnUrlParam": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_1__.LockReturnUrlParam),
/* harmony export */   "LockService": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_1__.LockService)
/* harmony export */ });
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards */ 43109);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ 27062);
/* harmony import */ var _lock_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lock.module */ 20412);





/***/ }),

/***/ 20412:
/*!**********************************************************!*\
  !*** ./projects/charon/src/app/core/lock/lock.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LockModule": () => (/* binding */ LockModule)
/* harmony export */ });
/* harmony import */ var _shared_services_lock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/lock */ 51515);
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards */ 43109);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ 27062);
/* harmony import */ var _lock_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lock.tokens */ 24303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 89724);





class LockModule {
    static forRoot(config) {
        return {
            ngModule: LockModule,
            providers: [
                _guards__WEBPACK_IMPORTED_MODULE_1__.LOCK_GUARDS,
                _services__WEBPACK_IMPORTED_MODULE_2__.LOCK_SERVICES,
                {
                    provide: _shared_services_lock__WEBPACK_IMPORTED_MODULE_0__.LockBrowserStorageService,
                    useClass: _shared_services_lock__WEBPACK_IMPORTED_MODULE_0__.LockBrowserStorageService,
                },
                {
                    provide: _lock_tokens__WEBPACK_IMPORTED_MODULE_3__.LOCK_ACTIVITY_SOURCE,
                    useValue: config.activitySource,
                },
                {
                    provide: _lock_tokens__WEBPACK_IMPORTED_MODULE_3__.LOCK_REDIRECT_URL,
                    useValue: config.redirectUrl,
                },
            ],
        };
    }
}
LockModule.ɵfac = function LockModule_Factory(t) { return new (t || LockModule)(); };
LockModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: LockModule });
LockModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({});


/***/ }),

/***/ 24303:
/*!**********************************************************!*\
  !*** ./projects/charon/src/app/core/lock/lock.tokens.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOCK_ACTIVITY_SOURCE": () => (/* binding */ LOCK_ACTIVITY_SOURCE),
/* harmony export */   "LOCK_REDIRECT_URL": () => (/* binding */ LOCK_REDIRECT_URL)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 89724);

const LOCK_ACTIVITY_SOURCE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('LOCK_ACTIVITY_SOURCE');
const LOCK_REDIRECT_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('LOCK_REDIRECT_URL');


/***/ }),

/***/ 27062:
/*!*************************************************************!*\
  !*** ./projects/charon/src/app/core/lock/services/index.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOCK_SERVICES": () => (/* binding */ LOCK_SERVICES),
/* harmony export */   "LockParam": () => (/* reexport safe */ _lock_definitions__WEBPACK_IMPORTED_MODULE_1__.LockParam),
/* harmony export */   "LockReturnUrlParam": () => (/* reexport safe */ _lock_definitions__WEBPACK_IMPORTED_MODULE_1__.LockReturnUrlParam),
/* harmony export */   "LockService": () => (/* reexport safe */ _lock_service__WEBPACK_IMPORTED_MODULE_0__.LockService)
/* harmony export */ });
/* harmony import */ var _lock_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lock.service */ 39316);
/* harmony import */ var _lock_definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lock.definitions */ 24506);

const LOCK_SERVICES = [
    _lock_service__WEBPACK_IMPORTED_MODULE_0__.LockService,
];




/***/ }),

/***/ 24506:
/*!************************************************************************!*\
  !*** ./projects/charon/src/app/core/lock/services/lock.definitions.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LockParam": () => (/* binding */ LockParam),
/* harmony export */   "LockReturnUrlParam": () => (/* binding */ LockReturnUrlParam)
/* harmony export */ });
var LockParam;
(function (LockParam) {
    LockParam["ReturnUrl"] = "returnUrl";
})(LockParam || (LockParam = {}));
var LockReturnUrlParam;
(function (LockReturnUrlParam) {
    LockReturnUrlParam["Close"] = "close";
})(LockReturnUrlParam || (LockReturnUrlParam = {}));


/***/ }),

/***/ 39316:
/*!********************************************************************!*\
  !*** ./projects/charon/src/app/core/lock/services/lock.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LockService": () => (/* binding */ LockService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 45113);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 5557);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 21860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 14581);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 19382);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 74970);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 42147);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 61528);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 65598);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 65619);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 13528);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngneat/until-destroy */ 78177);
/* harmony import */ var _shared_utils_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/utils/browser */ 94240);
/* harmony import */ var _shared_utils_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/utils/date */ 17969);
/* harmony import */ var _app_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app-route */ 4473);
/* harmony import */ var _lock_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lock.tokens */ 24303);
/* harmony import */ var _lock_definitions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lock.definitions */ 24506);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth */ 51519);
/* harmony import */ var _shared_services_lock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/services/lock */ 51515);















let LockService = class LockService {
    constructor(activatedRoute, authService, lockStorage, ngZone, router, lockRedirectUrl, lockActivitySource) {
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.lockStorage = lockStorage;
        this.ngZone = ngZone;
        this.router = router;
        this.lockRedirectUrl = lockRedirectUrl;
        this.isLocked$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.ReplaySubject(1);
        this.isWorking$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.ReplaySubject(1);
        this.activitySource = lockActivitySource
            || (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.fromEvent)(document, 'click', { capture: true }), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.fromEvent)(document, 'keypress'), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.fromEvent)(document, 'mouseover')).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.throttleTime)(_shared_utils_date__WEBPACK_IMPORTED_MODULE_1__.ONE_SECOND));
        this.init();
    }
    get lockedState$() {
        return this.isLocked$.asObservable();
    }
    get locked$() {
        return this.isLocked$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(Boolean), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(() => void 0));
    }
    get unlocked$() {
        return this.isLocked$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)((isLocked) => !isLocked), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(() => void 0));
    }
    get started$() {
        return this.isWorking$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(Boolean), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(() => void 0));
    }
    get stopped$() {
        return this.isWorking$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)((isWorking) => !isWorking), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(() => void 0));
    }
    start() {
        this.isWorking$.next(true);
    }
    stop() {
        this.isWorking$.next(false);
    }
    lock() {
        return this.lockStorage.setLocked(true);
    }
    unlock() {
        return this.lockStorage.setLocked(false);
    }
    navigateToLockedUrl() {
        if (this.isOnLockedPage()) {
            return Promise.resolve(true);
        }
        return this.navigate(this.lockRedirectUrl, {
            queryParams: {
                [_lock_definitions__WEBPACK_IMPORTED_MODULE_4__.LockParam.ReturnUrl]: this.router.url,
            },
        });
    }
    navigateToUnlockedUrl() {
        const returnUrl = this.activatedRoute.snapshot.queryParamMap.get(_lock_definitions__WEBPACK_IMPORTED_MODULE_4__.LockParam.ReturnUrl);
        if (returnUrl === _lock_definitions__WEBPACK_IMPORTED_MODULE_4__.LockReturnUrlParam.Close) {
            window.close();
            return Promise.resolve(true);
        }
        return this.navigate((0,_shared_utils_browser__WEBPACK_IMPORTED_MODULE_0__.isOpenedInTab)() ? this.router.parseUrl(returnUrl || '/') : _app_route__WEBPACK_IMPORTED_MODULE_2__.AppRoute.Portal);
    }
    init() {
        this.authService.getActiveUser().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)((user) => !user), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__.untilDestroyed)(this)).subscribe(() => this.lockStorage.clear());
        this.initActivityUpdateSubscription();
        this.locked$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(() => this.unlocked$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.take)(1))), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__.untilDestroyed)(this)).subscribe(() => {
            this.navigateToUnlockedUrl();
        });
        this.whenWorking(this.unlocked$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(() => this.locked$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.take)(1))))).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__.untilDestroyed)(this)).subscribe(() => {
            this.navigateToLockedUrl();
        });
        this.listenStorageLockState().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.distinctUntilChanged)(), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__.untilDestroyed)(this)).subscribe((isLocked) => {
            this.isLocked$.next(isLocked);
        });
    }
    listenStorageLockState() {
        return this.lockStorage.getLockedChanges();
    }
    initActivityUpdateSubscription() {
        this.whenWorking(this.activitySource).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.mergeMap)(() => this.updateLastActivityTime()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__.untilDestroyed)(this)).subscribe();
    }
    updateLastActivityTime() {
        return this.lockStorage.setLastActivityTime(Date.now());
    }
    navigate(url, extras) {
        return this.ngZone.run(() => {
            return url instanceof _angular_router__WEBPACK_IMPORTED_MODULE_18__.UrlTree
                ? this.router.navigateByUrl(url, extras)
                : this.router.navigate([url], extras);
        });
    }
    isOnLockedPage() {
        return this.router.url.startsWith(this.lockRedirectUrl);
    }
    whenWorking(observable) {
        return this.started$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.mergeMap)(() => observable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this.stopped$))));
    }
};
LockService.ɵfac = function LockService_Factory(t) { return new (t || LockService)(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_auth__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_shared_services_lock__WEBPACK_IMPORTED_MODULE_6__.LockBrowserStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_20__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_lock_tokens__WEBPACK_IMPORTED_MODULE_3__.LOCK_REDIRECT_URL), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_lock_tokens__WEBPACK_IMPORTED_MODULE_3__.LOCK_ACTIVITY_SOURCE, 8)); };
LockService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjectable"]({ token: LockService, factory: LockService.ɵfac });
LockService = (0,tslib__WEBPACK_IMPORTED_MODULE_21__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_14__.UntilDestroy)()
], LockService);



/***/ }),

/***/ 12089:
/*!**********************************************************!*\
  !*** ./projects/charon/src/app/core/navigation/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationModule": () => (/* reexport safe */ _navigation_module__WEBPACK_IMPORTED_MODULE_0__.NavigationModule),
/* harmony export */   "NavigationService": () => (/* reexport safe */ _navigation_service__WEBPACK_IMPORTED_MODULE_1__.NavigationService)
/* harmony export */ });
/* harmony import */ var _navigation_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation.module */ 83940);
/* harmony import */ var _navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation.service */ 38080);




/***/ }),

/***/ 57146:
/*!************************************************************************!*\
  !*** ./projects/charon/src/app/core/navigation/navigate-back/index.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigateBackDirective": () => (/* reexport safe */ _navigate_back_directive__WEBPACK_IMPORTED_MODULE_0__.NavigateBackDirective)
/* harmony export */ });
/* harmony import */ var _navigate_back_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigate-back.directive */ 12109);



/***/ }),

/***/ 12109:
/*!******************************************************************************************!*\
  !*** ./projects/charon/src/app/core/navigation/navigate-back/navigate-back.directive.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigateBackDirective": () => (/* binding */ NavigateBackDirective)
/* harmony export */ });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ 92541);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _navigation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../navigation.service */ 38080);



class NavigateBackDirective {
    constructor(navigationService) {
        this.navigationService = navigationService;
    }
    onClick() {
        this.navigationService.back(this.fallbackUrl, this.startsWith && (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceArray)(this.startsWith).join(''));
    }
}
NavigateBackDirective.ɵfac = function NavigateBackDirective_Factory(t) { return new (t || NavigateBackDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_navigation_service__WEBPACK_IMPORTED_MODULE_0__.NavigationService)); };
NavigateBackDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NavigateBackDirective, selectors: [["", "appNavigateBack", ""]], hostBindings: function NavigateBackDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigateBackDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } }, inputs: { fallbackUrl: ["appNavigateBack", "fallbackUrl"], startsWith: ["appNavigateBackStartsWith", "startsWith"] } });


/***/ }),

/***/ 83940:
/*!**********************************************************************!*\
  !*** ./projects/charon/src/app/core/navigation/navigation.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationModule": () => (/* binding */ NavigationModule)
/* harmony export */ });
/* harmony import */ var _navigate_back__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigate-back */ 57146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 89724);


class NavigationModule {
}
NavigationModule.ɵfac = function NavigationModule_Factory(t) { return new (t || NavigationModule)(); };
NavigationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NavigationModule });
NavigationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NavigationModule, { declarations: [_navigate_back__WEBPACK_IMPORTED_MODULE_0__.NavigateBackDirective], exports: [_navigate_back__WEBPACK_IMPORTED_MODULE_0__.NavigateBackDirective] }); })();


/***/ }),

/***/ 38080:
/*!***********************************************************************!*\
  !*** ./projects/charon/src/app/core/navigation/navigation.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationService": () => (/* binding */ NavigationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 74970);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 79034);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 45113);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/until-destroy */ 78177);
/* harmony import */ var _shared_utils_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/utils/browser */ 94240);
/* harmony import */ var _app_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app-route */ 4473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 11048);









let NavigationService = class NavigationService {
    constructor(location, router) {
        this.location = location;
        this.router = router;
        this.previousPageUrls = [];
        this.getUrlChanges().pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__.untilDestroyed)(this)).subscribe((url) => {
            this.previousPageUrls.push(url);
        });
    }
    back(fallbackUrl, startsWith) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let urlToNavigate = '';
            do {
                urlToNavigate = this.previousPageUrls.pop();
            } while (urlToNavigate && !urlToNavigate.startsWith(startsWith || '') || urlToNavigate === this.router.url);
            const useFallback = !urlToNavigate || !(yield this.router.navigateByUrl(urlToNavigate));
            if (useFallback) {
                yield this.router.navigate(fallbackUrl);
            }
            this.previousPageUrls.pop();
        });
    }
    getUrlChanges() {
        return this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.pairwise)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(([prev]) => prev.urlAfterRedirects));
    }
    openInNewTab(url) {
        const externalLink = this.location.prepareExternalUrl(url);
        return (0,_shared_utils_browser__WEBPACK_IMPORTED_MODULE_0__.openExtensionInNewTab)(externalLink).then();
    }
    redirectToMaintenancePage() {
        this.router.navigate(['/', _app_route__WEBPACK_IMPORTED_MODULE_1__.AppRoute.Maintenance]);
    }
    redirectToOfflinePage() {
        this.router.navigate(['/', _app_route__WEBPACK_IMPORTED_MODULE_1__.AppRoute.Offline]);
    }
};
NavigationService.ɵfac = function NavigationService_Factory(t) { return new (t || NavigationService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
NavigationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: NavigationService, factory: NavigationService.ɵfac, providedIn: 'root' });
NavigationService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__.UntilDestroy)()
], NavigationService);



/***/ }),

/***/ 26453:
/*!**************************************************************************************************!*\
  !*** ./projects/charon/src/app/core/notifications/error-processors/broadcast-error-processor.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BroadcastErrorProcessor": () => (/* binding */ BroadcastErrorProcessor)
/* harmony export */ });
/* harmony import */ var _shared_services_notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/notification */ 86333);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/transloco */ 47860);



class BroadcastErrorProcessor extends _shared_services_notification__WEBPACK_IMPORTED_MODULE_0__.ConcreteErrorProcessor {
    constructor(translocoService) {
        super();
        this.translocoService = translocoService;
    }
    canProcess(error) {
        return error && !!error.broadcastErrorCode;
    }
    process(error) {
        return this.translocoService.selectTranslate(`notifications.broadcast_error.${error.broadcastErrorCode}`, null, 'core');
    }
}
BroadcastErrorProcessor.ɵfac = function BroadcastErrorProcessor_Factory(t) { return new (t || BroadcastErrorProcessor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__.TranslocoService)); };
BroadcastErrorProcessor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BroadcastErrorProcessor, factory: BroadcastErrorProcessor.ɵfac });


/***/ }),

/***/ 82541:
/*!*************************************************************************************************!*\
  !*** ./projects/charon/src/app/core/notifications/error-processors/fallback-error-processor.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FallbackErrorProcessor": () => (/* binding */ FallbackErrorProcessor)
/* harmony export */ });
/* harmony import */ var _shared_services_notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/notification */ 86333);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/transloco */ 47860);



class FallbackErrorProcessor extends _shared_services_notification__WEBPACK_IMPORTED_MODULE_0__.ErrorProcessor {
    constructor(translocoService) {
        super();
        this.translocoService = translocoService;
    }
    process() {
        return this.translocoService.selectTranslate('notifications.unknown_error', null, 'core');
    }
}
FallbackErrorProcessor.ɵfac = function FallbackErrorProcessor_Factory(t) { return new (t || FallbackErrorProcessor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__.TranslocoService)); };
FallbackErrorProcessor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FallbackErrorProcessor, factory: FallbackErrorProcessor.ɵfac });


/***/ }),

/***/ 14617:
/*!******************************************************************************!*\
  !*** ./projects/charon/src/app/core/notifications/error-processors/index.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ERROR_PROCESSORS": () => (/* binding */ ERROR_PROCESSORS),
/* harmony export */   "FallbackErrorProcessor": () => (/* reexport safe */ _fallback_error_processor__WEBPACK_IMPORTED_MODULE_2__.FallbackErrorProcessor)
/* harmony export */ });
/* harmony import */ var _broadcast_error_processor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./broadcast-error-processor */ 26453);
/* harmony import */ var _translated_error_processor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translated-error-processor */ 92397);
/* harmony import */ var _fallback_error_processor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fallback-error-processor */ 82541);



const ERROR_PROCESSORS = [
    _broadcast_error_processor__WEBPACK_IMPORTED_MODULE_0__.BroadcastErrorProcessor,
    _translated_error_processor__WEBPACK_IMPORTED_MODULE_1__.TranslatedErrorProcessor,
];


/***/ }),

/***/ 92397:
/*!***************************************************************************************************!*\
  !*** ./projects/charon/src/app/core/notifications/error-processors/translated-error-processor.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslatedErrorProcessor": () => (/* binding */ TranslatedErrorProcessor)
/* harmony export */ });
/* harmony import */ var _shared_services_notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/notification */ 86333);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models */ 46893);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 89724);



class TranslatedErrorProcessor extends _shared_services_notification__WEBPACK_IMPORTED_MODULE_0__.ConcreteErrorProcessor {
    canProcess(error) {
        return error instanceof _models__WEBPACK_IMPORTED_MODULE_1__.TranslatedError;
    }
    process(error) {
        return error.message;
    }
}
TranslatedErrorProcessor.ɵfac = /*@__PURE__*/ function () { let ɵTranslatedErrorProcessor_BaseFactory; return function TranslatedErrorProcessor_Factory(t) { return (ɵTranslatedErrorProcessor_BaseFactory || (ɵTranslatedErrorProcessor_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](TranslatedErrorProcessor)))(t || TranslatedErrorProcessor); }; }();
TranslatedErrorProcessor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TranslatedErrorProcessor, factory: TranslatedErrorProcessor.ɵfac });


/***/ }),

/***/ 21796:
/*!*************************************************************!*\
  !*** ./projects/charon/src/app/core/notifications/index.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ERROR_PROCESSORS": () => (/* reexport safe */ _error_processors__WEBPACK_IMPORTED_MODULE_0__.ERROR_PROCESSORS),
/* harmony export */   "FallbackErrorProcessor": () => (/* reexport safe */ _error_processors__WEBPACK_IMPORTED_MODULE_0__.FallbackErrorProcessor),
/* harmony export */   "TranslatedError": () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_1__.TranslatedError)
/* harmony export */ });
/* harmony import */ var _error_processors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-processors */ 14617);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models */ 46893);




/***/ }),

/***/ 46893:
/*!********************************************************************!*\
  !*** ./projects/charon/src/app/core/notifications/models/index.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslatedError": () => (/* reexport safe */ _translated_error__WEBPACK_IMPORTED_MODULE_0__.TranslatedError)
/* harmony export */ });
/* harmony import */ var _translated_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translated-error */ 76226);



/***/ }),

/***/ 76226:
/*!*******************************************************************************!*\
  !*** ./projects/charon/src/app/core/notifications/models/translated-error.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslatedError": () => (/* binding */ TranslatedError)
/* harmony export */ });
class TranslatedError extends Error {
}


/***/ }),

/***/ 57637:
/*!***********************************************************!*\
  !*** ./projects/charon/src/app/core/permissions/index.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PermissionsService": () => (/* reexport safe */ _permissions_service__WEBPACK_IMPORTED_MODULE_0__.PermissionsService),
/* harmony export */   "UserPermissions": () => (/* reexport safe */ _permissions__WEBPACK_IMPORTED_MODULE_1__.UserPermissions)
/* harmony export */ });
/* harmony import */ var _permissions_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./permissions.service */ 94777);
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./permissions */ 5328);




/***/ }),

/***/ 94777:
/*!*************************************************************************!*\
  !*** ./projects/charon/src/app/core/permissions/permissions.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PermissionsService": () => (/* binding */ PermissionsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 84945);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 61528);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngneat/until-destroy */ 78177);
/* harmony import */ var _shared_permissions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/permissions */ 6032);
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./permissions */ 5328);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth */ 51519);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ 88718);









let PermissionsService = class PermissionsService extends _shared_permissions__WEBPACK_IMPORTED_MODULE_0__.PermissionsService {
    constructor(authService, userService) {
        super();
        this.authService = authService;
        this.userService = userService;
        this.initModeratorPermissions();
    }
    initModeratorPermissions() {
        this.authService.getActiveUserAddress().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)((walletAddress) => {
            return walletAddress
                ? this.userService.getModeratorAddresses().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((moderatorAddresses) => moderatorAddresses.includes(walletAddress)))
                : (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(false);
        }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.untilDestroyed)(this)).subscribe((isModerator) => {
            if (isModerator) {
                this.addPermissions(_permissions__WEBPACK_IMPORTED_MODULE_1__.UserPermissions.DELETE_POST);
            }
            else {
                this.removePermissions(_permissions__WEBPACK_IMPORTED_MODULE_1__.UserPermissions.DELETE_POST);
            }
        });
    }
};
PermissionsService.ɵfac = function PermissionsService_Factory(t) { return new (t || PermissionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_auth__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_3__.UserService)); };
PermissionsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: PermissionsService, factory: PermissionsService.ɵfac });
PermissionsService = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.UntilDestroy)()
], PermissionsService);



/***/ }),

/***/ 5328:
/*!*****************************************************************!*\
  !*** ./projects/charon/src/app/core/permissions/permissions.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPermissions": () => (/* binding */ UserPermissions)
/* harmony export */ });
var UserPermissions;
(function (UserPermissions) {
    UserPermissions[UserPermissions["DELETE_POST"] = 0] = "DELETE_POST";
})(UserPermissions || (UserPermissions = {}));


/***/ }),

/***/ 92226:
/*!********************************************************************!*\
  !*** ./projects/charon/src/app/core/services/bank/bank.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BankService": () => (/* binding */ BankService),
/* harmony export */   "IbcRequestParams": () => (/* binding */ IbcRequestParams)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 15696);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 84945);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 33072);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 61528);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 33568);
/* harmony import */ var _shared_message_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/message-bus */ 73015);
/* harmony import */ var _scripts_background_charon_api_message_bus_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @scripts/background/charon-api/message-bus-map */ 39559);
/* harmony import */ var _scripts_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @scripts/messages */ 41784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth */ 51519);
/* harmony import */ var _decentr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../decentr */ 66069);








var IbcChannel;
(function (IbcChannel) {
    IbcChannel["DecentrSentinel"] = "channel-4";
})(IbcChannel || (IbcChannel = {}));
var IbcPort;
(function (IbcPort) {
    IbcPort["Transfer"] = "transfer";
})(IbcPort || (IbcPort = {}));
const IBC_TIMEOUT = 60;
const IbcRequestParams = {
    channel: IbcChannel,
    port: IbcPort,
    timeout: IBC_TIMEOUT,
};
class BankService {
    constructor(authService, decentrService) {
        this.authService = authService;
        this.decentrService = decentrService;
    }
    getDECBalance() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([
            this.decentrService.decentrClient,
            this.authService.getActiveUserAddress(),
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(([client, walletAddress]) => client.bank.getDenomBalance(walletAddress)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((coin) => (coin === null || coin === void 0 ? void 0 : coin.amount) || '0'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)('0')));
    }
    getBalance(walletAddress) {
        return this.decentrService.decentrClient.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(client => client.bank.getBalance(walletAddress)));
    }
    getTransferFee(request) {
        return this.decentrService.decentrClient.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((client) => client.bank.sendTokens({
            fromAddress: this.authService.getActiveUserInstant().wallet.address,
            toAddress: request.toAddress,
            amount: request.amount,
        }).simulate()));
    }
    getTransferIbcFee(request) {
        return this.decentrService.decentrClient.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((client) => client.bank.sendIbcTokens({
            receiver: request.receiver,
            sender: this.authService.getActiveUserInstant().wallet.address,
            sourcePort: IbcRequestParams.port.Transfer,
            sourceChannel: IbcRequestParams.channel.DecentrSentinel,
            timeoutSec: IbcRequestParams.timeout,
            token: request.token,
        }).simulate()));
    }
    transferCoins(request, memo) {
        const wallet = this.authService.getActiveUserInstant().wallet;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.defer)(() => new _shared_message_bus__WEBPACK_IMPORTED_MODULE_0__.MessageBus().sendMessage(_scripts_messages__WEBPACK_IMPORTED_MODULE_2__.MessageCode.CoinTransfer, {
            request: Object.assign(Object.assign({}, request), { fromAddress: wallet.address }),
            memo,
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(_scripts_background_charon_api_message_bus_map__WEBPACK_IMPORTED_MODULE_1__.assertMessageResponseSuccess));
    }
    sendIbcTokens(request, memo) {
        const wallet = this.authService.getActiveUserInstant().wallet;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.defer)(() => new _shared_message_bus__WEBPACK_IMPORTED_MODULE_0__.MessageBus().sendMessage(_scripts_messages__WEBPACK_IMPORTED_MODULE_2__.MessageCode.SendIbcTokens, {
            request: Object.assign(Object.assign({}, request), { fromAddress: wallet.address }),
            memo,
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(_scripts_background_charon_api_message_bus_map__WEBPACK_IMPORTED_MODULE_1__.assertMessageResponseSuccess));
    }
    sentinelSendIbcTokens(request, walletAddress, memo) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.defer)(() => new _shared_message_bus__WEBPACK_IMPORTED_MODULE_0__.MessageBus().sendMessage(_scripts_messages__WEBPACK_IMPORTED_MODULE_2__.MessageCode.SentinelSendIbcTokens, {
            request: Object.assign(Object.assign({}, request), { fromAddress: walletAddress }),
            memo,
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(_scripts_background_charon_api_message_bus_map__WEBPACK_IMPORTED_MODULE_1__.assertMessageResponseSuccess));
    }
}
BankService.ɵfac = function BankService_Factory(t) { return new (t || BankService)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_auth__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_decentr__WEBPACK_IMPORTED_MODULE_4__.DecentrService)); };
BankService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({ token: BankService, factory: BankService.ɵfac });


/***/ }),

/***/ 24036:
/*!*************************************************************!*\
  !*** ./projects/charon/src/app/core/services/bank/index.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BankService": () => (/* reexport safe */ _bank_service__WEBPACK_IMPORTED_MODULE_0__.BankService),
/* harmony export */   "IbcRequestParams": () => (/* reexport safe */ _bank_service__WEBPACK_IMPORTED_MODULE_0__.IbcRequestParams)
/* harmony export */ });
/* harmony import */ var _bank_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bank.service */ 92226);



/***/ }),

/***/ 67829:
/*!************************************************************************!*\
  !*** ./projects/charon/src/app/core/services/blocks/blocks.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlocksService": () => (/* binding */ BlocksService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 65619);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _decentr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../decentr */ 66069);



class BlocksService {
    constructor(decentrService) {
        this.decentrService = decentrService;
    }
    getBlock(height) {
        return this.decentrService.decentrClient.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)((decentrClient) => decentrClient.blocks.getBlock(height)));
    }
}
BlocksService.ɵfac = function BlocksService_Factory(t) { return new (t || BlocksService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_decentr__WEBPACK_IMPORTED_MODULE_0__.DecentrService)); };
BlocksService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: BlocksService, factory: BlocksService.ɵfac });


/***/ }),

/***/ 9063:
/*!***************************************************************!*\
  !*** ./projects/charon/src/app/core/services/blocks/index.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlocksService": () => (/* reexport safe */ _blocks_service__WEBPACK_IMPORTED_MODULE_0__.BlocksService)
/* harmony export */ });
/* harmony import */ var _blocks_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks.service */ 67829);



/***/ }),

/***/ 50953:
/*!****************************************************************************!*\
  !*** ./projects/charon/src/app/core/services/currency/currency.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyService": () => (/* binding */ CurrencyService)
/* harmony export */ });
/* harmony import */ var _shared_services_currency__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/currency */ 98603);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _environments_environment_definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @environments/environment.definitions */ 41380);



class CurrencyService extends _shared_services_currency__WEBPACK_IMPORTED_MODULE_0__.CurrencyService {
    constructor(environment) {
        super(environment);
    }
}
CurrencyService.ɵfac = function CurrencyService_Factory(t) { return new (t || CurrencyService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_environments_environment_definitions__WEBPACK_IMPORTED_MODULE_1__.Environment)); };
CurrencyService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CurrencyService, factory: CurrencyService.ɵfac });


/***/ }),

/***/ 84879:
/*!*****************************************************************!*\
  !*** ./projects/charon/src/app/core/services/currency/index.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyService": () => (/* reexport safe */ _currency_service__WEBPACK_IMPORTED_MODULE_0__.CurrencyService)
/* harmony export */ });
/* harmony import */ var _currency_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currency.service */ 50953);



/***/ }),

/***/ 8661:
/*!**************************************************************************!*\
  !*** ./projects/charon/src/app/core/services/decentr/decentr.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DecentrService": () => (/* binding */ DecentrService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5557);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 15696);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 61528);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 65598);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 65619);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngneat/until-destroy */ 78177);
/* harmony import */ var decentr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! decentr-js */ 14000);
/* harmony import */ var decentr_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(decentr_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _shared_services_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/configuration */ 1683);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth */ 51519);
/* harmony import */ var _network__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../network */ 83592);









let DecentrService = class DecentrService {
    constructor(configService, authService, networkService) {
        this.configService = configService;
        this.decentrClient$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.ReplaySubject(1);
        (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([
            networkService.getActiveNetworkAPI(),
            authService.getActiveUser(),
        ]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)(([api, user]) => { var _a; return decentr_js__WEBPACK_IMPORTED_MODULE_0__.DecentrClient.create(api, (_a = user === null || user === void 0 ? void 0 : user.wallet) === null || _a === void 0 ? void 0 : _a.privateKey); }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.untilDestroyed)(this)).subscribe((decentrClient) => this.decentrClient$.next(decentrClient));
    }
    get decentrClient() {
        return this.decentrClient$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1));
    }
    get cerberusClient() {
        return this.configService.getCerberusUrl().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)((cerberusUrl) => new decentr_js__WEBPACK_IMPORTED_MODULE_0__.CerberusClient(cerberusUrl)));
    }
    get theseusClient() {
        return this.configService.getTheseusUrl().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)((theseusUrl) => new decentr_js__WEBPACK_IMPORTED_MODULE_0__.TheseusClient(theseusUrl)));
    }
    get vulcanClient() {
        return this.configService.getVulcanUrl().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)((vulcanUrl) => new decentr_js__WEBPACK_IMPORTED_MODULE_0__.VulcanClient(vulcanUrl)));
    }
    get athenaClient() {
        return this.configService.getAthenaUrl().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)((athenaUrl) => new decentr_js__WEBPACK_IMPORTED_MODULE_0__.AthenaClient(`${athenaUrl}/api`)));
    }
    get meileClient() {
        return this.configService.getAthenaUrl().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)((athenaUrl) => new decentr_js__WEBPACK_IMPORTED_MODULE_0__.MeileClient(`https://api.meile.mathnodes.com:5000/v1`)));
    }
    createDecentrClient(networkId) {
        return this.configService.getNetworkConfig({ networkId }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)((config) => config.network.rest[0]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.mergeMap)((nodeUrl) => decentr_js__WEBPACK_IMPORTED_MODULE_0__.DecentrClient.create(nodeUrl)));
    }
    createVulcanClient(networkId) {
        return this.configService.getNetworkConfig({ networkId }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)((config) => config.vulcan.url), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)((vulcanUrl) => new decentr_js__WEBPACK_IMPORTED_MODULE_0__.VulcanClient(vulcanUrl)));
    }
    createAthenaClient(networkId) {
        return this.configService.getNetworkConfig({ networkId }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)((config) => config.athena.url), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)((athenaUrl) => new decentr_js__WEBPACK_IMPORTED_MODULE_0__.AthenaClient(`${athenaUrl}/api`)));
    }
};
DecentrService.ɵfac = function DecentrService_Factory(t) { return new (t || DecentrService)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_shared_services_configuration__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_auth__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_network__WEBPACK_IMPORTED_MODULE_3__.NetworkService)); };
DecentrService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({ token: DecentrService, factory: DecentrService.ɵfac });
DecentrService = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.UntilDestroy)()
], DecentrService);



/***/ }),

/***/ 66069:
/*!****************************************************************!*\
  !*** ./projects/charon/src/app/core/services/decentr/index.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DecentrService": () => (/* reexport safe */ _decentr_service__WEBPACK_IMPORTED_MODULE_0__.DecentrService)
/* harmony export */ });
/* harmony import */ var _decentr_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decentr.service */ 8661);



/***/ }),

/***/ 76038:
/*!************************************************************************************!*\
  !*** ./projects/charon/src/app/core/services/distribution/distribution.service.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DistributionService": () => (/* binding */ DistributionService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 15696);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 33072);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 61528);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var _shared_message_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/message-bus */ 73015);
/* harmony import */ var _scripts_background_charon_api_message_bus_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @scripts/background/charon-api/message-bus-map */ 39559);
/* harmony import */ var _scripts_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @scripts/messages */ 41784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth */ 51519);
/* harmony import */ var _decentr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../decentr */ 66069);








class DistributionService {
    constructor(authService, decentrService) {
        this.authService = authService;
        this.decentrService = decentrService;
    }
    getDelegatorRewards() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([
            this.decentrService.decentrClient,
            this.authService.getActiveUserAddress(),
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(([client, walletAddress]) => client.distribution.getDelegatorRewards(walletAddress)));
    }
    getValidatorRewards() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([
            this.decentrService.decentrClient,
            this.authService.getActiveUser(),
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(([client, user]) => client.distribution.getValidatorCommission(user.wallet.validatorAddress)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((commission) => {
            const coinsMap = [...commission]
                .reduce((acc, coin) => (Object.assign(Object.assign({}, acc), { [coin.denom]: (acc[coin.denom] || 0) + (+coin.amount || 0) })), {});
            return Object.entries(coinsMap)
                .map(([denom, amount]) => ({ denom, amount: amount.toString() }));
        }));
    }
    getTotalDelegatorRewards() {
        return this.getDelegatorRewards().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((rewards) => rewards.total));
    }
    calculateWithdrawDelegatorRewardsFee(validatorAddresses) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([
            this.decentrService.decentrClient,
            this.authService.getActiveUser(),
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(([client, user]) => {
            const requests = validatorAddresses
                .map((validatorAddress) => ({ validatorAddress, delegatorAddress: user.wallet.address }));
            return client.distribution.withdrawDelegatorRewards(requests).simulate();
        }));
    }
    withdrawDelegatorRewards(validatorAddresses) {
        const wallet = this.authService.getActiveUserInstant().wallet;
        const request = validatorAddresses.map((validatorAddress) => ({
            delegatorAddress: wallet.address,
            validatorAddress,
        }));
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.defer)(() => new _shared_message_bus__WEBPACK_IMPORTED_MODULE_0__.MessageBus().sendMessage(_scripts_messages__WEBPACK_IMPORTED_MODULE_2__.MessageCode.WithdrawDelegatorRewards, {
            request,
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(_scripts_background_charon_api_message_bus_map__WEBPACK_IMPORTED_MODULE_1__.assertMessageResponseSuccess));
    }
    withdrawValidatorRewards() {
        const wallet = this.authService.getActiveUserInstant().wallet;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.defer)(() => new _shared_message_bus__WEBPACK_IMPORTED_MODULE_0__.MessageBus().sendMessage(_scripts_messages__WEBPACK_IMPORTED_MODULE_2__.MessageCode.WithdrawValidatorRewards, {
            request: {
                validatorAddress: wallet.validatorAddress,
            },
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(_scripts_background_charon_api_message_bus_map__WEBPACK_IMPORTED_MODULE_1__.assertMessageResponseSuccess));
    }
    calculateWithdrawValidatorRewardsFee() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([
            this.decentrService.decentrClient,
            this.authService.getActiveUser(),
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(([client, user]) => {
            return client.distribution.withdrawValidatorRewards({
                validatorAddress: user.wallet.validatorAddress,
            }).simulate();
        }));
    }
}
DistributionService.ɵfac = function DistributionService_Factory(t) { return new (t || DistributionService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_auth__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_decentr__WEBPACK_IMPORTED_MODULE_4__.DecentrService)); };
DistributionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: DistributionService, factory: DistributionService.ɵfac });


/***/ }),

/***/ 50241:
/*!*********************************************************************!*\
  !*** ./projects/charon/src/app/core/services/distribution/index.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DistributionService": () => (/* reexport safe */ _distribution_service__WEBPACK_IMPORTED_MODULE_0__.DistributionService)
/* harmony export */ });
/* harmony import */ var _distribution_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./distribution.service */ 76038);



/***/ }),

/***/ 81378:
/*!******************************************************************************!*\
  !*** ./projects/charon/src/app/core/services/following/following.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FollowingService": () => (/* binding */ FollowingService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 33072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 15696);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 54121);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 61528);
/* harmony import */ var _shared_message_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/message-bus */ 73015);
/* harmony import */ var _scripts_background_charon_api_message_bus_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @scripts/background/charon-api/message-bus-map */ 39559);
/* harmony import */ var _scripts_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @scripts/messages */ 41784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth */ 51519);
/* harmony import */ var _decentr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../decentr */ 66069);








class FollowingService {
    constructor(authService, decentrService) {
        this.authService = authService;
        this.decentrService = decentrService;
    }
    follow(whom) {
        const wallet = this.authService.getActiveUserInstant().wallet;
        FollowingService.isFollowingUpdating$.next(true);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.defer)(() => new _shared_message_bus__WEBPACK_IMPORTED_MODULE_0__.MessageBus().sendMessage(_scripts_messages__WEBPACK_IMPORTED_MODULE_2__.MessageCode.Follow, {
            request: {
                owner: wallet.address,
                whom,
            },
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((response) => {
            FollowingService.isFollowingUpdating$.next(false);
            (0,_scripts_background_charon_api_message_bus_map__WEBPACK_IMPORTED_MODULE_1__.assertMessageResponseSuccess)(response);
        }));
    }
    unfollow(whom) {
        const wallet = this.authService.getActiveUserInstant().wallet;
        FollowingService.isFollowingUpdating$.next(true);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.defer)(() => new _shared_message_bus__WEBPACK_IMPORTED_MODULE_0__.MessageBus().sendMessage(_scripts_messages__WEBPACK_IMPORTED_MODULE_2__.MessageCode.Unfollow, {
            request: {
                owner: wallet.address,
                whom,
            },
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((response) => {
            FollowingService.isFollowingUpdating$.next(false);
            (0,_scripts_background_charon_api_message_bus_map__WEBPACK_IMPORTED_MODULE_1__.assertMessageResponseSuccess)(response);
        }));
    }
    getFollowees() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([
            this.decentrService.decentrClient,
            this.authService.getActiveUserAddress(),
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(([decentrClient, walletAddress]) => decentrClient.community.getFollowees(walletAddress)));
    }
}
FollowingService.isFollowingUpdating$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(false);
FollowingService.ɵfac = function FollowingService_Factory(t) { return new (t || FollowingService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_auth__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_decentr__WEBPACK_IMPORTED_MODULE_4__.DecentrService)); };
FollowingService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({ token: FollowingService, factory: FollowingService.ɵfac });


/***/ }),

/***/ 59340:
/*!******************************************************************!*\
  !*** ./projects/charon/src/app/core/services/following/index.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FollowingService": () => (/* reexport safe */ _following_service__WEBPACK_IMPORTED_MODULE_0__.FollowingService)
/* harmony export */ });
/* harmony import */ var _following_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./following.service */ 81378);



/***/ }),

/***/ 80936:
/*!********************************************************************!*\
  !*** ./projects/charon/src/app/core/services/help/help.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpService": () => (/* binding */ HelpService)
/* harmony export */ });
/* harmony import */ var _shared_utils_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/utils/browser */ 94240);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _environments_environment_definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @environments/environment.definitions */ 41380);



class HelpService {
    constructor(environment) {
        this.environment = environment;
    }
    get beacon() {
        // eslint-disable-next-line @typescript-eslint/dot-notation
        return window['Beacon'];
    }
    initialize() {
        if (!(0,_shared_utils_browser__WEBPACK_IMPORTED_MODULE_0__.isOpenedInTab)()) {
            return;
        }
        const script = document.createElement('script');
        script.src = 'scripts/help-beacon.js';
        const container = document.head || document.documentElement;
        container.insertBefore(script, container.children[0]);
        if (this.beacon) {
            this.initBeacon();
        }
        else {
            script.addEventListener('load', () => this.initBeacon());
        }
    }
    initBeacon() {
        this.beacon('init', this.environment.help);
    }
}
HelpService.ɵfac = function HelpService_Factory(t) { return new (t || HelpService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_environments_environment_definitions__WEBPACK_IMPORTED_MODULE_1__.Environment)); };
HelpService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: HelpService, factory: HelpService.ɵfac });


/***/ }),

/***/ 60813:
/*!*************************************************************!*\
  !*** ./projects/charon/src/app/core/services/help/index.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpService": () => (/* reexport safe */ _help_service__WEBPACK_IMPORTED_MODULE_0__.HelpService)
/* harmony export */ });
/* harmony import */ var _help_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help.service */ 80936);



/***/ }),

/***/ 51916:
/*!****************************************************************************************!*\
  !*** ./projects/charon/src/app/core/services/image-uploader/image-uploader.service.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageUploaderService": () => (/* binding */ ImageUploaderService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 65619);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auth */ 51519);
/* harmony import */ var _decentr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decentr */ 66069);




class ImageUploaderService {
    constructor(authService, decentrService) {
        this.authService = authService;
        this.decentrService = decentrService;
    }
    upload(image) {
        const wallet = this.authService.getActiveUserInstant().wallet;
        return this.decentrService.cerberusClient.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)((cerberusClient) => cerberusClient.image.save(image, wallet.privateKey)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((response) => response.hd));
    }
}
ImageUploaderService.ɵfac = function ImageUploaderService_Factory(t) { return new (t || ImageUploaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_auth__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_decentr__WEBPACK_IMPORTED_MODULE_1__.DecentrService)); };
ImageUploaderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ImageUploaderService, factory: ImageUploaderService.ɵfac });


/***/ }),

/***/ 9670:
/*!***********************************************************************!*\
  !*** ./projects/charon/src/app/core/services/image-uploader/index.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageUploaderService": () => (/* reexport safe */ _image_uploader_service__WEBPACK_IMPORTED_MODULE_0__.ImageUploaderService)
/* harmony export */ });
/* harmony import */ var _image_uploader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-uploader.service */ 51916);



/***/ }),

/***/ 88718:
/*!********************************************************!*\
  !*** ./projects/charon/src/app/core/services/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BankService": () => (/* reexport safe */ _bank__WEBPACK_IMPORTED_MODULE_1__.BankService),
/* harmony export */   "BlocksService": () => (/* reexport safe */ _blocks__WEBPACK_IMPORTED_MODULE_2__.BlocksService),
/* harmony export */   "CORE_SERVICES": () => (/* binding */ CORE_SERVICES),
/* harmony export */   "CurrencyService": () => (/* reexport safe */ _currency__WEBPACK_IMPORTED_MODULE_3__.CurrencyService),
/* harmony export */   "DEFAULT_DENOM": () => (/* reexport safe */ _sentinel__WEBPACK_IMPORTED_MODULE_14__.DEFAULT_DENOM),
/* harmony export */   "DecentrService": () => (/* reexport safe */ _decentr__WEBPACK_IMPORTED_MODULE_4__.DecentrService),
/* harmony export */   "DistributionService": () => (/* reexport safe */ _distribution__WEBPACK_IMPORTED_MODULE_5__.DistributionService),
/* harmony export */   "FollowingService": () => (/* reexport safe */ _following__WEBPACK_IMPORTED_MODULE_6__.FollowingService),
/* harmony export */   "HelpService": () => (/* reexport safe */ _help__WEBPACK_IMPORTED_MODULE_7__.HelpService),
/* harmony export */   "IbcRequestParams": () => (/* reexport safe */ _bank__WEBPACK_IMPORTED_MODULE_1__.IbcRequestParams),
/* harmony export */   "ImageUploaderService": () => (/* reexport safe */ _image_uploader__WEBPACK_IMPORTED_MODULE_8__.ImageUploaderService),
/* harmony export */   "MenuService": () => (/* reexport safe */ _menu__WEBPACK_IMPORTED_MODULE_18__.MenuService),
/* harmony export */   "NetworkSelectorService": () => (/* reexport safe */ _network_selector__WEBPACK_IMPORTED_MODULE_9__.NetworkSelectorService),
/* harmony export */   "NetworkService": () => (/* reexport safe */ _network__WEBPACK_IMPORTED_MODULE_10__.NetworkService),
/* harmony export */   "PDVService": () => (/* reexport safe */ _pdv__WEBPACK_IMPORTED_MODULE_11__.PDVService),
/* harmony export */   "PostsService": () => (/* reexport safe */ _posts__WEBPACK_IMPORTED_MODULE_12__.PostsService),
/* harmony export */   "ReferralService": () => (/* reexport safe */ _referral__WEBPACK_IMPORTED_MODULE_13__.ReferralService),
/* harmony export */   "SENTINEL_DENOM": () => (/* reexport safe */ _sentinel__WEBPACK_IMPORTED_MODULE_14__.SENTINEL_DENOM),
/* harmony export */   "SentinelService": () => (/* reexport safe */ _sentinel__WEBPACK_IMPORTED_MODULE_14__.SentinelService),
/* harmony export */   "SpinnerService": () => (/* reexport safe */ _spinner__WEBPACK_IMPORTED_MODULE_15__.SpinnerService),
/* harmony export */   "StakingService": () => (/* reexport safe */ _staking__WEBPACK_IMPORTED_MODULE_16__.StakingService),
/* harmony export */   "UserService": () => (/* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_17__.UserService)
/* harmony export */ });
/* harmony import */ var _shared_services_blockchain_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/blockchain-node */ 32882);
/* harmony import */ var _bank__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bank */ 24036);
/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks */ 9063);
/* harmony import */ var _currency__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./currency */ 84879);
/* harmony import */ var _decentr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decentr */ 66069);
/* harmony import */ var _distribution__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./distribution */ 50241);
/* harmony import */ var _following__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./following */ 59340);
/* harmony import */ var _help__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./help */ 60813);
/* harmony import */ var _image_uploader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./image-uploader */ 9670);
/* harmony import */ var _network_selector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./network-selector */ 98022);
/* harmony import */ var _network__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./network */ 83592);
/* harmony import */ var _pdv__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pdv */ 39460);
/* harmony import */ var _posts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./posts */ 11002);
/* harmony import */ var _referral__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./referral */ 93831);
/* harmony import */ var _sentinel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sentinel */ 17762);
/* harmony import */ var _spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./spinner */ 54338);
/* harmony import */ var _staking__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./staking */ 33712);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user */ 99604);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./menu */ 82702);




































const CORE_SERVICES = [
    _bank__WEBPACK_IMPORTED_MODULE_1__.BankService,
    _shared_services_blockchain_node__WEBPACK_IMPORTED_MODULE_0__.BlockchainNodeService,
    _blocks__WEBPACK_IMPORTED_MODULE_2__.BlocksService,
    _decentr__WEBPACK_IMPORTED_MODULE_4__.DecentrService,
    _currency__WEBPACK_IMPORTED_MODULE_3__.CurrencyService,
    _distribution__WEBPACK_IMPORTED_MODULE_5__.DistributionService,
    _following__WEBPACK_IMPORTED_MODULE_6__.FollowingService,
    _help__WEBPACK_IMPORTED_MODULE_7__.HelpService,
    _image_uploader__WEBPACK_IMPORTED_MODULE_8__.ImageUploaderService,
    _network_selector__WEBPACK_IMPORTED_MODULE_9__.NetworkSelectorService,
    _network__WEBPACK_IMPORTED_MODULE_10__.NetworkService,
    _pdv__WEBPACK_IMPORTED_MODULE_11__.PDVService,
    _posts__WEBPACK_IMPORTED_MODULE_12__.PostsService,
    _referral__WEBPACK_IMPORTED_MODULE_13__.ReferralService,
    _sentinel__WEBPACK_IMPORTED_MODULE_14__.SentinelService,
    _spinner__WEBPACK_IMPORTED_MODULE_15__.SpinnerService,
    _staking__WEBPACK_IMPORTED_MODULE_16__.StakingService,
    _user__WEBPACK_IMPORTED_MODULE_17__.UserService,
];


/***/ }),

/***/ 82702:
/*!*************************************************************!*\
  !*** ./projects/charon/src/app/core/services/menu/index.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuService": () => (/* reexport safe */ _menu_service__WEBPACK_IMPORTED_MODULE_0__.MenuService)
/* harmony export */ });
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.service */ 80809);



/***/ }),

/***/ 80809:
/*!********************************************************************!*\
  !*** ./projects/charon/src/app/core/services/menu/menu.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuService": () => (/* binding */ MenuService)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 45113);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 15696);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs */ 9018);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 74970);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 66466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 61528);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 51927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs/operators */ 65619);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs/operators */ 33568);
/* harmony import */ var _shared_components_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/components/menu */ 91009);
/* harmony import */ var _shared_utils_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/utils/browser */ 94240);
/* harmony import */ var _app_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app-route */ 4473);
/* harmony import */ var _hub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hub */ 7437);
/* harmony import */ var _shared_svg_icons_decentr_hub__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/svg-icons/decentr-hub */ 33307);
/* harmony import */ var _shared_svg_icons_import_account__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/svg-icons/import-account */ 13475);
/* harmony import */ var _shared_svg_icons_information__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/svg-icons/information */ 94229);
/* harmony import */ var _shared_svg_icons_lock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/svg-icons/lock */ 78859);
/* harmony import */ var _shared_svg_icons_logo_icon_orange__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/svg-icons/logo-icon-orange */ 96895);
/* harmony import */ var _shared_svg_icons_logo_icon_pink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/svg-icons/logo-icon-pink */ 74709);
/* harmony import */ var _shared_svg_icons_logo_icon_green__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/svg-icons/logo-icon-green */ 48469);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../auth */ 51519);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @core/services */ 88718);
/* harmony import */ var _environments_environment_definitions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @environments/environment.definitions */ 41380);
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../navigation */ 12089);
/* harmony import */ var _lock__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../lock */ 86126);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ngneat/transloco */ 47860);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../user */ 99604);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ngneat/svg-icon */ 66722);
























const DECENTR_SUPPORT_SITE_URL = 'https://support.decentr.net/';
class MenuService extends _shared_components_menu__WEBPACK_IMPORTED_MODULE_0__.MenuService {
    constructor(authService, bankService, environment, navigationService, pdvService, lockService, router, translocoService, userService, svgIconRegistry) {
        super();
        this.authService = authService;
        this.bankService = bankService;
        this.environment = environment;
        this.navigationService = navigationService;
        this.pdvService = pdvService;
        this.lockService = lockService;
        this.router = router;
        this.translocoService = translocoService;
        this.userService = userService;
        svgIconRegistry.register([
            _shared_svg_icons_decentr_hub__WEBPACK_IMPORTED_MODULE_4__.svgDecentrHub,
            _shared_svg_icons_import_account__WEBPACK_IMPORTED_MODULE_5__.svgImportAccount,
            _shared_svg_icons_information__WEBPACK_IMPORTED_MODULE_6__.svgInformation,
            _shared_svg_icons_lock__WEBPACK_IMPORTED_MODULE_7__.svgLock,
            _shared_svg_icons_logo_icon_green__WEBPACK_IMPORTED_MODULE_10__.svgLogoIconGreen,
            _shared_svg_icons_logo_icon_orange__WEBPACK_IMPORTED_MODULE_8__.svgLogoIconOrange,
            _shared_svg_icons_logo_icon_pink__WEBPACK_IMPORTED_MODULE_9__.svgLogoIconPink,
        ]);
        this.profile$ = this.getProfile().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.filter)((profile) => !!profile), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.shareReplay)(1));
    }
    getUserProfile() {
        return this.profile$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.map)((profile) => ({
            avatar: profile.avatar,
            title: `${profile.firstName} ${profile.lastName ? profile.lastName.slice(0, 1) + '.' : ''}`,
        })));
    }
    getItems() {
        return this.translocoService.selectTranslateObject('menu.items', null, 'core')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.map)((itemsTranslationsObject) => [
            [
                {
                    action: () => this.router.navigate(['/', _app_route__WEBPACK_IMPORTED_MODULE_2__.AppRoute.Hub]),
                    description: itemsTranslationsObject.decentr_hub.description,
                    iconKey: _shared_svg_icons_decentr_hub__WEBPACK_IMPORTED_MODULE_4__.svgDecentrHub.name,
                    title: itemsTranslationsObject.decentr_hub.title,
                },
                {
                    action: () => this.router.navigate(['/', _app_route__WEBPACK_IMPORTED_MODULE_2__.AppRoute.Hub, _hub__WEBPACK_IMPORTED_MODULE_3__.HubRoute.Feed]),
                    description: itemsTranslationsObject.decentr_feed.description,
                    iconKey: _shared_svg_icons_logo_icon_pink__WEBPACK_IMPORTED_MODULE_9__.svgLogoIconPink.name,
                    title: itemsTranslationsObject.decentr_feed.title,
                },
                {
                    action: () => (0,_shared_utils_browser__WEBPACK_IMPORTED_MODULE_1__.isOpenedInTab)()
                        ? this.router.navigate(['/', _app_route__WEBPACK_IMPORTED_MODULE_2__.AppRoute.Portal])
                        : this.navigationService.openInNewTab(`/${_app_route__WEBPACK_IMPORTED_MODULE_2__.AppRoute.Portal}`),
                    description: itemsTranslationsObject.decentr_portal.description,
                    iconKey: _shared_svg_icons_logo_icon_orange__WEBPACK_IMPORTED_MODULE_8__.svgLogoIconOrange.name,
                    title: itemsTranslationsObject.decentr_portal.title,
                },
            ],
            [
                {
                    action: () => window.open(this.environment.explorer, '_blank'),
                    description: itemsTranslationsObject.decentr_explorer.description,
                    iconKey: _shared_svg_icons_logo_icon_green__WEBPACK_IMPORTED_MODULE_10__.svgLogoIconGreen.name,
                    title: itemsTranslationsObject.decentr_explorer.title,
                },
            ],
            [
                {
                    action: () => window.open(DECENTR_SUPPORT_SITE_URL, '_blank'),
                    iconKey: _shared_svg_icons_information__WEBPACK_IMPORTED_MODULE_6__.svgInformation.name,
                    title: itemsTranslationsObject.help,
                },
            ],
            [
                {
                    action: () => this.lockService.lock(),
                    iconKey: _shared_svg_icons_lock__WEBPACK_IMPORTED_MODULE_7__.svgLock.name,
                    title: itemsTranslationsObject.lock,
                },
            ],
        ]));
    }
    getUserItem() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.combineLatest)([
            this.getUserProfile(),
            this.pdvService.getBalance(),
            this.getDECBalance(),
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.map)(([user, pdvValue, decValue]) => ({
            decValue,
            pdvValue,
            action: () => this.router.navigate(['/', _app_route__WEBPACK_IMPORTED_MODULE_2__.AppRoute.User]),
            title: user.title,
        })));
    }
    getDECBalance() {
        return this.bankService.getDECBalance().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.map)(parseFloat));
    }
    getTranslations() {
        return this.translocoService.selectTranslateObject('menu', null, 'core');
    }
    getCloseSource() {
        return this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.filter)((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_21__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.map)(() => void 0));
    }
    getProfile() {
        return this.authService.getActiveUserAddress().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.switchMap)((walletAddress) => this.userService.onProfileChanged(walletAddress).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.startWith)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.mergeMap)(() => this.userService.getProfile(walletAddress)))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.catchError)(() => rxjs__WEBPACK_IMPORTED_MODULE_26__.EMPTY));
    }
}
MenuService.ɵfac = function MenuService_Factory(t) { return new (t || MenuService)(_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵinject"](_auth__WEBPACK_IMPORTED_MODULE_11__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_12__.BankService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵinject"](_environments_environment_definitions__WEBPACK_IMPORTED_MODULE_13__.Environment), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵinject"](_navigation__WEBPACK_IMPORTED_MODULE_14__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_12__.PDVService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵinject"](_lock__WEBPACK_IMPORTED_MODULE_15__.LockService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵinject"](_ngneat_transloco__WEBPACK_IMPORTED_MODULE_28__.TranslocoService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵinject"](_user__WEBPACK_IMPORTED_MODULE_16__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵinject"](_ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_29__.SvgIconRegistry)); };
MenuService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineInjectable"]({ token: MenuService, factory: MenuService.ɵfac });


/***/ }),

/***/ 98022:
/*!*************************************************************************!*\
  !*** ./projects/charon/src/app/core/services/network-selector/index.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkSelectorService": () => (/* reexport safe */ _network_selector_service__WEBPACK_IMPORTED_MODULE_0__.NetworkSelectorService)
/* harmony export */ });
/* harmony import */ var _network_selector_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./network-selector.service */ 85941);



/***/ }),

/***/ 85941:
/*!********************************************************************************************!*\
  !*** ./projects/charon/src/app/core/services/network-selector/network-selector.service.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkSelectorService": () => (/* binding */ NetworkSelectorService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 15696);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 11588);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 61528);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/until-destroy */ 78177);
/* harmony import */ var _shared_components_network_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/components/network-selector */ 76505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _shared_services_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/configuration */ 1683);
/* harmony import */ var _shared_services_network_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/network-storage */ 98420);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngneat/transloco */ 47860);









let NetworkSelectorService = class NetworkSelectorService extends _shared_components_network_selector__WEBPACK_IMPORTED_MODULE_0__.NetworkSelectorService {
    constructor(configService, networkStorage, translocoService) {
        super();
        this.configService = configService;
        this.networkStorage = networkStorage;
        this.translocoService = translocoService;
        this.networkStorage.getActiveId().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.skip)(1), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.untilDestroyed)(this)).subscribe(() => location.reload());
    }
    getNetworks() {
        return this.configService.getNetworkIds().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)((networkIds) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)(networkIds.map((networkId) => this.getOptionConfig(networkId)));
        }));
    }
    getActiveNetwork() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([
            this.getNetworks(),
            this.networkStorage.getActiveId(),
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(([networks, activeNetworkId]) => networks.find(({ id }) => id === activeNetworkId)));
    }
    getTranslations() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)(['title', 'default_network'].map((key) => {
            return this.translocoService
                .selectTranslate(`network_selector.${key}`, null, 'core');
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(([title, defaultNetwork]) => ({
            title,
            defaultNetwork,
        })));
    }
    setActiveNetworkId(networkId) {
        return this.networkStorage.setActiveId(networkId);
    }
    getOptionConfig(networkId) {
        return this.translocoService.selectTranslate(`network_selector.network.${networkId}`, null, 'core')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((name) => ({
            id: networkId,
            name,
        })));
    }
};
NetworkSelectorService.ɵfac = function NetworkSelectorService_Factory(t) { return new (t || NetworkSelectorService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_shared_services_configuration__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_shared_services_network_storage__WEBPACK_IMPORTED_MODULE_2__.NetworkBrowserStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngneat_transloco__WEBPACK_IMPORTED_MODULE_9__.TranslocoService)); };
NetworkSelectorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: NetworkSelectorService, factory: NetworkSelectorService.ɵfac });
NetworkSelectorService = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.UntilDestroy)()
], NetworkSelectorService);



/***/ }),

/***/ 83592:
/*!****************************************************************!*\
  !*** ./projects/charon/src/app/core/services/network/index.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkService": () => (/* reexport safe */ _network_service__WEBPACK_IMPORTED_MODULE_0__.NetworkService)
/* harmony export */ });
/* harmony import */ var _network_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./network.service */ 27126);



/***/ }),

/***/ 27126:
/*!**************************************************************************!*\
  !*** ./projects/charon/src/app/core/services/network/network.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkService": () => (/* binding */ NetworkService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 57445);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 21860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 84945);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 15696);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 74970);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _shared_services_configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/configuration */ 1683);
/* harmony import */ var _shared_services_network_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/network-storage */ 98420);





class NetworkService {
    constructor(configService, networkStorage) {
        this.configService = configService;
        this.networkStorage = networkStorage;
    }
    init() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.firstValueFrom)((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(!navigator.onLine), this.configService.getMaintenanceStatus(), this.isAPIInstantiated()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(Boolean), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(() => void 0)));
    }
    getActiveNetworkAPI() {
        return this.networkStorage.getActiveAPI();
    }
    getActiveNetworkId() {
        return this.networkStorage.getActiveId();
    }
    isAPIInstantiated() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([
            this.configService.getRestNodes(),
            this.networkStorage.getActiveAPI(),
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(([restNodes, activeNode]) => restNodes.includes(activeNode)));
    }
}
NetworkService.ɵfac = function NetworkService_Factory(t) { return new (t || NetworkService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_shared_services_configuration__WEBPACK_IMPORTED_MODULE_0__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_shared_services_network_storage__WEBPACK_IMPORTED_MODULE_1__.NetworkBrowserStorageService)); };
NetworkService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: NetworkService, factory: NetworkService.ɵfac });


/***/ }),

/***/ 39460:
/*!************************************************************!*\
  !*** ./projects/charon/src/app/core/services/pdv/index.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PDVService": () => (/* reexport safe */ _pdv_service__WEBPACK_IMPORTED_MODULE_1__.PDVService)
/* harmony export */ });
/* harmony import */ var _pdv_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pdv.definitions */ 18442);
/* harmony import */ var _pdv_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pdv.service */ 30604);




/***/ }),

/***/ 18442:
/*!**********************************************************************!*\
  !*** ./projects/charon/src/app/core/services/pdv/pdv.definitions.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 30604:
/*!******************************************************************!*\
  !*** ./projects/charon/src/app/core/services/pdv/pdv.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PDVService": () => (/* binding */ PDVService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 15696);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 84945);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 65619);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 61528);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 51927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 42147);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 33568);
/* harmony import */ var _shared_utils_pdv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/utils/pdv */ 21087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth */ 51519);
/* harmony import */ var _decentr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decentr */ 66069);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 11048);
/* harmony import */ var _shared_services_pdv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services/pdv */ 65466);








class PDVService {
    constructor(authService, decentrService, decimalPipe, pdvStorageService) {
        this.authService = authService;
        this.decentrService = decentrService;
        this.decimalPipe = decimalPipe;
        this.pdvStorageService = pdvStorageService;
    }
    getAdvDdvStats() {
        return this.decentrService.theseusClient.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)((theseusClient) => theseusClient.profile.getAdvDdvStats()));
    }
    getBalance() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([
            this.decentrService.decentrClient,
            this.authService.getActiveUserAddress(),
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(([decentrClient, walletAddress]) => decentrClient.token.getBalance(walletAddress)));
    }
    getBalanceWithMargin() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([
            this.getBalance(),
            this.getPDVStatChartPoints(),
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(([pdvRate, pdvRateHistory]) => ({
            dayMargin: (0,_shared_utils_pdv__WEBPACK_IMPORTED_MODULE_0__.getPDVDayChange)(pdvRateHistory, +pdvRate),
            value: pdvRate,
        })));
    }
    getEstimatedBalance() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([
            this.authService.getActiveUserAddress().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((walletAddress) => this.pdvStorageService.getUserAccumulatedPDVChanges(walletAddress))),
            this.getRewards(),
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(([pDVs, rewards]) => pDVs.reduce((acc, pdv) => acc + +rewards[pdv.type] || 0, 0)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.startWith)('0'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((balance) => this.decimalPipe.transform(balance, '1.6')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)());
    }
    getPDVDelta() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([
            this.decentrService.cerberusClient,
            this.authService.getActiveUserAddress(),
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(([cerberusClient, walletAddress]) => cerberusClient.rewards.getDelta(walletAddress)));
    }
    getPool() {
        return this.decentrService.cerberusClient.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((cerberusClient) => cerberusClient.rewards.getPool()));
    }
    getPDVList(paginationOptions) {
        const walletAddress = this.authService.getActiveUserInstant().wallet.address;
        return this.decentrService.cerberusClient.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((cerberusClient) => cerberusClient.pdv.getPDVList(walletAddress, paginationOptions)));
    }
    getPDVDetails(address) {
        const wallet = this.authService.getActiveUserInstant().wallet;
        return this.decentrService.cerberusClient.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((cerberusClient) => cerberusClient.pdv.getPDVDetails(address, wallet)));
    }
    getPDVStats() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([
            this.decentrService.theseusClient,
            this.authService.getActiveUserAddress(),
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(([theseusClient, walletAddress]) => theseusClient.profile.getProfileStats(walletAddress)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((profileStatistics) => profileStatistics.stats), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)([])));
    }
    getPDVStatChartPoints() {
        return this.getPDVStats().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(_shared_utils_pdv__WEBPACK_IMPORTED_MODULE_0__.mapPDVStatsToChartPoints));
    }
    getRewards() {
        return this.decentrService.cerberusClient.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((cerberusClient) => cerberusClient.configuration.getPDVRewards()));
    }
}
PDVService.ɵfac = function PDVService_Factory(t) { return new (t || PDVService)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_auth__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_decentr__WEBPACK_IMPORTED_MODULE_2__.DecentrService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__.DecimalPipe), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_shared_services_pdv__WEBPACK_IMPORTED_MODULE_3__.PDVStorageService)); };
PDVService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjectable"]({ token: PDVService, factory: PDVService.ɵfac });


/***/ }),

/***/ 11002:
/*!**************************************************************!*\
  !*** ./projects/charon/src/app/core/services/posts/index.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostsService": () => (/* reexport safe */ _posts_service__WEBPACK_IMPORTED_MODULE_1__.PostsService)
/* harmony export */ });
/* harmony import */ var _posts_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts.definitions */ 7398);
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts.service */ 43533);




/***/ }),

/***/ 7398:
/*!**************************************************************************!*\
  !*** ./projects/charon/src/app/core/services/posts/posts.definitions.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 43533:
/*!**********************************************************************!*\
  !*** ./projects/charon/src/app/core/services/posts/posts.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostsService": () => (/* binding */ PostsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 84967);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 84945);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 33072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 89284);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 65619);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 65598);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 98168);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 33568);
/* harmony import */ var _shared_message_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/message-bus */ 73015);
/* harmony import */ var _shared_utils_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/utils/array */ 73578);
/* harmony import */ var _shared_utils_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/utils/date */ 17969);
/* harmony import */ var _shared_utils_uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/utils/uuid */ 30847);
/* harmony import */ var _scripts_background_charon_api_message_bus_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @scripts/background/charon-api/message-bus-map */ 39559);
/* harmony import */ var _scripts_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @scripts/messages */ 41784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../auth */ 51519);
/* harmony import */ var _shared_services_configuration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/services/configuration */ 1683);
/* harmony import */ var _decentr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../decentr */ 66069);
/* harmony import */ var _network__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../network */ 83592);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../user */ 99604);














class PostsService {
    constructor(authService, configService, decentrService, networkService, userService) {
        this.authService = authService;
        this.configService = configService;
        this.decentrService = decentrService;
        this.networkService = networkService;
        this.userService = userService;
    }
    getPost(postIdentificationParameters) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.forkJoin)([
            this.decentrService.theseusClient.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.mergeMap)((theseusClient) => theseusClient.posts.getPost(postIdentificationParameters, this.authService.getActiveUserInstant().wallet.address))),
            this.userService.getProfile(postIdentificationParameters.owner),
            this.configService.getShareUrl(),
            this.networkService.getActiveNetworkId().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1)),
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(([postResponse, profile, shareUrl, networkId]) => (Object.assign(Object.assign({}, postResponse.post), { author: Object.assign(Object.assign({}, profile), { profileExists: !!profile, postsCount: postResponse.profileStats.postsCount }), stats: postResponse.stats || [], shareLink: this.createShareLink(shareUrl, networkId, postResponse.post.slug) }))));
    }
    getPosts(filterOptions) {
        return this.decentrService.theseusClient.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.mergeMap)((theseusClient) => theseusClient.posts.getPosts(Object.assign({ requestedBy: this.authService.getActiveUserInstant().wallet.address }, filterOptions))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.mergeMap)((postsListResponse) => {
            if (!postsListResponse.posts.length) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.of)([]);
            }
            const addresses = (0,_shared_utils_array__WEBPACK_IMPORTED_MODULE_1__.getArrayUniqueValues)(postsListResponse.posts.map(({ owner }) => owner));
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.forkJoin)([
                this.userService.getProfiles(addresses),
                this.configService.getShareUrl(),
                this.networkService.getActiveNetworkId().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1)),
            ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(([profiles, shareUrl, networkId]) => {
                return postsListResponse.posts.map((post) => (Object.assign(Object.assign({}, post), { author: Object.assign(Object.assign({}, profiles[post.owner]), { postsCount: postsListResponse.profileStats[post.owner].postsCount }), stats: postsListResponse.stats[`${post.owner}/${post.uuid}`] || [], shareLink: this.createShareLink(shareUrl, networkId, post.slug) })));
            }));
        }));
    }
    createPost(request) {
        const wallet = this.authService.getActiveUserInstant().wallet;
        const owner = wallet.address;
        const postId = (0,_shared_utils_uuid__WEBPACK_IMPORTED_MODULE_3__.uuid)();
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.defer)(() => new _shared_message_bus__WEBPACK_IMPORTED_MODULE_0__.MessageBus().sendMessage(_scripts_messages__WEBPACK_IMPORTED_MODULE_5__.MessageCode.PostCreate, {
            request: Object.assign(Object.assign({}, request), { owner, uuid: postId }),
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.tap)((response) => console.log(response)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)((response) => (0,_scripts_background_charon_api_message_bus_map__WEBPACK_IMPORTED_MODULE_4__.assertMessageResponseSuccess)(response)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.mergeMap)(() => this.getPost({ owner, uuid: postId }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.retry)({
            count: 20,
            delay: _shared_utils_date__WEBPACK_IMPORTED_MODULE_2__.ONE_SECOND,
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(() => void 0))));
    }
    likePost(post, weight) {
        const wallet = this.authService.getActiveUserInstant().wallet;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.defer)(() => new _shared_message_bus__WEBPACK_IMPORTED_MODULE_0__.MessageBus().sendMessage(_scripts_messages__WEBPACK_IMPORTED_MODULE_5__.MessageCode.PostLike, {
            request: {
                owner: wallet.address,
                postOwner: post.owner,
                postUuid: post.uuid,
                weight,
            },
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(_scripts_background_charon_api_message_bus_map__WEBPACK_IMPORTED_MODULE_4__.assertMessageResponseSuccess));
    }
    deletePost(post) {
        const wallet = this.authService.getActiveUserInstant().wallet;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.defer)(() => new _shared_message_bus__WEBPACK_IMPORTED_MODULE_0__.MessageBus().sendMessage(_scripts_messages__WEBPACK_IMPORTED_MODULE_5__.MessageCode.PostDelete, {
            request: {
                owner: wallet.address,
                postOwner: post.owner,
                postUuid: post.uuid,
            },
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(_scripts_background_charon_api_message_bus_map__WEBPACK_IMPORTED_MODULE_4__.assertMessageResponseSuccess), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.mergeMap)(() => this.getPost(post).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(() => true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.of)(false)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)((postExists) => {
            if (postExists) {
                throw new Error();
            }
            return void 0;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.retry)({
            count: 10,
            delay: _shared_utils_date__WEBPACK_IMPORTED_MODULE_2__.ONE_SECOND,
        }))));
    }
    createShareLink(shareUrl, networkId, slug) {
        return `${shareUrl}`
            + (networkId !== 'mainnet' ? `/${networkId}` : '')
            + `/${slug}`;
    }
}
PostsService.ɵfac = function PostsService_Factory(t) { return new (t || PostsService)(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_auth__WEBPACK_IMPORTED_MODULE_6__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_shared_services_configuration__WEBPACK_IMPORTED_MODULE_7__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_decentr__WEBPACK_IMPORTED_MODULE_8__.DecentrService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_network__WEBPACK_IMPORTED_MODULE_9__.NetworkService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_user__WEBPACK_IMPORTED_MODULE_10__.UserService)); };
PostsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjectable"]({ token: PostsService, factory: PostsService.ɵfac });


/***/ }),

/***/ 93831:
/*!*****************************************************************!*\
  !*** ./projects/charon/src/app/core/services/referral/index.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReferralService": () => (/* reexport safe */ _referral_service__WEBPACK_IMPORTED_MODULE_0__.ReferralService)
/* harmony export */ });
/* harmony import */ var _referral_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./referral.service */ 55405);



/***/ }),

/***/ 55405:
/*!****************************************************************************!*\
  !*** ./projects/charon/src/app/core/services/referral/referral.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReferralService": () => (/* binding */ ReferralService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 15696);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 84945);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 74970);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 61528);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 33568);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services */ 88718);
/* harmony import */ var _core_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/auth */ 51519);





class ReferralService {
    constructor(decentrService, authService) {
        this.decentrService = decentrService;
        this.authService = authService;
    }
    getCode() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.combineLatest)([
            this.authService.getActiveUserAddress().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)((address) => !!address)),
            this.decentrService.vulcanClient,
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(([address, vulcanClient]) => vulcanClient.referral.getCode(address)));
    }
    getConfig() {
        return this.decentrService.vulcanClient.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)((vulcanClient) => vulcanClient.referral.getConfig()));
    }
    getStats() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.combineLatest)([
            this.authService.getActiveUserAddress().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)((address) => !!address)),
            this.decentrService.vulcanClient,
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(([address, vulcanClient]) => vulcanClient.referral.getStats(address)));
    }
    trackInstall(walletAddress) {
        return this.decentrService.vulcanClient.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)((vulcanClient) => vulcanClient.referral.trackInstall(walletAddress)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(void 0)));
    }
}
ReferralService.ɵfac = function ReferralService_Factory(t) { return new (t || ReferralService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.DecentrService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_core_auth__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
ReferralService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: ReferralService, factory: ReferralService.ɵfac });


/***/ }),

/***/ 17762:
/*!*****************************************************************!*\
  !*** ./projects/charon/src/app/core/services/sentinel/index.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_DENOM": () => (/* reexport safe */ _sentinel_definitions__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_DENOM),
/* harmony export */   "SENTINEL_DENOM": () => (/* reexport safe */ _sentinel_definitions__WEBPACK_IMPORTED_MODULE_0__.SENTINEL_DENOM),
/* harmony export */   "SentinelService": () => (/* reexport safe */ _sentinel_service__WEBPACK_IMPORTED_MODULE_1__.SentinelService)
/* harmony export */ });
/* harmony import */ var _sentinel_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sentinel.definitions */ 84539);
/* harmony import */ var _sentinel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sentinel.service */ 82421);




/***/ }),

/***/ 17431:
/*!**************************************************************************!*\
  !*** ./projects/charon/src/app/core/services/sentinel/sentinel-utils.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "countryNameToCode": () => (/* binding */ countryNameToCode)
/* harmony export */ });
const countriesNameCode = [
    { name: 'Afghanistan', code: 'AF' },
    { name: 'Åland Islands', code: 'AX' },
    { name: 'Albania', code: 'AL' },
    { name: 'Algeria', code: 'DZ' },
    { name: 'American Samoa', code: 'AS' },
    { name: 'Andorra', code: 'AD' },
    { name: 'Angola', code: 'AO' },
    { name: 'Anguilla', code: 'AI' },
    { name: 'Antarctica', code: 'AQ' },
    { name: 'Antigua and Barbuda', code: 'AG' },
    { name: 'Argentina', code: 'AR' },
    { name: 'Armenia', code: 'AM' },
    { name: 'Aruba', code: 'AW' },
    { name: 'Australia', code: 'AU' },
    { name: 'Austria', code: 'AT' },
    { name: 'Azerbaijan', code: 'AZ' },
    { name: 'Bahamas', code: 'BS' },
    { name: 'Bahrain', code: 'BH' },
    { name: 'Bangladesh', code: 'BD' },
    { name: 'Barbados', code: 'BB' },
    { name: 'Belarus', code: 'BY' },
    { name: 'Belgium', code: 'BE' },
    { name: 'Belize', code: 'BZ' },
    { name: 'Benin', code: 'BJ' },
    { name: 'Bermuda', code: 'BM' },
    { name: 'Bhutan', code: 'BT' },
    { name: 'Bolivia', code: 'BO' },
    { name: 'Bosnia and Herzegovina', code: 'BA' },
    { name: 'Botswana', code: 'BW' },
    { name: 'Bouvet Island', code: 'BV' },
    { name: 'Brazil', code: 'BR' },
    { name: 'British Indian Ocean Territory', code: 'IO' },
    { name: 'Brunei Darussalam', code: 'BN' },
    { name: 'Bulgaria', code: 'BG' },
    { name: 'Burkina Faso', code: 'BF' },
    { name: 'Burundi', code: 'BI' },
    { name: 'Cambodia', code: 'KH' },
    { name: 'Cameroon', code: 'CM' },
    { name: 'Canada', code: 'CA' },
    { name: 'Cape Verde', code: 'CV' },
    { name: 'Cayman Islands', code: 'KY' },
    { name: 'Central African Republic', code: 'CF' },
    { name: 'Chad', code: 'TD' },
    { name: 'Chile', code: 'CL' },
    { name: 'China', code: 'CN' },
    { name: 'Christmas Island', code: 'CX' },
    { name: 'Cocos (Keeling) Islands', code: 'CC' },
    { name: 'Colombia', code: 'CO' },
    { name: 'Comoros', code: 'KM' },
    { name: 'Congo', code: 'CG' },
    { name: 'Congo, The Democratic Republic of the', code: 'CD' },
    { name: 'Cook Islands', code: 'CK' },
    { name: 'Costa Rica', code: 'CR' },
    { name: 'Cote D\'Ivoire', code: 'CI' },
    { name: 'Croatia', code: 'HR' },
    { name: 'Cuba', code: 'CU' },
    { name: 'Cyprus', code: 'CY' },
    { name: 'Czechia', code: 'CZ' },
    { name: 'Czech Republic', code: 'CZ' },
    { name: 'Denmark', code: 'DK' },
    { name: 'Djibouti', code: 'DJ' },
    { name: 'Dominica', code: 'DM' },
    { name: 'Dominican Republic', code: 'DO' },
    { name: 'Ecuador', code: 'EC' },
    { name: 'Egypt', code: 'EG' },
    { name: 'El Salvador', code: 'SV' },
    { name: 'Equatorial Guinea', code: 'GQ' },
    { name: 'Eritrea', code: 'ER' },
    { name: 'Estonia', code: 'EE' },
    { name: 'Ethiopia', code: 'ET' },
    { name: 'Falkland Islands (Malvinas)', code: 'FK' },
    { name: 'Faroe Islands', code: 'FO' },
    { name: 'Fiji', code: 'FJ' },
    { name: 'Finland', code: 'FI' },
    { name: 'France', code: 'FR' },
    { name: 'French Guiana', code: 'GF' },
    { name: 'French Polynesia', code: 'PF' },
    { name: 'French Southern Territories', code: 'TF' },
    { name: 'Gabon', code: 'GA' },
    { name: 'Gambia', code: 'GM' },
    { name: 'Georgia', code: 'GE' },
    { name: 'Germany', code: 'DE' },
    { name: 'Ghana', code: 'GH' },
    { name: 'Gibraltar', code: 'GI' },
    { name: 'Greece', code: 'GR' },
    { name: 'Greenland', code: 'GL' },
    { name: 'Grenada', code: 'GD' },
    { name: 'Guadeloupe', code: 'GP' },
    { name: 'Guam', code: 'GU' },
    { name: 'Guatemala', code: 'GT' },
    { name: 'Guernsey', code: 'GG' },
    { name: 'Guinea', code: 'GN' },
    { name: 'Guinea-Bissau', code: 'GW' },
    { name: 'Guyana', code: 'GY' },
    { name: 'Haiti', code: 'HT' },
    { name: 'Heard Island and Mcdonald Islands', code: 'HM' },
    { name: 'Holy See (Vatican City State)', code: 'VA' },
    { name: 'Honduras', code: 'HN' },
    { name: 'Hong Kong', code: 'HK' },
    { name: 'Hungary', code: 'HU' },
    { name: 'Iceland', code: 'IS' },
    { name: 'India', code: 'IN' },
    { name: 'Indonesia', code: 'ID' },
    { name: 'Iran, Islamic Republic Of', code: 'IR' },
    { name: 'Iraq', code: 'IQ' },
    { name: 'Ireland', code: 'IE' },
    { name: 'Isle of Man', code: 'IM' },
    { name: 'Israel', code: 'IL' },
    { name: 'Italy', code: 'IT' },
    { name: 'Jamaica', code: 'JM' },
    { name: 'Japan', code: 'JP' },
    { name: 'Jersey', code: 'JE' },
    { name: 'Jordan', code: 'JO' },
    { name: 'Kazakhstan', code: 'KZ' },
    { name: 'Kenya', code: 'KE' },
    { name: 'Kiribati', code: 'KI' },
    { name: 'Korea, Democratic People\'S Republic of', code: 'KP' },
    { name: 'Korea, Republic of', code: 'KR' },
    { name: 'South Korea', code: 'KR' },
    { name: 'Kuwait', code: 'KW' },
    { name: 'Kyrgyzstan', code: 'KG' },
    { name: 'Lao People\'S Democratic Republic', code: 'LA' },
    { name: 'Latvia', code: 'LV' },
    { name: 'Lebanon', code: 'LB' },
    { name: 'Lesotho', code: 'LS' },
    { name: 'Liberia', code: 'LR' },
    { name: 'Libyan Arab Jamahiriya', code: 'LY' },
    { name: 'Liechtenstein', code: 'LI' },
    { name: 'Lithuania', code: 'LT' },
    { name: 'Luxembourg', code: 'LU' },
    { name: 'Macao', code: 'MO' },
    { name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK' },
    { name: 'Madagascar', code: 'MG' },
    { name: 'Malawi', code: 'MW' },
    { name: 'Malaysia', code: 'MY' },
    { name: 'Maldives', code: 'MV' },
    { name: 'Mali', code: 'ML' },
    { name: 'Malta', code: 'MT' },
    { name: 'Marshall Islands', code: 'MH' },
    { name: 'Martinique', code: 'MQ' },
    { name: 'Mauritania', code: 'MR' },
    { name: 'Mauritius', code: 'MU' },
    { name: 'Mayotte', code: 'YT' },
    { name: 'Mexico', code: 'MX' },
    { name: 'Micronesia, Federated States of', code: 'FM' },
    { name: 'Moldova', code: 'MD' },
    { name: 'Moldova, Republic of', code: 'MD' },
    { name: 'Monaco', code: 'MC' },
    { name: 'Mongolia', code: 'MN' },
    { name: 'Montserrat', code: 'MS' },
    { name: 'Morocco', code: 'MA' },
    { name: 'Mozambique', code: 'MZ' },
    { name: 'Myanmar', code: 'MM' },
    { name: 'Namibia', code: 'NA' },
    { name: 'Nauru', code: 'NR' },
    { name: 'Nepal', code: 'NP' },
    { name: 'Netherlands', code: 'NL' },
    { name: 'Netherlands Antilles', code: 'AN' },
    { name: 'New Caledonia', code: 'NC' },
    { name: 'New Zealand', code: 'NZ' },
    { name: 'Nicaragua', code: 'NI' },
    { name: 'Niger', code: 'NE' },
    { name: 'Nigeria', code: 'NG' },
    { name: 'Niue', code: 'NU' },
    { name: 'Norfolk Island', code: 'NF' },
    { name: 'Northern Mariana Islands', code: 'MP' },
    { name: 'Norway', code: 'NO' },
    { name: 'Oman', code: 'OM' },
    { name: 'Pakistan', code: 'PK' },
    { name: 'Palau', code: 'PW' },
    { name: 'Palestinian Territory, Occupied', code: 'PS' },
    { name: 'Panama', code: 'PA' },
    { name: 'Papua New Guinea', code: 'PG' },
    { name: 'Paraguay', code: 'PY' },
    { name: 'Peru', code: 'PE' },
    { name: 'Philippines', code: 'PH' },
    { name: 'Pitcairn', code: 'PN' },
    { name: 'Poland', code: 'PL' },
    { name: 'Portugal', code: 'PT' },
    { name: 'Puerto Rico', code: 'PR' },
    { name: 'Qatar', code: 'QA' },
    { name: 'Reunion', code: 'RE' },
    { name: 'Romania', code: 'RO' },
    { name: 'Russia', code: 'RU' },
    { name: 'Russian Federation', code: 'RU' },
    { name: 'RWANDA', code: 'RW' },
    { name: 'Saint Helena', code: 'SH' },
    { name: 'Saint Kitts and Nevis', code: 'KN' },
    { name: 'Saint Lucia', code: 'LC' },
    { name: 'Saint Pierre and Miquelon', code: 'PM' },
    { name: 'Saint Vincent and the Grenadines', code: 'VC' },
    { name: 'Samoa', code: 'WS' },
    { name: 'San Marino', code: 'SM' },
    { name: 'Sao Tome and Principe', code: 'ST' },
    { name: 'Saudi Arabia', code: 'SA' },
    { name: 'Senegal', code: 'SN' },
    { name: 'Serbia and Montenegro', code: 'CS' },
    { name: 'Seychelles', code: 'SC' },
    { name: 'Sierra Leone', code: 'SL' },
    { name: 'Singapore', code: 'SG' },
    { name: 'Slovakia', code: 'SK' },
    { name: 'Slovenia', code: 'SI' },
    { name: 'Solomon Islands', code: 'SB' },
    { name: 'Somalia', code: 'SO' },
    { name: 'South Africa', code: 'ZA' },
    { name: 'South Georgia and the South Sandwich Islands', code: 'GS' },
    { name: 'Spain', code: 'ES' },
    { name: 'Sri Lanka', code: 'LK' },
    { name: 'Sudan', code: 'SD' },
    { name: 'Suriname', code: 'SR' },
    { name: 'Svalbard and Jan Mayen', code: 'SJ' },
    { name: 'Swaziland', code: 'SZ' },
    { name: 'Sweden', code: 'SE' },
    { name: 'Switzerland', code: 'CH' },
    { name: 'Syrian Arab Republic', code: 'SY' },
    { name: 'Taiwan, Province of China', code: 'TW' },
    { name: 'Tajikistan', code: 'TJ' },
    { name: 'Tanzania, United Republic of', code: 'TZ' },
    { name: 'Thailand', code: 'TH' },
    { name: 'Timor-Leste', code: 'TL' },
    { name: 'Togo', code: 'TG' },
    { name: 'Tokelau', code: 'TK' },
    { name: 'Tonga', code: 'TO' },
    { name: 'Trinidad and Tobago', code: 'TT' },
    { name: 'Tunisia', code: 'TN' },
    { name: 'Turkey', code: 'TR' },
    { name: 'Turkmenistan', code: 'TM' },
    { name: 'Turks and Caicos Islands', code: 'TC' },
    { name: 'Tuvalu', code: 'TV' },
    { name: 'Uganda', code: 'UG' },
    { name: 'Ukraine', code: 'UA' },
    { name: 'United Arab Emirates', code: 'AE' },
    { name: 'United Kingdom', code: 'GB' },
    { name: 'United States', code: 'US' },
    { name: 'United States Minor Outlying Islands', code: 'UM' },
    { name: 'Uruguay', code: 'UY' },
    { name: 'Uzbekistan', code: 'UZ' },
    { name: 'Vanuatu', code: 'VU' },
    { name: 'Venezuela', code: 'VE' },
    { name: 'Viet Nam', code: 'VN' },
    { name: 'Virgin Islands, British', code: 'VG' },
    { name: 'Virgin Islands, U.S.', code: 'VI' },
    { name: 'Wallis and Futuna', code: 'WF' },
    { name: 'Western Sahara', code: 'EH' },
    { name: 'Yemen', code: 'YE' },
    { name: 'Zambia', code: 'ZM' },
    { name: 'Zimbabwe', code: 'ZW' },
];
const countryNameToCode = (value) => {
    var _a;
    return (((_a = countriesNameCode.find((country) => country.name === value)) === null || _a === void 0 ? void 0 : _a.code) || '').toLowerCase();
};


/***/ }),

/***/ 84539:
/*!********************************************************************************!*\
  !*** ./projects/charon/src/app/core/services/sentinel/sentinel.definitions.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_DENOM": () => (/* binding */ DEFAULT_DENOM),
/* harmony export */   "SENTINEL_DENOM": () => (/* binding */ SENTINEL_DENOM)
/* harmony export */ });
/* harmony import */ var _shared_pipes_price_price_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/pipes/price/price.definitions */ 89097);

const DEFAULT_DENOM = _shared_pipes_price_price_definitions__WEBPACK_IMPORTED_MODULE_0__.Denom.IBC_DECENTR;
const SENTINEL_DENOM = _shared_pipes_price_price_definitions__WEBPACK_IMPORTED_MODULE_0__.Denom.UDVPN;


/***/ }),

/***/ 82421:
/*!****************************************************************************!*\
  !*** ./projects/charon/src/app/core/services/sentinel/sentinel.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SentinelService": () => (/* binding */ SentinelService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 5557);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 61528);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 33072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 84945);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ 84967);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 74372);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 98168);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 74970);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 79676);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 33568);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngneat/until-destroy */ 78177);
/* harmony import */ var decentr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! decentr-js */ 14000);
/* harmony import */ var decentr_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(decentr_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var long__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! long */ 17080);
/* harmony import */ var long__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(long__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scripts_background_charon_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @scripts/background/charon-api */ 77870);
/* harmony import */ var _scripts_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @scripts/messages */ 41784);
/* harmony import */ var _shared_message_bus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/message-bus */ 73015);
/* harmony import */ var _shared_utils_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/utils/http */ 81318);
/* harmony import */ var _shared_utils_date__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/utils/date */ 17969);
/* harmony import */ var _sentinel_definitions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sentinel.definitions */ 84539);
/* harmony import */ var _sentinel_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sentinel-utils */ 17431);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _core_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/auth */ 51519);
/* harmony import */ var _shared_services_configuration__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/services/configuration */ 1683);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/services */ 88718);

















let SentinelService = class SentinelService {
    constructor(authService, configService, decentrService) {
        this.authService = authService;
        this.configService = configService;
        this.decentrService = decentrService;
        this.sentinelClient$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__.ReplaySubject(1);
        this.configService.getVpnUrl(true).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.combineLatestWith)(this.authService.getActiveUser(), this.configService.getVpnGasPrice(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.tap)(() => this.sentinelClient$.next(undefined)), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.switchMap)(([vpnUrl, user, gasPrice]) => {
            var _a;
            return decentr_js__WEBPACK_IMPORTED_MODULE_0__.SentinelClient.create(vpnUrl, {
                gasPrice: new decentr_js__WEBPACK_IMPORTED_MODULE_0__.Price(decentr_js__WEBPACK_IMPORTED_MODULE_0__.Decimal.fromUserInput(gasPrice, 6), _sentinel_definitions__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_DENOM),
                privateKey: (_a = user === null || user === void 0 ? void 0 : user.wallet) === null || _a === void 0 ? void 0 : _a.privateKey,
            });
        }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_16__.untilDestroyed)(this)).subscribe((client) => this.sentinelClient$.next(client));
    }
    get sentinelWalletAddress() {
        return (0,decentr_js__WEBPACK_IMPORTED_MODULE_0__.transformWalletAddress)(this.authService.getActiveUserInstant().wallet.address, decentr_js__WEBPACK_IMPORTED_MODULE_0__.WalletPrefix.Sentinel);
    }
    get sentinelClient() {
        return this.sentinelClient$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.filter)((client) => !!client), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.first)());
    }
    buildEndSessionRequest(ids) {
        return ids.map((id) => ({
            id,
            from: this.sentinelWalletAddress,
            rating: long__WEBPACK_IMPORTED_MODULE_1___default().fromInt(0),
        }));
    }
    getNodeStatus(nodeUrl) {
        console.log('get status');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.defer)(() => decentr_js__WEBPACK_IMPORTED_MODULE_0__.SentinelClient.getNodeStatus((0,_shared_utils_http__WEBPACK_IMPORTED_MODULE_5__.httpUrl)(nodeUrl), { timeout: _shared_utils_date__WEBPACK_IMPORTED_MODULE_6__.ONE_SECOND * 2 })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.tap)(console.log), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)((node) => (Object.assign(Object.assign({}, node), { countryCode: (0,_sentinel_utils__WEBPACK_IMPORTED_MODULE_8__.countryNameToCode)(node.location.country), 
            // gigabyte_prices: coerceCoin((node as any).gigabyte_prices).find((price) => price.denom === DEFAULT_DENOM),
            // hourly_prices: coerceCoin((node as any).hourly_prices).find((price) => price.denom === DEFAULT_DENOM),
            remoteUrl: nodeUrl }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.of)(undefined)));
    }
    // public getNodes(denom?: string): Observable<any> {
    //   return this.sentinelClient.pipe(
    //     switchMap((client) => forkJoin([
    //       client.node.getNodes(SentinelStatus.STATUS_ACTIVE),
    //       this.configService.getVpnFilterLists(),
    //     ])),
    //     map(([nodes, filterLists]) => {
    //       return (nodes)
    //         .filter((node) => !filterLists.blackList.includes(node.address))
    //         .filter((node) => !filterLists.whiteList.length || filterLists.whiteList.includes(node.address))
    //         .filter((node) => !denom || node.gigabytePrices.some((coin) => coin.denom === denom))
    //     }),
    //   );
    //
    //   return this.decentrService.meileClient.pipe(
    //     switchMap((client) => client.subscriptionPlan.getPlans()),
    //   )
    // }
    getMaileSubscriptionsForAddress() {
        return this.decentrService.meileClient.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.switchMap)((client) => client.subscriptionPlan.getSubscriptionsForAddress(this.sentinelWalletAddress)));
    }
    getNodes() {
        return this.decentrService.meileClient.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.switchMap)((client) => client.subscriptionPlan.getPlans()), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.switchMap)((plans) => (0,rxjs__WEBPACK_IMPORTED_MODULE_23__.forkJoin)(plans
            // @ts-ignore
            .filter(plan => {
            console.log(plan);
            return new Date(plan.expiration_date) > new Date();
        })
            .map((plan) => {
            return this.getNodesForPlan(new (long__WEBPACK_IMPORTED_MODULE_1___default())(plan.plan_id)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)((nodes) => nodes.map((node) => (Object.assign(Object.assign({}, node), { status$: this.getNodeStatus(node.remoteUrl) })))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)((nodesWithStatus) => (Object.assign(Object.assign({}, plan), { nodes: nodesWithStatus }))));
        }))));
        // return this.sentinelClient.pipe(
        //    switchMap((client) => client.plan.getPlan({id: new Long(27)})),
        //    switchMap((plan) => this.getNodesForPlan(plan.id).pipe(
        //      map((nodes) => {
        //        return {
        //          ...plan,
        //          nodes: nodes.map(node => {
        //            return {
        //              ...node,
        //              status$: this.getNodeStatus(node.remoteUrl),
        //            }
        //          })
        //        }
        //      })
        //    ))
        //  )
        // console.log('asdasd')
        // this.getSubscriptionsForAddress().subscribe(res => {
        //   console.log('subs');
        //   console.log(res)
        // });
        // this.getSessionsForAddress().subscribe(res => {
        //   console.log('sess');
        //   console.log(res)
        // })
        // return this.decentrService.meileClient.pipe(
        //   switchMap((client: any) => {
        //     return from(client.subscriptionPlan.getPlans()).pipe(
        //       switchMap((plans: MeilePlan[]) => {
        //         const planObservables: Observable<PlanWithNodes>[] = plans.map((plan) => {
        //           return from(client.subscriptionPlan.getNodesForPlan(plan.uuid)).pipe(
        //             map((nodes: any) => {
        //               let nodeAddresses = nodes.flat().map(nodeAddress => this.getNode(nodeAddress).pipe(map((node) => {
        //                 return {
        //                   ...node,
        //                   status$: this.getNodeStatus(node.remoteUrl),
        //                 }
        //               })));
        //
        //               return {
        //                 ...plan,
        //                 nodes: nodeAddresses, // Flatten the array of arrays
        //               };
        //             })
        //           );
        //         });
        //         return forkJoin(planObservables);
        //       }),
        //     );
        //   }),
        // );
    }
    getNode(address) {
        return this.sentinelClient.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.switchMap)((client) => client.node.getNode(address)));
    }
    getNodesForPlan(id) {
        return this.sentinelClient.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.switchMap)((client) => client.node.getNodesForPlan(id)));
    }
    getSubscriptionsForAddress() {
        return this.sentinelClient.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.switchMap)((client) => client.subscription.getSubscriptionsForAddress({
            address: this.sentinelWalletAddress,
        })));
    }
    getSubscriptionById(id) {
        return this.sentinelClient.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.switchMap)((client) => client.subscription.getSubscription({
            id: new (long__WEBPACK_IMPORTED_MODULE_1___default())(id),
        })));
    }
    getSessionsForAddress() {
        return this.sentinelClient.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.switchMap)((client) => client.session.getSessionsForAddress({
            address: this.sentinelWalletAddress,
        })));
    }
    getSessionsForAllocation(id, address) {
        return this.sentinelClient.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.switchMap)((client) => client.session.getSessionsForAllocation({
            id: new (long__WEBPACK_IMPORTED_MODULE_1___default())(id),
            address: this.sentinelWalletAddress,
        })));
    }
    getSessionsForSubscription(id) {
        return this.sentinelClient.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.switchMap)((client) => client.session.getSessionsForSubscription({
            id: id,
        })));
    }
    getDeposit(address) {
        return this.sentinelClient.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.switchMap)((client) => client.deposit.getDeposit(address)));
    }
    getQuota(subscriptionId) {
        return this.sentinelClient.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.switchMap)((client) => client.subscription.getQuota({
            id: subscriptionId,
            address: this.sentinelWalletAddress,
        })));
    }
    getQuotas(subscriptionId) {
        return this.sentinelClient.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.switchMap)((client) => client.subscription.getQuotas({ id: subscriptionId })));
    }
    getSentinelBalance() {
        return this.sentinelClient.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.switchMap)((client) => client.bank.getBalance(this.sentinelWalletAddress)));
    }
    getBalance() {
        return this.decentrService.athenaClient.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.switchMap)((athenaClient) => athenaClient.balance.getBalance({ userWallet: this.sentinelWalletAddress })));
    }
    addSession(nodeUrl, sessionId) {
        return this.sentinelClient.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.switchMap)((client) => client.session.addSession((0,_shared_utils_http__WEBPACK_IMPORTED_MODULE_5__.httpUrl)(nodeUrl), sessionId)));
    }
    subscribeToPlan(planSubscription) {
        return this.decentrService.meileClient.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.switchMap)((client) => client.subscriptionPlan.addWalletToPlan({
            data: Object.assign(Object.assign({}, planSubscription.data), { wallet: this.sentinelWalletAddress })
        })));
    }
    decreaseBalance(deposit) {
        return this.decentrService.athenaClient.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.switchMap)((client) => client.balance.decrease({
            sentinelWallet: this.sentinelWalletAddress,
            amountPaid: deposit,
        })));
    }
    subscribeToNode(nodeAddress, deposit, nodeStatus) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.defer)(() => new _shared_message_bus__WEBPACK_IMPORTED_MODULE_4__.MessageBus().sendMessage(_scripts_messages__WEBPACK_IMPORTED_MODULE_3__.MessageCode.SentinelSubscribeToNode, {
            request: {
                from: this.sentinelWalletAddress,
                nodeAddress: nodeAddress,
                gigabytes: long__WEBPACK_IMPORTED_MODULE_1___default().fromNumber(+deposit.amount / nodeStatus.gigabyte_prices.amount),
                denom: deposit.denom,
            },
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(_scripts_background_charon_api__WEBPACK_IMPORTED_MODULE_2__.assertMessageResponseSuccess));
    }
    getSubscribeToNodeFee(nodeAddress, deposit, price) {
        return this.sentinelClient.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.switchMap)((client) => client.node.subscribeToNode({
            from: this.sentinelWalletAddress,
            nodeAddress: nodeAddress,
            gigabytes: long__WEBPACK_IMPORTED_MODULE_1___default().fromNumber(+deposit.amount / +price.amount),
            denom: deposit.denom,
        }).simulate()));
    }
    cancelSubscription(id) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.defer)(() => new _shared_message_bus__WEBPACK_IMPORTED_MODULE_4__.MessageBus().sendMessage(_scripts_messages__WEBPACK_IMPORTED_MODULE_3__.MessageCode.SentinelCancelNodeSubscription, {
            request: {
                from: this.sentinelWalletAddress,
                id,
            },
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(_scripts_background_charon_api__WEBPACK_IMPORTED_MODULE_2__.assertMessageResponseSuccess));
    }
    startSession(nodeAddress, subscriptionId, endSessionIds) {
        const endSessionRequest = this.buildEndSessionRequest(endSessionIds);
        const startSessionRequest = {
            from: this.sentinelWalletAddress,
            id: subscriptionId,
            address: nodeAddress,
        };
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.defer)(() => new _shared_message_bus__WEBPACK_IMPORTED_MODULE_4__.MessageBus().sendMessage(_scripts_messages__WEBPACK_IMPORTED_MODULE_3__.MessageCode.SentinelStartSession, {
            request: {
                endSession: endSessionRequest,
                startSession: startSessionRequest,
            },
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(_scripts_background_charon_api__WEBPACK_IMPORTED_MODULE_2__.assertMessageResponseSuccess));
    }
    endSession(sessionIds) {
        if (sessionIds.length === 0) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.of)(undefined);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.defer)(() => new _shared_message_bus__WEBPACK_IMPORTED_MODULE_4__.MessageBus().sendMessage(_scripts_messages__WEBPACK_IMPORTED_MODULE_3__.MessageCode.SentinelEndSession, { request: this.buildEndSessionRequest(sessionIds) })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(_scripts_background_charon_api__WEBPACK_IMPORTED_MODULE_2__.assertMessageResponseSuccess));
    }
};
SentinelService.ɵfac = function SentinelService_Factory(t) { return new (t || SentinelService)(_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵinject"](_core_auth__WEBPACK_IMPORTED_MODULE_9__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵinject"](_shared_services_configuration__WEBPACK_IMPORTED_MODULE_10__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_11__.DecentrService)); };
SentinelService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjectable"]({ token: SentinelService, factory: SentinelService.ɵfac });
SentinelService = (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_16__.UntilDestroy)()
], SentinelService);



/***/ }),

/***/ 54338:
/*!****************************************************************!*\
  !*** ./projects/charon/src/app/core/services/spinner/index.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpinnerService": () => (/* reexport safe */ _spinner_service__WEBPACK_IMPORTED_MODULE_0__.SpinnerService)
/* harmony export */ });
/* harmony import */ var _spinner_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spinner.service */ 88202);



/***/ }),

/***/ 88202:
/*!**************************************************************************!*\
  !*** ./projects/charon/src/app/core/services/spinner/spinner.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpinnerService": () => (/* binding */ SpinnerService)
/* harmony export */ });
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ 20389);
/* harmony import */ var _shared_components_spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/components/spinner */ 11423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ 9160);




class SpinnerService {
    constructor(overlay) {
        this.isAttached = false;
        this.overlayRef = overlay.create({
            positionStrategy: overlay.position().global().centerHorizontally().centerVertically(),
            hasBackdrop: true,
        });
    }
    showSpinner() {
        if (this.isAttached) {
            return;
        }
        this.overlayRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.ComponentPortal(_shared_components_spinner__WEBPACK_IMPORTED_MODULE_0__.SpinnerComponent));
        this.isAttached = true;
    }
    hideSpinner() {
        this.overlayRef.detach();
        this.isAttached = false;
    }
}
SpinnerService.ɵfac = function SpinnerService_Factory(t) { return new (t || SpinnerService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__.Overlay)); };
SpinnerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SpinnerService, factory: SpinnerService.ɵfac });


/***/ }),

/***/ 33712:
/*!****************************************************************!*\
  !*** ./projects/charon/src/app/core/services/staking/index.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StakingService": () => (/* reexport safe */ _staking_service__WEBPACK_IMPORTED_MODULE_0__.StakingService)
/* harmony export */ });
/* harmony import */ var _staking_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./staking.service */ 77581);



/***/ }),

/***/ 77581:
/*!**************************************************************************!*\
  !*** ./projects/charon/src/app/core/services/staking/staking.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StakingService": () => (/* binding */ StakingService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 33072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 15696);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 84945);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 84967);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 61528);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 33568);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 65619);
/* harmony import */ var decentr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! decentr-js */ 14000);
/* harmony import */ var decentr_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(decentr_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_message_bus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/message-bus */ 73015);
/* harmony import */ var _scripts_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @scripts/messages */ 41784);
/* harmony import */ var _scripts_background_charon_api_message_bus_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @scripts/background/charon-api/message-bus-map */ 39559);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth */ 51519);
/* harmony import */ var _decentr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../decentr */ 66069);









class StakingService {
    constructor(authService, decentrService) {
        this.authService = authService;
        this.decentrService = decentrService;
    }
    delegateTokens(request) {
        const wallet = this.authService.getActiveUserInstant().wallet;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.defer)(() => new _shared_message_bus__WEBPACK_IMPORTED_MODULE_1__.MessageBus().sendMessage(_scripts_messages__WEBPACK_IMPORTED_MODULE_2__.MessageCode.Delegate, {
            request: Object.assign(Object.assign({}, request), { delegatorAddress: wallet.address }),
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(_scripts_background_charon_api_message_bus_map__WEBPACK_IMPORTED_MODULE_3__.assertMessageResponseSuccess));
    }
    getDelegationFee(request) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([
            this.decentrService.decentrClient,
            this.authService.getActiveUser(),
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(([decentrClient, user]) => decentrClient.staking.delegateTokens(Object.assign(Object.assign({}, request), { delegatorAddress: user.wallet.address })).simulate()));
    }
    redelegateTokens(request) {
        const wallet = this.authService.getActiveUserInstant().wallet;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.defer)(() => new _shared_message_bus__WEBPACK_IMPORTED_MODULE_1__.MessageBus()
            .sendMessage(_scripts_messages__WEBPACK_IMPORTED_MODULE_2__.MessageCode.Redelegate, {
            request: Object.assign(Object.assign({}, request), { delegatorAddress: wallet.address }),
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(_scripts_background_charon_api_message_bus_map__WEBPACK_IMPORTED_MODULE_3__.assertMessageResponseSuccess));
    }
    getRedelegationFee(request) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([
            this.decentrService.decentrClient,
            this.authService.getActiveUser(),
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(([decentrClient, user]) => decentrClient.staking.redelegateTokens(Object.assign(Object.assign({}, request), { delegatorAddress: user.wallet.address })).simulate()));
    }
    getValidatorUndelegation(validatorAddress) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([
            this.decentrService.decentrClient,
            this.authService.getActiveUserAddress(),
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(([decentrClient, walletAddress]) => decentrClient.staking.getUnbondingDelegation(walletAddress, validatorAddress)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((response) => response.entries), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)([])));
    }
    undelegateTokens(validatorAddress, amount) {
        const wallet = this.authService.getActiveUserInstant().wallet;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.defer)(() => new _shared_message_bus__WEBPACK_IMPORTED_MODULE_1__.MessageBus().sendMessage(_scripts_messages__WEBPACK_IMPORTED_MODULE_2__.MessageCode.Undelegate, {
            request: {
                delegatorAddress: wallet.address,
                validatorAddress,
                amount,
            },
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(_scripts_background_charon_api_message_bus_map__WEBPACK_IMPORTED_MODULE_3__.assertMessageResponseSuccess));
    }
    getUndelegationFee(request) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([
            this.decentrService.decentrClient,
            this.authService.getActiveUser(),
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(([decentrClient, user]) => decentrClient.staking.undelegateTokens(Object.assign(Object.assign({}, request), { delegatorAddress: user.wallet.address })).simulate()));
    }
    getUndedelegationFromAvailableTime(fromValidator) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([
            this.getUndelegationsTimes(fromValidator),
            this.getStakingParameters().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((params) => params.maxEntries)),
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(([times, maxEntries]) => times.length >= maxEntries ? times : []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((times) => times.sort((left, right) => left.valueOf() - right.valueOf())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((sortedTimesDesc) => { var _a; return (_a = sortedTimesDesc[0]) === null || _a === void 0 ? void 0 : _a.valueOf(); }));
    }
    getUnbondingDelegations() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([
            this.decentrService.decentrClient,
            this.authService.getActiveUserAddress(),
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(([decentrClient, walletAddress]) => decentrClient.staking.getUnbondingDelegations(walletAddress)));
    }
    getUnbondingDelegation(validatorAddress) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([
            this.decentrService.decentrClient,
            this.authService.getActiveUserAddress(),
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(([decentrClient, walletAddress]) => decentrClient.staking.getUnbondingDelegation(walletAddress, validatorAddress)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((response) => response.entries));
    }
    getDelegations() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([
            this.decentrService.decentrClient,
            this.authService.getActiveUserAddress(),
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(([decentrClient, walletAddress]) => decentrClient.staking.getDelegations(walletAddress)));
    }
    getValidatorDelegation(validatorAddress) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([
            this.decentrService.decentrClient,
            this.authService.getActiveUserAddress(),
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(([decentrClient, walletAddress]) => decentrClient.staking.getDelegation(walletAddress, validatorAddress)));
    }
    getRedelegations(sourceValidatorAddress, destinationValidatorAddress) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([
            this.decentrService.decentrClient,
            this.authService.getActiveUserAddress(),
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(([decentrClient, walletAddress]) => decentrClient.staking.getRedelegations(walletAddress, sourceValidatorAddress, destinationValidatorAddress)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)([])));
    }
    getRedelegationFromAvailableTime(validatorSrcAddress) {
        return this.getRedelegationsTimes('', validatorSrcAddress).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((times) => times.sort((left, right) => right - left)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((sortedTimesDesc) => sortedTimesDesc[0]));
    }
    getRedelegationToAvailableTime(validatorSrcAddress, validatorDstAddress) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([
            this.getRedelegationsTimes(validatorSrcAddress, validatorDstAddress),
            this.getStakingParameters().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(({ maxEntries }) => maxEntries)),
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(([times, maxEntries]) => times.length >= maxEntries ? times : []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((times) => times.sort((left, right) => left - right)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((sortedTimesDesc) => sortedTimesDesc[0]));
    }
    getPool() {
        return this.decentrService.decentrClient.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.mergeMap)((decentrClient) => decentrClient.staking.getPool()));
    }
    getValidators(onlyBonded = false) {
        return this.decentrService.decentrClient.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((decentrClient) => decentrClient.staking), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.mergeMap)((stakingClient) => (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.forkJoin)([
            stakingClient.getValidators('BOND_STATUS_BONDED'),
            ...onlyBonded
                ? []
                : [
                    stakingClient.getValidators('BOND_STATUS_UNBONDING'),
                    stakingClient.getValidators('BOND_STATUS_UNBONDED'),
                ],
        ])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(([bonded, unbonding, unbonded]) => [
            ...bonded,
            ...unbonding ? unbonding : [],
            ...unbonded ? unbonded : [],
        ]));
    }
    getValidator(address) {
        return this.decentrService.decentrClient.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.mergeMap)((decentrClient) => decentrClient.staking.getValidator(address)));
    }
    getStakingParameters() {
        return this.decentrService.decentrClient.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.mergeMap)((decentrClient) => decentrClient.staking.getStakingParameters()));
    }
    getUndelegationsTimes(fromValidator) {
        return this.getValidatorUndelegation(fromValidator).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((entries) => entries.map((entry) => (0,decentr_js__WEBPACK_IMPORTED_MODULE_0__.protoTimestampToDate)(entry.completionTime))));
    }
    getRedelegationsTimes(validatorSrcAddress, validatorDstAddress) {
        return this.getRedelegations(validatorSrcAddress, validatorDstAddress).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((redelegationResponses) => redelegationResponses.filter(({ redelegation }) => {
            return (!validatorSrcAddress || redelegation.validatorSrcAddress === validatorSrcAddress)
                && (!validatorDstAddress || redelegation.validatorDstAddress === validatorDstAddress);
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((redelegations) => redelegations.reduce((acc, item) => [...acc, ...item.entries], [])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((entries) => {
            return entries
                .map((entry) => { var _a; return (0,decentr_js__WEBPACK_IMPORTED_MODULE_0__.protoTimestampToDate)((_a = entry.redelegationEntry) === null || _a === void 0 ? void 0 : _a.completionTime).valueOf(); })
                .filter(Boolean);
        }));
    }
}
StakingService.ɵfac = function StakingService_Factory(t) { return new (t || StakingService)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_auth__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_decentr__WEBPACK_IMPORTED_MODULE_5__.DecentrService)); };
StakingService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjectable"]({ token: StakingService, factory: StakingService.ɵfac });


/***/ }),

/***/ 99604:
/*!*************************************************************!*\
  !*** ./projects/charon/src/app/core/services/user/index.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* reexport safe */ _user_service__WEBPACK_IMPORTED_MODULE_0__.UserService)
/* harmony export */ });
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.service */ 20345);



/***/ }),

/***/ 20345:
/*!********************************************************************!*\
  !*** ./projects/charon/src/app/core/services/user/user.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 9779);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 84945);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 91786);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 33072);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 65619);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 33568);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 61528);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 15184);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 65598);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 98168);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 74970);
/* harmony import */ var _shared_message_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/message-bus */ 73015);
/* harmony import */ var _shared_services_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/configuration */ 1683);
/* harmony import */ var _shared_utils_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/utils/date */ 17969);
/* harmony import */ var _scripts_background_charon_api_message_bus_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @scripts/background/charon-api/message-bus-map */ 39559);
/* harmony import */ var _scripts_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @scripts/messages */ 41784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth */ 51519);
/* harmony import */ var _decentr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../decentr */ 66069);
/* harmony import */ var _shared_services_pdv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/services/pdv */ 65466);
/* harmony import */ var _shared_services_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/services/settings */ 31922);












class UserService {
    constructor(authService, decentrService, pdvStorageService, settingsService) {
        this.authService = authService;
        this.decentrService = decentrService;
        this.pdvStorageService = pdvStorageService;
        this.settingsService = settingsService;
        this.profileChanged$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    }
    createUser(email, walletAddress) {
        return this.decentrService.createVulcanClient(_shared_services_configuration__WEBPACK_IMPORTED_MODULE_1__.NetworkId.Mainnet).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.mergeMap)((vulcanClient) => vulcanClient.registration.register(walletAddress, email)));
        // const userBody = {
        //   address: walletAddress,
        //   email,
        // };
        // console.log('register');
        // return this.decentrService.createVulcanClient(NetworkId.Mainnet).pipe(
        //   mergeMap(() => AwsWafIntegration.fetch('https://vulcan.mainnet.decentr.xyz/v1/register', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },
        //     body: userBody as any,
        //   })),
        // );
    }
    confirmUser(code, email) {
        return this.decentrService.createVulcanClient(_shared_services_configuration__WEBPACK_IMPORTED_MODULE_1__.NetworkId.Mainnet).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.mergeMap)((vulcanClient) => vulcanClient.registration.confirm(email, code)));
    }
    hesoyam(walletAddress) {
        return this.decentrService.createVulcanClient(_shared_services_configuration__WEBPACK_IMPORTED_MODULE_1__.NetworkId.Testnet).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.mergeMap)((vulcanClient) => vulcanClient.registration.hesoyam(walletAddress)));
    }
    getAccount(walletAddress, networkId) {
        const decentrClient = networkId
            ? this.decentrService.createDecentrClient(networkId)
            : this.decentrService.decentrClient;
        return decentrClient.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.mergeMap)((decentrClientInstance) => decentrClientInstance.auth.getAccount(walletAddress)));
    }
    getModeratorAddresses() {
        return this.decentrService.decentrClient.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.mergeMap)((decentrClient) => decentrClient.community.getModeratorAddresses()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)([])));
    }
    waitAccount(walletAddress, networkId) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.timer)(0, _shared_utils_date__WEBPACK_IMPORTED_MODULE_2__.ONE_SECOND).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(() => this.getAccount(walletAddress, networkId)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.skipWhile)((account) => !account), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.take)(1));
    }
    createTestnetAccount(walletAddress) {
        return this.getAccount(walletAddress, _shared_services_configuration__WEBPACK_IMPORTED_MODULE_1__.NetworkId.Testnet).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.mergeMap)((account) => account
            ? (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(void 0)
            : this.hesoyam(walletAddress).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.mergeMap)(() => this.waitAccount(walletAddress, _shared_services_configuration__WEBPACK_IMPORTED_MODULE_1__.NetworkId.Testnet)))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(() => void 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(void 0)));
    }
    getProfile(walletAddress, privateKey) {
        return this.decentrService.cerberusClient.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.mergeMap)((cerberusClient) => cerberusClient.profile.getProfile(walletAddress, privateKey)));
    }
    getProfiles(walletAddresses, privateKey) {
        return this.decentrService.cerberusClient.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.mergeMap)((cerberusClient) => cerberusClient.profile.getProfiles(walletAddresses, privateKey)));
    }
    setProfile(profile) {
        const wallet = this.authService.getActiveUserInstant().wallet;
        return this.decentrService.cerberusClient.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.mergeMap)((cerberusClient) => cerberusClient.profile.setProfile(profile, wallet.privateKey)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(() => void 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.tap)(() => this.profileChanged$.next(wallet.address)));
    }
    resetAccount(walletAddress) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.defer)(() => new _shared_message_bus__WEBPACK_IMPORTED_MODULE_0__.MessageBus().sendMessage(_scripts_messages__WEBPACK_IMPORTED_MODULE_4__.MessageCode.ResetAccount, {
            request: {
                owner: walletAddress,
                address: walletAddress,
            },
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(_scripts_background_charon_api_message_bus_map__WEBPACK_IMPORTED_MODULE_3__.assertMessageResponseSuccess), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.mergeMap)(() => this.settingsService.getUserSettingsService(walletAddress).clear()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.mergeMap)(() => this.pdvStorageService.clearUserPDV(walletAddress)));
    }
    onProfileChanged(walletAddress) {
        return this.profileChanged$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.filter)((walletAddressChanged) => walletAddressChanged === walletAddress), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(() => void 0));
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵinject"](_auth__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵinject"](_decentr__WEBPACK_IMPORTED_MODULE_6__.DecentrService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵinject"](_shared_services_pdv__WEBPACK_IMPORTED_MODULE_7__.PDVStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵinject"](_shared_services_settings__WEBPACK_IMPORTED_MODULE_8__.SettingsService)); };
UserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 47738:
/*!*********************************************************!*\
  !*** ./projects/charon/src/app/core/svg-icons/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SvgIconRootModule": () => (/* reexport safe */ _svg_icon_root_module__WEBPACK_IMPORTED_MODULE_0__.SvgIconRootModule)
/* harmony export */ });
/* harmony import */ var _svg_icon_root_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./svg-icon-root.module */ 34842);



/***/ }),

/***/ 34842:
/*!************************************************************************!*\
  !*** ./projects/charon/src/app/core/svg-icons/svg-icon-root.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SvgIconRootModule": () => (/* binding */ SvgIconRootModule)
/* harmony export */ });
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/svg-icon */ 66722);
/* harmony import */ var _shared_svg_icons_close__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/svg-icons/close */ 87512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 89724);




class SvgIconRootModule {
}
SvgIconRootModule.ɵfac = function SvgIconRootModule_Factory(t) { return new (t || SvgIconRootModule)(); };
SvgIconRootModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SvgIconRootModule });
SvgIconRootModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_2__.SvgIconsModule.forRoot({
                sizes: {
                    xs: '16px',
                    sm: '20px',
                    md: '24px',
                    lg: '32px',
                    xl: '40px',
                    xxl: '64px',
                },
                defaultSize: 'md',
                icons: [
                    _shared_svg_icons_close__WEBPACK_IMPORTED_MODULE_0__.svgClose,
                ],
            })]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SvgIconRootModule, { imports: [_ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_2__.SvgIconsModule] }); })();


/***/ }),

/***/ 40371:
/*!*********************************************************!*\
  !*** ./projects/charon/src/app/core/transloco/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslocoRootModule": () => (/* reexport safe */ _transloco_root_module__WEBPACK_IMPORTED_MODULE_0__.TranslocoRootModule),
/* harmony export */   "getTranslocoConfig": () => (/* reexport safe */ _transloco_root_module__WEBPACK_IMPORTED_MODULE_0__.getTranslocoConfig)
/* harmony export */ });
/* harmony import */ var _transloco_root_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transloco-root.module */ 44073);



/***/ }),

/***/ 77384:
/*!*************************************************************************!*\
  !*** ./projects/charon/src/app/core/transloco/transloco-http-loader.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslocoHttpLoader": () => (/* binding */ TranslocoHttpLoader)
/* harmony export */ });
/* harmony import */ var _core_interceptors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/interceptors */ 9171);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 19725);



class TranslocoHttpLoader {
    constructor(http) {
        this.http = http;
    }
    getTranslation(lang) {
        return this.http.get(`assets/i18n/${lang}.json`, {
            headers: {
                [_core_interceptors__WEBPACK_IMPORTED_MODULE_0__.SKIP_MAINTENANCE_INTERCEPTOR_HEADER]: 'true',
            },
        });
    }
}
TranslocoHttpLoader.ɵfac = function TranslocoHttpLoader_Factory(t) { return new (t || TranslocoHttpLoader)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
TranslocoHttpLoader.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TranslocoHttpLoader, factory: TranslocoHttpLoader.ɵfac });


/***/ }),

/***/ 44073:
/*!*************************************************************************!*\
  !*** ./projects/charon/src/app/core/transloco/transloco-root.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslocoRootModule": () => (/* binding */ TranslocoRootModule),
/* harmony export */   "getTranslocoConfig": () => (/* binding */ getTranslocoConfig)
/* harmony export */ });
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/transloco */ 47860);
/* harmony import */ var _environments_environment_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @environments/environment.definitions */ 41380);
/* harmony import */ var _transloco_http_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transloco-http-loader */ 77384);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 89724);




function getTranslocoConfig(environment) {
    return (0,_ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__.translocoConfig)({
        availableLangs: ['en'],
        defaultLang: 'en',
        fallbackLang: 'en',
        reRenderOnLangChange: true,
        prodMode: environment.production,
    });
}
class TranslocoRootModule {
}
TranslocoRootModule.ɵfac = function TranslocoRootModule_Factory(t) { return new (t || TranslocoRootModule)(); };
TranslocoRootModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: TranslocoRootModule });
TranslocoRootModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__.TRANSLOCO_CONFIG,
            useFactory: getTranslocoConfig,
            deps: [_environments_environment_definitions__WEBPACK_IMPORTED_MODULE_0__.Environment],
        },
        {
            provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__.TRANSLOCO_LOADER,
            useClass: _transloco_http_loader__WEBPACK_IMPORTED_MODULE_1__.TranslocoHttpLoader,
        },
    ], imports: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__.TranslocoModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TranslocoRootModule, { exports: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_2__.TranslocoModule] }); })();


/***/ }),

/***/ 5926:
/*!**************************************************!*\
  !*** ./projects/charon/src/app/hub/hub-route.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HubCategoryRouteParam": () => (/* binding */ HubCategoryRouteParam),
/* harmony export */   "HubFeedRoute": () => (/* binding */ HubFeedRoute),
/* harmony export */   "HubPostIdRouteParam": () => (/* binding */ HubPostIdRouteParam),
/* harmony export */   "HubPostOutletName": () => (/* binding */ HubPostOutletName),
/* harmony export */   "HubPostOwnerRouteParam": () => (/* binding */ HubPostOwnerRouteParam),
/* harmony export */   "HubRoute": () => (/* binding */ HubRoute)
/* harmony export */ });
const HubCategoryRouteParam = 'category';
const HubPostIdRouteParam = 'postId';
const HubPostOwnerRouteParam = 'postOwner';
const HubPostOutletName = 'post';
var HubRoute;
(function (HubRoute) {
    HubRoute["PostCreate"] = "post-create";
    HubRoute["Feed"] = "feed";
    HubRoute["Posts"] = "posts";
    HubRoute["Post"] = "post";
})(HubRoute || (HubRoute = {}));
var HubFeedRoute;
(function (HubFeedRoute) {
    HubFeedRoute["Following"] = "following";
    HubFeedRoute["MyPosts"] = "my-posts";
})(HubFeedRoute || (HubFeedRoute = {}));


/***/ }),

/***/ 7437:
/*!**********************************************!*\
  !*** ./projects/charon/src/app/hub/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HubCategoryRouteParam": () => (/* reexport safe */ _hub_route__WEBPACK_IMPORTED_MODULE_0__.HubCategoryRouteParam),
/* harmony export */   "HubFeedRoute": () => (/* reexport safe */ _hub_route__WEBPACK_IMPORTED_MODULE_0__.HubFeedRoute),
/* harmony export */   "HubPostIdRouteParam": () => (/* reexport safe */ _hub_route__WEBPACK_IMPORTED_MODULE_0__.HubPostIdRouteParam),
/* harmony export */   "HubPostOutletName": () => (/* reexport safe */ _hub_route__WEBPACK_IMPORTED_MODULE_0__.HubPostOutletName),
/* harmony export */   "HubPostOwnerRouteParam": () => (/* reexport safe */ _hub_route__WEBPACK_IMPORTED_MODULE_0__.HubPostOwnerRouteParam),
/* harmony export */   "HubRoute": () => (/* reexport safe */ _hub_route__WEBPACK_IMPORTED_MODULE_0__.HubRoute)
/* harmony export */ });
/* harmony import */ var _hub_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hub-route */ 5926);



/***/ }),

/***/ 57928:
/*!*************************************!*\
  !*** ./projects/charon/src/main.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 14800);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 52074);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @environments/environment */ 53629);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 40706:
/*!***********************************************************!*\
  !*** ./projects/scripts/src/background/charon-api/api.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPost": () => (/* binding */ createPost),
/* harmony export */   "delegate": () => (/* binding */ delegate),
/* harmony export */   "deletePost": () => (/* binding */ deletePost),
/* harmony export */   "follow": () => (/* binding */ follow),
/* harmony export */   "likePost": () => (/* binding */ likePost),
/* harmony export */   "redelegate": () => (/* binding */ redelegate),
/* harmony export */   "resetAccount": () => (/* binding */ resetAccount),
/* harmony export */   "sendIbcTokens": () => (/* binding */ sendIbcTokens),
/* harmony export */   "sentinelCancelNodeSubscription": () => (/* binding */ sentinelCancelNodeSubscription),
/* harmony export */   "sentinelEndSession": () => (/* binding */ sentinelEndSession),
/* harmony export */   "sentinelSendIbcTokens": () => (/* binding */ sentinelSendIbcTokens),
/* harmony export */   "sentinelStartSession": () => (/* binding */ sentinelStartSession),
/* harmony export */   "sentinelSubscribeToNode": () => (/* binding */ sentinelSubscribeToNode),
/* harmony export */   "transferCoins": () => (/* binding */ transferCoins),
/* harmony export */   "undelegate": () => (/* binding */ undelegate),
/* harmony export */   "unfollow": () => (/* binding */ unfollow),
/* harmony export */   "withdrawDelegatorRewards": () => (/* binding */ withdrawDelegatorRewards),
/* harmony export */   "withdrawValidatorRewards": () => (/* binding */ withdrawValidatorRewards)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../client */ 93394);


const createPost = (request) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(void 0, void 0, void 0, function* () {
    const decentrClient = yield (0,_client__WEBPACK_IMPORTED_MODULE_0__.getDecentrClient)();
    return decentrClient.community.createPost(request).signAndBroadcast();
});
const deletePost = (request) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(void 0, void 0, void 0, function* () {
    const decentrClient = yield (0,_client__WEBPACK_IMPORTED_MODULE_0__.getDecentrClient)();
    return decentrClient.community.deletePost(request).signAndBroadcast();
});
const likePost = (request) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(void 0, void 0, void 0, function* () {
    const decentrClient = yield (0,_client__WEBPACK_IMPORTED_MODULE_0__.getDecentrClient)();
    return decentrClient.community.setLike(request).signAndBroadcast();
});
const follow = (request) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(void 0, void 0, void 0, function* () {
    const decentrClient = yield (0,_client__WEBPACK_IMPORTED_MODULE_0__.getDecentrClient)();
    return decentrClient.community.follow(request).signAndBroadcast();
});
const unfollow = (request) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(void 0, void 0, void 0, function* () {
    const decentrClient = yield (0,_client__WEBPACK_IMPORTED_MODULE_0__.getDecentrClient)();
    return decentrClient.community.unfollow(request).signAndBroadcast();
});
const transferCoins = (request, memo) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(void 0, void 0, void 0, function* () {
    const decentrClient = yield (0,_client__WEBPACK_IMPORTED_MODULE_0__.getDecentrClient)();
    return decentrClient.bank.sendTokens(request).signAndBroadcast(memo);
});
const sendIbcTokens = (request, memo) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(void 0, void 0, void 0, function* () {
    const decentrClient = yield (0,_client__WEBPACK_IMPORTED_MODULE_0__.getDecentrClient)();
    return decentrClient.bank.sendIbcTokens(request).signAndBroadcast(memo);
});
const resetAccount = (request) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(void 0, void 0, void 0, function* () {
    const decentrClient = yield (0,_client__WEBPACK_IMPORTED_MODULE_0__.getDecentrClient)();
    return decentrClient.operations.resetAccount(request).signAndBroadcast();
});
const delegate = (request) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(void 0, void 0, void 0, function* () {
    const decentrClient = yield (0,_client__WEBPACK_IMPORTED_MODULE_0__.getDecentrClient)();
    return decentrClient.staking.delegateTokens(request).signAndBroadcast();
});
const redelegate = (request) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(void 0, void 0, void 0, function* () {
    const decentrClient = yield (0,_client__WEBPACK_IMPORTED_MODULE_0__.getDecentrClient)();
    return decentrClient.staking.redelegateTokens(request).signAndBroadcast();
});
const undelegate = (request) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(void 0, void 0, void 0, function* () {
    const decentrClient = yield (0,_client__WEBPACK_IMPORTED_MODULE_0__.getDecentrClient)();
    return decentrClient.staking.undelegateTokens(request).signAndBroadcast();
});
const withdrawDelegatorRewards = (request) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(void 0, void 0, void 0, function* () {
    const decentrClient = yield (0,_client__WEBPACK_IMPORTED_MODULE_0__.getDecentrClient)();
    return decentrClient.distribution.withdrawDelegatorRewards(request).signAndBroadcast();
});
const withdrawValidatorRewards = (request) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(void 0, void 0, void 0, function* () {
    const decentrClient = yield (0,_client__WEBPACK_IMPORTED_MODULE_0__.getDecentrClient)();
    return decentrClient.distribution.withdrawValidatorRewards(request).signAndBroadcast();
});
const sentinelSendIbcTokens = (request, memo) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(void 0, void 0, void 0, function* () {
    const sentinelClient = yield (0,_client__WEBPACK_IMPORTED_MODULE_0__.getSentinelClient)();
    return sentinelClient.bank.sendIbcTokens(request).signAndBroadcast(memo);
});
const sentinelSubscribeToNode = (request) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(void 0, void 0, void 0, function* () {
    const sentinelClient = yield (0,_client__WEBPACK_IMPORTED_MODULE_0__.getSentinelClient)();
    return sentinelClient.node.subscribeToNode(request).signAndBroadcast();
});
const sentinelCancelNodeSubscription = (request) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(void 0, void 0, void 0, function* () {
    const sentinelClient = yield (0,_client__WEBPACK_IMPORTED_MODULE_0__.getSentinelClient)();
    return sentinelClient.subscription.cancelSubscription(request).signAndBroadcast();
});
const sentinelStartSession = (request) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(void 0, void 0, void 0, function* () {
    const sentinelClient = yield (0,_client__WEBPACK_IMPORTED_MODULE_0__.getSentinelClient)();
    const endSessionMessage = sentinelClient.session.endSession(request.endSession);
    const startSessionMessage = sentinelClient.session.startSession(request.startSession);
    const tx = endSessionMessage.concat(startSessionMessage);
    return tx.signAndBroadcast();
});
const sentinelEndSession = (request) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(void 0, void 0, void 0, function* () {
    const sentinelClient = yield (0,_client__WEBPACK_IMPORTED_MODULE_0__.getSentinelClient)();
    return sentinelClient.session.endSession(request).signAndBroadcast();
});


/***/ }),

/***/ 77870:
/*!*************************************************************!*\
  !*** ./projects/scripts/src/background/charon-api/index.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assertMessageResponseSuccess": () => (/* reexport safe */ _message_bus_map__WEBPACK_IMPORTED_MODULE_1__.assertMessageResponseSuccess),
/* harmony export */   "initCharonAPIListeners": () => (/* reexport safe */ _listeners__WEBPACK_IMPORTED_MODULE_0__.initCharonAPIListeners)
/* harmony export */ });
/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listeners */ 20764);
/* harmony import */ var _message_bus_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message-bus-map */ 39559);




/***/ }),

/***/ 20764:
/*!*****************************************************************!*\
  !*** ./projects/scripts/src/background/charon-api/listeners.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initCharonAPIListeners": () => (/* binding */ initCharonAPIListeners)
/* harmony export */ });
/* harmony import */ var _shared_message_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/message-bus */ 73015);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../messages */ 41784);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ 40706);
/* harmony import */ var _queue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../queue */ 52997);




const sendRequest = (fn, callback) => {
    _queue__WEBPACK_IMPORTED_MODULE_3__["default"].add(fn)
        .then((txResponse) => callback({
        success: true,
        txHash: txResponse.transactionHash,
    }), (error) => callback({
        success: false,
        error,
    }));
};
const CHARON_API_LISTENER_MAP = {
    [_messages__WEBPACK_IMPORTED_MODULE_1__.MessageCode.PostCreate]: _api__WEBPACK_IMPORTED_MODULE_2__.createPost,
    [_messages__WEBPACK_IMPORTED_MODULE_1__.MessageCode.PostDelete]: _api__WEBPACK_IMPORTED_MODULE_2__.deletePost,
    [_messages__WEBPACK_IMPORTED_MODULE_1__.MessageCode.PostLike]: _api__WEBPACK_IMPORTED_MODULE_2__.likePost,
    [_messages__WEBPACK_IMPORTED_MODULE_1__.MessageCode.Follow]: _api__WEBPACK_IMPORTED_MODULE_2__.follow,
    [_messages__WEBPACK_IMPORTED_MODULE_1__.MessageCode.Unfollow]: _api__WEBPACK_IMPORTED_MODULE_2__.unfollow,
    [_messages__WEBPACK_IMPORTED_MODULE_1__.MessageCode.CoinTransfer]: _api__WEBPACK_IMPORTED_MODULE_2__.transferCoins,
    [_messages__WEBPACK_IMPORTED_MODULE_1__.MessageCode.SendIbcTokens]: _api__WEBPACK_IMPORTED_MODULE_2__.sendIbcTokens,
    [_messages__WEBPACK_IMPORTED_MODULE_1__.MessageCode.ResetAccount]: _api__WEBPACK_IMPORTED_MODULE_2__.resetAccount,
    [_messages__WEBPACK_IMPORTED_MODULE_1__.MessageCode.Delegate]: _api__WEBPACK_IMPORTED_MODULE_2__.delegate,
    [_messages__WEBPACK_IMPORTED_MODULE_1__.MessageCode.Undelegate]: _api__WEBPACK_IMPORTED_MODULE_2__.undelegate,
    [_messages__WEBPACK_IMPORTED_MODULE_1__.MessageCode.Redelegate]: _api__WEBPACK_IMPORTED_MODULE_2__.redelegate,
    [_messages__WEBPACK_IMPORTED_MODULE_1__.MessageCode.WithdrawDelegatorRewards]: _api__WEBPACK_IMPORTED_MODULE_2__.withdrawDelegatorRewards,
    [_messages__WEBPACK_IMPORTED_MODULE_1__.MessageCode.WithdrawValidatorRewards]: _api__WEBPACK_IMPORTED_MODULE_2__.withdrawValidatorRewards,
    [_messages__WEBPACK_IMPORTED_MODULE_1__.MessageCode.SentinelStartSession]: _api__WEBPACK_IMPORTED_MODULE_2__.sentinelStartSession,
    [_messages__WEBPACK_IMPORTED_MODULE_1__.MessageCode.SentinelEndSession]: _api__WEBPACK_IMPORTED_MODULE_2__.sentinelEndSession,
    [_messages__WEBPACK_IMPORTED_MODULE_1__.MessageCode.SentinelSubscribeToNode]: _api__WEBPACK_IMPORTED_MODULE_2__.sentinelSubscribeToNode,
    [_messages__WEBPACK_IMPORTED_MODULE_1__.MessageCode.SentinelCancelNodeSubscription]: _api__WEBPACK_IMPORTED_MODULE_2__.sentinelCancelNodeSubscription,
    [_messages__WEBPACK_IMPORTED_MODULE_1__.MessageCode.SentinelSendIbcTokens]: _api__WEBPACK_IMPORTED_MODULE_2__.sentinelSendIbcTokens,
};
const initCharonAPIListeners = () => {
    const messageBus = new _shared_message_bus__WEBPACK_IMPORTED_MODULE_0__.MessageBus();
    Object.entries(CHARON_API_LISTENER_MAP).forEach(([messageCode, handler]) => {
        messageBus.onMessage(messageCode).subscribe((message) => {
            sendRequest(() => handler(
            // @ts-ignore
            message.body.request, message.body.memo), message.sendResponse);
        });
    });
};


/***/ }),

/***/ 39559:
/*!***********************************************************************!*\
  !*** ./projects/scripts/src/background/charon-api/message-bus-map.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assertMessageResponseSuccess": () => (/* binding */ assertMessageResponseSuccess)
/* harmony export */ });
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../messages */ 41784);

const assertMessageResponseSuccess = (response) => {
    if (!response.success) {
        throw response.error;
    }
    return response.txHash;
};


/***/ }),

/***/ 93394:
/*!***************************************************!*\
  !*** ./projects/scripts/src/background/client.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCerberusClient": () => (/* binding */ getCerberusClient),
/* harmony export */   "getDecentrClient": () => (/* binding */ getDecentrClient),
/* harmony export */   "getSentinelClient": () => (/* binding */ getSentinelClient),
/* harmony export */   "getTheseusClient": () => (/* binding */ getTheseusClient)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 5557);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 15696);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 98168);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 61528);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 65598);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 57445);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 83151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 74970);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var decentr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! decentr-js */ 14000);
/* harmony import */ var decentr_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(decentr_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_services_network_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/services/network-storage */ 98420);
/* harmony import */ var _shared_services_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/auth */ 7439);
/* harmony import */ var _shared_utils_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/utils/date */ 17969);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ 13915);







const DECENTR_CLIENT$ = (() => {
    const networkStorage = new _shared_services_network_storage__WEBPACK_IMPORTED_MODULE_1__.NetworkBrowserStorageService();
    const clientSource$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.ReplaySubject(1);
    (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([
        networkStorage.getActiveAPI(),
        new _shared_services_auth__WEBPACK_IMPORTED_MODULE_2__.AuthBrowserStorageService().getActiveUser(),
    ]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)(() => clientSource$.next(undefined)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(_shared_utils_date__WEBPACK_IMPORTED_MODULE_3__.ONE_SECOND), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.switchMap)(([api, user]) => { var _a; return decentr_js__WEBPACK_IMPORTED_MODULE_0__.DecentrClient.create(api, (_a = user === null || user === void 0 ? void 0 : user.wallet) === null || _a === void 0 ? void 0 : _a.privateKey); })).subscribe(clientSource$);
    return clientSource$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(Boolean), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.take)(1));
})();
const CERBERUS_CLIENT$ = (() => {
    const clientSource$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.ReplaySubject(1);
    _config__WEBPACK_IMPORTED_MODULE_4__["default"].getCerberusUrl().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)(() => clientSource$.next(undefined)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(_shared_utils_date__WEBPACK_IMPORTED_MODULE_3__.ONE_SECOND), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)((api) => new decentr_js__WEBPACK_IMPORTED_MODULE_0__.CerberusClient(api))).subscribe(clientSource$);
    return clientSource$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(Boolean), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.take)(1));
})();
const THESEUS_CLIENT$ = (() => {
    const clientSource$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.ReplaySubject(1);
    _config__WEBPACK_IMPORTED_MODULE_4__["default"].getTheseusUrl().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)(() => clientSource$.next(undefined)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(_shared_utils_date__WEBPACK_IMPORTED_MODULE_3__.ONE_SECOND), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)((api) => new decentr_js__WEBPACK_IMPORTED_MODULE_0__.TheseusClient(api))).subscribe(clientSource$);
    return clientSource$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(Boolean), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.take)(1));
})();
const SENTINEL_CLIENT$ = (() => {
    const clientSource$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.ReplaySubject(1);
    (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([
        _config__WEBPACK_IMPORTED_MODULE_4__["default"].getVpnUrl(true),
        _config__WEBPACK_IMPORTED_MODULE_4__["default"].getVpnGasPrice(true),
        new _shared_services_auth__WEBPACK_IMPORTED_MODULE_2__.AuthBrowserStorageService().getActiveUser(),
    ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(_shared_utils_date__WEBPACK_IMPORTED_MODULE_3__.ONE_SECOND), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)(() => clientSource$.next(undefined)), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.switchMap)(([api, gasPrice, user]) => {
        var _a;
        return decentr_js__WEBPACK_IMPORTED_MODULE_0__.SentinelClient.create(api, {
            gasPrice: new decentr_js__WEBPACK_IMPORTED_MODULE_0__.Price(decentr_js__WEBPACK_IMPORTED_MODULE_0__.Decimal.fromUserInput(gasPrice, 6), 'udvpn'),
            privateKey: (_a = user === null || user === void 0 ? void 0 : user.wallet) === null || _a === void 0 ? void 0 : _a.privateKey,
        });
    })).subscribe(clientSource$);
    return clientSource$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(Boolean), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.take)(1));
})();
const getDecentrClient = () => (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.firstValueFrom)(DECENTR_CLIENT$);
const getCerberusClient = () => (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.firstValueFrom)(CERBERUS_CLIENT$);
const getTheseusClient = () => (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.firstValueFrom)(THESEUS_CLIENT$);
const getSentinelClient = () => (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.firstValueFrom)(SENTINEL_CLIENT$);


/***/ }),

/***/ 75218:
/*!********************************************************************!*\
  !*** ./projects/scripts/src/background/config/config-port-name.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONFIG_PORT_NAME": () => (/* binding */ CONFIG_PORT_NAME)
/* harmony export */ });
const CONFIG_PORT_NAME = 'config-port';


/***/ }),

/***/ 90626:
/*!***************************************************************!*\
  !*** ./projects/scripts/src/background/config/config-port.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeConfigPort": () => (/* binding */ initializeConfigPort)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9779);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 13528);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webextension-polyfill */ 87744);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ 23323);
/* harmony import */ var _config_port_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-port-name */ 75218);





class ConfigPort {
    constructor(configService) {
        this.configService = configService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.ports = [];
        this.anyPortHandler = (port) => {
            if (port.name !== _config_port_name__WEBPACK_IMPORTED_MODULE_2__.CONFIG_PORT_NAME) {
                return;
            }
            this.handleConfigPort(port);
            this.configService.forceUpdate();
        };
        webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.runtime.onConnect.addListener(this.anyPortHandler);
        this.subscribeConfigChanges();
    }
    destroy() {
        webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.runtime.onConnect.removeListener(this.anyPortHandler);
        this.destroy$.next();
        this.destroy$.complete();
    }
    handleConfigPort(port) {
        this.ports.push(port);
        port.onDisconnect.addListener(() => {
            const portIndex = this.ports.indexOf(port);
            if (portIndex > -1) {
                this.ports.splice(portIndex, 1);
            }
        });
    }
    subscribeConfigChanges() {
        this.configService.getConfig().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe((config) => {
            this.ports.forEach((port) => port.postMessage(config));
        });
    }
}
const initializeConfigPort = () => {
    new ConfigPort(_config__WEBPACK_IMPORTED_MODULE_1__["default"]);
};


/***/ }),

/***/ 23323:
/*!**********************************************************!*\
  !*** ./projects/scripts/src/background/config/config.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shared_services_configuration_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/configuration/config.service */ 77459);
/* harmony import */ var _shared_services_network_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/network-storage */ 98420);
/* harmony import */ var _sources_config_api_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sources/config-api-source */ 91065);



const CONFIG_SERVICE = new _shared_services_configuration_config_service__WEBPACK_IMPORTED_MODULE_0__.ConfigService(new _sources_config_api_source__WEBPACK_IMPORTED_MODULE_2__.ConfigApiSource(), new _shared_services_network_storage__WEBPACK_IMPORTED_MODULE_1__.NetworkBrowserStorageService());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CONFIG_SERVICE);


/***/ }),

/***/ 13915:
/*!*********************************************************!*\
  !*** ./projects/scripts/src/background/config/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "initializeConfigPort": () => (/* reexport safe */ _config_port__WEBPACK_IMPORTED_MODULE_1__.initializeConfigPort)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ 23323);
/* harmony import */ var _config_port__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-port */ 90626);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_config__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ 91065:
/*!*****************************************************************************!*\
  !*** ./projects/scripts/src/background/config/sources/config-api-source.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigApiSource": () => (/* binding */ ConfigApiSource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 91786);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 61528);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 89284);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../environments/environment */ 53629);
/* harmony import */ var _shared_services_configuration_config_definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/configuration/config.definitions */ 2404);
/* harmony import */ var _shared_services_configuration_config_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/configuration/config-api.service */ 78025);
/* harmony import */ var _shared_utils_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/utils/date */ 17969);
/* harmony import */ var _shared_utils_online__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/utils/online */ 59810);







class ConfigApiSource extends _shared_services_configuration_config_definitions__WEBPACK_IMPORTED_MODULE_1__.ConfigSource {
    constructor() {
        super(...arguments);
        this.configApiService = new _shared_services_configuration_config_api_service__WEBPACK_IMPORTED_MODULE_2__.ConfigApiService(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment);
        this.autoUpdateInterval = _shared_utils_date__WEBPACK_IMPORTED_MODULE_3__.ONE_SECOND * 30;
    }
    getConfig() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.timer)(0, this.autoUpdateInterval).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)(() => this.configApiService.getConfig().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.retry)({
            delay: _shared_utils_date__WEBPACK_IMPORTED_MODULE_3__.ONE_SECOND,
        }))), _shared_utils_online__WEBPACK_IMPORTED_MODULE_4__.whileOnline);
    }
}


/***/ }),

/***/ 34857:
/*!******************************************************************************!*\
  !*** ./projects/scripts/src/background/config/sources/config-port-source.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigPortSource": () => (/* binding */ ConfigPortSource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 87241);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webextension-polyfill */ 87744);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_services_configuration_config_definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/configuration/config.definitions */ 2404);
/* harmony import */ var _config_port_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config-port-name */ 75218);




class ConfigPortSource extends _shared_services_configuration_config_definitions__WEBPACK_IMPORTED_MODULE_1__.ConfigSource {
    getConfig() {
        const port = webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().runtime.connect({ name: _config_port_name__WEBPACK_IMPORTED_MODULE_2__.CONFIG_PORT_NAME });
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable((subscriber) => {
            const configListener = (config) => subscriber.next(config);
            port.onMessage.addListener(configListener);
            return () => port.disconnect();
        });
    }
}


/***/ }),

/***/ 52997:
/*!**************************************************!*\
  !*** ./projects/scripts/src/background/queue.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var p_queue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! p-queue */ 95819);

const QUEUE = new p_queue__WEBPACK_IMPORTED_MODULE_0__["default"]({ concurrency: 1 });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QUEUE);


/***/ }),

/***/ 41784:
/*!************************************************!*\
  !*** ./projects/scripts/src/messages/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageCode": () => (/* binding */ MessageCode)
/* harmony export */ });
var MessageCode;
(function (MessageCode) {
    MessageCode["Delegate"] = "CHARON_DELEGATE";
    MessageCode["Follow"] = "CHARON_FOLLOW";
    MessageCode["PostCreate"] = "CHARON_POST_CREATE";
    MessageCode["PostDelete"] = "CHARON_POST_DELETE";
    MessageCode["PostLike"] = "CHARON_POST_LIKE";
    MessageCode["CoinTransfer"] = "CHARON_COIN_TRANSFER";
    MessageCode["SendIbcTokens"] = "SEND_IBC_TOKENS";
    MessageCode["Location"] = "CHARON_LOCATION";
    MessageCode["Redelegate"] = "CHARON_REDELEGATE";
    MessageCode["ResetAccount"] = "CHARON_RESET_ACCOUNT";
    MessageCode["SentinelSubscribeToNode"] = "SENTINEL_SUBSCRIBE_TO_NODE";
    MessageCode["SentinelCancelNodeSubscription"] = "SENTINEL_CANCEL_NODE_SUBSCRIPTION";
    MessageCode["SentinelSendIbcTokens"] = "SENTINEL_SEND_IBC_TOKENS";
    MessageCode["SentinelStartSession"] = "SENTINEL_START_SESSION";
    MessageCode["SentinelEndSession"] = "SENTINEL_END_SESSION";
    MessageCode["Undelegate"] = "CHARON_UNDELEGATE";
    MessageCode["Unfollow"] = "CHARON_UNFOLLOW";
    MessageCode["WithdrawDelegatorRewards"] = "CHARON_WITHDRAW_DELEGATOR_REWARDS";
    MessageCode["WithdrawValidatorRewards"] = "CHARON_WITHDRAW_VALIDATOR_REWARDS";
})(MessageCode || (MessageCode = {}));


/***/ }),

/***/ 92329:
/*!***************************************************!*\
  !*** ./shared/analytics/analytics.definitions.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ANALYTICS_EVENT_MAP": () => (/* binding */ ANALYTICS_EVENT_MAP),
/* harmony export */   "ANALYTICS_TRACKER_ID": () => (/* binding */ ANALYTICS_TRACKER_ID),
/* harmony export */   "AnalyticsEvent": () => (/* binding */ AnalyticsEvent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 89724);

var AnalyticsEvent;
(function (AnalyticsEvent) {
    AnalyticsEvent[AnalyticsEvent["ConfirmRegistration"] = 0] = "ConfirmRegistration";
    AnalyticsEvent[AnalyticsEvent["CopyPostLink"] = 1] = "CopyPostLink";
    AnalyticsEvent[AnalyticsEvent["CopyReferralCode"] = 2] = "CopyReferralCode";
    AnalyticsEvent[AnalyticsEvent["CopySeed"] = 3] = "CopySeed";
    AnalyticsEvent[AnalyticsEvent["CreateAccount"] = 4] = "CreateAccount";
    AnalyticsEvent[AnalyticsEvent["DownloadSeedPDF"] = 5] = "DownloadSeedPDF";
    AnalyticsEvent[AnalyticsEvent["RegisterNewAccount"] = 6] = "RegisterNewAccount";
    AnalyticsEvent[AnalyticsEvent["SendEmailCode"] = 7] = "SendEmailCode";
})(AnalyticsEvent || (AnalyticsEvent = {}));
const ANALYTICS_EVENT_MAP = {
    [AnalyticsEvent.ConfirmRegistration]: {
        category: 'registration',
        action: 'confirm',
        label: 'Confirm Registration',
    },
    [AnalyticsEvent.CopyPostLink]: {
        category: 'dhub',
        action: 'copy',
        label: 'Copy dHub post link',
    },
    [AnalyticsEvent.CopyReferralCode]: {
        category: 'profile',
        action: 'copy',
        label: 'Copy Referral Code',
    },
    [AnalyticsEvent.CopySeed]: {
        category: 'registration',
        action: 'copy',
        label: 'Copy Seed Phrase',
    },
    [AnalyticsEvent.CreateAccount]: {
        category: 'registration',
        action: 'create_account',
        label: 'Create account',
    },
    [AnalyticsEvent.DownloadSeedPDF]: {
        category: 'registration',
        action: 'download',
        label: 'Download Seed Phrase',
    },
    [AnalyticsEvent.RegisterNewAccount]: {
        category: 'registration',
        action: 'register',
        label: 'Register New Account',
    },
    [AnalyticsEvent.SendEmailCode]: {
        category: 'registration',
        action: 'send',
        label: 'Resend Email Code',
    },
};
const ANALYTICS_TRACKER_ID = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('ANALYTICS_TRACKER_ID');


/***/ }),

/***/ 50771:
/*!**********************************************!*\
  !*** ./shared/analytics/analytics.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyticsModule": () => (/* binding */ AnalyticsModule)
/* harmony export */ });
/* harmony import */ var _environments_environment_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @environments/environment.definitions */ 41380);
/* harmony import */ var _analytics_definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./analytics.definitions */ 92329);
/* harmony import */ var _analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./analytics.service */ 22406);
/* harmony import */ var _shared_analytics_directives_analytics_click_event_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/analytics-click-event.directive */ 30229);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 89724);







class AnalyticsModule {
    constructor(analyticsService) {
        analyticsService.initialize();
    }
    static forRoot() {
        return {
            ngModule: AnalyticsModule,
            providers: [
                _analytics_service__WEBPACK_IMPORTED_MODULE_2__.AnalyticsService,
                {
                    provide: _analytics_definitions__WEBPACK_IMPORTED_MODULE_1__.ANALYTICS_TRACKER_ID,
                    useFactory: (environment) => environment.ga,
                    deps: [_environments_environment_definitions__WEBPACK_IMPORTED_MODULE_0__.Environment],
                },
            ],
        };
    }
}
AnalyticsModule.ɵfac = function AnalyticsModule_Factory(t) { return new (t || AnalyticsModule)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_analytics_service__WEBPACK_IMPORTED_MODULE_2__.AnalyticsService)); };
AnalyticsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AnalyticsModule });
AnalyticsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AnalyticsModule, { declarations: [_shared_analytics_directives_analytics_click_event_directive__WEBPACK_IMPORTED_MODULE_3__.AnalyticsClickEventDirective], exports: [_shared_analytics_directives_analytics_click_event_directive__WEBPACK_IMPORTED_MODULE_3__.AnalyticsClickEventDirective] }); })();


/***/ }),

/***/ 22406:
/*!***********************************************!*\
  !*** ./shared/analytics/analytics.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyticsService": () => (/* binding */ AnalyticsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 45113);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5557);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 74970);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 42147);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 79676);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngneat/until-destroy */ 78177);
/* harmony import */ var mixpanel_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mixpanel-browser */ 9958);
/* harmony import */ var mixpanel_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mixpanel_browser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _analytics_definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./analytics.definitions */ 92329);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 89724);









let AnalyticsService = class AnalyticsService {
    constructor(trackerId, router) {
        this.trackerId = trackerId;
        this.router = router;
        this.initialized = new rxjs__WEBPACK_IMPORTED_MODULE_2__.ReplaySubject(1);
        this.serviceInitialized = false;
    }
    initialize() {
        if (this.serviceInitialized) {
            return;
        }
        this.injectScript();
        this.serviceInitialized = true;
    }
    injectScript() {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${this.trackerId}`;
        script.onload = () => {
            this.initializeTracking();
        };
        document.head.appendChild(script);
        mixpanel_browser__WEBPACK_IMPORTED_MODULE_0___default().init('5bf95fe0b1082a95beb70c07ff6fa70e', { debug: true, track_pageview: true, persistence: 'localStorage' });
    }
    initializeTracking() {
        window.dataLayer = window.dataLayer || [];
        window.gtag = function () {
            window.dataLayer.push(arguments);
        };
        window.gtag('js', new Date());
        window.gtag('config', this.trackerId);
        this.initialized.next(true);
        this.initializePageTracking();
    }
    initializePageTracking() {
        this.router.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((event) => event.urlAfterRedirects.split('?')[0]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)(), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.untilDestroyed)(this))
            .subscribe((url) => this.sendPageView(url));
    }
    onInitialized() {
        return this.initialized.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.first)());
    }
    sendEvent(event) {
        console.log(this.getGaClientId());
        const api_secret = 'ZbThkMYCSyewJRz6TW2eSw';
        const eventOptions = typeof event === 'object' ? event : _analytics_definitions__WEBPACK_IMPORTED_MODULE_1__.ANALYTICS_EVENT_MAP[event];
        console.log(eventOptions);
        fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${this.trackerId}&api_secret=${api_secret}`, {
            method: 'POST',
            body: JSON.stringify({
                client_id: this.getGaClientId(),
                events: [{
                        name: 'tutorial_begin',
                        params: {},
                    }],
            }),
        }).then(res => console.log('res: ', res));
        window.gtag('event', eventOptions.action, {
            event_category: eventOptions.category,
            event_label: eventOptions.label,
            value: eventOptions.value,
        });
    }
    getGaClientId() {
        const cookie = {};
        document.cookie.split(';').forEach(function (el) {
            const splitCookie = el.split('=');
            const key = splitCookie[0].trim();
            const value = splitCookie[1];
            cookie[key] = value;
        });
        // @ts-ignore
        return cookie._ga.substring(6);
    }
    sendPageView(url) {
        const api_secret = 'ZbThkMYCSyewJRz6TW2eSw';
        fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${this.trackerId}&api_secret=${api_secret}`, {
            method: 'POST',
            body: JSON.stringify({
                client_id: this.getGaClientId(),
                events: [
                    {
                        name: 'page_view',
                        params: {
                            page_location: url,
                            engagement_time_msec: 1,
                        },
                    },
                ],
            }),
        }).then(res => console.log('res: ', res));
        window.gtag('config', this.trackerId, { page_path: url });
    }
};
AnalyticsService.ɵfac = function AnalyticsService_Factory(t) { return new (t || AnalyticsService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_analytics_definitions__WEBPACK_IMPORTED_MODULE_1__.ANALYTICS_TRACKER_ID), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
AnalyticsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: AnalyticsService, factory: AnalyticsService.ɵfac });
AnalyticsService = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.UntilDestroy)()
], AnalyticsService);



/***/ }),

/***/ 30229:
/*!************************************************************************!*\
  !*** ./shared/analytics/directives/analytics-click-event.directive.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyticsClickEventDirective": () => (/* binding */ AnalyticsClickEventDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../analytics.service */ 22406);


class AnalyticsClickEventDirective {
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
    }
    onClick() {
        this.analyticsService.sendEvent(this.event);
    }
}
AnalyticsClickEventDirective.ɵfac = function AnalyticsClickEventDirective_Factory(t) { return new (t || AnalyticsClickEventDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService)); };
AnalyticsClickEventDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AnalyticsClickEventDirective, selectors: [["", "appAnalyticsClickEvent", ""]], hostBindings: function AnalyticsClickEventDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AnalyticsClickEventDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } }, inputs: { event: ["appAnalyticsClickEvent", "event"] } });


/***/ }),

/***/ 47471:
/*!***********************************!*\
  !*** ./shared/analytics/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ANALYTICS_EVENT_MAP": () => (/* reexport safe */ _analytics_definitions__WEBPACK_IMPORTED_MODULE_0__.ANALYTICS_EVENT_MAP),
/* harmony export */   "ANALYTICS_TRACKER_ID": () => (/* reexport safe */ _analytics_definitions__WEBPACK_IMPORTED_MODULE_0__.ANALYTICS_TRACKER_ID),
/* harmony export */   "AnalyticsEvent": () => (/* reexport safe */ _analytics_definitions__WEBPACK_IMPORTED_MODULE_0__.AnalyticsEvent),
/* harmony export */   "AnalyticsModule": () => (/* reexport safe */ _analytics_module__WEBPACK_IMPORTED_MODULE_1__.AnalyticsModule),
/* harmony export */   "AnalyticsService": () => (/* reexport safe */ _analytics_service__WEBPACK_IMPORTED_MODULE_2__.AnalyticsService)
/* harmony export */ });
/* harmony import */ var _analytics_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analytics.definitions */ 92329);
/* harmony import */ var _analytics_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./analytics.module */ 50771);
/* harmony import */ var _analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./analytics.service */ 22406);





/***/ }),

/***/ 43191:
/*!******************************************************!*\
  !*** ./shared/components/avatar/avatar.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvatarComponent": () => (/* binding */ AvatarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 89724);

class AvatarComponent {
}
AvatarComponent.ɵfac = function AvatarComponent_Factory(t) { return new (t || AvatarComponent)(); };
AvatarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AvatarComponent, selectors: [["app-avatar"]], inputs: { avatarUrl: "avatarUrl" }, decls: 1, vars: 1, consts: [[1, "user-avatar__image", 3, "src"]], template: function AvatarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.avatarUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["[_nghost-%COMP%] {\n  align-items: center;\n  display: inline-flex;\n  font-size: 38px;\n  max-width: 38px;\n}\n\n.user-avatar__image[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  display: inline-flex;\n  font-size: inherit;\n  width: 100%;\n}"], changeDetection: 0 });


/***/ }),

/***/ 21493:
/*!********************************************************!*\
  !*** ./shared/components/avatar/avatar.definitions.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "USER_AVATARS": () => (/* binding */ USER_AVATARS)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 53629);

const USER_AVATARS = [];
for (let i = 1; i <= 12; i++) {
    USER_AVATARS.push(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.avatars}/user-avatar-${i}.svg`);
}


/***/ }),

/***/ 50419:
/*!***************************************************!*\
  !*** ./shared/components/avatar/avatar.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvatarModule": () => (/* binding */ AvatarModule)
/* harmony export */ });
/* harmony import */ var _avatar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./avatar.component */ 43191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 89724);


class AvatarModule {
}
AvatarModule.ɵfac = function AvatarModule_Factory(t) { return new (t || AvatarModule)(); };
AvatarModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AvatarModule });
AvatarModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AvatarModule, { declarations: [_avatar_component__WEBPACK_IMPORTED_MODULE_0__.AvatarComponent], exports: [_avatar_component__WEBPACK_IMPORTED_MODULE_0__.AvatarComponent] }); })();


/***/ }),

/***/ 5066:
/*!*******************************************!*\
  !*** ./shared/components/avatar/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvatarModule": () => (/* reexport safe */ _avatar_module__WEBPACK_IMPORTED_MODULE_0__.AvatarModule),
/* harmony export */   "USER_AVATARS": () => (/* reexport safe */ _avatar_definitions__WEBPACK_IMPORTED_MODULE_1__.USER_AVATARS)
/* harmony export */ });
/* harmony import */ var _avatar_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./avatar.module */ 50419);
/* harmony import */ var _avatar_definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avatar.definitions */ 21493);




/***/ }),

/***/ 4013:
/*!******************************************************!*\
  !*** ./shared/components/button/button.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonComponent": () => (/* binding */ ButtonComponent)
/* harmony export */ });
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngneat/svg-icon */ 66722);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 89724);


const _c0 = ["app-button", ""];
const _c1 = ["*"];
class ButtonComponent {
    constructor() {
        this.color = 'primary';
        this.size = 'md';
        this.type = 'button';
    }
    get classes() {
        return `mod-size-${this.size} mod-color-${this.color}`;
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["button", "app-button", ""], ["button", "app-icon-button", ""]], contentQueries: function ButtonComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_1__.SvgIconComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.svgIcon = _t.first);
    } }, hostVars: 7, hostBindings: function ButtonComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("type", ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mod-light-background", ctx.light)("mod-with-icon", ctx.svgIcon);
    } }, inputs: { color: "color", size: "size", light: "light", type: "type" }, attrs: _c0, ngContentSelectors: _c1, decls: 1, vars: 0, template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: ["[_nghost-%COMP%] {\n  --background-opacity: 1;\n  align-items: center;\n  border-radius: 12px;\n  display: inline-flex;\n  column-gap: 8px;\n  cursor: pointer;\n  font-weight: 500;\n  justify-content: center;\n  transition: background 0.3s ease, opacity 0.3s ease;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.mod-light-background[_nghost-%COMP%] {\n  --background-opacity: .12;\n}\n[app-icon-button][_nghost-%COMP%] {\n  padding: 8px;\n}\n[_nghost-%COMP%]:not([app-icon-button]).mod-size-xs {\n  padding: 8px 12px 8px 12px;\n}\n[_nghost-%COMP%]:not([app-icon-button]).mod-size-xs.mod-with-icon {\n  padding-left: 8px;\n}\n[_nghost-%COMP%]:not([app-icon-button]).mod-size-sm {\n  padding: 8px 16px 8px 16px;\n}\n[_nghost-%COMP%]:not([app-icon-button]).mod-size-sm.mod-with-icon {\n  padding-left: 12px;\n}\n[_nghost-%COMP%]:not([app-icon-button]).mod-size-md {\n  padding: 12px 24px 12px 24px;\n}\n[_nghost-%COMP%]:not([app-icon-button]).mod-size-md.mod-with-icon {\n  padding-left: 16px;\n}\n.mod-color-negative[_nghost-%COMP%] {\n  background: rgba(var(--color-button-negative-background), var(--background-opacity));\n  color: rgb(var(--color-button-negative-text));\n}\n.mod-color-primary[_nghost-%COMP%] {\n  background: rgba(var(--color-button-primary-background), var(--background-opacity));\n  color: rgb(var(--color-button-primary-text));\n}\n.mod-color-primary[_nghost-%COMP%]:hover {\n  background: rgba(var(--color-button-primary-background-hover), var(--background-opacity));\n  color: rgb(var(--color-button-primary-text-hover));\n}\n.mod-color-grey[_nghost-%COMP%] {\n  background: rgba(var(--color-button-grey-background), var(--background-opacity));\n  color: rgb(var(--color-button-grey-text));\n}\n.mod-color-grey[_nghost-%COMP%]:hover {\n  background: rgba(var(--color-button-grey-background-hover), var(--background-opacity));\n  color: rgb(var(--color-button-grey-text-hover));\n}\n.mod-color-white[_nghost-%COMP%] {\n  background: rgba(var(--color-button-white-background), var(--background-opacity));\n  color: rgb(var(--color-button-white-text));\n}\n.mod-color-white[_nghost-%COMP%]:hover {\n  background: rgba(var(--color-button-white-background-hover), var(--background-opacity));\n  color: rgb(var(--color-button-white-text-hover));\n}\n[_nghost-%COMP%]:disabled {\n  background: rgb(var(--color-button-disabled-background));\n  color: rgb(var(--color-button-disabled-text));\n  pointer-events: none;\n}\n[_nghost-%COMP%]  svg-icon {\n  flex-shrink: 0;\n}"], changeDetection: 0 });


/***/ }),

/***/ 26910:
/*!***************************************************!*\
  !*** ./shared/components/button/button.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonModule": () => (/* binding */ ButtonModule)
/* harmony export */ });
/* harmony import */ var _button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.component */ 4013);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 89724);


class ButtonModule {
}
ButtonModule.ɵfac = function ButtonModule_Factory(t) { return new (t || ButtonModule)(); };
ButtonModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ButtonModule });
ButtonModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ButtonModule, { declarations: [_button_component__WEBPACK_IMPORTED_MODULE_0__.ButtonComponent], exports: [_button_component__WEBPACK_IMPORTED_MODULE_0__.ButtonComponent] }); })();


/***/ }),

/***/ 29149:
/*!*******************************************!*\
  !*** ./shared/components/button/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonModule": () => (/* reexport safe */ _button_module__WEBPACK_IMPORTED_MODULE_0__.ButtonModule)
/* harmony export */ });
/* harmony import */ var _button_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.module */ 26910);



/***/ }),

/***/ 84378:
/*!*********************************************************************************!*\
  !*** ./shared/components/controls/avatar-selector/avatar-selector.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvatarSelectorComponent": () => (/* binding */ AvatarSelectorComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1659);
/* harmony import */ var _ngneat_reactive_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/reactive-forms */ 18260);
/* harmony import */ var _avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../avatar */ 5066);
/* harmony import */ var _svg_icons_check__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../svg-icons/check */ 88974);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/svg-icon */ 66722);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 11048);
/* harmony import */ var _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../avatar/avatar.component */ 43191);








function AvatarSelectorComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "app-avatar", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AvatarSelectorComponent_div_0_Template_app_avatar_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const avatar_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.select(avatar_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "svg-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const avatar_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("is-active", avatar_r1 === ctx_r0.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("avatarUrl", avatar_r1);
} }
class AvatarSelectorComponent extends _ngneat_reactive_forms__WEBPACK_IMPORTED_MODULE_4__.ControlValueAccessor {
    constructor(changeDetectorRef, svgIconRegistry) {
        super();
        this.changeDetectorRef = changeDetectorRef;
        this.svgIconRegistry = svgIconRegistry;
        this.avatars = _avatar__WEBPACK_IMPORTED_MODULE_0__.USER_AVATARS;
        svgIconRegistry.register([
            _svg_icons_check__WEBPACK_IMPORTED_MODULE_1__.svgCheck,
        ]);
    }
    ngAfterViewInit() {
        this.value = this.value || this.avatars[0];
        this.onChange(this.value);
        this.changeDetectorRef.markForCheck();
    }
    select(avatar) {
        this.value = avatar;
        this.onChange(this.value);
    }
    writeValue(value) {
        this.value = value;
        this.changeDetectorRef.detectChanges();
    }
}
AvatarSelectorComponent.ɵfac = function AvatarSelectorComponent_Factory(t) { return new (t || AvatarSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_5__.SvgIconRegistry)); };
AvatarSelectorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AvatarSelectorComponent, selectors: [["app-avatar-selector"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NG_VALUE_ACCESSOR,
                useExisting: AvatarSelectorComponent,
                multi: true,
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "avatar-selector__avatar-container", 3, "is-active", 4, "ngFor", "ngForOf"], [1, "avatar-selector__avatar-container"], [1, "avatar-selector__avatar", 3, "avatarUrl", "click"], [1, "avatar-selector__check-icon-container"], ["key", "check", "size", "xs"]], template: function AvatarSelectorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AvatarSelectorComponent_div_0_Template, 4, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.avatars);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_2__.AvatarComponent, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_5__.SvgIconComponent], styles: ["[_nghost-%COMP%] {\n  column-gap: 8px;\n  display: flex;\n}\n\n.avatar-selector__avatar-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.avatar-selector__avatar-container.is-active[_ngcontent-%COMP%] {\n  border-color: #4F80FF;\n}\n\n.avatar-selector__avatar-container.is-active[_ngcontent-%COMP%]   .avatar-selector__check-icon-container[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n\n.avatar-selector__avatar-container.is-active[_ngcontent-%COMP%]   .avatar-selector__avatar[_ngcontent-%COMP%] {\n  border-color: #4F80FF;\n}\n\n.avatar-selector__avatar[_ngcontent-%COMP%] {\n  border: 2px solid transparent;\n  border-radius: 100%;\n  cursor: pointer;\n}\n\n.avatar-selector__check-icon-container[_ngcontent-%COMP%] {\n  background: #4F80FF;\n  border-radius: 100%;\n  bottom: 0;\n  color: #FFFFFF;\n  display: none;\n  right: 0;\n  position: absolute;\n}"], changeDetection: 0 });


/***/ }),

/***/ 66757:
/*!******************************************************************************!*\
  !*** ./shared/components/controls/avatar-selector/avatar-selector.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvatarSelectorModule": () => (/* binding */ AvatarSelectorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 11048);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/svg-icon */ 66722);
/* harmony import */ var _avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../avatar */ 5066);
/* harmony import */ var _avatar_selector_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avatar-selector.component */ 84378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 89724);





class AvatarSelectorModule {
}
AvatarSelectorModule.ɵfac = function AvatarSelectorModule_Factory(t) { return new (t || AvatarSelectorModule)(); };
AvatarSelectorModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AvatarSelectorModule });
AvatarSelectorModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _avatar__WEBPACK_IMPORTED_MODULE_0__.AvatarModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_4__.SvgIconsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AvatarSelectorModule, { declarations: [_avatar_selector_component__WEBPACK_IMPORTED_MODULE_1__.AvatarSelectorComponent], imports: [_avatar__WEBPACK_IMPORTED_MODULE_0__.AvatarModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_4__.SvgIconsModule], exports: [_avatar_selector_component__WEBPACK_IMPORTED_MODULE_1__.AvatarSelectorComponent] }); })();


/***/ }),

/***/ 83589:
/*!*************************************************************!*\
  !*** ./shared/components/controls/avatar-selector/index.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvatarSelectorModule": () => (/* reexport safe */ _avatar_selector_module__WEBPACK_IMPORTED_MODULE_0__.AvatarSelectorModule)
/* harmony export */ });
/* harmony import */ var _avatar_selector_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./avatar-selector.module */ 66757);



/***/ }),

/***/ 74085:
/*!*******************************************************************!*\
  !*** ./shared/components/controls/checkbox/checkbox.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckboxComponent": () => (/* binding */ CheckboxComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngneat/until-destroy */ 78177);
/* harmony import */ var _svg_icons_check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../svg-icons/check */ 88974);
/* harmony import */ var _input_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../input-container */ 10401);
/* harmony import */ var _custom_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../custom-control */ 61102);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1659);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngneat/svg-icon */ 66722);
/* harmony import */ var _directives_submit_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../directives/submit-source */ 71019);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 11048);
var CheckboxComponent_1;










function CheckboxComponent_svg_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "svg-icon", 3);
} }
const _c0 = ["*"];
let CheckboxComponent = CheckboxComponent_1 = class CheckboxComponent extends _custom_control__WEBPACK_IMPORTED_MODULE_2__.CustomControl {
    constructor(changeDetectorRef, elementRef, ngControl, renderer2, svgIconRegistry, submitSource) {
        super(changeDetectorRef, elementRef, ngControl, renderer2, submitSource);
        this.svgIconRegistry = svgIconRegistry;
    }
    ngOnInit() {
        this.svgIconRegistry.register([
            _svg_icons_check__WEBPACK_IMPORTED_MODULE_0__.svgCheck,
        ]);
        this.init();
    }
    toggle() {
        this.value = !this.value;
        this.onChange(this.value);
        this.onTouched();
    }
};
CheckboxComponent.ɵfac = function CheckboxComponent_Factory(t) { return new (t || CheckboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControl), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_6__.SvgIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_directives_submit_source__WEBPACK_IMPORTED_MODULE_3__.SubmitSourceDirective, 8)); };
CheckboxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CheckboxComponent, selectors: [["app-checkbox"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([
            {
                provide: _input_container__WEBPACK_IMPORTED_MODULE_1__.InputContainerControl,
                useExisting: CheckboxComponent_1,
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c0, decls: 4, vars: 3, consts: [[1, "checkbox__input", 3, "click"], ["key", "check", "size", "xs", 4, "ngIf"], [1, "checkbox__label"], ["key", "check", "size", "xs"]], template: function CheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CheckboxComponent_Template_div_click_0_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, CheckboxComponent_svg_icon_1_Template, 1, 0, "svg-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-active", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.value);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_6__.SvgIconComponent], styles: ["[_nghost-%COMP%] {\n  align-items: center;\n  column-gap: 8px;\n  display: inline-flex;\n}\n.is-invalid.is-submitted[_nghost-%COMP%]   .checkbox__input[_ngcontent-%COMP%], .is-invalid.is-touched[_nghost-%COMP%]   .checkbox__input[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-checkbox-invalid-border);\n}\n.checkbox__input[_ngcontent-%COMP%] {\n  background: var(--color-checkbox-background);\n  border-radius: 4px;\n  cursor: pointer;\n  height: 16px;\n  width: 16px;\n}\n.checkbox__input.is-active[_ngcontent-%COMP%] {\n  background-color: var(--color-checkbox-active-background);\n  color: var(--color-checkbox-active-color);\n}"], changeDetection: 0 });
CheckboxComponent = CheckboxComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__.UntilDestroy)()
], CheckboxComponent);



/***/ }),

/***/ 36207:
/*!****************************************************************!*\
  !*** ./shared/components/controls/checkbox/checkbox.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckboxModule": () => (/* binding */ CheckboxModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 11048);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/svg-icon */ 66722);
/* harmony import */ var _checkbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox.component */ 74085);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 89724);




class CheckboxModule {
}
CheckboxModule.ɵfac = function CheckboxModule_Factory(t) { return new (t || CheckboxModule)(); };
CheckboxModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CheckboxModule });
CheckboxModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_3__.SvgIconsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CheckboxModule, { declarations: [_checkbox_component__WEBPACK_IMPORTED_MODULE_0__.CheckboxComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_3__.SvgIconsModule], exports: [_checkbox_component__WEBPACK_IMPORTED_MODULE_0__.CheckboxComponent] }); })();


/***/ }),

/***/ 39575:
/*!******************************************************!*\
  !*** ./shared/components/controls/checkbox/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckboxComponent": () => (/* reexport safe */ _checkbox_component__WEBPACK_IMPORTED_MODULE_0__.CheckboxComponent),
/* harmony export */   "CheckboxModule": () => (/* reexport safe */ _checkbox_module__WEBPACK_IMPORTED_MODULE_1__.CheckboxModule)
/* harmony export */ });
/* harmony import */ var _checkbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox.component */ 74085);
/* harmony import */ var _checkbox_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox.module */ 36207);




/***/ }),

/***/ 61102:
/*!******************************************************!*\
  !*** ./shared/components/controls/custom-control.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomControl": () => (/* binding */ CustomControl)
/* harmony export */ });
/* harmony import */ var _ngneat_reactive_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/reactive-forms */ 18260);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9779);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 21860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9018);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 51927);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/until-destroy */ 78177);




class CustomControl extends _ngneat_reactive_forms__WEBPACK_IMPORTED_MODULE_0__.ControlValueAccessor {
    constructor(changeDetectorRef, elementRef, ngControl, renderer2, submitSource) {
        super();
        this.changeDetectorRef = changeDetectorRef;
        this.elementRef = elementRef;
        this.ngControl = ngControl;
        this.renderer2 = renderer2;
        this.submitSource = submitSource;
        this.touched = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        ngControl.valueAccessor = this;
    }
    set hasWarningError(value) {
        const warningClass = 'mod-warning';
        if (value) {
            this.renderer2.addClass(this.elementRef.nativeElement, warningClass);
        }
        else {
            this.renderer2.removeClass(this.elementRef.nativeElement, warningClass);
        }
    }
    init() {
        var _a, _b;
        (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)(this.ngControl.statusChanges, ((_a = this.submitSource) === null || _a === void 0 ? void 0 : _a.statusChanges) || rxjs__WEBPACK_IMPORTED_MODULE_3__.EMPTY, ((_b = this.submitSource) === null || _b === void 0 ? void 0 : _b.ngSubmit) || rxjs__WEBPACK_IMPORTED_MODULE_3__.EMPTY, this.touched).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.startWith)(0), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.untilDestroyed)(this)).subscribe(() => {
            var _a;
            const emptyClass = 'is-empty';
            const invalidClass = 'is-invalid';
            const touchedClass = 'is-touched';
            const submittedClass = 'is-submitted';
            if (this.value) {
                this.renderer2.removeClass(this.elementRef.nativeElement, emptyClass);
            }
            else {
                this.renderer2.addClass(this.elementRef.nativeElement, emptyClass);
            }
            if (this.ngControl.invalid) {
                this.renderer2.addClass(this.elementRef.nativeElement, invalidClass);
            }
            else {
                this.renderer2.removeClass(this.elementRef.nativeElement, invalidClass);
            }
            if (this.ngControl.touched) {
                this.renderer2.addClass(this.elementRef.nativeElement, touchedClass);
            }
            else {
                this.renderer2.removeClass(this.elementRef.nativeElement, touchedClass);
            }
            if ((_a = this.submitSource) === null || _a === void 0 ? void 0 : _a.submitted) {
                this.renderer2.addClass(this.elementRef.nativeElement, submittedClass);
            }
            else {
                this.renderer2.removeClass(this.elementRef.nativeElement, submittedClass);
            }
        });
    }
    registerOnTouched(fn) {
        this.onTouched = () => {
            fn();
            this.touched.next();
        };
    }
    writeValue(value) {
        this.value = value;
        this.changeDetectorRef.markForCheck();
    }
    setDisabledState(isDisabled) {
        const disabledClass = 'is-disabled';
        this.isDisabled = isDisabled;
        if (isDisabled) {
            this.renderer2.addClass(this.elementRef.nativeElement, disabledClass);
        }
        else {
            this.renderer2.removeClass(this.elementRef.nativeElement, disabledClass);
        }
    }
}


/***/ }),

/***/ 34316:
/*!***********************************************************************!*\
  !*** ./shared/components/controls/date-input/date-input.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateInputComponent": () => (/* binding */ DateInputComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ngneat_input_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/input-mask */ 52707);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngneat/until-destroy */ 78177);
/* harmony import */ var _utils_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/browser */ 94240);
/* harmony import */ var _input_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../input-container */ 10401);
/* harmony import */ var _custom_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../custom-control */ 61102);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1659);
/* harmony import */ var _directives_submit_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../directives/submit-source */ 71019);
/* harmony import */ var _directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../directives/typeface/typeface.directive */ 31857);
var DateInputComponent_1;











const _c0 = ["inputElement"];
const _c1 = [[["", "label", ""]], [["", "label-right", ""]]];
const _c2 = ["[label]", "[label-right]"];
let DateInputComponent = DateInputComponent_1 = class DateInputComponent extends _custom_control__WEBPACK_IMPORTED_MODULE_2__.CustomControl {
    constructor(changeDetectorRef, elementRef, ngControl, renderer2, submitSource) {
        super(changeDetectorRef, elementRef, ngControl, renderer2, submitSource);
        this.isOpenedInPopup = !(0,_utils_browser__WEBPACK_IMPORTED_MODULE_0__.isOpenedInTab)();
        this.inputFormat = 'yyyy-mm-dd';
        this.dateInputMask = (0,_ngneat_input_mask__WEBPACK_IMPORTED_MODULE_5__.createMask)({
            alias: 'datetime',
            inputFormat: this.inputFormat,
            parser: (value) => value,
        });
    }
    ngOnInit() {
        this.init();
    }
    onClick() {
        if (this.isFocused || this.isDisabled) {
            return;
        }
        this.inputElement.nativeElement.focus();
    }
    onFocus() {
        this.isFocused = true;
    }
    onBlur() {
        this.isFocused = false;
        this.onTouched();
    }
    onValueChange(date) {
        this.value = date;
        this.onChange(this.value);
    }
};
DateInputComponent.ɵfac = function DateInputComponent_Factory(t) { return new (t || DateInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControl), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_directives_submit_source__WEBPACK_IMPORTED_MODULE_3__.SubmitSourceDirective, 8)); };
DateInputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: DateInputComponent, selectors: [["app-date-input"]], viewQuery: function DateInputComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.inputElement = _t.first);
    } }, hostBindings: function DateInputComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DateInputComponent_click_HostBindingHandler() { return ctx.onClick(); });
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([
            {
                provide: _input_container__WEBPACK_IMPORTED_MODULE_1__.InputContainerControl,
                useExisting: DateInputComponent_1,
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c2, decls: 6, vars: 4, consts: [[1, "input__label", 3, "appTypeface"], [1, "input__container"], [1, "input", 3, "placeholder", "ngModel", "inputMask", "ngModelChange", "focus", "blur"], ["inputElement", ""]], template: function DateInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojection"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 1)(4, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function DateInputComponent_Template_input_ngModelChange_4_listener($event) { return ctx.value = $event; })("ngModelChange", function DateInputComponent_Template_input_ngModelChange_4_listener($event) { return ctx.onValueChange($event); })("focus", function DateInputComponent_Template_input_focus_4_listener() { return ctx.onFocus(); })("blur", function DateInputComponent_Template_input_blur_4_listener() { return ctx.onBlur(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("appTypeface", ctx.isOpenedInPopup ? "caption" : "paragraph");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placeholder", ctx.inputFormat)("ngModel", ctx.value)("inputMask", ctx.dateInputMask);
    } }, directives: [_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_4__.TypefaceDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _ngneat_input_mask__WEBPACK_IMPORTED_MODULE_5__.InputMaskDirective], styles: ["[_nghost-%COMP%] {\n  background-color: var(--color-input-background);\n  border-radius: 12px;\n  display: block;\n  padding: 16px;\n  width: 100%;\n}\n.is-invalid.is-submitted[_nghost-%COMP%]   .input__label[_ngcontent-%COMP%], .is-invalid.is-touched[_nghost-%COMP%]   .input__label[_ngcontent-%COMP%] {\n  color: var(--color-input-invalid-color);\n}\n.is-disabled[_nghost-%COMP%]   .input__label[_ngcontent-%COMP%], .is-disabled[_nghost-%COMP%]   .input[_ngcontent-%COMP%] {\n  color: var(--color-input-disabled-text);\n  pointer-events: none;\n}\n.input__label[_ngcontent-%COMP%] {\n  color: var(--color-input-label);\n  display: flex;\n  justify-content: space-between;\n}\n.input[_ngcontent-%COMP%] {\n  background-color: inherit;\n  color: var(--color-main-text);\n  font: inherit;\n  font-weight: 500;\n  padding: 0;\n  width: 100%;\n}\n.input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-input-placeholder);\n  font-weight: normal;\n}"], changeDetection: 0 });
DateInputComponent = DateInputComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__.UntilDestroy)()
], DateInputComponent);



/***/ }),

/***/ 4743:
/*!********************************************************************!*\
  !*** ./shared/components/controls/date-input/date-input.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateInputModule": () => (/* binding */ DateInputModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1659);
/* harmony import */ var _ngneat_input_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/input-mask */ 52707);
/* harmony import */ var _directives_typeface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../directives/typeface */ 2703);
/* harmony import */ var _form_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../form-error */ 1674);
/* harmony import */ var _date_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date-input.component */ 34316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 89724);






class DateInputModule {
}
DateInputModule.ɵfac = function DateInputModule_Factory(t) { return new (t || DateInputModule)(); };
DateInputModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DateInputModule });
DateInputModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _form_error__WEBPACK_IMPORTED_MODULE_1__.FormErrorModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ngneat_input_mask__WEBPACK_IMPORTED_MODULE_5__.InputMaskModule,
            _directives_typeface__WEBPACK_IMPORTED_MODULE_0__.TypefaceModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DateInputModule, { declarations: [_date_input_component__WEBPACK_IMPORTED_MODULE_2__.DateInputComponent], imports: [_form_error__WEBPACK_IMPORTED_MODULE_1__.FormErrorModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ngneat_input_mask__WEBPACK_IMPORTED_MODULE_5__.InputMaskModule,
        _directives_typeface__WEBPACK_IMPORTED_MODULE_0__.TypefaceModule], exports: [_date_input_component__WEBPACK_IMPORTED_MODULE_2__.DateInputComponent] }); })();


/***/ }),

/***/ 56919:
/*!*******************************************************************!*\
  !*** ./shared/components/controls/date-input/date-input.utils.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseDateValue": () => (/* binding */ parseDateValue)
/* harmony export */ });
const parseDateValue = (value) => {
    const values = value.split('-');
    const year = +values[0];
    const month = +values[1] - 1;
    const day = +values[2];
    return {
        year,
        month,
        day,
    };
};


/***/ }),

/***/ 25786:
/*!********************************************************!*\
  !*** ./shared/components/controls/date-input/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateInputModule": () => (/* reexport safe */ _date_input_module__WEBPACK_IMPORTED_MODULE_0__.DateInputModule),
/* harmony export */   "parseDateValue": () => (/* reexport safe */ _date_input_utils__WEBPACK_IMPORTED_MODULE_1__.parseDateValue)
/* harmony export */ });
/* harmony import */ var _date_input_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date-input.module */ 4743);
/* harmony import */ var _date_input_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-input.utils */ 56919);




/***/ }),

/***/ 97534:
/*!*********************************************************************************!*\
  !*** ./shared/components/controls/gender-selector/gender-selector.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenderSelectorComponent": () => (/* binding */ GenderSelectorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngneat/until-destroy */ 78177);
/* harmony import */ var decentr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! decentr-js */ 14000);
/* harmony import */ var decentr_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(decentr_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/browser */ 94240);
/* harmony import */ var _input_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../input-container */ 10401);
/* harmony import */ var _custom_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../custom-control */ 61102);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1659);
/* harmony import */ var _directives_submit_source__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../directives/submit-source */ 71019);
/* harmony import */ var _directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../directives/typeface/typeface.directive */ 31857);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ 51450);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 5095);
var GenderSelectorComponent_1;












const _c0 = [[["", "label", ""]], [["", "label-right", ""]]];
const _c1 = ["[label]", "[label-right]"];
let GenderSelectorComponent = GenderSelectorComponent_1 = class GenderSelectorComponent extends _custom_control__WEBPACK_IMPORTED_MODULE_3__.CustomControl {
    constructor(changeDetectorRef, elementRef, ngControl, renderer2, submitSource) {
        super(changeDetectorRef, elementRef, ngControl, renderer2, submitSource);
        this.translations = {
            [decentr_js__WEBPACK_IMPORTED_MODULE_0__.Gender.Female]: decentr_js__WEBPACK_IMPORTED_MODULE_0__.Gender.Female,
            [decentr_js__WEBPACK_IMPORTED_MODULE_0__.Gender.Male]: decentr_js__WEBPACK_IMPORTED_MODULE_0__.Gender.Male,
            unspecified: decentr_js__WEBPACK_IMPORTED_MODULE_0__.Gender.Unspecified,
        };
        this.isOpenedInPopup = !(0,_utils_browser__WEBPACK_IMPORTED_MODULE_1__.isOpenedInTab)();
        this.gender = decentr_js__WEBPACK_IMPORTED_MODULE_0__.Gender;
    }
    ngOnInit() {
        this.init();
    }
    onValueChange(newValue) {
        this.value = newValue;
        this.onChange(this.value);
    }
};
GenderSelectorComponent.ɵfac = function GenderSelectorComponent_Factory(t) { return new (t || GenderSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControl), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_directives_submit_source__WEBPACK_IMPORTED_MODULE_4__.SubmitSourceDirective, 8)); };
GenderSelectorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: GenderSelectorComponent, selectors: [["app-gender-selector"]], inputs: { placeholder: "placeholder", translations: "translations" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([
            {
                provide: _input_container__WEBPACK_IMPORTED_MODULE_2__.InputContainerControl,
                useExisting: GenderSelectorComponent_1,
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c1, decls: 11, vars: 9, consts: [[1, "input__label", 3, "appTypeface"], [1, "input__container"], [3, "ngModel", "placeholder", "ngModelChange"], [3, "value"]], template: function GenderSelectorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojection"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 1)(4, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function GenderSelectorComponent_Template_mat_select_ngModelChange_4_listener($event) { return ctx.onValueChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("appTypeface", ctx.isOpenedInPopup ? "caption" : "paragraph");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.value)("placeholder", ctx.placeholder || "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.gender.Unspecified);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.translations.unspecified, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.gender.Male);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.translations[ctx.gender.Male], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.gender.Female);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.translations[ctx.gender.Female], " ");
    } }, directives: [_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_5__.TypefaceDirective, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOption], styles: ["[_nghost-%COMP%] {\n  background-color: var(--color-input-background);\n  border-radius: 12px;\n  display: block;\n  padding: 16px;\n  width: 100%;\n}\n.is-invalid.is-submitted[_nghost-%COMP%]   .input__label[_ngcontent-%COMP%], .is-invalid.is-touched[_nghost-%COMP%]   .input__label[_ngcontent-%COMP%] {\n  color: var(--color-input-invalid-color);\n}\n.is-disabled[_nghost-%COMP%]   .input__label[_ngcontent-%COMP%], .is-disabled[_nghost-%COMP%]   .input[_ngcontent-%COMP%] {\n  color: var(--color-input-disabled-text);\n  pointer-events: none;\n}\n.input__label[_ngcontent-%COMP%] {\n  color: var(--color-input-label);\n  display: flex;\n  justify-content: space-between;\n}\n.input__container[_ngcontent-%COMP%] {\n  column-gap: 16px;\n  display: flex;\n  font-weight: 500;\n  justify-content: space-between;\n}\n  mat-select .mat-select-placeholder {\n  color: var(--color-input-placeholder);\n  font-weight: 400;\n}\n  mat-select .mat-select-value {\n  color: var(--color-main-text);\n}\n  mat-select .mat-select-arrow {\n  color: var(--color-input-icon);\n}"], changeDetection: 0 });
GenderSelectorComponent = GenderSelectorComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__.UntilDestroy)()
], GenderSelectorComponent);



/***/ }),

/***/ 75445:
/*!***********************************************************************************!*\
  !*** ./shared/components/controls/gender-selector/gender-selector.definitions.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var decentr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! decentr-js */ 14000);
/* harmony import */ var decentr_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(decentr_js__WEBPACK_IMPORTED_MODULE_0__);



/***/ }),

/***/ 31588:
/*!******************************************************************************!*\
  !*** ./shared/components/controls/gender-selector/gender-selector.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenderSelectorModule": () => (/* binding */ GenderSelectorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 11048);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1659);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ 51450);
/* harmony import */ var _directives_typeface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../directives/typeface */ 2703);
/* harmony import */ var _gender_selector_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gender-selector.component */ 97534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 89724);






class GenderSelectorModule {
}
GenderSelectorModule.ɵfac = function GenderSelectorModule_Factory(t) { return new (t || GenderSelectorModule)(); };
GenderSelectorModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: GenderSelectorModule });
GenderSelectorModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_5__.MatSelectModule,
            _directives_typeface__WEBPACK_IMPORTED_MODULE_0__.TypefaceModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](GenderSelectorModule, { declarations: [_gender_selector_component__WEBPACK_IMPORTED_MODULE_1__.GenderSelectorComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_5__.MatSelectModule,
        _directives_typeface__WEBPACK_IMPORTED_MODULE_0__.TypefaceModule], exports: [_gender_selector_component__WEBPACK_IMPORTED_MODULE_1__.GenderSelectorComponent] }); })();


/***/ }),

/***/ 10833:
/*!*************************************************************!*\
  !*** ./shared/components/controls/gender-selector/index.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenderSelectorModule": () => (/* reexport safe */ _gender_selector_module__WEBPACK_IMPORTED_MODULE_1__.GenderSelectorModule)
/* harmony export */ });
/* harmony import */ var _gender_selector_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gender-selector.definitions */ 75445);
/* harmony import */ var _gender_selector_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gender-selector.module */ 31588);




/***/ }),

/***/ 41253:
/*!*********************************************!*\
  !*** ./shared/components/controls/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvatarSelectorModule": () => (/* reexport safe */ _avatar_selector__WEBPACK_IMPORTED_MODULE_0__.AvatarSelectorModule),
/* harmony export */   "CheckboxComponent": () => (/* reexport safe */ _checkbox__WEBPACK_IMPORTED_MODULE_1__.CheckboxComponent),
/* harmony export */   "CheckboxModule": () => (/* reexport safe */ _checkbox__WEBPACK_IMPORTED_MODULE_1__.CheckboxModule),
/* harmony export */   "DateInputModule": () => (/* reexport safe */ _date_input__WEBPACK_IMPORTED_MODULE_2__.DateInputModule),
/* harmony export */   "GenderSelectorModule": () => (/* reexport safe */ _gender_selector__WEBPACK_IMPORTED_MODULE_3__.GenderSelectorModule),
/* harmony export */   "InputComponent": () => (/* reexport safe */ _input__WEBPACK_IMPORTED_MODULE_4__.InputComponent),
/* harmony export */   "InputModule": () => (/* reexport safe */ _input__WEBPACK_IMPORTED_MODULE_4__.InputModule),
/* harmony export */   "parseDateValue": () => (/* reexport safe */ _date_input__WEBPACK_IMPORTED_MODULE_2__.parseDateValue)
/* harmony export */ });
/* harmony import */ var _avatar_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./avatar-selector */ 83589);
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox */ 39575);
/* harmony import */ var _date_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date-input */ 25786);
/* harmony import */ var _gender_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gender-selector */ 10833);
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input */ 43101);







/***/ }),

/***/ 43101:
/*!***************************************************!*\
  !*** ./shared/components/controls/input/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputComponent": () => (/* reexport safe */ _input_component__WEBPACK_IMPORTED_MODULE_0__.InputComponent),
/* harmony export */   "InputModule": () => (/* reexport safe */ _input_module__WEBPACK_IMPORTED_MODULE_1__.InputModule)
/* harmony export */ });
/* harmony import */ var _input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input.component */ 49874);
/* harmony import */ var _input_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input.module */ 69914);




/***/ }),

/***/ 49874:
/*!*************************************************************!*\
  !*** ./shared/components/controls/input/input.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputComponent": () => (/* binding */ InputComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngneat/until-destroy */ 78177);
/* harmony import */ var _svg_icons_eye_crossed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../svg-icons/eye-crossed */ 69072);
/* harmony import */ var _svg_icons_eye__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../svg-icons/eye */ 75180);
/* harmony import */ var _utils_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/browser */ 94240);
/* harmony import */ var _input_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../input-container */ 10401);
/* harmony import */ var _custom_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../custom-control */ 61102);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1659);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngneat/svg-icon */ 66722);
/* harmony import */ var _directives_submit_source__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../directives/submit-source */ 71019);
/* harmony import */ var _directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../directives/typeface/typeface.directive */ 31857);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 11048);
/* harmony import */ var ngx_trim_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-trim-directive */ 96656);
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/text-field */ 34670);
/* harmony import */ var _directives_auto_focus_auto_focus_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../directives/auto-focus/auto-focus.directive */ 39757);
/* harmony import */ var _directives_numeric_numeric_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../directives/numeric/numeric.directive */ 31487);
var InputComponent_1;

















const _c0 = ["inputElement"];
const _c1 = ["textareaElement"];
function InputComponent_ng_template_4_Template(rf, ctx) { }
function InputComponent_svg_icon_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "svg-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function InputComponent_svg_icon_5_Template_svg_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r7.onEyeClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("key", ctx_r1.valueSecured ? "eye-crossed" : "eye");
} }
function InputComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "textarea", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function InputComponent_ng_template_9_Template_textarea_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r10.onValueChange($event); })("focus", function InputComponent_ng_template_9_Template_textarea_focus_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r12.onFocus(); })("blur", function InputComponent_ng_template_9_Template_textarea_blur_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r13.onBlur(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("cdkTextareaAutosize", ctx_r4.resize)("cdkAutosizeMinRows", ctx_r4.rows)("rows", ctx_r4.rows)("maxlength", ctx_r4.maxlength)("placeholder", ctx_r4.placeholder || "")("disabled", ctx_r4.isDisabled)("ngModel", ctx_r4.value)("appAutoFocus", ctx_r4.autofocus);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("spellcheck", ctx_r4.spellcheck)("type", ctx_r4.type === "password" && ctx_r4.valueSecured ? "password" : "text");
} }
function InputComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "input", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function InputComponent_ng_template_11_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r15.onValueChange($event); })("focus", function InputComponent_ng_template_11_Template_input_focus_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r17.onFocus(); })("blur", function InputComponent_ng_template_11_Template_input_blur_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r18.onBlur(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("placeholder", ctx_r6.placeholder || "")("maxlength", ctx_r6.maxlength)("type", ctx_r6.type === "password" && ctx_r6.valueSecured ? "password" : "text")("disabled", ctx_r6.isDisabled)("ngModel", ctx_r6.value)("appNumeric", ctx_r6.numeric)("appAutoFocus", ctx_r6.autofocus);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("spellcheck", ctx_r6.spellcheck);
} }
const _c2 = [[["", "label", ""]], [["", "label-right", ""]], [["", "footer", ""]]];
const _c3 = ["[label]", "[label-right]", "[footer]"];
let InputComponent = InputComponent_1 = class InputComponent extends _custom_control__WEBPACK_IMPORTED_MODULE_4__.CustomControl {
    constructor(changeDetectorRef, elementRef, ngControl, renderer2, svgIconRegistry, submitSource) {
        super(changeDetectorRef, elementRef, ngControl, renderer2, submitSource);
        this.svgIconRegistry = svgIconRegistry;
        this.rows = 1;
        this.resize = true;
        this.type = 'text';
        this.eye = true;
        this.maxlength = -1;
        this.numeric = false;
        this.autofocus = false;
        this.spellcheck = undefined;
        this.typefaceParagraph = true;
        this.isOpenedInPopup = !(0,_utils_browser__WEBPACK_IMPORTED_MODULE_2__.isOpenedInTab)();
        this.valueSecured = true;
        this.browser = (0,_utils_browser__WEBPACK_IMPORTED_MODULE_2__.detectBrowser)();
    }
    get hasEye() {
        return this.type === 'password' && this.eye;
    }
    get useTextArea() {
        return this.rows > 1 && !(this.browser === _utils_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserType.Firefox && this.type === 'password' && this.valueSecured);
    }
    ngOnInit() {
        this.svgIconRegistry.register([
            _svg_icons_eye__WEBPACK_IMPORTED_MODULE_1__.svgEye,
            _svg_icons_eye_crossed__WEBPACK_IMPORTED_MODULE_0__.svgEyeCrossed,
        ]);
        this.init();
    }
    onClick() {
        if (this.isFocused || this.isDisabled) {
            return;
        }
        (this.inputElement || this.textareaElement).nativeElement.focus();
    }
    onFocus() {
        this.isFocused = true;
    }
    onBlur() {
        this.isFocused = false;
        this.onTouched();
    }
    onEyeClick() {
        this.valueSecured = !this.valueSecured;
    }
    onValueChange(newValue) {
        this.value = newValue;
        this.onChange(this.value);
    }
};
InputComponent.ɵfac = function InputComponent_Factory(t) { return new (t || InputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControl), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_11__.SvgIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_directives_submit_source__WEBPACK_IMPORTED_MODULE_5__.SubmitSourceDirective, 8)); };
InputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: InputComponent, selectors: [["app-input"]], viewQuery: function InputComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.inputElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.textareaElement = _t.first);
    } }, hostVars: 4, hostBindings: function InputComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function InputComponent_click_HostBindingHandler() { return ctx.onClick(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("typeface-paragraph", ctx.typefaceParagraph)("has-eye", ctx.hasEye);
    } }, inputs: { rows: "rows", resize: "resize", type: "type", eye: "eye", placeholder: "placeholder", maxlength: "maxlength", numeric: "numeric", autofocus: "autofocus", spellcheck: "spellcheck" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵProvidersFeature"]([
            {
                provide: _input_container__WEBPACK_IMPORTED_MODULE_3__.InputContainerControl,
                useExisting: InputComponent_1,
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c3, decls: 13, vars: 8, consts: [["appTypeface", "paragraph", 1, "input__label", 3, "appTypeface"], [1, "input__container"], [3, "ngIf", "ngIfThen", "ngIfElse"], ["class", "input__eye", 3, "key", "click", 4, "ngIf"], [1, "input__footer", 3, "appTypeface"], ["footer", ""], ["textArea", ""], ["input", ""], [1, "input__eye", 3, "key", "click"], ["trim", "blur", 1, "input", "mod-textarea", 3, "cdkTextareaAutosize", "cdkAutosizeMinRows", "rows", "maxlength", "placeholder", "disabled", "ngModel", "appAutoFocus", "ngModelChange", "focus", "blur"], ["textareaElement", ""], ["trim", "blur", 1, "input", 3, "placeholder", "maxlength", "type", "disabled", "ngModel", "appNumeric", "appAutoFocus", "ngModelChange", "focus", "blur"], ["inputElement", ""]], template: function InputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵprojectionDef"](_c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵprojection"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, InputComponent_ng_template_4_Template, 0, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, InputComponent_svg_icon_5_Template, 1, 1, "svg-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵprojection"](8, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, InputComponent_ng_template_9_Template, 2, 10, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, InputComponent_ng_template_11_Template, 2, 8, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](7);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](10);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("appTypeface", ctx.isOpenedInPopup ? "caption" : "paragraph");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.useTextArea)("ngIfThen", _r3)("ngIfElse", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.type === "password" && ctx.eye);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("mod-visible", _r2.childNodes.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("appTypeface", ctx.isOpenedInPopup ? "caption" : "paragraph");
    } }, directives: [_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_6__.TypefaceDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_11__.SvgIconComponent, ngx_trim_directive__WEBPACK_IMPORTED_MODULE_13__.NgxTrimDirective, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_14__.CdkTextareaAutosize, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _directives_auto_focus_auto_focus_directive__WEBPACK_IMPORTED_MODULE_7__.AutoFocusDirective, _directives_numeric_numeric_directive__WEBPACK_IMPORTED_MODULE_8__.NumericDirective], styles: ["[_nghost-%COMP%] {\n  background-color: var(--color-input-background);\n  border-radius: 12px;\n  display: block;\n  padding: 16px;\n  width: 100%;\n}\n.is-submitted.mod-warning[_nghost-%COMP%]   .input__label[_ngcontent-%COMP%], .is-touched.mod-warning[_nghost-%COMP%]   .input__label[_ngcontent-%COMP%] {\n  color: var(--color-input-label-warning);\n}\n.is-submitted.is-invalid[_nghost-%COMP%]   .input__label[_ngcontent-%COMP%], .is-touched.is-invalid[_nghost-%COMP%]   .input__label[_ngcontent-%COMP%] {\n  color: var(--color-input-label-invalid);\n}\n.is-disabled[_nghost-%COMP%]   .input[_ngcontent-%COMP%] {\n  color: var(--color-input-disabled-text);\n  pointer-events: none;\n}\n.is-empty[_nghost-%COMP%]   .input__eye[_ngcontent-%COMP%] {\n  color: var(--color-input-icon);\n}\n.has-eye[_nghost-%COMP%]   .input__container[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1fr) min-content;\n}\n.input__label[_ngcontent-%COMP%] {\n  color: var(--color-input-label);\n  display: flex;\n  justify-content: space-between;\n}\n.input__container[_ngcontent-%COMP%] {\n  grid-column-gap: 16px;\n  column-gap: 16px;\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  justify-content: space-between;\n  margin-top: 8px;\n}\n.input__container[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 8px;\n}\n.input__eye[_ngcontent-%COMP%] {\n  color: var(--color-input-icon);\n  cursor: pointer;\n  flex-shrink: 0;\n}\n.input[_ngcontent-%COMP%] {\n  background-color: inherit;\n  color: var(--color-input-text);\n  font: inherit;\n  font-weight: 500;\n  padding: 0;\n  resize: none;\n  text-align: inherit;\n  width: 100%;\n}\n.input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-input-placeholder);\n  font-weight: normal;\n}\n.input.mod-textarea[type=password][_ngcontent-%COMP%] {\n  -webkit-text-security: disc;\n}\n.input__footer[_ngcontent-%COMP%] {\n  color: var(--color-input-footer);\n  display: none;\n}\n.input__footer.mod-visible[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 8px;\n}"], changeDetection: 0 });
InputComponent = InputComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_16__.UntilDestroy)()
], InputComponent);



/***/ }),

/***/ 69914:
/*!**********************************************************!*\
  !*** ./shared/components/controls/input/input.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputModule": () => (/* binding */ InputModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 11048);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1659);
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/text-field */ 34670);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngneat/svg-icon */ 66722);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngneat/transloco */ 47860);
/* harmony import */ var ngx_trim_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-trim-directive */ 96656);
/* harmony import */ var _directives_auto_focus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../directives/auto-focus */ 2228);
/* harmony import */ var _directives_numeric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../directives/numeric */ 6231);
/* harmony import */ var _directives_typeface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../directives/typeface */ 2703);
/* harmony import */ var _input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input.component */ 49874);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 89724);











class InputModule {
}
InputModule.ɵfac = function InputModule_Factory(t) { return new (t || InputModule)(); };
InputModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: InputModule });
InputModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _directives_auto_focus__WEBPACK_IMPORTED_MODULE_0__.AutoFocusModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            ngx_trim_directive__WEBPACK_IMPORTED_MODULE_7__.NgxTrimDirectiveModule,
            _directives_numeric__WEBPACK_IMPORTED_MODULE_1__.NumericModule,
            _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_8__.SvgIconsModule,
            _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_9__.TextFieldModule,
            _ngneat_transloco__WEBPACK_IMPORTED_MODULE_10__.TranslocoModule,
            _directives_typeface__WEBPACK_IMPORTED_MODULE_2__.TypefaceModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](InputModule, { declarations: [_input_component__WEBPACK_IMPORTED_MODULE_3__.InputComponent], imports: [_directives_auto_focus__WEBPACK_IMPORTED_MODULE_0__.AutoFocusModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        ngx_trim_directive__WEBPACK_IMPORTED_MODULE_7__.NgxTrimDirectiveModule,
        _directives_numeric__WEBPACK_IMPORTED_MODULE_1__.NumericModule,
        _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_8__.SvgIconsModule,
        _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_9__.TextFieldModule,
        _ngneat_transloco__WEBPACK_IMPORTED_MODULE_10__.TranslocoModule,
        _directives_typeface__WEBPACK_IMPORTED_MODULE_2__.TypefaceModule], exports: [_input_component__WEBPACK_IMPORTED_MODULE_3__.InputComponent] }); })();


/***/ }),

/***/ 56693:
/*!**********************************************************************************!*\
  !*** ./shared/components/currency-symbol/component/currency-symbol.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencySymbolComponent": () => (/* binding */ CurrencySymbolComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _currency_symbol_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../currency-symbol.service */ 45866);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 11048);



class CurrencySymbolComponent {
    constructor(currencySymbolService) {
        this.currencySymbolService = currencySymbolService;
    }
    ngOnInit() {
        this.symbol$ = this.currencySymbolService.getSymbol();
    }
}
CurrencySymbolComponent.ɵfac = function CurrencySymbolComponent_Factory(t) { return new (t || CurrencySymbolComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_currency_symbol_service__WEBPACK_IMPORTED_MODULE_0__.CurrencySymbolService)); };
CurrencySymbolComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CurrencySymbolComponent, selectors: [["app-currency-symbol"]], decls: 2, vars: 3, template: function CurrencySymbolComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.symbol$), "\n");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe], styles: ["[_nghost-%COMP%] {\n  display: inline-flex;\n}"], changeDetection: 0 });


/***/ }),

/***/ 17841:
/*!**************************************************************!*\
  !*** ./shared/components/currency-symbol/component/index.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencySymbolComponent": () => (/* reexport safe */ _currency_symbol_component__WEBPACK_IMPORTED_MODULE_0__.CurrencySymbolComponent)
/* harmony export */ });
/* harmony import */ var _currency_symbol_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currency-symbol.component */ 56693);



/***/ }),

/***/ 94461:
/*!*********************************************************************!*\
  !*** ./shared/components/currency-symbol/currency-symbol.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencySymbolModule": () => (/* binding */ CurrencySymbolModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 11048);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ 17841);
/* harmony import */ var _pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipe */ 1720);
/* harmony import */ var _currency_symbol_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./currency-symbol.service */ 45866);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 89724);





class CurrencySymbolModule {
}
CurrencySymbolModule.ɵfac = function CurrencySymbolModule_Factory(t) { return new (t || CurrencySymbolModule)(); };
CurrencySymbolModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CurrencySymbolModule });
CurrencySymbolModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        _currency_symbol_service__WEBPACK_IMPORTED_MODULE_2__.CurrencySymbolService,
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CurrencySymbolModule, { declarations: [_component__WEBPACK_IMPORTED_MODULE_0__.CurrencySymbolComponent,
        _pipe__WEBPACK_IMPORTED_MODULE_1__.CurrencySymbolPipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule], exports: [_component__WEBPACK_IMPORTED_MODULE_0__.CurrencySymbolComponent,
        _pipe__WEBPACK_IMPORTED_MODULE_1__.CurrencySymbolPipe] }); })();


/***/ }),

/***/ 45866:
/*!**********************************************************************!*\
  !*** ./shared/components/currency-symbol/currency-symbol.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencySymbolService": () => (/* binding */ CurrencySymbolService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 74970);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _services_network_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/network-storage */ 98420);



class CurrencySymbolService {
    constructor(networkBrowserStorageService) {
        this.networkBrowserStorageService = networkBrowserStorageService;
    }
    getSymbol() {
        return this.networkBrowserStorageService.getActiveId().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(Boolean), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((networkId) => {
            switch (networkId) {
                case 'testnet': {
                    return 'tDEC';
                }
                default: {
                    return 'DEC';
                }
            }
        }));
    }
}
CurrencySymbolService.ɵfac = function CurrencySymbolService_Factory(t) { return new (t || CurrencySymbolService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_network_storage__WEBPACK_IMPORTED_MODULE_0__.NetworkBrowserStorageService)); };
CurrencySymbolService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CurrencySymbolService, factory: CurrencySymbolService.ɵfac });


/***/ }),

/***/ 54411:
/*!****************************************************!*\
  !*** ./shared/components/currency-symbol/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencySymbolModule": () => (/* reexport safe */ _currency_symbol_module__WEBPACK_IMPORTED_MODULE_0__.CurrencySymbolModule),
/* harmony export */   "CurrencySymbolService": () => (/* reexport safe */ _currency_symbol_service__WEBPACK_IMPORTED_MODULE_1__.CurrencySymbolService)
/* harmony export */ });
/* harmony import */ var _currency_symbol_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currency-symbol.module */ 94461);
/* harmony import */ var _currency_symbol_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency-symbol.service */ 45866);




/***/ }),

/***/ 3901:
/*!************************************************************************!*\
  !*** ./shared/components/currency-symbol/pipe/currency-symbol.pipe.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencySymbolPipe": () => (/* binding */ CurrencySymbolPipe)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _currency_symbol_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../currency-symbol.service */ 45866);



class CurrencySymbolPipe {
    constructor(currencySymbolService) {
        this.currencySymbolService = currencySymbolService;
    }
    transform(target, comma = false) {
        return this.currencySymbolService.getSymbol().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((symbol) => [target, symbol].join(comma ? ', ' : ' ')));
    }
}
CurrencySymbolPipe.ɵfac = function CurrencySymbolPipe_Factory(t) { return new (t || CurrencySymbolPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_currency_symbol_service__WEBPACK_IMPORTED_MODULE_0__.CurrencySymbolService, 16)); };
CurrencySymbolPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({ name: "appCurrencySymbol", type: CurrencySymbolPipe, pure: true });


/***/ }),

/***/ 1720:
/*!*********************************************************!*\
  !*** ./shared/components/currency-symbol/pipe/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencySymbolPipe": () => (/* reexport safe */ _currency_symbol_pipe__WEBPACK_IMPORTED_MODULE_0__.CurrencySymbolPipe)
/* harmony export */ });
/* harmony import */ var _currency_symbol_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currency-symbol.pipe */ 3901);



/***/ }),

/***/ 61926:
/*!**************************************************************!*\
  !*** ./shared/components/form-error/form-error.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormErrorComponent": () => (/* binding */ FormErrorComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5557);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 21860);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 61528);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 51927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 42147);
/* harmony import */ var _shared_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/forms */ 67540);
/* harmony import */ var _form_error_tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-error.tokens */ 68214);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1659);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngneat/transloco */ 47860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 11048);








function FormErrorComponent_ng_container_0_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r3 = ctx.ngIf;
    const translate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mod-warning", error_r3.isWarning);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", translate_r1(error_r3.key, error_r3.params), " ");
} }
function FormErrorComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FormErrorComponent_ng_container_0_span_1_Template, 2, 3, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r0.error$));
} }
class FormErrorComponent {
    constructor(controlContainer, translocoFormScope) {
        this.controlContainer = controlContainer;
        this.translocoFormScope = translocoFormScope;
        this.innerControl = new rxjs__WEBPACK_IMPORTED_MODULE_3__.ReplaySubject(1);
    }
    ngOnChanges() {
        this.innerControl.next(this.control || this.controlContainer.control.get(this.controlName.toString()));
    }
    ngOnInit() {
        this.translocoRead = `${this.translocoFormScope}.${this.i18nControlKey || this.controlName}.errors`;
        this.error$ = this.innerControl.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)((control) => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.merge)(control.statusChanges, control.valueChanges).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(() => control))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((control) => {
            if (control.errors) {
                const [errorKey, errorValue] = Object.entries(control.errors)[0];
                return {
                    key: errorKey,
                    params: errorValue,
                    isWarning: false,
                };
            }
            if (control instanceof _shared_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlWarn && control.warnings) {
                const [warningKey, warningValue] = Object.entries(control.warnings)[0];
                return {
                    key: warningKey,
                    params: warningValue,
                    isWarning: true,
                };
            }
            return null;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)());
    }
}
FormErrorComponent.ɵfac = function FormErrorComponent_Factory(t) { return new (t || FormErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.ControlContainer, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_form_error_tokens__WEBPACK_IMPORTED_MODULE_1__.FORM_ERROR_TRANSLOCO_READ)); };
FormErrorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FormErrorComponent, selectors: [["app-form-error"]], inputs: { control: "control", controlName: "controlName", i18nControlKey: "i18nControlKey" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], ["class", "form-error__container", 3, "mod-warning", 4, "ngIf"], [1, "form-error__container"]], template: function FormErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, FormErrorComponent_ng_container_0_Template, 3, 3, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("translocoRead", ctx.translocoRead);
    } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_10__.TranslocoDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe], styles: ["[_nghost-%COMP%] {\n  color: var(--color-input-label-invalid);\n  display: block;\n}\n\n.form-error__container.mod-warning[_ngcontent-%COMP%] {\n  color: var(--color-input-label-warning);\n}"], changeDetection: 0 });


/***/ }),

/***/ 28689:
/*!***********************************************************!*\
  !*** ./shared/components/form-error/form-error.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormErrorModule": () => (/* binding */ FormErrorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 11048);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/transloco */ 47860);
/* harmony import */ var _form_error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-error.component */ 61926);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 89724);




class FormErrorModule {
}
FormErrorModule.ɵfac = function FormErrorModule_Factory(t) { return new (t || FormErrorModule)(); };
FormErrorModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FormErrorModule });
FormErrorModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__.TranslocoModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FormErrorModule, { declarations: [_form_error_component__WEBPACK_IMPORTED_MODULE_0__.FormErrorComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__.TranslocoModule], exports: [_form_error_component__WEBPACK_IMPORTED_MODULE_0__.FormErrorComponent] }); })();


/***/ }),

/***/ 68214:
/*!***********************************************************!*\
  !*** ./shared/components/form-error/form-error.tokens.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FORM_ERROR_TRANSLOCO_READ": () => (/* binding */ FORM_ERROR_TRANSLOCO_READ)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 89724);

const FORM_ERROR_TRANSLOCO_READ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('FORM_ERROR_TRANSLOCO_READ');


/***/ }),

/***/ 1674:
/*!***********************************************!*\
  !*** ./shared/components/form-error/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FORM_ERROR_TRANSLOCO_READ": () => (/* reexport safe */ _form_error_tokens__WEBPACK_IMPORTED_MODULE_2__.FORM_ERROR_TRANSLOCO_READ),
/* harmony export */   "FormErrorComponent": () => (/* reexport safe */ _form_error_component__WEBPACK_IMPORTED_MODULE_0__.FormErrorComponent),
/* harmony export */   "FormErrorModule": () => (/* reexport safe */ _form_error_module__WEBPACK_IMPORTED_MODULE_1__.FormErrorModule)
/* harmony export */ });
/* harmony import */ var _form_error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-error.component */ 61926);
/* harmony import */ var _form_error_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-error.module */ 28689);
/* harmony import */ var _form_error_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-error.tokens */ 68214);





/***/ }),

/***/ 10401:
/*!****************************************************!*\
  !*** ./shared/components/input-container/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputContainerControl": () => (/* reexport safe */ _input_container_control__WEBPACK_IMPORTED_MODULE_0__.InputContainerControl),
/* harmony export */   "InputContainerModule": () => (/* reexport safe */ _input_container_module__WEBPACK_IMPORTED_MODULE_1__.InputContainerModule)
/* harmony export */ });
/* harmony import */ var _input_container_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input-container-control */ 78076);
/* harmony import */ var _input_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input-container.module */ 10234);




/***/ }),

/***/ 78076:
/*!**********************************************************************!*\
  !*** ./shared/components/input-container/input-container-control.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputContainerControl": () => (/* binding */ InputContainerControl)
/* harmony export */ });
class InputContainerControl {
}


/***/ }),

/***/ 29130:
/*!************************************************************************!*\
  !*** ./shared/components/input-container/input-container.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputContainerComponent": () => (/* binding */ InputContainerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 21860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9018);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 74970);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngneat/until-destroy */ 78177);
/* harmony import */ var _form_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../form-error */ 1674);
/* harmony import */ var _input_container_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input-container-control */ 78076);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _directives_submit_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/submit-source */ 71019);
/* harmony import */ var _directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/typeface/typeface.directive */ 31857);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 11048);










const _c0 = ["*", [["app-form-error"]]];
const _c1 = ["*", "app-form-error"];
let InputContainerComponent = class InputContainerComponent {
    constructor(submitSource) {
        this.submitSource = submitSource;
    }
    ngAfterContentInit() {
        var _a, _b;
        this.showError$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.merge)(this.submitSource ? this.submitSource.ngSubmit : rxjs__WEBPACK_IMPORTED_MODULE_5__.EMPTY, ((_a = this.input) === null || _a === void 0 ? void 0 : _a.touched) || rxjs__WEBPACK_IMPORTED_MODULE_5__.EMPTY).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(() => true));
        (_b = this.formError) === null || _b === void 0 ? void 0 : _b.error$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(() => !!this.input), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((error) => error === null || error === void 0 ? void 0 : error.isWarning), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__.untilDestroyed)(this)).subscribe((hasWarningError) => {
            this.input.hasWarningError = hasWarningError;
        });
    }
};
InputContainerComponent.ɵfac = function InputContainerComponent_Factory(t) { return new (t || InputContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_directives_submit_source__WEBPACK_IMPORTED_MODULE_2__.SubmitSourceDirective, 8)); };
InputContainerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: InputContainerComponent, selectors: [["app-input-container"]], contentQueries: function InputContainerComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵcontentQuery"](dirIndex, _input_container_control__WEBPACK_IMPORTED_MODULE_1__.InputContainerControl, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵcontentQuery"](dirIndex, _form_error__WEBPACK_IMPORTED_MODULE_0__.FormErrorComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.formError = _t.first);
    } }, ngContentSelectors: _c1, decls: 4, vars: 4, consts: [["appTypeface", "caption", 1, "input-container__error"]], template: function InputContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵprojection"](3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("is-visible", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 2, ctx.showError$));
    } }, directives: [_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_3__.TypefaceDirective], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  row-gap: 8px;\n}\n\n.input-container__error[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  min-height: 16px;\n  visibility: hidden;\n}\n\n.input-container__error.is-visible[_ngcontent-%COMP%] {\n  visibility: visible;\n}"], changeDetection: 0 });
InputContainerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__.UntilDestroy)()
], InputContainerComponent);



/***/ }),

/***/ 10234:
/*!*********************************************************************!*\
  !*** ./shared/components/input-container/input-container.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputContainerModule": () => (/* binding */ InputContainerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 11048);
/* harmony import */ var _directives_typeface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../directives/typeface */ 2703);
/* harmony import */ var _input_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input-container.component */ 29130);
/* harmony import */ var _form_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form-error */ 1674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 89724);





class InputContainerModule {
}
InputContainerModule.ɵfac = function InputContainerModule_Factory(t) { return new (t || InputContainerModule)(); };
InputContainerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: InputContainerModule });
InputContainerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _directives_typeface__WEBPACK_IMPORTED_MODULE_0__.TypefaceModule,
        ], _form_error__WEBPACK_IMPORTED_MODULE_2__.FormErrorModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](InputContainerModule, { declarations: [_input_container_component__WEBPACK_IMPORTED_MODULE_1__.InputContainerComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _directives_typeface__WEBPACK_IMPORTED_MODULE_0__.TypefaceModule], exports: [_input_container_component__WEBPACK_IMPORTED_MODULE_1__.InputContainerComponent,
        _form_error__WEBPACK_IMPORTED_MODULE_2__.FormErrorModule] }); })();


/***/ }),

/***/ 91009:
/*!*****************************************!*\
  !*** ./shared/components/menu/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuModule": () => (/* reexport safe */ _menu_module__WEBPACK_IMPORTED_MODULE_0__.MenuModule),
/* harmony export */   "MenuService": () => (/* reexport safe */ _menu_service__WEBPACK_IMPORTED_MODULE_2__.MenuService)
/* harmony export */ });
/* harmony import */ var _menu_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.module */ 2262);
/* harmony import */ var _menu_definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.definitions */ 28109);
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.service */ 4314);





/***/ }),

/***/ 28109:
/*!****************************************************!*\
  !*** ./shared/components/menu/menu.definitions.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 2262:
/*!***********************************************!*\
  !*** ./shared/components/menu/menu.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuModule": () => (/* binding */ MenuModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 11048);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ 64545);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-skeleton-loader */ 47443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 45113);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngneat/svg-icon */ 66722);
/* harmony import */ var _directives_browser_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../directives/browser-view */ 61349);
/* harmony import */ var _shared_components_currency_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/components/currency-symbol */ 54411);
/* harmony import */ var _directives_text_ellipsis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/text-ellipsis */ 1451);
/* harmony import */ var _directives_typeface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/typeface */ 2703);
/* harmony import */ var _pipes_pdv_value__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/pdv-value */ 53386);
/* harmony import */ var _avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../avatar */ 5066);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu */ 86107);
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu.service */ 4314);
/* harmony import */ var _shared_pipes_micro_value__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/pipes/micro-value */ 55219);
/* harmony import */ var _shared_pipes_number_format__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/pipes/number-format */ 68259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 89724);
















class MenuModule {
    static forRoot(config) {
        return {
            ngModule: MenuModule,
            providers: [
                {
                    provide: _menu_service__WEBPACK_IMPORTED_MODULE_7__.MenuService,
                    useClass: config.service,
                },
            ],
        };
    }
}
MenuModule.ɵfac = function MenuModule_Factory(t) { return new (t || MenuModule)(); };
MenuModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: MenuModule });
MenuModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _avatar__WEBPACK_IMPORTED_MODULE_5__.AvatarModule,
            _directives_browser_view__WEBPACK_IMPORTED_MODULE_0__.BrowserViewModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _shared_components_currency_symbol__WEBPACK_IMPORTED_MODULE_1__.CurrencySymbolModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuModule,
            _shared_pipes_micro_value__WEBPACK_IMPORTED_MODULE_8__.MicroValueModule,
            ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_13__.NgxSkeletonLoaderModule,
            _shared_pipes_number_format__WEBPACK_IMPORTED_MODULE_9__.NumberFormatModule,
            _pipes_pdv_value__WEBPACK_IMPORTED_MODULE_4__.PdvValueModule,
            _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_14__.SvgIconsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule,
            _directives_text_ellipsis__WEBPACK_IMPORTED_MODULE_2__.TextEllipsisModule,
            _directives_typeface__WEBPACK_IMPORTED_MODULE_3__.TypefaceModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](MenuModule, { declarations: [_menu__WEBPACK_IMPORTED_MODULE_6__.MenuComponent], imports: [_avatar__WEBPACK_IMPORTED_MODULE_5__.AvatarModule,
        _directives_browser_view__WEBPACK_IMPORTED_MODULE_0__.BrowserViewModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        _shared_components_currency_symbol__WEBPACK_IMPORTED_MODULE_1__.CurrencySymbolModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuModule,
        _shared_pipes_micro_value__WEBPACK_IMPORTED_MODULE_8__.MicroValueModule,
        ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_13__.NgxSkeletonLoaderModule,
        _shared_pipes_number_format__WEBPACK_IMPORTED_MODULE_9__.NumberFormatModule,
        _pipes_pdv_value__WEBPACK_IMPORTED_MODULE_4__.PdvValueModule,
        _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_14__.SvgIconsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule,
        _directives_text_ellipsis__WEBPACK_IMPORTED_MODULE_2__.TextEllipsisModule,
        _directives_typeface__WEBPACK_IMPORTED_MODULE_3__.TypefaceModule], exports: [_menu__WEBPACK_IMPORTED_MODULE_6__.MenuComponent] }); })();


/***/ }),

/***/ 4314:
/*!************************************************!*\
  !*** ./shared/components/menu/menu.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuService": () => (/* binding */ MenuService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9018);

class MenuService {
    getCloseSource() {
        return rxjs__WEBPACK_IMPORTED_MODULE_0__.EMPTY;
    }
}


/***/ }),

/***/ 86107:
/*!**********************************************!*\
  !*** ./shared/components/menu/menu/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* reexport safe */ _menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent)
/* harmony export */ });
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.component */ 61545);



/***/ }),

/***/ 61545:
/*!*******************************************************!*\
  !*** ./shared/components/menu/menu/menu.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ 64545);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngneat/until-destroy */ 78177);
/* harmony import */ var _svg_icons_dropdown_expand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../svg-icons/dropdown-expand */ 97555);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu.service */ 4314);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngneat/svg-icon */ 66722);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 11048);
/* harmony import */ var _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../avatar/avatar.component */ 43191);
/* harmony import */ var _directives_browser_view_browser_tab_view_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../directives/browser-view/browser-tab-view.directive */ 59896);
/* harmony import */ var _directives_text_ellipsis_text_ellipsis_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../directives/text-ellipsis/text-ellipsis.directive */ 50262);
/* harmony import */ var _directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../directives/typeface/typeface.directive */ 31857);
/* harmony import */ var _currency_symbol_component_currency_symbol_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../currency-symbol/component/currency-symbol.component */ 56693);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-skeleton-loader */ 47443);
/* harmony import */ var _pipes_pdv_value_pdv_value_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../pipes/pdv-value/pdv-value.pipe */ 47147);
/* harmony import */ var _pipes_number_format_number_format_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../pipes/number-format/number-format.pipe */ 17667);
/* harmony import */ var _pipes_micro_value_micro_value_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../pipes/micro-value/micro-value.pipe */ 30087);


















function MenuComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 7)(2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "svg-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.userProfile.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("size", "md");
} }
function MenuComponent_ng_container_0_ng_template_6_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MenuComponent_ng_container_0_ng_template_6_div_0_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r10); const userItem_r8 = restoredCtx.ngIf; return userItem_r8.action && userItem_r8.action(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-avatar", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div")(3, "div", 14)(4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 15)(7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "pdvValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](13, "numberFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](14, "microValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "app-currency-symbol");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const userItem_r8 = ctx.ngIf;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("avatarUrl", ctx_r4.userProfile.avatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", userItem_r8.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](9, 5, userItem_r8.pdvValue), " ", ctx_r4.translations.pdv, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind3"](13, 7, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](14, 11, userItem_r8.decValue), null, true), " ");
} }
const _c0 = function () { return { height: "40px", margin: "0", width: "40px" }; };
const _c1 = function () { return { height: "20px", marginBottom: "4px", width: "60px" }; };
const _c2 = function () { return { height: "16px", marginBottom: "0", width: "150px" }; };
function MenuComponent_ng_container_0_ng_template_6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ngx-skeleton-loader", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "ngx-skeleton-loader", 19)(4, "ngx-skeleton-loader", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("appearance", "circle")("theme", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](6, _c2));
} }
function MenuComponent_ng_container_0_ng_template_6_div_4_ng_container_1_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r13.description, " ");
} }
function MenuComponent_ng_container_0_ng_template_6_div_4_ng_container_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 29);
} }
function MenuComponent_ng_container_0_ng_template_6_div_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MenuComponent_ng_container_0_ng_template_6_div_4_ng_container_1_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r19); const item_r13 = restoredCtx.$implicit; return item_r13.action && item_r13.action(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "svg-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 25)(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, MenuComponent_ng_container_0_ng_template_6_div_4_ng_container_1_div_7_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, MenuComponent_ng_container_0_ng_template_6_div_4_ng_container_1_div_8_Template, 1, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const last_r14 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("is-disabled", !item_r13.action);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("data-id", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 8, item_r13.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("key", item_r13.iconKey)("size", "md");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r13.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", item_r13.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !last_r14);
} }
function MenuComponent_ng_container_0_ng_template_6_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, MenuComponent_ng_container_0_ng_template_6_div_4_ng_container_1_Template, 9, 10, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const section_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", section_r11);
} }
function MenuComponent_ng_container_0_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, MenuComponent_ng_container_0_ng_template_6_div_0_Template, 16, 13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, MenuComponent_ng_container_0_ng_template_6_ng_template_2_Template, 5, 7, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, MenuComponent_ng_container_0_ng_template_6_div_4_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "async");
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](3);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 3, ctx_r3.userItem$))("ngIfElse", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 5, ctx_r3.items$));
} }
function MenuComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "app-avatar", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, MenuComponent_ng_container_0_ng_container_3_Template, 5, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "mat-menu", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, MenuComponent_ng_container_0_ng_template_6_Template, 6, 7, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](5);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matMenuTriggerFor", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("avatarUrl", ctx_r0.userProfile.avatar);
} }
let MenuComponent = class MenuComponent {
    constructor(changeDetectorRef, menuService, svgIconRegistry) {
        this.changeDetectorRef = changeDetectorRef;
        this.menuService = menuService;
        svgIconRegistry.register([
            _svg_icons_dropdown_expand__WEBPACK_IMPORTED_MODULE_0__.svgDropdownExpand,
        ]);
    }
    ngOnInit() {
        this.menuService.getUserProfile().pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__.untilDestroyed)(this)).subscribe((userProfile) => {
            this.userProfile = userProfile;
            this.changeDetectorRef.detectChanges();
        });
        this.menuService.getTranslations().pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__.untilDestroyed)(this)).subscribe((translations) => {
            this.translations = translations;
            this.changeDetectorRef.detectChanges();
        });
        this.items$ = this.menuService.getItems();
        this.userItem$ = this.menuService.getUserItem();
        this.menuService.getCloseSource().pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__.untilDestroyed)(this)).subscribe(() => { var _a; return (_a = this.menuTrigger) === null || _a === void 0 ? void 0 : _a.closeMenu(); });
    }
};
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_menu_service__WEBPACK_IMPORTED_MODULE_1__.MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_12__.SvgIconRegistry)); };
MenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], viewQuery: function MenuComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuTrigger, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.menuTrigger = _t.first);
    } }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "menu__trigger", 3, "matMenuTriggerFor"], [1, "menu__user-avatar", 3, "avatarUrl"], [4, "appBrowserTabView"], ["appTypeface", "paragraph", 1, "menu-popup"], ["menuTemplate", ""], ["matMenuContent", ""], [1, "menu__user-title", "menu-popup-item-title"], ["appTextEllipsis", "", "appTypeface", "paragraph"], ["key", "dropdown-expand", 1, "menu__trigger-icon", 3, "size"], ["class", "menu-popup-items-section menu-popup-item menu__item menu__user-item", 3, "click", 4, "ngIf", "ngIfElse"], ["userItemLoading", ""], ["class", "menu-popup-items-section", 4, "ngFor", "ngForOf"], [1, "menu-popup-items-section", "menu-popup-item", "menu__item", "menu__user-item", 3, "click"], [1, "menu__user-item-title", "menu-popup-item-title"], ["appTypeface", "caption", 1, "menu__user-item__pdv-dec"], [1, "menu__user-item__pdv-dec__divider"], [1, "menu-popup-items-section", "menu-popup-item", "menu__item", "menu__user-item"], [1, "menu__user-item__skeleton-loader", 3, "appearance", "theme"], [1, "menu-popup-item-title", "menu__user-item__skeleton-loader", 3, "theme"], [1, "menu__user-item__skeleton-loader", 3, "theme"], [1, "menu-popup-items-section"], [4, "ngFor", "ngForOf"], [1, "menu-popup-item", "menu__item", 3, "click"], [1, "menu-popup-item-icon", "menu__item-icon", 3, "key", "size"], [1, "menu-popup-item-title"], ["class", "menu-popup-item-description menu__item-description", "appTypeface", "caption", 4, "ngIf"], ["class", "menu-popup-items-divider", 4, "ngIf"], ["appTypeface", "caption", 1, "menu-popup-item-description", "menu__item-description"], [1, "menu-popup-items-divider"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, MenuComponent_ng_container_0_Template, 7, 2, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.translations && ctx.userProfile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuTrigger, _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_2__.AvatarComponent, _directives_browser_view_browser_tab_view_directive__WEBPACK_IMPORTED_MODULE_3__.BrowserTabViewDirective, _directives_text_ellipsis_text_ellipsis_directive__WEBPACK_IMPORTED_MODULE_4__.TextEllipsisDirective, _directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_5__.TypefaceDirective, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_12__.SvgIconComponent, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuContent, _currency_symbol_component_currency_symbol_component__WEBPACK_IMPORTED_MODULE_6__.CurrencySymbolComponent, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_15__.NgxSkeletonLoaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe, _pipes_pdv_value_pdv_value_pipe__WEBPACK_IMPORTED_MODULE_7__.PdvValuePipe, _pipes_number_format_number_format_pipe__WEBPACK_IMPORTED_MODULE_8__.NumberFormatPipe, _pipes_micro_value_micro_value_pipe__WEBPACK_IMPORTED_MODULE_9__.MicroValuePipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.LowerCasePipe], styles: ["[_nghost-%COMP%] {\n  align-items: center;\n  display: inline-flex;\n  overflow: hidden;\n}\n\n  .cdk-overlay-container .menu-popup {\n  margin-top: -40px;\n}\n\n.menu__trigger[_ngcontent-%COMP%] {\n  align-items: center;\n  column-gap: 8px;\n  cursor: pointer;\n  display: flex;\n  -webkit-user-select: none;\n          user-select: none;\n  width: 100%;\n}\n\n.menu__trigger[_ngcontent-%COMP%]:hover   .menu__trigger-icon[_ngcontent-%COMP%] {\n  color: #494A52;\n}\n\n.menu__user-avatar[_ngcontent-%COMP%] {\n  height: 40px;\n  min-height: 40px;\n  min-width: 40px;\n  width: 40px;\n}\n\n.menu__user-title[_ngcontent-%COMP%] {\n  max-width: 220px;\n}\n\n.menu__trigger-icon[_ngcontent-%COMP%] {\n  color: #929297;\n  display: inline-flex;\n  min-width: 1em;\n  transition: color 0.3s ease;\n}\n\n.menu__user-item[_ngcontent-%COMP%] {\n  column-gap: 8px;\n  display: flex;\n}\n\n.menu__user-item-avatar[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n}\n\n.menu__user-item-title[_ngcontent-%COMP%] {\n  max-width: 205px;\n}\n\n.menu__user-item__pdv-dec[_ngcontent-%COMP%] {\n  color: #929297;\n  display: flex;\n}\n\n.menu__user-item__pdv-dec__divider[_ngcontent-%COMP%] {\n  background: #929297;\n  margin: 2px 4px;\n  width: 1px;\n}\n\n.menu__item[_ngcontent-%COMP%] {\n  column-gap: 8px;\n}\n\n.menu__item-icon[_ngcontent-%COMP%] {\n  color: #929297;\n  display: inline-flex;\n  flex-shrink: 0;\n}\n\n  .menu__user-item__skeleton-loader {\n  display: flex;\n}\n\n  .menu__user-item__skeleton-loader .loader {\n  background-color: rgb(var(--color-skeleton-background-main-menu-loading)) !important;\n}\n\n  .menu__user-item__skeleton-loader .loader:before {\n  background-image: var(--color-skeleton-background-animation-main-menu-loading) !important;\n}"], changeDetection: 0 });
MenuComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_11__.UntilDestroy)()
], MenuComponent);



/***/ }),

/***/ 76505:
/*!*****************************************************!*\
  !*** ./shared/components/network-selector/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkSelectorModule": () => (/* reexport safe */ _network_selector_module__WEBPACK_IMPORTED_MODULE_0__.NetworkSelectorModule),
/* harmony export */   "NetworkSelectorService": () => (/* reexport safe */ _network_selector_service__WEBPACK_IMPORTED_MODULE_2__.NetworkSelectorService)
/* harmony export */ });
/* harmony import */ var _network_selector_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./network-selector.module */ 74772);
/* harmony import */ var _network_selector_definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./network-selector.definitions */ 90472);
/* harmony import */ var _network_selector_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./network-selector.service */ 395);





/***/ }),

/***/ 91992:
/*!**************************************************************************!*\
  !*** ./shared/components/network-selector/network-selector.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkSelectorComponent": () => (/* binding */ NetworkSelectorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngneat/until-destroy */ 78177);
/* harmony import */ var _svg_icons_check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../svg-icons/check */ 88974);
/* harmony import */ var _svg_icons_expand_more__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg-icons/expand-more */ 4172);
/* harmony import */ var _svg_icons_signal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../svg-icons/signal */ 982);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _network_selector_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./network-selector.service */ 395);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngneat/svg-icon */ 66722);
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../button/button.component */ 4013);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ 64545);
/* harmony import */ var _directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../directives/typeface/typeface.directive */ 31857);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 11048);
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../spinner/spinner.component */ 7406);













function NetworkSelectorComponent_ng_template_7_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const translations_r8 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", translations_r8.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", translations_r8.defaultNetwork, " ");
} }
function NetworkSelectorComponent_ng_template_7_ng_container_0_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NetworkSelectorComponent_ng_template_7_ng_container_0_div_4_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11); const network_r9 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r10.switchNetwork(network_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "svg-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 16)(3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "svg-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const network_r9 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("is-active", network_r9.id === ctx_r7.activeNetwork.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](network_r9.name);
} }
function NetworkSelectorComponent_ng_template_7_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, NetworkSelectorComponent_ng_template_7_ng_container_0_ng_container_1_Template, 5, 2, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, NetworkSelectorComponent_ng_template_7_ng_container_0_div_4_Template, 6, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const networks_r5 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 3, ctx_r2.translations$));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", networks_r5)("ngForTrackBy", ctx_r2.trackByName);
} }
function NetworkSelectorComponent_ng_template_7_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function NetworkSelectorComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, NetworkSelectorComponent_ng_template_7_ng_container_0_Template, 5, 5, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, NetworkSelectorComponent_ng_template_7_ng_template_2_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 2, ctx_r1.networks$))("ngIfElse", _r3);
} }
let NetworkSelectorComponent = class NetworkSelectorComponent {
    constructor(changeDetectorRef, networkSelectorService, svgIconRegistry) {
        this.changeDetectorRef = changeDetectorRef;
        this.networkSelectorService = networkSelectorService;
        this.svgIconRegistry = svgIconRegistry;
        this.trackByName = ({}, { name }) => name;
        svgIconRegistry.register([
            _svg_icons_check__WEBPACK_IMPORTED_MODULE_0__.svgCheck,
            _svg_icons_expand_more__WEBPACK_IMPORTED_MODULE_1__.svgExpandMore,
            _svg_icons_signal__WEBPACK_IMPORTED_MODULE_2__.svgSignal,
        ]);
    }
    ngOnInit() {
        this.networks$ = this.networkSelectorService.getNetworks();
        this.networkSelectorService.getActiveNetwork().pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__.untilDestroyed)(this)).subscribe((activeNetwork) => {
            this.activeNetwork = activeNetwork;
            this.changeDetectorRef.detectChanges();
        });
        this.translations$ = this.networkSelectorService.getTranslations();
    }
    switchNetwork(network) {
        this.networkSelectorService.setActiveNetworkId(network.id);
    }
};
NetworkSelectorComponent.ɵfac = function NetworkSelectorComponent_Factory(t) { return new (t || NetworkSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_network_selector_service__WEBPACK_IMPORTED_MODULE_3__.NetworkSelectorService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_9__.SvgIconRegistry)); };
NetworkSelectorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: NetworkSelectorComponent, selectors: [["app-network-selector"]], decls: 8, vars: 2, consts: [["app-button", "", "color", "grey", "size", "sm", 1, "network-selector__trigger", 3, "matMenuTriggerFor"], ["key", "signal", "size", "xs", 1, "network-selector__trigger__network-icon"], ["appTypeface", "caption", 1, "network-selector__trigger__network-name"], ["key", "expand-more", "size", "xs", 1, "network-selector__trigger-icon"], [1, "network-selector__menu", "menu-popup"], ["menuTemplate", ""], ["matMenuContent", ""], [4, "ngIf", "ngIfElse"], ["loader", ""], [4, "ngIf"], [1, "menu-popup-items-section"], ["class", "network-selector__menu__item menu-popup-item", 3, "is-active", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["appTypeface", "paragraph", 1, "network-selector__menu__title"], ["appTypeface", "caption", 1, "network-selector__menu__subtitle"], [1, "network-selector__menu__item", "menu-popup-item", 3, "click"], ["key", "signal", 1, "menu-popup-item-icon", "network-selector__menu__item-icon-signal"], [1, "menu-popup-item-title"], ["appTypeface", "paragraph"], ["key", "check", 1, "network-selector__menu__item-icon-check"], [1, "network-selector__loader"]], template: function NetworkSelectorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "svg-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "svg-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-menu", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, NetworkSelectorComponent_ng_template_7_Template, 4, 4, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.activeNetwork == null ? null : ctx.activeNetwork.name, " ");
    } }, directives: [_button_button_component__WEBPACK_IMPORTED_MODULE_4__.ButtonComponent, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuTrigger, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_9__.SvgIconComponent, _directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_5__.TypefaceDirective, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuContent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__.SpinnerComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe], styles: [".cdk-overlay-container .network-selector__menu {\n  width: 320px;\n}\n  .cdk-overlay-container .network-selector__loader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 223px;\n}\n.network-selector__trigger[_ngcontent-%COMP%] {\n  padding-right: 12px;\n  column-gap: 4px;\n}\n.network-selector__trigger__network-icon[_ngcontent-%COMP%] {\n  color: #3EDCD3;\n}\n.network-selector__trigger__network-name[_ngcontent-%COMP%] {\n  max-width: 150px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.network-selector__trigger-icon[_ngcontent-%COMP%] {\n  color: #929297;\n}\n.network-selector__menu__title[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.network-selector__menu__subtitle[_ngcontent-%COMP%] {\n  color: #B6B7BA;\n  margin: 12px 0 16px;\n}\n.network-selector__menu__item[_ngcontent-%COMP%] {\n  color: #929297;\n  column-gap: 12px;\n}\n.network-selector__menu__item.is-active[_ngcontent-%COMP%], .network-selector__menu__item[_ngcontent-%COMP%]:hover {\n  color: #FFFFFF;\n}\n.network-selector__menu__item.is-active[_ngcontent-%COMP%]   .network-selector__menu__item-icon-signal[_ngcontent-%COMP%] {\n  color: #3EDCD3;\n}\n.network-selector__menu__item.is-active[_ngcontent-%COMP%]   .network-selector__menu__item-icon-check[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.network-selector__menu__item-icon-check[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  display: none;\n  margin-left: auto;\n}"], changeDetection: 0 });
NetworkSelectorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__.UntilDestroy)()
], NetworkSelectorComponent);



/***/ }),

/***/ 90472:
/*!****************************************************************************!*\
  !*** ./shared/components/network-selector/network-selector.definitions.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 74772:
/*!***********************************************************************!*\
  !*** ./shared/components/network-selector/network-selector.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkSelectorModule": () => (/* binding */ NetworkSelectorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 11048);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ 64545);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngneat/svg-icon */ 66722);
/* harmony import */ var _directives_typeface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../directives/typeface */ 2703);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button */ 29149);
/* harmony import */ var _spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spinner */ 11423);
/* harmony import */ var _network_selector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./network-selector.component */ 91992);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 89724);








class NetworkSelectorModule {
}
NetworkSelectorModule.ɵfac = function NetworkSelectorModule_Factory(t) { return new (t || NetworkSelectorModule)(); };
NetworkSelectorModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: NetworkSelectorModule });
NetworkSelectorModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _button__WEBPACK_IMPORTED_MODULE_1__.ButtonModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuModule,
            _spinner__WEBPACK_IMPORTED_MODULE_2__.SpinnerModule,
            _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_7__.SvgIconsModule,
            _directives_typeface__WEBPACK_IMPORTED_MODULE_0__.TypefaceModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](NetworkSelectorModule, { declarations: [_network_selector_component__WEBPACK_IMPORTED_MODULE_3__.NetworkSelectorComponent], imports: [_button__WEBPACK_IMPORTED_MODULE_1__.ButtonModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuModule,
        _spinner__WEBPACK_IMPORTED_MODULE_2__.SpinnerModule,
        _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_7__.SvgIconsModule,
        _directives_typeface__WEBPACK_IMPORTED_MODULE_0__.TypefaceModule], exports: [_network_selector_component__WEBPACK_IMPORTED_MODULE_3__.NetworkSelectorComponent] }); })();


/***/ }),

/***/ 395:
/*!************************************************************************!*\
  !*** ./shared/components/network-selector/network-selector.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkSelectorService": () => (/* binding */ NetworkSelectorService)
/* harmony export */ });
class NetworkSelectorService {
}


/***/ }),

/***/ 35197:
/*!*********************************************!*\
  !*** ./shared/components/password/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PASSWORD_VALIDATION_CONFIG": () => (/* reexport safe */ _password_module__WEBPACK_IMPORTED_MODULE_0__.PASSWORD_VALIDATION_CONFIG),
/* harmony export */   "PasswordModule": () => (/* reexport safe */ _password_module__WEBPACK_IMPORTED_MODULE_0__.PasswordModule)
/* harmony export */ });
/* harmony import */ var _password_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password.module */ 53733);



/***/ }),

/***/ 60611:
/*!***********************************************************!*\
  !*** ./shared/components/password/password-form/index.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordFormComponent": () => (/* reexport safe */ _password_form_component__WEBPACK_IMPORTED_MODULE_0__.PasswordFormComponent)
/* harmony export */ });
/* harmony import */ var _password_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password-form.component */ 15205);



/***/ }),

/***/ 15205:
/*!*****************************************************************************!*\
  !*** ./shared/components/password/password-form/password-form.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordFormComponent": () => (/* binding */ PasswordFormComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1659);
/* harmony import */ var _ngneat_reactive_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngneat/reactive-forms */ 18260);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngneat/until-destroy */ 78177);
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ 58117);
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validation */ 81167);
/* harmony import */ var _password_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../password.module */ 53733);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngneat/transloco */ 47860);
/* harmony import */ var _input_container_input_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../input-container/input-container.component */ 29130);
/* harmony import */ var _controls_input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../controls/input/input.component */ 49874);
/* harmony import */ var _form_error_form_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../form-error/form-error.component */ 61926);
var PasswordFormComponent_1;














function PasswordFormComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 1)(1, "app-input-container")(2, "app-input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](3, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "app-form-error", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "app-input-container")(7, "app-input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](8, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "app-form-error", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const translate_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", translate_r1("password.label"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("eye", false)("required", !!(ctx_r0.passwordControl == null ? null : ctx_r0.passwordControl.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", translate_r1("confirm_password.label"), " ");
} }
let PasswordFormComponent = PasswordFormComponent_1 = class PasswordFormComponent extends _ngneat_reactive_forms__WEBPACK_IMPORTED_MODULE_6__.ControlValueAccessor {
    constructor(formBuilder, passwordValidationConfig) {
        super();
        this.formBuilder = formBuilder;
        this.passwordValidationConfig = passwordValidationConfig;
        this.required = false;
    }
    get passwordControl() {
        var _a;
        return (_a = this.form) === null || _a === void 0 ? void 0 : _a.get('password');
    }
    ngOnInit() {
        this.form = this.createForm();
        this.passwordControl.valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.untilDestroyed)(this)).subscribe(() => this.form.get('confirmPassword').updateValueAndValidity({ onlySelf: true }));
        this.form.valueChanges.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.untilDestroyed)(this)).subscribe((formValue) => {
            this.onChange(formValue.password);
        });
    }
    validate() {
        if (this.form.invalid) {
            return {
                invalid: true,
            };
        }
        return null;
    }
    writeValue({}) {
        return;
    }
    createForm() {
        return this.formBuilder.group({
            confirmPassword: [
                '',
                [
                    _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_8__.RxwebValidators.compare({ fieldName: 'password' }),
                ],
            ],
            password: [
                '',
                [
                    ...this.required ? [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required] : [],
                    (0,_validation__WEBPACK_IMPORTED_MODULE_0__.passwordValidator)(this.passwordValidationConfig),
                ],
            ],
        });
    }
};
PasswordFormComponent.ɵfac = function PasswordFormComponent_Factory(t) { return new (t || PasswordFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngneat_reactive_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_password_module__WEBPACK_IMPORTED_MODULE_1__.PASSWORD_VALIDATION_CONFIG)); };
PasswordFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: PasswordFormComponent, selectors: [["app-password-form"]], inputs: { translationsConfig: "translationsConfig", required: "required" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NG_VALUE_ACCESSOR,
                useExisting: PasswordFormComponent_1,
                multi: true,
            },
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NG_VALIDATORS,
                useExisting: PasswordFormComponent_1,
                multi: true,
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 2, consts: [["class", "password-form__form", 3, "formGroup", 4, "transloco", "translocoRead", "translocoScope"], [1, "password-form__form", 3, "formGroup"], ["type", "password", "formControlName", "password"], ["ngProjectAs", "[label]", 5, ["", "label", ""]], ["controlName", "password"], ["type", "password", "formControlName", "confirmPassword", 3, "eye", "required"], ["controlName", "confirmPassword", "i18nControlKey", "confirm_password"]], template: function PasswordFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, PasswordFormComponent_form_0_Template, 11, 5, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("translocoRead", ctx.translationsConfig.read)("translocoScope", ctx.translationsConfig.scope);
    } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_10__.TranslocoDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _input_container_input_container_component__WEBPACK_IMPORTED_MODULE_2__.InputContainerComponent, _controls_input_input_component__WEBPACK_IMPORTED_MODULE_3__.InputComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _form_error_form_error_component__WEBPACK_IMPORTED_MODULE_4__.FormErrorComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.password-form__form[_ngcontent-%COMP%] {\n  grid-column-gap: 16px;\n  column-gap: 16px;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}"], changeDetection: 0 });
PasswordFormComponent = PasswordFormComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.UntilDestroy)()
], PasswordFormComponent);



/***/ }),

/***/ 60286:
/*!***********************************************************************!*\
  !*** ./shared/components/password/password-validation-state/index.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordValidationStateComponent": () => (/* reexport safe */ _password_validation_state_component__WEBPACK_IMPORTED_MODULE_0__.PasswordValidationStateComponent)
/* harmony export */ });
/* harmony import */ var _password_validation_state_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password-validation-state.component */ 85984);



/***/ }),

/***/ 85984:
/*!*****************************************************************************************************!*\
  !*** ./shared/components/password/password-validation-state/password-validation-state.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordValidationStateComponent": () => (/* binding */ PasswordValidationStateComponent)
/* harmony export */ });
/* harmony import */ var _svg_icons_check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../svg-icons/check */ 88974);
/* harmony import */ var _svg_icons_closed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../svg-icons/closed */ 69752);
/* harmony import */ var _password_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../password.module */ 53733);
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validation */ 81167);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngneat/svg-icon */ 66722);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngneat/transloco */ 47860);
/* harmony import */ var _directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../directives/typeface/typeface.directive */ 31857);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 11048);









const _c0 = function (a0) { return { $implicit: a0 }; };
function PasswordValidationStateComponent_div_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](1, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const translate_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](4, _c0, ctx_r4.state.minlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", ctx_r4.passwordValidationConfig.minlength, " ", translate_r3("symbols"), " ");
} }
function PasswordValidationStateComponent_div_0_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " ,\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function PasswordValidationStateComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, PasswordValidationStateComponent_div_0_ng_container_3_ng_container_1_Template, 2, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](2, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const translate_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.passwordValidationConfig.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](4, _c0, ctx_r5.state.upperCase));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" 1 ", translate_r3("upper"), " ");
} }
function PasswordValidationStateComponent_div_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " ,\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](2, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const translate_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](3, _c0, ctx_r6.state.lowerCase));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" 1 ", translate_r3("lower"), " ");
} }
function PasswordValidationStateComponent_div_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " ,\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](2, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const translate_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](3, _c0, ctx_r7.state.digit));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" 1 ", translate_r3("digit"), " ");
} }
function PasswordValidationStateComponent_div_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " ,\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](2, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const translate_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](3, _c0, ctx_r8.state.specialCharacter));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" 1 ", translate_r3("special"), " ");
} }
function PasswordValidationStateComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, PasswordValidationStateComponent_div_0_ng_container_2_Template, 4, 6, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, PasswordValidationStateComponent_div_0_ng_container_3_Template, 5, 6, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, PasswordValidationStateComponent_div_0_ng_container_4_Template, 5, 5, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, PasswordValidationStateComponent_div_0_ng_container_5_Template, 5, 5, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, PasswordValidationStateComponent_div_0_ng_container_6_Template, 5, 5, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const translate_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", translate_r3("at_least"), "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.passwordValidationConfig.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.passwordValidationConfig.upperCase);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.passwordValidationConfig.lowerCase);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.passwordValidationConfig.digit);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.passwordValidationConfig.specialCharacter);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", translate_r3("end"), "\n");
} }
function PasswordValidationStateComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "svg-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const valid_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("is-valid", valid_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("is-valid", valid_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("key", valid_r15 ? "check" : "closed")("size", valid_r15 ? "sm" : "md");
} }
class PasswordValidationStateComponent {
    constructor(svgIconRegistry, passwordValidationConfig) {
        this.svgIconRegistry = svgIconRegistry;
        this.passwordValidationConfig = passwordValidationConfig;
    }
    set password(value) {
        this.state = (0,_validation__WEBPACK_IMPORTED_MODULE_3__.getPasswordState)(value, this.passwordValidationConfig);
    }
    ngOnInit() {
        this.svgIconRegistry.register([
            _svg_icons_check__WEBPACK_IMPORTED_MODULE_0__.svgCheck,
            _svg_icons_closed__WEBPACK_IMPORTED_MODULE_1__.svgClosed,
        ]);
    }
}
PasswordValidationStateComponent.ɵfac = function PasswordValidationStateComponent_Factory(t) { return new (t || PasswordValidationStateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_6__.SvgIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_password_module__WEBPACK_IMPORTED_MODULE_2__.PASSWORD_VALIDATION_CONFIG)); };
PasswordValidationStateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: PasswordValidationStateComponent, selectors: [["app-password-validation-state"]], inputs: { translationsConfig: "translationsConfig", password: "password" }, decls: 3, vars: 2, consts: [["class", "password-validation-state__container", "appTypeface", "paragraph", 4, "transloco", "translocoRead", "translocoScope"], ["icon", ""], ["appTypeface", "paragraph", 1, "password-validation-state__container"], [4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "password-validation-state__condition"], [1, "password-validation-state__icon-container"], [1, "password-validation-state__icon", 3, "key", "size"]], template: function PasswordValidationStateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, PasswordValidationStateComponent_div_0_Template, 8, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, PasswordValidationStateComponent_ng_template_1_Template, 2, 6, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("translocoRead", ctx.translationsConfig.read)("translocoScope", ctx.translationsConfig.scope);
    } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_7__.TranslocoDirective, _directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_4__.TypefaceDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_6__.SvgIconComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.password-validation-state__container[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.password-validation-state__condition[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.password-validation-state__icon-container[_ngcontent-%COMP%] {\n  height: 24px;\n  margin-right: 4px;\n  width: 24px;\n}\n\n.password-validation-state__icon-container.is-valid[_ngcontent-%COMP%] {\n  padding: 2px;\n}\n\n.password-validation-state__icon[_ngcontent-%COMP%] {\n  border-radius: 100%;\n  color: #EDEDEE;\n}\n\n.password-validation-state__icon.is-valid[_ngcontent-%COMP%] {\n  background-color: #03B15E;\n  color: #FFFFFF;\n}"], changeDetection: 0 });


/***/ }),

/***/ 53733:
/*!*******************************************************!*\
  !*** ./shared/components/password/password.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PASSWORD_VALIDATION_CONFIG": () => (/* binding */ PASSWORD_VALIDATION_CONFIG),
/* harmony export */   "PasswordModule": () => (/* binding */ PasswordModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 11048);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1659);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngneat/svg-icon */ 66722);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngneat/transloco */ 47860);
/* harmony import */ var _directives_typeface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../directives/typeface */ 2703);
/* harmony import */ var _form_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form-error */ 1674);
/* harmony import */ var _input_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input-container */ 10401);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controls */ 41253);
/* harmony import */ var _password_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./password-form */ 60611);
/* harmony import */ var _password_validation_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./password-validation-state */ 60286);












const PASSWORD_VALIDATION_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.InjectionToken('PASSWORD_VALIDATION_CONFIG');
class PasswordModule {
    static forRoot(config) {
        return {
            ngModule: PasswordModule,
            providers: [
                {
                    provide: PASSWORD_VALIDATION_CONFIG,
                    useValue: config.validation,
                },
            ],
        };
    }
}
PasswordModule.ɵfac = function PasswordModule_Factory(t) { return new (t || PasswordModule)(); };
PasswordModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: PasswordModule });
PasswordModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _form_error__WEBPACK_IMPORTED_MODULE_1__.FormErrorModule,
            _input_container__WEBPACK_IMPORTED_MODULE_2__.InputContainerModule,
            _controls__WEBPACK_IMPORTED_MODULE_3__.InputModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_9__.SvgIconsModule,
            _ngneat_transloco__WEBPACK_IMPORTED_MODULE_10__.TranslocoModule,
            _directives_typeface__WEBPACK_IMPORTED_MODULE_0__.TypefaceModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](PasswordModule, { declarations: [_password_form__WEBPACK_IMPORTED_MODULE_4__.PasswordFormComponent,
        _password_validation_state__WEBPACK_IMPORTED_MODULE_5__.PasswordValidationStateComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _form_error__WEBPACK_IMPORTED_MODULE_1__.FormErrorModule,
        _input_container__WEBPACK_IMPORTED_MODULE_2__.InputContainerModule,
        _controls__WEBPACK_IMPORTED_MODULE_3__.InputModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_9__.SvgIconsModule,
        _ngneat_transloco__WEBPACK_IMPORTED_MODULE_10__.TranslocoModule,
        _directives_typeface__WEBPACK_IMPORTED_MODULE_0__.TypefaceModule], exports: [_password_form__WEBPACK_IMPORTED_MODULE_4__.PasswordFormComponent,
        _password_validation_state__WEBPACK_IMPORTED_MODULE_5__.PasswordValidationStateComponent] }); })();


/***/ }),

/***/ 81167:
/*!**************************************************!*\
  !*** ./shared/components/password/validation.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPasswordState": () => (/* binding */ getPasswordState),
/* harmony export */   "passwordValidator": () => (/* binding */ passwordValidator)
/* harmony export */ });
const getPasswordState = (password, config) => {
    const minlength = (password === null || password === void 0 ? void 0 : password.length) >= config.minlength;
    const digit = !config.digit || !!(password === null || password === void 0 ? void 0 : password.match(/[0-9]/));
    const lowerCase = !config.lowerCase || !!(password === null || password === void 0 ? void 0 : password.match(/[a-z]/));
    const upperCase = !config.upperCase || !!(password === null || password === void 0 ? void 0 : password.match(/[A-Z]/));
    const specialCharacter = !config.specialCharacter || !!(password === null || password === void 0 ? void 0 : password.match(/[!`=+\-_~;'@#$%^&*(),.?":{}|<>\s\[\]\\/]/));
    return {
        minlength,
        digit,
        lowerCase,
        upperCase,
        specialCharacter,
    };
};
const passwordValidator = (config) => {
    return (control) => {
        if (!control.value) {
            return null;
        }
        const state = getPasswordState(control.value, config);
        return Object.values(state).some((value) => !value) ? { password: true } : null;
    };
};


/***/ }),

/***/ 83836:
/*!*****************************************!*\
  !*** ./shared/components/slot/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlotModule": () => (/* reexport safe */ _slot_module__WEBPACK_IMPORTED_MODULE_0__.SlotModule)
/* harmony export */ });
/* harmony import */ var _slot_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slot.module */ 50621);



/***/ }),

/***/ 40673:
/*!************************************************************!*\
  !*** ./shared/components/slot/slot-container.directive.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlotContainerDirective": () => (/* binding */ SlotContainerDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngneat/until-destroy */ 78177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _slot_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slot.service */ 75567);




let SlotContainerDirective = class SlotContainerDirective {
    constructor(slotService, templateRef, viewContainerRef) {
        this.slotService = slotService;
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
    }
    ngOnInit() {
        this.slotService.getSlotTemplate(this.forSlot)
            .pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__.untilDestroyed)(this)).subscribe((template) => {
            this.viewContainerRef.clear();
            this.renderTemplate(template || this.templateRef);
        });
    }
    renderTemplate(template) {
        this.viewContainerRef.createEmbeddedView(template, { rootElement: this.rootElement })
            .detectChanges();
    }
};
SlotContainerDirective.ɵfac = function SlotContainerDirective_Factory(t) { return new (t || SlotContainerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_slot_service__WEBPACK_IMPORTED_MODULE_0__.SlotService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef)); };
SlotContainerDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: SlotContainerDirective, selectors: [["", "appSlotContainer", ""]], inputs: { forSlot: ["appSlotContainer", "forSlot"], rootElement: ["appSlotContainerRootElement", "rootElement"] } });
SlotContainerDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__.UntilDestroy)()
], SlotContainerDirective);



/***/ }),

/***/ 85833:
/*!**************************************************!*\
  !*** ./shared/components/slot/slot.directive.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlotDirective": () => (/* binding */ SlotDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _slot_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slot.service */ 75567);


class SlotDirective {
    constructor(slotService, templateRef) {
        this.slotService = slotService;
        this.templateRef = templateRef;
    }
    ngOnInit() {
        this.slotService.registerSlot(this.slotName, this.templateRef);
    }
    ngOnChanges({ slotName }) {
        if (slotName) {
            this.slotService.registerSlot(slotName.currentValue, this.templateRef);
        }
    }
    ngOnDestroy() {
        this.slotService.unregisterSlot(this.slotName);
    }
}
SlotDirective.ɵfac = function SlotDirective_Factory(t) { return new (t || SlotDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_slot_service__WEBPACK_IMPORTED_MODULE_0__.SlotService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef)); };
SlotDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: SlotDirective, selectors: [["", "appSlot", ""]], inputs: { slotName: ["appSlot", "slotName"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });


/***/ }),

/***/ 50621:
/*!***********************************************!*\
  !*** ./shared/components/slot/slot.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlotModule": () => (/* binding */ SlotModule)
/* harmony export */ });
/* harmony import */ var _slot_container_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slot-container.directive */ 40673);
/* harmony import */ var _slot_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slot.directive */ 85833);
/* harmony import */ var _slot_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slot.service */ 75567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 89724);




class SlotModule {
    static forRoot() {
        return {
            ngModule: SlotModule,
            providers: [
                _slot_service__WEBPACK_IMPORTED_MODULE_2__.SlotService,
            ],
        };
    }
}
SlotModule.ɵfac = function SlotModule_Factory(t) { return new (t || SlotModule)(); };
SlotModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SlotModule });
SlotModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SlotModule, { declarations: [_slot_container_directive__WEBPACK_IMPORTED_MODULE_0__.SlotContainerDirective,
        _slot_directive__WEBPACK_IMPORTED_MODULE_1__.SlotDirective], exports: [_slot_container_directive__WEBPACK_IMPORTED_MODULE_0__.SlotContainerDirective,
        _slot_directive__WEBPACK_IMPORTED_MODULE_1__.SlotDirective] }); })();


/***/ }),

/***/ 75567:
/*!************************************************!*\
  !*** ./shared/components/slot/slot.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlotService": () => (/* binding */ SlotService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9779);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 74970);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 51927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 42147);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 89724);



class SlotService {
    constructor() {
        this.slotMap = new Map();
        this.slotMapChanged$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    registerSlot(name, template) {
        this.slotMap.set(name, template);
        this.slotMapChanged$.next(name);
    }
    unregisterSlot(name) {
        this.slotMap.delete(name);
        this.slotMapChanged$.next(name);
    }
    getSlotTemplate(name) {
        return this.slotMapChanged$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)((changedName) => changedName === name), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(() => this.slotMap.get(name)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.startWith)(this.slotMap.get(name)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)());
    }
}
SlotService.ɵfac = function SlotService_Factory(t) { return new (t || SlotService)(); };
SlotService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: SlotService, factory: SlotService.ɵfac });


/***/ }),

/***/ 11423:
/*!********************************************!*\
  !*** ./shared/components/spinner/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpinnerComponent": () => (/* reexport safe */ _spinner_component__WEBPACK_IMPORTED_MODULE_0__.SpinnerComponent),
/* harmony export */   "SpinnerModule": () => (/* reexport safe */ _spinner_module__WEBPACK_IMPORTED_MODULE_1__.SpinnerModule)
/* harmony export */ });
/* harmony import */ var _spinner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spinner.component */ 7406);
/* harmony import */ var _spinner_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spinner.module */ 35614);




/***/ }),

/***/ 7406:
/*!********************************************************!*\
  !*** ./shared/components/spinner/spinner.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpinnerComponent": () => (/* binding */ SpinnerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 89724);

class SpinnerComponent {
    constructor() {
        this.size = 50;
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(); };
SpinnerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["app-spinner"]], hostVars: 4, hostBindings: function SpinnerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.size, "px")("width", ctx.size, "px");
    } }, inputs: { size: "size" }, decls: 0, vars: 0, template: function SpinnerComponent_Template(rf, ctx) { }, styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n  border: 3px solid white;\n  border-radius: 50%;\n  border-top-color: #4477E4;\n  animation: spin 1.2s cubic-bezier(0.5, 0.7, 0.4, 0.1) infinite;\n}\n\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}"], changeDetection: 0 });


/***/ }),

/***/ 35614:
/*!*****************************************************!*\
  !*** ./shared/components/spinner/spinner.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpinnerModule": () => (/* binding */ SpinnerModule)
/* harmony export */ });
/* harmony import */ var _spinner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spinner.component */ 7406);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 89724);


class SpinnerModule {
}
SpinnerModule.ɵfac = function SpinnerModule_Factory(t) { return new (t || SpinnerModule)(); };
SpinnerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SpinnerModule });
SpinnerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SpinnerModule, { declarations: [_spinner_component__WEBPACK_IMPORTED_MODULE_0__.SpinnerComponent], exports: [_spinner_component__WEBPACK_IMPORTED_MODULE_0__.SpinnerComponent] }); })();


/***/ }),

/***/ 36020:
/*!******************************************!*\
  !*** ./shared/components/theme/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeMode": () => (/* reexport safe */ _theme_service__WEBPACK_IMPORTED_MODULE_1__.ThemeMode),
/* harmony export */   "ThemeModule": () => (/* reexport safe */ _theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule),
/* harmony export */   "ThemeService": () => (/* reexport safe */ _theme_service__WEBPACK_IMPORTED_MODULE_1__.ThemeService)
/* harmony export */ });
/* harmony import */ var _theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme.module */ 70540);
/* harmony import */ var _theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme.service */ 19851);




/***/ }),

/***/ 58742:
/*!***********************************************************!*\
  !*** ./shared/components/theme/theme-toggle.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeToggleComponent": () => (/* binding */ ThemeToggleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngneat/until-destroy */ 78177);
/* harmony import */ var _theme_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme.service */ 19851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/slide-toggle */ 61582);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1659);







let ThemeToggleComponent = class ThemeToggleComponent {
    constructor(changeDetectorRef, themeService) {
        this.changeDetectorRef = changeDetectorRef;
        this.themeService = themeService;
    }
    ngOnInit() {
        this.themeService.getThemeValue().pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__.untilDestroyed)(this)).subscribe((themeMode) => {
            this.value = themeMode === _theme_service__WEBPACK_IMPORTED_MODULE_0__.ThemeMode.Dark;
            this.changeDetectorRef.detectChanges();
        });
    }
    onToggleTheme(value) {
        const themeMode = value ? _theme_service__WEBPACK_IMPORTED_MODULE_0__.ThemeMode.Dark : _theme_service__WEBPACK_IMPORTED_MODULE_0__.ThemeMode.Light;
        this.themeService.setThemeValue(themeMode);
    }
};
ThemeToggleComponent.ɵfac = function ThemeToggleComponent_Factory(t) { return new (t || ThemeToggleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_theme_service__WEBPACK_IMPORTED_MODULE_0__.ThemeService)); };
ThemeToggleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ThemeToggleComponent, selectors: [["app-theme-toggle"]], decls: 1, vars: 1, consts: [[3, "ngModel", "ngModelChange"]], template: function ThemeToggleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-slide-toggle", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ThemeToggleComponent_Template_mat_slide_toggle_ngModelChange_0_listener($event) { return ctx.value = $event; })("ngModelChange", function ThemeToggleComponent_Template_mat_slide_toggle_ngModelChange_0_listener($event) { return ctx.onToggleTheme($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.value);
    } }, directives: [_angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__.MatSlideToggle, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel], styles: ["[_nghost-%COMP%]   .mat-slide-toggle[_ngcontent-%COMP%]     .mat-slide-toggle-thumb {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .mat-slide-toggle.mat-checked[_ngcontent-%COMP%]     .mat-slide-toggle-thumb:after {\n  content: \"\";\n  background-image: var(--image-theme-toggle);\n  background-origin: content-box;\n  background-size: contain;\n  background-position: center center;\n  width: 12px;\n  height: 12px;\n}\n[_nghost-%COMP%]   .mat-slide-toggle[_ngcontent-%COMP%]:not(.mat-checked)     .mat-slide-toggle-thumb:after {\n  content: \"\";\n  background-image: var(--image-theme-toggle);\n  background-origin: content-box;\n  background-size: contain;\n  background-position: center center;\n  width: 12px;\n  height: 12px;\n}"], changeDetection: 0 });
ThemeToggleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__.UntilDestroy)()
], ThemeToggleComponent);



/***/ }),

/***/ 70540:
/*!*************************************************!*\
  !*** ./shared/components/theme/theme.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeModule": () => (/* binding */ ThemeModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1659);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/slide-toggle */ 61582);
/* harmony import */ var _shared_components_theme_theme_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/components/theme/theme.service */ 19851);
/* harmony import */ var _theme_toggle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme-toggle.component */ 58742);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 89724);






class ThemeModule {
    constructor(themeService) {
        themeService.initialize();
    }
    static forRoot() {
        return {
            ngModule: ThemeModule,
            providers: [
                _shared_components_theme_theme_service__WEBPACK_IMPORTED_MODULE_0__.ThemeService,
            ],
        };
    }
}
ThemeModule.ɵfac = function ThemeModule_Factory(t) { return new (t || ThemeModule)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_components_theme_theme_service__WEBPACK_IMPORTED_MODULE_0__.ThemeService)); };
ThemeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ThemeModule });
ThemeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__.MatSlideToggleModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ThemeModule, { declarations: [_theme_toggle_component__WEBPACK_IMPORTED_MODULE_1__.ThemeToggleComponent], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__.MatSlideToggleModule], exports: [_theme_toggle_component__WEBPACK_IMPORTED_MODULE_1__.ThemeToggleComponent] }); })();


/***/ }),

/***/ 19851:
/*!**************************************************!*\
  !*** ./shared/components/theme/theme.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeMode": () => (/* binding */ ThemeMode),
/* harmony export */   "ThemeService": () => (/* binding */ ThemeService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 51927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 79034);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/until-destroy */ 78177);
/* harmony import */ var _shared_services_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/storage */ 42363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 89724);
var ThemeService_1;





var ThemeMode;
(function (ThemeMode) {
    ThemeMode["Dark"] = "dark";
    ThemeMode["Light"] = "light";
})(ThemeMode || (ThemeMode = {}));
let ThemeService = ThemeService_1 = class ThemeService {
    constructor() {
        this.themeStorage = _shared_services_storage__WEBPACK_IMPORTED_MODULE_0__.BrowserLocalStorage.getInstance();
        this.isInitilized = false;
    }
    initialize() {
        if (this.isInitilized) {
            return;
        }
        this.getThemeValue().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.startWith)(undefined), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.pairwise)(), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__.untilDestroyed)(this)).subscribe(([previousTheme, currentTheme]) => {
            document.body.classList.remove(ThemeService_1.createThemeClass(previousTheme));
            document.body.classList.add(ThemeService_1.createThemeClass(currentTheme));
        });
        this.isInitilized = true;
    }
    getThemeValue() {
        return this.themeStorage.observe('theme');
    }
    setThemeValue(value) {
        return this.themeStorage.set('theme', value);
    }
    static createThemeClass(theme) {
        return `theme-${theme}`;
    }
};
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(); };
ThemeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ThemeService, factory: ThemeService.ɵfac });
ThemeService = ThemeService_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__.UntilDestroy)()
], ThemeService);



/***/ }),

/***/ 39757:
/*!**************************************************************!*\
  !*** ./shared/directives/auto-focus/auto-focus.directive.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutoFocusDirective": () => (/* binding */ AutoFocusDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 89724);

class AutoFocusDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.enabled = true;
    }
    ngAfterViewInit() {
        if (!this.enabled) {
            return;
        }
        this.elementRef.nativeElement.focus();
    }
}
AutoFocusDirective.ɵfac = function AutoFocusDirective_Factory(t) { return new (t || AutoFocusDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
AutoFocusDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AutoFocusDirective, selectors: [["", "appAutoFocus", ""]], inputs: { enabled: ["appAutoFocus", "enabled"] } });


/***/ }),

/***/ 26938:
/*!***********************************************************!*\
  !*** ./shared/directives/auto-focus/auto-focus.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutoFocusModule": () => (/* binding */ AutoFocusModule)
/* harmony export */ });
/* harmony import */ var _auto_focus_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auto-focus.directive */ 39757);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 89724);


class AutoFocusModule {
}
AutoFocusModule.ɵfac = function AutoFocusModule_Factory(t) { return new (t || AutoFocusModule)(); };
AutoFocusModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AutoFocusModule });
AutoFocusModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AutoFocusModule, { declarations: [_auto_focus_directive__WEBPACK_IMPORTED_MODULE_0__.AutoFocusDirective], exports: [_auto_focus_directive__WEBPACK_IMPORTED_MODULE_0__.AutoFocusDirective] }); })();


/***/ }),

/***/ 2228:
/*!***********************************************!*\
  !*** ./shared/directives/auto-focus/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutoFocusModule": () => (/* reexport safe */ _auto_focus_module__WEBPACK_IMPORTED_MODULE_0__.AutoFocusModule)
/* harmony export */ });
/* harmony import */ var _auto_focus_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auto-focus.module */ 26938);



/***/ }),

/***/ 88431:
/*!************************************************************************!*\
  !*** ./shared/directives/browser-view/browser-popup-view.directive.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserPopupViewDirective": () => (/* binding */ BrowserPopupViewDirective)
/* harmony export */ });
/* harmony import */ var _utils_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/browser */ 94240);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 89724);


class BrowserPopupViewDirective {
    constructor(templateRef, viewContainerRef) {
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
    }
    ngAfterViewInit() {
        if (!(0,_utils_browser__WEBPACK_IMPORTED_MODULE_0__.isOpenedInTab)()) {
            this.viewContainerRef.createEmbeddedView(this.templateRef).detectChanges();
        }
    }
}
BrowserPopupViewDirective.ɵfac = function BrowserPopupViewDirective_Factory(t) { return new (t || BrowserPopupViewDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef)); };
BrowserPopupViewDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: BrowserPopupViewDirective, selectors: [["", "appBrowserPopupView", ""]] });


/***/ }),

/***/ 59896:
/*!**********************************************************************!*\
  !*** ./shared/directives/browser-view/browser-tab-view.directive.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserTabViewDirective": () => (/* binding */ BrowserTabViewDirective)
/* harmony export */ });
/* harmony import */ var _utils_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/browser */ 94240);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 89724);


class BrowserTabViewDirective {
    constructor(templateRef, viewContainerRef) {
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
    }
    ngAfterViewInit() {
        if ((0,_utils_browser__WEBPACK_IMPORTED_MODULE_0__.isOpenedInTab)()) {
            this.viewContainerRef.createEmbeddedView(this.templateRef).detectChanges();
        }
    }
}
BrowserTabViewDirective.ɵfac = function BrowserTabViewDirective_Factory(t) { return new (t || BrowserTabViewDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef)); };
BrowserTabViewDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: BrowserTabViewDirective, selectors: [["", "appBrowserTabView", ""]] });


/***/ }),

/***/ 58951:
/*!***************************************************************!*\
  !*** ./shared/directives/browser-view/browser-view.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserViewModule": () => (/* binding */ BrowserViewModule)
/* harmony export */ });
/* harmony import */ var _browser_popup_view_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browser-popup-view.directive */ 88431);
/* harmony import */ var _browser_tab_view_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browser-tab-view.directive */ 59896);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 89724);



class BrowserViewModule {
}
BrowserViewModule.ɵfac = function BrowserViewModule_Factory(t) { return new (t || BrowserViewModule)(); };
BrowserViewModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: BrowserViewModule });
BrowserViewModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BrowserViewModule, { declarations: [_browser_popup_view_directive__WEBPACK_IMPORTED_MODULE_0__.BrowserPopupViewDirective,
        _browser_tab_view_directive__WEBPACK_IMPORTED_MODULE_1__.BrowserTabViewDirective], exports: [_browser_popup_view_directive__WEBPACK_IMPORTED_MODULE_0__.BrowserPopupViewDirective,
        _browser_tab_view_directive__WEBPACK_IMPORTED_MODULE_1__.BrowserTabViewDirective] }); })();


/***/ }),

/***/ 61349:
/*!*************************************************!*\
  !*** ./shared/directives/browser-view/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserViewModule": () => (/* reexport safe */ _browser_view_module__WEBPACK_IMPORTED_MODULE_0__.BrowserViewModule)
/* harmony export */ });
/* harmony import */ var _browser_view_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browser-view.module */ 58951);



/***/ }),

/***/ 3975:
/*!****************************************************************!*\
  !*** ./shared/directives/drag-scroll/drag-scroll.directive.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragScrollDirective": () => (/* binding */ DragScrollDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 14581);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 61528);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 51927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 79034);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 13528);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngneat/until-destroy */ 78177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 89724);





let DragScrollDirective = class DragScrollDirective {
    constructor(elementRef) {
        this.dragScrollElement = elementRef.nativeElement;
    }
    ngOnInit() {
        this.defaultCursor = this.dragScrollElement.style.cursor;
        (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.fromEvent)(this.dragScrollElement, 'mouseover').pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__.untilDestroyed)(this)).subscribe(() => {
            if (this.dragScrollElement.scrollWidth > this.dragScrollElement.offsetWidth) {
                this.dragScrollElement.style.cursor = 'grabbing';
            }
        });
        (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.fromEvent)(this.dragScrollElement, 'mouseleave').pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__.untilDestroyed)(this)).subscribe(() => {
            this.dragScrollElement.style.cursor = this.defaultCursor;
        });
        (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.fromEvent)(this.dragScrollElement, 'mousedown').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)((event) => (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.fromEvent)(this.dragScrollElement, 'mousemove').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.startWith)(event), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(({ clientX }) => clientX), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.pairwise)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.fromEvent)(this.dragScrollElement, 'mouseup')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.fromEvent)(this.dragScrollElement, 'mouseleave')))), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__.untilDestroyed)(this)).subscribe(([prevX, currX]) => {
            this.dragScrollElement.scrollLeft = this.dragScrollElement.scrollLeft + prevX - currX;
        });
    }
};
DragScrollDirective.ɵfac = function DragScrollDirective_Factory(t) { return new (t || DragScrollDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef)); };
DragScrollDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({ type: DragScrollDirective, selectors: [["", "appDragScroll", ""]] });
DragScrollDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__.UntilDestroy)()
], DragScrollDirective);



/***/ }),

/***/ 17148:
/*!*************************************************************!*\
  !*** ./shared/directives/drag-scroll/drag-scroll.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragScrollModule": () => (/* binding */ DragScrollModule)
/* harmony export */ });
/* harmony import */ var _drag_scroll_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag-scroll.directive */ 3975);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 89724);


class DragScrollModule {
}
DragScrollModule.ɵfac = function DragScrollModule_Factory(t) { return new (t || DragScrollModule)(); };
DragScrollModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DragScrollModule });
DragScrollModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DragScrollModule, { declarations: [_drag_scroll_directive__WEBPACK_IMPORTED_MODULE_0__.DragScrollDirective], exports: [_drag_scroll_directive__WEBPACK_IMPORTED_MODULE_0__.DragScrollDirective] }); })();


/***/ }),

/***/ 56784:
/*!************************************************!*\
  !*** ./shared/directives/drag-scroll/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragScrollModule": () => (/* reexport safe */ _drag_scroll_module__WEBPACK_IMPORTED_MODULE_0__.DragScrollModule)
/* harmony export */ });
/* harmony import */ var _drag_scroll_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag-scroll.module */ 17148);



/***/ }),

/***/ 53299:
/*!******************************************************************!*\
  !*** ./shared/directives/mouse-wheel-horizontal-scroll/index.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MouseWheelHorizontalScrollModule": () => (/* reexport safe */ _mouse_wheel_horizontal_scroll_module__WEBPACK_IMPORTED_MODULE_0__.MouseWheelHorizontalScrollModule)
/* harmony export */ });
/* harmony import */ var _mouse_wheel_horizontal_scroll_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mouse-wheel-horizontal-scroll.module */ 26733);



/***/ }),

/***/ 66989:
/*!****************************************************************************************************!*\
  !*** ./shared/directives/mouse-wheel-horizontal-scroll/mouse-wheel-horizontal-scroll.directive.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MouseWheelHorizontalScrollDirective": () => (/* binding */ MouseWheelHorizontalScrollDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 14581);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngneat/until-destroy */ 78177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 89724);




let MouseWheelHorizontalScrollDirective = class MouseWheelHorizontalScrollDirective {
    constructor(elementRef) {
        this.mouseWheelHorizontalScrollElement = elementRef.nativeElement;
    }
    ngOnInit() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.fromEvent)(this.mouseWheelHorizontalScrollElement, 'wheel').pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__.untilDestroyed)(this)).subscribe((event) => {
            this.mouseWheelHorizontalScrollElement.scrollLeft
                = this.mouseWheelHorizontalScrollElement.scrollLeft + event.deltaY * (event.deltaMode ? 30 : 1);
        });
    }
};
MouseWheelHorizontalScrollDirective.ɵfac = function MouseWheelHorizontalScrollDirective_Factory(t) { return new (t || MouseWheelHorizontalScrollDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef)); };
MouseWheelHorizontalScrollDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: MouseWheelHorizontalScrollDirective, selectors: [["", "appMouseWheelHorizontalScroll", ""]] });
MouseWheelHorizontalScrollDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__.UntilDestroy)()
], MouseWheelHorizontalScrollDirective);



/***/ }),

/***/ 26733:
/*!*************************************************************************************************!*\
  !*** ./shared/directives/mouse-wheel-horizontal-scroll/mouse-wheel-horizontal-scroll.module.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MouseWheelHorizontalScrollModule": () => (/* binding */ MouseWheelHorizontalScrollModule)
/* harmony export */ });
/* harmony import */ var _mouse_wheel_horizontal_scroll_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mouse-wheel-horizontal-scroll.directive */ 66989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 89724);


class MouseWheelHorizontalScrollModule {
}
MouseWheelHorizontalScrollModule.ɵfac = function MouseWheelHorizontalScrollModule_Factory(t) { return new (t || MouseWheelHorizontalScrollModule)(); };
MouseWheelHorizontalScrollModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MouseWheelHorizontalScrollModule });
MouseWheelHorizontalScrollModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MouseWheelHorizontalScrollModule, { declarations: [_mouse_wheel_horizontal_scroll_directive__WEBPACK_IMPORTED_MODULE_0__.MouseWheelHorizontalScrollDirective], exports: [_mouse_wheel_horizontal_scroll_directive__WEBPACK_IMPORTED_MODULE_0__.MouseWheelHorizontalScrollDirective] }); })();


/***/ }),

/***/ 6231:
/*!********************************************!*\
  !*** ./shared/directives/numeric/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumericModule": () => (/* reexport safe */ _numeric_module__WEBPACK_IMPORTED_MODULE_0__.NumericModule)
/* harmony export */ });
/* harmony import */ var _numeric_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./numeric.module */ 65092);



/***/ }),

/***/ 31487:
/*!********************************************************!*\
  !*** ./shared/directives/numeric/numeric.directive.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumericDirective": () => (/* binding */ NumericDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 14581);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngneat/until-destroy */ 78177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1659);





let NumericDirective = class NumericDirective {
    constructor(control, elementRef) {
        this.control = control;
        this.elementRef = elementRef;
        this.enabled = true;
    }
    ngOnInit() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.fromEvent)(this.elementRef.nativeElement, 'keydown').pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__.untilDestroyed)(this)).subscribe((event) => {
            this.onKeydown(event);
            this.previousValue = this.getValue();
        });
    }
    onInput() {
        if (!this.enabled) {
            return;
        }
        let value = this.getValue();
        const valueMatch = new RegExp(/[0-9.]+/).exec(value);
        value = valueMatch ? valueMatch[0] : '';
        if ([null, ''].includes(value)) {
            return;
        }
        if (value === '0' && this.previousValue === '0.') {
            this.setValue('');
            return;
        }
        if (['0', '.'].some((key) => key === value)) {
            this.setValue('0.');
            return;
        }
        if (value.endsWith('.')) {
            return;
        }
        this.setValue(value);
    }
    onKeydown(event) {
        if (!this.enabled) {
            return;
        }
        const { key, keyCode } = event;
        const value = this.getValue();
        if (key === '.') {
            if (value.includes('.')) {
                event.preventDefault();
            }
            return;
        }
        if ([46, 8, 9, 27, 13, 110].includes(keyCode)) {
            return;
        }
        if ((event.ctrlKey || event.metaKey) && [65, 67, 86, 88].includes(keyCode)) {
            return;
        }
        if (keyCode >= 35 && keyCode <= 39) {
            return;
        }
        if (parseInt(key) >= 0 && parseInt(key) <= 9) {
            return;
        }
        event.preventDefault();
    }
    getValue() {
        return this.elementRef.nativeElement.value;
    }
    setValue(value) {
        var _a;
        const valueToSet = value.toString();
        this.elementRef.nativeElement.value = valueToSet;
        (_a = this.control) === null || _a === void 0 ? void 0 : _a.control.setValue(valueToSet);
    }
};
NumericDirective.ɵfac = function NumericDirective_Factory(t) { return new (t || NumericDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControl, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef)); };
NumericDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NumericDirective, selectors: [["input", "appNumeric", ""]], hostBindings: function NumericDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function NumericDirective_input_HostBindingHandler() { return ctx.onInput(); });
    } }, inputs: { enabled: ["appNumeric", "enabled"] } });
NumericDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_1__.UntilDestroy)()
], NumericDirective);



/***/ }),

/***/ 65092:
/*!*****************************************************!*\
  !*** ./shared/directives/numeric/numeric.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumericModule": () => (/* binding */ NumericModule)
/* harmony export */ });
/* harmony import */ var _numeric_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./numeric.directive */ 31487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 89724);


class NumericModule {
}
NumericModule.ɵfac = function NumericModule_Factory(t) { return new (t || NumericModule)(); };
NumericModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NumericModule });
NumericModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NumericModule, { declarations: [_numeric_directive__WEBPACK_IMPORTED_MODULE_0__.NumericDirective], exports: [_numeric_directive__WEBPACK_IMPORTED_MODULE_0__.NumericDirective] }); })();


/***/ }),

/***/ 79062:
/*!**************************************************************!*\
  !*** ./shared/directives/router-link-scroll-anchor/index.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouterLinkScrollAnchorModule": () => (/* reexport safe */ _router_link_scroll_anchor_module__WEBPACK_IMPORTED_MODULE_0__.RouterLinkScrollAnchorModule)
/* harmony export */ });
/* harmony import */ var _router_link_scroll_anchor_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router-link-scroll-anchor.module */ 74699);



/***/ }),

/***/ 87175:
/*!********************************************************************************************!*\
  !*** ./shared/directives/router-link-scroll-anchor/router-link-scroll-anchor.directive.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouterLinkScrollAnchorDirective": () => (/* binding */ RouterLinkScrollAnchorDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 74970);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 51927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 88960);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 45113);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/until-destroy */ 78177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 89724);






let RouterLinkScrollAnchorDirective = class RouterLinkScrollAnchorDirective {
    constructor(elementRef, router, routerLink) {
        this.elementRef = elementRef;
        this.router = router;
        this.routerLink = routerLink;
    }
    ngAfterViewInit() {
        this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.filter)((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.startWith)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(100), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.untilDestroyed)(this)).subscribe(() => {
            if (this.router.isActive(this.routerLink.urlTree, true)) {
                this.elementRef.nativeElement.scrollIntoView();
            }
        });
    }
};
RouterLinkScrollAnchorDirective.ɵfac = function RouterLinkScrollAnchorDirective_Factory(t) { return new (t || RouterLinkScrollAnchorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref)); };
RouterLinkScrollAnchorDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({ type: RouterLinkScrollAnchorDirective, selectors: [["", "appRouterLinkScrollAnchor", ""]] });
RouterLinkScrollAnchorDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.UntilDestroy)()
], RouterLinkScrollAnchorDirective);



/***/ }),

/***/ 74699:
/*!*****************************************************************************************!*\
  !*** ./shared/directives/router-link-scroll-anchor/router-link-scroll-anchor.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouterLinkScrollAnchorModule": () => (/* binding */ RouterLinkScrollAnchorModule)
/* harmony export */ });
/* harmony import */ var _router_link_scroll_anchor_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router-link-scroll-anchor.directive */ 87175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 89724);


class RouterLinkScrollAnchorModule {
}
RouterLinkScrollAnchorModule.ɵfac = function RouterLinkScrollAnchorModule_Factory(t) { return new (t || RouterLinkScrollAnchorModule)(); };
RouterLinkScrollAnchorModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: RouterLinkScrollAnchorModule });
RouterLinkScrollAnchorModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RouterLinkScrollAnchorModule, { declarations: [_router_link_scroll_anchor_directive__WEBPACK_IMPORTED_MODULE_0__.RouterLinkScrollAnchorDirective], exports: [_router_link_scroll_anchor_directive__WEBPACK_IMPORTED_MODULE_0__.RouterLinkScrollAnchorDirective] }); })();


/***/ }),

/***/ 71019:
/*!**************************************************!*\
  !*** ./shared/directives/submit-source/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubmitSourceDirective": () => (/* reexport safe */ _submit_source_directive__WEBPACK_IMPORTED_MODULE_0__.SubmitSourceDirective),
/* harmony export */   "SubmitSourceModule": () => (/* reexport safe */ _submit_source_module__WEBPACK_IMPORTED_MODULE_1__.SubmitSourceModule)
/* harmony export */ });
/* harmony import */ var _submit_source_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./submit-source.directive */ 387);
/* harmony import */ var _submit_source_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submit-source.module */ 93710);




/***/ }),

/***/ 387:
/*!********************************************************************!*\
  !*** ./shared/directives/submit-source/submit-source.directive.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubmitSourceDirective": () => (/* binding */ SubmitSourceDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 1659);


class SubmitSourceDirective {
    constructor(formGroupDirective) {
        this.formGroupDirective = formGroupDirective;
    }
    get statusChanges() {
        return this.formGroupDirective.statusChanges;
    }
    get ngSubmit() {
        return this.formGroupDirective.ngSubmit;
    }
    get submitted() {
        return this.formGroupDirective.submitted;
    }
}
SubmitSourceDirective.ɵfac = function SubmitSourceDirective_Factory(t) { return new (t || SubmitSourceDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, 1)); };
SubmitSourceDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SubmitSourceDirective, selectors: [["form", "appSubmitSource", ""]] });


/***/ }),

/***/ 93710:
/*!*****************************************************************!*\
  !*** ./shared/directives/submit-source/submit-source.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubmitSourceModule": () => (/* binding */ SubmitSourceModule)
/* harmony export */ });
/* harmony import */ var _submit_source_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./submit-source.directive */ 387);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 89724);


class SubmitSourceModule {
}
SubmitSourceModule.ɵfac = function SubmitSourceModule_Factory(t) { return new (t || SubmitSourceModule)(); };
SubmitSourceModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SubmitSourceModule });
SubmitSourceModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SubmitSourceModule, { declarations: [_submit_source_directive__WEBPACK_IMPORTED_MODULE_0__.SubmitSourceDirective], exports: [_submit_source_directive__WEBPACK_IMPORTED_MODULE_0__.SubmitSourceDirective] }); })();


/***/ }),

/***/ 1451:
/*!**************************************************!*\
  !*** ./shared/directives/text-ellipsis/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextEllipsisModule": () => (/* reexport safe */ _text_ellipsis_module__WEBPACK_IMPORTED_MODULE_0__.TextEllipsisModule)
/* harmony export */ });
/* harmony import */ var _text_ellipsis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-ellipsis.module */ 54552);



/***/ }),

/***/ 50262:
/*!********************************************************************!*\
  !*** ./shared/directives/text-ellipsis/text-ellipsis.directive.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextEllipsisDirective": () => (/* binding */ TextEllipsisDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 89724);

class TextEllipsisDirective {
    constructor() {
        this.hasHostClass = true;
    }
}
TextEllipsisDirective.ɵfac = function TextEllipsisDirective_Factory(t) { return new (t || TextEllipsisDirective)(); };
TextEllipsisDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TextEllipsisDirective, selectors: [["", "appTextEllipsis", ""]], hostVars: 2, hostBindings: function TextEllipsisDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("text-ellipsis", ctx.hasHostClass);
    } } });


/***/ }),

/***/ 54552:
/*!*****************************************************************!*\
  !*** ./shared/directives/text-ellipsis/text-ellipsis.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextEllipsisModule": () => (/* binding */ TextEllipsisModule)
/* harmony export */ });
/* harmony import */ var _text_ellipsis_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-ellipsis.directive */ 50262);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 89724);


class TextEllipsisModule {
}
TextEllipsisModule.ɵfac = function TextEllipsisModule_Factory(t) { return new (t || TextEllipsisModule)(); };
TextEllipsisModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TextEllipsisModule });
TextEllipsisModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TextEllipsisModule, { declarations: [_text_ellipsis_directive__WEBPACK_IMPORTED_MODULE_0__.TextEllipsisDirective], exports: [_text_ellipsis_directive__WEBPACK_IMPORTED_MODULE_0__.TextEllipsisDirective] }); })();


/***/ }),

/***/ 2703:
/*!*********************************************!*\
  !*** ./shared/directives/typeface/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypefaceModule": () => (/* reexport safe */ _typeface_module__WEBPACK_IMPORTED_MODULE_0__.TypefaceModule)
/* harmony export */ });
/* harmony import */ var _typeface_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeface.module */ 73314);



/***/ }),

/***/ 31857:
/*!**********************************************************!*\
  !*** ./shared/directives/typeface/typeface.directive.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypefaceDirective": () => (/* binding */ TypefaceDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 89724);

class TypefaceDirective {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    ngOnChanges({ typeface }) {
        if (typeface) {
            this.renderer.removeClass(this.elementRef.nativeElement, `typeface-${typeface.previousValue}`);
            if (typeface.currentValue) {
                this.renderer.addClass(this.elementRef.nativeElement, `typeface-${typeface.currentValue}`);
            }
        }
    }
}
TypefaceDirective.ɵfac = function TypefaceDirective_Factory(t) { return new (t || TypefaceDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2)); };
TypefaceDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TypefaceDirective, selectors: [["", "appTypeface", ""]], inputs: { typeface: ["appTypeface", "typeface"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });


/***/ }),

/***/ 73314:
/*!*******************************************************!*\
  !*** ./shared/directives/typeface/typeface.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypefaceModule": () => (/* binding */ TypefaceModule)
/* harmony export */ });
/* harmony import */ var _typeface_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeface.directive */ 31857);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 89724);


class TypefaceModule {
}
TypefaceModule.ɵfac = function TypefaceModule_Factory(t) { return new (t || TypefaceModule)(); };
TypefaceModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TypefaceModule });
TypefaceModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TypefaceModule, { declarations: [_typeface_directive__WEBPACK_IMPORTED_MODULE_0__.TypefaceDirective], exports: [_typeface_directive__WEBPACK_IMPORTED_MODULE_0__.TypefaceDirective] }); })();


/***/ }),

/***/ 23012:
/*!*******************************************!*\
  !*** ./shared/forms/form-control-warn.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormControlWarn": () => (/* binding */ FormControlWarn)
/* harmony export */ });
/* harmony import */ var _ngneat_reactive_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/reactive-forms */ 18260);

class FormControlWarn extends _ngneat_reactive_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl {
    get isWarning() {
        return this.warnings !== null && this.warnings !== undefined;
    }
    updateValueAndValidity(opts) {
        this.warnings = undefined;
        super.updateValueAndValidity(opts);
    }
}


/***/ }),

/***/ 67540:
/*!*******************************!*\
  !*** ./shared/forms/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormControlWarn": () => (/* reexport safe */ _form_control_warn__WEBPACK_IMPORTED_MODULE_0__.FormControlWarn)
/* harmony export */ });
/* harmony import */ var _form_control_warn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-control-warn */ 23012);



/***/ }),

/***/ 73015:
/*!*************************************!*\
  !*** ./shared/message-bus/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageBus": () => (/* reexport safe */ _message_bus__WEBPACK_IMPORTED_MODULE_0__.MessageBus)
/* harmony export */ });
/* harmony import */ var _message_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message-bus */ 51477);



/***/ }),

/***/ 51477:
/*!*******************************************!*\
  !*** ./shared/message-bus/message-bus.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageBus": () => (/* binding */ MessageBus)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 87241);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webextension-polyfill */ 87744);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__);


class MessageBus {
    sendMessage(code, body) {
        const messageSent = { code, body };
        return webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.runtime.sendMessage(messageSent).catch(() => void 0);
    }
    onMessage(messageCode) {
        return this.buildOnMessageListener(webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.runtime.onMessage, messageCode);
    }
    onMessageSync(messageCode) {
        return this.buildOnMessageListener(webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.runtime.onMessage, messageCode, true);
    }
    buildOnMessageListener(source, messageCode, sync) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable((subscriber) => {
            const listener = (message, sender) => {
                if (message.code !== messageCode) {
                    return;
                }
                return sync
                    ? subscriber.next({ body: message.body, sender })
                    : new Promise((resolve) => subscriber.next({
                        body: message.body,
                        sender,
                        sendResponse: resolve,
                    }));
            };
            source.addListener(listener);
            return () => source.removeListener(listener);
        });
    }
}


/***/ }),

/***/ 15170:
/*!***********************************************************************!*\
  !*** ./shared/permissions/has-permission/has-permission.directive.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HasPermissionDirective": () => (/* binding */ HasPermissionDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5557);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 61528);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/until-destroy */ 78177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _permissions_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../permissions.service */ 9467);






let HasPermissionDirective = class HasPermissionDirective {
    constructor(permissionService, templateRef, viewContainerRef) {
        this.permissionService = permissionService;
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.permissions$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
    }
    set permissions(value) {
        this.permissions$.next(value);
    }
    ngOnInit() {
        this.permissions$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)((permissions) => this.permissionService.hasPermissions(permissions)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__.untilDestroyed)(this)).subscribe((hasPermissions) => {
            if (!hasPermissions) {
                this.viewContainerRef.clear();
                return;
            }
            if (!this.viewContainerRef.length) {
                this.viewContainerRef.createEmbeddedView(this.templateRef);
            }
        });
    }
};
HasPermissionDirective.ɵfac = function HasPermissionDirective_Factory(t) { return new (t || HasPermissionDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_permissions_service__WEBPACK_IMPORTED_MODULE_0__.PermissionsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewContainerRef)); };
HasPermissionDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: HasPermissionDirective, selectors: [["", "appHasPermission", ""]], inputs: { permissions: ["appHasPermission", "permissions"] } });
HasPermissionDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__.UntilDestroy)()
], HasPermissionDirective);



/***/ }),

/***/ 48370:
/*!****************************************************!*\
  !*** ./shared/permissions/has-permission/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HasPermissionDirective": () => (/* reexport safe */ _has_permission_directive__WEBPACK_IMPORTED_MODULE_0__.HasPermissionDirective)
/* harmony export */ });
/* harmony import */ var _has_permission_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./has-permission.directive */ 15170);



/***/ }),

/***/ 6032:
/*!*************************************!*\
  !*** ./shared/permissions/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PermissionsModule": () => (/* reexport safe */ _permissions_module__WEBPACK_IMPORTED_MODULE_0__.PermissionsModule),
/* harmony export */   "PermissionsService": () => (/* reexport safe */ _permissions_service__WEBPACK_IMPORTED_MODULE_1__.PermissionsService)
/* harmony export */ });
/* harmony import */ var _permissions_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./permissions.module */ 48679);
/* harmony import */ var _permissions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./permissions.service */ 9467);




/***/ }),

/***/ 48679:
/*!**************************************************!*\
  !*** ./shared/permissions/permissions.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PermissionsModule": () => (/* binding */ PermissionsModule)
/* harmony export */ });
/* harmony import */ var _has_permission__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./has-permission */ 48370);
/* harmony import */ var _permissions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./permissions.service */ 9467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 89724);



class PermissionsModule {
    static forRoot(customPermissionsService) {
        return {
            ngModule: PermissionsModule,
            providers: [
                customPermissionsService
                    ? {
                        provide: _permissions_service__WEBPACK_IMPORTED_MODULE_1__.PermissionsService,
                        useClass: customPermissionsService,
                    }
                    : _permissions_service__WEBPACK_IMPORTED_MODULE_1__.PermissionsService,
            ],
        };
    }
}
PermissionsModule.ɵfac = function PermissionsModule_Factory(t) { return new (t || PermissionsModule)(); };
PermissionsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PermissionsModule });
PermissionsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PermissionsModule, { declarations: [_has_permission__WEBPACK_IMPORTED_MODULE_0__.HasPermissionDirective], exports: [_has_permission__WEBPACK_IMPORTED_MODULE_0__.HasPermissionDirective] }); })();


/***/ }),

/***/ 9467:
/*!***************************************************!*\
  !*** ./shared/permissions/permissions.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PermissionsService": () => (/* binding */ PermissionsService)
/* harmony export */ });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ 92541);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 54121);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/array */ 73578);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 89724);





class PermissionsService {
    constructor() {
        this.permissions$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
    }
    getPermissions() {
        return this.permissions$.asObservable();
    }
    getPermissionsInstant() {
        return this.permissions$.value;
    }
    setPermissions(permissions) {
        this.permissions$.next((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceArray)(permissions));
    }
    addPermissions(permissions) {
        const currentPermissions = this.getPermissionsInstant();
        this.permissions$.next([
            ...currentPermissions,
            ...(0,_utils_array__WEBPACK_IMPORTED_MODULE_0__.excludeArrayValues)((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceArray)(permissions), currentPermissions),
        ]);
    }
    removePermissions(permissions) {
        this.permissions$.next((0,_utils_array__WEBPACK_IMPORTED_MODULE_0__.excludeArrayValues)(this.getPermissionsInstant(), (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceArray)(permissions)));
    }
    clearPermissions() {
        this.permissions$.next([]);
    }
    hasPermissions(permissions) {
        return this.getPermissions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => this.hasPermissionsInstant(permissions)));
    }
    hasPermissionsInstant(permissions) {
        return (0,_utils_array__WEBPACK_IMPORTED_MODULE_0__.arrayIntersection)(this.getPermissionsInstant(), (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceArray)(permissions)).length > 0;
    }
}
PermissionsService.ɵfac = function PermissionsService_Factory(t) { return new (t || PermissionsService)(); };
PermissionsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: PermissionsService, factory: PermissionsService.ɵfac });


/***/ }),

/***/ 55219:
/*!*******************************************!*\
  !*** ./shared/pipes/micro-value/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MICRO_PDV_DIVISOR": () => (/* reexport safe */ _micro_value_pipe__WEBPACK_IMPORTED_MODULE_1__.MICRO_PDV_DIVISOR),
/* harmony export */   "MicroValueModule": () => (/* reexport safe */ _micro_value_module__WEBPACK_IMPORTED_MODULE_0__.MicroValueModule),
/* harmony export */   "MicroValuePipe": () => (/* reexport safe */ _micro_value_pipe__WEBPACK_IMPORTED_MODULE_1__.MicroValuePipe)
/* harmony export */ });
/* harmony import */ var _micro_value_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./micro-value.module */ 4098);
/* harmony import */ var _micro_value_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./micro-value.pipe */ 30087);




/***/ }),

/***/ 4098:
/*!********************************************************!*\
  !*** ./shared/pipes/micro-value/micro-value.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MicroValueModule": () => (/* binding */ MicroValueModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 11048);
/* harmony import */ var _micro_value_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./micro-value.pipe */ 30087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 89724);



class MicroValueModule {
}
MicroValueModule.ɵfac = function MicroValueModule_Factory(t) { return new (t || MicroValueModule)(); };
MicroValueModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MicroValueModule });
MicroValueModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [
        _angular_common__WEBPACK_IMPORTED_MODULE_2__.DecimalPipe,
        _micro_value_pipe__WEBPACK_IMPORTED_MODULE_0__.MicroValuePipe,
    ] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MicroValueModule, { declarations: [_micro_value_pipe__WEBPACK_IMPORTED_MODULE_0__.MicroValuePipe], exports: [_micro_value_pipe__WEBPACK_IMPORTED_MODULE_0__.MicroValuePipe] }); })();


/***/ }),

/***/ 30087:
/*!******************************************************!*\
  !*** ./shared/pipes/micro-value/micro-value.pipe.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MICRO_PDV_DIVISOR": () => (/* binding */ MICRO_PDV_DIVISOR),
/* harmony export */   "MicroValuePipe": () => (/* binding */ MicroValuePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 89724);

const MICRO_PDV_DIVISOR = 1000000;
class MicroValuePipe {
    transform(value) {
        return +(+value / MICRO_PDV_DIVISOR).toFixed(6);
    }
}
MicroValuePipe.ɵfac = function MicroValuePipe_Factory(t) { return new (t || MicroValuePipe)(); };
MicroValuePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "microValue", type: MicroValuePipe, pure: true });


/***/ }),

/***/ 68259:
/*!*********************************************!*\
  !*** ./shared/pipes/number-format/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CHAR_NO_BREAK_SPACE": () => (/* reexport safe */ _number_format_pipe__WEBPACK_IMPORTED_MODULE_1__.CHAR_NO_BREAK_SPACE),
/* harmony export */   "DEFAULT_DECIMAL_SEPARATOR": () => (/* reexport safe */ _number_format_pipe__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_DECIMAL_SEPARATOR),
/* harmony export */   "NumberFormatModule": () => (/* reexport safe */ _number_format_module__WEBPACK_IMPORTED_MODULE_0__.NumberFormatModule),
/* harmony export */   "NumberFormatPipe": () => (/* reexport safe */ _number_format_pipe__WEBPACK_IMPORTED_MODULE_1__.NumberFormatPipe)
/* harmony export */ });
/* harmony import */ var _number_format_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number-format.module */ 29862);
/* harmony import */ var _number_format_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number-format.pipe */ 17667);




/***/ }),

/***/ 29862:
/*!************************************************************!*\
  !*** ./shared/pipes/number-format/number-format.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumberFormatModule": () => (/* binding */ NumberFormatModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 11048);
/* harmony import */ var _number_format_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number-format.pipe */ 17667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 89724);



class NumberFormatModule {
}
NumberFormatModule.ɵfac = function NumberFormatModule_Factory(t) { return new (t || NumberFormatModule)(); };
NumberFormatModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NumberFormatModule });
NumberFormatModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [
        _angular_common__WEBPACK_IMPORTED_MODULE_2__.DecimalPipe,
    ] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NumberFormatModule, { declarations: [_number_format_pipe__WEBPACK_IMPORTED_MODULE_0__.NumberFormatPipe], exports: [_number_format_pipe__WEBPACK_IMPORTED_MODULE_0__.NumberFormatPipe] }); })();


/***/ }),

/***/ 17667:
/*!**********************************************************!*\
  !*** ./shared/pipes/number-format/number-format.pipe.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CHAR_NO_BREAK_SPACE": () => (/* binding */ CHAR_NO_BREAK_SPACE),
/* harmony export */   "DEFAULT_DECIMAL_SEPARATOR": () => (/* binding */ DEFAULT_DECIMAL_SEPARATOR),
/* harmony export */   "NumberFormatPipe": () => (/* binding */ NumberFormatPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 11048);


const CHAR_NO_BREAK_SPACE = '\u00A0';
const DEFAULT_DECIMAL_SEPARATOR = '.';
class NumberFormatPipe {
    constructor(decimalPipe) {
        this.decimalPipe = decimalPipe;
    }
    transform(value, digitsInfo = null, separateThousands = false, decimalSeparator = DEFAULT_DECIMAL_SEPARATOR, thousandSeparator = CHAR_NO_BREAK_SPACE) {
        if (!['string', 'number'].includes(typeof value)) {
            return '';
        }
        const transformedValue = digitsInfo === null
            ? value
            : this.decimalPipe.transform(value, digitsInfo).replace(/,/g, '');
        const integerPartString = Math.floor(Math.abs(Number(transformedValue))).toString();
        const fractionPartString = transformedValue.toString().split('.')[1] || '';
        const remainder = integerPartString.length % 3;
        const sign = transformedValue < 0 ? '-' : '';
        let result = sign + integerPartString.charAt(0);
        if (!separateThousands) {
            thousandSeparator = '';
        }
        for (let i = 1; i < integerPartString.length; i++) {
            if (i % 3 === remainder && integerPartString.length > 3) {
                result += thousandSeparator;
            }
            result += integerPartString.charAt(i);
        }
        const separator = !!decimalSeparator
            ? decimalSeparator
            : DEFAULT_DECIMAL_SEPARATOR;
        return !!fractionPartString
            ? result + separator + fractionPartString
            : result;
    }
}
NumberFormatPipe.ɵfac = function NumberFormatPipe_Factory(t) { return new (t || NumberFormatPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe, 16)); };
NumberFormatPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "numberFormat", type: NumberFormatPipe, pure: true });


/***/ }),

/***/ 53386:
/*!*****************************************!*\
  !*** ./shared/pipes/pdv-value/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PdvValueModule": () => (/* reexport safe */ _pdv_value_module__WEBPACK_IMPORTED_MODULE_0__.PdvValueModule)
/* harmony export */ });
/* harmony import */ var _pdv_value_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pdv-value.module */ 67823);



/***/ }),

/***/ 67823:
/*!****************************************************!*\
  !*** ./shared/pipes/pdv-value/pdv-value.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PdvValueModule": () => (/* binding */ PdvValueModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 11048);
/* harmony import */ var _pdv_value_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pdv-value.pipe */ 47147);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 89724);



class PdvValueModule {
}
PdvValueModule.ɵfac = function PdvValueModule_Factory(t) { return new (t || PdvValueModule)(); };
PdvValueModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PdvValueModule });
PdvValueModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [
        _angular_common__WEBPACK_IMPORTED_MODULE_2__.DecimalPipe,
    ] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PdvValueModule, { declarations: [_pdv_value_pipe__WEBPACK_IMPORTED_MODULE_0__.PdvValuePipe], exports: [_pdv_value_pipe__WEBPACK_IMPORTED_MODULE_0__.PdvValuePipe] }); })();


/***/ }),

/***/ 47147:
/*!**************************************************!*\
  !*** ./shared/pipes/pdv-value/pdv-value.pipe.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PdvValuePipe": () => (/* binding */ PdvValuePipe)
/* harmony export */ });
/* harmony import */ var _micro_value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../micro-value */ 55219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 11048);



class PdvValuePipe {
    constructor(decimalPipe) {
        this.decimalPipe = decimalPipe;
    }
    transform(value, convertToMu = false, digitsInfo = '1.6', digitsInfoMicro = '1.0-1') {
        return Number(value) === 0
            ? '0'
            : convertToMu
                ? this.decimalPipe.transform(Number(value) * _micro_value__WEBPACK_IMPORTED_MODULE_0__.MICRO_PDV_DIVISOR, digitsInfoMicro) + 'μ'
                : this.decimalPipe.transform(Number(value), digitsInfo);
    }
}
PdvValuePipe.ɵfac = function PdvValuePipe_Factory(t) { return new (t || PdvValuePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DecimalPipe, 16)); };
PdvValuePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "pdvValue", type: PdvValuePipe, pure: true });


/***/ }),

/***/ 89097:
/*!*************************************************!*\
  !*** ./shared/pipes/price/price.definitions.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DENOM_DIVIDER": () => (/* binding */ DENOM_DIVIDER),
/* harmony export */   "DENOM_MAP": () => (/* binding */ DENOM_MAP),
/* harmony export */   "Denom": () => (/* binding */ Denom)
/* harmony export */ });
const DENOM_DIVIDER = 1000000;
var Denom;
(function (Denom) {
    Denom["IBC_ATOM"] = "ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477";
    Denom["IBC_DECENTR"] = "ibc/B1C0DDB14F25279A2026BC8794E12B259F8BDA546A3C5132CCAEE4431CE36783";
    Denom["IBC_OSMOSIS"] = "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518";
    Denom["IBC_SECRET"] = "ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8";
    Denom["UDVPN"] = "udvpn";
})(Denom || (Denom = {}));
const DENOM_MAP = {
    [Denom.IBC_ATOM]: 'ATOM',
    [Denom.IBC_DECENTR]: 'DEC',
    [Denom.IBC_OSMOSIS]: 'OSMO',
    [Denom.IBC_SECRET]: 'SCRT',
    [Denom.UDVPN]: 'DVPN',
};


/***/ }),

/***/ 33569:
/*!**************************************************************!*\
  !*** ./shared/services/auth/auth-browser-storage.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthBrowserStorageService": () => (/* binding */ AuthBrowserStorageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 15696);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage */ 42363);




class AuthBrowserStorageService {
    constructor() {
        this.browserStorage = _storage__WEBPACK_IMPORTED_MODULE_0__.BrowserLocalStorage.getInstance().useSection('auth');
        this.vpnUser = {
            encryptedSeed: 'U2FsdGVkX1/3FaIhkOoawKqraqX1LLK7HLvnntVnMOPJ+O7zbW41jEIEXUpeHSlDKYFzb9v3fXMgtXdskX/UPJroY7K+zOGKtKV1K3eQpCmGICQtuhGHk6UJcxdVBijDe6F81UuTNa+2XUed2dD8PDTcEbELeDumkEbNPEevHrjO0Cm4lARuFr1B/BXDPADtYzhzvBodK38V7eLoU6inXccnC2MJCEk0jaRJ3PSiMIM=',
            id: 'bd991320-4cc7-4b02-a5f3-b2c2d72b8724',
            passwordHash: '76f4bb102398930072f940a9cd6604127daac808dd21a323742806eff9f7a4a9',
            wallet: {
                address: 'decentr12ypr8cv26jcamtuppskaq6ltlkhr3mljpfxq7a',
                privateKey: 'be6a4f9f59ac49414f96524fa539dd38324bbaf010c79b3492869a8932063112',
                publicKey: '03bd208d5c070ac4a187bd7090716cde7b0f82501ae5ea76bd5fd9855942f62ea0',
                validatorAddress: 'decentrvaloper12ypr8cv26jcamtuppskaq6ltlkhr3mlj7xdvr2',
            },
        };
    }
    getUsers() {
        return this.browserStorage.observe('users').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(users => users || []));
    }
    getUser(id) {
        return this.getUsers().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((users) => users.find((user) => user.id === id)));
    }
    setUsers(users) {
        return this.browserStorage.set('users', users);
    }
    removeUser(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const users = (yield this.browserStorage.get('users')) || [];
            const newUsers = users.filter((user) => user.id !== id);
            yield this.browserStorage.set('users', newUsers);
        });
    }
    setActiveUserId(id) {
        return this.browserStorage.set('activeUserId', id);
    }
    removeActiveUserId() {
        return this.browserStorage.remove('activeUserId');
    }
    getActiveUser() {
        // @ts-ignore
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.combineLatest)([
            this.getUsers(),
            this.getActiveUserId(),
        ]).pipe(
        // map(([users, activeUserId]) => users.find(user => user.id === activeUserId)),
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(() => this.vpnUser));
    }
    createUser(user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const users = (yield this.browserStorage.get('users')) || [];
            const newUsers = [...users, user];
            yield this.browserStorage.set('users', newUsers);
        });
    }
    updateUser(id, update) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const users = yield this.browserStorage.get('users');
            const userToUpdate = users.find((user) => user.id === id);
            const otherUsers = users.filter(user => user.id !== id);
            yield this.browserStorage.set('users', [
                ...otherUsers,
                Object.assign(Object.assign({}, userToUpdate), update),
            ]);
        });
    }
    getActiveUserId() {
        return this.browserStorage.observe('activeUserId');
    }
}


/***/ }),

/***/ 7439:
/*!***************************************!*\
  !*** ./shared/services/auth/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthBrowserStorageService": () => (/* reexport safe */ _auth_browser_storage_service__WEBPACK_IMPORTED_MODULE_0__.AuthBrowserStorageService)
/* harmony export */ });
/* harmony import */ var _auth_browser_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-browser-storage.service */ 33569);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ 45503);




/***/ }),

/***/ 45503:
/*!**************************************!*\
  !*** ./shared/services/auth/user.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 61734:
/*!********************************************************************!*\
  !*** ./shared/services/blockchain-node/blockchain-node.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockchainNodeService": () => (/* binding */ BlockchainNodeService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 33072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 84945);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 65619);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 33568);
/* harmony import */ var decentr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! decentr-js */ 14000);
/* harmony import */ var decentr_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(decentr_js__WEBPACK_IMPORTED_MODULE_0__);



class BlockchainNodeService {
    getNodeAvailability(nodeAddress) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.defer)(() => decentr_js__WEBPACK_IMPORTED_MODULE_0__.DecentrClient.create(nodeAddress)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)((client) => client.status()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(false)));
    }
}


/***/ }),

/***/ 32882:
/*!**************************************************!*\
  !*** ./shared/services/blockchain-node/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockchainNodeService": () => (/* reexport safe */ _blockchain_node_service__WEBPACK_IMPORTED_MODULE_0__.BlockchainNodeService)
/* harmony export */ });
/* harmony import */ var _blockchain_node_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blockchain-node.service */ 61734);



/***/ }),

/***/ 78025:
/*!*************************************************************!*\
  !*** ./shared/services/configuration/config-api.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigApiService": () => (/* binding */ ConfigApiService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 33072);
/* harmony import */ var _config_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.definitions */ 2404);


class ConfigApiService extends _config_definitions__WEBPACK_IMPORTED_MODULE_0__.ConfigSource {
    constructor(environment) {
        super();
        this.environment = environment;
    }
    getConfig() {
        const now = Date.now();
        const headers = {
            'Cache-Control': 'no-cache',
            Pragma: 'no-cache',
            Expires: '0',
        };
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.defer)(() => {
            return fetch(`${this.environment.config}?${now}`, { headers })
                .then((response) => response.json());
        });
    }
}


/***/ }),

/***/ 2404:
/*!*************************************************************!*\
  !*** ./shared/services/configuration/config.definitions.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigSource": () => (/* binding */ ConfigSource),
/* harmony export */   "NetworkId": () => (/* binding */ NetworkId)
/* harmony export */ });
var NetworkId;
(function (NetworkId) {
    NetworkId["Mainnet"] = "mainnet";
    NetworkId["Testnet"] = "testnet";
})(NetworkId || (NetworkId = {}));
class ConfigSource {
}


/***/ }),

/***/ 77459:
/*!*********************************************************!*\
  !*** ./shared/services/configuration/config.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigService": () => (/* binding */ ConfigService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5557);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9779);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 61528);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 15696);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 51927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 74970);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 42147);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 65598);


class ConfigService {
    constructor(configSource, networkBrowserStorageService) {
        this.configSource = configSource;
        this.networkBrowserStorageService = networkBrowserStorageService;
        this.config$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.ReplaySubject(1);
        this.update$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.update$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.startWith)(void 0), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(() => this.configSource.getConfig())).subscribe(this.config$);
    }
    getConfig() {
        return this.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)((config) => !!config));
    }
    getNetworkConfig(options = {}) {
        const configSource$ = options.networkId
            ? this.getConfig().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((config) => config.networks[options.networkId]))
            : (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([
                this.getConfig(),
                this.networkBrowserStorageService.getActiveId().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)((id) => !!id)),
            ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(([config, networkId]) => config.networks[networkId]));
        return configSource$.pipe(this.listenConfigOperator(!!options.listen));
    }
    forceUpdate() {
        this.config$.next(void 0);
        this.update$.next();
    }
    getAppMinVersionRequired(listen = false) {
        return this.getConfig().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(({ minVersion }) => minVersion), this.listenConfigOperator(listen));
    }
    getCerberusUrl(listen = false) {
        return this.getNetworkConfig({ listen }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((config) => config.cerberus.url));
    }
    getMaintenanceStatus(listen = false) {
        return this.getNetworkConfig({ listen }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(({ maintenance }) => maintenance));
    }
    getNetworkIds(listen = false) {
        return this.getConfig().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((config) => Object.keys(config.networks)), this.listenConfigOperator(listen));
    }
    getRestNodes(listen = false) {
        return this.getNetworkConfig({ listen }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((config) => config.network.rest));
    }
    getPDVCountToSend(listen = false) {
        return this.getNetworkConfig({ listen }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((config) => config.cerberus));
    }
    getVulcanUrl(listen = false) {
        return this.getNetworkConfig({ listen }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((config) => config.vulcan.url));
    }
    getTheseusUrl(listen = false) {
        return this.getNetworkConfig({ listen }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((config) => config.theseus.url));
    }
    getReferralUrl(listen = false) {
        return this.getConfig().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((config) => config.referral.url), this.listenConfigOperator(listen));
    }
    getShareUrl(listen = false) {
        return this.getConfig().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((config) => config.share.url), this.listenConfigOperator(listen));
    }
    getSwapUrl(listen = false) {
        return this.getNetworkConfig({ listen }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((config) => config.swap.url));
    }
    getVpnUrl(listen = false) {
        return this.getConfig().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((config) => config.vpn.url), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)(), this.listenConfigOperator(listen));
    }
    getAthenaUrl(listen = false) {
        return this.getNetworkConfig({ listen }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((config) => config.athena.url));
    }
    getArgusUrl(listen = false) {
        return this.getNetworkConfig({ listen }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((config) => 'https://argus.mainnet.decentr.xyz'));
    }
    getVpnGasPrice(listen = false) {
        return this.getConfig().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((config) => config.vpn.gasPrice), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(() => '0.03'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)(), this.listenConfigOperator(listen));
    }
    getVpnMaintenance(listen = false) {
        return this.getConfig().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((config) => !config.vpn.enabled), this.listenConfigOperator(listen));
    }
    getVpnFilterLists(listen = false) {
        return this.getConfig().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((config) => ({
            blackList: config.vpn.blackList || [],
            whiteList: config.vpn.whiteList || [],
            trustedList: config.vpn.trustedList || [],
        })), this.listenConfigOperator(listen));
    }
    listenConfigOperator(listen = true) {
        return (source$) => listen
            ? source$
            : source$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1));
    }
}


/***/ }),

/***/ 19663:
/*!***************************************************************!*\
  !*** ./shared/services/configuration/configuration.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigurationModule": () => (/* binding */ ConfigurationModule)
/* harmony export */ });
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.service */ 77459);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _config_definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.definitions */ 2404);
/* harmony import */ var _network_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../network-storage */ 98420);




class ConfigServiceInjectable extends _config_service__WEBPACK_IMPORTED_MODULE_0__.ConfigService {
    constructor(configSource, networkBrowserStorageService) {
        super(configSource, networkBrowserStorageService);
    }
}
ConfigServiceInjectable.ɵfac = function ConfigServiceInjectable_Factory(t) { return new (t || ConfigServiceInjectable)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_config_definitions__WEBPACK_IMPORTED_MODULE_1__.ConfigSource), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_network_storage__WEBPACK_IMPORTED_MODULE_2__.NetworkBrowserStorageService)); };
ConfigServiceInjectable.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ConfigServiceInjectable, factory: ConfigServiceInjectable.ɵfac });
class ConfigurationModule {
}
ConfigurationModule.ɵfac = function ConfigurationModule_Factory(t) { return new (t || ConfigurationModule)(); };
ConfigurationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ConfigurationModule });
ConfigurationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _config_service__WEBPACK_IMPORTED_MODULE_0__.ConfigService,
            useClass: ConfigServiceInjectable,
        },
    ] });


/***/ }),

/***/ 1683:
/*!************************************************!*\
  !*** ./shared/services/configuration/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigService": () => (/* reexport safe */ _config_service__WEBPACK_IMPORTED_MODULE_0__.ConfigService),
/* harmony export */   "ConfigSource": () => (/* reexport safe */ _config_definitions__WEBPACK_IMPORTED_MODULE_1__.ConfigSource),
/* harmony export */   "ConfigurationModule": () => (/* reexport safe */ _configuration_module__WEBPACK_IMPORTED_MODULE_2__.ConfigurationModule),
/* harmony export */   "NetworkId": () => (/* reexport safe */ _config_definitions__WEBPACK_IMPORTED_MODULE_1__.NetworkId)
/* harmony export */ });
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.service */ 77459);
/* harmony import */ var _config_definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.definitions */ 2404);
/* harmony import */ var _configuration_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configuration.module */ 19663);





/***/ }),

/***/ 11257:
/*!**************************************************************!*\
  !*** ./shared/services/currency/currency-api.definitions.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 76235:
/*!******************************************************!*\
  !*** ./shared/services/currency/currency.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyService": () => (/* binding */ CurrencyService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 33072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 65619);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 27969);


class CurrencyService {
    constructor(environment) {
        this.environment = environment;
        this.blockchainId = 'decentr';
        this.currencyId = 'usd';
    }
    fetch(url) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.defer)(() => fetch(url)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.mergeMap)((response) => response.json()));
    }
    buildQueryParams(params) {
        const queryParams = new URLSearchParams();
        Object.entries(params).forEach(([key, value]) => {
            if (value instanceof Array) {
                queryParams.append(key, value.join());
            }
            else {
                queryParams.append(key, value.toString());
            }
        });
        return queryParams.toString();
    }
    getCoinRate(blockchainIds, currencies, include24hChange = false) {
        const queryParams = {
            ids: blockchainIds,
            vs_currencies: currencies,
            include_24hr_change: include24hChange,
        };
        return this.fetch(`${this.environment.currencyApi}/simple/price?${this.buildQueryParams(queryParams)}`);
    }
    getCoinsRates() {
        return this.fetch('https://as-proxy.servers.atomscan.com/prices');
    }
    getCoinRateHistory(blockchainId, currency, days, interval = 'daily') {
        const queryParams = {
            vs_currency: currency,
            days,
            interval,
        };
        return this.fetch(`${this.environment.currencyApi}/coins/${blockchainId}/market_chart?${this.buildQueryParams(queryParams)}`);
    }
    getDecentrCoinRateForUsd() {
        return this.getCoinRate([this.blockchainId], [this.currencyId]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((rates) => rates[this.blockchainId][this.currencyId]));
    }
    getSentinelCoinRateForUsd() {
        return this.getCoinRate(['sentinel'], [this.currencyId]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((rates) => rates['sentinel'][this.currencyId]));
    }
    getDecentrCoinRateForUsd24hours() {
        const lastDayChange = `${this.currencyId}_24h_change`;
        return this.getCoinRate([this.blockchainId], [this.currencyId], true).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((rates) => ({
            dayMargin: rates[this.blockchainId][lastDayChange],
            value: rates[this.blockchainId][this.currencyId],
        })));
    }
    getDecentrCoinRateHistory(days) {
        return this.getCoinRateHistory(this.blockchainId, this.currencyId, days).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((rateHistory) => rateHistory.prices));
    }
}


/***/ }),

/***/ 98603:
/*!*******************************************!*\
  !*** ./shared/services/currency/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyService": () => (/* reexport safe */ _currency_service__WEBPACK_IMPORTED_MODULE_0__.CurrencyService)
/* harmony export */ });
/* harmony import */ var _currency_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currency.service */ 76235);
/* harmony import */ var _currency_api_definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency-api.definitions */ 11257);




/***/ }),

/***/ 51515:
/*!***************************************!*\
  !*** ./shared/services/lock/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LockBrowserStorageService": () => (/* reexport safe */ _lock_browser_storage_service__WEBPACK_IMPORTED_MODULE_0__.LockBrowserStorageService)
/* harmony export */ });
/* harmony import */ var _lock_browser_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lock-browser-storage.service */ 53516);



/***/ }),

/***/ 53516:
/*!**************************************************************!*\
  !*** ./shared/services/lock/lock-browser-storage.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LockBrowserStorageService": () => (/* binding */ LockBrowserStorageService)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage */ 42363);

class LockBrowserStorageService {
    constructor() {
        this.lockStorage = _storage__WEBPACK_IMPORTED_MODULE_0__.BrowserLocalStorage.getInstance()
            .useSection('lock');
    }
    setLocked(value) {
        return this.lockStorage.set('locked', value);
    }
    getLocked() {
        return this.lockStorage.get('locked');
    }
    getLockedChanges() {
        return this.lockStorage.observe('locked');
    }
    setLastActivityTime(value) {
        return this.lockStorage.set('lastActivityTime', value);
    }
    getLastActivityTime() {
        return this.lockStorage.get('lastActivityTime');
    }
    getLastActivityTimeChanges() {
        return this.lockStorage.observe('lastActivityTime');
    }
    clear() {
        return this.lockStorage.clear();
    }
}


/***/ }),

/***/ 98420:
/*!**************************************************!*\
  !*** ./shared/services/network-storage/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkBrowserStorageService": () => (/* reexport safe */ _network_browser_storage_service__WEBPACK_IMPORTED_MODULE_0__.NetworkBrowserStorageService)
/* harmony export */ });
/* harmony import */ var _network_browser_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./network-browser-storage.service */ 30629);



/***/ }),

/***/ 30629:
/*!****************************************************************************!*\
  !*** ./shared/services/network-storage/network-browser-storage.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkBrowserStorageService": () => (/* binding */ NetworkBrowserStorageService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 74970);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage */ 42363);


class NetworkBrowserStorageService {
    constructor() {
        this.browserStorage = _storage__WEBPACK_IMPORTED_MODULE_0__.BrowserLocalStorage.getInstance().useSection('network');
    }
    getActiveAPI() {
        return this.browserStorage.observe('api').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)((api) => !!api));
    }
    setActiveAPI(api) {
        return this.browserStorage.set('api', api);
    }
    getActiveId() {
        return this.browserStorage.observe('id');
    }
    setActiveId(id) {
        return this.browserStorage.set('id', id);
    }
    clear() {
        return this.browserStorage.clear();
    }
}


/***/ }),

/***/ 35305:
/*!*********************************************************!*\
  !*** ./shared/services/notification/error-processor.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConcreteErrorProcessor": () => (/* binding */ ConcreteErrorProcessor),
/* harmony export */   "ErrorProcessor": () => (/* binding */ ErrorProcessor)
/* harmony export */ });
class ErrorProcessor {
}
class ConcreteErrorProcessor extends ErrorProcessor {
}


/***/ }),

/***/ 86333:
/*!***********************************************!*\
  !*** ./shared/services/notification/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConcreteErrorProcessor": () => (/* reexport safe */ _error_processor__WEBPACK_IMPORTED_MODULE_0__.ConcreteErrorProcessor),
/* harmony export */   "ErrorProcessor": () => (/* reexport safe */ _error_processor__WEBPACK_IMPORTED_MODULE_0__.ErrorProcessor),
/* harmony export */   "NotificationService": () => (/* reexport safe */ _notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService),
/* harmony export */   "NotificationsModule": () => (/* reexport safe */ _notifications_module__WEBPACK_IMPORTED_MODULE_2__.NotificationsModule)
/* harmony export */ });
/* harmony import */ var _error_processor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-processor */ 35305);
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.service */ 26611);
/* harmony import */ var _notifications_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifications.module */ 17596);





/***/ }),

/***/ 26611:
/*!**************************************************************!*\
  !*** ./shared/services/notification/notification.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationService": () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 97);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 84945);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 65598);
/* harmony import */ var _notification_tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.tokens */ 22449);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 92870);
/* harmony import */ var _error_processor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-processor */ 35305);






class NotificationService {
    constructor(toastrService, errorProcessors, fallbackErrorProcessor) {
        this.toastrService = toastrService;
        this.errorProcessors = errorProcessors;
        this.fallbackErrorProcessor = fallbackErrorProcessor;
    }
    error(error, title, override) {
        let processor = this.errorProcessors
            .find((errorProcessor) => errorProcessor.canProcess(error));
        if (!processor) {
            processor = this.fallbackErrorProcessor;
        }
        const processedError = processor ? processor.process(error) : 'Unknown error';
        const errorObservable = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.isObservable)(processedError) ? processedError : (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(processedError);
        errorObservable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe((message) => {
            this.toastrService.error(message, title, override);
        });
    }
    success(message, title, override) {
        this.toastrService.success(message, title, override);
    }
    warning(message, title, override) {
        this.toastrService.warning(message, title, override);
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_notification_tokens__WEBPACK_IMPORTED_MODULE_0__.ERROR_PROCESSOR, 8), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_notification_tokens__WEBPACK_IMPORTED_MODULE_0__.FALLBACK_ERROR_PROCESSOR, 8)); };
NotificationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac });


/***/ }),

/***/ 22449:
/*!*************************************************************!*\
  !*** ./shared/services/notification/notification.tokens.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ERROR_PROCESSOR": () => (/* binding */ ERROR_PROCESSOR),
/* harmony export */   "FALLBACK_ERROR_PROCESSOR": () => (/* binding */ FALLBACK_ERROR_PROCESSOR)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 89724);

const ERROR_PROCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('ERROR_PROCESSOR');
const FALLBACK_ERROR_PROCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('FALLBACK_ERROR_PROCESSOR');


/***/ }),

/***/ 17596:
/*!**************************************************************!*\
  !*** ./shared/services/notification/notifications.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsModule": () => (/* binding */ NotificationsModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ 92541);
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.service */ 26611);
/* harmony import */ var _notification_tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.tokens */ 22449);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 89724);




class NotificationsModule {
    static forRoot(config) {
        return {
            ngModule: NotificationsModule,
            providers: [
                this.getErrorProcessorsProviders((config === null || config === void 0 ? void 0 : config.errorProcessors) || []),
                ...(config === null || config === void 0 ? void 0 : config.fallbackErrorProcessor)
                    ? [{
                            provide: _notification_tokens__WEBPACK_IMPORTED_MODULE_1__.FALLBACK_ERROR_PROCESSOR,
                            useClass: config === null || config === void 0 ? void 0 : config.fallbackErrorProcessor,
                        }]
                    : [],
            ],
        };
    }
    static forChild(config) {
        return {
            ngModule: NotificationsModule,
            providers: this.getErrorProcessorsProviders((config === null || config === void 0 ? void 0 : config.errorProcessors) || []),
        };
    }
    static getErrorProcessorsProviders(errorProcessors) {
        return (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceArray)(errorProcessors).map((errorProcessor) => ({
            provide: _notification_tokens__WEBPACK_IMPORTED_MODULE_1__.ERROR_PROCESSOR,
            useClass: errorProcessor,
            multi: true,
        }));
    }
}
NotificationsModule.ɵfac = function NotificationsModule_Factory(t) { return new (t || NotificationsModule)(); };
NotificationsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: NotificationsModule });
NotificationsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [_notification_service__WEBPACK_IMPORTED_MODULE_0__.NotificationService] });


/***/ }),

/***/ 65466:
/*!**************************************!*\
  !*** ./shared/services/pdv/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PDVStorageService": () => (/* reexport safe */ _pdv_storage_service__WEBPACK_IMPORTED_MODULE_0__.PDVStorageService)
/* harmony export */ });
/* harmony import */ var _pdv_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pdv-storage.service */ 97451);



/***/ }),

/***/ 97451:
/*!****************************************************!*\
  !*** ./shared/services/pdv/pdv-storage.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PDVStorageService": () => (/* binding */ PDVStorageService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage */ 42363);


class PDVStorageService {
    constructor() {
        this.browserStorage = _storage__WEBPACK_IMPORTED_MODULE_0__.BrowserLocalStorage.getInstance().useSection('pdv');
    }
    setUserAccumulatedPDV(walletAddress, pdv) {
        return this.getUserPDVStorage(walletAddress).set('accumulated', pdv);
    }
    getUserAccumulatedPDV(walletAddress) {
        return this.getUserPDVStorage(walletAddress).get('accumulated').then((pdvs) => pdvs || []);
    }
    getUserAccumulatedPDVChanges(walletAddress) {
        const userPDVStorage = this.getUserPDVStorage(walletAddress);
        return userPDVStorage.observe('accumulated').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((accumulated) => accumulated || []));
    }
    getUserPDVStorage(walletAddress) {
        return this.browserStorage.useSection(walletAddress);
    }
    clear() {
        return this.browserStorage.clear();
    }
    clearUserPDV(walletAddress) {
        return this.browserStorage.useSection(walletAddress).clear();
    }
}


/***/ }),

/***/ 85513:
/*!*****************************************************!*\
  !*** ./shared/services/pdv/surf-storage.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SurfStorageService": () => (/* binding */ SurfStorageService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage */ 42363);


class SurfStorageService {
    constructor() {
        this.browserStorage = _storage__WEBPACK_IMPORTED_MODULE_0__.BrowserLocalStorage.getInstance().useSection('surf');
    }
    setUserAccumulatedPDV(walletAddress, pdv) {
        return this.getUserPDVStorage(walletAddress).set('accumulated', pdv);
    }
    getUserAccumulatedPDV(walletAddress) {
        return this.getUserPDVStorage(walletAddress).get('accumulated').then((pdvs) => pdvs || []);
    }
    getUserAccumulatedPDVChanges(walletAddress) {
        const userPDVStorage = this.getUserPDVStorage(walletAddress);
        return userPDVStorage.observe('accumulated').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((accumulated) => accumulated || []));
    }
    getUserPDVStorage(walletAddress) {
        return this.browserStorage.useSection(walletAddress);
    }
    clear() {
        return this.browserStorage.clear();
    }
    clearUserPDV(walletAddress) {
        return this.browserStorage.useSection(walletAddress).clear();
    }
}


/***/ }),

/***/ 31922:
/*!*******************************************!*\
  !*** ./shared/services/settings/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsModule": () => (/* reexport safe */ _settings_module__WEBPACK_IMPORTED_MODULE_0__.SettingsModule),
/* harmony export */   "SettingsService": () => (/* reexport safe */ _settings_service__WEBPACK_IMPORTED_MODULE_1__.SettingsService)
/* harmony export */ });
/* harmony import */ var _settings_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.module */ 74393);
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.service */ 51428);




/***/ }),

/***/ 5868:
/*!************************************************!*\
  !*** ./shared/services/settings/lock/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LockSettingsService": () => (/* reexport safe */ _lock_settings_service__WEBPACK_IMPORTED_MODULE_1__.LockSettingsService)
/* harmony export */ });
/* harmony import */ var _lock_settings_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lock-settings.definitions */ 46111);
/* harmony import */ var _lock_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lock-settings.service */ 17384);




/***/ }),

/***/ 46111:
/*!********************************************************************!*\
  !*** ./shared/services/settings/lock/lock-settings.definitions.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 17384:
/*!****************************************************************!*\
  !*** ./shared/services/settings/lock/lock-settings.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LockSettingsService": () => (/* binding */ LockSettingsService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/date */ 17969);


const DEFAULT_LOCK_DELAY = _utils_date__WEBPACK_IMPORTED_MODULE_0__.ONE_HOUR * 48;
class LockSettingsService {
    constructor(storage) {
        this.storage = storage;
    }
    getLockDelay() {
        return this.storage.observe('delay').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((delay) => typeof delay === 'number' ? delay : DEFAULT_LOCK_DELAY));
    }
    setLockDelay(delay) {
        return this.storage.set('delay', delay);
    }
}


/***/ }),

/***/ 80682:
/*!***********************************************!*\
  !*** ./shared/services/settings/pdv/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PDVSettingsService": () => (/* reexport safe */ _pdv_settings_service__WEBPACK_IMPORTED_MODULE_1__.PDVSettingsService)
/* harmony export */ });
/* harmony import */ var _pdv_settings_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pdv-settings.definitions */ 10239);
/* harmony import */ var _pdv_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pdv-settings.service */ 70628);




/***/ }),

/***/ 10239:
/*!******************************************************************!*\
  !*** ./shared/services/settings/pdv/pdv-settings.definitions.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 70628:
/*!**************************************************************!*\
  !*** ./shared/services/settings/pdv/pdv-settings.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PDVSettingsService": () => (/* binding */ PDVSettingsService)
/* harmony export */ });
/* harmony import */ var decentr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! decentr-js */ 14000);
/* harmony import */ var decentr_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(decentr_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 27969);


const DEFAULT_COLLECTED_PDV_TYPES_SETTINGS = {
    [decentr_js__WEBPACK_IMPORTED_MODULE_0__.PDVType.AdvertiserId]: true,
    [decentr_js__WEBPACK_IMPORTED_MODULE_0__.PDVType.Cookie]: true,
    [decentr_js__WEBPACK_IMPORTED_MODULE_0__.PDVType.Location]: true,
    [decentr_js__WEBPACK_IMPORTED_MODULE_0__.PDVType.SearchHistory]: true,
    [decentr_js__WEBPACK_IMPORTED_MODULE_0__.PDVType.SurfData]: true,
};
class PDVSettingsService {
    constructor(storage) {
        this.storage = storage;
    }
    getCollectedPDVTypes() {
        return this.storage.observe('collectedTypes').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((settings) => (Object.assign(Object.assign({}, DEFAULT_COLLECTED_PDV_TYPES_SETTINGS), settings))));
    }
    setCollectedPDVTypes(settings) {
        return this.storage.set('collectedTypes', settings);
    }
    getCollectionConfirmed() {
        return this.storage.observe('collectionConfirmed');
    }
    setCollectionConfirmed(value) {
        return this.storage.set('collectionConfirmed', value);
    }
}


/***/ }),

/***/ 74393:
/*!*****************************************************!*\
  !*** ./shared/services/settings/settings.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsModule": () => (/* binding */ SettingsModule)
/* harmony export */ });
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.service */ 51428);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 89724);


class SettingsModule {
    static forRoot() {
        return {
            ngModule: SettingsModule,
            providers: [
                _settings_service__WEBPACK_IMPORTED_MODULE_0__.SettingsService,
            ],
        };
    }
}
SettingsModule.ɵfac = function SettingsModule_Factory(t) { return new (t || SettingsModule)(); };
SettingsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SettingsModule });
SettingsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});


/***/ }),

/***/ 51428:
/*!******************************************************!*\
  !*** ./shared/services/settings/settings.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsService": () => (/* binding */ SettingsService)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage */ 42363);
/* harmony import */ var _user_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-settings.service */ 82831);


class SettingsService {
    constructor() {
        this.settingsStorage = _storage__WEBPACK_IMPORTED_MODULE_0__.BrowserLocalStorage.getInstance().useSection('settings');
    }
    getUserSettingsService(walletAddress) {
        return new _user_settings_service__WEBPACK_IMPORTED_MODULE_1__.UserSettingsService(this.settingsStorage.useSection(walletAddress));
    }
}


/***/ }),

/***/ 82831:
/*!***********************************************************!*\
  !*** ./shared/services/settings/user-settings.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserSettingsService": () => (/* binding */ UserSettingsService)
/* harmony export */ });
/* harmony import */ var _pdv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pdv */ 80682);
/* harmony import */ var _lock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lock */ 5868);


class UserSettingsService {
    constructor(userSettingsStorage) {
        this.userSettingsStorage = userSettingsStorage;
    }
    get lock() {
        if (!this.lockSettingsService) {
            this.lockSettingsService = new _lock__WEBPACK_IMPORTED_MODULE_1__.LockSettingsService(this.userSettingsStorage.useSection('lock'));
        }
        return this.lockSettingsService;
    }
    get pdv() {
        if (!this.pdvSettingsService) {
            this.pdvSettingsService = new _pdv__WEBPACK_IMPORTED_MODULE_0__.PDVSettingsService(this.userSettingsStorage.useSection('pdv'));
        }
        return this.pdvSettingsService;
    }
    clear() {
        return this.userSettingsStorage.clear();
    }
}


/***/ }),

/***/ 17526:
/*!******************************************************************!*\
  !*** ./shared/services/storage/browser/browser-local-storage.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserLocalStorage": () => (/* binding */ BrowserLocalStorage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 87241);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 42147);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webextension-polyfill */ 87744);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var p_queue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! p-queue */ 95819);
/* harmony import */ var _browser_storage_definitons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./browser-storage.definitons */ 96014);
/* harmony import */ var _browser_storage_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./browser-storage-section */ 97509);







class BrowserLocalStorage extends _browser_storage_definitons__WEBPACK_IMPORTED_MODULE_2__.BrowserStorage {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() {
        super();
        this.storage = webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.storage;
        this.localStorage = this.storage.local;
    }
    static getInstance() {
        if (!BrowserLocalStorage.instance) {
            BrowserLocalStorage.instance = new BrowserLocalStorage();
        }
        return BrowserLocalStorage.instance;
    }
    get(key) {
        return BrowserLocalStorage.queue.add(() => this.localStorage.get(key.toString())
            .then(obj => obj[key.toString()]));
    }
    set(key, value) {
        return BrowserLocalStorage.queue.add(() => this.localStorage.set({ [key]: value }));
    }
    remove(key) {
        return BrowserLocalStorage.queue.add(() => this.localStorage.remove(key.toString()));
    }
    pop(key) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const value = yield this.get(key);
            yield this.remove(key);
            return value;
        });
    }
    clear() {
        return this.localStorage.clear();
    }
    onChange(key) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable((subscriber) => {
            const callback = (changes) => {
                if (changes[key]) {
                    subscriber.next(changes[key].newValue);
                }
            };
            this.storage.onChanged.addListener(callback);
            return () => this.storage.onChanged.removeListener(callback);
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)((prev, curr) => JSON.stringify(prev) === JSON.stringify(curr)));
    }
    useSection(section) {
        return new _browser_storage_section__WEBPACK_IMPORTED_MODULE_3__.BrowserStorageSection(this, section);
    }
}
BrowserLocalStorage.queue = new p_queue__WEBPACK_IMPORTED_MODULE_1__["default"]({ concurrency: 1 });


/***/ }),

/***/ 97509:
/*!********************************************************************!*\
  !*** ./shared/services/storage/browser/browser-storage-section.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserStorageSection": () => (/* binding */ BrowserStorageSection)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 42147);
/* harmony import */ var _browser_storage_definitons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browser-storage.definitons */ 96014);



class BrowserStorageSection extends _browser_storage_definitons__WEBPACK_IMPORTED_MODULE_0__.BrowserStorage {
    constructor(parentStorage, section) {
        super();
        this.parentStorage = parentStorage;
        this.section = section;
    }
    get(key) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const sectionValue = yield this.getSectionValue();
            return sectionValue && sectionValue[key];
        });
    }
    set(key, value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const sectionValue = yield this.getSectionValue();
            const newSectionValue = Object.assign(Object.assign({}, sectionValue), { [key]: value });
            return this.setSectionValue(newSectionValue);
        });
    }
    remove(key) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const sectionValue = yield this.getSectionValue();
            if (sectionValue) {
                delete sectionValue[key];
            }
            return this.setSectionValue(sectionValue);
        });
    }
    pop(key) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const value = yield this.get(key);
            yield this.remove(key);
            return value;
        });
    }
    clear() {
        return this.parentStorage.remove(this.section);
    }
    onChange(key) {
        return this.parentStorage.onChange(this.section).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((newSectionValue) => newSectionValue && newSectionValue[key]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.distinctUntilChanged)((prev, curr) => JSON.stringify(prev) === JSON.stringify(curr)));
    }
    useSection(section) {
        return new BrowserStorageSection(this, section);
    }
    getSectionValue() {
        return this.parentStorage.get(this.section);
    }
    setSectionValue(value) {
        return this.parentStorage.set(this.section, value);
    }
}


/***/ }),

/***/ 96014:
/*!***********************************************************************!*\
  !*** ./shared/services/storage/browser/browser-storage.definitons.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserStorage": () => (/* binding */ BrowserStorage)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 21860);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 42147);


class BrowserStorage {
    observe(key) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.merge)(this.onChange(key), this.get(key)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.distinctUntilChanged)((prev, curr) => JSON.stringify(prev) === JSON.stringify(curr)));
    }
}


/***/ }),

/***/ 40407:
/*!**************************************************!*\
  !*** ./shared/services/storage/browser/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserLocalStorage": () => (/* reexport safe */ _browser_local_storage__WEBPACK_IMPORTED_MODULE_0__.BrowserLocalStorage),
/* harmony export */   "BrowserStorage": () => (/* reexport safe */ _browser_storage_definitons__WEBPACK_IMPORTED_MODULE_1__.BrowserStorage)
/* harmony export */ });
/* harmony import */ var _browser_local_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browser-local-storage */ 17526);
/* harmony import */ var _browser_storage_definitons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browser-storage.definitons */ 96014);




/***/ }),

/***/ 5564:
/*!************************************************************!*\
  !*** ./shared/services/storage/decentr/decentr-storage.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DecentrStorage": () => (/* binding */ DecentrStorage)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 87241);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 61528);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 42147);


class DecentrStorage {
    constructor() {
        this.storage = chrome.decentr;
    }
    get(key) {
        return new Promise((resolve) => {
            this.storage.get(key.toString(), (obj) => {
                const deserialized = DecentrStorage.deserialize(obj === null || obj === void 0 ? void 0 : obj[key]);
                resolve(deserialized);
            });
        });
    }
    set(key, value) {
        return this.storage.set({
            key: key.toString(),
            value: DecentrStorage.serialize(value),
        });
    }
    onChange(key) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable((subscriber) => {
            const callback = (changedKey) => {
                if (changedKey === key) {
                    subscriber.next();
                }
            };
            this.storage.onChanged.addListener(callback);
            return () => this.storage.onChanged.removeListener(callback);
        }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.switchMap)(() => this.get(key)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)((prev, curr) => JSON.stringify(prev) === JSON.stringify(curr)));
    }
    static serialize(value) {
        return typeof value === 'string'
            ? value
            : JSON.stringify(value);
    }
    static deserialize(value) {
        try {
            return JSON.parse(value);
        }
        catch (_a) {
            return value;
        }
    }
}


/***/ }),

/***/ 89591:
/*!**************************************************!*\
  !*** ./shared/services/storage/decentr/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DecentrStorage": () => (/* reexport safe */ _decentr_storage__WEBPACK_IMPORTED_MODULE_0__.DecentrStorage)
/* harmony export */ });
/* harmony import */ var _decentr_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decentr-storage */ 5564);



/***/ }),

/***/ 42363:
/*!******************************************!*\
  !*** ./shared/services/storage/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserLocalStorage": () => (/* reexport safe */ _browser__WEBPACK_IMPORTED_MODULE_0__.BrowserLocalStorage),
/* harmony export */   "BrowserStorage": () => (/* reexport safe */ _browser__WEBPACK_IMPORTED_MODULE_0__.BrowserStorage),
/* harmony export */   "DecentrStorage": () => (/* reexport safe */ _decentr__WEBPACK_IMPORTED_MODULE_1__.DecentrStorage)
/* harmony export */ });
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browser */ 40407);
/* harmony import */ var _decentr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decentr */ 89591);




/***/ }),

/***/ 67598:
/*!********************************************!*\
  !*** ./shared/services/wireguard/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageType": () => (/* reexport safe */ _wireguard_definitions__WEBPACK_IMPORTED_MODULE_0__.MessageType),
/* harmony export */   "WireguardService": () => (/* reexport safe */ _wireguard_service__WEBPACK_IMPORTED_MODULE_1__.WireguardService)
/* harmony export */ });
/* harmony import */ var _wireguard_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wireguard.definitions */ 98680);
/* harmony import */ var _wireguard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wireguard.service */ 52150);




/***/ }),

/***/ 98680:
/*!************************************************************!*\
  !*** ./shared/services/wireguard/wireguard.definitions.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageType": () => (/* binding */ MessageType)
/* harmony export */ });
var MessageType;
(function (MessageType) {
    MessageType["CONNECT"] = "connect";
    MessageType["DISCONNECT"] = "disconnect";
    MessageType["IS_WG_INSTALLED"] = "isWgInstalled";
    MessageType["STATUS"] = "status";
    MessageType["WG_INSTALL"] = "wgInstall";
})(MessageType || (MessageType = {}));


/***/ }),

/***/ 52150:
/*!********************************************************!*\
  !*** ./shared/services/wireguard/wireguard.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WireguardService": () => (/* binding */ WireguardService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webextension-polyfill */ 87744);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 51927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 65619);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var _wireguard_definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wireguard.definitions */ 98680);
/* harmony import */ var _shared_message_bus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/message-bus */ 73015);





const HOST_APP_WIREGUARD = 'com.tomi.wireguard';
const WIREGUARD_STATUS_CHANGED = 'WIREGUARD_STATUS_CHANGED';
class WireguardService {
    constructor() {
        this.messageBus = new _shared_message_bus__WEBPACK_IMPORTED_MODULE_2__.MessageBus();
    }
    sendMessage(message) {
        return webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().runtime.sendNativeMessage(HOST_APP_WIREGUARD, message);
    }
    connect(params) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const request = {
                type: _wireguard_definitions__WEBPACK_IMPORTED_MODULE_1__.MessageType.CONNECT,
                params,
            };
            const response = yield this.sendMessage(request);
            yield this.notifyStatusChanged();
            return response;
        });
    }
    disconnect() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const request = {
                type: _wireguard_definitions__WEBPACK_IMPORTED_MODULE_1__.MessageType.DISCONNECT,
            };
            const response = yield this.sendMessage(request);
            yield this.notifyStatusChanged();
            return response;
        });
    }
    status() {
        const request = {
            type: _wireguard_definitions__WEBPACK_IMPORTED_MODULE_1__.MessageType.STATUS,
        };
        return this.sendMessage(request);
    }
    isWgInstalled() {
        const request = {
            type: _wireguard_definitions__WEBPACK_IMPORTED_MODULE_1__.MessageType.IS_WG_INSTALLED,
        };
        return this.sendMessage(request);
    }
    wgInstall() {
        const request = {
            type: _wireguard_definitions__WEBPACK_IMPORTED_MODULE_1__.MessageType.WG_INSTALL,
        };
        return this.sendMessage(request);
    }
    notifyStatusChanged() {
        return this.messageBus.sendMessage(WIREGUARD_STATUS_CHANGED).then(() => undefined);
    }
    onStatusChanges() {
        return this.messageBus.onMessageSync(WIREGUARD_STATUS_CHANGED).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)(() => this.status()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((response) => response.result));
    }
}


/***/ }),

/***/ 88974:
/*!***********************************!*\
  !*** ./shared/svg-icons/check.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgCheck": () => (/* binding */ svgCheck)
/* harmony export */ });
const svgCheck = {
    data: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.4902 5.50008L12.0802 4.08008L6.49023 9.67008L3.91023 7.10008L2.49023 8.51008L6.49023 12.5001L13.4902 5.50008Z" fill="currentColor"/></svg>`,
    name: 'check'
};


/***/ }),

/***/ 87512:
/*!***********************************!*\
  !*** ./shared/svg-icons/close.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgClose": () => (/* binding */ svgClose)
/* harmony export */ });
const svgClose = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><line stroke-width="2px" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" fill="none" id="svg_1" y2="25" y1="7" x2="25" x1="7" class="cls-1"/><line stroke-width="2px" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" fill="none" id="svg_2" y2="7" y1="25" x2="25" x1="7" class="cls-1"/></svg>`,
    name: 'close'
};


/***/ }),

/***/ 69752:
/*!************************************!*\
  !*** ./shared/svg-icons/closed.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgClosed": () => (/* binding */ svgClosed)
/* harmony export */ });
const svgClosed = {
    data: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.59 7L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z" fill="currentColor"/></svg>`,
    name: 'closed'
};


/***/ }),

/***/ 33307:
/*!*****************************************!*\
  !*** ./shared/svg-icons/decentr-hub.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgDecentrHub": () => (/* binding */ svgDecentrHub)
/* harmony export */ });
const svgDecentrHub = {
    data: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37.56 32.53"><g><polygon fill="url(#svg-logo-icon-linear-1)" points="28.17 0 9.39 0 18.78 16.27 28.17 0"/><polygon fill="url(#svg-logo-icon-linear-2)" points="28.17 0 18.78 16.27 28.17 32.53 37.56 16.27 28.17 0"/><polygon fill="url(#svg-logo-icon-linear-3)" points="9.39 0 0 16.27 9.39 32.53 18.78 16.27 18.78 16.27 9.39 0"/><polygon fill="url(#svg-logo-icon-linear-4)" points="18.78 16.27 9.39 32.53 28.17 32.53 18.78 16.27 18.78 16.27"/></g><defs><linearGradient id="svg-logo-icon-linear-1" x1="18.78" y1="16.48" x2="18.78" y2="33.75" gradientTransform="matrix(1, 0, 0, -1, 0, 33)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#74c5ee"/><stop offset="0.32" stop-color="#73c2ef"/><stop offset="0.53" stop-color="#6eb9f1"/><stop offset="0.72" stop-color="#66aaf5"/><stop offset="0.88" stop-color="#5a95fa"/><stop offset="1" stop-color="#4f80ff"/></linearGradient><linearGradient id="svg-logo-icon-linear-2" x1="18.76" y1="16.74" x2="37.81" y2="16.74" gradientTransform="matrix(1, 0, 0, -1, 0, 33)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#96d4c8"/><stop offset="1" stop-color="#42c0c6"/></linearGradient><linearGradient id="svg-logo-icon-linear-3" y1="16.74" x2="18.78" y2="16.74" gradientTransform="matrix(1, 0, 0, -1, 0, 33)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4f80ff"/><stop offset="0.28" stop-color="#4e7ffc"/><stop offset="0.48" stop-color="#4a7cf3"/><stop offset="0.64" stop-color="#4477e4"/><stop offset="0.79" stop-color="#3c6fce"/><stop offset="0.93" stop-color="#3166b3"/><stop offset="1" stop-color="#2b60a3"/></linearGradient><linearGradient id="svg-logo-icon-linear-4" x1="18.78" y1="17.55" x2="18.78" y2="0.43" gradientTransform="matrix(1, 0, 0, -1, 0, 33)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#74c5ee"/><stop offset="0.32" stop-color="#73c2ef"/><stop offset="0.53" stop-color="#6eb9f1"/><stop offset="0.72" stop-color="#66aaf5"/><stop offset="0.88" stop-color="#5a95fa"/><stop offset="1" stop-color="#4f80ff"/></linearGradient></defs></svg>`,
    name: 'decentr-hub'
};


/***/ }),

/***/ 70201:
/*!*************************************!*\
  !*** ./shared/svg-icons/discord.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgDiscord": () => (/* binding */ svgDiscord)
/* harmony export */ });
const svgDiscord = {
    data: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.952 5.67181C18.048 4.14081 15.036 3.88181 14.908 3.87081C14.707 3.85381 14.516 3.96781 14.434 4.15181C14.428 4.16381 14.362 4.31481 14.289 4.54981C15.548 4.76181 17.095 5.18981 18.495 6.05881C18.719 6.19781 18.788 6.49281 18.649 6.71781C18.559 6.86381 18.402 6.94381 18.242 6.94381C18.156 6.94381 18.069 6.92081 17.99 6.87181C15.584 5.37981 12.578 5.30481 12 5.30481C11.422 5.30481 8.415 5.37981 6.011 6.87181C5.786 7.01181 5.492 6.94181 5.352 6.71781C5.212 6.49281 5.282 6.19881 5.506 6.05881C6.906 5.19081 8.452 4.76181 9.712 4.54981C9.638 4.31381 9.572 4.16381 9.567 4.15181C9.484 3.96781 9.294 3.85181 9.092 3.87181C8.965 3.88181 5.953 4.14081 4.023 5.69381C3.015 6.62481 1 12.0728 1 16.7828C1 16.8658 1.022 16.9478 1.063 17.0198C2.454 19.4628 6.248 20.1028 7.113 20.1308C7.118 20.1308 7.123 20.1308 7.128 20.1308C7.281 20.1308 7.425 20.0578 7.515 19.9338L8.39 18.7318C6.031 18.1218 4.826 17.0868 4.756 17.0258C4.558 16.8508 4.539 16.5488 4.714 16.3508C4.889 16.1528 5.19 16.1338 5.388 16.3078C5.417 16.3338 7.636 18.2168 12 18.2168C16.372 18.2168 18.591 16.3258 18.613 16.3068C18.811 16.1348 19.113 16.1528 19.287 16.3518C19.461 16.5498 19.442 16.8508 19.245 17.0248C19.175 17.0868 17.97 18.1208 15.611 18.7308L16.486 19.9328C16.576 20.0568 16.72 20.1298 16.873 20.1298C16.878 20.1298 16.883 20.1298 16.888 20.1298C17.753 20.1028 21.547 19.4628 22.938 17.0188C22.978 16.9468 23 16.8658 23 16.7828C23 12.0728 20.985 6.62481 19.952 5.67181ZM8.891 14.8698C7.967 14.8698 7.217 14.0128 7.217 12.9568C7.217 11.9008 7.966 11.0438 8.891 11.0438C9.816 11.0438 10.565 11.9008 10.565 12.9568C10.565 14.0128 9.816 14.8698 8.891 14.8698ZM15.109 14.8698C14.185 14.8698 13.435 14.0128 13.435 12.9568C13.435 11.9008 14.184 11.0438 15.109 11.0438C16.033 11.0438 16.783 11.9008 16.783 12.9568C16.783 14.0128 16.033 14.8698 15.109 14.8698Z" fill="currentColor"/></svg>`,
    name: 'discord'
};


/***/ }),

/***/ 97555:
/*!*********************************************!*\
  !*** ./shared/svg-icons/dropdown-expand.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgDropdownExpand": () => (/* binding */ svgDropdownExpand)
/* harmony export */ });
const svgDropdownExpand = {
    data: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 10L12 15L17 10H7Z" fill="currentColor"/></svg>`,
    name: 'dropdown-expand'
};


/***/ }),

/***/ 4172:
/*!*****************************************!*\
  !*** ./shared/svg-icons/expand-more.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgExpandMore": () => (/* binding */ svgExpandMore)
/* harmony export */ });
const svgExpandMore = {
    data: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.06 5.72668L8 8.78002L4.94 5.72668L4 6.66668L8 10.6667L12 6.66668L11.06 5.72668Z" fill="currentColor"/></svg>`,
    name: 'expand-more'
};


/***/ }),

/***/ 69072:
/*!*****************************************!*\
  !*** ./shared/svg-icons/eye-crossed.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgEyeCrossed": () => (/* binding */ svgEyeCrossed)
/* harmony export */ });
const svgEyeCrossed = {
    data: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="eye-crossed" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16"><path d="M13.1893 13.1871L2.66667 2.6645H0V16H16V0H3.79875V1.91096L14.1321 12.2443L13.1893 13.1871Z" fill="white"/></mask><g mask="url(#eye-crossed)"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.2103 14.0991L1.87695 3.76575L2.81976 2.82294L13.1531 13.1563L12.2103 14.0991Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.00065 9.33331C8.73703 9.33331 9.33398 8.73636 9.33398 7.99998C9.33398 7.2636 8.73703 6.66665 8.00065 6.66665C7.26427 6.66665 6.66732 7.2636 6.66732 7.99998C6.66732 8.73636 7.26427 9.33331 8.00065 9.33331ZM8.00065 10.6666C9.47341 10.6666 10.6673 9.47274 10.6673 7.99998C10.6673 6.52722 9.47341 5.33331 8.00065 5.33331C6.52789 5.33331 5.33398 6.52722 5.33398 7.99998C5.33398 9.47274 6.52789 10.6666 8.00065 10.6666Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.12816 7.99998C3.11964 9.91891 5.33154 11.3333 7.99935 11.3333C10.6672 11.3333 12.8791 9.91891 13.8705 7.99998C12.8791 6.08105 10.6672 4.66665 7.99935 4.66665C5.33154 4.66665 3.11964 6.08105 2.12816 7.99998ZM15.3327 7.99998C14.2652 10.7188 11.385 12.6666 7.99935 12.6666C4.61372 12.6666 1.73347 10.7188 0.666016 7.99998C1.73347 5.2812 4.61372 3.33331 7.99935 3.33331C11.385 3.33331 14.2652 5.2812 15.3327 7.99998Z" fill="currentColor"/></g></svg>`,
    name: 'eye-crossed'
};


/***/ }),

/***/ 75180:
/*!*********************************!*\
  !*** ./shared/svg-icons/eye.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgEye": () => (/* binding */ svgEye)
/* harmony export */ });
const svgEye = {
    data: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3.19322 12C4.68044 14.8784 7.99829 17 12 17C16.0017 17 19.3196 14.8784 20.8068 12C19.3196 9.12161 16.0017 7 12 7C7.99829 7 4.68044 9.12161 3.19322 12ZM23 12C21.3988 16.0782 17.0784 19 12 19C6.92156 19 2.60118 16.0782 1 12C2.60118 7.92183 6.92156 5 12 5C17.0784 5 21.3988 7.92183 23 12Z" fill="currentColor"/></svg>`,
    name: 'eye'
};


/***/ }),

/***/ 21403:
/*!************************************!*\
  !*** ./shared/svg-icons/github.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgGithub": () => (/* binding */ svgGithub)
/* harmony export */ });
const svgGithub = {
    data: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.53964 22.4813C8.88092 22.3344 9.11996 21.995 9.11996 21.6V19.008C9.11996 18.9134 9.12764 18.815 9.13964 18.7152C9.13292 18.7171 9.12668 18.7186 9.11996 18.72C9.11996 18.72 7.67996 18.72 7.39196 18.72C6.67196 18.72 6.04796 18.432 5.75996 17.856C5.42396 17.232 5.27996 16.176 4.41596 15.6C4.27196 15.504 4.36796 15.36 4.65596 15.36C4.94396 15.408 5.56796 15.792 5.95196 16.32C6.38396 16.848 6.81596 17.28 7.58396 17.28C8.77772 17.28 9.41756 17.22 9.80252 17.0136C10.2508 16.3469 10.8715 15.84 11.52 15.84V15.828C8.79932 15.7406 7.06124 14.8363 6.25196 13.44C4.49276 13.4602 2.96108 13.6344 2.087 13.7794C2.05916 13.6224 2.03516 13.4645 2.01452 13.3056C2.87708 13.1635 4.33916 12.995 6.02012 12.9629C5.96636 12.8304 5.9198 12.6946 5.88044 12.5554C4.19516 12.4699 2.74076 12.5366 1.95068 12.6019C1.94108 12.4426 1.92812 12.2837 1.9262 12.1224C2.71772 12.0576 4.13276 11.9928 5.77484 12.0691C5.73692 11.8291 5.71244 11.5838 5.71244 11.3285C5.71244 10.5125 6.00044 9.64847 6.52844 8.92847C6.28844 8.11247 5.95244 6.38447 6.62444 5.76047C7.92044 5.76047 8.83244 6.38447 9.26444 6.76847C10.08 6.43199 10.992 6.23999 12 6.23999C13.008 6.23999 13.92 6.43199 14.688 6.76799C15.12 6.38399 16.032 5.75999 17.328 5.75999C18.048 6.43199 17.664 8.15999 17.424 8.92799C17.952 9.64799 18.24 10.464 18.192 11.328C18.192 11.5603 18.1704 11.7845 18.1392 12.0043C19.8187 11.9218 21.2721 11.988 22.0771 12.0533C22.0761 12.215 22.0612 12.373 22.0526 12.5328C21.2505 12.4666 19.7606 12.3984 18.0403 12.4901C17.9976 12.6514 17.9457 12.8083 17.8843 12.9605C19.5864 12.9826 21.0835 13.1472 21.9873 13.2912C21.9667 13.4506 21.9427 13.6085 21.9148 13.765C20.9971 13.6181 19.4328 13.4462 17.6529 13.4376C16.8537 14.819 15.1473 15.72 12.48 15.8251V15.84C13.728 15.84 14.88 17.712 14.88 19.008V21.6C14.88 21.995 15.119 22.3344 15.4603 22.4813C19.8576 21.0259 23.04 16.8787 23.04 12C23.04 5.91263 18.0878 0.959991 12 0.959991C5.91212 0.959991 0.959961 5.91263 0.959961 12C0.959961 16.8787 4.14236 21.0259 8.53964 22.4813Z" fill="currentColor"/></svg>`,
    name: 'github'
};


/***/ }),

/***/ 13475:
/*!********************************************!*\
  !*** ./shared/svg-icons/import-account.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgImportAccount": () => (/* binding */ svgImportAccount)
/* harmony export */ });
const svgImportAccount = {
    data: `<svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#svg-import-account)"><path d="M6.9964 2C5.8964 2 4.9964 2.9 4.9964 4V13.1719L6.41046 14.5859L6.9964 15.1719V4H18.9964V20H11.8245L10.4105 21.4141L9.82452 22H18.9964C20.1014 22 20.9964 21.105 20.9964 20V4C20.9964 2.895 20.1014 2 18.9964 2H6.9964ZM11.9964 6C11.466 6 10.9573 6.21071 10.5822 6.58579C10.2071 6.96086 9.9964 7.46957 9.9964 8C9.9964 8.53043 10.2071 9.03914 10.5822 9.41421C10.9573 9.78929 11.466 10 11.9964 10C12.5268 10 13.0355 9.78929 13.4106 9.41421C13.7857 9.03914 13.9964 8.53043 13.9964 8C13.9964 7.46957 13.7857 6.96086 13.4106 6.58579C13.0355 6.21071 12.5268 6 11.9964 6ZM11.9964 11C10.9954 11 8.9964 11.628 8.9964 12.875V14H14.9964V12.875C14.9964 11.628 12.9974 11 11.9964 11ZM4.9964 16V19H0.996399V21H4.9964V24L8.9964 20L4.9964 16Z" fill="currentColor"/></g><defs><clipPath id="svg-import-account"><rect width="24" height="24" fill="white" transform="translate(0.996399)"/></clipPath></defs></svg>`,
    name: 'import-account'
};


/***/ }),

/***/ 94229:
/*!*****************************************!*\
  !*** ./shared/svg-icons/information.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgInformation": () => (/* binding */ svgInformation)
/* harmony export */ });
const svgInformation = {
    data: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6H2V20C2 21.1 2.9 22 4 22H18V20H4V6ZM20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM19 11H9V9H19V11ZM15 15H9V13H15V15ZM19 7H9V5H19V7Z" fill="currentColor"/></svg>`,
    name: 'information'
};


/***/ }),

/***/ 78859:
/*!**********************************!*\
  !*** ./shared/svg-icons/lock.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgLock": () => (/* binding */ svgLock)
/* harmony export */ });
const svgLock = {
    data: `<svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.9964 1C9.67259 1 6.9964 3.67619 6.9964 7V8C5.90334 8 4.9964 8.90694 4.9964 10V20C4.9964 21.0931 5.90334 22 6.9964 22H18.9964C20.0895 22 20.9964 21.0931 20.9964 20V10C20.9964 8.90694 20.0895 8 18.9964 8V7C18.9964 3.67619 16.3202 1 12.9964 1ZM12.9964 3C15.2726 3 16.9964 4.72381 16.9964 7V8H8.9964V7C8.9964 4.72381 10.7202 3 12.9964 3ZM6.9964 10H18.9964V20H6.9964V10ZM12.9964 13C11.8964 13 10.9964 13.9 10.9964 15C10.9964 16.1 11.8964 17 12.9964 17C14.0964 17 14.9964 16.1 14.9964 15C14.9964 13.9 14.0964 13 12.9964 13Z" fill="currentColor"/></svg>`,
    name: 'lock'
};


/***/ }),

/***/ 48469:
/*!*********************************************!*\
  !*** ./shared/svg-icons/logo-icon-green.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgLogoIconGreen": () => (/* binding */ svgLogoIconGreen)
/* harmony export */ });
const svgLogoIconGreen = {
    data: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path fill="url(#svg-logo-icon-linear-1-green)" d="M29.8906 2.85156H10.0703L19.9843 20.0234L29.8906 2.85156Z"/><path fill="url(#svg-logo-icon-linear-2-green)" d="M29.8906 2.85156L19.9844 20.0234L29.8906 37.1875L39.8047 20.0234L29.8906 2.85156Z"/><path fill="url(#svg-logo-icon-linear-3-green)" d="M10.0703 2.85156L0.164078 20.0234L10.0703 37.1875L19.9844 20.0234L10.0703 2.85156Z"/><path fill="url(#svg-logo-icon-linear-4-green)" d="M19.9843 20.0234L10.0703 37.1875H29.8906L19.9843 20.0234Z"/><path fill="url(#svg-logo-icon-linear-overlay-green)" id="svg-logo-icon-linear-overlay-green-style" fill-rule="evenodd" clip-rule="evenodd" d="M39.8007 20.0039L29.8867 37.168H10.0664L0.160126 20.0039L10.0663 2.83208L10.0663 2.83203H10.0664H29.8866H29.8867L39.8007 20.0039Z"/></g><defs><style>#svg-logo-icon-linear-overlay-green-style {\r\n        mix-blend-mode:color;\r\n      }</style><linearGradient id="svg-logo-icon-linear-1-green" x1="19.9828" y1="20.2898" x2="19.9828" y2="2.06232" gradientUnits="userSpaceOnUse"><stop stop-color="#74C5EE"/><stop offset="0.32" stop-color="#73C2EF"/><stop offset="0.53" stop-color="#6EB9F1"/><stop offset="0.72" stop-color="#66AAF5"/><stop offset="0.88" stop-color="#5A95FA"/><stop offset="1" stop-color="#4F80FF"/></linearGradient><linearGradient id="svg-logo-icon-linear-2-green" x1="19.9617" y1="20.0207" x2="40.0679" y2="20.0207" gradientUnits="userSpaceOnUse"><stop stop-color="#96D4C8"/><stop offset="1" stop-color="#42C0C6"/></linearGradient><linearGradient id="svg-logo-icon-linear-3-green" x1="0.161586" y1="20.0207" x2="19.9828" y2="20.0207" gradientUnits="userSpaceOnUse"><stop stop-color="#4F80FF"/><stop offset="0.28" stop-color="#4E7FFC"/><stop offset="0.48" stop-color="#4A7CF3"/><stop offset="0.64" stop-color="#4477E4"/><stop offset="0.79" stop-color="#3C6FCE"/><stop offset="0.93" stop-color="#3166B3"/><stop offset="1" stop-color="#2B60A3"/></linearGradient><linearGradient id="svg-logo-icon-linear-4-green" x1="19.9828" y1="19.1605" x2="19.9828" y2="37.2297" gradientUnits="userSpaceOnUse"><stop stop-color="#74C5EE"/><stop offset="0.32" stop-color="#73C2EF"/><stop offset="0.53" stop-color="#6EB9F1"/><stop offset="0.72" stop-color="#66AAF5"/><stop offset="0.88" stop-color="#5A95FA"/><stop offset="1" stop-color="#4F80FF"/></linearGradient><linearGradient id="svg-logo-icon-linear-overlay-green" x1="10.0156" y1="2.83203" x2="29.8369" y2="37.168" gradientUnits="userSpaceOnUse"><stop offset="0.0756688" stop-color="#3EDCD3"/><stop offset="0.924331" stop-color="#03B15E"/></linearGradient></defs></svg>`,
    name: 'logo-icon-green'
};


/***/ }),

/***/ 96895:
/*!**********************************************!*\
  !*** ./shared/svg-icons/logo-icon-orange.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgLogoIconOrange": () => (/* binding */ svgLogoIconOrange)
/* harmony export */ });
const svgLogoIconOrange = {
    data: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path fill="url(#svg-logo-icon-linear-1-orange)" d="M29.8906 2.85156H10.0703L19.9843 20.0234L29.8906 2.85156Z"/><path fill="url(#svg-logo-icon-linear-2-orange)" d="M29.8906 2.85156L19.9844 20.0234L29.8906 37.1875L39.8047 20.0234L29.8906 2.85156Z"/><path fill="url(#svg-logo-icon-linear-3-orange)" d="M10.0703 2.85156L0.164078 20.0234L10.0703 37.1875L19.9844 20.0234L10.0703 2.85156Z"/><path fill="url(#svg-logo-icon-linear-4-orange)" d="M19.9843 20.0234L10.0703 37.1875H29.8906L19.9843 20.0234Z"/><path fill="url(#svg-logo-icon-linear-overlay-orange)" id="svg-logo-icon-linear-overlay-orange-style" fill-rule="evenodd" clip-rule="evenodd" d="M39.8007 20.0039L29.8867 37.168H10.0664L0.160126 20.0039L10.0663 2.83208L10.0663 2.83203H10.0664H29.8866H29.8867L39.8007 20.0039Z"/></g><defs><style>#svg-logo-icon-linear-overlay-orange-style {\r\n        mix-blend-mode:color;\r\n      }</style><linearGradient id="svg-logo-icon-linear-1-orange" x1="19.9828" y1="20.2898" x2="19.9828" y2="2.06232" gradientUnits="userSpaceOnUse"><stop stop-color="#74C5EE"/><stop offset="0.32" stop-color="#73C2EF"/><stop offset="0.53" stop-color="#6EB9F1"/><stop offset="0.72" stop-color="#66AAF5"/><stop offset="0.88" stop-color="#5A95FA"/><stop offset="1" stop-color="#4F80FF"/></linearGradient><linearGradient id="svg-logo-icon-linear-2-orange" x1="19.9617" y1="20.0207" x2="40.0679" y2="20.0207" gradientUnits="userSpaceOnUse"><stop stop-color="#96D4C8"/><stop offset="1" stop-color="#42C0C6"/></linearGradient><linearGradient id="svg-logo-icon-linear-3-orange" x1="0.161586" y1="20.0207" x2="19.9828" y2="20.0207" gradientUnits="userSpaceOnUse"><stop stop-color="#4F80FF"/><stop offset="0.28" stop-color="#4E7FFC"/><stop offset="0.48" stop-color="#4A7CF3"/><stop offset="0.64" stop-color="#4477E4"/><stop offset="0.79" stop-color="#3C6FCE"/><stop offset="0.93" stop-color="#3166B3"/><stop offset="1" stop-color="#2B60A3"/></linearGradient><linearGradient id="svg-logo-icon-linear-4-orange" x1="19.9828" y1="19.1605" x2="19.9828" y2="37.2297" gradientUnits="userSpaceOnUse"><stop stop-color="#74C5EE"/><stop offset="0.32" stop-color="#73C2EF"/><stop offset="0.53" stop-color="#6EB9F1"/><stop offset="0.72" stop-color="#66AAF5"/><stop offset="0.88" stop-color="#5A95FA"/><stop offset="1" stop-color="#4F80FF"/></linearGradient><linearGradient id="svg-logo-icon-linear-overlay-orange" x1="10.0156" y1="2.83203" x2="29.8369" y2="37.168" gradientUnits="userSpaceOnUse"><stop offset="0.0756688" stop-color="#F8D72A"/><stop offset="0.924331" stop-color="#FF8B04"/></linearGradient></defs></svg>`,
    name: 'logo-icon-orange'
};


/***/ }),

/***/ 74709:
/*!********************************************!*\
  !*** ./shared/svg-icons/logo-icon-pink.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgLogoIconPink": () => (/* binding */ svgLogoIconPink)
/* harmony export */ });
const svgLogoIconPink = {
    data: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path fill="url(#svg-logo-icon-linear-1-pink)" d="M29.8906 2.85156H10.0703L19.9843 20.0234L29.8906 2.85156Z"/><path fill="url(#svg-logo-icon-linear-2-pink)" d="M29.8906 2.85156L19.9844 20.0234L29.8906 37.1875L39.8047 20.0234L29.8906 2.85156Z"/><path fill="url(#svg-logo-icon-linear-3-pink)" d="M10.0703 2.85156L0.164078 20.0234L10.0703 37.1875L19.9844 20.0234L10.0703 2.85156Z"/><path fill="url(#svg-logo-icon-linear-4-pink)" d="M19.9843 20.0234L10.0703 37.1875H29.8906L19.9843 20.0234Z"/><path fill="url(#svg-logo-icon-linear-overlay-pink)" id="svg-logo-icon-linear-overlay-pink-style" fill-rule="evenodd" clip-rule="evenodd" d="M39.8007 20.0039L29.8867 37.168H10.0664L0.160126 20.0039L10.0663 2.83208L10.0663 2.83203H10.0664H29.8866H29.8867L39.8007 20.0039Z"/></g><defs><style>#svg-logo-icon-linear-overlay-pink-style {\r\n        mix-blend-mode:color;\r\n      }</style><linearGradient id="svg-logo-icon-linear-1-pink" x1="19.9828" y1="20.2898" x2="19.9828" y2="2.06232" gradientUnits="userSpaceOnUse"><stop stop-color="#74C5EE"/><stop offset="0.32" stop-color="#73C2EF"/><stop offset="0.53" stop-color="#6EB9F1"/><stop offset="0.72" stop-color="#66AAF5"/><stop offset="0.88" stop-color="#5A95FA"/><stop offset="1" stop-color="#4F80FF"/></linearGradient><linearGradient id="svg-logo-icon-linear-2-pink" x1="19.9617" y1="20.0207" x2="40.0679" y2="20.0207" gradientUnits="userSpaceOnUse"><stop stop-color="#96D4C8"/><stop offset="1" stop-color="#42C0C6"/></linearGradient><linearGradient id="svg-logo-icon-linear-3-pink" x1="0.161586" y1="20.0207" x2="19.9828" y2="20.0207" gradientUnits="userSpaceOnUse"><stop stop-color="#4F80FF"/><stop offset="0.28" stop-color="#4E7FFC"/><stop offset="0.48" stop-color="#4A7CF3"/><stop offset="0.64" stop-color="#4477E4"/><stop offset="0.79" stop-color="#3C6FCE"/><stop offset="0.93" stop-color="#3166B3"/><stop offset="1" stop-color="#2B60A3"/></linearGradient><linearGradient id="svg-logo-icon-linear-4-pink" x1="19.9828" y1="19.1605" x2="19.9828" y2="37.2297" gradientUnits="userSpaceOnUse"><stop stop-color="#74C5EE"/><stop offset="0.32" stop-color="#73C2EF"/><stop offset="0.53" stop-color="#6EB9F1"/><stop offset="0.72" stop-color="#66AAF5"/><stop offset="0.88" stop-color="#5A95FA"/><stop offset="1" stop-color="#4F80FF"/></linearGradient><linearGradient id="svg-logo-icon-linear-overlay-pink" x1="10.0156" y1="2.83203" x2="29.8369" y2="37.168" gradientUnits="userSpaceOnUse"><stop offset="0.0756688" stop-color="#E87CC9"/><stop offset="0.924331" stop-color="#9F65FD"/></linearGradient></defs></svg>`,
    name: 'logo-icon-pink'
};


/***/ }),

/***/ 42536:
/*!***************************************!*\
  !*** ./shared/svg-icons/logo-icon.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgLogoIcon": () => (/* binding */ svgLogoIcon)
/* harmony export */ });
const svgLogoIcon = {
    data: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path fill="url(#svg-logo-icon-linear-1)" d="M29.8906 2.85156H10.0703L19.9843 20.0234L29.8906 2.85156Z"/><path fill="url(#svg-logo-icon-linear-2)" d="M29.8906 2.85156L19.9844 20.0234L29.8906 37.1875L39.8047 20.0234L29.8906 2.85156Z"/><path fill="url(#svg-logo-icon-linear-3)" d="M10.0703 2.85156L0.164078 20.0234L10.0703 37.1875L19.9844 20.0234L10.0703 2.85156Z"/><path fill="url(#svg-logo-icon-linear-4)" d="M19.9843 20.0234L10.0703 37.1875H29.8906L19.9843 20.0234Z"/></g><defs><linearGradient id="svg-logo-icon-linear-1" x1="19.9828" y1="20.2898" x2="19.9828" y2="2.06232" gradientUnits="userSpaceOnUse"><stop stop-color="#74C5EE"/><stop offset="0.32" stop-color="#73C2EF"/><stop offset="0.53" stop-color="#6EB9F1"/><stop offset="0.72" stop-color="#66AAF5"/><stop offset="0.88" stop-color="#5A95FA"/><stop offset="1" stop-color="#4F80FF"/></linearGradient><linearGradient id="svg-logo-icon-linear-2" x1="19.9617" y1="20.0207" x2="40.0679" y2="20.0207" gradientUnits="userSpaceOnUse"><stop stop-color="#96D4C8"/><stop offset="1" stop-color="#42C0C6"/></linearGradient><linearGradient id="svg-logo-icon-linear-3" x1="0.161586" y1="20.0207" x2="19.9828" y2="20.0207" gradientUnits="userSpaceOnUse"><stop stop-color="#4F80FF"/><stop offset="0.28" stop-color="#4E7FFC"/><stop offset="0.48" stop-color="#4A7CF3"/><stop offset="0.64" stop-color="#4477E4"/><stop offset="0.79" stop-color="#3C6FCE"/><stop offset="0.93" stop-color="#3166B3"/><stop offset="1" stop-color="#2B60A3"/></linearGradient><linearGradient id="svg-logo-icon-linear-4" x1="19.9828" y1="19.1605" x2="19.9828" y2="37.2297" gradientUnits="userSpaceOnUse"><stop stop-color="#74C5EE"/><stop offset="0.32" stop-color="#73C2EF"/><stop offset="0.53" stop-color="#6EB9F1"/><stop offset="0.72" stop-color="#66AAF5"/><stop offset="0.88" stop-color="#5A95FA"/><stop offset="1" stop-color="#4F80FF"/></linearGradient></defs></svg>`,
    name: 'logo-icon'
};


/***/ }),

/***/ 54778:
/*!**********************************!*\
  !*** ./shared/svg-icons/logo.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgLogo": () => (/* binding */ svgLogo)
/* harmony export */ });
const svgLogo = {
    data: `<svg viewBox="0 0 147 40" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path fill="url(#svg-logo-linear-1)" d="M29.8906 2.85156H10.0703L19.9844 20.0234L29.8906 2.85156Z"/><path fill="url(#svg-logo-linear-2)" d="M29.8906 2.85156L19.9844 20.0234L29.8906 37.1875L39.8047 20.0234L29.8906 2.85156Z"/><path fill="url(#svg-logo-linear-3)" d="M10.0703 2.85156L0.164062 20.0234L10.0703 37.1875L19.9844 20.0234L10.0703 2.85156Z"/><path fill="url(#svg-logo-linear-4)" d="M19.9844 20.0234L10.0703 37.1875H29.8906L19.9844 20.0234Z"/><path fill="black" d="M59.7045 29C65.0227 29 68.2443 25.7102 68.2443 20.2557C68.2443 14.8182 65.0227 11.5455 59.7557 11.5455H53.517V29H59.7045ZM57.2074 25.8381V14.7074H59.5597C62.8324 14.7074 64.5625 16.3778 64.5625 20.2557C64.5625 24.1506 62.8324 25.8381 59.5511 25.8381H57.2074ZM76.8757 29.2557C80.1143 29.2557 82.2962 27.679 82.8075 25.25L79.4496 25.0284C79.0831 26.0256 78.1456 26.5455 76.9354 26.5455C75.12 26.5455 73.9695 25.3438 73.9695 23.392V23.3835H82.8842V22.3864C82.8842 17.9375 80.1911 15.7386 76.7308 15.7386C72.8786 15.7386 70.3814 18.4744 70.3814 22.5142C70.3814 26.6648 72.8445 29.2557 76.8757 29.2557ZM73.9695 21.1335C74.0462 19.642 75.1797 18.4489 76.7905 18.4489C78.3672 18.4489 79.4581 19.5739 79.4666 21.1335H73.9695ZM91.1683 29.2557C94.6541 29.2557 96.8445 27.2102 97.0149 24.2017H93.5888C93.3757 25.5994 92.4553 26.3835 91.2109 26.3835C89.5149 26.3835 88.4155 24.9602 88.4155 22.4545C88.4155 19.983 89.5234 18.5682 91.2109 18.5682C92.5405 18.5682 93.3928 19.446 93.5888 20.75H97.0149C96.8615 17.7244 94.5689 15.7386 91.1513 15.7386C87.1797 15.7386 84.7251 18.4915 84.7251 22.5057C84.7251 26.4858 87.1371 29.2557 91.1683 29.2557ZM105.305 29.2557C108.544 29.2557 110.726 27.679 111.237 25.25L107.879 25.0284C107.513 26.0256 106.575 26.5455 105.365 26.5455C103.55 26.5455 102.399 25.3438 102.399 23.392V23.3835H111.314V22.3864C111.314 17.9375 108.621 15.7386 105.161 15.7386C101.308 15.7386 98.8111 18.4744 98.8111 22.5142C98.8111 26.6648 101.274 29.2557 105.305 29.2557ZM102.399 21.1335C102.476 19.642 103.609 18.4489 105.22 18.4489C106.797 18.4489 107.888 19.5739 107.896 21.1335H102.399ZM117.314 21.4318C117.322 19.7443 118.328 18.7557 119.794 18.7557C121.251 18.7557 122.129 19.7102 122.121 21.3125V29H125.751V20.6648C125.751 17.6136 123.962 15.7386 121.234 15.7386C119.291 15.7386 117.885 16.6932 117.297 18.2188H117.143V15.9091H113.683V29H117.314V21.4318ZM135.576 15.9091H133.113V12.7727H129.482V15.9091H127.692V18.6364H129.482V25.4545C129.465 28.0199 131.212 29.2898 133.846 29.179C134.783 29.1449 135.448 28.9574 135.815 28.8381L135.244 26.1364C135.065 26.1705 134.681 26.2557 134.34 26.2557C133.616 26.2557 133.113 25.983 133.113 24.9773V18.6364H135.576V15.9091ZM137.941 29H141.572V21.5938C141.58 19.9915 142.739 18.892 144.205 18.892C144.7 18.892 145.1 19.0284 145.441 19.1989L146.532 16.1989C146.055 15.9091 145.441 15.7216 144.742 15.7216C143.268 15.7216 142.075 16.5739 141.597 18.1932H141.461V15.9091H137.941V29Z"/></g><defs><linearGradient id="svg-logo-linear-1" x1="19.9828" y1="20.2898" x2="19.9828" y2="2.06232" gradientUnits="userSpaceOnUse"><stop stop-color="#74C5EE"/><stop offset="0.32" stop-color="#73C2EF"/><stop offset="0.53" stop-color="#6EB9F1"/><stop offset="0.72" stop-color="#66AAF5"/><stop offset="0.88" stop-color="#5A95FA"/><stop offset="1" stop-color="#4F80FF"/></linearGradient><linearGradient id="svg-logo-linear-2" x1="19.9617" y1="20.0207" x2="40.0679" y2="20.0207" gradientUnits="userSpaceOnUse"><stop stop-color="#96D4C8"/><stop offset="1" stop-color="#42C0C6"/></linearGradient><linearGradient id="svg-logo-linear-3" x1="0.16157" y1="20.0207" x2="19.9828" y2="20.0207" gradientUnits="userSpaceOnUse"><stop stop-color="#4F80FF"/><stop offset="0.28" stop-color="#4E7FFC"/><stop offset="0.48" stop-color="#4A7CF3"/><stop offset="0.64" stop-color="#4477E4"/><stop offset="0.79" stop-color="#3C6FCE"/><stop offset="0.93" stop-color="#3166B3"/><stop offset="1" stop-color="#2B60A3"/></linearGradient><linearGradient id="svg-logo-linear-4" x1="19.9828" y1="19.1605" x2="19.9828" y2="37.2297" gradientUnits="userSpaceOnUse"><stop stop-color="#74C5EE"/><stop offset="0.32" stop-color="#73C2EF"/><stop offset="0.53" stop-color="#6EB9F1"/><stop offset="0.72" stop-color="#66AAF5"/><stop offset="0.88" stop-color="#5A95FA"/><stop offset="1" stop-color="#4F80FF"/></linearGradient></defs></svg>`,
    name: 'logo'
};


/***/ }),

/***/ 61324:
/*!************************************!*\
  !*** ./shared/svg-icons/medium.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgMedium": () => (/* binding */ svgMedium)
/* harmony export */ });
const svgMedium = {
    data: `<svg viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.63998 16.9575C7.63998 17.385 7.41123 17.64 7.08686 17.64C6.97248 17.64 6.84498 17.6081 6.70998 17.5406L1.47873 14.8912C1.17123 14.7356 0.919983 14.3231 0.919983 13.9762V0.989985C0.919983 0.64686 1.10186 0.44436 1.36248 0.44436C1.45436 0.44436 1.55748 0.468736 1.66436 0.523111L1.84811 0.61686H1.84998L7.61561 3.53624C7.62498 3.54186 7.63248 3.55124 7.63998 3.55874V16.9575ZM13.6812 1.26374L14.0337 0.68436C14.1594 0.47811 14.39 0.359985 14.6244 0.359985C14.6787 0.359985 14.735 0.367485 14.7894 0.382485C14.8306 0.39186 14.8737 0.40686 14.9187 0.42936L20.9994 3.50811C21.0012 3.50811 21.0012 3.50998 21.0012 3.50998L21.0069 3.51186C21.0106 3.51374 21.0106 3.51936 21.0144 3.52124C21.0444 3.54561 21.0575 3.58686 21.0369 3.62061L14.9806 13.5881L14.3619 14.6044L10.3494 6.74623L13.6812 1.26374ZM8.59998 11.6906V5.42999L12.9106 13.875L9.03311 11.9119L8.59998 11.6906ZM21.08 16.9575C21.08 17.3587 20.8419 17.5875 20.4912 17.5875C20.3337 17.5875 20.1537 17.5425 19.9644 17.4469L19.0962 17.0062L15.2187 15.0431L21.08 5.39811V16.9575Z" fill="currentColor"/></svg>`,
    name: 'medium'
};


/***/ }),

/***/ 982:
/*!************************************!*\
  !*** ./shared/svg-icons/signal.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgSignal": () => (/* binding */ svgSignal)
/* harmony export */ });
const svgSignal = {
    data: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="16" width="3" height="4" fill="currentColor"/><rect x="8" y="12" width="3" height="8" fill="currentColor"/><rect x="13" y="8" width="3" height="12" fill="currentColor"/><rect x="18" y="4" width="3" height="16" fill="currentColor"/></svg>`,
    name: 'signal'
};


/***/ }),

/***/ 98399:
/*!**************************************!*\
  !*** ./shared/svg-icons/telegram.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgTelegram": () => (/* binding */ svgTelegram)
/* harmony export */ });
const svgTelegram = {
    data: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.3027 2.98437C20.0138 2.99694 19.7486 3.08005 19.5156 3.17187C19.3004 3.25662 18.5275 3.58146 17.2969 4.09765C16.0662 4.61383 14.4355 5.29823 12.6973 6.02929C9.22084 7.49141 5.31424 9.13612 3.3125 9.97851C3.24376 10.0071 2.96459 10.0926 2.65625 10.3281C2.3472 10.5642 2.00391 11.0765 2.00391 11.6367C2.00391 12.0887 2.22952 12.549 2.50195 12.8125C2.77439 13.076 3.05049 13.1992 3.28125 13.291V13.2891C4.06128 13.5998 6.39069 14.5319 6.94531 14.7539C7.14204 15.3434 7.98659 17.8673 8.1875 18.5019H8.18555C8.32756 18.9512 8.46598 19.2439 8.6582 19.4883C8.75431 19.6105 8.86904 19.7212 9.00977 19.8086C9.06376 19.8421 9.12355 19.8681 9.18359 19.8926C9.19196 19.8961 9.20059 19.897 9.20898 19.9004L9.18555 19.8945C9.20296 19.9015 9.21858 19.9118 9.23633 19.918C9.26524 19.9279 9.28529 19.9276 9.32422 19.9355C9.46122 19.9777 9.59798 20.0058 9.72461 20.0058C10.2682 20.0058 10.6016 19.7109 10.6016 19.7109L10.623 19.6953L12.9707 17.709L15.8457 20.3691C15.8982 20.4433 16.3096 21 17.2617 21C17.8298 21 18.279 20.7188 18.5664 20.4238C18.8538 20.1289 19.0328 19.827 19.1133 19.418L19.1152 19.416C19.1794 19.0858 21.9316 5.26562 21.9316 5.26562L21.9258 5.28905C22.0114 4.90671 22.0367 4.53695 21.9355 4.16015C21.8344 3.78334 21.5613 3.41562 21.2324 3.22265C20.9036 3.02968 20.5917 2.9718 20.3027 2.98437ZM19.9082 5.17382C19.7994 5.71985 17.334 18.1059 17.1816 18.8828L13.0293 15.041L10.2227 17.4141L11 14.375C11 14.375 16.3625 8.94685 16.6855 8.63085C16.9455 8.37785 17 8.28916 17 8.20116C17 8.08416 16.9398 7.99999 16.8008 7.99999C16.6758 7.99999 16.506 8.11977 16.416 8.17577C15.2724 8.88878 10.4013 11.6647 8.00586 13.0273C7.8617 12.9695 5.6974 12.1004 4.53125 11.6348C6.60551 10.7618 10.1612 9.2658 13.4727 7.87304C15.2106 7.1421 16.8408 6.45709 18.0703 5.9414C19.1082 5.50609 19.6495 5.28069 19.9082 5.17382ZM17.1523 19.0254H17.1543C17.1543 19.0256 17.1524 19.0309 17.1523 19.0312C17.1536 19.0248 17.1514 19.0304 17.1523 19.0254Z" fill="currentColor"/></svg>`,
    name: 'telegram'
};


/***/ }),

/***/ 85011:
/*!*************************************!*\
  !*** ./shared/svg-icons/twitter.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgTwitter": () => (/* binding */ svgTwitter)
/* harmony export */ });
const svgTwitter = {
    data: `<svg viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.8665 3.14544C22.9975 3.53126 22.0636 3.79088 21.0829 3.90987C22.0817 3.3077 22.8533 2.35939 23.2139 1.22718C22.2764 1.78246 21.2379 2.18631 20.1345 2.40266C19.2511 1.46155 17.9927 0.87381 16.5973 0.87381C13.9218 0.87381 11.7511 3.04448 11.7511 5.71996C11.7511 6.09857 11.7944 6.46996 11.8773 6.82333C7.84969 6.62141 4.27997 4.68871 1.88935 1.75722C1.47108 2.47477 1.2331 3.3077 1.2331 4.19833C1.2331 5.87862 2.08767 7.36059 3.38935 8.22958C2.59247 8.20434 1.84608 7.98799 1.19343 7.62381C1.19343 7.64544 1.19343 7.66347 1.19343 7.68511C1.19343 10.0325 2.86291 11.9904 5.08045 12.4375C4.673 12.5493 4.24752 12.607 3.80401 12.607C3.49031 12.607 3.18743 12.5781 2.89175 12.5204C3.50834 14.4423 5.2968 15.8486 7.41699 15.8846C5.76195 17.1863 3.6706 17.9579 1.39896 17.9579C1.00593 17.9579 0.623723 17.9363 0.245117 17.893C2.38694 19.2668 4.93622 20.0673 7.673 20.0673C16.5865 20.0673 21.4615 12.6827 21.4615 6.28246C21.4615 6.06972 21.4579 5.86059 21.447 5.65145C22.3954 4.97357 23.2175 4.119 23.8665 3.14544Z" fill="currentColor"/></svg>`,
    name: 'twitter'
};


/***/ }),

/***/ 31953:
/*!***************************************!*\
  !*** ./shared/utils/array/exclude.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "excludeArrayValues": () => (/* binding */ excludeArrayValues)
/* harmony export */ });
const excludeArrayValues = (target, exclude) => {
    return target.filter((value) => !exclude.includes(value));
};


/***/ }),

/***/ 73578:
/*!*************************************!*\
  !*** ./shared/utils/array/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrayIntersection": () => (/* reexport safe */ _intersection__WEBPACK_IMPORTED_MODULE_1__.arrayIntersection),
/* harmony export */   "excludeArrayValues": () => (/* reexport safe */ _exclude__WEBPACK_IMPORTED_MODULE_0__.excludeArrayValues),
/* harmony export */   "getArrayUniqueValues": () => (/* reexport safe */ _unique__WEBPACK_IMPORTED_MODULE_2__.getArrayUniqueValues)
/* harmony export */ });
/* harmony import */ var _exclude__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exclude */ 31953);
/* harmony import */ var _intersection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intersection */ 59146);
/* harmony import */ var _unique__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unique */ 17339);





/***/ }),

/***/ 59146:
/*!********************************************!*\
  !*** ./shared/utils/array/intersection.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrayIntersection": () => (/* binding */ arrayIntersection)
/* harmony export */ });
const arrayIntersection = (array1, array2) => {
    return array1.filter((value) => array2.includes(value));
};


/***/ }),

/***/ 17339:
/*!**************************************!*\
  !*** ./shared/utils/array/unique.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getArrayUniqueValues": () => (/* binding */ getArrayUniqueValues)
/* harmony export */ });
const getArrayUniqueValues = (array) => {
    return array.filter((item, index) => array.indexOf(item) === index);
};


/***/ }),

/***/ 1628:
/*!*****************************************!*\
  !*** ./shared/utils/browser/browser.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserType": () => (/* binding */ BrowserType),
/* harmony export */   "detectBrowser": () => (/* binding */ detectBrowser),
/* harmony export */   "openExtensionInNewTab": () => (/* binding */ openExtensionInNewTab)
/* harmony export */ });
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webextension-polyfill */ 87744);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__);

var BrowserType;
(function (BrowserType) {
    BrowserType["Chrome"] = "Chrome";
    BrowserType["Decentr"] = "Decentr";
    BrowserType["Edge"] = "Edge";
    BrowserType["Firefox"] = "Firefox";
    BrowserType["IE"] = "IE";
    BrowserType["Opera"] = "Opera";
    BrowserType["Safari"] = "Safari";
    BrowserType["Samsung"] = "Samsung";
    BrowserType["Unknown"] = "Unknown";
})(BrowserType || (BrowserType = {}));
const openExtensionInNewTab = (relativeUrl) => {
    return webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.tabs.create({
        url: webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.runtime.getURL(`${window.location.pathname}${relativeUrl}`),
    });
};
const detectBrowser = () => {
    const userAgent = window.navigator.userAgent;
    if (userAgent.indexOf('Decentr') > -1) {
        return BrowserType.Decentr;
    }
    if (userAgent.indexOf('Firefox') > -1) {
        return BrowserType.Firefox;
    }
    if (userAgent.indexOf('SamsungBrowser') > -1) {
        return BrowserType.Samsung;
    }
    if (userAgent.indexOf('Opera') > -1 || userAgent.indexOf('OPR') > -1) {
        return BrowserType.Opera;
    }
    if (userAgent.indexOf('Trident') > -1) {
        return BrowserType.IE;
    }
    if (userAgent.indexOf('Edge') > -1) {
        return BrowserType.Edge;
    }
    if (userAgent.indexOf('Chrome') > -1) {
        return BrowserType.Chrome;
    }
    if (userAgent.indexOf('Safari') > -1) {
        return BrowserType.Safari;
    }
    return BrowserType.Unknown;
};


/***/ }),

/***/ 94240:
/*!***************************************!*\
  !*** ./shared/utils/browser/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserType": () => (/* reexport safe */ _browser__WEBPACK_IMPORTED_MODULE_0__.BrowserType),
/* harmony export */   "POPUP_TAB_QUERY_PARAM": () => (/* reexport safe */ _window_mode__WEBPACK_IMPORTED_MODULE_2__.POPUP_TAB_QUERY_PARAM),
/* harmony export */   "detectBrowser": () => (/* reexport safe */ _browser__WEBPACK_IMPORTED_MODULE_0__.detectBrowser),
/* harmony export */   "isInstalledAsExtension": () => (/* reexport safe */ _is_installed_as_extension__WEBPACK_IMPORTED_MODULE_1__.isInstalledAsExtension),
/* harmony export */   "isOpenedInPopup": () => (/* reexport safe */ _window_mode__WEBPACK_IMPORTED_MODULE_2__.isOpenedInPopup),
/* harmony export */   "isOpenedInPopupTab": () => (/* reexport safe */ _window_mode__WEBPACK_IMPORTED_MODULE_2__.isOpenedInPopupTab),
/* harmony export */   "isOpenedInTab": () => (/* reexport safe */ _window_mode__WEBPACK_IMPORTED_MODULE_2__.isOpenedInTab),
/* harmony export */   "openExtensionInNewTab": () => (/* reexport safe */ _browser__WEBPACK_IMPORTED_MODULE_0__.openExtensionInNewTab)
/* harmony export */ });
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browser */ 1628);
/* harmony import */ var _is_installed_as_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-installed-as-extension */ 16377);
/* harmony import */ var _window_mode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./window-mode */ 85771);





/***/ }),

/***/ 16377:
/*!***********************************************************!*\
  !*** ./shared/utils/browser/is-installed-as-extension.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isInstalledAsExtension": () => (/* binding */ isInstalledAsExtension)
/* harmony export */ });
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webextension-polyfill */ 87744);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__);

const isInstalledAsExtension = () => {
    return webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.management.getAll()
        .then((extensions) => !!extensions.find((extension) => extension.id === webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.runtime.id));
};


/***/ }),

/***/ 85771:
/*!*********************************************!*\
  !*** ./shared/utils/browser/window-mode.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "POPUP_TAB_QUERY_PARAM": () => (/* binding */ POPUP_TAB_QUERY_PARAM),
/* harmony export */   "isOpenedInPopup": () => (/* binding */ isOpenedInPopup),
/* harmony export */   "isOpenedInPopupTab": () => (/* binding */ isOpenedInPopupTab),
/* harmony export */   "isOpenedInTab": () => (/* binding */ isOpenedInTab)
/* harmony export */ });
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webextension-polyfill */ 87744);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ 92541);


const POPUP_TAB_QUERY_PARAM = 'popupTab';
const isOpenedInPopupTab = () => {
    const queryParamsString = (location.hash.split('?')[1]);
    const searchParams = new URLSearchParams(queryParamsString);
    return (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(searchParams.get(POPUP_TAB_QUERY_PARAM));
};
const isOpenedInTab = () => {
    return (!webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.extension || webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__.extension.getViews({ type: 'tab' })
        .some(extensionWindow => extensionWindow === window))
        && !isOpenedInPopupTab();
};
const isOpenedInPopup = () => {
    return !isOpenedInTab() && !isOpenedInPopupTab();
};


/***/ }),

/***/ 72938:
/*!************************************!*\
  !*** ./shared/utils/crypto/aes.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aesDecrypt": () => (/* binding */ aesDecrypt),
/* harmony export */   "aesEncrypt": () => (/* binding */ aesEncrypt)
/* harmony export */ });
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js */ 2527);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_0__);

const aesEncrypt = (target, key) => {
    return crypto_js__WEBPACK_IMPORTED_MODULE_0__.AES.encrypt(target, key).toString();
};
const aesDecrypt = (target, key) => {
    return crypto_js__WEBPACK_IMPORTED_MODULE_0__.AES.decrypt(target, key).toString(crypto_js__WEBPACK_IMPORTED_MODULE_0__.enc.Utf8);
};


/***/ }),

/***/ 80323:
/*!**************************************!*\
  !*** ./shared/utils/crypto/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aesDecrypt": () => (/* reexport safe */ _aes__WEBPACK_IMPORTED_MODULE_0__.aesDecrypt),
/* harmony export */   "aesEncrypt": () => (/* reexport safe */ _aes__WEBPACK_IMPORTED_MODULE_0__.aesEncrypt),
/* harmony export */   "sha256": () => (/* reexport safe */ _sha256__WEBPACK_IMPORTED_MODULE_1__.sha256)
/* harmony export */ });
/* harmony import */ var _aes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aes */ 72938);
/* harmony import */ var _sha256__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sha256 */ 93730);




/***/ }),

/***/ 93730:
/*!***************************************!*\
  !*** ./shared/utils/crypto/sha256.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sha256": () => (/* binding */ sha256)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);

const sha256 = (target) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
    const msgBuffer = new TextEncoder().encode(target);
    // hash the message
    const hashBuffer = yield crypto.subtle.digest('SHA-256', msgBuffer);
    // convert ArrayBuffer to Array
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    // convert bytes to hex string
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
});


/***/ }),

/***/ 17969:
/*!************************************!*\
  !*** ./shared/utils/date/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateAmountType": () => (/* binding */ DateAmountType),
/* harmony export */   "ONE_HOUR": () => (/* binding */ ONE_HOUR),
/* harmony export */   "ONE_MINUTE": () => (/* binding */ ONE_MINUTE),
/* harmony export */   "ONE_SECOND": () => (/* binding */ ONE_SECOND),
/* harmony export */   "addAmountToDate": () => (/* binding */ addAmountToDate),
/* harmony export */   "coerceTimestamp": () => (/* binding */ coerceTimestamp)
/* harmony export */ });
const ONE_SECOND = 1000;
const ONE_MINUTE = ONE_SECOND * 60;
const ONE_HOUR = ONE_MINUTE * 60;
var DateAmountType;
(function (DateAmountType) {
    DateAmountType[DateAmountType["DAYS"] = 0] = "DAYS";
    DateAmountType[DateAmountType["WEEKS"] = 1] = "WEEKS";
    DateAmountType[DateAmountType["MONTHS"] = 2] = "MONTHS";
    DateAmountType[DateAmountType["YEARS"] = 3] = "YEARS";
})(DateAmountType || (DateAmountType = {}));
const addAmountToDate = (dt, amount, dateType) => {
    switch (dateType) {
        case DateAmountType.DAYS:
            return dt.setDate(dt.getDate() + amount) && dt;
        case DateAmountType.WEEKS:
            return dt.setDate(dt.getDate() + (7 * amount)) && dt;
        case DateAmountType.MONTHS:
            return dt.setMonth(dt.getMonth() + amount) && dt;
        case DateAmountType.YEARS:
            return dt.setFullYear(dt.getFullYear() + amount) && dt;
    }
};
const coerceTimestamp = (input) => {
    const date = isNaN(Date.parse(input.toString())) ? Number(input) : input;
    return Number(new Date(date).valueOf().toString().padEnd(13, '0'));
};


/***/ }),

/***/ 81318:
/*!************************************!*\
  !*** ./shared/utils/http/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "httpUrl": () => (/* binding */ httpUrl)
/* harmony export */ });
const httpUrl = (httpsUrl) => {
    return httpsUrl.replace('https://', 'http://');
};


/***/ }),

/***/ 48247:
/*!***********************************************!*\
  !*** ./shared/utils/number/compare-semver.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compareSemver": () => (/* binding */ compareSemver)
/* harmony export */ });
const splitVersion = (version) => {
    return version.split('.').map((num) => +num);
};
const compareSemver = (a, b) => {
    const aArr = splitVersion(a);
    const bArr = splitVersion(b);
    for (let i = 0; i < 3; i++) {
        const aNumber = aArr[i];
        const bNumber = bArr[i];
        if (aNumber > bNumber || (!isNaN(aNumber) && isNaN(bNumber))) {
            return 1;
        }
        if (aNumber < bNumber || (isNaN(aNumber) && !isNaN(bNumber))) {
            return -1;
        }
    }
    return 0;
};


/***/ }),

/***/ 55298:
/*!**************************************!*\
  !*** ./shared/utils/number/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateDifferencePercentage": () => (/* binding */ calculateDifferencePercentage),
/* harmony export */   "compareSemver": () => (/* reexport safe */ _compare_semver__WEBPACK_IMPORTED_MODULE_0__.compareSemver),
/* harmony export */   "exponentialToFixed": () => (/* binding */ exponentialToFixed)
/* harmony export */ });
/* harmony import */ var _compare_semver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compare-semver */ 48247);

const exponentialToFixed = (value) => {
    const numStr = value.toString();
    const num = +value;
    if (!numStr.includes('e')) {
        return num.toString();
    }
    const degree = +numStr.split('-').slice(-1)[0];
    return num.toFixed(degree);
};
const calculateDifferencePercentage = (newNumber, oldNumber) => {
    return oldNumber ? (newNumber - oldNumber) / Math.abs(oldNumber) * 100 : 0;
};


/***/ }),

/***/ 59810:
/*!**************************************!*\
  !*** ./shared/utils/online/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "whileOnline": () => (/* binding */ whileOnline)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 69000);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 21860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 14581);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 84945);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 13528);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 50853);


const whileOnline = (source$) => {
    const [online$, offline$] = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.partition)((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(window, 'online').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => true)), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(window, 'offline').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => false))), Boolean);
    return source$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.merge)(offline$, ...navigator.onLine ? [] : [(0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(void 0)])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.repeat)({
        delay: () => online$,
    }));
};


/***/ }),

/***/ 11131:
/*!************************************************!*\
  !*** ./shared/utils/pdv/get-pdv-day-change.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPDVDayChange": () => (/* binding */ getPDVDayChange)
/* harmony export */ });
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../number */ 55298);

const getPDVDayChange = (stats, currentPDV) => {
    var _a;
    const now = new Date();
    const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
    const previousPDV = (_a = (stats || [])
        .map((stat) => (Object.assign(Object.assign({}, stat), { date: new Date(stat.date).valueOf() })))
        .sort((left, right) => right.date - left.date)
        .find((stat) => stat.date !== today)) === null || _a === void 0 ? void 0 : _a.value;
    return (0,_number__WEBPACK_IMPORTED_MODULE_0__.calculateDifferencePercentage)(currentPDV, previousPDV);
};


/***/ }),

/***/ 21087:
/*!***********************************!*\
  !*** ./shared/utils/pdv/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPDVDayChange": () => (/* reexport safe */ _get_pdv_day_change__WEBPACK_IMPORTED_MODULE_0__.getPDVDayChange),
/* harmony export */   "mapPDVStatsToChartPoints": () => (/* reexport safe */ _map_pdv_stats_to_chart_points__WEBPACK_IMPORTED_MODULE_1__.mapPDVStatsToChartPoints)
/* harmony export */ });
/* harmony import */ var _get_pdv_day_change__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-pdv-day-change */ 11131);
/* harmony import */ var _map_pdv_stats_to_chart_points__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map-pdv-stats-to-chart-points */ 91080);




/***/ }),

/***/ 91080:
/*!***********************************************************!*\
  !*** ./shared/utils/pdv/map-pdv-stats-to-chart-points.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapPDVStatsToChartPoints": () => (/* binding */ mapPDVStatsToChartPoints)
/* harmony export */ });
const mapPDVStatsToChartPoints = (stats) => {
    return (stats || [])
        .map(({ date, value }) => ({
        date: new Date(date).valueOf(),
        value,
    }))
        .sort((left, right) => left.date - right.date);
};


/***/ }),

/***/ 99728:
/*!************************************************!*\
  !*** ./shared/utils/routing/get-parent-url.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getParentUrlFromSnapshots": () => (/* binding */ getParentUrlFromSnapshots)
/* harmony export */ });
const getParentUrlFromSnapshots = (route, routerState) => {
    return routerState.url
        .slice(0, routerState.url.indexOf(route.url[route.url.length - 1].path));
};


/***/ }),

/***/ 79945:
/*!***************************************!*\
  !*** ./shared/utils/routing/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getParentUrlFromSnapshots": () => (/* reexport safe */ _get_parent_url__WEBPACK_IMPORTED_MODULE_0__.getParentUrlFromSnapshots)
/* harmony export */ });
/* harmony import */ var _get_parent_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-parent-url */ 99728);



/***/ }),

/***/ 30847:
/*!************************************!*\
  !*** ./shared/utils/uuid/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uuid": () => (/* binding */ uuid)
/* harmony export */ });
const uuid = () => {
    return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, c => (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16));
};


/***/ }),

/***/ 19266:
/*!***************************************!*\
  !*** ./shared/utils/version/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APP_VERSION": () => (/* binding */ APP_VERSION)
/* harmony export */ });
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../package.json */ 4147);

const APP_VERSION = _package_json__WEBPACK_IMPORTED_MODULE_0__.version;


/***/ }),

/***/ 42480:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 4147:
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"vpn","version":"1.0.0","scripts":{"ng":"ng","build":"npm run clean && npm-run-all --parallel build:charon build:scripts","build:prod":"npm run clean && npm-run-all --parallel build:charon:prod build:scripts:prod && npm run pack","build:prod:qa":"npm run clean && npm-run-all --parallel build:charon:prod build:scripts:prod:qa && npm run pack","build:charon":"ng build charon --configuration development","build:charon:prod":"ng build charon --configuration production","build:charon:stats":"ng build charon --stats-json","build:scripts":"webpack --config projects/scripts/webpack.config.dev.js","build:scripts:prod":"webpack --config projects/scripts/webpack.config.prod.js","build:scripts:prod:qa":"cross-env QA=true webpack --config projects/scripts/webpack.config.prod.js","generate-icons":"svg-generator","clean":"rimraf dist","lint":"ng lint","lint:staged":"lint-staged --relative","pack":"cd dist && bestzip ../charon_extension.zip *","pack_named":"cd dist && bestzip ../charon_$(date +\'%Y%m%d-%H%M\')_v$(node -p -e \\"require(\'../package.json\').version\\")_$(echo $BROWSER).zip *","test":"ng test","watch":"npm run clean && npm-run-all --parallel watch:scripts watch:charon","watch:charon":"ng build charon --configuration development --watch --delete-output-path=false --sourceMap=false","watch:scripts":"webpack --config projects/scripts/webpack.config.dev.js -w","prepare":"husky install"},"private":true,"dependencies":{"@0xsquid/widget":"^1.6.9","@angular/animations":"^13.3.0","@angular/cdk":"^13.3.1","@angular/common":"^13.3.0","@angular/compiler":"^13.3.0","@angular/core":"^13.3.0","@angular/forms":"^13.3.0","@angular/material":"^13.3.1","@angular/platform-browser":"^13.3.0","@angular/platform-browser-dynamic":"^13.3.0","@angular/router":"^13.3.0","@leapwallet/cosmos-social-login-capsule-provider":"^0.0.30","@leapwallet/cosmos-social-login-capsule-provider-ui":"^0.0.47","@ngneat/input-mask":"^5.2.0","@ngneat/reactive-forms":"^4.0.4","@ngneat/svg-icon":"^4.1.0","@ngneat/transloco":"^4.0.0","@ngneat/until-destroy":"^9.0.0","@rxweb/reactive-form-validators":"^2.1.6","@types/mixpanel-browser":"^2.49.0","clamp-js":"^0.7.0","crypto-js":"^4.1.1","d3":"~7.3.0","decentr-js":"^5.2.7","highcharts":"^10.0.0","highcharts-angular":"^3.0.0","html2canvas":"~1.4.1","inputmask":"^5.0.7","jspdf":"^2.5.1","long":"^4.0.0","mixpanel-browser":"^2.49.0","ng-qrcode":"^6.0.0","ngx-google-analytics":"13.0.1","ngx-infinite-scroll":"^13.0.0","ngx-skeleton-loader":"^5.0.0","ngx-toastr":"^14.2.3","ngx-trim-directive":"^2.0.0","p-queue":"^7.2.0","react":"^17.0.2","react-dom":"^17.0.2","react-router-dom":"^5.2.0","rxjs":"~7.5.5","tslib":"^2.3.1","webextension-polyfill":"^0.9.0","zone.js":"~0.11.5"},"devDependencies":{"@angular-devkit/build-angular":"^13.3.0","@angular-eslint/builder":"^13.2.0","@angular-eslint/eslint-plugin":"^13.2.0","@angular-eslint/eslint-plugin-template":"^13.2.0","@angular-eslint/schematics":"^13.2.0","@angular-eslint/template-parser":"^13.2.0","@angular/cli":"^13.3.0","@angular/compiler-cli":"^13.3.0","@ngneat/svg-generator":"^4.0.0","@svgr/webpack":"^8.1.0","@types/crypto-js":"^4.1.1","@types/d3":"^7.1.0","@types/google.analytics":"^0.0.46","@types/inputmask":"^5.0.3","@types/jasmine":"^4.0.2","@types/long":"^4.0.2","@types/node":"^14.18.21","@types/react":"^17.0.80","@types/react-dom":"^17.0.25","@types/react-router-dom":"^5.1.7","@types/resize-observer-browser":"~0.1.7","@types/webextension-polyfill":"~0.9.0","@typescript-eslint/eslint-plugin":"^5.18.0","@typescript-eslint/parser":"^5.18.0","bestzip":"^2.1.7","copy-webpack-plugin":"^11.0.0","cross-env":"^7.0.3","eslint":"^8.12.0","eslint-config-airbnb-typescript":"^17.0.0","eslint-plugin-import":"^2.26.0","file-loader":"^6.2.0","husky":"^8.0.1","jasmine-core":"^4.0.1","karma":"^6.3.17","karma-chrome-launcher":"^3.1.1","karma-coverage-istanbul-reporter":"^3.0.3","karma-jasmine":"^5.1.0","karma-jasmine-html-reporter":"^2.0.0","lint-staged":"^13.0.2","npm-run-all":"^4.1.5","raw-loader":"^4.0.2","svg-inline-loader":"^0.8.2","ts-loader":"^9.2.8","typescript":"~4.6.3","url-loader":"^4.1.1","webpack":"^5.71.0","webpack-cli":"^4.9.2","webpack-merge":"^5.8.0"},"svgGenerator":{"outputPath":"./shared/svg-icons","postfix":"","prefix":"svg","srcPath":"./assets/svg","svgoConfig":{"plugins":["cleanupAttrs","removeDimensions"]}},"lint-staged":{"*.{js,ts}":["eslint"]}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(57928)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);