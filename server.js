const express = require('express');
const mongoose = require('mongoose');

//Routes
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();
const PORT = process.env.PORT || 5000;

//DB Config
const db = require('./config/keys').mongoURI; 
//Connect to MongoDBAtlas
mongoose
    .connect(db,{ useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=> console.log(`Connected to : ${db}`))
    .catch(err => console.log(err));


app.get('/', (req,res)=>{
    res.send("Hello World !");
})

//Use routes
app.use('/api/users',users);
app.use('/api/profile',profile);
app.use('/api/posts',posts);

app.listen(PORT, ()=> console.log(`Server is running on http://localhost:${PORT}`));