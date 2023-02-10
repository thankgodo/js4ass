
// // ? Question 1:Multi dimensional Arrays
var arr = [[1, 2, 3],[4, 5, 6],[7,8,9],[10, 11, 12],[13, 4, 11],[2, 136, 14]];
// // *print out these numbers (10,8,13,136 and 4)from the array provided above
alert(arr[3][0],[2][1]);

// //?Question2: Fill in the blank spaces with the elements in the sentence array
// // *I am a ___[1]___ developer at __[2]______ and i love ____[0]__________
var sentence = ["javascript", "web", "Capacity Bay"];
alert(`I am a ${sentence[1]} developer at ${sentence[2]} and I love ${sentence[0]}.`);

// // required output=>I am a web developer at capacity bay and i love javascript

// // ?Question 3 : Use the bracket notation to print out 4th to the last character of "Generalization"
var arr0 = "Generalization";
var myarr = arr0.split("");
alert(myarr.length);
alert(myarr);
// // ? Question 4 : Create an array and populate it with these strings

// "orange", "apple", "guava", "lemon";
var arr1 = ["orange", "apple", "guava", "lemon"]
alert(arr1)

// // Add these strings at the beginning of the array you created above
// "pea", "banana";
arr1.unshift("pea", "banana");
alert(arr1);

// // // Add these strings at the end of the array you created above.
// // "Avocado", "mango";
arr1.push("Avocado", "mango")
alert(arr1)




// // Section 2: Fizz Buzz Game
// // 1. Write a program that prints out numbers in an array whenever we run a function
 var arr = [];
function writeNum(){
    for(let i = 1; arr.push(i); i++ ) {
        arr.push (i=i+1)
        alert(arr);
       return
    }

}
writeNum();
writeNum();
writeNum();
writeNum();
writeNum();


// when ever we run this function, we want it to keep increasing the number of items in our array
// writeNum() //will output = [1]
// writeNum() //will output = [1,2]

// writeNum() //will output = [1,2,3]

// writeNum() //will output = [1,2,3,4] etc


// a. Now check if any of the number outputting is divisibel by 3 print "Fizz"
// i.e  writeNum() //will output = [1]
// writeNum() //will output = [1,2]

// writeNum() //will output = [1,2,"Fizz"]  because 3 is divisible by 3 

// writeNum() //will output = [1,2,3,4] etc

// b. Now check if any of the number outputting is divisible by 5 print "Buzz"
// i.e  writeNum() //will output = [1]
// writeNum() //will output = [1,2]

// writeNum() //will output = [1,2,"Fizz"]  because 3 is divisible by 3 

// writeNum() //will output = [1,2,"Fizz",4]
// writeNum() //will output = [1,2,"Fizz",4,"Buzz"]   because 5 is divisible by 5


// c. Now check if any of the number outputting is divisible by both 3 & 5 print "FizzBuzz"
// i.e  writeNum() //will output = [1]
// writeNum() //will output = [1,2]

// writeNum() //will output = [1,2,"Fizz"]  because 3 is divisible by 3 

// writeNum() //will output = [1,2,"Fizz",4]
// writeNum() //will output = [1,2,"Fizz",4,"Buzz",.........]   because 5 is divisible by 5
// writeNum() //will output = [1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz"] because 15 is divisible by both 3 & 5

// Prints a simple multidimensional array in JavaScript
// var arr1 = ["ABC", 24, 18000];
// var arr2 = ["EFG", 30, 30000];
// var arr3 = ["IJK", 28, 41000];
// var arr4 = ["EFG", 31, 28000];
// var arr5 = ["EFG", 29, 35000];
// var salary = [arr1, arr2, arr3, arr4, arr5];
// for(var i = 0; i < salary.length; i++) {
//     console.log(salary[i]);
// }
// console.log(salary[0][0]);

