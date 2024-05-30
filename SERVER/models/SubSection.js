const mongoose = require("mongoose")

const subSectionSchema = new mongoose.Schema({
    title: {
        type: String
    },
    timeDuration: {
        type: String
    },
    description: {
        type: String
    },
    videoUrl: {
        type: String
    },
})

module.exports = module.model("SubSection", subSectionSchema)