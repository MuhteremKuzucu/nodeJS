"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */

const nodemailer = require('nodemailer');

module.exports = function sendMail(to, subject, message) {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'alidrl26@gmail.com',
            pass: 'qyfs zshq zsfn kyqa'
        }
    });

    // Google -> AccountHome -> Security -> Two-Step-Verify (make it on) -> App-Passwords (if not showing use this link: https://myaccount.google.com/apppasswords)
    transporter.sendMail({
        from: 'alidrl26@gmail.com',
        to: to,
        subject: subject,
        text: message,
        html: message

    }, function (error, success) {

        success ? console.log('SUCCESS:', success) : console.log('ERROR:', error);
    });


}