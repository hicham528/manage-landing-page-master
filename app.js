const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let errors=document.querySelector(".errors");
let email_input=document.getElementById("email_input");
let go_btn=document.querySelector(".go_btn")


go_btn.onclick=()=>{
    if(!regex.test(email_input.value)){
        errors.innerHTML="email is required";
        email_input.style.color="red"
    }else{
         errors.innerHTML="";
        email_input.style.color="black"
        email_input.value=""
    }
}


let navbare=document.querySelector(".navbare");
let open_nav=document.querySelector(".open_nav");
open_nav.onclick=()=>{
    navbare.classList.toggle("new-navbare");
    if(open_nav.src.includes("images/icon-hamburger.svg")){
        open_nav.src="images/icon-close.svg"
    }else{
          open_nav.src="images/icon-hamburger.svg"
    }
}