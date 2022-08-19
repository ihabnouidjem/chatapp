const express = require("express");
const { get_messages, send_message } = require("../controlers/message");

const router = express.Router();

router.route("/api/messages").get(get_messages);
router.route("/api/messages").post(send_message);

module.exports = router;
