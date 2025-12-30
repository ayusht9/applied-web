const el = document.querySelector('#field');
const output = document.querySelector('.here');

console.log(el);

el.removeAttribute("disabled")

function showText(e){
    output.textContent=e.target.value;
}

function removeText(){
    output.textContent="";
}

el.addEventListener("input", showText);
el.addEventListener("blur", removeText);