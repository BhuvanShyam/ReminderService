const sender = require("../config/email-config");
const TicketRepository = require("../repository/ticket-repository");
const repo = new TicketRepository();
const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
  try {
    const response = await sender.sendMail({
      from: mailFrom,
      to: mailTo,
      subject: mailSubject,
      text: mailBody,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

const fetchPendingEmails = async (timestamp) => {
  try {
    const response = await repo.get({ status: "PENDING" });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const updateTicket = async(ticketId,data) =>{
  try {
    const response = await repo.update(ticketId,data);
    return response;
  } catch (error) {
    console.log(error)
  }
}

const createNotification = async (data) => {
  try {
    const response = await repo.create(data);
    return response;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  sendBasicEmail,
  fetchPendingEmails,
  createNotification,
  updateTicket
};

/**
 * SMTP --> a&b.com
 * reciver  --> d@e.com
 *
 * from: support@noti.com(some random email also)
 *
 */
