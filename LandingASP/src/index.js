"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./css/main.css");
var $ = require("jquery");
var isAutoSliding = true;
var sliderDelay = 5000;
$(function () {
    $(".btn").click(function () {
        $(".submenu").slideToggle(500);
    });
});
document.querySelectorAll(".carousel").forEach(function (carousel) {
    var items = carousel.querySelectorAll(".carousel__item");
    var buttonsHtml = Array.from(items, function () {
        return '<span class="carousel__button"></span>';
    });
    carousel.insertAdjacentHTML("beforeend", "\n        <div class=\"carousel__nav\">\n            ".concat(buttonsHtml.join(""), "\n        </div>\n"));
    var buttons = carousel.querySelectorAll(".carousel__button");
    function disableAll() {
        items.forEach(function (item) { return item.classList.remove("carousel__item--selected"); });
        buttons.forEach(function (button) { return button.classList.remove("carousel__button--selected"); });
    }
    function chooseSlide(slide) {
        disableAll();
        items[slide].classList.add("carousel__item--selected");
        buttons[slide].classList.add("carousel__button--selected");
    }
    function autoSlide(nextSlide) {
        if (nextSlide >= items.length)
            nextSlide = 0;
        chooseSlide(nextSlide);
        window.setTimeout(autoSlide, sliderDelay, nextSlide + 1);
    }
    buttons.forEach(function (button, i) {
        button.addEventListener("click", function () {
            disableAll();
            items[i].classList.add("carousel__item--selected");
            button.classList.add("carousel__button--selected");
        });
    });
    if (isAutoSliding)
        autoSlide(0);
    else
        chooseSlide(0);
});
