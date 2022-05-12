
import "./css/main.css";
import * as $ from "jquery";
$(function () {
    $(".btn").click(function () {
        $(".submenu").slideToggle(500);
    });
});