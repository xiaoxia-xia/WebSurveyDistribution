const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipientsSchema = new Schema({
    email: String,
    responded: {tyep: Boolean, default: false }
});

module.exports = recipientsSchema;