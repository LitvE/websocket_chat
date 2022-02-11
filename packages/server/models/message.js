const { Schema, model } = require('mongoose');

const msgSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Message = model('Message', msgSchema);
module.exports = Message;