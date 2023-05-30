const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
    },
    securityDefinitions: {
      basicAuth: {
        type: 'basic',
      },
    },
    security: [
      {
        basicAuth: [],
      },
    ],
  },
  apis: ['./routes/*.js'], // Imposta il percorso dei file che contengono le rotte Swagger
};

const specs = swaggerJsDoc(options);

exports.options=options;
exports.specs=specs;
