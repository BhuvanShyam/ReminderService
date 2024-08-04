const sender = require("../config/email-config");

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

module.exports = {
  sendBasicEmail,
};

/**
 * SMTP --> a&b.com
 * reciver  --> d@e.com
 *
 * from: support@noti.com(some random email also)
 *
 */
