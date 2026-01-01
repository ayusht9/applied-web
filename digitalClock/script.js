const element = document.querySelector(".clock");

const hour = element.querySelector(".hours");
const minute = element.querySelector(".minutes");
const second = element.querySelector(".seconds");

function showTime() {
    const date = new Date();
    hour.textContent = date.getHours().toString().padStart(2,0)
    minute.textContent = date.getMinutes().toString().padStart(2,0)
    second.textContent = date.getSeconds().toString().padStart(2,0)
}

showTime();
setInterval(showTime, 1000);
