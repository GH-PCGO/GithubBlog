const drawer =document.querySelector(".drawer");
const Menu=document.querySelector(".menu");

//drawer.addEventListener("click",()=>{
//	burger.classList.toggle("");
//	console.log(111);
//});
drawer.addEventListener("click", myFunction);
function myFunction() {
  Menu.classList.toggle("open");
}