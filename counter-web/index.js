let countval=document.getElementById("count");
let increment=document.getElementById("increase");
let decrement=document.getElementById("decrease");
let reseet=document.getElementById("reset");
 let count=0;

increment.addEventListener("click",function(){
    count++;
    countval.textContent=count;
})

decrement.addEventListener("click",function(){
    if(count==0){
        return;
    }
    count--;
    countval.textContent=count;
})

reseet.addEventListener("click",function(){
    count=0;
    countval.textContent=count;
})