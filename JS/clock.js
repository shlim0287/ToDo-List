// digital clock
const secondHand=document.querySelector(".sec-hand")
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

setDate = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
   
    const mins = now.getMinutes();
    const minsDegrees = (mins / 60) * 360 + 90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;
   
    const hours = now.getHours();
    const hoursDegrees = (hours / 12) * 360 + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  };
   
  setInterval(setDate, 1000);
//   analog clock
const analogClock=document.querySelector("h2")
function getClock(){
    now=new Date();
    const secondsA = String(now.getSeconds()).padStart(2,"0");
    const minsA = String(now.getMinutes()).padStart(2,"0");
    const hoursA =String(now.getHours()).padStart(2,"0");
    analogClock.innerText=`${hoursA}:${minsA}:${secondsA}`;
}

getClock();
setInterval(getClock,1000);


