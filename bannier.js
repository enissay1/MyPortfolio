let togg1 = document.getElementById("checkbox_toggle");
let menu = document.getElementById("menu");

togg1.addEventListener("click", () => {
if(getComputedStyle(menu).display != "none"){
menu.style.display = "none";
} else {
menu.style.display = "inline-block";
}
})