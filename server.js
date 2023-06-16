const express = require('express');
const mongoose = require('mongoose');
const studentRouter = require('./routes/studentRoutes');


const PORT = 3000;
const app = express();

app.use(express.json());

app.use("/student", studentRouter);

mongoose.connect( 
    "mongodb+srv://naveenmoyya01:Nanigadu1@cluster0.knwzkn0.mongodb.net/Student?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then( () => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
            console.log('server is listening to port 3000');
        });
    }).catch((err) => {
        console.log(err);
    })



