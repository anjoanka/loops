// Цикл повинен проходити від 1 до 200
// і виводити всі парні числа

const evenNumbers = [];

for (let i = 1; i <= 200; i++) {
    if (i % 2 == 0) {
        evenNumbers.push(i)
    }
};
console.log(evenNumbers);


// Вивети всі квадрати числ від 1 до 10

const squareNumbers = [];

for (let i = 1; i <= 10; i++) {
    squareNumbers.push(i * i)
};
console.log(squareNumbers);


// порахувати кількість літер у слові

const word1 = "hello";
const word2 = "hello world";

function countLetters(word){
    const letterCount = {};
    for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        !letterCount[letter] ? letterCount[letter] = 1 : letterCount[letter]++;
    }
    console.log(letterCount);
};

countLetters(word1);
countLetters(word2);
