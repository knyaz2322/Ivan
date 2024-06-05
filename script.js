var name = prompt("Ismingizni kiriting:");
var currentYear = +prompt("Hozirgi Yilni kiriting:");
var birthYear = +prompt("Tug'ilgan Yilingizni Kiriting:");

var age = currentYear - birthYear;
var result = name + ", Siz " + age + " Yoshdasiz.";
console.log(result);