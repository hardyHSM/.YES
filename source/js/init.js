window.addEventListener("DOMContentLoaded", function () {
    let buttonsFree = document.querySelectorAll("[data-target=modal-free]");

    setWrapperMargin(".page__wrapper",".site-footer");

    for (let i = 0; i < buttonsFree.length; i++) {
        buttonsFree[i].addEventListener("click", modalOpen);
    };





    document.querySelector(".form-free__input").addEventListener("input", mask, false);
});

window.addEventListener("resize", function () {
    setWrapperMargin(".page__wrapper",".site-footer");
});
