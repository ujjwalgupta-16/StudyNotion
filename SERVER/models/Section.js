const mongoose = require("mongoose")

const sectionSechma = new mongoose.Schema({
    sectionName: {
        type: String
    },
    subSection: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubSection",
        required: true
    }]
})

module.exports = module.model("Section", sectionSechma)