"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./css/main.css");
var $ = require("jquery");
$(function () {
    $(".btn").click(function () {
        $(".submenu").slideToggle(500);
    });
});
