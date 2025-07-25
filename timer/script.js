let ten=document.getElementById("ten")
let twenty=document.getElementById("twenty")
let thirty=document.getElementById("thirty")
let timer=document.getElementById("timer")
let min=0;
let sec=0;
ten.onclick=()=>{
   min=9;
   sec=59;
    let time=setInterval(()=>{
     sec--;
     if(sec==0){
        min--;
        sec=59;
     }   
   
    timer.textContent=(min<10?"0"+min:min)+":"+(sec<10?"0"+sec:sec);
    console.log(timer)

    if(min<0){
       sec=0
       min=0
       timer.textContent=min+"0"+":"+sec+"0"
       clearInterval(time)
    }
   },100)
}
twenty.onclick=()=>{
   min=19;
   sec=59;
   let time=setInterval(()=>{
     sec--;
     if(sec==0){
        min--;
        sec=59
     }
   timer.textContent=(min<10?"0"+min:min)+":"+(sec<10?"0"+sec:sec);
   console.log(timer)

   if(min<0){
    sec=0
    min=0
    timer.textContent=min+"0"+":"+sec+"0"
    clearInterval(time)
   }
   },10)

   }

thirty.onclick=()=>{
   min=29;
   sec=59;
   let time=setInterval(()=>{
     sec--;
     if(sec==0){
        min--;
        sec=59
     }
   timer.textContent=(min<10?"0"+min:min)+":"+(sec<10?"0"+sec:sec);
   console.log(timer)
   if(min<0){
    sec=0
    min=0
    timer.textContent=min+"0"+":"+sec+"0"
    clearInterval(time)
   }
   },10)

   }
 