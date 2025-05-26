const nodeMailer = require('nodemailer')
// import { options } from '../router/router';

 const sendEmail = async () => {
    const transporter = nodeMailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        service:process.env.MAIL_SERVICE,
        auth: {
            user: process.env.USER_MAIL,
            pass: process.env.USER_PASSWORD,
        },
    });

    const mailOptions={
        from:process.env.USER_MAIL,
        to: options.email,
        subject: options.subject,
        text: `${options.message}\n\nEmail of user Who send the message ${options.userEmail}`
    };
    await transporter.sendMail(mailOptions);
};
module.exports=sendEmail