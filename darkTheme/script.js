console.log('Hello');

let body = document.querySelector("body")

let element = document.getElementById("theme")

element.addEventListener("click",toggleTheme);

function toggleTheme(){
    const isDark = body.classList.toggle("dark");
    element.textContent = isDark ? "Light Mode" : "Dark Mode";
}