let a = document.getElementById("nav");
let flow = document.querySelector(".flow");
let cross4 = document.querySelector(".cross-4");
let cross5 = document.querySelector(".cross-5");
let cross6 = document.querySelector(".cross-6");
let menuicon = document.querySelector("#menuIcon");
let home = document.querySelector(".home");
let mission = document.querySelector(".mission");
let training = document.querySelector(".training");
let training1 = document.querySelector(".training1");
let footer = document.querySelector(".footer");
let footer1 = document.querySelector(".footer1");
let footer2 = document.querySelector(".footer2");


menuicon.addEventListener("click", function () {
    if(a.classList !== document.querySelector("fix-lft")){
    a.classList.toggle("fix-lft");
    flow.classList.toggle("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3")}
});

home.addEventListener("click",function(){
    a.classList.toggle("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});
mission.addEventListener("click",function(){
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});
training.addEventListener("click",function(){
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});

training1.addEventListener("click",function(){
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});

footer.addEventListener("click",function(){
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});

footer1.addEventListener("click",function(){
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});

footer2.addEventListener("click",function(){
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});