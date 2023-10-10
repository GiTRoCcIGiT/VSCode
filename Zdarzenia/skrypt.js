let butt = document.querySelectorAll("button");

let tab = {}

butt.forEach(b => {

    tab['ob' + b.innerText] = 0

    b.addEventListener('click', e => {
        tab['ob' + e.target.innerText]++;
        console.log(tab);
    })

})

console.log(butt);


let clicks = +localStorage.getItem('clicks');
const button = document.querySelector('input[type="button"]');
button.value = `Nacisnięta ${clicks} raz`;
function clickCounter() {
    localStorage.setItem('clicks', ++clicks);
    button.value = `Nacisnięta ${clicks} raz`;
}