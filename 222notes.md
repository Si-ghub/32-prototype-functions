String.prototype.pirmaRaide = function () {
return ('' + this)[0];
}

Array.prototype.atrinkti = function (func) {
let ats = [];
for (const value of this) {
if (func(value)) {
ats.push(value);
}
}
return ats;
}
