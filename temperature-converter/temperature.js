// Temperature converter Celcius, Fahrenheit, Kelvin

// Functions of each temperature to make calculations between them.
// Celcius to Fahrenheit
const celToFah = function(cTf) {

  const cTemp = cTf;
  const toFah = cTemp * (9 / 5) + 32;
  const msg = `${cTemp}\xB0C is ${Math.round(toFah)}\xB0F.`;
  return msg;
}

// Celcius to Kelvin
const celToKel = function(cTk) {

  const kelv = 273.15;
  const cTempK = cTk;
  const celToKelv = (+cTempK + kelv);
  const msg = `${cTempK}\xB0C is ${Math.round(celToKelv)}K.`;
  return msg;
}

// Fahrenheit to Celcius
const fahToCel = function(fTc) {

  const fTemp = fTc;
  const toCel = (fTemp - 32) * (5 / 9);
  const msg = `${fTemp}\xB0F is ${Math.round(toCel)}\xB0C.`;
  return msg;

}

// Fahrenheit to Kelvin
const fahToKel = function(fTk) {

const fTempK = fTk;
const fahToKelv = ((fTempK - 32) / 1.8) + 273.15;
const msg = `${fTempK}\xB0F is ${Math.round(fahToKelv)}K.`;
return msg;
}

// Kelvin to Celcius
const kelToCel = function(kTc) {

  const kTempC = kTc;
  const kelvToCel = kTempC - 273.15
  const msg = `${kTempC}K is ${Math.round(kelvToCel)}\xB0C.`;
  return msg;
}

//Kelvin to Fahrenheit
const kelToFah = function(kTf) {

  const kTempF = kTf;
  const kelvToFah = ((kTempF - 273.15) * 1.8) + 32;
  const msg = `${kTempF}K is ${Math.round(kelvToFah)}\xB0F.`;
  return msg;
}


// Ask user for inputs

tempFrom = prompt(`In which metric is the temperature you are converting? 
C - Celsius 
F - Fahrenheit 
K - Kelvin`);
console.log(`You choose to convert from ${tempFrom}`);

theNumber = Number(prompt(`Input the number you like to convert.`));
console.log(`With the number ${theNumber}`);

tempTo = prompt(`To which metric would you like to convert the temperature?
C - Celsius
F - Fahrenheit
K - Kelvin`);
console.log(`To ${tempTo}`);

let C = "C";
let F = "F";
let K = "K";

// Showing the output of 'selected'

if ((tempFrom == C && tempTo == F)) {
console.log(celToFah(theNumber));
} 

else if ((tempFrom == C && tempTo == K)) {
  console.log(celToKel(theNumber));
  }

  else if ((tempFrom == F && tempTo == C)) {
      console.log(fahToCel(theNumber));
      }

      else if ((tempFrom == F && tempTo == K)) {
          console.log(fahToKel(theNumber));
          } 

          else if ((tempFrom == K && tempTo == C)) {
              console.log(kelToCel(theNumber));
              } 
              
          else if ((tempFrom == K && tempTo == F)) {
              console.log(kelToFah(theNumber));
              } 

  
// Goes else if puts something random.
else console.log("Sorry, but your input doesn't looks right. Please try again.");
