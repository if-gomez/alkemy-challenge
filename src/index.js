const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;
require('dotenv').config();

const postsRoutes = require('./routes/posts');


//DB
const db = require('./database/db');

//Middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false}));

//Routes
app.use('/posts', postsRoutes);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});