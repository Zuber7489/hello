(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Company\Angular Theme\freya-new\src\main.ts */"zUnb");


/***/ }),

/***/ "3nXK":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UserComponent {
    constructor() {
        this.item = { name: '', email: '' };
    }
    ngOnInit() {
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(); };
UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], inputs: { item: "item" }, decls: 4, vars: 2, template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Name: ", ctx.item.name, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" email:", ctx.item.email, "\n");
    } }, styles: ["li[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 10px;\n  background-color: aqua;\n  width: 30%;\n  color: red;\n  font-size: 28px;\n  border: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0cscUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQUNIIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGl7XHJcbiAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgcGFkZGluZzogMTBweDtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTsgXHJcbiAgIHdpZHRoOiAzMCU7XHJcbiAgIGNvbG9yOnJlZDtcclxuICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user',
                templateUrl: './user.component.html',
                styleUrls: ['./user.component.scss']
            }]
    }], function () { return []; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "fECr");



class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 40, vars: 0, consts: [[1, "row"], [1, "containers", "col-lg-6", "col-md-6"], [1, "pic"], [1, "box1"], [1, "box2"], [1, "social1"], ["aria-hidden", "true", 1, "fa", "fa-facebook"], [1, "social2"], ["aria-hidden", "true", 1, "fa", "fa-dribbble"], [1, "social3"], ["aria-hidden", "true", 1, "fa", "fa-codepen"], [1, "content", "col-md-offset-6", "col-lg-offset-6"], [1, "contentHead"], [2, "color", "rgb(110, 202, 233)"], [2, "color", "red"], [2, "color", "green"], [2, "text-align", "right", "color", "#000000", "font-size", "18px"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "ABOUT ME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Hi Friends, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " This is Mohammad Zuber. I'm a frontend developer I Have an expirence of 3 months in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Reactjs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "html CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " and javaScript ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Show your L");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u2665");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "VE if you like my CODING \uD83D\uDC4D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Salam rocky Bhai \uD83D\uDE04");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]], styles: ["body[_ngcontent-%COMP%] {\n  background: url(\"https://s-media-cache-ak0.pinimg.com/736x/f4/ac/6a/f4ac6aac3afb587f6cae04155656fca3.jpg\");\n}\n\n.containers[_ngcontent-%COMP%] {\n  width: 550px;\n  height: 100%;\n  margin-left: 10px;\n}\n\n.pic[_ngcontent-%COMP%] {\n  box-shadow: 6px 6px 7px #888888;\n  width: 300px;\n  height: 300px;\n  position: relative;\n  overflow: hidden;\n  margin-top: 100px;\n  margin-left: 135px;\n  transform: rotate(45deg);\n}\n\n.pic[_ngcontent-%COMP%]:before {\n  content: \"\";\n  margin-top: -63px;\n  margin-left: -80px;\n  position: absolute;\n  width: 450px;\n  height: 450px;\n  background: url(\"http://ultraimg.com/images/a0ed6d.jpg\") center center;\n  transform: rotate(-45deg);\n}\n\n.pic[_ngcontent-%COMP%]:hover, .box1[_ngcontent-%COMP%]:hover, .box2[_ngcontent-%COMP%]:hover, .social1[_ngcontent-%COMP%]:hover, .social2[_ngcontent-%COMP%]:hover, .social3[_ngcontent-%COMP%]:hover {\n  box-shadow: 3px 3px 7px #888888;\n  cursor: pointer;\n}\n\n.box1[_ngcontent-%COMP%] {\n  box-shadow: 6px 6px 7px #888888;\n  width: 100px;\n  height: 100px;\n  position: relative;\n  overflow: hidden;\n  margin-top: -124px;\n  margin-left: 16px;\n  transform: rotate(45deg);\n}\n\n.box1[_ngcontent-%COMP%]:before {\n  content: \"\";\n  margin-top: -25px;\n  margin-left: -31px;\n  position: absolute;\n  width: 200px;\n  height: 200px;\n  background: url(\"http://creek.themebucket.net/wp-content/uploads/2015/09/8.jpg\") center center;\n  transform: rotate(-45deg);\n}\n\n.box2[_ngcontent-%COMP%] {\n  box-shadow: 6px 6px 7px #888888;\n  position: relative;\n  overflow: hidden;\n  width: 194px;\n  height: 99px;\n  margin-top: 14px;\n  margin-left: 78px;\n  transform: rotate(45deg);\n}\n\n.box2[_ngcontent-%COMP%]:before {\n  content: \"\";\n  margin-top: -74px;\n  margin-left: -31px;\n  position: absolute;\n  width: 300px;\n  height: 300px;\n  background: url(\"http://i-cdn.phonearena.com/images/articles/220901-image/Here-is-how-the-start-screen-of-Google-Maps-looks-like.jpg\") center center;\n  transform: rotate(-45deg);\n}\n\n.social1[_ngcontent-%COMP%] {\n  box-shadow: 6px 6px 7px #888888;\n  width: 80px;\n  height: 80px;\n  background-color: #3b5998;\n  margin-top: -57px;\n  margin-left: 305px;\n  transform: rotate(45deg);\n}\n\n.social1[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  font-size: 60px;\n  margin-top: 13px;\n  margin-left: 20px;\n  transform: rotate(-45deg);\n  color: #ffffff;\n}\n\n.social2[_ngcontent-%COMP%] {\n  box-shadow: 6px 6px 7px #888888;\n  width: 80px;\n  height: 80px;\n  background-color: #C73B6F;\n  margin-top: -142px;\n  margin-left: 370px;\n  transform: rotate(45deg);\n}\n\n.social2[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  font-size: 60px;\n  margin-top: 8px;\n  margin-left: 13px;\n  transform: rotate(-45deg);\n  color: #ffffff;\n}\n\n.social3[_ngcontent-%COMP%] {\n  box-shadow: 6px 6px 7px #888888;\n  width: 80px;\n  height: 80px;\n  background-color: #000000;\n  margin-top: -143px;\n  margin-left: 435px;\n  transform: rotate(45deg);\n}\n\n.social3[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  font-size: 60px;\n  margin-top: 9px;\n  margin-left: 9px;\n  transform: rotate(-45deg);\n  color: #ffffff;\n}\n\n.content[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 500px;\n}\n\np[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-family: \"Dancing Script\", cursive;\n}\n\n.contentHead[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-size: 60px;\n  font-weight: 500;\n  text-decoration: underline;\n}\n\nsup[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  font-style: italic;\n  font-size: smaller;\n}\n\nspan[_ngcontent-%COMP%] {\n  color: pink;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSwwR0FBQTtBQUFGOztBQUdBO0VBRUUsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQURGOztBQUlBO0VBRUUsK0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBR0Esd0JBQUE7QUFGRjs7QUFJQTtFQUVFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNFQUFBO0VBR0EseUJBQUE7QUFGRjs7QUFLQTtFQUVFLCtCQUFBO0VBQ0EsZUFBQTtBQUhGOztBQU1BO0VBRUUsK0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBR0Esd0JBQUE7QUFKRjs7QUFNQTtFQUVFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhGQUFBO0VBR0EseUJBQUE7QUFKRjs7QUFPQTtFQUVFLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUdBLHdCQUFBO0FBTEY7O0FBT0E7RUFHRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxvSkFBQTtFQUdBLHlCQUFBO0FBTkY7O0FBU0E7RUFFRSwrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBR0Esd0JBQUE7QUFQRjs7QUFVQTtFQUVFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBR0EseUJBQUE7RUFDQSxjQUFBO0FBUkY7O0FBV0E7RUFFRSwrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBR0Esd0JBQUE7QUFURjs7QUFXQTtFQUVFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFHQSx5QkFBQTtFQUNBLGNBQUE7QUFURjs7QUFZQTtFQUVFLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFHQSx3QkFBQTtBQVZGOztBQVlBO0VBRUUsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUdBLHlCQUFBO0VBQ0EsY0FBQTtBQVZGOztBQWFBO0VBRUUsWUFBQTtFQUNBLFlBQUE7QUFYRjs7QUFjQTtFQUVFLDhDQUFBO0FBWkY7O0FBZUE7RUFFRSxzQ0FBQTtBQWJGOztBQWdCQTtFQUVFLDhDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUFkRjs7QUFpQkE7RUFFRSw4Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFmRjs7QUFrQkE7RUFFRSxXQUFBO0FBaEJGIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5XHJcbntcclxuICBiYWNrZ3JvdW5kOnVybCgnaHR0cHM6Ly9zLW1lZGlhLWNhY2hlLWFrMC5waW5pbWcuY29tLzczNngvZjQvYWMvNmEvZjRhYzZhYWMzYWZiNTg3ZjZjYWUwNDE1NTY1NmZjYTMuanBnJyk7XHJcbn1cclxuXHJcbi5jb250YWluZXJzXHJcbntcclxuICB3aWR0aDo1NTBweDtcclxuICBoZWlnaHQ6MTAwJTtcclxuICBtYXJnaW4tbGVmdDoxMHB4O1xyXG59XHJcblxyXG4ucGljXHJcbntcclxuICBib3gtc2hhZG93OiA2cHggNnB4IDdweCAjODg4ODg4O1xyXG4gIHdpZHRoOjMwMHB4O1xyXG4gIGhlaWdodDozMDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW4tdG9wOjEwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OjEzNXB4O1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG59XHJcbi5waWM6YmVmb3JlXHJcbntcclxuICBjb250ZW50OiAnJztcclxuICBtYXJnaW4tdG9wOi02M3B4O1xyXG4gIG1hcmdpbi1sZWZ0Oi04MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogNDUwcHg7XHJcbiAgaGVpZ2h0OiA0NTBweDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHA6Ly91bHRyYWltZy5jb20vaW1hZ2VzL2EwZWQ2ZC5qcGcnKSBjZW50ZXIgY2VudGVyO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG59XHJcblxyXG4ucGljOmhvdmVyICwgLmJveDE6aG92ZXIgLCAuYm94Mjpob3ZlciAsIC5zb2NpYWwxOmhvdmVyICwgLnNvY2lhbDI6aG92ZXIgLCAuc29jaWFsMzpob3ZlciBcclxue1xyXG4gIGJveC1zaGFkb3c6IDNweCAzcHggN3B4ICM4ODg4ODg7XHJcbiAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuXHJcbi5ib3gxXHJcbntcclxuICBib3gtc2hhZG93OiA2cHggNnB4IDdweCAjODg4ODg4O1xyXG4gIHdpZHRoOjEwMHB4O1xyXG4gIGhlaWdodDoxMDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW4tdG9wOi0xMjRweDtcclxuICBtYXJnaW4tbGVmdDoxNnB4O1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG59XHJcbi5ib3gxOmJlZm9yZVxyXG57XHJcbiAgY29udGVudDogJyc7XHJcbiAgbWFyZ2luLXRvcDotMjVweDtcclxuICBtYXJnaW4tbGVmdDotMzFweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgYmFja2dyb3VuZDogdXJsKCdodHRwOi8vY3JlZWsudGhlbWVidWNrZXQubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE1LzA5LzguanBnJykgY2VudGVyIGNlbnRlcjtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxufVxyXG5cclxuLmJveDJcclxue1xyXG4gIGJveC1zaGFkb3c6IDZweCA2cHggN3B4ICM4ODg4ODg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6MTk0cHg7XHJcbiAgaGVpZ2h0Ojk5cHg7XHJcbiAgbWFyZ2luLXRvcDoxNHB4O1xyXG4gIG1hcmdpbi1sZWZ0Ojc4cHg7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuLmJveDI6YmVmb3JlXHJcbntcclxuICBcclxuICBjb250ZW50OiAnJztcclxuICBtYXJnaW4tdG9wOi03NHB4O1xyXG4gIG1hcmdpbi1sZWZ0Oi0zMXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHA6Ly9pLWNkbi5waG9uZWFyZW5hLmNvbS9pbWFnZXMvYXJ0aWNsZXMvMjIwOTAxLWltYWdlL0hlcmUtaXMtaG93LXRoZS1zdGFydC1zY3JlZW4tb2YtR29vZ2xlLU1hcHMtbG9va3MtbGlrZS5qcGcnKSBjZW50ZXIgY2VudGVyO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG59XHJcblxyXG4uc29jaWFsMVxyXG57XHJcbiAgYm94LXNoYWRvdzogNnB4IDZweCA3cHggIzg4ODg4ODtcclxuICB3aWR0aDo4MHB4O1xyXG4gIGhlaWdodDo4MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzNiNTk5ODtcclxuICBtYXJnaW4tdG9wOi01N3B4O1xyXG4gIG1hcmdpbi1sZWZ0OjMwNXB4O1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG59XHJcblxyXG4uc29jaWFsMSA+IGlcclxue1xyXG4gIGZvbnQtc2l6ZTo2MHB4O1xyXG4gIG1hcmdpbi10b3A6MTNweDtcclxuICBtYXJnaW4tbGVmdDoyMHB4O1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gIGNvbG9yOiNmZmZmZmY7XHJcbn1cclxuXHJcbi5zb2NpYWwyXHJcbntcclxuICBib3gtc2hhZG93OiA2cHggNnB4IDdweCAjODg4ODg4O1xyXG4gIHdpZHRoOjgwcHg7XHJcbiAgaGVpZ2h0OjgwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojQzczQjZGO1xyXG4gIG1hcmdpbi10b3A6LTE0MnB4O1xyXG4gIG1hcmdpbi1sZWZ0OjM3MHB4O1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG59XHJcbi5zb2NpYWwyID4gaVxyXG57XHJcbiAgZm9udC1zaXplOjYwcHg7XHJcbiAgbWFyZ2luLXRvcDo4cHg7XHJcbiAgbWFyZ2luLWxlZnQ6MTNweDtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICBjb2xvcjojZmZmZmZmO1xyXG59XHJcblxyXG4uc29jaWFsM1xyXG57XHJcbiAgYm94LXNoYWRvdzogNnB4IDZweCA3cHggIzg4ODg4ODtcclxuICB3aWR0aDo4MHB4O1xyXG4gIGhlaWdodDo4MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzAwMDAwMDtcclxuICBtYXJnaW4tdG9wOi0xNDNweDtcclxuICBtYXJnaW4tbGVmdDo0MzVweDtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxufVxyXG4uc29jaWFsMyA+IGlcclxue1xyXG4gIGZvbnQtc2l6ZTo2MHB4O1xyXG4gIG1hcmdpbi10b3A6OXB4O1xyXG4gIG1hcmdpbi1sZWZ0OjlweDtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICBjb2xvcjojZmZmZmZmO1xyXG59XHJcblxyXG4uY29udGVudFxyXG57XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgd2lkdGg6NTAwcHg7XHJcbn1cclxuXHJcbnBcclxue1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmgyXHJcbntcclxuICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcclxufVxyXG5cclxuLmNvbnRlbnRIZWFkXHJcbntcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTo2MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OjUwMDtcclxuICB0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO1xyXG59XHJcblxyXG5zdXBcclxue1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtc2l6ZTpzbWFsbGVyO1xyXG59XHJcblxyXG5zcGFuXHJcbntcclxuICBjb2xvcjpwaW5rO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "fECr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function HomeComponent_ul_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_ul_12_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const hakela_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.remove(hakela_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hakela_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", hakela_r2.kuchbhi, " ");
} }
class HomeComponent {
    constructor() {
        //   displayVal='';
        //   getValue(val:string){
        //  console.log(val)
        //  this.displayVal=val;
        //   }
        this.list = [];
    }
    ngOnInit() {
    }
    addTask(item) {
        this.list.push({ id: this.list.length, kuchbhi: item });
    }
    remove(id) {
        this.list = this.list.filter(item => item.id !== id);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 14, vars: 1, consts: [["action", "#"], ["type", "text", "id", "input-form-text", "placeholder", "Enter the Work"], ["task", ""], [3, "focus"], ["id", "input-form-btn", 3, "click"], [1, "fa-solid", "fa-plus"], [4, "ngFor", "ngForOf"], [1, "container"], [1, "btn", "btn-primary", "alert-danger", "zuber", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Works to be done");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function HomeComponent_Template_button_focus_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return _r0.value = " "; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx.addTask(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_ul_12_Template, 5, 1, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".zuber[_ngcontent-%COMP%] {\n  color: red;\n  margin-left: 80px;\n  display: inline-block;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuenViZXJ7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgbWFyZ2luLWxlZnQ6ODBweCA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


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

/***/ "JDSE":
/*!******************************************!*\
  !*** ./src/app/jadoo/jadoo.component.ts ***!
  \******************************************/
/*! exports provided: JadooComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JadooComponent", function() { return JadooComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class JadooComponent {
    constructor() {
        this.sata = [];
    }
    hello(val) {
        this.sata.push({ kuchbhi: val });
    }
    ngOnInit() {
    }
}
JadooComponent.ɵfac = function JadooComponent_Factory(t) { return new (t || JadooComponent)(); };
JadooComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JadooComponent, selectors: [["app-jadoo"]], decls: 0, vars: 0, template: function JadooComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2phZG9vL2phZG9vLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JadooComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-jadoo',
                templateUrl: './jadoo.component.html',
                styleUrls: ['./jadoo.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'freya-new';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "YK2G":
/*!************************************************!*\
  !*** ./src/app/userdata/userdata.component.ts ***!
  \************************************************/
/*! exports provided: UserdataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserdataComponent", function() { return UserdataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function UserdataComponent_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hego_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hego_r1.country_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hego_r1.probability);
} }
class UserdataComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        this.getApimeta();
    }
    getApimeta() {
        return this.http.get('https://api.nationalize.io?name=nathaniel').subscribe(res => {
            this.nato = res;
            console.warn(res, 'data');
        });
    }
}
UserdataComponent.ɵfac = function UserdataComponent_Factory(t) { return new (t || UserdataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserdataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserdataComponent, selectors: [["app-userdata"]], decls: 11, vars: 1, consts: [[1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"]], template: function UserdataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "caption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "List of users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "First");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Last");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UserdataComponent_tr_10_Template, 5, 2, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.nato.country);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJkYXRhL3VzZXJkYXRhLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserdataComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-userdata',
                templateUrl: './userdata.component.html',
                styleUrls: ['./userdata.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _drop_drop_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./drop/drop.component */ "w52n");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/user.component */ "3nXK");
/* harmony import */ var _userdata_userdata_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./userdata/userdata.component */ "YK2G");
/* harmony import */ var _jadoo_jadoo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./jadoo/jadoo.component */ "JDSE");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
        _drop_drop_component__WEBPACK_IMPORTED_MODULE_11__["DropComponent"],
        _user_user_component__WEBPACK_IMPORTED_MODULE_12__["UserComponent"],
        _userdata_userdata_component__WEBPACK_IMPORTED_MODULE_13__["UserdataComponent"],
        _jadoo_jadoo_component__WEBPACK_IMPORTED_MODULE_14__["JadooComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                    _drop_drop_component__WEBPACK_IMPORTED_MODULE_11__["DropComponent"],
                    _user_user_component__WEBPACK_IMPORTED_MODULE_12__["UserComponent"],
                    _userdata_userdata_component__WEBPACK_IMPORTED_MODULE_13__["UserdataComponent"],
                    _jadoo_jadoo_component__WEBPACK_IMPORTED_MODULE_14__["JadooComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bzTf":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ "fECr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ContactComponent_tr_36_Template(rf, ctx) { if (rf & 1) {
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
    const kuchbhi_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](kuchbhi_r1.Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](kuchbhi_r1.API);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](kuchbhi_r1.Category);
} }
class ContactComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        this.happyApi();
    }
    happyApi() {
        return this.http.get('https://api.publicapis.org/entries').subscribe(res => {
            this.zuberData = res;
            console.log(res, 'data');
        });
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 37, vars: 1, consts: [[1, "container"], [1, "screen"], [1, "screen__content"], [1, "login"], [1, "login__field"], [1, "login__icon", "fas", "fa-user"], ["type", "text", "placeholder", "User name / Email", 1, "login__input"], [1, "login__icon", "fas", "fa-lock"], ["type", "password", "placeholder", "Password", 1, "login__input"], [1, "button", "login__submit"], [1, "button__text"], [1, "social-login"], [1, "social-icons"], [1, "fa", "fa-youtube"], [1, "screen__background"], [1, "screen__background__shape", "screen__background__shape4"], [1, "screen__background__shape", "screen__background__shape3"], [1, "screen__background__shape", "screen__background__shape2"], [1, "screen__background__shape", "screen__background__shape1"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Log In Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "log in via");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "table", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "caption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "List of users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "First");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Last");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ContactComponent_tr_36_Template, 7, 3, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.zuberData.entries);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: Raleway, sans-serif;\n}\n\nbody[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #C7C5F4, #776BCC);\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n}\n\n.screen[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #5D54A4, #7C78B8);\n  position: relative;\n  height: 600px;\n  width: 360px;\n  box-shadow: 0px 0px 24px #5C5696;\n}\n\n.screen__content[_ngcontent-%COMP%] {\n  z-index: 1;\n  position: relative;\n  height: 100%;\n}\n\n.screen__background[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 0;\n  -webkit-clip-path: inset(0 0 0 0);\n  clip-path: inset(0 0 0 0);\n}\n\n.screen__background__shape[_ngcontent-%COMP%] {\n  transform: rotate(45deg);\n  position: absolute;\n}\n\n.screen__background__shape1[_ngcontent-%COMP%] {\n  height: 520px;\n  width: 520px;\n  background: #FFF;\n  top: -50px;\n  right: 120px;\n  border-radius: 0 72px 0 0;\n}\n\n.screen__background__shape2[_ngcontent-%COMP%] {\n  height: 220px;\n  width: 220px;\n  background: #6C63AC;\n  top: -172px;\n  right: 0;\n  border-radius: 32px;\n}\n\n.screen__background__shape3[_ngcontent-%COMP%] {\n  height: 540px;\n  width: 190px;\n  background: linear-gradient(270deg, #5D54A4, #6A679E);\n  top: -24px;\n  right: 0;\n  border-radius: 32px;\n}\n\n.screen__background__shape4[_ngcontent-%COMP%] {\n  height: 400px;\n  width: 200px;\n  background: #7E7BB9;\n  top: 420px;\n  right: 50px;\n  border-radius: 60px;\n}\n\n.login[_ngcontent-%COMP%] {\n  width: 320px;\n  padding: 30px;\n  padding-top: 156px;\n}\n\n.login__field[_ngcontent-%COMP%] {\n  padding: 20px 0px;\n  position: relative;\n}\n\n.login__icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30px;\n  color: #7875B5;\n}\n\n.login__input[_ngcontent-%COMP%] {\n  border: none;\n  border-bottom: 2px solid #D1D1D4;\n  background: none;\n  padding: 10px;\n  padding-left: 24px;\n  font-weight: 700;\n  width: 75%;\n  transition: 0.2s;\n}\n\n.login__input[_ngcontent-%COMP%]:active, .login__input[_ngcontent-%COMP%]:focus, .login__input[_ngcontent-%COMP%]:hover {\n  outline: none;\n  border-bottom-color: #6A679E;\n}\n\n.login__submit[_ngcontent-%COMP%] {\n  background: #fff;\n  font-size: 14px;\n  margin-top: 30px;\n  padding: 16px 20px;\n  border-radius: 26px;\n  border: 1px solid #D4D3E8;\n  text-transform: uppercase;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  color: #4C489D;\n  box-shadow: 0px 2px 2px #5C5696;\n  cursor: pointer;\n  transition: 0.2s;\n}\n\n.login__submit[_ngcontent-%COMP%]:active, .login__submit[_ngcontent-%COMP%]:focus, .login__submit[_ngcontent-%COMP%]:hover {\n  border-color: #6A679E;\n  outline: none;\n}\n\n.button__icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-left: auto;\n  color: #7875B5;\n}\n\n.social-login[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 140px;\n  width: 160px;\n  text-align: center;\n  bottom: 0px;\n  right: 0px;\n  color: #fff;\n}\n\n.social-icons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.social-login__icon[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  color: #fff;\n  text-decoration: none;\n  text-shadow: 0px 0px 8px #7875B5;\n}\n\n.social-login__icon[_ngcontent-%COMP%]:hover {\n  transform: scale(1.5);\n}\n\n.center[_ngcontent-%COMP%] {\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n  margin-top: 100px;\n}\n\n.data[_ngcontent-%COMP%] {\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n  margin-top: 100px;\n  color: red;\n}\n\n.door[_ngcontent-%COMP%] {\n  margin-left: 250px;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Msc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0FBREQ7O0FBSUE7RUFDQyxvREFBQTtBQUREOztBQUlBO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQUREOztBQUlBO0VBQ0Msb0RBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUFERDs7QUFJQTtFQUNDLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFERDs7QUFJQTtFQUNDLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0FBREQ7O0FBSUE7RUFDQyx3QkFBQTtFQUNBLGtCQUFBO0FBREQ7O0FBSUE7RUFDQyxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUREOztBQUlBO0VBQ0MsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7QUFERDs7QUFJQTtFQUNDLGFBQUE7RUFDQSxZQUFBO0VBQ0EscURBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0FBREQ7O0FBSUE7RUFDQyxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUREOztBQUlBO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUREOztBQUlBO0VBQ0MsaUJBQUE7RUFDQSxrQkFBQTtBQUREOztBQUlBO0VBQ0Msa0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQUREOztBQUlBO0VBQ0MsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUREOztBQUlBOzs7RUFHQyxhQUFBO0VBQ0EsNEJBQUE7QUFERDs7QUFJQTtFQUNDLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFERDs7QUFJQTs7O0VBR0MscUJBQUE7RUFDQSxhQUFBO0FBREQ7O0FBSUE7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBREQ7O0FBSUE7RUFDQyxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFERDs7QUFJQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBREQ7O0FBSUE7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0FBREQ7O0FBSUE7RUFDQyxxQkFBQTtBQUREOztBQUdBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbioge1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDA7XHRcclxuXHRmb250LWZhbWlseTogUmFsZXdheSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuYm9keSB7XHJcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjQzdDNUY0LCAjNzc2QkNDKTtcdFx0XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLnNjcmVlbiB7XHRcdFxyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzVENTRBNCwgIzdDNzhCOCk7XHRcdFxyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcdFxyXG5cdGhlaWdodDogNjAwcHg7XHJcblx0d2lkdGg6IDM2MHB4O1x0XHJcblx0Ym94LXNoYWRvdzogMHB4IDBweCAyNHB4ICM1QzU2OTY7XHJcbn1cclxuXHJcbi5zY3JlZW5fX2NvbnRlbnQge1xyXG5cdHotaW5kZXg6IDE7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1x0XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc2NyZWVuX19iYWNrZ3JvdW5kIHtcdFx0XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdGJvdHRvbTogMDtcclxuXHR6LWluZGV4OiAwO1xyXG5cdC13ZWJraXQtY2xpcC1wYXRoOiBpbnNldCgwIDAgMCAwKTtcclxuXHRjbGlwLXBhdGg6IGluc2V0KDAgMCAwIDApO1x0XHJcbn1cclxuXHJcbi5zY3JlZW5fX2JhY2tncm91bmRfX3NoYXBlIHtcclxuXHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uc2NyZWVuX19iYWNrZ3JvdW5kX19zaGFwZTEge1xyXG5cdGhlaWdodDogNTIwcHg7XHJcblx0d2lkdGg6IDUyMHB4O1xyXG5cdGJhY2tncm91bmQ6ICNGRkY7XHRcclxuXHR0b3A6IC01MHB4O1xyXG5cdHJpZ2h0OiAxMjBweDtcdFxyXG5cdGJvcmRlci1yYWRpdXM6IDAgNzJweCAwIDA7XHJcbn1cclxuXHJcbi5zY3JlZW5fX2JhY2tncm91bmRfX3NoYXBlMiB7XHJcblx0aGVpZ2h0OiAyMjBweDtcclxuXHR3aWR0aDogMjIwcHg7XHJcblx0YmFja2dyb3VuZDogIzZDNjNBQztcdFxyXG5cdHRvcDogLTE3MnB4O1xyXG5cdHJpZ2h0OiAwO1x0XHJcblx0Ym9yZGVyLXJhZGl1czogMzJweDtcclxufVxyXG5cclxuLnNjcmVlbl9fYmFja2dyb3VuZF9fc2hhcGUzIHtcclxuXHRoZWlnaHQ6IDU0MHB4O1xyXG5cdHdpZHRoOiAxOTBweDtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjNUQ1NEE0LCAjNkE2NzlFKTtcclxuXHR0b3A6IC0yNHB4O1xyXG5cdHJpZ2h0OiAwO1x0XHJcblx0Ym9yZGVyLXJhZGl1czogMzJweDtcclxufVxyXG5cclxuLnNjcmVlbl9fYmFja2dyb3VuZF9fc2hhcGU0IHtcclxuXHRoZWlnaHQ6IDQwMHB4O1xyXG5cdHdpZHRoOiAyMDBweDtcclxuXHRiYWNrZ3JvdW5kOiAjN0U3QkI5O1x0XHJcblx0dG9wOiA0MjBweDtcclxuXHRyaWdodDogNTBweDtcdFxyXG5cdGJvcmRlci1yYWRpdXM6IDYwcHg7XHJcbn1cclxuXHJcbi5sb2dpbiB7XHJcblx0d2lkdGg6IDMyMHB4O1xyXG5cdHBhZGRpbmc6IDMwcHg7XHJcblx0cGFkZGluZy10b3A6IDE1NnB4O1xyXG59XHJcblxyXG4ubG9naW5fX2ZpZWxkIHtcclxuXHRwYWRkaW5nOiAyMHB4IDBweDtcdFxyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcdFxyXG59XHJcblxyXG4ubG9naW5fX2ljb24ge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDMwcHg7XHJcblx0Y29sb3I6ICM3ODc1QjU7XHJcbn1cclxuXHJcbi5sb2dpbl9faW5wdXQge1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRib3JkZXItYm90dG9tOiAycHggc29saWQgI0QxRDFENDtcclxuXHRiYWNrZ3JvdW5kOiBub25lO1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcblx0cGFkZGluZy1sZWZ0OiAyNHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0d2lkdGg6IDc1JTtcclxuXHR0cmFuc2l0aW9uOiAuMnM7XHJcbn1cclxuXHJcbi5sb2dpbl9faW5wdXQ6YWN0aXZlLFxyXG4ubG9naW5fX2lucHV0OmZvY3VzLFxyXG4ubG9naW5fX2lucHV0OmhvdmVyIHtcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdGJvcmRlci1ib3R0b20tY29sb3I6ICM2QTY3OUU7XHJcbn1cclxuXHJcbi5sb2dpbl9fc3VibWl0IHtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRtYXJnaW4tdG9wOiAzMHB4O1xyXG5cdHBhZGRpbmc6IDE2cHggMjBweDtcclxuXHRib3JkZXItcmFkaXVzOiAyNnB4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNENEQzRTg7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRjb2xvcjogIzRDNDg5RDtcclxuXHRib3gtc2hhZG93OiAwcHggMnB4IDJweCAjNUM1Njk2O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHR0cmFuc2l0aW9uOiAuMnM7XHJcbn1cclxuXHJcbi5sb2dpbl9fc3VibWl0OmFjdGl2ZSxcclxuLmxvZ2luX19zdWJtaXQ6Zm9jdXMsXHJcbi5sb2dpbl9fc3VibWl0OmhvdmVyIHtcclxuXHRib3JkZXItY29sb3I6ICM2QTY3OUU7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmJ1dHRvbl9faWNvbiB7XHJcblx0Zm9udC1zaXplOiAyNHB4O1xyXG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cdGNvbG9yOiAjNzg3NUI1O1xyXG59XHJcblxyXG4uc29jaWFsLWxvZ2luIHtcdFxyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRoZWlnaHQ6IDE0MHB4O1xyXG5cdHdpZHRoOiAxNjBweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Ym90dG9tOiAwcHg7XHJcblx0cmlnaHQ6IDBweDtcclxuXHRjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnNvY2lhbC1pY29ucyB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uc29jaWFsLWxvZ2luX19pY29uIHtcclxuXHRwYWRkaW5nOiAyMHB4IDEwcHg7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1x0XHJcblx0dGV4dC1zaGFkb3c6IDBweCAwcHggOHB4ICM3ODc1QjU7XHJcbn1cclxuXHJcbi5zb2NpYWwtbG9naW5fX2ljb246aG92ZXIge1xyXG5cdHRyYW5zZm9ybTogc2NhbGUoMS41KTtcdFxyXG59XHJcbi5jZW50ZXJ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG5cclxuLmRhdGF7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIGNvbG9yOnJlZDtcclxufVxyXG5cclxuLmRvb3J7XHJcbiAgICBtYXJnaW4tbGVmdDogMjUwcHg7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss'],
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 20, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", 2, "background-color", "#e3f2fd"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavDropdown", "aria-controls", "navbarNavDropdown", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavDropdown", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item", "active"], ["href", "/", 1, "nav-link"], [1, "sr-only"], [1, "nav-item"], ["href", "/contact", 1, "nav-link"], ["href", "/about", 1, "nav-link"], ["href", "/drop", 1, "nav-link"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _drop_drop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drop/drop.component */ "w52n");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "9vUh");








const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: 'drop', component: _drop_drop_component__WEBPACK_IMPORTED_MODULE_4__["DropComponent"] }
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

/***/ "w52n":
/*!****************************************!*\
  !*** ./src/app/drop/drop.component.ts ***!
  \****************************************/
/*! exports provided: DropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropComponent", function() { return DropComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "fECr");



class DropComponent {
    constructor() { }
    ngOnInit() {
    }
}
DropComponent.ɵfac = function DropComponent_Factory(t) { return new (t || DropComponent)(); };
DropComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DropComponent, selectors: [["app-drop"]], decls: 60, vars: 0, consts: [["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"], [1, "container"], [1, "row"], [1, "service"], [1, "fas", "fa-laptop-code"], [1, "fas", "fa-chart-line"], [1, "fab", "fa-sketch"], [1, "fas", "fa-database"], [1, "fas", "fa-mobile-alt"], [1, "fas", "fa-file-invoice"], [1, "fas", "fa-money-check-alt"], [1, "fas", "fa-network-wired"]], template: function DropComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Our Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Web Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quae? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quae? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Graphics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quae? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Data Analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quae? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "App Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quae? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Accounting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quae? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Payroll");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quae? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Networking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quae? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Networking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quae? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Poppins\", sans-serif;\n}\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 0px 8%;\n  margin-left: 65px;\n}\n.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 10%;\n  margin-bottom: 60px;\n  font-weight: 600;\n  position: relative;\n}\n.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::after {\n  content: \"\";\n  background: #303ef7;\n  width: 100px;\n  height: 5px;\n  position: absolute;\n  bottom: -5px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  grid-gap: 30px;\n}\n.service[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 25px 10px;\n  border-radius: 5px;\n  font-size: 14px;\n  cursor: pointer;\n  background: transparent;\n  transition: transform 0.5s, background 0.5s;\n}\n.service[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 40px;\n  margin-bottom: 10px;\n  color: #303ef7;\n}\n.service[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.service[_ngcontent-%COMP%]:hover {\n  background: #303ef7;\n  color: #fff;\n  transform: scale(1.05);\n}\n.service[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHJvcC9kcm9wLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDZHQUFBO0FBRVI7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7QUFBRjtBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjtBQUdBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUFGO0FBR0E7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBQUFGO0FBR0E7RUFDRSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxjQUFBO0FBQUY7QUFHQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQ0FBQTtBQUFGO0FBR0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQUY7QUFHQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFBRjtBQUdBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFBRjtBQUdBO0VBQ0UsV0FBQTtBQUFGIiwiZmlsZSI6InNyYy9hcHAvZHJvcC9kcm9wLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDBweCA4JTtcclxuICBtYXJnaW4tbGVmdDogNjVweDtcclxufVxyXG5cclxuLmNvbnRhaW5lciBoMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNvbnRhaW5lciBoMTo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGJhY2tncm91bmQ6ICMzMDNlZjc7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogNXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IC01cHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcclxuICBncmlkLWdhcDogMzBweDtcclxufVxyXG5cclxuLnNlcnZpY2Uge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyNXB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMsIGJhY2tncm91bmQgMC41cztcclxufVxyXG5cclxuLnNlcnZpY2UgaSB7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgY29sb3I6ICMzMDNlZjc7XHJcbn1cclxuXHJcbi5zZXJ2aWNlIGgyIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuLnNlcnZpY2U6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMzMDNlZjc7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxufVxyXG5cclxuLnNlcnZpY2U6aG92ZXIgaSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-drop',
                templateUrl: './drop.component.html',
                styleUrls: ['./drop.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map