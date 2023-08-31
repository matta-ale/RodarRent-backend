const { faker } = require('@faker-js/faker');

// Genera datos de prueba para 10 clientes
const customers = [];
for (let i = 0; i < 80; i++) {
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

console.log(customers);