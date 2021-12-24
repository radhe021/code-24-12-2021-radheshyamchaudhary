const app = require("./app");
const hostname = '127.0.0.1';
const port = 3000;
app.listen(port,hostname,()=>{
  console.log(`App is running on 'http://${hostname}:${port}/'`);
})