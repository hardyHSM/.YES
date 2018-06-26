function modalOpen () {
    let modal = document.querySelector(`.${this.getAttribute("data-target")}`);
    let close = modal.querySelector(".modal__close");

    modal.classList.add("modal--show");
    overlay.open();
    close.addEventListener("click", function () {
        modal.classList.remove("modal--show");
        overlay.close();
    });
}

let overlay = {
    overlayNode: document.querySelector(".page__overlay"),
    open () {
        this.overlayNode.classList.add("page__overlay--show");
    },
    close () {
        this.overlayNode.classList.remove("page__overlay--show");
    }
}

