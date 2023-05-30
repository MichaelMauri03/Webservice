const app= require('./lib/appserver').app; 
require('./lib/appserver').init(); 
const swagger = require('./swagger.js');

const port = 3000;
const router = require("./routes/router");
const userrouter=require("./routes/routerdb");
app.use("/router", router);
app.use("/routerdb", userrouter);
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

