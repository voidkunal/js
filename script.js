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

// let str1 = "kunal";
// let str2 = "amit";
// let str3 = "varun";

// if(str1 [0] === "a" && str1.length > 3){
//     console.log("Good String");

// }
// else if (str2[0] === "a" && str2.length > 3){
//     console.log("Good String");
// }
// else if (str3[0] === "a" && str3.length > 3){
//     console.log("Good String");
// }

// else{
//     console.log("Not a good string");
// }

// use switch statement to print the day week using a number variable 'day' with value 1 to 7.

// let day = 5;

// switch(day){
//     case 1 :
//     console.log("Sunday");
//     break;
//     case 2 :
//     console.log("Monday");  
//     break;
//     case 3 :
//     console.log("Tuesday");
//     break;
//     case 4 :
//     console.log("Wednesday");
//     break;
//     case 5 :
//     console.log("Thursday");
//     break;
//     case 6 :
//     console.log("Friday");
//     break;
//     case 7 :
//     console.log("Saturday");
//     break;
//     default:
//         console.log("Choose the correct day");
// }

// ALter & Prompt

// prompt("What is your name ? : ");
// alert("Hello, World!");

// let msg = "kunal";
// msg.trim();

// let str = "Kunal Mandal";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let str = "kunal MandaL";

// console.log(str.toUpperCase().trim().indexOf("L"));

// let str = " kunal love coding ";

// console.log(str.slice(6, 10));
// console.log(str.replace("love", "do"));
// console.log(str.repeat(5));

// PQ

// For the given string trem it and set the uppercase

// let msg = "help";
// console.log(msg.toUpperCase(), msg.trim());

// for the string -> let name "apna college", predict the output for following : name.slice(4,9) name.indexof("na") name.replace("Apna", "our")

// let name = "apna college";

// console.log(name.slice(4,9));
// console.log(name.replace("college", "i" + "t"));

// what is array and what is string give example

// let student1 = "kunal" ; // string
//let student2 = ["kunal", "mandal" ]; // in js array definie as object
// console.log(typeof(student1));
// console.log(typeof(student2));

// let info = [ 'Kunal Mandal', ['Techno India University','TIU'], 221003003002, 20, 5.6 ];
// console.log(typeof(info));
// console.log(info[0]); 
// console.log(info[1][1]);
// info[3] = 3002;
// console.log(info[3]);
// info.push = "i love web dev";
// console.log(info);
// info.pop = "i love web dev";
// console.log(info);
// info.unshift = "i love myself";
// console.log(info);
// info.shift = "i love myself";
// console.log(info);

// PQS) For the given start state of an array, change it to final * from using methods

// let yearstar = ['january', 'febuary', 'march', 'april', 'may', 'june'];

// let yearshes = ['july', 'august', 'september', 'october', 'november', 'december'];
// let year = yearstar.concat(yearshes);
// console.log(year);

// console.log(year.reverse(year));


// let primary = ["red", "yellow", "green"];
// let pre = ["blue", "violet", "orange"];

// let final = pre.concat(primary);

// console.log(final);

// final.reverse();

// console.log(final);

// console.log(primary.indexOf("yellow"));
// console.log(primary.includes("red"));
// console.log(yearstar.includes("december"));
// console.log(yearstar.includes("march"));

// let color = ["red", "yellow", "green", "blue", "violet", "orange"];

// console.log(color.concat("lime"));
// console.log(color.concat("black"));

// console.log(color.reverse());
// console.log(color);
// console.log(color.concat("sky blue"));

// console.log(color.slice(2));
// console.log(color.slice(2, 4));
// console.log(color.slice(-2));
// console.log(color);

// console.log(color.splice(4));
// console.log(color);

// console.log(color.splice(0, 1, "pink", "purple"));
// console.log(color);

// let fruit = ["apple","chuchi", "banana", "orange", "grapes", "mango", "papaya", "watermelon"];
// console.log(fruit.sort());

// let num = [2, 8, 5, 1, 7, 3, 4, 6];
// console.log(num.sort());

// PQS) for the given start state of an array, change it to final from using slice

// let start = ['january', 'july', 'june', 'march', 'august'];

// console.log(start.slice(1));

// PQS ) return of the "javascript" from the given array, if it was reversed

// Solution :

// let javascript = [ 'c', 'c++', 'java', 'javascript', 'python', 'java', 'c#', 'sql', 'mongodb'];
// console.log(javascript.reverse());
// console.log(javascript.indexOf("javascript"));
// console.log(javascript.sort());

// Array with const

// const arr = [0,1, 2];
// console.log(arr);
// arr.push(4);
// console.log(arr);
// arr.pop();
// console.log(arr);

// nested array like 2d array in other language

// const ptr = [[2,4], [1,3], [5, 10]];
// console.log(ptr[1][1]);

// create a tic-tac game in 2d array

// const tic_tac = [['x', null, 0], [null, 'x', null], [0, null, 'x']];
// console.log(tic_tac);

// Some PQS of nested  loop or loop

// Make a Program to select the correct movie name using while loop(select the correct movie name pickup then loop was end either it's run continue & it's user's wnat quit the it'll be work)

// let movie = "ddlj";

// let gm = prompt("enter the movie name : ");
// for(let i = 0; ; i++){
//     if(gm === movie){
//         alert("Congratulation, you have selected the correct movie name");
//         break;
//     }
//     else{
//         gm = prompt("enter the movie name : ");
//     }
// }

// loop with array

// let fruite = ["mango", "apple", "banna", "litchi", "orange"];
// for(let i = 0; i < fruite.length; i++){
//     console.log(i, fruite[i]);
// }

// const student = { name : "Kunal Mandal", age : 20, college : "Techno India University", roll : 221003003002, cgpa : 8.5, city : "Kolkata", state : "West Bengal", country : "India" };
// console.log(student.city = "Kolkata");
// console.log(student.gender = "male");
// console.log(student);
// console.log(delete student.country);
// console.log(student);

// objects of object

// const info = {
//     kunal : {
//         Name : "Kunal Mandal",
//         Age : 20,
//         College : "Techno India University",
//         Roll : 221003003002,
//         CGPA : 8.5,
//         City : "Kolkata",
//         State : "West Bengal",
//         Country : "India"
//     },
//     tania : {
//         Name : "Tania Nasker",
//         age : 18,
//         college : "N/A",
//         school : "Harindanga High School",
//         City : "Kolkata",
//         State : "West Bengal",
//         Country : "India"
//     },
//     sraddha : {
//         Name : "Sraddha Nasker",
//         Age : 21,
//         School : "Sarada Mandir",
//         college : "Takur Puker Vivekananda College",
//         CGPA : 9.5,
//         City : "Kolkata",
//         State : "West Bengal",
//         Country : "India"
//     }
// }

// info.kunal.gender = "male";
// console.log(info.kunal);
// info.tania.gender = "female";
// console.log(info.tania);
// info.sraddha.gender = "female";
// console.log(info.sraddha);

// delete info.kunal.Country;
// console.log(info.kunal);
// delete info.tania.Country;
// console.log(info.tania);
// delete info.sraddha.Country;
// console.log(info.sraddha);

// array of object

// const info = [ {name : "kunal", age : 20}, {name : "tania", age : 18}, {name : "sraddha", age : 21} ];
// console.log(info[0]);
// console.log(info[1]);   
// console.log(info[2]);

// info.push({name : "sourav", age : 22});
// console.log(info);

// info[0].gender = "male";
// console.log(info[0]);

// delete info[2].age;
// console.log(info[2]);
// console.log(typeof(info));
// console.log(typeof(info[0]));

//Math object 

// let nums= Math.random();
// nums = nums * 10;
// nums = Math.floor(nums);
// nums = nums + 1;

// console.log(nums);

// console.log("               ");   

// short hand to use math random 

// let randoms = Math.floor(Math.random() * 10) + 1;
// console.log(randoms);

// PQS) Generate a random number between 1 to 100
// PQS) Generate a random number between 1 to 5
//PQS) Generate a random number between 45 to 49

//1PQS :

// const  pqs1 = Math.floor(Math.random() * 100) +1;
// console.log(pqs1);

// //2PQS :

// const pqs2 = Math.floor(Math.random() * 5) + 1;
// console.log(pqs2);

// //3PQS :

// const pqs3 = Math.floor(Math.random() * 5) + 45;
// console.log(pqs3);

// Build a todo appliication using array of object

// Functions with Arguments

// normal Function 

// function print(){
//     alert("Hello Kunal");
//     console.log("Hello Kunal");
// };

// print();

//Arguments Function

function info (name, age, relation){
    console.log(name, age, relation);
    alert(name);
    alert(age);
    alert(relation);
}

info("kunal", 20, "complicated");