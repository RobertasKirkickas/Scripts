// Ceaser Cipher 'method' program that encrypt/decrypt input text

// Remainder function n modular p
function mod(n, p){
    let r = n % p;
    if (r < 0){
        r += p;
    }
    return r;
}

let txt = "Your text input is protected!"; // Plain text ouput
console.log(`Plain text: ` + txt);

let txtEnc = encryptDecrypt(txt, + 15); // Encrypted text output
console.log(`Encrypted text: ` + txtEnc);

let txtDec = encryptDecrypt(txtEnc, - 15); // Decrypted text output
console.log(`Decrypted text: ` + txtDec);

// Takes the text and gets ASCII numbers
function encryptDecrypt(message, key) {
    const codeA = "A".codePointAt(0); // For uppercase letters
    const codeZ = "Z".codePointAt(0); //
    const codea = "a".codePointAt(0); // For lowercase letters
    const codez = "z".codePointAt(0); // 

    let encMessage = ""; 

    // Checks 'text' length of ASCII numbers
    for (let chr of message) {
        let code = chr.codePointAt(0);

        // Shifts text forwards/backwards while using the remainder (modular)
        if (code >= codeA && code <= codeZ) { // 'Shifts' upper case letters

            code -= codeA;
            code = mod(code + key, 26);
            code += codeA;
        }
        else if (code >= codea && code <= codez) { // 'Shifts' lower case letters

            code -= codea;
            code = mod(code + key, 26);
            code += codea;
        }
        encMessage += String.fromCodePoint(code); // Adds 'shifted' value to the variable
    }
    return encMessage; 
}
