const joi = require('joi');

const login = require('./request/login/login')(joi);
const addUser = require('./request/user/addUser')(joi);



const schemas = {
    login,
    addUser,
}



const schemaValidator = (object, type) => {
    const Schema = schemas[type];
    return Schema.validateAsync(object)
}


module.exports = Object.create({ validate: schemaValidator, schemas });