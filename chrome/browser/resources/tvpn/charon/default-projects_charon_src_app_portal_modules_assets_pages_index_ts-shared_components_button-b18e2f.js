"use strict";
(self["webpackChunkcharon"] = self["webpackChunkcharon"] || []).push([["default-projects_charon_src_app_portal_modules_assets_pages_index_ts-shared_components_button-b18e2f"],{

/***/ 26252:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/reduce.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reduce": () => (/* binding */ reduce)
/* harmony export */ });
/* harmony import */ var _scanInternals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scanInternals */ 52049);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 32085);


function reduce(accumulator, seed) {
    return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((0,_scanInternals__WEBPACK_IMPORTED_MODULE_1__.scanInternals)(accumulator, seed, arguments.length >= 2, false, true));
}
//# sourceMappingURL=reduce.js.map

/***/ }),

/***/ 84667:
/*!***************************************************************************!*\
  !*** ./projects/charon/src/app/portal/modules/assets/components/index.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ASSETS_COMPONENTS": () => (/* binding */ ASSETS_COMPONENTS),
/* harmony export */   "TokenComplexTransaction": () => (/* reexport safe */ _token_complex_transaction__WEBPACK_IMPORTED_MODULE_0__.TokenComplexTransaction),
/* harmony export */   "TokenComplexTransactionComponent": () => (/* reexport safe */ _token_complex_transaction__WEBPACK_IMPORTED_MODULE_0__.TokenComplexTransactionComponent),
/* harmony export */   "TokenSingleTransaction": () => (/* reexport safe */ _token_single_transaction__WEBPACK_IMPORTED_MODULE_1__.TokenSingleTransaction),
/* harmony export */   "TokenSingleTransactionComponent": () => (/* reexport safe */ _token_single_transaction__WEBPACK_IMPORTED_MODULE_1__.TokenSingleTransactionComponent),
/* harmony export */   "TokenTransactionsTableComponent": () => (/* reexport safe */ _token_transactions_table__WEBPACK_IMPORTED_MODULE_4__.TokenTransactionsTableComponent)
/* harmony export */ });
/* harmony import */ var _token_complex_transaction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token-complex-transaction */ 61196);
/* harmony import */ var _token_single_transaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token-single-transaction */ 91271);
/* harmony import */ var _token_transaction_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token-transaction-actions */ 85002);
/* harmony import */ var _token_transaction_amount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token-transaction-amount */ 4310);
/* harmony import */ var _token_transactions_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./token-transactions-table */ 67314);





const ASSETS_COMPONENTS = [
    _token_complex_transaction__WEBPACK_IMPORTED_MODULE_0__.TokenComplexTransactionComponent,
    _token_single_transaction__WEBPACK_IMPORTED_MODULE_1__.TokenSingleTransactionComponent,
    _token_transaction_actions__WEBPACK_IMPORTED_MODULE_2__.TokenTransactionActionsComponent,
    _token_transaction_amount__WEBPACK_IMPORTED_MODULE_3__.TokenTransactionAmountComponent,
    _token_transactions_table__WEBPACK_IMPORTED_MODULE_4__.TokenTransactionsTableComponent,
];





/***/ }),

/***/ 61196:
/*!*****************************************************************************************************!*\
  !*** ./projects/charon/src/app/portal/modules/assets/components/token-complex-transaction/index.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenComplexTransaction": () => (/* reexport safe */ _token_complex_transaction__WEBPACK_IMPORTED_MODULE_1__.TokenComplexTransaction),
/* harmony export */   "TokenComplexTransactionComponent": () => (/* reexport safe */ _token_complex_transaction_component__WEBPACK_IMPORTED_MODULE_0__.TokenComplexTransactionComponent)
/* harmony export */ });
/* harmony import */ var _token_complex_transaction_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token-complex-transaction.component */ 46303);
/* harmony import */ var _token_complex_transaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token-complex-transaction */ 7719);




/***/ }),

/***/ 46303:
/*!***********************************************************************************************************************************!*\
  !*** ./projects/charon/src/app/portal/modules/assets/components/token-complex-transaction/token-complex-transaction.component.ts ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenComplexTransactionComponent": () => (/* binding */ TokenComplexTransactionComponent)
/* harmony export */ });
/* harmony import */ var _shared_utils_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/utils/browser */ 94240);
/* harmony import */ var _shared_svg_icons_transaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/svg-icons/transaction */ 66870);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngneat/svg-icon */ 66722);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngneat/transloco */ 47860);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/expansion */ 29072);
/* harmony import */ var _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../shared/directives/typeface/typeface.directive */ 31857);
/* harmony import */ var _shared_directives_text_ellipsis_text_ellipsis_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../shared/directives/text-ellipsis/text-ellipsis.directive */ 50262);
/* harmony import */ var _token_transaction_actions_token_transaction_actions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../token-transaction-actions/token-transaction-actions.component */ 94441);
/* harmony import */ var _token_transaction_amount_token_transaction_amount_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../token-transaction-amount/token-transaction-amount.component */ 7723);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 11048);
/* harmony import */ var _shared_components_currency_symbol_component_currency_symbol_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../../shared/components/currency-symbol/component/currency-symbol.component */ 56693);
/* harmony import */ var _token_single_transaction_token_single_transaction_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../token-single-transaction/token-single-transaction.component */ 13826);
/* harmony import */ var _shared_pipes_number_format_number_format_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../../../shared/pipes/number-format/number-format.pipe */ 17667);
/* harmony import */ var _shared_pipes_micro_value_micro_value_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../../../shared/pipes/micro-value/micro-value.pipe */ 30087);















function TokenComplexTransactionComponent_mat_expansion_panel_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "numberFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "microValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "app-currency-symbol");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const translate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", translate_r1("fee"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind3"](2, 2, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 6, ctx_r2.transaction.fee), null, true), " ");
} }
function TokenComplexTransactionComponent_mat_expansion_panel_0_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const translate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", translate_r1("memo"), ": ", ctx_r3.transaction.comment, " ");
} }
function TokenComplexTransactionComponent_mat_expansion_panel_0_ng_template_12_app_token_single_transaction_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-token-single-transaction", 16);
} if (rf & 2) {
    const message_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("transaction", message_r8);
} }
function TokenComplexTransactionComponent_mat_expansion_panel_0_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, TokenComplexTransactionComponent_mat_expansion_panel_0_ng_template_12_app_token_single_transaction_0_Template, 1, 1, "app-token-single-transaction", 15);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r4.transaction.messages);
} }
function TokenComplexTransactionComponent_mat_expansion_panel_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-expansion-panel", 1)(1, "mat-expansion-panel-header", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "svg-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 5)(5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "app-token-transactions-actions", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "app-token-transaction-amount", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, TokenComplexTransactionComponent_mat_expansion_panel_0_div_10_Template, 5, 8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, TokenComplexTransactionComponent_mat_expansion_panel_0_div_11_Template, 2, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, TokenComplexTransactionComponent_mat_expansion_panel_0_ng_template_12_Template, 1, 1, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const translate_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r0.isOpenedInPopup ? translate_r1("composite_tx") : translate_r1("composite_transaction"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("txhash", ctx_r0.transaction.hash);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("amount", ctx_r0.transaction.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.transaction.fee);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.transaction.comment);
} }
class TokenComplexTransactionComponent {
    constructor(svgIconRegistry) {
        this.svgIconRegistry = svgIconRegistry;
        this.isOpenedInPopup = !(0,_shared_utils_browser__WEBPACK_IMPORTED_MODULE_0__.isOpenedInTab)();
    }
    ngOnInit() {
        this.svgIconRegistry.register([
            _shared_svg_icons_transaction__WEBPACK_IMPORTED_MODULE_1__.svgTransaction,
        ]);
    }
}
TokenComplexTransactionComponent.ɵfac = function TokenComplexTransactionComponent_Factory(t) { return new (t || TokenComplexTransactionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_11__.SvgIconRegistry)); };
TokenComplexTransactionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: TokenComplexTransactionComponent, selectors: [["app-token-complex-transaction"]], inputs: { transaction: "transaction" }, decls: 1, vars: 1, consts: [["class", "token-complex-transaction__panel mat-elevation-z", 4, "transloco", "translocoRead"], [1, "token-complex-transaction__panel", "mat-elevation-z"], [1, "token-complex-transaction__panel-header"], [1, "token-complex-transaction__header"], ["key", "transaction", 1, "token-complex-transaction__icon"], ["appTypeface", "paragraph", "appTextEllipsis", "", 1, "token-complex-transaction__operation"], ["appTextEllipsis", ""], [3, "txhash"], ["appTypeface", "paragraph", 1, "token-complex-transaction__amount"], [3, "amount"], ["class", "token-complex-transaction__fee", "appTypeface", "caption", 4, "ngIf"], ["class", "token-complex-transaction__memo", "appTypeface", "caption", 4, "ngIf"], ["matExpansionPanelContent", ""], ["appTypeface", "caption", 1, "token-complex-transaction__fee"], ["appTypeface", "caption", 1, "token-complex-transaction__memo"], ["class", "token-complex-transaction__transaction", 3, "transaction", 4, "ngFor", "ngForOf"], [1, "token-complex-transaction__transaction", 3, "transaction"]], template: function TokenComplexTransactionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, TokenComplexTransactionComponent_mat_expansion_panel_0_Template, 13, 5, "mat-expansion-panel", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("translocoRead", "portal.token_transactions_table");
    } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_12__.TranslocoDirective, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatExpansionPanelHeader, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_11__.SvgIconComponent, _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_2__.TypefaceDirective, _shared_directives_text_ellipsis_text_ellipsis_directive__WEBPACK_IMPORTED_MODULE_3__.TextEllipsisDirective, _token_transaction_actions_token_transaction_actions_component__WEBPACK_IMPORTED_MODULE_4__.TokenTransactionActionsComponent, _token_transaction_amount_token_transaction_amount_component__WEBPACK_IMPORTED_MODULE_5__.TokenTransactionAmountComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _shared_components_currency_symbol_component_currency_symbol_component__WEBPACK_IMPORTED_MODULE_6__.CurrencySymbolComponent, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatExpansionPanelContent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _token_single_transaction_token_single_transaction_component__WEBPACK_IMPORTED_MODULE_7__.TokenSingleTransactionComponent], pipes: [_shared_pipes_number_format_number_format_pipe__WEBPACK_IMPORTED_MODULE_8__.NumberFormatPipe, _shared_pipes_micro_value_micro_value_pipe__WEBPACK_IMPORTED_MODULE_9__.MicroValuePipe], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]     .mat-expansion-panel-body {\n  padding: 0 0 0 8px;\n}\n.token-complex-transaction__panel-header[_ngcontent-%COMP%] {\n  height: auto;\n  padding-left: 0;\n}\n.token-complex-transaction__header[_ngcontent-%COMP%] {\n  color: var(--color-main-text);\n  grid-column-gap: 8px;\n  column-gap: 8px;\n  display: grid;\n  grid-template-areas: \"icon operation amount\" \"empty address fee\" \"empty memo memo\";\n  grid-template-columns: min-content 1fr max-content;\n  padding: 12px 16px;\n  grid-row-gap: 4px;\n  row-gap: 4px;\n  width: 100%;\n}\n.token-complex-transaction__icon[_ngcontent-%COMP%] {\n  color: var(--color-dportal-assets-page-token-complex-transaction-icon);\n  grid-area: icon;\n}\n.token-complex-transaction__operation[_ngcontent-%COMP%] {\n  column-gap: 8px;\n  display: flex;\n  font-weight: 500;\n  grid-area: operation;\n}\n.token-complex-transaction__amount[_ngcontent-%COMP%] {\n  grid-area: amount;\n  text-align: right;\n}\n.token-complex-transaction__fee[_ngcontent-%COMP%] {\n  color: var(--color-dportal-assets-page-token-complex-transaction-fee);\n  grid-area: fee;\n  text-align: right;\n}\n.token-complex-transaction__memo[_ngcontent-%COMP%] {\n  color: var(--color-dportal-assets-page-token-complex-transaction-memo);\n  grid-area: memo;\n}\n.token-complex-transaction__transaction[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--color-outlines);\n}"], changeDetection: 0 });


/***/ }),

/***/ 7719:
/*!*************************************************************************************************************************!*\
  !*** ./projects/charon/src/app/portal/modules/assets/components/token-complex-transaction/token-complex-transaction.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenComplexTransaction": () => (/* binding */ TokenComplexTransaction)
/* harmony export */ });
class TokenComplexTransaction {
    constructor(hash, height, fee, amount, messages, comment) {
        this.hash = hash;
        this.height = height;
        this.fee = fee;
        this.amount = amount;
        this.messages = messages;
        this.comment = comment;
    }
}


/***/ }),

/***/ 91271:
/*!****************************************************************************************************!*\
  !*** ./projects/charon/src/app/portal/modules/assets/components/token-single-transaction/index.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenSingleTransaction": () => (/* reexport safe */ _token_single_transaction__WEBPACK_IMPORTED_MODULE_1__.TokenSingleTransaction),
/* harmony export */   "TokenSingleTransactionComponent": () => (/* reexport safe */ _token_single_transaction_component__WEBPACK_IMPORTED_MODULE_0__.TokenSingleTransactionComponent)
/* harmony export */ });
/* harmony import */ var _token_single_transaction_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token-single-transaction.component */ 13826);
/* harmony import */ var _token_single_transaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token-single-transaction */ 60123);




/***/ }),

/***/ 13826:
/*!*********************************************************************************************************************************!*\
  !*** ./projects/charon/src/app/portal/modules/assets/components/token-single-transaction/token-single-transaction.component.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenSingleTransactionComponent": () => (/* binding */ TokenSingleTransactionComponent)
/* harmony export */ });
/* harmony import */ var decentr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! decentr-js */ 14000);
/* harmony import */ var decentr_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(decentr_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_svg_icons_copy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/svg-icons/copy */ 20055);
/* harmony import */ var _shared_svg_icons_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/svg-icons/link */ 40329);
/* harmony import */ var _shared_svg_icons_receive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/svg-icons/receive */ 21437);
/* harmony import */ var _shared_svg_icons_send__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/svg-icons/send */ 5507);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngneat/svg-icon */ 66722);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngneat/transloco */ 47860);
/* harmony import */ var _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../../shared/directives/typeface/typeface.directive */ 31857);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 11048);
/* harmony import */ var _token_transaction_actions_token_transaction_actions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../token-transaction-actions/token-transaction-actions.component */ 94441);
/* harmony import */ var _token_transaction_amount_token_transaction_amount_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../token-transaction-amount/token-transaction-amount.component */ 7723);
/* harmony import */ var _shared_directives_text_ellipsis_text_ellipsis_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../../../shared/directives/text-ellipsis/text-ellipsis.directive */ 50262);
/* harmony import */ var _shared_components_currency_symbol_component_currency_symbol_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../../../shared/components/currency-symbol/component/currency-symbol.component */ 56693);
/* harmony import */ var _shared_pipes_number_format_number_format_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../../../shared/pipes/number-format/number-format.pipe */ 17667);
/* harmony import */ var _shared_pipes_micro_value_micro_value_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../../../shared/pipes/micro-value/micro-value.pipe */ 30087);
















function TokenSingleTransactionComponent_div_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const translate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", translate_r1(ctx_r2.transaction.amount < 0 ? "sent" : "received"), " ");
} }
function TokenSingleTransactionComponent_div_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const translate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", translate_r1("delegated"), " ");
} }
function TokenSingleTransactionComponent_div_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const translate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", translate_r1("undelegated"), " ");
} }
function TokenSingleTransactionComponent_div_0_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const translate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", translate_r1("withdraw"), " ");
} }
function TokenSingleTransactionComponent_div_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const translate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", translate_r1("withdraw_validator"), " ");
} }
function TokenSingleTransactionComponent_div_0_app_token_transactions_actions_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "app-token-transactions-actions", 12);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("txhash", ctx_r7.transaction.hash);
} }
function TokenSingleTransactionComponent_div_0_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const translate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" ", translate_r1("to"), ": ", ctx_r8.transaction.recipient, " ");
} }
function TokenSingleTransactionComponent_div_0_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const translate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" ", translate_r1("from"), ": ", ctx_r9.transaction.sender, " ");
} }
function TokenSingleTransactionComponent_div_0_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "numberFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "microValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "app-currency-symbol");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const translate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" ", translate_r1("fee"), " : ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind3"](2, 2, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 6, ctx_r10.transaction.fee), null, true), " ");
} }
function TokenSingleTransactionComponent_div_0_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const translate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" ", translate_r1("memo"), ": ", ctx_r11.transaction.comment, " ");
} }
function TokenSingleTransactionComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "svg-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, TokenSingleTransactionComponent_div_0_ng_container_4_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, TokenSingleTransactionComponent_div_0_ng_container_5_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, TokenSingleTransactionComponent_div_0_ng_container_6_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, TokenSingleTransactionComponent_div_0_ng_container_7_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, TokenSingleTransactionComponent_div_0_ng_container_8_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, TokenSingleTransactionComponent_div_0_app_token_transactions_actions_9_Template, 1, 1, "app-token-transactions-actions", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](10, "app-token-transaction-amount", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, TokenSingleTransactionComponent_div_0_ng_container_12_Template, 2, 2, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](13, TokenSingleTransactionComponent_div_0_ng_container_13_Template, 2, 2, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](14, TokenSingleTransactionComponent_div_0_div_14_Template, 5, 8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](15, TokenSingleTransactionComponent_div_0_div_15_Template, 2, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("color-negative", ctx_r0.transaction.amount < 0)("color-positive", ctx_r0.transaction.amount >= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("key", ctx_r0.transaction.amount > 0 ? "receive" : "send");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngSwitch", ctx_r0.transaction.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngSwitchCase", ctx_r0.messageType.BankSend);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngSwitchCase", ctx_r0.messageType.StakingDelegate);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngSwitchCase", ctx_r0.messageType.StakingUndelegate);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngSwitchCase", ctx_r0.messageType.DistributionWithdrawDelegatorReward);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngSwitchCase", ctx_r0.messageType.DistributionWithdrawValidatorCommission);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.transaction.hash);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("amount", ctx_r0.transaction.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.transaction.amount < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.transaction.amount >= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.transaction.fee);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.transaction.comment);
} }
class TokenSingleTransactionComponent {
    constructor(svgIconRegistry) {
        this.svgIconRegistry = svgIconRegistry;
        this.messageType = decentr_js__WEBPACK_IMPORTED_MODULE_0__.TxMessageTypeUrl;
        svgIconRegistry.register([
            _shared_svg_icons_copy__WEBPACK_IMPORTED_MODULE_1__.svgCopy,
            _shared_svg_icons_link__WEBPACK_IMPORTED_MODULE_2__.svgLink,
            _shared_svg_icons_receive__WEBPACK_IMPORTED_MODULE_3__.svgReceive,
            _shared_svg_icons_send__WEBPACK_IMPORTED_MODULE_4__.svgSend,
        ]);
    }
}
TokenSingleTransactionComponent.ɵfac = function TokenSingleTransactionComponent_Factory(t) { return new (t || TokenSingleTransactionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_13__.SvgIconRegistry)); };
TokenSingleTransactionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: TokenSingleTransactionComponent, selectors: [["app-token-single-transaction"]], inputs: { transaction: "transaction" }, decls: 1, vars: 1, consts: [["class", "token-transaction", "appTypeface", "paragraph", 4, "transloco", "translocoRead"], ["appTypeface", "paragraph", 1, "token-transaction"], [1, "token-transaction__icon", 3, "key"], [1, "token-transaction__operation"], [3, "ngSwitch"], [4, "ngSwitchCase"], [3, "txhash", 4, "ngIf"], [1, "token-transaction__amount", 3, "amount"], ["appTextEllipsis", "", "appTypeface", "caption", 1, "token-transaction__address"], [4, "ngIf"], ["class", "token-transaction__fee", "appTypeface", "caption", 4, "ngIf"], ["class", "token-transaction__memo", "appTypeface", "caption", 4, "ngIf"], [3, "txhash"], ["appTypeface", "caption", 1, "token-transaction__fee"], ["appTypeface", "caption", 1, "token-transaction__memo"]], template: function TokenSingleTransactionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, TokenSingleTransactionComponent_div_0_Template, 16, 17, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("translocoRead", "portal.token_transactions_table");
    } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_14__.TranslocoDirective, _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_5__.TypefaceDirective, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_13__.SvgIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _token_transaction_actions_token_transaction_actions_component__WEBPACK_IMPORTED_MODULE_6__.TokenTransactionActionsComponent, _token_transaction_amount_token_transaction_amount_component__WEBPACK_IMPORTED_MODULE_7__.TokenTransactionAmountComponent, _shared_directives_text_ellipsis_text_ellipsis_directive__WEBPACK_IMPORTED_MODULE_8__.TextEllipsisDirective, _shared_components_currency_symbol_component_currency_symbol_component__WEBPACK_IMPORTED_MODULE_9__.CurrencySymbolComponent], pipes: [_shared_pipes_number_format_number_format_pipe__WEBPACK_IMPORTED_MODULE_10__.NumberFormatPipe, _shared_pipes_micro_value_micro_value_pipe__WEBPACK_IMPORTED_MODULE_11__.MicroValuePipe], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.token-transaction[_ngcontent-%COMP%] {\n  color: var(--color-main-text);\n  grid-column-gap: 8px;\n  column-gap: 8px;\n  display: grid;\n  grid-template-areas: \"icon operation amount\" \"empty address fee\" \"empty memo memo\";\n  grid-template-columns: min-content 1fr max-content;\n  padding: 12px 16px;\n  grid-row-gap: 4px;\n  row-gap: 4px;\n}\n\n.token-transaction__operation[_ngcontent-%COMP%] {\n  column-gap: 8px;\n  display: flex;\n  font-weight: 500;\n  grid-area: operation;\n}\n\n.token-transaction__icon[_ngcontent-%COMP%] {\n  grid-area: icon;\n}\n\n.token-transaction__amount[_ngcontent-%COMP%] {\n  grid-area: amount;\n  text-align: right;\n}\n\n.token-transaction__address[_ngcontent-%COMP%] {\n  color: var(--color-dportal-assets-page-token-transaction-address);\n  grid-area: address;\n}\n\n.token-transaction__fee[_ngcontent-%COMP%] {\n  color: var(--color-dportal-assets-page-token-transaction-fee);\n  grid-area: fee;\n  text-align: right;\n}\n\n.token-transaction__memo[_ngcontent-%COMP%] {\n  color: var(--color-dportal-assets-page-token-transaction-memo);\n  grid-area: memo;\n}"], changeDetection: 0 });


/***/ }),

/***/ 60123:
/*!***********************************************************************************************************************!*\
  !*** ./projects/charon/src/app/portal/modules/assets/components/token-single-transaction/token-single-transaction.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenSingleTransaction": () => (/* binding */ TokenSingleTransaction)
/* harmony export */ });
class TokenSingleTransaction {
    constructor(type, hash, height, fee, amount, recipient, sender, comment) {
        this.type = type;
        this.hash = hash;
        this.height = height;
        this.fee = fee;
        this.amount = amount;
        this.recipient = recipient;
        this.sender = sender;
        this.comment = comment;
    }
}


/***/ }),

/***/ 85002:
/*!*****************************************************************************************************!*\
  !*** ./projects/charon/src/app/portal/modules/assets/components/token-transaction-actions/index.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenTransactionActionsComponent": () => (/* reexport safe */ _token_transaction_actions_component__WEBPACK_IMPORTED_MODULE_0__.TokenTransactionActionsComponent)
/* harmony export */ });
/* harmony import */ var _token_transaction_actions_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token-transaction-actions.component */ 94441);



/***/ }),

/***/ 94441:
/*!***********************************************************************************************************************************!*\
  !*** ./projects/charon/src/app/portal/modules/assets/components/token-transaction-actions/token-transaction-actions.component.ts ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenTransactionActionsComponent": () => (/* binding */ TokenTransactionActionsComponent)
/* harmony export */ });
/* harmony import */ var _shared_svg_icons_copy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/svg-icons/copy */ 20055);
/* harmony import */ var _shared_svg_icons_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/svg-icons/link */ 40329);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _shared_services_notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/notification */ 86333);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/svg-icon */ 66722);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngneat/transloco */ 47860);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/clipboard */ 99274);
/* harmony import */ var _directives_transaction_link_transaction_link_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/transaction-link/transaction-link.directive */ 22099);








function TokenTransactionActionsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cdkCopyToClipboardCopied", function TokenTransactionActionsComponent_ng_container_0_Template_div_cdkCopyToClipboardCopied_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r2.onTxHashCopied(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "svg-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "svg-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const translate_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cdkCopyToClipboard", ctx_r0.txhash)("title", translate_r1("copy_tx"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("appTransactionLink", ctx_r0.txhash)("title", translate_r1("open_link"));
} }
class TokenTransactionActionsComponent {
    constructor(notificationService, svgIconRegistry, translocoService) {
        this.notificationService = notificationService;
        this.svgIconRegistry = svgIconRegistry;
        this.translocoService = translocoService;
    }
    ngOnInit() {
        this.svgIconRegistry.register([
            _shared_svg_icons_copy__WEBPACK_IMPORTED_MODULE_0__.svgCopy,
            _shared_svg_icons_link__WEBPACK_IMPORTED_MODULE_1__.svgLink,
        ]);
    }
    onHostClick(event) {
        event.cancelBubble = true;
    }
    onTxHashCopied() {
        this.notificationService.success(this.translocoService.translate('token_transactions_table.wallet_address_copied', null, 'portal'));
    }
}
TokenTransactionActionsComponent.ɵfac = function TokenTransactionActionsComponent_Factory(t) { return new (t || TokenTransactionActionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_notification__WEBPACK_IMPORTED_MODULE_2__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_5__.SvgIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngneat_transloco__WEBPACK_IMPORTED_MODULE_6__.TranslocoService)); };
TokenTransactionActionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TokenTransactionActionsComponent, selectors: [["app-token-transactions-actions"]], hostBindings: function TokenTransactionActionsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TokenTransactionActionsComponent_click_HostBindingHandler($event) { return ctx.onHostClick($event); });
    } }, inputs: { txhash: "txhash" }, decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], [1, "token-transaction-actions__action", 3, "cdkCopyToClipboard", "title", "cdkCopyToClipboardCopied"], ["key", "copy", "size", "xs"], [1, "token-transaction-actions__action", 3, "appTransactionLink", "title"], ["key", "link", "size", "xs"]], template: function TokenTransactionActionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, TokenTransactionActionsComponent_ng_container_0_Template, 5, 4, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("translocoRead", "portal.token_transactions_table");
    } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_6__.TranslocoDirective, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_7__.CdkCopyToClipboard, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_5__.SvgIconComponent, _directives_transaction_link_transaction_link_directive__WEBPACK_IMPORTED_MODULE_3__.TransactionLinkDirective], styles: ["[_nghost-%COMP%] {\n  align-items: center;\n  display: flex;\n  column-gap: 4px;\n}\n\n.token-transaction-actions__action[_ngcontent-%COMP%] {\n  align-items: center;\n  background-color: var(--color-dportal-assets-page-token-transactions-action-background);\n  border-radius: 8px;\n  color: var(--color-dportal-assets-page-token-transactions-action);\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  padding: 4px;\n}"], changeDetection: 0 });


/***/ }),

/***/ 4310:
/*!****************************************************************************************************!*\
  !*** ./projects/charon/src/app/portal/modules/assets/components/token-transaction-amount/index.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenTransactionAmountComponent": () => (/* reexport safe */ _token_transaction_amount_component__WEBPACK_IMPORTED_MODULE_0__.TokenTransactionAmountComponent)
/* harmony export */ });
/* harmony import */ var _token_transaction_amount_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token-transaction-amount.component */ 7723);



/***/ }),

/***/ 7723:
/*!*********************************************************************************************************************************!*\
  !*** ./projects/charon/src/app/portal/modules/assets/components/token-transaction-amount/token-transaction-amount.component.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenTransactionAmountComponent": () => (/* binding */ TokenTransactionAmountComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _shared_components_currency_symbol_component_currency_symbol_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../shared/components/currency-symbol/component/currency-symbol.component */ 56693);
/* harmony import */ var _shared_pipes_number_format_number_format_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../shared/pipes/number-format/number-format.pipe */ 17667);
/* harmony import */ var _shared_pipes_micro_value_micro_value_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../shared/pipes/micro-value/micro-value.pipe */ 30087);




class TokenTransactionAmountComponent {
    get colorClass() {
        return +this.amount >= 0 ? 'color-positive' : 'color-negative';
    }
}
TokenTransactionAmountComponent.ɵfac = function TokenTransactionAmountComponent_Factory(t) { return new (t || TokenTransactionAmountComponent)(); };
TokenTransactionAmountComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TokenTransactionAmountComponent, selectors: [["app-token-transaction-amount"]], hostVars: 2, hostBindings: function TokenTransactionAmountComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.colorClass);
    } }, inputs: { amount: "amount" }, decls: 4, vars: 7, template: function TokenTransactionAmountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "numberFormat");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "microValue");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-currency-symbol");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](1, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 5, ctx.amount), null, true), "\n");
    } }, directives: [_shared_components_currency_symbol_component_currency_symbol_component__WEBPACK_IMPORTED_MODULE_0__.CurrencySymbolComponent], pipes: [_shared_pipes_number_format_number_format_pipe__WEBPACK_IMPORTED_MODULE_1__.NumberFormatPipe, _shared_pipes_micro_value_micro_value_pipe__WEBPACK_IMPORTED_MODULE_2__.MicroValuePipe], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"], changeDetection: 0 });


/***/ }),

/***/ 67314:
/*!****************************************************************************************************!*\
  !*** ./projects/charon/src/app/portal/modules/assets/components/token-transactions-table/index.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenTransactionsTableComponent": () => (/* reexport safe */ _token_transactions_table_component__WEBPACK_IMPORTED_MODULE_0__.TokenTransactionsTableComponent)
/* harmony export */ });
/* harmony import */ var _token_transactions_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token-transactions-table.component */ 23973);
/* harmony import */ var _token_transactions_table_definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token-transactions-table.definitions */ 23492);




/***/ }),

/***/ 23973:
/*!*********************************************************************************************************************************!*\
  !*** ./projects/charon/src/app/portal/modules/assets/components/token-transactions-table/token-transactions-table.component.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenTransactionsTableComponent": () => (/* binding */ TokenTransactionsTableComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var _shared_utils_group_by__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/utils/group-by */ 56388);
/* harmony import */ var _token_complex_transaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../token-complex-transaction */ 61196);
/* harmony import */ var _token_single_transaction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../token-single-transaction */ 91271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services */ 88718);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngneat/transloco */ 47860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 11048);
/* harmony import */ var _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../../shared/directives/typeface/typeface.directive */ 31857);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-skeleton-loader */ 47443);
/* harmony import */ var _token_single_transaction_token_single_transaction_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../token-single-transaction/token-single-transaction.component */ 13826);
/* harmony import */ var _token_complex_transaction_token_complex_transaction_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../token-complex-transaction/token-complex-transaction.component */ 46303);












function TokenTransactionsTableComponent_ng_container_0_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TokenTransactionsTableComponent_ng_container_0_div_1_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9); const group_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r7.heightTime.add(group_r3.height); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const translate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", translate_r1("show_date_time"), " ");
} }
function TokenTransactionsTableComponent_ng_container_0_div_1_div_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const groupTime_r14 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, groupTime_r14, "d MMM yyyy, HH:mm"), " ");
} }
const _c0 = function () { return { height: "16px", marginBottom: "0", width: "105px" }; };
function TokenTransactionsTableComponent_ng_container_0_div_1_div_6_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ngx-skeleton-loader", 12);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c0));
} }
function TokenTransactionsTableComponent_ng_container_0_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TokenTransactionsTableComponent_ng_container_0_div_1_div_6_ng_container_1_Template, 3, 4, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, TokenTransactionsTableComponent_ng_container_0_div_1_div_6_ng_template_3_Template, 1, 2, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](4);
    const group_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 2, group_r3.time))("ngIfElse", _r12);
} }
function TokenTransactionsTableComponent_ng_container_0_div_1_div_7_app_token_single_transaction_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-token-single-transaction", 15);
} if (rf & 2) {
    const transaction_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("transaction", transaction_r16);
} }
function TokenTransactionsTableComponent_ng_container_0_div_1_div_7_app_token_complex_transaction_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-token-complex-transaction", 15);
} if (rf & 2) {
    const transaction_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("transaction", transaction_r16);
} }
function TokenTransactionsTableComponent_ng_container_0_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TokenTransactionsTableComponent_ng_container_0_div_1_div_7_app_token_single_transaction_1_Template, 1, 1, "app-token-single-transaction", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TokenTransactionsTableComponent_ng_container_0_div_1_div_7_app_token_complex_transaction_2_Template, 1, 1, "app-token-complex-transaction", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const transaction_r16 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r6.isSingleTransaction(transaction_r16));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r6.isComplexTransaction(transaction_r16));
} }
function TokenTransactionsTableComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, TokenTransactionsTableComponent_ng_container_0_div_1_div_5_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, TokenTransactionsTableComponent_ng_container_0_div_1_div_6_Template, 5, 4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, TokenTransactionsTableComponent_ng_container_0_div_1_div_7_Template, 3, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r3 = ctx.$implicit;
    const translate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", translate_r1("height"), ": ", group_r3.height, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r2.heightTime.has(group_r3.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.heightTime.has(group_r3.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", group_r3.items);
} }
function TokenTransactionsTableComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TokenTransactionsTableComponent_ng_container_0_div_1_Template, 8, 5, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.groups)("ngForTrackBy", ctx_r0.trackByHeight);
} }
class TokenTransactionsTableComponent {
    constructor(blocksService) {
        this.blocksService = blocksService;
        this.heightTime = new Set();
        this.trackByHeight = ({}, group) => group.height;
    }
    set transactions(value) {
        this.groups = (0,_shared_utils_group_by__WEBPACK_IMPORTED_MODULE_0__.groupBy)(value || [], 'height').map((group) => ({
            items: group.items,
            height: group.key,
            time: this.getTimeByHeight(group.key),
        }));
    }
    getTimeByHeight(height) {
        return this.blocksService.getBlock(height).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)((block) => block.header.time));
    }
    isSingleTransaction(transaction) {
        return transaction instanceof _token_single_transaction__WEBPACK_IMPORTED_MODULE_2__.TokenSingleTransaction;
    }
    isComplexTransaction(transaction) {
        return transaction instanceof _token_complex_transaction__WEBPACK_IMPORTED_MODULE_1__.TokenComplexTransaction;
    }
}
TokenTransactionsTableComponent.ɵfac = function TokenTransactionsTableComponent_Factory(t) { return new (t || TokenTransactionsTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_3__.BlocksService)); };
TokenTransactionsTableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: TokenTransactionsTableComponent, selectors: [["app-token-transactions-table"]], inputs: { transactions: "transactions" }, decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["appTypeface", "caption", 1, "token-transactions-table__group-header"], [1, "token-transactions-table__group-header__height"], [1, "token-transactions-table__group-header__date"], ["class", "token-transactions-table__group-header__date-button", 3, "click", 4, "ngIf"], ["class", "token-transactions-table__group-header__date-value", 4, "ngIf"], ["appTypeface", "paragraph", "class", "token-transactions-table__transaction", 4, "ngFor", "ngForOf"], [1, "token-transactions-table__group-header__date-button", 3, "click"], [1, "token-transactions-table__group-header__date-value"], [4, "ngIf", "ngIfElse"], ["groupTimeLoading", ""], [1, "token-transactions-table__group-header__date__skeleton-loader", 3, "theme"], ["appTypeface", "paragraph", 1, "token-transactions-table__transaction"], [3, "transaction", 4, "ngIf"], [3, "transaction"]], template: function TokenTransactionsTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, TokenTransactionsTableComponent_ng_container_0_Template, 2, 2, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("translocoRead", "portal.token_transactions_table");
    } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_9__.TranslocoDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_4__.TypefaceDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_11__.NgxSkeletonLoaderComponent, _token_single_transaction_token_single_transaction_component__WEBPACK_IMPORTED_MODULE_5__.TokenSingleTransactionComponent, _token_complex_transaction_token_complex_transaction_component__WEBPACK_IMPORTED_MODULE_6__.TokenComplexTransactionComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.token-transactions-table__group-header[_ngcontent-%COMP%] {\n  background-color: var(--color-dportal-assets-page-table-header-background);\n  column-gap: 8px;\n  display: flex;\n  padding: 8px 16px;\n}\n\n.token-transactions-table__group-header[_ngcontent-%COMP%]:hover   .token-transactions-table__group-header__date-button[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.token-transactions-table__group-header__height[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.token-transactions-table__group-header__date[_ngcontent-%COMP%] {\n  color: var(--color-dportal-assets-page-table-header-date-value);\n}\n\n.token-transactions-table__group-header__date-button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: opacity 0.15s ease;\n  opacity: 0;\n}\n\n.token-transactions-table__group-header__date-value[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\n.token-transactions-table__group-header__date__skeleton-loader[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.token-transactions-table__transaction[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--color-outlines);\n}\n\n.token-transactions-table__transaction[_ngcontent-%COMP%]:last-child {\n  border: none;\n}"], changeDetection: 0 });


/***/ }),

/***/ 23492:
/*!***********************************************************************************************************************************!*\
  !*** ./projects/charon/src/app/portal/modules/assets/components/token-transactions-table/token-transactions-table.definitions.ts ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 22099:
/*!*****************************************************************************************************************!*\
  !*** ./projects/charon/src/app/portal/modules/assets/directives/transaction-link/transaction-link.directive.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionLinkDirective": () => (/* binding */ TransactionLinkDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5557);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 15696);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/until-destroy */ 78177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _environments_environment_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @environments/environment.definitions */ 41380);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services */ 88718);







let TransactionLinkDirective = class TransactionLinkDirective {
    constructor(elementRef, environment, networkSelectorService, renderer) {
        this.elementRef = elementRef;
        this.environment = environment;
        this.networkSelectorService = networkSelectorService;
        this.renderer = renderer;
        this.transactionIdSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.ReplaySubject(1);
    }
    set appTransactionLink(value) {
        this.transactionIdSource.next(value);
    }
    ngOnInit() {
        this.renderer.setAttribute(this.elementRef.nativeElement, 'target', '_blank');
        (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.combineLatest)([
            this.networkSelectorService.getActiveNetwork(),
            this.transactionIdSource,
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(([network, transactionId]) => `${this.environment.explorer}/transactions/${transactionId}?networkId=${network.id}`), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.untilDestroyed)(this)).subscribe((src) => {
            this.renderer.setAttribute(this.elementRef.nativeElement, 'href', src);
        });
    }
};
TransactionLinkDirective.ɵfac = function TransactionLinkDirective_Factory(t) { return new (t || TransactionLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_environments_environment_definitions__WEBPACK_IMPORTED_MODULE_0__.Environment), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_1__.NetworkSelectorService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Renderer2)); };
TransactionLinkDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({ type: TransactionLinkDirective, selectors: [["a", "appTransactionLink", ""]], inputs: { appTransactionLink: "appTransactionLink" } });
TransactionLinkDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.UntilDestroy)()
], TransactionLinkDirective);



/***/ }),

/***/ 23654:
/*!**************************************************************************************************!*\
  !*** ./projects/charon/src/app/portal/modules/assets/pages/assets-page/assets-page.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssetsPageComponent": () => (/* binding */ AssetsPageComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 84945);
/* harmony import */ var _shared_svg_icons_add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/svg-icons/add */ 85249);
/* harmony import */ var _shared_svg_icons_send__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/svg-icons/send */ 5507);
/* harmony import */ var _shared_utils_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/utils/browser */ 94240);
/* harmony import */ var _shared_utils_infinite_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/utils/infinite-loading */ 67056);
/* harmony import */ var _portal_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../portal-route */ 81716);
/* harmony import */ var _assets_page_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets-page.service */ 23221);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 45113);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngneat/svg-icon */ 66722);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngneat/transloco */ 47860);
/* harmony import */ var _shared_components_expansion_list_expansion_list_expansion_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../../shared/components/expansion-list/expansion-list/expansion-list.component */ 88349);
/* harmony import */ var _shared_directives_intersection_intersection_area_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../../../shared/directives/intersection/intersection-area.directive */ 49181);
/* harmony import */ var _shared_components_expansion_list_expansion_list_column_expansion_list_column_def_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../../../shared/components/expansion-list/expansion-list-column/expansion-list-column-def.directive */ 88978);
/* harmony import */ var _shared_components_expansion_list_expansion_list_header_cell_expansion_list_header_cell_def_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../../../shared/components/expansion-list/expansion-list-header-cell/expansion-list-header-cell-def.directive */ 41310);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../../../shared/components/button/button.component */ 4013);
/* harmony import */ var _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../../../shared/directives/typeface/typeface.directive */ 31857);
/* harmony import */ var _shared_directives_browser_view_browser_popup_view_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../../../shared/directives/browser-view/browser-popup-view.directive */ 88431);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 11048);
/* harmony import */ var _shared_components_expansion_list_expansion_list_cell_expansion_list_cell_def_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../../../shared/components/expansion-list/expansion-list-cell/expansion-list-cell-def.directive */ 93068);
/* harmony import */ var _shared_components_expansion_list_expansion_list_loading_expansion_list_loading_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../../../shared/components/expansion-list/expansion-list-loading/expansion-list-loading.directive */ 98762);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-skeleton-loader */ 47443);
/* harmony import */ var _shared_directives_browser_view_browser_tab_view_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../../../shared/directives/browser-view/browser-tab-view.directive */ 59896);
/* harmony import */ var _components_token_transactions_table_token_transactions_table_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/token-transactions-table/token-transactions-table.component */ 23973);
/* harmony import */ var _shared_components_currency_symbol_pipe_currency_symbol_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../../../../shared/components/currency-symbol/pipe/currency-symbol.pipe */ 3901);
/* harmony import */ var _shared_pipes_number_format_number_format_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../../../../shared/pipes/number-format/number-format.pipe */ 17667);
/* harmony import */ var _shared_pipes_micro_value_micro_value_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../../../../../shared/pipes/micro-value/micro-value.pipe */ 30087);




























function AssetsPageComponent_app_expansion_list_0_div_3_ng_container_6_ng_template_1_Template(rf, ctx) { }
function AssetsPageComponent_app_expansion_list_0_div_3_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, AssetsPageComponent_app_expansion_list_0_div_3_ng_container_6_ng_template_1_Template, 0, 0, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngTemplateOutlet", _r7);
} }
function AssetsPageComponent_app_expansion_list_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "div", 11)(3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](4, "svg-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](6, AssetsPageComponent_app_expansion_list_0_div_3_ng_container_6_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const translate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", translate_r1("tokens"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", translate_r1("add_token"), " ");
} }
function AssetsPageComponent_app_expansion_list_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "svg-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](4, "appCurrencySymbol");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](5, "numberFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](6, "microValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asset_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](3, 1, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](4, 3, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind3"](5, 5, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](6, 9, asset_r12.balance), null, true))), " ");
} }
function AssetsPageComponent_app_expansion_list_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "ngx-skeleton-loader", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("count", 5)("theme", ctx_r4.skeletonLoaderTheme);
} }
function AssetsPageComponent_app_expansion_list_0_div_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const translate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", translate_r1("transactions"), " ");
} }
function AssetsPageComponent_app_expansion_list_0_div_7_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](3, "appCurrencySymbol");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](4, "numberFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](5, "microValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const asset_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().parentItem;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](3, 3, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind3"](4, 5, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](5, 9, asset_r14 == null ? null : asset_r14.balance), null, true))), " ");
} }
function AssetsPageComponent_app_expansion_list_0_div_7_ng_container_4_ng_template_1_Template(rf, ctx) { }
function AssetsPageComponent_app_expansion_list_0_div_7_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, AssetsPageComponent_app_expansion_list_0_div_7_ng_container_4_ng_template_1_Template, 0, 0, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngTemplateOutlet", _r7);
} }
function AssetsPageComponent_app_expansion_list_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 19)(1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](2, AssetsPageComponent_app_expansion_list_0_div_7_ng_container_2_Template, 2, 1, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](3, AssetsPageComponent_app_expansion_list_0_div_7_ng_container_3_Template, 6, 11, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, AssetsPageComponent_app_expansion_list_0_div_7_ng_container_4_Template, 2, 1, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} }
function AssetsPageComponent_app_expansion_list_0_ng_container_8_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const translate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", translate_r1("loading_failed"), " ");
} }
function AssetsPageComponent_app_expansion_list_0_ng_container_8_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const translate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", translate_r1("no_transactions"), " ");
} }
function AssetsPageComponent_app_expansion_list_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "app-token-transactions-table", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](3, AssetsPageComponent_app_expansion_list_0_ng_container_8_ng_container_3_Template, 2, 1, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, AssetsPageComponent_app_expansion_list_0_ng_container_8_ng_container_4_Template, 2, 1, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const transactions_r21 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("transactions", transactions_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r6.isLoadingFailed);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r6.isLoadingFailed && (transactions_r21 == null ? null : transactions_r21.length) === 0);
} }
const _c0 = function (a1) { return ["./", a1]; };
function AssetsPageComponent_app_expansion_list_0_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "svg-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const translate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction1"](2, _c0, ctx_r8.portalRoute.Transfer));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", translate_r1("send"), " ");
} }
function AssetsPageComponent_app_expansion_list_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "app-expansion-list", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](2, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](3, AssetsPageComponent_app_expansion_list_0_div_3_Template, 7, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, AssetsPageComponent_app_expansion_list_0_div_4_Template, 7, 11, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](5, AssetsPageComponent_app_expansion_list_0_ng_container_5_Template, 2, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](6, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](7, AssetsPageComponent_app_expansion_list_0_div_7_Template, 5, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](8, AssetsPageComponent_app_expansion_list_0_ng_container_8_Template, 5, 3, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](9, AssetsPageComponent_app_expansion_list_0_ng_template_9_Template, 3, 4, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](1, 4, ctx_r0.assetsList$))("border", ctx_r0.isOpenedInTab)("singleColumnMode", !ctx_r0.isOpenedInTab);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("appExpansionListColumnDefChooseFirst", ctx_r0.isOpenedInTab);
} }
class AssetsPageComponent extends _shared_utils_infinite_loading__WEBPACK_IMPORTED_MODULE_3__.InfiniteLoadingPresenter {
    constructor(assetsPageService, router, svgIconRegistry) {
        super(assetsPageService);
        this.assetsPageService = assetsPageService;
        this.router = router;
        this.svgIconRegistry = svgIconRegistry;
        this.isOpenedInTab = (0,_shared_utils_browser__WEBPACK_IMPORTED_MODULE_2__.isOpenedInTab)();
        this.skeletonLoaderTheme = {
            height: '24px',
            marginBottom: '24px',
            width: '100%',
        };
        this.portalRoute = _portal_route__WEBPACK_IMPORTED_MODULE_4__.PortalRoute;
        svgIconRegistry.register([
            _shared_svg_icons_add__WEBPACK_IMPORTED_MODULE_0__.svgAdd,
            _shared_svg_icons_send__WEBPACK_IMPORTED_MODULE_1__.svgSend,
        ]);
    }
    get isLoadingFailed() {
        return this.assetsPageService.isLoadingFailed;
    }
    ngOnInit() {
        this.assetsList$ = this.assetsPageService.getAssets();
        this.totalCount$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.of)(1);
    }
}
AssetsPageComponent.ɵfac = function AssetsPageComponent_Factory(t) { return new (t || AssetsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_assets_page_service__WEBPACK_IMPORTED_MODULE_5__.AssetsPageService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_22__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_23__.SvgIconRegistry)); };
AssetsPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineComponent"]({ type: AssetsPageComponent, selectors: [["app-assets-page"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵProvidersFeature"]([
            _assets_page_service__WEBPACK_IMPORTED_MODULE_5__.AssetsPageService,
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "assets-page__expansion-list", "appIntersectionArea", "", 3, "data", "border", "singleColumnMode", 4, "transloco", "translocoRead"], ["appIntersectionArea", "", 1, "assets-page__expansion-list", 3, "data", "border", "singleColumnMode"], ["appExpansionListColumnDef", "", 3, "appExpansionListColumnDefChooseFirst"], ["class", "assets-page__tokens-header-cell", 4, "appExpansionListHeaderCellDef"], ["class", "assets-page__token-cell", 4, "appExpansionListCellDef"], [4, "appExpansionListLoading"], ["appExpansionListColumnDef", "transactions", "appExpansionListColumnDefColspan", "2"], ["class", "assets-page__transactions-header-cell", 4, "appExpansionListHeaderCellDef"], [4, "appExpansionListCellDef"], ["sendButton", ""], [1, "assets-page__tokens-header-cell"], [1, "assets-page__tokens-header-cell__actions"], ["app-button", "", "color", "grey", "size", "sm", "disabled", "", "appTypeface", "caption"], ["key", "add", "size", "xs"], [4, "appBrowserPopupView"], [3, "ngTemplateOutlet"], [1, "assets-page__token-cell"], ["key", "decentr-hub"], [1, "assets-page__skeleton-loader", 3, "count", "theme"], [1, "assets-page__transactions-header-cell"], [1, "assets-page__transactions-header-cell-section"], [4, "appBrowserTabView"], [3, "transactions"], [1, "assets-page__no-transactions"], [4, "ngIf"], ["app-button", "", "size", "sm", "appTypeface", "caption", 3, "routerLink"], ["key", "send", "size", "xs"]], template: function AssetsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](0, AssetsPageComponent_app_expansion_list_0_Template, 11, 6, "app-expansion-list", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("translocoRead", "portal.assets_page");
    } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_24__.TranslocoDirective, _shared_components_expansion_list_expansion_list_expansion_list_component__WEBPACK_IMPORTED_MODULE_6__.ExpansionListComponent, _shared_directives_intersection_intersection_area_directive__WEBPACK_IMPORTED_MODULE_7__.IntersectionAreaDirective, _shared_components_expansion_list_expansion_list_column_expansion_list_column_def_directive__WEBPACK_IMPORTED_MODULE_8__.ExpansionListColumnDefDirective, _shared_components_expansion_list_expansion_list_header_cell_expansion_list_header_cell_def_directive__WEBPACK_IMPORTED_MODULE_9__.ExpansionListHeaderCellDefDirective, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_10__.ButtonComponent, _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_11__.TypefaceDirective, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_23__.SvgIconComponent, _shared_directives_browser_view_browser_popup_view_directive__WEBPACK_IMPORTED_MODULE_12__.BrowserPopupViewDirective, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgTemplateOutlet, _shared_components_expansion_list_expansion_list_cell_expansion_list_cell_def_directive__WEBPACK_IMPORTED_MODULE_13__.ExpansionListCellDefDirective, _shared_components_expansion_list_expansion_list_loading_expansion_list_loading_directive__WEBPACK_IMPORTED_MODULE_14__.ExpansionListLoadingDirective, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_26__.NgxSkeletonLoaderComponent, _shared_directives_browser_view_browser_tab_view_directive__WEBPACK_IMPORTED_MODULE_15__.BrowserTabViewDirective, _components_token_transactions_table_token_transactions_table_component__WEBPACK_IMPORTED_MODULE_16__.TokenTransactionsTableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterLink], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_25__.AsyncPipe, _shared_components_currency_symbol_pipe_currency_symbol_pipe__WEBPACK_IMPORTED_MODULE_17__.CurrencySymbolPipe, _shared_pipes_number_format_number_format_pipe__WEBPACK_IMPORTED_MODULE_18__.NumberFormatPipe, _shared_pipes_micro_value_micro_value_pipe__WEBPACK_IMPORTED_MODULE_19__.MicroValuePipe], styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n\n.assets-page__tokens-header-cell[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.assets-page__tokens-header-cell__actions[_ngcontent-%COMP%] {\n  align-items: center;\n  column-gap: 16px;\n  display: flex;\n}\n\n.assets-page__token-cell[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  gap: 8px;\n}\n\n.assets-page__transactions-header-cell[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.assets-page__transactions-header-cell-section[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n}\n\n.assets-page__no-transactions[_ngcontent-%COMP%] {\n  color: #929297;\n  margin-top: 16px;\n  text-align: center;\n}\n\n.assets-page__skeleton-loader[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 12px;\n}"], changeDetection: 0 });


/***/ }),

/***/ 23221:
/*!************************************************************************************************!*\
  !*** ./projects/charon/src/app/portal/modules/assets/pages/assets-page/assets-page.service.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssetsPageService": () => (/* binding */ AssetsPageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/coercion */ 92541);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 84945);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 15696);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 86811);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 42147);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 33568);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 65619);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 26252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 65598);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngneat/until-destroy */ 78177);
/* harmony import */ var decentr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! decentr-js */ 14000);
/* harmony import */ var decentr_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(decentr_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_utils_infinite_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/utils/infinite-loading */ 67056);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ 84667);
/* harmony import */ var _mapping__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mapping */ 44977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _core_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/auth */ 51519);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services */ 88718);












let AssetsPageService = class AssetsPageService extends _shared_utils_infinite_loading__WEBPACK_IMPORTED_MODULE_1__.InfiniteLoadingService {
    constructor(authService, blocksService, decentrService, networkService, bankService) {
        super();
        this.authService = authService;
        this.blocksService = blocksService;
        this.decentrService = decentrService;
        this.networkService = networkService;
        this.bankService = bankService;
        this.loadMoreItems();
    }
    get isLoadingFailed() {
        return this.loadingFailed;
    }
    ngOnDestroy() {
        this.dispose();
    }
    get canLoadMore$() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(false);
    }
    getBalance() {
        return this.bankService.getDECBalance();
    }
    getAssets() {
        return this.getBalance().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((balance) => ([
            {
                balance,
                transactions: (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([
                    this.isLoading$,
                    this.list$,
                ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(([isLoading, list]) => !list.length && isLoading ? undefined : list), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((list) => list && [list])),
            },
        ])));
    }
    getNextItems() {
        const walletAddress = this.authService.getActiveUserInstant().wallet.address;
        return this.searchTransactions(walletAddress).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((transactions) => transactions.map((tx) => this.mapTransaction(tx, walletAddress))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((transactions) => transactions.filter(Boolean)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(() => {
            this.loadingFailed = true;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)([]);
        }));
    }
    searchTransactions(walletAddress) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.concat)(this.decentrService.decentrClient.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.mergeMap)((decentrClient) => decentrClient.tx.search({
            tags: [
                {
                    key: 'message.module',
                    value: 'bank',
                },
                {
                    key: 'transfer.sender',
                    value: walletAddress,
                },
            ],
        }))), this.decentrService.decentrClient.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.mergeMap)((decentrClient) => decentrClient.tx.search({
            tags: [
                {
                    key: 'message.module',
                    value: 'bank',
                },
                {
                    key: 'transfer.recipient',
                    value: walletAddress,
                },
            ],
        }))), this.decentrService.decentrClient.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.mergeMap)((decentrClient) => decentrClient.tx.search({
            tags: [
                {
                    key: 'message.module',
                    value: 'staking',
                },
                {
                    key: 'message.sender',
                    value: walletAddress,
                },
            ],
        }))), this.decentrService.decentrClient.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.mergeMap)((decentrClient) => decentrClient.tx.search({
            tags: [
                {
                    key: 'message.module',
                    value: 'distribution',
                },
                {
                    key: 'message.sender',
                    value: walletAddress,
                },
            ],
        }))), this.decentrService.decentrClient.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.mergeMap)((decentrClient) => decentrClient.tx.search({
            tags: [
                {
                    key: 'message.action',
                    value: decentr_js__WEBPACK_IMPORTED_MODULE_0__.CosmosTxMessageTypeUrl.IbcMsgTransfer,
                },
                {
                    key: 'message.sender',
                    value: walletAddress,
                },
            ],
        })))).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.reduce)((acc, txs) => [...acc, ...txs], []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((txs) => txs.filter((tx, index) => txs.findIndex(({ hash }) => hash === tx.hash) === index)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((txs) => txs.filter((tx) => !tx.code)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((txs) => txs.sort((left, right) => right.height - left.height)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.take)(1));
    }
    mapTransaction(tx, walletAddress) {
        var _a;
        const fee = +((_a = tx.tx.authInfo.fee.amount[0]) === null || _a === void 0 ? void 0 : _a.amount) || 0;
        const comment = tx.tx.body.memo;
        const mappedMessages = tx.tx.body.messages
            .reduce((acc, msg, msgIndex) => {
            let tokenTransactionMessage;
            switch (msg.typeUrl) {
                case decentr_js__WEBPACK_IMPORTED_MODULE_0__.CosmosTxMessageTypeUrl.BankSend: {
                    const msgValue = msg.value;
                    if (![msgValue.toAddress, msgValue.fromAddress].includes(walletAddress)) {
                        break;
                    }
                    tokenTransactionMessage = (0,_mapping__WEBPACK_IMPORTED_MODULE_3__.mapSendTransaction)(msgValue, walletAddress);
                    break;
                }
                case decentr_js__WEBPACK_IMPORTED_MODULE_0__.CosmosTxMessageTypeUrl.IbcMsgTransfer: {
                    const msgValue = msg.value;
                    tokenTransactionMessage = (0,_mapping__WEBPACK_IMPORTED_MODULE_3__.mapIbcTransfer)(msgValue);
                    break;
                }
                case decentr_js__WEBPACK_IMPORTED_MODULE_0__.CosmosTxMessageTypeUrl.DistributionWithdrawDelegatorReward: {
                    tokenTransactionMessage = (0,_mapping__WEBPACK_IMPORTED_MODULE_3__.mapWithdrawDelegatorReward)(msgIndex, tx, walletAddress);
                    break;
                }
                case decentr_js__WEBPACK_IMPORTED_MODULE_0__.CosmosTxMessageTypeUrl.StakingDelegate: {
                    const msgValue = msg.value;
                    tokenTransactionMessage = (0,_mapping__WEBPACK_IMPORTED_MODULE_3__.mapDelegateTransaction)(msgValue, msgIndex, tx, walletAddress);
                    break;
                }
                case decentr_js__WEBPACK_IMPORTED_MODULE_0__.CosmosTxMessageTypeUrl.StakingUndelegate: {
                    const msgValue = msg.value;
                    tokenTransactionMessage = (0,_mapping__WEBPACK_IMPORTED_MODULE_3__.mapUndelegateTransaction)(msgValue, msgIndex, tx, walletAddress);
                    break;
                }
                case decentr_js__WEBPACK_IMPORTED_MODULE_0__.CosmosTxMessageTypeUrl.StakingBeginRedelegate: {
                    tokenTransactionMessage = (0,_mapping__WEBPACK_IMPORTED_MODULE_3__.mapRedelegateTransaction)(msgIndex, tx, walletAddress);
                    break;
                }
                case decentr_js__WEBPACK_IMPORTED_MODULE_0__.CosmosTxMessageTypeUrl.DistributionWithdrawValidatorCommission: {
                    tokenTransactionMessage = (0,_mapping__WEBPACK_IMPORTED_MODULE_3__.mapWithdrawValidatorRewardTransaction)(msgIndex, tx, walletAddress);
                    break;
                }
            }
            return [...acc, ...tokenTransactionMessage ? (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_15__.coerceArray)(tokenTransactionMessage) : []];
        }, []);
        if (mappedMessages.length > 1) {
            return new _components__WEBPACK_IMPORTED_MODULE_2__.TokenComplexTransaction(tx.hash, tx.height, fee, mappedMessages.reduce((acc, message) => acc + message.amount, 0), mappedMessages, comment);
        }
        if (mappedMessages.length === 1) {
            const message = mappedMessages[0];
            return new _components__WEBPACK_IMPORTED_MODULE_2__.TokenSingleTransaction(message.type, tx.hash, tx.height, fee, message.amount, message.recipient, message.sender, comment);
        }
        return undefined;
    }
};
AssetsPageService.ɵfac = function AssetsPageService_Factory(t) { return new (t || AssetsPageService)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵinject"](_core_auth__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_5__.BlocksService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_5__.DecentrService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_5__.NetworkService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_5__.BankService)); };
AssetsPageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjectable"]({ token: AssetsPageService, factory: AssetsPageService.ɵfac });
AssetsPageService = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_18__.UntilDestroy)()
], AssetsPageService);



/***/ }),

/***/ 91202:
/*!**********************************************************************************!*\
  !*** ./projects/charon/src/app/portal/modules/assets/pages/assets-page/index.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssetsPageComponent": () => (/* reexport safe */ _assets_page_component__WEBPACK_IMPORTED_MODULE_0__.AssetsPageComponent)
/* harmony export */ });
/* harmony import */ var _assets_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets-page.component */ 23654);



/***/ }),

/***/ 44977:
/*!************************************************************************************!*\
  !*** ./projects/charon/src/app/portal/modules/assets/pages/assets-page/mapping.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapDelegateTransaction": () => (/* binding */ mapDelegateTransaction),
/* harmony export */   "mapIbcTransfer": () => (/* binding */ mapIbcTransfer),
/* harmony export */   "mapRedelegateTransaction": () => (/* binding */ mapRedelegateTransaction),
/* harmony export */   "mapSendTransaction": () => (/* binding */ mapSendTransaction),
/* harmony export */   "mapUndelegateTransaction": () => (/* binding */ mapUndelegateTransaction),
/* harmony export */   "mapWithdrawDelegatorReward": () => (/* binding */ mapWithdrawDelegatorReward),
/* harmony export */   "mapWithdrawValidatorRewardTransaction": () => (/* binding */ mapWithdrawValidatorRewardTransaction)
/* harmony export */ });
/* harmony import */ var decentr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! decentr-js */ 14000);
/* harmony import */ var decentr_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(decentr_js__WEBPACK_IMPORTED_MODULE_0__);

const parseTxRawLog = (tx) => {
    try {
        return JSON.parse(tx.rawLog);
    }
    catch (_a) {
        return undefined;
    }
};
const getWithdrawMessages = (tx, msgIndex, walletAddress) => {
    var _a, _b, _c, _d;
    const logs = parseTxRawLog(tx);
    const events = (_a = logs === null || logs === void 0 ? void 0 : logs.find((log) => (log.msg_index || 0) === msgIndex)) === null || _a === void 0 ? void 0 : _a.events;
    const transferEvent = events === null || events === void 0 ? void 0 : events.find((event) => event.type === 'transfer');
    if (!transferEvent) {
        const validator = (_d = (_c = (_b = events === null || events === void 0 ? void 0 : events.find((event) => event.type === 'withdraw_rewards')) === null || _b === void 0 ? void 0 : _b.attributes) === null || _c === void 0 ? void 0 : _c.find((attribute) => attribute.key === 'validator')) === null || _d === void 0 ? void 0 : _d.value;
        if (!validator) {
            return [];
        }
        return [{
                amount: 0,
                recipient: walletAddress,
                sender: validator,
            }];
    }
    const transfers = transferEvent.attributes
        .reduce((acc, attribute, index, attributes) => {
        const senderAttribute = attributes[index + 1];
        const amountAttribute = attributes[index + 2];
        if (attribute.key === 'recipient'
            && attribute.value === walletAddress
            && (senderAttribute === null || senderAttribute === void 0 ? void 0 : senderAttribute.key) === 'sender'
            && (amountAttribute === null || amountAttribute === void 0 ? void 0 : amountAttribute.key) === 'amount') {
            const amount = parseFloat(amountAttribute.value);
            return [
                ...acc,
                {
                    sender: senderAttribute.value,
                    amount,
                },
            ];
        }
        return acc;
    }, []);
    return transfers.map((transfer) => ({
        amount: transfer.amount,
        recipient: walletAddress,
        sender: transfer.sender,
    }));
};
const mapSendTransaction = (msg, walletAddress) => {
    const amount = (msg.fromAddress === walletAddress ? -1 : 1) * +msg.amount[0].amount;
    return {
        type: decentr_js__WEBPACK_IMPORTED_MODULE_0__.CosmosTxMessageTypeUrl.BankSend,
        amount,
        recipient: msg.toAddress,
        sender: msg.fromAddress,
    };
};
const mapIbcTransfer = (msg) => {
    const amount = -1 * +msg.token.amount;
    return {
        type: decentr_js__WEBPACK_IMPORTED_MODULE_0__.CosmosTxMessageTypeUrl.BankSend,
        amount,
        recipient: msg.receiver,
        sender: msg.sender,
    };
};
const mapDelegateTransaction = (msg, msgIndex, tx, walletAddress) => {
    return [
        {
            type: decentr_js__WEBPACK_IMPORTED_MODULE_0__.CosmosTxMessageTypeUrl.StakingDelegate,
            amount: -msg.amount.amount,
            recipient: msg.validatorAddress,
            sender: msg.delegatorAddress,
        },
        ...getWithdrawMessages(tx, msgIndex, walletAddress).map((withdrawMsg) => (Object.assign(Object.assign({}, withdrawMsg), { type: decentr_js__WEBPACK_IMPORTED_MODULE_0__.CosmosTxMessageTypeUrl.DistributionWithdrawDelegatorReward }))),
    ];
};
const mapUndelegateTransaction = (msg, msgIndex, tx, walletAddress) => {
    return [
        {
            type: decentr_js__WEBPACK_IMPORTED_MODULE_0__.CosmosTxMessageTypeUrl.StakingUndelegate,
            amount: +msg.amount.amount,
            recipient: msg.delegatorAddress,
            sender: msg.validatorAddress,
        },
        ...getWithdrawMessages(tx, msgIndex, walletAddress).map((withdrawMsg) => (Object.assign(Object.assign({}, withdrawMsg), { type: decentr_js__WEBPACK_IMPORTED_MODULE_0__.CosmosTxMessageTypeUrl.DistributionWithdrawDelegatorReward }))),
    ];
};
const mapRedelegateTransaction = (msgIndex, tx, walletAddress) => {
    return getWithdrawMessages(tx, msgIndex, walletAddress).map((msg) => (Object.assign(Object.assign({}, msg), { type: decentr_js__WEBPACK_IMPORTED_MODULE_0__.CosmosTxMessageTypeUrl.DistributionWithdrawDelegatorReward })));
};
const mapWithdrawDelegatorReward = (msgIndex, tx, walletAddress) => {
    return getWithdrawMessages(tx, msgIndex, walletAddress).map((msg) => (Object.assign(Object.assign({}, msg), { type: decentr_js__WEBPACK_IMPORTED_MODULE_0__.CosmosTxMessageTypeUrl.DistributionWithdrawDelegatorReward })));
};
const mapWithdrawValidatorRewardTransaction = (msgIndex, tx, walletAddress) => {
    return getWithdrawMessages(tx, msgIndex, walletAddress).map((msg) => (Object.assign(Object.assign({}, msg), { type: decentr_js__WEBPACK_IMPORTED_MODULE_0__.CosmosTxMessageTypeUrl.DistributionWithdrawValidatorCommission })));
};


/***/ }),

/***/ 32156:
/*!**********************************************************************!*\
  !*** ./projects/charon/src/app/portal/modules/assets/pages/index.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ASSETS_PAGES": () => (/* binding */ ASSETS_PAGES),
/* harmony export */   "AssetsPageComponent": () => (/* reexport safe */ _assets_page__WEBPACK_IMPORTED_MODULE_0__.AssetsPageComponent),
/* harmony export */   "COMMENT_PARAM": () => (/* reexport safe */ _transfer_page__WEBPACK_IMPORTED_MODULE_1__.COMMENT_PARAM),
/* harmony export */   "IS_AI_PARAM": () => (/* reexport safe */ _transfer_page__WEBPACK_IMPORTED_MODULE_1__.IS_AI_PARAM),
/* harmony export */   "IS_LOAN_PARAM": () => (/* reexport safe */ _transfer_page__WEBPACK_IMPORTED_MODULE_1__.IS_LOAN_PARAM),
/* harmony export */   "IS_VPN_PARAM": () => (/* reexport safe */ _transfer_page__WEBPACK_IMPORTED_MODULE_1__.IS_VPN_PARAM),
/* harmony export */   "RECEIVER_WALLET_PARAM": () => (/* reexport safe */ _transfer_page__WEBPACK_IMPORTED_MODULE_1__.RECEIVER_WALLET_PARAM),
/* harmony export */   "TRANSFER_START_AMOUNT": () => (/* reexport safe */ _transfer_page__WEBPACK_IMPORTED_MODULE_1__.TRANSFER_START_AMOUNT),
/* harmony export */   "TransferPageComponent": () => (/* reexport safe */ _transfer_page__WEBPACK_IMPORTED_MODULE_1__.TransferPageComponent)
/* harmony export */ });
/* harmony import */ var _assets_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets-page */ 91202);
/* harmony import */ var _transfer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transfer-page */ 27381);




const ASSETS_PAGES = [
    _assets_page__WEBPACK_IMPORTED_MODULE_0__.AssetsPageComponent,
    _transfer_page__WEBPACK_IMPORTED_MODULE_1__.TransferPageComponent,
];


/***/ }),

/***/ 27381:
/*!************************************************************************************!*\
  !*** ./projects/charon/src/app/portal/modules/assets/pages/transfer-page/index.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COMMENT_PARAM": () => (/* reexport safe */ _transfer_page_definitions__WEBPACK_IMPORTED_MODULE_1__.COMMENT_PARAM),
/* harmony export */   "IS_AI_PARAM": () => (/* reexport safe */ _transfer_page_definitions__WEBPACK_IMPORTED_MODULE_1__.IS_AI_PARAM),
/* harmony export */   "IS_LOAN_PARAM": () => (/* reexport safe */ _transfer_page_definitions__WEBPACK_IMPORTED_MODULE_1__.IS_LOAN_PARAM),
/* harmony export */   "IS_VPN_PARAM": () => (/* reexport safe */ _transfer_page_definitions__WEBPACK_IMPORTED_MODULE_1__.IS_VPN_PARAM),
/* harmony export */   "RECEIVER_WALLET_PARAM": () => (/* reexport safe */ _transfer_page_definitions__WEBPACK_IMPORTED_MODULE_1__.RECEIVER_WALLET_PARAM),
/* harmony export */   "TRANSFER_START_AMOUNT": () => (/* reexport safe */ _transfer_page_definitions__WEBPACK_IMPORTED_MODULE_1__.TRANSFER_START_AMOUNT),
/* harmony export */   "TransferPageComponent": () => (/* reexport safe */ _transfer_page_component__WEBPACK_IMPORTED_MODULE_0__.TransferPageComponent)
/* harmony export */ });
/* harmony import */ var _transfer_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transfer-page.component */ 99040);
/* harmony import */ var _transfer_page_definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transfer-page.definitions */ 57954);




/***/ }),

/***/ 99040:
/*!******************************************************************************************************!*\
  !*** ./projects/charon/src/app/portal/modules/assets/pages/transfer-page/transfer-page.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransferPageComponent": () => (/* binding */ TransferPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ 1659);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs */ 9018);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! rxjs */ 84945);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs/operators */ 33568);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! rxjs/operators */ 83151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! rxjs/operators */ 61528);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! rxjs/operators */ 26903);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngneat/until-destroy */ 78177);
/* harmony import */ var _shared_components_form_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/components/form-error */ 1674);
/* harmony import */ var _shared_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/forms */ 67540);
/* harmony import */ var _shared_pipes_micro_value__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/pipes/micro-value */ 55219);
/* harmony import */ var _shared_svg_icons_arrow_left__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/svg-icons/arrow-left */ 11890);
/* harmony import */ var _shared_svg_icons_decentr_hub__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/svg-icons/decentr-hub */ 33307);
/* harmony import */ var _shared_utils_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/utils/browser */ 94240);
/* harmony import */ var _transfer_page_definitions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transfer-page.definitions */ 57954);
/* harmony import */ var _transfer_page_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transfer-page.service */ 75404);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/router */ 45113);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/services */ 88718);
/* harmony import */ var _ngneat_reactive_forms__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ngneat/reactive-forms */ 18260);
/* harmony import */ var _core_navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/navigation */ 12089);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @ngneat/svg-icon */ 66722);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @ngneat/transloco */ 47860);
/* harmony import */ var _shared_components_button_back_button_back_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../../../shared/components/button-back/button-back.component */ 62414);
/* harmony import */ var _core_navigation_navigate_back_navigate_back_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/navigation/navigate-back/navigate-back.directive */ 12109);
/* harmony import */ var _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../../../shared/directives/typeface/typeface.directive */ 31857);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/common */ 11048);
/* harmony import */ var _shared_components_currency_symbol_component_currency_symbol_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../../../shared/components/currency-symbol/component/currency-symbol.component */ 56693);
/* harmony import */ var _shared_directives_submit_after_validation_submit_after_validation_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../../../shared/directives/submit-after-validation/submit-after-validation.directive */ 16767);
/* harmony import */ var _shared_components_input_container_input_container_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../../../shared/components/input-container/input-container.component */ 29130);
/* harmony import */ var _shared_directives_bind_query_params_bind_query_params_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../../../../shared/directives/bind-query-params/bind-query-params.directive */ 91799);
/* harmony import */ var _shared_components_controls_input_input_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../../../../shared/components/controls/input/input.component */ 49874);
/* harmony import */ var _shared_components_form_error_form_error_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../../../../shared/components/form-error/form-error.component */ 61926);
/* harmony import */ var _shared_directives_browser_view_browser_tab_view_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../../../../../shared/directives/browser-view/browser-tab-view.directive */ 59896);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../../../../../shared/components/button/button.component */ 4013);
/* harmony import */ var _shared_pipes_number_format_number_format_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../../../../../shared/pipes/number-format/number-format.pipe */ 17667);
/* harmony import */ var _shared_pipes_micro_value_micro_value_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../../../../../shared/pipes/micro-value/micro-value.pipe */ 30087);




































function TransferPageComponent_ng_container_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](1, "svg-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](3, "numberFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](4, "microValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](5, "app-currency-symbol");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    const balance_r5 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind3"](3, 1, _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](4, 5, balance_r5), null, true), "\u00A0");
} }
function TransferPageComponent_ng_container_0_span_13_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](2, "numberFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](3, "microValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const fee_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]().ngIf;
    const translate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate2"](" ", translate_r1("form.amount.fee"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind3"](2, 2, _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](3, 6, fee_r6), null, true), " ");
} }
function TransferPageComponent_ng_container_0_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](1, TransferPageComponent_ng_container_0_span_13_ng_container_1_Template, 4, 8, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r3.form.valid);
} }
function TransferPageComponent_ng_container_0_svg_icon_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](0, "svg-icon", 26);
} }
const _c0 = function () { return ["../"]; };
function TransferPageComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](2, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](5, TransferPageComponent_ng_container_0_div_5_Template, 6, 7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](7, "form", 5)(8, "div", 6)(9, "app-input-container", 7)(10, "app-input", 8)(11, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](13, TransferPageComponent_ng_container_0_span_13_Template, 2, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](15, "app-form-error", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](16, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](17, TransferPageComponent_ng_container_0_svg_icon_17_Template, 1, 0, "svg-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](18, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](19, "app-input-container", 15)(20, "app-input", 16)(21, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](23, "app-form-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](24, "app-input", 18)(25, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](27, "div", 19)(28, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](30, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function TransferPageComponent_ng_container_0_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](); return ctx_r10.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](31, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const translate_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("appNavigateBack", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpureFunction0"](27, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"](" ", translate_r1("send"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](6, 21, ctx_r0.balance$));
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("appTypeface", ctx_r0.isOpenedInPopup ? "header-4" : "header-3")("numeric", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate"](translate_r1("form.amount.label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](14, 23, ctx_r0.fee$));
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("resize", false)("spellcheck", false)("appTypeface", ctx_r0.isOpenedInPopup ? "paragraph" : "subheader")("placeholder", translate_r1("form.to.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate"](translate_r1("form.to.label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("maxlength", 100)("rows", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate"](translate_r1("form.memo.label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("disabled", ctx_r0.isPageDisabled)("appNavigateBack", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpureFunction0"](28, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"](" ", translate_r1("cancel"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("disabled", ctx_r0.isPageDisabled || _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](31, 25, ctx_r0.canSend$) === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"](" ", translate_r1(ctx_r0.isPageDisabled ? "sending" : "send"), " ");
} }
let TransferPageComponent = class TransferPageComponent {
    constructor(activatedRoute, changeDetectorRef, currencyService, formBuilder, navigationService, svgIconRegistry, transferPageService, sentinelService) {
        this.activatedRoute = activatedRoute;
        this.changeDetectorRef = changeDetectorRef;
        this.currencyService = currencyService;
        this.formBuilder = formBuilder;
        this.navigationService = navigationService;
        this.svgIconRegistry = svgIconRegistry;
        this.transferPageService = transferPageService;
        this.sentinelService = sentinelService;
        this.isPageDisabled = false;
        this.isOpenedInPopup = !(0,_shared_utils_browser__WEBPACK_IMPORTED_MODULE_5__.isOpenedInTab)();
        this.isAmountToDisabled = false;
        svgIconRegistry.register([
            _shared_svg_icons_arrow_left__WEBPACK_IMPORTED_MODULE_3__.svgArrowLeft,
            _shared_svg_icons_decentr_hub__WEBPACK_IMPORTED_MODULE_4__.svgDecentrHub,
        ]);
    }
    ngOnInit() {
        this.balance$ = this.transferPageService.getBalance();
        this.form = this.createForm();
        this.canSend$ = this.form.status$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.map)((status) => status === 'VALID' || status === 'DISABLED'));
        this.fee$ = this.getFeeStream(this.form);
        const amountControl = this.form.get(['data', 'amount']);
        this.form.get('data').setAsyncValidators([
            this.transferPageService.createAsyncAmountValidator(amountControl, this.fee$),
        ]);
        if (this.activatedRoute.snapshot.queryParams[_transfer_page_definitions__WEBPACK_IMPORTED_MODULE_6__.RECEIVER_WALLET_PARAM]) {
            this.form.get(['data', _transfer_page_definitions__WEBPACK_IMPORTED_MODULE_6__.RECEIVER_WALLET_PARAM]).disable();
        }
        if (this.activatedRoute.snapshot.queryParams[_transfer_page_definitions__WEBPACK_IMPORTED_MODULE_6__.COMMENT_PARAM]
            && this.activatedRoute.snapshot.queryParams[_transfer_page_definitions__WEBPACK_IMPORTED_MODULE_6__.IS_LOAN_PARAM]) {
            this.form.get(_transfer_page_definitions__WEBPACK_IMPORTED_MODULE_6__.COMMENT_PARAM).disable();
        }
        if (this.activatedRoute.snapshot.queryParams[_transfer_page_definitions__WEBPACK_IMPORTED_MODULE_6__.IS_LOAN_PARAM]) {
            this.currencyService.getDecentrCoinRateForUsd().pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_25__.untilDestroyed)(this)).subscribe(coinRate => {
                this.loanAmount = 101 / coinRate;
                this.loanCommission = 2 / coinRate;
                const amountFixedValue = (101 / coinRate).toFixed(6);
                amountControl.patchValue(Number(amountFixedValue));
                amountControl.disable();
            });
        }
    }
    onSubmit() {
        this.disablePage();
        const formValue = this.form.getRawValue();
        this.activatedRoute.snapshot.queryParams[_transfer_page_definitions__WEBPACK_IMPORTED_MODULE_6__.IS_LOAN_PARAM] ? this.transferLoan(formValue) : this.transfer(formValue);
    }
    transfer(formValue) {
        this.transferPageService.transfer(formValue.data.to, this.getUDecAmount(formValue.data.amount), formValue.comment || '').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.catchError)(() => {
            this.enablePage();
            return rxjs__WEBPACK_IMPORTED_MODULE_27__.EMPTY;
        }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_25__.untilDestroyed)(this)).subscribe((txHash) => {
            if (this.activatedRoute.snapshot.queryParams[_transfer_page_definitions__WEBPACK_IMPORTED_MODULE_6__.IS_AI_PARAM]) {
                this.transferPageService.rechargeAiBalance(txHash, false, null).subscribe((res) => { });
            }
            else if (this.activatedRoute.snapshot.queryParams[_transfer_page_definitions__WEBPACK_IMPORTED_MODULE_6__.IS_VPN_PARAM]) {
                this.transferPageService.rechargeAiBalance(txHash, true, this.sentinelService.sentinelWalletAddress).subscribe(res => { });
            }
            this.navigateBack();
        });
    }
    transferLoan(formValue) {
        this.transferPageService.transferLoan(formValue.data.to, this.getUDecAmount(this.loanAmount), this.getUDecAmount(this.loanCommission), formValue.comment || '').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.catchError)(() => {
            this.enablePage();
            return rxjs__WEBPACK_IMPORTED_MODULE_27__.EMPTY;
        }), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_25__.untilDestroyed)(this)).subscribe(() => {
            this.navigateBack();
        });
    }
    createForm() {
        return this.formBuilder.group({
            data: this.formBuilder.group({
                amount: [
                    _transfer_page_definitions__WEBPACK_IMPORTED_MODULE_6__.TRANSFER_START_AMOUNT,
                    [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_28__.Validators.required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_28__.Validators.min(_transfer_page_definitions__WEBPACK_IMPORTED_MODULE_6__.TRANSFER_START_AMOUNT),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_28__.Validators.pattern('^((0)|(([1-9])([0-9]+)?)(0+)?)\\.?\\d{0,6}$'),
                    ],
                ],
                [_transfer_page_definitions__WEBPACK_IMPORTED_MODULE_6__.RECEIVER_WALLET_PARAM]: new _shared_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlWarn('', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_28__.Validators.required,
                ], [
                    this.transferPageService.createAsyncValidWalletAddressValidator(),
                ]),
            }),
            comment: this.formBuilder.control('', {
                updateOn: 'blur',
            }),
        });
    }
    disablePage() {
        this.isPageDisabled = true;
        this.form.disable();
        this.changeDetectorRef.markForCheck();
    }
    enablePage() {
        this.isPageDisabled = false;
        this.form.enable();
        this.changeDetectorRef.markForCheck();
    }
    getUDecAmount(amount) {
        return Math.round(amount * _shared_pipes_micro_value__WEBPACK_IMPORTED_MODULE_2__.MICRO_PDV_DIVISOR);
    }
    navigateBack() {
        this.navigationService.back(['../']);
    }
    getFeeStream(form, defaultValue = 0) {
        return form.value$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_30__.switchMap)((formValue) => {
            const amount = formValue.data.amount;
            const to = formValue.data.to;
            return +amount && to
                ? this.transferPageService.getTransferFee(to, this.getUDecAmount(amount)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_31__.of)(defaultValue)))
                : (0,rxjs__WEBPACK_IMPORTED_MODULE_31__.of)(defaultValue);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_32__.share)());
    }
};
TransferPageComponent.ɵfac = function TransferPageComponent_Factory(t) { return new (t || TransferPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_33__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_23__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_8__.CurrencyService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_ngneat_reactive_forms__WEBPACK_IMPORTED_MODULE_34__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_core_navigation__WEBPACK_IMPORTED_MODULE_9__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_35__.SvgIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_transfer_page_service__WEBPACK_IMPORTED_MODULE_7__.TransferPageService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_8__.SentinelService)); };
TransferPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineComponent"]({ type: TransferPageComponent, selectors: [["app-transfer-page"]], hostVars: 2, hostBindings: function TransferPageComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵclassProp"]("is-disabled", ctx.isPageDisabled);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵProvidersFeature"]([
            _transfer_page_service__WEBPACK_IMPORTED_MODULE_7__.TransferPageService,
            {
                provide: _shared_components_form_error__WEBPACK_IMPORTED_MODULE_0__.FORM_ERROR_TRANSLOCO_READ,
                useValue: 'portal.transfer_page.form',
            },
        ])], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], [1, "transfer-page__header"], ["app-button-back", "", 3, "appNavigateBack"], ["appTypeface", "subheader"], ["class", "transfer-page__balance", "appTypeface", "paragraph", 4, "ngIf"], ["autocomplete", "off", "appSubmitAfterValidation", "", 3, "formGroup"], [1, "transfer-page__form__inputs-container"], ["formGroupName", "data", "appBindQueryParams", ""], ["formControlName", "amount", 1, "transfer-page__form__control-amount", 3, "appTypeface", "numeric"], ["ngProjectAs", "[label]", 5, ["", "label", ""]], ["ngProjectAs", "[label-right]", 5, ["", "label-right", ""], 4, "ngIf"], ["controlName", "amount"], [1, "transfer-page__form__icon-container"], ["class", "transfer-page__form__icon", "key", "arrow-left", "size", "xl", 4, "appBrowserTabView"], [1, "transfer-page__form__icon-dummy"], ["formGroupName", "data"], ["rows", "2", "formControlName", "to", 1, "transfer-page__form__control-to", 3, "resize", "spellcheck", "appTypeface", "placeholder"], ["controlName", "to"], ["formControlName", "comment", "appBindQueryParams", "", 1, "transfer-page__form__control-memo", 3, "maxlength", "rows"], ["appTypeface", "paragraph", 1, "transfer-page__form__actions-container"], ["app-button", "", "color", "grey", 1, "transfer-page__form__action-button", 3, "disabled", "appNavigateBack"], ["app-button", "", "color", "primary", 1, "transfer-page__form__action-button", 3, "disabled", "click"], ["appTypeface", "paragraph", 1, "transfer-page__balance"], ["key", "decentr-hub", 1, "transfer-page__balance-icon"], ["ngProjectAs", "[label-right]", 5, ["", "label-right", ""]], [4, "ngIf"], ["key", "arrow-left", "size", "xl", 1, "transfer-page__form__icon"]], template: function TransferPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](0, TransferPageComponent_ng_container_0_Template, 33, 29, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("translocoRead", "portal.transfer_page");
    } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_36__.TranslocoDirective, _shared_components_button_back_button_back_component__WEBPACK_IMPORTED_MODULE_10__.ButtonBackComponent, _core_navigation_navigate_back_navigate_back_directive__WEBPACK_IMPORTED_MODULE_11__.NavigateBackDirective, _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_12__.TypefaceDirective, _angular_common__WEBPACK_IMPORTED_MODULE_37__.NgIf, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_35__.SvgIconComponent, _shared_components_currency_symbol_component_currency_symbol_component__WEBPACK_IMPORTED_MODULE_13__.CurrencySymbolComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_28__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_28__.NgControlStatusGroup, _shared_directives_submit_after_validation_submit_after_validation_directive__WEBPACK_IMPORTED_MODULE_14__.SubmitAfterValidationDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.FormGroupDirective, _shared_components_input_container_input_container_component__WEBPACK_IMPORTED_MODULE_15__.InputContainerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.FormGroupName, _shared_directives_bind_query_params_bind_query_params_directive__WEBPACK_IMPORTED_MODULE_16__.BindQueryParamsDirective, _shared_components_controls_input_input_component__WEBPACK_IMPORTED_MODULE_17__.InputComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.FormControlName, _shared_components_form_error_form_error_component__WEBPACK_IMPORTED_MODULE_18__.FormErrorComponent, _shared_directives_browser_view_browser_tab_view_directive__WEBPACK_IMPORTED_MODULE_19__.BrowserTabViewDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.MaxLengthValidator, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_20__.ButtonComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_37__.AsyncPipe, _shared_pipes_number_format_number_format_pipe__WEBPACK_IMPORTED_MODULE_21__.NumberFormatPipe, _shared_pipes_micro_value_micro_value_pipe__WEBPACK_IMPORTED_MODULE_22__.MicroValuePipe], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n.is-disabled[_nghost-%COMP%] {\n  color: var(--color-dportal-transfer-page-disabled);\n  pointer-events: none;\n}\n.is-disabled[_nghost-%COMP%]   .transfer-page__back-button[_ngcontent-%COMP%] {\n  color: var(--color-dportal-transfer-page-disabled-back-button);\n}\n.is-disabled[_nghost-%COMP%]   .transfer-page__balance[_ngcontent-%COMP%] {\n  background-color: var(--color-dportal-transfer-page-disabled-balance);\n}\n.mod-popup-view   [_nghost-%COMP%]   .transfer-page__form__inputs-container[_ngcontent-%COMP%] {\n  display: block;\n}\n.mod-popup-view   [_nghost-%COMP%]   .transfer-page__form__control-to[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.mod-popup-view   [_nghost-%COMP%]   .transfer-page__form__actions-container[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  padding-bottom: 12px;\n  padding-top: 12px;\n}\n.mod-popup-view   [_nghost-%COMP%]   .transfer-page__header[_ngcontent-%COMP%] {\n  padding-bottom: 16px;\n  padding-top: 16px;\n}\n.mod-tab-view   [_nghost-%COMP%] {\n  border: 2px solid var(--color-outlines);\n  border-radius: 12px;\n}\n.transfer-page__header[_ngcontent-%COMP%], .transfer-page__form__inputs-container[_ngcontent-%COMP%], .transfer-page__form__actions-container[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.transfer-page__header[_ngcontent-%COMP%] {\n  align-items: center;\n  border-bottom: 2px solid var(--color-outlines);\n  display: flex;\n  font-weight: 500;\n  gap: 16px;\n}\n.transfer-page__balance[_ngcontent-%COMP%] {\n  align-items: center;\n  background-color: var(--color-dportal-transfer-page-balance);\n  border-radius: 12px;\n  display: inline-flex;\n  padding: 8px 16px;\n}\n.transfer-page__balance-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.transfer-page__form__inputs-container[_ngcontent-%COMP%] {\n  align-items: start;\n  display: grid;\n  grid-column-gap: 16px;\n  column-gap: 16px;\n  grid-template-areas: \"amount icon to\" \"memo memo memo\";\n  grid-template-columns: 1fr max-content 1fr;\n  padding-bottom: 8px;\n}\n.transfer-page__form__control-amount[_ngcontent-%COMP%] {\n  grid-area: amount;\n  min-height: 145px;\n}\n.transfer-page__form__control-to[_ngcontent-%COMP%] {\n  grid-area: to;\n  min-height: 145px;\n}\n.transfer-page__form__control-memo[_ngcontent-%COMP%] {\n  grid-area: memo;\n  margin-bottom: 16px;\n  margin-top: 8px;\n}\n.transfer-page__form__icon[_ngcontent-%COMP%] {\n  color: var(--color-dportal-transfer-page-form-arrow);\n  flex-grow: 1;\n  min-height: 145px;\n  transform: rotate(180deg);\n}\n.transfer-page__form__icon-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  row-gap: 8px;\n}\n.transfer-page__form__icon-dummy[_ngcontent-%COMP%] {\n  min-height: 16px;\n}\n.transfer-page__form__error[_ngcontent-%COMP%] {\n  min-height: 16px;\n  margin-top: 8px;\n  padding: 0 16px;\n}\n.transfer-page__form__actions-container[_ngcontent-%COMP%] {\n  align-items: center;\n  border-top: 2px solid var(--color-outlines);\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n}\n.transfer-page__form__action-button[_ngcontent-%COMP%] {\n  height: 48px;\n  width: 160px;\n}"], changeDetection: 0 });
TransferPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_38__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_25__.UntilDestroy)()
], TransferPageComponent);



/***/ }),

/***/ 57954:
/*!********************************************************************************************************!*\
  !*** ./projects/charon/src/app/portal/modules/assets/pages/transfer-page/transfer-page.definitions.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COMMENT_PARAM": () => (/* binding */ COMMENT_PARAM),
/* harmony export */   "IS_AI_PARAM": () => (/* binding */ IS_AI_PARAM),
/* harmony export */   "IS_LOAN_PARAM": () => (/* binding */ IS_LOAN_PARAM),
/* harmony export */   "IS_VPN_PARAM": () => (/* binding */ IS_VPN_PARAM),
/* harmony export */   "RECEIVER_WALLET_PARAM": () => (/* binding */ RECEIVER_WALLET_PARAM),
/* harmony export */   "TRANSFER_START_AMOUNT": () => (/* binding */ TRANSFER_START_AMOUNT)
/* harmony export */ });
const RECEIVER_WALLET_PARAM = 'to';
const COMMENT_PARAM = 'comment';
const IS_LOAN_PARAM = 'loan';
const IS_AI_PARAM = 'ai';
const IS_VPN_PARAM = 'vpn';
const TRANSFER_START_AMOUNT = 0.000001;


/***/ }),

/***/ 75404:
/*!****************************************************************************************************!*\
  !*** ./projects/charon/src/app/portal/modules/assets/pages/transfer-page/transfer-page.service.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransferPageService": () => (/* binding */ TransferPageService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 84945);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 91786);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 15696);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 61528);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 84967);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 65619);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 33568);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 98168);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 65598);
/* harmony import */ var decentr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! decentr-js */ 14000);
/* harmony import */ var decentr_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(decentr_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services */ 88718);
/* harmony import */ var _shared_pipes_micro_value__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/pipes/micro-value */ 55219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _core_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/auth */ 51519);
/* harmony import */ var _shared_services_notification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/services/notification */ 86333);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngneat/transloco */ 47860);










class TransferPageService {
    constructor(authService, bankService, notificationService, translocoService, userService, decentrService) {
        this.authService = authService;
        this.bankService = bankService;
        this.notificationService = notificationService;
        this.translocoService = translocoService;
        this.userService = userService;
        this.decentrService = decentrService;
    }
    getBalance() {
        return this.bankService.getDECBalance().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(parseFloat));
    }
    getTransferFee(toAddress, amount) {
        if (decentr_js__WEBPACK_IMPORTED_MODULE_0__.WalletAddressVerifier.verify(toAddress, decentr_js__WEBPACK_IMPORTED_MODULE_0__.WalletPrefix.Sentinel)) {
            return this.bankService.getTransferIbcFee({ token: (0,decentr_js__WEBPACK_IMPORTED_MODULE_0__.createDecentrCoin)(amount), receiver: toAddress });
        }
        return this.bankService.getTransferFee({ amount: [(0,decentr_js__WEBPACK_IMPORTED_MODULE_0__.createDecentrCoin)(amount)], toAddress });
    }
    createAsyncValidWalletAddressValidator() {
        return (control) => {
            if (!control.value) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
            }
            if (control.value === this.authService.getActiveUserInstant().wallet.address) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)({ myAddress: false });
            }
            if (decentr_js__WEBPACK_IMPORTED_MODULE_0__.WalletAddressVerifier.verify(control.value, decentr_js__WEBPACK_IMPORTED_MODULE_0__.WalletPrefix.Sentinel)) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(undefined);
            }
            if (!decentr_js__WEBPACK_IMPORTED_MODULE_0__.WalletAddressVerifier.verify(control.value, decentr_js__WEBPACK_IMPORTED_MODULE_0__.WalletPrefix.Decentr)) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)({ invalidAddress: false });
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.timer)(300).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.mergeMap)(() => this.userService.getAccount(control.value)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(undefined)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((account) => account ? null : { exists: false }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)((warning) => control.warnings = warning), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(() => undefined));
        };
    }
    createAsyncAmountValidator(amountControl, fee$) {
        return () => {
            const amount = parseFloat(amountControl.value.toString());
            if (isNaN(amount)) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.timer)(300).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.mergeMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.combineLatest)([
                this.getBalance(),
                fee$,
            ])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(([balance, fee]) => {
                const error = (balance - fee) / _shared_pipes_micro_value__WEBPACK_IMPORTED_MODULE_2__.MICRO_PDV_DIVISOR >= amount ? null : { insufficient: false };
                amountControl.setErrors(error);
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(() => null));
        };
    }
    transfer(toAddress, amount, memo) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(toAddress).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.switchMap)((address) => decentr_js__WEBPACK_IMPORTED_MODULE_0__.WalletAddressVerifier.verify(address, 'sent')
            ? this.transferIbcTokens(toAddress, amount, memo)
            : this.transferCoins(toAddress, amount, memo)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)({
            next: (txHash) => {
                this.notificationService.success(this.translocoService.translate('transfer_page.notifications.success', null, 'portal'));
                return txHash;
            },
            error: (error) => {
                this.notificationService.error(error);
            },
        }));
    }
    transferLoan(toAddress, amount, commissionAmount, memo) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(toAddress).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.switchMap)((address) => {
            if (decentr_js__WEBPACK_IMPORTED_MODULE_0__.WalletAddressVerifier.verify(address, 'sent')) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.forkJoin)([
                    this.transferIbcTokens(toAddress, amount - commissionAmount, memo),
                    this.transferIbcTokens('decentr1mc3la0d5f4md9qfjzwncmcs6av444pkd388wzh', commissionAmount, 'Loan commission'),
                ]);
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.forkJoin)([
                    this.transferCoins(toAddress, amount - commissionAmount, memo),
                    this.transferCoins('decentr1mc3la0d5f4md9qfjzwncmcs6av444pkd388wzh', commissionAmount, 'Loan commission'),
                ]);
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)({
            next: () => this.notificationService.success(this.translocoService.translate('transfer_page.notifications.success', null, 'portal')),
            error: (error) => this.notificationService.error(error),
        }));
    }
    rechargeAiBalance(txHash, isSentinetTopUp, sentinelWallet) {
        return this.decentrService.athenaClient.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.switchMap)((athenaClient) => athenaClient.balance.recharge({
            userWallet: this.authService.getActiveUserInstant().wallet.address,
            txHash: txHash,
            isSentinetTopUp: isSentinetTopUp,
            sentinelWallet: sentinelWallet,
        })));
    }
    transferCoins(toAddress, amount, memo) {
        return this.bankService.transferCoins({
            amount: [(0,decentr_js__WEBPACK_IMPORTED_MODULE_0__.createDecentrCoin)(amount)],
            toAddress,
        }, memo);
    }
    transferIbcTokens(toAddress, amount, memo) {
        return this.bankService.sendIbcTokens({
            receiver: toAddress,
            sender: this.authService.getActiveUserInstant().wallet.address,
            sourcePort: _core_services__WEBPACK_IMPORTED_MODULE_1__.IbcRequestParams.port.Transfer,
            sourceChannel: _core_services__WEBPACK_IMPORTED_MODULE_1__.IbcRequestParams.channel.DecentrSentinel,
            timeoutSec: _core_services__WEBPACK_IMPORTED_MODULE_1__.IbcRequestParams.timeout,
            token: (0,decentr_js__WEBPACK_IMPORTED_MODULE_0__.createDecentrCoin)(amount),
        }, memo);
    }
    topUpVpnBalance(toAddress, amount, memo) {
        const vpnCommission = amount * 0.1;
        return this.transferIbcTokens(toAddress, amount - vpnCommission, memo).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.switchMap)(() => this.transferCoins('decentr1mc3la0d5f4md9qfjzwncmcs6av444pkd388wzh', vpnCommission, 'Top up VPN balance commission')));
        // return forkJoin([
        //   this.transferIbcTokens(toAddress, amount, memo),
        //   this.transferCoins('decentr1mc3la0d5f4md9qfjzwncmcs6av444pkd388wzh', amount, 'Top up VPN balance commission'),
        // ]);
    }
}
TransferPageService.ɵfac = function TransferPageService_Factory(t) { return new (t || TransferPageService)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_core_auth__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_1__.BankService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_shared_services_notification__WEBPACK_IMPORTED_MODULE_4__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_ngneat_transloco__WEBPACK_IMPORTED_MODULE_16__.TranslocoService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_1__.DecentrService)); };
TransferPageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjectable"]({ token: TransferPageService, factory: TransferPageService.ɵfac });


/***/ }),

/***/ 62414:
/*!****************************************************************!*\
  !*** ./shared/components/button-back/button-back.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonBackComponent": () => (/* binding */ ButtonBackComponent)
/* harmony export */ });
/* harmony import */ var _svg_icons_arrow_left__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../svg-icons/arrow-left */ 11890);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/svg-icon */ 66722);



const _c0 = ["app-button-back", ""];
class ButtonBackComponent {
    constructor(svgIconRegistry) {
        svgIconRegistry.register([
            _svg_icons_arrow_left__WEBPACK_IMPORTED_MODULE_0__.svgArrowLeft,
        ]);
    }
}
ButtonBackComponent.ɵfac = function ButtonBackComponent_Factory(t) { return new (t || ButtonBackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_2__.SvgIconRegistry)); };
ButtonBackComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ButtonBackComponent, selectors: [["button", "app-button-back", ""], ["a", "app-button-back", ""]], attrs: _c0, decls: 1, vars: 0, consts: [["key", "arrow-left"]], template: function ButtonBackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "svg-icon", 0);
    } }, directives: [_ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_2__.SvgIconComponent], styles: ["[_nghost-%COMP%] {\n  align-items: center;\n  background: rgb(var(--color-button-back-background));\n  border-radius: 12px;\n  color: rgb(var(--color-button-back-text));\n  cursor: pointer;\n  display: inline-flex;\n  padding: 8px;\n  transition: background 0.3s ease;\n}\n[_nghost-%COMP%]:hover {\n  background: rgb(var(--color-button-back-background-hover));\n  color: rgb(var(--color-button-back-text-hover));\n}"], changeDetection: 0 });


/***/ }),

/***/ 66134:
/*!*************************************************************!*\
  !*** ./shared/components/button-back/button-back.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonBackModule": () => (/* binding */ ButtonBackModule)
/* harmony export */ });
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/svg-icon */ 66722);
/* harmony import */ var _button_back_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button-back.component */ 62414);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 89724);



class ButtonBackModule {
}
ButtonBackModule.ɵfac = function ButtonBackModule_Factory(t) { return new (t || ButtonBackModule)(); };
ButtonBackModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ButtonBackModule });
ButtonBackModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_2__.SvgIconsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ButtonBackModule, { declarations: [_button_back_component__WEBPACK_IMPORTED_MODULE_0__.ButtonBackComponent], imports: [_ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_2__.SvgIconsModule], exports: [_button_back_component__WEBPACK_IMPORTED_MODULE_0__.ButtonBackComponent] }); })();


/***/ }),

/***/ 43158:
/*!************************************************!*\
  !*** ./shared/components/button-back/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonBackModule": () => (/* reexport safe */ _button_back_module__WEBPACK_IMPORTED_MODULE_0__.ButtonBackModule)
/* harmony export */ });
/* harmony import */ var _button_back_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button-back.module */ 66134);



/***/ }),

/***/ 93068:
/*!***************************************************************************************************!*\
  !*** ./shared/components/expansion-list/expansion-list-cell/expansion-list-cell-def.directive.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpansionListCellDefDirective": () => (/* binding */ ExpansionListCellDefDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 89724);

class ExpansionListCellDefDirective {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
ExpansionListCellDefDirective.ɵfac = function ExpansionListCellDefDirective_Factory(t) { return new (t || ExpansionListCellDefDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
ExpansionListCellDefDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ExpansionListCellDefDirective, selectors: [["", "appExpansionListCellDef", ""]] });


/***/ }),

/***/ 62581:
/*!***********************************************************************!*\
  !*** ./shared/components/expansion-list/expansion-list-cell/index.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpansionListCellDefDirective": () => (/* reexport safe */ _expansion_list_cell_def_directive__WEBPACK_IMPORTED_MODULE_0__.ExpansionListCellDefDirective)
/* harmony export */ });
/* harmony import */ var _expansion_list_cell_def_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expansion-list-cell-def.directive */ 93068);



/***/ }),

/***/ 88978:
/*!*******************************************************************************************************!*\
  !*** ./shared/components/expansion-list/expansion-list-column/expansion-list-column-def.directive.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpansionListColumnDefDirective": () => (/* binding */ ExpansionListColumnDefDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/coercion */ 92541);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 54121);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 84945);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 42147);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 98168);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 61528);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/until-destroy */ 78177);
/* harmony import */ var _utils_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/observable */ 79822);
/* harmony import */ var _expansion_list_cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../expansion-list-cell */ 62581);
/* harmony import */ var _expansion_list_header_cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../expansion-list-header-cell */ 68849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _expansion_list_expansion_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../expansion-list/expansion-list.service */ 80700);
var ExpansionListColumnDefDirective_1;










let ExpansionListColumnDefDirective = ExpansionListColumnDefDirective_1 = class ExpansionListColumnDefDirective {
    constructor(expansionListService, parentColumnDef) {
        this.expansionListService = expansionListService;
        this.parentColumnDef = parentColumnDef;
        this.chooseFirst = true;
        this.colspan = 1;
        this.activeItem = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(undefined);
        this.items = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(undefined);
    }
    ngOnInit() {
        var _a;
        this.initItemsSource();
        this.loadingTemplate = (_a = this.parentColumnDef) === null || _a === void 0 ? void 0 : _a.loadingTemplate;
        this.items.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.untilDestroyed)(this)).subscribe((items) => {
            if (!this.activeItem.value || !this.trackBy) {
                return this.activeItem.next(undefined);
            }
            const itemIds = items.map((item, index) => this.trackBy(index, item));
            const activeItemId = this.trackBy(-1, this.activeItem.value);
            if (itemIds.includes(activeItemId)) {
                return;
            }
        });
    }
    activateItem(item) {
        this.activeItem.next(item);
    }
    getActiveItem() {
        return this.activeItem.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)());
    }
    getParentActiveItem() {
        var _a;
        return ((_a = this.parentColumnDef) === null || _a === void 0 ? void 0 : _a.getActiveItem()) || (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(undefined);
    }
    getItems() {
        return this.items.asObservable();
    }
    get isFirstColumn() {
        return !this.parentColumnDef;
    }
    get isLastColumn() {
        return !this.childColumnDef;
    }
    registerFooterTemplate(template) {
        this.columnFooterTemplate = template;
    }
    registerLoadingTemplate(template) {
        this.loadingTemplate = template;
    }
    initItemsSource() {
        if (!this.parentColumnDef) {
            this.expansionListService.getData().pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.untilDestroyed)(this)).subscribe(this.items);
            return;
        }
        this.parentColumnDef.getActiveItem().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)((item) => item && this.expansionListService.setActiveColumn(this)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(() => this.items.next(undefined)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)((item) => item ? (0,_utils_observable__WEBPACK_IMPORTED_MODULE_0__.coerceObservable)(this.pluck ? item[this.pluck] : item) : (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)((items) => items && (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceArray)(items)), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.untilDestroyed)(this)).subscribe(this.items);
    }
};
ExpansionListColumnDefDirective.ɵfac = function ExpansionListColumnDefDirective_Factory(t) { return new (t || ExpansionListColumnDefDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_expansion_list_expansion_list_service__WEBPACK_IMPORTED_MODULE_3__.ExpansionListService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ExpansionListColumnDefDirective, 12)); };
ExpansionListColumnDefDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineDirective"]({ type: ExpansionListColumnDefDirective, selectors: [["", "appExpansionListColumnDef", ""]], contentQueries: function ExpansionListColumnDefDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵcontentQuery"](dirIndex, _expansion_list_cell__WEBPACK_IMPORTED_MODULE_1__.ExpansionListCellDefDirective, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵcontentQuery"](dirIndex, _expansion_list_header_cell__WEBPACK_IMPORTED_MODULE_2__.ExpansionListHeaderCellDefDirective, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵcontentQuery"](dirIndex, ExpansionListColumnDefDirective_1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.cellDef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.headerCellDef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.childColumnDef = _t.first);
    } }, inputs: { pluck: ["appExpansionListColumnDef", "pluck"], chooseFirst: ["appExpansionListColumnDefChooseFirst", "chooseFirst"], colspan: ["appExpansionListColumnDefColspan", "colspan"], trackBy: ["appExpansionListColumnDefTrackBy", "trackBy"] } });
ExpansionListColumnDefDirective = ExpansionListColumnDefDirective_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.UntilDestroy)()
], ExpansionListColumnDefDirective);



/***/ }),

/***/ 96328:
/*!***************************************************************************************************!*\
  !*** ./shared/components/expansion-list/expansion-list-column/expansion-list-column.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpansionListColumnComponent": () => (/* binding */ ExpansionListColumnComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 15696);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 42147);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 74970);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 61528);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 65598);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 42993);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/until-destroy */ 78177);
/* harmony import */ var _utils_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/observable */ 79822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _expansion_list_expansion_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../expansion-list/expansion-list.service */ 80700);
/* harmony import */ var _directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../directives/typeface/typeface.directive */ 31857);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 11048);
/* harmony import */ var _button_back_button_back_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../button-back/button-back.component */ 62414);










const _c0 = ["cellsContainer"];
function ExpansionListColumnComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExpansionListColumnComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.back(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ExpansionListColumnComponent_ng_template_3_Template(rf, ctx) { }
function ExpansionListColumnComponent_ng_container_8_ng_template_1_Template(rf, ctx) { }
const _c1 = function (a0) { return { $implicit: a0 }; };
function ExpansionListColumnComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExpansionListColumnComponent_ng_container_8_ng_template_1_Template, 0, 0, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.columnDef.loadingTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, ctx_r3.parentActiveItem)));
} }
function ExpansionListColumnComponent_ng_template_10_ng_container_0_div_1_ng_template_1_Template(rf, ctx) { }
const _c2 = function (a0, a1) { return { $implicit: a0, isActive: a1 }; };
function ExpansionListColumnComponent_ng_template_10_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExpansionListColumnComponent_ng_template_10_ng_container_0_div_1_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const item_r13 = restoredCtx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r15.activateItem(item_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExpansionListColumnComponent_ng_template_10_ng_container_0_div_1_ng_template_1_Template, 0, 0, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-active", item_r13 === ctx_r11.activeItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", ctx_r11.columnDef.cellDef.templateRef)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](4, _c2, item_r13, item_r13 === ctx_r11.activeItem));
} }
function ExpansionListColumnComponent_ng_template_10_ng_container_0_ng_template_2_Template(rf, ctx) { }
function ExpansionListColumnComponent_ng_template_10_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExpansionListColumnComponent_ng_template_10_ng_container_0_div_1_Template, 2, 7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ExpansionListColumnComponent_ng_template_10_ng_container_0_ng_template_2_Template, 0, 0, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const items_r10 = ctx.ngIf;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", items_r10)("ngForTrackBy", ctx_r9.columnDef.trackBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", ctx_r9.columnDef.columnFooterTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c1, items_r10));
} }
function ExpansionListColumnComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ExpansionListColumnComponent_ng_template_10_ng_container_0_Template, 3, 6, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, ctx_r5.items$));
} }
const _c3 = function (a0, a1) { return { $implicit: a0, parentItem: a1 }; };
let ExpansionListColumnComponent = class ExpansionListColumnComponent {
    constructor(changeDetectorRef, expansionListService) {
        this.changeDetectorRef = changeDetectorRef;
        this.expansionListService = expansionListService;
        this.singleDisplayMode = false;
    }
    get isLastColumn() {
        return this.columnDef.isLastColumn;
    }
    get parentActiveItem() {
        return this.columnDef.getParentActiveItem();
    }
    ngOnInit() {
        this.items$ = this.columnDef.getItems();
        this.columnDef.getActiveItem().pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.untilDestroyed)(this)).subscribe((item) => {
            this.activeItem = item;
            this.changeDetectorRef.detectChanges();
        });
        this.isLoading$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([
            (0,_utils_observable__WEBPACK_IMPORTED_MODULE_0__.coerceObservable)(this.parentActiveItem),
            this.items$,
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(([parentActiveItem, items]) => (parentActiveItem || !this.columnDef.parentColumnDef) && !items), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)());
        this.isLoading$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.untilDestroyed)(this)).subscribe(() => this.changeDetectorRef.markForCheck());
        const newItemsLoaded$ = this.isLoading$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)((isLoading) => isLoading), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(() => this.items$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)((items) => !!items), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1))));
        newItemsLoaded$.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.untilDestroyed)(this)).subscribe(() => this.cellsContainer.nativeElement.scrollTop = 0);
        newItemsLoaded$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(() => this.columnDef.chooseFirst), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)((items) => (items === null || items === void 0 ? void 0 : items.length) > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.pluck)(0), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.untilDestroyed)(this)).subscribe((item) => this.activateItem(item));
        this.expansionListService.getActiveColumn().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)((columnDef) => columnDef === this.columnDef), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.untilDestroyed)(this)).subscribe(() => this.activateItem(undefined));
    }
    activateItem(item) {
        if (this.isLastColumn || item === this.activeItem) {
            return;
        }
        this.columnDef.activateItem(item);
    }
    back() {
        this.expansionListService.setActiveColumn((this.columnDef.parentColumnDef || this.columnDef));
    }
};
ExpansionListColumnComponent.ɵfac = function ExpansionListColumnComponent_Factory(t) { return new (t || ExpansionListColumnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_expansion_list_expansion_list_service__WEBPACK_IMPORTED_MODULE_1__.ExpansionListService)); };
ExpansionListColumnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ExpansionListColumnComponent, selectors: [["app-expansion-list-column"]], viewQuery: function ExpansionListColumnComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.cellsContainer = _t.first);
    } }, hostVars: 2, hostBindings: function ExpansionListColumnComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mod-last", ctx.isLastColumn);
    } }, inputs: { columnDef: "columnDef", singleDisplayMode: "singleDisplayMode" }, decls: 12, vars: 16, consts: [["appTypeface", "subheader", 1, "expansion-list-column__header-cell"], ["app-button-back", "", 3, "click", 4, "ngIf"], [1, "expansion-list-column__header-cell__content"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "expansion-list-column__cells-container"], ["cellsContainer", ""], [4, "ngIf", "ngIfElse"], ["items", ""], ["app-button-back", "", 3, "click"], [4, "ngIf"], ["class", "expansion-list-column__cell", "appTypeface", "paragraph", 3, "is-active", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["appTypeface", "paragraph", 1, "expansion-list-column__cell", 3, "click"]], template: function ExpansionListColumnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExpansionListColumnComponent_button_1_Template, 1, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ExpansionListColumnComponent_ng_template_3_Template, 0, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ExpansionListColumnComponent_ng_container_8_Template, 3, 6, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ExpansionListColumnComponent_ng_template_10_Template, 2, 3, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("with-back-button", ctx.singleDisplayMode && !ctx.columnDef.isFirstColumn);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.singleDisplayMode && !ctx.columnDef.isFirstColumn);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", ctx.columnDef.headerCellDef.templateRef)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](13, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 7, ctx.columnDef.getItems()), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 9, ctx.columnDef.getParentActiveItem())));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 11, ctx.isLoading$))("ngIfElse", _r4);
    } }, directives: [_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_2__.TypefaceDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _button_back_button_back_component__WEBPACK_IMPORTED_MODULE_3__.ButtonBackComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe], styles: ["[_nghost-%COMP%] {\n  display: grid;\n  grid-template-rows: max-content minmax(0, 1fr);\n}\n[_nghost-%COMP%]:not(.mod-last)   .expansion-list-column__cell[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 12px 16px;\n}\n[_nghost-%COMP%]:not(.mod-last)   .expansion-list-column__cell[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-expansion-list-cell-hover);\n}\n[_nghost-%COMP%]:not(.mod-last)   .expansion-list-column__cell.is-active[_ngcontent-%COMP%] {\n  background-color: rgba(var(--color-expansion-list-cell-active-background), 0.08);\n  color: var(--color-expansion-list-cell-active);\n}\n.expansion-list-column__header-cell[_ngcontent-%COMP%] {\n  align-items: center;\n  border-bottom: var(--expansion-list--border);\n  grid-column-gap: 16px;\n  column-gap: 16px;\n  display: grid;\n  font-weight: 500;\n  min-height: 68px;\n  padding: 0 16px;\n}\n.expansion-list-column__header-cell[_ngcontent-%COMP%]   .expansion-list-column__header-cell__button-back[_ngcontent-%COMP%] {\n  display: none;\n}\n.expansion-list-column__header-cell.with-back-button[_ngcontent-%COMP%] {\n  grid-template-columns: max-content minmax(0, 1fr);\n}\n.expansion-list-column__header-cell.with-back-button[_ngcontent-%COMP%]   .expansion-list-column__header-cell__button-back[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.expansion-list-column__header-cell__content[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n}\n.expansion-list-column__cells-container[_ngcontent-%COMP%] {\n  overflow: auto;\n}"], changeDetection: 0 });
ExpansionListColumnComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.UntilDestroy)()
], ExpansionListColumnComponent);



/***/ }),

/***/ 98:
/*!*************************************************************************!*\
  !*** ./shared/components/expansion-list/expansion-list-column/index.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpansionListColumnComponent": () => (/* reexport safe */ _expansion_list_column_component__WEBPACK_IMPORTED_MODULE_0__.ExpansionListColumnComponent),
/* harmony export */   "ExpansionListColumnDefDirective": () => (/* reexport safe */ _expansion_list_column_def_directive__WEBPACK_IMPORTED_MODULE_1__.ExpansionListColumnDefDirective)
/* harmony export */ });
/* harmony import */ var _expansion_list_column_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expansion-list-column.component */ 96328);
/* harmony import */ var _expansion_list_column_def_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expansion-list-column-def.directive */ 88978);




/***/ }),

/***/ 41310:
/*!*****************************************************************************************************************!*\
  !*** ./shared/components/expansion-list/expansion-list-header-cell/expansion-list-header-cell-def.directive.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpansionListHeaderCellDefDirective": () => (/* binding */ ExpansionListHeaderCellDefDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 89724);

class ExpansionListHeaderCellDefDirective {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
ExpansionListHeaderCellDefDirective.ɵfac = function ExpansionListHeaderCellDefDirective_Factory(t) { return new (t || ExpansionListHeaderCellDefDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
ExpansionListHeaderCellDefDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ExpansionListHeaderCellDefDirective, selectors: [["", "appExpansionListHeaderCellDef", ""]] });


/***/ }),

/***/ 68849:
/*!******************************************************************************!*\
  !*** ./shared/components/expansion-list/expansion-list-header-cell/index.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpansionListHeaderCellDefDirective": () => (/* reexport safe */ _expansion_list_header_cell_def_directive__WEBPACK_IMPORTED_MODULE_0__.ExpansionListHeaderCellDefDirective)
/* harmony export */ });
/* harmony import */ var _expansion_list_header_cell_def_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expansion-list-header-cell-def.directive */ 41310);



/***/ }),

/***/ 98762:
/*!*****************************************************************************************************!*\
  !*** ./shared/components/expansion-list/expansion-list-loading/expansion-list-loading.directive.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpansionListLoadingDirective": () => (/* binding */ ExpansionListLoadingDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _expansion_list_column__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../expansion-list-column */ 98);


class ExpansionListLoadingDirective {
    constructor(columnDef, templateRef) {
        this.columnDef = columnDef;
        this.templateRef = templateRef;
    }
    ngOnInit() {
        this.columnDef.registerLoadingTemplate(this.templateRef);
    }
}
ExpansionListLoadingDirective.ɵfac = function ExpansionListLoadingDirective_Factory(t) { return new (t || ExpansionListLoadingDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_expansion_list_column__WEBPACK_IMPORTED_MODULE_0__.ExpansionListColumnDefDirective), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef)); };
ExpansionListLoadingDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: ExpansionListLoadingDirective, selectors: [["", "appExpansionListLoading", ""]] });


/***/ }),

/***/ 88349:
/*!*************************************************************************************!*\
  !*** ./shared/components/expansion-list/expansion-list/expansion-list.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpansionListComponent": () => (/* binding */ ExpansionListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/until-destroy */ 78177);
/* harmony import */ var _expansion_list_column__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../expansion-list-column */ 98);
/* harmony import */ var _expansion_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expansion-list.service */ 80700);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 11048);
/* harmony import */ var _expansion_list_column_expansion_list_column_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../expansion-list-column/expansion-list-column.component */ 96328);








function ExpansionListComponent_app_expansion_list_column_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-expansion-list-column", 1);
} if (rf & 2) {
    const columnDef_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mod-hidden", ctx_r0.singleColumnMode && columnDef_r1 !== ctx_r0.columnToDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columnDef", columnDef_r1)("singleDisplayMode", ctx_r0.singleColumnMode);
} }
let ExpansionListComponent = class ExpansionListComponent {
    constructor(changeDetectorRef, expansionListService) {
        this.changeDetectorRef = changeDetectorRef;
        this.expansionListService = expansionListService;
        this.border = true;
    }
    set data(value) {
        this.expansionListService.setData(value);
    }
    get gridTemplateColumnsStyle() {
        return this.singleColumnMode
            ? ''
            : this.columnsDefs && this.columnsDefs.reduce((style, columnDef) => {
                return style + `minmax(0, ${columnDef.colspan}fr)`;
            }, '');
    }
    ngAfterViewInit() {
        this.expansionListService.setActiveColumn(this.columnsDefs.first);
        this.expansionListService.getActiveColumn().pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.untilDestroyed)(this)).subscribe((column) => {
            this.columnToDisplay = column;
            this.changeDetectorRef.markForCheck();
        });
    }
};
ExpansionListComponent.ɵfac = function ExpansionListComponent_Factory(t) { return new (t || ExpansionListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_expansion_list_service__WEBPACK_IMPORTED_MODULE_1__.ExpansionListService)); };
ExpansionListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ExpansionListComponent, selectors: [["app-expansion-list"]], contentQueries: function ExpansionListComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, _expansion_list_column__WEBPACK_IMPORTED_MODULE_0__.ExpansionListColumnDefDirective, 4);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.columnsDefs = _t);
    } }, hostVars: 6, hostBindings: function ExpansionListComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("grid-template-columns", ctx.gridTemplateColumnsStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mod-single-column", ctx.singleColumnMode)("mod-bordered", ctx.border);
    } }, inputs: { data: "data", singleColumnMode: "singleColumnMode", border: "border" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([
            _expansion_list_service__WEBPACK_IMPORTED_MODULE_1__.ExpansionListService,
        ])], decls: 1, vars: 1, consts: [["class", "expansion-list__column", 3, "mod-hidden", "columnDef", "singleDisplayMode", 4, "ngFor", "ngForOf"], [1, "expansion-list__column", 3, "columnDef", "singleDisplayMode"]], template: function ExpansionListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ExpansionListComponent_app_expansion_list_column_0_Template, 1, 4, "app-expansion-list-column", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.columnsDefs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _expansion_list_column_expansion_list_column_component__WEBPACK_IMPORTED_MODULE_2__.ExpansionListColumnComponent], styles: ["[_nghost-%COMP%] {\n  --expansion-list--border: 2px solid var(--color-outlines);\n  border-radius: 12px;\n  display: grid;\n  grid-template-rows: 100%;\n  height: 100%;\n}\n.mod-bordered[_nghost-%COMP%] {\n  border: 2px solid var(--color-outlines);\n}\n.mod-bordered[_nghost-%COMP%]   .expansion-list__column[_ngcontent-%COMP%]    + .expansion-list__column[_ngcontent-%COMP%] {\n  border-left: var(--expansion-list--border);\n}\n.expansion-list__column.mod-hidden[_ngcontent-%COMP%] {\n  display: none;\n}"], changeDetection: 0 });
ExpansionListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.UntilDestroy)()
], ExpansionListComponent);



/***/ }),

/***/ 80700:
/*!***********************************************************************************!*\
  !*** ./shared/components/expansion-list/expansion-list/expansion-list.service.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpansionListService": () => (/* binding */ ExpansionListService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5557);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 42147);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 89724);



class ExpansionListService {
    constructor() {
        this.data = new rxjs__WEBPACK_IMPORTED_MODULE_0__.ReplaySubject(1);
        this.activeColumn = new rxjs__WEBPACK_IMPORTED_MODULE_0__.ReplaySubject();
    }
    getData() {
        return this.data;
    }
    setData(data) {
        this.data.next(data);
    }
    getActiveColumn() {
        return this.activeColumn.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.distinctUntilChanged)());
    }
    setActiveColumn(column) {
        this.activeColumn.next(column);
    }
}
ExpansionListService.ɵfac = function ExpansionListService_Factory(t) { return new (t || ExpansionListService)(); };
ExpansionListService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ExpansionListService, factory: ExpansionListService.ɵfac });


/***/ }),

/***/ 54912:
/*!*************************************************!*\
  !*** ./shared/components/margin-label/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarginLabelModule": () => (/* reexport safe */ _margin_label_module__WEBPACK_IMPORTED_MODULE_0__.MarginLabelModule)
/* harmony export */ });
/* harmony import */ var _margin_label_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./margin-label.module */ 75512);



/***/ }),

/***/ 32863:
/*!******************************************************************!*\
  !*** ./shared/components/margin-label/margin-label.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarginLabelComponent": () => (/* binding */ MarginLabelComponent)
/* harmony export */ });
/* harmony import */ var _svg_icons_chart_arrow_down__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../svg-icons/chart-arrow-down */ 8877);
/* harmony import */ var _svg_icons_chart_arrow_flat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg-icons/chart-arrow-flat */ 43915);
/* harmony import */ var _svg_icons_chart_arrow_up__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../svg-icons/chart-arrow-up */ 50523);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/svg-icon */ 66722);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 11048);
/* harmony import */ var _pipes_positiveNumber_positive_number_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/positiveNumber/positive-number.pipe */ 59600);







class MarginLabelComponent {
    constructor(svgIconRegistry) {
        svgIconRegistry.register([
            _svg_icons_chart_arrow_down__WEBPACK_IMPORTED_MODULE_0__.svgChartArrowDown,
            _svg_icons_chart_arrow_flat__WEBPACK_IMPORTED_MODULE_1__.svgChartArrowFlat,
            _svg_icons_chart_arrow_up__WEBPACK_IMPORTED_MODULE_2__.svgChartArrowUp,
        ]);
    }
    get isNegative() {
        return this.dayMargin < 0;
    }
    get isNeutral() {
        return this.dayMargin === 0;
    }
    get isPositive() {
        return this.dayMargin > 0;
    }
    ngOnChanges() {
        this.marginIcon = this.isNegative
            ? 'chart-arrow-down'
            : this.isPositive
                ? 'chart-arrow-up'
                : 'chart-arrow-flat';
    }
}
MarginLabelComponent.ɵfac = function MarginLabelComponent_Factory(t) { return new (t || MarginLabelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_5__.SvgIconRegistry)); };
MarginLabelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MarginLabelComponent, selectors: [["app-margin-label"]], hostVars: 6, hostBindings: function MarginLabelComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mod-negative", ctx.isNegative)("mod-neutral", ctx.isNeutral)("mod-positive", ctx.isPositive);
    } }, inputs: { dayMargin: "dayMargin", digitsInfo: "digitsInfo" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 7, consts: [["fontSize", "1.142857143em", 1, "color-margin-label-icon", 3, "key"]], template: function MarginLabelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "positiveNumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "svg-icon", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](1, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 5, ctx.dayMargin), ctx.digitsInfo || "1.0-2"), "%\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("key", ctx.marginIcon);
    } }, directives: [_ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_5__.SvgIconComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe, _pipes_positiveNumber_positive_number_pipe__WEBPACK_IMPORTED_MODULE_3__.PositiveNumberPipe], styles: ["[_nghost-%COMP%] {\n  align-items: center;\n  display: inline-flex;\n}\n.mod-negative[_nghost-%COMP%] {\n  color: #FA5454;\n}\n.mod-neutral[_nghost-%COMP%] {\n  color: #929297;\n}\n.mod-positive[_nghost-%COMP%] {\n  color: #03B15E;\n}\n[_nghost-%COMP%]   .color-margin-label-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n}"], changeDetection: 0 });


/***/ }),

/***/ 75512:
/*!***************************************************************!*\
  !*** ./shared/components/margin-label/margin-label.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarginLabelModule": () => (/* binding */ MarginLabelModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 11048);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/svg-icon */ 66722);
/* harmony import */ var _margin_label_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./margin-label.component */ 32863);
/* harmony import */ var _pipes_positiveNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipes/positiveNumber */ 95247);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 89724);





class MarginLabelModule {
}
MarginLabelModule.ɵfac = function MarginLabelModule_Factory(t) { return new (t || MarginLabelModule)(); };
MarginLabelModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MarginLabelModule });
MarginLabelModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _pipes_positiveNumber__WEBPACK_IMPORTED_MODULE_1__.PositiveNumberModule,
            _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_4__.SvgIconsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MarginLabelModule, { declarations: [_margin_label_component__WEBPACK_IMPORTED_MODULE_0__.MarginLabelComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _pipes_positiveNumber__WEBPACK_IMPORTED_MODULE_1__.PositiveNumberModule,
        _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_4__.SvgIconsModule], exports: [_margin_label_component__WEBPACK_IMPORTED_MODULE_0__.MarginLabelComponent] }); })();


/***/ }),

/***/ 91799:
/*!****************************************************************************!*\
  !*** ./shared/directives/bind-query-params/bind-query-params.directive.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BindQueryParamsDirective": () => (/* binding */ BindQueryParamsDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 45113);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1659);



class BindQueryParamsDirective {
    constructor(activatedRoute, ngControl) {
        this.activatedRoute = activatedRoute;
        this.ngControl = ngControl;
    }
    ngAfterViewInit() {
        const queryParams = this.activatedRoute.snapshot.queryParams;
        this.ngControl.control.patchValue(queryParams);
    }
}
BindQueryParamsDirective.ɵfac = function BindQueryParamsDirective_Factory(t) { return new (t || BindQueryParamsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.ControlContainer)); };
BindQueryParamsDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: BindQueryParamsDirective, selectors: [["", "appBindQueryParams", ""]] });


/***/ }),

/***/ 97493:
/*!*************************************************!*\
  !*** ./shared/directives/intersection/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntersectionModule": () => (/* reexport safe */ _intersection_module__WEBPACK_IMPORTED_MODULE_0__.IntersectionModule)
/* harmony export */ });
/* harmony import */ var _intersection_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intersection.module */ 89422);



/***/ }),

/***/ 49181:
/*!***********************************************************************!*\
  !*** ./shared/directives/intersection/intersection-area.directive.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntersectionAreaDirective": () => (/* binding */ IntersectionAreaDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 89724);

class IntersectionAreaDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    get element() {
        return this.elementRef.nativeElement;
    }
}
IntersectionAreaDirective.ɵfac = function IntersectionAreaDirective_Factory(t) { return new (t || IntersectionAreaDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
IntersectionAreaDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: IntersectionAreaDirective, selectors: [["", "appIntersectionArea", ""]] });


/***/ }),

/***/ 58651:
/*!*************************************************************************!*\
  !*** ./shared/directives/intersection/intersection-target.directive.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntersectionTargetDirective": () => (/* binding */ IntersectionTargetDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _intersection_area_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intersection-area.directive */ 49181);



class IntersectionTargetDirective {
    constructor(elementRef, intersectionArea) {
        this.elementRef = elementRef;
        this.intersectionArea = intersectionArea;
        this.threshold = 1;
        this.intersect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
        var _a;
        this.intersectionObserver = new IntersectionObserver((entries) => {
            var _a;
            if ((_a = entries[0]) === null || _a === void 0 ? void 0 : _a.isIntersecting) {
                this.intersect.emit();
            }
        }, {
            root: (_a = this.intersectionArea) === null || _a === void 0 ? void 0 : _a.element,
            threshold: this.threshold,
        });
        this.intersectionObserver.observe(this.elementRef.nativeElement);
    }
    ngOnDestroy() {
        this.intersectionObserver.disconnect();
    }
}
IntersectionTargetDirective.ɵfac = function IntersectionTargetDirective_Factory(t) { return new (t || IntersectionTargetDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_intersection_area_directive__WEBPACK_IMPORTED_MODULE_0__.IntersectionAreaDirective, 8)); };
IntersectionTargetDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: IntersectionTargetDirective, selectors: [["", "appIntersectionTarget", ""]], inputs: { threshold: ["appIntersectionTarget", "threshold"] }, outputs: { intersect: "intersect" } });


/***/ }),

/***/ 89422:
/*!***************************************************************!*\
  !*** ./shared/directives/intersection/intersection.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntersectionModule": () => (/* binding */ IntersectionModule)
/* harmony export */ });
/* harmony import */ var _intersection_area_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intersection-area.directive */ 49181);
/* harmony import */ var _intersection_target_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intersection-target.directive */ 58651);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 89724);



const INTERSECTION_DIRECTIVES = [
    _intersection_area_directive__WEBPACK_IMPORTED_MODULE_0__.IntersectionAreaDirective,
    _intersection_target_directive__WEBPACK_IMPORTED_MODULE_1__.IntersectionTargetDirective,
];
class IntersectionModule {
}
IntersectionModule.ɵfac = function IntersectionModule_Factory(t) { return new (t || IntersectionModule)(); };
IntersectionModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: IntersectionModule });
IntersectionModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](IntersectionModule, { declarations: [_intersection_area_directive__WEBPACK_IMPORTED_MODULE_0__.IntersectionAreaDirective,
        _intersection_target_directive__WEBPACK_IMPORTED_MODULE_1__.IntersectionTargetDirective], exports: [_intersection_area_directive__WEBPACK_IMPORTED_MODULE_0__.IntersectionAreaDirective,
        _intersection_target_directive__WEBPACK_IMPORTED_MODULE_1__.IntersectionTargetDirective] }); })();


/***/ }),

/***/ 16767:
/*!****************************************************************************************!*\
  !*** ./shared/directives/submit-after-validation/submit-after-validation.directive.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubmitAfterValidationDirective": () => (/* binding */ SubmitAfterValidationDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/keycodes */ 44482);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 14581);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 74970);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 61528);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 65857);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 65598);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngneat/until-destroy */ 78177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1659);







let SubmitAfterValidationDirective = class SubmitAfterValidationDirective {
    constructor(elementRef, formGroupDirective) {
        this.elementRef = elementRef;
        this.formGroupDirective = formGroupDirective;
    }
    ngOnInit() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.fromEvent)(this.elementRef.nativeElement, 'keydown').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)((event) => this.formGroupDirective.valid && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.ENTER), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(() => this.formGroupDirective.statusChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeWhile)((status) => status !== 'INVALID'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)((status) => status === 'VALID'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1))), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__.untilDestroyed)(this)).subscribe(() => this.formGroupDirective.ngSubmit.emit());
    }
};
SubmitAfterValidationDirective.ɵfac = function SubmitAfterValidationDirective_Factory(t) { return new (t || SubmitAfterValidationDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective)); };
SubmitAfterValidationDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({ type: SubmitAfterValidationDirective, selectors: [["form", "appSubmitAfterValidation", ""]] });
SubmitAfterValidationDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__.UntilDestroy)()
], SubmitAfterValidationDirective);



/***/ }),

/***/ 95247:
/*!**********************************************!*\
  !*** ./shared/pipes/positiveNumber/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PositiveNumberModule": () => (/* reexport safe */ _positive_number_module__WEBPACK_IMPORTED_MODULE_0__.PositiveNumberModule)
/* harmony export */ });
/* harmony import */ var _positive_number_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./positive-number.module */ 84624);



/***/ }),

/***/ 84624:
/*!***************************************************************!*\
  !*** ./shared/pipes/positiveNumber/positive-number.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PositiveNumberModule": () => (/* binding */ PositiveNumberModule)
/* harmony export */ });
/* harmony import */ var _positive_number_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./positive-number.pipe */ 59600);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 89724);


class PositiveNumberModule {
}
PositiveNumberModule.ɵfac = function PositiveNumberModule_Factory(t) { return new (t || PositiveNumberModule)(); };
PositiveNumberModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PositiveNumberModule });
PositiveNumberModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PositiveNumberModule, { declarations: [_positive_number_pipe__WEBPACK_IMPORTED_MODULE_0__.PositiveNumberPipe], exports: [_positive_number_pipe__WEBPACK_IMPORTED_MODULE_0__.PositiveNumberPipe] }); })();


/***/ }),

/***/ 59600:
/*!*************************************************************!*\
  !*** ./shared/pipes/positiveNumber/positive-number.pipe.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PositiveNumberPipe": () => (/* binding */ PositiveNumberPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 89724);

class PositiveNumberPipe {
    transform(num) {
        return Math.abs(num);
    }
}
PositiveNumberPipe.ɵfac = function PositiveNumberPipe_Factory(t) { return new (t || PositiveNumberPipe)(); };
PositiveNumberPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "positiveNumber", type: PositiveNumberPipe, pure: true });


/***/ }),

/***/ 85249:
/*!*********************************!*\
  !*** ./shared/svg-icons/add.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgAdd": () => (/* binding */ svgAdd)
/* harmony export */ });
const svgAdd = {
    data: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6668 8.66668H8.66683V12.6667H7.3335V8.66668H3.3335V7.33334H7.3335V3.33334H8.66683V7.33334H12.6668V8.66668Z" fill="currentColor"/></svg>`,
    name: 'add'
};


/***/ }),

/***/ 11890:
/*!****************************************!*\
  !*** ./shared/svg-icons/arrow-left.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgArrowLeft": () => (/* binding */ svgArrowLeft)
/* harmony export */ });
const svgArrowLeft = {
    data: `<svg viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 14L8.41 12.59L3.83 8H20V6H3.83L8.42 1.41L7 0L0 7L7 14Z" fill="currentColor"/></svg>`,
    name: 'arrow-left'
};


/***/ }),

/***/ 8877:
/*!**********************************************!*\
  !*** ./shared/svg-icons/chart-arrow-down.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgChartArrowDown": () => (/* binding */ svgChartArrowDown)
/* harmony export */ });
const svgChartArrowDown = {
    data: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.6667 12H14.6667V8H13.3333V9.72386L9.33333 5.72386L6.66666 8.39052L2.4714 4.19526L1.52859 5.13807L6.66666 10.2761L9.33333 7.60948L12.3905 10.6667H10.6667V12Z" fill="currentColor"/></svg>`,
    name: 'chart-arrow-down'
};


/***/ }),

/***/ 43915:
/*!**********************************************!*\
  !*** ./shared/svg-icons/chart-arrow-flat.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgChartArrowFlat": () => (/* binding */ svgChartArrowFlat)
/* harmony export */ });
const svgChartArrowFlat = {
    data: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.8619 4.86194L14 8.00001L10.8619 11.1381L9.91912 10.1953L11.4477 8.66668H2V7.33334H11.4477L9.91912 5.80475L10.8619 4.86194Z" fill="currentColor"/></svg>`,
    name: 'chart-arrow-flat'
};


/***/ }),

/***/ 50523:
/*!********************************************!*\
  !*** ./shared/svg-icons/chart-arrow-up.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgChartArrowUp": () => (/* binding */ svgChartArrowUp)
/* harmony export */ });
const svgChartArrowUp = {
    data: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.6667 4H14.6667V8H13.3333V6.27614L9.33333 10.2761L6.66666 7.60948L2.4714 11.8047L1.52859 10.8619L6.66666 5.72386L9.33333 8.39052L12.3905 5.33333H10.6667V4Z" fill="currentColor"/></svg>`,
    name: 'chart-arrow-up'
};


/***/ }),

/***/ 20055:
/*!**********************************!*\
  !*** ./shared/svg-icons/copy.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgCopy": () => (/* binding */ svgCopy)
/* harmony export */ });
const svgCopy = {
    data: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 20C19.105 20 20 19.105 20 18V11C20 9.895 19.105 9 18 9H15V6C15 4.90694 14.0931 4 13 4H6C4.90694 4 4 4.90694 4 6V13C4 14.0931 4.90694 15 6 15H9V18C9 19.105 9.895 20 11 20H18ZM9 13H6V6H13V9H11C9.895 9 9 9.895 9 11V13Z" fill="currentColor"/></svg>`,
    name: 'copy'
};


/***/ }),

/***/ 31919:
/*!************************************!*\
  !*** ./shared/svg-icons/delete.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgDelete": () => (/* binding */ svgDelete)
/* harmony export */ });
const svgDelete = {
    data: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.6665 1.33325L5.99984 1.99992H2.6665V3.33325H3.33317V13.3333C3.33317 14.062 3.9378 14.6666 4.6665 14.6666H11.3332C12.0619 14.6666 12.6665 14.062 12.6665 13.3333V3.33325H13.3332V1.99992H11.9998H9.99984L9.33317 1.33325H6.6665ZM4.6665 3.33325H11.3332V13.3333H4.6665V3.33325ZM6.47119 5.52856L5.52848 6.47127L7.05713 7.99992L5.52848 9.52856L6.47119 10.4713L7.99984 8.94263L9.52848 10.4713L10.4712 9.52856L8.94254 7.99992L10.4712 6.47127L9.52848 5.52856L7.99984 7.05721L6.47119 5.52856Z" fill="currentColor"/></svg>`,
    name: 'delete'
};


/***/ }),

/***/ 40329:
/*!**********************************!*\
  !*** ./shared/svg-icons/link.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgLink": () => (/* binding */ svgLink)
/* harmony export */ });
const svgLink = {
    data: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 4.92892L9.17158 7.75735L10.5858 9.17156L13.4142 6.34313C14.5809 5.17641 16.4901 5.17641 17.6569 6.34313C18.8236 7.50986 18.8236 9.41905 17.6569 10.5858L14.8284 13.4142L16.2426 14.8284L19.0711 12C21.0227 10.0484 21.0227 6.88054 19.0711 4.92892C17.1195 2.97731 13.9516 2.97731 12 4.92892ZM13.4142 14.8284L10.5858 17.6568C9.41906 18.8236 7.50988 18.8236 6.34315 17.6568C5.17642 16.4901 5.17642 14.5809 6.34315 13.4142L9.17158 10.5858L7.75736 9.17156L4.92894 12C2.97732 13.9516 2.97732 17.1194 4.92894 19.0711C6.88055 21.0227 10.0484 21.0227 12 19.0711L14.8284 16.2426L13.4142 14.8284ZM8.46447 14.1213L14.1213 8.46445L15.5355 9.87867L9.87868 15.5355L8.46447 14.1213Z" fill="currentColor"/></svg>`,
    name: 'link'
};


/***/ }),

/***/ 21437:
/*!*************************************!*\
  !*** ./shared/svg-icons/receive.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgReceive": () => (/* binding */ svgReceive)
/* harmony export */ });
const svgReceive = {
    data: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 4C2 2.89543 2.89543 2 4 2H11V4L4 4V20H20V13H22V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.4141 12.7071H17.9999V14.7071H8.99992V5.70709H10.9999V11.2929L18.2928 3.99999L19.707 5.4142L12.4141 12.7071Z" fill="currentColor"/></svg>`,
    name: 'receive'
};


/***/ }),

/***/ 89368:
/*!************************************!*\
  !*** ./shared/svg-icons/reload.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgReload": () => (/* binding */ svgReload)
/* harmony export */ });
const svgReload = {
    data: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="svg-reload-mask" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><path d="M0 12H6V14H0V24H24V12H18V10H24V0H0V12Z" fill="white"/></mask><g mask="url(#svg-reload-mask)"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z" fill="currentColor"/><path d="M14 10H21V3L14 10Z" fill="currentColor"/><path d="M10 14H3V21L10 14Z" fill="currentColor"/></g></svg>`,
    name: 'reload'
};


/***/ }),

/***/ 5507:
/*!**********************************!*\
  !*** ./shared/svg-icons/send.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgSend": () => (/* binding */ svgSend)
/* harmony export */ });
const svgSend = {
    data: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 4C2 2.89543 2.89543 2 4 2H11V4L4 4V20H20V13H22V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4ZM18.5858 4H13V2H22V11H20V5.41421L12.7071 12.7071L11.2929 11.2929L18.5858 4Z" fill="currentColor"/></svg>`,
    name: 'send'
};


/***/ }),

/***/ 52557:
/*!***********************************!*\
  !*** ./shared/svg-icons/topup.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgTopup": () => (/* binding */ svgTopup)
/* harmony export */ });
const svgTopup = {
    data: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.09505 0.710938L4.70964 2.39323L2.73438 4.85156C2.25915 5.44312 2 6.18034 2 6.9388V9.33333C2 10.1993 2.5668 10.937 3.34375 11.2122C3.31176 12.4289 3.82678 13.6461 4.85026 14.4544C6.5728 15.8149 9.09225 15.5177 10.4531 13.7956C11.2133 12.8336 11.4614 11.6211 11.2279 10.5052L11.2031 10.5104L13.2526 9.06901L13.3138 8.82813C13.3138 8.8281 14 6.14815 14 4H12.6667C12.6667 5.71342 12.1505 7.923 12.0677 8.27214L8.92578 10.4831L8.88411 10.4453C8.58943 10.1483 8.5892 9.68681 8.88542 9.39063L10.5742 7.7513V7.46875C10.5742 5.31869 8.15167 3.95585 6.31771 5.08073C5.69705 5.46181 5.29964 5.96531 4.86198 6.40234L4.66667 6.59766V8.35547C4.49858 8.50608 4.33712 8.66735 4.19271 8.85026C3.94374 9.16549 3.75146 9.50793 3.61198 9.86458C3.44636 9.74499 3.33333 9.55993 3.33333 9.33333V6.9388C3.33333 6.48319 3.48935 6.04106 3.77474 5.6862L5.52344 3.50911L9.57161 1.95573L9.09505 0.710938ZM7.72396 5.99349C8.42681 5.96285 9.0634 6.47844 9.18099 7.24479L8.78906 7.6263C8.50394 7.51329 8.21286 7.42174 7.91536 7.3776C7.27081 7.28197 6.61312 7.3513 6 7.56641V7.16406C6.37889 6.77499 6.70753 6.40663 7.01563 6.21745C7.24778 6.07506 7.48968 6.0037 7.72396 5.99349ZM7.26172 8.66536C7.42079 8.66175 7.58011 8.67414 7.73828 8.69922C7.14998 9.51055 7.21359 10.6615 7.94271 11.3906L7.95573 11.4036L8.82422 12.1836L9.97656 11.3724C9.96709 11.932 9.784 12.4924 9.40755 12.9688V12.9701C8.49361 14.1272 6.83427 14.3215 5.67708 13.4076C4.51993 12.4936 4.32432 10.8343 5.23828 9.67708V9.67578C5.75052 9.02695 6.49969 8.68266 7.26172 8.66536Z" fill="currentColor"/></svg>`,
    name: 'topup'
};


/***/ }),

/***/ 66870:
/*!*****************************************!*\
  !*** ./shared/svg-icons/transaction.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgTransaction": () => (/* binding */ svgTransaction)
/* harmony export */ });
const svgTransaction = {
    data: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.6 19.5H21V21.5H15V15.5H17V18.23C18.83 16.76 20 14.52 20 12C20 7.93005 16.94 4.56005 13 4.07005V2.05005C18.05 2.55005 22 6.81005 22 12C22 14.99 20.68 17.67 18.6 19.5ZM4 12C4 9.48005 5.17 7.23005 7 5.77005V8.50005H9V2.50005H3V4.50005H5.4C3.32 6.33005 2 9.01005 2 12C2 17.19 5.95 21.4501 11 21.9501V19.93C7.06 19.4401 4 16.07 4 12ZM16.24 8.11005L10.58 13.77L7.75 10.94L6.34 12.35L10.58 16.59L17.65 9.52005L16.24 8.11005Z" fill="currentColor"/></svg>`,
    name: 'transaction'
};


/***/ }),

/***/ 47923:
/*!*******************************************!*\
  !*** ./shared/utils/group-by/group-by.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "groupBy": () => (/* binding */ groupBy)
/* harmony export */ });
function groupBy(items, key) {
    const groupMap = items.reduce((map, item) => {
        const keyValue = typeof key === 'function' ? key(item) : item[key];
        const itemsGroup = map.get(keyValue);
        return map.set(keyValue, [...itemsGroup ? itemsGroup : [], item]);
    }, new Map());
    const group = [];
    groupMap.forEach((groupItems, groupKey) => group.push({ items: groupItems, key: groupKey }));
    return group;
}


/***/ }),

/***/ 56388:
/*!****************************************!*\
  !*** ./shared/utils/group-by/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "groupBy": () => (/* reexport safe */ _group_by__WEBPACK_IMPORTED_MODULE_0__.groupBy)
/* harmony export */ });
/* harmony import */ var _group_by__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./group-by */ 47923);



/***/ }),

/***/ 24521:
/*!********************************************************!*\
  !*** ./shared/utils/html/fragment-wrapped-fragment.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFragmentWrappedContainer": () => (/* binding */ createFragmentWrappedContainer)
/* harmony export */ });
const createFragmentWrappedContainer = () => {
    const fragment = document.createDocumentFragment();
    const container = document.createElement('div');
    fragment.appendChild(container);
    return container;
};


/***/ }),

/***/ 47902:
/*!*********************************************!*\
  !*** ./shared/utils/html/get-plain-text.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPlainText": () => (/* binding */ getPlainText)
/* harmony export */ });
/* harmony import */ var _fragment_wrapped_fragment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fragment-wrapped-fragment */ 24521);

const getPlainText = (html) => {
    const container = (0,_fragment_wrapped_fragment__WEBPACK_IMPORTED_MODULE_0__.createFragmentWrappedContainer)();
    container.innerHTML = html;
    return container.innerText;
};


/***/ }),

/***/ 44655:
/*!*******************************************!*\
  !*** ./shared/utils/html/images-count.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getHTMLImagesCount": () => (/* binding */ getHTMLImagesCount)
/* harmony export */ });
/* harmony import */ var _fragment_wrapped_fragment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fragment-wrapped-fragment */ 24521);

const getHTMLImagesCount = (html) => {
    const container = (0,_fragment_wrapped_fragment__WEBPACK_IMPORTED_MODULE_0__.createFragmentWrappedContainer)();
    container.innerHTML = html;
    return container.querySelectorAll('img').length;
};


/***/ }),

/***/ 67068:
/*!************************************!*\
  !*** ./shared/utils/html/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFragmentWrappedContainer": () => (/* reexport safe */ _fragment_wrapped_fragment__WEBPACK_IMPORTED_MODULE_0__.createFragmentWrappedContainer),
/* harmony export */   "getHTMLImagesCount": () => (/* reexport safe */ _images_count__WEBPACK_IMPORTED_MODULE_2__.getHTMLImagesCount),
/* harmony export */   "getNodeRect": () => (/* reexport safe */ _node_rect__WEBPACK_IMPORTED_MODULE_3__.getNodeRect),
/* harmony export */   "getPlainText": () => (/* reexport safe */ _get_plain_text__WEBPACK_IMPORTED_MODULE_1__.getPlainText),
/* harmony export */   "observeDocumentVisibility": () => (/* reexport safe */ _visibility__WEBPACK_IMPORTED_MODULE_4__.observeDocumentVisibility)
/* harmony export */ });
/* harmony import */ var _fragment_wrapped_fragment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fragment-wrapped-fragment */ 24521);
/* harmony import */ var _get_plain_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-plain-text */ 47902);
/* harmony import */ var _images_count__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images-count */ 44655);
/* harmony import */ var _node_rect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node-rect */ 6812);
/* harmony import */ var _visibility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./visibility */ 60585);







/***/ }),

/***/ 6812:
/*!****************************************!*\
  !*** ./shared/utils/html/node-rect.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNodeRect": () => (/* binding */ getNodeRect)
/* harmony export */ });
const getNodeRect = (node) => {
    const range = document.createRange();
    range.selectNode(node);
    return range.getBoundingClientRect();
};


/***/ }),

/***/ 60585:
/*!*****************************************!*\
  !*** ./shared/utils/html/visibility.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "observeDocumentVisibility": () => (/* binding */ observeDocumentVisibility)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 87241);

const observeDocumentVisibility = () => {
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable((subscriber) => {
        const listener = () => {
            const visible = document.visibilityState === 'visible';
            subscriber.next(visible);
        };
        window.addEventListener('visibilitychange', listener);
        return () => window.removeEventListener('visibilitychange', listener);
    });
};


/***/ }),

/***/ 67056:
/*!************************************************!*\
  !*** ./shared/utils/infinite-loading/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfiniteLoadingPresenter": () => (/* reexport safe */ _infinite_loading_presenter__WEBPACK_IMPORTED_MODULE_0__.InfiniteLoadingPresenter),
/* harmony export */   "InfiniteLoadingService": () => (/* reexport safe */ _infinite_loading_service__WEBPACK_IMPORTED_MODULE_1__.InfiniteLoadingService)
/* harmony export */ });
/* harmony import */ var _infinite_loading_presenter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./infinite-loading.presenter */ 54078);
/* harmony import */ var _infinite_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./infinite-loading.service */ 27893);




/***/ }),

/***/ 54078:
/*!*********************************************************************!*\
  !*** ./shared/utils/infinite-loading/infinite-loading.presenter.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfiniteLoadingPresenter": () => (/* binding */ InfiniteLoadingPresenter)
/* harmony export */ });
class InfiniteLoadingPresenter {
    constructor(infiniteLoadingService) {
        this.infiniteLoadingService = infiniteLoadingService;
        this.list$ = infiniteLoadingService.list$;
        this.isLoading$ = infiniteLoadingService.isLoading$;
        this.canLoadMore$ = infiniteLoadingService.canLoadMore$;
    }
    loadMore() {
        this.infiniteLoadingService.loadMoreItems();
    }
}


/***/ }),

/***/ 27893:
/*!*******************************************************************!*\
  !*** ./shared/utils/infinite-loading/infinite-loading.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfiniteLoadingService": () => (/* binding */ InfiniteLoadingService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 54121);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9779);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 98168);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 61528);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 13528);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5490);


class InfiniteLoadingService {
    constructor() {
        this.canLoadMore = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(true);
        this.list = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.loadMore = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.stopLoading = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.dispose$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.loadMore.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(() => this.isLoading.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(() => this.getNextItems().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.stopLoading), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.finalize)(() => this.isLoading.next(false)))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.dispose$)).subscribe((items) => this.pushItems(items));
    }
    dispose() {
        this.dispose$.next();
        this.dispose$.complete();
    }
    get list$() {
        return this.list.asObservable();
    }
    get canLoadMore$() {
        return this.canLoadMore.asObservable();
    }
    get isLoading$() {
        return this.isLoading;
    }
    loadMoreItems() {
        this.loadMore.next();
    }
    reload() {
        this.clear();
        this.loadMoreItems();
    }
    pushItems(items) {
        this.list.next([
            ...this.list.value,
            ...items,
        ]);
    }
    clear() {
        this.stopLoading.next();
        this.list.next([]);
        this.canLoadMore.next(true);
    }
}


/***/ }),

/***/ 14145:
/*!******************************************************!*\
  !*** ./shared/utils/observable/coerce-observable.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "coerceObservable": () => (/* binding */ coerceObservable)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 97);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 84945);

const coerceObservable = (source) => {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.isObservable)(source) ? source : (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(source);
};


/***/ }),

/***/ 79822:
/*!******************************************!*\
  !*** ./shared/utils/observable/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "coerceObservable": () => (/* reexport safe */ _coerce_observable__WEBPACK_IMPORTED_MODULE_0__.coerceObservable)
/* harmony export */ });
/* harmony import */ var _coerce_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coerce-observable */ 14145);



/***/ }),

/***/ 14647:
/*!**************************************************************!*\
  !*** ./shared/utils/validation/base/base-validation.util.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseValidationUtil": () => (/* binding */ BaseValidationUtil)
/* harmony export */ });
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../html */ 67068);

class BaseValidationUtil {
    static isSeedPhraseCorrect(control) {
        if (!control || !control.value) {
            return null;
        }
        const controlValueArr = control.value.trim().split(' ');
        const isInvalid = typeof control.value === 'string'
            && (controlValueArr.length !== 24
                || controlValueArr[controlValueArr.length - 1] === ''
                || controlValueArr[0] === '');
        return isInvalid ? { length: true } : null;
    }
    static minDate(minDate, parseFn) {
        return (control) => {
            return new Date(minDate) > (parseFn ? parseFn(control.value) : new Date(control.value))
                ? {
                    minDate: { value: BaseValidationUtil.dateToString(minDate) },
                }
                : null;
        };
    }
    static maxDate(maxDate, parseFn) {
        return (control) => {
            return new Date(maxDate) < (parseFn ? parseFn(control.value) : new Date(control.value))
                ? {
                    maxDate: { value: BaseValidationUtil.dateToString(maxDate) },
                }
                : null;
        };
    }
    static minHtmlTextLength(minLength) {
        return (control) => {
            const html = control.value;
            const textarea = document.createElement('div');
            textarea.innerHTML = html;
            const htmlTextLength = textarea.textContent.trim().length;
            return htmlTextLength < minLength
                ? {
                    minHtmlTextLength: {
                        current: htmlTextLength,
                        min: minLength,
                    },
                }
                : null;
        };
    }
    static maxStringBytes(maxBytes) {
        return (control) => {
            if (!control.value) {
                return null;
            }
            const bytesLength = new TextEncoder().encode(control.value).length;
            return bytesLength > maxBytes
                ? {
                    maxBytes: {
                        current: bytesLength,
                        max: maxBytes,
                    },
                }
                : null;
        };
    }
    static maxHTMLImages(maxImages) {
        return (control) => {
            if (!control.value) {
                return null;
            }
            const imagesCount = (0,_html__WEBPACK_IMPORTED_MODULE_0__.getHTMLImagesCount)(control.value);
            return imagesCount > maxImages
                ? {
                    maxImages: {
                        current: imagesCount,
                        max: maxImages,
                    },
                }
                : null;
        };
    }
    static dateToString(date) {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return [year, month, day].join('-');
    }
}


/***/ }),

/***/ 19343:
/*!******************************************!*\
  !*** ./shared/utils/validation/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseValidationUtil": () => (/* reexport safe */ _base_base_validation_util__WEBPACK_IMPORTED_MODULE_0__.BaseValidationUtil)
/* harmony export */ });
/* harmony import */ var _base_base_validation_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/base-validation.util */ 14647);



/***/ }),

/***/ 19956:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2015/accordion.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CdkAccordion": () => (/* binding */ CdkAccordion),
/* harmony export */   "CdkAccordionItem": () => (/* binding */ CdkAccordionItem),
/* harmony export */   "CdkAccordionModule": () => (/* binding */ CdkAccordionModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ 92541);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9779);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 42948);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ 29252);





/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Used to generate unique ID for each accordion. */

let nextId$1 = 0;
/**
 * Injection token that can be used to reference instances of `CdkAccordion`. It serves
 * as alternative token to the actual `CdkAccordion` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */

const CDK_ACCORDION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('CdkAccordion');
/**
 * Directive whose purpose is to manage the expanded state of CdkAccordionItem children.
 */

class CdkAccordion {
  constructor() {
    /** Emits when the state of the accordion changes */
    this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Stream that emits true/false when openAll/closeAll is triggered. */

    this._openCloseAllActions = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** A readonly id value to use for unique selection coordination. */

    this.id = `cdk-accordion-${nextId$1++}`;
    this._multi = false;
  }
  /** Whether the accordion should allow multiple expanded accordion items simultaneously. */


  get multi() {
    return this._multi;
  }

  set multi(multi) {
    this._multi = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(multi);
  }
  /** Opens all enabled accordion items in an accordion where multi is enabled. */


  openAll() {
    if (this._multi) {
      this._openCloseAllActions.next(true);
    }
  }
  /** Closes all enabled accordion items in an accordion where multi is enabled. */


  closeAll() {
    this._openCloseAllActions.next(false);
  }

  ngOnChanges(changes) {
    this._stateChanges.next(changes);
  }

  ngOnDestroy() {
    this._stateChanges.complete();

    this._openCloseAllActions.complete();
  }

}

CdkAccordion.ɵfac = function CdkAccordion_Factory(t) {
  return new (t || CdkAccordion)();
};

CdkAccordion.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: CdkAccordion,
  selectors: [["cdk-accordion"], ["", "cdkAccordion", ""]],
  inputs: {
    multi: "multi"
  },
  exportAs: ["cdkAccordion"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: CDK_ACCORDION,
    useExisting: CdkAccordion
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkAccordion, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'cdk-accordion, [cdkAccordion]',
      exportAs: 'cdkAccordion',
      providers: [{
        provide: CDK_ACCORDION,
        useExisting: CdkAccordion
      }]
    }]
  }], null, {
    multi: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Used to generate unique ID for each accordion item. */


let nextId = 0;
/**
 * An basic directive expected to be extended and decorated as a component.  Sets up all
 * events and attributes needed to be managed by a CdkAccordion parent.
 */

class CdkAccordionItem {
  constructor(accordion, _changeDetectorRef, _expansionDispatcher) {
    this.accordion = accordion;
    this._changeDetectorRef = _changeDetectorRef;
    this._expansionDispatcher = _expansionDispatcher;
    /** Subscription to openAll/closeAll events. */

    this._openCloseAllSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription.EMPTY;
    /** Event emitted every time the AccordionItem is closed. */

    this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted every time the AccordionItem is opened. */

    this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted when the AccordionItem is destroyed. */

    this.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Emits whenever the expanded state of the accordion changes.
     * Primarily used to facilitate two-way binding.
     * @docs-private
     */

    this.expandedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** The unique AccordionItem id. */

    this.id = `cdk-accordion-child-${nextId++}`;
    this._expanded = false;
    this._disabled = false;
    /** Unregister function for _expansionDispatcher. */

    this._removeUniqueSelectionListener = () => {};

    this._removeUniqueSelectionListener = _expansionDispatcher.listen((id, accordionId) => {
      if (this.accordion && !this.accordion.multi && this.accordion.id === accordionId && this.id !== id) {
        this.expanded = false;
      }
    }); // When an accordion item is hosted in an accordion, subscribe to open/close events.

    if (this.accordion) {
      this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions();
    }
  }
  /** Whether the AccordionItem is expanded. */


  get expanded() {
    return this._expanded;
  }

  set expanded(expanded) {
    expanded = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(expanded); // Only emit events and update the internal value if the value changes.

    if (this._expanded !== expanded) {
      this._expanded = expanded;
      this.expandedChange.emit(expanded);

      if (expanded) {
        this.opened.emit();
        /**
         * In the unique selection dispatcher, the id parameter is the id of the CdkAccordionItem,
         * the name value is the id of the accordion.
         */

        const accordionId = this.accordion ? this.accordion.id : this.id;

        this._expansionDispatcher.notify(this.id, accordionId);
      } else {
        this.closed.emit();
      } // Ensures that the animation will run when the value is set outside of an `@Input`.
      // This includes cases like the open, close and toggle methods.


      this._changeDetectorRef.markForCheck();
    }
  }
  /** Whether the AccordionItem is disabled. */


  get disabled() {
    return this._disabled;
  }

  set disabled(disabled) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(disabled);
  }
  /** Emits an event for the accordion item being destroyed. */


  ngOnDestroy() {
    this.opened.complete();
    this.closed.complete();
    this.destroyed.emit();
    this.destroyed.complete();

    this._removeUniqueSelectionListener();

    this._openCloseAllSubscription.unsubscribe();
  }
  /** Toggles the expanded state of the accordion item. */


  toggle() {
    if (!this.disabled) {
      this.expanded = !this.expanded;
    }
  }
  /** Sets the expanded state of the accordion item to false. */


  close() {
    if (!this.disabled) {
      this.expanded = false;
    }
  }
  /** Sets the expanded state of the accordion item to true. */


  open() {
    if (!this.disabled) {
      this.expanded = true;
    }
  }

  _subscribeToOpenCloseAllActions() {
    return this.accordion._openCloseAllActions.subscribe(expanded => {
      // Only change expanded state if item is enabled
      if (!this.disabled) {
        this.expanded = expanded;
      }
    });
  }

}

CdkAccordionItem.ɵfac = function CdkAccordionItem_Factory(t) {
  return new (t || CdkAccordionItem)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_ACCORDION, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__.UniqueSelectionDispatcher));
};

CdkAccordionItem.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: CdkAccordionItem,
  selectors: [["cdk-accordion-item"], ["", "cdkAccordionItem", ""]],
  inputs: {
    expanded: "expanded",
    disabled: "disabled"
  },
  outputs: {
    closed: "closed",
    opened: "opened",
    destroyed: "destroyed",
    expandedChange: "expandedChange"
  },
  exportAs: ["cdkAccordionItem"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([// Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
  // registering to the same accordion.
  {
    provide: CDK_ACCORDION,
    useValue: undefined
  }])]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkAccordionItem, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'cdk-accordion-item, [cdkAccordionItem]',
      exportAs: 'cdkAccordionItem',
      providers: [// Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
      // registering to the same accordion.
      {
        provide: CDK_ACCORDION,
        useValue: undefined
      }]
    }]
  }], function () {
    return [{
      type: CdkAccordion,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [CDK_ACCORDION]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__.UniqueSelectionDispatcher
    }];
  }, {
    closed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    opened: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    destroyed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    expandedChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    expanded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class CdkAccordionModule {}

CdkAccordionModule.ɵfac = function CdkAccordionModule_Factory(t) {
  return new (t || CdkAccordionModule)();
};

CdkAccordionModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: CdkAccordionModule
});
CdkAccordionModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkAccordionModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      exports: [CdkAccordion, CdkAccordionItem],
      declarations: [CdkAccordion, CdkAccordionItem]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=accordion.mjs.map

/***/ }),

/***/ 82589:
/*!*******************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2015/layout.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreakpointObserver": () => (/* binding */ BreakpointObserver),
/* harmony export */   "Breakpoints": () => (/* binding */ Breakpoints),
/* harmony export */   "LayoutModule": () => (/* binding */ LayoutModule),
/* harmony export */   "MediaMatcher": () => (/* binding */ MediaMatcher)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 92541);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9779);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 15696);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 86811);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 87241);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 65598);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 11588);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 83151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 27969);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 51927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 13528);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ 6344);






/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

class LayoutModule {}

LayoutModule.ɵfac = function LayoutModule_Factory(t) {
  return new (t || LayoutModule)();
};

LayoutModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: LayoutModule
});
LayoutModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{}]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Global registry for all dynamically-created, injected media queries. */


const mediaQueriesForWebkitCompatibility = new Set();
/** Style tag that holds all of the dynamically-created media queries. */

let mediaQueryStyleNode;
/** A utility for calling matchMedia queries. */

class MediaMatcher {
  constructor(_platform) {
    this._platform = _platform;
    this._matchMedia = this._platform.isBrowser && window.matchMedia ? // matchMedia is bound to the window scope intentionally as it is an illegal invocation to
    // call it from a different scope.
    window.matchMedia.bind(window) : noopMatchMedia;
  }
  /**
   * Evaluates the given media query and returns the native MediaQueryList from which results
   * can be retrieved.
   * Confirms the layout engine will trigger for the selector query provided and returns the
   * MediaQueryList for the query provided.
   */


  matchMedia(query) {
    if (this._platform.WEBKIT || this._platform.BLINK) {
      createEmptyStyleRule(query);
    }

    return this._matchMedia(query);
  }

}

MediaMatcher.ɵfac = function MediaMatcher_Factory(t) {
  return new (t || MediaMatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform));
};

MediaMatcher.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: MediaMatcher,
  factory: MediaMatcher.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediaMatcher, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform
    }];
  }, null);
})();
/**
 * Creates an empty stylesheet that is used to work around browser inconsistencies related to
 * `matchMedia`. At the time of writing, it handles the following cases:
 * 1. On WebKit browsers, a media query has to have at least one rule in order for `matchMedia`
 * to fire. We work around it by declaring a dummy stylesheet with a `@media` declaration.
 * 2. In some cases Blink browsers will stop firing the `matchMedia` listener if none of the rules
 * inside the `@media` match existing elements on the page. We work around it by having one rule
 * targeting the `body`. See https://github.com/angular/components/issues/23546.
 */


function createEmptyStyleRule(query) {
  if (mediaQueriesForWebkitCompatibility.has(query)) {
    return;
  }

  try {
    if (!mediaQueryStyleNode) {
      mediaQueryStyleNode = document.createElement('style');
      mediaQueryStyleNode.setAttribute('type', 'text/css');
      document.head.appendChild(mediaQueryStyleNode);
    }

    if (mediaQueryStyleNode.sheet) {
      mediaQueryStyleNode.sheet.insertRule(`@media ${query} {body{ }}`, 0);
      mediaQueriesForWebkitCompatibility.add(query);
    }
  } catch (e) {
    console.error(e);
  }
}
/** No-op matchMedia replacement for non-browser platforms. */


function noopMatchMedia(query) {
  // Use `as any` here to avoid adding additional necessary properties for
  // the noop matcher.
  return {
    matches: query === 'all' || query === '',
    media: query,
    addListener: () => {},
    removeListener: () => {}
  };
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Utility for checking the matching state of @media queries. */


class BreakpointObserver {
  constructor(_mediaMatcher, _zone) {
    this._mediaMatcher = _mediaMatcher;
    this._zone = _zone;
    /**  A map of all media queries currently being listened for. */

    this._queries = new Map();
    /** A subject for all other observables to takeUntil based on. */

    this._destroySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  }
  /** Completes the active subject, signalling to all other observables to complete. */


  ngOnDestroy() {
    this._destroySubject.next();

    this._destroySubject.complete();
  }
  /**
   * Whether one or more media queries match the current viewport size.
   * @param value One or more media queries to check.
   * @returns Whether any of the media queries match.
   */


  isMatched(value) {
    const queries = splitQueries((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceArray)(value));
    return queries.some(mediaQuery => this._registerQuery(mediaQuery).mql.matches);
  }
  /**
   * Gets an observable of results for the given queries that will emit new results for any changes
   * in matching of the given queries.
   * @param value One or more media queries to check.
   * @returns A stream of matches for the given queries.
   */


  observe(value) {
    const queries = splitQueries((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceArray)(value));
    const observables = queries.map(query => this._registerQuery(query).observable);
    let stateObservable = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)(observables); // Emit the first state immediately, and then debounce the subsequent emissions.

    stateObservable = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.concat)(stateObservable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)), stateObservable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.skip)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(0)));
    return stateObservable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(breakpointStates => {
      const response = {
        matches: false,
        breakpoints: {}
      };
      breakpointStates.forEach(({
        matches,
        query
      }) => {
        response.matches = response.matches || matches;
        response.breakpoints[query] = matches;
      });
      return response;
    }));
  }
  /** Registers a specific query to be listened for. */


  _registerQuery(query) {
    // Only set up a new MediaQueryList if it is not already being listened for.
    if (this._queries.has(query)) {
      return this._queries.get(query);
    }

    const mql = this._mediaMatcher.matchMedia(query); // Create callback for match changes and add it is as a listener.


    const queryObservable = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Observable(observer => {
      // Listener callback methods are wrapped to be placed back in ngZone. Callbacks must be placed
      // back into the zone because matchMedia is only included in Zone.js by loading the
      // webapis-media-query.js file alongside the zone.js file.  Additionally, some browsers do not
      // have MediaQueryList inherit from EventTarget, which causes inconsistencies in how Zone.js
      // patches it.
      const handler = e => this._zone.run(() => observer.next(e));

      mql.addListener(handler);
      return () => {
        mql.removeListener(handler);
      };
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.startWith)(mql), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(({
      matches
    }) => ({
      query,
      matches
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this._destroySubject)); // Add the MediaQueryList to the set of queries.

    const output = {
      observable: queryObservable,
      mql
    };

    this._queries.set(query, output);

    return output;
  }

}

BreakpointObserver.ɵfac = function BreakpointObserver_Factory(t) {
  return new (t || BreakpointObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MediaMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};

BreakpointObserver.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: BreakpointObserver,
  factory: BreakpointObserver.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreakpointObserver, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: MediaMatcher
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, null);
})();
/**
 * Split each query string into separate query strings if two queries are provided as comma
 * separated.
 */


function splitQueries(queries) {
  return queries.map(query => query.split(',')).reduce((a1, a2) => a1.concat(a2)).map(query => query.trim());
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// PascalCase is being used as Breakpoints is used like an enum.
// tslint:disable-next-line:variable-name


const Breakpoints = {
  XSmall: '(max-width: 599.98px)',
  Small: '(min-width: 600px) and (max-width: 959.98px)',
  Medium: '(min-width: 960px) and (max-width: 1279.98px)',
  Large: '(min-width: 1280px) and (max-width: 1919.98px)',
  XLarge: '(min-width: 1920px)',
  Handset: '(max-width: 599.98px) and (orientation: portrait), ' + '(max-width: 959.98px) and (orientation: landscape)',
  Tablet: '(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), ' + '(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)',
  Web: '(min-width: 840px) and (orientation: portrait), ' + '(min-width: 1280px) and (orientation: landscape)',
  HandsetPortrait: '(max-width: 599.98px) and (orientation: portrait)',
  TabletPortrait: '(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)',
  WebPortrait: '(min-width: 840px) and (orientation: portrait)',
  HandsetLandscape: '(max-width: 959.98px) and (orientation: landscape)',
  TabletLandscape: '(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)',
  WebLandscape: '(min-width: 1280px) and (orientation: landscape)'
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */

 //# sourceMappingURL=layout.mjs.map

/***/ }),

/***/ 29072:
/*!***************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2015/expansion.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EXPANSION_PANEL_ANIMATION_TIMING": () => (/* binding */ EXPANSION_PANEL_ANIMATION_TIMING),
/* harmony export */   "MAT_ACCORDION": () => (/* binding */ MAT_ACCORDION),
/* harmony export */   "MAT_EXPANSION_PANEL_DEFAULT_OPTIONS": () => (/* binding */ MAT_EXPANSION_PANEL_DEFAULT_OPTIONS),
/* harmony export */   "MatAccordion": () => (/* binding */ MatAccordion),
/* harmony export */   "MatExpansionModule": () => (/* binding */ MatExpansionModule),
/* harmony export */   "MatExpansionPanel": () => (/* binding */ MatExpansionPanel),
/* harmony export */   "MatExpansionPanelActionRow": () => (/* binding */ MatExpansionPanelActionRow),
/* harmony export */   "MatExpansionPanelContent": () => (/* binding */ MatExpansionPanelContent),
/* harmony export */   "MatExpansionPanelDescription": () => (/* binding */ MatExpansionPanelDescription),
/* harmony export */   "MatExpansionPanelHeader": () => (/* binding */ MatExpansionPanelHeader),
/* harmony export */   "MatExpansionPanelTitle": () => (/* binding */ MatExpansionPanelTitle),
/* harmony export */   "matExpansionAnimations": () => (/* binding */ matExpansionAnimations)
/* harmony export */ });
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/accordion */ 19956);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/portal */ 20389);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 11048);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 5095);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/coercion */ 92541);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/a11y */ 47188);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 42147);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 51927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 74970);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 65598);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/keycodes */ 44482);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 32953);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9779);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 42948);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 9018);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 21860);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 32019);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/collections */ 29252);

















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Token used to provide a `MatAccordion` to `MatExpansionPanel`.
 * Used primarily to avoid circular imports between `MatAccordion` and `MatExpansionPanel`.
 */

const _c0 = ["body"];

function MatExpansionPanel_ng_template_5_Template(rf, ctx) {}

const _c1 = [[["mat-expansion-panel-header"]], "*", [["mat-action-row"]]];
const _c2 = ["mat-expansion-panel-header", "*", "mat-action-row"];

function MatExpansionPanelHeader_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 2);
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@indicatorRotate", ctx_r0._getExpandedState());
  }
}

const _c3 = [[["mat-panel-title"]], [["mat-panel-description"]], "*"];
const _c4 = ["mat-panel-title", "mat-panel-description", "*"];
const MAT_ACCORDION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_ACCORDION');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Time and timing curve for expansion panel animations. */
// Note: Keep this in sync with the Sass variable for the panel header animation.

const EXPANSION_PANEL_ANIMATION_TIMING = '225ms cubic-bezier(0.4,0.0,0.2,1)';
/**
 * Animations used by the Material expansion panel.
 *
 * A bug in angular animation's `state` when ViewContainers are moved using ViewContainerRef.move()
 * causes the animation state of moved components to become `void` upon exit, and not update again
 * upon reentry into the DOM.  This can lead a to situation for the expansion panel where the state
 * of the panel is `expanded` or `collapsed` but the animation state is `void`.
 *
 * To correctly handle animating to the next state, we animate between `void` and `collapsed` which
 * are defined to have the same styles. Since angular animates from the current styles to the
 * destination state's style definition, in situations where we are moving from `void`'s styles to
 * `collapsed` this acts a noop since no style values change.
 *
 * In the case where angular's animation state is out of sync with the expansion panel's state, the
 * expansion panel being `expanded` and angular animations being `void`, the animation from the
 * `expanded`'s effective styles (though in a `void` animation state) to the collapsed state will
 * occur as expected.
 *
 * Angular Bug: https://github.com/angular/angular/issues/18847
 *
 * @docs-private
 */

const matExpansionAnimations = {
  /** Animation that rotates the indicator arrow. */
  indicatorRotate: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('indicatorRotate', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('collapsed, void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    transform: 'rotate(0deg)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    transform: 'rotate(180deg)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('expanded <=> collapsed, void => collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)(EXPANSION_PANEL_ANIMATION_TIMING))]),

  /** Animation that expands and collapses the panel content. */
  bodyExpansion: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('bodyExpansion', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('collapsed, void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    height: '0px',
    visibility: 'hidden'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    height: '*',
    visibility: 'visible'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('expanded <=> collapsed, void => collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)(EXPANSION_PANEL_ANIMATION_TIMING))])
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Expansion panel content that will be rendered lazily
 * after the panel is opened for the first time.
 */

class MatExpansionPanelContent {
  constructor(_template) {
    this._template = _template;
  }

}

MatExpansionPanelContent.ɵfac = function MatExpansionPanelContent_Factory(t) {
  return new (t || MatExpansionPanelContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};

MatExpansionPanelContent.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatExpansionPanelContent,
  selectors: [["ng-template", "matExpansionPanelContent", ""]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatExpansionPanelContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ng-template[matExpansionPanelContent]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
/** Counter for generating unique element ids. */


let uniqueId = 0;
/**
 * Injection token that can be used to configure the default
 * options for the expansion panel component.
 */

const MAT_EXPANSION_PANEL_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_EXPANSION_PANEL_DEFAULT_OPTIONS');
/**
 * This component can be used as a single element to show expandable content, or as one of
 * multiple children of an element with the MatAccordion directive attached.
 */

class MatExpansionPanel extends _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__.CdkAccordionItem {
  constructor(accordion, _changeDetectorRef, _uniqueSelectionDispatcher, _viewContainerRef, _document, _animationMode, defaultOptions) {
    super(accordion, _changeDetectorRef, _uniqueSelectionDispatcher);
    this._viewContainerRef = _viewContainerRef;
    this._animationMode = _animationMode;
    this._hideToggle = false;
    /** An event emitted after the body's expansion animation happens. */

    this.afterExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** An event emitted after the body's collapse animation happens. */

    this.afterCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Stream that emits for changes in `@Input` properties. */

    this._inputChanges = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    /** ID for the associated header element. Used for a11y labelling. */

    this._headerId = `mat-expansion-panel-header-${uniqueId++}`;
    /** Stream of body animation done events. */

    this._bodyAnimationDone = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.accordion = accordion;
    this._document = _document; // We need a Subject with distinctUntilChanged, because the `done` event
    // fires twice on some browsers. See https://github.com/angular/angular/issues/24084

    this._bodyAnimationDone.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)((x, y) => {
      return x.fromState === y.fromState && x.toState === y.toState;
    })).subscribe(event => {
      if (event.fromState !== 'void') {
        if (event.toState === 'expanded') {
          this.afterExpand.emit();
        } else if (event.toState === 'collapsed') {
          this.afterCollapse.emit();
        }
      }
    });

    if (defaultOptions) {
      this.hideToggle = defaultOptions.hideToggle;
    }
  }
  /** Whether the toggle indicator should be hidden. */


  get hideToggle() {
    return this._hideToggle || this.accordion && this.accordion.hideToggle;
  }

  set hideToggle(value) {
    this._hideToggle = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceBooleanProperty)(value);
  }
  /** The position of the expansion indicator. */


  get togglePosition() {
    return this._togglePosition || this.accordion && this.accordion.togglePosition;
  }

  set togglePosition(value) {
    this._togglePosition = value;
  }
  /** Determines whether the expansion panel should have spacing between it and its siblings. */


  _hasSpacing() {
    if (this.accordion) {
      return this.expanded && this.accordion.displayMode === 'default';
    }

    return false;
  }
  /** Gets the expanded state string. */


  _getExpandedState() {
    return this.expanded ? 'expanded' : 'collapsed';
  }
  /** Toggles the expanded state of the expansion panel. */


  toggle() {
    this.expanded = !this.expanded;
  }
  /** Sets the expanded state of the expansion panel to false. */


  close() {
    this.expanded = false;
  }
  /** Sets the expanded state of the expansion panel to true. */


  open() {
    this.expanded = true;
  }

  ngAfterContentInit() {
    if (this._lazyContent) {
      // Render the content as soon as the panel becomes open.
      this.opened.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(() => this.expanded && !this._portal), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1)).subscribe(() => {
        this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__.TemplatePortal(this._lazyContent._template, this._viewContainerRef);
      });
    }
  }

  ngOnChanges(changes) {
    this._inputChanges.next(changes);
  }

  ngOnDestroy() {
    super.ngOnDestroy();

    this._bodyAnimationDone.complete();

    this._inputChanges.complete();
  }
  /** Checks whether the expansion panel's content contains the currently-focused element. */


  _containsFocus() {
    if (this._body) {
      const focusedElement = this._document.activeElement;
      const bodyElement = this._body.nativeElement;
      return focusedElement === bodyElement || bodyElement.contains(focusedElement);
    }

    return false;
  }

}

MatExpansionPanel.ɵfac = function MatExpansionPanel_Factory(t) {
  return new (t || MatExpansionPanel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_ACCORDION, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__.UniqueSelectionDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, 8));
};

MatExpansionPanel.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatExpansionPanel,
  selectors: [["mat-expansion-panel"]],
  contentQueries: function MatExpansionPanel_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatExpansionPanelContent, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._lazyContent = _t.first);
    }
  },
  viewQuery: function MatExpansionPanel_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._body = _t.first);
    }
  },
  hostAttrs: [1, "mat-expansion-panel"],
  hostVars: 6,
  hostBindings: function MatExpansionPanel_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-expanded", ctx.expanded)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-expansion-panel-spacing", ctx._hasSpacing());
    }
  },
  inputs: {
    disabled: "disabled",
    expanded: "expanded",
    hideToggle: "hideToggle",
    togglePosition: "togglePosition"
  },
  outputs: {
    opened: "opened",
    closed: "closed",
    expandedChange: "expandedChange",
    afterExpand: "afterExpand",
    afterCollapse: "afterCollapse"
  },
  exportAs: ["matExpansionPanel"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([// Provide MatAccordion as undefined to prevent nested expansion panels from registering
  // to the same accordion.
  {
    provide: MAT_ACCORDION,
    useValue: undefined
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c2,
  decls: 7,
  vars: 4,
  consts: [["role", "region", 1, "mat-expansion-panel-content", 3, "id"], ["body", ""], [1, "mat-expansion-panel-body"], [3, "cdkPortalOutlet"]],
  template: function MatExpansionPanel_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@bodyExpansion.done", function MatExpansionPanel_Template_div_animation_bodyExpansion_done_1_listener($event) {
        return ctx._bodyAnimationDone.next($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MatExpansionPanel_ng_template_5_Template, 0, 0, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@bodyExpansion", ctx._getExpandedState())("id", ctx.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", ctx._headerId);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", ctx._portal);
    }
  },
  directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__.CdkPortalOutlet],
  styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-content[style*=\"visibility: hidden\"] *{visibility:hidden !important}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],
  encapsulation: 2,
  data: {
    animation: [matExpansionAnimations.bodyExpansion]
  },
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatExpansionPanel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-expansion-panel',
      exportAs: 'matExpansionPanel',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      inputs: ['disabled', 'expanded'],
      outputs: ['opened', 'closed', 'expandedChange'],
      animations: [matExpansionAnimations.bodyExpansion],
      providers: [// Provide MatAccordion as undefined to prevent nested expansion panels from registering
      // to the same accordion.
      {
        provide: MAT_ACCORDION,
        useValue: undefined
      }],
      host: {
        'class': 'mat-expansion-panel',
        '[class.mat-expanded]': 'expanded',
        '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
        '[class.mat-expansion-panel-spacing]': '_hasSpacing()'
      },
      template: "<ng-content select=\"mat-expansion-panel-header\"></ng-content>\n<div class=\"mat-expansion-panel-content\"\n     role=\"region\"\n     [@bodyExpansion]=\"_getExpandedState()\"\n     (@bodyExpansion.done)=\"_bodyAnimationDone.next($event)\"\n     [attr.aria-labelledby]=\"_headerId\"\n     [id]=\"id\"\n     #body>\n  <div class=\"mat-expansion-panel-body\">\n    <ng-content></ng-content>\n    <ng-template [cdkPortalOutlet]=\"_portal\"></ng-template>\n  </div>\n  <ng-content select=\"mat-action-row\"></ng-content>\n</div>\n",
      styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-content[style*=\"visibility: hidden\"] *{visibility:hidden !important}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}\n"]
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_ACCORDION]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__.UniqueSelectionDispatcher
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.ANIMATION_MODULE_TYPE]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    hideToggle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    togglePosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    afterExpand: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    afterCollapse: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    _lazyContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [MatExpansionPanelContent]
    }],
    _body: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['body']
    }]
  });
})();
/**
 * Actions of a `<mat-expansion-panel>`.
 */


class MatExpansionPanelActionRow {}

MatExpansionPanelActionRow.ɵfac = function MatExpansionPanelActionRow_Factory(t) {
  return new (t || MatExpansionPanelActionRow)();
};

MatExpansionPanelActionRow.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatExpansionPanelActionRow,
  selectors: [["mat-action-row"]],
  hostAttrs: [1, "mat-action-row"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatExpansionPanelActionRow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-action-row',
      host: {
        class: 'mat-action-row'
      }
    }]
  }], null, null);
})(); // Boilerplate for applying mixins to MatExpansionPanelHeader.

/** @docs-private */


class MatExpansionPanelHeaderBase {}

const _MatExpansionPanelHeaderMixinBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_13__.mixinTabIndex)(MatExpansionPanelHeaderBase);
/**
 * Header element of a `<mat-expansion-panel>`.
 */


class MatExpansionPanelHeader extends _MatExpansionPanelHeaderMixinBase {
  constructor(panel, _element, _focusMonitor, _changeDetectorRef, defaultOptions, _animationMode, tabIndex) {
    super();
    this.panel = panel;
    this._element = _element;
    this._focusMonitor = _focusMonitor;
    this._changeDetectorRef = _changeDetectorRef;
    this._animationMode = _animationMode;
    this._parentChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_14__.Subscription.EMPTY;
    const accordionHideToggleChange = panel.accordion ? panel.accordion._stateChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(changes => !!(changes['hideToggle'] || changes['togglePosition']))) : rxjs__WEBPACK_IMPORTED_MODULE_15__.EMPTY;
    this.tabIndex = parseInt(tabIndex || '') || 0; // Since the toggle state depends on an @Input on the panel, we
    // need to subscribe and trigger change detection manually.

    this._parentChangeSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.merge)(panel.opened, panel.closed, accordionHideToggleChange, panel._inputChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(changes => {
      return !!(changes['hideToggle'] || changes['disabled'] || changes['togglePosition']);
    }))).subscribe(() => this._changeDetectorRef.markForCheck()); // Avoids focus being lost if the panel contained the focused element and was closed.

    panel.closed.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(() => panel._containsFocus())).subscribe(() => _focusMonitor.focusVia(_element, 'program'));

    if (defaultOptions) {
      this.expandedHeight = defaultOptions.expandedHeight;
      this.collapsedHeight = defaultOptions.collapsedHeight;
    }
  }
  /**
   * Whether the associated panel is disabled. Implemented as a part of `FocusableOption`.
   * @docs-private
   */


  get disabled() {
    return this.panel.disabled;
  }
  /** Toggles the expanded state of the panel. */


  _toggle() {
    if (!this.disabled) {
      this.panel.toggle();
    }
  }
  /** Gets whether the panel is expanded. */


  _isExpanded() {
    return this.panel.expanded;
  }
  /** Gets the expanded state string of the panel. */


  _getExpandedState() {
    return this.panel._getExpandedState();
  }
  /** Gets the panel id. */


  _getPanelId() {
    return this.panel.id;
  }
  /** Gets the toggle position for the header. */


  _getTogglePosition() {
    return this.panel.togglePosition;
  }
  /** Gets whether the expand indicator should be shown. */


  _showToggle() {
    return !this.panel.hideToggle && !this.panel.disabled;
  }
  /**
   * Gets the current height of the header. Null if no custom height has been
   * specified, and if the default height from the stylesheet should be used.
   */


  _getHeaderHeight() {
    const isExpanded = this._isExpanded();

    if (isExpanded && this.expandedHeight) {
      return this.expandedHeight;
    } else if (!isExpanded && this.collapsedHeight) {
      return this.collapsedHeight;
    }

    return null;
  }
  /** Handle keydown event calling to toggle() if appropriate. */


  _keydown(event) {
    switch (event.keyCode) {
      // Toggle for space and enter keys.
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.SPACE:
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.ENTER:
        if (!(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__.hasModifierKey)(event)) {
          event.preventDefault();

          this._toggle();
        }

        break;

      default:
        if (this.panel.accordion) {
          this.panel.accordion._handleHeaderKeydown(event);
        }

        return;
    }
  }
  /**
   * Focuses the panel header. Implemented as a part of `FocusableOption`.
   * @param origin Origin of the action that triggered the focus.
   * @docs-private
   */


  focus(origin, options) {
    if (origin) {
      this._focusMonitor.focusVia(this._element, origin, options);
    } else {
      this._element.nativeElement.focus(options);
    }
  }

  ngAfterViewInit() {
    this._focusMonitor.monitor(this._element).subscribe(origin => {
      if (origin && this.panel.accordion) {
        this.panel.accordion._handleHeaderFocus(this);
      }
    });
  }

  ngOnDestroy() {
    this._parentChangeSubscription.unsubscribe();

    this._focusMonitor.stopMonitoring(this._element);
  }

}

MatExpansionPanelHeader.ɵfac = function MatExpansionPanelHeader_Factory(t) {
  return new (t || MatExpansionPanelHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatExpansionPanel, 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_18__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'));
};

MatExpansionPanelHeader.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatExpansionPanelHeader,
  selectors: [["mat-expansion-panel-header"]],
  hostAttrs: ["role", "button", 1, "mat-expansion-panel-header", "mat-focus-indicator"],
  hostVars: 15,
  hostBindings: function MatExpansionPanelHeader_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatExpansionPanelHeader_click_HostBindingHandler() {
        return ctx._toggle();
      })("keydown", function MatExpansionPanelHeader_keydown_HostBindingHandler($event) {
        return ctx._keydown($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.panel._headerId)("tabindex", ctx.tabIndex)("aria-controls", ctx._getPanelId())("aria-expanded", ctx._isExpanded())("aria-disabled", ctx.panel.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx._getHeaderHeight());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-expanded", ctx._isExpanded())("mat-expansion-toggle-indicator-after", ctx._getTogglePosition() === "after")("mat-expansion-toggle-indicator-before", ctx._getTogglePosition() === "before")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    }
  },
  inputs: {
    tabIndex: "tabIndex",
    expandedHeight: "expandedHeight",
    collapsedHeight: "collapsedHeight"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c4,
  decls: 5,
  vars: 1,
  consts: [[1, "mat-content"], ["class", "mat-expansion-indicator", 4, "ngIf"], [1, "mat-expansion-indicator"]],
  template: function MatExpansionPanelHeader_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatExpansionPanelHeader_span_4_Template, 1, 1, "span", 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._showToggle());
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf],
  styles: [".mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:\"\";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}.cdk-high-contrast-active .mat-expansion-panel .mat-expansion-panel-header.cdk-keyboard-focused:not([aria-disabled=true])::before,.cdk-high-contrast-active .mat-expansion-panel .mat-expansion-panel-header.cdk-program-focused:not([aria-disabled=true])::before,.cdk-high-contrast-active .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:hover:not([aria-disabled=true])::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;border:3px solid;border-radius:4px;content:\"\"}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}\n"],
  encapsulation: 2,
  data: {
    animation: [matExpansionAnimations.indicatorRotate]
  },
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatExpansionPanelHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-expansion-panel-header',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      inputs: ['tabIndex'],
      animations: [matExpansionAnimations.indicatorRotate],
      host: {
        'class': 'mat-expansion-panel-header mat-focus-indicator',
        'role': 'button',
        '[attr.id]': 'panel._headerId',
        '[attr.tabindex]': 'tabIndex',
        '[attr.aria-controls]': '_getPanelId()',
        '[attr.aria-expanded]': '_isExpanded()',
        '[attr.aria-disabled]': 'panel.disabled',
        '[class.mat-expanded]': '_isExpanded()',
        '[class.mat-expansion-toggle-indicator-after]': `_getTogglePosition() === 'after'`,
        '[class.mat-expansion-toggle-indicator-before]': `_getTogglePosition() === 'before'`,
        '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
        '[style.height]': '_getHeaderHeight()',
        '(click)': '_toggle()',
        '(keydown)': '_keydown($event)'
      },
      template: "<span class=\"mat-content\">\n  <ng-content select=\"mat-panel-title\"></ng-content>\n  <ng-content select=\"mat-panel-description\"></ng-content>\n  <ng-content></ng-content>\n</span>\n<span [@indicatorRotate]=\"_getExpandedState()\" *ngIf=\"_showToggle()\"\n      class=\"mat-expansion-indicator\"></span>\n",
      styles: [".mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:\"\";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}.cdk-high-contrast-active .mat-expansion-panel .mat-expansion-panel-header.cdk-keyboard-focused:not([aria-disabled=true])::before,.cdk-high-contrast-active .mat-expansion-panel .mat-expansion-panel-header.cdk-program-focused:not([aria-disabled=true])::before,.cdk-high-contrast-active .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:hover:not([aria-disabled=true])::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;border:3px solid;border-radius:4px;content:\"\"}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}\n"]
    }]
  }], function () {
    return [{
      type: MatExpansionPanel,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_18__.FocusMonitor
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.ANIMATION_MODULE_TYPE]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
        args: ['tabindex']
      }]
    }];
  }, {
    expandedHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    collapsedHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Description element of a `<mat-expansion-panel-header>`.
 */


class MatExpansionPanelDescription {}

MatExpansionPanelDescription.ɵfac = function MatExpansionPanelDescription_Factory(t) {
  return new (t || MatExpansionPanelDescription)();
};

MatExpansionPanelDescription.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatExpansionPanelDescription,
  selectors: [["mat-panel-description"]],
  hostAttrs: [1, "mat-expansion-panel-header-description"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatExpansionPanelDescription, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-panel-description',
      host: {
        class: 'mat-expansion-panel-header-description'
      }
    }]
  }], null, null);
})();
/**
 * Title element of a `<mat-expansion-panel-header>`.
 */


class MatExpansionPanelTitle {}

MatExpansionPanelTitle.ɵfac = function MatExpansionPanelTitle_Factory(t) {
  return new (t || MatExpansionPanelTitle)();
};

MatExpansionPanelTitle.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatExpansionPanelTitle,
  selectors: [["mat-panel-title"]],
  hostAttrs: [1, "mat-expansion-panel-header-title"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatExpansionPanelTitle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-panel-title',
      host: {
        class: 'mat-expansion-panel-header-title'
      }
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Directive for a Material Design Accordion.
 */


class MatAccordion extends _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__.CdkAccordion {
  constructor() {
    super(...arguments);
    /** Headers belonging to this accordion. */

    this._ownHeaders = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList();
    this._hideToggle = false;
    /**
     * Display mode used for all expansion panels in the accordion. Currently two display
     * modes exist:
     *  default - a gutter-like spacing is placed around any expanded panel, placing the expanded
     *     panel at a different elevation from the rest of the accordion.
     *  flat - no spacing is placed around expanded panels, showing all panels at the same
     *     elevation.
     */

    this.displayMode = 'default';
    /** The position of the expansion indicator. */

    this.togglePosition = 'after';
  }
  /** Whether the expansion indicator should be hidden. */


  get hideToggle() {
    return this._hideToggle;
  }

  set hideToggle(show) {
    this._hideToggle = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceBooleanProperty)(show);
  }

  ngAfterContentInit() {
    this._headers.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(this._headers)).subscribe(headers => {
      this._ownHeaders.reset(headers.filter(header => header.panel.accordion === this));

      this._ownHeaders.notifyOnChanges();
    });

    this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_18__.FocusKeyManager(this._ownHeaders).withWrap().withHomeAndEnd();
  }
  /** Handles keyboard events coming in from the panel headers. */


  _handleHeaderKeydown(event) {
    this._keyManager.onKeydown(event);
  }

  _handleHeaderFocus(header) {
    this._keyManager.updateActiveItem(header);
  }

  ngOnDestroy() {
    super.ngOnDestroy();

    this._ownHeaders.destroy();
  }

}

MatAccordion.ɵfac = /* @__PURE__ */function () {
  let ɵMatAccordion_BaseFactory;
  return function MatAccordion_Factory(t) {
    return (ɵMatAccordion_BaseFactory || (ɵMatAccordion_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatAccordion)))(t || MatAccordion);
  };
}();

MatAccordion.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatAccordion,
  selectors: [["mat-accordion"]],
  contentQueries: function MatAccordion_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatExpansionPanelHeader, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._headers = _t);
    }
  },
  hostAttrs: [1, "mat-accordion"],
  hostVars: 2,
  hostBindings: function MatAccordion_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-accordion-multi", ctx.multi);
    }
  },
  inputs: {
    multi: "multi",
    hideToggle: "hideToggle",
    displayMode: "displayMode",
    togglePosition: "togglePosition"
  },
  exportAs: ["matAccordion"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: MAT_ACCORDION,
    useExisting: MatAccordion
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatAccordion, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-accordion',
      exportAs: 'matAccordion',
      inputs: ['multi'],
      providers: [{
        provide: MAT_ACCORDION,
        useExisting: MatAccordion
      }],
      host: {
        class: 'mat-accordion',
        // Class binding which is only used by the test harness as there is no other
        // way for the harness to detect if multiple panel support is enabled.
        '[class.mat-accordion-multi]': 'this.multi'
      }
    }]
  }], null, {
    _headers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [MatExpansionPanelHeader, {
        descendants: true
      }]
    }],
    hideToggle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    displayMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    togglePosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class MatExpansionModule {}

MatExpansionModule.ɵfac = function MatExpansionModule_Factory(t) {
  return new (t || MatExpansionModule)();
};

MatExpansionModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatExpansionModule
});
MatExpansionModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatCommonModule, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__.CdkAccordionModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__.PortalModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatExpansionModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatCommonModule, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__.CdkAccordionModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__.PortalModule],
      exports: [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent],
      declarations: [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=expansion.mjs.map

/***/ }),

/***/ 96146:
/*!*************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2015/tooltip.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_TOOLTIP_DEFAULT_OPTIONS": () => (/* binding */ MAT_TOOLTIP_DEFAULT_OPTIONS),
/* harmony export */   "MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY": () => (/* binding */ MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY),
/* harmony export */   "MAT_TOOLTIP_SCROLL_STRATEGY": () => (/* binding */ MAT_TOOLTIP_SCROLL_STRATEGY),
/* harmony export */   "MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY": () => (/* binding */ MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY),
/* harmony export */   "MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER": () => (/* binding */ MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER),
/* harmony export */   "MatTooltip": () => (/* binding */ MatTooltip),
/* harmony export */   "MatTooltipModule": () => (/* binding */ MatTooltipModule),
/* harmony export */   "SCROLL_THROTTLE_MS": () => (/* binding */ SCROLL_THROTTLE_MS),
/* harmony export */   "TOOLTIP_PANEL_CLASS": () => (/* binding */ TOOLTIP_PANEL_CLASS),
/* harmony export */   "TooltipComponent": () => (/* binding */ TooltipComponent),
/* harmony export */   "_MatTooltipBase": () => (/* binding */ _MatTooltipBase),
/* harmony export */   "_TooltipComponentBase": () => (/* binding */ _TooltipComponentBase),
/* harmony export */   "getMatTooltipInvalidPositionError": () => (/* binding */ getMatTooltipInvalidPositionError),
/* harmony export */   "matTooltipAnimations": () => (/* binding */ matTooltipAnimations)
/* harmony export */ });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ 9160);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/a11y */ 47188);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 11048);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 89724);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 5095);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/scrolling */ 62156);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/coercion */ 92541);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/keycodes */ 44482);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/layout */ 82589);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/platform */ 6344);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/portal */ 20389);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ 32953);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9779);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 13528);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 65598);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/bidi */ 497);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/animations */ 32019);























/** Time in ms to throttle repositioning after scroll events. */

const _c0 = ["tooltip"];
const SCROLL_THROTTLE_MS = 20;
/**
 * CSS class that will be attached to the overlay panel.
 * @deprecated
 * @breaking-change 13.0.0 remove this variable
 */

const TOOLTIP_PANEL_CLASS = 'mat-tooltip-panel';
const PANEL_CLASS = 'tooltip-panel';
/** Options used to bind passive event listeners. */

const passiveListenerOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.normalizePassiveListenerOptions)({
  passive: true
});
/**
 * Time between the user putting the pointer on a tooltip
 * trigger and the long press event being fired.
 */

const LONGPRESS_DELAY = 500;
/**
 * Creates an error to be thrown if the user supplied an invalid tooltip position.
 * @docs-private
 */

function getMatTooltipInvalidPositionError(position) {
  return Error(`Tooltip position "${position}" is invalid.`);
}
/** Injection token that determines the scroll handling while a tooltip is visible. */


const MAT_TOOLTIP_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('mat-tooltip-scroll-strategy');
/** @docs-private */

function MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY(overlay) {
  return () => overlay.scrollStrategies.reposition({
    scrollThrottle: SCROLL_THROTTLE_MS
  });
}
/** @docs-private */


const MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MAT_TOOLTIP_SCROLL_STRATEGY,
  deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.Overlay],
  useFactory: MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY
};
/** Injection token to be used to override the default options for `matTooltip`. */

const MAT_TOOLTIP_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('mat-tooltip-default-options', {
  providedIn: 'root',
  factory: MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY
});
/** @docs-private */

function MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY() {
  return {
    showDelay: 0,
    hideDelay: 0,
    touchendHideDelay: 1500
  };
}

class _MatTooltipBase {
  constructor(_overlay, _elementRef, _scrollDispatcher, _viewContainerRef, _ngZone, _platform, _ariaDescriber, _focusMonitor, scrollStrategy, _dir, _defaultOptions, _document) {
    this._overlay = _overlay;
    this._elementRef = _elementRef;
    this._scrollDispatcher = _scrollDispatcher;
    this._viewContainerRef = _viewContainerRef;
    this._ngZone = _ngZone;
    this._platform = _platform;
    this._ariaDescriber = _ariaDescriber;
    this._focusMonitor = _focusMonitor;
    this._dir = _dir;
    this._defaultOptions = _defaultOptions;
    this._position = 'below';
    this._disabled = false;
    this._viewInitialized = false;
    this._pointerExitEventsInitialized = false;
    this._viewportMargin = 8;
    this._cssClassPrefix = 'mat';
    this._showDelay = this._defaultOptions.showDelay;
    this._hideDelay = this._defaultOptions.hideDelay;
    /**
     * How touch gestures should be handled by the tooltip. On touch devices the tooltip directive
     * uses a long press gesture to show and hide, however it can conflict with the native browser
     * gestures. To work around the conflict, Angular Material disables native gestures on the
     * trigger, but that might not be desirable on particular elements (e.g. inputs and draggable
     * elements). The different values for this option configure the touch event handling as follows:
     * - `auto` - Enables touch gestures for all elements, but tries to avoid conflicts with native
     *   browser gestures on particular elements. In particular, it allows text selection on inputs
     *   and textareas, and preserves the native browser dragging on elements marked as `draggable`.
     * - `on` - Enables touch gestures for all elements and disables native
     *   browser gestures with no exceptions.
     * - `off` - Disables touch gestures. Note that this will prevent the tooltip from
     *   showing on touch devices.
     */

    this.touchGestures = 'auto';
    this._message = '';
    /** Manually-bound passive event listeners. */

    this._passiveListeners = [];
    /** Emits when the component is destroyed. */

    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this._scrollStrategy = scrollStrategy;
    this._document = _document;

    if (_defaultOptions) {
      if (_defaultOptions.position) {
        this.position = _defaultOptions.position;
      }

      if (_defaultOptions.touchGestures) {
        this.touchGestures = _defaultOptions.touchGestures;
      }
    }

    _dir.change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._destroyed)).subscribe(() => {
      if (this._overlayRef) {
        this._updatePosition(this._overlayRef);
      }
    });
  }
  /** Allows the user to define the position of the tooltip relative to the parent element */


  get position() {
    return this._position;
  }

  set position(value) {
    var _a;

    if (value !== this._position) {
      this._position = value;

      if (this._overlayRef) {
        this._updatePosition(this._overlayRef);

        (_a = this._tooltipInstance) === null || _a === void 0 ? void 0 : _a.show(0);

        this._overlayRef.updatePosition();
      }
    }
  }
  /** Disables the display of the tooltip. */


  get disabled() {
    return this._disabled;
  }

  set disabled(value) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceBooleanProperty)(value); // If tooltip is disabled, hide immediately.

    if (this._disabled) {
      this.hide(0);
    } else {
      this._setupPointerEnterEventsIfNeeded();
    }
  }
  /** The default delay in ms before showing the tooltip after show is called */


  get showDelay() {
    return this._showDelay;
  }

  set showDelay(value) {
    this._showDelay = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceNumberProperty)(value);
  }
  /** The default delay in ms before hiding the tooltip after hide is called */


  get hideDelay() {
    return this._hideDelay;
  }

  set hideDelay(value) {
    this._hideDelay = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceNumberProperty)(value);

    if (this._tooltipInstance) {
      this._tooltipInstance._mouseLeaveHideDelay = this._hideDelay;
    }
  }
  /** The message to be displayed in the tooltip */


  get message() {
    return this._message;
  }

  set message(value) {
    this._ariaDescriber.removeDescription(this._elementRef.nativeElement, this._message, 'tooltip'); // If the message is not a string (e.g. number), convert it to a string and trim it.
    // Must convert with `String(value)`, not `${value}`, otherwise Closure Compiler optimises
    // away the string-conversion: https://github.com/angular/components/issues/20684


    this._message = value != null ? String(value).trim() : '';

    if (!this._message && this._isTooltipVisible()) {
      this.hide(0);
    } else {
      this._setupPointerEnterEventsIfNeeded();

      this._updateTooltipMessage();

      this._ngZone.runOutsideAngular(() => {
        // The `AriaDescriber` has some functionality that avoids adding a description if it's the
        // same as the `aria-label` of an element, however we can't know whether the tooltip trigger
        // has a data-bound `aria-label` or when it'll be set for the first time. We can avoid the
        // issue by deferring the description by a tick so Angular has time to set the `aria-label`.
        Promise.resolve().then(() => {
          this._ariaDescriber.describe(this._elementRef.nativeElement, this.message, 'tooltip');
        });
      });
    }
  }
  /** Classes to be passed to the tooltip. Supports the same syntax as `ngClass`. */


  get tooltipClass() {
    return this._tooltipClass;
  }

  set tooltipClass(value) {
    this._tooltipClass = value;

    if (this._tooltipInstance) {
      this._setTooltipClass(this._tooltipClass);
    }
  }

  ngAfterViewInit() {
    // This needs to happen after view init so the initial values for all inputs have been set.
    this._viewInitialized = true;

    this._setupPointerEnterEventsIfNeeded();

    this._focusMonitor.monitor(this._elementRef).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._destroyed)).subscribe(origin => {
      // Note that the focus monitor runs outside the Angular zone.
      if (!origin) {
        this._ngZone.run(() => this.hide(0));
      } else if (origin === 'keyboard') {
        this._ngZone.run(() => this.show());
      }
    });
  }
  /**
   * Dispose the tooltip when destroyed.
   */


  ngOnDestroy() {
    const nativeElement = this._elementRef.nativeElement;
    clearTimeout(this._touchstartTimeout);

    if (this._overlayRef) {
      this._overlayRef.dispose();

      this._tooltipInstance = null;
    } // Clean up the event listeners set in the constructor


    this._passiveListeners.forEach(([event, listener]) => {
      nativeElement.removeEventListener(event, listener, passiveListenerOptions);
    });

    this._passiveListeners.length = 0;

    this._destroyed.next();

    this._destroyed.complete();

    this._ariaDescriber.removeDescription(nativeElement, this.message, 'tooltip');

    this._focusMonitor.stopMonitoring(nativeElement);
  }
  /** Shows the tooltip after the delay in ms, defaults to tooltip-delay-show or 0ms if no input */


  show(delay = this.showDelay) {
    if (this.disabled || !this.message || this._isTooltipVisible() && !this._tooltipInstance._showTimeoutId && !this._tooltipInstance._hideTimeoutId) {
      return;
    }

    const overlayRef = this._createOverlay();

    this._detach();

    this._portal = this._portal || new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__.ComponentPortal(this._tooltipComponent, this._viewContainerRef);
    const instance = this._tooltipInstance = overlayRef.attach(this._portal).instance;
    instance._triggerElement = this._elementRef.nativeElement;
    instance._mouseLeaveHideDelay = this._hideDelay;
    instance.afterHidden().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._destroyed)).subscribe(() => this._detach());

    this._setTooltipClass(this._tooltipClass);

    this._updateTooltipMessage();

    instance.show(delay);
  }
  /** Hides the tooltip after the delay in ms, defaults to tooltip-delay-hide or 0ms if no input */


  hide(delay = this.hideDelay) {
    if (this._tooltipInstance) {
      this._tooltipInstance.hide(delay);
    }
  }
  /** Shows/hides the tooltip */


  toggle() {
    this._isTooltipVisible() ? this.hide() : this.show();
  }
  /** Returns true if the tooltip is currently visible to the user */


  _isTooltipVisible() {
    return !!this._tooltipInstance && this._tooltipInstance.isVisible();
  }
  /** Create the overlay config and position strategy */


  _createOverlay() {
    var _a;

    if (this._overlayRef) {
      return this._overlayRef;
    }

    const scrollableAncestors = this._scrollDispatcher.getAncestorScrollContainers(this._elementRef); // Create connected position strategy that listens for scroll events to reposition.


    const strategy = this._overlay.position().flexibleConnectedTo(this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(false).withViewportMargin(this._viewportMargin).withScrollableContainers(scrollableAncestors);

    strategy.positionChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._destroyed)).subscribe(change => {
      this._updateCurrentPositionClass(change.connectionPair);

      if (this._tooltipInstance) {
        if (change.scrollableViewProperties.isOverlayClipped && this._tooltipInstance.isVisible()) {
          // After position changes occur and the overlay is clipped by
          // a parent scrollable then close the tooltip.
          this._ngZone.run(() => this.hide(0));
        }
      }
    });
    this._overlayRef = this._overlay.create({
      direction: this._dir,
      positionStrategy: strategy,
      panelClass: `${this._cssClassPrefix}-${PANEL_CLASS}`,
      scrollStrategy: this._scrollStrategy()
    });

    this._updatePosition(this._overlayRef);

    this._overlayRef.detachments().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._destroyed)).subscribe(() => this._detach());

    this._overlayRef.outsidePointerEvents().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._destroyed)).subscribe(() => {
      var _a;

      return (_a = this._tooltipInstance) === null || _a === void 0 ? void 0 : _a._handleBodyInteraction();
    });

    this._overlayRef.keydownEvents().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._destroyed)).subscribe(event => {
      if (this._isTooltipVisible() && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.ESCAPE && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.hasModifierKey)(event)) {
        event.preventDefault();
        event.stopPropagation();

        this._ngZone.run(() => this.hide(0));
      }
    });

    if ((_a = this._defaultOptions) === null || _a === void 0 ? void 0 : _a.disableTooltipInteractivity) {
      this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`);
    }

    return this._overlayRef;
  }
  /** Detaches the currently-attached tooltip. */


  _detach() {
    if (this._overlayRef && this._overlayRef.hasAttached()) {
      this._overlayRef.detach();
    }

    this._tooltipInstance = null;
  }
  /** Updates the position of the current tooltip. */


  _updatePosition(overlayRef) {
    const position = overlayRef.getConfig().positionStrategy;

    const origin = this._getOrigin();

    const overlay = this._getOverlayPosition();

    position.withPositions([this._addOffset(Object.assign(Object.assign({}, origin.main), overlay.main)), this._addOffset(Object.assign(Object.assign({}, origin.fallback), overlay.fallback))]);
  }
  /** Adds the configured offset to a position. Used as a hook for child classes. */


  _addOffset(position) {
    return position;
  }
  /**
   * Returns the origin position and a fallback position based on the user's position preference.
   * The fallback position is the inverse of the origin (e.g. `'below' -> 'above'`).
   */


  _getOrigin() {
    const isLtr = !this._dir || this._dir.value == 'ltr';
    const position = this.position;
    let originPosition;

    if (position == 'above' || position == 'below') {
      originPosition = {
        originX: 'center',
        originY: position == 'above' ? 'top' : 'bottom'
      };
    } else if (position == 'before' || position == 'left' && isLtr || position == 'right' && !isLtr) {
      originPosition = {
        originX: 'start',
        originY: 'center'
      };
    } else if (position == 'after' || position == 'right' && isLtr || position == 'left' && !isLtr) {
      originPosition = {
        originX: 'end',
        originY: 'center'
      };
    } else if (typeof ngDevMode === 'undefined' || ngDevMode) {
      throw getMatTooltipInvalidPositionError(position);
    }

    const {
      x,
      y
    } = this._invertPosition(originPosition.originX, originPosition.originY);

    return {
      main: originPosition,
      fallback: {
        originX: x,
        originY: y
      }
    };
  }
  /** Returns the overlay position and a fallback position based on the user's preference */


  _getOverlayPosition() {
    const isLtr = !this._dir || this._dir.value == 'ltr';
    const position = this.position;
    let overlayPosition;

    if (position == 'above') {
      overlayPosition = {
        overlayX: 'center',
        overlayY: 'bottom'
      };
    } else if (position == 'below') {
      overlayPosition = {
        overlayX: 'center',
        overlayY: 'top'
      };
    } else if (position == 'before' || position == 'left' && isLtr || position == 'right' && !isLtr) {
      overlayPosition = {
        overlayX: 'end',
        overlayY: 'center'
      };
    } else if (position == 'after' || position == 'right' && isLtr || position == 'left' && !isLtr) {
      overlayPosition = {
        overlayX: 'start',
        overlayY: 'center'
      };
    } else if (typeof ngDevMode === 'undefined' || ngDevMode) {
      throw getMatTooltipInvalidPositionError(position);
    }

    const {
      x,
      y
    } = this._invertPosition(overlayPosition.overlayX, overlayPosition.overlayY);

    return {
      main: overlayPosition,
      fallback: {
        overlayX: x,
        overlayY: y
      }
    };
  }
  /** Updates the tooltip message and repositions the overlay according to the new message length */


  _updateTooltipMessage() {
    // Must wait for the message to be painted to the tooltip so that the overlay can properly
    // calculate the correct positioning based on the size of the text.
    if (this._tooltipInstance) {
      this._tooltipInstance.message = this.message;

      this._tooltipInstance._markForCheck();

      this._ngZone.onMicrotaskEmpty.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._destroyed)).subscribe(() => {
        if (this._tooltipInstance) {
          this._overlayRef.updatePosition();
        }
      });
    }
  }
  /** Updates the tooltip class */


  _setTooltipClass(tooltipClass) {
    if (this._tooltipInstance) {
      this._tooltipInstance.tooltipClass = tooltipClass;

      this._tooltipInstance._markForCheck();
    }
  }
  /** Inverts an overlay position. */


  _invertPosition(x, y) {
    if (this.position === 'above' || this.position === 'below') {
      if (y === 'top') {
        y = 'bottom';
      } else if (y === 'bottom') {
        y = 'top';
      }
    } else {
      if (x === 'end') {
        x = 'start';
      } else if (x === 'start') {
        x = 'end';
      }
    }

    return {
      x,
      y
    };
  }
  /** Updates the class on the overlay panel based on the current position of the tooltip. */


  _updateCurrentPositionClass(connectionPair) {
    const {
      overlayY,
      originX,
      originY
    } = connectionPair;
    let newPosition; // If the overlay is in the middle along the Y axis,
    // it means that it's either before or after.

    if (overlayY === 'center') {
      // Note that since this information is used for styling, we want to
      // resolve `start` and `end` to their real values, otherwise consumers
      // would have to remember to do it themselves on each consumption.
      if (this._dir && this._dir.value === 'rtl') {
        newPosition = originX === 'end' ? 'left' : 'right';
      } else {
        newPosition = originX === 'start' ? 'left' : 'right';
      }
    } else {
      newPosition = overlayY === 'bottom' && originY === 'top' ? 'above' : 'below';
    }

    if (newPosition !== this._currentPosition) {
      const overlayRef = this._overlayRef;

      if (overlayRef) {
        const classPrefix = `${this._cssClassPrefix}-${PANEL_CLASS}-`;
        overlayRef.removePanelClass(classPrefix + this._currentPosition);
        overlayRef.addPanelClass(classPrefix + newPosition);
      }

      this._currentPosition = newPosition;
    }
  }
  /** Binds the pointer events to the tooltip trigger. */


  _setupPointerEnterEventsIfNeeded() {
    // Optimization: Defer hooking up events if there's no message or the tooltip is disabled.
    if (this._disabled || !this.message || !this._viewInitialized || this._passiveListeners.length) {
      return;
    } // The mouse events shouldn't be bound on mobile devices, because they can prevent the
    // first tap from firing its click event or can cause the tooltip to open for clicks.


    if (this._platformSupportsMouseEvents()) {
      this._passiveListeners.push(['mouseenter', () => {
        this._setupPointerExitEventsIfNeeded();

        this.show();
      }]);
    } else if (this.touchGestures !== 'off') {
      this._disableNativeGesturesIfNecessary();

      this._passiveListeners.push(['touchstart', () => {
        // Note that it's important that we don't `preventDefault` here,
        // because it can prevent click events from firing on the element.
        this._setupPointerExitEventsIfNeeded();

        clearTimeout(this._touchstartTimeout);
        this._touchstartTimeout = setTimeout(() => this.show(), LONGPRESS_DELAY);
      }]);
    }

    this._addListeners(this._passiveListeners);
  }

  _setupPointerExitEventsIfNeeded() {
    if (this._pointerExitEventsInitialized) {
      return;
    }

    this._pointerExitEventsInitialized = true;
    const exitListeners = [];

    if (this._platformSupportsMouseEvents()) {
      exitListeners.push(['mouseleave', event => {
        var _a;

        const newTarget = event.relatedTarget;

        if (!newTarget || !((_a = this._overlayRef) === null || _a === void 0 ? void 0 : _a.overlayElement.contains(newTarget))) {
          this.hide();
        }
      }], ['wheel', event => this._wheelListener(event)]);
    } else if (this.touchGestures !== 'off') {
      this._disableNativeGesturesIfNecessary();

      const touchendListener = () => {
        clearTimeout(this._touchstartTimeout);
        this.hide(this._defaultOptions.touchendHideDelay);
      };

      exitListeners.push(['touchend', touchendListener], ['touchcancel', touchendListener]);
    }

    this._addListeners(exitListeners);

    this._passiveListeners.push(...exitListeners);
  }

  _addListeners(listeners) {
    listeners.forEach(([event, listener]) => {
      this._elementRef.nativeElement.addEventListener(event, listener, passiveListenerOptions);
    });
  }

  _platformSupportsMouseEvents() {
    return !this._platform.IOS && !this._platform.ANDROID;
  }
  /** Listener for the `wheel` event on the element. */


  _wheelListener(event) {
    if (this._isTooltipVisible()) {
      const elementUnderPointer = this._document.elementFromPoint(event.clientX, event.clientY);

      const element = this._elementRef.nativeElement; // On non-touch devices we depend on the `mouseleave` event to close the tooltip, but it
      // won't fire if the user scrolls away using the wheel without moving their cursor. We
      // work around it by finding the element under the user's cursor and closing the tooltip
      // if it's not the trigger.

      if (elementUnderPointer !== element && !element.contains(elementUnderPointer)) {
        this.hide();
      }
    }
  }
  /** Disables the native browser gestures, based on how the tooltip has been configured. */


  _disableNativeGesturesIfNecessary() {
    const gestures = this.touchGestures;

    if (gestures !== 'off') {
      const element = this._elementRef.nativeElement;
      const style = element.style; // If gestures are set to `auto`, we don't disable text selection on inputs and
      // textareas, because it prevents the user from typing into them on iOS Safari.

      if (gestures === 'on' || element.nodeName !== 'INPUT' && element.nodeName !== 'TEXTAREA') {
        style.userSelect = style.msUserSelect = style.webkitUserSelect = style.MozUserSelect = 'none';
      } // If we have `auto` gestures and the element uses native HTML dragging,
      // we don't set `-webkit-user-drag` because it prevents the native behavior.


      if (gestures === 'on' || !element.draggable) {
        style.webkitUserDrag = 'none';
      }

      style.touchAction = 'none';
      style.webkitTapHighlightColor = 'transparent';
    }
  }

}

_MatTooltipBase.ɵfac = function _MatTooltipBase_Factory(t) {
  _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinvalidFactory"]();
};

_MatTooltipBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: _MatTooltipBase,
  inputs: {
    position: ["matTooltipPosition", "position"],
    disabled: ["matTooltipDisabled", "disabled"],
    showDelay: ["matTooltipShowDelay", "showDelay"],
    hideDelay: ["matTooltipHideDelay", "hideDelay"],
    touchGestures: ["matTooltipTouchGestures", "touchGestures"],
    message: ["matTooltip", "message"],
    tooltipClass: ["matTooltipClass", "tooltipClass"]
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_MatTooltipBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], function () {
    return [{
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.Overlay
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__.ScrollDispatcher
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.Platform
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.AriaDescriber
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.FocusMonitor
    }, {
      type: undefined
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__.Directionality
    }, {
      type: undefined
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT]
      }]
    }];
  }, {
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['matTooltipPosition']
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['matTooltipDisabled']
    }],
    showDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['matTooltipShowDelay']
    }],
    hideDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['matTooltipHideDelay']
    }],
    touchGestures: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['matTooltipTouchGestures']
    }],
    message: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['matTooltip']
    }],
    tooltipClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['matTooltipClass']
    }]
  });
})();
/**
 * Directive that attaches a material design tooltip to the host element. Animates the showing and
 * hiding of a tooltip provided position (defaults to below the element).
 *
 * https://material.io/design/components/tooltips.html
 */


class MatTooltip extends _MatTooltipBase {
  constructor(overlay, elementRef, scrollDispatcher, viewContainerRef, ngZone, platform, ariaDescriber, focusMonitor, scrollStrategy, dir, defaultOptions, _document) {
    super(overlay, elementRef, scrollDispatcher, viewContainerRef, ngZone, platform, ariaDescriber, focusMonitor, scrollStrategy, dir, defaultOptions, _document);
    this._tooltipComponent = TooltipComponent;
  }

}

MatTooltip.ɵfac = function MatTooltip_Factory(t) {
  return new (t || MatTooltip)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__.ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.AriaDescriber), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_TOOLTIP_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_TOOLTIP_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT));
};

MatTooltip.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: MatTooltip,
  selectors: [["", "matTooltip", ""]],
  hostAttrs: [1, "mat-tooltip-trigger"],
  exportAs: ["matTooltip"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatTooltip, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[matTooltip]',
      exportAs: 'matTooltip',
      host: {
        'class': 'mat-tooltip-trigger'
      }
    }]
  }], function () {
    return [{
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.Overlay
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__.ScrollDispatcher
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.Platform
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.AriaDescriber
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.FocusMonitor
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [MAT_TOOLTIP_SCROLL_STRATEGY]
      }]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [MAT_TOOLTIP_DEFAULT_OPTIONS]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT]
      }]
    }];
  }, null);
})();

class _TooltipComponentBase {
  constructor(_changeDetectorRef, animationMode) {
    this._changeDetectorRef = _changeDetectorRef;
    /** Property watched by the animation framework to show or hide the tooltip */

    this._visibility = 'initial';
    /** Whether interactions on the page should close the tooltip */

    this._closeOnInteraction = false;
    /** Whether the tooltip is currently visible. */

    this._isVisible = false;
    /** Subject for notifying that the tooltip has been hidden from the view */

    this._onHide = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this._animationsDisabled = animationMode === 'NoopAnimations';
  }
  /**
   * Shows the tooltip with an animation originating from the provided origin
   * @param delay Amount of milliseconds to the delay showing the tooltip.
   */


  show(delay) {
    // Cancel the delayed hide if it is scheduled
    clearTimeout(this._hideTimeoutId);
    this._showTimeoutId = setTimeout(() => {
      this._toggleVisibility(true);

      this._showTimeoutId = undefined;
    }, delay);
  }
  /**
   * Begins the animation to hide the tooltip after the provided delay in ms.
   * @param delay Amount of milliseconds to delay showing the tooltip.
   */


  hide(delay) {
    // Cancel the delayed show if it is scheduled
    clearTimeout(this._showTimeoutId);
    this._hideTimeoutId = setTimeout(() => {
      this._toggleVisibility(false);

      this._hideTimeoutId = undefined;
    }, delay);
  }
  /** Returns an observable that notifies when the tooltip has been hidden from view. */


  afterHidden() {
    return this._onHide;
  }
  /** Whether the tooltip is being displayed. */


  isVisible() {
    return this._isVisible;
  }

  ngOnDestroy() {
    clearTimeout(this._showTimeoutId);
    clearTimeout(this._hideTimeoutId);

    this._onHide.complete();

    this._triggerElement = null;
  }
  /**
   * Interactions on the HTML body should close the tooltip immediately as defined in the
   * material design spec.
   * https://material.io/design/components/tooltips.html#behavior
   */


  _handleBodyInteraction() {
    if (this._closeOnInteraction) {
      this.hide(0);
    }
  }
  /**
   * Marks that the tooltip needs to be checked in the next change detection run.
   * Mainly used for rendering the initial text before positioning a tooltip, which
   * can be problematic in components with OnPush change detection.
   */


  _markForCheck() {
    this._changeDetectorRef.markForCheck();
  }

  _handleMouseLeave({
    relatedTarget
  }) {
    if (!relatedTarget || !this._triggerElement.contains(relatedTarget)) {
      this.hide(this._mouseLeaveHideDelay);
    }
  }
  /**
   * Callback for when the timeout in this.show() gets completed.
   * This method is only needed by the mdc-tooltip, and so it is only implemented
   * in the mdc-tooltip, not here.
   */


  _onShow() {}
  /** Event listener dispatched when an animation on the tooltip finishes. */


  _handleAnimationEnd({
    animationName
  }) {
    if (animationName === this._showAnimation || animationName === this._hideAnimation) {
      this._finalizeAnimation(animationName === this._showAnimation);
    }
  }
  /** Handles the cleanup after an animation has finished. */


  _finalizeAnimation(toVisible) {
    if (toVisible) {
      this._closeOnInteraction = true;
    } else if (!this.isVisible()) {
      this._onHide.next();
    }
  }
  /** Toggles the visibility of the tooltip element. */


  _toggleVisibility(isVisible) {
    // We set the classes directly here ourselves so that toggling the tooltip state
    // isn't bound by change detection. This allows us to hide it even if the
    // view ref has been detached from the CD tree.
    const tooltip = this._tooltip.nativeElement;
    const showClass = this._showAnimation;
    const hideClass = this._hideAnimation;
    tooltip.classList.remove(isVisible ? hideClass : showClass);
    tooltip.classList.add(isVisible ? showClass : hideClass);
    this._isVisible = isVisible; // It's common for internal apps to disable animations using `* { animation: none !important }`
    // which can break the opening sequence. Try to detect such cases and work around them.

    if (isVisible && !this._animationsDisabled && typeof getComputedStyle === 'function') {
      const styles = getComputedStyle(tooltip); // Use `getPropertyValue` to avoid issues with property renaming.

      if (styles.getPropertyValue('animation-duration') === '0s' || styles.getPropertyValue('animation-name') === 'none') {
        this._animationsDisabled = true;
      }
    }

    if (isVisible) {
      this._onShow();
    }

    if (this._animationsDisabled) {
      tooltip.classList.add('_mat-animation-noopable');

      this._finalizeAnimation(isVisible);
    }
  }

}

_TooltipComponentBase.ɵfac = function _TooltipComponentBase_Factory(t) {
  return new (t || _TooltipComponentBase)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.ANIMATION_MODULE_TYPE, 8));
};

_TooltipComponentBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: _TooltipComponentBase
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_TooltipComponentBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.ANIMATION_MODULE_TYPE]
      }]
    }];
  }, null);
})();
/**
 * Internal component that wraps the tooltip's content.
 * @docs-private
 */


class TooltipComponent extends _TooltipComponentBase {
  constructor(changeDetectorRef, _breakpointObserver, animationMode) {
    super(changeDetectorRef, animationMode);
    this._breakpointObserver = _breakpointObserver;
    /** Stream that emits whether the user has a handset-sized display.  */

    this._isHandset = this._breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__.Breakpoints.Handset);
    this._showAnimation = 'mat-tooltip-show';
    this._hideAnimation = 'mat-tooltip-hide';
  }

}

TooltipComponent.ɵfac = function TooltipComponent_Factory(t) {
  return new (t || TooltipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.ANIMATION_MODULE_TYPE, 8));
};

TooltipComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: TooltipComponent,
  selectors: [["mat-tooltip-component"]],
  viewQuery: function TooltipComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._tooltip = _t.first);
    }
  },
  hostAttrs: ["aria-hidden", "true"],
  hostVars: 2,
  hostBindings: function TooltipComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseleave", function TooltipComponent_mouseleave_HostBindingHandler($event) {
        return ctx._handleMouseLeave($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("zoom", ctx.isVisible() ? 1 : null);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 4,
  vars: 6,
  consts: [[1, "mat-tooltip", 3, "ngClass", "animationend"], ["tooltip", ""]],
  template: function TooltipComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("animationend", function TooltipComponent_Template_div_animationend_0_listener($event) {
        return ctx._handleAnimationEnd($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      let tmp_0_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-tooltip-handset", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 4, ctx._isHandset)) == null ? null : tmp_0_0.matches);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.tooltipClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.message);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe],
  styles: [".mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis;transform:scale(0)}.mat-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.cdk-high-contrast-active .mat-tooltip{outline:solid 1px}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}.mat-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-tooltip-show{0%{opacity:0;transform:scale(0)}50%{opacity:.5;transform:scale(0.99)}100%{opacity:1;transform:scale(1)}}@keyframes mat-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(1)}}.mat-tooltip-show{animation:mat-tooltip-show 200ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-tooltip-hide{animation:mat-tooltip-hide 100ms cubic-bezier(0, 0, 0.2, 1) forwards}\n"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TooltipComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'mat-tooltip-component',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      host: {
        // Forces the element to have a layout in IE and Edge. This fixes issues where the element
        // won't be rendered if the animations are disabled or there is no web animations polyfill.
        '[style.zoom]': 'isVisible() ? 1 : null',
        '(mouseleave)': '_handleMouseLeave($event)',
        'aria-hidden': 'true'
      },
      template: "<div #tooltip\n     class=\"mat-tooltip\"\n     (animationend)=\"_handleAnimationEnd($event)\"\n     [ngClass]=\"tooltipClass\"\n     [class.mat-tooltip-handset]=\"(_isHandset | async)?.matches\">{{message}}</div>\n",
      styles: [".mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis;transform:scale(0)}.mat-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.cdk-high-contrast-active .mat-tooltip{outline:solid 1px}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}.mat-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-tooltip-show{0%{opacity:0;transform:scale(0)}50%{opacity:.5;transform:scale(0.99)}100%{opacity:1;transform:scale(1)}}@keyframes mat-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(1)}}.mat-tooltip-show{animation:mat-tooltip-show 200ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-tooltip-hide{animation:mat-tooltip-hide 100ms cubic-bezier(0, 0, 0.2, 1) forwards}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }, {
      type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__.BreakpointObserver
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.ANIMATION_MODULE_TYPE]
      }]
    }];
  }, {
    _tooltip: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['tooltip', {
        // Use a static query here since we interact directly with
        // the DOM which can happen before `ngAfterViewInit`.
        static: true
      }]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class MatTooltipModule {}

MatTooltipModule.ɵfac = function MatTooltipModule_Factory(t) {
  return new (t || MatTooltipModule)();
};

MatTooltipModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: MatTooltipModule
});
MatTooltipModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER],
  imports: [[_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.A11yModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.OverlayModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatCommonModule], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatCommonModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__.CdkScrollableModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatTooltipModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.A11yModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.OverlayModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatCommonModule],
      exports: [MatTooltip, TooltipComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatCommonModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__.CdkScrollableModule],
      declarations: [MatTooltip, TooltipComponent],
      providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Animations used by MatTooltip.
 * @docs-private
 */


const matTooltipAnimations = {
  /** Animation that transitions a tooltip in and out. */
  tooltipState: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.trigger)('state', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.state)('initial, void, hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.style)({
    opacity: 0,
    transform: 'scale(0)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.state)('visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.style)({
    transform: 'scale(1)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.transition)('* => visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.animate)('200ms cubic-bezier(0, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.style)({
    opacity: 0,
    transform: 'scale(0)',
    offset: 0
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.style)({
    opacity: 0.5,
    transform: 'scale(0.99)',
    offset: 0.5
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.style)({
    opacity: 1,
    transform: 'scale(1)',
    offset: 1
  })]))), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.transition)('* => hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.animate)('100ms cubic-bezier(0, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.style)({
    opacity: 0
  })))])
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */

 //# sourceMappingURL=tooltip.mjs.map

/***/ })

}]);