let togg1 = document.getElementById("checkbox_toggle");
let menu = document.getElementById("menu");

togg1.addEventListener("click", () => {
if(getComputedStyle(menu).transform != "matrix(1, 0, 0, 0, 0, 0)"){
    menu.style.transform = "scale(1,0)";
} else {
//menu.style.display = "none";
menu.style.transform = "scale(1,1)";


}})

// $(document).ready(function(){
//     $("#humb").click(function(){
//       $("#menu").slideToggle("slow");
//     });
//   });