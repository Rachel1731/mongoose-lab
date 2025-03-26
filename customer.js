const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: String,
    age: Number
});
const customer = mongoose.model ('Customer', customerSchema)
module.exports = customer 
//const displayMenu = () => {
    //console.log('Welcome to the Customer Management System');
   // console.log('1. Create Customer');
    //console.log('2. View Customers');
    //console.log('3. Update Customer');
    //console.log('4. Delete Customer');
    //console.log('5. Quit');
    //const choice = prompt('Choose an option (1-5): ');
  
    //return choice;
  //};

//const prompt = require('prompt-sync')();

//const greeting = prompt('Welcome');
//onsole.log(`Welcome ${username}`);





