let div = document.querySelector("div");
let btn = document.querySelector("button");

let TimerOnOff = false;
let StartTime = new Date();

btn.addEventListener("click", (e) => {
    TimerOnOff = !TimerOnOff;
    if(TimerOnOff){
        StartTime = new Date();
    }
})

setInterval( (e) => {
    let dzisiaj = new Date();
    let dzien = dzisiaj.getDate();
    let miesiac = dzisiaj.getMonth()+1;
    let rok = dzisiaj.getFullYear();
    let godzina = dzisiaj.getHours();
    let minuty = dzisiaj.getMinutes();
    let sekunda = dzisiaj.getSeconds();
    div.innerText = "Dzegar sformatowany: " + dzien + "." + miesiac + "." + rok + "  " + godzina + ":" + minuty + ":" + sekunda;
}, 1000)

setInterval( (e) => {
    if(TimerOnOff){
        let czas = ((new Date())-StartTime);
        let ms = czas % 1000;
        let czas1 = Math.round(czas / 1000)
        let sec = czas1 % 60;
        let min = Math.round((czas1-sec % 3600) / 60);

        let godz = 0;//Math.round(czas1 - (min * ) / 36000000);
        div.innerText = "Stoper " + godz + ":" + min + ":" + sec + "." + ms ;

    }
    
}, 100)

