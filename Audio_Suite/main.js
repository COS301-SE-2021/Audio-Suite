(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/fh3":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\n  class=\"navbar navbar-expand-lg fixed-top navbar-transparent\"\n  color-on-scroll=\"100\"\n  id=\"navbar-top\"\n>\n  <div class=\"container\">\n    <div class=\"navbar-translate\">\n      <a\n        class=\"navbar-brand\"\n        [routerLink]=\"['/home']\"\n        placement=\"bottom\"\n        tooltip=\"Audio Suite by Project Pegasus\"\n      >\n        <span>Audio</span> Suite\n      </a>\n      <button\n        aria-controls=\"navigation-index\"\n        aria-label=\"Toggle navigation\"\n        class=\"navbar-toggler navbar-toggler\"\n        [attr.aria-expanded]=\"!isCollapsed\"\n        (click)=\"isCollapsed = !isCollapsed\"\n        id=\"navigation\"\n        type=\"button\"\n      >\n        <span class=\"navbar-toggler-bar bar1\"> </span>\n        <span class=\"navbar-toggler-bar bar2\"> </span>\n        <span class=\"navbar-toggler-bar bar3\"> </span>\n      </button>\n    </div>\n    <div\n      class=\"navbar-collapse justify-content-end\"\n      [collapse]=\"isCollapsed\"\n      id=\"navigation\"\n    >\n      <div class=\"navbar-collapse-header\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\"><a>Audio Suite</a></div>\n          <div class=\"col-6 collapse-close text-right\">\n            <button\n              aria-controls=\"navigation-index\"\n              aria-label=\"Toggle navigation\"\n              class=\"navbar-toggler\"\n              [attr.aria-expanded]=\"!isCollapsed\"\n              (click)=\"isCollapsed = !isCollapsed\"\n              id=\"navigation\"\n              type=\"button\"\n            >\n              <i class=\"tim-icons icon-simple-remove\"> </i>\n            </button>\n          </div>\n        </div>\n      </div>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"#\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Twitter\"\n          >\n            <i class=\"fab fa-twitter\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Twitter</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"#\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Like us on Facebook\"\n          >\n            <i class=\"fab fa-facebook-square\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Facebook</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"#\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Instagram\"\n          >\n            <i class=\"fab fa-instagram\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Instagram</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"wrapper\">\n  <div class=\"page-header\">\n    <div class=\"page-header-image\"></div>\n    <div class=\"content\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-5 col-md-6 offset-lg-0 offset-md-3\">\n            <div class=\"square square-7\" id=\"square7\"></div>\n            <div class=\"square square-8\" id=\"square8\"></div>\n            <div class=\"card card-register\">\n              <div class=\"card-header\">\n                <h4 class=\"card-title\" style=\"padding-left: 15px\">Register</h4>\n              </div>\n              <div id=\"alertPosition\">\n            \n              <div *ngIf=\"sendAlert\">\n                <alert class=\"alert-with-icon\" [type]=\"'primary alert-with-icon'\">\n                    <span class=\" tim-icons icon-trophy\" data-notify=\"icon\">\n                    </span>\n                    <span>\n                      <b>\n                        Error -\n                      </b>\n                      {{ alertMsg }}\n                    </span>\n                </alert>\n              </div>\n              </div>\n              <div class=\"card-body\">\n                <form class=\"form\">\n                  <div\n                    class=\"input-group\"\n                    [ngClass]=\"{ 'input-group-focus': focus1 === true }\"\n                  >\n                    <div class=\"input-group-prepend\">\n                      <div class=\"input-group-text\">\n                        <i class=\"tim-icons icon-single-02\"> </i>\n                      </div>\n                    </div>\n                    <input\n                      class=\"form-control\"\n                      placeholder=\"First Name\"\n                      name= \"firstName\"\n                      [(ngModel)]=\"firstName\"\n                      type=\"text\"\n                      (focus)=\"focus1 = true\"\n                      (blur)=\"focus1 = false\"\n                    />\n                  </div>\n\n                  <div\n                    class=\"input-group\"\n                    [ngClass]=\"{ 'input-group-focus': focus2 === true }\"\n                  >\n                    <div class=\"input-group-prepend\">\n                      <div class=\"input-group-text\">\n                        <i class=\"tim-icons icon-single-02\"> </i>\n                      </div>\n                    </div>\n                    <input\n                      class=\"form-control\"\n                      placeholder=\"Last Name\"\n                      name= \"lastName\"\n                      [(ngModel)]=\"lastName\"\n                      type=\"text\"\n                      (focus)=\"focus2 = true\"\n                      (blur)=\"focus2 = false\"\n                    />\n                  </div>\n\n                  <div\n                    class=\"input-group\"\n                    [ngClass]=\"{ 'input-group-focus': focus3 === true }\"\n                  >\n                    <div class=\"input-group-prepend\">\n                      <div class=\"input-group-text\">\n                        <i class=\"tim-icons icon-single-02\"> </i>\n                      </div>\n                    </div>\n                    <input\n                      class=\"form-control\"\n                      placeholder=\"Username\"\n                      name= \"username\"\n                      [(ngModel)]=\"username\"\n                      type=\"text\"\n                      (focus)=\"focus3 = true\"\n                      (blur)=\"focus3 = false\"\n                    />\n                  </div>\n\n                  <div\n                    class=\"input-group\"\n                    [ngClass]=\"{ 'input-group-focus': focus4 === true }\"\n                  >\n                    <div class=\"input-group-prepend\">\n                      <div class=\"input-group-text\">\n                        <i class=\"tim-icons icon-email-85\"> </i>\n                      </div>\n                    </div>\n                    <input\n                      class=\"form-control\"\n                      placeholder=\"Email\"\n                      name= \"email\"\n                      [(ngModel)]=\"email\"\n                      type=\"email\"\n                      (focus)=\"focus4 = true\"\n                      (blur)=\"focus4 = false\"\n                    />\n                  </div>\n                  <div\n                    class=\"input-group\"\n                    [ngClass]=\"{ 'input-group-focus': focus5 === true }\"\n                  >\n                    <div class=\"input-group-prepend\">\n                      <div class=\"input-group-text\">\n                        <i class=\"tim-icons icon-lock-circle\"> </i>\n                      </div>\n                    </div>\n                    <input\n                      class=\"form-control\"\n                      placeholder=\"Password\"\n                      name= \"password\"\n                      [(ngModel)]=\"password\"\n                      type=\"password\"\n                      (focus)=\"focus5 = true\"\n                      (blur)=\"focus5 = false\"\n                    />\n                  </div>\n                  <!-- <div class=\"form-check text-left\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" />\n\n                      <span class=\"form-check-sign\"> </span> I agree to the\n                      <a href=\"javascript:void(0)\"> terms and conditions </a> .\n                    </label>\n                  </div> -->\n                </form>\n              </div>\n              <div class=\"card-footer\">\n                <button \n                    data-target=\"#formModal\"\n                    (click)=\"registerNewUser();\"\n                    class=\"btn btn-success btn-round btn-lg\"\n                >\n                    Register\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"register-bg\"></div>\n        <div class=\"square square-1\" id=\"square1\"></div>\n        <div class=\"square square-2\" id=\"square2\"></div>\n        <div class=\"square square-3\" id=\"square3\"></div>\n        <div class=\"square square-4\" id=\"square4\"></div>\n        <div class=\"square square-5\" id=\"square5\"></div>\n        <div class=\"square square-6\" id=\"square6\"></div>\n    </div>\n    \n    <div *ngIf=\"showModal ? formModal.show() : formModal.hide()\" ></div>\n    <div \n        aria-hidden=\"true\"\n        aria-labelledby=\"myModalLabel\"\n        bsModal\n        class=\"modal fade modal-black\"\n        #formModal=\"bs-modal\"\n        id=\"formModal\"\n        role=\"dialog\"\n        tabindex=\"-1\"\n        >\n        <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header justify-content-center\">\n            <button\n                aria-hidden=\"true\"\n                class=\"close\"\n                data-dismiss=\"modal\"\n                (click)=\"hideFormModal()\"\n                type=\"button\"\n            >\n                <i class=\"tim-icons icon-simple-remove text-white\"> </i>\n            </button>\n            <div class=\"text-muted text-center ml-auto mr-auto\">\n                <h3 class=\"mb-0\">Enter You OTP:</h3>\n            </div>\n            </div>\n            <div class=\"modal-body\">\n            <form role=\"form\">\n                <div *ngIf=\"otpAlert\">\n                    <alert class=\"alert-with-icon\" [type]=\"'primary alert-with-icon'\">\n                        <span class=\" tim-icons icon-trophy\" data-notify=\"icon\">\n                        </span>\n                        <span>\n                          <b>\n                            Error -\n                          </b>\n                          {{ otpMessage }}\n                        </span>\n                    </alert>\n                  </div>\n                <div class=\"form-group mb-3\">\n                    <div class=\"input-group input-group-alternative\" [ngClass]=\"{'input-group-focus':focus6===true}\">\n                        <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">\n                            <i class=\"tim-icons icon-email-85\"> </i>\n                        </span>\n                        </div>\n                        <input\n                            class=\"form-control\"\n                            placeholder=\"OTP\"\n                            name=\"userOTPInput\"\n                            [(ngModel)]=\"userOTPInput\"\n                            type=\"text\"\n                            (focus)=\"focus6=true\" \n                            (blur)=\"focus6=false\"\n                        />\n                    </div>\n                </div>\n                <div class=\"text-center\">\n                <button \n                    class=\"btn btn-success my-4\" \n                    type=\"button\"\n                    (click)=\"validateOTP()\"\n                >\n                    Submit\n                </button>\n                </div>\n            </form>\n            </div>\n        </div>\n        </div>\n    </div>\n    </div>\n  </div>\n</div>\n\n");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/chris-18/VarsityWork/Capstone/Audio-Suite/frontend-Angular/src/main.ts */"zUnb");


/***/ }),

/***/ "00il":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/examples/profilepage/profilepage.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\n  class=\"navbar navbar-expand-lg fixed-top navbar-transparent\"\n  color-on-scroll=\"100\"\n  id=\"navbar-top\"\n>\n  <div class=\"container\">\n    <div class=\"navbar-translate\">\n      <a\n        class=\"navbar-brand\"\n        [routerLink]=\"['/home']\"\n        placement=\"bottom\"\n        tooltip=\"Designed and Coded by Creative Tim\"\n      >\n        <span> BLK• </span> Design System Angular\n      </a>\n      <button\n        aria-controls=\"navigation-index\"\n        aria-label=\"Toggle navigation\"\n        class=\"navbar-toggler navbar-toggler\"\n        [attr.aria-expanded]=\"!isCollapsed\"\n        (click)=\"isCollapsed = !isCollapsed\"\n        id=\"navigation\"\n        type=\"button\"\n      >\n        <span class=\"navbar-toggler-bar bar1\"> </span>\n        <span class=\"navbar-toggler-bar bar2\"> </span>\n        <span class=\"navbar-toggler-bar bar3\"> </span>\n      </button>\n    </div>\n    <div\n      class=\"navbar-collapse justify-content-end\"\n      [collapse]=\"isCollapsed\"\n      id=\"navigation\"\n    >\n      <div class=\"navbar-collapse-header\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\"><a> BLK• </a></div>\n          <div class=\"col-6 collapse-close text-right\">\n            <button\n              aria-controls=\"navigation-index\"\n              aria-label=\"Toggle navigation\"\n              class=\"navbar-toggler\"\n              [attr.aria-expanded]=\"!isCollapsed\"\n              (click)=\"isCollapsed = !isCollapsed\"\n              id=\"navigation\"\n              type=\"button\"\n            >\n              <i class=\"tim-icons icon-simple-remove\"> </i>\n            </button>\n          </div>\n        </div>\n      </div>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://twitter.com/CreativeTim\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Twitter\"\n          >\n            <i class=\"fab fa-twitter\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Twitter</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://www.facebook.com/CreativeTim\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Like us on Facebook\"\n          >\n            <i class=\"fab fa-facebook-square\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Facebook</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://www.instagram.com/CreativeTimOfficial\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Instagram\"\n          >\n            <i class=\"fab fa-instagram\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Instagram</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/home']\"> Back to Kit </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            href=\"https://github.com/creativetimofficial/blk-design-system-angular/issues\"\n          >\n            Have an issue?\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"wrapper\">\n  <div class=\"page-header\">\n    <img class=\"dots\" src=\"assets/img/dots.png\" />\n\n    <img class=\"path\" src=\"assets/img/path4.png\" />\n\n    <div class=\"container align-items-center\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6\">\n          <h1 class=\"profile-title text-left\">Mike Scheinder</h1>\n          <h5 class=\"text-on-back\">01</h5>\n          <p class=\"profile-description\">\n            Offices parties lasting outward nothing age few resolve. Impression\n            to discretion understood to we interested he excellence. Him\n            remarkably use projection collecting. Going about eat forty world\n            has round miles.\n          </p>\n          <div class=\"btn-wrapper profile pt-3\">\n            <a\n              class=\"btn btn-icon btn-twitter btn-round mr-1\"\n              href=\"https://twitter.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-twitter\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-facebook btn-round mr-1\"\n              href=\"https://www.facebook.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-facebook-square\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-dribbble btn-round\"\n              href=\"https://dribbble.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-dribbble\"> </i>\n            </a>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-md-6 ml-auto mr-auto\">\n          <div class=\"card card-coin card-plain\">\n            <div class=\"card-header\">\n              <img\n                class=\"img-center img-fluid rounded-circle\"\n                src=\"assets/img/mike.jpg\"\n              />\n\n              <h4 class=\"title\">Transactions</h4>\n            </div>\n            <div class=\"card-body\">\n              <tabset\n                class=\"nav-tabs-danger justify-content-center tab-subcategories\"\n              >\n                <tab heading=\"Wallet\">\n                  <div class=\"table-responsive\">\n                    <table class=\"table tablesorter\" id=\"plain-table\">\n                      <thead class=\"text-danger\">\n                        <tr>\n                          <th class=\"header\">COIN</th>\n                          <th class=\"header\">AMOUNT</th>\n                          <th class=\"header\">VALUE</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          <td>BTC</td>\n                          <td>7.342</td>\n                          <td>48,870.75 USD</td>\n                        </tr>\n                        <tr>\n                          <td>ETH</td>\n                          <td>30.737</td>\n                          <td>64,53.30 USD</td>\n                        </tr>\n                        <tr>\n                          <td>XRP</td>\n                          <td>19.242</td>\n                          <td>18,354.96 USD</td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </tab>\n                <tab heading=\"Send\">\n                  <div class=\"row\">\n                    <label class=\"col-sm-3 col-form-label\"> Pay to </label>\n                    <div class=\"col-sm-9\">\n                      <div class=\"form-group\">\n                        <input\n                          class=\"form-control\"\n                          placeholder=\"e.g. 1Nasd92348hU984353hfid\"\n                          type=\"text\"\n                        />\n\n                        <span class=\"form-text\">\n                          Please enter a valid address.\n                        </span>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <label class=\"col-sm-3 col-form-label\"> Amount </label>\n                    <div class=\"col-sm-9\">\n                      <div class=\"form-group\">\n                        <input\n                          class=\"form-control\"\n                          placeholder=\"1.587\"\n                          type=\"text\"\n                        />\n                      </div>\n                    </div>\n                  </div>\n                  <button\n                    class=\"btn btn-simple btn-danger btn-icon btn-round float-right\"\n                    type=\"submit\"\n                  >\n                    <i class=\"tim-icons icon-send\"> </i>\n                  </button>\n                </tab>\n                <tab heading=\"News\">\n                  <div class=\"table-responsive\">\n                    <table class=\"table tablesorter\" id=\"plain-table\">\n                      <thead class=\"text-danger\">\n                        <tr>\n                          <th class=\"header\">Latest Crypto News</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          <td>The Daily: Nexo to Pay on Stable...</td>\n                        </tr>\n                        <tr>\n                          <td>Venezuela Begins Public of Nation...</td>\n                        </tr>\n                        <tr>\n                          <td>PR: BitCanna â Dutch Blockchain...</td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </tab>\n              </tabset>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"section\">\n    <div class=\"container\">\n      <div class=\"row justify-content-between\">\n        <div class=\"col-md-6\">\n          <div class=\"row justify-content-between align-items-center\">\n            <carousel [showIndicators]=\"true\">\n              <slide>\n                <img\n                  alt=\"First slide\"\n                  class=\"d-block\"\n                  src=\"assets/img/denys.jpg\"\n                />\n\n                <div class=\"carousel-caption d-none d-md-block\">\n                  <h5>Big City Life, United States</h5>\n                </div>\n              </slide>\n              <slide>\n                <img\n                  alt=\"Second slide\"\n                  class=\"d-block\"\n                  src=\"assets/img/fabien-bazanegue.jpg\"\n                />\n\n                <div class=\"carousel-caption d-none d-md-block\">\n                  <h5>Somewhere Beyond, United States</h5>\n                </div>\n              </slide>\n              <slide>\n                <img\n                  alt=\"Third slide\"\n                  class=\"d-block\"\n                  src=\"assets/img/mark-finn.jpg\"\n                />\n\n                <div class=\"carousel-caption d-none d-md-block\">\n                  <h5>Stocks, United States</h5>\n                </div>\n              </slide>\n            </carousel>\n          </div>\n        </div>\n        <div class=\"col-md-5\">\n          <h1 class=\"profile-title text-left\">Projects</h1>\n          <h5 class=\"text-on-back\">02</h5>\n          <p class=\"profile-description text-left\">\n            An artist of considerable range, Ryan â the name taken by\n            Melbourne-raised, Brooklyn-based Nick Murphy â writes, performs and\n            records all of his own music, giving it a warm, intimate feel with a\n            solid groove structure. An artist of considerable range.\n          </p>\n          <div class=\"btn-wrapper pt-3\">\n            <button\n              class=\"btn btn-simple btn-danger mr-1\"\n              href=\"javascript:void(0)\"\n            >\n              <i class=\"tim-icons icon-book-bookmark\"> </i> Bookmark\n            </button>\n            <button class=\"btn btn-simple btn-info\" href=\"javascript:void(0)\">\n              <i class=\"tim-icons icon-bulb-63\"> </i> Check it!\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <section class=\"section\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"card card-plain\">\n            <div class=\"card-header\">\n              <h1 class=\"profile-title text-left\">Contact</h1>\n              <h5 class=\"text-on-back\">03</h5>\n            </div>\n            <div class=\"card-body\">\n              <form>\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label> Your Name </label>\n                      <input class=\"form-control\" type=\"text\" value=\"Mike\" />\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label> Email address </label>\n                      <input\n                        class=\"form-control\"\n                        placeholder=\"mike@email.com\"\n                        type=\"email\"\n                      />\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label> Phone </label>\n                      <input\n                        class=\"form-control\"\n                        type=\"text\"\n                        value=\"001-12321345\"\n                      />\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label> Company </label>\n                      <input\n                        class=\"form-control\"\n                        type=\"text\"\n                        value=\"CreativeTim\"\n                      />\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                      <label> Message </label>\n                      <input\n                        class=\"form-control\"\n                        placeholder=\"Hello there!\"\n                        type=\"text\"\n                      />\n                    </div>\n                  </div>\n                </div>\n                <button\n                  class=\"btn btn-danger btn-round float-right\"\n                  placement=\"right\"\n                  type=\"submit\"\n                >\n                  Send text\n                </button>\n              </form>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4 ml-auto\">\n          <div class=\"info info-horizontal\">\n            <div class=\"icon icon-danger\">\n              <i class=\"tim-icons icon-square-pin\"> </i>\n            </div>\n            <div class=\"description\">\n              <h4 class=\"info-title\">Find us at the office</h4>\n              <p>\n                Bld Mihail Kogalniceanu, nr. 8, <br />\n\n                7652 Bucharest, <br />\n\n                Romania\n              </p>\n            </div>\n          </div>\n          <div class=\"info info-horizontal\">\n            <div class=\"icon icon-danger\">\n              <i class=\"tim-icons icon-mobile\"> </i>\n            </div>\n            <div class=\"description\">\n              <h4 class=\"info-title\">Give us a ring</h4>\n              <p>\n                Michael Jordan <br />\n\n                +40 762 321 762 <br />\n\n                Mon - Fri, 8:00-22:00\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <footer class=\"footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-3\"><h1 class=\"title\">BLK•</h1></div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/home']\"> Home </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/landing']\"> Landing </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/register']\"> Register </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/profile']\"> Profile </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/contact-us\">\n                Contact Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/about-us\">\n                About Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/blog\">\n                Blog\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://opensource.org/licenses/MIT\">\n                License\n              </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <h3 class=\"title\">Follow us:</h3>\n          <div class=\"btn-wrapper profile\">\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://twitter.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-twitter\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://www.facebook.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-facebook-square\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple\"\n              href=\"https://dribbble.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-dribbble\"> </i>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n</div>\n");

/***/ }),

/***/ "3OJA":
/*!**********************************************!*\
  !*** ./src/app/pages/user/user.component.ts ***!
  \**********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user.component.html */ "QMMq");
/* harmony import */ var _user_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.component.scss */ "VPZa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _katoid_angular_grid_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @katoid/angular-grid-layout */ "Gy/2");
/* harmony import */ var src_app_services_office_room_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/office-room.service */ "wh6J");
/* harmony import */ var src_app_services_text_channels_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/text-channels.service */ "tfwI");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _cardstore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../cardstore */ "f55G");
/* harmony import */ var src_app_audio_audio_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/audio/audio.component */ "ebS6");
/* harmony import */ var angular_agora_rtc__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-agora-rtc */ "A+7y");
/* harmony import */ var src_app_services_kanban_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/kanban.service */ "YfQq");
/* harmony import */ var src_app_services_time_tracking_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/time-tracking.service */ "HLp+");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var round_slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! round-slider */ "nk1J");
/* harmony import */ var round_slider__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(round_slider__WEBPACK_IMPORTED_MODULE_15__);
















var UserComponent = /** @class */ (function () {
    //#endregion
    function UserComponent(textChannelsService, officeRoomService, userService, kanbanService, timeTrackingService, router) {
        this.textChannelsService = textChannelsService;
        this.officeRoomService = officeRoomService;
        this.userService = userService;
        this.kanbanService = kanbanService;
        this.timeTrackingService = timeTrackingService;
        this.router = router;
        //#region Variables
        this.parentMessage = "message from parent";
        //Agora Audio Variables
        this.agoraConfig = {
            AppID: '023766436b244044ab85f65470dcbae2',
        };
        this.agoraService = new angular_agora_rtc__WEBPACK_IMPORTED_MODULE_11__["AngularAgoraRtcService"](this.agoraConfig);
        //Golbal Alert Variables
        this.showSuccessGlobalAlert = false;
        this.showPrimaryGlobalAlert = false;
        this.globalAlertType = "";
        this.globalAlertMsg = "";
        //Sidebar Varibales
        this.sidebarOpened = true;
        this.showOfficeList = true;
        this.showQuickSettingsList = true;
        this.showOfficeSettingsList = true;
        //Current Office Variables
        this.officeSelected = false;
        this.officeListLoaded = false;
        this.selectedOffice = '';
        this.selectedOfficeID = null;
        this.selectedOfficeInvite = '';
        this.selectedOfficeRole = '';
        this.officeList = [];
        //Current Room Variables
        this.roomSelected = false;
        this.selectedRoom = '';
        this.selectedRoomID = '';
        //Current User Details
        this.userID = '';
        this.userFirstName = '';
        this.userLastName = '';
        this.userUsername = '';
        this.userEmail = '';
        //Modal Variables
        this.sendInviteToEmail = '';
        this.sendInviteToName = '';
        this.newRoomName = '';
        this.newRoomType = '';
        this.displayFormModal = false;
        this.showInviteModal = false;
        this.showAddRoomModal = false;
        this.showVRCodeModal = false;
        this.VR_RoomCode = '';
        this.focus6 = false;
        this.focus7 = false;
        this.sendNewOfficeAlert = false;
        this.sendJoinOfficeAlert = false;
        this.sendFormModalAlert = false;
        this.newOfficeName = '';
        this.joinOfficeCode = '';
        this.newMessageInput = '';
        this.newOfficeAlertMsg = '';
        this.joinOfficeAlertMsg = '';
        this.formModalAlertMsg = '';
        //Time Tracker Variables
        this.showTimeTrackerTab = 'timeTracker';
        this.trackerStarted = false;
        this.displayBigScreenTracker = true;
        this.timeTrackerDescription = '';
        this.timeTrackerProjectSelected = false;
        this.selectedProject = '';
        this.selectedProjectID = null;
        this.timeTrackerTagSelected = false;
        this.selectedTag = '';
        this.selectedTagID = null;
        this.newProjectName = '';
        this.newTagName = '';
        this.warningCount = 0;
        this.trackingTimerInterval = null;
        this.timeTrackingUserInstances = [];
        this.timeTrackingProjects = [];
        this.timeTrackingTags = [];
        //Text Channel Variables
        this.officeTextChannelMessages = [];
        this.roomTextChannelMessages = [];
        //FloorPlan Variables
        this.cols = 12;
        this.rowHeight = 50;
        this.compactType = null;
        this.floorPlan = [];
        this.layout = [];
        this.roomUsersList = [];
        this.transitions = [
            {
                name: 'ease',
                value: 'transform 500ms ease, width 500ms ease, height 500ms ease'
            },
            {
                name: 'ease-out',
                value: 'transform 500ms ease-out, width 500ms ease-out, height 500ms ease-out'
            },
            {
                name: 'linear',
                value: 'transform 500ms linear, width 500ms linear, height 500ms linear'
            },
            {
                name: 'overflowing',
                value: 'transform 500ms cubic-bezier(.28,.49,.79,1.35), width 500ms cubic-bezier(.28,.49,.79,1.35), height 500ms cubic-bezier(.28,.49,.79,1.35)'
            },
            {
                name: 'fast',
                value: 'transform 200ms ease, width 200ms linear, height 200ms linear'
            },
            {
                name: 'slow-motion',
                value: 'transform 1000ms linear, width 1000ms linear, height 1000ms linear'
            },
            { name: 'transform-only', value: 'transform 500ms ease' }
        ];
        this.currentTransition = this.transitions[0].value;
        this.dragStartThreshold = 0;
        this.inFloorPlanEditorMode = false;
        this.disableDrag = true;
        this.disableResize = true;
        this.disableRemove = true;
        this.autoResize = true;
        this.preventCollision = false;
        this.scrollableParent = "floorPlanContent";
        this.isDragging = false;
        this.isResizing = false;
    }
    UserComponent.prototype.setListData = function () {
        var _this = this;
        this.cardStore = new _cardstore__WEBPACK_IMPORTED_MODULE_9__["CardStore"]();
        var lists = [
            {
                name: 'To Do',
                cards: []
            },
            {
                name: 'In Progress',
                cards: []
            },
            {
                name: 'Done',
                cards: []
            }
        ];
        //cards need id, description and list name.
        var jwt = sessionStorage.getItem('jwt');
        var officeID = sessionStorage.getItem('officeID');
        console.log(parseInt(officeID));
        this.kanbanService.getAllCards(jwt, parseInt(officeID)).subscribe(function (response) {
            var cards = response.Cards;
            for (var i = 0; i < cards.length; i++) {
                var cardID = cards[i].cardID;
                console.log(cardID);
                var retCard = _this.cardStore.retrieveCard(cards[i].cardID, cards[i].cardMessage, cards[i].listName);
                if (cards[i].listName == "To Do") {
                    lists[0].cards.push(cardID);
                }
                else if (cards[i].listName == "In Progress") {
                    lists[1].cards.push(cardID);
                }
                else if (cards[i].listName == "Done") {
                    lists[2].cards.push(cardID);
                }
            }
        }, function (error) {
            console.log(error);
        });
        this.lists = lists;
    };
    UserComponent.prototype.onMouseMove = function (e) {
        if (!this.officeSelected) {
            var squares1 = document.getElementById("square1");
            var squares2 = document.getElementById("square2");
            var squares3 = document.getElementById("square3");
            var squares4 = document.getElementById("square4");
            var squares5 = document.getElementById("square5");
            var squares6 = document.getElementById("square6");
            var squares7 = document.getElementById("square7");
            var squares8 = document.getElementById("square8");
            var posX = e.clientX - window.innerWidth / 2;
            var posY = e.clientY - window.innerWidth / 6;
            squares1.style.transform =
                "perspective(500px) rotateY(" +
                    posX * 0.05 +
                    "deg) rotateX(" +
                    posY * -0.05 +
                    "deg)";
            squares2.style.transform =
                "perspective(500px) rotateY(" +
                    posX * 0.05 +
                    "deg) rotateX(" +
                    posY * -0.05 +
                    "deg)";
            squares3.style.transform =
                "perspective(500px) rotateY(" +
                    posX * 0.05 +
                    "deg) rotateX(" +
                    posY * -0.05 +
                    "deg)";
            squares4.style.transform =
                "perspective(500px) rotateY(" +
                    posX * 0.05 +
                    "deg) rotateX(" +
                    posY * -0.05 +
                    "deg)";
            squares5.style.transform =
                "perspective(500px) rotateY(" +
                    posX * 0.05 +
                    "deg) rotateX(" +
                    posY * -0.05 +
                    "deg)";
            squares6.style.transform =
                "perspective(500px) rotateY(" +
                    posX * 0.05 +
                    "deg) rotateX(" +
                    posY * -0.05 +
                    "deg)";
            squares7.style.transform =
                "perspective(500px) rotateY(" +
                    posX * 0.02 +
                    "deg) rotateX(" +
                    posY * -0.02 +
                    "deg)";
            squares8.style.transform =
                "perspective(500px) rotateY(" +
                    posX * 0.02 +
                    "deg) rotateX(" +
                    posY * -0.02 +
                    "deg)";
        }
    };
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        var jwt = sessionStorage.getItem('jwt');
        this.userService.getUserDetails(jwt).subscribe(function (response) {
            _this.userID = response.id;
            _this.userFirstName = response.firstName;
            _this.userLastName = response.lastName;
            _this.userUsername = response.userName;
            _this.userEmail = response.email;
            _this.audioComponent = new src_app_audio_audio_component__WEBPACK_IMPORTED_MODULE_10__["AudioComponent"](_this.agoraService, _this.officeRoomService);
            _this.getUserOfficeList();
        }, function (error) {
            console.log(error);
            _this.router.navigate(['login']);
        });
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("user-page");
        // this.audioComponent = new AudioComponent( this.agoraService, this.officeRoomService );
        // this.getUserDetails();
        // this.getUserOfficeList();
        this.textChannelsService.listen("joinedRoomText").subscribe(function (data) {
            console.log("Joined room: ", data);
            if (data.Room == _this.selectedOffice) {
                _this.officeTextChannelMessages = [];
                data.MessageList.forEach(function (message) {
                    var newMessage = {
                        sender: message.sender,
                        room: message.room,
                        message: message.message
                    };
                    _this.officeTextChannelMessages.push(newMessage);
                });
            }
            else {
                _this.roomTextChannelMessages = [];
                data.MessageList.forEach(function (message) {
                    var newMessage = {
                        sender: message.sender,
                        room: message.room,
                        message: message.message
                    };
                    _this.roomTextChannelMessages.push(newMessage);
                });
            }
        });
        this.textChannelsService.listen("leftRoomText").subscribe(function (data) {
            console.log("Left room: ", data);
        });
        this.textChannelsService.listen("msgToClient").subscribe(function (data) {
            _this.receivedMessage(data);
        });
        this.textChannelsService.listen("updateRoomAttendance").subscribe(function (data) {
            var jwt = window.sessionStorage.getItem('jwt');
            _this.getRoomUsersByOfficeID(jwt, _this.selectedOfficeID);
        });
        window.addEventListener("resize", function () {
            if (window.innerWidth < 800) {
                document.getElementById('Sidebar').style.display = "none";
                document.getElementById('Content').style.marginLeft = "0%";
                document.getElementById('Content').style.width = "100%";
                document.getElementById('TextChannelContent').style.width = "100%";
            }
            else if (window.innerWidth < 1200) {
                document.getElementById('Sidebar').style.display = "none";
                document.getElementById('Content').style.marginLeft = "0%";
                document.getElementById('Content').style.width = "100%";
                document.getElementById('TextChannelContent').style.width = "100%";
            }
            else if (window.innerWidth < 1400) {
                _this.sidebarOpened = true;
                document.getElementById('Sidebar').style.width = "20%";
                document.getElementById('Sidebar').style.display = "block";
                document.getElementById('Content').style.marginLeft = "20%";
                document.getElementById('TextChannelContent').style.width = "80%";
            }
            else if (window.innerWidth >= 1400) {
                _this.sidebarOpened = true;
                document.getElementById('Sidebar').style.width = "15%";
                document.getElementById('Sidebar').style.display = "block";
                document.getElementById('Content').style.marginLeft = "15%";
                document.getElementById('TextChannelContent').style.width = "86%";
            }
        });
    };
    UserComponent.prototype.ngAfterViewInit = function () {
        if (window.innerWidth < 1200) {
            this.sidebarOpened = false;
            document.getElementById('Sidebar').style.display = "none";
            document.getElementById('Content').style.marginLeft = "0%";
            document.getElementById('Content').style.width = "100%";
            document.getElementById('TextChannelContent').style.width = "100%";
        }
    };
    UserComponent.prototype.accountNav = function () {
        this.router.navigate(['account']);
        return;
    };
    UserComponent.prototype.getUserOfficeList = function () {
        var _this = this;
        var jwt = sessionStorage.getItem("jwt");
        this.officeRoomService.getUserOffices(jwt).subscribe(function (response) {
            console.log(response);
            for (var i = 0; i < response.Offices.length; i++) {
                var newOffice = {
                    id: response.Offices[i].id,
                    name: response.Offices[i].name,
                    invite: response.Offices[i].invite,
                    role: response.Offices[i].role
                };
                _this.officeList.push(newOffice);
            }
            _this.officeListLoaded = true;
        }, function (error) {
            console.log(error);
        });
    };
    UserComponent.prototype.closeAlert = function () {
        console.log("click working");
        this.showSuccessGlobalAlert = false;
        this.showPrimaryGlobalAlert = false;
    };
    UserComponent.prototype.getUserDetails = function () {
        var _this = this;
        var jwt = sessionStorage.getItem('jwt');
        this.userService.getUserDetails(jwt).subscribe(function (response) {
            _this.userID = response.id;
            _this.userFirstName = response.firstName;
            _this.userLastName = response.lastName;
            _this.userUsername = response.userName;
            _this.userEmail = response.email;
        }, function (error) {
            console.log(error);
            _this.router.navigate(['login']);
        });
    };
    UserComponent.prototype.toggleSidebar = function () {
        this.sidebarOpened = !this.sidebarOpened;
        if (this.sidebarOpened) {
            document.getElementById('Sidebar').style.display = "block";
            if (window.innerWidth < 600) {
                document.getElementById('Sidebar').style.width = "100%";
            }
            else if (window.innerWidth < 800) {
                document.getElementById('Sidebar').style.width = "60%";
            }
            else if (window.innerWidth < 1200) {
                document.getElementById('Sidebar').style.width = "30%";
                document.getElementById('TextChannelContent').style.width = "86%";
            }
            else if (window.innerWidth < 1400) {
                document.getElementById('Sidebar').style.width = "20%";
                document.getElementById('Content').style.marginLeft = "20%";
                document.getElementById('TextChannelContent').style.width = "86%";
            }
            else {
                document.getElementById('Sidebar').style.width = "15%";
                document.getElementById('Content').style.marginLeft = "15%";
                document.getElementById('TextChannelContent').style.width = "86%";
            }
        }
        else {
            document.getElementById('Sidebar').style.display = "none";
            document.getElementById('Content').style.marginLeft = "0%";
            document.getElementById('Content').style.width = "100%";
            document.getElementById('TextChannelContent').style.width = "100%";
        }
    };
    UserComponent.prototype.selectOffice = function (officeID, office, officeInvite, role) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var officeId, jwt, jwt, jwt, jwt;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                officeId = sessionStorage.setItem('officeID', officeID);
                if (this.officeSelected) {
                    if (this.selectedOffice != office) {
                        this.leaveOffice();
                        this.layout = [];
                        jwt = sessionStorage.getItem('jwt');
                        this.officeRoomService.getOfficeRoomList(jwt, officeID).subscribe(function (response) {
                            console.log(response);
                            if (response.Response == "Success") {
                                var newFloorPlan_1 = [];
                                var newLayout_1 = [];
                                response.Rooms.forEach(function (room) {
                                    var newRoomLayout = {
                                        id: room.roomName,
                                        x: room.xCoordinate,
                                        y: room.yCoordinate,
                                        w: room.width,
                                        h: room.height
                                    };
                                    var newRoom = {
                                        RoomID: room.id,
                                        RoomType: room.roomType,
                                        RoomLayout: newRoomLayout
                                    };
                                    newLayout_1.push(newRoomLayout);
                                    newFloorPlan_1.push(newRoom);
                                });
                                _this.layout = newLayout_1;
                                _this.floorPlan = newFloorPlan_1;
                            }
                        }, function (error) {
                            console.log(error);
                        });
                        this.getRoomUsersByOfficeID(jwt, officeID);
                        this.selectedOffice = office;
                        this.selectedOfficeID = officeID;
                        this.selectedOfficeInvite = officeInvite;
                        this.selectedOfficeRole = role;
                        this.officeSelected = true;
                        jwt = sessionStorage.getItem('jwt');
                        this.textChannelsService.joinRoom(jwt, officeID, office, office, false);
                        this.setListData();
                        this.getOfficeProjectList();
                    }
                }
                else {
                    jwt = sessionStorage.getItem('jwt');
                    this.officeRoomService.getOfficeRoomList(jwt, officeID).subscribe(function (response) {
                        console.log(response);
                        if (response.Response == "Success") {
                            var newFloorPlan_2 = [];
                            var newLayout_2 = [];
                            response.Rooms.forEach(function (room) {
                                var newRoomLayout = {
                                    id: room.roomName,
                                    x: room.xCoordinate,
                                    y: room.yCoordinate,
                                    w: room.width,
                                    h: room.height
                                };
                                var newRoom = {
                                    RoomID: room.id,
                                    RoomType: room.roomType,
                                    RoomLayout: newRoomLayout
                                };
                                newLayout_2.push(newRoomLayout);
                                newFloorPlan_2.push(newRoom);
                            });
                            _this.layout = newLayout_2;
                            _this.floorPlan = newFloorPlan_2;
                        }
                    }, function (error) {
                        console.log(error);
                    });
                    this.getRoomUsersByOfficeID(jwt, officeID);
                    this.selectedOffice = office;
                    this.selectedOfficeID = officeID;
                    this.selectedOfficeInvite = officeInvite;
                    this.selectedOfficeRole = role;
                    this.officeSelected = true;
                    jwt = sessionStorage.getItem('jwt');
                    this.textChannelsService.joinRoom(jwt, officeID, office, office, false);
                    this.setListData();
                    this.getOfficeProjectList();
                }
                return [2 /*return*/];
            });
        });
    };
    UserComponent.prototype.showChangeOrientation = function () {
        document.getElementById('sidebar-openOrientationHeader').style.display = "none";
        document.getElementById('sidebar-closeOrientationHeader').style.display = "block";
        document.getElementById('slider').style.display = "block";
        var component = this;
        jquery__WEBPACK_IMPORTED_MODULE_14__("#slider").roundSlider({
            sliderType: "min-range",
            radius: 130,
            showTooltip: false,
            width: 25,
            //value: 100,
            handleSize: 0,
            handleShape: "square",
            circleShape: "full",
            value: 100,
            startAngle: 90,
            valueChange: function (e) {
                var color = e.isInvertedRange ? "#FF5722" : "#8BC34A";
                jquery__WEBPACK_IMPORTED_MODULE_14__("#slider").roundSlider({ "rangeColor": color, "tooltipColor": color });
                component.audioComponent.setUserOrientation(e.value);
            }
        });
    };
    UserComponent.prototype.hideChangeOrientation = function () {
        document.getElementById('sidebar-openOrientationHeader').style.display = "block";
        document.getElementById('sidebar-closeOrientationHeader').style.display = "none";
        document.getElementById('slider').style.display = "none";
    };
    UserComponent.prototype.getRoomUsersByOfficeID = function (jwt, officeID) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.officeRoomService.getRoomUsersByOfficeID(jwt, officeID).subscribe(function (response) {
                    // console.log(response)
                    _this.roomUsersList = [];
                    response.RoomUserList.forEach(function (roomUserItem) {
                        var users = [];
                        roomUserItem.RoomUsers.forEach(function (roomUser) {
                            users.push(roomUser.userName);
                        });
                        var roomUserListItem = {
                            Room: roomUserItem.Room,
                            IconID: roomUserItem.Room + "-Icon",
                            UserListID: roomUserItem.Room + "-List",
                            RoomUsers: users
                        };
                        _this.roomUsersList.push(roomUserListItem);
                    });
                    console.log(_this.roomUsersList);
                }, function (error) {
                    console.log(error);
                });
                return [2 /*return*/];
            });
        });
    };
    UserComponent.prototype.tabSetOpened = function () {
        var _this = this;
        this.scrollContainer = this.scrollFrame.nativeElement;
        this.itemElements.changes.subscribe(function (_) { return _this.scrollMessageBoardToBottom(); });
        if (this.roomSelected) {
            this.scrollRoomContainer = this.scrollRoomFrame.nativeElement;
            this.itemRoomElements.changes.subscribe(function (_) { _this.scrollRoomMessageBoardToBottom(); });
        }
    };
    UserComponent.prototype.leaveOffice = function () {
        var _this = this;
        var jwt = sessionStorage.getItem('jwt');
        this.textChannelsService.leaveRoom(jwt, this.selectedOfficeID, this.selectedOffice, this.selectedOffice);
        if (this.roomSelected) {
            this.leaveRoom();
        }
        if (this.trackerStarted) {
            this.warningCount = 0;
            this.closeAlert();
            clearInterval(this.trackingTimerInterval);
            this.trackerStarted = false;
            document.getElementById('timerSecond').innerText = "00";
            document.getElementById('timerMinute').innerText = "00";
            document.getElementById('timerHour').innerText = "00";
            var sessionStorageID = "startDateTime_" + this.selectedOffice;
            var storedStartDate = JSON.parse(window.sessionStorage.getItem(sessionStorageID));
            var startDate = new Date(storedStartDate.Year, storedStartDate.Month, storedStartDate.Day, storedStartDate.Hours, storedStartDate.Minutes, storedStartDate.Seconds, storedStartDate.MilliSeconds);
            window.sessionStorage.removeItem(sessionStorageID);
            var endDate = new Date();
            if (this.timeTrackerDescription == "") {
                var autoGeneratedDescription = this.userUsername + " - " +
                    startDate.getFullYear() + ":" +
                    startDate.getMonth() + ":" +
                    startDate.getDate() + "-" +
                    startDate.getHours() + ":" +
                    startDate.getMinutes() + ":" +
                    startDate.getSeconds();
                var jwt_1 = sessionStorage.getItem('jwt');
                this.timeTrackingService.registerNewTimeTrackingInstance(jwt_1, this.selectedOfficeID, autoGeneratedDescription, this.selectedProjectID, this.selectedTagID, startDate.getTime() + "", endDate.getTime() + "").subscribe(function (response) {
                    console.log(response);
                }, function (error) {
                    console.log(error);
                });
            }
            else {
                var jwt_2 = sessionStorage.getItem('jwt');
                this.timeTrackingService.registerNewTimeTrackingInstance(jwt_2, this.selectedOfficeID, this.timeTrackerDescription, this.selectedProjectID, this.selectedTagID, startDate.getTime() + "", endDate.getTime() + "").subscribe(function (response) {
                    console.log(response);
                    _this.timeTrackerDescription = "";
                    _this.removeSelectedProject();
                    _this.removeSelectedTag();
                }, function (error) {
                    console.log(error);
                    _this.timeTrackerDescription = "";
                    _this.removeSelectedProject();
                    _this.removeSelectedTag();
                });
            }
        }
        this.selectedOffice = '';
        this.selectedOfficeID = null;
        this.selectedOfficeInvite = '';
        this.officeSelected = false;
        this.officeTextChannelMessages = [];
        this.roomUsersList = [];
        this.audioComponent.leave();
    };
    UserComponent.prototype.selectRoom = function (id, roomType, leaveRoom) {
        var _this = this;
        // console.log("Room Type: " + roomType)
        if (roomType == "VR") {
            this.VR_RoomCode = this.selectedOffice + "_" + id;
            this.showVRCodeModal = true;
            this.displayFormModal = true;
        }
        else if (leaveRoom) {
            var jwt = sessionStorage.getItem('jwt');
            this.textChannelsService.leaveRoom(jwt, this.selectedOfficeID, this.selectedOffice, id);
            this.roomSelected = false;
            this.selectedRoom = '';
            this.roomTextChannelMessages = [];
            this.audioComponent.leave();
        }
        else {
            if (this.roomSelected) {
                if (this.selectedRoom != id) {
                    this.leaveRoom();
                    this.audioComponent.leave();
                    this.roomSelected = true;
                    this.selectedRoom = id;
                    var jwt = sessionStorage.getItem('jwt');
                    this.textChannelsService.joinRoom(jwt, this.selectedOfficeID, this.selectedOffice, id, true);
                    setTimeout(function () { _this.audioComponent.join(_this.userID, _this.selectedOfficeID, _this.selectedRoom, _this.selectedOffice); }, 2000);
                }
            }
            else {
                this.roomSelected = true;
                this.selectedRoom = id;
                var jwt = sessionStorage.getItem('jwt');
                this.textChannelsService.joinRoom(jwt, this.selectedOfficeID, this.selectedOffice, id, true);
                setTimeout(function () { _this.audioComponent.join(_this.userID, _this.selectedOfficeID, _this.selectedRoom, _this.selectedOffice); }, 2000);
            }
        }
    };
    UserComponent.prototype.leaveRoom = function () {
        var jwt = sessionStorage.getItem('jwt');
        this.textChannelsService.leaveRoom(jwt, this.selectedOfficeID, this.selectedOffice, this.selectedRoom);
        this.roomSelected = false;
        this.selectedRoom = '';
        this.roomTextChannelMessages = [];
    };
    UserComponent.prototype.addRoom = function () {
        var _this = this;
        console.log("add room: " + this.newRoomName);
        console.log('new room type: ' + this.newRoomType);
        var newRoomLayout = {
            id: this.newRoomName,
            x: 0,
            y: 0,
            w: 1,
            h: 1
        };
        var newLayout = [];
        this.layout.forEach(function (room) {
            var oldRoomLayout = {
                id: room.id,
                x: room.x,
                y: room.y,
                w: room.w,
                h: room.h
            };
            newLayout.push(oldRoomLayout);
        });
        newLayout.push(newRoomLayout);
        var jwt = sessionStorage.getItem('jwt');
        this.officeRoomService.registerRoom(jwt, this.selectedOfficeID, this.newRoomName, this.newRoomType, 0, 0, 1, 1).subscribe(function (response) {
            console.log(response);
            if (response.Response == "Success") {
                var newRoom = {
                    RoomID: response.Room.id,
                    RoomType: response.Room.roomType,
                    RoomLayout: newRoomLayout
                };
                _this.layout = newLayout;
                _this.floorPlan.push(newRoom);
                _this.hideDisplayFormModal();
            }
        }, function (error) {
            console.log(error.error);
            _this.sendFormModalAlert = true;
            _this.formModalAlertMsg = error.error.message;
            _this.newRoomName = '';
        });
    };
    UserComponent.prototype.removeRoom = function (id) {
        var _this = this;
        console.log("remove room: ", id);
        var jwt = sessionStorage.getItem('jwt');
        this.officeRoomService.deleteRoom(jwt, this.selectedOfficeID, id).subscribe(function (response) {
            console.log(response);
            if (response.Response == "Success") {
                var newFloorPlan_3 = [];
                var newLayout_3 = [];
                response.Rooms.forEach(function (room) {
                    var newRoomLayout = {
                        id: room.roomName,
                        x: room.xCoordinate,
                        y: room.yCoordinate,
                        w: room.width,
                        h: room.height
                    };
                    var newRoom = {
                        RoomID: room.id,
                        RoomType: room.roomType,
                        RoomLayout: newRoomLayout
                    };
                    newLayout_3.push(newRoomLayout);
                    newFloorPlan_3.push(newRoom);
                });
                _this.layout = newLayout_3;
                _this.floorPlan = newFloorPlan_3;
            }
        }, function (error) {
            console.log("error");
        });
    };
    UserComponent.prototype.onLayoutUpdated = function (layout) {
        var _this = this;
        console.log("Layout updated", layout);
        this.layout = layout;
        var jwt = sessionStorage.getItem('jwt');
        this.layout.forEach(function (room) {
            _this.officeRoomService.updateRoom(jwt, _this.selectedOfficeID, room.id, _this.getRoomTypeByRoomID(room.id), room.x, room.y, room.w, room.h).subscribe(function (response) {
                console.log(response);
            }, function (error) {
                console.log(error);
            });
        });
    };
    UserComponent.prototype.getRoomTypeByRoomID = function (roomName) {
        var type = 'Normal';
        this.floorPlan.forEach(function (room) {
            if (room.RoomLayout.id == roomName) {
                type = room.RoomType;
            }
        });
        return type;
    };
    UserComponent.prototype.toggleOfficeListView = function () {
        if (this.showOfficeList) {
            document.getElementById('officeList').classList.replace("showOffices", "hideOffices");
            document.getElementById('officeListIcon').classList.replace("icon-minimal-down", "icon-minimal-right");
            this.showOfficeList = false;
        }
        else {
            document.getElementById('officeList').classList.replace("hideOffices", "showOffices");
            document.getElementById('officeListIcon').classList.replace("icon-minimal-right", "icon-minimal-down");
            this.showOfficeList = true;
        }
    };
    UserComponent.prototype.toggleOfficeSettingsListView = function () {
        if (this.showOfficeSettingsList) {
            document.getElementById('officeSettingsList').classList.replace("showOfficeSettings", "hideOfficeSettings");
            document.getElementById('officeSettingsListIcon').classList.replace("icon-minimal-down", "icon-minimal-right");
            this.showOfficeSettingsList = false;
        }
        else {
            document.getElementById('officeSettingsList').classList.replace("hideOfficeSettings", "showOfficeSettings");
            document.getElementById('officeSettingsListIcon').classList.replace("icon-minimal-right", "icon-minimal-down");
            this.showOfficeSettingsList = true;
        }
    };
    UserComponent.prototype.toggleQuickSettingsListView = function () {
        if (this.showQuickSettingsList) {
            document.getElementById('quickSettingsList').classList.replace("showQuickSettings", "hideQuickSettings");
            document.getElementById('quickSettingsListIcon').classList.replace("icon-minimal-down", "icon-minimal-right");
            this.showQuickSettingsList = false;
        }
        else {
            document.getElementById('quickSettingsList').classList.replace("hideQuickSettings", "showQuickSettings");
            document.getElementById('quickSettingsListIcon').classList.replace("icon-minimal-right", "icon-minimal-down");
            this.showQuickSettingsList = true;
        }
    };
    UserComponent.prototype.toggleRoomListView = function (IconID, ListID) {
        var icon = document.getElementById(IconID);
        if (icon.classList.contains("icon-minimal-down")) {
            icon.classList.replace("icon-minimal-down", "icon-minimal-right");
            document.getElementById(ListID).style.display = "none";
        }
        else {
            icon.classList.replace("icon-minimal-right", "icon-minimal-down");
            document.getElementById(ListID).style.display = "block";
        }
    };
    UserComponent.prototype.scrollMessageBoardToBottom = function () {
        var messageBoard = document.getElementById("messageBoard");
        messageBoard.scrollTop = messageBoard.scrollHeight;
    };
    UserComponent.prototype.scrollRoomMessageBoardToBottom = function () {
        var messageBoard = document.getElementById("messageBoardRoom");
        if (messageBoard != null) {
            messageBoard.scrollTop = messageBoard.scrollHeight;
        }
    };
    UserComponent.prototype.sendMessage = function (room) {
        console.log("send message room: " + room);
        if (this.newMessageInput != "") {
            var jwt = sessionStorage.getItem('jwt');
            this.textChannelsService.sendMsgToServer(jwt, this.selectedOfficeID, this.userUsername, room, this.newMessageInput);
            this.newMessageInput = "";
        }
    };
    UserComponent.prototype.receivedMessage = function (data) {
        var message = {
            sender: data.sender,
            room: data.channel,
            message: data.message
        };
        if (data.channel == this.selectedOffice) {
            this.officeTextChannelMessages.push(message);
        }
        else {
            this.roomTextChannelMessages.push(message);
        }
    };
    UserComponent.prototype.createNewOffice = function () {
        var _this = this;
        var jwt = sessionStorage.getItem('jwt');
        console.log(jwt);
        this.officeRoomService.registerOffice(jwt, this.newOfficeName).subscribe(function (response) {
            console.log(response);
            if (response.Response == "Success") {
                console.log("new Office created");
                _this.newOfficeAlertMsg = "New Office created successfully.";
                _this.sendNewOfficeAlert = true;
                _this.officeListLoaded = false;
                _this.officeList = [];
                _this.getUserOfficeList();
                _this.officeListLoaded = true;
            }
        }, function (error) {
            console.log(error);
            _this.newOfficeAlertMsg = "Error - An office with this name already exists or an error occurred. Please try again.";
            _this.sendNewOfficeAlert = true;
        });
        this.newOfficeName = "";
    };
    UserComponent.prototype.joinOffice = function () {
        var _this = this;
        var jwt = sessionStorage.getItem('jwt');
        this.officeRoomService.joinOffice(jwt, this.joinOfficeCode).subscribe(function (response) {
            if (response.Response == "Success") {
                console.log("User added to office");
                _this.joinOfficeAlertMsg = "Added to office successfully.";
                _this.sendJoinOfficeAlert = true;
                _this.officeListLoaded = false;
                _this.officeList = [];
                _this.getUserOfficeList();
                _this.officeListLoaded = true;
            }
        }, function (error) {
            console.log(error);
            _this.newOfficeAlertMsg = "Error - You could not be added to the office, the invite may be invalid. Please try again.";
            _this.sendNewOfficeAlert = true;
        });
    };
    UserComponent.prototype.setTimeTrackerTab = function (tab) {
        this.showTimeTrackerTab = tab;
    };
    UserComponent.prototype.getUserTrackingInstances = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var jwt;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                jwt = sessionStorage.getItem('jwt');
                this.timeTrackingService.getAllUserOfficeTimeTrackingInstances(jwt, this.selectedOfficeID).subscribe(function (response) {
                    var tempArray = [];
                    response.TrackingInstances.forEach(function (instance) {
                        var projectName = "";
                        if (instance.projectID != null) {
                            _this.timeTrackingProjects.forEach(function (project) {
                                if (project.id == instance.projectID) {
                                    projectName = project.project;
                                }
                            });
                        }
                        var tagName = "";
                        if (instance.tagID != null) {
                            _this.timeTrackingTags.forEach(function (tag) {
                                if (instance.tagID == tag.id) {
                                    tagName = tag.tag;
                                }
                            });
                        }
                        var startTime = new Date(Number(instance.startTime));
                        var endTime = new Date(Number(instance.endTime));
                        var date = startTime.getFullYear() + ":" +
                            startTime.getMonth() + ":" +
                            startTime.getDate();
                        var startEnd = startTime.getHours() + ":" +
                            startTime.getMinutes() + " - " +
                            endTime.getHours() + ":" +
                            endTime.getMinutes();
                        var time = endTime.getTime() - startTime.getTime();
                        var hours = "00";
                        var minutes = "00";
                        var seconds = "00";
                        time = Math.floor(time / 1000);
                        if (time >= 3600) {
                            var tempDuration = time;
                            var numHours = Math.floor(tempDuration / 3600);
                            time = time - (numHours * 3600);
                            hours = "" + numHours;
                        }
                        if (time >= 60) {
                            var tempDuration = time;
                            var numMinutes = Math.floor(tempDuration / 60);
                            time = time - (numMinutes * 60);
                            minutes = "" + numMinutes;
                        }
                        if (time > 0) {
                            seconds = "" + time;
                        }
                        var duration = hours + ":" + minutes + ":" + seconds;
                        var newInstance = {
                            id: instance.id,
                            userID: instance.userID,
                            officeID: instance.officeID,
                            description: instance.description,
                            projectID: instance.projectID,
                            projectName: projectName,
                            tagID: instance.tagID,
                            tagName: tagName,
                            startTime: instance.startTime,
                            endTime: instance.endTime,
                            date: date,
                            startEnd: startEnd,
                            duration: duration
                        };
                        tempArray.push(newInstance);
                    });
                    _this.timeTrackingUserInstances = tempArray.reverse();
                    console.log("Completed Instances: ", _this.timeTrackingUserInstances);
                }, function (error) {
                    console.log(error);
                });
                return [2 /*return*/];
            });
        });
    };
    UserComponent.prototype.getOfficeTagList = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var jwt;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                jwt = sessionStorage.getItem('jwt');
                this.timeTrackingService.getAllTimeTrackingTags(jwt, this.selectedOfficeID).subscribe(function (response) {
                    var tagList = [];
                    response.Tags.forEach(function (tag) {
                        var newTag = {
                            id: tag.id,
                            officeID: tag.officeID,
                            tag: tag.tag
                        };
                        tagList.push(newTag);
                    });
                    _this.timeTrackingTags = tagList;
                    _this.getUserTrackingInstances();
                }, function (error) {
                    console.log(error);
                });
                return [2 /*return*/];
            });
        });
    };
    UserComponent.prototype.getOfficeProjectList = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var jwt;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                jwt = sessionStorage.getItem('jwt');
                this.timeTrackingService.getAllTimeTrackingProjects(jwt, this.selectedOfficeID).subscribe(function (response) {
                    var projectList = [];
                    response.Projects.forEach(function (project) {
                        var newProject = {
                            id: project.id,
                            officeID: project.officeID,
                            project: project.project
                        };
                        projectList.push(newProject);
                    });
                    _this.timeTrackingProjects = projectList;
                    _this.getOfficeTagList();
                });
                return [2 /*return*/];
            });
        });
    };
    UserComponent.prototype.startTrackingTimer = function () {
        if (this.trackerStarted) {
            this.showPrimaryGlobalAlert = true;
            this.globalAlertType = "Warning - ";
            this.globalAlertMsg = "There is a timer already running.";
        }
        else {
            this.startTimerInterval();
            this.trackerStarted = true;
            var today = new Date();
            var date = {
                Day: today.getDate(),
                Month: today.getMonth(),
                Year: today.getFullYear(),
                MilliSeconds: today.getMilliseconds(),
                Seconds: today.getSeconds(),
                Minutes: today.getMinutes(),
                Hours: today.getHours()
            };
            var sessionStorageID = "startDateTime_" + this.selectedOffice;
            window.sessionStorage.setItem(sessionStorageID, JSON.stringify(date));
        }
    };
    UserComponent.prototype.startTimerInterval = function () {
        this.trackingTimerInterval = setInterval(function () {
            var seconds = document.getElementById('timerSecond');
            var minutes = document.getElementById('timerMinute');
            var hours = document.getElementById('timerHour');
            if (Number(seconds.innerText) == 59) {
                seconds.innerText = "00";
                if (Number(minutes.innerText) == 59) {
                    minutes.innerText = "00";
                    var newHours = String(Number(hours.innerText) + 1);
                    if (newHours.length == 1) {
                        hours.innerText = "0" + newHours;
                    }
                    else {
                        hours.innerText = newHours;
                    }
                }
                else {
                    var newMinutes = String(Number(minutes.innerText) + 1);
                    if (newMinutes.length == 1) {
                        minutes.innerText = "0" + newMinutes;
                    }
                    else {
                        minutes.innerText = newMinutes;
                    }
                }
            }
            else {
                var newSeconds = String(Number(seconds.innerText) + 1);
                if (newSeconds.length == 1) {
                    seconds.innerText = "0" + newSeconds;
                }
                else {
                    seconds.innerText = newSeconds;
                }
            }
        }, 1000);
    };
    UserComponent.prototype.stopTrackingTimer = function () {
        var _this = this;
        if (this.trackerStarted) {
            if (this.timeTrackerDescription != "") {
                this.warningCount = 0;
                this.closeAlert();
                clearInterval(this.trackingTimerInterval);
                this.trackerStarted = false;
                document.getElementById('timerSecond').innerText = "00";
                document.getElementById('timerMinute').innerText = "00";
                document.getElementById('timerHour').innerText = "00";
                var sessionStorageID = "startDateTime_" + this.selectedOffice;
                var storedStartDate = JSON.parse(window.sessionStorage.getItem(sessionStorageID));
                var startDate = new Date(storedStartDate.Year, storedStartDate.Month, storedStartDate.Day, storedStartDate.Hours, storedStartDate.Minutes, storedStartDate.Seconds, storedStartDate.MilliSeconds);
                window.sessionStorage.removeItem(sessionStorageID);
                var endDate = new Date();
                var jwt = sessionStorage.getItem('jwt');
                this.timeTrackingService.registerNewTimeTrackingInstance(jwt, this.selectedOfficeID, this.timeTrackerDescription, this.selectedProjectID, this.selectedTagID, startDate.getTime() + "", endDate.getTime() + "").subscribe(function (response) {
                    console.log(response);
                    _this.timeTrackerDescription = "";
                    _this.removeSelectedProject();
                    _this.removeSelectedTag();
                    _this.getUserTrackingInstances();
                }, function (error) {
                    console.log(error);
                    _this.timeTrackerDescription = "";
                    _this.removeSelectedProject();
                    _this.removeSelectedTag();
                });
            }
            else if (this.warningCount == 1) {
                this.warningCount = 0;
                this.closeAlert();
                clearInterval(this.trackingTimerInterval);
                this.trackerStarted = false;
                document.getElementById('timerSecond').innerText = "00";
                document.getElementById('timerMinute').innerText = "00";
                document.getElementById('timerHour').innerText = "00";
                var sessionStorageID = "startDateTime_" + this.selectedOffice;
                var storedStartDate = JSON.parse(window.sessionStorage.getItem(sessionStorageID));
                var startDate = new Date(storedStartDate.Year, storedStartDate.Month, storedStartDate.Day, storedStartDate.Hours, storedStartDate.Minutes, storedStartDate.Seconds, storedStartDate.MilliSeconds);
                window.sessionStorage.removeItem(sessionStorageID);
                var endDate = new Date();
                var autoGeneratedDescription = this.userUsername + " - " +
                    startDate.getFullYear() + ":" +
                    startDate.getMonth() + ":" +
                    startDate.getDate() + "-" +
                    startDate.getHours() + ":" +
                    startDate.getMinutes() + ":" +
                    startDate.getSeconds();
                var jwt = sessionStorage.getItem('jwt');
                this.timeTrackingService.registerNewTimeTrackingInstance(jwt, this.selectedOfficeID, autoGeneratedDescription, this.selectedProjectID, this.selectedTagID, startDate.getTime() + "", endDate.getTime() + "").subscribe(function (response) {
                    console.log(response);
                    _this.timeTrackerDescription = "";
                    _this.removeSelectedProject();
                    _this.removeSelectedTag();
                    _this.getUserTrackingInstances();
                }, function (error) {
                    console.log(error);
                    _this.timeTrackerDescription = "";
                    _this.removeSelectedProject();
                    _this.removeSelectedTag();
                });
            }
            else {
                this.closeAlert();
                this.warningCount++;
                this.showPrimaryGlobalAlert = true;
                this.globalAlertType = "Error - ";
                this.globalAlertMsg = "Please add a description before ending the time tracking instance.";
            }
        }
    };
    UserComponent.prototype.setTimeTrackerProject = function (projectID, project) {
        this.timeTrackerProjectSelected = true;
        this.selectedProjectID = projectID;
        this.selectedProject = project;
    };
    UserComponent.prototype.removeSelectedProject = function () {
        this.timeTrackerProjectSelected = false;
        this.selectedProjectID = null;
        this.selectedProject = "";
    };
    UserComponent.prototype.setTimeTrackerTag = function (tagID, tag) {
        this.timeTrackerTagSelected = true;
        this.selectedTagID = tagID;
        this.selectedTag = tag;
    };
    UserComponent.prototype.removeSelectedTag = function () {
        this.timeTrackerTagSelected = false;
        this.selectedTagID = null;
        this.selectedTag = "";
    };
    UserComponent.prototype.addNewProject = function () {
        var _this = this;
        var jwt = sessionStorage.getItem('jwt');
        this.timeTrackingService.registerNewTimeTrackingProject(jwt, this.selectedOfficeID, this.newProjectName).subscribe(function (response) {
            _this.newProjectName = "";
            var newProject = {
                id: response.Project.id,
                officeID: response.Project.officeID,
                project: response.Project.project
            };
            var tempArray = [];
            tempArray.push(newProject);
            _this.timeTrackingProjects.forEach(function (project) {
                var tempProject = {
                    id: project.id,
                    officeID: project.officeID,
                    project: project.project
                };
                tempArray.push(tempProject);
            });
            _this.timeTrackingProjects = tempArray;
        }, function (error) {
            console.log(error);
            _this.newProjectName = "";
            _this.closeAlert();
            _this.showPrimaryGlobalAlert = true;
            _this.globalAlertType = "Error - ";
            _this.globalAlertMsg = error.error.message;
        });
    };
    UserComponent.prototype.deleteProject = function (id) {
        var _this = this;
        var jwt = sessionStorage.getItem('jwt');
        this.timeTrackingService.removeTimeTrackingProjectByID(jwt, id).subscribe(function (response) {
            var tempArray = [];
            _this.timeTrackingProjects.forEach(function (project) {
                if (project.id != id) {
                    var tempProject = {
                        id: project.id,
                        officeID: project.officeID,
                        project: project.project
                    };
                    tempArray.push(tempProject);
                }
            });
            _this.timeTrackingProjects = tempArray;
        }, function (error) {
            console.log(error);
        });
    };
    UserComponent.prototype.addNewTag = function () {
        var _this = this;
        var jwt = sessionStorage.getItem('jwt');
        this.timeTrackingService.registerNewTimeTrackingTag(jwt, this.selectedOfficeID, this.newTagName).subscribe(function (response) {
            _this.newTagName = "";
            var newTag = {
                id: response.Tag.id,
                officeID: response.Tag.officeID,
                tag: response.Tag.tag
            };
            var tempArray = [];
            tempArray.push(newTag);
            _this.timeTrackingTags.forEach(function (tag) {
                var tempTag = {
                    id: tag.id,
                    officeID: tag.officeID,
                    tag: tag.tag
                };
                tempArray.push(tempTag);
            });
            _this.timeTrackingTags = tempArray;
        }, function (error) {
            console.log(error);
            _this.newTagName = "";
            _this.closeAlert();
            _this.showPrimaryGlobalAlert = true;
            _this.globalAlertType = "Error - ";
            _this.globalAlertMsg = error.error.message;
        });
    };
    UserComponent.prototype.showSendInviteModal = function () {
        this.displayFormModal = true;
        this.showInviteModal = true;
    };
    UserComponent.prototype.showAddModal = function () {
        this.displayFormModal = true;
        this.showAddRoomModal = true;
    };
    UserComponent.prototype.hideDisplayFormModal = function () {
        this.showInviteModal = false;
        this.showAddRoomModal = false;
        this.showVRCodeModal = false;
        this.displayFormModal = false;
        this.formModalAlertMsg = '';
        this.sendFormModalAlert = false;
        this.newRoomName = '';
        this.sendInviteToName = '';
        this.sendInviteToEmail = '';
        this.VR_RoomCode = '';
    };
    UserComponent.prototype.sendOfficeInvite = function () {
        var _this = this;
        this.officeRoomService.sendOfficeInvite(this.sendInviteToEmail, this.sendInviteToName, this.selectedOfficeInvite).subscribe(function (response) {
            console.log(response);
            if (response.Response == "Success") {
                console.log('invite sent');
                _this.formModalAlertMsg = "Invite send Successfully.";
                _this.sendFormModalAlert = true;
            }
        }, function (error) {
            console.log(error);
            _this.formModalAlertMsg = "Error - Office Invite could not be sent. Please try again.";
            _this.sendFormModalAlert = true;
        });
        this.sendInviteToEmail = '';
        this.sendInviteToName = '';
    };
    UserComponent.prototype.EditFloorPlan = function () {
        console.log("Entering Editor Mode");
        this.disableDrag = false;
        this.disableRemove = false;
        this.disableResize = false;
        this.inFloorPlanEditorMode = true;
    };
    UserComponent.prototype.closeEditFloorPlan = function () {
        console.log("Exiting Editor Mode");
        this.disableDrag = true;
        this.disableRemove = true;
        this.disableResize = true;
        this.inFloorPlanEditorMode = false;
    };
    UserComponent.prototype.logOut = function () {
        sessionStorage.removeItem('jwt');
        this.router.navigate(['login']);
    };
    UserComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("user-page");
        if (this.trackerStarted) {
            this.warningCount = 0;
            this.closeAlert();
            clearInterval(this.trackingTimerInterval);
            this.trackerStarted = false;
            document.getElementById('timerSecond').innerText = "00";
            document.getElementById('timerMinute').innerText = "00";
            document.getElementById('timerHour').innerText = "00";
            var sessionStorageID = "startDateTime_" + this.selectedOffice;
            var storedStartDate = JSON.parse(window.sessionStorage.getItem(sessionStorageID));
            var startDate = new Date(storedStartDate.Year, storedStartDate.Month, storedStartDate.Day, storedStartDate.Hours, storedStartDate.Minutes, storedStartDate.Seconds, storedStartDate.MilliSeconds);
            window.sessionStorage.removeItem(sessionStorageID);
            var endDate = new Date();
            if (this.timeTrackerDescription == "") {
                var autoGeneratedDescription = this.userUsername + " - " +
                    startDate.getFullYear() + ":" +
                    startDate.getMonth() + ":" +
                    startDate.getDate() + "-" +
                    startDate.getHours() + ":" +
                    startDate.getMinutes() + ":" +
                    startDate.getSeconds();
                var jwt = sessionStorage.getItem('jwt');
                this.timeTrackingService.registerNewTimeTrackingInstance(jwt, this.selectedOfficeID, autoGeneratedDescription, this.selectedProjectID, this.selectedTagID, startDate.getTime() + "", endDate.getTime() + "").subscribe(function (response) {
                    console.log(response);
                    _this.timeTrackerDescription = "";
                    _this.removeSelectedProject();
                    _this.removeSelectedTag();
                }, function (error) {
                    console.log(error);
                    _this.timeTrackerDescription = "";
                    _this.removeSelectedProject();
                    _this.removeSelectedTag();
                });
            }
            else {
                var jwt = sessionStorage.getItem('jwt');
                this.timeTrackingService.registerNewTimeTrackingInstance(jwt, this.selectedOfficeID, this.timeTrackerDescription, this.selectedProjectID, this.selectedTagID, startDate.getTime() + "", endDate.getTime() + "").subscribe(function (response) {
                    console.log(response);
                    _this.timeTrackerDescription = "";
                    _this.removeSelectedProject();
                    _this.removeSelectedTag();
                }, function (error) {
                    console.log(error);
                    _this.timeTrackerDescription = "";
                    _this.removeSelectedProject();
                    _this.removeSelectedTag();
                });
            }
        }
    };
    UserComponent.ctorParameters = function () { return [
        { type: src_app_services_text_channels_service__WEBPACK_IMPORTED_MODULE_7__["TextChannelsService"] },
        { type: src_app_services_office_room_service__WEBPACK_IMPORTED_MODULE_6__["OfficeRoomService"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
        { type: src_app_services_kanban_service__WEBPACK_IMPORTED_MODULE_12__["KanbanService"] },
        { type: src_app_services_time_tracking_service__WEBPACK_IMPORTED_MODULE_13__["TimeTrackingService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    UserComponent.propDecorators = {
        scrollFrame: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['scrollframe', { static: false },] }],
        itemElements: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"], args: ['messageitem',] }],
        scrollRoomFrame: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['scrollRoomframe', { static: false },] }],
        itemRoomElements: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"], args: ['messageRoomitem',] }],
        grid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_katoid_angular_grid_layout__WEBPACK_IMPORTED_MODULE_5__["KtdGridComponent"], { static: true },] }],
        onMouseMove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ["document:mousemove", ["$event"],] }]
    };
    UserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-user',
            template: _raw_loader_user_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_user_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_text_channels_service__WEBPACK_IMPORTED_MODULE_7__["TextChannelsService"],
            src_app_services_office_room_service__WEBPACK_IMPORTED_MODULE_6__["OfficeRoomService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
            src_app_services_kanban_service__WEBPACK_IMPORTED_MODULE_12__["KanbanService"],
            src_app_services_time_tracking_service__WEBPACK_IMPORTED_MODULE_13__["TimeTrackingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "4Id2":
/*!*************************************!*\
  !*** ./src/app/pages/listschema.ts ***!
  \*************************************/
/*! exports provided: ListSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSchema", function() { return ListSchema; });
var ListSchema = /** @class */ (function () {
    function ListSchema() {
    }
    return ListSchema;
}());



/***/ }),

/***/ "5LMi":
/*!******************************************************!*\
  !*** ./src/app/pages/account/account.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  text-align: center;\n  margin: auto;\n  position: relative;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n  overflow: hidden;\n}\n\n.container::-webkit-scrollbar {\n  display: none;\n}\n\n#header {\n  display: flex;\n  justify-content: center;\n  position: relative;\n  padding-top: 22px;\n}\n\n.row {\n  position: relative;\n  margin-right: 0;\n  margin-left: 0;\n}\n\n#back-button {\n  position: absolute;\n  left: 5px;\n  top: 5px;\n  width: 65px;\n  height: 41px;\n  text-align: center;\n  padding-right: 75px;\n  margin-top: 22px;\n}\n\n#header-text {\n  text-align: center;\n  font-size: 45px;\n}\n\n.new-sections {\n  width: 600px;\n  height: 225px;\n  padding: 12px 0 12px 0;\n  margin: 0 auto;\n  position: relative;\n  color: #FFF;\n  background-clip: padding-box;\n  border: 1px solid #cad1d7;\n  border-radius: 1em;\n  overflow: none;\n}\n\n.form-group {\n  padding: 0 10px 0 10px;\n}\n\n.section-header, .section-header-delete, .subheading, .edit-input, #current-username {\n  text-align: center;\n}\n\n.section-header-delete {\n  color: #e14eca;\n}\n\n.edit-input, .section-button {\n  display: block;\n  margin: 0 auto;\n}\n\n.edit-input {\n  width: 300px;\n  padding: 10px;\n  color: white;\n  outline: 0;\n  background: #fff;\n  background-color: rgba(23, 25, 65, 0.9);\n  border: none;\n  box-shadow: none;\n  transition: border-bottom 0.3s;\n}\n\n.edit-input:focus {\n  border-bottom: 1px solid violet;\n}\n\n.section-button {\n  width: 50%;\n  display: block;\n  text-decoration: none;\n  margin-top: 10px;\n  background-color: rgba(58, 63, 156, 0.1);\n  border: 2px solid rgba(23, 25, 65, 0.9);\n  border-radius: 1em;\n  color: #e14eca;\n  outline: none;\n  transition: border-color 0.3s;\n}\n\n.section-button:hover {\n  border-color: #e14eca;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FjY291bnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDSCxrQkFBQTtFQUNBLHdCQUFBO0VBQ0cscUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDSCxpQkFBQTtBQUNEOztBQUVBO0VBQ0Msa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUNEOztBQUVBO0VBQ0Msa0JBQUE7RUFDRyxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0gsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0Q7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNDLFlBQUE7RUFDQSxhQUFBO0VBQ0csc0JBQUE7RUFDSCxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNEOztBQUVBO0VBQ0Msc0JBQUE7QUFDRDs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDQyxjQUFBO0FBQ0Q7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQUNEOztBQUNBO0VBQ0MsK0JBQUE7QUFFRDs7QUFDQTtFQUNDLFVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdDQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUFFRDs7QUFDQTtFQUNDLHFCQUFBO0FBRUQiLCJmaWxlIjoiYWNjb3VudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHQtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAgIG92ZXJmbG93OiBoaWRkZW47IFxufVxuXG4uY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuI2hlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHBhZGRpbmctdG9wOjIycHg7XG59XG5cbi5yb3d7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0bWFyZ2luLXJpZ2h0OiAwO1xuXHRtYXJnaW4tbGVmdDogMDtcbn1cblxuI2JhY2stYnV0dG9ue1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNXB4O1xuICAgIHRvcDogNXB4O1xuICAgIHdpZHRoOiA2NXB4O1xuICAgIGhlaWdodDogNDFweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRwYWRkaW5nLXJpZ2h0OiA3NXB4O1xuXHRtYXJnaW4tdG9wOiAyMnB4O1xufVxuXG4jaGVhZGVyLXRleHQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDQ1cHg7XG59XG5cbi5uZXctc2VjdGlvbnN7XG5cdHdpZHRoOiA2MDBweDtcblx0aGVpZ2h0OiAyMjVweDtcbiAgICBwYWRkaW5nOiAxMnB4IDAgMTJweCAwO1xuXHRtYXJnaW46MCBhdXRvO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGNvbG9yOiAjRkZGO1xuXHRiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuXHRib3JkZXI6IDFweCBzb2xpZCAjY2FkMWQ3O1xuXHRib3JkZXItcmFkaXVzOiAxZW07XG5cdG92ZXJmbG93OiBub25lO1xufVxuXG4uZm9ybS1ncm91cHtcblx0cGFkZGluZzogMCAxMHB4IDAgMTBweDtcbn1cblxuLnNlY3Rpb24taGVhZGVyLCAuc2VjdGlvbi1oZWFkZXItZGVsZXRlLCAuc3ViaGVhZGluZywgLmVkaXQtaW5wdXQsICNjdXJyZW50LXVzZXJuYW1le1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNlY3Rpb24taGVhZGVyLWRlbGV0ZXtcblx0Y29sb3I6ICNlMTRlY2E7XG59XG5cbi5lZGl0LWlucHV0LCAuc2VjdGlvbi1idXR0b257XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5lZGl0LWlucHV0e1xuXHR3aWR0aDogMzAwcHg7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdGNvbG9yOiB3aGl0ZTtcblx0b3V0bGluZTogMDtcblx0YmFja2dyb3VuZDogI2ZmZjtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMywgMjUsIDY1LCAwLjkpO1xuXHRib3JkZXI6bm9uZTtcblx0Ym94LXNoYWRvdzpub25lO1xuXHR0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tIDAuM3M7XG59XG4uZWRpdC1pbnB1dDpmb2N1c3tcblx0Ym9yZGVyLWJvdHRvbToxcHggc29saWQgdmlvbGV0IDtcbn1cblxuLnNlY3Rpb24tYnV0dG9uIHtcblx0d2lkdGg6IDUwJTtcblx0ZGlzcGxheTogYmxvY2s7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0bWFyZ2luLXRvcDogMTBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSg1OCwgNjMsIDE1NiwgMC4xKTtcblx0Ym9yZGVyOiAycHggc29saWQgcmdiYSgyMywgMjUsIDY1LCAwLjkpO1xuXHRib3JkZXItcmFkaXVzOiAxZW07XG5cdGNvbG9yOiAjZTE0ZWNhO1xuXHRvdXRsaW5lOiBub25lO1xuXHR0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcztcbn1cblxuLnNlY3Rpb24tYnV0dG9uOmhvdmVye1xuXHRib3JkZXItY29sb3I6ICNlMTRlY2E7XG59Il19 */");

/***/ }),

/***/ "7h4r":
/*!*************************************!*\
  !*** ./src/app/pages/cardschema.ts ***!
  \*************************************/
/*! exports provided: CardSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardSchema", function() { return CardSchema; });
var CardSchema = /** @class */ (function () {
    function CardSchema() {
    }
    return CardSchema;
}());



/***/ }),

/***/ "8jZd":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/examples/landingpage/landingpage.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\n  class=\"navbar navbar-expand-lg fixed-top navbar-transparent\"\n  color-on-scroll=\"100\"\n  id=\"navbar-top\"\n>\n  <div class=\"container\">\n    <div class=\"navbar-translate\">\n      <a\n        class=\"navbar-brand\"\n        [routerLink]=\"['/home']\"\n        placement=\"bottom\"\n        tooltip=\"Designed and Coded by Creative Tim\"\n      >\n        <span> BLK• </span> Design System Angular\n      </a>\n      <button\n        aria-controls=\"navigation-index\"\n        aria-label=\"Toggle navigation\"\n        class=\"navbar-toggler navbar-toggler\"\n        [attr.aria-expanded]=\"!isCollapsed\"\n        (click)=\"isCollapsed = !isCollapsed\"\n        id=\"navigation\"\n        type=\"button\"\n      >\n        <span class=\"navbar-toggler-bar bar1\"> </span>\n        <span class=\"navbar-toggler-bar bar2\"> </span>\n        <span class=\"navbar-toggler-bar bar3\"> </span>\n      </button>\n    </div>\n    <div\n      class=\"navbar-collapse justify-content-end\"\n      [collapse]=\"isCollapsed\"\n      id=\"navigation\"\n    >\n      <div class=\"navbar-collapse-header\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\"><a> BLK• </a></div>\n          <div class=\"col-6 collapse-close text-right\">\n            <button\n              aria-controls=\"navigation-index\"\n              aria-label=\"Toggle navigation\"\n              class=\"navbar-toggler\"\n              [attr.aria-expanded]=\"!isCollapsed\"\n              (click)=\"isCollapsed = !isCollapsed\"\n              id=\"navigation\"\n              type=\"button\"\n            >\n              <i class=\"tim-icons icon-simple-remove\"> </i>\n            </button>\n          </div>\n        </div>\n      </div>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://twitter.com/CreativeTim\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Twitter\"\n          >\n            <i class=\"fab fa-twitter\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Twitter</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://www.facebook.com/CreativeTim\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Like us on Facebook\"\n          >\n            <i class=\"fab fa-facebook-square\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Facebook</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://www.instagram.com/CreativeTimOfficial\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Instagram\"\n          >\n            <i class=\"fab fa-instagram\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Instagram</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/home']\"> Back to Kit </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            href=\"https://github.com/creativetimofficial/blk-design-system-angular/issues\"\n          >\n            Have an issue?\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"wrapper\">\n  <div class=\"page-header\">\n    <img class=\"path\" src=\"assets/img/blob.png\" />\n\n    <img class=\"path2\" src=\"assets/img/path2.png\" />\n\n    <img class=\"shapes triangle\" src=\"assets/img/triunghiuri.png\" />\n\n    <img class=\"shapes wave\" src=\"assets/img/waves.png\" />\n\n    <img class=\"shapes squares\" src=\"assets/img/patrat.png\" />\n\n    <img class=\"shapes circle\" src=\"assets/img/cercuri.png\" />\n\n    <div class=\"content-center\">\n      <div\n        class=\"row row-grid justify-content-between align-items-center text-left\"\n      >\n        <div class=\"col-lg-6 col-md-6\">\n          <h1 class=\"text-white\">\n            We keep your coin <br />\n\n            <span class=\"text-white\"> secured </span>\n          </h1>\n          <p class=\"text-white mb-3\">\n            A wonderful serenity has taken possession of my entire soul, like\n            these sweet mornings of spring which I enjoy with my whole heart. I\n            am alone, and feel...\n          </p>\n          <div class=\"btn-wrapper mb-3\">\n            <p class=\"category text-success d-inline mr-1\">From 9.99%/mo</p>\n            <a\n              class=\"btn btn-success btn-link btn-sm\"\n              href=\"javascript:void(0)\"\n            >\n              <i class=\"tim-icons icon-minimal-right\"> </i>\n            </a>\n          </div>\n          <div class=\"btn-wrapper\">\n            <div class=\"button-container\">\n              <button\n                class=\"btn btn-icon btn-simple btn-round btn-neutral mr-1\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\"fab fa-twitter\"> </i>\n              </button>\n              <button\n                class=\"btn btn-icon btn-simple btn-round btn-neutral mr-1\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\"fab fa-dribbble\"> </i>\n              </button>\n              <button\n                class=\"btn btn-icon btn-simple btn-round btn-neutral\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\"fab fa-facebook\"> </i>\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-md-5\">\n          <img\n            alt=\"Circle image\"\n            class=\"img-fluid\"\n            src=\"assets/img/etherum.png\"\n          />\n        </div>\n      </div>\n    </div>\n  </div>\n  <section class=\"section section-lg\">\n    <section class=\"section\">\n      <img class=\"path\" src=\"assets/img/path4.png\" />\n\n      <div class=\"container\">\n        <div class=\"row row-grid justify-content-between\">\n          <div class=\"col-md-5 mt-lg-5\">\n            <div class=\"row\">\n              <div class=\"col-lg-6 col-sm-12 px-2 py-2\">\n                <div class=\"card card-stats\">\n                  <div class=\"card-body\">\n                    <div class=\"row\">\n                      <div class=\"col-5 col-md-4\">\n                        <div class=\"icon-big text-center icon-warning\">\n                          <i class=\"tim-icons icon-trophy text-warning\"> </i>\n                        </div>\n                      </div>\n                      <div class=\"col-7 col-md-8\">\n                        <div class=\"numbers\">\n                          <p class=\"card-title\">3,237</p>\n                          <p></p>\n                          <p class=\"card-category\">Awards</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-6 col-sm-12 px-2 py-2\">\n                <div class=\"card card-stats upper bg-default\">\n                  <div class=\"card-body\">\n                    <div class=\"row\">\n                      <div class=\"col-5 col-md-4\">\n                        <div class=\"icon-big text-center icon-warning\">\n                          <i class=\"tim-icons icon-coins text-white\"> </i>\n                        </div>\n                      </div>\n                      <div class=\"col-7 col-md-8\">\n                        <div class=\"numbers\">\n                          <p class=\"card-title\">3,653</p>\n                          <p></p>\n                          <p class=\"card-category\">Commits</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-lg-6 col-sm-12 px-2 py-2\">\n                <div class=\"card card-stats\">\n                  <div class=\"card-body\">\n                    <div class=\"row\">\n                      <div class=\"col-5 col-md-4\">\n                        <div class=\"icon-big text-center icon-warning\">\n                          <i class=\"tim-icons icon-gift-2 text-info\"> </i>\n                        </div>\n                      </div>\n                      <div class=\"col-7 col-md-8\">\n                        <div class=\"numbers\">\n                          <p class=\"card-title\">593</p>\n                          <p></p>\n                          <p class=\"card-category\">Presents</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-6 col-sm-12 px-2 py-2\">\n                <div class=\"card card-stats\">\n                  <div class=\"card-body\">\n                    <div class=\"row\">\n                      <div class=\"col-5 col-md-4\">\n                        <div class=\"icon-big text-center icon-warning\">\n                          <i class=\"tim-icons icon-credit-card text-success\">\n                          </i>\n                        </div>\n                      </div>\n                      <div class=\"col-7 col-md-8\">\n                        <div class=\"numbers\">\n                          <p class=\"card-title\">10,783</p>\n                          <p></p>\n                          <p class=\"card-category\">Forks</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"pl-md-5\">\n              <h1>\n                Large <br />\n\n                Achivements\n              </h1>\n              <p>\n                I should be capable of drawing a single stroke at the present\n                moment; and yet I feel that I never was a greater artist than\n                now.\n              </p>\n              <br />\n\n              <p>\n                When, while the lovely valley teems with vapour around me, and\n                the meridian sun strikes the upper surface of the impenetrable\n                foliage of my trees, and but a few stray.\n              </p>\n              <br />\n\n              <a\n                class=\"font-weight-bold text-info mt-5\"\n                href=\"javascript:void(0)\"\n              >\n                Show all <i class=\"tim-icons icon-minimal-right text-info\"> </i>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </section>\n  <section class=\"section section-lg\">\n    <img class=\"path\" src=\"assets/img/path4.png\" />\n\n    <img class=\"path2\" src=\"assets/img/path5.png\" />\n\n    <img class=\"path3\" src=\"assets/img/path2.png\" />\n\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-12\">\n          <h1 class=\"text-center\">Your best benefit</h1>\n          <div class=\"row row-grid justify-content-center\">\n            <div class=\"col-lg-3\">\n              <div class=\"info\">\n                <div class=\"icon icon-primary\">\n                  <i class=\"tim-icons icon-money-coins\"> </i>\n                </div>\n                <h4 class=\"info-title\">Low Commission</h4>\n                <hr class=\"line-primary\" />\n\n                <p>\n                  Divide details about your work into parts. Write a few lines\n                  about each one. A paragraph describing a feature will.\n                </p>\n              </div>\n            </div>\n            <div class=\"col-lg-3\">\n              <div class=\"info\">\n                <div class=\"icon icon-warning\">\n                  <i class=\"tim-icons icon-chart-pie-36\"> </i>\n                </div>\n                <h4 class=\"info-title\">High Incomes</h4>\n                <hr class=\"line-warning\" />\n\n                <p>\n                  Divide details about your product or agency work into parts.\n                  Write a few lines about each one. A paragraph describing\n                  feature will be a feature.\n                </p>\n              </div>\n            </div>\n            <div class=\"col-lg-3\">\n              <div class=\"info\">\n                <div class=\"icon icon-success\">\n                  <i class=\"tim-icons icon-single-02\"> </i>\n                </div>\n                <h4 class=\"info-title\">Verified People</h4>\n                <hr class=\"line-success\" />\n\n                <p>\n                  Divide details about your product or agency work into parts.\n                  Write a few lines about each one. A paragraph describing be\n                  enough.\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"section section-lg section-safe\">\n    <img class=\"path\" src=\"assets/img/path5.png\" />\n\n    <div class=\"container\">\n      <div class=\"row row-grid justify-content-between\">\n        <div class=\"col-md-5\">\n          <img class=\"img-fluid floating\" src=\"assets/img/chester-wade.jpg\" />\n\n          <div class=\"card card-stats bg-danger\">\n            <div class=\"card-body\">\n              <div class=\"justify-content-center\">\n                <div class=\"numbers\">\n                  <p class=\"card-title\">100%</p>\n                  <p class=\"card-category text-white\">Safe</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card card-stats bg-info\">\n            <div class=\"card-body\">\n              <div class=\"justify-content-center\">\n                <div class=\"numbers\">\n                  <p class=\"card-title\">573 K</p>\n                  <p class=\"card-category text-white\">Satisfied customers</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card card-stats bg-default\">\n            <div class=\"card-body\">\n              <div class=\"justify-content-center\">\n                <div class=\"numbers\">\n                  <p class=\"card-title\">10 425</p>\n                  <p class=\"card-category text-white\">Business</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"px-md-5\">\n            <hr class=\"line-success\" />\n\n            <h3>Awesome features</h3>\n            <p>\n              The design system comes with three pre-built pages to help you get\n              started faster. You can change the text and images and you're good\n              to go.\n            </p>\n            <ul class=\"list-unstyled mt-5\">\n              <li class=\"py-2\">\n                <div class=\"d-flex align-items-center\">\n                  <div class=\"icon icon-success mb-2\">\n                    <i class=\"tim-icons icon-vector\"> </i>\n                  </div>\n                  <div class=\"ml-3\"><h6>Carefully crafted components</h6></div>\n                </div>\n              </li>\n              <li class=\"py-2\">\n                <div class=\"d-flex align-items-center\">\n                  <div class=\"icon icon-success mb-2\">\n                    <i class=\"tim-icons icon-tap-02\"> </i>\n                  </div>\n                  <div class=\"ml-3\"><h6>Amazing page examples</h6></div>\n                </div>\n              </li>\n              <li class=\"py-2\">\n                <div class=\"d-flex align-items-center\">\n                  <div class=\"icon icon-success mb-2\">\n                    <i class=\"tim-icons icon-single-02\"> </i>\n                  </div>\n                  <div class=\"ml-3\"><h6>Super friendly support team</h6></div>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"section section-lg\">\n    <img class=\"path\" src=\"assets/img/path4.png\" />\n\n    <img class=\"path2\" src=\"assets/img/path2.png\" />\n\n    <div class=\"col-md-12\">\n      <div class=\"card card-chart card-plain\">\n        <div class=\"card-header\">\n          <div class=\"row\">\n            <div class=\"col-sm-6 text-left\">\n              <hr class=\"line-primary\" />\n\n              <h5 class=\"card-category\">Total Investments</h5>\n              <h2 class=\"card-title\">Performance</h2>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"chart-area\"><canvas id=\"chartBig\"> </canvas></div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"section section-lg section-coins\">\n    <img class=\"path\" src=\"assets/img/path3.png\" />\n\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <hr class=\"line-info\" />\n\n          <h1>\n            Choose the coin\n            <span class=\"text-info\"> that fits your needs </span>\n          </h1>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <div class=\"card card-coin card-plain\">\n            <div class=\"card-header\">\n              <img class=\"img-center img-fluid\" src=\"assets/img/bitcoin.png\" />\n            </div>\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-md-12 text-center\">\n                  <h4 class=\"text-uppercase\">Light Coin</h4>\n                  <span> Plan </span>\n                  <hr class=\"line-primary\" />\n                </div>\n              </div>\n              <div class=\"row\">\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\">50 messages</li>\n                  <li class=\"list-group-item\">100 emails</li>\n                  <li class=\"list-group-item\">24/7 Support</li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"card-footer text-center\">\n              <button class=\"btn btn-primary btn-simple\">Get plan</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card card-coin card-plain\">\n            <div class=\"card-header\">\n              <img class=\"img-center img-fluid\" src=\"assets/img/etherum.png\" />\n            </div>\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-md-12 text-center\">\n                  <h4 class=\"text-uppercase\">Dark Coin</h4>\n                  <span> Plan </span>\n                  <hr class=\"line-success\" />\n                </div>\n              </div>\n              <div class=\"row\">\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\">150 messages</li>\n                  <li class=\"list-group-item\">1000 emails</li>\n                  <li class=\"list-group-item\">24/7 Support</li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"card-footer text-center\">\n              <button class=\"btn btn-success btn-simple\">Get plan</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card card-coin card-plain\">\n            <div class=\"card-header\">\n              <img class=\"img-center img-fluid\" src=\"assets/img/ripp.png\" />\n            </div>\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-md-12 text-center\">\n                  <h4 class=\"text-uppercase\">Bright Coin</h4>\n                  <span> Plan </span>\n                  <hr class=\"line-info\" />\n                </div>\n              </div>\n              <div class=\"row\">\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\">350 messages</li>\n                  <li class=\"list-group-item\">10K emails</li>\n                  <li class=\"list-group-item\">24/7 Support</li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"card-footer text-center\">\n              <button class=\"btn btn-info btn-simple\">Get plan</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <footer class=\"footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-3\"><h1 class=\"title\">BLK•</h1></div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/home']\"> Home </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/landing']\"> Landing </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/register']\"> Register </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/profile']\"> Profile </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/contact-us?ref=blkdsa-footer\">\n                Contact Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/about-us?ref=blkdsa-footer\">\n                About Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/blog?ref=blkdsa-footer\">\n                Blog\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://opensource.org/licenses/MIT\">\n                License\n              </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <h3 class=\"title\">Follow us:</h3>\n          <div class=\"btn-wrapper profile\">\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://twitter.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-twitter\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://www.facebook.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-facebook-square\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple\"\n              href=\"https://dribbble.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-dribbble\"> </i>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n</div>\n");

/***/ }),

/***/ "AytR":
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
var environment = {
    production: false,
    apiUrl: 'https://audiosuite.herokuapp.com',
    agoraAppId: '7afb53157f754f6f8023f31fb343404a',
    tokenUrl: 'http://139.162.248.140:8082/fetch_rtc_token'
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

/***/ "D8EZ":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "ywSW");
/* harmony import */ var _login_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.scss */ "KEbp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.email = "";
        this.password = "";
        this.validUser = false;
        this.sendAlert = false;
        this.alertMsg = "";
        this.isCollapsed = true;
    }
    LoginComponent.prototype.onMouseMove = function (e) {
        var squares1 = document.getElementById("square1");
        var squares2 = document.getElementById("square2");
        var squares3 = document.getElementById("square3");
        var squares4 = document.getElementById("square4");
        var squares5 = document.getElementById("square5");
        var squares6 = document.getElementById("square6");
        var squares7 = document.getElementById("square7");
        var squares8 = document.getElementById("square8");
        var posX = e.clientX - window.innerWidth / 2;
        var posY = e.clientY - window.innerWidth / 6;
        squares1.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares2.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares3.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares4.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares5.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares6.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares7.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.02 +
                "deg) rotateX(" +
                posY * -0.02 +
                "deg)";
        squares8.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.02 +
                "deg) rotateX(" +
                posY * -0.02 +
                "deg)";
    };
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        var jwt = sessionStorage.getItem('jwt');
        this.userService.getUserDetails(jwt).subscribe(function (response) {
            _this.router.navigate(['user']);
        }, function (error) {
            console.log(error);
        });
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("login-page");
        //this.onMouseMove(event);
    };
    LoginComponent.prototype.logUserIn = function () {
        var _this = this;
        if (this.email == "") {
            this.alertMsg = "Email is required.";
            this.sendAlert = true;
            return;
        }
        else {
            var emailControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email);
            if (emailControl.status == "INVALID") {
                this.sendAlert = true;
                this.alertMsg = "Email given is invalid.";
                return;
            }
            else {
                this.sendAlert = false;
                this.alertMsg = "";
            }
        }
        if (this.password == "") {
            this.sendAlert = true;
            this.alertMsg = "Password is required.";
            return;
        }
        else {
            var passwordControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.password, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*()\-_\+\=|\\/?>.<,;:]).{8,}$"));
            if (passwordControl.status == "INVALID") {
                this.sendAlert = true;
                this.alertMsg = "Password given is invalid.\nMin length 8, One Uppercase, One Lowercase, One digit and One special character.";
                return;
            }
            else {
                this.sendAlert = false;
                this.alertMsg = "";
            }
        }
        this.userService.logUserIn(this.email, this.password).subscribe(function (response) {
            //console.log(response);
            if (response.response == "Success") {
                _this.validUser = true;
                sessionStorage.setItem('jwt', response.jwt);
                _this.router.navigate(['user']);
                return;
            }
        }, function (error) {
            console.log(error);
            _this.password = "";
            _this.sendAlert = true;
            _this.alertMsg = "Invalid user credentials given.";
            return;
        });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("login-page");
    };
    LoginComponent.ctorParameters = function () { return [
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    LoginComponent.propDecorators = {
        onMouseMove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ["document:mousemove", ["$event"],] }]
    };
    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-login',
            template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "EK2B":
/*!****************************************************!*\
  !*** ./src/app/pages/account/account.component.ts ***!
  \****************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_account_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./account.component.html */ "vX/9");
/* harmony import */ var _account_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account.component.scss */ "5LMi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_office_room_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/office-room.service */ "wh6J");
/* harmony import */ var src_app_services_text_channels_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/text-channels.service */ "tfwI");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");









var AccountComponent = /** @class */ (function () {
    function AccountComponent(textChannelsService, officeRoomService, userService, router) {
        this.textChannelsService = textChannelsService;
        this.officeRoomService = officeRoomService;
        this.userService = userService;
        this.router = router;
        this.userID = '';
        this.userFirstName = '';
        this.userLastName = '';
        this.userUsername = '';
        this.userEmail = '';
        this.newEmail = '';
        this.otp = "";
        this.userOTPInput = "";
        this.otpAlert = false;
        this.otpMessage = "";
        this.isCollapsed = true;
        this.showModal = false;
        this.dragStartThreshold = 0;
        this.inFloorPlanEditorMode = false;
        this.disableDrag = true;
        this.disableResize = true;
        this.disableRemove = true;
        this.autoResize = true;
        this.preventCollision = false;
        this.scrollableParent = "floorPlanContent";
        this.isDragging = false;
        this.isResizing = false;
    }
    AccountComponent.prototype.ngOnInit = function () {
        //This is where we need to edit exclusively for the accounts page!
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("account-page");
        this.getUserDetails();
    };
    AccountComponent.prototype.ngAfterViewInit = function () {
    };
    AccountComponent.prototype.userNav = function () {
        this.router.navigate(['user']);
        return;
    };
    AccountComponent.prototype.getUserDetails = function () {
        var _this = this;
        var jwt = sessionStorage.getItem('jwt');
        console.log(jwt);
        this.userService.getUserDetails(jwt).subscribe(function (response) {
            _this.userID = response.id;
            _this.userFirstName = response.firstName;
            _this.userLastName = response.lastName;
            _this.userUsername = response.userName;
            _this.userEmail = response.email;
        }, function (error) {
            console.log(error);
        });
    };
    AccountComponent.prototype.updateUsername = function () {
        var _this = this;
        var jwt = sessionStorage.getItem('jwt');
        // var newUsername = document.getElementById('update-username').value;
        var newUsername = document.getElementById('update-username').value;
        var message = document.getElementById('username-sub');
        console.log(newUsername);
        this.userService.getUserDetails(jwt).subscribe(function (response) {
            _this.userID = response.id;
            _this.userFirstName = response.firstName;
            _this.userLastName = response.lastName;
            _this.userUsername = response.userName;
            _this.userEmail = response.email;
            _this.userService.updateUsername(jwt, _this.userID, String(newUsername)).subscribe(function (response) {
                message.style.color = '#e14eca';
                message.innerText = "Username changed successful.";
                location.reload();
                // this.userID = response.id;
                // this.userFirstName = response.firstName;
                // this.userLastName = response.lastName;
                // this.userUsername = response.userName;
                // this.userEmail = response.email;
            }, function (error) {
                console.log(error);
            });
        }, function (error) {
            console.log(error);
        });
    };
    AccountComponent.prototype.updateEmail = function () {
        var _this = this;
        var jwt = sessionStorage.getItem('jwt');
        // var newUsername = document.getElementById('update-username').value;
        this.newEmail = document.getElementById('update-email').value;
        var inputBox = document.getElementById('update-email');
        var message = document.getElementById('email-sub');
        if (this.newEmail == "") {
            inputBox.placeholder = "Email is required.";
            return;
        }
        else {
            var emailControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.newEmail, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email);
            if (emailControl.status == "INVALID") {
                message.innerText = "Email given is invalid.";
                inputBox.value = "";
                return;
            }
        }
        this.userService.getUserDetails(jwt).subscribe(function (response) {
            _this.userID = response.id;
            _this.userFirstName = response.firstName;
            _this.userLastName = response.lastName;
            _this.userUsername = response.userName;
            _this.userEmail = response.email;
            _this.userService.updateEmail(jwt, _this.userID, String(_this.newEmail)).subscribe(function (response) {
                message.style.color = '#e14eca';
                message.innerText = "Email changed successful.";
                location.reload();
                // this.userID = response.id;
                // this.userFirstName = response.firstName;
                // this.userLastName = response.lastName;
                // this.userUsername = response.userName;
                // this.userEmail = response.email;
            }, function (error) {
                console.log(error);
            });
            // this.userService.sendOTPVerificationEmail(this.userEmail, this.userUsername).subscribe(response => {
            //   console.log(response)
            //   this.otp = response.otp;
            // })
            // this.showModal = true;
        }, function (error) {
            console.log(error);
        });
    };
    // hideFormModal(): void{
    //   this.showModal = false;
    // }
    // validateOTP(): void{
    //   var jwt = sessionStorage.getItem('jwt');
    //   if(this.otp == this.userOTPInput)
    //   {
    //      this.showModal = false;
    //      this.userService.updateEmail(jwt, this.userID, String(this.newEmail)).subscribe((response) => {
    //       // this.userID = response.id;
    //       // this.userFirstName = response.firstName;
    //       // this.userLastName = response.lastName;
    //       // this.userUsername = response.userName;
    //       // this.userEmail = response.email;
    //     },
    //     (error) => {
    //       console.log(error);
    //     })
    //   }
    //   else
    //   {
    //     this.otpMessage = "Incorrect otp entered, Please try again.";
    //     this.otpAlert = true;
    //   }
    // }
    AccountComponent.prototype.updatePassword = function () {
        var _this = this;
        var jwt = sessionStorage.getItem('jwt');
        // var newUsername = document.getElementById('update-username').value;
        var newPassword = document.getElementById('update-password').value;
        var message = document.getElementById('password-sub');
        this.userService.getUserDetails(jwt).subscribe(function (response) {
            _this.userID = response.id;
            _this.userFirstName = response.firstName;
            _this.userLastName = response.lastName;
            _this.userUsername = response.userName;
            _this.userEmail = response.email;
            _this.userService.updatePassword(jwt, _this.userID, String(newPassword)).subscribe(function (response) {
                message.style.color = '#e14eca';
                message.innerText = "Password changed successful.";
                location.reload();
                // this.userID = response.id;
                // this.userFirstName = response.firstName;
                // this.userLastName = response.lastName;
                // this.userUsername = response.userName;
                // this.userEmail = response.email;
            }, function (error) {
                console.log(error);
            });
        }, function (error) {
            console.log(error);
        });
    };
    AccountComponent.prototype.deleteUser = function () {
        var _this = this;
        var jwt = sessionStorage.getItem('jwt');
        this.userService.getUserDetails(jwt).subscribe(function (response) {
            _this.userID = response.id;
            _this.userFirstName = response.firstName;
            _this.userLastName = response.lastName;
            _this.userUsername = response.userName;
            _this.userEmail = response.email;
            _this.userService.deleteUser(jwt, _this.userID).subscribe(function (response) {
                // this.userID = response.id;
                // this.userFirstName = response.firstName;
                // this.userLastName = response.lastName;
                // this.userUsername = response.userName;
                // this.userEmail = response.email;
                if (response.response == "Success") {
                    _this.router.navigate(['login']);
                    return;
                }
            }, function (error) {
                console.log(error);
            });
        }, function (error) {
            console.log(error);
        });
    };
    AccountComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("account-page");
    };
    AccountComponent.ctorParameters = function () { return [
        { type: src_app_services_text_channels_service__WEBPACK_IMPORTED_MODULE_7__["TextChannelsService"] },
        { type: src_app_services_office_room_service__WEBPACK_IMPORTED_MODULE_6__["OfficeRoomService"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    AccountComponent.propDecorators = {
        scrollFrame: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['scrollframe', { static: false },] }],
        itemElements: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"], args: ['messageitem',] }]
    };
    AccountComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-account',
            template: _raw_loader_account_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_account_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_text_channels_service__WEBPACK_IMPORTED_MODULE_7__["TextChannelsService"],
            src_app_services_office_room_service__WEBPACK_IMPORTED_MODULE_6__["OfficeRoomService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "F149":
/*!*********************************************************************!*\
  !*** ./src/app/pages/examples/profilepage/profilepage.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProfilepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilepageComponent", function() { return ProfilepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profilepage_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profilepage.component.html */ "00il");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



var ProfilepageComponent = /** @class */ (function () {
    function ProfilepageComponent() {
        this.isCollapsed = true;
    }
    ProfilepageComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("profile-page");
    };
    ProfilepageComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("profile-page");
    };
    ProfilepageComponent.ctorParameters = function () { return []; };
    ProfilepageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-profilepage",
            template: _raw_loader_profilepage_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ProfilepageComponent);
    return ProfilepageComponent;
}());



/***/ }),

/***/ "HLp+":
/*!***************************************************!*\
  !*** ./src/app/services/time-tracking.service.ts ***!
  \***************************************************/
/*! exports provided: TimeTrackingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeTrackingService", function() { return TimeTrackingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    }),
};
var TimeTrackingService = /** @class */ (function () {
    function TimeTrackingService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    //-----------------------------------------------------------------------------------------------------------
    //                                           Time Tracker User
    //-----------------------------------------------------------------------------------------------------------
    //Observable function to add a new tracking instance to the repository
    TimeTrackingService.prototype.registerNewTimeTrackingInstance = function (jwt, officeID, description, projectID, tagID, startTime, endTime) {
        var body = {
            jwt: jwt,
            officeID: officeID,
            description: description,
            projectID: projectID,
            tagID: tagID,
            startTime: startTime,
            endTime: endTime
        };
        var registerNewTrackingInstanceURL = this.baseUrl + '/api/time-tracker/user/registerTrackingInstance';
        return this.http.post(registerNewTrackingInstanceURL, body, httpOptions);
    };
    //Observable function to fetch all tracking instance from the repository for a specific user and office combo
    TimeTrackingService.prototype.getAllUserOfficeTimeTrackingInstances = function (jwt, officeID) {
        var body = {
            jwt: jwt,
            officeID: officeID
        };
        var getAllUserOfficeTrackingInstancesURL = this.baseUrl + '/api/time-tracker/user/getTrackingInstances';
        return this.http.post(getAllUserOfficeTrackingInstancesURL, body, httpOptions);
    };
    //-----------------------------------------------------------------------------------------------------------
    //                                           Time Tracker Project
    //-----------------------------------------------------------------------------------------------------------
    //Observable function to add a new office project to the repository 
    TimeTrackingService.prototype.registerNewTimeTrackingProject = function (jwt, officeID, projectName) {
        var body = {
            jwt: jwt,
            officeID: officeID,
            projectName: projectName
        };
        var registerNewTrackingProjectURL = this.baseUrl + '/api/time-tracker/project/register';
        return this.http.post(registerNewTrackingProjectURL, body, httpOptions);
    };
    //Observable function to remove an office project from the repository 
    TimeTrackingService.prototype.removeTimeTrackingProjectByID = function (jwt, id) {
        var body = {
            jwt: jwt,
            id: id
        };
        var removeTrackingProjectURL = this.baseUrl + '/api/time-tracker/project/removeByID';
        return this.http.post(removeTrackingProjectURL, body, httpOptions);
    };
    //Observable function to remove an office project from the repository 
    TimeTrackingService.prototype.removeTimeTrackingProjectByName = function (jwt, officeID, projectName) {
        var body = {
            jwt: jwt,
            officeID: officeID,
            projectName: projectName
        };
        var removeTrackingProjectURL = this.baseUrl + '/api/time-tracker/project/removeByName';
        return this.http.post(removeTrackingProjectURL, body, httpOptions);
    };
    //Observable function to fetch all office projects from the repository 
    TimeTrackingService.prototype.getAllTimeTrackingProjects = function (jwt, officeID) {
        var body = {
            jwt: jwt,
            officeID: officeID
        };
        var getAllTimeTrackingProjectsURL = this.baseUrl + '/api/time-tracker/project/getOfficeProjects';
        return this.http.post(getAllTimeTrackingProjectsURL, body, httpOptions);
    };
    //-----------------------------------------------------------------------------------------------------------
    //                                           Time Tracker Tag
    //-----------------------------------------------------------------------------------------------------------
    //Observable function to add a new office tag to the repository 
    TimeTrackingService.prototype.registerNewTimeTrackingTag = function (jwt, officeID, tagName) {
        var body = {
            jwt: jwt,
            officeID: officeID,
            tagName: tagName
        };
        var registerNewTimeTrackingTagURL = this.baseUrl + '/api/time-tracker/tag/register';
        return this.http.post(registerNewTimeTrackingTagURL, body, httpOptions);
    };
    //Observable function to remove an office tag from the repository 
    TimeTrackingService.prototype.removeTimeTrackingTag = function (jwt, officeID, tagName) {
        var body = {
            jwt: jwt,
            officeID: officeID,
            tagName: tagName
        };
        var removeTrackingTagURL = this.baseUrl + '/api/time-tracker/tag/remove';
        return this.http.post(removeTrackingTagURL, body, httpOptions);
    };
    //Observable function to fetch all office tags from the repository 
    TimeTrackingService.prototype.getAllTimeTrackingTags = function (jwt, officeID) {
        var body = {
            jwt: jwt,
            officeID: officeID
        };
        var getAllTimeTrackingTagsURL = this.baseUrl + '/api/time-tracker/tag/getOfficeTags';
        return this.http.post(getAllTimeTrackingTagsURL, body, httpOptions);
    };
    TimeTrackingService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    TimeTrackingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TimeTrackingService);
    return TimeTrackingService;
}());



/***/ }),

/***/ "HdeD":
/*!********************************************************!*\
  !*** ./src/app/pages/register/register.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "IGfe":
/*!************************************************!*\
  !*** ./src/app/pages/list/list.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".list {\n  width: 350px;\n  max-width: 350px;\n  padding: 6px;\n  margin: 5px;\n  display: inline-table;\n  position: relative;\n  right: 40px;\n  color: #FFF;\n  background-clip: padding-box;\n  border: solid 3px transparent;\n  border-radius: 1em;\n  overflow: auto;\n  min-height: 200px;\n  color: #FFF;\n  background-clip: padding-box;\n  border: 1px solid #cad1d7;\n  border-radius: 1em;\n  overflow: none;\n}\n\n.list__title {\n  margin: 0;\n  padding: 16px 0 38px;\n}\n\n.card_button {\n  width: 100%;\n  display: block;\n  text-decoration: none;\n  background-color: rgba(23, 25, 65, 0.1);\n  border: 2px solid rgba(23, 25, 65, 0.9);\n  border-radius: 1em;\n  color: #e14eca;\n  outline: none;\n  transition: border-color 0.3s;\n}\n\n.card_button:hover {\n  border-color: #e14eca;\n}\n\ninput {\n  width: 300px;\n  padding: 10px;\n  border: 1px solid violet;\n  outline: 0;\n  background: #fff;\n  box-shadow: none;\n}\n\n#createIssueButton {\n  position: absolute;\n  top: 48px;\n  right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFQyxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBR0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUVBLGNBQUE7RUFFQSxpQkFBQTtFQUVBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBTEQ7O0FBcUJBO0VBQ0MsU0FBQTtFQUNBLG9CQUFBO0FBbEJEOztBQXFCQTtFQUNDLFdBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx1Q0FBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FBbEJEOztBQXFCQTtFQUNDLHFCQUFBO0FBbEJEOztBQXFCQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQWxCRjs7QUFxQkE7RUFDQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBbEJEIiwiZmlsZSI6Imxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdCB7XG5cdC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMsIDI1LCA2NSwgMC45KTtcblx0d2lkdGg6IDM1MHB4O1xuXHRtYXgtd2lkdGg6IDM1MHB4O1xuXHRwYWRkaW5nOiA2cHg7XG5cdG1hcmdpbjogNXB4O1xuXHRkaXNwbGF5OiBpbmxpbmUtdGFibGU7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0cmlnaHQ6IDQwcHg7XG5cdFxuXHQkYm9yZGVyOiAzcHg7XG5cdGNvbG9yOiAjRkZGO1xuXHRiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuXHRib3JkZXI6IHNvbGlkICRib3JkZXIgdHJhbnNwYXJlbnQ7XG5cdGJvcmRlci1yYWRpdXM6IDFlbTtcblxuXHRvdmVyZmxvdzogYXV0bztcblxuXHRtaW4taGVpZ2h0OiAyMDBweDtcblxuXHRjb2xvcjogI0ZGRjtcblx0YmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcblx0Ym9yZGVyOiAxcHggc29saWQgI2NhZDFkNztcblx0Ym9yZGVyLXJhZGl1czogMWVtO1xuXHRvdmVyZmxvdzogbm9uZTtcblx0XG5cdC8vICY6YmVmb3JlIHtcblx0Ly8gXHRjb250ZW50OiAnJztcblx0Ly8gXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdC8vIFx0dG9wOiAwOyByaWdodDogMDsgYm90dG9tOiAwOyBsZWZ0OiAwO1xuXHQvLyBcdHotaW5kZXg6IC0xO1xuXHQvLyBcdG1hcmdpbjogLSRib3JkZXI7XG5cdC8vIFx0Ym9yZGVyLXJhZGl1czogaW5oZXJpdDtcblx0Ly8gXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwYWZhY2YgMCUsICNkYzdiZmYgMTAwJSk7XG5cdC8vIFx0b3ZlcmZsb3cgOmF1dG87XG5cdC8vIFx0bWluLWhlaWdodDogMjAwcHg7XG5cdC8vIFx0bWF4LXdpZHRoOiAzNTBweDtcblx0Ly8gfVxufVxuXG4ubGlzdF9fdGl0bGUge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDE2cHggMCAzOHB4O1xufVxuXG4uY2FyZF9idXR0b24ge1xuXHR3aWR0aDogMTAwJTtcblx0ZGlzcGxheTogYmxvY2s7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMywgMjUsIDY1LCAwLjEpO1xuXHRib3JkZXI6IDJweCBzb2xpZCByZ2JhKDIzLCAyNSwgNjUsIDAuOSk7XG5cdGJvcmRlci1yYWRpdXM6IDFlbTtcblx0Y29sb3I6ICNlMTRlY2E7XG5cdG91dGxpbmU6IG5vbmU7XG5cdHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzO1xufVxuXG4uY2FyZF9idXR0b246aG92ZXJ7XG5cdGJvcmRlci1jb2xvcjogI2UxNGVjYTtcbn1cblxuaW5wdXR7XG4gIHdpZHRoOiAzMDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmlvbGV0O1xuICBvdXRsaW5lOiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93Om5vbmU7XG59XG5cbiNjcmVhdGVJc3N1ZUJ1dHRvbntcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6ICAgNDhweDtcblx0cmlnaHQ6IDBweDtcbn0iXX0= */");

/***/ }),

/***/ "IfWR":
/*!*********************************************************************!*\
  !*** ./src/app/pages/examples/landingpage/landingpage.component.ts ***!
  \*********************************************************************/
/*! exports provided: LandingpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingpageComponent", function() { return LandingpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_landingpage_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./landingpage.component.html */ "8jZd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ "MO+k");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);




var LandingpageComponent = /** @class */ (function () {
    function LandingpageComponent() {
        this.isCollapsed = true;
    }
    LandingpageComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("landing-page");
        var canvas = document.getElementById("chartBig");
        var ctx = canvas.getContext("2d");
        var gradientFill = ctx.createLinearGradient(0, 350, 0, 50);
        gradientFill.addColorStop(0, "rgba(228, 76, 196, 0.0)");
        gradientFill.addColorStop(1, "rgba(228, 76, 196, 0.14)");
        var chartBig = new chart_js__WEBPACK_IMPORTED_MODULE_3___default.a(ctx, {
            type: "line",
            responsive: true,
            data: {
                labels: [
                    "JUN",
                    "FEB",
                    "MAR",
                    "APR",
                    "MAY",
                    "JUN",
                    "JUL",
                    "AUG",
                    "SEP",
                    "OCT",
                    "NOV",
                    "DEC"
                ],
                datasets: [
                    {
                        label: "Data",
                        fill: true,
                        backgroundColor: gradientFill,
                        borderColor: "#e44cc4",
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        pointBackgroundColor: "#e44cc4",
                        pointBorderColor: "rgba(255,255,255,0)",
                        pointHoverBackgroundColor: "#be55ed",
                        //pointHoverBorderColor:'rgba(35,46,55,1)',
                        pointBorderWidth: 20,
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 15,
                        pointRadius: 4,
                        data: [80, 160, 200, 160, 250, 280, 220, 190, 200, 250, 290, 320]
                    }
                ]
            },
            options: {
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                tooltips: {
                    backgroundColor: "#fff",
                    titleFontColor: "#ccc",
                    bodyFontColor: "#666",
                    bodySpacing: 4,
                    xPadding: 12,
                    mode: "nearest",
                    intersect: 0,
                    position: "nearest"
                },
                responsive: true,
                scales: {
                    yAxes: [
                        {
                            barPercentage: 1.6,
                            gridLines: {
                                drawBorder: false,
                                color: "rgba(0,0,0,0.0)",
                                zeroLineColor: "transparent"
                            },
                            ticks: {
                                display: false,
                                suggestedMin: 0,
                                suggestedMax: 350,
                                padding: 20,
                                fontColor: "#9a9a9a"
                            }
                        }
                    ],
                    xAxes: [
                        {
                            barPercentage: 1.6,
                            gridLines: {
                                drawBorder: false,
                                color: "rgba(0,0,0,0)",
                                zeroLineColor: "transparent"
                            },
                            ticks: {
                                padding: 20,
                                fontColor: "#9a9a9a"
                            }
                        }
                    ]
                }
            }
        });
    };
    LandingpageComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("landing-page");
    };
    LandingpageComponent.ctorParameters = function () { return []; };
    LandingpageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-landingpage",
            template: _raw_loader_landingpage_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], LandingpageComponent);
    return LandingpageComponent;
}());



/***/ }),

/***/ "JNyP":
/*!***********************************************!*\
  !*** ./src/app/pages/card/card.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n\tbackground: #331ea8;\n\tmargin: 0 0 6px 0;\n\tpadding: 6px 6px 2px 8px;\n\tcolor: #fff;\n\tdisplay: inline-block;\n\tmax-width: 332px;\n\toutline: none;\n\tborder-radius: 1em;\n\tborder: 2px solid rgba(23, 25, 65, 0.9);\n\ttext-decoration: none;\n}\n\n#delete_button{\n\tposition: relative;\n\tfloat: left;\n\toutline: none;\n\tborder-radius: 1em;\n\tborder: 2px solid rgba(23, 25, 65, 0.9);\n\tbackground-color: rgba(23, 25, 65, 0.1);\n\ttext-decoration: none;\n\tbottom: 2px;\n}\n\n#class_description{\n\tposition: relative;\n\tmargin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLG1CQUFtQjtDQUNuQixpQkFBaUI7Q0FDakIsd0JBQXdCO0NBQ3hCLFdBQVc7Q0FDWCxxQkFBcUI7Q0FDckIsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIsdUNBQXVDO0NBQ3ZDLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQix1Q0FBdUM7Q0FDdkMsdUNBQXVDO0NBQ3ZDLHFCQUFxQjtDQUNyQixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsaUJBQWlCO0FBQ2xCIiwiZmlsZSI6ImNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcblx0YmFja2dyb3VuZDogIzMzMWVhODtcblx0bWFyZ2luOiAwIDAgNnB4IDA7XG5cdHBhZGRpbmc6IDZweCA2cHggMnB4IDhweDtcblx0Y29sb3I6ICNmZmY7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0bWF4LXdpZHRoOiAzMzJweDtcblx0b3V0bGluZTogbm9uZTtcblx0Ym9yZGVyLXJhZGl1czogMWVtO1xuXHRib3JkZXI6IDJweCBzb2xpZCByZ2JhKDIzLCAyNSwgNjUsIDAuOSk7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuI2RlbGV0ZV9idXR0b257XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ZmxvYXQ6IGxlZnQ7XG5cdG91dGxpbmU6IG5vbmU7XG5cdGJvcmRlci1yYWRpdXM6IDFlbTtcblx0Ym9yZGVyOiAycHggc29saWQgcmdiYSgyMywgMjUsIDY1LCAwLjkpO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzLCAyNSwgNjUsIDAuMSk7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0Ym90dG9tOiAycHg7XG59XG5cbiNjbGFzc19kZXNjcmlwdGlvbntcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRtYXJnaW4tbGVmdDogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "KEbp":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "LNnH":
/*!**************************************************!*\
  !*** ./src/app/pages/index/index.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  scroll-behavior: smooth;\n}\n\n#audio-suite-nav-title {\n  color: white;\n}\n\n#section-vr {\n  display: inline-block;\n}\n\n.col-md-4 {\n  padding-bottom: 70px;\n}\n\n.section-lg {\n  padding-top: 0;\n}\n\n#office-features {\n  padding-top: 100px;\n}\n\n.info {\n  padding-top: 10px;\n}\n\n#video-section {\n  padding-top: 20px;\n}\n\n.profile-description {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2luZGV4LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKIiwiZmlsZSI6ImluZGV4LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbiNhdWRpby1zdWl0ZS1uYXYtdGl0bGV7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4jc2VjdGlvbi12cntcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5jb2wtbWQtNHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNzBweDtcbn1cblxuLnNlY3Rpb24tbGd7XG4gICAgcGFkZGluZy10b3A6IDA7XG59XG5cbiNvZmZpY2UtZmVhdHVyZXN7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xufVxuXG4uaW5mb3tcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuI3ZpZGVvLXNlY3Rpb257XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5wcm9maWxlLWRlc2NyaXB0aW9ue1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn0iXX0= */");

/***/ }),

/***/ "OGTQ":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/card/card.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"card\" draggable=\"true\" (dragstart)=\"dragStart($event)\" id=\"{{card.id}}\">\n    <button id=\"delete_button\" (click)=\"deleteCard(card.id);\" > x </button>\n    <p id=\"class_description\" >{{card.description}}</p>\n</div>");

/***/ }),

/***/ "QMMq":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- sidebar -->\n<div class=\"sidebar\" id=\"Sidebar\">\n    <h1 id='sidebar-title' >Audio Suite</h1>\n\n    <button id=\"sidebar-officeHeader\" (click)=\"toggleOfficeListView()\">\n        <i id=\"officeListIcon\" class=\"tim-icons icon-minimal-down\"></i>  Offices:\n    </button>\n    <div id=\"officeList\" class=\"showOffices\">\n        <div class=\"box\" *ngIf=\"!officeListLoaded\">\n            <div class=\"container\">\n              <span class=\"circle\"></span>\n              <span class=\"circle\"></span>\n              <span class=\"circle\"></span>\n              <span class=\"circle\"></span>\n              <span class=\"circle\"></span>\n              <span class=\"circle\"></span>\n              <span class=\"circle\"></span>\n              <span class=\"circle\"></span>\n              <span class=\"circle\"></span>\n            </div>\n        </div>\n        <div *ngIf=\"officeListLoaded\">\n            <div *ngFor=\"let office of officeList\">\n                <button \n                class=\"officeBtn\" \n                (click)=\"selectOffice(office.id, office.name, office.invite, office.role)\"\n                >\n                    <div class=\"officeName\">\n                        {{office.name}}\n                    </div>    \n                </button>\n                <br>\n            </div>\n        </div>\n    </div>\n\n    <div *ngIf=\"officeSelected\">\n        \n        <br>\n        <button id=\"sidebar-officeHeader\" (click)=\"toggleOfficeSettingsListView()\">\n            <i id=\"officeSettingsListIcon\" class=\"tim-icons icon-minimal-down\"></i> Office Settings:\n        </button>\n        <div id=\"officeSettingsList\" class=\"showOfficeSettings\">\n            <button *ngIf=\"selectedOfficeRole == 'Manager'\" class=\"sidebarBtn\" (click)=\"showSendInviteModal()\">\n                <div class=\"settingType\">\n                    Send Invite\n                </div>\n            </button>\n            <br *ngIf=\"selectedOfficeRole == 'Manager'\">\n            <div *ngIf=\"selectedOfficeRole == 'Manager'\">\n                <div *ngIf=\"inFloorPlanEditorMode; then closeEditorMode else openEditorMode\"></div>\n                <ng-template #openEditorMode>\n                    <button class=\"sidebarBtn\" (click)=\"EditFloorPlan()\">\n                        <div class=\"settingType\">\n                            Edit FloorPlan\n                        </div>\n                    </button>\n                    <br>\n                </ng-template>\n                <ng-template #closeEditorMode>\n                    <button class=\"sidebarBtn\" (click)=\"closeEditFloorPlan()\">\n                        <div class=\"settingType\">\n                            Exit Edit Mode\n                        </div>\n                    </button>\n                    <br>\n                </ng-template>\n            </div>\n            <button class=\"sidebarBtn\" (click)=\"leaveOffice()\">\n                <div class=\"settingType\">\n                    Leave Office\n                </div>\n            </button>\n            <br>\n        </div>\n    </div>\n\n    <br>\n    <div>\n        <button id=\"sidebar-officeHeader\" (click)=\"toggleQuickSettingsListView()\">\n            <i id=\"quickSettingsListIcon\" class=\"tim-icons icon-minimal-down\"></i> Quick Settings:\n        </button>\n        <div id=\"quickSettingsList\" class=\"showQuickSettings\">\n            <button *ngIf=\"sidebarOpened\" class=\"sidebarBtn\" (click)=\"toggleSidebar()\">\n                <div class=\"settingType\">\n                    Close Sidebar\n                </div>\n            </button>\n            <button class=\"sidebarBtn\" (click)=\"logOut()\">\n                <div class=\"settingType\">\n                    Log Out\n                </div>\n            </button>\n        </div>\n    </div>\n\n    <button id=\"sidebar-officeHeader\" (click)=\"accountNav()\" > Account Settings </button>\n</div>\n\n<div class=\"showHiddenSidebar\">\n    <button id=\"showTaskBar\" (click)=\"toggleSidebar()\">\n        <i class=\"tim-icons icon-align-center\"></i>\n    </button>\n    <!-- GlobalAlert -->\n    <!-- Success Alert -->\n    <alert \n        *ngIf=\"showSuccessGlobalAlert\" \n        class=\"alert-with-icon\" \n        [type]=\"'success alert-with-icon'\" \n        style=\"width: 75%; margin-left: 15%; margin-bottom: 5px; margin-top: 16px; z-index: 5;\" \n        [dismissible]=\"true\"\n        (click)=\"closeAlert()\"\n        >\n        <span class=\"tim-icons icon-trophy\" data-notify=\"icon\">\n        </span>\n        <span>\n        <b>\n            {{ globalAlertType }}\n        </b>\n        {{ globalAlertMsg }}\n        </span>\n    </alert>\n    <!-- Primary Alert -->\n    <alert \n        *ngIf=\"showPrimaryGlobalAlert\" \n        class=\"alert-with-icon\" \n        [type]=\"'primary alert-with-icon'\" \n        style=\"width: 75%; margin-left: 15%; margin-bottom: 5px; margin-top: 16px; z-index: 5;\" \n        [dismissible]=\"true\"\n        (click)=\"closeAlert()\"\n        >\n        <span class=\"tim-icons icon-trophy\" data-notify=\"icon\">\n        </span>\n        <span>\n        <b>\n            {{ globalAlertType }}\n        </b>\n        {{ globalAlertMsg }}\n        </span>\n    </alert>\n</div>\n\n<!-- Page content -->\n<div class=\"content\" id=\"Content\">\n    <div *ngIf=\"!officeSelected\" class=\"newJoinOfficeContent\" id=\"newJoinOfficeContent\">\n        <div class=\"card card-registerNewOffice\" id=\"card-newOffice\">\n            <div class=\"card-header\">\n              <h4 class=\"card-title\" style=\"padding-left: 15px\">New Office</h4>\n            </div>\n            <div id=\"alertPosition\">\n              <div *ngIf=\"sendNewOfficeAlert\">\n                <alert class=\"alert-with-icon\" [type]=\"'primary alert-with-icon'\">\n                    <span class=\" tim-icons icon-trophy\" data-notify=\"icon\">\n                    </span>\n                    <span>\n                      {{ newOfficeAlertMsg }}\n                    </span>\n                </alert>\n              </div>\n            </div>\n            <div class=\"card-body\">\n              <form class=\"form\">\n                <div\n                  class=\"input-group\"\n                  [ngClass]=\"{ 'input-group-focus': focus1 === true }\"\n                >\n                  <div class=\"input-group-prepend\">\n                    <div class=\"input-group-text\">\n                      <i class=\"tim-icons icon-email-85\"> </i>\n                    </div>\n                  </div>\n                  <input\n                    class=\"form-control\"\n                    placeholder=\"Office Name\"\n                    name= \"newOfficeName\"\n                    [(ngModel)]=\"newOfficeName\"\n                    type=\"text\"\n                    (focus)=\"focus1 = true\"\n                    (blur)=\"focus1 = false\"\n                  />\n                </div>\n              </form>\n            </div>\n            <div class=\"card-footer\">\n              <button \n                  data-target=\"#formModal\"\n                  (click)=\"createNewOffice();\"\n                  class=\"btn btn-success btn-round btn-lg\"\n              >\n                  Create New Office\n              </button>\n            </div>\n          </div>\n\n          <div class=\"card card-joinOffice\" id=\"card-joinOffice\">\n            <div class=\"card-header\">\n              <h4 class=\"card-title\" style=\"padding-left: 15px\">Join Office</h4>\n            </div>\n            <div id=\"alertPosition\">\n              <div *ngIf=\"sendJoinOfficeAlert\">\n                <alert class=\"alert-with-icon\" [type]=\"'primary alert-with-icon'\">\n                    <span class=\" tim-icons icon-trophy\" data-notify=\"icon\">\n                    </span>\n                    <span>\n                      {{ joinOfficeAlertMsg }}\n                    </span>\n                </alert>\n              </div>\n            </div>\n            <div class=\"card-body\">\n              <form class=\"form\">\n                <div\n                  class=\"input-group\"\n                  [ngClass]=\"{ 'input-group-focus': focus2 === true }\"\n                >\n                  <div class=\"input-group-prepend\">\n                    <div class=\"input-group-text\">\n                      <i class=\"tim-icons icon-email-85\"> </i>\n                    </div>\n                  </div>\n                  <input\n                    class=\"form-control\"\n                    placeholder=\"Office Invite Code\"\n                    name= \"joinOfficeCode\"\n                    [(ngModel)]=\"joinOfficeCode\"\n                    type=\"text\"\n                    (focus)=\"focus2 = true\"\n                    (blur)=\"focus2 = false\"\n                  />\n                </div>\n              </form>\n            </div>\n            <div class=\"card-footer\">\n              <button \n                  data-target=\"#formModal\"\n                  (click)=\"joinOffice();\"\n                  class=\"btn btn-success btn-round btn-lg\"\n              >\n                  Join Office\n              </button>\n            </div>\n          </div>\n\n        <div class=\"square square-1\" id=\"square1\"></div>\n        <div class=\"square square-2\" id=\"square2\"></div>\n        <div class=\"square square-3\" id=\"square3\"></div>\n        <div class=\"square square-4\" id=\"square4\"></div>\n        <div class=\"square square-5\" id=\"square5\"></div>\n        <div class=\"square square-6\" id=\"square6\"></div>\n        <div class=\"square square-7\" id=\"square7\"></div>\n        <div class=\"square square-8\" id=\"square8\"></div>\n    </div>\n    <tabset *ngIf=\"officeSelected\" class=\"nav-tabs-primary\" (click)=\"tabSetOpened()\">\n        <tab>\n            <ng-template tabHeading>\n                <i class=\"tim-icons icon-components\"> </i> Floor Plan\n            </ng-template>\n            <div class=\"floorPlanContent\" id=\"floorPlanContent\">\n                <div *ngIf=\"!disableDrag\" class=\"addRoomContainer\">\n                    <button id=\"showAddRoomModalBtn\" class=\"btn btn-primary btn-round\" (click)=\"showAddModal()\">\n                        Add New Room\n                    </button>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-lg-7 col-xl-7\" style=\"height: 85vh\">\n                        <div id=\"grid-content\">\n                            <ktd-grid\n                                [cols]=\"cols\"\n                                [rowHeight]=\"rowHeight\"\n                                [layout]=\"layout\"\n                                [compactType]=\"compactType\"\n                                [preventCollision]=\"preventCollision\"\n                                [scrollableParent]=\"scrollableParent\"\n                                (layoutUpdated)=\"onLayoutUpdated($event)\">\n                                <div *ngFor=\"let room of floorPlan\">\n                                    <ktd-grid-item \n                                        class=\"ktd-grid-item\" \n                                        [id]=\"room.RoomLayout.id\" [transition]=\"currentTransition\"\n                                        [dragStartThreshold]=\"dragStartThreshold\" \n                                        [draggable]=\"!disableDrag\" \n                                        [resizable]=\"!disableResize\">\n                                            <div *ngIf=\"disableDrag; then click else dblClick\"></div>\n                                            <ng-template #click>\n                                                <div *ngIf=\"selectedRoom == room.RoomLayout.id; then leaveRoom else enterRoom\"></div>\n                                                <ng-template #enterRoom>\n                                                    <div class=\"grid-item-content\">\n                                                        <button (click)=\"selectRoom(room.RoomLayout.id, room.RoomType, false)\" class=\"grid-item-button\">\n                                                            <b>{{ room.RoomLayout.id }}</b>\n                                                            <br>\n                                                            <span *ngIf=\"room.RoomType == 'VR'\">{{ room.RoomType }}</span>\n                                                            <span *ngIf=\"room.RoomType == 'Private'\">{{ room.RoomType }}</span>\n                                                        </button>\n                                                        <app-audio #joinAudio [userId]=\"userID\"></app-audio>\n                                                    </div>\n                                                </ng-template>\n                                                <ng-template #leaveRoom>\n                                                    <div class=\"grid-item-content-leave\">\n                                                        <button (click)=\"selectRoom(room.RoomLayout.id, room.RoomType, true); leaveAudio.leave()\" class=\"grid-item-button\">\n                                                            <b>{{ room.RoomLayout.id }}</b>\n                                                        </button>\n                                                        <app-audio #leaveAudio></app-audio>\n                                                    </div>\n                                                </ng-template>\n                                            </ng-template>\n                                            <ng-template #dblClick>\n                                                <div class=\"grid-item-content-remove\">\n                                                    <button \n                                                    (dblclick)=\"removeRoom(room.RoomLayout.id)\" \n                                                    class=\"grid-item-button\"\n                                                    >\n                                                        <b>{{ room.RoomLayout.id }}</b>\n                                                    </button>\n                                                </div>\n                                            </ng-template>\n                                    </ktd-grid-item>\n                                </div>\n                            </ktd-grid>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-5 col-xl-5\" style=\"height: 85vh\">\n                        <div id=\"UserRoomList-content\">\n                            <button id=\"sidebar-openOrientationHeader\"  class=\"underline\" (click)=\"showChangeOrientation()\">\n                                <!-- <i id={{roomUserItem.IconID}} class=\"tim-icons icon-minimal-down\"></i>  {{roomUserItem.Room}} -->\n                                <span>Change Orientation</span><svg viewBox=\"0 0 13 20\"><polyline points=\"0.5 19.5 3 19.5 12.5 10 3 0.5\" /></svg>\n                            </button>\n                            <button id=\"sidebar-closeOrientationHeader\"  class=\"underline\" (click)=\"hideChangeOrientation()\">\n                                <!-- <i id={{roomUserItem.IconID}} class=\"tim-icons icon-minimal-down\"></i>  {{roomUserItem.Room}} -->\n                                <span>Close Orientation</span><svg viewBox=\"0 0 13 20\"><polyline points=\"0.5 19.5 3 19.5 12.5 10 3 0.5\" /></svg>\n                            </button>\n                            <div id=\"sliderDiv\">\n                                <div id=\"slider\"></div>\n                            </div>\n                            <div *ngFor=\"let roomUserItem of roomUsersList\">\n                                <button id=\"sidebar-roomHeader\"  class=\"underline\" (click)=\"toggleRoomListView(roomUserItem.IconID, roomUserItem.UserListID)\">\n                                    <!-- <i id={{roomUserItem.IconID}} class=\"tim-icons icon-minimal-down\"></i>  {{roomUserItem.Room}} -->\n                                    <span>{{roomUserItem.Room}}</span><svg viewBox=\"0 0 13 20\"><polyline points=\"0.5 19.5 3 19.5 12.5 10 3 0.5\" /></svg>\n                                </button>\n                                <div id={{roomUserItem.UserListID}} class=\"userNameInRoomUserList\" *ngFor=\"let user of roomUserItem.RoomUsers\">\n                                    <p\n                                        style=\"display: flex; justify-content: left; padding-left: 13%;\"\n                                    >\n                                        {{user}}\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </tab>\n        <tab>\n            <ng-template tabHeading>\n                <i class=\"tim-icons icon-chat-33\"> </i> Text Channel\n            </ng-template>\n            <div class=\"TextChannelContent\" id=\"TextChannelContent\">\n                <div class=\"messageBoard\" id=\"messageBoard\" #scrollframe>\n                    <!--Messages will be displayed here when fetched from the server.-->\n                    <div *ngFor=\"let message of officeTextChannelMessages\" #messageitem>\n                        <div>\n                            <div *ngIf=\"message.sender == userUsername; then incommingMessage else outgoingMessage\"></div>\n                            <ng-template #incommingMessage>\n                                <div class=\"message\">\n                                    <div class=\"outgoing\">\n                                        <p>{{message.sender}}</p>\n                                        <p class=\"messageContent\">{{message.message}}</p>\n                                    </div>\n                                </div>\n                            </ng-template>\n                            <ng-template #outgoingMessage>\n                                <div class=\"message\">\n                                    <div class=\"incomming\">\n                                        <p>{{message.sender}}</p>\n                                        <p class=\"messageContent\">{{message.message}}</p>\n                                    </div>\n                                </div>\n                            </ng-template>\n                        </div>\n                    </div>\n                </div>\n                \n                <form>\n                    <div class=\"newMessageInput form-group\">\n                        <input name=\"newMessageInput\" [(ngModel)]=\"newMessageInput\" type=\"text\" class=\"form-control\"> \n                        <button type=\"submit\" id=\"sendOfficeMessageBtn\" class=\"btn btn-primary btn-sm\" (click)=\"sendMessage(selectedOffice)\"><i class=\"tim-icons icon-send\"> </i>  Send</button>\n                    </div>\n                </form>\n            </div>\n        </tab>\n        <tab *ngIf=\"roomSelected\">\n            <ng-template tabHeading>\n                <i class=\"tim-icons icon-chat-33\"> </i> {{ selectedRoom }} Channel\n            </ng-template>\n            <div class=\"TextChannelContent\">\n                <div class=\"messageBoard\" id=\"messageBoardRoom\" #scrollRoomframe>\n                    <!--Messages will be displayed here when fetched from the server.-->\n                    <div *ngFor=\"let message of roomTextChannelMessages\" #messageRoomitem>\n                        <div>\n                            <div *ngIf=\"message.sender == userUsername; then incommingMessage else outgoingMessage\"></div>\n                            <ng-template #incommingMessage>\n                                <div class=\"message\">\n                                    <div class=\"outgoing\">\n                                        <p>{{message.sender}}</p>\n                                        <p class=\"messageContent\">{{message.message}}</p>\n                                    </div>\n                                </div>\n                            </ng-template>\n                            <ng-template #outgoingMessage>\n                                <div class=\"message\">\n                                    <div class=\"incomming\">\n                                        <p>{{message.sender}}</p>\n                                        <p class=\"messageContent\">{{message.message}}</p>\n                                    </div>\n                                </div>\n                            </ng-template>\n                        </div>\n                    </div>\n                </div>\n                \n                <form>\n                    <div class=\"newMessageInput form-group\">\n                        <input name=\"newMessageInput\" [(ngModel)]=\"newMessageInput\" type=\"text\" class=\"form-control\"> \n                        <button type=\"submit\" id=\"sendOfficeMessageBtn\" class=\"btn btn-primary btn-sm\" (click)=\"sendMessage(selectedRoom)\"><i class=\"tim-icons icon-send\"> </i>  Send</button>\n                    </div>\n                </form>\n            </div>\n        </tab>\n        <tab>\n            <ng-template tabHeading>\n                <i class=\"tim-icons icon-time-alarm\"> </i> Time Tracker\n            </ng-template>\n            <div class=\"timeTrackerContent\" id=\"timeTrackerContent\">\n                <div class=\"row\">\n                    <div class=\"col-lg-8 col-xl-8\" style=\"height: 85vh\">\n                        <div *ngIf=\"showTimeTrackerTab == 'timeTracker'\" class=\"TimeTrackDashboard\" id=\"TimeTrackDashboard\">\n                            <div *ngIf=\"displayBigScreenTracker; then bigScreen else smallScreen\"></div>\n                            <ng-template #bigScreen>\n                                <div class=\"newTrackerForm\">\n                                    <input \n                                        type=\"text\" \n                                        class=\"form-control\" \n                                        name=\"timeTrackerDescription\" \n                                        id=\"workDescription\"\n                                        [(ngModel)]=\"timeTrackerDescription\"\n                                    >\n                                    <div id=\"ProjectDiv\">\n                                        <div *ngIf=\"timeTrackerProjectSelected; then showSelectedProject else showDropdown\"></div>\n                                        <ng-template #showSelectedProject>\n                                            <div id=\"selectedProject\">\n                                                <button \n                                                    class=\" btn btn-primary\" \n                                                    id=\"removeProject-btn\"\n                                                    (click)=\"removeSelectedProject()\"\n                                                    type=\"button\"\n                                                >{{ selectedProject }} <i class=\"tim-icons icon-simple-remove\"></i>\n                                                </button>\n                                            </div>\n                                        </ng-template>\n                                        <ng-template #showDropdown>\n                                            <div class=\" btn-group dropdown\" id=\"ProjectDropdown\" dropdown>\n                                                <button \n                                                    aria-expanded=\"false\" \n                                                    aria-haspopup=\"true\" \n                                                    class=\" btn btn-primary dropdown-toggle dropdown-toggle\" \n                                                    data-toggle=\"dropdown\" \n                                                    dropdownToggle \n                                                    id=\"project-btn\"\n                                                    type=\"button\"\n                                                >\n                                                    <i class=\"tim-icons icon-book-bookmark\"></i>\n                                                </button>\n                                                <div class=\" dropdown-menu\" *dropdownMenu aria-labelledby=\"dropdownMenuLink\">\n                                                    <div *ngIf=\"timeTrackingProjects.length == 0; then NoProjects else displayProjects\"></div>\n                                                    <ng-template #NoProjects>\n                                                        <p style=\"color: black; text-align: center;\">\n                                                            No Projects found.\n                                                        </p>\n                                                        <div class=\" dropdown-divider\"></div>\n                                                        <button class=\" dropdown-item\" style=\"cursor: pointer;\" (click)=\"setTimeTrackerTab('projects')\">\n                                                            Add Project\n                                                        </button>\n                                                    </ng-template>\n                                                    <ng-template #displayProjects>\n                                                        <div *ngFor=\"let project of timeTrackingProjects\">\n                                                            <button class=\" dropdown-item\" (click)=\"setTimeTrackerProject(project.id, project.project)\">\n                                                                {{ project.project }}\n                                                            </button>\n                                                        </div>\n                                                    </ng-template>\n                                                </div>\n                                            </div>\n                                        </ng-template>\n                                    </div>\n                                    <div id=\"TagDiv\">\n                                        <div *ngIf=\"timeTrackerTagSelected; then showSelectedTag else showTagDropdown\"></div>\n                                        <ng-template #showSelectedTag>\n                                            <div id=\"selectedTag\">\n                                                <button \n                                                    class=\" btn btn-primary\" \n                                                    id=\"removeTag-btn\"\n                                                    (click)=\"removeSelectedTag()\"\n                                                    type=\"button\"\n                                                >{{ selectedTag }} <i class=\"tim-icons icon-simple-remove\"></i>\n                                                </button>\n                                            </div>\n                                        </ng-template>\n                                        <ng-template #showTagDropdown>\n                                            <div class=\"btn-group dropdown\" id=\"TagDropdown\" dropdown>\n                                                <button \n                                                    aria-expanded=\"false\" \n                                                    aria-haspopup=\"true\" \n                                                    class=\"btn btn-primary dropdown-toggle dropdown-toggle\" \n                                                    data-toggle=\"dropdown\" \n                                                    dropdownToggle \n                                                    id=\"tag-btn\"\n                                                    type=\"button\"\n                                                >\n                                                    <i class=\"tim-icons icon-tag\"></i>\n                                                </button>\n                                                <div class=\" dropdown-menu\" *dropdownMenu aria-labelledby=\"dropdownMenuLink\">\n                                                    <div *ngIf=\"timeTrackingTags.length == 0; then NoTags else displayTags\"></div>\n                                                    <ng-template #NoTags>\n                                                        <p style=\"color: black; text-align: center;\">\n                                                            No Tags found.\n                                                        </p>\n                                                        <div class=\" dropdown-divider\"></div>\n                                                        <button class=\" dropdown-item\" style=\"cursor: pointer;\" (click)=\"setTimeTrackerTab('tags')\">\n                                                            Add Tag\n                                                        </button>\n                                                    </ng-template>\n                                                    <ng-template #displayTags>\n                                                        <div *ngFor=\"let tag of timeTrackingTags\">\n                                                            <button class=\" dropdown-item\" (click)=\"setTimeTrackerTag(tag.id, tag.tag)\">\n                                                                {{ tag.tag }}\n                                                            </button>\n                                                        </div>\n                                                    </ng-template>\n                                                </div>\n                                            </div>\n                                        </ng-template>\n                                    </div>\n                                    <div id=\"timer\">\n                                        <p>\n                                            <span id=\"timerHour\">00</span>:<span id=\"timerMinute\">00</span>:<span  id=\"timerSecond\">00</span>\n                                        </p>\n                                    </div>\n                                    <button id=\"startTimer-btn\" class=\"btn btn-success\" (click)=\"startTrackingTimer()\"><i class=\"tim-icons icon-triangle-right-17\"></i></button>\n                                    <button id=\"stopTimer-btn\" class=\"btn btn-danger\" (click)=\"stopTrackingTimer()\"><i class=\"tim-icons icon-simple-remove\"></i></button>\n                                </div>\n                            </ng-template>\n                            <ng-template #smallScreen>\n                                <div class=\"newTrackerFormTop\">\n                                    <input \n                                        type=\"text\" \n                                        class=\"form-control\" \n                                        name=\"timeTrackerDescription\" \n                                        id=\"workDescription\"\n                                        [(ngModel)]=\"timeTrackerDescription\"\n                                    >\n                                    \n                                    <div id=\"timer\">\n                                        <p>\n                                            <span id=\"timerHour\">00</span>:<span id=\"timerMinute\">00</span>:<span  id=\"timerSecond\">00</span>\n                                        </p>\n                                    </div>\n                                </div>\n                                <div class=\"newTrackerFormBottom\">\n                                    <div id=\"ProjectDiv\">\n                                        <div *ngIf=\"timeTrackerProjectSelected; then showSelectedProject else showDropdown\"></div>\n                                        <ng-template #showSelectedProject>\n                                            <div id=\"selectedProject\">\n                                                <p>\n                                                    {{ selectedProject }}\n                                                </p>\n                                            </div>\n                                        </ng-template>\n                                        <ng-template #showDropdown>\n                                            <div class=\" btn-group dropdown\" id=\"ProjectDropdown\" dropdown>\n                                                <button \n                                                    aria-expanded=\"false\" \n                                                    aria-haspopup=\"true\" \n                                                    class=\" btn btn-primary dropdown-toggle dropdown-toggle\" \n                                                    data-toggle=\"dropdown\" \n                                                    dropdownToggle \n                                                    id=\"project-btn\"\n                                                    type=\"button\"\n                                                >\n                                                    <i class=\"tim-icons icon-book-bookmark\"></i>\n                                                </button>\n                                                <div class=\" dropdown-menu\" *dropdownMenu aria-labelledby=\"dropdownMenuLink\">\n                                                    <div *ngIf=\"timeTrackingProjects.length == 0; then NoProjects else displayProjects\"></div>\n                                                    <ng-template #NoProjects>\n                                                        <p style=\"color: black; text-align: center;\">\n                                                            No Projects found.\n                                                        </p>\n                                                        <div class=\" dropdown-divider\"></div>\n                                                        <button class=\" dropdown-item\" style=\"cursor: pointer;\" (click)=\"setTimeTrackerTab('projects')\">\n                                                            Add Project\n                                                        </button>\n                                                    </ng-template>\n                                                    <ng-template #displayProjects>\n                                                        <div *ngFor=\"let project of timeTrackingProjects\">\n                                                            <button class=\" dropdown-item\" (click)=\"setTimeTrackerProject(project.id, project.project)\">\n                                                                {{ project.project }}\n                                                            </button>\n                                                        </div>\n                                                    </ng-template>\n                                                </div>\n                                            </div>\n                                        </ng-template>\n                                    </div>\n                                    <div class=\"btn-group dropdown\" id=\"AddTagDiv\" dropdown>\n                                        <button \n                                            aria-expanded=\"false\" \n                                            aria-haspopup=\"true\" \n                                            class=\"btn btn-primary dropdown-toggle dropdown-toggle\" \n                                            data-toggle=\"dropdown\" \n                                            dropdownToggle \n                                            id=\"tag-btn\"\n                                            type=\"button\"\n                                        >\n                                            <i class=\"tim-icons icon-tag\"></i>\n                                        </button>\n                                        <div class=\" dropdown-menu\" *dropdownMenu aria-labelledby=\"dropdownMenuLink\">\n                                          <a class=\" dropdown-item\" href=\"#\">\n                                            Action\n                                          </a>\n                                          <a class=\" dropdown-item\" href=\"#\">\n                                            Another action\n                                          </a>\n                                          <a class=\" dropdown-item\" href=\"#\">\n                                            Something else here\n                                          </a>\n                                          <div class=\" dropdown-divider\">\n                                          </div>\n                                          <a class=\" dropdown-item\" href=\"#\">\n                                            Separated link\n                                          </a>\n                                        </div>\n                                    </div>\n                                    <button id=\"startTimer-btn\" class=\"btn btn-success\" (click)=\"startTrackingTimer()\"><i class=\"tim-icons icon-triangle-right-17\"></i></button>\n                                    <button id=\"stopTimer-btn\" class=\"btn btn-danger\" (click)=\"stopTrackingTimer()\"><i class=\"tim-icons icon-simple-remove\"></i></button>\n                                </div>\n                            </ng-template>\n                            <div class=\"userTimeTrackerList\" id=\"userTimeTrackerList\">\n                                <div id=\"instanceListHeader\">\n                                    <p id=\"instanceHeader\">\n                                        Description\n                                    </p>\n                                    <p id=\"instanceHeaderDate\">\n                                        Date\n                                    </p>\n                                    <p id=\"instanceHeaderDuration\">\n                                        Duration\n                                    </p>\n                                </div>\n                                <div *ngFor=\"let instance of timeTrackingUserInstances\">\n                                    <div class=\"instanceItem\">\n                                        <p class=\"instanceDescription\">\n                                            {{ instance.description }}\n                                        </p>\n                                        <button class=\"btn btn-success projectDisabledBtn\" disabled>{{ instance.projectName }}</button>\n                                        <button class=\"btn btn-success tagDisabledBtn\" disabled>{{ instance.tagName }}</button>\n                                        <p class=\"instanceDate\">\n                                            {{ instance.date }}\n                                        </p>\n                                        <p class=\"instanceStartEnd\">\n                                            {{ instance.startEnd }}\n                                        </p>\n                                        <p class=\"instanceDuration\">\n                                            {{ instance.duration }}\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div *ngIf=\"showTimeTrackerTab == 'projects'\" class=\"TimeTrackProjects\">\n                            <div class=\"timeTrackerProjectForms\">\n                                <div id=\"filterProjectListForm\">\n                                    <div style=\"width: 100%;\" class=\" btn-group dropdown\" dropdown>\n                                        <button aria-expanded=\"false\" aria-haspopup=\"true\" style=\"width: 100%;\" class=\" btn btn-primary dropdown-toggle dropdown-toggle\" data-toggle=\"dropdown\" dropdownToggle id=\"filter-dropdown\" type=\"button\">\n                                          Filter By\n                                        </button>\n                                        <div class=\" dropdown-menu\" *dropdownMenu aria-labelledby=\"dropdownMenuLink\">\n                                          <button class=\" dropdown-item\">\n                                            A-Z\n                                          </button>\n                                          <button class=\" dropdown-item\">\n                                            Z-A\n                                          </button>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div id=\"SeparatingSpace\">\n\n                                </div>\n                                <div id=\"addNewProjectForm\">\n                                    <input \n                                        type=\"text\" \n                                        class=\"form-control\" \n                                        name=\"newProjectName\" \n                                        id=\"newProjectNameInput\"\n                                        [(ngModel)]=\"newProjectName\"\n                                    >\n                                    <button id=\"addNewProject-btn\" class=\"btn btn-primary\" (click)=\"addNewProject()\">Add</button>\n                                </div>\n                            </div>\n                            <div class=\"timeTrackerProjectList\">\n                                <div id=\"projectListHeader\">\n                                    <p id=\"projectNameHeader\">\n                                        Project Name\n                                    </p>\n                                </div>\n                                <div *ngFor=\"let project of timeTrackingProjects\">\n                                    <div class=\"projectItem\">\n                                        <div class=\"projectNameDiv\">\n                                            <p class=\"projectName\">\n                                                {{ project.project }}\n                                            </p>\n                                        </div>\n                                        <div class=\"spacer\">\n\n                                        </div>\n                                        <button class=\"btn btn-success projectEditBtn\" (click)=\"editProject(project.id)\"><i class=\"tim-icons icon-pencil\"></i></button>\n                                        <button class=\"btn btn-danger projectDeleteBtn\" (click)=\"deleteProject(project.id)\"><i class=\"tim-icons icon-simple-remove\"></i></button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div *ngIf=\"showTimeTrackerTab == 'tags'\" class=\"TimeTrackTags\">\n                            <div class=\"timeTrackerTagForms\">\n                                <div id=\"filterTagListForm\">\n                                    <div style=\"width: 100%;\" class=\" btn-group dropdown\" dropdown>\n                                        <button aria-expanded=\"false\" aria-haspopup=\"true\" style=\"width: 100%;\" class=\" btn btn-primary dropdown-toggle dropdown-toggle\" data-toggle=\"dropdown\" dropdownToggle id=\"filter-dropdown\" type=\"button\">\n                                          Filter By\n                                        </button>\n                                        <div class=\" dropdown-menu\" *dropdownMenu aria-labelledby=\"dropdownMenuLink\">\n                                          <button class=\" dropdown-item\">\n                                            A-Z\n                                          </button>\n                                          <button class=\" dropdown-item\">\n                                            Z-A\n                                          </button>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div id=\"SeparatingSpace\">\n\n                                </div>\n                                <div id=\"addNewTagForm\">\n                                    <input \n                                        type=\"text\" \n                                        class=\"form-control\" \n                                        name=\"newTagName\" \n                                        id=\"newTagNameInput\"\n                                        [(ngModel)]=\"newTagName\"\n                                    >\n                                    <button id=\"addNewTag-btn\" class=\"btn btn-primary\" (click)=\"addNewTag()\">Add</button>\n                                </div>\n                            </div>\n                            <div class=\"timeTrackerTagList\">\n                                <div id=\"tagListHeader\">\n                                    <p id=\"tagNameHeader\">\n                                        Tag Name\n                                    </p>\n                                </div>\n                                <div *ngFor=\"let tag of timeTrackingTags\">\n                                    <div class=\"tagItem\">\n                                        <p class=\"tagName\">\n                                            {{ tag.tag }}\n                                        </p>\n                                        <div class=\"spacer\">\n\n                                        </div>\n                                        <button class=\"btn btn-success tagEditBtn\" (click)=\"editTag(tag.id)\"><i class=\"tim-icons icon-pencil\"></i></button>\n                                        <button class=\"btn btn-danger tagDeleteBtn\" (click)=\"deleteTag(tag.id)\"><i class=\"tim-icons icon-simple-remove\"></i></button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-4 col-xl-4\" style=\"height: 85vh\">\n                        <div id=\"timeTrackerOptions\">\n                            <button \n                                class=\"sidebar-timeTrackerOption underline\"\n                                style=\"color: white;\"\n                                (click)=\"setTimeTrackerTab('timeTracker')\"\n                            >\n                                <!-- <i class=\"tim-icons icon-minimal-down\"></i>  Time Tracker -->\n                                <span>Time Tracker</span><svg viewBox=\"0 0 13 20\"><polyline points=\"0.5 19.5 3 19.5 12.5 10 3 0.5\" /></svg>\n                            </button>\n                            <button \n                                class=\"sidebar-timeTrackerOption underline\"\n                                style=\"color: white;\"\n                                (click)=\"setTimeTrackerTab('projects')\"\n                            >\n                                <!-- <i class=\"tim-icons icon-minimal-down\"></i>  Projects -->\n                                <span>Projects</span><svg viewBox=\"0 0 13 20\"><polyline points=\"0.5 19.5 3 19.5 12.5 10 3 0.5\" /></svg>\n                            </button>\n                            <button \n                                class=\"sidebar-timeTrackerOption underline\"\n                                style=\"color: white;\"\n                                (click)=\"setTimeTrackerTab('tags')\"\n                            >\n                                <!-- <i class=\"tim-icons icon-minimal-down\"></i>  Tags -->\n                                <span>Tags</span><svg viewBox=\"0 0 13 20\"><polyline points=\"0.5 19.5 3 19.5 12.5 10 3 0.5\" /></svg>\n                            </button>\n                            <!-- <button \n                                class=\"sidebar-timeTrackerOption\"\n                                (click)=\"setTimeTrackerTab('dashboard')\"\n                            >\n                                <i class=\"tim-icons icon-minimal-down\"></i>  Dashboard\n                            </button> -->\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </tab>\n        <tab>\n            <ng-template tabHeading>\n                <i class=\"tim-icons icon-components\"> </i> Kanban Boards\n            </ng-template>\n            <div class=\"board_component\">\n                <app-list *ngFor=\"let list of lists\" [list]=\"list\" [cardStore]=\"cardStore\"></app-list>\n            </div>\n        </tab>\n    </tabset>\n</div>\n\n<div *ngIf=\"displayFormModal ? formModal.show() : formModal.hide()\" ></div>\n<div \n    aria-hidden=\"true\"\n    aria-labelledby=\"myModalLabel\"\n    bsModal\n    class=\"modal fade modal-black\"\n    #formModal=\"bs-modal\"\n    id=\"formModal\"\n    role=\"dialog\"\n    tabindex=\"-1\"\n    style=\"margin-left: 15%\"\n    >\n    <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n        <div class=\"modal-header justify-content-center\">\n        <button\n            aria-hidden=\"true\"\n            class=\"close\"\n            data-dismiss=\"modal\"\n            (click)=\"hideDisplayFormModal()\"\n            type=\"button\"\n        >\n            <i class=\"tim-icons icon-simple-remove text-white\"> </i>\n        </button>\n        <div class=\"text-muted text-center ml-auto mr-auto\" *ngIf=\"showInviteModal\">\n            <h3 class=\"mb-0\">Enter details of invitee:</h3>\n        </div>\n        <div class=\"text-muted text-center ml-auto mr-auto\" *ngIf=\"showAddRoomModal\">\n            <h3 class=\"mb-0\">Enter details of new room:</h3>\n        </div>\n        </div>\n        <div class=\"modal-body\">\n            <form role=\"form\" *ngIf=\"showVRCodeModal\">\n                <div *ngIf=\"sendFormModalAlert\">\n                    <alert class=\"alert-with-icon\" [type]=\"'primary alert-with-icon'\">\n                        <span class=\" tim-icons icon-trophy\" data-notify=\"icon\">\n                        </span>\n                        <span>\n                            {{ formModalAlertMsg }}\n                        </span>\n                    </alert>\n                    </div>\n                <div class=\"form-group mb-3\">\n                    <h4>\n                        Your VR room code is: <b>{{ VR_RoomCode }}</b>\n                    </h4>\n                </div>\n                <div class=\"text-center\">\n                    <button \n                        class=\"btn btn-success my-4\" \n                        type=\"button\"\n                        (click)=\"hideDisplayFormModal()\"\n                    >\n                        Close\n                    </button>\n                </div>\n            </form>\n            <form role=\"form\" *ngIf=\"showInviteModal\">\n                <div *ngIf=\"sendFormModalAlert\">\n                    <alert class=\"alert-with-icon\" [type]=\"'primary alert-with-icon'\">\n                        <span class=\" tim-icons icon-trophy\" data-notify=\"icon\">\n                        </span>\n                        <span>\n                            {{ formModalAlertMsg }}\n                        </span>\n                    </alert>\n                    </div>\n                <div class=\"form-group mb-3\">\n                    <div class=\"input-group input-group-alternative\" [ngClass]=\"{'input-group-focus':focus6===true}\">\n                        <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">\n                            <i class=\"tim-icons icon-email-85\"> </i>\n                        </span>\n                        </div>\n                        <input\n                            class=\"form-control\"\n                            placeholder=\"Name\"\n                            name=\"sendInviteToName\"\n                            [(ngModel)]=\"sendInviteToName\"\n                            type=\"text\"\n                            (focus)=\"focus6=true\" \n                            (blur)=\"focus6=false\"\n                        />\n                    </div>\n                </div>\n                <div class=\"form-group mb-3\">\n                    <div class=\"input-group input-group-alternative\" [ngClass]=\"{'input-group-focus':focus7===true}\">\n                        <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">\n                            <i class=\"tim-icons icon-email-85\"> </i>\n                        </span>\n                        </div>\n                        <input\n                            class=\"form-control\"\n                            placeholder=\"Email\"\n                            name=\"sendInviteToEmail\"\n                            [(ngModel)]=\"sendInviteToEmail\"\n                            type=\"email\"\n                            (focus)=\"focus7=true\" \n                            (blur)=\"focus7=false\"\n                        />\n                    </div>\n                </div>\n                <div class=\"text-center\">\n                    <button \n                        class=\"btn btn-success my-4\" \n                        type=\"button\"\n                        (click)=\"sendOfficeInvite()\"\n                    >\n                        Submit\n                    </button>\n                </div>\n            </form>\n            <form role=\"form\" *ngIf=\"showAddRoomModal\">\n                <div *ngIf=\"sendFormModalAlert\">\n                    <alert class=\"alert-with-icon\" [type]=\"'primary alert-with-icon'\">\n                        <span class=\" tim-icons icon-trophy\" data-notify=\"icon\">\n                        </span>\n                        <span>\n                            {{ formModalAlertMsg }}\n                        </span>\n                    </alert>\n                    </div>\n                <div class=\"form-group mb-3\">\n                    <div class=\"input-group input-group-alternative\" [ngClass]=\"{'input-group-focus':focus6===true}\">\n                        <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">\n                            <i class=\"tim-icons icon-email-85\"> </i>\n                        </span>\n                        </div>\n                        <input\n                            class=\"form-control\"\n                            placeholder=\"Room Name\"\n                            name=\"newRoomName\"\n                            [(ngModel)]=\"newRoomName\"\n                            type=\"text\"\n                            (focus)=\"focus6=true\" \n                            (blur)=\"focus6=false\"\n                        />\n                    </div>\n                </div>\n                <div class=\"form-group mb-3\">\n                    <label for=\"roomTypeDropdown\">Room Type</label>\n                    <select \n                        class=\"form-control\"   \n                        id=\"roomTypeDropdown\"\n                        name=\"newRoomType\"\n                        [(ngModel)]=\"newRoomType\"\n                    >\n                    <option value=\"Normal\" selected>Normal</option>\n                    <option value=\"Private\">Private</option>\n                    <option value=\"VR\">VR</option>\n                    </select>\n                </div>\n                <div class=\"text-center\">\n                    <button \n                        class=\"btn btn-success my-4\" \n                        type=\"button\"\n                        (click)=\"addRoom()\"\n                    >\n                        Add Room\n                    </button>\n                </div>\n            </form>\n        </div>\n    </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, location, document) {
        this.renderer = renderer;
        this.location = location;
    }
    AppComponent.prototype.onWindowScroll = function (e) {
        if (window.pageYOffset > 100) {
            var element = document.getElementById("navbar-top");
            if (element) {
                element.classList.remove("navbar-transparent");
                element.classList.add("bg-danger");
            }
        }
        else {
            var element = document.getElementById("navbar-top");
            if (element) {
                element.classList.add("navbar-transparent");
                element.classList.remove("bg-danger");
            }
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        this.onWindowScroll(event);
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] }
    ]; };
    AppComponent.propDecorators = {
        onWindowScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ["window:scroll", ["$event"],] }]
    };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-root",
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], Object])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "V/Tm":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/index/index.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\n<nav\n  class=\"navbar navbar-expand-lg fixed-top navbar-transparent\"\n  color-on-scroll=\"100\"\n  id=\"navbar-top\"\n>\n  <div class=\"container\">\n    <div class=\"navbar-translate\">\n      <a\n        class=\"navbar-brand\"\n        placement=\"bottom\"\n        [routerLink]=\"['/home']\"\n        target=\"_blank\"\n        tooltip=\"Audio Suite by Project Pegasus\"\n        id=\"audio-suite-nav-title\"\n      >\n        <span>Audio</span> Suite\n      </a>\n      <button\n        aria-controls=\"navigation-index\"\n        aria-label=\"Toggle navigation\"\n        class=\"navbar-toggler navbar-toggler\"\n        [attr.aria-expanded]=\"!isCollapsed\"\n        (click)=\"isCollapsed = !isCollapsed\"\n        id=\"navigation\"\n        type=\"button\"\n      >\n        <span class=\"navbar-toggler-bar bar1\"> </span>\n        <span class=\"navbar-toggler-bar bar2\"> </span>\n        <span class=\"navbar-toggler-bar bar3\"> </span>\n      </button>\n    </div>\n    <div\n      class=\"navbar-collapse justify-content-end\"\n      [collapse]=\"isCollapsed\"\n      id=\"navigation\"\n    >\n      <div class=\"navbar-collapse-header\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\"><a> BLK• </a></div>\n          <div class=\"col-6 collapse-close text-right\">\n            <button\n              aria-controls=\"navigation-index\"\n              aria-label=\"Toggle navigation\"\n              class=\"navbar-toggler\"\n              [attr.aria-expanded]=\"!isCollapsed\"\n              (click)=\"isCollapsed = !isCollapsed\"\n              id=\"navigation\"\n              type=\"button\"\n            >\n              <i class=\"tim-icons icon-simple-remove\"> </i>\n            </button>\n          </div>\n        </div>\n      </div>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"#\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Twitter\"\n          >\n            <i class=\"fab fa-twitter\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Twitter</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"#\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Like us on Facebook\"\n          >\n            <i class=\"fab fa-facebook-square\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Facebook</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"#\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Instagram\"\n          >\n            <i class=\"fab fa-instagram\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Instagram</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            [routerLink]=\"['/login']\"\n          >\n            Login\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link btn btn-default d-none d-lg-block\"\n            href=\"#download-section1\"\n          >\n            <i class=\"tim-icons icon-cloud-download-93\"> </i> Download\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"wrapper\">\n  <div class=\"page-header header-filter\">\n    <div class=\"squares square1\"></div>\n    <div class=\"squares square2\"></div>\n    <div class=\"squares square3\"></div>\n    <div class=\"squares square4\"></div>\n    <div class=\"squares square5\"></div>\n    <div class=\"squares square6\"></div>\n    <div class=\"squares square7\"></div>\n    <div class=\"container\">\n      <div class=\"content-center brand\">\n        <h1 class=\"h1-seo\">Audio Suite</h1>\n        <h3>\n          A beautiful Design System for Bootstrap 4 and Angular. It's Free and\n          Open Source.\n        </h3>\n      </div>\n    </div>\n  </div>\n  <!-- <div class=\"main\">\n    <div class=\"section section-basic\" id=\"basic-elements\">\n      <img class=\"path\" src=\"assets/img/path1.png\" />\n\n      <div class=\"container\">\n        <h2 class=\"title\">Basic Elements</h2>\n        <h3>Buttons</h3>\n        <p class=\"category\">Pick your style</p>\n        <div class=\"row\">\n          <div class=\"col-md-10\">\n            <button class=\"btn btn-primary mr-1\" type=\"button\">Default</button>\n            <button class=\"btn btn-primary btn-round mr-1\" type=\"button\">\n              Round\n            </button>\n            <button class=\"btn btn-primary btn-round mr-1\" type=\"button\">\n              <i class=\"tim-icons icon-heart-2\"> </i> With Icon\n            </button>\n            <button\n              class=\"btn btn-primary btn-icon btn-round mr-1\"\n              type=\"button\"\n            >\n              <i class=\"tim-icons icon-heart-2\"> </i>\n            </button>\n            <button class=\"btn btn-primary btn-simple btn-round\" type=\"button\">\n              Simple\n            </button>\n          </div>\n        </div>\n        <p class=\"category\">Pick your size</p>\n        <div class=\"row\">\n          <div class=\"col-md-10\">\n            <button class=\"btn btn-primary btn-sm mr-1\">Small</button>\n            <button class=\"btn btn-primary mr-1\">Regular</button>\n            <button class=\"btn btn-primary btn-lg\">Large</button>\n          </div>\n        </div>\n        <p class=\"category\">Pick your color</p>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <button class=\"btn mr-1\">Default</button>\n            <button class=\"btn btn-primary mr-1\">Primary</button>\n            <button class=\"btn btn-info mr-1\">Info</button>\n            <button class=\"btn btn-success mr-1\">Success</button>\n            <button class=\"btn btn-warning mr-1\">Warning</button>\n            <button class=\"btn btn-danger mr-1\">Danger</button>\n            <button class=\"btn btn-neutral\">Neutral</button>\n          </div>\n        </div>\n        <br />\n\n        <h3>Links</h3>\n        <div class=\"row\">\n          <div class=\"col-md-8\">\n            <button class=\"btn btn-link mr-1\">Default</button>\n            <button class=\"btn btn-link btn-primary mr-1\">Primary</button>\n            <button class=\"btn btn-link btn-info mr-1\">Info</button>\n            <button class=\"btn btn-link btn-success mr-1\">Success</button>\n            <button class=\"btn btn-link btn-warning mr-1\">Warning</button>\n            <button class=\"btn btn-link btn-danger\">Danger</button>\n          </div>\n        </div>\n        <div class=\"space-70\"></div>\n        <div id=\"inputs\">\n          <h3>Inputs</h3>\n          <p class=\"category\">Form Controls</p>\n          <div class=\"row\">\n            <div class=\"col-sm-6 col-lg-3\">\n              <div class=\"form-group\">\n                <input\n                  class=\"form-control\"\n                  placeholder=\"Regular\"\n                  type=\"text\"\n                  value=\"\"\n                />\n              </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n              <div class=\"form-group has-success\">\n                <input\n                  class=\"form-control form-control-success\"\n                  type=\"text\"\n                  value=\"Success\"\n                />\n              </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n              <div class=\"form-group has-danger\">\n                <input\n                  class=\"form-control form-control-danger\"\n                  type=\"email\"\n                  value=\"Error Input\"\n                />\n              </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n              <div\n                class=\"input-group\"\n                [ngClass]=\"{ 'input-group-focus': focus === true }\"\n              >\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">\n                    <i class=\"fa fa-user\"> </i>\n                  </span>\n                </div>\n                <input\n                  class=\"form-control\"\n                  placeholder=\"Left Font Awesome Icon\"\n                  type=\"text\"\n                  (focus)=\"focus = true\"\n                  (blur)=\"focus = false\"\n                />\n              </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n              <div class=\"input-group\">\n                <input\n                  class=\"form-control\"\n                  placeholder=\"Right Nucleo Icon\"\n                  type=\"text\"\n                />\n\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\">\n                    <i class=\"tim-icons icon-lock-circle\"> </i>\n                  </span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"space-70\"></div>\n        <div class=\"row\" id=\"checkRadios\">\n          <div class=\"col-sm-6 col-lg-3\">\n            <p class=\"category\">Checkboxes</p>\n            <div class=\"form-check\">\n              <label class=\"form-check-label\">\n                <input class=\"form-check-input\" type=\"checkbox\" />\n\n                <span class=\"form-check-sign\"> </span> Unchecked\n              </label>\n            </div>\n            <div class=\"form-check\">\n              <label class=\"form-check-label\">\n                <input\n                  checked=\"checked\"\n                  class=\"form-check-input\"\n                  type=\"checkbox\"\n                />\n\n                <span class=\"form-check-sign\"> </span> Checked\n              </label>\n            </div>\n            <div class=\"form-check disabled\">\n              <label class=\"form-check-label\">\n                <input\n                  class=\"form-check-input\"\n                  disabled=\"disabled\"\n                  type=\"checkbox\"\n                />\n\n                <span class=\"form-check-sign\"> </span> Disabled Unchecked\n              </label>\n            </div>\n            <div class=\"form-check disabled\">\n              <label class=\"form-check-label\">\n                <input\n                  checked=\"checked\"\n                  class=\"form-check-input\"\n                  disabled=\"disabled\"\n                  type=\"checkbox\"\n                />\n\n                <span class=\"form-check-sign\"> </span> Disabled Checked\n              </label>\n            </div>\n          </div>\n          <div class=\"col-sm-6 col-lg-3\">\n            <p class=\"category\">Radios</p>\n            <div class=\"form-check form-check-radio\">\n              <label class=\"form-check-label\">\n                <input\n                  class=\"form-check-input\"\n                  id=\"exampleRadios1\"\n                  name=\"exampleRadios\"\n                  type=\"radio\"\n                  value=\"option1\"\n                />\n\n                <span class=\"form-check-sign\"> </span> Radio is off\n              </label>\n            </div>\n            <div class=\"form-check form-check-radio\">\n              <label class=\"form-check-label\">\n                <input\n                  checked=\"checked\"\n                  class=\"form-check-input\"\n                  id=\"exampleRadios1\"\n                  name=\"exampleRadios\"\n                  type=\"radio\"\n                  value=\"option2\"\n                />\n\n                <span class=\"form-check-sign\"> </span> Radio is on\n              </label>\n            </div>\n            <div class=\"form-check form-check-radio disabled\">\n              <label class=\"form-check-label\">\n                <input\n                  class=\"form-check-input\"\n                  disabled=\"disabled\"\n                  id=\"exampleRadios2\"\n                  name=\"exampleRadios1\"\n                  type=\"radio\"\n                  value=\"option3\"\n                />\n\n                <span class=\"form-check-sign\"> </span> Disabled radio is off\n              </label>\n            </div>\n            <div class=\"form-check form-check-radio disabled\">\n              <label class=\"form-check-label\">\n                <input\n                  checked=\"checked\"\n                  class=\"form-check-input\"\n                  disabled=\"disabled\"\n                  id=\"exampleRadios2\"\n                  name=\"exampleRadios1\"\n                  type=\"radio\"\n                  value=\"option4\"\n                />\n\n                <span class=\"form-check-sign\"> </span> Disabled radio is on\n              </label>\n            </div>\n          </div>\n          <div class=\"col-sm-6 col-lg-3\">\n            <p class=\"category\">Toggle Buttons</p>\n            <bSwitch\n              [switch-on-color]=\"'danger'\"\n              [switch-off-color]=\"'danger'\"\n              [switch-off-text]=\"' '\"\n              [switch-on-text]=\"' '\"\n            >\n            </bSwitch>\n            <br />\n            <bSwitch [switch-on-color]=\"'danger'\" [switch-off-color]=\"'danger'\">\n            </bSwitch>\n          </div>\n          <div class=\"col-sm-6 col-lg-3\">\n            <p class=\"category\">Sliders</p>\n            <div class=\"slider\" id=\"sliderRegular\"></div>\n            <br />\n\n            <div class=\"slider slider-danger\" id=\"sliderDouble\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"section section-navbars\">\n      <img class=\"path\" src=\"assets/img/path3.png\" />\n\n      <div class=\"container\" id=\"menu-dropdown\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <h4>Menu</h4>\n            <nav class=\"navbar navbar-expand-lg bg-primary\">\n              <div class=\"container\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\"> Menu </a>\n                <button\n                  aria-controls=\"navbarSupportedContent\"\n                  aria-label=\"Toggle navigation\"\n                  class=\"navbar-toggler\"\n                  [attr.aria-expanded]=\"!isCollapsed\"\n                  (click)=\"isCollapsed = !isCollapsed\"\n                  id=\"example-navbar\"\n                  type=\"button\"\n                >\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\n                </button>\n                <div\n                  class=\"navbar-collapse\"\n                  [isAnimated]=\"true\"\n                  [collapse]=\"isCollapsed\"\n                  id=\"example-navbar\"\n                >\n                  <ul class=\"navbar-nav\">\n                    <li class=\"nav-item active\">\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">\n                        <p>Link</p>\n                      </a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">\n                        <p>Link</p>\n                      </a>\n                    </li>\n                    <li class=\"nav-item dropdown\" dropdown>\n                      <a\n                        aria-expanded=\"false\"\n                        aria-haspopup=\"true\"\n                        class=\"nav-link dropdown-toggle dropdown-toggle\"\n                        data-toggle=\"dropdown\"\n                        dropdownToggle\n                        href=\"javascript:void(0)\"\n                        id=\"navbarDropdownMenuLink\"\n                      >\n                        <p>Dropdown</p>\n                      </a>\n                      <div\n                        aria-labelledby=\"navbarDropdownMenuLink\"\n                        class=\"dropdown-menu\"\n                        *dropdownMenu\n                      >\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                          Action\n                        </a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                          Another action\n                        </a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                          Something else here\n                        </a>\n                      </div>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </nav>\n          </div>\n          <div class=\"col-md-6\">\n            <h4>Menu with Icons</h4>\n            <nav class=\"navbar navbar-expand-lg bg-info\">\n              <div class=\"container\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\"> Icons </a>\n                <button\n                  aria-controls=\"navbarSupportedContent\"\n                  aria-label=\"Toggle navigation\"\n                  class=\"navbar-toggler\"\n                  [attr.aria-expanded]=\"!isCollapsed\"\n                  (click)=\"isCollapsed = !isCollapsed\"\n                  id=\"example-navbar-icons\"\n                  type=\"button\"\n                >\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\n                </button>\n                <div\n                  class=\"navbar-collapse\"\n                  [isAnimated]=\"true\"\n                  [collapse]=\"isCollapsed\"\n                  id=\"example-navbar-icons\"\n                >\n                  <ul class=\"navbar-nav ml-auto\">\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">\n                        <i aria-hidden=\"true\" class=\"tim-icons icon-send\"> </i>\n                      </a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">\n                        <i aria-hidden=\"true\" class=\"tim-icons icon-single-02\">\n                        </i>\n                      </a>\n                    </li>\n                    <li class=\"nav-item dropdown\" dropdown>\n                      <a\n                        class=\"nav-link dropdown-toggle dropdown-toggle\"\n                        data-toggle=\"dropdown\"\n                        dropdownToggle\n                        href=\"javascript:void(0)\"\n                        id=\"navbarDropdownMenuLink\"\n                      >\n                        <i\n                          aria-hidden=\"true\"\n                          class=\"tim-icons icon-settings-gear-63\"\n                        >\n                        </i>\n                      </a>\n                      <div\n                        aria-labelledby=\"navbarDropdownMenuLink\"\n                        class=\"dropdown-menu dropdown-menu-right\"\n                        *dropdownMenu\n                      >\n                        <a class=\"dropdown-header\"> Dropdown header </a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                          Action\n                        </a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                          Another action\n                        </a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                          Something else here\n                        </a>\n                        <div class=\"divider\"></div>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                          Separated link\n                        </a>\n                        <div class=\"divider\"></div>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                          One more separated link\n                        </a>\n                      </div>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </nav>\n          </div>\n        </div>\n        <h3 class=\"title mb-3\">Navigation</h3>\n      </div>\n      <div id=\"navbar\">\n        <div class=\"navigation-example\">\n          <nav class=\"navbar navbar-expand-lg bg-primary\">\n            <div class=\"container\">\n              <div class=\"navbar-translate\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">\n                  Primary color\n                </a>\n                <button\n                  aria-controls=\"navbarSupportedContent\"\n                  aria-label=\"Toggle navigation\"\n                  class=\"navbar-toggler\"\n                  [attr.aria-expanded]=\"!isCollapsed\"\n                  (click)=\"isCollapsed = !isCollapsed\"\n                  id=\"example-navbar-primary\"\n                  type=\"button\"\n                >\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\n                </button>\n              </div>\n              <div\n                class=\"navbar-collapse\"\n                [isAnimated]=\"true\"\n                [collapse]=\"isCollapsed\"\n                id=\"example-navbar-primary\"\n              >\n                <ul class=\"navbar-nav ml-auto\">\n                  <li class=\"nav-item active\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"tim-icons icon-world\"> </i> Discover\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"tim-icons icon-single-02\"> </i> Profile\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"tim-icons icon-settings-gear-63\"> </i> Settings\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </nav>\n          <nav class=\"navbar navbar-expand-lg bg-info\">\n            <div class=\"container\">\n              <div class=\"navbar-translate\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">\n                  Info Color\n                </a>\n                <button\n                  aria-controls=\"navbarSupportedContent\"\n                  aria-label=\"Toggle navigation\"\n                  class=\"navbar-toggler\"\n                  [attr.aria-expanded]=\"!isCollapsed\"\n                  (click)=\"isCollapsed = !isCollapsed\"\n                  id=\"example-navbar-info\"\n                  type=\"button\"\n                >\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\n                </button>\n              </div>\n              <div\n                class=\"navbar-collapse\"\n                [isAnimated]=\"true\"\n                [collapse]=\"isCollapsed\"\n                id=\"example-navbar-info\"\n              >\n                <ul class=\"navbar-nav ml-auto\">\n                  <li class=\"nav-item active\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\"> Discover </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\"> Profile </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\"> Settings </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </nav>\n          <nav class=\"navbar navbar-expand-lg bg-success\">\n            <div class=\"container\">\n              <div class=\"navbar-translate\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">\n                  Success Color\n                </a>\n                <button\n                  aria-controls=\"navbarSupportedContent\"\n                  aria-label=\"Toggle navigation\"\n                  class=\"navbar-toggler\"\n                  [attr.aria-expanded]=\"!isCollapsed\"\n                  (click)=\"isCollapsed = !isCollapsed\"\n                  id=\"example-navbar-success\"\n                  type=\"button\"\n                >\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\n                </button>\n              </div>\n              <div\n                class=\"navbar-collapse\"\n                [isAnimated]=\"true\"\n                [collapse]=\"isCollapsed\"\n                id=\"example-navbar-success\"\n              >\n                <ul class=\"navbar-nav ml-auto\">\n                  <li class=\"nav-item active\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"tim-icons icon-world\"> </i>\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"tim-icons icon-single-02\"> </i>\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"tim-icons icon-settings-gear-63\"> </i>\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </nav>\n          <nav class=\"navbar navbar-expand-lg bg-warning\">\n            <div class=\"container\">\n              <div class=\"navbar-translate\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">\n                  Warning Color\n                </a>\n                <button\n                  aria-controls=\"navbarSupportedContent\"\n                  aria-label=\"Toggle navigation\"\n                  class=\"navbar-toggler\"\n                  [attr.aria-expanded]=\"!isCollapsed\"\n                  (click)=\"isCollapsed = !isCollapsed\"\n                  id=\"example-navbar-warning\"\n                  type=\"button\"\n                >\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\n                </button>\n              </div>\n              <div\n                class=\"navbar-collapse\"\n                [isAnimated]=\"true\"\n                [collapse]=\"isCollapsed\"\n                id=\"example-navbar-warning\"\n              >\n                <ul class=\"navbar-nav ml-auto\">\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-facebook-square\"> </i>\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-twitter\"> </i>\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-google-plus\"> </i>\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-instagram\"> </i>\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </nav>\n          <nav class=\"navbar navbar-expand-lg bg-danger\">\n            <div class=\"container\">\n              <div class=\"navbar-translate\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">\n                  Danger Color\n                </a>\n                <button\n                  aria-controls=\"navbarSupportedContent\"\n                  aria-label=\"Toggle navigation\"\n                  class=\"navbar-toggler\"\n                  [attr.aria-expanded]=\"!isCollapsed\"\n                  (click)=\"isCollapsed = !isCollapsed\"\n                  id=\"example-navbar-danger\"\n                  type=\"button\"\n                >\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\n                </button>\n              </div>\n              <div\n                class=\"navbar-collapse\"\n                [isAnimated]=\"true\"\n                [collapse]=\"isCollapsed\"\n                id=\"example-navbar-danger\"\n              >\n                <ul class=\"navbar-nav ml-auto\">\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-facebook-square\"> </i> Share\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-twitter\"> </i> Tweet\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-pinterest\"> </i> Pin\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </nav>\n          <nav class=\"navbar navbar-expand-lg navbar-transparent\">\n            <div class=\"container\">\n              <div class=\"navbar-translate\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">\n                  Transparent\n                </a>\n                <button\n                  aria-controls=\"navbarSupportedContent\"\n                  aria-label=\"Toggle navigation\"\n                  class=\"navbar-toggler\"\n                  [attr.aria-expanded]=\"!isCollapsed\"\n                  (click)=\"isCollapsed = !isCollapsed\"\n                  id=\"example-navbar-transparent\"\n                  type=\"button\"\n                >\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\n                </button>\n              </div>\n              <div\n                class=\"navbar-collapse\"\n                [isAnimated]=\"true\"\n                [collapse]=\"isCollapsed\"\n                id=\"example-navbar-transparent\"\n              >\n                <ul class=\"navbar-nav ml-auto\">\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-facebook-square\"> </i> Facebook\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-twitter\"> </i> Twitter\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-instagram\"> </i> Instagram\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </nav>\n        </div>\n      </div>\n    </div>\n    <div class=\"section section-tabs\">\n      <div class=\"container\">\n        <div class=\"title\"><h3 class=\"mb-3\">Navigation Tabs</h3></div>\n        <div class=\"row\">\n          <div class=\"col-md-10 ml-auto col-xl-6 mr-auto\">\n            <div class=\"mb-3\">\n              <small class=\"text-uppercase font-weight-bold\">\n                With icons\n              </small>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <tabset class=\"nav-tabs-danger\">\n                  <tab>\n                    <ng-template tabHeading>\n                      <i class=\"tim-icons icon-spaceship\"> </i> Profile\n                    </ng-template>\n                    <p>\n                      Collaboratively administrate empowered markets via\n                      plug-and-play networks. Dynamically procrastinate B2C\n                      users after installed base benefits. <br />\n\n                      <br />\n\n                      Dramatically visualize customer directed convergence\n                      without revolutionary ROI.\n                    </p>\n                  </tab>\n                  <tab>\n                    <ng-template tabHeading>\n                      <i class=\"tim-icons icon-settings-gear-63\"> </i> Settings\n                    </ng-template>\n                    <p>\n                      Completely synergize resource taxing relationships via\n                      premier niche markets. Professionally cultivate one-to-one\n                      customer service with robust ideas. <br />\n\n                      <br />\n\n                      Dynamically innovate resource-leveling customer service\n                      for state of the art customer service.\n                    </p>\n                  </tab>\n                  <tab>\n                    <ng-template tabHeading>\n                      <i class=\"tim-icons icon-bag-16\"> </i> Options\n                    </ng-template>\n                    <p>\n                      Efficiently unleash cross-media information without\n                      cross-media value. Quickly maximize timely deliverables\n                      for real-time schemas. <br />\n\n                      <br />\n\n                      Dramatically maintain clicks-and-mortar solutions without\n                      functional solutions.\n                    </p>\n                  </tab>\n                </tabset>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-10 ml-auto col-xl-6 mr-auto\">\n            <div class=\"mb-3\">\n              <small class=\"text-uppercase font-weight-bold\"> With text </small>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <tabset class=\"nav-tabs-danger\">\n                  <tab heading=\"Profile\">\n                    <p>\n                      These cases are perfectly simple and easy to distinguish.\n                      In a free hour, when our power of choice is untrammelled\n                      and when nothing prevents our being able to do what we\n                      like best, every pleasure is to be welcomed and every pain\n                      avoided. <br />\n\n                      But in certain circumstances and owing to the claims of\n                      duty or the obligations of business it will frequently\n                      occur that pleasures\n                    </p>\n                  </tab>\n                  <tab heading=\"Settings\">\n                    <p>\n                      I will be the leader of a company that ends up being worth\n                      billions of dollars, because I got the answers. I\n                      understand culture. I am the nucleus. I think thatâs a\n                      responsibility that I have, to push possibilities, to show\n                      people, this is the level that things could be at. I think\n                      thatâs a responsibility that I have, to push\n                      possibilities, to show people, this is the level that\n                      things could be at.\n                    </p>\n                  </tab>\n                  <tab heading=\"Options\">\n                    <p>\n                      I think thatâs a responsibility that I have, to push\n                      possibilities, to show people, this is the level that\n                      things could be at. So when you get something that has the\n                      name Kanye West on it, itâs supposed to be pushing the\n                      furthest possibilities. I will be the leader of a company\n                      that ends up being worth billions of dollars, because I\n                      got the answers. I understand culture. I am the nucleus.\n                    </p>\n                  </tab>\n                </tabset>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"section section-pagination\">\n      <img class=\"path\" src=\"assets/img/path4.png\" />\n\n      <img class=\"path path1\" src=\"assets/img/path5.png\" />\n\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <h3 class=\"mb-4\">Progress Bars</h3>\n            <div class=\"progress-container\">\n              <span class=\"progress-badge\"> Default </span>\n              <progressbar [value]=\"25\">\n                <span class=\"progress-value\"> 25% </span>\n              </progressbar>\n            </div>\n            <div class=\"progress-container progress-danger\">\n              <span class=\"progress-badge\"> Danger </span>\n              <progressbar class=\"progress-bar-danger\" [value]=\"60\">\n                <span class=\"progress-value\"> 60% </span>\n              </progressbar>\n            </div>\n            <br />\n\n            <h3 class=\"mb-5\">Navigation Pills</h3>\n            <tabset type=\"pills\" class=\"nav-pills-danger nav-pills-icons\">\n              <tab>\n                <ng-template tabHeading>\n                  <i class=\"tim-icons icon-atom\"> </i> Home\n                </ng-template>\n              </tab>\n              <tab>\n                <ng-template tabHeading>\n                  <i class=\"tim-icons icon-chat-33\"> </i> Messages\n                </ng-template>\n              </tab>\n              <tab>\n                <ng-template tabHeading>\n                  <i class=\"tim-icons icon-settings-gear-63\"> </i> Settings\n                </ng-template>\n              </tab>\n            </tabset>\n          </div>\n          <div class=\"col-md-6\">\n            <h3 class=\"mb-5\">Pagination</h3>\n            <pagination\n              class=\"pagination-danger\"\n              [(ngModel)]=\"pagination1\"\n              [totalItems]=\"30\"\n            >\n            </pagination>\n            <pagination\n              class=\"pagination-danger\"\n              [boundaryLinks]=\"true\"\n              [totalItems]=\"45\"\n              [ngModel]=\"pagination\"\n              previousText=\"&lsaquo;\"\n              nextText=\"&rsaquo;\"\n              firstText=\"&laquo;\"\n              lastText=\"&raquo;\"\n            >\n            </pagination>\n            <br />\n\n            <h3 class=\"mb-5\">Labels</h3>\n            <span class=\"badge badge-default mr-1\"> Default </span>\n            <span class=\"badge badge-primary mr-1\"> Primary </span>\n            <span class=\"badge badge-success mr-1\"> Success </span>\n            <span class=\"badge badge-info mr-1\"> Info </span>\n            <span class=\"badge badge-warning mr-1\"> Warning </span>\n            <span class=\"badge badge-danger mr-1\"> Danger </span>\n            <span class=\"badge badge-neutral\"> Neutral </span>\n          </div>\n        </div>\n        <br />\n      </div>\n    </div>\n    <div class=\"section section-notifications\" id=\"notifications\">\n      <div class=\"container\">\n        <div class=\"space\"></div>\n        <h3>Notifications</h3>\n        <alert\n          class=\"alert-with-icon\"\n          [type]=\"'primary alert-with-icon'\"\n          [dismissible]=\"true\"\n        >\n          <span class=\"tim-icons icon-coins\" data-notify=\"icon\"> </span>\n          <span>\n            <b> Congrats! - </b> This is a regular notification made with\n            \".alert-primary\"\n          </span>\n        </alert>\n        <alert\n          class=\"alert-with-icon\"\n          [type]=\"'info alert-with-icon'\"\n          [dismissible]=\"true\"\n        >\n          <span class=\"tim-icons icon-trophy\" data-notify=\"icon\"> </span>\n          <span>\n            <b> Heads up! - </b> This is a regular notification made with\n            \".alert-info\"\n          </span>\n        </alert>\n        <alert\n          class=\"alert-with-icon\"\n          [type]=\"'success alert-with-icon'\"\n          [dismissible]=\"true\"\n        >\n          <span class=\"tim-icons icon-bell-55\" data-notify=\"icon\"> </span>\n          <span>\n            <b> Well done! - </b> This is a regular notification made with\n            \".alert-success\"\n          </span>\n        </alert>\n        <alert\n          class=\"alert-with-icon\"\n          [type]=\"'warning alert-with-icon'\"\n          [dismissible]=\"true\"\n        >\n          <span class=\"tim-icons icon-bulb-63\" data-notify=\"icon\"> </span>\n          <span>\n            <b> Warning! - </b> This is a regular notification made with\n            \".alert-warning\"\n          </span>\n        </alert>\n        <alert\n          class=\"alert-with-icon\"\n          [type]=\"'danger alert-with-icon'\"\n          [dismissible]=\"true\"\n        >\n          <span class=\"tim-icons icon-support-17\" data-notify=\"icon\"> </span>\n          <span>\n            <b> Oh snap! - </b> This is a regular notification made with\n            \".alert-danger\"\n          </span>\n        </alert>\n      </div>\n    </div>\n    <div class=\"section section-typo\">\n      <img class=\"path\" src=\"assets/img/path1.png\" />\n\n      <img class=\"path path1\" src=\"assets/img/path3.png\" />\n\n      <div class=\"container\">\n        <h3 class=\"title\">Typography</h3>\n        <div id=\"typography\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"typography-line\">\n                <h1><span> Header 1 </span> The Life of BLK• Design System</h1>\n              </div>\n              <div class=\"typography-line\">\n                <h2><span> Header 2 </span> The Life of BLK• Design System</h2>\n              </div>\n              <div class=\"typography-line\">\n                <h3><span> Header 3 </span> The Life of BLK• Design System</h3>\n              </div>\n              <div class=\"typography-line\">\n                <h4><span> Header 4 </span> The Life of BLK• Design System</h4>\n              </div>\n              <div class=\"typography-line\">\n                <h5><span> Header 5 </span> The Life of BLK• Design System</h5>\n              </div>\n              <div class=\"typography-line\">\n                <h6><span> Header 6 </span> The Life of BLK• Design System</h6>\n              </div>\n              <div class=\"typography-line\">\n                <p>\n                  <span> Paragraph </span> I will be the leader of a company\n                  that ends up being worth billions of dollars, because I got\n                  the answers. I understand culture. I am the nucleus. I think\n                  thatâs a responsibility that I have, to push possibilities, to\n                  show people, this is the level that things could be at.\n                </p>\n              </div>\n              <div class=\"typography-line\">\n                <span> Quote </span>\n                <blockquote>\n                  <p class=\"blockquote blockquote-danger\">\n                    \"I will be the leader of a company that ends up being worth\n                    billions of dollars, because I got the answers. I understand\n                    culture. I am the nucleus. I think thatâs a responsibility\n                    that I have, to push possibilities, to show people, this is\n                    the level that things could be at.\" <br />\n\n                    <br />\n\n                    <small> - Noaa </small>\n                  </p>\n                </blockquote>\n              </div>\n              <div class=\"typography-line\">\n                <span> Muted Text </span>\n                <p class=\"text-muted\">\n                  I will be the leader of a company that ends up being worth\n                  billions of dollars, because I got the answers...\n                </p>\n              </div>\n              <div class=\"typography-line\">\n                <span> Primary Text </span>\n                <p class=\"text-primary\">\n                  I will be the leader of a company that ends up being worth\n                  billions of dollars, because I got the answers...\n                </p>\n              </div>\n              <div class=\"typography-line\">\n                <span> Info Text </span>\n                <p class=\"text-info\">\n                  I will be the leader of a company that ends up being worth\n                  billions of dollars, because I got the answers...\n                </p>\n              </div>\n              <div class=\"typography-line\">\n                <span> Success Text </span>\n                <p class=\"text-success\">\n                  I will be the leader of a company that ends up being worth\n                  billions of dollars, because I got the answers...\n                </p>\n              </div>\n              <div class=\"typography-line\">\n                <span> Warning Text </span>\n                <p class=\"text-warning\">\n                  I will be the leader of a company that ends up being worth\n                  billions of dollars, because I got the answers...\n                </p>\n              </div>\n              <div class=\"typography-line\">\n                <span> Danger Text </span>\n                <p class=\"text-danger\">\n                  I will be the leader of a company that ends up being worth\n                  billions of dollars, because I got the answers...\n                </p>\n              </div>\n              <div class=\"typography-line\">\n                <h2>\n                  <span> Small Tag </span> Header with small subtitle <br />\n\n                  <small> Use \"small\" tag for the headers </small>\n                </h2>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"space-50\"></div>\n        <div id=\"images\">\n          <h3 class=\"mb-5\">Images</h3>\n          <div class=\"row\">\n            <div class=\"col-sm-3 col-6\">\n              <small class=\"d-block text-uppercase font-weight-bold mb-4\">\n                Image\n              </small>\n              <img\n                alt=\"Rounded image\"\n                class=\"img-fluid rounded shadow\"\n                src=\"assets/img/ryan.jpg\"\n                style=\"width: 150px;\"\n              />\n            </div>\n            <div class=\"col-sm-3 col-6\">\n              <small class=\"d-block text-uppercase font-weight-bold mb-4\">\n                Circle Image\n              </small>\n              <img\n                alt=\"Circle image\"\n                class=\"img-fluid rounded-circle shadow\"\n                src=\"assets/img/james.jpg\"\n                style=\"width: 150px;\"\n              />\n            </div>\n            <div class=\"col-sm-3 col-6 mt-5 mt-sm-0\">\n              <small class=\"d-block text-uppercase font-weight-bold mb-4\">\n                Raised\n              </small>\n              <img\n                alt=\"Raised image\"\n                class=\"img-fluid rounded shadow-lg\"\n                src=\"assets/img/lora.jpg\"\n                style=\"width: 150px;\"\n              />\n            </div>\n            <div class=\"col-sm-3 col-6 mt-5 mt-sm-0\">\n              <small class=\"d-block text-uppercase font-weight-bold mb-4\">\n                Circle Raised\n              </small>\n              <img\n                alt=\"Raised circle image\"\n                class=\"img-fluid rounded-circle shadow-lg\"\n                src=\"assets/img/mike.jpg\"\n                style=\"width: 150px;\"\n              />\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"section section-javascript\" id=\"javascriptComponents\">\n      <img class=\"path\" src=\"assets/img/path5.png\" />\n\n      <img class=\"path path1\" src=\"assets/img/path5.png\" />\n\n      <div class=\"container\">\n        <h3 class=\"title mb-5\">Javascript components</h3>\n        <h4 class=\"mb-5\">Modal</h4>\n        <div class=\"row\" id=\"modals\">\n          <div class=\"col-md-4\">\n            <button\n              class=\"btn btn-danger\"\n              data-target=\"#myModal\"\n              (click)=\"myModal.show()\"\n            >\n              Launch Modal\n            </button>\n          </div>\n          <div class=\"col-md-4\">\n            <button\n              class=\"btn btn-warning\"\n              data-target=\"#myModal1\"\n              (click)=\"myModal1.show()\"\n            >\n              Launch Modal Mini\n            </button>\n          </div>\n          <div class=\"col-md-4\">\n            <button\n              class=\"btn btn-success\"\n              data-target=\"#myModal2\"\n              (click)=\"myModal2.show()\"\n            >\n              Launch Modal Form\n            </button>\n          </div>\n        </div>\n        <br />\n\n        <br />\n\n        <h4 class=\"mb-5 mt-3\">Datepicker</h4>\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <div class=\"datepicker-container\">\n              <div class=\"form-group\">\n                <input\n                  bsDatepicker\n                  class=\"form-control\"\n                  data-datepicker-color=\"danger\"\n                  [bsConfig]=\"{ isAnimated: true, containerClass: 'theme-red' }\"\n                  [bsValue]=\"date\"\n                  id=\"datepicker\"\n                  type=\"text\"\n                />\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <h4 class=\"mb-5 mt-3\">Popovers</h4>\n            <button\n              class=\"btn btn-default btn-sm mr-1\"\n              container=\"body\"\n              placement=\"top\"\n              popoverTitle=\"Popover on top\"\n              popover=\"Here will be some very useful information about his popover.\"\n              type=\"button\"\n            >\n              On top\n            </button>\n            <button\n              class=\"btn btn-default btn-sm mr-1\"\n              container=\"body\"\n              placement=\"right\"\n              popoverTitle=\"Popover on right\"\n              popover=\"Here will be some very useful information about his popover.<br>\n              Here will be some very useful information about his popover.\"\n              type=\"button\"\n            >\n              On right\n            </button>\n            <button\n              class=\"btn btn-default btn-sm mr-1\"\n              container=\"body\"\n              placement=\"bottom\"\n              popoverTitle=\"Popover on bottom\"\n              popover=\"Here will be some very useful information about his popover.\"\n              type=\"button\"\n            >\n              On bottom\n            </button>\n            <button\n              class=\"btn btn-default btn-sm\"\n              container=\"body\"\n              placement=\"left\"\n              popoverTitle=\"Popover on left\"\n              popover=\"Here will be some very useful information about his popover.\"\n              type=\"button\"\n            >\n              On left\n            </button>\n          </div>\n          <div class=\"col-md-6\">\n            <h4 class=\"mb-5 mt-3\">Tooltips</h4>\n            <button\n              class=\"btn btn-default btn-tooltip btn-sm mr-1\"\n              data-animation=\"true\"\n              data-container=\"body\"\n              data-delay=\"100\"\n              placement=\"left\"\n              tooltip=\"Tooltip on left\"\n              type=\"button\"\n            >\n              On left\n            </button>\n            <button\n              class=\"btn btn-default btn-tooltip btn-sm mr-1\"\n              data-animation=\"true\"\n              data-container=\"body\"\n              placement=\"top\"\n              tooltip=\"Tooltip on top\"\n              type=\"button\"\n            >\n              On top\n            </button>\n            <button\n              class=\"btn btn-default btn-tooltip btn-sm mr-1\"\n              data-animation=\"true\"\n              data-container=\"body\"\n              placement=\"bottom\"\n              tooltip=\"Tooltip on bottom\"\n              type=\"button\"\n            >\n              On bottom\n            </button>\n            <button\n              class=\"btn btn-default btn-tooltip btn-sm\"\n              data-animation=\"true\"\n              data-container=\"body\"\n              placement=\"right\"\n              tooltip=\"Tooltip on right\"\n              type=\"button\"\n            >\n              On right\n            </button>\n            <div class=\"clearfix\"></div>\n            <br />\n\n            <br />\n          </div>\n        </div>\n      </div>\n      <div class=\"section\">\n        <div class=\"container\">\n          <div class=\"title\"><h3>Carousel</h3></div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-5 mb-5 mb-lg-0\">\n              <h1 class=\"text-white font-weight-light\">Bootstrap carousel</h1>\n              <p class=\"text-white mt-4\">\n                Black Design comes with three pre-built pages to help you get\n                started faster. You can change the text and images and you're\n                good to go.\n              </p>\n              <a\n                class=\"btn btn-warning mt-4\"\n                href=\"https://demos.creative-tim.com/blk-design-system-angular/#/documentation/alerts\"\n              >\n                See all components\n              </a>\n            </div>\n            <div class=\"col-lg-6\">\n              <carousel [showIndicators]=\"false\">\n                <slide>\n                  <img\n                    alt=\"First slide\"\n                    class=\"d-block w-100\"\n                    src=\"assets/img/denys.jpg\"\n                  />\n                </slide>\n                <slide>\n                  <img\n                    alt=\"Second slide\"\n                    class=\"d-block w-100\"\n                    src=\"assets/img/fabien-bazanegue.jpg\"\n                  />\n                </slide>\n                <slide>\n                  <img\n                    alt=\"Third slide\"\n                    class=\"d-block w-100\"\n                    src=\"assets/img/mark-finn.jpg\"\n                  />\n                </slide>\n              </carousel>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"section section-nucleo-icons\">\n      <img class=\"path\" src=\"assets/img/path3.png\" />\n\n      <div class=\"container\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-lg-8 col-md-12\">\n            <h2 class=\"title\">Nucleo Icons</h2>\n            <h4 class=\"description\">\n              BLK• Design System PRO comes with 100 custom icons made by our\n              friends from NucleoApp. The official package contains over 2.100\n              thin icons which are looking great in combination with BLK• Design\n              System PRO Make sure you check all of them and use those that you\n              like the most.\n            </h4>\n            <div class=\"btn-wrapper\">\n              <a\n                class=\"btn btn-danger btn-round mr-1\"\n                href=\"https://demos.creative-tim.com/blk-design-system-angular/#/documentation/icons\"\n                target=\"_blank\"\n              >\n                View Demo Icons\n              </a>\n              <a\n                class=\"btn btn-danger btn-simple btn-round btn-lg\"\n                href=\"https://nucleoapp.com/?ref=1712\"\n                target=\"_blank\"\n              >\n                View All Icons\n              </a>\n            </div>\n          </div>\n        </div>\n        <div class=\"blur-hover\">\n          <a\n            href=\"https://demos.creative-tim.com/blk-design-system-angular/#/documentation/icons\"\n            class=\"text-danger\"\n          >\n            <div class=\"icons-container blur-item on-screen mt-5\">\n              <i class=\"icon tim-icons icon-coins\"> </i>\n              <i class=\"icon icon-sm tim-icons icon-spaceship\"> </i>\n              <i class=\"icon icon-sm tim-icons icon-money-coins\"> </i>\n              <i class=\"icon icon-sm tim-icons icon-link-72\"> </i>\n              <i class=\"icon tim-icons icon-send\"> </i>\n              <i class=\"icon tim-icons icon-mobile\"> </i>\n              <i class=\"icon tim-icons icon-wifi\"> </i>\n              <i class=\"icon icon-sm tim-icons icon-key-25\"> </i>\n              <i class=\"icon icon-sm tim-icons icon-atom\"> </i>\n              <i class=\"icon icon-sm tim-icons icon-satisfied\"> </i>\n              <i class=\"icon tim-icons icon-gift-2\"> </i>\n              <i class=\"icon tim-icons icon-tap-02\"> </i>\n              <i class=\"icon tim-icons icon-wallet-43\"> </i>\n            </div>\n            <span class=\"blur-hidden h5 text-danger\">\n              Eplore all the 21.000+ Nucleo Icons\n            </span>\n          </a>\n        </div>\n      </div>\n    </div>\n    <div class=\"section section-signup\">\n      <div class=\"container\">\n        <div class=\"squares square-1\"></div>\n        <div class=\"squares square-2\"></div>\n        <div class=\"squares square-3\"></div>\n        <div class=\"squares square-4\"></div>\n        <div class=\"row row-grid justify-content-between align-items-center\">\n          <div class=\"col-lg-6\">\n            <h3 class=\"display-3 text-white\">\n              A beautiful Black Design\n              <span class=\"text-white\"> completed with examples </span>\n            </h3>\n            <p class=\"text-white mb-3\">\n              The Design System comes with four pre-built pages to help you get\n              started faster. You can change the text and images and you're good\n              to go. More importantly, looking at them will give you a picture\n              of what you can built with this powerful Bootstrap 4 Design\n              System.\n            </p>\n            <div class=\"btn-wrapper\">\n              <a class=\"btn btn-danger\" [routerLink]=\"['/register']\">\n                Register Page\n              </a>\n            </div>\n          </div>\n          <div class=\"col-lg-6 mb-lg-auto\">\n            <div class=\"card card-register\">\n              <div class=\"card-header\">\n                <img\n                  alt=\"Card image\"\n                  class=\"card-img\"\n                  src=\"assets/img/square1-red.png\"\n                />\n\n                <h4 class=\"card-title\">Register</h4>\n              </div>\n              <div class=\"card-body\">\n                <form class=\"form\">\n                  <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                      <div class=\"input-group-text\">\n                        <i class=\"tim-icons icon-single-02\"> </i>\n                      </div>\n                    </div>\n                    <input\n                      class=\"form-control\"\n                      placeholder=\"Full Name\"\n                      type=\"text\"\n                    />\n                  </div>\n                  <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                      <div class=\"input-group-text\">\n                        <i class=\"tim-icons icon-email-85\"> </i>\n                      </div>\n                    </div>\n                    <input\n                      class=\"form-control\"\n                      placeholder=\"Email\"\n                      type=\"text\"\n                    />\n                  </div>\n                  <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                      <div class=\"input-group-text\">\n                        <i class=\"tim-icons icon-lock-circle\"> </i>\n                      </div>\n                    </div>\n                    <input\n                      class=\"form-control\"\n                      placeholder=\"Password\"\n                      type=\"text\"\n                    />\n                  </div>\n                  <div class=\"form-check text-left\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" />\n\n                      <span class=\"form-check-sign\"> </span> I agree to the\n                      <a href=\"javascript:void(0)\"> terms and conditions </a> .\n                    </label>\n                  </div>\n                </form>\n              </div>\n              <div class=\"card-footer\">\n                <a\n                  class=\"btn btn-danger btn-round btn-lg\"\n                  href=\"javascript:void(0)\"\n                >\n                  Get Started\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"section section-examples\" data-background-color=\"black\">\n      <img class=\"path\" src=\"assets/img/path1.png\" />\n\n      <div class=\"space-50\"></div>\n      <div class=\"container text-center\">\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <a [routerLink]=\"['/landing']\">\n              <img\n                alt=\"Image\"\n                class=\"img-raised\"\n                src=\"assets/img/landing-page.png\"\n              />\n            </a>\n            <a\n              class=\"btn btn-simple btn-danger btn-round\"\n              [routerLink]=\"['/landing']\"\n            >\n              View Landing Page\n            </a>\n          </div>\n          <div class=\"col-sm-6\">\n            <a [routerLink]=\"['/profile']\">\n              <img\n                alt=\"Image\"\n                class=\"img-raised\"\n                src=\"assets/img/profile-page.png\"\n              />\n            </a>\n            <a\n              class=\"btn btn-simple btn-danger btn-round\"\n              [routerLink]=\"['/profile']\"\n            >\n              View Profile Page\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"section section-download\" data-background-color=\"black\" #target>\n      <img class=\"path\" src=\"assets/img/path1.png\" />\n\n      <div class=\"container\">\n        <div class=\"row justify-content-md-center\">\n          <div class=\"text-center col-md-12 col-lg-8\">\n            <h2 class=\"title\">\n              Do you love this Bootstrap 4 Angular Design System?\n            </h2>\n            <h4 class=\"description\">\n              Cause if you do, it can be yours for FREE. Hit the button below to\n              navigate to Creative Tim where you can find the design system in\n              HTML format. Start a new project or give an old Bootstrap project\n              a new look!\n            </h4>\n          </div>\n          <div class=\"text-center col-md-12 col-lg-8\">\n            <a\n              class=\"btn btn-danger btn-round btn-lg\"\n              href=\"https://www.creative-tim.com/product/blk-design-system-angular\"\n              role=\"button\"\n            >\n              Download Angular\n            </a>\n          </div>\n        </div>\n        <br />\n\n        <br />\n\n        <br />\n\n        <br />\n\n        <br />\n\n        <div class=\"row row-grid align-items-center my-md\">\n          <div class=\"col-lg-6\">\n            <h3 class=\"text-danger font-weight-light mb-2\">\n              Thank you for supporting us!\n            </h3>\n            <h4 class=\"mb-0 font-weight-light\">\n              Let's get in touch on any of these platforms.\n            </h4>\n          </div>\n          <div class=\"col-lg-6 text-lg-center btn-wrapper\">\n            <a\n              class=\"btn btn-icon btn-twitter btn-round btn-lg mr-1\"\n              id=\"twitter\"\n            >\n              <i class=\"fab fa-twitter\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-facebook btn-round btn-lg mr-1\"\n              id=\"facebook\"\n            >\n              <i class=\"fab fa-facebook-square\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-github btn-round btn-lg\"\n              href=\"https://github.com/creativetimofficial\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-github\"> </i>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div\n      aria-hidden=\"true\"\n      aria-labelledby=\"myModalLabel\"\n      bsModal\n      class=\"modal fade\"\n      #myModal=\"bs-modal\"\n      id=\"myModal\"\n      role=\"dialog\"\n      tabindex=\"-1\"\n    >\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header justify-content-center\">\n            <button\n              aria-hidden=\"true\"\n              class=\"close\"\n              data-dismiss=\"modal\"\n              type=\"button\"\n              (click)=\"myModal.hide()\"\n            >\n              <i class=\"tim-icons icon-simple-remove\"> </i>\n            </button>\n            <h4 class=\"title title-up\">Modal title</h4>\n          </div>\n          <div class=\"modal-body\">\n            <p>\n              Far far away, behind the word mountains, far from the countries\n              Vokalia and Consonantia, there live the blind texts. Separated\n              they live in Bookmarksgrove right at the coast of the Semantics, a\n              large language ocean. A small river named Duden flows by their\n              place and supplies it with the necessary regelialia. It is a\n              paradisematic country, in which roasted parts of sentences fly\n              into your mouth.\n            </p>\n          </div>\n          <div class=\"modal-footer\">\n            <button class=\"btn btn-default\" type=\"button\">Nice Button</button>\n            <button\n              class=\"btn btn-danger\"\n              data-dismiss=\"modal\"\n              type=\"button\"\n              (click)=\"myModal.hide()\"\n            >\n              Close\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div\n      aria-hidden=\"true\"\n      aria-labelledby=\"myModalLabel\"\n      bsModal\n      class=\"modal fade modal-mini modal-danger modal-mini\"\n      #myModal1=\"bs-modal\"\n      id=\"myModal1\"\n      role=\"dialog\"\n      tabindex=\"-1\"\n    >\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header justify-content-center\">\n            <button\n              aria-hidden=\"true\"\n              class=\"close\"\n              data-dismiss=\"modal\"\n              (click)=\"myModal1.hide()\"\n              type=\"button\"\n            >\n              <i class=\"tim-icons icon-simple-remove text-white\"> </i>\n            </button>\n            <div class=\"modal-profile\">\n              <i class=\"tim-icons icon-single-02\"> </i>\n            </div>\n          </div>\n          <div class=\"modal-body\">\n            <p>Always have an access to your profile</p>\n          </div>\n          <div class=\"modal-footer\">\n            <button class=\"btn btn-link btn-neutral\" type=\"button\">Back</button>\n            <button\n              class=\"btn btn-link btn-neutral\"\n              data-dismiss=\"modal\"\n              type=\"button\"\n              (click)=\"myModal1.hide()\"\n            >\n              Close\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div\n      aria-hidden=\"true\"\n      aria-labelledby=\"myModalLabel\"\n      bsModal\n      class=\"modal fade modal-black\"\n      #myModal2=\"bs-modal\"\n      id=\"myModal2\"\n      role=\"dialog\"\n      tabindex=\"-1\"\n    >\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header justify-content-center\">\n            <button\n              aria-hidden=\"true\"\n              class=\"close\"\n              data-dismiss=\"modal\"\n              (click)=\"myModal2.hide()\"\n              type=\"button\"\n            >\n              <i class=\"tim-icons icon-simple-remove text-white\"> </i>\n            </button>\n            <div class=\"text-muted text-center ml-auto mr-auto\">\n              <h3 class=\"mb-0\">Sign in with</h3>\n            </div>\n          </div>\n          <div class=\"modal-body\">\n            <div class=\"btn-wrapper text-center\">\n              <a\n                class=\"btn btn-neutral btn-icon mr-1\"\n                href=\"javascript:void(0)\"\n              >\n                <img src=\"assets/img/github.svg\" />\n              </a>\n              <a class=\"btn btn-neutral btn-icon\" href=\"javascript:void(0)\">\n                <img src=\"assets/img/google.svg\" />\n              </a>\n            </div>\n            <div class=\"text-center text-muted mb-4 mt-3\">\n              <small> Or sign in with credentials </small>\n            </div>\n            <form role=\"form\">\n              <div class=\"form-group mb-3\">\n                <div\n                  class=\"input-group input-group-alternative\"\n                  [ngClass]=\"{ 'input-group-focus': focus1 === true }\"\n                >\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">\n                      <i class=\"tim-icons icon-email-85\"> </i>\n                    </span>\n                  </div>\n                  <input\n                    class=\"form-control\"\n                    placeholder=\"Email\"\n                    type=\"email\"\n                    (focus)=\"focus1 = true\"\n                    (blur)=\"focus1 = false\"\n                  />\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <div\n                  class=\"input-group input-group-alternative\"\n                  [ngClass]=\"{ 'input-group-focus': focus2 === true }\"\n                >\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">\n                      <i class=\"tim-icons icon-key-25\"> </i>\n                    </span>\n                  </div>\n                  <input\n                    class=\"form-control\"\n                    placeholder=\"Password\"\n                    type=\"password\"\n                    (focus)=\"focus2 = true\"\n                    (blur)=\"focus2 = false\"\n                  />\n                </div>\n              </div>\n              <div class=\"form-check mt-3\">\n                <label class=\"form-check-label\">\n                  <input\n                    checked=\"checked\"\n                    class=\"form-check-input\"\n                    type=\"checkbox\"\n                  />\n\n                  <span class=\"form-check-sign\"> </span> Remember me!\n                </label>\n              </div>\n              <div class=\"text-center\">\n                <button class=\"btn btn-primary my-4\" type=\"button\">\n                  Sign in\n                </button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div> -->\n\n\n  <section id=\"office-features\" class=\"section section-lg section-safe\">\n    <img  id=\"office-features-img\" src=\"assets/img/path5.png\" class=\"path\">\n    <div class=\"container\">\n      <div class=\"row row-grid justify-content-between\">\n          <div id=\"office-features-blocks\" class=\"col-md-6\">\n            <div class=\"px-md-5\">\n              <hr class=\"line-success\">\n              <h1 class=\"profile-title text-left\">Office Spaces</h1>\n              <p class=\"profile-description\"> The design of our office space comes with four built-in pages to enhance your online office experience. After creating an account, you'll be able to create an office or even join an office that you have been invited to. The features that you will have access to within the office include: </p>\n              <!-- <ul class=\"list-unstyled mt-5\">\n                <li class=\"py-2\">\n                  <div class=\"d-flex align-items-center\">\n                    <div class=\"icon icon-success mb-2\">\n                      <i class=\"tim-icons icon-vector\"></i>\n                    </div>\n                    <div class=\"ml-3\">\n                      <h6>Spatial Audio Office Floorplan</h6>\n                    </div>\n                  </div>\n                </li>\n                <li class=\"py-2\">\n                  <div class=\"d-flex align-items-center\">\n                    <div class=\"icon icon-success mb-2\">\n                      <i class=\"tim-icons icon-tap-02\"></i>\n                    </div><div class=\"ml-3\">\n                      <h6>Office Chatroom</h6>\n                    </div>\n                  </div>\n                </li>\n                <li class=\"py-2\">\n                  <div class=\"d-flex align-items-center\">\n                    <div class=\"icon icon-success mb-2\">\n                      <i class=\"tim-icons icon-single-02\"></i>\n                    </div>\n                    <div class=\"ml-3\">\n                      <h6>Kanban Boards</h6>\n                    </div>\n                  </div>\n                </li>\n                <li class=\"py-2\">\n                  <div class=\"d-flex align-items-center\">\n                    <div class=\"icon icon-success mb-2\">\n                      <i class=\"tim-icons icon-single-02\"></i>\n                    </div>\n                    <div class=\"ml-3\">\n                      <h6>Timesheet</h6>\n                    </div>\n                  </div>\n                </li>\n              </ul> -->\n            </div>\n          </div>\n          <div class=\"col-md-5\">\n            <img src=\"assets/img/chester-wade.jpg\" class=\"img-fluid floating\">\n            <div class=\"card card-stats bg-danger\">\n              <div class=\"card-body\">\n                <div class=\"justify-content-center\">\n                  <div class=\"numbers\">\n                    <p class=\"card-title\">100%</p>\n                    <p class=\"card-category text-white\">Safe</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"card card-stats bg-info\">\n              <div class=\"card-body\">\n                <div class=\"justify-content-center\">\n                  <div class=\"numbers\">\n                    <p class=\"card-title\">573 K</p>\n                    <p class=\"card-category text-white\">Satisfied customers</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n              <div class=\"card card-stats bg-default\">\n                <div class=\"card-body\">\n                  <div class=\"justify-content-center\">\n                    <div class=\"numbers\">\n                      <p class=\"card-title\">10 425</p>\n                      <p class=\"card-category text-white\">Business</p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n          </div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"section section-lg\">\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-12\">\n          <div class=\"row row-grid justify-content-center\">\n            <div class=\"col-lg-3\">\n              <div class=\"info\">\n                <div class=\"icon icon-primary\">\n                  <i class=\"tim-icons icon-money-coins\"></i>\n                </div>\n                <h4 class=\"info-title\">Office Chatroom</h4>\n                <hr class=\"line-primary\">\n                <p> Whether it be scheduling the next meeting or sending links and information to your peers, we know how important it is to have an easy access platform to comunicate with your fellow office members. The Chatroom is exactly that! A messaging service that connects you to the Office, allowing you to message whenever you need to. </p>\n              </div>\n            </div>\n            <div class=\"col-lg-3\">\n              <div class=\"info\">\n                <div class=\"icon icon-warning\">\n                  <i class=\"tim-icons icon-chart-pie-36\"></i>\n                </div>\n                <h4 class=\"info-title\">Kanban Boards</h4>\n                <hr class=\"line-warning\">\n                <p> Need help organizing and setting up a guideline for a project or even for office outcomes? We've got just the feature. Our Kanban Boards offer office users an office-wide simplistic interface to organize and manage workload and workflow of projects by means of a board with three seperate lists. </p>\n              </div>\n            </div>\n            <div class=\"col-lg-3\">\n              <div class=\"info\">\n                <div class=\"icon icon-success\">\n                  <i class=\"tim-icons icon-single-02\"></i>\n                </div>\n                <h4 class=\"info-title\">Timesheet</h4>\n                <hr class=\"line-success\">\n                <p> It can be very tiresome having to manually fill in your hours during or after work, which is why we have integrated a Timesheet into the office. The Timesheet allows you to fill in what you worked, when you worked on it! All of this accessible through our easy-to-follow interface. </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n\n  <!-- <section id=\"office-features\" class=\"section section-lg section-safe\">\n    <div class=\"container\">\n      <div class=\"row row-grid justify-content-between\">\n          <div id=\"office-features-blocks\" class=\"col-md-6\">\n            <div class=\"px-md-5\">\n              <hr class=\"line-success\">\n              <h3>Office Space</h3>\n              <p> The design of our office space comes with four built-in pages to enhance your online office experience. After creating an account, you'll be able to create an office or even join an office that you have been invited to. The features that you will have access to within the office include: </p>\n              <ul class=\"list-unstyled mt-5\">\n                <li class=\"py-2\">\n                  <div class=\"d-flex align-items-center\">\n                    <div class=\"icon icon-success mb-2\">\n                      <i class=\"tim-icons icon-vector\"></i>\n                    </div>\n                    <div class=\"ml-3\">\n                      <h6>Spatial Audio Office Floorplan</h6>\n                    </div>\n                  </div>\n                </li>\n                <li class=\"py-2\">\n                  <div class=\"d-flex align-items-center\">\n                    <div class=\"icon icon-success mb-2\">\n                      <i class=\"tim-icons icon-tap-02\"></i>\n                    </div><div class=\"ml-3\">\n                      <h6>Office Chatroom</h6>\n                    </div>\n                  </div>\n                </li>\n                <li class=\"py-2\">\n                  <div class=\"d-flex align-items-center\">\n                    <div class=\"icon icon-success mb-2\">\n                      <i class=\"tim-icons icon-single-02\"></i>\n                    </div>\n                    <div class=\"ml-3\">\n                      <h6>Kanban Boards</h6>\n                    </div>\n                  </div>\n                </li>\n                <li class=\"py-2\">\n                  <div class=\"d-flex align-items-center\">\n                    <div class=\"icon icon-success mb-2\">\n                      <i class=\"tim-icons icon-single-02\"></i>\n                    </div>\n                    <div class=\"ml-3\">\n                      <h6>Timesheet</h6>\n                    </div>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"row justify-content-between align-items-center\">\n              <carousel ng-reflect-show-indicators=\"true\">\n                <div tabindex=\"0\" class=\"carousel slide\">\n                  <ol class=\"carousel-indicators\">\n                    <li class=\"\"></li>\n                    <li class=\"active\"></li>\n                    <li class=\"\"></li>\n                  </ol>\n                  <div class=\"carousel-inner\" ng-reflect-ng-style=\"[object Object]\" style=\"display: block;\">\n                    <slide _nghost-nrw-c91=\"\" aria-hidden=\"true\" class=\"item carousel-item\" style=\"width: 100%; order: 0;\">\n                      <div _ngcontent-nrw-c91=\"\" class=\"item\">\n                        <img alt=\"First slide\" src=\"assets/img/VRfrom_whiteboard.PNG\" class=\"d-block\">\n                        <div class=\"carousel-caption d-none d-md-block\">\n                          <h5>Office from Whiteboard</h5>\n                        </div>\n                      </div>\n                    </slide>\n                    <slide _nghost-nrw-c91=\"\" aria-hidden=\"false\" class=\"item carousel-item active\" style=\"width: 100%; order: 0;\">\n                      <div _ngcontent-nrw-c91=\"\" class=\"item active\">\n                        <img alt=\"Second slide\" src=\"assets/img/VRroom.PNG\" class=\"d-block\">\n                        <div class=\"carousel-caption d-none d-md-block\">\n                          <h5>Office from Entrance</h5>\n                        </div>\n                      </div>\n                    </slide>\n                    <slide _nghost-nrw-c91=\"\" aria-hidden=\"true\" class=\"item carousel-item\" style=\"width: 100%; order: 0;\">\n                      <div _ngcontent-nrw-c91=\"\" class=\"item\">\n                        <img alt=\"Third slide\" src=\"assets/img/VRback.PNG\" class=\"d-block\">\n                        <div class=\"carousel-caption d-none d-md-block\">\n                          <h5>Office View</h5>\n                        </div>\n                      </div>\n                    </slide>\n                  </div>\n                  <a tabindex=\"0\" role=\"button\" class=\"left carousel-control carousel-control-prev\">\n                    <span aria-hidden=\"true\" class=\"icon-prev carousel-control-prev-icon\"></span>\n                    <span class=\"sr-only\">Previous</span>\n                  </a>\n                  <a tabindex=\"0\" role=\"button\" class=\"right carousel-control carousel-control-next\">\n                    <span aria-hidden=\"true\" class=\"icon-next carousel-control-next-icon\"></span>\n                    <span class=\"sr-only\">Next</span>\n                  </a>\n                </div>\n              </carousel>\n            </div>\n          </div>\n      </div>\n    </div>\n  </section> -->\n\n\n\n\n\n  <div class=\"section\">\n    <div class=\"container\">\n      <div class=\"row justify-content-between\">\n        <div class=\"col-md-6\">\n          <div class=\"row justify-content-between align-items-center\">\n            <carousel ng-reflect-show-indicators=\"true\">\n              <div tabindex=\"0\" class=\"carousel slide\">\n                <ol class=\"carousel-indicators\">\n                  <li class=\"\"></li>\n                  <li class=\"active\"></li>\n                  <li class=\"\"></li>\n                </ol>\n                <div class=\"carousel-inner\" ng-reflect-ng-style=\"[object Object]\" style=\"display: block;\">\n                  <slide _nghost-nrw-c91=\"\" aria-hidden=\"true\" class=\"item carousel-item\" style=\"width: 100%; order: 0;\">\n                    <div _ngcontent-nrw-c91=\"\" class=\"item\">\n                      <img alt=\"First slide\" src=\"assets/img/VRfrom_whiteboard.PNG\" class=\"d-block\">\n                      <div class=\"carousel-caption d-none d-md-block\">\n                        <h5>Office from Whiteboard</h5>\n                      </div>\n                    </div>\n                  </slide>\n                  <slide _nghost-nrw-c91=\"\" aria-hidden=\"false\" class=\"item carousel-item active\" style=\"width: 100%; order: 0;\">\n                    <div _ngcontent-nrw-c91=\"\" class=\"item active\">\n                      <img alt=\"Second slide\" src=\"assets/img/VRroom.PNG\" class=\"d-block\">\n                      <div class=\"carousel-caption d-none d-md-block\">\n                        <h5>Office from Entrance</h5>\n                      </div>\n                    </div>\n                  </slide>\n                  <slide _nghost-nrw-c91=\"\" aria-hidden=\"true\" class=\"item carousel-item\" style=\"width: 100%; order: 0;\">\n                    <div _ngcontent-nrw-c91=\"\" class=\"item\">\n                      <img alt=\"Third slide\" src=\"assets/img/VRback.PNG\" class=\"d-block\">\n                      <div class=\"carousel-caption d-none d-md-block\">\n                        <h5>Office View</h5>\n                      </div>\n                    </div>\n                  </slide>\n                </div>\n                <a tabindex=\"0\" role=\"button\" class=\"left carousel-control carousel-control-prev\">\n                  <span aria-hidden=\"true\" class=\"icon-prev carousel-control-prev-icon\"></span>\n                  <span class=\"sr-only\">Previous</span>\n                </a>\n                <a tabindex=\"0\" role=\"button\" class=\"right carousel-control carousel-control-next\">\n                  <span aria-hidden=\"true\" class=\"icon-next carousel-control-next-icon\"></span>\n                  <span class=\"sr-only\">Next</span>\n                </a>\n              </div>\n            </carousel>\n          </div>\n        </div>\n        <div class=\"col-md-5\">\n          <hr class=\"line-success\">\n          <h1 class=\"profile-title text-left\">Virtual Reality</h1>\n          <!-- <h5 class=\"text-on-back\">02</h5> -->\n          <p class=\"profile-description text-left\"> The aim of the Virtual Reality offices is to provide a true 3D virtual environment where users can have \"face-to-face\" meetings and discussions. Each Virtual Reality office in the floor plan represents a unique office in the Virtual Reality space, each of which has full voice communication and an interactive whiteboard to enhance discussions. </p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n\n  <!-- <section id=\"office-features\" class=\"section section-lg section-safe\">\n    <img src=\"assets/img/path5.png\" class=\"path\">\n    <div class=\"container\">\n      <div class=\"row row-grid justify-content-between\">\n        <div class=\"col-md-5\">\n          <img src=\"assets/img/VRfrom_whiteboard.PNG\" class=\"img-fluid floating\">\n          <div class=\"card card-stats bg-danger\">\n            <div class=\"card-body\">\n              <div class=\"justify-content-center\">\n                <div class=\"numbers\">\n                  <p class=\"card-title\">100%</p>\n                  <p class=\"card-category text-white\">Safe</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card card-stats bg-info\">\n            <div class=\"card-body\">\n              <div class=\"justify-content-center\">\n                <div class=\"numbers\">\n                  <p class=\"card-title\">573 K</p>\n                  <p class=\"card-category text-white\">Satisfied customers</p>\n                </div>\n              </div>\n            </div>\n          </div>\n            <div class=\"card card-stats bg-default\">\n              <div class=\"card-body\">\n                <div class=\"justify-content-center\">\n                  <div class=\"numbers\">\n                    <p class=\"card-title\">10 425</p>\n                    <p class=\"card-category text-white\">Business</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n        </div>\n          <div class=\"col-md-6\">\n            <div class=\"px-md-5\">\n              <hr class=\"line-success\">\n              <h3>Virtual Reality</h3>\n              <p> The aim of the Virtual Reality offices is to provide a true 3D virtual environment where users can have \"face-to-face\" meetings and discussions. Each Virtual Reality office in the floor plan represents a unique office in the Virtual Reality space, each of which has full voice communication and an interactive whiteboard to enhance discussions. </p>\n              <ul class=\"list-unstyled mt-5\">\n                <li class=\"py-2\">\n                  <div class=\"d-flex align-items-center\">\n                    <div class=\"icon icon-success mb-2\">\n                      <i class=\"tim-icons icon-vector\"></i>\n                    </div>\n                    <div class=\"ml-3\">\n                      <h6>Spatial Audio Office Floorplan</h6>\n                    </div>\n                  </div>\n                </li>\n                <li class=\"py-2\">\n                  <div class=\"d-flex align-items-center\">\n                    <div class=\"icon icon-success mb-2\">\n                      <i class=\"tim-icons icon-tap-02\"></i>\n                    </div><div class=\"ml-3\">\n                      <h6>Office Chatroom</h6>\n                    </div>\n                  </div>\n                </li>\n                <li class=\"py-2\">\n                  <div class=\"d-flex align-items-center\">\n                    <div class=\"icon icon-success mb-2\">\n                      <i class=\"tim-icons icon-single-02\"></i>\n                    </div>\n                    <div class=\"ml-3\">\n                      <h6>Kanban Boards</h6>\n                    </div>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n      </div>\n    </div>\n  </section> -->\n\n  <section id=\"video-section\" class=\"section\">\n    <img src=\"assets/img/path4.png\" class=\"path\">\n    <div class=\"container\">\n      <div class=\"row row-grid justify-content-between\">\n        <div class=\"col-md-5\">\n          <div class=\"pl-md-5\">\n            <h1>Video HERE: </h1>\n            <p> I should be capable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. </p>\n            <br>\n            <p> When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray. </p>\n            <br>\n            <a href=\"javascript:void(0)\" class=\"font-weight-bold text-info mt-5\"> Show all <i class=\"tim-icons icon-minimal-right text-info\"></i></a>\n          </div>\n        </div>\n        <div class=\"col-md-6 mt-lg-6\">\n          <div class=\"row\">\n            <div class=\"col-lg-6 col-sm-12 px-2 py-2\">\n              <div class=\"card card-stats\">\n                <div class=\"card-body\">\n                  <div class=\"row\">\n                    <div class=\"col-5 col-md-4\">\n                      <div class=\"icon-big text-center icon-warning\">\n                        <i class=\"tim-icons icon-trophy text-warning\"></i>\n                      </div>\n                    </div>\n                    <div class=\"col-7 col-md-8\">\n                      <div class=\"numbers\">\n                        <p class=\"card-title\">3,237</p>\n                        <p></p>\n                        <p class=\"card-category\">Awards</p>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-6 col-sm-12 px-2 py-2\">\n              <div class=\"card card-stats upper bg-default\">\n                <div class=\"card-body\">\n                  <div class=\"row\">\n                    <div class=\"col-5 col-md-4\">\n                      <div class=\"icon-big text-center icon-warning\">\n                        <i class=\"tim-icons icon-coins text-white\"></i>\n                      </div>\n                    </div>\n                    <div class=\"col-7 col-md-8\">\n                      <div class=\"numbers\">\n                        <p class=\"card-title\">3,653</p\n                          ><p></p>\n                          <p class=\"card-category\">Commits</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-lg-6 col-sm-12 px-2 py-2\">\n                <div class=\"card card-stats\">\n                  <div class=\"card-body\">\n                    <div class=\"row\">\n                      <div class=\"col-5 col-md-4\">\n                        <div class=\"icon-big text-center icon-warning\">\n                          <i class=\"tim-icons icon-gift-2 text-info\"></i>\n                        </div>\n                      </div>\n                      <div class=\"col-7 col-md-8\">\n                        <div class=\"numbers\">\n                          <p class=\"card-title\">593</p>\n                          <p></p>\n                          <p class=\"card-category\">Presents</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-6 col-sm-12 px-2 py-2\">\n                <div class=\"card card-stats\">\n                  <div class=\"card-body\">\n                    <div class=\"row\">\n                      <div class=\"col-5 col-md-4\">\n                        <div class=\"icon-big text-center icon-warning\">\n                          <i class=\"tim-icons icon-credit-card text-success\"></i>\n                        </div>\n                      </div>\n                      <div class=\"col-7 col-md-8\">\n                        <div class=\"numbers\">\n                          <p class=\"card-title\">10,783</p>\n                          <p></p>\n                          <p class=\"card-category\">Forks</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n\n  <!-- <section id=\"download-section1\" class=\"section section-lg section-coins\"> -->\n    <img src=\"assets/img/path3.png\" class=\"path\">\n    <div id=\"download-section1\" class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <hr class=\"line-info\">\n          <h1><span class=\"text-info\"> Desktop Application </span> </h1>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <div class=\"card card-coin card-plain\">\n            <div class=\"card-header\">\n              <img src=\"assets/img/windows-icon.png\" class=\"img-center img-fluid\">\n            </div>\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-md-12 text-center\">\n                  <h4 class=\"text-uppercase\">Windows</h4><span></span>\n                  <hr class=\"line-primary\">\n                </div>\n              </div>\n              <div class=\"row\">\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\">Download the latest version of Audio Suite on Windows now.</li>\n                  <!-- <li class=\"list-group-item\">100 emails</li>\n                  <li class=\"list-group-item\">24/7 Support</li> -->\n                </ul>\n              </div>\n            </div>\n            <div class=\"card-footer text-center\">\n              <button class=\"btn btn-primary btn-simple\">Start Download</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card card-coin card-plain\">\n            <div class=\"card-header\">\n              <img src=\"assets/img/linux-icon.png\" class=\"img-center img-fluid\"></div>\n              <div class=\"card-body\">\n                <div class=\"row\">\n                  <div class=\"col-md-12 text-center\">\n                    <h4 class=\"text-uppercase\">Linux</h4><span></span>\n                    <hr class=\"line-success\">\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <ul class=\"list-group\">\n                    <li class=\"list-group-item\">Download the latest version of Audio Suite on Linux now.</li>\n                    <!-- <li class=\"list-group-item\">1000 emails</li>\n                    <li class=\"list-group-item\">24/7 Support</li> -->\n                  </ul>\n                </div>\n              </div>\n              <div class=\"card-footer text-center\">\n                <button class=\"btn btn-success btn-simple\">Start Download</button>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"card card-coin card-plain\">\n              <div class=\"card-header\">\n                <img src=\"assets/img/mac-icon.png\" class=\"img-center img-fluid\">\n              </div>\n              <div class=\"card-body\">\n                <div class=\"row\">\n                  <div class=\"col-md-12 text-center\">\n                    <h4 class=\"text-uppercase\">MAC</h4><span></span>\n                    <hr class=\"line-info\">\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <ul class=\"list-group\">\n                    <li class=\"list-group-item\">Download the latest version of Audio Suite on MAC now.</li>\n                    <!-- <li class=\"list-group-item\">10K emails</li>\n                    <li class=\"list-group-item\">24/7 Support</li> -->\n                  </ul>\n                </div>\n              </div>\n              <div class=\"card-footer text-center\">\n                <button class=\"btn btn-info btn-simple\">Start Download</button>\n              </div>\n            </div>\n          </div>\n      </div>\n    </div>\n  <!-- </section> -->\n\n\n  <!-- <section class=\"section section-lg section-coins\"> -->\n    <img src=\"assets/img/path3.png\" class=\"path\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <hr class=\"line-info\">\n          <h1><span class=\"text-info\"> Virtual Reality </span></h1>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <div class=\"card card-coin card-plain\">\n            <div class=\"card-header\">\n              <img src=\"assets/img/vr2-icon.png\" class=\"img-center img-fluid\">\n            </div>\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-md-12 text-center\">\n                  <h4 class=\"text-uppercase\">Headset Executable</h4><span>Turn your virtual office into a reality!</span>\n                  <hr class=\"line-primary\">\n                </div>\n              </div>\n              <div class=\"row\">\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\">Download the VR Executable to experience <b>ALL</b> Audio-Suite features through Virtual Reality.</li>\n                  <!-- <li class=\"list-group-item\">100 emails</li>\n                  <li class=\"list-group-item\">24/7 Support</li> -->\n                </ul>\n              </div>\n            </div>\n            <div class=\"card-footer text-center\">\n              <button class=\"btn btn-primary btn-simple\">Start Download</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card card-coin card-plain\">\n            <div class=\"card-header\">\n              <img src=\"assets/img/desktop-icon.png\" class=\"img-center img-fluid\"></div>\n              <div class=\"card-body\">\n                <div class=\"row\">\n                  <div class=\"col-md-12 text-center\">\n                    <h4 class=\"text-uppercase\">Desktop Executable</h4><span> No headset? No problem!</span>\n                    <hr class=\"line-success\">\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <ul class=\"list-group\">\n                    <li class=\"list-group-item\">The Desktop Executable allows you to enjoy the VR experience through your screen, headset free.</li>\n                    <!-- <li class=\"list-group-item\">1000 emails</li>\n                    <li class=\"list-group-item\">24/7 Support</li> -->\n                  </ul>\n                </div>\n              </div>\n              <div class=\"card-footer text-center\">\n                <button class=\"btn btn-success btn-simple\">Start Download</button>\n              </div>\n            </div>\n          </div>\n      </div>\n    </div>\n  <!-- </section> -->\n\n\n  <footer class=\"footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-3\"><h1 class=\"title\">BLK•</h1></div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/home']\"> Home </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/landing']\"> Landing </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/register']\"> Register </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/profile']\"> Profile </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/contact-us?ref=blkdsa-footer\">\n                Contact Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/about-us?ref=blkdsa-footer\">\n                About Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/blog?ref=blkdsa-footer\">\n                Blog\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://opensource.org/licenses/MIT\">\n                License\n              </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <h3 class=\"title\">Follow us:</h3>\n          <div class=\"btn-wrapper profile\">\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://twitter.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-twitter\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://www.facebook.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-facebook-square\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple\"\n              href=\"https://dribbble.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-dribbble\"> </i>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n</div>\n</body>\n");

/***/ }),

/***/ "VPZa":
/*!************************************************!*\
  !*** ./src/app/pages/user/user.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidebar {\n  display: block;\n  margin: 0;\n  padding: 0;\n  width: 15%;\n  background: linear-gradient(45deg, #0afacf 0%, #dc7bff 100%);\n  position: fixed;\n  height: 100%;\n  overflow: auto;\n  font-size: 20px;\n  border-top-right-radius: 25px;\n  border-bottom-right-radius: 25px;\n  z-index: 2;\n}\n.sidebar #sidebar-title {\n  margin-top: 15px;\n  color: black;\n  text-align: center;\n}\n.sidebar #sidebar-officeHeader {\n  margin-left: 5px;\n  color: black;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  font-size: x-large;\n  cursor: pointer;\n}\n.sidebar #sidebar-officeHeader #officeListIcon {\n  font-size: small;\n}\n.sidebar #sidebar-officeHeader #officeSettingsListIcon {\n  font-size: small;\n}\n.sidebar #sidebar-officeHeader #quickSettingsListIcon {\n  font-size: small;\n}\n.sidebar .showOffices {\n  display: block;\n}\n.sidebar .showOffices .box {\n  width: 100%;\n  height: 50px;\n  background: transparent;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.sidebar .showOffices .box .container {\n  height: 15px;\n  width: 100%;\n  display: flex;\n  position: relative;\n}\n.sidebar .showOffices .box .container .circle {\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background-color: #000;\n  -webkit-animation: move 750ms linear 0ms infinite;\n          animation: move 750ms linear 0ms infinite;\n  margin-right: 30px;\n}\n.sidebar .showOffices .box .container .circle:first-child {\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation: grow 750ms linear 0ms infinite;\n          animation: grow 750ms linear 0ms infinite;\n}\n.sidebar .showOffices .box .container .circle:last-child {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin-right: 0;\n  animation: grow 750ms linear 0s infinite reverse;\n}\n.sidebar .showOffices .officeBtn {\n  color: black;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  position: relative;\n  width: 100%;\n  text-align: start;\n  cursor: pointer;\n}\n.sidebar .showOffices .officeBtn .officeName {\n  padding-left: 10%;\n}\n.sidebar .showOffices .officeBtn::before {\n  transform: scaleX(0);\n  transform-origin: bottom right;\n}\n.sidebar .showOffices .officeBtn:hover::before {\n  transform: scaleX(1);\n  transform-origin: bottom left;\n}\n.sidebar .showOffices .officeBtn::before {\n  content: \" \";\n  display: block;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  inset: 0 0 0 0;\n  background: #99ddff;\n  z-index: -1;\n  transition: transform 0.3s ease;\n}\n.sidebar .showOfficeSettings,\n.sidebar .showQuickSettings {\n  display: block;\n}\n.sidebar .showOfficeSettings .sidebarBtn,\n.sidebar .showQuickSettings .sidebarBtn {\n  color: black;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  position: relative;\n  width: 100%;\n  text-align: start;\n  cursor: pointer;\n}\n.sidebar .showOfficeSettings .sidebarBtn .settingType,\n.sidebar .showQuickSettings .sidebarBtn .settingType {\n  padding-left: 10%;\n}\n.sidebar .showOfficeSettings .sidebarBtn::before,\n.sidebar .showQuickSettings .sidebarBtn::before {\n  transform: scaleX(0);\n  transform-origin: bottom right;\n}\n.sidebar .showOfficeSettings .sidebarBtn:hover::before,\n.sidebar .showQuickSettings .sidebarBtn:hover::before {\n  transform: scaleX(1);\n  transform-origin: bottom left;\n}\n.sidebar .showOfficeSettings .sidebarBtn::before,\n.sidebar .showQuickSettings .sidebarBtn::before {\n  content: \" \";\n  display: block;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  inset: 0 0 0 0;\n  background: #99ddff;\n  z-index: -1;\n  transition: transform 0.7s ease;\n}\n.sidebar .hideOffices {\n  display: none;\n}\n.sidebar .hideOfficeSettings {\n  display: none;\n}\n.sidebar .hideQuickSettings {\n  display: none;\n}\n@-webkit-keyframes grow {\n  from {\n    transform: scale(0, 0);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1, 1);\n    opacity: 1;\n  }\n}\n@keyframes grow {\n  from {\n    transform: scale(0, 0);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1, 1);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes move {\n  from {\n    transform: translateX(0px);\n  }\n  to {\n    transform: translateX(45px);\n  }\n}\n@keyframes move {\n  from {\n    transform: translateX(0px);\n  }\n  to {\n    transform: translateX(45px);\n  }\n}\n.showHiddenSidebar {\n  display: flex;\n}\n.showHiddenSidebar #showTaskBar {\n  top: 10px;\n  left: 10px;\n  color: white;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding-top: 0.5%;\n  padding-left: 2%;\n  font-size: 30px;\n}\n.content {\n  margin-left: 15%;\n  padding: 1px 16px;\n  height: 100%;\n  width: 92%;\n  position: fixed;\n  text-align: center;\n  overflow: auto;\n}\n.content .newJoinOfficeContent {\n  display: flex;\n  position: fixed;\n  height: 100%;\n  width: 83%;\n  justify-content: center;\n  align-items: center;\n}\n.floorPlanContent {\n  width: 100%;\n  height: 85%;\n  position: fixed;\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n.floorPlanContent #grid-content {\n  height: inherit;\n}\n.floorPlanContent #grid-content .ktd-grid-item {\n  border: 1px solid white;\n  border-radius: 10px;\n  background: linear-gradient(145deg, #031d55, #032265);\n}\n.floorPlanContent #grid-content .ktd-grid-item .grid-item-content {\n  height: inherit;\n}\n.floorPlanContent #grid-content .ktd-grid-item .grid-item-content .grid-item-button {\n  width: 100%;\n  height: inherit;\n  background-color: inherit;\n  border: 0;\n  color: white;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.floorPlanContent #grid-content .ktd-grid-item .grid-item-content-leave {\n  height: inherit;\n}\n.floorPlanContent #grid-content .ktd-grid-item .grid-item-content-leave .grid-item-button {\n  width: 100%;\n  height: inherit;\n  background-color: #DA4FD2;\n  border: 0;\n  color: white;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.floorPlanContent #grid-content .ktd-grid-item .grid-item-content-remove {\n  height: inherit;\n}\n.floorPlanContent #grid-content .ktd-grid-item .grid-item-content-remove .grid-item-button {\n  width: 100%;\n  height: inherit;\n  background-color: inherit;\n  border: 0;\n  color: white;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.floorPlanContent #grid-content .ktd-grid-item:hover {\n  border-radius: 10px;\n  background: linear-gradient(145deg, #09e1ba, #0bffdd);\n}\n.floorPlanContent #grid-content .ktd-grid-item:hover .grid-item-content {\n  height: inherit;\n}\n.floorPlanContent #grid-content .ktd-grid-item:hover .grid-item-content .grid-item-button {\n  cursor: pointer;\n  width: 100%;\n  height: inherit;\n  background-color: inherit;\n  border: 0;\n  color: black;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.floorPlanContent #grid-content .ktd-grid-item:hover .grid-item-content-leave {\n  height: inherit;\n}\n.floorPlanContent #grid-content .ktd-grid-item:hover .grid-item-content-leave .grid-item-button {\n  cursor: pointer;\n  width: 100%;\n  height: inherit;\n  background-color: #DA4FD2;\n  border: 0;\n  color: white;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.floorPlanContent #grid-content .ktd-grid-item:hover .grid-item-content-remove {\n  height: inherit;\n}\n.floorPlanContent #grid-content .ktd-grid-item:hover .grid-item-content-remove .grid-item-button {\n  cursor: -webkit-grab;\n  cursor: grab;\n  width: 100%;\n  height: inherit;\n  background-color: inherit;\n  border: 0;\n  color: black;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.floorPlanContent #UserRoomList-content {\n  min-height: 85vh;\n  border-radius: 50px;\n  background: #171941;\n  box-shadow: inset 20px 20px 60px #141537, inset -20px -20px 60px #1a1d4b;\n}\n.floorPlanContent #UserRoomList-content #sidebar-openOrientationHeader {\n  color: white;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  padding-left: 12%;\n  padding-top: 5%;\n  width: 100%;\n  text-align: start;\n  cursor: pointer;\n  padding-bottom: 5%;\n  border-bottom: 1px solid white;\n}\n.floorPlanContent #UserRoomList-content #sidebar-openOrientationHeader .icon-minimal-down {\n  font-size: small;\n}\n.floorPlanContent #UserRoomList-content #sidebar-closeOrientationHeader {\n  display: none;\n  color: white;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  padding-left: 12%;\n  padding-top: 5%;\n  width: 100%;\n  text-align: start;\n  cursor: pointer;\n  padding-bottom: 5%;\n  border-bottom: 1px solid white;\n}\n.floorPlanContent #UserRoomList-content #sidebar-closeOrientationHeader .icon-minimal-down {\n  font-size: small;\n}\n.floorPlanContent #UserRoomList-content #sidebar-roomHeader {\n  color: white;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  padding-left: 12%;\n  padding-top: 5%;\n  width: 100%;\n  text-align: start;\n  cursor: pointer;\n}\n.floorPlanContent #UserRoomList-content #sidebar-roomHeader .icon-minimal-down {\n  font-size: small;\n}\n.floorPlanContent #UserRoomList-content .underline {\n  --line: #646B8C;\n  --color: #2B3044;\n  text-decoration: none;\n  color: var(--color);\n  position: relative;\n}\n.floorPlanContent #UserRoomList-content .underline span {\n  background-image: linear-gradient(0deg, var(--line) 0%, var(--line) 100%);\n  background-position: 100% 100%;\n  background-repeat: no-repeat;\n  background-size: var(--background-size, 100%) 1px;\n  transition: background-size 0.2s linear var(--background-delay, 0.15s);\n  font-size: 16px;\n  line-height: 20px;\n  transform: translateZ(0);\n}\n.floorPlanContent #UserRoomList-content .underline svg {\n  vertical-align: top;\n  display: inline;\n  line-height: 1;\n  width: 13px;\n  height: 20px;\n  position: relative;\n  left: -2px;\n  fill: none;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 1px;\n  stroke: var(--line);\n  stroke-dasharray: 7.95 30;\n  stroke-dashoffset: var(--stroke-dashoffset, 46);\n  transition: stroke-dashoffset var(--stroke-duration, 0.15s) var(--stroke-easing, linear) var(--stroke-delay, 0s);\n}\n.floorPlanContent #UserRoomList-content .underline:hover {\n  --background-size: 0%;\n  --background-delay: 0s;\n  --stroke-dashoffset: 26;\n  --stroke-duration: .3s;\n  --stroke-easing: cubic-bezier(.3, 1.5, .5, 1);\n  --stroke-delay: .195s;\n}\n.floorPlanContent .addRoomContainer {\n  display: flex;\n}\n.floorPlanContent .addRoomContainer #showAddRoomModalBtn {\n  justify-content: left;\n}\n.TextChannelContent {\n  position: fixed;\n  height: 84.5%;\n  width: 86%;\n}\n.TextChannelContent .messageBoard {\n  height: 94%;\n  padding-right: 3%;\n  margin-bottom: 1%;\n  border-top: 1px solid white;\n  color: black;\n  overflow-y: scroll;\n}\n.TextChannelContent .messageBoard .message {\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n  gap: 10px;\n  grid-template-areas: \"a a a a b b b b\";\n}\n.TextChannelContent .messageBoard .message .incomming {\n  background-color: #03205e;\n  border-radius: 5px;\n  padding: 10px;\n  margin: 10px 0;\n  grid-area: a;\n  text-align: left;\n}\n.TextChannelContent .messageBoard .message .incomming .messageContent {\n  overflow-x: hidden;\n  word-wrap: break-word;\n}\n.TextChannelContent .messageBoard .message .outgoing {\n  background-color: #03205e;\n  border-radius: 5px;\n  padding: 10px;\n  margin: 10px 0;\n  grid-area: b;\n  text-align: left;\n}\n.TextChannelContent .messageBoard .message .outgoing .messageContent {\n  overflow-x: hidden;\n  word-wrap: break-word;\n}\n.TextChannelContent .newMessageInput {\n  display: flex;\n  padding-left: 5px;\n  padding-right: 5px;\n  margin-right: 3%;\n}\n.TextChannelContent .newMessageInput #sendOfficeMessageBtn {\n  margin-left: 1%;\n}\n.timeTrackerContent {\n  position: fixed;\n  height: 84.5%;\n  width: 86%;\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n.timeTrackerContent .newTrackerForm {\n  display: inline-flex;\n  justify-content: center;\n  width: 100%;\n}\n.timeTrackerContent .newTrackerForm #workDescription {\n  width: 50%;\n  background-color: transparent;\n  border-radius: 15px;\n}\n.timeTrackerContent .newTrackerForm #ProjectDiv {\n  width: 10%;\n  height: 100%;\n}\n.timeTrackerContent .newTrackerForm #ProjectDiv #selectedProject {\n  width: 100%;\n  height: 100%;\n}\n.timeTrackerContent .newTrackerForm #ProjectDiv #selectedProject #removeProject-btn {\n  width: 100%;\n  height: 100%;\n  margin: 0px;\n  padding-left: 0px;\n  padding-right: 0px;\n  text-align: center;\n}\n.timeTrackerContent .newTrackerForm #ProjectDiv #ProjectDropdown {\n  width: 100%;\n  height: 100%;\n}\n.timeTrackerContent .newTrackerForm #ProjectDiv #ProjectDropdown #project-btn {\n  width: 100%;\n  height: 100%;\n  margin-bottom: 0px;\n  padding-left: 10px;\n  padding-right: 10px;\n  text-align: center;\n}\n.timeTrackerContent .newTrackerForm #TagDiv {\n  width: 10%;\n  height: 100%;\n}\n.timeTrackerContent .newTrackerForm #TagDiv #selectedTag {\n  width: 100%;\n  height: 100%;\n}\n.timeTrackerContent .newTrackerForm #TagDiv #selectedTag #removeTag-btn {\n  width: 100%;\n  height: 100%;\n  margin: 0px;\n  padding-left: 0px;\n  padding-right: 0px;\n  text-align: center;\n}\n.timeTrackerContent .newTrackerForm #TagDiv #TagDropdown {\n  width: 100%;\n  height: 100%;\n}\n.timeTrackerContent .newTrackerForm #TagDiv #TagDropdown #tag-btn {\n  width: 100%;\n  height: 100%;\n  margin-bottom: 0px;\n  padding-left: 10px;\n  padding-right: 10px;\n  text-align: center;\n}\n.timeTrackerContent .newTrackerForm #startTimer-btn {\n  width: 7%;\n  margin-right: 0.5%;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  padding-left: 10px;\n  padding-right: 10px;\n  text-align: center;\n}\n.timeTrackerContent .newTrackerForm #stopTimer-btn {\n  width: 7%;\n  margin-left: 0.5%;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  padding-left: 10px;\n  padding-right: 10px;\n  text-align: center;\n}\n.timeTrackerContent .newTrackerForm #timer {\n  width: 15%;\n  height: inherit;\n}\n.timeTrackerContent .newTrackerForm #timer p {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  top: 25%;\n  font-size: medium;\n}\n.timeTrackerContent .newTrackerFormTop {\n  display: inline-flex;\n  justify-content: center;\n  width: 100%;\n}\n.timeTrackerContent .newTrackerFormTop #workDescription {\n  width: 80%;\n  background-color: transparent;\n  border-radius: 15px;\n}\n.timeTrackerContent .newTrackerFormTop #timer {\n  width: 20%;\n  height: inherit;\n}\n.timeTrackerContent .newTrackerFormTop #timer p {\n  width: 100%;\n  height: 100%;\n}\n.timeTrackerContent .newTrackerFormBottom {\n  display: inline-flex;\n  justify-content: center;\n  width: 100%;\n}\n.timeTrackerContent .newTrackerFormBottom #ProjectDiv {\n  width: 25%;\n  height: 100%;\n}\n.timeTrackerContent .newTrackerFormBottom #ProjectDiv #selectedProject {\n  width: 100%;\n  height: 100%;\n}\n.timeTrackerContent .newTrackerFormBottom #ProjectDiv #selectedProject p {\n  width: 100%;\n  height: 100%;\n}\n.timeTrackerContent .newTrackerFormBottom #ProjectDiv #ProjectDropdown {\n  width: 100%;\n  height: 100%;\n}\n.timeTrackerContent .newTrackerFormBottom #ProjectDiv #ProjectDropdown #project-btn {\n  width: 100%;\n  height: 100%;\n  margin-bottom: 0px;\n  padding-left: 10px;\n  padding-right: 10px;\n  text-align: center;\n}\n.timeTrackerContent .newTrackerFormBottom #AddTagDiv {\n  width: 25%;\n  height: 100%;\n}\n.timeTrackerContent .newTrackerFormBottom #AddTagDiv #tag-btn {\n  width: 100%;\n  height: 100%;\n  margin-bottom: 0px;\n  padding-left: 10px;\n  padding-right: 10px;\n  text-align: center;\n}\n.timeTrackerContent .newTrackerFormBottom #startTimer-btn {\n  width: 25%;\n  margin-right: 0.5%;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  padding-left: 10px;\n  padding-right: 10px;\n  text-align: center;\n}\n.timeTrackerContent .newTrackerFormBottom #stopTimer-btn {\n  width: 25%;\n  margin-left: 0.5%;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  padding-left: 10px;\n  padding-right: 10px;\n  text-align: center;\n}\n.timeTrackerContent #userTimeTrackerList #instanceListHeader {\n  display: inline-flex;\n  justify-content: left;\n  width: 95%;\n  margin-top: 3%;\n  border-bottom: 1px solid white;\n}\n.timeTrackerContent #userTimeTrackerList #instanceListHeader #instanceHeader {\n  width: 65%;\n  height: 100%;\n  padding-left: 3%;\n  text-align: left;\n}\n.timeTrackerContent #userTimeTrackerList #instanceListHeader #instanceHeaderDate {\n  width: 15%;\n  height: 100%;\n  padding-left: 0px;\n  text-align: center;\n}\n.timeTrackerContent #userTimeTrackerList #instanceListHeader #instanceHeaderDuration {\n  width: 20%;\n  height: 100%;\n  padding-left: 0px;\n  text-align: center;\n}\n.timeTrackerContent #userTimeTrackerList .instanceItem {\n  margin-top: 2%;\n  display: inline-flex;\n  justify-content: center;\n  width: 95%;\n  height: 5vh;\n  background-color: #141537;\n}\n.timeTrackerContent #userTimeTrackerList .instanceItem .instanceDescription {\n  width: 45%;\n  height: 100%;\n  padding-left: 3%;\n  text-align: left;\n  position: relative;\n  top: 25%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.timeTrackerContent #userTimeTrackerList .instanceItem .projectDisabledBtn {\n  width: 10%;\n  height: 100%;\n  margin-bottom: 0px;\n  padding-left: 10px;\n  padding-right: 10px;\n  text-align: center;\n}\n.timeTrackerContent #userTimeTrackerList .instanceItem .tagDisabledBtn {\n  width: 10%;\n  height: 100%;\n  margin-bottom: 0px;\n  padding-left: 10px;\n  padding-right: 10px;\n  text-align: center;\n}\n.timeTrackerContent #userTimeTrackerList .instanceItem .instanceDate {\n  width: 15%;\n  height: 100%;\n  text-align: center;\n  position: relative;\n  top: 25%;\n}\n.timeTrackerContent #userTimeTrackerList .instanceItem .instanceStartEnd {\n  width: 10%;\n  height: 100%;\n  text-align: center;\n  position: relative;\n  top: 25%;\n}\n.timeTrackerContent #userTimeTrackerList .instanceItem .instanceDuration {\n  width: 10%;\n  height: 100%;\n  text-align: center;\n  position: relative;\n  top: 25%;\n}\n.timeTrackerContent .TimeTrackProjects .timeTrackerProjectForms {\n  display: inline-flex;\n  justify-content: center;\n  width: 95%;\n}\n.timeTrackerContent .TimeTrackProjects .timeTrackerProjectForms #filterProjectListForm {\n  width: 15%;\n  height: 100%;\n}\n.timeTrackerContent .TimeTrackProjects .timeTrackerProjectForms #filterProjectListForm #filter-dropdown {\n  width: 100%;\n  height: 100%;\n  margin: 0px;\n}\n.timeTrackerContent .TimeTrackProjects .timeTrackerProjectForms #SeparatingSpace {\n  width: 35%;\n}\n.timeTrackerContent .TimeTrackProjects .timeTrackerProjectForms #addNewProjectForm {\n  display: inline-flex;\n  justify-content: center;\n  width: 50%;\n  height: 100%;\n}\n.timeTrackerContent .TimeTrackProjects .timeTrackerProjectForms #addNewProjectForm #newProjectNameInput {\n  width: 79%;\n  height: 100%;\n  margin: 0px;\n  margin-right: 0.5%;\n}\n.timeTrackerContent .TimeTrackProjects .timeTrackerProjectForms #addNewProjectForm #addNewProject-btn {\n  width: 20%;\n  height: 100%;\n  margin: 0px;\n  margin-left: 0.5%;\n  padding-left: 10px;\n  padding-right: 10px;\n  text-align: center;\n}\n.timeTrackerContent .TimeTrackProjects .timeTrackerProjectList #projectListHeader {\n  display: inline-flex;\n  justify-content: left;\n  width: 95%;\n  margin-top: 3%;\n  border-bottom: 1px solid white;\n}\n.timeTrackerContent .TimeTrackProjects .timeTrackerProjectList #projectListHeader #projectNameHeader {\n  width: 75%;\n  height: 100%;\n  padding-left: 3%;\n  text-align: left;\n}\n.timeTrackerContent .TimeTrackProjects .timeTrackerProjectList .projectItem {\n  margin-top: 2%;\n  display: inline-flex;\n  justify-content: center;\n  width: 95%;\n  height: 5vh;\n  background-color: #141537;\n}\n.timeTrackerContent .TimeTrackProjects .timeTrackerProjectList .projectItem .projectNameDiv {\n  width: 75%;\n  height: 100%;\n}\n.timeTrackerContent .TimeTrackProjects .timeTrackerProjectList .projectItem .projectNameDiv .projectName {\n  width: 100%;\n  height: 100%;\n  padding-left: 3%;\n  text-align: left;\n  margin-bottom: 0px;\n  position: relative;\n  top: 25%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.timeTrackerContent .TimeTrackProjects .timeTrackerProjectList .projectItem .spacer {\n  width: 5%;\n  height: 100%;\n}\n.timeTrackerContent .TimeTrackProjects .timeTrackerProjectList .projectItem .projectEditBtn {\n  width: 9%;\n  height: 100%;\n  margin: 0px;\n  margin-right: 0.5%;\n  padding-left: 10px;\n  padding-right: 10px;\n  text-align: center;\n}\n.timeTrackerContent .TimeTrackProjects .timeTrackerProjectList .projectItem .projectDeleteBtn {\n  width: 9%;\n  height: 100%;\n  margin: 0px;\n  margin-left: 0.5%;\n  padding-left: 10px;\n  padding-right: 10px;\n  text-align: center;\n}\n.timeTrackerContent .TimeTrackTags .timeTrackerTagForms {\n  display: inline-flex;\n  justify-content: center;\n  width: 95%;\n}\n.timeTrackerContent .TimeTrackTags .timeTrackerTagForms #filterTagListForm {\n  width: 15%;\n  height: 100%;\n}\n.timeTrackerContent .TimeTrackTags .timeTrackerTagForms #filterTagListForm #filter-dropdown {\n  width: 100%;\n  height: 100%;\n  margin: 0px;\n}\n.timeTrackerContent .TimeTrackTags .timeTrackerTagForms #SeparatingSpace {\n  width: 35%;\n}\n.timeTrackerContent .TimeTrackTags .timeTrackerTagForms #addNewTagForm {\n  display: inline-flex;\n  justify-content: center;\n  width: 50%;\n  height: 100%;\n}\n.timeTrackerContent .TimeTrackTags .timeTrackerTagForms #addNewTagForm #newTagNameInput {\n  width: 79%;\n  height: 100%;\n  margin: 0px;\n  margin-right: 0.5%;\n}\n.timeTrackerContent .TimeTrackTags .timeTrackerTagForms #addNewTagForm #addNewTag-btn {\n  width: 20%;\n  height: 100%;\n  margin: 0px;\n  margin-left: 0.5%;\n  padding-left: 10px;\n  padding-right: 10px;\n  text-align: center;\n}\n.timeTrackerContent .TimeTrackTags .timeTrackerTagList #tagListHeader {\n  display: inline-flex;\n  justify-content: left;\n  width: 95%;\n  margin-top: 3%;\n  border-bottom: 1px solid white;\n}\n.timeTrackerContent .TimeTrackTags .timeTrackerTagList #tagListHeader #tagNameHeader {\n  width: 75%;\n  height: 100%;\n  padding-left: 3%;\n  text-align: left;\n}\n.timeTrackerContent .TimeTrackTags .timeTrackerTagList .tagItem {\n  margin-top: 2%;\n  display: inline-flex;\n  justify-content: center;\n  width: 95%;\n  height: 5vh;\n  background-color: #141537;\n}\n.timeTrackerContent .TimeTrackTags .timeTrackerTagList .tagItem .tagName {\n  width: 75%;\n  height: 100%;\n  padding-left: 3%;\n  text-align: left;\n  position: relative;\n  top: 25%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.timeTrackerContent .TimeTrackTags .timeTrackerTagList .tagItem .spacer {\n  width: 5%;\n  height: 100%;\n}\n.timeTrackerContent .TimeTrackTags .timeTrackerTagList .tagItem .tagEditBtn {\n  width: 9%;\n  height: 100%;\n  margin: 0px;\n  margin-right: 0.5%;\n  padding-left: 10px;\n  padding-right: 10px;\n  text-align: center;\n}\n.timeTrackerContent .TimeTrackTags .timeTrackerTagList .tagItem .tagDeleteBtn {\n  width: 9%;\n  height: 100%;\n  margin: 0px;\n  margin-left: 0.5%;\n  padding-left: 10px;\n  padding-right: 10px;\n  text-align: center;\n}\n.timeTrackerContent #timeTrackerOptions {\n  min-height: 85vh;\n  border-radius: 50px;\n  background: #171941;\n  box-shadow: inset 20px 20px 60px #141537, inset -20px -20px 60px #1a1d4b;\n}\n.timeTrackerContent #timeTrackerOptions .sidebar-timeTrackerOption {\n  color: white;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  padding-left: 12%;\n  padding-top: 5%;\n  width: 100%;\n  text-align: start;\n  cursor: pointer;\n}\n.timeTrackerContent #timeTrackerOptions .sidebar-timeTrackerOption .icon-minimal-down {\n  font-size: small;\n}\n.timeTrackerContent #timeTrackerOptions .underline {\n  --line: #646B8C;\n  --color: #2B3044;\n  text-decoration: none;\n  color: var(--color);\n  position: relative;\n}\n.timeTrackerContent #timeTrackerOptions .underline span {\n  background-image: linear-gradient(0deg, var(--line) 0%, var(--line) 100%);\n  background-position: 100% 100%;\n  background-repeat: no-repeat;\n  background-size: var(--background-size, 100%) 1px;\n  transition: background-size 0.2s linear var(--background-delay, 0.15s);\n  font-size: 16px;\n  line-height: 20px;\n  transform: translateZ(0);\n}\n.timeTrackerContent #timeTrackerOptions .underline svg {\n  vertical-align: top;\n  display: inline;\n  line-height: 1;\n  width: 13px;\n  height: 20px;\n  position: relative;\n  left: -2px;\n  fill: none;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 1px;\n  stroke: var(--line);\n  stroke-dasharray: 7.95 30;\n  stroke-dashoffset: var(--stroke-dashoffset, 46);\n  transition: stroke-dashoffset var(--stroke-duration, 0.15s) var(--stroke-easing, linear) var(--stroke-delay, 0s);\n}\n.timeTrackerContent #timeTrackerOptions .underline:hover {\n  --background-size: 0%;\n  --background-delay: 0s;\n  --stroke-dashoffset: 26;\n  --stroke-duration: .3s;\n  --stroke-easing: cubic-bezier(.3, 1.5, .5, 1);\n  --stroke-delay: .195s;\n}\n.board_content {\n  background: #0079bf;\n  display: flex;\n  padding: 0 5px;\n  height: 100vh;\n}\n#messageBoard::webkit-scrollbar {\n  display: none;\n  width: 0;\n  background: transparent;\n}\n#messageBoard::webkit-scrollbar {\n  display: none;\n  width: 0;\n  background: transparent;\n}\n.messageBoard {\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3VzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsNERBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7QUFDSjtBQUNJO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDUjtBQUVJO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUFSO0FBRVE7RUFDSSxnQkFBQTtBQUFaO0FBR1E7RUFDSSxnQkFBQTtBQURaO0FBSVE7RUFDSSxnQkFBQTtBQUZaO0FBTUk7RUFDSSxjQUFBO0FBSlI7QUFNUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUpaO0FBT1k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUxoQjtBQU1nQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlEQUFBO1VBQUEseUNBQUE7RUFDQSxrQkFBQTtBQUpwQjtBQU1vQjtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxpREFBQTtVQUFBLHlDQUFBO0FBSnBCO0FBT29CO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxnREFBQTtBQUxwQjtBQVdRO0VBQ0ksWUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFUWjtBQVdZO0VBQ0ksaUJBQUE7QUFUaEI7QUFhUTtFQUNJLG9CQUFBO0VBQ0EsOEJBQUE7QUFYWjtBQWNRO0VBQ0ksb0JBQUE7RUFDQSw2QkFBQTtBQVpaO0FBZVE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUFRLFFBQUE7RUFBVSxTQUFBO0VBQVcsT0FBQTtFQUM3QixjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7QUFWWjtBQWNJOztFQUVJLGNBQUE7QUFaUjtBQWNROztFQUNJLFlBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBWFo7QUFhWTs7RUFDSSxpQkFBQTtBQVZoQjtBQWNROztFQUNJLG9CQUFBO0VBQ0EsOEJBQUE7QUFYWjtBQWNROztFQUNJLG9CQUFBO0VBQ0EsNkJBQUE7QUFYWjtBQWNROztFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQVEsUUFBQTtFQUFVLFNBQUE7RUFBVyxPQUFBO0VBQzdCLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtBQVJaO0FBWUk7RUFDSSxhQUFBO0FBVlI7QUFhSTtFQUNJLGFBQUE7QUFYUjtBQWNJO0VBQ0ksYUFBQTtBQVpSO0FBZ0JBO0VBQ0k7SUFBTSxzQkFBQTtJQUF1QixVQUFBO0VBWC9CO0VBWUU7SUFBSSxzQkFBQTtJQUF1QixVQUFBO0VBUjdCO0FBQ0Y7QUFLQTtFQUNJO0lBQU0sc0JBQUE7SUFBdUIsVUFBQTtFQVgvQjtFQVlFO0lBQUksc0JBQUE7SUFBdUIsVUFBQTtFQVI3QjtBQUNGO0FBVUE7RUFDSTtJQUFNLDBCQUFBO0VBUFI7RUFRRTtJQUFJLDJCQUFBO0VBTE47QUFDRjtBQUVBO0VBQ0k7SUFBTSwwQkFBQTtFQVBSO0VBUUU7SUFBSSwyQkFBQTtFQUxOO0FBQ0Y7QUFPQTtFQUNJLGFBQUE7QUFMSjtBQU1JO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUpSO0FBUUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBTEo7QUFPSTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBTFI7QUFTQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFOSjtBQVFJO0VBQ0ksZUFBQTtBQU5SO0FBUVE7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscURBQUE7QUFOWjtBQVdZO0VBQ0ksZUFBQTtBQVRoQjtBQVdnQjtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLHFJQUFBO0FBVHBCO0FBY1k7RUFDSSxlQUFBO0FBWmhCO0FBY2dCO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EscUlBQUE7QUFacEI7QUFpQlk7RUFDSSxlQUFBO0FBZmhCO0FBaUJnQjtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLHFJQUFBO0FBZnBCO0FBcUJRO0VBQ0ksbUJBQUE7RUFDQSxxREFBQTtBQW5CWjtBQXNCWTtFQUNJLGVBQUE7QUFwQmhCO0FBc0JnQjtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxxSUFBQTtBQXBCcEI7QUF5Qlk7RUFDSSxlQUFBO0FBdkJoQjtBQXlCZ0I7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EscUlBQUE7QUF2QnBCO0FBNEJZO0VBQ0ksZUFBQTtBQTFCaEI7QUE0QmdCO0VBQ0ksb0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EscUlBQUE7QUExQnBCO0FBaUNJO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0VBQUE7QUEvQlI7QUFrQ1E7RUFDSSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FBaENaO0FBa0NZO0VBQ0ksZ0JBQUE7QUFoQ2hCO0FBb0NRO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUFsQ1o7QUFvQ1k7RUFDSSxnQkFBQTtBQWxDaEI7QUFzQ1E7RUFDSSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFwQ1o7QUFzQ1k7RUFDSSxnQkFBQTtBQXBDaEI7QUF3Q1E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUF0Q1o7QUF1Q1k7RUFDSSx5RUFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpREFBQTtFQUNBLHNFQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QUFyQ2hCO0FBdUNZO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSwrQ0FBQTtFQUNBLGdIQUFBO0FBckNoQjtBQXVDWTtFQUNJLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkNBQUE7RUFDQSxxQkFBQTtBQXJDaEI7QUEwQ0k7RUFDSSxhQUFBO0FBeENSO0FBMENRO0VBQ0kscUJBQUE7QUF4Q1o7QUE2Q0E7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUExQ0o7QUE0Q0k7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBMUNSO0FBNENRO0VBQ0ksYUFBQTtFQUNBLHFDQUFBO0VBQ0EsU0FBQTtFQUNBLHNDQUFBO0FBMUNaO0FBNENZO0VBRUkseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBM0NoQjtBQTZDZ0I7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0FBM0NwQjtBQStDWTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQTdDaEI7QUErQ2dCO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtBQTdDcEI7QUFtREk7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBakRSO0FBbURRO0VBQ0ksZUFBQTtBQWpEWjtBQXNEQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFuREo7QUFzREk7RUFDSSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQXBEUjtBQXNEUTtFQUNJLFVBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBcERaO0FBd0RRO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUF0RFo7QUF3RFk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQXREaEI7QUF3RGlCO0VBQ0csV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBdERwQjtBQTBEWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBeERoQjtBQTBEZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBeERwQjtBQTZEUTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FBM0RaO0FBNkRZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUEzRGhCO0FBNkRpQjtFQUNHLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQTNEcEI7QUErRFk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQTdEaEI7QUErRGdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQTdEcEI7QUFrRVE7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFoRVo7QUFtRVE7RUFDSSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFqRVo7QUFvRVE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQWxFWjtBQW9FWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7QUFsRWhCO0FBdUVJO0VBQ0ksb0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFyRVI7QUF1RVE7RUFDSSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQXJFWjtBQXlFUTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FBdkVaO0FBeUVZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUF2RWhCO0FBNEVJO0VBQ0ksb0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUExRVI7QUE0RVE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQTFFWjtBQTRFWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBMUVoQjtBQTRFaUI7RUFDRyxXQUFBO0VBQ0EsWUFBQTtBQTFFcEI7QUE4RVk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQTVFaEI7QUE4RWdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQTVFcEI7QUFpRlE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQS9FWjtBQWlGWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUEvRWhCO0FBbUZRO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBakZaO0FBb0ZRO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBbEZaO0FBdUZRO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFFQSxjQUFBO0VBQ0EsOEJBQUE7QUF0Rlo7QUF3Rlk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUF0RmhCO0FBeUZZO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBdkZoQjtBQTBGWTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQXhGaEI7QUE0RlE7RUFDSSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUExRlo7QUE0Rlk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFHQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUE1RmhCO0FBK0ZZO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQTdGaEI7QUFnR1k7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBOUZoQjtBQWlHWTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUEvRmhCO0FBa0dZO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQWhHaEI7QUFtR1k7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FBakdoQjtBQXdHUTtFQUNJLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FBdEdaO0FBd0dZO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUF0R2hCO0FBd0dnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQXRHcEI7QUEwR1k7RUFDSSxVQUFBO0FBeEdoQjtBQTJHWTtFQUNJLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQXpHaEI7QUEyR2dCO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUF6R3BCO0FBNEdnQjtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBMUdwQjtBQWdIWTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBRUEsY0FBQTtFQUNBLDhCQUFBO0FBL0doQjtBQWlIZ0I7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUEvR3BCO0FBbUhZO0VBQ0ksY0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBakhoQjtBQW1IZ0I7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQWpIcEI7QUFrSG9CO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFJQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFuSHhCO0FBdUhnQjtFQUNJLFNBQUE7RUFDQSxZQUFBO0FBckhwQjtBQXdIZ0I7RUFDSSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQXRIcEI7QUF5SGdCO0VBQ0ksU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUF2SHBCO0FBOEhRO0VBQ0ksb0JBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7QUE1SFo7QUE4SFk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQTVIaEI7QUE4SGdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBNUhwQjtBQWdJWTtFQUNJLFVBQUE7QUE5SGhCO0FBaUlZO0VBQ0ksb0JBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBL0hoQjtBQWlJZ0I7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQS9IcEI7QUFrSWdCO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFoSXBCO0FBc0lZO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFFQSxjQUFBO0VBQ0EsOEJBQUE7QUFySWhCO0FBdUlnQjtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQXJJcEI7QUF5SVk7RUFDSSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUF2SWhCO0FBeUlnQjtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUdBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQXpJcEI7QUE0SWdCO0VBQ0ksU0FBQTtFQUNBLFlBQUE7QUExSXBCO0FBNklnQjtFQUNJLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBM0lwQjtBQThJZ0I7RUFDSSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQTVJcEI7QUFrSkk7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx3RUFBQTtBQWhKUjtBQW1KUTtFQUNJLFlBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQWpKWjtBQW1KWTtFQUNJLGdCQUFBO0FBakpoQjtBQXFKUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQW5KWjtBQW9KWTtFQUNJLHlFQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLGlEQUFBO0VBQ0Esc0VBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtBQWxKaEI7QUFvSlk7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLCtDQUFBO0VBQ0EsZ0hBQUE7QUFsSmhCO0FBb0pZO0VBQ0kscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2Q0FBQTtFQUNBLHFCQUFBO0FBbEpoQjtBQXdKQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBckpKO0FBeUpBO0VBQ0ksYUFBQTtFQUNBLFFBQUE7RUFDQSx1QkFBQTtBQXRKSjtBQXlKQTtFQUNJLGFBQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7QUF0Sko7QUF5SkE7RUFDSSx3QkFBQTtFQUEyQixnQkFBQTtFQUMzQixxQkFBQTtFQUF3QixZQUFBO0FBcEo1QiIsImZpbGUiOiJ1c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXJ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMTAsMjUwLDIwNywxKSAwJSwgcmdiYSgyMjAsMTIzLDI1NSwxKSAxMDAlKTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjVweDtcbiAgICB6LWluZGV4OiAyO1xuXG4gICAgI3NpZGViYXItdGl0bGV7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgICNzaWRlYmFyLW9mZmljZUhlYWRlcntcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBmb250LXNpemU6IHgtbGFyZ2U7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAjb2ZmaWNlTGlzdEljb257XG4gICAgICAgICAgICBmb250LXNpemU6IHNtYWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgI29mZmljZVNldHRpbmdzTGlzdEljb257XG4gICAgICAgICAgICBmb250LXNpemU6IHNtYWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgI3F1aWNrU2V0dGluZ3NMaXN0SWNvbntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc2hvd09mZmljZXN7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgICAgIC5ib3h7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIC8vYm94LXNoYWRvdzogNHB4IDRweCAyMHB4IHJnYmEoMCwwLDAsMC4zKTtcblxuICAgICAgICAgICAgLmNvbnRhaW5lcntcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgLmNpcmNsZXtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IG1vdmUgNzUwbXMgbGluZWFyIDBtcyBpbmZpbml0ZTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6MDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDowO1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGdyb3cgNzUwbXMgbGluZWFyIDBtcyBpbmZpbml0ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxke1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBncm93IDc1MG1zIGxpbmVhciAwcyBpbmZpbml0ZSByZXZlcnNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm9mZmljZUJ0bntcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjpzdGFydDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICAgLm9mZmljZU5hbWV7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAub2ZmaWNlQnRuOjpiZWZvcmUgeyAgXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSByaWdodDtcbiAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAub2ZmaWNlQnRuOmhvdmVyOjpiZWZvcmUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcbiAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAub2ZmaWNlQnRuOjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDsgcmlnaHQ6IDA7IGJvdHRvbTogMDsgbGVmdDogMDtcbiAgICAgICAgICAgIGluc2V0OiAwIDAgMCAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogaHNsKDIwMCAxMDAlIDgwJSk7XG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zaG93T2ZmaWNlU2V0dGluZ3MsXG4gICAgLnNob3dRdWlja1NldHRpbmdze1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICAgICAuc2lkZWJhckJ0bntcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjpzdGFydDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICAgLnNldHRpbmdUeXBle1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnNpZGViYXJCdG46OmJlZm9yZSB7ICBcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIHJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgIC5zaWRlYmFyQnRuOmhvdmVyOjpiZWZvcmUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcbiAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAuc2lkZWJhckJ0bjo6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7IHJpZ2h0OiAwOyBib3R0b206IDA7IGxlZnQ6IDA7XG4gICAgICAgICAgICBpbnNldDogMCAwIDAgMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGhzbCgyMDAgMTAwJSA4MCUpO1xuICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjdzIGVhc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaGlkZU9mZmljZXN7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLmhpZGVPZmZpY2VTZXR0aW5nc3tcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAuaGlkZVF1aWNrU2V0dGluZ3N7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGdyb3cge1xuICAgIGZyb20ge3RyYW5zZm9ybTogc2NhbGUoMCwwKTsgb3BhY2l0eTogMDt9XG4gICAgdG8ge3RyYW5zZm9ybTogc2NhbGUoMSwxKTsgb3BhY2l0eTogMTt9XG59XG4gICAgXG5Aa2V5ZnJhbWVzIG1vdmUge1xuICAgIGZyb20ge3RyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpfVxuICAgIHRvIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDVweCl9XG59XG5cbi5zaG93SGlkZGVuU2lkZWJhcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgICNzaG93VGFza0JhcntcbiAgICAgICAgdG9wOiAxMHB4OyBcbiAgICAgICAgbGVmdDogMTBweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwLjUlO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIlO1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxufVxuXG4uY29udGVudHtcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xuICAgIHBhZGRpbmc6IDFweCAxNnB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogOTIlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG5cbiAgICAubmV3Sm9pbk9mZmljZUNvbnRlbnR7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogODMlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG59XG5cbi5mbG9vclBsYW5Db250ZW50e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogODUlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuXG4gICAgI2dyaWQtY29udGVudHtcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xuXG4gICAgICAgIC5rdGQtZ3JpZC1pdGVteyBcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDVkZWcsICMwMzFkNTUsICMwMzIyNjUpO1xuICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0NWRlZywgIzE1MTczYiwgIzE5MWI0Nik7XG4gICAgICAgICAgICAvLyBib3gtc2hhZG93OiAgMjBweCAyMHB4IDYwcHggIzE0MTUzNyxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIC0yMHB4IC0yMHB4IDYwcHggIzFhMWQ0YjtcblxuICAgICAgICAgICAgLmdyaWQtaXRlbS1jb250ZW50e1xuICAgICAgICAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcblxuICAgICAgICAgICAgICAgIC5ncmlkLWl0ZW0tYnV0dG9ue1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZ3JpZC1pdGVtLWNvbnRlbnQtbGVhdmV7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xuXG4gICAgICAgICAgICAgICAgLmdyaWQtaXRlbS1idXR0b257XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEQTRGRDI7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ncmlkLWl0ZW0tY29udGVudC1yZW1vdmV7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xuXG4gICAgICAgICAgICAgICAgLmdyaWQtaXRlbS1idXR0b257XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAua3RkLWdyaWQtaXRlbTpob3ZlcntcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCAjMDllMWJhLCAjMGJmZmRkKTtcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAuZ3JpZC1pdGVtLWNvbnRlbnR7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xuXG4gICAgICAgICAgICAgICAgLmdyaWQtaXRlbS1idXR0b257XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmdyaWQtaXRlbS1jb250ZW50LWxlYXZle1xuICAgICAgICAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcblxuICAgICAgICAgICAgICAgIC5ncmlkLWl0ZW0tYnV0dG9ue1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEQTRGRDI7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ncmlkLWl0ZW0tY29udGVudC1yZW1vdmV7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xuXG4gICAgICAgICAgICAgICAgLmdyaWQtaXRlbS1idXR0b257XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogLXdlYmtpdC1ncmFiOyBcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBncmFiO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgI1VzZXJSb29tTGlzdC1jb250ZW50e1xuICAgICAgICBtaW4taGVpZ2h0OiA4NXZoO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMTcxOTQxO1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAyMHB4IDIwcHggNjBweCAjMTQxNTM3LFxuICAgICAgICAgICAgICAgICAgICBpbnNldCAtMjBweCAtMjBweCA2MHB4ICMxYTFkNGI7XG5cbiAgICAgICAgI3NpZGViYXItb3Blbk9yaWVudGF0aW9uSGVhZGVye1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMiU7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNSU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246c3RhcnQ7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNSU7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG5cbiAgICAgICAgICAgIC5pY29uLW1pbmltYWwtZG93bntcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHNtYWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgI3NpZGViYXItY2xvc2VPcmllbnRhdGlvbkhlYWRlcntcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEyJTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjpzdGFydDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1JTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcblxuICAgICAgICAgICAgLmljb24tbWluaW1hbC1kb3due1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICNzaWRlYmFyLXJvb21IZWFkZXJ7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEyJTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjpzdGFydDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICAgLmljb24tbWluaW1hbC1kb3due1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAudW5kZXJsaW5lIHtcbiAgICAgICAgICAgIC0tbGluZTogIzY0NkI4QztcbiAgICAgICAgICAgIC0tY29sb3I6ICMyQjMwNDQ7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsIHZhcigtLWxpbmUpIDAlLCB2YXIoLS1saW5lKSAxMDAlKTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IHZhcigtLWJhY2tncm91bmQtc2l6ZSwgMTAwJSkgMXB4O1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtc2l6ZSAuMnMgbGluZWFyIHZhcigtLWJhY2tncm91bmQtZGVsYXksIC4xNXMpO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxM3B4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgbGVmdDogLTJweDtcbiAgICAgICAgICAgICAgICBmaWxsOiBub25lO1xuICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgICAgICAgICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xuICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aDogMXB4O1xuICAgICAgICAgICAgICAgIHN0cm9rZTogdmFyKC0tbGluZSk7XG4gICAgICAgICAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogNy45NSAzMDtcbiAgICAgICAgICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogdmFyKC0tc3Ryb2tlLWRhc2hvZmZzZXQsIDQ2KTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBzdHJva2UtZGFzaG9mZnNldCB2YXIoLS1zdHJva2UtZHVyYXRpb24sIC4xNXMpIHZhcigtLXN0cm9rZS1lYXNpbmcsIGxpbmVhcikgdmFyKC0tc3Ryb2tlLWRlbGF5LCAwcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQtc2l6ZTogMCU7XG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWRlbGF5OiAwcztcbiAgICAgICAgICAgICAgICAtLXN0cm9rZS1kYXNob2Zmc2V0OiAyNjtcbiAgICAgICAgICAgICAgICAtLXN0cm9rZS1kdXJhdGlvbjogLjNzO1xuICAgICAgICAgICAgICAgIC0tc3Ryb2tlLWVhc2luZzogY3ViaWMtYmV6aWVyKC4zLCAxLjUsIC41LCAxKTtcbiAgICAgICAgICAgICAgICAtLXN0cm9rZS1kZWxheTogLjE5NXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYWRkUm9vbUNvbnRhaW5lcntcbiAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAjc2hvd0FkZFJvb21Nb2RhbEJ0bntcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLlRleHRDaGFubmVsQ29udGVudHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaGVpZ2h0OiA4NC41JTtcbiAgICB3aWR0aDogODYlO1xuXG4gICAgLm1lc3NhZ2VCb2FyZHtcbiAgICAgICAgaGVpZ2h0OiA5NCU7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDMlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxJTtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcblxuICAgICAgICAubWVzc2FnZXtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg4LCAxZnIpO1xuICAgICAgICAgICAgZ2FwOiAxMHB4O1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJhIGEgYSBhIGIgYiBiIGJcIjtcblxuICAgICAgICAgICAgLmluY29tbWluZ3tcbiAgICAgICAgICAgICAgICAvL2JvcmRlcjogMnB4IHNvbGlkICNkZWRlZGU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAzMjA1ZTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGE7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgICAgICAgICAgICAgIC5tZXNzYWdlQ29udGVudHtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAub3V0Z29pbmd7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAzMjA1ZTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGI7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgICAgICAgICAgICAgIC5tZXNzYWdlQ29udGVudHtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm5ld01lc3NhZ2VJbnB1dHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzJTtcblxuICAgICAgICAjc2VuZE9mZmljZU1lc3NhZ2VCdG57XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMSU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi50aW1lVHJhY2tlckNvbnRlbnR7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGhlaWdodDogODQuNSU7XG4gICAgd2lkdGg6IDg2JTtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cbiAgICAubmV3VHJhY2tlckZvcm17XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgI3dvcmtEZXNjcmlwdGlvbntcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAvL2JvcmRlcjogMnB4IHNvbGlkIFxuICAgICAgICB9XG5cbiAgICAgICAgI1Byb2plY3REaXZ7XG4gICAgICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICAgICAgICAjc2VsZWN0ZWRQcm9qZWN0e1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICAgICAgICAgICAjcmVtb3ZlUHJvamVjdC1idG57XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgI1Byb2plY3REcm9wZG93bntcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgICAgICAgICAjcHJvamVjdC1idG57XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgI1RhZ0RpdntcbiAgICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgICAgICNzZWxlY3RlZFRhZ3tcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgICAgICAgICAgI3JlbW92ZVRhZy1idG57XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgI1RhZ0Ryb3Bkb3due1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICAgICAgICAgICN0YWctYnRue1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICNzdGFydFRpbWVyLWJ0bntcbiAgICAgICAgICAgIHdpZHRoOiA3JTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41JTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAjc3RvcFRpbWVyLWJ0bntcbiAgICAgICAgICAgIHdpZHRoOiA3JTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjUlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgICN0aW1lcntcbiAgICAgICAgICAgIHdpZHRoOiAxNSU7XG4gICAgICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XG5cbiAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDI1JTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICAubmV3VHJhY2tlckZvcm1Ub3B7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgI3dvcmtEZXNjcmlwdGlvbntcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAvL2JvcmRlcjogMnB4IHNvbGlkIFxuICAgICAgICB9XG5cbiAgICAgICAgI3RpbWVye1xuICAgICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcblxuICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgLm5ld1RyYWNrZXJGb3JtQm90dG9te1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICNQcm9qZWN0RGl2e1xuICAgICAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICAgICAgI3NlbGVjdGVkUHJvamVjdHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAjUHJvamVjdERyb3Bkb3due1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICAgICAgICAgICNwcm9qZWN0LWJ0bntcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAjQWRkVGFnRGl2e1xuICAgICAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICAgICAgI3RhZy1idG57XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAjc3RhcnRUaW1lci1idG57XG4gICAgICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjUlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgICNzdG9wVGltZXItYnRue1xuICAgICAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjUlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICN1c2VyVGltZVRyYWNrZXJMaXN0e1xuICAgICAgICAjaW5zdGFuY2VMaXN0SGVhZGVye1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gICAgICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICAgICAgLy9ib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcblxuICAgICAgICAgICAgI2luc3RhbmNlSGVhZGVye1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2NSU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMyU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDsgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgI2luc3RhbmNlSGVhZGVyRGF0ZXtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICNpbnN0YW5jZUhlYWRlckR1cmF0aW9ue1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnN0YW5jZUl0ZW17XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICAgICAgaGVpZ2h0OiA1dmg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxNTM3O1xuXG4gICAgICAgICAgICAuaW5zdGFuY2VEZXNjcmlwdGlvbntcbiAgICAgICAgICAgICAgICB3aWR0aDogNDUlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMlO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHRvcDogMjUlO1xuICAgICAgICAgICAgICAgIC8vd29yZC13cmFwOiBicmVhay13b3JkO1xuXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucHJvamVjdERpc2FibGVkQnRue1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50YWdEaXNhYmxlZEJ0bntcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaW5zdGFuY2VEYXRle1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNSU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgdG9wOiAyNSU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pbnN0YW5jZVN0YXJ0RW5ke1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgdG9wOiAyNSU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pbnN0YW5jZUR1cmF0aW9ue1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgdG9wOiAyNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuVGltZVRyYWNrUHJvamVjdHN7XG5cbiAgICAgICAgLnRpbWVUcmFja2VyUHJvamVjdEZvcm1ze1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiA5NSU7XG5cbiAgICAgICAgICAgICNmaWx0ZXJQcm9qZWN0TGlzdEZvcm17XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1JTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgICAgICAgICAjZmlsdGVyLWRyb3Bkb3due1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICNTZXBhcmF0aW5nU3BhY2V7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDM1JTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgI2FkZE5ld1Byb2plY3RGb3Jte1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICAgICAgICAgICAgI25ld1Byb2plY3ROYW1lSW5wdXR7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3OSU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41JTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAjYWRkTmV3UHJvamVjdC1idG57XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjUlO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAudGltZVRyYWNrZXJQcm9qZWN0TGlzdHtcbiAgICAgICAgICAgICNwcm9qZWN0TGlzdEhlYWRlcntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgICAgICAgICAvL2JvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG5cbiAgICAgICAgICAgICAgICAjcHJvamVjdE5hbWVIZWFkZXJ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzJTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wcm9qZWN0SXRlbXtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNXZoO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDE1Mzc7XG5cbiAgICAgICAgICAgICAgICAucHJvamVjdE5hbWVEaXZ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3ROYW1le1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMjUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3dvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9ICAgXG5cbiAgICAgICAgICAgICAgICAuc3BhY2Vye1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNSU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAucHJvamVjdEVkaXRCdG57XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5JTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjUlO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAucHJvamVjdERlbGV0ZUJ0bntcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDklO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMC41JTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLlRpbWVUcmFja1RhZ3N7XG4gICAgICAgIC50aW1lVHJhY2tlclRhZ0Zvcm1ze1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiA5NSU7XG5cbiAgICAgICAgICAgICNmaWx0ZXJUYWdMaXN0Rm9ybXtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICAgICAgICAgICNmaWx0ZXItZHJvcGRvd257XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgI1NlcGFyYXRpbmdTcGFjZXtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzUlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAjYWRkTmV3VGFnRm9ybXtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICAgICAgICAgICNuZXdUYWdOYW1lSW5wdXR7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3OSU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41JTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAjYWRkTmV3VGFnLWJ0bntcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNSU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC50aW1lVHJhY2tlclRhZ0xpc3R7XG4gICAgICAgICAgICAjdGFnTGlzdEhlYWRlcntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgICAgICAgICAvL2JvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG5cbiAgICAgICAgICAgICAgICAjdGFnTmFtZUhlYWRlcntcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMlO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRhZ0l0ZW17XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMiU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDV2aDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxNTM3O1xuXG4gICAgICAgICAgICAgICAgLnRhZ05hbWV7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzJTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDI1JTtcbiAgICAgICAgICAgICAgICAgICAgLy93b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG5cbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnNwYWNlcntcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnRhZ0VkaXRCdG57XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5JTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjUlO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudGFnRGVsZXRlQnRue1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOSU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjUlO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjdGltZVRyYWNrZXJPcHRpb25ze1xuICAgICAgICBtaW4taGVpZ2h0OiA4NXZoO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMTcxOTQxO1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAyMHB4IDIwcHggNjBweCAjMTQxNTM3LFxuICAgICAgICAgICAgICAgICAgICBpbnNldCAtMjBweCAtMjBweCA2MHB4ICMxYTFkNGI7XG5cbiAgICAgICAgLnNpZGViYXItdGltZVRyYWNrZXJPcHRpb257XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEyJTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjpzdGFydDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICAgLmljb24tbWluaW1hbC1kb3due1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAudW5kZXJsaW5lIHtcbiAgICAgICAgICAgIC0tbGluZTogIzY0NkI4QztcbiAgICAgICAgICAgIC0tY29sb3I6ICMyQjMwNDQ7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsIHZhcigtLWxpbmUpIDAlLCB2YXIoLS1saW5lKSAxMDAlKTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IHZhcigtLWJhY2tncm91bmQtc2l6ZSwgMTAwJSkgMXB4O1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtc2l6ZSAuMnMgbGluZWFyIHZhcigtLWJhY2tncm91bmQtZGVsYXksIC4xNXMpO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxM3B4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgbGVmdDogLTJweDtcbiAgICAgICAgICAgICAgICBmaWxsOiBub25lO1xuICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgICAgICAgICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xuICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aDogMXB4O1xuICAgICAgICAgICAgICAgIHN0cm9rZTogdmFyKC0tbGluZSk7XG4gICAgICAgICAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogNy45NSAzMDtcbiAgICAgICAgICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogdmFyKC0tc3Ryb2tlLWRhc2hvZmZzZXQsIDQ2KTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBzdHJva2UtZGFzaG9mZnNldCB2YXIoLS1zdHJva2UtZHVyYXRpb24sIC4xNXMpIHZhcigtLXN0cm9rZS1lYXNpbmcsIGxpbmVhcikgdmFyKC0tc3Ryb2tlLWRlbGF5LCAwcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQtc2l6ZTogMCU7XG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWRlbGF5OiAwcztcbiAgICAgICAgICAgICAgICAtLXN0cm9rZS1kYXNob2Zmc2V0OiAyNjtcbiAgICAgICAgICAgICAgICAtLXN0cm9rZS1kdXJhdGlvbjogLjNzO1xuICAgICAgICAgICAgICAgIC0tc3Ryb2tlLWVhc2luZzogY3ViaWMtYmV6aWVyKC4zLCAxLjUsIC41LCAxKTtcbiAgICAgICAgICAgICAgICAtLXN0cm9rZS1kZWxheTogLjE5NXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5ib2FyZF9jb250ZW50e1xuICAgIGJhY2tncm91bmQ6ICMwMDc5YmY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAwIDVweDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIC8vIG92ZXJmbG93OiBhdXRvO1xufVxuXG4jbWVzc2FnZUJvYXJkOjp3ZWJraXQtc2Nyb2xsYmFye1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgd2lkdGg6IDA7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbiNtZXNzYWdlQm9hcmQ6OndlYmtpdC1zY3JvbGxiYXJ7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB3aWR0aDogMDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLm1lc3NhZ2VCb2FyZCB7XG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLyogSUUgYW5kIEVkZ2UgKi9cbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7ICAvKiBGaXJlZm94ICovXG59Il19 */");

/***/ }),

/***/ "Vs9a":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/examples/registerpage/registerpage.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\n  class=\"navbar navbar-expand-lg fixed-top navbar-transparent\"\n  color-on-scroll=\"100\"\n  id=\"navbar-top\"\n>\n  <div class=\"container\">\n    <div class=\"navbar-translate\">\n      <a\n        class=\"navbar-brand\"\n        [routerLink]=\"['/home']\"\n        placement=\"bottom\"\n        tooltip=\"Designed and Coded by Creative Tim\"\n      >\n        <span> BLK• </span> Design System Angular\n      </a>\n      <button\n        aria-controls=\"navigation-index\"\n        aria-label=\"Toggle navigation\"\n        class=\"navbar-toggler navbar-toggler\"\n        [attr.aria-expanded]=\"!isCollapsed\"\n        (click)=\"isCollapsed = !isCollapsed\"\n        id=\"navigation\"\n        type=\"button\"\n      >\n        <span class=\"navbar-toggler-bar bar1\"> </span>\n        <span class=\"navbar-toggler-bar bar2\"> </span>\n        <span class=\"navbar-toggler-bar bar3\"> </span>\n      </button>\n    </div>\n    <div\n      class=\"navbar-collapse justify-content-end\"\n      [collapse]=\"isCollapsed\"\n      id=\"navigation\"\n    >\n      <div class=\"navbar-collapse-header\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\"><a> BLK• </a></div>\n          <div class=\"col-6 collapse-close text-right\">\n            <button\n              aria-controls=\"navigation-index\"\n              aria-label=\"Toggle navigation\"\n              class=\"navbar-toggler\"\n              [attr.aria-expanded]=\"!isCollapsed\"\n              (click)=\"isCollapsed = !isCollapsed\"\n              id=\"navigation\"\n              type=\"button\"\n            >\n              <i class=\"tim-icons icon-simple-remove\"> </i>\n            </button>\n          </div>\n        </div>\n      </div>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://twitter.com/CreativeTim\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Twitter\"\n          >\n            <i class=\"fab fa-twitter\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Twitter</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://www.facebook.com/CreativeTim\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Like us on Facebook\"\n          >\n            <i class=\"fab fa-facebook-square\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Facebook</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://www.instagram.com/CreativeTimOfficial\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Instagram\"\n          >\n            <i class=\"fab fa-instagram\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Instagram</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/home']\"> Back to Kit </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            href=\"https://github.com/creativetimofficial/blk-design-system-angular/issues\"\n          >\n            Have an issue?\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"wrapper\">\n  <div class=\"page-header\">\n    <div class=\"page-header-image\"></div>\n    <div class=\"content\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-5 col-md-6 offset-lg-0 offset-md-3\">\n            <div class=\"square square-7\" id=\"square7\"></div>\n            <div class=\"square square-8\" id=\"square8\"></div>\n            <div class=\"card card-register\">\n              <div class=\"card-header\">\n                <img\n                  alt=\"Card image\"\n                  class=\"card-img\"\n                  src=\"assets/img/square1-red.png\"\n                />\n\n                <h4 class=\"card-title\">Register</h4>\n              </div>\n              <div class=\"card-body\">\n                <form class=\"form\">\n                  <div\n                    class=\"input-group\"\n                    [ngClass]=\"{ 'input-group-focus': focus === true }\"\n                  >\n                    <div class=\"input-group-prepend\">\n                      <div class=\"input-group-text\">\n                        <i class=\"tim-icons icon-single-02\"> </i>\n                      </div>\n                    </div>\n                    <input\n                      class=\"form-control\"\n                      placeholder=\"Full Name\"\n                      type=\"text\"\n                      (focus)=\"focus = true\"\n                      (blur)=\"focus = false\"\n                    />\n                  </div>\n                  <div\n                    class=\"input-group\"\n                    [ngClass]=\"{ 'input-group-focus': focus1 === true }\"\n                  >\n                    <div class=\"input-group-prepend\">\n                      <div class=\"input-group-text\">\n                        <i class=\"tim-icons icon-email-85\"> </i>\n                      </div>\n                    </div>\n                    <input\n                      class=\"form-control\"\n                      placeholder=\"Email\"\n                      type=\"text\"\n                      (focus)=\"focus1 = true\"\n                      (blur)=\"focus1 = false\"\n                    />\n                  </div>\n                  <div\n                    class=\"input-group\"\n                    [ngClass]=\"{ 'input-group-focus': focus2 === true }\"\n                  >\n                    <div class=\"input-group-prepend\">\n                      <div class=\"input-group-text\">\n                        <i class=\"tim-icons icon-lock-circle\"> </i>\n                      </div>\n                    </div>\n                    <input\n                      class=\"form-control\"\n                      placeholder=\"Password\"\n                      type=\"text\"\n                      (focus)=\"focus2 = true\"\n                      (blur)=\"focus2 = false\"\n                    />\n                  </div>\n                  <div class=\"form-check text-left\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" />\n\n                      <span class=\"form-check-sign\"> </span> I agree to the\n                      <a href=\"javascript:void(0)\"> terms and conditions </a> .\n                    </label>\n                  </div>\n                </form>\n              </div>\n              <div class=\"card-footer\">\n                <a\n                  class=\"btn btn-danger btn-round btn-lg\"\n                  href=\"javascript:void(0)\"\n                >\n                  Get Started\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"register-bg\"></div>\n        <div class=\"square square-1\" id=\"square1\"></div>\n        <div class=\"square square-2\" id=\"square2\"></div>\n        <div class=\"square square-3\" id=\"square3\"></div>\n        <div class=\"square square-4\" id=\"square4\"></div>\n        <div class=\"square square-5\" id=\"square5\"></div>\n        <div class=\"square square-6\" id=\"square6\"></div>\n      </div>\n    </div>\n  </div>\n  <footer class=\"footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-3\"><h1 class=\"title\">BLK•</h1></div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/home']\"> Home </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/landing']\"> Landing </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/register']\"> Register </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/profile']\"> Profile </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/contact-us?ref=blkdsa-footer\">\n                Contact Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/about-us?ref=blkdsa-footer\">\n                About Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://creative-tim.com/blog?ref=blkdsa-footer\">\n                Blog\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://opensource.org/licenses/MIT\">\n                License\n              </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <h3 class=\"title\">Follow us:</h3>\n          <div class=\"btn-wrapper profile\">\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://twitter.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-twitter\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://www.facebook.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-facebook-square\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple\"\n              href=\"https://dribbble.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-dribbble\"> </i>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n</div>\n");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "YfQq":
/*!********************************************!*\
  !*** ./src/app/services/kanban.service.ts ***!
  \********************************************/
/*! exports provided: KanbanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KanbanService", function() { return KanbanService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    }),
};
var KanbanService = /** @class */ (function () {
    function KanbanService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    KanbanService.prototype.createCard = function (jwt, officeID, listName, cardID, cardMessage) {
        var body = {
            jwt: jwt,
            officeID: officeID,
            listName: listName,
            cardID: cardID,
            cardMessage: cardMessage
        };
        var createCardURL = this.baseUrl + '/api/kanban/createCard';
        return this.http.post(createCardURL, body, httpOptions);
    };
    KanbanService.prototype.deleteCard = function (jwt, officeID, cardID) {
        var body = {
            jwt: jwt,
            officeID: officeID,
            cardID: cardID,
        };
        var deleteCardURL = this.baseUrl + '/api/kanban/deleteCard';
        return this.http.post(deleteCardURL, body, httpOptions);
    };
    KanbanService.prototype.getAllCards = function (jwt, officeID) {
        var body = {
            jwt: jwt,
            officeID: officeID
        };
        var deleteCardURL = this.baseUrl + '/api/kanban/getAllCards';
        return this.http.post(deleteCardURL, body, httpOptions);
    };
    KanbanService.prototype.editCard = function (jwt, officeID, cardID, oldListName, newListName) {
        var body = {
            jwt: jwt,
            officeID: officeID,
            cardID: cardID,
            oldListName: oldListName,
            newListName: newListName
        };
        var editCardURL = this.baseUrl + '/api/kanban/editCard';
        return this.http.post(editCardURL, body, httpOptions);
    };
    KanbanService.prototype.getListName = function (jwt, officeID, cardID) {
        var body = {
            jwt: jwt,
            officeID: officeID,
            cardID: cardID
        };
        var getListNameURL = this.baseUrl + '/api/kanban/getListName';
        return this.http.post(getListNameURL, body, httpOptions);
    };
    KanbanService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    KanbanService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], KanbanService);
    return KanbanService;
}());



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/pages.module */ "dgmN");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ "AytR");











var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].apiUrl + '/serversocket';
var config = { url: url, options: {} };
var agoraConfig = {
    AppID: src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].agoraAppId,
};
//023766436b244044ab85f65470dcbae2
//7afb53157f754f6f8023f31fb343404a
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _pages_pages_module__WEBPACK_IMPORTED_MODULE_9__["PagesModule"],
                ngx_socket_io__WEBPACK_IMPORTED_MODULE_8__["SocketIoModule"].forRoot(config),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "c7Ye":
/*!**********************************************!*\
  !*** ./src/app/pages/card/card.component.ts ***!
  \**********************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card.component.html */ "OGTQ");
/* harmony import */ var _card_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card.component.css */ "JNyP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_kanban_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/kanban.service */ "YfQq");
/* harmony import */ var _cardschema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cardschema */ "7h4r");






var CardComponent = /** @class */ (function () {
    function CardComponent(kanbanService) {
        this.kanbanService = kanbanService;
    }
    CardComponent.prototype.ngOnInit = function () { };
    CardComponent.prototype.dragStart = function (ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    };
    CardComponent.prototype.deleteCard = function (id) {
        this.kanbanService.deleteCard(sessionStorage.getItem('jwt'), parseInt(sessionStorage.getItem('officeID')), id).subscribe(function (response) {
            if (response.Response == "Success") {
                console.log("Card deleted successfully");
            }
        }, function (error) {
            console.log(error);
        });
        var element = document.getElementById(id);
        element.parentNode.removeChild(element);
    };
    CardComponent.ctorParameters = function () { return [
        { type: src_app_services_kanban_service__WEBPACK_IMPORTED_MODULE_4__["KanbanService"] }
    ]; };
    CardComponent.propDecorators = {
        card: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    CardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-card",
            template: _raw_loader_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_card_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_kanban_service__WEBPACK_IMPORTED_MODULE_4__["KanbanService"]])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "dgmN":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "yyhP");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "Mfq2");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "+Cnu");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "44PX");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "Lm2G");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/alert */ "psEu");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "hzby");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "LYaK");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "yQBb");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/popover */ "EDFS");
/* harmony import */ var _katoid_angular_grid_layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @katoid/angular-grid-layout */ "Gy/2");
/* harmony import */ var angular_agora_rtc__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular-agora-rtc */ "A+7y");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./index/index.component */ "sqmE");
/* harmony import */ var _examples_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./examples/profilepage/profilepage.component */ "F149");
/* harmony import */ var _examples_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./examples/registerpage/registerpage.component */ "r5Xs");
/* harmony import */ var _examples_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./examples/landingpage/landingpage.component */ "IfWR");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./register/register.component */ "fNfI");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./login/login.component */ "D8EZ");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./user/user.component */ "3OJA");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./list/list.component */ "kzYG");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./card/card.component */ "c7Ye");
/* harmony import */ var _audio_audio_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../audio/audio.component */ "ebS6");






























var agoraConfig = {
    AppID: '023766436b244044ab85f65470dcbae2',
};
//023766436b244044ab85f65470dcbae2
//7afb53157f754f6f8023f31fb343404a
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _katoid_angular_grid_layout__WEBPACK_IMPORTED_MODULE_18__["KtdGridModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_7__["ProgressbarModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"].forRoot(),
                ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_17__["PopoverModule"].forRoot(),
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__["CollapseModule"].forRoot(),
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_16__["JwBootstrapSwitchNg2Module"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_10__["TabsModule"].forRoot(),
                ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginationModule"].forRoot(),
                ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_12__["AlertModule"].forRoot(),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_14__["CarouselModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__["ModalModule"].forRoot(),
                angular_agora_rtc__WEBPACK_IMPORTED_MODULE_19__["AngularAgoraRtcModule"].forRoot(agoraConfig)
            ],
            declarations: [
                _index_index_component__WEBPACK_IMPORTED_MODULE_20__["IndexComponent"],
                _examples_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_21__["ProfilepageComponent"],
                _examples_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_22__["RegisterpageComponent"],
                _examples_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_23__["LandingpageComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_24__["RegisterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_26__["UserComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_27__["ListComponent"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_28__["CardComponent"],
                _audio_audio_component__WEBPACK_IMPORTED_MODULE_29__["AudioComponent"]
            ],
            exports: [
                _index_index_component__WEBPACK_IMPORTED_MODULE_20__["IndexComponent"],
                _examples_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_21__["ProfilepageComponent"],
                _examples_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_22__["RegisterpageComponent"],
                _examples_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_23__["LandingpageComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_26__["UserComponent"]
            ],
            providers: []
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "ebS6":
/*!******************************************!*\
  !*** ./src/app/audio/audio.component.ts ***!
  \******************************************/
/*! exports provided: AudioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioComponent", function() { return AudioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_audio_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./audio.component.html */ "z33C");
/* harmony import */ var _audio_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audio.component.scss */ "nMEH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_agora_rtc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-agora-rtc */ "A+7y");
/* harmony import */ var src_app_services_office_room_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/office-room.service */ "wh6J");






;
var AudioComponent = /** @class */ (function () {
    function AudioComponent(agoraService, officeRoomService) {
        this.agoraService = agoraService;
        this.officeRoomService = officeRoomService;
        this.title = 'AgoraDemo';
        this.remoteCalls = [];
        this.remoteStreams = [];
        this.remoteMediaStreams = [];
        this.audioContext = new AudioContext();
        this.jwt = sessionStorage.getItem('jwt');
        this.currentRoom = "NO-ROOM-SELECTED";
        this.currentRoomCenter = [];
        this.channelName = "OFFICE";
        this.agoraService.createClient('rtc');
    }
    AudioComponent.prototype.join = function (userID, officeID, room, officeName) {
        var _this = this;
        this.officeRoomService.getOfficeRoomList(this.jwt, officeID).subscribe(function (res) {
            console.log("------ ROOMS ------");
            console.log(res.Rooms);
            _this.rooms = res.Rooms;
            console.log("Entered room");
            var temp;
            _this.rooms.forEach(function (roomName) {
                if (roomName.roomName == room) {
                    temp = roomName;
                }
            });
            if (temp.roomType == "Normal") {
                _this.channelName = officeName;
            }
            else {
                _this.channelName = officeName + temp.roomName;
            }
            _this.officeRoomService.fetchToken(Number(userID), _this.channelName, 1).subscribe(function (res) {
                _this.token = res.token;
                console.log("-------- JOIN AGORA WITH DETAILS --------");
                console.log("TOKEN:");
                console.log(_this.token);
                console.log("CHANNEL:");
                console.log(_this.channelName);
                console.log("UID:");
                console.log(userID);
                _this.agoraService.client.join(_this.token, _this.channelName, userID);
                _this.localStream = _this.agoraService.createStream(userID, true, null, null, false, false);
                setTimeout(function () { _this.assignRemoteHandlers(Number(userID)); }, 1000);
                setTimeout(function () { _this.publish(room); }, 3000);
            }, function (errr) {
                console.log(errr);
            });
        });
    };
    AudioComponent.prototype.publish = function (roomName) {
        var _this = this;
        console.log("-------------- PUBLISH --------------");
        this.currentRoom = roomName;
        var tempRooms = this.rooms;
        this.assignLocalHandlers();
        this.localStream.init(function () {
            console.log("getUserMedia successfully");
            _this.localStream.play('agora_local');
            _this.agoraService.client.publish(_this.localStream, function (err) {
                console.log("Publish local stream error: " + err);
            });
            _this.agoraService.client.on('stream-published', function (evt) {
                console.log("Publish local stream successfully");
            });
        }, function (err) {
            console.log("getUserMedia failed", err);
        });
        // ---------------------------------------------------
        // NEEDS TO BE RUN AFTER PUBLISH IS COMPLETE
        tempRooms.forEach(function (room) {
            if (room.roomName == _this.currentRoom) {
                _this.currentRoomDetails = room;
            }
        });
        this.currentRoomCenter = [((this.currentRoomDetails.width / 2) + this.currentRoomDetails.xCoordinate), ((this.currentRoomDetails.height / 2) + this.currentRoomDetails.yCoordinate)];
        this.mixAudio(tempRooms);
        // ---------------------------------------------------
    };
    AudioComponent.prototype.assignLocalHandlers = function () {
        this.localStream.on("accessAllowed", function () {
            console.log("accessAllowed");
        });
        // The user has denied access to the camera and mic.
        this.localStream.on("accessDenied", function () {
            console.log("accessDenied");
        });
    };
    AudioComponent.prototype.assignRemoteHandlers = function (userID) {
        var _this = this;
        this.agoraService.client.on('error', function (err) {
            console.log("Got error msg:", err.reason);
            if (err.reason === 'DYNAMIC_KEY_TIMEOUT') {
                _this.agoraService.client.renewChannelKey(function () {
                    // ---- RENEW CHANNEL KEY FUNCTION ----
                    // 1) Get details
                    var token = "";
                    // 2) Make request
                    _this.officeRoomService.fetchToken(userID, _this.channelName, 1).subscribe(function (res) {
                        token = res.token;
                    });
                    // 3) Return new token
                    _this.token = token;
                    return token;
                }, function () {
                    console.log("Renew channel key successfully");
                }, function (err) {
                    console.log("Renew channel key failed: ", err);
                });
            }
        });
        this.agoraService.client.on('stream-added', function (evt) {
            var stream = evt.stream;
            _this.agoraService.client.subscribe(stream, function (err) {
                console.log("Subscribe stream failed", err);
            });
        });
        this.agoraService.client.on('stream-subscribed', function (evt) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var stream, tmp, mediaStream, tempRooms;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                stream = evt.stream;
                tmp = stream;
                mediaStream = tmp.stream;
                tempRooms = this.rooms;
                this.officeRoomService.getUserRoomByID(this.jwt, stream.params.streamID).subscribe(function (response) {
                    if (!_this.remoteCalls.includes("agora_remote" + stream.getId())) {
                        _this.remoteCalls.push("agora_remote" + stream.getId());
                    }
                    console.log("--------- MEDIA STREAM ---------");
                    console.log(mediaStream);
                    console.log("---------- USER ROOM ------------");
                    console.log(stream.params.streamID);
                    console.log(response);
                    _this.remoteStreams.push(stream);
                    _this.remoteMediaStreams.push([mediaStream, false, response.RoomID]);
                    if (_this.currentRoom != "NO-ROOM-SELECTED") {
                        _this.mixAudio(tempRooms);
                        console.log("Remote stream is subscribed " + stream.getId());
                    }
                });
                return [2 /*return*/];
            });
        }); });
        this.agoraService.client.on('stream-removed', function (evt) {
            var stream = evt.stream;
            _this.remoteCalls = _this.remoteCalls.filter(function (call) { return call !== "#agora_remote" + stream.getId(); });
            console.log("Remote stream is removed " + stream.getId());
        });
        this.agoraService.client.on('peer-leave', function (evt) {
            var stream = evt.stream;
            if (stream) {
                _this.remoteCalls = _this.remoteCalls.filter(function (call) { return call === "#agora_remote" + stream.getId(); });
                console.log(evt.uid + " left from this channel");
            }
        });
    };
    AudioComponent.prototype.unpublish = function () {
        this.agoraService.client.unpublish(this.localStream);
        console.log("Stream unpublished");
    };
    AudioComponent.prototype.justLeave = function () {
        this.agoraService.client.leave(function () {
            console.log("Leavel channel successfully");
        }, function (err) {
            console.log("Leave channel failed");
        });
    };
    AudioComponent.prototype.leave = function () {
        this.agoraService.client.unpublish(this.localStream);
        console.log("Stream unpublished");
        this.agoraService.client.leave(function () {
            console.log("Leavel channel successfully");
        }, function (err) {
            console.log("Leave channel failed");
        });
    };
    // -------------- HANDLE REMOTE STREAMS AND OUTPUT AUDIO --------------
    AudioComponent.prototype.mixAudio = function (rooms) {
        var _this = this;
        // Remote stream audio settings
        var volume = 1;
        var pannerX = 0;
        var pannerZ = 0;
        console.log("------------------------ MIX AUDIO ------------------------");
        console.log("REMOTE STREAMS: ");
        console.log(this.remoteMediaStreams);
        // --------- Loop through remote audio streams ----------
        this.remoteMediaStreams.forEach(function (stream) {
            if (!stream[1]) {
                if (_this.currentRoom != stream[2]) {
                    // --------------- Get Rooms details ----------------
                    var remoteRoomDetails;
                    rooms.forEach(function (room) {
                        if (room.id == stream[2]) {
                            remoteRoomDetails = room;
                        }
                    });
                    console.log(remoteRoomDetails);
                    // --------------------------------------------------
                    // --------------- Calculate Centers ----------------
                    var remoteRoomCenter = [((remoteRoomDetails.width / 2) + remoteRoomDetails.xCoordinate), ((remoteRoomDetails.height / 2) + remoteRoomDetails.yCoordinate)];
                    // --------------------------------------------------
                    // -------------- Calculate Panning ---------------
                    // Orientation of listener: Facing toward the top floorplan
                    var standardDistx = Number(remoteRoomCenter[0]) - Number(_this.currentRoomCenter[0]);
                    var standardDistz = Number(remoteRoomCenter[1]) - Number(_this.currentRoomCenter[1]);
                    var distConst = 10;
                    pannerX = standardDistx * distConst;
                    pannerZ = standardDistz * distConst;
                    // --------------------------------------------------
                }
                // ---------- Work Around for Chrome Bugs -----------
                var audioStreamTrack = stream[0];
                var a_1 = new Audio();
                a_1.muted = true;
                a_1.srcObject = audioStreamTrack;
                a_1.addEventListener('canplaythrough', function () {
                    a_1 = null;
                });
                // --------------------------------------------------
                // ------- Play Audio Stream in audioContext --------
                // Create AudioNodes in AudioContext
                var audioStream = _this.audioContext.createMediaStreamSource(audioStreamTrack);
                var volumeControl = _this.audioContext.createGain();
                var panner = _this.audioContext.createPanner();
                // Connect AudioNodes in Sequence (RemoteMediaStream -> VolumeController -> Panner -> Compressor -> Destination(Output))
                audioStream.connect(volumeControl);
                volumeControl.connect(panner);
                panner.connect(_this.audioContext.destination);
                // Configure AudioNodes
                volumeControl.gain.setValueAtTime(volume, _this.audioContext.currentTime);
                panner.positionX.setValueAtTime(pannerX, _this.audioContext.currentTime);
                panner.positionZ.setValueAtTime(pannerZ, _this.audioContext.currentTime);
                // --------------------------------------------------
                stream[1] = true;
            }
        });
        // ------------------------------------------------------
    };
    // --------------------------------------------------------------------
    AudioComponent.prototype.setUserOrientation = function (direction) {
        console.log(direction);
        if ((direction >= 90 && direction <= 100) || (direction >= 0 && direction <= 11)) {
            this.audioContext.listener.setOrientation(0, 0, -1, 0, 1, 0);
        }
        else if (direction >= 12 && direction <= 37) {
            this.audioContext.listener.setOrientation(1, 0, 0, 0, 1, 0);
        }
        else if (direction >= 38 && direction <= 63) {
            this.audioContext.listener.setOrientation(0, 0, 1, 0, 1, 0);
        }
        else if (direction >= 64 && direction <= 89) {
            this.audioContext.listener.setOrientation(-1, 0, 0, 0, 1, 0);
        }
    };
    AudioComponent.ctorParameters = function () { return [
        { type: angular_agora_rtc__WEBPACK_IMPORTED_MODULE_4__["AngularAgoraRtcService"] },
        { type: src_app_services_office_room_service__WEBPACK_IMPORTED_MODULE_5__["OfficeRoomService"] }
    ]; };
    AudioComponent.propDecorators = {
        userId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    AudioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-audio',
            template: _raw_loader_audio_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_audio_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [angular_agora_rtc__WEBPACK_IMPORTED_MODULE_4__["AngularAgoraRtcService"],
            src_app_services_office_room_service__WEBPACK_IMPORTED_MODULE_5__["OfficeRoomService"]])
    ], AudioComponent);
    return AudioComponent;
}());



/***/ }),

/***/ "f55G":
/*!************************************!*\
  !*** ./src/app/pages/cardstore.ts ***!
  \************************************/
/*! exports provided: CardStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardStore", function() { return CardStore; });
/* harmony import */ var _cardschema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardschema */ "7h4r");

var CardStore = /** @class */ (function () {
    function CardStore() {
        this.cards = {};
        this.lastid = -1;
    }
    CardStore.prototype._addCard = function (card) {
        card.id = String(++this.lastid);
        this.cards[card.id] = card;
        return card.id;
    };
    CardStore.prototype.retrieveCard = function (cardId, description, listName) {
        var card = new _cardschema__WEBPACK_IMPORTED_MODULE_0__["CardSchema"]();
        card.description = description;
        card.listName = listName;
        card.id = cardId;
        this.cards[cardId] = card;
        if (parseInt(cardId) >= this.lastid) {
            this.lastid = parseInt(cardId);
        }
        return this.cards[cardId];
    };
    CardStore.prototype.getCard = function (cardId) {
        // console.log("right track");
        // console.log(cardId);
        // console.log(this.cards);
        // if(this.cards[cardId] == null){
        //   this.retrieveCard(cardId, description, listName);
        // }
        return this.cards[cardId];
    };
    CardStore.prototype.newCard = function (description, listName) {
        var card = new _cardschema__WEBPACK_IMPORTED_MODULE_0__["CardSchema"]();
        card.description = description;
        card.listName = listName;
        return this._addCard(card);
    };
    return CardStore;
}());



/***/ }),

/***/ "fNfI":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.component.html */ "/fh3");
/* harmony import */ var _register_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.component.scss */ "HdeD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.firstName = "";
        this.lastName = "";
        this.username = "";
        this.email = "";
        this.password = "";
        this.sendAlert = false;
        this.alertMsg = "";
        this.otp = "";
        this.userOTPInput = "";
        this.otpAlert = false;
        this.otpMessage = "";
        this.isCollapsed = true;
        this.showModal = false;
    }
    RegisterComponent.prototype.onMouseMove = function (e) {
        var squares1 = document.getElementById("square1");
        var squares2 = document.getElementById("square2");
        var squares3 = document.getElementById("square3");
        var squares4 = document.getElementById("square4");
        var squares5 = document.getElementById("square5");
        var squares6 = document.getElementById("square6");
        var squares7 = document.getElementById("square7");
        var squares8 = document.getElementById("square8");
        var posX = e.clientX - window.innerWidth / 2;
        var posY = e.clientY - window.innerWidth / 6;
        squares1.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares2.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares3.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares4.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares5.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares6.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares7.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.02 +
                "deg) rotateX(" +
                posY * -0.02 +
                "deg)";
        squares8.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.02 +
                "deg) rotateX(" +
                posY * -0.02 +
                "deg)";
    };
    RegisterComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("register-page");
        //this.onMouseMove(event);
    };
    RegisterComponent.prototype.registerNewUser = function () {
        var _this = this;
        if (this.firstName == "") {
            this.sendAlert = true;
            this.alertMsg = "First name is required.";
            return;
        }
        else {
            this.sendAlert = false;
            this.alertMsg = "";
        }
        if (this.lastName == "") {
            this.sendAlert = true;
            this.alertMsg = "Last name is required.";
            return;
        }
        else {
            this.sendAlert = false;
            this.alertMsg = "";
        }
        if (this.username == "") {
            this.sendAlert = true;
            this.alertMsg = "Username is required.";
            return;
        }
        else {
            this.sendAlert = false;
            this.alertMsg = "";
        }
        if (this.email == "") {
            this.sendAlert = true;
            this.alertMsg = "Email is required.";
            return;
        }
        else {
            var emailControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email);
            if (emailControl.status == "INVALID") {
                this.sendAlert = true;
                this.alertMsg = "Email given is invalid.";
                return;
            }
            else {
                this.sendAlert = false;
                this.alertMsg = "";
            }
        }
        if (this.password == "") {
            this.sendAlert = true;
            this.alertMsg = "Password is required.";
            return;
        }
        else {
            var passwordControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.password, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*()\-_\+\=|\\/?>.<,;:]).{8,}$"));
            if (passwordControl.status == "INVALID") {
                this.sendAlert = true;
                this.alertMsg = "Password given is invalid.\nMin length 8, One Uppercase, One Lowercase, One digit and One special character.";
                return;
            }
            else {
                this.sendAlert = false;
                this.alertMsg = "";
            }
        }
        this.userService.sendOTPVerificationEmail(this.email, this.username).subscribe(function (response) {
            console.log(response);
            _this.otp = response.otp;
        });
        this.showModal = true;
    };
    RegisterComponent.prototype.hideFormModal = function () {
        this.showModal = false;
    };
    RegisterComponent.prototype.validateOTP = function () {
        var _this = this;
        if (this.otp == this.userOTPInput) {
            this.showModal = false;
            this.userService.registerUser(this.firstName, this.lastName, this.username, this.email, this.password).subscribe(function (response) {
                //console.log(response)
                _this.router.navigate(['login']);
            });
        }
        else {
            this.otpMessage = "Incorrect otp entered, Please try again.";
            this.otpAlert = true;
        }
    };
    RegisterComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("register-page");
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    RegisterComponent.propDecorators = {
        onMouseMove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ["document:mousemove", ["$event"],] }]
    };
    RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-register',
            template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_register_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "kzYG":
/*!**********************************************!*\
  !*** ./src/app/pages/list/list.component.ts ***!
  \**********************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./list.component.html */ "mn8A");
/* harmony import */ var _list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.component.scss */ "IGfe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _listschema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../listschema */ "4Id2");
/* harmony import */ var _cardstore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cardstore */ "f55G");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_office_room_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/office-room.service */ "wh6J");
/* harmony import */ var src_app_services_kanban_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/kanban.service */ "YfQq");









var ListComponent = /** @class */ (function () {
    function ListComponent(userService, officeRoomService, kanbanService) {
        this.userService = userService;
        this.officeRoomService = officeRoomService;
        this.kanbanService = kanbanService;
        this.displayAddCard = false;
        this.userID = '';
        this.userFirstName = '';
        this.userLastName = '';
        this.userUsername = '';
        this.userEmail = '';
    }
    ListComponent.prototype.toggleDisplayAddCard = function () {
        this.displayAddCard = !this.displayAddCard;
        if (this.displayAddCard) {
            //document.getElementById("addCardInput").focus();
        }
    };
    ListComponent.prototype.ngOnInit = function () {
        console.log("The List of cards: ", this.list);
    };
    ListComponent.prototype.allowDrop = function ($event) {
        $event.preventDefault();
    };
    ListComponent.prototype.drop = function ($event) {
        var _this = this;
        $event.preventDefault();
        var data = $event.dataTransfer.getData("text");
        var target = $event.target;
        var targetClassName = target.className;
        while (target.className !== "list") {
            target = target.parentNode;
        }
        var newListName = target.id;
        target = target.querySelector(".cards");
        var cardID = data;
        var oldListName = "";
        this.kanbanService.getListName(sessionStorage.getItem('jwt'), parseInt(sessionStorage.getItem('officeID')), data).subscribe(function (response) {
            if (response.Response == "Success") {
                //console.log("Card edited successfully");
                var oldListName_1 = response.listName;
                _this.kanbanService.editCard(sessionStorage.getItem('jwt'), parseInt(sessionStorage.getItem('officeID')), cardID, oldListName_1, newListName).subscribe(function (response) {
                    if (response.Response == "Success") {
                        console.log("Card edited successfully");
                    }
                }, function (error) {
                    console.log(error);
                });
            }
        }, function (error) {
            console.log(error);
        });
        // const oldListName = document.getElementById(target.parentNode.children[0].className).textContent;
        if (targetClassName === "card") {
            $event.target.parentNode.insertBefore(document.getElementById(data), $event.target);
        }
        else if (targetClassName === "list__title") {
            if (target.children.length) {
                target.insertBefore(document.getElementById(data), target.children[0]);
            }
            else {
                target.appendChild(document.getElementById(data));
            }
        }
        else {
            target.appendChild(document.getElementById(data));
        }
    };
    ListComponent.prototype.onEnter = function (value, listName) {
        var cardId = this.cardStore.newCard(value, listName);
        this.kanbanService.createCard(sessionStorage.getItem('jwt'), parseInt(sessionStorage.getItem('officeID')), listName, cardId, value).subscribe(function (response) {
            if (response.Response == "Success") {
                console.log("Card added successfully");
            }
        }, function (error) {
            console.log(error);
        });
        this.list.cards.push(cardId);
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
        { type: src_app_services_office_room_service__WEBPACK_IMPORTED_MODULE_7__["OfficeRoomService"] },
        { type: src_app_services_kanban_service__WEBPACK_IMPORTED_MODULE_8__["KanbanService"] }
    ]; };
    ListComponent.propDecorators = {
        list: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        cardStore: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    ListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-list",
            template: _raw_loader_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            src_app_services_office_room_service__WEBPACK_IMPORTED_MODULE_7__["OfficeRoomService"],
            src_app_services_kanban_service__WEBPACK_IMPORTED_MODULE_8__["KanbanService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "mn8A":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/list/list.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div  id='{{list.name}}' class=\"list\" (dragover)=\"allowDrop($event)\" (drop)=\"drop($event)\">\n\t<p  id=\"list__title\" class=\"list__title\"><strong>{{list.name}}</strong></p>\n\t\n\t<input #addCardInput type=\"text\" (keyup.enter)=\"onEnter(addCardInput.value, list.name, addCardInput.value); addCardInput.value=''; displayAddCard=false;\" *ngIf=\"displayAddCard\" autofocus>\n\t<p *ngIf=\"displayAddCard\" >Press enter to add issue.</p>\n\t<button class=\"card_button\" (click)=\"displayAddCard=false; addCardInput.value='';\" *ngIf=\"displayAddCard\" > Cancel </button>\n\t<button id='createIssueButton' class=\"card_button\" (click)=\"toggleDisplayAddCard();\" *ngIf=\"!displayAddCard\" >Create Issue</button>\n\t<div class=\"cards\">\n\t\t<app-card *ngFor=\"let cardId of list.cards\" [card]=\"cardStore.getCard(cardId)\" ></app-card>\n\t</div>\n</div>");

/***/ }),

/***/ "nMEH":
/*!********************************************!*\
  !*** ./src/app/audio/audio.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#agora_local {\n  height: 500px;\n  width: 500px;\n  display: inline-block;\n}\n\n.remote-containers div {\n  height: 250px;\n  width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2F1ZGlvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJhdWRpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhZ29yYV9sb2NhbHtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5yZW1vdGUtY29udGFpbmVycyBkaXZ7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICB3aWR0aDogMjUwcHg7XG59Il19 */");

/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    }),
};
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    UserService.prototype.sendOTPVerificationEmail = function (email, userName) {
        var body = {
            emailAddress: email,
            userName: userName
        };
        var sendOTPVerificationEmailURL = this.baseUrl + '/api/notifications/sendVerification';
        return this.http.post(sendOTPVerificationEmailURL, body, httpOptions);
    };
    UserService.prototype.registerUser = function (firstName, lastName, userName, emailAddress, password) {
        var body = {
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            email: emailAddress,
            password: password
        };
        var registerUserURL = this.baseUrl + '/api/register';
        return this.http.post(registerUserURL, body, httpOptions);
    };
    UserService.prototype.logUserIn = function (email, password) {
        var body = {
            email: email,
            password: password
        };
        var logUserInURL = this.baseUrl + '/api/login';
        return this.http.post(logUserInURL, body, httpOptions);
    };
    UserService.prototype.updateUsername = function (jwt, id, newUsername) {
        var body = {
            jwt: jwt,
            id: id,
            newUsername: newUsername
        };
        var updateUsernameURL = this.baseUrl + '/api/user/updateUsername';
        return this.http.post(updateUsernameURL, body, httpOptions);
    };
    UserService.prototype.updateEmail = function (jwt, id, newEmail) {
        var body = {
            jwt: jwt,
            id: id,
            newEmail: newEmail
        };
        var updateEmailURL = this.baseUrl + '/api/user/updateEmail';
        return this.http.post(updateEmailURL, body, httpOptions);
    };
    UserService.prototype.updatePassword = function (jwt, id, newPassword) {
        var body = {
            jwt: jwt,
            id: id,
            newPassword: newPassword
        };
        var updatePasswordURL = this.baseUrl + '/api/user/updatePassword';
        return this.http.post(updatePasswordURL, body, httpOptions);
    };
    UserService.prototype.deleteUser = function (jwt, id) {
        var body = {
            jwt: jwt,
            id: id
        };
        var deleteUserURL = this.baseUrl + '/api/user/deleteUser';
        return this.http.post(deleteUserURL, body, httpOptions);
    };
    UserService.prototype.getUserDetails = function (jwt) {
        var body = {
            jwt: jwt
        };
        var getUserDetailsURL = this.baseUrl + '/api/user/details';
        return this.http.post(getUserDetailsURL, body, httpOptions);
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "r5Xs":
/*!***********************************************************************!*\
  !*** ./src/app/pages/examples/registerpage/registerpage.component.ts ***!
  \***********************************************************************/
/*! exports provided: RegisterpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterpageComponent", function() { return RegisterpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_registerpage_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./registerpage.component.html */ "Vs9a");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



var RegisterpageComponent = /** @class */ (function () {
    function RegisterpageComponent() {
        this.isCollapsed = true;
    }
    RegisterpageComponent.prototype.onMouseMove = function (e) {
        var squares1 = document.getElementById("square1");
        var squares2 = document.getElementById("square2");
        var squares3 = document.getElementById("square3");
        var squares4 = document.getElementById("square4");
        var squares5 = document.getElementById("square5");
        var squares6 = document.getElementById("square6");
        var squares7 = document.getElementById("square7");
        var squares8 = document.getElementById("square8");
        var posX = e.clientX - window.innerWidth / 2;
        var posY = e.clientY - window.innerWidth / 6;
        squares1.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares2.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares3.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares4.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares5.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares6.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares7.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.02 +
                "deg) rotateX(" +
                posY * -0.02 +
                "deg)";
        squares8.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.02 +
                "deg) rotateX(" +
                posY * -0.02 +
                "deg)";
    };
    RegisterpageComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("register-page");
        this.onMouseMove(event);
    };
    RegisterpageComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("register-page");
    };
    RegisterpageComponent.ctorParameters = function () { return []; };
    RegisterpageComponent.propDecorators = {
        onMouseMove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ["document:mousemove", ["$event"],] }]
    };
    RegisterpageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-registerpage",
            template: _raw_loader_registerpage_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], RegisterpageComponent);
    return RegisterpageComponent;
}());



/***/ }),

/***/ "sqmE":
/*!************************************************!*\
  !*** ./src/app/pages/index/index.component.ts ***!
  \************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_index_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./index.component.html */ "V/Tm");
/* harmony import */ var _index_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.component.scss */ "LNnH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nouislider */ "6foH");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_4__);





var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
        this.isCollapsed = true;
        this.date = new Date();
        this.pagination = 3;
        this.pagination1 = 1;
    }
    IndexComponent.prototype.scrollToDownload = function (element) {
        element.scrollIntoView({ behavior: "smooth" });
    };
    IndexComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("index-page");
        var slider = document.getElementById("sliderRegular");
        nouislider__WEBPACK_IMPORTED_MODULE_4___default.a.create(slider, {
            start: 40,
            connect: false,
            range: {
                min: 0,
                max: 100
            }
        });
        var slider2 = document.getElementById("sliderDouble");
        nouislider__WEBPACK_IMPORTED_MODULE_4___default.a.create(slider2, {
            start: [20, 60],
            connect: true,
            range: {
                min: 0,
                max: 100
            }
        });
    };
    IndexComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("index-page");
    };
    IndexComponent.ctorParameters = function () { return []; };
    IndexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-index",
            template: _raw_loader_index_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_index_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "tfwI":
/*!***************************************************!*\
  !*** ./src/app/services/text-channels.service.ts ***!
  \***************************************************/
/*! exports provided: TextChannelsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextChannelsService", function() { return TextChannelsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");



var TextChannelsService = /** @class */ (function () {
    function TextChannelsService(socket) {
        this.socket = socket;
    }
    TextChannelsService.prototype.joinRoom = function (jwt, officeID, office, channel, isRoom) {
        this.socket.emit('joinRoomText', { jwt: jwt, officeID: officeID, office: office, channel: channel, isRoom: isRoom });
    };
    TextChannelsService.prototype.leaveRoom = function (jwt, officeID, office, channel) {
        this.socket.emit('leaveRoomText', { jwt: jwt, officeID: officeID, office: office, channel: channel });
    };
    TextChannelsService.prototype.sendMsgToServer = function (jwt, officeID, sender, channel, message) {
        this.socket.emit('msgToServer', { jwt: jwt, officeID: officeID, sender: sender, channel: channel, message: message });
    };
    TextChannelsService.prototype.listen = function (eventName) {
        return this.socket.fromEvent(eventName);
    };
    TextChannelsService.ctorParameters = function () { return [
        { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"] }
    ]; };
    TextChannelsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"]])
    ], TextChannelsService);
    return TextChannelsService;
}());



/***/ }),

/***/ "vX/9":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\n\n\n    <div id=\"header\">\n        <!-- <button id=\"back-button\" (click)=\"userNav()\"> Back </button> -->\n        <button id=\"back-button\" (click)=\"userNav()\" class=\"btn btn-default btn-round\">Back</button>\n        <h1 id=\"header-text\"> Account Settings </h1>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"new-sections\">\n            <h2 class=\"section-header\">Edit Username</h2>\n            <h4 id=\"username-sub\" class=\"subheading\" >Enter your new username below.</h4>\n            <form>\n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" id=\"update-username\" placeholder={{userUsername}}>\n                    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"updateUsername()\" >Edit Username</button>\n                </div>\n            </form>\n        </div>\n\n        <div class=\"new-sections\">\n            <h2 class=\"section-header\">Edit Password</h2>\n            <h4 id=\"password-sub\" class=\"subheading\" >Enter your new password below.</h4>\n            <form>\n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" id=\"update-password\">\n                    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"updatePassword()\" >Edit Password</button>\n                </div>\n            </form>\n        </div>\n    </div>\n\n    <br>\n\n    <div class=\"row\">\n        <div class=\"new-sections\">\n            <h2 class=\"section-header\">Change Email</h2>\n            <h4 id=\"email-sub\" class=\"subheading\" >Enter your new email below.</h4>\n            <form>\n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" id=\"update-email\" placeholder={{userEmail}}>\n                    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"updateEmail()\" >Change Email</button>\n                </div>\n            </form>\n        </div>\n\n        <div class=\"new-sections\">\n            <h2 class=\"section-header\">Delete Account</h2>\n            <h4 class=\"subheading\">All data saved on this account will not be retrievable once you delete your account.</h4>\n            <form>\n                <div class=\"form-group\">\n                    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"deleteUser()\" >Delete</button>\n                </div>\n            </form>\n        </div>\n    </div>\n\n\n\n    <!-- <div\n    aria-hidden=\"true\"\n    aria-labelledby=\"myModalLabel\"\n    bsModal\n    class=\"modal fade modal-black\"\n    #myModal2=\"bs-modal\"\n    id=\"myModal2\"\n    role=\"dialog\"\n    tabindex=\"-1\"\n  >\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header justify-content-center\">\n          <button\n            aria-hidden=\"true\"\n            class=\"close\"\n            data-dismiss=\"modal\"\n            (click)=\"myModal2.hide()\"\n            type=\"button\"\n          >\n            <i class=\"tim-icons icon-simple-remove text-white\"> </i>\n          </button>\n          <div class=\"text-muted text-center ml-auto mr-auto\">\n            <h3 class=\"mb-0\">Sign in with</h3>\n          </div>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"btn-wrapper text-center\">\n            <a class=\"btn btn-neutral btn-icon mr-1\" href=\"javascript:void(0)\">\n              <img src=\"assets/img/github.svg\" />\n            </a>\n            <a class=\"btn btn-neutral btn-icon\" href=\"javascript:void(0)\">\n              <img src=\"assets/img/google.svg\" />\n            </a>\n          </div>\n          <div class=\"text-center text-muted mb-4 mt-3\">\n            <small> Or sign in with credentials </small>\n          </div>\n          <form role=\"form\">\n            <div class=\"form-group mb-3\">\n              <div class=\"input-group input-group-alternative\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">\n                    <i class=\"tim-icons icon-email-85\"> </i>\n                  </span>\n                </div>\n                <input\n                  class=\"form-control\"\n                  placeholder=\"Email\"\n                  type=\"email\"\n                  (focus)=\"focus1=true\" (blur)=\"focus1=false\"\n                />\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group input-group-alternative\" [ngClass]=\"{'input-group-focus':focus2===true}\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">\n                    <i class=\"tim-icons icon-key-25\"> </i>\n                  </span>\n                </div>\n                <input\n                  class=\"form-control\"\n                  placeholder=\"Password\"\n                  type=\"password\"\n                  (focus)=\"focus2=true\" (blur)=\"focus2=false\"\n                />\n              </div>\n            </div>\n            <div class=\"form-check mt-3\">\n              <label class=\"form-check-label\">\n                <input\n                  checked=\"checked\"\n                  class=\"form-check-input\"\n                  type=\"checkbox\"\n                />\n\n                <span class=\"form-check-sign\"> </span> Remember me!\n              </label>\n            </div>\n            <div class=\"text-center\">\n              <button class=\"btn btn-primary my-4\" type=\"button\">\n                Sign in\n              </button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div> -->\n\n\n\n    \n\n    <!-- <div *ngIf=\"showModal ? formModal.show() : formModal.hide()\" ></div> -->\n    <!-- <div \n        aria-hidden=\"true\"\n        aria-labelledby=\"myModalLabel\"\n        bsModal\n        class=\"modal fade modal-black\"\n        #formModal=\"bs-modal\"\n        id=\"formModal\"\n        role=\"dialog\"\n        tabindex=\"-1\"\n        >\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header justify-content-center\">\n                    <button\n                        aria-hidden=\"true\"\n                        class=\"close\"\n                        data-dismiss=\"modal\"\n                        (click)=\"hideFormModal()\"\n                        type=\"button\"\n                    >\n                        <i class=\"tim-icons icon-simple-remove text-white\"> </i>\n                    </button>\n                    <div class=\"text-muted text-center ml-auto mr-auto\">\n                        <h3 class=\"mb-0\">Enter You OTP:</h3>\n                    </div>\n                </div>\n                <div class=\"modal-body\">\n                <form role=\"form\">\n                    <div *ngIf=\"otpAlert\">\n                        <alert class=\"alert-with-icon\" [type]=\"'primary alert-with-icon'\">\n                            <span class=\" tim-icons icon-trophy\" data-notify=\"icon\">\n                            </span>\n                            <span>\n                            <b>\n                                Error -\n                            </b>\n                            {{ otpMessage }}\n                            </span>\n                        </alert>\n                    </div>\n                    <div class=\"form-group mb-3\">\n                        <div class=\"input-group input-group-alternative\" [ngClass]=\"{'input-group-focus':focus6===true}\">\n                            <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                                <i class=\"tim-icons icon-email-85\"> </i>\n                            </span>\n                            </div>\n                            <input\n                                class=\"form-control\"\n                                placeholder=\"OTP\"\n                                name=\"userOTPInput\"\n                                [(ngModel)]=\"userOTPInput\"\n                                type=\"text\"\n                                (focus)=\"focus6=true\" \n                                (blur)=\"focus6=false\"\n                            />\n                        </div>\n                    </div>\n                    <div class=\"text-center\">\n                    <button \n                        class=\"btn btn-success my-4\" \n                        type=\"button\"\n                        (click)=\"validateOTP()\"\n                    >\n                        Submit\n                    </button>\n                    </div>\n                </form>\n                </div>\n            </div>\n        </div>\n    </div> -->\n</div>");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_index_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/index/index.component */ "sqmE");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/register/register.component */ "fNfI");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/login/login.component */ "D8EZ");
/* harmony import */ var _pages_user_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/user/user.component */ "3OJA");
/* harmony import */ var _audio_audio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./audio/audio.component */ "ebS6");
/* harmony import */ var _pages_examples_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/examples/profilepage/profilepage.component */ "F149");
/* harmony import */ var _pages_examples_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/examples/registerpage/registerpage.component */ "r5Xs");
/* harmony import */ var _pages_examples_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/examples/landingpage/landingpage.component */ "IfWR");
/* harmony import */ var _pages_account_account_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/account/account.component */ "EK2B");














var routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: _pages_index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"] },
    { path: "login", component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: "register", component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: "user", component: _pages_user_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"] },
    { path: "account", component: _pages_account_account_component__WEBPACK_IMPORTED_MODULE_13__["AccountComponent"] },
    { path: "profile", component: _pages_examples_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_10__["ProfilepageComponent"] },
    { path: "registerExample", component: _pages_examples_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_11__["RegisterpageComponent"] },
    { path: "landing", component: _pages_examples_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_12__["LandingpageComponent"] },
    { path: "audioTest", component: _audio_audio_component__WEBPACK_IMPORTED_MODULE_9__["AudioComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, {
                    useHash: true
                })
            ],
            exports: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "wh6J":
/*!*************************************************!*\
  !*** ./src/app/services/office-room.service.ts ***!
  \*************************************************/
/*! exports provided: OfficeRoomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeRoomService", function() { return OfficeRoomService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    }),
};
var OfficeRoomService = /** @class */ (function () {
    function OfficeRoomService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
        this.tokenUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].tokenUrl;
    }
    //-------------------------------------------------------------------------------------------------------------
    //                                             Office Functions
    //-------------------------------------------------------------------------------------------------------------
    OfficeRoomService.prototype.registerOffice = function (jwt, officeName) {
        var body = {
            name: officeName,
            jwt: jwt
        };
        var registerOfficeURL = this.baseUrl + '/api/office/register';
        return this.http.post(registerOfficeURL, body, httpOptions);
    };
    OfficeRoomService.prototype.joinOffice = function (jwt, invite) {
        var body = {
            jwt: jwt,
            invite: invite
        };
        var joinOfficeURL = this.baseUrl + '/api/office/joinInvite';
        return this.http.post(joinOfficeURL, body, httpOptions);
    };
    OfficeRoomService.prototype.getUserOffices = function (jwt) {
        var body = {
            jwt: jwt
        };
        var getUserOfficesURL = this.baseUrl + '/api/office/getUserOffices';
        return this.http.post(getUserOfficesURL, body, httpOptions);
    };
    OfficeRoomService.prototype.sendOfficeInvite = function (email, name, invite) {
        var body = {
            emailAddress: email,
            name: name,
            inviteCode: invite
        };
        var sendInviteCodeURL = this.baseUrl + '/api/notifications/sendInviteCode';
        return this.http.post(sendInviteCodeURL, body, httpOptions);
    };
    //-------------------------------------------------------------------------------------------------------------
    //                                             Room Functions
    //-------------------------------------------------------------------------------------------------------------
    OfficeRoomService.prototype.registerRoom = function (jwt, officeID, roomName, roomType, xCoordinate, yCoordinate, width, height) {
        var body = {
            jwt: jwt,
            officeID: officeID,
            roomName: roomName,
            roomType: roomType,
            xCoordinate: xCoordinate,
            yCoordinate: yCoordinate,
            width: width,
            height: height
        };
        var registerRoomURL = this.baseUrl + '/api/room/register';
        return this.http.post(registerRoomURL, body, httpOptions);
    };
    OfficeRoomService.prototype.getOfficeRoomList = function (jwt, officeID) {
        var body = {
            jwt: jwt,
            officeID: officeID
        };
        var getRoomListURL = this.baseUrl + '/api/room/getOfficeRooms';
        return this.http.post(getRoomListURL, body, httpOptions);
    };
    OfficeRoomService.prototype.updateRoom = function (jwt, officeID, roomName, roomType, xCoordinate, yCoordinate, width, height) {
        var body = {
            jwt: jwt,
            officeID: officeID,
            roomName: roomName,
            roomType: roomType,
            xCoordinate: xCoordinate,
            yCoordinate: yCoordinate,
            width: width,
            height: height
        };
        var registerRoomURL = this.baseUrl + '/api/room/updateDetails';
        return this.http.post(registerRoomURL, body, httpOptions);
    };
    OfficeRoomService.prototype.deleteRoom = function (jwt, officeID, roomName) {
        var body = {
            jwt: jwt,
            officeID: officeID,
            roomName: roomName
        };
        var deleteRoomURL = this.baseUrl + '/api/room/delete';
        return this.http.post(deleteRoomURL, body, httpOptions);
    };
    OfficeRoomService.prototype.getUserRoomByID = function (jwt, userID) {
        var body = {
            jwt: jwt,
            userID: userID
        };
        var userRoom = this.baseUrl + '/api/room/findUser';
        return this.http.post(userRoom, body, httpOptions);
    };
    OfficeRoomService.prototype.getRoomUsersByOfficeID = function (jwt, officeID) {
        var body = {
            jwt: jwt,
            officeID: officeID
        };
        var getRoomUsersByOfficeID_URL = this.baseUrl + '/api/room/getRoomUsers';
        return this.http.post(getRoomUsersByOfficeID_URL, body, httpOptions);
    };
    OfficeRoomService.prototype.fetchToken = function (uid, channelName, role) {
        var body = {
            uid: uid,
            channelName: channelName,
            role: role
        };
        var fetchTokenURL = this.tokenUrl;
        return this.http.post(fetchTokenURL, body, httpOptions);
    };
    OfficeRoomService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    OfficeRoomService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OfficeRoomService);
    return OfficeRoomService;
}());



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "ywSW":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\n  class=\"navbar navbar-expand-lg fixed-top navbar-transparent\"\n  color-on-scroll=\"100\"\n  id=\"navbar-top\"\n>\n  <div class=\"container\">\n    <div class=\"navbar-translate\">\n      <a\n        class=\"navbar-brand\"\n        [routerLink]=\"['/home']\"\n        placement=\"bottom\"\n        tooltip=\"Audio Suite by Project Pegasus\"\n      >\n        <span>Audio</span> Suite\n      </a>\n      <button\n        aria-controls=\"navigation-index\"\n        aria-label=\"Toggle navigation\"\n        class=\"navbar-toggler navbar-toggler\"\n        [attr.aria-expanded]=\"!isCollapsed\"\n        (click)=\"isCollapsed = !isCollapsed\"\n        id=\"navigation\"\n        type=\"button\"\n      >\n        <span class=\"navbar-toggler-bar bar1\"> </span>\n        <span class=\"navbar-toggler-bar bar2\"> </span>\n        <span class=\"navbar-toggler-bar bar3\"> </span>\n      </button>\n    </div>\n    <div\n      class=\"navbar-collapse justify-content-end\"\n      [collapse]=\"isCollapsed\"\n      id=\"navigation\"\n    >\n      <div class=\"navbar-collapse-header\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\"><a>Audio Suite</a></div>\n          <div class=\"col-6 collapse-close text-right\">\n            <button\n              aria-controls=\"navigation-index\"\n              aria-label=\"Toggle navigation\"\n              class=\"navbar-toggler\"\n              [attr.aria-expanded]=\"!isCollapsed\"\n              (click)=\"isCollapsed = !isCollapsed\"\n              id=\"navigation\"\n              type=\"button\"\n            >\n              <i class=\"tim-icons icon-simple-remove\"> </i>\n            </button>\n          </div>\n        </div>\n      </div>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"#\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Twitter\"\n          >\n            <i class=\"fab fa-twitter\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Twitter</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"#\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Like us on Facebook\"\n          >\n            <i class=\"fab fa-facebook-square\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Facebook</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"#\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Instagram\"\n          >\n            <i class=\"fab fa-instagram\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Instagram</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" id='registerRouteLink' [routerLink]=\"['/register']\">Register</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"wrapper\">\n  <div class=\"page-header\">\n    <div class=\"page-header-image\"></div>\n    <div class=\"content\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-5 col-md-6 offset-lg-0 offset-md-3\">\n            <div class=\"square square-7\" id=\"square7\"></div>\n            <div class=\"square square-8\" id=\"square8\"></div>\n            <div class=\"card card-register\">\n              <div class=\"card-header\">\n                <h4 class=\"card-title\" style=\"padding-left: 15px\">Login</h4>\n              </div>\n              <div id=\"alertPosition\">\n                <div *ngIf=\"sendAlert\">\n                  <alert class=\"alert-with-icon\" [type]=\"'primary alert-with-icon'\">\n                      <span class=\" tim-icons icon-trophy\" data-notify=\"icon\">\n                      </span>\n                      <span>\n                        <b>\n                          Error -\n                        </b>\n                        {{ alertMsg }}\n                      </span>\n                  </alert>\n                </div>\n              </div>\n              <div class=\"card-body\">\n                <form class=\"form\">\n                  <div\n                    class=\"input-group\"\n                    [ngClass]=\"{ 'input-group-focus': focus1 === true }\"\n                  >\n                    <div class=\"input-group-prepend\">\n                      <div class=\"input-group-text\">\n                        <i class=\"tim-icons icon-email-85\"> </i>\n                      </div>\n                    </div>\n                    <input\n                      class=\"form-control\"\n                      placeholder=\"Email\"\n                      name= \"email\"\n                      [(ngModel)]=\"email\"\n                      type=\"email\"\n                      (focus)=\"focus1 = true\"\n                      (blur)=\"focus1 = false\"\n                    />\n                  </div>\n                  <div\n                    class=\"input-group\"\n                    [ngClass]=\"{ 'input-group-focus': focus2 === true }\"\n                  >\n                    <div class=\"input-group-prepend\">\n                      <div class=\"input-group-text\">\n                        <i class=\"tim-icons icon-lock-circle\"> </i>\n                      </div>\n                    </div>\n                    <input\n                      class=\"form-control\"\n                      placeholder=\"Password\"\n                      name= \"password\"\n                      [(ngModel)]=\"password\"\n                      type=\"password\"\n                      (focus)=\"focus2 = true\"\n                      (blur)=\"focus2 = false\"\n                    />\n                  </div>\n                </form>\n              </div>\n              <div class=\"card-footer\">\n                <button \n                    data-target=\"#formModal\"\n                    (click)=\"logUserIn();\"\n                    class=\"btn btn-success btn-round btn-lg\"\n                >\n                    Login\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"register-bg\"></div>\n        <div class=\"square square-1\" id=\"square1\"></div>\n        <div class=\"square square-2\" id=\"square2\"></div>\n        <div class=\"square square-3\" id=\"square3\"></div>\n        <div class=\"square square-4\" id=\"square4\"></div>\n        <div class=\"square square-5\" id=\"square5\"></div>\n        <div class=\"square square-6\" id=\"square6\"></div>\n    </div>\n    </div>\n  </div>\n</div>\n\n\n");

/***/ }),

/***/ "z33C":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/audio/audio.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div id=\"agora_local\">\n</div>\n<div class=\"remote-containers\">\n  here\n  {{ childMessage }}\n  <div class=\"remote_calls\" *ngFor=\"let remote of remoteCalls;\" [id]=\"remote\">\n  </div>\n</div>\n<button (click)=\"join('12000');\">Join</button>\n<button (click)=\"publish();\">Publish</button>\n<button (click)=\"leave()\">End Call</button> -->");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/*
=========================================================
* BLK Design System Angular - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-angular
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map