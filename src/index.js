const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");

const { sendBasicEmail } = require("./services/email-service");

const setupAndStartServer = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

    sendBasicEmail(
      '"Support"<support@gmail.com>',
      "bhuvanshyam17@gmail.com",
      "This is testing email",
      "Hey, MR.Bhuvan hope you like the support from glad to hear you back soon"
    );
  });
};

setupAndStartServer();
