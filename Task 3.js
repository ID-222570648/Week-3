
       
       
     
        
function viewDate(){
    const date = new Date();
    let curDate = date.toDateString();
    let curTime = date.toLocaleTimeString();
    let curUTC = date.toUTCString();
    let DayandDate= date.setDate(30);
    let curDate2 = date.toLocaleDateString();
        document.getElementById('demo1').innerHTML = curDate;
        document.getElementById("demo2").innerHTML = curTime;
     document.getElementById("demo3").innerHTML = curUTC;
        document.getElementById('demo4').innerHTML = date;
        document.getElementById("demo5").innerHTML = curDate2;
       
       }

      