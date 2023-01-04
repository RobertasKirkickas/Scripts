/* This program is 'Email Simulation', it shows how 
script is doing functions like 'check', 'send', 'move to spam', 
'delete', 'check unread' - emails. */

class Email {
    constructor(fromAddress, emailContents) {
        this.fromAddress = fromAddress;
        this.emailContents = emailContents;
        this.hasBeenRead = false;
        this.isSpam = false;
    }

	// After reading email it becomes 'true'
    markAsRead() {
        this.hasBeenRead = true;
    }
     
	// Mark email as Spam
    markAsSpam() {
        this.isSpam = true;
    }
}

const inbox = []; // Main inbox

// Functions //
// Send new email
function addEmail(fromAddress, emailContents) {
    const email = new Email(fromAddress, emailContents);
    inbox.push(email);
}
// Counts how many emails in total
function getCount() {
    return inbox.length;
}
// Shows received emails with index
function getEmail(index = false) {
    if(index === false) {
        let contents = '';
        inbox.forEach((email, key) => {
            contents += 'E-mail: ' + key + ': ' + email.fromAddress + '\n';
        });

        return contents;
    }
    else {
        const email = inbox[index];
        if(email === undefined) { // If email not found by specific index
            return false;
        }
        email.markAsRead(); // Marks email as 'read'

        return email;
    }
}

// Unread email function
function getUnreadEmails() {
	const unreadEmails = []; // Unread emails "inbox"
    inbox.forEach(email => {
        if(!email.hasBeenRead) {
            unreadEmails.push(email);
        }
    })

    return unreadEmails;
}

// Spam email function
function getSpamEmails() {
	const spamEmails = []; // Spam emails "inbox"
    inbox.forEach(email => {
        if(email.isSpam) {
			spamEmails.push(email);
        }
    })

    return spamEmails;
}

// Delete selected email
function deleteEmail(index) {
    const email = inbox[index];
    if(!email) { // If email not found by specific index
        return false;
    }
    // delete
    inbox.splice(index, 1);
    return true;
}

// 'Received emails'
let newEmail1 = new Email("fake@goooogle.com", "Hello, how are you?");
let newEmail2 = new Email("freeLoto@fake.com", "Hello, do you want to play?");
inbox.push(newEmail1, newEmail2);

while(true){
	const userChoice = prompt("What would you like to do:\n 1. Read email\n 2. Mark spam\n 3. Send email\n 4. Delete email\n 5. View spam emails\n 6. View unread emails\n 7. quit?");
	if(userChoice == "1"){
		console.log(`Inbox(`+ getCount() + `)\n` + getEmail()); // Shows Email Inbox
		num1 = prompt("Which email you would like to read?");
		console.log(getEmail(num1)); // Shows email and its contents

	}else if(userChoice == "2"){
		console.log(getEmail());
		num1 = prompt("Which email you would like to mark as SPAM?");
		getEmail(num1).markAsSpam()                                    // Marks email as Spam
		console.log(`Marked as SPAM!`);

	}else if(userChoice == "3"){
		num1 = prompt("Enter email:");
		num2 = prompt("Enter you message here:");
		addEmail(num1, num2);                      // Sends email
		console.log("E-Mail Sent!")

	}else if(userChoice == "4"){
		console.log(getEmail());
		num1 = prompt("Which email you would like to Delete?");
		deleteEmail(num1)                                         // Deletes email from inbox
		console.log(`Email deleted!\n` + getEmail());

	}else if(userChoice == "5"){
		console.log(`Spam E-mail: `, getSpamEmails())  // Shows SPAM emails

	}else if(userChoice == "6"){
		console.log(`Unread E-mail: `, getUnreadEmails()) // Shows Unread emails
		
		// Exit
	}else if(userChoice == "7"){
		console.log("Goodbye");
		break;
	}else{
		console.log("Oops - incorrect input"); 
		
	}
}