// console.log('Hello, World!');

// what is the value of age after this code runs ?
// let age = 23;
// age +2;
// Solution :
// let age = 23;
// age + 2;
// console.log(age); 

// what is the value of avg after this code runs ?

// let hindi = 80;
// let english = 90;
// let maths = 96;
// let avg = (hindi + english + maths) / 3;
// console.log(avg);

// what is the value of each variable in each line of code ?

// let num = 5;
// let newNum = num++;
// newNum == ++num;
// console.log(newNum);
// console.log(num);

//boolean

// strings

// let name1 = "Kunal Mandal";
// console.log(name1.length);
// let role = "college student";
// let char = 'a';
// let num = '16';
// let empty = '';

// console.log(name,role, char, num, empty);

// Array 

// let name2 = "kunal mandal";

// console.log(name2[0]);
// console.log(name2[1]);
// console.log(name2[2]);
// console.log(name2[3]);
// console.log(name2[4]);
// console.log(name2[5]);
// console.log(name2.length); // for showing length of string or array

// concatenation

// let firstName = "Kunal";
// console.log(firstName[0]);
// let lastName = "Mandal";
// let fullName = firstName + " " + lastName;
// console.log(fullName);


// console.log("tony" + " " + "stark");

// declare your name as a stringn and print it's length in js

// let str = "Kunal Mandal";
// console.log(str.length);

// Declare your frist name as string ND PRINT it's frist & last  characters

// let str1 = "Kunal Mandal";
// console.log(str1[0]);
// console.log(str1[str1.length - 1]);

// what is the output of the following code

// console.log("apnacollege" + 123);

// what are length of the empty string and a string with a single sppace ?

// let emptyString = "";
// let singleSpaceString = " ";

// console.log(emptyString.length); // This will print 0
// console.log(singleSpaceString.length); // This will print 1

// comparison operator

// let age = 20;
// let name = "Kunal Mandal";
// let num = 20;

// console.log(age === name);
// console.log(age === num);
// console.log(typeof age, typeof num , typeof name);

// condition statement ( if )
// Create a traffic light system that shows what to do based on the color.

// let collor = "yellow";

// if( collor === "red"){
//     console.log("stop");
// }
// else if (collor === "yelloww") {
//     console.log("Ready");
// } else  if (collor === "green") {
//     console.log("Go");
// }
// else{
//     console.log("chosee the correct collor");
// }

//Create a system to calculate popcron based on the size customer asked for : 

// if the size is 'XL', price is RS. $250
// if the size is 'L', price is RS. $200
// if the size is 'M', price is RS. $100
// if the size is 'S', price is RS. $50

// let popcron_size = "s";

// if(popcron_size === "xl"){
//     console.log("Price is RS. 250");
// }

// else if (popcron_size === "l") {
//     console.log("Price is RS. 200");
// }

// else if (popcron_size === "m") {
//     console.log("Price is RS. 100");
// }

// else if (popcron_size === "s") {
//     console.log("Price is RS. 50");
// }

// else{
//     console.log("Choose the correct size");
// }

// nested if-else

// let marks = 205;

// if ( marks >= 33 && marks <=100){
//     if ( marks >= 80 && marks <= 100){
//         console.log(" Your Grade O ");
//     }
//     else {
//         console.log(" Your Grade A ");
//     }
// }
// else {
//     console.log(" Better luck next Time ");
// }

// let num = 12;

// if((num % 3 == 0 ) && ((num + 1 == 15 )|| (num - 1 == 11 ))){
//     console.log("safe");
// }
// else {
//     console.log("unsafe");
// }

// A "good string" is a string that starts with the letters 'a' and has a length > 3. Write a program to find if a string is a good string or not.

let str1 = "kunal";
let str2 = "amit";
let str3 = "varun";

if(str1 [0] === "a" && str1.length > 3){
    console.log("Good String");

}
else if (str2[0] === "a" && str2.length > 3){
    console.log("Good String");
}
else if (str3[0] === "a" && str3.length > 3){
    console.log("Good String");
}

else{
    console.log("Not a good string");
}