const faker = require("faker");

function generate() {
  let result = Math.random(0, 1);
  if (result >= 0.5) {
    return (response = true);
  } else {
    return (response = false);
  }
}

function Sample() {
  let emp_sample = [];

  for (let i = 1; i <= 100; i++) {
    let firstname = faker.name.firstName();
    let lastname = faker.name.lastName();
    let image = faker.image.people();
    let streetaddress = faker.address.streetAddress();
    let email = faker.internet.email();
    let isAdmin = generate();

    emp_sample.push({
      firstname,
      lastname,
      image,
      streetaddress,
      email,
      isAdmin,
    });
  }
  return emp_sample;
}

module.exports = Sample;
