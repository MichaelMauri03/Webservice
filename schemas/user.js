const Ajv = require('ajv');

const ajv = new Ajv();

const userSchema = {
  type: 'object',
  properties: {
    ID: { type: 'integer' },
    Email: { type: 'string' },
    Name: { type: 'string' },
    Surname: { type: 'string' },
    password: { type: 'string' },
    Role: { type: 'string' }
  },
  required: ['Email', 'Name', 'Surname', 'password', 'Role']
};

const validateUser = ajv.compile(userSchema);
exports.userSchema=userSchema
/*
module.exports = {
  validateUser: validateUser
};

*/