```js
String.prototype.pirmaRaide = function () {
  return ('' + this)[0];
};

Array.prototype.atrinkti = function (func) {
  let ats = [];
  for (const value of this) {
    if (func(value)) {
      ats.push(value);
    }
  }
  return ats;
};

//(a=> a*2) trumpas uzrasymas su mapu. Pasiimam nari ir grazinam padvigubinta nario reiksme
```
