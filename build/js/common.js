
function setWrapperMargin(wrapper,footer){let wrapperNode=document.querySelector(wrapper);let footerNode=document.querySelector(footer);wrapperNode.style.marginBottom=`${footerNode.clientHeight}px`;}
window.addEventListener("DOMContentLoaded",function(){let buttonsFree=document.querySelectorAll("[data-target=modal-free]");setWrapperMargin(".page__wrapper",".site-footer");for(let i=0;i<buttonsFree.length;i++){buttonsFree[i].addEventListener("click",modalOpen);};document.querySelector(".form-free__input").addEventListener("input",mask,false);});let setCursorPosition=function(pos,elem){elem.focus();if(elem.setSelectionRange)elem.setSelectionRange(pos,pos);else if(elem.createTextRange){let range=elem.createTextRange();range.collapse(true);range.moveEnd("character",pos);range.moveStart("character",pos);range.select()}}
let mask=function(event){let matrix=this.defaultValue,i=0,def=matrix.replace(/\D/g,""),val=this.value.replace(/\D/g,"");def.length>=val.length&&(val=def);matrix=matrix.replace(/[_\d]/g,function(a){return val.charAt(i++)||"_"});this.value=matrix;i=matrix.lastIndexOf(val.substr(-1));i<matrix.length&&matrix!=this.defaultValue?i++:i=matrix.indexOf("_");setCursorPosition(i,this)}
function modalOpen(){let modal=document.querySelector(`.${this.getAttribute("data-target")}`);let close=modal.querySelector(".modal__close");modal.classList.add("modal--show");overlay.open();close.addEventListener("click",function(){modal.classList.remove("modal--show");overlay.close();});}
let overlay={overlayNode:document.querySelector(".page__overlay"),open(){this.overlayNode.classList.add("page__overlay--show");},close(){this.overlayNode.classList.remove("page__overlay--show");}}