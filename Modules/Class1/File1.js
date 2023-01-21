// F -> C

// T(c)=(T(F)-32)/1.8

let FTemprature = 47;
let CTemptrature= (FTemprature - 32)/1.8;

console.log(`\n${FTemprature}F is equals to ${CTemptrature}C`);

// F - K
// T(K)=(T(F)+459.67)*(5/9)

let KTemptrature= (FTemprature)+459.67 * 5/9 ;

console.log(`\n${FTemprature}F is equals to ${KTemptrature}K`);

// C - F
// T(F)=(T(C) * 9/5+32)

let cTemp = 11;
let fTemp = cTemp * 9/5+32;

console.log(`\n${cTemp}C is equals to ${fTemp}F`);

// C - K
// T(K)=(T(C) + 273.15)

let cTemp4 = 11;
let kTemp4 = cTemp4 + 273.1;

console.log(`\n${cTemp4}C is equals to ${kTemp4}K`);

// K - F
// T(F)=(T(K) * 9/5 - 459.67)

let kTemp5 = 250;
let fTemp5 = kTemp5 * 9/5 - 459.67;

console.log(`\n${kTemp5}K is equals to ${fTemp5}F`);

// K - C
// T(C)=(T(K) - 273.15)

let kTemp6 = 250;
let cTemp6 = kTemp6 - 273.15;

console.log(`\n${kTemp6}K is equals to ${cTemp6}C`);
