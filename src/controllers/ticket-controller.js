const TicketService = require("../services/email-service");

const create = async (req, res) => {
  try {
    const response = await TicketService.createNotification(req.body);
    res.status(201).json({
      message: "Successfully registered an email reminder",
      success: true,
      data: response,
      err: {}, // No error in the success case
    });
  } catch (error) {
    res.status(500).json({
      message: "Unable to register an email reminder",
      success: false,
      data: {},
      err: error.message || error, // Capture error details
    });
  }
};

module.exports = {
  create,
};
