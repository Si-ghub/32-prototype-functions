String.prototype.pirmaRaide = function () {
    return ('' + this)[0];
}

const hi = 'Labas';


const hiUp = hi.toUpperCase();
console.log(hi, hiUp);


const hipr = hi.pirmaRaide();
console.log(`Zodzio ${hi} pirma raide yra "${hipr}".`);


Array.prototype.atrinkti = function (func) {
    let ats = [];
    for (const value of this) {
        if (func(value)) {
            ats.push(value);
        }
    }
    return ats;
}

const kasLiekaAtrinkus = [1, 5, -7, 14, 2, 3, 4].atrinkti(n => n <= 3);

console.log(kasLiekaAtrinkus);