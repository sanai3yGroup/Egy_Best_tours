const mongoose = require("mongoose");
const contactSchema = mongoose.Schema({
  userName: {
    type: String,
  },
  emailAddress: {
    type: String,
  },
  message: {
    type: String,
  },
});

module.exports = mongoose.model("Contact", contactSchema);
