// //Javascript ES6 The javascript ES6 defines a new set of rules governing the syntax of Javascript code(also called ECMAScript)

// //Featur             Description
// //Let and const keywords  These are used to create block level variables
// //Arrow functions  It reduced the length of the code for creating a function
// //Classes: These are templates to create object
// //Default parameter values: It allows to pass the argument  through a function by default
// //find() and findindex method: it helps  you to find the element or index of an array


// //Template string: They are new kind of string literals introduced in ES6
// //Contains features like multi line strings and string interpolation
// //They allowed embedded expressions 
// //Strings are enclosed within backtick(`) instead of single and double quotes(",")


// //Functions in Javascript
// /*
// 1. Regular functions
// 2. Arrow functions
// 3. Functions Expression
// 4. IFFE Functions
// 5. Generator functions


// Javascript Regular expression 
// A regular expression is an object that describes a pattern of characters  used to perform pattern matching and search and replace functions and text

// */
// function myFunc(){
//     var str = "visit Kriyax for best online freelancing platform"
//     var pattern = /Kriyax/i;  //it is regular expression 'kriyax  is a pattern'
//     var result = str.match(pattern);
//     document.write(result)
// }
// myFunc();

// //Javascript Regular expression
// //Modifiers: Used to perform case-insensitive and global searches
// //Brackets: Used to find a range of characters
// //Metacharacters: These are characters with a special meaning. Example '/n' used to find a newline character
// //Quantifiers: These are used to find a sequence of characters in a string


// /*
// Arrow function will reduce the length of the syntax
// There is no binding of "this keyword" in these functions
// "this" keyword always represents the object that defined the arrow function
// If there is one line of code, you can ignore the brackets and return keyword of the function

// */

// //example of arrow function
//  myFunc1 = () =>{
//      var a = 10;        //function declaration
//      var b = 20;
//      return (a + b);
//  }
//  console.log(myFunc1())   //function call


//  //Function expression
//  //These functions are used to define a function inside an expression
//  //These functions are defined with a "functon" keyword
//  //In these functions, the name of the function is omitted
//  //These functions are always invoked with the help of variable name
//  //Functions expression myst be declared before using them because they aren't hoisted

//  //example of function expression
//  myFunc2 = function(){
//      var a = 20;
//      var b = 20;
//      return (a+b);
//  }
//  console.log(myFunc2())


//  //IFFE: Immediately invoked function expression
//  //These functions are used to create a function that can execute automatically after the function definition
//  //These only run once when the interpreter runs into it.
//  //IFFE function can be assigned to a variable to store its return value, not the function definition

//  const display = (
//      function(){
//          var a = "Welcome to Kriyax";
//          return a;
//      }
//  )();
//  console.log(display)


//  //Generator function: It return the generator object when called 
//  //These functions are declared with the "function" keyword followed by asterist(*)
//  //Unlike other functions, It can return multiple values
//  //These functions doesn't execute their body when called, Instead they return an iterator object
//  //Therefore iterator's next() method is used to execute the generator body
//  //The next() method returns an object with two properties" value and done which indicates the yielded value and whatever the generator has yield its last value or not.

//  //example of generator function
//  function* myGenerator(){
//      let i = 0;  //Function declaration
//      for(i=0; i<10; i++){
//         yield i;
//      }
//  }
//  const gen = myGenerator();  //Iterato object


//  for(i = 0; i<10; i++){
//      console.log(gen.next().value)  //Execute generator's body
//  }



//  //Let keyword: ES6 provides a new way of declaring a variable using the let keyword 
//  //The let keyword creates a read and write refrence to a value
//  //It works similar to the var keyoword. But let keyword creates the variables whose values can not be accessed outside the block


//  //Const keyword: ES6 provides a new way of declaring a constant by using the const keyword
//  //The const keyword creates a read only refrence to a value
//  //It works similar to the let keyword. But the const keyword creates block-scoped variables whose values can't be reassigned

//  //Classes in javascript
//  //In object oriented programming, a class is a blueprint for creatng objects.
//  //It provides initial values for state(member variables or attributes), and implementations of behaviour (member of functions or methods)


//  //example of classes in javascript

//  class type_desserts //class name
//  {
// constructor(type, prep){    //parameters

//     this.food_type = type;
//     this.preparation = prep;

// }
//  }

//  Cupcake_bliss = new type_desserts("cakes", "baked");  //Objects of different restaurants
//  Natural_ice_cream = new type_desserts("ice-cream", "freezed")


//  //Javascript object: An object is an instance of a class. It has two states and behaviors. For example: A dog has states- color, name, breed and 
//  //behaviours- wagging the tail, barking and eating
//  var person = new Object();
//  person.firstname = "Deependra";
//  person.lastName  = "Kumar";
//  person.age = 21;
//  person.eyeColor = "black"


//  //Constructor method: The constructor method is a special method used to initialize properties. It is called automatically when an object of the class is instantiated, and it has to have the exact name "constructor"

// //If you don't have a constructor method, JS will add an invisible and empty constructor method

// class class_name {
//     constructor(brand){
//         this.carname = brand;
//     }
// }


// //this keyword
// console.log(this) //I am refering to window
// console.log("this means window?: ", this==window)


// var a = "hi"  //all the variables we create in the global scope they get attached to window object
// console.log(a)


// function checkThis(){
//     console.log("this means window within a function?:", this==window)
// }

//  checkThis()
// function checkThisStrictly(){
//     "use strict"
//     console.log("this means window within a strict function")
//     console.log(" here this is: ", this)

// }
// checkThisStrictly()



// //use this in simple object
// var car = {
//     brand: 'BMW', 
//     getBrand:function(){
//         console.log(`brand is: ${this.brand}`)
//     }
// }
// car.getBrand(); //this in method getBrand is car


// //constructor function:
// function Person1(name, age){
//     this.name = name;
//     this.age = age;
//     this.getName=function(){
//         console.log(`${this.name}`)
//     }
// }

// let deependra=new person('deependra', 21)
// deependra.getName()


//  //simple generator function
//  function getName(){
//      console.log(`${this.name}`)

//  }

//  getName()
//  getName.call(deependra)
//  getName.bind(gauree)()



//  //import export statements
//  //In JS, Import statement is used to import binding that can be exportes by another module and vice versa 
//  //It makes your code easily manageable
//  //It makes debugging and understanding your code easier
//  //you can export the code after writing it in one file so that it can be used by another file


//  //Introduction to cookies: Cookies are small chunk of data, each consisting of a name and a value, stored by users' web browser
//  //They can be used for authenticating, session tracking 


//Example of javascript variable scope: There are two variable scope one is global and other is local scope


var myVar = " this is a global variable and you can access it anywhere ";

function checkScope(){
    var myVar = "This is local variable and you can not access outside of local scope";
    document.write(myVar)
}
checkScope();


//example of creating object
let person={
    name:"Deependra Kumar",
    age:21,
    address:"Mohana Jalaun",
    hobbies:["Cricket", "Football", "Volleyball", "Squash"]
}


//example of creating arrays
let arr = ["Deependra Kumar", "Kanpur", "Engineering"]

 
//example of creating function
function name(){
    console.log("By using this function we can write the name of any person who is attending this meeting")
} 



 //example of arithmetic operator

var a = 20;
var b = 30;
var sum = a + b;
console.log(typeof sum)

var c = 14;
var d = c++;
var e = d;

  //example of assignment operator
  var count = 15;
  count %= 5;  //remainder is zero
  console.log(count)


  var x = 100;
  var y = 20;
   var z = x>y;
   
   console.log(z)


//Example of logical operator
var x = 20;
if((x%2==0) && (x % 5 == 0)){
    console.log("The given number is divisible by 10")
} else{
    console.log("The number is not divisible by 10")
}

//example of inner HTML


 
function myFunc(){
    var str = "Welcome to Kriyax internship for getting a wonderful opportunity"
   const element = document.getElementById("myH");
   element.innerHTML = str
   document.write(str)
}



//example of document.write()

// function myFunc1(){
//     var str = "Welcome to Kriyax on your first day and we have arranged a special surprise for every employee"
//     document.write(str)
// }

function myFunc1(){
    var str = "Welcome to Kriyax on your first day and we have arranged a special surprise for every employee"
    document.write(str)
}


//example of console.log()


function myFunc2(){
    var str = "Welcome to Kriyax internship pro"
    console.log(str)
}


//example of window.alert()

// function myFunc3(){
//     var str = "Welcome to Kriyax as an investor"
//     window.alert(str)
// }

// function myFunc3(){
//     var str =  "Welcome to Kriyax for being a supporter as an investor"
//     window.alert(str)
// }


//Javascript input statements
//There are two statements to accept user data to provide information according to their need
//window.prompt() and window.confirm()

//example of window.prmpt() It accepts any type of data from user but it saves as a string

// var x = window.prompt();
// const element = document.getElementById("myHeader")
// element.innerHTML = x


//example of window.confirm()
// var x = window.confirm();
// const element1 = document.getElementById("myHeader")
// if(x == true){
//     element1.innerHTML = "Congratulations, for becoming a part of Kriyax internship program"
// } else{
//     element1.innerHTML = "Please come back later and try it again"
// }


//Javascript arrays - It stores multiple values in a single variable  
//Javascript array operations element by element operatons on matrices
//Filter method, map method, concat method, push method, pop method, find method, slice method, sort method

var age = [12, 32, 35, 21, 36, 32, 53, 23, 40]
  
 function checkEligibility(age){
     return age >=19;
 }
 var selected = age.filter(checkEligibility)

 document.write("List of selected candidates ", selected)
 console.log("List of selected candidates ", selected);
  

 function addFour(age){
     return (age + 4);
 }

 var selected1 = age.map(addFour);

 document.write("age of candidates after four years ", selected1)
 console.log("age of candidats after four years ", selected1)

 var Frontend = ["HTML", "CSS", "Javascript", "Bootstrap", "ReactJS"];
 var Backend = ["NodeJS", "Mongodb", "ExpressJS"];

 var selected3  = Frontend.concat(Backend)
 console.log("List of tech stack used for creation of websites ", selected3)
 document.write("List of tech stack used for creation of fully functional website", selected3)

 Frontend.push("Tailwind CSS")
 Backend.unshift("REST APIs")
 console.log(Frontend)
 console.log(Backend)

 Frontend.shift()
 Backend.pop()
 console.log(Frontend)
 console.log(Backend)


 //Find method - This method return the first element that pass the test and will not check the other value

 function checkFind(age){
     return age>18;
 }
 var selected4 = age.find(checkFind)

 console.log(selected4)


 //Slice method - It selects the element from the original array and return them as a new array object 
 //This method has two arguments, First argument is Start index and second argument is the end index of an array
 var letters = ["a", "b", "c", "d"]
 var selected5 = letters.slice(1,3)
 console.log(selected5)


 //Sort method - This method can sort the elements in either ascending or descending order
 //default is ascending order
 //This method can provide incorrect results while working with numbers and that's why we use compare function is used to solve the problem


 var data = [1, 100, 35, 29, 209, 25, 92, 39, 193, 23]
 var data1 = [32, 23, 210, 39, 92, 28, 19, 183, 321]

 //without compare function
 data.sort()
 console.log(data)

 function checkSort(c, d){
     return d - c ;
 }
 var selected6 = data1.sort(checkSort)
 console.log(selected6 + "<br/>")

 //Looping statements - When you want to execute a statement/block of statements multiple times, you can use looping statements to avoid writing the same statements again and again

 //For loop - It repeatedly executes the loop code while a given condition is true and the loop is used when you know at compile time how many times the loop  
 //loop initialization, test statement and iteration statement

 //example of for loop 


var count = 0;
document.write("For loop is starting" + "<br/>");
for(count = 0; count<10; count++){
    document.write("Current count" + count + "<br/>");
}
document.write("Loop stopped")


 //while loop - it is used to when you don't know that how many times a code will be executed at runtime
//  var count1 = 0;
//  document.write("Starting while loop");
//  while(count1 < 10){
//      document.write("Current count: "  + count1 +  "<br/>" );
//      count1++;
//  }
//  document.write("Loop stopped!")

var count1 = 0;
document.write("While loop is starting");
while(count1<10){
    document.write("Current count: " + count1 + "<br/>" )
count1++
}
document.write("While Loop is stopped")


//Conditional statements - Conditional statement is a set of rules performed if a certain condition is met.
var age = 20;
if(age > 100){
    document.write("You are eligible to study here")
} else{
    document.write("You are not eligible to study here")
}

//Switch statement - Here javascript expression is evaluated. The result of the expression is compared with the values of each case. If there is match, the associated block of code will be executed. Otherwise, the default code block is executed
//example of switch statement
var x = 3;
switch(x % 2){
    case 0:
        document.write("Number is divisible by 2")
        break;
        case 1:
            document.write("Add one to the variable")
            break;
            default:
            document.write("Choose a number that is divisible by 2")
}


//Javascript string
//The string object - The string object lets you work with a series of characters
//String method - These methods can be used for primitive type string or string object
//charAt(), slice(), concat(), lastIndexOf(), match(), split(), substr(), substring()

//example of charAt() -  Returns the character at the specified index

var Greet = "Welcome to edureka internship program"
console.log(Greet.charAt(5))

//example of slice() - Returns the elements between the two indexes of a string 
var str = "Welcome to Kriyax Internship Program"
slicestr = str.slice(0, 5)
console.log(slicestr)

//example of concat - Combine the texts of two strings and returns a new string
var concat1 = "Welcome to Kriyax for starting a new position"
var concat2 = "as a web developer"
var concat3 = concat1.concat(concat2)
document.write("<br/>" + concat3)

//example of split method split() - splits a string object into array of strings by separating the strings into the substrings
var nano = "We are working on nano satellites and we are looking for new team members"
nano1 = nano.split(" ")

console.log(nano1)

//Math object - It provides properties and methods to perform these tasks and all the properties and methods object are static in nature
//All the properties and methods of Math object  can be called by using keyword "Math" as an object
//example of Math object

var x = 2.4
var ceil = Math.ceil(x)
var floor = Math.floor(x)
var sqrt = Math.sqrt(x)

console.log("ceil of " + x + ceil)
console.log("floor of " + x + floor)
console.log("square root of " + x + sqrt)

//Area of circle using Math object
var r = 10;
var Area  = (Math.PI)*(Math.pow(r, 2))
console.log("Area of a circle with radius 10 units" + Area )

//Form validation - It occurs at the server side to verify the details given by the user

//example  of form validation 
function validate(){
    var x = document.forms["myForm"]["name"].value;
    var y = document.forms["myForm"]["number"].value;
    var z = document.forms["myForm"]["DOB"].value;
    let DOB = new Date(z).getTime()
    let today = Date.now()
    let mill = Math.abs(today - DOB)
    var age = (mill / (1000 * 3600 * 24 * 365.25));
    if(x == ""){
        alert("Name can not be empty");
        return false
    } else if(isNaN(y) || y == ""){
        alert("Phone number can not be empty")
        return false;
    } else if(age<18){
        alert("Sorry, You should focus on your studies")
        return false;
    }
    else {
        let value = "Form submitted successfully"
        document.getElementById("root").innerHTML = value
    }
}

// function validate(){
//     var x = document.forms["myForm"]["number"].value;
//     if(isNaN(x) && x == ""){
//         alert("Please enter your phone number")
//     } else{
//         let value = "Form submitted successfully"
//         document.getElementById("root").innerHTML = value
//     }
// }


//template string - They are new kind of literals introduced in ES6
//Contains features like multi-line strings and string interpolation

//Functions in Javascript - Regular Functions, Arrow functions, Functions expression, Immediate invoked function expression and Generator function

//Javascript regular expression - A regular expression is an object that describes a pattern of characters used to perform pattern matching and search and replace functions on text,

//example of regular expression
function myFunction(){
    var str = "Welcome to Kriyax internship program";
    var pattern = /kriyax/i;
    var result = str.match(pattern);
    document.write(result)
}
myFunction();

//Arrow function - It will reduce the length of the syntax 
//example of arrow function
myFunc = () => {
    var a = 10;
    var b = 20;
    return (a + b);
}
document.write(myFunc())

//Function expression - These are used to define function inside an expression 
//example of function expression
myFunc3 = function () {
    var a = 20;
    var b = 23;
    return (a + b);
}
document.write(myFunc3())

//IFFE function - It stands for immediately invoked function expression and these run only once when interpreter runs on it.
const display = (
    function () {
        var a = "Welcome to Kriyax internship program";
        return a; 
    }
)

console.log(display())


