const app= require('./lib/appserver').app; 
const swagger = require('./swagger.js');
swagger(app);

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const router = require("./routes/routerdb");
const userrouter=require("./routes/routerdb");
app.use("/router", router);
app.use("/routerdb", userrouter);