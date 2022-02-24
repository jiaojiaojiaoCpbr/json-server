const { faker } = require('@faker-js/faker');

function generateCustomers() {
  const customers = [];
  for (let id = 0; id < 1000000; id += 1) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const phoneNumber = faker.phone.phoneNumberFormat();
    customers.push({
      id: id,
      first_name: firstName,
      last_name: lastName,
      phone: phoneNumber,
    });
  }
  return { customers };
}

module.exports = generateCustomers;
