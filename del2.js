function num(x = 1) {
    return x;
}
console.log(num()); // del2 klassik funktion

let num = () => '1';
console.log(num()); //del2 arrowfuntion 

var number = 4; 
var anotherNumber = 3;
function add(n1 , n2) {
console.log(n1 + n2);
}
add(number, anotherNumber); //del2 classic funktion add

let num = (a , b) => 1 + 2 ;
console.log(num()); //del2 arrowfunction add



function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
return num1 - num2;
}
function do_math(){
    var add_nums = add (5, 3);
    console.log(add_nums);
    var minus_nums = subtract (5, 3);
    console.log(minus_nums);
}

do_math(); // Valfri funktion som anropar


