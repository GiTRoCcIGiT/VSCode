
function testPesel(numerPesel = "")
{
    let regClear = /([_.-])/g;
    let regPesel = /^([0-9]{11})$/;
    numerPesel = numerPesel.replaceAll(regClear, "");
    if(Number(numerPesel) == 0 || !regPesel.test(numerPesel)) return false;
    let waga = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
    suma_kontrolna = 0;
    for ( let i=0; i<10; i++)
    {
        suma_kontrolna += numerPesel[i]*waga[i]
    }
    return numerPesel[10] == (suma_kontrolna % 10);
}

let kom = document.querySelector("#komunikat");
let fpesel = document.querySelector("#numerpesel");
fpesel.addEventListener("change", (e)=> {
    let res = testPesel(fpesel.value);
    kom.innerHTML = `Podany numer Pesel ${fpesel.value} jest ${res?"poprawny":"niepoprawny"}
     numer należy do ${fpesel.value[9]%2==0?'kobiety':'mężczyzny'}`
    console.log(res);
})

console.log(testPesel("00000000000")); //zły pesel
console.log(testPesel("12345678901")); //zły pesel
console.log(testPesel("1234568901")); //zły pesel
console.log(testPesel("123456448901")); //zły pesel
console.log(testPesel("1234568fsd1")); //zły pesel
console.log(testPesel("1234568907")); //poprawny pesel
console.log(testPesel("123 45-68_9.07")); //poprawny pesel
