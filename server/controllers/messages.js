/**
 * GET /api/messages
 * Get random message.
 */

const Message = require("../models/Message.js");

exports.getRandomMessage = (req, res, next) => {
        Message.aggregate([
            { $sample: { size: 1 } }
        ])
        .then((result) => {
          res.status(200).json({
            message: "Message retrieved",
            result: result,
          });
        })
        .catch((err) => {
          res.status(500).json({
            error: err,
          });
        })
    };

/**
 * POST /api/messages
 * Create a message.
 */
exports.createMessage = (req, res, next) => {
  const message = new Message({
    msg: req.body.msg,
  });

  message
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Message sent.",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};
