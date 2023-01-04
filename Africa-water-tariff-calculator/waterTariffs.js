/* This script calculates how much in Rands you need to pay, 
when you enter amount of kilolitres.
The script is quite long, and I probably took the longest
way to do it, but I think it does it's job :) 
*/

// User must input 'kl' they have used
let myCalc = Number(prompt(`Enter the amount of liters you used:`))
// value assignments for counting
let randsA = 15.73
let randsB = 22.38
let randsC = 31.77
let randsD = 69.76
let num1 = 6
let num2 = 6000
let grand = 1000
// counts <= 6000 & > 6000 <= 10500
let fifSix = randsA * num1 // 15.73 * 6
let calcSix = myCalc - num2 // user's input and - 6000
let calcMul = (calcSix * randsB) / grand // 'last output of user's number subtracted' * 22.38
let sixTenK = fifSix + calcMul // addition to make it total amount for > 6000 <= 10500
//counts > 10500 <= 35000
let tenFiveK = (randsA * num1) + (4.5 * randsB) // (15.73 * 6) + (4.5 * 22.38) = 195.09
let tenThreeFive = (randsC * 24.5) + tenFiveK // (31.77 * 24.5)=778.37 + 195.09 = 973.455
let tenTFcalc =  ((myCalc - 10500) / 1000) * randsC // ((user input - 10500) / 1000) * 31.77
let tenTFres = tenTFcalc + tenFiveK // all added together
//counts if over > 35000
let threeFiveK = ((myCalc - 35000) / 1000) * randsD // ((user input - 35000) / 1000) * 69.76
let threeFK = threeFiveK + tenThreeFive // added together


// gives the result of price then the 'kl' is <= 6000
if (myCalc <= 6000) {
    console.log(`Rands to pay R` + ((myCalc / grand) * randsA).toFixed(2)); 
}
// gives the result of price then the 'kl' is > 6000 & <= 10500
else if (myCalc > 6000 && myCalc <= 10500) {
    console.log(`Rands to pay R` + sixTenK.toFixed(2));
}
// gives the result of price then the 'kl' is > 10500 & <= 35000
else if (myCalc > 10500 && myCalc <= 35000) {
    console.log(`Rands to pay R` + tenTFres.toFixed(2));
}
// gives the result of price then the 'kl' is > 35000
else if (myCalc > 35000) {
    console.log(`Rands to pay R` + threeFK.toFixed(2));
}
// if its suddenly doesn't go the right way.
else {
    console.log("Oh No.. Something went wrong..");
}

