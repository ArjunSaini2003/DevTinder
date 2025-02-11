const express = require('express');
const AdminAuth = require('../Middlewares/Auth');

const app = express();

app.use('/admin',AdminAuth)

app.get('/admin/getalldata',(req,res)=>{
  res.send('All Data Fetched');
})    

app.get("/admin/deletedata",(req,res)=>{
  res.send('Deleted Data');
} );

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});