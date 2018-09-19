
function sayHello(name) {
    var name;
    var greeting;
    greeting = "Hello, " + name + ".";
    return greeting;

  // TODO: return a greeting string that greets
  // the person by name, e.g. "Hello, Emily!"
}

function sayHelloEverybody(threeNames) {
var greeting;
var people;
threeNames = people
people = new array('Emily','MaryClare','Taurin');
greeting = "Hello, " + people;
return greeting;




  // TODO: return a greeting string that greets
  // all three people in the threeNames array
  // e.g. "Hello, Emily, MaryClare, and Taurin!"
  // NOTE: inputs should be an array with exactly three items
}

function getClasses() {
var c1 = "Musicianship";
var c2 = "Theory";
var c3 =  "Comp Sci";
var c4 = "Music history";
var c5 = "Counterpoint";
var c6 = "Graphic literature";
var c7 = "Private Lessons";
var c8 = "Max MSP";
var classes = [c1, c2, c3, c4, c5, c6, c7, c8];
var elSchedule = document.getElementById('schedule');
el schedule.textContent = classes;

 // TODO: return an array with a list of strings
  // naming the classes you are taking this semester
}

function labelOrder(fiveNumbers) {
  // TODO: Given an array with five numbers, return a new array
  // of strings that have labels for the ordering.
  // e.g. if fiveNumbers is [1,2,3,4,5] your function should return:
  // ["first: 1", "second: 2", "third: 3", "fourth: 4", "fifth: 5"]
  // NOTE: inputs should be an array with exactly five items
}

function calculateVolume(w, l, h) {
    var w = 8;
    var l = 6;
    var h = 4;
    var volume = w * l * h;
    return volume;





  // TODO: given a room's width, length, and height
  // write a function that returns the volume
}

function isOdd(n) {
    var remainder = n % 2;
    if (remainder > 0){
        return "This is an odd number";
    }
    else{
        if (remainder =<0){
            return "This is an even number";
        }
    }
  // TODO: given a number, return true if it is odd, false if it is even
  // HINT: the expression "Boolean(0)" is false, "Boolean(1)"" is true
  // DOUBLE HINT: Try using the modulus operator (%)
}

// ** CART PRICES ** //

const saleAmount = .25 // 25% off!
function getSalePrice(originalPrice) {
  // TODO: given a dollar price (e.g. 5.99), return
  // a price with the saleAmount discount applied
  // e.g. if originalPrice is 4.00, your function should return 3.00.
  // (Don't worry about rounding to the correct number of decimal places)
var price = 5.99
var discount = price * saleAmount;
return discount;


}

const saleAmount = .25
function getSalePrices(threeOriginalPrices) {
var pizzaPrice = [5.99, 3.04, 14.50 ];
pizzaPrice[0] = pizzaPrice[0] * saleAmount;
pizzaPrice[1] = pizzaPrice[1] * saleAmount;
pizzaPrice[2] = pizzaPrice[2] * saleAmount;
return pizzaPrice;


  // TODO: given an array of prices for three items in a cart,
  // return a new array with the saleAmount discount applied to each.
  // TIP: see if you can reuse the getSalePrice function that you just wrote!
  // NOTE: inputs should be an array with exactly three items
}

 // ** COUNTING ** //

var counter = 0;
function incrementCounter(num) {
    var num = counter ++ 1;
return num;
  // TODO: implement a function that increments (adds 1) to the counter variable
  // and then calls showCounter to update the interface with the new value.
  // Test your code by opening the developer console and calling incrementCounter.
  // The displayed answer for this question should increase by 1!
}
function showCounter() {
  // updates the counter element with the latest value
  document.getElementById('counter').textContent = counter;
}
