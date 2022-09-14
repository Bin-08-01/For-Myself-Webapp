const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieparser = require('cookie-parser');

const routerAuth = require('./routes/auth');

dotenv.config();
const app = express();

//Connect Database
mongoose.connect(process.env.MONGODB_URL, ()=>{
    console.log("Connect successfully");
})

app.use(cors());
app.use(cookieparser());
app.use(express.json());

//Route
app.use('/v1/auth', routerAuth);

app.listen(3000, () => console.log('Server is running ...'));