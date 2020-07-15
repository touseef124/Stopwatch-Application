var min=0;
var sec=0;
var msec=0;
var interval;
var running;
function start(){
running=setInterval(function(){
    interval=document.getElementById("msec");
    interval.innerHTML=msec;
    msec++;
        if(msec>9)
        {
            msec=0;
            sec++;
            interval=document.getElementById("sec");
            interval.innerHTML=sec;

            if(sec>=59)
            {
                sec=0;
            min++;
            interval=document.getElementById("min");
            interval.innerHTML=min;
            }
        }
},100)
}


function stop()
{
    clearInterval(running);
}

function preset(){
    min=0;
    sec=0;
    msec=0;
    var minute=document.getElementById("min");
    var second=document.getElementById("sec");
    var msecond=document.getElementById("msec");
    minute.innerHTML=min;
    second.innerHTML=sec;
    msecond.innerHTML=msec;
}
// var count=0;
// var interval;
// function timer(){
//     count++;
//     document.write(count);
//     if(count>=10)
//     {
//         count=0;
//     }
// }
// function namr(){
//     document.write("tauseef")
// }
// interval=setInterval(timer,100)

// setTimeout(function(){
//     clearInterval(interval);
// },5000)