function david(array) {
    var newArray = [];
    for(var i = 0; i <= array.length; i ++){
         if(array[i] % 2 === 0){
             newArray.push(array[i])
         }
    }
    return newArray;
}

david([1, 5, 4, 6, 7, 9, 10])


function sarah(array, number){
    for(var i = 0; i <= array.length; i ++){
        if(array[i] === number){
            return true;
        } 
    } 
    return false;
}
sarah([1, 5, 4, 6, 7, 9, 10], 3);



function sarah(string){
    var splitString = string.split("");
    var reverseString = splitString.reverse();
    var joinString = reverseString.join("");

    if(joinString === string){
        return true;
    } else {
        return false;
    }
}
sarah("helleh");





function ollie(array){
    var sortedArray = array.sort();
    var newArray = [];
    for(var i = 0; i <= sortedArray.length; i ++){
        if(sortedArray[i] !== sortedArray[i+1]){
            newArray.push(sortedArray[i])
        }
    } 
    return newArray
}
ollie([1, 2, 3, 3, 2, 5, 7])




function burrito(firstString, secondString){
    var arrayFirstString = firstString.split("").sort().join("");
    var arraySecondString = secondString.split("").sort().join("");
    if(arrayFirstString === arraySecondString){
        return true;
    }
    return false;
}

burrito("not", "happy");




function sibelius(string){
    var vowels = ["a", "e", "i", "o", "u"];
    var arrayStringSplit = string.split("");
    var newString = []
    for(var i = 0; i <= arrayStringSplit.length; i ++){
        if(vowels.includes(arrayStringSplit[i])){
            newString.push("*");

        } else {
            newString.push(arrayStringSplit[i]);
        }
    }
    return newString.join("");
}

sibelius("Hello World");


function largestSum(array){
    var largestNum = 0;
    var secondNum = 0;
    for(var i = 0; i <=array.length; i++){
        if(array[i] > largestNum){
            largestNum = array[i];
        }
    }
    for(var i = 0; i <= array.length; i ++){
        if(array[i] > secondNum && array[i] !== largestNum){
            secondNum = array[i];
        }
    }
    var sum = largestNum + secondNum; 
    return sum;
}

largestSum([3, 9, 4, 7, 8, 10]);

function phrase(string){
    var lowerPhrase = string.toLowerCase().split("");
    var counter = 0;
    var newString = [];
    for(var i = 0; i <= lowerPhrase.length; i ++){
        if(lowerPhrase[i] !== "," && lowerPhrase[i] !== " "){
           if(counter % 2 === 0){
               newString.push(lowerPhrase[i].toUpperCase());
           } else{
               newString.push(lowerPhrase[i]);
           }
           counter += 1;
        } else {
            newString.push(lowerPhrase[i]);
        } 
        
    }
    return newString.join("");
 }

phrase("My name, is Sarah");



function romanNumeral(number){
    var romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "L"]
    var romanNumber = "";
    if(number <= 10){
        romanNumber += romanNumerals[number-1]
    }
    if(number >= 11 && number <= 39){
        var x = Math.floor(number/10);
        romanNumber += romanNumerals[9].repeat(x);
        if(number % 10 !== 0){
            var remainder = number % 10; 
            romanNumber += romanNumerals[remainder-1];
        }
    }
    return romanNumber;
}

romanNumeral(38);


function primeNumber(number){
    if(number <= 1){
        return false;
    }
    if(number === 2 || number === 3 || number === 5 || number === 7 || number === 9){
        return true; 
    } 
    if(number % 2 === 0 || number % 3 === 0 || number % 5 === 0){
        return false;
    } else {
        return true;
    }
}

primeNumber(55);


function duplicate(array){
    var copyArray = array.slice();
    console.log(copyArray)
    var dupeArray = array.join("") + copyArray.join("")
    console.log(dupeArray)
    var arrayDupe = dupeArray.split("").map(Number);
    return arrayDupe;
}
duplicate([1, 2, 3, 7, 4, 5])


function duplicateTwo(array) {
    var newArray = array
    array.forEach(number => {
        newArray.push(number)
    })
    return newArray
}

duplicateTwo([1,2,3,4,5])


var movie = [
    {
        title: "In Bruges",
        hasWatched: true,
        rating: 5
    },
    {
        title: "Frozen",
        hasWatched: false,
        rating: 4.5
    },
    {
        title: "Mad Max Fury Road",
        hasWatched: true,
        rating: 5
    },
    {
        title: "Les Miserables",
        hasWatched: false,
        rating: 3.5
    }
]; 

movies.forEach(function(movie){
    var result = "You have " 
    if(movie.hasWatched){
        result += "watched ";
    } else{
        result += "not seen ";
    }

    result += "\"" + movie.title + "\" -";
    result += movie.rating + " stars"
    console.log(result);
});


function sumNumber(number){
    var sum = 0
    for(var i = 0; i <= number; i ++){
        sum += i;
    }
    return(sum);
}

sumNumber(5)

function fibonacci (){
    var counter = 0
    var newArray = [0, 1]
    for(var i = 0; newArray.length <= 100; i++){
        newArray.push(newArray[i] + newArray[i+1])
        counter += 1
    }
    console.log(newArray)
}

fibonacci()


function 