const app= require('./lib/appserver').app; 
const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const router = require("./routes/router");
const userrouter=require("./routes/routerdb");
app.use("/router", router);
app.use("/routerdb", userrouter);