"use strict";
(self["webpackChunkcharon"] = self["webpackChunkcharon"] || []).push([["projects_charon_src_app_portal_portal_module_ts"],{

/***/ 59444:
/*!****************************************************************************************************!*\
  !*** ./projects/charon/src/app/portal/components/portal-navigation/portal-navigation.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortalNavigationComponent": () => (/* binding */ PortalNavigationComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var _app_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app-route */ 4473);
/* harmony import */ var _portal_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../portal-route */ 81716);
/* harmony import */ var _shared_services_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/configuration */ 1683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services */ 88718);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngneat/transloco */ 47860);
/* harmony import */ var _core_layout_authorized_layout_authorized_layout_navigation_authorized_layout_navigation_def_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/layout/authorized-layout/authorized-layout-navigation/authorized-layout-navigation-def.directive */ 96605);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 11048);
/* harmony import */ var _core_layout_authorized_layout_authorized_layout_navigation_link_authorized_layout_navigation_link_def_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/layout/authorized-layout/authorized-layout-navigation-link/authorized-layout-navigation-link-def.directive */ 82496);










function PortalNavigationComponent_ng_container_0_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const link_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const translate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", translate_r1(link_r4.i18nKey), " ");
} }
function PortalNavigationComponent_ng_container_0_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PortalNavigationComponent_ng_container_0_ng_container_1_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const link_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("appAuthorizedLayoutNavigationLinkDef", link_r4.link)("appAuthorizedLayoutNavigationLinkDefColorClass", link_r4.colorClass)("appAuthorizedLayoutNavigationLinkDefExact", false);
} }
function PortalNavigationComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PortalNavigationComponent_ng_container_0_ng_container_1_ng_container_1_Template, 2, 3, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, ctx_r2.links$));
} }
function PortalNavigationComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PortalNavigationComponent_ng_container_0_ng_container_1_Template, 3, 3, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} }
class PortalNavigationComponent {
    constructor(networkService) {
        this.networkService = networkService;
    }
    ngOnInit() {
        this.links$ = this.networkService.getActiveNetworkId().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((networkId) => [
            {
                colorClass: 'color-primary',
                i18nKey: 'portal.portal_navigation.pdv_rate',
                link: ['/', _app_route__WEBPACK_IMPORTED_MODULE_0__.AppRoute.Portal, _portal_route__WEBPACK_IMPORTED_MODULE_1__.PortalRoute.PDVRate],
            },
            {
                colorClass: 'color-primary',
                i18nKey: 'portal.portal_navigation.activity',
                link: ['/', _app_route__WEBPACK_IMPORTED_MODULE_0__.AppRoute.Portal, _portal_route__WEBPACK_IMPORTED_MODULE_1__.PortalRoute.Activity],
            },
            {
                colorClass: 'color-primary',
                i18nKey: 'portal.portal_navigation.assets',
                link: ['/', _app_route__WEBPACK_IMPORTED_MODULE_0__.AppRoute.Portal, _portal_route__WEBPACK_IMPORTED_MODULE_1__.PortalRoute.Assets],
            },
            {
                colorClass: 'color-primary',
                i18nKey: 'portal.portal_navigation.staking',
                link: ['/', _app_route__WEBPACK_IMPORTED_MODULE_0__.AppRoute.Portal, _portal_route__WEBPACK_IMPORTED_MODULE_1__.PortalRoute.Staking],
            },
            {
                colorClass: 'color-primary',
                i18nKey: 'portal.portal_navigation.loan',
                link: ['/', _app_route__WEBPACK_IMPORTED_MODULE_0__.AppRoute.Portal, _portal_route__WEBPACK_IMPORTED_MODULE_1__.PortalRoute.Loan],
            },
            {
                colorClass: 'color-primary',
                i18nKey: 'portal.portal_navigation.ai',
                link: ['/', _app_route__WEBPACK_IMPORTED_MODULE_0__.AppRoute.Portal, _portal_route__WEBPACK_IMPORTED_MODULE_1__.PortalRoute.Ai],
            },
            ...networkId === _shared_services_configuration__WEBPACK_IMPORTED_MODULE_2__.NetworkId.Mainnet
                ? [{
                        colorClass: 'color-primary',
                        i18nKey: 'portal.portal_navigation.vpn',
                        link: ['/', _app_route__WEBPACK_IMPORTED_MODULE_0__.AppRoute.Portal, _portal_route__WEBPACK_IMPORTED_MODULE_1__.PortalRoute.Vpn],
                    }]
                : [],
        ]));
    }
}
PortalNavigationComponent.ɵfac = function PortalNavigationComponent_Factory(t) { return new (t || PortalNavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_3__.NetworkService)); };
PortalNavigationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: PortalNavigationComponent, selectors: [["app-portal-navigation"]], decls: 1, vars: 0, consts: [[4, "transloco"], [4, "appAuthorizedLayoutNavigationDef"], [4, "ngFor", "ngForOf"], [4, "appAuthorizedLayoutNavigationLinkDef", "appAuthorizedLayoutNavigationLinkDefColorClass", "appAuthorizedLayoutNavigationLinkDefExact"]], template: function PortalNavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, PortalNavigationComponent_ng_container_0_Template, 2, 0, "ng-container", 0);
    } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_8__.TranslocoDirective, _core_layout_authorized_layout_authorized_layout_navigation_authorized_layout_navigation_def_directive__WEBPACK_IMPORTED_MODULE_4__.AuthorizedLayoutNavigationDefDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _core_layout_authorized_layout_authorized_layout_navigation_link_authorized_layout_navigation_link_def_directive__WEBPACK_IMPORTED_MODULE_5__.AuthorizedLayoutNavigationLinkDefDirective], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe], styles: [""], changeDetection: 0 });


/***/ }),

/***/ 25025:
/*!*******************************************************!*\
  !*** ./projects/charon/src/app/portal/pages/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PORTAL_PAGES": () => (/* binding */ PORTAL_PAGES),
/* harmony export */   "PortalPageComponent": () => (/* reexport safe */ _portal_page__WEBPACK_IMPORTED_MODULE_0__.PortalPageComponent)
/* harmony export */ });
/* harmony import */ var _portal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portal-page */ 14347);


const PORTAL_PAGES = [
    _portal_page__WEBPACK_IMPORTED_MODULE_0__.PortalPageComponent,
];


/***/ }),

/***/ 14347:
/*!*******************************************************************!*\
  !*** ./projects/charon/src/app/portal/pages/portal-page/index.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortalPageComponent": () => (/* reexport safe */ _portal_page_component__WEBPACK_IMPORTED_MODULE_0__.PortalPageComponent)
/* harmony export */ });
/* harmony import */ var _portal_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portal-page.component */ 53150);



/***/ }),

/***/ 53150:
/*!***********************************************************************************!*\
  !*** ./projects/charon/src/app/portal/pages/portal-page/portal-page.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortalPageComponent": () => (/* binding */ PortalPageComponent)
/* harmony export */ });
/* harmony import */ var _app_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app-route */ 4473);
/* harmony import */ var _shared_svg_icons_logo_icon_orange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/svg-icons/logo-icon-orange */ 96895);
/* harmony import */ var _shared_svg_icons_wallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/svg-icons/wallet */ 94034);
/* harmony import */ var _shared_utils_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/utils/browser */ 94240);
/* harmony import */ var _core_layout_authorized_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/layout/authorized-layout */ 86084);
/* harmony import */ var _portal_page_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portal-page.service */ 9245);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _core_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/navigation */ 12089);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 45113);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngneat/svg-icon */ 66722);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngneat/transloco */ 47860);
/* harmony import */ var _components_portal_navigation_portal_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/portal-navigation/portal-navigation.component */ 59444);
/* harmony import */ var _shared_components_slot_slot_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../shared/components/slot/slot.directive */ 85833);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/clipboard */ 99274);
/* harmony import */ var _shared_directives_browser_view_browser_tab_view_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../shared/directives/browser-view/browser-tab-view.directive */ 59896);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../shared/components/button/button.component */ 4013);
/* harmony import */ var _shared_directives_browser_view_browser_popup_view_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../shared/directives/browser-view/browser-popup-view.directive */ 88431);
/* harmony import */ var _shared_components_network_selector_network_selector_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../shared/components/network-selector/network-selector.component */ 91992);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 11048);




















function PortalPageComponent_ng_container_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function PortalPageComponent_ng_container_0_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return ctx_r5.openInTab(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function PortalPageComponent_ng_container_0_div_3_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "svg-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const translate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", translate_r1("copy_wallet_address"), " ");
} }
function PortalPageComponent_ng_container_0_div_3_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "svg-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function PortalPageComponent_ng_container_0_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("cdkCopyToClipboardCopied", function PortalPageComponent_ng_container_0_div_3_Template_div_cdkCopyToClipboardCopied_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return ctx_r10.onWalletAddressCopied(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, PortalPageComponent_ng_container_0_div_3_button_2_Template, 3, 1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, PortalPageComponent_ng_container_0_div_3_button_3_Template, 2, 0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("cdkCopyToClipboard", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](1, 1, ctx_r3.walletAddress$));
} }
function PortalPageComponent_ng_container_0_app_network_selector_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "app-network-selector");
} }
function PortalPageComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "app-portal-navigation");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, PortalPageComponent_ng_container_0_div_2_Template, 2, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, PortalPageComponent_ng_container_0_div_3_Template, 4, 3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, PortalPageComponent_ng_container_0_app_network_selector_4_Template, 1, 0, "app-network-selector", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("appSlot", ctx_r0.headerLogoSlot);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("appSlot", ctx_r0.headerActionsSlot);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("appSlot", ctx_r0.headerMetaSlot);
} }
class PortalPageComponent {
    constructor(navigationService, portalPageService, router, svgIconRegistry) {
        this.navigationService = navigationService;
        this.portalPageService = portalPageService;
        this.router = router;
        this.headerActionsSlot = _core_layout_authorized_layout__WEBPACK_IMPORTED_MODULE_4__.AUTHORIZED_LAYOUT_HEADER_ACTIONS_SLOT;
        this.headerLogoSlot = _core_layout_authorized_layout__WEBPACK_IMPORTED_MODULE_4__.AUTHORIZED_LAYOUT_HEADER_LOGO_SLOT;
        this.headerMetaSlot = _core_layout_authorized_layout__WEBPACK_IMPORTED_MODULE_4__.AUTHORIZED_LAYOUT_HEADER_META_SLOT;
        svgIconRegistry.register([
            _shared_svg_icons_logo_icon_orange__WEBPACK_IMPORTED_MODULE_1__.svgLogoIconOrange,
            _shared_svg_icons_wallet__WEBPACK_IMPORTED_MODULE_2__.svgWallet,
        ]);
    }
    ngOnInit() {
        this.walletAddress$ = this.portalPageService.getWalletAddress();
    }
    openInTab() {
        const dPortalRoute = `/${_app_route__WEBPACK_IMPORTED_MODULE_0__.AppRoute.Portal}`;
        if ((0,_shared_utils_browser__WEBPACK_IMPORTED_MODULE_3__.isOpenedInTab)()) {
            this.router.navigate([dPortalRoute]);
        }
        else {
            this.navigationService.openInNewTab(dPortalRoute);
        }
    }
    onWalletAddressCopied() {
        this.portalPageService.onWalletAddressCopied();
    }
}
PortalPageComponent.ɵfac = function PortalPageComponent_Factory(t) { return new (t || PortalPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_navigation__WEBPACK_IMPORTED_MODULE_6__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_portal_page_service__WEBPACK_IMPORTED_MODULE_5__.PortalPageService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_15__.SvgIconRegistry)); };
PortalPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: PortalPageComponent, selectors: [["app-portal-page"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵProvidersFeature"]([
            _portal_page_service__WEBPACK_IMPORTED_MODULE_5__.PortalPageService,
        ])], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], ["class", "portal-page__logo", 3, "click", 4, "appSlot"], [3, "cdkCopyToClipboard", "cdkCopyToClipboardCopied", 4, "appSlot"], [4, "appSlot"], [1, "portal-page__logo", 3, "click"], [1, "portal-page__logo-icon"], [3, "cdkCopyToClipboard", "cdkCopyToClipboardCopied"], ["app-button", "", "color", "grey", 4, "appBrowserTabView"], ["app-icon-button", "", "color", "grey", 4, "appBrowserPopupView"], ["app-button", "", "color", "grey"], ["key", "wallet"], ["app-icon-button", "", "color", "grey"]], template: function PortalPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](0, PortalPageComponent_ng_container_0_Template, 6, 3, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("translocoRead", "portal.portal_page");
    } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_16__.TranslocoDirective, _components_portal_navigation_portal_navigation_component__WEBPACK_IMPORTED_MODULE_7__.PortalNavigationComponent, _shared_components_slot_slot_directive__WEBPACK_IMPORTED_MODULE_8__.SlotDirective, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_17__.CdkCopyToClipboard, _shared_directives_browser_view_browser_tab_view_directive__WEBPACK_IMPORTED_MODULE_9__.BrowserTabViewDirective, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_10__.ButtonComponent, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_15__.SvgIconComponent, _shared_directives_browser_view_browser_popup_view_directive__WEBPACK_IMPORTED_MODULE_11__.BrowserPopupViewDirective, _shared_components_network_selector_network_selector_component__WEBPACK_IMPORTED_MODULE_12__.NetworkSelectorComponent, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterOutlet], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.AsyncPipe], styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  margin: 0 auto;\n}\n.mod-tab-view   [_nghost-%COMP%] {\n  padding: 16px 24px;\n  width: 1248px;\n}\n.portal-page__logo[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-flex;\n}\n.portal-page__logo-icon[_ngcontent-%COMP%] {\n  background-image: var(--logo-dhub-portal);\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: 40px;\n  width: 120px;\n}"], changeDetection: 0 });


/***/ }),

/***/ 9245:
/*!*********************************************************************************!*\
  !*** ./projects/charon/src/app/portal/pages/portal-page/portal-page.service.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortalPageService": () => (/* binding */ PortalPageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _core_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/auth */ 51519);
/* harmony import */ var _shared_services_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/notification */ 86333);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/transloco */ 47860);




class PortalPageService {
    constructor(authService, notificationService, translocoService) {
        this.authService = authService;
        this.notificationService = notificationService;
        this.translocoService = translocoService;
    }
    getWalletAddress() {
        return this.authService.getActiveUserAddress();
    }
    onWalletAddressCopied() {
        this.notificationService.success(this.translocoService.translate('portal_page.wallet_address_copied', null, 'portal'));
    }
}
PortalPageService.ɵfac = function PortalPageService_Factory(t) { return new (t || PortalPageService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_auth__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_services_notification__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__.TranslocoService)); };
PortalPageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PortalPageService, factory: PortalPageService.ɵfac });


/***/ }),

/***/ 66859:
/*!*****************************************************************!*\
  !*** ./projects/charon/src/app/portal/portal-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortalRoutingModule": () => (/* binding */ PortalRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 45113);
/* harmony import */ var _core_guards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/guards */ 61179);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages */ 25025);
/* harmony import */ var _portal_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portal-route */ 81716);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 89724);






const ROUTES = [
    {
        path: '',
        component: _pages__WEBPACK_IMPORTED_MODULE_1__.PortalPageComponent,
        children: [
            {
                path: '',
                redirectTo: _portal_route__WEBPACK_IMPORTED_MODULE_2__.PortalRoute.Vpn,
            },
            {
                path: _portal_route__WEBPACK_IMPORTED_MODULE_2__.PortalRoute.PDVRate,
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_charon_src_app_portal_modules_assets_pages_index_ts-shared_components_button-b18e2f"), __webpack_require__.e("projects_charon_src_app_portal_modules_index_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules */ 90959)).then((m) => m.PdvRateModule),
            },
            {
                path: _portal_route__WEBPACK_IMPORTED_MODULE_2__.PortalRoute.Activity,
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_charon_src_app_portal_modules_assets_pages_index_ts-shared_components_button-b18e2f"), __webpack_require__.e("projects_charon_src_app_portal_modules_index_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules */ 90959)).then((m) => m.ActivityModule),
            },
            {
                path: _portal_route__WEBPACK_IMPORTED_MODULE_2__.PortalRoute.Assets,
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_charon_src_app_portal_modules_assets_pages_index_ts-shared_components_button-b18e2f"), __webpack_require__.e("projects_charon_src_app_portal_modules_index_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules */ 90959)).then((m) => m.AssetsModule),
            },
            {
                path: _portal_route__WEBPACK_IMPORTED_MODULE_2__.PortalRoute.Staking,
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_charon_src_app_portal_modules_assets_pages_index_ts-shared_components_button-b18e2f"), __webpack_require__.e("projects_charon_src_app_portal_modules_index_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules */ 90959)).then((m) => m.StakingModule),
                canActivate: [
                    _core_guards__WEBPACK_IMPORTED_MODULE_0__.BrowserTabGuard,
                ],
            },
            {
                path: _portal_route__WEBPACK_IMPORTED_MODULE_2__.PortalRoute.Vpn,
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_charon_src_app_portal_modules_assets_pages_index_ts-shared_components_button-b18e2f"), __webpack_require__.e("projects_charon_src_app_portal_modules_index_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules */ 90959)).then((m) => m.VpnModule),
            },
            {
                path: _portal_route__WEBPACK_IMPORTED_MODULE_2__.PortalRoute.Loan,
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_charon_src_app_portal_modules_assets_pages_index_ts-shared_components_button-b18e2f"), __webpack_require__.e("projects_charon_src_app_portal_modules_index_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules */ 90959)).then((m) => m.LoanModule),
                canActivate: [
                    _core_guards__WEBPACK_IMPORTED_MODULE_0__.BrowserTabGuard,
                ],
            },
            {
                path: _portal_route__WEBPACK_IMPORTED_MODULE_2__.PortalRoute.Ai,
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_charon_src_app_portal_modules_assets_pages_index_ts-shared_components_button-b18e2f"), __webpack_require__.e("projects_charon_src_app_portal_modules_index_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules */ 90959)).then((m) => m.AiModule),
            },
        ],
    },
    {
        path: '**',
        redirectTo: '',
    },
];
class PortalRoutingModule {
}
PortalRoutingModule.ɵfac = function PortalRoutingModule_Factory(t) { return new (t || PortalRoutingModule)(); };
PortalRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PortalRoutingModule });
PortalRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(ROUTES),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PortalRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 68410:
/*!*********************************************************!*\
  !*** ./projects/charon/src/app/portal/portal.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortalModule": () => (/* binding */ PortalModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 11048);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/clipboard */ 99274);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngneat/svg-icon */ 66722);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngneat/transloco */ 47860);
/* harmony import */ var _shared_components_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/components/button */ 29149);
/* harmony import */ var _shared_components_network_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/components/network-selector */ 76505);
/* harmony import */ var _shared_components_slot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/components/slot */ 83836);
/* harmony import */ var _shared_directives_browser_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/directives/browser-view */ 61349);
/* harmony import */ var _shared_directives_typeface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/directives/typeface */ 2703);
/* harmony import */ var _core_layout_authorized_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/layout/authorized-layout */ 86084);
/* harmony import */ var _portal_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./portal-routing.module */ 66859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _components_portal_navigation_portal_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/portal-navigation/portal-navigation.component */ 59444);
/* harmony import */ var _pages_portal_page_portal_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/portal-page/portal-page.component */ 53150);














class PortalModule {
}
PortalModule.ɵfac = function PortalModule_Factory(t) { return new (t || PortalModule)(); };
PortalModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: PortalModule });
PortalModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_10__.TRANSLOCO_SCOPE,
            useValue: 'portal',
        },
    ], imports: [[
            _core_layout_authorized_layout__WEBPACK_IMPORTED_MODULE_5__.AuthorizedLayoutModule,
            _shared_directives_browser_view__WEBPACK_IMPORTED_MODULE_3__.BrowserViewModule,
            _shared_components_button__WEBPACK_IMPORTED_MODULE_0__.ButtonModule,
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_11__.ClipboardModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _shared_components_network_selector__WEBPACK_IMPORTED_MODULE_1__.NetworkSelectorModule,
            _portal_routing_module__WEBPACK_IMPORTED_MODULE_6__.PortalRoutingModule,
            _shared_components_slot__WEBPACK_IMPORTED_MODULE_2__.SlotModule,
            _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_13__.SvgIconsModule,
            _ngneat_transloco__WEBPACK_IMPORTED_MODULE_10__.TranslocoModule,
            _shared_directives_typeface__WEBPACK_IMPORTED_MODULE_4__.TypefaceModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](PortalModule, { declarations: [_components_portal_navigation_portal_navigation_component__WEBPACK_IMPORTED_MODULE_7__.PortalNavigationComponent, _pages_portal_page_portal_page_component__WEBPACK_IMPORTED_MODULE_8__.PortalPageComponent], imports: [_core_layout_authorized_layout__WEBPACK_IMPORTED_MODULE_5__.AuthorizedLayoutModule,
        _shared_directives_browser_view__WEBPACK_IMPORTED_MODULE_3__.BrowserViewModule,
        _shared_components_button__WEBPACK_IMPORTED_MODULE_0__.ButtonModule,
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_11__.ClipboardModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _shared_components_network_selector__WEBPACK_IMPORTED_MODULE_1__.NetworkSelectorModule,
        _portal_routing_module__WEBPACK_IMPORTED_MODULE_6__.PortalRoutingModule,
        _shared_components_slot__WEBPACK_IMPORTED_MODULE_2__.SlotModule,
        _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_13__.SvgIconsModule,
        _ngneat_transloco__WEBPACK_IMPORTED_MODULE_10__.TranslocoModule,
        _shared_directives_typeface__WEBPACK_IMPORTED_MODULE_4__.TypefaceModule] }); })();


/***/ }),

/***/ 94034:
/*!************************************!*\
  !*** ./shared/svg-icons/wallet.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgWallet": () => (/* binding */ svgWallet)
/* harmony export */ });
const svgWallet = {
    data: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 1C9.80271 1 8 2.80271 8 5C8 5.73067 8.21364 6.40837 8.56055 7H8H6C5.448 7 5 6.551 5 6C5 5.449 5.448 5 6 5C6 4.298 6.12761 3.626 6.34961 3H6C4.346 3 3 4.346 3 6V19C3 20.103 3.897 21 5 21H19C20.103 21 21 20.103 21 19V9C21 8.1846 20.5079 7.4849 19.8066 7.17383C19.9222 6.79987 20 6.40958 20 6C20 3.80267 18.1973 2 16 2C15.5932 2 15.201 2.06745 14.8281 2.18164C14.1024 1.4534 13.1011 1 12 1ZM12 3C13.1164 3 14 3.88359 14 5C14 6.11641 13.1164 7 12 7C10.8836 7 10 6.11641 10 5C10 3.88359 10.8836 3 12 3ZM16 4C17.1167 4 18 4.88333 18 6C18 6.36783 17.8987 6.70636 17.7285 7H15.4395C15.7864 6.40837 16 5.73067 16 5C16 4.65948 15.9427 4.3339 15.8613 4.01758C15.9087 4.01431 15.9515 4 16 4ZM5 8.81641C5.31439 8.92856 5.64761 9 6 9H8H9H19V19H5V8.81641ZM16 13C15.448 13 15 13.448 15 14C15 14.552 15.448 15 16 15C16.552 15 17 14.552 17 14C17 13.448 16.552 13 16 13Z" fill="currentColor"/></svg>`,
    name: 'wallet'
};


/***/ })

}]);