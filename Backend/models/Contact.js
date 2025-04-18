const mongoose = require('mongoose');
const validator = require('validator');

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, 'Invalid email format']
    },
    phone: {
        type: String,
        required: true
    },
    service: {
        type: String,
        required: true,
        enum: ['plumbing', 'electrical', 'hvac', 'maintenance', 'other']
    },
    message: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Contact', ContactSchema);
