
//1) Sum Zero
//Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.
//For example:
//addToZero([]);
// -> False
//addToZero([1]);
// -> False
//addToZero([1, 2, 3]);
// -> False
//addToZero([1, 2, 3, -2]);
// -> True

// let array = []  false
// let array = [1] false
// let array = [1, 2, 3] false

// let array = [1, 2, 3, -2] //true

// let sum = false;
// for (let i = 0; i < array.length; i++) {
//   for (let m = 0; m < array.length; m++) {
//     if (i !== m) {
//       if (array[i] + array[m] === 0) {
//         sum = true;
//       } 
//     }
//   }
// }
// console.log(sum)


//execution time///
// console.time('sum')
// for (var i = 0; i < 100000000;i++)
// console.timeEnd('sum')
//sum: 176.213ms




////////////////////////////////////////////////////////

//2) Unique Characters
//Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.
//For example:
//hasUniqueChars("Monday")
// -> True
//hasUniqueChars("Moonday")
// -> False

// function isUniqueChar(word) {
//     let uniqueChars = new Set([])
//     for (let i = 0; i < word.length; i++) {
//       uniqueChars.add(word[i])
//     }
//     return uniqueChars.size === word.length
//   }
//console.log(isUniqueChar("hi"))
// True
// console.log(isUniqueChar("hiiii"))
// False

// ///execution time///
// console.time('isUniqueChar')
// for (var i = 0; i < 100000000;i++)
// console.timeEnd('isUniqueChar')
//isUniqueChar: 163.386ms



/////////////////////////////////////////////////////////
//3) Pangram Sentence
//A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”
//Write a function to check a sentence to see if it is a pangram or not.
//For example:
//isPangram("The quick brown fox jumps over the lazy dog!");
// -> True
//isPangram("I like cats, but not mice");
// -> False

// function isPangram(str = '') {
//    str = str.toLowerCase()
//    const { length } = str
//    const alphabets = 'abcdefghijklmnopqrstuvwxyz'
//    const alphaArr = alphabets.split('')
//    for(let i = 0; i < length; i++){
//       const el = str[i]
//       const index = alphaArr.indexOf(el)
//       if(index !== -1){
//          alphaArr.splice(index, 1)
//       }
//    }
//    return !alphaArr.length
// }
// console.log(isPangram("The quick brown fox jumps over the lazy dog!"))//false
// console.log(isPangram("I like cats, but not mice"))//true

// ///execution time///
// console.time('isPangram')
// for (var i = 0; i < 100000000;i++)
// console.timeEnd('isPangram')
// isPangram: 131.083ms



///////////////////////////////////////////
//4) Longest Word
//Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.
//For example:
//findLongestWord(["hi", "hello"]);
// -> 5
// function findLongestWord(str) {
//     var strSplit = str.split(' ');
//     var longestWord = 0;
//     for(var i = 0; i < strSplit.length; i++){
//       if(strSplit[i].length > longestWord){
//       longestWord = strSplit[i].length;
//        }
//     }
//     return longestWord;
//   }
//   console.log(findLongestWord("hi, hello")) //5


// ///execution time///
// console.time('findLongestWord');
// for (var i = 0; i < 100000000;i++);
// console.timeEnd('findLongestWord');
// findLongestWord: 155.022ms
  