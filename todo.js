const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;

const todoSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const mongoose = require('mongoose');
const prompt = require('prompt-sync')();
const Customer = require('./models/customer');

const createCustomer = async () => {
  const name = prompt('Enter customer name: ');
  const email = prompt('Enter customer email: ');
  const phone = prompt('Enter customer phone: ');

  const newCustomer = new Customer({ name, email, phone });

  await newCustomer.save();
  console.log('Customer created successfully!');
};
  
 // mongoose.connect('mongodb://localhost:27017/customerDB', 
  //const viewCustomers = async () => {
    //const customers = await Customer.find();
    //if (customers.length === 0) {
      //console.log('No customers found.');
   // } else {
      //console.log('Customer List:');
      //customers.forEach((customer) => {
        //console.log(`ID: ${customer._id}, Name: ${customer.name}, Id: ${customer.id}, Phone: ${customer.phone}`);
     // });
   // }
 // };



  

