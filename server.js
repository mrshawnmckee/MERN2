const express = require("express");
const app =express();
const { faker } = require('@faker-js/faker');

const port = 8000;

const createUser = () => {
    return {
        password:faker.internet.password(),
        email:faker.internet.email(),
        phoneNumber:faker.phone.number(),
        lastName:faker.name.lastName(),
        firstName:faker.name.firstName(),
        _id:faker.datatype.uuid()
    }
    
};

const createCompany = () => {
    return {
        _id:faker.datatype.uuid(),
        name: faker.company.bs(),
        address:{
            street:faker.address.street(),
            city:faker.address.city(),
            state:faker.address.state(),
            zipCode:faker.address.zipCode(),
            country:faker.address.country()        }
    }

};

app.get("/api/users/new", (req,res) => {
    const user = createUser();
    res.json(user)  //This sends the data back to those that requested it
});
app.get("/api/companies/new", (req, res) =>{
    const company = createCompany();
    res.json(company)

});
app.get("/api/user/company", (req, res) => {
    const userAndCompany = [createUser(), createCompany()]
    res.json(userAndCompany)

})

app.listen( port, () => {
    console.log(`Listening on port: ${port}`) })
