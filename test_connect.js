const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
console.log(process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on("connected", ()=> {
    console.log("connected")
})

require('dotenv').config();
const prompt = require('prompt-sync')();
import { MongoClient } from 'mongodb';

const mongoURI = process.env.MONGO_URI;
console.log(mongoURI)
const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

try {
    await client.connect();
    const database = client.db('customerDB');
    const customers = database.collection('customers');


    const database = client.db('customerDB');
    const customers = database.collection('customers');



    const newCustomer = {
        id: new Date().getTime().toString(),
        name,
        age: parseInt(age)
      };
  
      const result = await customers.insertOne(newCustomer);
      console.log(`New customer created with the following id: ${result.insertedId}`);{
    }
      console.error('Error creating customer:', error);
     {
      const client = new Mongoclient(URI);
    };