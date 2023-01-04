/* This program asks user to choose what calculation would like to do - distance, time, or speed.
   Then it does calculation for choosen one. If program detects wrong input it closes itself and 
   logs the error code.  */

    try {
        const question = prompt("What would you like to calculate? \n distance, time, or speed.");

       /* Distance - asks user to enter time & speed 
       and then outputs the answer if entered correctly, if not then program closes */
        if(question == "distance") {
            const time = prompt("Enter the time:");
            if(isNaN(time)) {                          // checks if input is a number (same in every 'if' and 'else if' statement)
                throw 'Wrong time input';              // closes program (same in every 'if' and 'else if' statement)
            }  
            const speed = prompt("Enter the speed:");
            if(isNaN(speed)) {
                throw 'Wrong speed input';
            }
            disResult = time * speed
            console.log('Distance:', disResult.toFixed(2));   // logs the result to console (same in every 'if' and 'else if' statement)
        }

       /* Time - asks user to enter distance & speed 
       and then outputs the answer if entered correctly, if not then program closes */   
        else if(question == "time") {
            const distance = prompt("Enter the distance:");
            if(isNaN(distance)) {
                throw 'Wrong distance input';
            }
      
            const speed = prompt("Enter the speed:");
            if(isNaN(speed)) {
                throw 'Wrong speed input';
            }
            speedRes = distance / speed
            console.log('Time:', speedRes.toFixed(2));
        }

       /* Speed - asks user to enter distance & time
       and then outputs the answer if entered correctly, if not then program closes */          
        else if(question == "speed") {
            const distance = prompt("Enter the distance:");
            if(isNaN(distance)) {
                throw 'Wrong distance input';
            }    
            const time = prompt("Enter the time:");
            if(isNaN(time)) {
                throw 'Wrong time input';
            }
            timeRes = distance / time
            console.log('Speed:', timeRes.toFixed(2));
        }
       // If input at some point is wrong it goes error handler 
        else {
              throw 'Wrong input';
        }
      }
      // Logs the caught error to console
      catch(e) {
          console.log(e);
      }