webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__ = __webpack_require__("./src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_customers_customers_component__ = __webpack_require__("./src/app/components/customers/customers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_customer_detail_customer_detail_component__ = __webpack_require__("./src/app/components/customer-detail/customer-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dialogs_add_add_dialog_component__ = __webpack_require__("./src/app/dialogs/add/add.dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dialogs_edit_edit_dialog_component__ = __webpack_require__("./src/app/dialogs/edit/edit.dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__dialogs_delete_delete_dialog_component__ = __webpack_require__("./src/app/dialogs/delete/delete.dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_customers_service__ = __webpack_require__("./src/app/services/customers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_customer_detail_service__ = __webpack_require__("./src/app/services/customer-detail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'customers', component: __WEBPACK_IMPORTED_MODULE_13__components_customers_customers_component__["a" /* CustomersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'customers/:id', component: __WEBPACK_IMPORTED_MODULE_14__components_customer_detail_customer_detail_component__["a" /* CustomerDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_customers_customers_component__["a" /* CustomersComponent */],
                __WEBPACK_IMPORTED_MODULE_15__dialogs_add_add_dialog_component__["a" /* AddDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_16__dialogs_edit_edit_dialog_component__["a" /* EditDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_17__dialogs_delete_delete_dialog_component__["a" /* DeleteDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_customer_detail_customer_detail_component__["a" /* CustomerDetailComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages__["FlashMessagesModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_material__["e" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_material__["g" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_material__["h" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_material__["l" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_material__["o" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_material__["p" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_material__["q" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_material__["m" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_material__["j" /* MatOptionModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_material__["c" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_material__["i" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* ReactiveFormsModule */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_15__dialogs_add_add_dialog_component__["a" /* AddDialogComponent */], __WEBPACK_IMPORTED_MODULE_16__dialogs_edit_edit_dialog_component__["a" /* EditDialogComponent */], __WEBPACK_IMPORTED_MODULE_17__dialogs_delete_delete_dialog_component__["a" /* DeleteDialogComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_18__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_20__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_21__services_customers_service__["a" /* CustomersService */], __WEBPACK_IMPORTED_MODULE_22__services_customer_detail_service__["a" /* CustomerDetailService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/customer-detail/customer-detail.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n\tmax-width: 400px;\r\n}\r\n\r\n.form {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\tpadding-top: 6px;\r\n}\r\n\r\n.mat-form-field {\r\n\tfont-size: 16px;\r\n\t-webkit-box-flex: 1;\r\n\t    -ms-flex-positive: 1;\r\n\t        flex-grow: 1;\r\n}\r\n\r\n.mat-dialog-actions {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-align: end;\r\n\t    -ms-flex-align: end;\r\n\t        align-items: flex-end;\r\n}\r\n\r\n.mat-dialog-actions:last-child {\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n.mat-raised-button {\r\n\tmargin-right: 5px;\r\n}\r\n\r\n.fill-space {\r\n\t-webkit-box-flex: 1;\r\n\t    -ms-flex: 1 1 auto;\r\n\t        flex: 1 1 auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/customer-detail/customer-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"customer\">\n  <h1 mat-dialog-title>CustomerID: {{customer.customerID}}</h1>\n  <form class=\"mat-dialog-content\" (ngSubmit)=\"submit\" #formControl=\"ngForm\">\n\n    <div class=\"form\" color=\"accent\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"First Name\" [(ngModel)]=\"customer.name.first\" name=\"first\" required [disabled]=\"!editMode\">\n        <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\n      </mat-form-field>\n    </div>\n\n    <div class=\"form\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Last Name\" [(ngModel)]=\"customer.name.last\" name=\"last\" required [disabled]=\"!editMode\">\n        <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\n      </mat-form-field>\n    </div>\n\n    <div class=\"form\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput [matDatepicker]=\"birthdayDatepicker\" placeholder=\"Birthday\" [(ngModel)]=\"customer.birthday\" name=\"birthday\" [disabled]=\"!editMode\">\n        <mat-datepicker-toggle matSuffix [for]=\"birthdayDatepicker\"></mat-datepicker-toggle>\n        <mat-datepicker #birthdayDatepicker></mat-datepicker>\n      </mat-form-field>\n    </div>\n    \n    <div class=\"form\">\n      <mat-form-field class=\"example-full-width\" >\n        <mat-select placeholder=\"Gender\" [(ngModel)]=\"customer.gender\" name=\"gender\" [disabled]=\"!editMode\">\n          <mat-option value=\"m\">Man</mat-option>\n          <mat-option value=\"w\">Woman</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n\n    <div class=\"form\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput [matDatepicker]=\"lastContactDatepicker\" placeholder=\"Last Contact\" [(ngModel)]=\"customer.lastContact\" name=\"lastContact\" [disabled]=\"!editMode\">\n        <mat-datepicker-toggle matSuffix [for]=\"lastContactDatepicker\"></mat-datepicker-toggle>\n        <mat-datepicker #lastContactDatepicker></mat-datepicker>\n      </mat-form-field>\n    </div>\n\n    <div mat-dialog-actions>\n      <button mat-raised-button (click)=\"back()\">Back</button>\n      <span class=\"fill-space\"></span>\n      <button *ngIf=\"!editMode\" mat-raised-button (click)=\"edit()\" color=\"primary\" >Edit</button>\n      <button *ngIf=\"editMode\" mat-raised-button (click)=\"cancel(customer)\" color=\"primary\" >Cancel</button>\n      <button *ngIf=\"editMode\" mat-raised-button color=\"primary\" [type]=\"submit\" [disabled]=\"!formControl.valid\" (click)=\"confirmEdit(customer)\">Save</button>\n    </div>\n  </form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/customer-detail/customer-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_customer_detail_service__ = __webpack_require__("./src/app/services/customer-detail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_customers_service__ = __webpack_require__("./src/app/services/customers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomerDetailComponent = /** @class */ (function () {
    function CustomerDetailComponent(router, route, customerDetailService, customersService) {
        this.router = router;
        this.route = route;
        this.customerDetailService = customerDetailService;
        this.customersService = customersService;
        this.editMode = false;
        this.formControl = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* Validators */].required
            // Validators.email,
        ]);
    }
    CustomerDetailComponent.prototype.ngOnInit = function () {
        this.loadCustomer();
    };
    CustomerDetailComponent.prototype.loadCustomer = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        this.customerDetailService.getCustomer(id).subscribe(function (data) {
            _this.customer = data;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    CustomerDetailComponent.prototype.back = function () {
        this.router.navigate(['/customers']);
    };
    CustomerDetailComponent.prototype.edit = function () {
        this.editMode = true;
    };
    CustomerDetailComponent.prototype.cancel = function (customer) {
        this.editMode = false;
    };
    CustomerDetailComponent.prototype.confirmEdit = function (customer) {
        this.customersService.updateCustomer(customer);
        this.editMode = false;
    };
    CustomerDetailComponent.prototype.getErrorMessage = function () {
        return this.formControl.hasError('required')
            ? 'Required field'
            : this.formControl.hasError('email') ? 'Not a valid email' : '';
    };
    CustomerDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-customer-detail',
            template: __webpack_require__("./src/app/components/customer-detail/customer-detail.component.html"),
            styles: [__webpack_require__("./src/app/components/customer-detail/customer-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_customer_detail_service__["a" /* CustomerDetailService */],
            __WEBPACK_IMPORTED_MODULE_3__services_customers_service__["a" /* CustomersService */]])
    ], CustomerDetailComponent);
    return CustomerDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/customers/customers.component.css":
/***/ (function(module, exports) {

module.exports = "/* Structure */\r\n.container {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n}\r\n/* Toolbar */\r\n.spacer {\r\n\t-webkit-box-flex: 1;\r\n\t    -ms-flex: 1 1 auto;\r\n\t        flex: 1 1 auto;\r\n}\r\n/* Filter */\r\n.form {\r\n\tmin-height: 56px;\r\n\tmax-height: 56px;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n\tpadding: 8px 24px 0;\r\n\tfont-size: 20px;\r\n\t-webkit-box-pack: justify;\r\n\t    -ms-flex-pack: justify;\r\n\t        justify-content: space-between;\r\n\tborder-bottom: 1px solid transparent;\r\n}\r\n.mat-toolbar {\r\n\tbackground-color: transparent;\r\n}\r\n.mat-form-field {\r\n\tfont-size: 14px;\r\n\t-webkit-box-flex: 1;\r\n\t    -ms-flex-positive: 1;\r\n\t        flex-grow: 1;\r\n\tmargin-top: 8px;\r\n}\r\n/* Mat table */\r\n.no-results {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n\tpadding: 14px;\r\n\tfont-size: 14px;\r\n\tfont-style: italic;\r\n}\r\n.mat-column-customerID {\r\n\t-webkit-box-flex: 0;\r\n\t    -ms-flex: 0 0 5%;\r\n\t        flex: 0 0 5%;\r\n}\r\n.mat-column-first {\r\n\t-webkit-box-flex: 0;\r\n\t    -ms-flex: 0 0 25%;\r\n\t        flex: 0 0 25%;\r\n}\r\n.mat-column-last {\r\n\t-webkit-box-flex: 0;\r\n\t    -ms-flex: 0 0 25%;\r\n\t        flex: 0 0 25%;\r\n}\r\n.mat-column-birthday {\r\n\t-webkit-box-flex: 0;\r\n\t    -ms-flex: 0 0 10%;\r\n\t        flex: 0 0 10%;\r\n}\r\n.mat-column-gender {\r\n\t-webkit-box-flex: 0;\r\n\t    -ms-flex: 0 0 10%;\r\n\t        flex: 0 0 10%;\r\n}\r\n.mat-column-lastContact {\r\n\t-webkit-box-flex: 0;\r\n\t    -ms-flex: 0 0 10%;\r\n\t        flex: 0 0 10%;\r\n}\r\n.mat-column-actions {\r\n\t-webkit-box-flex: 0;\r\n\t    -ms-flex: 0 0 15%;\r\n\t        flex: 0 0 15%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/customers/customers.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <span>Customers CRUD operations</span>\n  <span class=\"spacer\"></span>\n  Reload data:\n  <button mat-icon-button (click)=\"refresh()\">\n    <mat-icon>refresh</mat-icon>\n  </button>\n</mat-toolbar>\n\n<div class=\"container mat-elevation-z8\">\n\n  <div class=\"form\">\n    <mat-form-field floatPlaceholder=\"never\" color=\"accent\">\n      <input matInput #filter placeholder=\"Filter customers\">\n    </mat-form-field>\n  </div>\n\n  <mat-table #table [dataSource]=\"dataSource\" matSort class=\"mat-cell\">\n\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"customerID\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>ID</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\" >{{row.customerID}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"first\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>First Name</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.name.first}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"last\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Last Name</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.name.last}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"birthday\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Birthday</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.birthday | date: 'MM/dd/yyyy'}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"gender\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Gender</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.gender}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"lastContact\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Last Contact</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.lastContact | date: 'MM/dd/yyyy'}}</mat-cell>\n    </ng-container>\n\n    <!-- actions -->\n    <ng-container matColumnDef=\"actions\">\n      <mat-header-cell *matHeaderCellDef>\n        <button mat-icon-button color=\"primary\" (click)=\"addNew()\">\n          <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\n        </button>\n      </mat-header-cell>\n\n      <mat-cell *matCellDef=\"let row\">\n        <button mat-icon-button color=\"primary\" (click)=\"customerDetail(row.customerID)\">\n          <mat-icon aria-label=\"Show\">account_circle</mat-icon>\n        </button>\n\n        <button mat-icon-button color=\"accent\" (click)=\"startEdit(row)\">\n          <mat-icon aria-label=\"Edit\">edit</mat-icon>\n        </button>\n\n        <button mat-icon-button color=\"warn\" (click)=\"deleteItem(row)\">\n          <mat-icon aria-label=\"Delete\">delete</mat-icon>\n        </button>\n      </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n\n\n  <div class=\"no-results\" [style.display]=\"dataSource.renderedData.length == 0 ? '' : 'none'\">\n    No results\n  </div>\n\n  <mat-paginator #paginator\n                 [length]=\"dataSource.filteredData.length\"\n                 [pageIndex]=\"0\"\n                 [pageSize]=\"10\"\n                 [pageSizeOptions]=\"[5, 10, 25, 100]\">\n  </mat-paginator>\n</div>"

/***/ }),

/***/ "./src/app/components/customers/customers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomersComponent; });
/* unused harmony export ExampleDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_customers_service__ = __webpack_require__("./src/app/services/customers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__ = __webpack_require__("./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dialogs_add_add_dialog_component__ = __webpack_require__("./src/app/dialogs/add/add.dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dialogs_edit_edit_dialog_component__ = __webpack_require__("./src/app/dialogs/edit/edit.dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dialogs_delete_delete_dialog_component__ = __webpack_require__("./src/app/dialogs/delete/delete.dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var CustomersComponent = /** @class */ (function () {
    function CustomersComponent(router, httpClient, customersService, dialog) {
        this.router = router;
        this.httpClient = httpClient;
        this.customersService = customersService;
        this.dialog = dialog;
        this.displayedColumns = ['customerID', 'first', 'last', 'birthday', 'gender', 'lastContact', 'actions'];
    }
    CustomersComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    CustomersComponent.prototype.refresh = function () {
        this.loadData();
    };
    CustomersComponent.prototype.customerDetail = function (customerID) {
        this.router.navigate(['/customers/' + customerID]);
    };
    CustomersComponent.prototype.addNew = function () {
        var _this = this;
        var customer = {
            name: {
                first: null,
                last: null
            }
        };
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_12__dialogs_add_add_dialog_component__["a" /* AddDialogComponent */], {
            data: customer
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 1) {
                _this.refresh();
            }
        });
    };
    CustomersComponent.prototype.startEdit = function (customer) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_13__dialogs_edit_edit_dialog_component__["a" /* EditDialogComponent */], {
            data: customer
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 1) {
                // When using an edit things are little different, firstly we find record inside DataService by id
                var foundIndex = _this.exampleDatabase.dataChange.value.findIndex(function (x) { return x.customerID === customer.customerID; });
                // Then you update that record using data from dialogData (values you enetered)
                _this.exampleDatabase.dataChange.value[foundIndex] = _this.customersService.getDialogData();
                // And lastly refresh table
                _this.refreshTable();
            }
        });
    };
    CustomersComponent.prototype.deleteItem = function (customer) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_14__dialogs_delete_delete_dialog_component__["a" /* DeleteDialogComponent */], {
            data: customer
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 1) {
                var foundIndex = _this.exampleDatabase.dataChange.value.findIndex(function (x) { return x.customerID === customer.customerID; });
                // for delete we use splice in order to remove single object from DataService
                _this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
                _this.refreshTable();
            }
        });
    };
    // If you don't need a filter or a pagination this can be simplified, you just use code from else block
    CustomersComponent.prototype.refreshTable = function () {
        // if there's a paginator active we're using it for refresh
        if (this.dataSource._paginator.hasNextPage()) {
            this.dataSource._paginator.nextPage();
            this.dataSource._paginator.previousPage();
            // in case we're on last page this if will tick
        }
        else if (this.dataSource._paginator.hasPreviousPage()) {
            this.dataSource._paginator.previousPage();
            this.dataSource._paginator.nextPage();
            // in all other cases including active filter we do it like this
        }
        else {
            this.dataSource.filter = '';
            this.dataSource.filter = this.filter.nativeElement.value;
        }
    };
    CustomersComponent.prototype.loadData = function () {
        var _this = this;
        this.exampleDatabase = new __WEBPACK_IMPORTED_MODULE_1__services_customers_service__["a" /* CustomersService */](this.httpClient, null);
        this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
        __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].fromEvent(this.filter.nativeElement, 'keyup')
            .debounceTime(150)
            .distinctUntilChanged()
            .subscribe(function () {
            if (!_this.dataSource) {
                return;
            }
            _this.dataSource.filter = _this.filter.nativeElement.value;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatPaginator */])
    ], CustomersComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__angular_material__["n" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__angular_material__["n" /* MatSort */])
    ], CustomersComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('filter'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CustomersComponent.prototype, "filter", void 0);
    CustomersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-customers',
            template: __webpack_require__("./src/app/components/customers/customers.component.html"),
            styles: [__webpack_require__("./src/app/components/customers/customers.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_15__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__services_customers_service__["a" /* CustomersService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatDialog */]])
    ], CustomersComponent);
    return CustomersComponent;
}());

var ExampleDataSource = /** @class */ (function (_super) {
    __extends(ExampleDataSource, _super);
    function ExampleDataSource(_exampleDatabase, _paginator, _sort) {
        var _this = _super.call(this) || this;
        _this._exampleDatabase = _exampleDatabase;
        _this._paginator = _paginator;
        _this._sort = _sort;
        _this._filterChange = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        _this.filteredData = [];
        _this.renderedData = [];
        // Reset to the first page when the user changes the filter.
        _this._filterChange.subscribe(function () { return (_this._paginator.pageIndex = 0); });
        return _this;
    }
    Object.defineProperty(ExampleDataSource.prototype, "filter", {
        get: function () {
            return this._filterChange.value;
        },
        set: function (filter) {
            this._filterChange.next(filter);
        },
        enumerable: true,
        configurable: true
    });
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ExampleDataSource.prototype.connect = function () {
        var _this = this;
        // Listen for any changes in the base data, sorting, filtering, or pagination
        var displayDataChanges = [
            this._exampleDatabase.dataChange,
            this._sort.sortChange,
            this._filterChange,
            this._paginator.page
        ];
        this._exampleDatabase.listCustomers();
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].merge.apply(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"], displayDataChanges).map(function () {
            // Filter data
            _this.filteredData = _this._exampleDatabase.data.slice().filter(function (customer) {
                var searchStr = (customer.customerID +
                    customer.name.first +
                    customer.name.last +
                    customer.gender).toLowerCase();
                return searchStr.indexOf(_this.filter.toLowerCase()) !== -1;
            });
            // Sort filtered data
            var sortedData = _this.sortData(_this.filteredData.slice());
            // Grab the page's slice of the filtered sorted data.
            var startIndex = _this._paginator.pageIndex * _this._paginator.pageSize;
            _this.renderedData = sortedData.splice(startIndex, _this._paginator.pageSize);
            return _this.renderedData;
        });
    };
    ExampleDataSource.prototype.disconnect = function () { };
    /** Returns a sorted copy of the database data. */
    ExampleDataSource.prototype.sortData = function (data) {
        var _this = this;
        if (!this._sort.active || this._sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var propertyA = '';
            var propertyB = '';
            switch (_this._sort.active) {
                case 'customerID':
                    _a = [a.customerID, b.customerID], propertyA = _a[0], propertyB = _a[1];
                    break;
                case 'first':
                    _b = [a.name.first, b.name.first], propertyA = _b[0], propertyB = _b[1];
                    break;
                case 'last':
                    _c = [a.name.last, b.name.last], propertyA = _c[0], propertyB = _c[1];
                    break;
                case 'birthday':
                    _d = [a.birthday, b.birthday], propertyA = _d[0], propertyB = _d[1];
                    break;
                case 'gender':
                    _e = [a.gender, b.gender], propertyA = _e[0], propertyB = _e[1];
                    break;
                case 'lastContact':
                    _f = [a.lastContact, b.lastContact], propertyA = _f[0], propertyB = _f[1];
                    break;
            }
            var valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            var valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return (valueA < valueB ? -1 : 1) * (_this._sort.direction === 'asc' ? 1 : -1);
            var _a, _b, _c, _d, _e, _f;
        });
    };
    return ExampleDataSource;
}(__WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__["a" /* DataSource */]));



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>Webtrekk Authentication and Customers CRUD App</h1>\n  <p class=\"lead\">Welcome to our Webtrekk authentication and customers CRUD application built from scratch</p>\n  <div>\n    <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a> <a class=\"btn btn-default\" [routerLink]=\"['/login']\">Login</a>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-3\">\n    <h3>Express Backend</h3>\n    <p>A rock solid Node.js/Express server using Mongoose to organize models and query the database</p>\n  </div>\n  <div class=\"col-md-3\">\n    <h3>Angular-CLI</h3>\n    <p>Angular-CLI to generate components, services and more. Local dev server and easy compilation</p>\n  </div>\n  <div class=\"col-md-3\">\n    <h3>JWT Tokens</h3>\n    <p>Full featured authentication using JSON web tokens. Login and store user data</p>\n  </div>\n  <div class=\"col-md-3\">\n      <h3>Angluar Material</h3>\n      <p>Customers CRUD operation table made from Angluar Material Design table component.</p>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                _this.router.navigate(['/customers']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-expand-md navbar-dark bg-dark\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/']\">Webtrekk</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n      <ul class=\"navbar-nav mr-auto navbar-left\">\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/']\">Home</a></li>\n      </ul>\n      <ul class=\"navbar-nav navbar-right\">\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/customers']\">Customers</a></li>\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile</a></li>\n\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a></li>\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a></li>\n        <li *ngIf=\"authService.loggedIn()\"><a class=\"nav-link\" (click)=\"onLogoutClick()\">Logut</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () { };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("./src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can log in', {
                    cssClass: 'alert-success',
                    timeout: 3000
                });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/add/add.dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_customers_service__ = __webpack_require__("./src/app/services/customers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_customer__ = __webpack_require__("./src/app/models/customer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var AddDialogComponent = /** @class */ (function () {
    function AddDialogComponent(dialogRef, data, dataService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dataService = dataService;
        this.formControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required
            // Validators.email,
        ]);
    }
    AddDialogComponent.prototype.getErrorMessage = function () {
        return this.formControl.hasError('required')
            ? 'Required field'
            : this.formControl.hasError('email') ? 'Not a valid email' : '';
    };
    AddDialogComponent.prototype.submit = function () {
        // emppty stuff
    };
    AddDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddDialogComponent.prototype.confirmAdd = function () {
        this.dataService.addCustomer(this.data);
    };
    AddDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-add.dialog',
            template: __webpack_require__("./src/app/dialogs/add/add.dialog.html"),
            styles: [__webpack_require__("./src/app/dialogs/add/add.dialog.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_material__["f" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_4__models_customer__["a" /* Customer */],
            __WEBPACK_IMPORTED_MODULE_2__services_customers_service__["a" /* CustomersService */]])
    ], AddDialogComponent);
    return AddDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/add/add.dialog.css":
/***/ (function(module, exports) {

module.exports = ".container {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: column;\n\t        flex-direction: column;\n\tmin-width: 350px;\n}\n\n.form {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tpadding-top: 6px;\n}\n\n.mat-form-field {\n\tfont-size: 16px;\n\t-webkit-box-flex: 1;\n\t    -ms-flex-positive: 1;\n\t        flex-grow: 1;\n}\n\n.mat-dialog-actions:last-child {\n\tmargin-bottom: 0;\n}\n"

/***/ }),

/***/ "./src/app/dialogs/add/add.dialog.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3 mat-dialog-title>Add new Customer</h3>\n\n  <form class=\"mat-dialog-content\" (ngSubmit)=\"submit\" #formControl=\"ngForm\">\n    \n    <div class=\"form\" color=\"accent\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"First Name\" [(ngModel)]=\"data.name.first\" name=\"first\" required>\n        <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\n      </mat-form-field>\n    </div>\n\n    <div class=\"form\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Last Name\" [(ngModel)]=\"data.name.last\" name=\"last\" required>\n        <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\n      </mat-form-field>\n    </div>\n\n    <div class=\"form\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput [matDatepicker]=\"birthdayDatepicker\" placeholder=\"Birthday\" [(ngModel)]=\"data.birthday\" name=\"birthday\">\n        <mat-datepicker-toggle matSuffix [for]=\"birthdayDatepicker\"></mat-datepicker-toggle>\n        <mat-datepicker #birthdayDatepicker></mat-datepicker>\n      </mat-form-field>\n    </div>\n    \n    <div class=\"form\">\n      <mat-form-field class=\"example-full-width\" >\n        <mat-select placeholder=\"Gender\" [(ngModel)]=\"data.gender\" name=\"gender\" disableRipple >\n          <mat-option value=\"m\">Man</mat-option>\n          <mat-option value=\"w\">Woman</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n\n    <div class=\"form\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput [matDatepicker]=\"lastContactDatepicker\" placeholder=\"Last Contact\" [(ngModel)]=\"data.lastContact\" name=\"lastContact\">\n        <mat-datepicker-toggle matSuffix [for]=\"lastContactDatepicker\"></mat-datepicker-toggle>\n        <mat-datepicker #lastContactDatepicker></mat-datepicker>\n      </mat-form-field>\n    </div>\n\n    <div mat-dialog-actions>\n      <button mat-raised-button color=\"primary\" [type]=\"submit\" [disabled]=\"!formControl.valid\" [mat-dialog-close]=\"1\" (click)=\"confirmAdd()\">Save</button>\n      <button mat-raised-button (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/dialogs/delete/delete.dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_customers_service__ = __webpack_require__("./src/app/services/customers.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var DeleteDialogComponent = /** @class */ (function () {
    function DeleteDialogComponent(dialogRef, data, dataService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dataService = dataService;
    }
    DeleteDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DeleteDialogComponent.prototype.confirmDelete = function () {
        this.dataService.deleteCustomer(this.data.customerID);
    };
    DeleteDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-delete.dialog',
            template: __webpack_require__("./src/app/dialogs/delete/delete.dialog.html"),
            styles: [__webpack_require__("./src/app/dialogs/delete/delete.dialog.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_material__["f" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__services_customers_service__["a" /* CustomersService */]])
    ], DeleteDialogComponent);
    return DeleteDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/delete/delete.dialog.css":
/***/ (function(module, exports) {

module.exports = ".container {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: column;\n\t        flex-direction: column;\n\tmin-width: 250px;\n}\n\n.container > * {\n\twidth: 100%;\n}\n\n.mat-dialog-actions:last-child {\n\tmargin-bottom: 0;\n}\n"

/***/ }),

/***/ "./src/app/dialogs/delete/delete.dialog.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3 mat-dialog-title>Are you sure?</h3>\n  <div mat-dialog-content>\n    <b>CustomerID:</b> {{data.customerID}}\n    <p></p>\n    <b>First Name:</b> {{data.name.first}}\n    <p></p>\n    <b>Last Name:</b> {{data.name.last}}\n    <p></p>\n    <b>Birthday:</b> {{data.birthday | date: 'MM/dd/yyyy'}}\n    <p></p>\n    <b>Gender:</b> {{data.gender}}\n    <p></p>\n    <b>Last Contact:</b> {{data.lastContact | date: 'MM/dd/yyyy'}}\n    <p></p>\n  </div>\n\n  <div mat-dialog-actions>\n    <button mat-raised-button [mat-dialog-close]=\"1\" color=\"warn\" (click)=\"confirmDelete()\">Delete</button>\n    <button mat-raised-button (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dialogs/edit/edit.dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_customers_service__ = __webpack_require__("./src/app/services/customers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var EditDialogComponent = /** @class */ (function () {
    function EditDialogComponent(dialogRef, data, dataService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dataService = dataService;
        this.formControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required
            // Validators.email,
        ]);
    }
    EditDialogComponent.prototype.getErrorMessage = function () {
        return this.formControl.hasError('required')
            ? 'Required field'
            : this.formControl.hasError('email') ? 'Not a valid email' : '';
    };
    EditDialogComponent.prototype.submit = function () {
        // emppty stuff
    };
    EditDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditDialogComponent.prototype.confirmEdit = function () {
        this.dataService.updateCustomer(this.data);
    };
    EditDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-baza.dialog',
            template: __webpack_require__("./src/app/dialogs/edit/edit.dialog.html"),
            styles: [__webpack_require__("./src/app/dialogs/edit/edit.dialog.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_material__["f" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__services_customers_service__["a" /* CustomersService */]])
    ], EditDialogComponent);
    return EditDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/edit/edit.dialog.css":
/***/ (function(module, exports) {

module.exports = ".container {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: column;\n\t        flex-direction: column;\n\tmin-width: 350px;\n}\n\n.form {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tpadding-top: 6px;\n}\n\n.mat-form-field {\n\tfont-size: 16px;\n\t-webkit-box-flex: 1;\n\t    -ms-flex-positive: 1;\n\t        flex-grow: 1;\n}\n\n.mat-dialog-actions:last-child {\n\tmargin-bottom: 0;\n}\n"

/***/ }),

/***/ "./src/app/dialogs/edit/edit.dialog.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3 mat-dialog-title>CustomerID: {{data.customerID}}</h3>\n\n  <form class=\"mat-dialog-content\" (ngSubmit)=\"submit\" #formControl=\"ngForm\">\n\n    <div class=\"form\" color=\"accent\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"First Name\" [(ngModel)]=\"data.name.first\" name=\"first\" required>\n        <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\n      </mat-form-field>\n    </div>\n\n    <div class=\"form\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Last Name\" [(ngModel)]=\"data.name.last\" name=\"last\" required>\n        <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\n      </mat-form-field>\n    </div>\n\n    <div class=\"form\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput [matDatepicker]=\"birthdayDatepicker\" placeholder=\"Birthday\" [(ngModel)]=\"data.birthday\" name=\"birthday\">\n        <mat-datepicker-toggle matSuffix [for]=\"birthdayDatepicker\"></mat-datepicker-toggle>\n        <mat-datepicker #birthdayDatepicker></mat-datepicker>\n      </mat-form-field>\n    </div>\n    \n    <div class=\"form\">\n      <mat-form-field class=\"example-full-width\" >\n        <mat-select placeholder=\"Gender\" [(ngModel)]=\"data.gender\" name=\"gender\" disableRipple >\n          <mat-option value=\"m\">Man</mat-option>\n          <mat-option value=\"w\">Woman</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n\n    <div class=\"form\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput [matDatepicker]=\"lastContactDatepicker\" placeholder=\"Last Contact\" [(ngModel)]=\"data.lastContact\" name=\"lastContact\">\n        <mat-datepicker-toggle matSuffix [for]=\"lastContactDatepicker\"></mat-datepicker-toggle>\n        <mat-datepicker #lastContactDatepicker></mat-datepicker>\n      </mat-form-field>\n    </div>\n\n    <div mat-dialog-actions>\n      <button mat-raised-button color=\"primary\" [type]=\"submit\" [disabled]=\"!formControl.valid\" [mat-dialog-close]=\"1\" (click)=\"confirmEdit()\">Save</button>\n      <button mat-raised-button (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/models/customer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Customer; });
var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.API_URL = 'users/';
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.API_URL + 'register', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.API_URL + 'login', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.API_URL + 'profile', { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/customer-detail.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerDetailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerDetailService = /** @class */ (function () {
    function CustomerDetailService(http) {
        this.http = http;
    }
    CustomerDetailService.prototype.getCustomer = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('customers/' + id, { headers: headers }).map(function (res) { return res.json(); });
    };
    CustomerDetailService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], CustomerDetailService);
    return CustomerDetailService;
}());



/***/ }),

/***/ "./src/app/services/customers.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomersService = /** @class */ (function () {
    function CustomersService(httpClient, flashMessage) {
        this.httpClient = httpClient;
        this.flashMessage = flashMessage;
        this.API_URL = 'customers/';
        this.dataChange = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
    }
    Object.defineProperty(CustomersService.prototype, "data", {
        get: function () {
            return this.dataChange.value;
        },
        enumerable: true,
        configurable: true
    });
    CustomersService.prototype.getDialogData = function () {
        return this.dialogData;
    };
    CustomersService.prototype.listCustomers = function () {
        var _this = this;
        this.httpClient.get(this.API_URL).subscribe(function (data) {
            _this.dataChange.next(data);
        }, function (err) {
            console.log(err.name + ' ' + err.message);
        });
    };
    CustomersService.prototype.addCustomer = function (customer) {
        var _this = this;
        this.httpClient.post(this.API_URL + 'add', customer).subscribe(function (data) {
            _this.dialogData = customer;
            _this.flashMessage.show('Successfully added', {
                cssClass: 'alert-success',
                timeout: 3000
            });
        }, function (err) {
            _this.flashMessage.show('Error occurred', {
                cssClass: 'alert-danger',
                timeout: 8000
            });
            console.log(err.name + ' ' + err.message);
        });
    };
    CustomersService.prototype.updateCustomer = function (customer) {
        var _this = this;
        this.httpClient.post(this.API_URL + 'update', customer).subscribe(function (data) {
            _this.dialogData = customer;
            _this.flashMessage.show('Successfully updated', {
                cssClass: 'alert-success',
                timeout: 3000
            });
        }, function (err) {
            _this.flashMessage.show('Error occurred', {
                cssClass: 'alert-danger',
                timeout: 8000
            });
            console.log(err.name + ' ' + err.message);
        });
    };
    CustomersService.prototype.deleteCustomer = function (customerID) {
        var _this = this;
        this.httpClient.delete(this.API_URL + 'delete/' + customerID).subscribe(function (data) {
            _this.flashMessage.show('Successfully deleted', {
                cssClass: 'alert-success',
                timeout: 3000
            });
        }, function (err) {
            _this.flashMessage.show('Error occurred', {
                cssClass: 'alert-danger',
                timeout: 3000
            });
            console.log(err.name + ' ' + err.message);
        });
    };
    CustomersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], CustomersService);
    return CustomersService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined ||
            user.email == undefined ||
            user.username == undefined ||
            user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map