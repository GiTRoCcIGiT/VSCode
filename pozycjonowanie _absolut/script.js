let div1 = document.querySelector("body > div");
let div2 = document.querySelector("div > div");
let div3 = document.querySelector("div > div > div");
let div4 = document.querySelector("div > div > div > div");

div1.addEventListener('mousemove' , e => {
    div2.style.left = e.clientX + 'px';
    div2.style.top = e.clientY + 'px';
    div3.style.left = e.clientX + 'px';
    div3.style.top = e.clientY + 'px';
    div4.style.left = e.clientX + 'px';
    div4.style.top = e.clientY + 'px';
});