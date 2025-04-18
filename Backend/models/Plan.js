const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    planType: {
        type: String,
        required: true,
        enum: ['Basic Plan', 'Pro', 'Enterprise', 'Family Plan']
    },
    isActive: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});

// Update the updatedAt field before saving
planSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const Plan = mongoose.model('Plan', planSchema);

module.exports = Plan;
