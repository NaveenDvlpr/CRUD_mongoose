const express = require('express');
const Student = require('../models/studentschema');
const app = express();

app.get('/', async (req, res) => {
    try {
        const students = await Student.find({});
        res.status(200).json(students);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
})

app.get('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const student = await Student.findById(id);
        res.status(200).json(student);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
})

app.post('/', async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.status(200).json(student);
    } catch(err) {
        console.log(err.message);
        res.status(500).json({message: err.message});
    }
})

app.put('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const student = await Student.findByIdAndUpdate(id, req.body);
        if(!student) {
            return res.status(404).json({message: `cannot find any product with ID ${id}`});

        }
        const updatedStudent = await Student.findById(id);
        res.status(200).json(updatedStudent);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
})

app.delete("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const student = await Student.findByIdAndDelete(id);
        if(!student) {
            return res.status(404).json({message: `cannot find any product with ID ${id}`});
        }
        res.status(200).json(student);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
})

module.exports = app;