let myAge = 28; 
let earlyYears = 2; 
earlyYears *= 10,5;

let laterYears = myAge - 2;
laterYears *=4;
console.log(earlyYears);
console.log(laterYears);
let myAgeInDogYears = earlyYears + laterYears;

let myName = "Felipe".toLowerCase();
console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in human years which is ${myAgeInDogYears} years old in dog years.`);