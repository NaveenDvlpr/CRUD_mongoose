const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    StudentId: {
        type: Number,
        required: true,
    },
    Name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    Address: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;

