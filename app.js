// variables

var test = "hello world";
var a = 10;
var b = 15;

console.log(test);
console.log(a + b);

// confirm("are you sure exit this page?");
// prompt("Yoshingizni kiriting");
// alert("Congratulation! You filled this form succesfully!");

// let userAge = prompt("Yoshingizni kiriting");

// if (18 > userAge) {
//   alert("Sizga ruhsat berildi!");
// } else if (userAge > 18 && userAge < 25) {
//   alert("Siz voyaga yetmagansiz");
// }

// let userBall = prompt("Let your ball");

// if (userBall >= 86 && userBall < 100) {
//   alert("Your mark is 5");
// } else if (userBall < 86 && userBall > 72) {
//   alert("Your mark is 4");
// } else if (userBall < 71 && userBall > 56) {
//   alert("Your mark is 3");
// } else {
//   alert("Your mark is 2");
// }

// if(userBall <= 55) {
//     alert("2")
// // } else if(userBall> 55 && userBall < 71){
//     alert("3")
// } else if(userBall > 72 && userBall < 85 ) {
//     alert("4")
// } else {
//     alert("5")
// }



let userWeight = prompt("Write your weight");
let userHeight = prompt("Write your height");
let result = userWeight / (userHeight * userHeight);
console.log(result);

if (userWeight / (userHeight * userHeight) < 18.5) {
    alert("Under Weight")
} else if (userWeight / (userHeight * userHeight)  > 18.5 && userWeight / (userHeight * userHeight) < 24.9 ) {
    alert("Normal")
}  else if (userWeight / (userHeight * userHeight)  > 25  && userWeight / (userHeight * userHeight) < 29.9 ) {
    alert("Over Weight")
}  else if (userWeight / (userHeight * userHeight)  > 30  && userWeight / (userHeight * userHeight) < 34.9 ) {
    alert("Obesity (Class I)")
}  else if (userWeight / (userHeight * userHeight)  > 35  && userWeight / (userHeight * userHeight) < 39.9 ) {
    alert("Obesity (Class II)")
}  else if  (userWeight / (userHeight * userHeight)  > 40 ) {
    alert("Extreme Obesity")
} else {
    alert("")
}


