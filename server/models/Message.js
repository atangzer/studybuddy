const mongoose = require('mongoose');

const msgSchema = new mongoose.Schema({
  msg: String
});

const Message = mongoose.model('Message', msgSchema);
module.exports = Message;