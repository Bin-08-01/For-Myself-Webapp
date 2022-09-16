const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieparser = require('cookie-parser');

const routerAuth = require('./routes/auth');
const routeLanguage = require('./routes/vocabulary');
const routerUser = require('./routes/user');
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
app.use('/v1/user', routerUser);
app.use('/v2/language', routeLanguage);

app.listen(3107, () => console.log('Server is running ...'));