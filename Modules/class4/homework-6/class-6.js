
console.log('\n Q1');
let string1 = 'have a great day';

let titlecase1 = '';
let array = string1.toLowerCase().split(' ');

for (let i = 0; i <= array.length - 1; i++) {

    titlecase1 = titlecase1 + array[i].charAt(0).toUpperCase() + array[i].substring(1) + ' ';
}
console.log(titlecase1);
console.log(string1);



console.log('\n Q4');
let string2 = 'have a great day';
let abbr = '';

let array2 = string2.toLowerCase().split(' ');

for (let i = 0; i <= array.length - 1; i++) {

    abbr = abbr + array[i].charAt(0).toUpperCase();
}
console.log(abbr);
console.log(string2);


console.log('\n Q2');
let str3 = 'hello dear how are you doing';
let reversestr3 = '';
console.log(str3);


let array3 = str3.toLowerCase().split(' ');
console.log(array3.length);
for (let i = array3.length - 1; i >= 0; i--) {

    reversestr3 = reversestr3 + array3[i].charAt(0).toUpperCase() + array3[i].substring(1) + ' ';

}

console.log(reversestr3);

console.log('\n Q3');
let array4 = [1, 1, 1, 2, 3, 1, 2];
let total = 0;

for (let i = 0; i <= array4.length - 1; i++) {
    total = array4[i] + total;
}

let avg = total / array4.length;
console.log(array4);
console.log(avg);




console.log('\n Q5');
let array5 = ['earth', 'Mars', 'jupiter'];

for (let i = 0; i <= array5.length - 1; i++) {
    
    array5[i] = array5[i].toUpperCase();
}
console.log(array5);


