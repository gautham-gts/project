const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: [true, "An user must have an email."],
        unique: true
    },
    password: {
        type: String,
        required: [true, "An user must have a password."]
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    role: {
        type: String,
        default: 'agent'
    },
    isVerified: {
        type: Boolean,
        default: false
    },
});

module.exports = mongoose.model('employees', employeeSchema);
