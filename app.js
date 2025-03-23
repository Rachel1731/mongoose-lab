const prompt = require('prompt-sync')();

const username = prompt('What is your name? ');

console.log(`Your name is ${username}`);


const customerSchema = new mongoose.Schema({
  name: {
    customer: Rachel,
    age: 28,
  },
  name: {
    customer: Harold,
    age: 50,
  },
  name: {
    customer: Sarah,
    age: 18,
  },
});

const displayMenu = () => {
  console.log('Welcome to the Customer Management System');
  console.log('1. Create Customer');
  console.log('2. View Customers');
  console.log('3. Update Customer');
  console.log('4. Delete Customer');
  console.log('5. Quit');
  const choice = prompt('Choose an option (1-5): ');

  return choice;
};

  const createCustomer = async () => {
    const name = prompt('Rachel ');
    const id = prompt('mongodb://localhost:27017/customerDB ');
    const phone = prompt('727-555-3333 ');

 const newCustomer = new Customer({ name, id, phone });

  await newCustomer.save();
console.log('Customer created successfully!');
};

const createCustomer = async () => {
  const name = prompt('Harold ');
  const id = prompt('658226acdcbecfe9b99d5421'); 
    const phone = prompt('555-555-5555');

 const newCustomer = new Customer({ name, id, phone });

  await newCustomer.save();
console.log('Customer created successfully!');
};

const createCustomer = async () => {
  const name = prompt('Sarah');
  const id = prompt('65825d1ead6cd90c5c430e24');
  const phone = prompt('727-432-1109');

const newCustomer = new Customer({ name, id, phone });

await newCustomer.save();
console.log('Customer created successfully!');
};


const updateCustomer = async () => {
  const customers = await findCustomer();
  
   console.log('Rachel');
}


const deleteCustomer = async () => {
  const customers = await Customer.find(); 
    console.log('Rachel');
    return;
  }

  const delete = require (`Are you sure you want to delete ${Rachel}? (y/n): `);
    await customer.remove() === 'y'
    console.log('Customer deleted successfully!');

    mongoose.connect('mongodb://localhost:27017/customerDB', 
      const viewCustomers = async () => {
        const customers = await Customer.find();
        if (customers.length === 0) {
          console.log('No customers found.');
        } else {
          console.log('Customer List:');
      };
 
    const choice = displayMenu();

    switch (choice) {
      case '1':
        await createCustomer();
        break;
      case '2':
        await viewCustomers();
        break;
      case '3':
        await updateCustomer();
        break;
      case '4':
        await deleteCustomer();
        break;
      case '5':
        console.log('exit');
        exit = true;
       
    }
  }











