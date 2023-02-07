console.log("\n\n Q1");
let mynumber = 17;
if (mynumber % 5 === 0 && mynumber % 3 === 0) {
    console.log(`\n divisible by 5 and divisable by 3`)
}
else if (mynumber % 5 === 0) {
    console.log(`\n divisable by 5`);
}
else if (mynumber % 3 === 0) {
    console.log(`\n divisable by 3`);
}
else {
    console.log(`\n value of my number`);
}


console.log("\n\n Q2");
const sports = ['Basketball', 'Football', 'Rugby', 'Swimming', 'Soccer', 'Baseball'];
console.log(`\n sports-> ${sports}`);
if (sports.includes('Basketball' === false)) {
    sports.fill("Basketball", 2, 3)
    console.log(`\n sports-> ${sports}`);
}
else {
    if (sports[2].toLowerCase().localeCompare('basketball') === 0) {
        console.log('\n basketball is present at index-2');
    }
    else {
        console.log('\n basketball is NOT present at index-2');
    }
}


console.log("\n\n Q3");
const planets = ['Mars', 'Mercury', 'Mars', 'Jupiter'];
console.log(`\n planets-> ${planets}`);
if (planets.indexOf('Earth') === 0) {
    console.log('\n Earth is present at correct place');
}
else {
    planets.unshift('Earth');
    console.log(`\n planets-> ${planets}`);
}