// Function calling other function //

const calculateAge = function (birthYear) {
  return 2022 - birthYear;
};

const jobLeft = function (birthYear) {
  const age = calculateAge(birthYear);
  return 65 - age;
};
const aJobLeft = jobLeft(1975);
console.log(aJobLeft);

const bJobLeft = jobLeft(1985);
console.log(bJobLeft);

// JavaScript Events //

//Example 1  (Button in html)
function displayText() {
  console.log("This is console text!");
}

//Example 2
function alertText() {
  alert("This is alert text !");
}

//JavaScript Srting//
const firstName = "Ponkoj";
const lastName = "Mondol";
console.log(firstName);
console.log(lastName);

//Example 1  (Use double Quotation in text)
const text = 'I Love "Bangladesh."';
console.log(text);

//Example 2  (Use single Quotation in text)
const text2 = "I Love 'Bangladesh.'";
console.log(text2);

//Example 3 (Scape charecter)// (Use 2 Double Quotation in text)
// const text3 = 'I Love \"Bangladesh.\"';
// console.log(text3);

//Example 4  (Use backslash in text)
const text4 = "I Love \\ Bangladesh.";
console.log(text4);

// String Method //

//Example 1  (String length)

const x = "Ponkoj Mondol";
console.log(x); // Return = Ponkoj Mondol
console.log(x.length); // Return = 13

//Exemple 2 (Slice method = its tke 2 parameter : left to right)
const fruits = "Apple, Banana, Mango";
console.log(fruits);

const fruits1 = fruits.slice(0, 5);
console.log(fruits1); // Return = Apple

const fruits2 = fruits.slice(7, 13);
console.log(fruits2); // Return = Banana

const fruits3 = fruits.slice(15, 20);
console.log(fruits3); // Return = Mango

console.log(fruits1, fruits2, fruits3);

//Exemple 3 (Slice method = Negative Slice (Right to Left))
const myNname = "Ponkoj Mondol";
console.log(myNname);

const lastPart = myNname.slice(-6); // No need to first parameter if we slice atlast
console.log(lastPart); // Return = Mondol

const firstPart = myNname.slice(-13, -7); // need to use 2 parameter if we slice at middle ; parameter1(-13) + P , parameter2 (-7) = space.
console.log(firstPart);

//Exemple 4 (Sub string method = Same as slice method)
const fullName = "Anindita Mondol";
const first = fullName.substring(0, 8);
console.log(first);

const last = fullName.substring(9, 15);
console.log(last);

//Exemple 5 ( substr Method = Almost Same as slice & substring method.
const list = "List1, List2, List3";
const firstOne = list.substr(0, 5);
console.log(firstOne);

const middleOne = list.substr(7, 12);
console.log(middleOne);

const lastOne = list.substr(14, 19);
console.log(lastOne);

//Exemple 5 ( String replace method : has two parameter)
const textOne = "I Love Bogura";
console.log(textOne); // Retutn = I Love Bogura

const textTwo = textOne.replace("Bogura", "Dhaka");
console.log(textTwo); // Return = I Love Dhaka // Bogura is replaced by Dhaka.

//Exemple 6 ( toupperCase method )
const textThree = "Hello World";
console.log(textThree); // Return = Hello World
console.log(textThree.toUpperCase()); // Return = HELLO WORLD.

//Exemple 7 ( toLowerCase method )
const textFour = "Hello World";
console.log(textFour); // Return = Hello World
console.log(textFour.toLowerCase()); // Return = hello world

//Exemple 7 ( String trim method )
const textFive = "        Hello World        ";
console.log(textFive);
console.log(textFive.trim());

//Exemple 8 ( String Search method : indexof )
const textSix = "Rahim Karim Sakib";
console.log(textSix.indexOf("Rahim")); //Return = 0
console.log(textSix.indexOf("Sakib")); //Return = 12
console.log(textSix.indexOf("Sakid")); //Return = -1, if our type mistake or value not exist, it return -1 value.
//Exemple 9 ( String Search method : indexof )
const textSeven = "Rahim Karim Sakib Karim"; //if name repeat
console.log(textSeven.indexOf("Karim")); //Return = 6, because it show the first index value. Karim Start in 6
console.log(textSeven.lastIndexOf("Karim")); //Return = 18, because last Karim index start in 18.

//Exemple 10 ( String Search method : Search)
console.log(textSeven.search("Sakib")); //Return = 12,
