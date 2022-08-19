const Message = require("../models/message");

const get_messages = (req, res) => {
  Message.find()
    .then((response) => res.status(200).json(response))
    .catch((err) => console.log(err));
};

const send_message = (req, res) => {
  const message = Message.create(req.body);
};

module.exports = { get_messages, send_message };
