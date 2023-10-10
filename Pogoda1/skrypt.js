const sock = io('ws://resttest.wsi.edu.pl', {
    autoConnect: true
});

function ftoc(f)
{
    return ((f-32)*5/9).toFixed(2);
}

function ctom(o)
{
    return (o*25.4).toFixed(2);
}

function fcis(c)
{
    return (3386.389 * c / 100).toFixed(2);
}

function fmocsl(t)
{
    return (t * 0.44704).toFixed(2);
}

function fwiatr(q)
{
    return (1.609344 * q / 0.27777777777).toFixed(2);
}

sock.on("connect", () => {
    console.log("Połączono");
    sock.emit("get","/stacja");
});



sock.on("set", (url, data) => {
    if(url != '/stacja') return;

    document.querySelector(".temp .value").innerHTML = ftoc(data.tempf);
    document.querySelector(".tempin .value").innerHTML = ftoc(data.tempinf);
    document.querySelector(".opady .value").innerHTML = ctom(data.rainratein);
    document.querySelector(".optyg .value").innerHTML = ctom(data.weeklyrainin);
    document.querySelector(".opmi .value").innerHTML = ctom(data.monthlyrainin);
    document.querySelector(".opro .value").innerHTML = ctom(data.yearlyrainin);

    document.querySelector(".cis .value").innerHTML = fcis(data.baromrelin);
    document.querySelector(".wil .value").innerHTML = (data.humidity);
    document.querySelector(".uv .value").innerHTML = (data.uv);
    document.querySelector(".mocsl .value").innerHTML = fmocsl(data.maxdailygust);
    document.querySelector(".wiatr .value").innerHTML = fwiatr(data.windspeedmph);
    console.log(data);
    console.log(data);
})