
import "./css/main.css";
import * as $ from "jquery";
$(function () {
    $(".btn").click(function () {
        $(".submenu").slideToggle(500);
    });
});
document.querySelectorAll(".carousel").forEach(carousel => {
    const items = carousel.querySelectorAll(".carousel__item");
    const buttonsHtml = Array.from(items, () => {
        return '<span class="carousel__button"></span>';
    });
    carousel.insertAdjacentHTML("beforeend", `
        <div class="carousel__nav">
            ${ buttonsHtml.join("") }
        </div>
`);
    const buttons = carousel.querySelectorAll(".carousel__button");

    function disableAll() {
        items.forEach(item => item.classList.remove("carousel__item--selected"));
        buttons.forEach(button => button.classList.remove("carousel__button--selected"));
    }
    function chooseSlide(slide: number) {
        items[slide].classList.add("carousel__item--selected");
        buttons[slide].classList.add("carousel__button--selected");
    }
    function autoSlide(nextSlide: number) {
        if (nextSlide >= items.length)
            nextSlide = 0;
        disableAll();
        chooseSlide(nextSlide);
        window.setTimeout(autoSlide, 5000, nextSlide + 1);
    }

    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            disableAll();
            items[i].classList.add("carousel__item--selected");
            button.classList.add("carousel__button--selected");
        });
    });
    autoSlide(0);
});
