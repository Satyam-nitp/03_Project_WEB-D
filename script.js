
const nav=document.querySelector(".navBox");
const navClick=document.querySelector(".nav");
const navClick2=document.querySelector(".nav2");
const click=document.querySelector("#wrapper");

const con1=document.querySelector(".con1");
const con2=document.querySelector(".con2");
const con3=document.querySelector(".con3");

let check=true;
navClick.addEventListener("click", ()=>{
    nav.classList.toggle("active");
    click.classList.toggle("wrap");
    con1.classList.toggle("c1");
    con2.classList.toggle("c2");
    con3.classList.toggle("c3");

    if(check){
        navClick.innerHTML='<i class="fa-solid fa-x"></i>';
        check=false;
    }
    else{
        navClick.innerHTML='<i class="fa-solid fa-bars"></i>';
        check=true;
    }
});