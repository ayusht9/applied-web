const switchEl = document.querySelector("#switch");
let isOn = false;

switchEl.onclick = () => {
  isOn = !isOn;
  switchEl.classList.toggle("on", isOn);
};
