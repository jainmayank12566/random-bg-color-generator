// console.log("namastejijijiji")
const body=document.querySelector("body");
const start=document.getElementById("start");
const stop=document.getElementById("stop");
function randomColors(){
    const hex="0123456789ABCDEF";
    let color2='#';
    for(let i=0;i<6;i++){
        color2=color2+hex[Math.floor(Math.random()*16)]
    }
    body.style.background=color2;
}
let id;
start.addEventListener("click",()=>{
    id=setInterval(randomColors,1000);
})
stop.addEventListener("click",()=>{
    clearInterval(id);
})