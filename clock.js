const secHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
function setDate(){
    const getDate = new Date();
    const seconds = getDate.getSeconds();
    const secDegrees = ((seconds / 60) * 360) + 90;
    secHand.style.transform = `rotate(${secDegrees}deg)`;
    
    const getMin = getDate.getMinutes();
    const minDegree = ((getMin / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minDegree}deg)`;

    const getHours = getDate.getHours();
    const hourDegree = ((getHours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;

}
setInterval(setDate, 1000);