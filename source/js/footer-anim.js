function setWrapperMargin (wrapper, footer) {
    let wrapperNode = document.querySelector(wrapper);
    let footerNode = document.querySelector(footer);

    wrapperNode.style.marginBottom = `${footerNode.clientHeight}px`;
}
