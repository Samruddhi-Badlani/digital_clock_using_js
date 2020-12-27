let hours;
let minutes;
let seconds
setInterval(()=>{
a = new Date();
hours= a.getHours();
minutes=a.getMinutes();
seconds=a.getSeconds();
document.getElementById("time").innerHTML=hours+":"+minutes+":"+seconds;
},1000);
