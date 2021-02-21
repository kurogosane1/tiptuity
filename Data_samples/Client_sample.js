const faker = require("faker");

function Client_Sample() {
  let client_sample = [];

  for (let i = 1; i <= 100; i++) {
    let businessname = faker.company.companyName();
    let businessAddress = faker.address.streetAddress();
    let businessImage = faker.image.business();

    client_sample.push({
      businessname,
      businessAddress,
      businessImage,
    });
  }

  return client_sample;
}

const cl_sample = Client_Sample();

module.exports = cl_sample;
