const temp = document.querySelector(".temp");
const cisnienie = document.querySelector(".cisnienie");
const wilgotnosc = document.querySelector(".wilgotnosc");
const uv = document.querySelector(".uv");
const mocsl = document.querySelector(".mocsl");
const wiatr = document.querySelector(".wiatr");
const kierw = document.querySelector(".kierw");

const sock = io("ws://resttest.wsi.edu.pl", {
    autoConnect: true
});

sock.on("connect", e=> {
    console.log("Połąciono");
    sock.emit("get", "/stacja");
    sock.emit("set", "dane", {a:1});
})

sock.on("set", (url, dane) => {
    if(url == "/stacja"){
        console.log(url, dane)

        let tempC = (((dane.tempf - 32) * 5) / 9).toFixed(1);
        temp.innerHTML = `<h3>Temperatura</h3> ${tempC} C°`;

        let cisnienieP = (3386.389 * dane.baromrelin / 100).toFixed(2);
        cisnienie.innerHTML = `<h3>Ciśnienie</h3> ${cisnienieP} MPa`;

        wilgotnosc.innerHTML = `<h3>Wilgotność powietrza</h3> ${dane.humidity} %`;

        uv.innerHTML = `<h3>Uv</h3> ${dane.uv} nm`;

        let mocw = (dane.maxdailygust * 0.44704).toFixed(2);
        mocsl.innerHTML = `<h3>Maksymalna Siła Wiatru</h3> ${mocw} m/s`;

        let wiatr1 = (1.609344 * dane.windspeedmph / 0.27777777777).toFixed(2);
        wiatr.innerHTML = `<h3>Sila Wiatr</h3> ${wiatr1} m/s`;

        let kierw1 = (dane.winddir + 180) % 360;
        kierw.innerHTML = `<h3>Kierunek Wiatru  </h3> ${kierw1}`;
    }

})

