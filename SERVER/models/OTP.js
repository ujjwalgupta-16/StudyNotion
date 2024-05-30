const mongoose = require("mongoose")
const mailSender = require("../utils/mailSender")

const otpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        expires: 5 * 60
    }
})

const sendVerificationEmail = async (email, otp) => {
    try {
        const mailResponse = await mailSender(email, "Verification Mail from StudyNotion", otp)
    }
    catch (err) {
        console.error(err)
    }
}

otpSchema.pre("save", async (next) => {
    await sendVerificationEmail(this.email, this.otp)
    next()
})

module.exports = mongoose.model("OTP", otpSchema)