// 1

function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello")); 

// 2

function countVowels(str){
    const vowels="aeiou";
    let count =0;
    const lowerCaseStr = str.toLowerCase();
    for (let i of lowerCaseStr){
        if (vowels.includes(i)){
            count++;
        }
    }
    return count;
}

console.log(countVowels('mari'));

// 3

function minMax(arr){
    if (arr.length==0){
        return "masivi carielia sheitane ciprebi";
    }
let min = arr[0];
let max = arr[0];
for(let i=1;i<arr.length;i++){
const currentNum = arr[i];
 if (currentNum < min) {
      min = currentNum;
    }
    if (currentNum > max) {
      max = currentNum;
    }
}
return {min:min,max:max};
}

const numbers = [1,2,3,4,5,6];
const result = minMax(numbers);
console.log(result);

// 4
function isPalindrome(str){
    let strlowcase=str.toLowerCase();
    let strRevers = strlowcase.split('').reverse().join('');
    if (strlowcase==strRevers){
        return true;
    }else return false;

}

console.log(isPalindrome('level'));

// 5

function capitalizeWords(sentence){
    let words=sentence.split(' ');
    let capitalaize= words.map(item =>{
        if (item.length==0){
            return '';
        }
    return item[0].toUpperCase()+item.slice(1)
    
    } );
    return capitalaize.join(' ');
}

console.log(capitalizeWords("skubi dubi duu"));

// 6
function countWords(sentence){
    let words = sentence.trim().split(' ');
    return words.length;
}
console.log(countWords("ra kargia ra kargia kargia kargia"));



// 8

function shuffle(arr){
    const newArr = [...arr];
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
}

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(shuffle(myNumbers));