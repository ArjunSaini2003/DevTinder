const AdminAuth = (req, res, next) => {
    const token = "123456";
  const isauthorized=token==="123456"
  if(!isauthorized){
    res.status(403).send('Not Allowed');
  }
  else{
    // res.send('Welcome to Admin Dashboard');
    next();
  }

};

module.exports = AdminAuth;