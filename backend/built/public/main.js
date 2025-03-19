"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["main"],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_partials_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/partials/header/header.component */ 4512);
/* harmony import */ var _components_partials_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/partials/loading/loading.component */ 988);




class AppComponent {
  constructor() {
    this.title = 'frontend';
  }
  static {
    this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      standalone: false,
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-loading")(1, "app-header")(2, "router-outlet");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _components_partials_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _components_partials_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__.LoadingComponent],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnS0FBZ0siLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _components_partials_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/partials/header/header.component */ 4512);
/* harmony import */ var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/home/home.component */ 8078);
/* harmony import */ var _components_partials_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/partials/star-rating/star-rating.component */ 6288);
/* harmony import */ var _components_partials_search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/partials/search/search.component */ 6602);
/* harmony import */ var _components_partials_tags_tags_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/partials/tags/tags.component */ 1728);
/* harmony import */ var _components_pages_food_page_food_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pages/food-page/food-page.component */ 5734);
/* harmony import */ var _components_pages_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pages/cart-page/cart-page.component */ 2574);
/* harmony import */ var _components_partials_title_title_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/partials/title/title.component */ 8380);
/* harmony import */ var _components_partials_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/partials/not-found/not-found.component */ 7312);
/* harmony import */ var _components_pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pages/login-page/login-page.component */ 5106);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ngx-toastr */ 4285);
/* harmony import */ var _components_partials_input_container_input_container_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/partials/input-container/input-container.component */ 884);
/* harmony import */ var _components_partials_input_validation_input_validation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/partials/input-validation/input-validation.component */ 3150);
/* harmony import */ var _components_partials_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/partials/text-input/text-input.component */ 3970);
/* harmony import */ var _components_partials_default_button_default_button_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/partials/default-button/default-button.component */ 8730);
/* harmony import */ var _components_pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/pages/register-page/register-page.component */ 1054);
/* harmony import */ var _components_partials_loading_loading_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/partials/loading/loading.component */ 988);
/* harmony import */ var _shared_interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/interceptors/loading.interceptor */ 2186);
/* harmony import */ var _components_pages_checkout_page_checkout_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/pages/checkout-page/checkout-page.component */ 4254);
/* harmony import */ var _components_partials_order_items_list_order_items_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/partials/order-items-list/order-items-list.component */ 5706);
/* harmony import */ var _components_partials_map_map_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/partials/map/map.component */ 3820);
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./auth/auth.interceptor */ 1050);
/* harmony import */ var _components_pages_payment_page_payment_page_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/pages/payment-page/payment-page.component */ 5016);
/* harmony import */ var _components_partials_paypal_button_paypal_button_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/partials/paypal-button/paypal-button.component */ 2612);
/* harmony import */ var _components_pages_order_track_page_order_track_page_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/pages/order-track-page/order-track-page.component */ 5116);
/* harmony import */ var _components_pages_orders_page_orders_page_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/pages/orders-page/orders-page.component */ 4774);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 7580);


































class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineInjector"]({
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_28__.HTTP_INTERCEPTORS,
        useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_22__.AuthInterceptor,
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_28__.HTTP_INTERCEPTORS,
        useClass: _shared_interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_18__.LoadingInterceptor,
        multi: true
      }],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_29__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_30__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_28__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.ReactiveFormsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_32__.ToastrModule.forRoot({
        timeOut: 3000,
        positionClass: 'toast-bottom-right',
        newestOnTop: false
      })]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_partials_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent, _components_partials_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_4__.StarRatingComponent, _components_partials_search_search_component__WEBPACK_IMPORTED_MODULE_5__.SearchComponent, _components_partials_tags_tags_component__WEBPACK_IMPORTED_MODULE_6__.TagsComponent, _components_pages_food_page_food_page_component__WEBPACK_IMPORTED_MODULE_7__.FoodPageComponent, _components_pages_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_8__.CartPageComponent, _components_partials_title_title_component__WEBPACK_IMPORTED_MODULE_9__.TitleComponent, _components_partials_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__.NotFoundComponent, _components_pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_11__.LoginPageComponent, _components_partials_input_container_input_container_component__WEBPACK_IMPORTED_MODULE_12__.InputContainerComponent, _components_partials_input_validation_input_validation_component__WEBPACK_IMPORTED_MODULE_13__.InputValidationComponent, _components_partials_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_14__.TextInputComponent, _components_partials_default_button_default_button_component__WEBPACK_IMPORTED_MODULE_15__.DefaultButtonComponent, _components_pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_16__.RegisterPageComponent, _components_partials_loading_loading_component__WEBPACK_IMPORTED_MODULE_17__.LoadingComponent, _components_pages_checkout_page_checkout_page_component__WEBPACK_IMPORTED_MODULE_19__.CheckoutPageComponent, _components_partials_order_items_list_order_items_list_component__WEBPACK_IMPORTED_MODULE_20__.OrderItemsListComponent, _components_partials_map_map_component__WEBPACK_IMPORTED_MODULE_21__.MapComponent, _components_pages_payment_page_payment_page_component__WEBPACK_IMPORTED_MODULE_23__.PaymentPageComponent, _components_partials_paypal_button_paypal_button_component__WEBPACK_IMPORTED_MODULE_24__.PaypalButtonComponent, _components_pages_order_track_page_order_track_page_component__WEBPACK_IMPORTED_MODULE_25__.OrderTrackPageComponent, _components_pages_orders_page_orders_page_component__WEBPACK_IMPORTED_MODULE_26__.OrdersPageComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_29__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_30__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_28__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.ReactiveFormsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_32__.ToastrModule]
  });
})();

/***/ }),

/***/ 884:
/*!**********************************************************************************!*\
  !*** ./src/app/components/partials/input-container/input-container.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputContainerComponent: () => (/* binding */ InputContainerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);


const _c0 = ["*"];
const _c1 = a0 => ({
  "background-color": a0
});
class InputContainerComponent {
  constructor() {
    this.bgColor = 'white';
  }
  ngOnInit() {}
  static {
    this.ɵfac = function InputContainerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InputContainerComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InputContainerComponent,
      selectors: [["input-container"]],
      inputs: {
        label: "label",
        bgColor: "bgColor"
      },
      standalone: false,
      ngContentSelectors: _c0,
      decls: 5,
      vars: 4,
      consts: [[1, "container", 3, "ngStyle"], [1, "content"]],
      template: function InputContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx.bgColor));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.label, " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
      styles: [".container[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 0.5rem;\n  border-radius: 0.7rem;\n  padding-top: 0.3rem;\n  border: 1px solid #e0e0e0;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 0.5rem;\n  font-size: 0.9rem;\n  color: #5f5f5f;\n  font-size: 1rem;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 0 0.5rem;\n  height: 2.7rem;\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDSiIsImZpbGUiOiJpbnB1dC1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcbiAgICBwYWRkaW5nLXRvcDogMC4zcmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG59XG5cbmxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBjb2xvcjogIzVmNWY1ZjtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbi5jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgICBoZWlnaHQ6IDIuN3JlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYXJ0aWFscy9pbnB1dC1jb250YWluZXIvaW5wdXQtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ0Esdy9CQUF3L0IiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuN3JlbTtcbiAgICBwYWRkaW5nLXRvcDogMC4zcmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG59XG5cbmxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBjb2xvcjogIzVmNWY1ZjtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbi5jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgICBoZWlnaHQ6IDIuN3JlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 988:
/*!******************************************************************!*\
  !*** ./src/app/components/partials/loading/loading.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingComponent: () => (/* binding */ LoadingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/loading.service */ 7038);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);



function LoadingComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
class LoadingComponent {
  constructor(loadingService) {
    loadingService.isLoading.subscribe(isLoading => {
      this.isLoading = isLoading;
    });
  }
  ngOnInit() {}
  static {
    this.ɵfac = function LoadingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoadingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_0__.LoadingService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoadingComponent,
      selectors: [["app-loading"]],
      standalone: false,
      decls: 1,
      vars: 1,
      consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "details"], ["src", "/assets/donut-shop.gif"]],
      template: function LoadingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LoadingComponent_div_0_Template, 5, 0, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
      styles: [".container[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: #ffffff;\n  z-index: 10000;\n  top: 0;\n  left: 0;\n}\n\n.details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 80%;\n  width: 100%;\n}\n\nimg[_ngcontent-%COMP%] {\n  border-bottom: 10px solid brown;\n  width: 200px;\n  height: 200px;\n}\n\nh1[_ngcontent-%COMP%] {\n  color: brown;\n  text-transform: lowercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7QUFDSiIsImZpbGUiOiJsb2FkaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIHotaW5kZXg6IDEwMDAwO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xufVxuXG4uZGV0YWlscyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmltZyB7XG4gICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCBicm93bjtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbn1cblxuaDEge1xuICAgIGNvbG9yOiBicm93bjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYXJ0aWFscy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7QUFDSjtBQUNBLDRuQ0FBNG5DIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIHotaW5kZXg6IDEwMDAwO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xufVxuXG4uZGV0YWlscyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmltZyB7XG4gICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCBicm93bjtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbn1cblxuaDEge1xuICAgIGNvbG9yOiBicm93bjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 1050:
/*!******************************************!*\
  !*** ./src/app/auth/auth.interceptor.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthInterceptor: () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/user.service */ 9885);


class AuthInterceptor {
  constructor(userService) {
    this.userService = userService;
  }
  intercept(request, next) {
    const user = this.userService.currentUser;
    if (user.token) {
      request = request.clone({
        setHeaders: {
          access_token: user.token
        }
      });
    }
    return next.handle(request);
  }
  static {
    this.ɵfac = function AuthInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthInterceptor,
      factory: AuthInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 1054:
/*!***************************************************************************!*\
  !*** ./src/app/components/pages/register-page/register-page.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterPageComponent: () => (/* binding */ RegisterPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var src_app_shared_validators_password_match_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/validators/password_match_validator */ 4572);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ 9885);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _partials_title_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../partials/title/title.component */ 8380);
/* harmony import */ var _partials_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../partials/text-input/text-input.component */ 3970);
/* harmony import */ var _partials_default_button_default_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../partials/default-button/default-button.component */ 8730);









const _c0 = a0 => ({
  returnUrl: a0
});
class RegisterPageComponent {
  constructor(formBuilder, userService, activatedRoute, router) {
    this.formBuilder = formBuilder;
    this.userService = userService;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.isSubmitted = false;
    this.returnUrl = '';
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(5)]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(5)]],
      confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(10)]]
    }, {
      validators: (0,src_app_shared_validators_password_match_validator__WEBPACK_IMPORTED_MODULE_0__.PasswordsMatchValidator)('password', 'confirmPassword')
    });
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
  }
  get fc() {
    return this.registerForm.controls;
  }
  submit() {
    this.isSubmitted = true;
    if (this.registerForm.invalid) return;
    const fv = this.registerForm.value;
    const user = {
      name: fv.name,
      email: fv.email,
      password: fv.password,
      confirmPassword: fv.confirmPassword,
      address: fv.address
    };
    this.userService.register(user).subscribe(_ => {
      this.router.navigateByUrl(this.returnUrl);
    });
  }
  static {
    this.ɵfac = function RegisterPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || RegisterPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: RegisterPageComponent,
      selectors: [["app-register-page"]],
      standalone: false,
      decls: 19,
      vars: 14,
      consts: [[1, "container"], [1, "details"], ["title", "Register"], [3, "ngSubmit", "formGroup"], ["label", "Name", 3, "control", "showErrorsWhen"], ["label", "Email", "type", "email", 3, "control", "showErrorsWhen"], ["label", "Password", "type", "password", 3, "control", "showErrorsWhen"], ["label", "Confirm Password", "type", "password", 3, "control", "showErrorsWhen"], ["label", "Address", 3, "control", "showErrorsWhen"], ["text", "Register"], [1, "login"], ["routerLink", "/login", 3, "queryParams"]],
      template: function RegisterPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-title", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function RegisterPageComponent_Template_form_ngSubmit_3_listener() {
            return ctx.submit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "text-input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " `");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "text-input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " `");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "text-input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " `");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "text-input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, " `");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "text-input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, " `");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "default-button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, " Already a user? \u00A0 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, " Login here ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.registerForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("control", ctx.fc.name)("showErrorsWhen", ctx.isSubmitted);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("control", ctx.fc.email)("showErrorsWhen", ctx.isSubmitted);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("control", ctx.fc.password)("showErrorsWhen", ctx.isSubmitted);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("control", ctx.fc.confirmPassword)("showErrorsWhen", ctx.isSubmitted);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("control", ctx.fc.address)("showErrorsWhen", ctx.isSubmitted);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](12, _c0, ctx.returnUrl));
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _partials_title_title_component__WEBPACK_IMPORTED_MODULE_2__.TitleComponent, _partials_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_3__.TextInputComponent, _partials_default_button_default_button_component__WEBPACK_IMPORTED_MODULE_4__.DefaultButtonComponent],
      styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  margin-top: 3rem;\n}\n\n.details[_ngcontent-%COMP%] {\n  width: 25rem;\n}\n\n.login[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSiIsImZpbGUiOiJyZWdpc3Rlci1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xufVxuICBcbi5kZXRhaWxzIHtcbiAgICB3aWR0aDogMjVyZW07XG59XG5cbi5sb2dpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9yZWdpc3Rlci1wYWdlL3JlZ2lzdGVyLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNBLHd2QkFBd3ZCIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xufVxuICBcbi5kZXRhaWxzIHtcbiAgICB3aWR0aDogMjVyZW07XG59XG5cbi5sb2dpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 1681:
/*!**********************************************!*\
  !*** ./src/app/services/location.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocationService: () => (/* binding */ LocationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 3942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class LocationService {
  constructor() {}
  getCurrentLocation() {
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(observer => {
      if (!navigator.geolocation) return;
      return navigator.geolocation.getCurrentPosition(pos => {
        observer.next({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        });
      }, error => {
        observer.error(error);
      });
    });
  }
  static {
    this.ɵfac = function LocationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LocationService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: LocationService,
      factory: LocationService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 1728:
/*!************************************************************!*\
  !*** ./src/app/components/partials/tags/tags.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TagsComponent: () => (/* binding */ TagsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_food_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/food.service */ 9066);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);




function TagsComponent_div_0_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/tag/", tag_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", tag_r1.name, "(", tag_r1.count, ") ");
  }
}
function TagsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TagsComponent_div_0_a_1_Template, 2, 4, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.tags);
  }
}
class TagsComponent {
  constructor(foodService) {
    foodService.getAllTags().subscribe(serverTags => {
      this.tags = serverTags;
    });
  }
  ngOnInit() {}
  static {
    this.ɵfac = function TagsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TagsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_food_service__WEBPACK_IMPORTED_MODULE_0__.FoodService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: TagsComponent,
      selectors: [["app-tags"]],
      standalone: false,
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [3, "routerLink", 4, "ngFor", "ngForOf"], [3, "routerLink"]],
      template: function TagsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TagsComponent_div_0_Template, 2, 1, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tags);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
      styles: ["div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\ndiv[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n  padding: 0.3rem 1rem;\n  margin: 0.2rem 0.15rem;\n  border-radius: 10rem;\n  font-weight: 600;\n  color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUNKIiwiZmlsZSI6InRhZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5kaXYgYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgICBwYWRkaW5nOiAwLjNyZW0gMXJlbTtcbiAgICBtYXJnaW46IDAuMnJlbSAwLjE1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IGJsdWU7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYXJ0aWFscy90YWdzL3RhZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUNKO0FBQ0EsZ3NCQUFnc0IiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5kaXYgYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgICBwYWRkaW5nOiAwLjNyZW0gMXJlbTtcbiAgICBtYXJnaW46IDAuMnJlbSAwLjE1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IGJsdWU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 1749:
/*!*********************************************!*\
  !*** ./src/app/shared/models/user.model.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   User: () => (/* binding */ User)
/* harmony export */ });
class User {}

/***/ }),

/***/ 2186:
/*!************************************************************!*\
  !*** ./src/app/shared/interceptors/loading.interceptor.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingInterceptor: () => (/* binding */ LoadingInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4876);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/loading.service */ 7038);




var pendingRequests = 0;
class LoadingInterceptor {
  constructor(loadingService) {
    this.loadingService = loadingService;
  }
  intercept(request, next) {
    this.loadingService.showLoading();
    pendingRequests = pendingRequests + 1;
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.timer)(1000).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(() => next.handle(request).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)({
      next: event => {
        if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpEventType.Response) {
          this.handleHideLoading();
        }
      },
      error: _ => {
        this.handleHideLoading();
      }
    }))));
  }
  handleHideLoading() {
    pendingRequests = pendingRequests - 1;
    if (pendingRequests === 0) {
      this.loadingService.hideLoading();
    }
  }
  static {
    this.ɵfac = function LoadingInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoadingInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_0__.LoadingService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: LoadingInterceptor,
      factory: LoadingInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 2328:
/*!**************************************************!*\
  !*** ./src/app/shared/models/cart-item.model.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CartItem: () => (/* binding */ CartItem)
/* harmony export */ });
class CartItem {
  constructor(food) {
    this.food = food;
    this.quantity = 1;
    this.price = this.food.price;
  }
}

/***/ }),

/***/ 2574:
/*!*******************************************************************!*\
  !*** ./src/app/components/pages/cart-page/cart-page.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CartPageComponent: () => (/* binding */ CartPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/cart.service */ 6868);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _partials_title_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../partials/title/title.component */ 8380);
/* harmony import */ var _partials_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../partials/not-found/not-found.component */ 7312);







function CartPageComponent_div_2_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li")(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div")(4, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div")(10, "select", 12, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function CartPageComponent_div_2_li_2_Template_select_change_10_listener() {
      const cartItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1).$implicit;
      const quantitySelect_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](11);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.changeQuantity(cartItem_r2, quantitySelect_r3.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div")(26, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CartPageComponent_div_2_li_2_Template_button_click_26_listener() {
      const cartItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.removeFromCart(cartItem_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const cartItem_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", cartItem_r2.food.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", cartItem_r2.food.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("routerLink", "/food/", cartItem_r2.food.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", cartItem_r2.food.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 8, cartItem_r2.food.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", cartItem_r2.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](24, 10, cartItem_r2.price), " ");
  }
}
function CartPageComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4)(1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CartPageComponent_div_2_li_2_Template, 28, 12, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 6)(4, "div")(5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Proceed to Checkout");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.cart.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.cart.totalCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 3, ctx_r3.cart.totalPrice));
  }
}
class CartPageComponent {
  constructor(cartService) {
    this.cartService = cartService;
    this.cartService.getCartObservable().subscribe(cart => this.cart = cart);
  }
  ngOnInit() {}
  removeFromCart(cartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
  }
  changeQuantity(cartItem, quantityInString) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
  }
  static {
    this.ɵfac = function CartPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CartPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: CartPageComponent,
      selectors: [["app-cart-page"]],
      standalone: false,
      decls: 3,
      vars: 2,
      consts: [["quantitySelect", ""], ["title", "Cart Page", "margin", "1.5rem 0 0 2.5rem"], ["notFoundMessage", "Cart Page Is Empty", "resetLinkText", "Go To Homepage", 3, "visible"], ["class", "container", 4, "ngIf"], [1, "container"], [4, "ngFor", "ngForOf"], [1, "checkout"], [1, "foods-count"], [1, "total-price"], ["routerLink", "/checkout"], [3, "src", "alt"], [3, "routerLink"], [3, "change", "value"], [1, "remove-button", 3, "click"]],
      template: function CartPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-title", 1)(1, "app-not-found", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CartPageComponent_div_2_Template, 12, 5, "div", 3);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", !ctx.cart || !ctx.cart.items.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.cart && ctx.cart.items.length);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _partials_title_title_component__WEBPACK_IMPORTED_MODULE_1__.TitleComponent, _partials_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__.NotFoundComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CurrencyPipe],
      styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  margin: 1.5rem;\n  margin-top: 0.5rem;\n}\n\nul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 3 0;\n  justify-content: space-evenly;\n  border: 1px solid #44bbbb;\n  border-radius: 1rem;\n  list-style: none;\n  margin: 0.5rem;\n  padding: 0;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-wrap: wrap;\n  border-bottom: 1px solid #e4e4e4;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\nli[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 5rem;\n  height: 5rem;\n  border-radius: 100rem;\n  object-fit: cover;\n}\n\nli[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n\nli[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:not(:first-child) {\n  flex-basis: 18%;\n}\n\nli[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 3rem;\n  outline: none;\n  border: none;\n  border-bottom: 1px solid lightgrey;\n  font-size: 1.1rem;\n  font-weight: 100;\n}\n\nli[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%] {\n  border-radius: 1rem;\n  border: none;\n  padding: 0.5rem;\n  color: #e72929;\n  opacity: 0.7;\n  outline: none;\n}\n\nli[_ngcontent-%COMP%]   .remove-button[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  cursor: pointer;\n}\n\n.checkout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  flex: 1 3;\n  height: 20rem;\n  border: 1px solid #ffbbbb;\n  border-radius: 1rem;\n  padding: 0.5rem;\n  margin: 0.5rem;\n}\n\n.checkout[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  margin: 1rem;\n  flex: 3;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n\n.foods-count[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n\n.foods-count[_ngcontent-%COMP%]::before {\n  content: \"Total Quantity: \";\n  color: grey;\n}\n\n.total-price[_ngcontent-%COMP%]::before {\n  content: \"Total Price: \";\n  color: grey;\n}\n\n.checkout[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 1rem;\n  color: white;\n  background: #e72929;\n  display: block;\n  width: 99%;\n  border-radius: 1rem;\n  text-align: center;\n  opacity: 0.7;\n  justify-self: center;\n}\n\n.checkout[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksMkJBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSx3QkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoiY2FydC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgbWFyZ2luOiAxLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuXG51bCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXg6IDMgMDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDRiYmJiO1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW46IDAuNXJlbTtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG51bCBsaSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0ZTRlNDtcbn1cblxudWwgbGk6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG5saSBpbWcge1xuICAgIHdpZHRoOiA1cmVtO1xuICAgIGhlaWdodDogNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDByZW07XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbmxpIGRpdiB7XG4gICAgcGFkZGluZzogMXJlbTtcbn1cblxubGkgZGl2Om5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICBmbGV4LWJhc2lzOiAxOCU7XG59XG5cbmxpIHNlbGVjdCB7XG4gICAgd2lkdGg6IDNyZW07XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBmb250LXdlaWdodDogMTAwO1xufVxuXG5saSAucmVtb3ZlLWJ1dHRvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGNvbG9yOiAjZTcyOTI5O1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG5saSAucmVtb3ZlLWJ1dHRvbjpob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jaGVja291dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXg6IDEgMztcbiAgICBoZWlnaHQ6IDIwcmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmJiYmI7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgbWFyZ2luOiAwLjVyZW07XG59XG5cbi5jaGVja291dCA+IGRpdiB7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIGZsZXg6IDM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uZm9vZHMtY291bnQge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuLmZvb2RzLWNvdW50OjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiVG90YWwgUXVhbnRpdHk6IFwiO1xuICAgIGNvbG9yOiBncmV5O1xufVxuXG4udG90YWwtcHJpY2U6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJUb3RhbCBQcmljZTogXCI7XG4gICAgY29sb3I6IGdyZXk7XG59XG5cbi5jaGVja291dCBhIHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiAjZTcyOTI5O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA5OSU7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4uY2hlY2tvdXQgYTpob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9jYXJ0LXBhZ2UvY2FydC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLHdCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7QUFDSjtBQUNBLG9zSUFBb3NJIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgbWFyZ2luOiAxLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuXG51bCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXg6IDMgMDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDRiYmJiO1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW46IDAuNXJlbTtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG51bCBsaSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0ZTRlNDtcbn1cblxudWwgbGk6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG5saSBpbWcge1xuICAgIHdpZHRoOiA1cmVtO1xuICAgIGhlaWdodDogNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDByZW07XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbmxpIGRpdiB7XG4gICAgcGFkZGluZzogMXJlbTtcbn1cblxubGkgZGl2Om5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICBmbGV4LWJhc2lzOiAxOCU7XG59XG5cbmxpIHNlbGVjdCB7XG4gICAgd2lkdGg6IDNyZW07XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBmb250LXdlaWdodDogMTAwO1xufVxuXG5saSAucmVtb3ZlLWJ1dHRvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGNvbG9yOiAjZTcyOTI5O1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG5saSAucmVtb3ZlLWJ1dHRvbjpob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jaGVja291dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXg6IDEgMztcbiAgICBoZWlnaHQ6IDIwcmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmJiYmI7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgbWFyZ2luOiAwLjVyZW07XG59XG5cbi5jaGVja291dCA+IGRpdiB7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIGZsZXg6IDM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uZm9vZHMtY291bnQge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuLmZvb2RzLWNvdW50OjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiVG90YWwgUXVhbnRpdHk6IFwiO1xuICAgIGNvbG9yOiBncmV5O1xufVxuXG4udG90YWwtcHJpY2U6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJUb3RhbCBQcmljZTogXCI7XG4gICAgY29sb3I6IGdyZXk7XG59XG5cbi5jaGVja291dCBhIHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiAjZTcyOTI5O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA5OSU7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4uY2hlY2tvdXQgYTpob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 2612:
/*!******************************************************************************!*\
  !*** ./src/app/components/partials/paypal-button/paypal-button.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaypalButtonComponent: () => (/* binding */ PaypalButtonComponent)
/* harmony export */ });
/* harmony import */ var _Users_indervirsingh_Documents_repos_ExpressDonut_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/order.service */ 8674);
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cart.service */ 6868);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 4285);






const _c0 = ["paypal"];
class PaypalButtonComponent {
  constructor(orderService, cartService, router, toastrService) {
    this.orderService = orderService;
    this.cartService = cartService;
    this.router = router;
    this.toastrService = toastrService;
  }
  ngOnInit() {
    var _this = this;
    const self = this;
    paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              currency_code: 'USD',
              value: self.order.totalPrice
            }
          }]
        });
      },
      onApprove: function () {
        var _ref = (0,_Users_indervirsingh_Documents_repos_ExpressDonut_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data, actions) {
          const payment = yield actions.order.capture();
          _this.order.paymentId = payment.id;
          self.orderService.pay(_this.order).subscribe({
            next: orderId => {
              _this.cartService.clearCart();
              _this.router.navigateByUrl('/track/' + orderId);
              _this.toastrService.success('Payment Saved Successfully', 'Success');
            },
            error: error => {
              _this.toastrService.error('Payment Save Failed', 'Error');
            }
          });
        });
        return function onApprove(_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }(),
      onError: err => {
        this.toastrService.error('Payment Failed', 'Error');
        console.log(err);
      }
    }).render(this.paypalElement.nativeElement);
  }
  static {
    this.ɵfac = function PaypalButtonComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PaypalButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_order_service__WEBPACK_IMPORTED_MODULE_1__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: PaypalButtonComponent,
      selectors: [["paypal-button"]],
      viewQuery: function PaypalButtonComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.paypalElement = _t.first);
        }
      },
      inputs: {
        order: "order"
      },
      standalone: false,
      decls: 2,
      vars: 0,
      consts: [["paypal", ""]],
      template: function PaypalButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", null, 0);
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXlwYWwtYnV0dG9uLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYXJ0aWFscy9wYXlwYWwtYnV0dG9uL3BheXBhbC1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDRLQUE0SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3150:
/*!************************************************************************************!*\
  !*** ./src/app/components/partials/input-validation/input-validation.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputValidationComponent: () => (/* binding */ InputValidationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);


function InputValidationComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const errorMessage_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", errorMessage_r1, " ");
  }
}
function InputValidationComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputValidationComponent_div_0_div_1_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.errorMessages);
  }
}
const VALIDATORS_MESSAGES = {
  required: 'Should not be empty',
  email: 'Email is not valid',
  minlength: 'Field is too short',
  notMatch: 'Password and Confirm does not match'
};
class InputValidationComponent {
  constructor() {
    this.showErrorsWhen = true;
    this.errorMessages = [];
  }
  ngOnChanges(changes) {
    this.checkValidation();
  }
  ngOnInit() {
    this.control.statusChanges.subscribe(() => {
      this.checkValidation();
    });
    this.control.valueChanges.subscribe(() => {
      this.checkValidation();
    });
  }
  checkValidation() {
    const errors = this.control.errors;
    if (!errors) {
      this.errorMessages = [];
      return;
    }
    const errorKeys = Object.keys(errors);
    this.errorMessages = errorKeys.map(key => VALIDATORS_MESSAGES[key]);
  }
  static {
    this.ɵfac = function InputValidationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InputValidationComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InputValidationComponent,
      selectors: [["input-validation"]],
      inputs: {
        control: "control",
        showErrorsWhen: "showErrorsWhen"
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 1,
      vars: 1,
      consts: [["class", "error-list", 4, "ngIf"], [1, "error-list"], [4, "ngFor", "ngForOf"]],
      template: function InputValidationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InputValidationComponent_div_0_Template, 2, 1, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessages && ctx.showErrorsWhen);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
      styles: [".error-list[_ngcontent-%COMP%] {\n  color: red;\n  text-align: center;\n  font-size: 0.95rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LXZhbGlkYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNKIiwiZmlsZSI6ImlucHV0LXZhbGlkYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItbGlzdCB7XG4gICAgY29sb3I6IHJlZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYXJ0aWFscy9pbnB1dC12YWxpZGF0aW9uL2lucHV0LXZhbGlkYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQ0EsZ2FBQWdhIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLWxpc3Qge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 3532:
/*!******************************************!*\
  !*** ./src/app/shared/constants/urls.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FOODS_BY_ID_URL: () => (/* binding */ FOODS_BY_ID_URL),
/* harmony export */   FOODS_BY_SEARCH_URL: () => (/* binding */ FOODS_BY_SEARCH_URL),
/* harmony export */   FOODS_BY_TAG_URL: () => (/* binding */ FOODS_BY_TAG_URL),
/* harmony export */   FOODS_TAGS_URL: () => (/* binding */ FOODS_TAGS_URL),
/* harmony export */   FOODS_URL: () => (/* binding */ FOODS_URL),
/* harmony export */   ORDERS_URL: () => (/* binding */ ORDERS_URL),
/* harmony export */   ORDER_CREATE_URL: () => (/* binding */ ORDER_CREATE_URL),
/* harmony export */   ORDER_NEW_FOR_CURRENT_USER_URL: () => (/* binding */ ORDER_NEW_FOR_CURRENT_USER_URL),
/* harmony export */   ORDER_PAY_URL: () => (/* binding */ ORDER_PAY_URL),
/* harmony export */   ORDER_TRACK_URL: () => (/* binding */ ORDER_TRACK_URL),
/* harmony export */   USER_LOGIN_URL: () => (/* binding */ USER_LOGIN_URL),
/* harmony export */   USER_REGISTER_URL: () => (/* binding */ USER_REGISTER_URL)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);

const BASE_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production ? '' : `http://localhost:${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiPort}`;
const FOODS_URL = BASE_URL + '/api/foods';
const FOODS_TAGS_URL = FOODS_URL + '/tags';
const FOODS_BY_SEARCH_URL = FOODS_URL + '/search/';
const FOODS_BY_TAG_URL = FOODS_URL + '/tag/';
const FOODS_BY_ID_URL = FOODS_URL + '/';
const USER_LOGIN_URL = BASE_URL + '/api/users/login';
const USER_REGISTER_URL = BASE_URL + '/api/users/register';
const ORDERS_URL = BASE_URL + '/api/orders';
const ORDER_CREATE_URL = ORDERS_URL + '/create';
const ORDER_NEW_FOR_CURRENT_USER_URL = ORDERS_URL + '/newOrderForCurrentUser';
const ORDER_PAY_URL = ORDERS_URL + '/pay';
const ORDER_TRACK_URL = ORDERS_URL + '/track/';

/***/ }),

/***/ 3820:
/*!**********************************************************!*\
  !*** ./src/app/components/partials/map/map.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapComponent: () => (/* binding */ MapComponent)
/* harmony export */ });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ 7381);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_location_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/location.service */ 1681);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);




const _c0 = ["map"];
function MapComponent_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MapComponent_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.findMyLocation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Find My Location ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class MapComponent {
  constructor(locationService) {
    this.locationService = locationService;
    this.readonly = false;
    this.MARKER_ZOOM_LEVEL = 16;
    this.MARKER_ICON = (0,leaflet__WEBPACK_IMPORTED_MODULE_0__.icon)({
      iconUrl: 'https://res.cloudinary.com/foodmine/image/upload/v1638842791/map/marker_kbua9q.png',
      iconSize: [42, 42],
      iconAnchor: [21, 42]
    });
    this.DEFAULT_LATLNG = [38.524240, -121.409670];
  }
  ngOnChanges() {
    if (!this.order) return;
    this.initializeMap();
    if (this.readonly && this.addressLatLng) {
      this.showLocationOnReadonlyMode();
    }
  }
  showLocationOnReadonlyMode() {
    const m = this.map;
    this.setMarker(this.addressLatLng);
    m.setView(this.addressLatLng, this.MARKER_ZOOM_LEVEL);
    m.dragging.disable();
    m.touchZoom.disable();
    m.doubleClickZoom.disable();
    m.scrollWheelZoom.disable();
    m.boxZoom.disable();
    m.keyboard.disable();
    m.off('click');
    // m.tap?.disable()
    this.currentMarker.dragging?.disable();
  }
  initializeMap() {
    if (this.map) return;
    this.map = (0,leaflet__WEBPACK_IMPORTED_MODULE_0__.map)(this.mapRef.nativeElement, {
      attributionControl: false
    }).setView(this.DEFAULT_LATLNG, this.MARKER_ZOOM_LEVEL);
    this.setMarker((0,leaflet__WEBPACK_IMPORTED_MODULE_0__.latLng)(this.DEFAULT_LATLNG));
    (0,leaflet__WEBPACK_IMPORTED_MODULE_0__.tileLayer)('https://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(this.map);
    this.map.on('click', e => {
      this.setMarker(e.latlng);
    });
  }
  findMyLocation() {
    this.locationService.getCurrentLocation().subscribe({
      next: latlng => {
        this.map.setView(latlng, this.MARKER_ZOOM_LEVEL);
        this.setMarker(latlng);
      }
    });
  }
  setMarker(latlng) {
    this.addressLatLng = latlng;
    if (this.currentMarker) {
      this.currentMarker.setLatLng(latlng);
      return;
    }
    this.currentMarker = (0,leaflet__WEBPACK_IMPORTED_MODULE_0__.marker)(latlng, {
      draggable: true,
      icon: this.MARKER_ICON
    }).addTo(this.map);
    this.currentMarker.on('dragend', () => {
      this.addressLatLng = this.currentMarker.getLatLng();
    });
  }
  set addressLatLng(latlng) {
    if (!latlng.lat.toFixed) return;
    latlng.lat = parseFloat(latlng.lat.toFixed(8));
    latlng.lng = parseFloat(latlng.lng.toFixed(8));
    this.order.addressLatLng = latlng;
  }
  get addressLatLng() {
    return this.order.addressLatLng;
  }
  static {
    this.ɵfac = function MapComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_location_service__WEBPACK_IMPORTED_MODULE_1__.LocationService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: MapComponent,
      selectors: [["map"]],
      viewQuery: function MapComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.mapRef = _t.first);
        }
      },
      inputs: {
        order: "order",
        readonly: "readonly"
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
      decls: 4,
      vars: 1,
      consts: [["map", ""], [1, "container"], ["class", "find-location", 3, "click", 4, "ngIf"], [1, "map"], [1, "find-location", 3, "click"]],
      template: function MapComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MapComponent_button_1_Template, 2, 0, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 3, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.readonly);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
      styles: [".container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 35rem;\n  height: 22rem;\n  text-align: center;\n}\n\n.map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.find-location[_ngcontent-%COMP%] {\n  position: absolute;\n  margin: auto;\n  width: 15rem;\n  min-height: 3rem;\n  font-size: 1.2rem;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  background-color: rgba(255, 255, 255, 0.4862745098);\n  cursor: pointer;\n}\n\n.find-location[_ngcontent-%COMP%]:hover {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLG1EQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7QUFDSiIsImZpbGUiOiJtYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDM1cmVtO1xuICAgIGhlaWdodDogMjJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWFwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5maW5kLWxvY2F0aW9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiAxNXJlbTtcbiAgICBtaW4taGVpZ2h0OiAzcmVtO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjdjO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZpbmQtbG9jYXRpb246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYXJ0aWFscy9tYXAvbWFwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsbURBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtBQUNKO0FBQ0Esb25DQUFvbkMiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDM1cmVtO1xuICAgIGhlaWdodDogMjJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWFwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5maW5kLWxvY2F0aW9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiAxNXJlbTtcbiAgICBtaW4taGVpZ2h0OiAzcmVtO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjdjO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZpbmQtbG9jYXRpb246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 3970:
/*!************************************************************************!*\
  !*** ./src/app/components/partials/text-input/text-input.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextInputComponent: () => (/* binding */ TextInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _input_container_input_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../input-container/input-container.component */ 884);
/* harmony import */ var _input_validation_input_validation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../input-validation/input-validation.component */ 3150);




class TextInputComponent {
  get formControl() {
    return this.control;
  }
  constructor() {
    this.showErrorsWhen = true;
    this.type = 'text';
  }
  ngOnInit() {}
  static {
    this.ɵfac = function TextInputComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TextInputComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: TextInputComponent,
      selectors: [["text-input"]],
      inputs: {
        control: "control",
        showErrorsWhen: "showErrorsWhen",
        label: "label",
        type: "type"
      },
      standalone: false,
      decls: 3,
      vars: 6,
      consts: [[3, "label"], [3, "type", "placeholder", "formControl"], [3, "control", "showErrorsWhen"]],
      template: function TextInputComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input-container", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 1)(2, "input-validation", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", ctx.label);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.type)("placeholder", ctx.label)("formControl", ctx.formControl);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("control", ctx.control)("showErrorsWhen", ctx.showErrorsWhen);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _input_container_input_container_component__WEBPACK_IMPORTED_MODULE_0__.InputContainerComponent, _input_validation_input_validation_component__WEBPACK_IMPORTED_MODULE_1__.InputValidationComponent],
      styles: ["input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: none;\n  border-bottom: 0 solid grey;\n  transition: border-bottom 0.15s ease-out;\n  background-color: white;\n  font-size: 1.1rem;\n  outline: none;\n}\n\ninput[_ngcontent-%COMP%]::placeholder {\n  color: #dfdfdf;\n  font-size: 0.95rem;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  border-width: 2.9px;\n}\n\ninput-validation[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  right: 1rem;\n  height: 100%;\n  width: 12rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHQtaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLHdDQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoidGV4dC1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDAgc29saWQgZ3JleTtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tIDAuMTVzIGVhc2Utb3V0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbmlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICNkZmRmZGY7XG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gICAgYm9yZGVyLXdpZHRoOiAyLjlweDtcbn1cblxuaW5wdXQtdmFsaWRhdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDFyZW07XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMnJlbTtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYXJ0aWFscy90ZXh0LWlucHV0L3RleHQtaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLHdDQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQ0o7QUFDQSxvdkNBQW92QyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDAgc29saWQgZ3JleTtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tIDAuMTVzIGVhc2Utb3V0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbmlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICNkZmRmZGY7XG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gICAgYm9yZGVyLXdpZHRoOiAyLjlweDtcbn1cblxuaW5wdXQtdmFsaWRhdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDFyZW07XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMnJlbTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/pages/home/home.component */ 8078);
/* harmony import */ var _components_pages_food_page_food_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/pages/food-page/food-page.component */ 5734);
/* harmony import */ var _components_pages_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/cart-page/cart-page.component */ 2574);
/* harmony import */ var _components_pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/login-page/login-page.component */ 5106);
/* harmony import */ var _components_pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pages/register-page/register-page.component */ 1054);
/* harmony import */ var _components_pages_checkout_page_checkout_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pages/checkout-page/checkout-page.component */ 4254);
/* harmony import */ var _auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/guards/auth.guard */ 9615);
/* harmony import */ var _components_pages_payment_page_payment_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pages/payment-page/payment-page.component */ 5016);
/* harmony import */ var _components_pages_order_track_page_order_track_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pages/order-track-page/order-track-page.component */ 5116);
/* harmony import */ var _components_pages_orders_page_orders_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pages/orders-page/orders-page.component */ 4774);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7580);













const routes = [{
  path: '',
  component: _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'search/:searchTerm',
  component: _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'tag/:tag',
  component: _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'food/:id',
  component: _components_pages_food_page_food_page_component__WEBPACK_IMPORTED_MODULE_1__.FoodPageComponent
}, {
  path: 'cart-page',
  component: _components_pages_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_2__.CartPageComponent
}, {
  path: 'login',
  component: _components_pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__.LoginPageComponent
}, {
  path: 'register',
  component: _components_pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_4__.RegisterPageComponent
}, {
  path: 'checkout',
  component: _components_pages_checkout_page_checkout_page_component__WEBPACK_IMPORTED_MODULE_5__.CheckoutPageComponent,
  canActivate: [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__.AuthGuard]
}, {
  path: 'payment',
  component: _components_pages_payment_page_payment_page_component__WEBPACK_IMPORTED_MODULE_7__.PaymentPageComponent,
  canActivate: [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__.AuthGuard]
}, {
  path: 'track/:orderId',
  component: _components_pages_order_track_page_order_track_page_component__WEBPACK_IMPORTED_MODULE_8__.OrderTrackPageComponent,
  canActivate: [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__.AuthGuard]
}, {
  path: 'orders',
  component: _components_pages_orders_page_orders_page_component__WEBPACK_IMPORTED_MODULE_9__.OrdersPageComponent,
  canActivate: [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__.AuthGuard]
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
  });
})();

/***/ }),

/***/ 4254:
/*!***************************************************************************!*\
  !*** ./src/app/components/pages/checkout-page/checkout-page.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckoutPageComponent: () => (/* binding */ CheckoutPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var src_app_shared_models_order_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/order.model */ 6902);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/cart.service */ 6868);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ 9885);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 4285);
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/order.service */ 8674);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _partials_title_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../partials/title/title.component */ 8380);
/* harmony import */ var _partials_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../partials/text-input/text-input.component */ 3970);
/* harmony import */ var _partials_order_items_list_order_items_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../partials/order-items-list/order-items-list.component */ 5706);
/* harmony import */ var _partials_map_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../partials/map/map.component */ 3820);













class CheckoutPageComponent {
  constructor(cartService, formBuilder, userService, toastrService, orderService, router) {
    this.formBuilder = formBuilder;
    this.userService = userService;
    this.toastrService = toastrService;
    this.orderService = orderService;
    this.router = router;
    this.order = new src_app_shared_models_order_model__WEBPACK_IMPORTED_MODULE_0__.Order();
    const cart = cartService.getCart();
    this.order.items = cart.items;
    this.order.totalPrice = cart.totalPrice;
  }
  ngOnInit() {
    let {
      name,
      address
    } = this.userService.currentUser;
    this.checkoutForm = this.formBuilder.group({
      name: [name, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      address: [address, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]
    });
  }
  get fc() {
    return this.checkoutForm.controls;
  }
  createOrder() {
    if (this.checkoutForm.invalid) {
      this.toastrService.warning('Please fill the inputs', 'Invalid Inputs');
      return;
    }
    if (!this.order.addressLatLng) {
      this.toastrService.warning('Please select your location on the map', 'Location');
    }
    this.order.name = this.fc.name.value;
    this.order.address = this.fc.address.value;
    this.orderService.create(this.order).subscribe({
      next: () => {
        this.router.navigateByUrl('/payment');
      },
      error: errorResponse => {
        this.toastrService.error(errorResponse.error, 'Cart');
      }
    });
  }
  static {
    this.ɵfac = function CheckoutPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CheckoutPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_order_service__WEBPACK_IMPORTED_MODULE_3__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: CheckoutPageComponent,
      selectors: [["app-checkout-page"]],
      standalone: false,
      decls: 14,
      vars: 5,
      consts: [[1, "container"], [1, "content"], ["title", "Order Form", "fontSize", "1.6rem"], [3, "formGroup"], ["label", "Name", 3, "control"], ["label", "Address", 3, "control"], [3, "order"], [1, "map"], ["title", "Choose Your Address", "fontSize", "1.6rem"], [1, "buttons-container"], [1, "buttons"], [3, "click"]],
      template: function CheckoutPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "app-title", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "text-input", 4)(5, "text-input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "order-items-list", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "app-title", 8)(9, "map", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 9)(11, "div", 10)(12, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CheckoutPageComponent_Template_button_click_12_listener() {
            return ctx.createOrder();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, " Go To Payment ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.checkoutForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.fc.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("control", ctx.fc.address);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("order", ctx.order);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("order", ctx.order);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _partials_title_title_component__WEBPACK_IMPORTED_MODULE_4__.TitleComponent, _partials_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_5__.TextInputComponent, _partials_order_items_list_order_items_list_component__WEBPACK_IMPORTED_MODULE_6__.OrderItemsListComponent, _partials_map_map_component__WEBPACK_IMPORTED_MODULE_7__.MapComponent],
      styles: [".container[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  display: flex;\n  margin: 0 2rem 6rem 2rem;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.content[_ngcontent-%COMP%] {\n  width: 35rem;\n  margin-right: 3rem;\n}\n\n.content[_ngcontent-%COMP%], form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\nform[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.buttons-container[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  margin: 2rem;\n  width: 35rem;\n}\n\nbutton[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #e72929;\n  width: 100%;\n  height: 3rem;\n  opacity: 0.8;\n  font-size: 1.3rem;\n  border: none;\n  border-radius: 0.5rem;\n  box-shadow: 2px 2px 2px 2px grey;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrb3V0LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJjaGVja291dC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogMCAycmVtIDZyZW0gMnJlbTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250ZW50IHtcbiAgICB3aWR0aDogMzVyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xufVxuXG4uY29udGVudCwgZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5mb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmJ1dHRvbnMtY29udGFpbmVyIHtcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5idXR0b25zIHtcbiAgICBtYXJnaW46IDJyZW07XG4gICAgd2lkdGg6IDM1cmVtO1xufVxuXG5idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTcyOTI5O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogM3JlbTtcbiAgICBvcGFjaXR5OiAwLjg7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggZ3JleTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9jaGVja291dC1wYWdlL2NoZWNrb3V0LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7QUFDSjtBQUNBLGdzREFBZ3NEIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogMCAycmVtIDZyZW0gMnJlbTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250ZW50IHtcbiAgICB3aWR0aDogMzVyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xufVxuXG4uY29udGVudCwgZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5mb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmJ1dHRvbnMtY29udGFpbmVyIHtcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5idXR0b25zIHtcbiAgICBtYXJnaW46IDJyZW07XG4gICAgd2lkdGg6IDM1cmVtO1xufVxuXG5idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTcyOTI5O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogM3JlbTtcbiAgICBvcGFjaXR5OiAwLjg7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggZ3JleTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 4512:
/*!****************************************************************!*\
  !*** ./src/app/components/partials/header/header.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/cart.service */ 6868);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ 9885);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);





function HeaderComponent_li_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function HeaderComponent_li_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 7)(1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 9)(4, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_li_10_Template_a_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.user.name);
  }
}
function HeaderComponent_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.cartQuantity);
  }
}
class HeaderComponent {
  constructor(cartService, userService) {
    this.userService = userService;
    this.cartQuantity = 0;
    cartService.getCartObservable().subscribe(newCart => {
      this.cartQuantity = newCart.totalCount;
    });
    userService.userObservable.subscribe(newUser => {
      this.user = newUser;
    });
  }
  ngOnInit() {}
  logout() {
    this.userService.logout();
  }
  get isAuth() {
    return this.user.token;
  }
  toggleDarkTheme() {
    document.body.classList.toggle('dark-theme');
  }
  static {
    this.ɵfac = function HeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      standalone: false,
      decls: 15,
      vars: 3,
      consts: [[1, "container"], ["routerLink", "/", 1, "logo"], [3, "click"], [4, "ngIf"], ["class", "menu-container", 4, "ngIf"], ["routerLink", "/cart-page"], ["routerLink", "/login"], [1, "menu-container"], ["routerLink", "/dashboard"], [1, "menu"], ["routerLink", "/profile"], ["routerLink", "/orders"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header")(1, "div", 0)(2, "a", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Express Donut");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nav")(5, "ul")(6, "li")(7, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_7_listener() {
            return ctx.toggleDarkTheme();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Toggle Dark Theme");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, HeaderComponent_li_9_Template, 3, 0, "li", 3)(10, HeaderComponent_li_10_Template, 10, 1, "li", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li")(12, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Cart ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, HeaderComponent_span_14_Template, 2, 1, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isAuth);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isAuth);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.cartQuantity);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
      styles: ["header[_ngcontent-%COMP%] {\n  position: relative;\n  background: white;\n  padding: 0;\n  border-bottom: 1px solid #e72929;\n}\n\na[_ngcontent-%COMP%] {\n  color: #af1313;\n}\n\na[_ngcontent-%COMP%]:hover {\n  background: #e72929;\n  color: white;\n  cursor: pointer;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n}\n\na.logo[_ngcontent-%COMP%] {\n  font-weight: bold;\n  padding: 1rem;\n}\n\nul[_ngcontent-%COMP%] {\n  display: flex;\n  list-style-type: none;\n  margin: 0;\n}\n\nul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 1rem;\n  display: inline-block;\n}\n\na[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #ff4d4d;\n  color: white;\n  padding: 0.1rem 0.45rem;\n  border-radius: 100rem;\n  font-size: 0.9rem;\n}\n\n.menu-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.menu[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  background: whitesmoke;\n  display: none;\n}\n\n.menu-container[_ngcontent-%COMP%]:hover   .menu[_ngcontent-%COMP%] {\n  display: block;\n  z-index: 1000;\n}\n\n.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFHQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0FBQUo7O0FBR0E7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQUFKIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNzI5Mjk7XG59XG5cbmEge1xuICAgIGNvbG9yOiAjYWYxMzEzO1xuXG59XG5cbmE6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNlNzI5Mjk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbmEubG9nbyB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogMXJlbTtcbn1cblxudWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbn1cblxudWwgYSB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbmEgc3BhbiB7XG4gICAgYmFja2dyb3VuZDogI2ZmNGQ0ZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMC4xcmVtIDAuNDVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcmVtO1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4ubWVudS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm1lbnUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLm1lbnUtY29udGFpbmVyOmhvdmVyIC5tZW51IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB6LWluZGV4OiAxMDAwO1xufVxuXG4ubWVudSBhIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDhyZW07XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYXJ0aWFscy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUdBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQUFKOztBQUdBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFHQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7QUFBSjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBQUo7QUFDQSxna0VBQWdrRSIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNzI5Mjk7XG59XG5cbmEge1xuICAgIGNvbG9yOiAjYWYxMzEzO1xuXG59XG5cbmE6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNlNzI5Mjk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbmEubG9nbyB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogMXJlbTtcbn1cblxudWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbn1cblxudWwgYSB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbmEgc3BhbiB7XG4gICAgYmFja2dyb3VuZDogI2ZmNGQ0ZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMC4xcmVtIDAuNDVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcmVtO1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4ubWVudS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm1lbnUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLm1lbnUtY29udGFpbmVyOmhvdmVyIC5tZW51IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB6LWluZGV4OiAxMDAwO1xufVxuXG4ubWVudSBhIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDhyZW07XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 4572:
/*!***************************************************************!*\
  !*** ./src/app/shared/validators/password_match_validator.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PasswordsMatchValidator: () => (/* binding */ PasswordsMatchValidator)
/* harmony export */ });
const PasswordsMatchValidator = (passwordControlName, confirmPasswordControlName) => {
  const validator = form => {
    const passwordControl = form.get(passwordControlName);
    const confirmPasswordControl = form.get(confirmPasswordControlName);
    if (!passwordControl || !confirmPasswordControl) return;
    if (passwordControl.value !== confirmPasswordControl.value) {
      confirmPasswordControl.setErrors({
        notMatch: true
      });
    } else {
      const errors = confirmPasswordControl.errors;
      if (!errors) return;
      delete errors.notMatch;
      confirmPasswordControl.setErrors(errors);
    }
  };
  return validator;
};

/***/ }),

/***/ 4774:
/*!***********************************************************************!*\
  !*** ./src/app/components/pages/orders-page/orders-page.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrdersPageComponent: () => (/* binding */ OrdersPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/order.service */ 8674);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ 9885);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _partials_title_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../partials/title/title.component */ 8380);






function OrdersPageComponent_div_2_div_1_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Payment ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div")(5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Tracking");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Click here");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const order_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", order_r1.paymentId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("routerLink", "/track/", order_r1.id, "");
  }
}
function OrdersPageComponent_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6)(1, "div")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div")(7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div")(11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div")(15, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, OrdersPageComponent_div_2_div_1_div_18_Template, 9, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const order_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 5, order_r1.createdAt, "medium"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", order_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", order_r1.address, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", order_r1.status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", order_r1.paymentId);
  }
}
function OrdersPageComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, OrdersPageComponent_div_2_div_1_Template, 19, 8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.userOrders);
  }
}
function OrdersPageComponent_h2_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "You have 0 Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class OrdersPageComponent {
  constructor(orderService, userService) {
    this.orderService = orderService;
    this.userService = userService;
    this.userOrders = [];
    this.user = userService.currentUser;
  }
  ngOnInit() {
    this.orderService.getAll().subscribe({
      next: serverOrders => {
        this.userOrders = serverOrders.filter(order => {
          return order.name.includes(this.user.name);
        });
      }
    });
  }
  static {
    this.ɵfac = function OrdersPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OrdersPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_order_service__WEBPACK_IMPORTED_MODULE_0__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: OrdersPageComponent,
      selectors: [["app-orders-page"]],
      standalone: false,
      decls: 4,
      vars: 2,
      consts: [["title", "Orders"], [1, "container"], ["class", "content", 4, "ngIf"], [4, "ngIf"], [1, "content"], ["class", "details", 4, "ngFor", "ngForOf"], [1, "details"], [3, "routerLink"]],
      template: function OrdersPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-title", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, OrdersPageComponent_div_2_Template, 2, 1, "div", 2)(3, OrdersPageComponent_h2_3_Template, 2, 0, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.userOrders);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.userOrders.length === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _partials_title_title_component__WEBPACK_IMPORTED_MODULE_2__.TitleComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
      styles: [".container[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: contents;\n  width: 100%;\n  max-width: 35rem;\n  margin-right: 1rem;\n}\n\n.details[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin: 1rem;\n  font-size: 1.1rem;\n}\n\n.details[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  \n\n  width: 20%;\n}\n\napp-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVycy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQUoiLCJmaWxlIjoib3JkZXJzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uY29udGVudCB7XG4gICAgZGlzcGxheTogY29udGVudHM7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAzNXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG5cbi5kZXRhaWxzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uZGV0YWlscyA+IGRpdiB7XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4uZGV0YWlscyBzdHJvbmcge1xuICAgIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgKi9cbiAgICB3aWR0aDogMjAlO1xufVxuXG5cbmFwcC10aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9vcmRlcnMtcGFnZS9vcmRlcnMtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksMkJBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUFKO0FBQ0EsNHJDQUE0ckMiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uY29udGVudCB7XG4gICAgZGlzcGxheTogY29udGVudHM7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAzNXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG5cbi5kZXRhaWxzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uZGV0YWlscyA+IGRpdiB7XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4uZGV0YWlscyBzdHJvbmcge1xuICAgIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgKi9cbiAgICB3aWR0aDogMjAlO1xufVxuXG5cbmFwcC10aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 5016:
/*!*************************************************************************!*\
  !*** ./src/app/components/pages/payment-page/payment-page.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentPageComponent: () => (/* binding */ PaymentPageComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_models_order_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/order.model */ 6902);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/order.service */ 8674);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _partials_title_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../partials/title/title.component */ 8380);
/* harmony import */ var _partials_order_items_list_order_items_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../partials/order-items-list/order-items-list.component */ 5706);
/* harmony import */ var _partials_map_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../partials/map/map.component */ 3820);
/* harmony import */ var _partials_paypal_button_paypal_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../partials/paypal-button/paypal-button.component */ 2612);








class PaymentPageComponent {
  constructor(orderService, router) {
    this.order = new src_app_shared_models_order_model__WEBPACK_IMPORTED_MODULE_0__.Order();
    orderService.getNewOrderForCurrentUser().subscribe({
      next: order => {
        this.order = order;
      },
      error: () => {
        router.navigateByUrl('/checkout');
      }
    });
  }
  ngOnInit() {}
  static {
    this.ɵfac = function PaymentPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PaymentPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_order_service__WEBPACK_IMPORTED_MODULE_1__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: PaymentPageComponent,
      selectors: [["app-payment-page"]],
      standalone: false,
      decls: 21,
      vars: 6,
      consts: [[1, "container"], [1, "content"], ["title", "Order Summary", "fontSize", "1.6rem"], [1, "summary"], [3, "order"], [1, "map"], ["title", "Shipping Address", "fontSize", "1.6rem"], [3, "order", "readonly"], [1, "buttons-container"], [1, "buttons"]],
      template: function PaymentPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-title", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3)(4, "div")(5, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Name:");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div")(10, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Address:");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "order-items-list", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "app-title", 6)(17, "map", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 8)(19, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "paypal-button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.order.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.order.address);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("order", ctx.order);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("order", ctx.order)("readonly", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("order", ctx.order);
        }
      },
      dependencies: [_partials_title_title_component__WEBPACK_IMPORTED_MODULE_2__.TitleComponent, _partials_order_items_list_order_items_list_component__WEBPACK_IMPORTED_MODULE_3__.OrderItemsListComponent, _partials_map_map_component__WEBPACK_IMPORTED_MODULE_4__.MapComponent, _partials_paypal_button_paypal_button_component__WEBPACK_IMPORTED_MODULE_5__.PaypalButtonComponent],
      styles: [".container[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  display: flex;\n  margin: 0 2rem 6rem 2rem;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.content[_ngcontent-%COMP%] {\n  width: 35rem;\n  margin-right: 3rem;\n  display: flex;\n  flex-direction: column;\n}\n\n.summary[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 0.7rem;\n}\n\n.summary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n\n.summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 1rem 0 0;\n  flex-basis: 5rem;\n}\n\n.buttons-container[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  margin: 2rem;\n  width: 35rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6InBheW1lbnQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDAgMnJlbSA2cmVtIDJyZW07XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGVudCB7XG4gICAgd2lkdGg6IDM1cmVtO1xuICAgIG1hcmdpbi1yaWdodDogM3JlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zdW1tYXJ5ID4gZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IDAuN3JlbTtcbn1cblxuLnN1bW1hcnkgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5zdW1tYXJ5IGgzICB7XG4gICAgbWFyZ2luOiAwIDFyZW0gMCAwO1xuICAgIGZsZXgtYmFzaXM6IDVyZW07XG59XG5cbi5idXR0b25zLWNvbnRhaW5lciB7XG4gICAgZmxleC1iYXNpczogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYnV0dG9ucyB7XG4gICAgbWFyZ2luOiAycmVtO1xuICAgIHdpZHRoOiAzNXJlbTtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9wYXltZW50LXBhZ2UvcGF5bWVudC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBQ0o7QUFDQSxvM0NBQW8zQyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDAgMnJlbSA2cmVtIDJyZW07XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGVudCB7XG4gICAgd2lkdGg6IDM1cmVtO1xuICAgIG1hcmdpbi1yaWdodDogM3JlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zdW1tYXJ5ID4gZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IDAuN3JlbTtcbn1cblxuLnN1bW1hcnkgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5zdW1tYXJ5IGgzICB7XG4gICAgbWFyZ2luOiAwIDFyZW0gMCAwO1xuICAgIGZsZXgtYmFzaXM6IDVyZW07XG59XG5cbi5idXR0b25zLWNvbnRhaW5lciB7XG4gICAgZmxleC1iYXNpczogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYnV0dG9ucyB7XG4gICAgbWFyZ2luOiAycmVtO1xuICAgIHdpZHRoOiAzNXJlbTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 5106:
/*!*********************************************************************!*\
  !*** ./src/app/components/pages/login-page/login-page.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPageComponent: () => (/* binding */ LoginPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/user.service */ 9885);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _partials_title_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../partials/title/title.component */ 8380);
/* harmony import */ var _partials_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../partials/text-input/text-input.component */ 3970);
/* harmony import */ var _partials_default_button_default_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../partials/default-button/default-button.component */ 8730);








const _c0 = a0 => ({
  returnUrl: a0
});
class LoginPageComponent {
  constructor(formBuilder, userService, activatedRoute, router) {
    this.formBuilder = formBuilder;
    this.userService = userService;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.isSubmitted = false;
    this.returnUrl = '';
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
  }
  get fc() {
    return this.loginForm.controls;
  }
  submit() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) return;
    this.userService.login({
      email: this.fc.email.value,
      password: this.fc.password.value
    }).subscribe(() => {
      this.router.navigateByUrl(this.returnUrl);
    });
  }
  static {
    this.ɵfac = function LoginPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: LoginPageComponent,
      selectors: [["app-login-page"]],
      standalone: false,
      decls: 11,
      vars: 8,
      consts: [[1, "container"], [1, "details"], ["title", "Login"], [3, "ngSubmit", "formGroup"], ["type", "email", "label", "Email", 3, "control", "showErrorsWhen"], ["type", "password", "label", "Password", 3, "control", "showErrorsWhen"], ["text", "Login"], [1, "register"], ["routerLink", "/register", 3, "queryParams"]],
      template: function LoginPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-title", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function LoginPageComponent_Template_form_ngSubmit_3_listener() {
            return ctx.submit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "text-input", 4)(5, "text-input", 5)(6, "default-button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " New User? \u00A0 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " Register Here ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.loginForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("control", ctx.fc.email)("showErrorsWhen", ctx.isSubmitted);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("control", ctx.fc.password)("showErrorsWhen", ctx.isSubmitted);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](6, _c0, ctx.returnUrl));
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _partials_title_title_component__WEBPACK_IMPORTED_MODULE_1__.TitleComponent, _partials_text_input_text_input_component__WEBPACK_IMPORTED_MODULE_2__.TextInputComponent, _partials_default_button_default_button_component__WEBPACK_IMPORTED_MODULE_3__.DefaultButtonComponent],
      styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  margin-top: 3rem;\n}\n\n.details[_ngcontent-%COMP%] {\n  width: 28rem;\n}\n\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.error-list[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.register[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0oiLCJmaWxlIjoibG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogM3JlbTtcbn1cblxuLmRldGFpbHMge1xuICAgIHdpZHRoOiAyOHJlbTtcbn1cblxuZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZXJyb3ItbGlzdCB7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuLnJlZ2lzdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9sb2dpbi1wYWdlL2xvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFDQSx3L0JBQXcvQiIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogM3JlbTtcbn1cblxuLmRldGFpbHMge1xuICAgIHdpZHRoOiAyOHJlbTtcbn1cblxuZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZXJyb3ItbGlzdCB7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuLnJlZ2lzdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 5116:
/*!*********************************************************************************!*\
  !*** ./src/app/components/pages/order-track-page/order-track-page.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderTrackPageComponent: () => (/* binding */ OrderTrackPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/order.service */ 8674);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _partials_title_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../partials/title/title.component */ 8380);
/* harmony import */ var _partials_order_items_list_order_items_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../partials/order-items-list/order-items-list.component */ 5706);
/* harmony import */ var _partials_map_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../partials/map/map.component */ 3820);







function OrderTrackPageComponent_div_1_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Payment ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.order.paymentId, " ");
  }
}
function OrderTrackPageComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 5)(4, "div")(5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div")(10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div")(14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div")(18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, OrderTrackPageComponent_div_1_div_21_Template, 4, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "order-items-list", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Order #", ctx_r0.order.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](8, 7, ctx_r0.order.createdAt, "medium"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.order.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.order.address, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.order.status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.order.paymentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("order", ctx_r0.order);
  }
}
class OrderTrackPageComponent {
  constructor(activatedRoute, orderService) {
    const params = activatedRoute.snapshot.params;
    if (!params.orderId) return;
    orderService.trackOrderById(params.orderId).subscribe(order => {
      this.order = order;
    });
  }
  ngOnInit() {}
  static {
    this.ɵfac = function OrderTrackPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OrderTrackPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_order_service__WEBPACK_IMPORTED_MODULE_0__.OrderService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: OrderTrackPageComponent,
      selectors: [["app-order-track-page"]],
      standalone: false,
      decls: 5,
      vars: 3,
      consts: [[1, "container"], ["class", "content", 4, "ngIf"], ["title", "Shipping Address"], [3, "order", "readonly"], [1, "content"], [1, "details"], [4, "ngIf"], [3, "order"]],
      template: function OrderTrackPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, OrderTrackPageComponent_div_1_Template, 23, 10, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-title", 2)(4, "map", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.order);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("order", ctx.order)("readonly", true);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _partials_title_title_component__WEBPACK_IMPORTED_MODULE_1__.TitleComponent, _partials_order_items_list_order_items_list_component__WEBPACK_IMPORTED_MODULE_2__.OrderItemsListComponent, _partials_map_map_component__WEBPACK_IMPORTED_MODULE_3__.MapComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
      styles: [".container[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 35rem;\n  margin-right: 1rem;\n}\n\n.details[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin: 1rem;\n  font-size: 1.1rem;\n}\n\n.details[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLXRyYWNrLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLFVBQUE7QUFDSiIsImZpbGUiOiJvcmRlci10cmFjay1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDM1cmVtO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuLmRldGFpbHMge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5kZXRhaWxzID4gZGl2IHtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG59XG5cbi5kZXRhaWxzIHN0cm9uZyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAyMCU7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9vcmRlci10cmFjay1wYWdlL29yZGVyLXRyYWNrLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLFVBQUE7QUFDSjtBQUNBLHdqQ0FBd2pDIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDM1cmVtO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuLmRldGFpbHMge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5kZXRhaWxzID4gZGl2IHtcbiAgICBtYXJnaW46IDFyZW07XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG59XG5cbi5kZXRhaWxzIHN0cm9uZyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAyMCU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  apiPort: 5100
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

/***/ 5706:
/*!************************************************************************************!*\
  !*** ./src/app/components/partials/order-items-list/order-items-list.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderItemsListComponent: () => (/* binding */ OrderItemsListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);



function OrderItemsListComponent_tr_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td")(2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/food/", item_r1.food.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.food.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.food.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 7, item_r1.food.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 9, item_r1.price), " ");
  }
}
class OrderItemsListComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function OrderItemsListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OrderItemsListComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrderItemsListComponent,
      selectors: [["order-items-list"]],
      inputs: {
        order: "order"
      },
      standalone: false,
      decls: 15,
      vars: 4,
      consts: [["colspan", "5"], [4, "ngFor", "ngForOf"], ["colspan", "3"], [3, "routerLink"], [3, "src"]],
      template: function OrderItemsListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table")(1, "tr")(2, "td", 0)(3, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Order Items:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OrderItemsListComponent_tr_5_Template, 14, 11, "tr", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "td", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td")(9, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Total: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td")(12, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.order.items);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 2, ctx.order.totalPrice), " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CurrencyPipe],
      styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #eeeeee;\n  margin-top: 1rem;\n  border-radius: 5px;\n  padding: 0.5rem 1rem;\n}\n\nh3[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  margin-left: 0.3rem;\n  color: grey;\n}\n\na[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n\ntd[_ngcontent-%COMP%] {\n  height: 3rem;\n}\n\ntd[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  object-fit: cover;\n  border-radius: 100rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLWl0ZW1zLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFDSiIsImZpbGUiOiJvcmRlci1pdGVtcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XG59XG5cbmgzIHtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDAuM3JlbTtcbiAgICBjb2xvcjogZ3JleTtcbn1cblxuYTpob3ZlciB7XG4gICAgb3BhY2l0eTogMC45O1xufVxuXG50ZCB7XG4gICAgaGVpZ2h0OiAzcmVtO1xufVxuXG50ZCBpbWcge1xuICAgIHdpZHRoOiAzcmVtO1xuICAgIGhlaWdodDogM3JlbTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMDByZW07XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYXJ0aWFscy9vcmRlci1pdGVtcy1saXN0L29yZGVyLWl0ZW1zLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFDSjtBQUNBLG9nQ0FBb2dDIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XG59XG5cbmgzIHtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDAuM3JlbTtcbiAgICBjb2xvcjogZ3JleTtcbn1cblxuYTpob3ZlciB7XG4gICAgb3BhY2l0eTogMC45O1xufVxuXG50ZCB7XG4gICAgaGVpZ2h0OiAzcmVtO1xufVxuXG50ZCBpbWcge1xuICAgIHdpZHRoOiAzcmVtO1xuICAgIGhlaWdodDogM3JlbTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMDByZW07XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 5734:
/*!*******************************************************************!*\
  !*** ./src/app/components/pages/food-page/food-page.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FoodPageComponent: () => (/* binding */ FoodPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_services_food_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/food.service */ 9066);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/cart.service */ 6868);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _partials_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../partials/star-rating/star-rating.component */ 6288);
/* harmony import */ var _partials_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../partials/not-found/not-found.component */ 7312);







function FoodPageComponent_div_1_a_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("routerLink", "/tag/", tag_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", tag_r2, " ");
  }
}
function FoodPageComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 4)(3, "div", 5)(4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "\u2764");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "star-rating", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, FoodPageComponent_div_1_a_11_Template, 2, 3, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 11)(13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FoodPageComponent_div_1_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.addToCart());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Add To Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r2.food.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", ctx_r2.food.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.food.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("favorite ", ctx_r2.food.favorite ? "" : "not", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("stars", ctx_r2.food.stars)("size", 1.8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.food.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 10, ctx_r2.food.price), " ");
  }
}
class FoodPageComponent {
  constructor(activatedRoute, foodService, cartService, router) {
    this.cartService = cartService;
    this.router = router;
    activatedRoute.params.subscribe(params => {
      if (params['id']) {
        foodService.getFoodById(params['id']).subscribe(serverFood => {
          this.food = serverFood;
        });
      }
    });
  }
  ngOnInit() {}
  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
  static {
    this.ɵfac = function FoodPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FoodPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_food_service__WEBPACK_IMPORTED_MODULE_0__.FoodService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: FoodPageComponent,
      selectors: [["app-food-page"]],
      standalone: false,
      decls: 2,
      vars: 2,
      consts: [["notFoundMessage", "Food Not Found", "resetLinkText", "Back To Homepage", 3, "visible"], ["class", "container", 4, "ngIf"], [1, "container"], [3, "src", "alt"], [1, "details"], [1, "header"], [1, "name"], [1, "rating"], [3, "stars", "size"], [1, "tags"], [3, "routerLink", 4, "ngFor", "ngForOf"], [1, "price"], [3, "click"], [3, "routerLink"]],
      template: function FoodPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-not-found", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FoodPageComponent_div_1_Template, 18, 12, "div", 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("visible", !ctx.food);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.food);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _partials_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_2__.StarRatingComponent, _partials_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__.NotFoundComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CurrencyPipe],
      styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  margin: 3rem;\n}\n\n.container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  min-width: 25rem;\n  max-width: 40rem;\n}\n\nimg[_ngcontent-%COMP%] {\n  border-radius: 3rem;\n  flex: 1 0;\n  object-fit: cover;\n  height: 35rem;\n  margin: 1rem;\n}\n\n.details[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  flex: 1 0;\n  padding: 2rem;\n  color: black;\n  margin-left: 1rem;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.name[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: bold;\n}\n\n.favorite[_ngcontent-%COMP%] {\n  color: #e72929;\n  font-size: 2.5rem;\n}\n\n.favorite.not[_ngcontent-%COMP%] {\n  color: grey;\n}\n\n.tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 1rem 0;\n}\n\n.tags[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n  padding: 0.3rem 1rem;\n  margin: 0.2rem 0.15rem;\n  border-radius: 10rem;\n  font-weight: 600;\n  color: blue;\n}\n\n.price[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  margin: 1rem 2rem 2rem 0;\n  color: green;\n}\n\n.price[_ngcontent-%COMP%]::before {\n  content: \"Price: \";\n  color: darkgrey;\n}\n\nbutton[_ngcontent-%COMP%] {\n  color: white;\n  background: #e72929;\n  border: none;\n  font-size: 1.2rem;\n  padding: 1rem;\n  border-radius: 10rem;\n  outline: none;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb2QtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJmb29kLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG1hcmdpbjogM3JlbTtcbn1cblxuLmNvbnRhaW5lciA+ICoge1xuICAgIG1pbi13aWR0aDogMjVyZW07XG4gICAgbWF4LXdpZHRoOiA0MHJlbTtcbn1cblxuaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiAzcmVtO1xuICAgIGZsZXg6IDEgMDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBoZWlnaHQ6IDM1cmVtO1xuICAgIG1hcmdpbjogMXJlbTtcbn1cblxuLmRldGFpbHMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4OiAxIDA7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbi5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubmFtZSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZmF2b3JpdGUge1xuICAgIGNvbG9yOiAjZTcyOTI5O1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuXG4uZmF2b3JpdGUubm90IHtcbiAgICBjb2xvcjogZ3JleTtcbn1cblxuLnRhZ3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG1hcmdpbjogMXJlbSAwO1xufVxuXG4udGFncyBhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICAgIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xuICAgIG1hcmdpbjogMC4ycmVtIDAuMTVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTByZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogYmx1ZTtcbn1cblxuLnByaWNlIHtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICBtYXJnaW46IDFyZW0gMnJlbSAycmVtIDA7XG4gICAgY29sb3I6IGdyZWVuO1xufVxuICBcbi5wcmljZTo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlByaWNlOiBcIjtcbiAgICBjb2xvcjogZGFya2dyZXk7XG59XG5cbmJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6ICNlNzI5Mjk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTByZW07XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9mb29kLXBhZ2UvZm9vZC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQ0EsbzNGQUFvM0YiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG1hcmdpbjogM3JlbTtcbn1cblxuLmNvbnRhaW5lciA+ICoge1xuICAgIG1pbi13aWR0aDogMjVyZW07XG4gICAgbWF4LXdpZHRoOiA0MHJlbTtcbn1cblxuaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiAzcmVtO1xuICAgIGZsZXg6IDEgMDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBoZWlnaHQ6IDM1cmVtO1xuICAgIG1hcmdpbjogMXJlbTtcbn1cblxuLmRldGFpbHMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4OiAxIDA7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbi5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubmFtZSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZmF2b3JpdGUge1xuICAgIGNvbG9yOiAjZTcyOTI5O1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuXG4uZmF2b3JpdGUubm90IHtcbiAgICBjb2xvcjogZ3JleTtcbn1cblxuLnRhZ3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG1hcmdpbjogMXJlbSAwO1xufVxuXG4udGFncyBhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICAgIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xuICAgIG1hcmdpbjogMC4ycmVtIDAuMTVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTByZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogYmx1ZTtcbn1cblxuLnByaWNlIHtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICBtYXJnaW46IDFyZW0gMnJlbSAycmVtIDA7XG4gICAgY29sb3I6IGdyZWVuO1xufVxuICBcbi5wcmljZTo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlByaWNlOiBcIjtcbiAgICBjb2xvcjogZGFya2dyZXk7XG59XG5cbmJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6ICNlNzI5Mjk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTByZW07XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 6288:
/*!**************************************************************************!*\
  !*** ./src/app/components/partials/star-rating/star-rating.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StarRatingComponent: () => (/* binding */ StarRatingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);


const _c0 = () => [1, 2, 3, 4, 5];
function StarRatingComponent_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 2);
  }
  if (rf & 2) {
    const current_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.getStarImage(current_r1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngStyle", ctx_r1.styles);
  }
}
class StarRatingComponent {
  constructor() {
    this.size = 1;
  }
  get styles() {
    return {
      'width.rem': this.size,
      'height.rem': this.size,
      'marginRight.rem': this.size / 6
    };
  }
  getStarImage(current) {
    const previousHalf = current - 0.5;
    const imageName = this.stars >= current ? 'star-full' : this.stars >= previousHalf ? 'star-half' : 'star-empty';
    return `/assets/stars/${imageName}.svg`;
  }
  static {
    this.ɵfac = function StarRatingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || StarRatingComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StarRatingComponent,
      selectors: [["star-rating"]],
      inputs: {
        stars: "stars",
        size: "size"
      },
      standalone: false,
      decls: 2,
      vars: 2,
      consts: [[1, "container"], [3, "src", "ngStyle", 4, "ngFor", "ngForOf"], [3, "src", "ngStyle"]],
      template: function StarRatingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StarRatingComponent_img_1_Template, 1, 2, "img", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
      styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  margin-top: 0.4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXItcmF0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSiIsImZpbGUiOiJzdGFyLXJhdGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgbWFyZ2luLXRvcDogMC40cmVtO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYXJ0aWFscy9zdGFyLXJhdGluZy9zdGFyLXJhdGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFDQSxvWkFBb1oiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIG1hcmdpbi10b3A6IDAuNHJlbTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 6602:
/*!****************************************************************!*\
  !*** ./src/app/components/partials/search/search.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchComponent: () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);


class SearchComponent {
  constructor(activatedRoute, router) {
    this.router = router;
    this.searchTerm = '';
    activatedRoute.params.subscribe(params => {
      if (params['searchTerm']) {
        this.searchTerm = params['searchTerm'];
      }
    });
  }
  ngOnInit() {}
  search(term) {
    if (term) {
      this.router.navigateByUrl('/search/' + term);
    }
  }
  static {
    this.ɵfac = function SearchComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchComponent,
      selectors: [["app-search"]],
      standalone: false,
      decls: 5,
      vars: 1,
      consts: [["s", ""], ["type", "text", "placeholder", "Search Express Donut", 3, "keyup.enter", "value"], [3, "click"]],
      template: function SearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "input", 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function SearchComponent_Template_input_keyup_enter_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            const s_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.search(s_r2.value));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            const s_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.search(s_r2.value));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Search");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.searchTerm);
        }
      },
      styles: ["div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 3rem;\n  margin-bottom: 1.5rem;\n}\n\ninput[_ngcontent-%COMP%] {\n  border-radius: 10rem 0 0 10rem;\n  border: none;\n  height: 3rem;\n  width: 20rem;\n  background-color: #f1f1f1;\n  padding: 1.2rem;\n  font-size: 1.1rem;\n  font-weight: 500;\n  outline: none;\n}\n\ndiv[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: grey;\n  height: 3rem;\n  width: 5rem;\n  font-size: 1rem;\n  border-radius: 0 10rem 10rem 0;\n  border: none;\n  background-color: #e72929;\n  color: white;\n  opacity: 0.8;\n  outline: none;\n}\n\ndiv[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbmlucHV0IHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHJlbSAwIDAgMTByZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGhlaWdodDogM3JlbTtcbiAgICB3aWR0aDogMjByZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgICBwYWRkaW5nOiAxLjJyZW07XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG5kaXYgYnV0dG9uIHtcbiAgICBjb2xvcjogZ3JleTtcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgd2lkdGg6IDVyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMTByZW0gMTByZW0gMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3MjkyOTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgb3BhY2l0eTogMC44O1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbmRpdiBidXR0b246aG92ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYXJ0aWFscy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksOEJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQ0EsNDhDQUE0OEMiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbmlucHV0IHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHJlbSAwIDAgMTByZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGhlaWdodDogM3JlbTtcbiAgICB3aWR0aDogMjByZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgICBwYWRkaW5nOiAxLjJyZW07XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG5kaXYgYnV0dG9uIHtcbiAgICBjb2xvcjogZ3JleTtcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgd2lkdGg6IDVyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMTByZW0gMTByZW0gMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3MjkyOTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgb3BhY2l0eTogMC44O1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbmRpdiBidXR0b246aG92ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 6868:
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CartService: () => (/* binding */ CartService)
/* harmony export */ });
/* harmony import */ var _shared_models_cart_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/models/cart.model */ 8660);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _shared_models_cart_item_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/models/cart-item.model */ 2328);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);




class CartService {
  constructor() {
    this.cart = this.getCartFromLocalStorage();
    this.cartSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(this.cart);
  }
  addToCart(food) {
    let cartItem = this.cart.items.find(item => item.food.id === food.id);
    if (cartItem) return;else {
      this.cart.items.push(new _shared_models_cart_item_model__WEBPACK_IMPORTED_MODULE_1__.CartItem(food));
      this.setCartToLocalStorage();
    }
  }
  removeFromCart(foodId) {
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId);
    this.setCartToLocalStorage();
  }
  changeQuantity(foodId, quantity) {
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if (!cartItem) return;else {
      cartItem.quantity = quantity;
      cartItem.price = quantity * cartItem.food.price;
      this.setCartToLocalStorage();
    }
  }
  clearCart() {
    this.cart = new _shared_models_cart_model__WEBPACK_IMPORTED_MODULE_0__.Cart();
    this.setCartToLocalStorage();
  }
  getCartObservable() {
    return this.cartSubject.asObservable();
  }
  getCart() {
    return this.cartSubject.value;
  }
  setCartToLocalStorage() {
    this.cart.totalPrice = this.cart.items.reduce((previousSum, currentItem) => previousSum + currentItem.price, 0);
    this.cart.totalCount = this.cart.items.reduce((previousSum, currentItem) => previousSum + currentItem.quantity, 0);
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }
  getCartFromLocalStorage() {
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : new _shared_models_cart_model__WEBPACK_IMPORTED_MODULE_0__.Cart();
  }
  static {
    this.ɵfac = function CartService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CartService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: CartService,
      factory: CartService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 6902:
/*!**********************************************!*\
  !*** ./src/app/shared/models/order.model.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Order: () => (/* binding */ Order)
/* harmony export */ });
class Order {}

/***/ }),

/***/ 7038:
/*!*********************************************!*\
  !*** ./src/app/services/loading.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingService: () => (/* binding */ LoadingService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class LoadingService {
  constructor() {
    this.isLoadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
  }
  showLoading() {
    this.isLoadingSubject.next(true);
  }
  hideLoading() {
    this.isLoadingSubject.next(false);
  }
  get isLoading() {
    return this.isLoadingSubject.asObservable();
  }
  static {
    this.ɵfac = function LoadingService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoadingService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: LoadingService,
      factory: LoadingService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 7312:
/*!**********************************************************************!*\
  !*** ./src/app/components/partials/not-found/not-found.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotFoundComponent: () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);



function NotFoundComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.notFoundMessage, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r0.resetLinkRoute);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.resetLinkText);
  }
}
class NotFoundComponent {
  constructor() {
    this.visible = false;
    this.notFoundMessage = "Nothing Found!";
    this.resetLinkText = "Reset";
    this.resetLinkRoute = "/";
  }
  ngOnInit() {}
  static {
    this.ɵfac = function NotFoundComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NotFoundComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotFoundComponent,
      selectors: [["app-not-found"]],
      inputs: {
        visible: "visible",
        notFoundMessage: "notFoundMessage",
        resetLinkText: "resetLinkText",
        resetLinkRoute: "resetLinkRoute"
      },
      standalone: false,
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [3, "routerLink"]],
      template: function NotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NotFoundComponent_div_0_Template, 4, 3, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visible);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: ["div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  font-size: 1.5rem;\n  font-weight: 100;\n  height: 15rem;\n}\n\na[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  background-color: #e72929;\n  color: white;\n  border-radius: 10rem;\n  padding: 0.7rem 1rem;\n  margin: 1rem;\n  opacity: 0.8;\n}\n\na[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoibm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGhlaWdodDogMTVyZW07XG59XG5cbmEge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNzI5Mjk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xuICAgIHBhZGRpbmc6IDAuN3JlbSAxcmVtO1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICBvcGFjaXR5OiAwLjg7XG59XG5cbmE6aG92ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYXJ0aWFscy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7QUFDSjtBQUNBLHdoQ0FBd2hDIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGhlaWdodDogMTVyZW07XG59XG5cbmEge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNzI5Mjk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xuICAgIHBhZGRpbmc6IDAuN3JlbSAxcmVtO1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICBvcGFjaXR5OiAwLjg7XG59XG5cbmE6aG92ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 8078:
/*!*********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_food_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/food.service */ 9066);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _partials_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../partials/star-rating/star-rating.component */ 6288);
/* harmony import */ var _partials_search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../partials/search/search.component */ 6602);
/* harmony import */ var _partials_tags_tags_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../partials/tags/tags.component */ 1728);
/* harmony import */ var _partials_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../partials/not-found/not-found.component */ 7312);








function HomeComponent_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li")(1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 4)(4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " \u2764 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "star-rating", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 8)(11, "div", 9)(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const food_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("routerLink", "/food/", food_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", food_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("alt", food_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", food_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("favorite ", food_r1.favorite ? "" : "not", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("stars", food_r1.stars);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 10, food_r1.price), " ");
  }
}
class HomeComponent {
  constructor(foodService, activatedRoute) {
    this.foodService = foodService;
    this.foods = [];
    let foodsObservable;
    activatedRoute.params.subscribe(params => {
      if (params.searchTerm) foodsObservable = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);else if (params.tag) foodsObservable = this.foodService.getAllFoodsByTag(params.tag);else foodsObservable = foodService.getAll();
      foodsObservable.subscribe(serverFoods => {
        this.foods = serverFoods;
      });
    });
  }
  ngOnInit() {}
  static {
    this.ɵfac = function HomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_food_service__WEBPACK_IMPORTED_MODULE_0__.FoodService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      standalone: false,
      decls: 5,
      vars: 2,
      consts: [["resetLinkText", "Reset Search", 3, "visible"], [4, "ngFor", "ngForOf"], [3, "routerLink"], [3, "src", "alt"], [1, "content"], [1, "name"], [1, "stars"], [3, "stars"], [1, "product-item-footer"], [1, "price"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-search")(1, "app-tags")(2, "app-not-found", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ul");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, HomeComponent_li_4_Template, 15, 12, "li", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("visible", !ctx.foods || !ctx.foods.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.foods);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _partials_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_1__.StarRatingComponent, _partials_search_search_component__WEBPACK_IMPORTED_MODULE_2__.SearchComponent, _partials_tags_tags_component__WEBPACK_IMPORTED_MODULE_3__.TagsComponent, _partials_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__.NotFoundComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CurrencyPipe],
      styles: ["ul[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  list-style-type: none;\n  padding: 0;\n}\n\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  height: 22.5rem;\n  width: 20rem;\n  border: 1px solid whitesmoke;\n  border-radius: 1rem;\n  margin: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  color: #e72929;\n}\n\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  cursor: pointer;\n}\n\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: cover;\n  height: 14.5rem;\n}\n\n.content[_ngcontent-%COMP%] {\n  margin-top: 0.3rem;\n  padding: 0.5rem 1rem;\n  position: relative;\n  height: 7rem;\n}\n\n.favorite[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5rem;\n  right: 1rem;\n  font-size: 1.2rem;\n}\n\n.favorite.not[_ngcontent-%COMP%] {\n  color: grey;\n}\n\n.stars[_ngcontent-%COMP%] {\n  margin-bottom: 0.2rem;\n}\n\n.product-item-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.price[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0.9rem;\n  background: white;\n  padding: 0.3rem 100% 0 0;\n  color: #414141;\n  margin-top: 0.7rem;\n  font-size: 1.1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG5saSBhIHtcbiAgICBoZWlnaHQ6IDIyLjVyZW07XG4gICAgd2lkdGg6IDIwcmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlc21va2U7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICBtYXJnaW46IDAuNXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjb2xvcjogI2U3MjkyOTtcbn1cblxubGkgYTpob3ZlciB7XG4gICAgb3BhY2l0eTogMC45O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxubGkgYSBpbWcge1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIGhlaWdodDogMTQuNXJlbTtcbn1cblxuLmNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDAuM3JlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiA3cmVtO1xufVxuXG4uZmF2b3JpdGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDAuNXJlbTtcbiAgICByaWdodDogMXJlbTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLmZhdm9yaXRlLm5vdCB7XG4gICAgY29sb3I6IGdyZXk7XG59XG5cbi5zdGFycyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xufVxuXG4ucHJvZHVjdC1pdGVtLWZvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5wcmljZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwLjlyZW07XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcGFkZGluZzogMC4zcmVtIDEwMCUgMCAwO1xuICAgIGNvbG9yOiAjNDE0MTQxO1xuICAgIG1hcmdpbi10b3A6IDAuN3JlbTtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFDQSxnM0VBQWczRSIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG5saSBhIHtcbiAgICBoZWlnaHQ6IDIyLjVyZW07XG4gICAgd2lkdGg6IDIwcmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlc21va2U7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICBtYXJnaW46IDAuNXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjb2xvcjogI2U3MjkyOTtcbn1cblxubGkgYTpob3ZlciB7XG4gICAgb3BhY2l0eTogMC45O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxubGkgYSBpbWcge1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIGhlaWdodDogMTQuNXJlbTtcbn1cblxuLmNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDAuM3JlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiA3cmVtO1xufVxuXG4uZmF2b3JpdGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDAuNXJlbTtcbiAgICByaWdodDogMXJlbTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLmZhdm9yaXRlLm5vdCB7XG4gICAgY29sb3I6IGdyZXk7XG59XG5cbi5zdGFycyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xufVxuXG4ucHJvZHVjdC1pdGVtLWZvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5wcmljZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwLjlyZW07XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcGFkZGluZzogMC4zcmVtIDEwMCUgMCAwO1xuICAgIGNvbG9yOiAjNDE0MTQxO1xuICAgIG1hcmdpbi10b3A6IDAuN3JlbTtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 8380:
/*!**************************************************************!*\
  !*** ./src/app/components/partials/title/title.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TitleComponent: () => (/* binding */ TitleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);


const _c0 = (a0, a1) => ({
  margin: a0,
  fontSize: a1
});
class TitleComponent {
  constructor() {
    this.margin = '1rem 0 1rem 0.2rem';
    this.fontSize = '1.7rem';
  }
  ngOnInit() {}
  static {
    this.ɵfac = function TitleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TitleComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TitleComponent,
      selectors: [["app-title"]],
      inputs: {
        title: "title",
        margin: "margin",
        fontSize: "fontSize"
      },
      standalone: false,
      decls: 2,
      vars: 5,
      consts: [[3, "ngStyle"]],
      template: function TitleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx.margin, ctx.fontSize));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, "\n");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
      styles: ["h1[_ngcontent-%COMP%] {\n  color: #616161;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpdGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKIiwiZmlsZSI6InRpdGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICAgIGNvbG9yOiAjNjE2MTYxXG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYXJ0aWFscy90aXRsZS90aXRsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSjtBQUNBLHdSQUF3UiIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgICBjb2xvcjogIzYxNjE2MVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 8660:
/*!*********************************************!*\
  !*** ./src/app/shared/models/cart.model.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cart: () => (/* binding */ Cart)
/* harmony export */ });
class Cart {
  constructor() {
    this.items = [];
    this.totalPrice = 0;
    this.totalCount = 0;
  }
}

/***/ }),

/***/ 8674:
/*!*******************************************!*\
  !*** ./src/app/services/order.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderService: () => (/* binding */ OrderService)
/* harmony export */ });
/* harmony import */ var _shared_constants_urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/constants/urls */ 3532);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);



class OrderService {
  constructor(http) {
    this.http = http;
  }
  create(order) {
    return this.http.post(_shared_constants_urls__WEBPACK_IMPORTED_MODULE_0__.ORDER_CREATE_URL, order);
  }
  getNewOrderForCurrentUser() {
    return this.http.get(_shared_constants_urls__WEBPACK_IMPORTED_MODULE_0__.ORDER_NEW_FOR_CURRENT_USER_URL);
  }
  pay(order) {
    return this.http.post(_shared_constants_urls__WEBPACK_IMPORTED_MODULE_0__.ORDER_PAY_URL, order);
  }
  trackOrderById(id) {
    return this.http.get(_shared_constants_urls__WEBPACK_IMPORTED_MODULE_0__.ORDER_TRACK_URL + id);
  }
  getAll() {
    return this.http.get(_shared_constants_urls__WEBPACK_IMPORTED_MODULE_0__.ORDERS_URL);
  }
  static {
    this.ɵfac = function OrderService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: OrderService,
      factory: OrderService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 8730:
/*!********************************************************************************!*\
  !*** ./src/app/components/partials/default-button/default-button.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultButtonComponent: () => (/* binding */ DefaultButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);



const _c0 = (a0, a1, a2, a3) => ({
  color: a0,
  "background-color": a1,
  "font-size.rem": a2,
  "width.rem": a3
});
class DefaultButtonComponent {
  constructor() {
    this.type = 'submit';
    this.text = 'Submit';
    this.bgColor = '#e72929';
    this.color = 'white';
    this.fontSizeRem = 1.3;
    this.widthRem = 12;
    this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnInit() {}
  static {
    this.ɵfac = function DefaultButtonComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DefaultButtonComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DefaultButtonComponent,
      selectors: [["default-button"]],
      inputs: {
        type: "type",
        text: "text",
        bgColor: "bgColor",
        color: "color",
        fontSizeRem: "fontSizeRem",
        widthRem: "widthRem"
      },
      outputs: {
        onClick: "onClick"
      },
      standalone: false,
      decls: 3,
      vars: 8,
      consts: [[1, "container"], [3, "click", "ngStyle", "type"]],
      template: function DefaultButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DefaultButtonComponent_Template_button_click_1_listener() {
            return ctx.onClick.emit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](3, _c0, ctx.color, ctx.bgColor, ctx.fontSizeRem, ctx.widthRem))("type", ctx.type);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.text, " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
      styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\nbutton[_ngcontent-%COMP%] {\n  height: 3.5rem;\n  border: none;\n  outline: none;\n  font-weight: 100;\n  border-radius: 0.8rem;\n  width: 100%;\n  margin: 1rem auto;\n  opacity: 0.8;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmF1bHQtYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxVQUFBO0FBQ0oiLCJmaWxlIjoiZGVmYXVsdC1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5idXR0b24ge1xuICAgIGhlaWdodDogMy41cmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xuICAgIG9wYWNpdHk6IDAuODtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3BhY2l0eTogMTtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYXJ0aWFscy9kZWZhdWx0LWJ1dHRvbi9kZWZhdWx0LWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsVUFBQTtBQUNKO0FBQ0EsdzRCQUF3NEIiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5idXR0b24ge1xuICAgIGhlaWdodDogMy41cmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xuICAgIG9wYWNpdHk6IDAuODtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3BhY2l0eTogMTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 9066:
/*!******************************************!*\
  !*** ./src/app/services/food.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FoodService: () => (/* binding */ FoodService)
/* harmony export */ });
/* harmony import */ var _shared_constants_urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/constants/urls */ 3532);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);



class FoodService {
  constructor(http) {
    this.http = http;
  }
  getAll() {
    return this.http.get(_shared_constants_urls__WEBPACK_IMPORTED_MODULE_0__.FOODS_URL);
  }
  getAllFoodsBySearchTerm(searchTerm) {
    return this.http.get(_shared_constants_urls__WEBPACK_IMPORTED_MODULE_0__.FOODS_BY_SEARCH_URL + searchTerm);
  }
  getAllTags() {
    return this.http.get(_shared_constants_urls__WEBPACK_IMPORTED_MODULE_0__.FOODS_TAGS_URL);
  }
  getAllFoodsByTag(tag) {
    return tag === "All" ? this.getAll() : this.http.get(_shared_constants_urls__WEBPACK_IMPORTED_MODULE_0__.FOODS_BY_TAG_URL + tag);
  }
  getFoodById(foodId) {
    return this.http.get(_shared_constants_urls__WEBPACK_IMPORTED_MODULE_0__.FOODS_BY_ID_URL + foodId);
  }
  static {
    this.ɵfac = function FoodService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FoodService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: FoodService,
      factory: FoodService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 9615:
/*!*******************************************!*\
  !*** ./src/app/auth/guards/auth.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/user.service */ 9885);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);



class AuthGuard {
  constructor(userService, router) {
    this.userService = userService;
    this.router = router;
  }
  canActivate(route, state) {
    if (this.userService.currentUser.token) return true;
    this.router.navigate(['/login'], {
      queryParams: {
        returnUrl: state.url
      }
    });
    return false;
  }
  static {
    this.ɵfac = function AuthGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 9885:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserService: () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8764);
/* harmony import */ var _shared_models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/models/user.model */ 1749);
/* harmony import */ var _shared_constants_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/constants/urls */ 3532);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 4285);







const USER_KEY = 'User';
class UserService {
  constructor(http, toastrService) {
    this.http = http;
    this.toastrService = toastrService;
    this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(this.getUserFromLocalStorage());
    this.userObservable = this.userSubject.asObservable();
  }
  get currentUser() {
    return this.userSubject.value;
  }
  login(userLogin) {
    return this.http.post(_shared_constants_urls__WEBPACK_IMPORTED_MODULE_1__.USER_LOGIN_URL, userLogin).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)({
      next: user => {
        this.setUserToLocalStorage(user);
        this.userSubject.next(user);
        this.toastrService.success(`Welcome to Express Donut ${user.name}!`, 'Login Successful');
      },
      error: errorResponse => {
        this.toastrService.error(errorResponse.error, 'Login Failed');
      }
    }));
  }
  register(userRegister) {
    return this.http.post(_shared_constants_urls__WEBPACK_IMPORTED_MODULE_1__.USER_REGISTER_URL, userRegister).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)({
      next: user => {
        this.setUserToLocalStorage(user);
        this.userSubject.next(user);
        this.toastrService.success(`Welcome to Express Donut ${user.name}`, 'Register Successful');
      },
      error: errorResponse => {
        this.toastrService.error(errorResponse.error, 'Register Failed');
      }
    }));
  }
  logout() {
    this.userSubject.next(new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_0__.User());
    localStorage.clear();
    // localStorage.removeItem(USER_KEY)
    window.location.reload();
  }
  setUserToLocalStorage(user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  getUserFromLocalStorage() {
    const userJson = localStorage.getItem(USER_KEY);
    if (userJson) return JSON.parse(userJson);
    return new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_0__.User();
  }
  static {
    this.ɵfac = function UserService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map