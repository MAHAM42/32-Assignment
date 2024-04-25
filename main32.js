"use strict";
// ASSIGNMENT NO 32:
/*
Checking Usernames: Do the following to create a program that simulates how websites ensure that
everyone has a unique username.

• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users.
Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used.
 If it has, print a message that the person will need to enter a new username.
  If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/
console.log("ASSIGNMENT NO 32:");
// Array of Current Users:
let current_users = ["Uzma", "Huma", "Mehak", "Zainab", "Maha"];
// Array of New Users:
let new_users = ["Ayesha", "Areeba", "Huma", "Mahnoor", "Zainab"];
// Loop through new_users to check for usernames avaibility:
new_users.forEach(new_one_user => {
    // Making a Condition for username already exist and save in our_condition variable:  
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase());
    // Print Different using If-Else statements: 
    if (our_condition) {
        console.log(`Sorry ${new_one_user} is already taken!`);
    }
    else {
        console.log(`This Username ${new_one_user} is avaliable`);
    }
});
