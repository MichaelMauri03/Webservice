const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const options = require('../swagger').options;
const specs = require('../swagger').specs;
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const schema=require('../schemas/user').userSchema;


function init() {
    specs.components={schemas:{user: schema}};
    app.use(bodyParser.json());
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true, customCss: '/swagger.css', }))
}

exports.app = app;
exports.init = init; 