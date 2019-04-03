const mongoose = require('mongoose');


// Define collection and schema for Visitors
const MuseumSchema = mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    }, 
    emailAddress:  {
        type: String
    },  
    zipCode: {
        type: String
    },
    groupSize: {
        type: Number
    },
    howDidYouHearAboutUs: {
        type: String
    },
    country: {
        type: String
    },
    guestType: {
        type: String
    },
    className: {
        type: String
    },
    professorName: {
        type: String
    }
});

module.exports = mongoose.model('Visitor', MuseumSchema);