function printHelloWorld(){
    var a =1; 
    var b=134;
    document.write(a+b);
    
}



//Variable scope

//Global variable
var myGlobal= "Global";



//local variable

function checkScope(){
var myVar="I am local variable scope";
document.write(myVar)
}


//example of arithmetic operators
var a=10;
var b=30;
var sum = a+b;
var div = b/a;
console.log(sum)
console.log(div)


//example of assignment operator
var count=1;
count +=1;   //increment variable
console.log(count)  



//comparison operators
 
// == It is used to compare whether two values are equal
// === It is used to compare whether two values and their data types are equal
// != It is used to compare whether two values are not equal
// !== It is used to compare whether two value and their data types are not equal
// > It is used to check whether 1 value is greater than other
// < It is used to check whether 1 value is lesser than other
// >= It is used to check whether 1 value is equal or greater than other
// <= It is used to check whether 1 value is equal or less than other


//example of comparison operator
var x=10;
var y=20;
var z =x>y;
console.log(z)  //it will return a boolean value

//logical operators
// A logical operators are used to connect two or more expressions into more complex expression.
// These operators are mainly used to control the flow of program.
// These operators always return a boolean value.

// && It returns true if all the conditions are true, otherwise it will return false.
// || It returns true if one of the conditions are true, otherwise it will return false.
// ! It opposites the result of logical operations

//example of logical operator
var x =10;  //create variables
            
if((x%2==0) && (x%5 == 0)){
    console.log("number is divisible by 10")
}else{
    console.log("number is not divisible by 10")
}



//Javascript output statements

// innerHTML It writes a data into a certain HTML element
// document.write() It displays a data in the HTML output
// window.alert() It displays the data in the alert box
// console.log() It displays in the browser console


//example of inner HTML
//It will add only new HTML element
function myFunc(){
    var str ="Welcome to Kriyax Internship"
    const element = document.getElementById("myH")
    element.innerHTML=str
}


//example of document.write()
//It will remove all previous content

function myDoc(){
    var str = "Welcome on your first day at Kriyax"
    document.write(str)
}


//example of window.alert()
//it will show the data in a alertbox and mostly is used to display warning

function myWin(){
    var str = "Welcome to a Freelancing community"
    window.alert(str)
}


//example of console.log()
function myCon(){
    var str = "Welcome to Kriyax Internship"
    console.log(str)
}




//Javascript Input Statements
//It is important to take input from the user to display the data as per their need 
//Apart from forms, Javascript provides two statements to accept input from the user

//Window.prompt() It can accept any type of data through dialog box but saves it as a string
//Window.confirm() It can accept only two values through the buttons of dialog box; confirm(returns the true) and cancel(returns the false)


//example of window.prompt() 
var x = window.prompt()    //It will popup a box to take the input
element = document.getElementById("myPro")
element.innerHTML=x


//example of window.confirm() It will display a dialog box with two buttons and return a boolean value
var x = window.confirm()
element=document.getElementById("myConf")
if(x==true){
    element.innerHTML="Welcome to Kriyax"

}else{
    element.innerHTML="Please come back later"
}




//Javascript Array The array objects lets you store multiple values in a single variable. It stors a fixed-size sequentiaal collection of elements of the same type
//syntax
var countries =["India", "Australia", "United States", "Unites Arab Emirates", "Srilanka", "Germany"]

//Property              Description
//Constructor  Returns a reference to the array function that created the object
//length Returns the number of elements in the array
//prototype Allows you add properties and methods to an object 
//index The property represents the zero-based index of the match in the string


//Javascript Array Operations The array operations are used to perform element operations on matrices 
//Commonly use array methods 
//Filter Method The filter method creates a new array from the elements of the given array that pass a certain test 
//This method does not make any change in original array
// The size of the resultant array may or may not be same as original arry
//This method  executes the function on the array elelments which has proper values.

 //example of filter method
 var age =[13, 53, 93, 26, 2, 29, 94, 28]  //array creation
  
 function checkEligibility(age){   //create criteria
     return age >=30;
 }
 var selected = age.filter(checkEligibility)  //Find out the elements of the array which follows the criteria
 console.log("Ages of the selected candidates are:" + selected)






//Pop Method I t is used to remove the element from an array
//whenevet this method is used it will reduce the length of an array
//elements will always removed from end of the array
//shift method can be used to remove the element from the begining of an array 
var girlfriend = ["Saurav", "Sonu", "Tappu", "Goli", "Jethalal"]
var boyfriend =["Madhbi", "Babita", "Komal", "Daya"]

girlfriend.pop()
boyfriend.shift()
console.log(girlfriend)
console.log(boyfriend)







//Find Method The find is used to find the element in the aray
// This method returns the value of the first element in an array that pass a test

var data=[10, 235, 25, 29, 21, 93, 22, 92]
function checkFind(data){
    return data>25;
}
 console.log(data.find(checkFind))




//Slice Method It selects the element from the original array and return them as a new array object
//This method has two arguements to select the elements from the array
//First argument represents the start index while the other argumetn represents the end index of a array
//All the elements within the range of given starting and end argument will  always be selected but it will exclude the element at the end index

var letters = ["a", "b", "c", "d", "e", "f", "g", "h"]  //Array creation

returnedLetters = letters.slice(0, 6)  //excluding "h" it will return all the values
console.log(returnedLetters)






//Concat Method
//In js , concatenation of the arrays can be performed with cconcat method
//This concat method is used to join the elements of two or more arrays
//This method does not make any new array only add concatenated arrays
var frontend = ["HTML", "CSS", "Javascript", "Reactjs"]
var backend =["Nodejs", "Expressjs"]

 var technologies = frontend.concat(backend)
 console.log("types of technologies used in building a website " + technologies)



//Map Method The map methd creates a new array with the results of the given function
//This method executes the function on the array elements which has proper values     
//The size of the resultant array will always be same as original array
//This method does not make any change in original array

//example of map method
var age =[10, 53, 29, 93, 23, 52, 19, 83, 5]  //array creation
 
function myAge(age){
    return (age + 4);  //Perform operation
}

FourYearsLater = age.map(myAge)  //Array will be returned after performing a certain operation on each element
console.log("Age of different people after four years "+ FourYearsLater)


//Push  Method
//It is used to the new element to the array
//It will increase the length of already existing array
//By default, new element will always be added at the end of the array
//unshift() method will be used to add a new element at the begining of the array

 //example of push method
 var skills = ["Cricket", "Football", "Badminton", "Kabaddi"]
 var languages =["Hindi", "English", "German"]

 skills.push("Table Tennis")
 languages.unshift("Punjabi")

 console.log(skills)
 console.log(languages)



 //sort method It is used to sort the items of an array
 // This method can sort the elements(alphabetic and numeric) in either ascending and descending order
 // By default, it sorts the numeric elements in ascending and string in alphabetical order
 //This method can provide incorrect results when working with numbers
 //That's why compare function is used to solve the problem
 //This method makes the changes in the original array
  
 //Array creation
 var data = [1, 100, 40, 6, 12, 20, 10]
 var data1 = [1, 100, 40, 6, 12, 20, 10]

 data.sort()
 console.log(data)  //Without compare function
  
 data1.sort(function(a, b){
     return b-a;
 })
 console.log(data1)




 //Looping statement When you want to execute a statement/block statements multiple times, you can use looping statements to avoid writing the same statements again and again.

 //There are two type of loops 
 //For loop and While loop


 //For Loop  The for loop repeatedly executes the code while condition is true. It tests the condition before executing the loop body. This loop is used when you know at compile time how many times the loop should execute.
 //for loop is used in cases when number of times the loop is to be executed is known beforehand
 //syntax for loop inlcuded the following 3 important parts:
 //loop initialization The counter is initialized to a starting value
 //test statement: Tests if the given condition is true or not. if true, the code given inside the loop will be executed, otherwise, the control will come out of the loop.
 //iteration statement: Used to update the counter with each iteration.

 //example of for loop 
 var count;
 document.write("starting loop"+ "</br>");
 for(count = 0; count<10; count++){
     document.write("current count" + count);
     document.write("</br>");
 }
 document.write("loop stopped");



 //while loop It executes as long as a condition is true, the code within the loop is executed. A while loop is normally used in scenario wheere you don't know hoe many times a loop will execute at runtime.
 //example of while loop 
 var count = 0;
 document.write("starting loop");
 while(count<10){
     document.write("current count" + count +"</br>");
     count++;
 }
 document.write("loop stopped");



 //Conditonal statements(If Statement) Conditional statement is a set of rules performed if a certain condition is met. It is similar to and 'if-then statements(If a condition is met, THEN an action is performed).
 //example of If Statement
 var age=20;
 if(age >19){
     document.write("</br>" +"You are qualified for driving");
 }


 //Conditional statements(If-else statement) If the resulting value is true, the given condition is true, the given statement in the 'If' block code is executed. If the expression is false, then the given statement is the else block is executed.

 //example of if-else statement
 var age =15;
 if(age>21){
     document.write("You qualifies for driving")
 } else{
     document.write( "</br>" + "You don't qualify for driving license" +"</br>");
 }


 //switch statements The result of the expression is compared with the values of each case. If there is match, the associated block of code is executed. Otherwise, the default code block is executed.

 //example of switch statement example 
 var x=5;
 switch(x%2){
     case 0: document.write("Number is divisible by 2")
     break;
     case 1: document.write("There is a remainder that is one")
     break;
     default:
         document.write("choose a number divisible by 2")
 }


 //Javascript string
 //String object The string object lets you work with a series of characters
 //list of properties of string object
 

 //Property                         Description
 //Constructor Returns a reference to the string function that created the object
 //Length Returns the length of the string
 //Prototype Allows you to add properties and methods to an object


 //String method
 //Method   Description
 //charAt() Returns the character at the specifiec index
 //slice() Returns the elemenets between the two lines indexes of a string 
 //concat() combines the text of two strings and returns a new string
 //lastindexOf() match() used to match a regular expression against a string 
 //split() Splits a string object into an array of strings by separating the string in substring
 //substr() Returns the characters in a string beginning at the specified location through the specified number of characters
 //substring() Returns the characters in a string between two indexes into the string


 //example of charAt method
 var Green = "Welcome to Kriyax internship"
 console.log(Green.charAt(6))

 //example of concat method
 var Greet  = "Welcome to Kriyax "
 var learn =  "Freelancing platform for freelancers"
 
 var str1 = Greet.concat(learn)    //Two ways to perform concatenation of strings

 var str2 = Greet + learn 
 console.log(str1)
 console.log(str2)



 //example of spilt method
 var str = "Welcome to Kriayx a freelancing platform for freelncers"
 splitedstr = str.split(" ") //This method will split the string based on the space and return the list, without affecting the original string
 console.log(splitedstr)
 console.log(str)


 //example of slice method

 var str = "Welcome to Kriyax Internship program"
 slicestr = str.slice(0, 7)  //Returns the element between 0 and 7
 console.log(slicestr)
 console.log(str)






 //Math object It allows to perform mathematical tasks
 //It provides properties and methods to perform these tasks
 //All the properties and methods of Math object are static in nature
 //All the properties and methods of Math object can be called by using keyword "Math" as an object

 //example of Math object
 var x = 2.4  //variable declaration and assingment

 var ceil = Math.ceil(x)  //use math object
 var floor = Math.floor(x)
 var sqrt = Math.sqrt(x)

 console.log(ceil)
 console.log(floor)
 console.log(sqrt)


//another example of math object
var radius=10  //variabel decalration and assignment
var Area = (Math.PI)*(Math.pow(radius, 2))    
           //Property  Method
console.log(Area)



//Javascript date object The date object is a data type built into the Javascript language 
//It is used to deal with date-time manipulations
//example: To fetch the system time in order to track the last time the  usee logged out
//There are four ways to create date object

//1. New Date()
var d = new Date();

//2. New Date(year, month, day, hours, minutes, seconds, milliseconds) Creates a new date object with  a specified date and time. Javascript counts months from 0 to 11, where January is 0 and December is 11
var e = new Date(2022, 12, 23, 10, 33, 30, 0)


//3. New Date(date string) Creates a new date object from a date string
var f = new Date("October 13, 2014 11:13:00");


//4. New Date(milliseconds) : Creates a new date object as zero times plus milliseconds. Example 01, 1970 00:00:00 UTC
 var g = new Date(100000000000)


 //Date methods : Below are commonly used date methods
 //Method            Description
 //Date()          Returns today's date and time 
 //getDate()       Returns the day of the month for the specified date according to local time
 //getDay()          Returns the day of the week for the specified date according to local time
 //gerFullYear()     Returns the year of the specified date according to local time
 //getHours()        Returns the hour in the  specified date according to local time 
 



 //Document Object Model (DOM) : It defines the logical structure of a document
 //When a page is loaded, the web browser takes the HTML document and creates a tree like structure of the document with the help of HTML elements. This tree like structure
 //is knowns as DOM.
 //Any element found on HTML document can be manipulated using the DOM.

 

 //Form validation Normally, Form validation occurs at the server side to verify the deatils given by the user
 //It is used to make sure that entered data is correct and clean
 //Javascript allows you to verify the data before submitting it to the server
 //In Javascript, it occurs when the user press the submit button
 //Some of the commonly used validation tasks are:
 //1. To ensure all the requires fields are filled
 //2. To ensure that the user has entered the valid date
 //3. To ensure that the user has entered numbers in the numeric fields
 //4. To ensure that the user has enterd the correct email.




 //example 1 of form validation

 function validate(){
    var x = document.forms["myform"]["name"].value;
     if(x==""){
         alert("Name can not be empty")
         return false;
     }else{
         let value = "Form submitted successfully"
         document.getElementById("root").innerHTML = value  //This function will make sure that the value of your function is not empty

     }
 }

 //example 2 of form validation
 function validateNumber(){
     var x =document.forms["myform1"]["contactNumber"].value;
     if(isNaN(x) || x == ""){
         alert("please enter your phone nubmer")
     }else{
         let value = "form submitted successfully";
         document.getElementById("root1").innerHTML = value
     }
 }


 //example 3 of form validation
 function validateDate(){
     var x = document.forms["myform2"]["DOB"].value;
     let DOB = new Date(x).getTime()
     let today = Date.now()
     let mill_diff = Math.abs( today - DOB)
     var age =(mill_diff / (1000 * 3600 * 24 * 365.25));
     if(age<18){
         alert("you should focus on your studies")
     return false;
        }
        else{
            var value = "form submitted successfully"
            document.getElementById("root2").innerHTML = value   //This function will make sure that the user is old enough to understand your product
        }
 }
 
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

function myFunc3(){
    var str =  "Welcome to Kriyax for being a supporter as an investor"
    window.alert(str)
}


//Javascript input statements
//There are two statements to accept user data to provide information according to their need
//window.prompt() and window.confirm()

//example of window.prmpt() It accepts any type of data from user but it saves as a string

var x = window.prompt();
const element = document.getElementById("myHeader")
element.innerHTML = x


//example of window.confirm()
var x = window.confirm();
const element1 = document.getElementById("myHeader")
if(x == true){
    element1.innerHTML = "Congratulations, for becoming a part of Kriyax internship program"
} else{
    element1.innerHTML = "Please come back later and try it again"
}


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
 console.log(selected6)
