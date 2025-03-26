// const prompt = require('prompt-sync')();


// const displayMenu = () => {
//  console.log('Welcome to the Customer Management System');
//   console.log('1. Create Customer');
//   console.log('2. View Customers');
//  console.log('3. Update Customer');
//   console.log('4. Delete Customer');
//  console.log('5. Quit');
//  const choice = prompt('Choose an option (1-5): ');

//  return choice;
// };

// const username = prompt("Welcome user what's your name?");
// console.log(`Welcome ${username}`);
// const choice = displayMenu();

// console.log(choice);
// const createCustomer = async () => {
// console.log ("createCustomer")
// }
// const viewCustomer = async () => {
//   console.log ("viewCustomer")
// }
// const updateCustomer = async () => {
//   console.log ("updateCustomer")
// }
// const deleteCustomer = async () => {
//   console.log ("deleteCustomer")
// }
// const quitCustomer = async () => {
//   console.log ("quitCustomer")
// }

// if(choice === '1') {
  
//   createCustomer()
// } else if(choice === '2') {
 
//   viewCustomer()
// } else if(choice === '3') {
 
//   updateCustomer()
// }
// else if(choice === '4') {
  
//   deleteCustomer()
// } else if(choice === '5') {
 
//   quitCustomer()
// } else {
//   console.log('anything not 1-5')
// };

const prompt = require('prompt-sync')();
 const mongoose = require('mongoose');
 const dotenv = require('dotenv');
 dotenv.config();
 
 console.log("MONGODB_URI from .env:", process.env.MONGODB_URI);

const Customer = require('./models/customer.js');

//BELOW is the connection to  mongo
const connect = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB')
}
connect()



 const createCustomer = async (req, res) => { 
  const nameInput = prompt('Enter customer name: ');
  const ageInput = prompt('enter your age: ');
  const age = parseInt(ageInput); //parseInt converts a string into an integer

  const newCustomer = {
name: nameInput,
age: age,
  }
  console.log(newCustomer)
  await Customer.create(newCustomer);
  console.log('new customer created:' , newCustomer);
 };
 
createCustomer()

//  const viewCustomers = async () => {
//   try {
//   const customers = await Customer.find();
//     if (customers.length === 0) {
//       console.log('No customers found.');
//       return;
//     }
//     console.log('Customers:');
//     customers.forEach((customer, index) => {
//       const id = customer._id;
//       const name = customer.name;
//       const age = customer.age;

//       console.log(`${index + 1}. ${customer._id}`);
//       console.log(`${index + 1}. ${customer.name}`);
//       console.log(`${index + 1}. ${customer.age}`);

//     });

//     const updateCustomer = async () => {
//       console.log('updateCustomer');
//     };

//     const deleteCustomer = async () => {
//       console.log('deleteCustomer');
//     };
    
//     const quitCustomer = async () => {
//       console.log('exiting application'); 
//       process.exit(0);
//     };

//     const runApp = async () => {
//       await connect();
//     }
    
// const displayMenu = () => {
//   console.log('Welcome to the Customer Management System');
//   console.log('1. Create Customer');
//   console.log('2. View Customers');
//   console.log('3. Update Customer');
//   console.log('4. Delete Customer');
//   console.log('5. Quit');
//   const choice = prompt('Choose an option (1-5): ');
//   return choice;
// }

//     const customerNumber = prompt('Enter the number of the customer you want to view: ');
//     const selectedCustomer = allCustomers[parseInt(customerNumber) - 1];

//     if (selectedCustomer) {
//       console.log(`Customer Information:
//       ID: ${selectedCustomer.id}
//       Name: ${selectedCustomer.name}
//       Age: ${selectedCustomer.age}`);
//     } else {
//       console.log('Invalid customer number.');
    //}
  // } catch (error) {
  //   console.error('Error viewing customers:', error);
  // } finally {
  //   await client.close();
  //}
//};



//if (choice === '1') {
  //createCustomer();
//} else if (choice === '2') {
  //viewCustomer();
//} else if (choice === '3') {
  //updateCustomer();
//} else if (choice === '4') {
 // deleteCustomer();
//} else if (choice === '5') {
 // quitCustomer();
//} else {
  //console.log('Invalid choice, please choose a number between 1 and 5.');
//}












