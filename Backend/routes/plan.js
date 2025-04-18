const express = require('express');
const router = express.Router();
const Plan = require('../models/Plan');
const sendEmail = require('../utils/email');

// Create a new plan
router.post('/', async (req, res) => {
    try {
        const plan = new Plan(req.body);
        await plan.save();

        // Send confirmation email
        await sendEmail({
            email: plan.email,
            subject: 'Plan Subscription Confirmation',
            message: `
                    <h2 style="color:#2c3e50;">Welcome to HomePro!</h2>
                    <p>Dear ${plan.name},</p>
                    <p>Thank you for expressing interest in our <strong>${plan.planType}</strong> plan.</p>
                    <p>We're excited to have you with us! To proceed with your subscription, please complete the payment using the details below. You can scan the attached QR code or use the UPI ID provided:</p>
                    <ul>
                    <li><strong>UPI ID:</strong> <span style="color:#2980b9;">pytm@6396920349</span></li>
                    </ul>
                    <p>Once the payment is complete, our team will reach out to you shortly to begin the onboarding process.</p>
                    <p>If you have any questions or need assistance, feel free to reply to this email. We’re here to help!</p>
                    <p>Warm regards,<br><strong>HomePro Team</strong></p> `
        });

        res.status(201).json(plan);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all plans
router.get('/', async (req, res) => {
    try {
        const plans = await Plan.find();
        res.json(plans);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a single plan
router.get('/:id', async (req, res) => {
    try {
        const plan = await Plan.findById(req.params.id);
        if (!plan) {
            return res.status(404).json({ message: 'Plan not found' });
        }
        res.json(plan);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a plan
router.put('/:id', async (req, res) => {
    try {
        const plan = await Plan.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!plan) {
            return res.status(404).json({ message: 'Plan not found' });
        }

        // Send update confirmation email
        await sendEmail({
            email: plan.email,
            subject: 'Plan Update Confirmation',
            message: `
                <h2>Plan Update Confirmation</h2>
                <p>Hello ${plan.name},</p>
                <p>Your plan has been successfully updated to ${plan.planType}.</p>
                <p>If you have any questions, please don't hesitate to contact us.</p>
                <p>Best regards,<br>HomePro Team</p>
            `
        });

        res.json(plan);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a plan
router.delete('/:id', async (req, res) => {
    try {
        const plan = await Plan.findByIdAndDelete(req.params.id);
        if (!plan) {
            return res.status(404).json({ message: 'Plan not found' });
        }

        // Send cancellation email
        await sendEmail({
            email: plan.email,
            subject: 'Plan Cancellation Confirmation',
            message: `
                <h2>Plan Cancellation Confirmation</h2>
                <p>Hello ${plan.name},</p>
                <p>Your ${plan.planType} plan has been cancelled.</p>
                <p>We're sorry to see you go. If you have any feedback, we'd love to hear from you.</p>
                <p>Best regards,<br>HomePro Team</p>
            `
        });

        res.json({ message: 'Plan deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/activate/:id', async (req, res) => {
    try {
        // Find the plan first
        const plan = await Plan.findById(req.params.id);
        if (!plan) {
            return res.status(404).json({ message: 'Plan not found' });
        }

        // Toggle the isActive property
        plan.isActive = !plan.isActive;

        // Save the updated plan
        await plan.save();

        res.json(plan);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});





module.exports = router;
