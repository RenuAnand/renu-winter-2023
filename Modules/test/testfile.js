
console.log('\n Q1');
const arr1 = [21, 32, 12, 43, 45, 65, 12];
const num1 = 12;
let arr1Result = [];        // final ans should be in this variable (get values in arr1Result from arr1 which are NOT equals to num1)

// code

console.log(arr1);          // [21, 32, 12, 43, 45, 65, 12];
console.log(arr1Result);    // [21, 32, 43, 45, 65];

arr1.splice(2, 1);
arr1.splice(5, 1);
console.log(`arr1result->${arr1}`);



console.log('\nQ3');
const arr3 = ['FOOTBALL', 'rUGBy', 'bASEball', 'sOCcEr', 'BaskETBall', 'bAsEbAlL', 'mARAthon'];
let arr3Result = 5;

if(arr3[5].toLowerCase().localeCompare('baseball' >= 2) === false ) {
    console.log('-1');
}
else {
    console.log(`second occurance in arr3->${arr3Result}`);
}
console.log(arr3);




console.log('\nQ2');

const accounts = [
    {
        accountNumber: 1234,
        balance: 1000
    },
    {
        accountNumber: 2345,
        balance: 2000
    },
    {
        accountNumber: 3456,
        balance: 3000
    },
    {
        accountNumber: 4567,
        balance: 4000
    },
    {
        accountNumber: 5678,
        balance: 5000
    },
]
total = 0;


for (let i = 0; i <= accounts.length - 1; i++) {
    total = accounts[i].balance + total;

}
console.log(total);