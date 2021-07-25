// kreipiames i stringa ir jo prototipa ir susikuriam savo metoda. Ispleciam objekta, pridedami nauja raktazodi pirmaRaide
String.prototype.pirmaRaide = function () {
    return ('' + this)[0]; //susitekstinam su tusciom '' + arba this to string
}

const hi = 'Labas'; // stringo objektas. JS visas yra objektas


const hiUp = hi.toUpperCase(); // originali funkcija
console.log(hi, hiUp);


const hipr = hi.pirmaRaide(); // susikurta funkcija, kuri daro ta pati kaip ir originali
console.log(`Zodzio ${hi} pirma raide yra "${hipr}".`);

// kreipiames i array ir jo prototipa, kokia funkcija atlikti. Kaip ir su stringu ispleciam objekta, pridedam nauja raktazodi. Originali funkcija butu Array.prototype.filter()
Array.prototype.atrinkti = function (func) {
    //console.log(this); // kreipiames i this su kuo dirbame. this veikia nes visaks yra objektai: elgiasi skirtingai kaip tekstas, boolean ar kt
    let ats = [];
    for (const value of this) {
        if (func(value)) {
            ats.push(value);
        }
    }
    return ats;
}

const kasLiekaAtrinkus = [1, 5, -7, 14, 2, 3, 4].atrinkti(n => n >= 3); // filter metodas. Grazinti visus skaicius kurie > 3. Einam per visus narius, veikia kaip mapas

console.log(kasLiekaAtrinkus, [4]);