const { faker } = require('@faker-js/faker');
const fs = require('fs');

let customers = [];
for (let i = 0; i < 200; i++) {
  const name = faker.name.firstName();
  const customer = {
    name: name,    
    lastName: faker.name.lastName(),    
    birthDate: faker.date.birthdate().toISOString().split('T')[0],
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    country: faker.address.country(),
    zipCode: faker.address.zipCode(),
    phoneNumber: faker.phone.number(),
    email: faker.internet.email(name)
  };
  customers.push(customer);
}
const jsonCustomers = JSON.stringify(customers, null, 2);
fs.writeFileSync('customers.json', jsonCustomers);
console.log('Customers data has been written to customers.json');

module.exports = customers;