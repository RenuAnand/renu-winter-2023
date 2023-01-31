let sentence1 = `Good morning to you`;
console.log(`sentence1->${sentence1}`);

let words = sentence1.split(` `);
words[0] = words[0].substring(0, 1).toUpperCase() + words[0].substring(1); //Good
words[1] = words[1].substring(0, 1).toUpperCase() + words[1].substring(1); // Morning
words[2] = words[2].substring(0, 1).toUpperCase() + words[2].substring(1); // To
words[3] = words[3].substring(0, 1).toUpperCase() + words[3].substring(1); // You  

let word = words[0] + ` ` + words[1] + ` ` + words[2] + ` ` + words[3];

console.log(`word->${word}`);// Good Morning To You

words[0] = words[0].substring(0, 1).toUpperCase(); //G
words[1] = words[1].substring(0, 1).toUpperCase(); // M
words[2] = words[2].substring(0, 1).toUpperCase(); // T
words[3] = words[3].substring(0, 1).toUpperCase(); // Y 

word = words[0] + words[1] + words[2] + words[3];
console.log(`word->${word}`);// GMTY




let sentence2 = `you never walk alone`;
console.log(`sentence2 -> ${sentence2} `);

let wordlist = sentence2.split(` `);

wordlist[0] = wordlist[0].substring(0, 1).toUpperCase(); //Y
wordlist[1] = wordlist[1].substring(0, 1).toUpperCase(); // N
wordlist[2] = wordlist[2].substring(0, 1).toUpperCase(); // W
wordlist[3] = wordlist[3].substring(0, 1).toUpperCase(); // A

wordlist = wordlist[0] + wordlist[1] + wordlist[2] + wordlist[3];

console.log(`wordlist->${wordlist}`);//YNWA






let sentence3 = `have a Great day`;
console.log(`sentence3 -> ${sentence3} `);

let wordlists = sentence3.split(` `);

wordlists[0] = wordlists[0].substring(0, 1).toUpperCase(); //
wordlists[1] = wordlists[1].substring(0, 1).toUpperCase(); // 
wordlists[2] = wordlists[2].substring(0, 1).toUpperCase(); // 
wordlists[3] = wordlists[3].substring(0, 1).toUpperCase(); // 

let result3 = wordlists[0] + wordlists[1] + wordlists[2] + wordlists[3];

console.log(`result3->${result3}`);//


let sentence = `comprensiveu up-to-date news coverage aggregated from sourses all over the world by googlenews`;
console.log(`sentence->${sentence}`);

let sentencesplit = sentence.split(` `);
console.log(`sentencesplit->${sentencesplit}`);

let sentencelength = sentencesplit.length;
console.log(`sentencelength->${sentencelength}`);


let username1 = `john gig`;
console.log(`\n username1->${username1}`);
username1split = username1.split(` `);
console.log(`username1split->${username1split}`);
let username1length = username1split.length;
console.log(`is it first and last name -> ${username1length === 2}`);



let username2 = `john gig hiyti`;
console.log(`\n username2->${username2}`);
username2split = username2.split(` `);
console.log(`username2split->${username2split}`);
let username2length1 = username2split.length1;
console.log(`is it first and last name-> ${username2length1=== 2}`);




let username3 = `john`;
console.log(`\n username3->${username2}`);
username3split = username3.split(` `);
console.log(`username3split->${username3split}`);

let username3length2 = username3split.length2;
console.log(`is it first and last name>${username3length2 === 2}`);

let username4 = ``;
console.log(`\n username4->${username4}`);
username4split = username4.split(` `);
console.log(`usernamesplit->${username4split}`);

let username4length3 = username4split.length3;
console.log(`is it first and last name->${username4length3 === 2}`);
