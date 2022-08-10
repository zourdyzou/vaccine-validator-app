"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const googleapis_1 = require("googleapis");
const { OAuth2 } = googleapis_1.google.auth;
const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground';
const oauth2Client = new OAuth2(process.env.MAILING_SERVICE_CLIENT_ID, process.env.MAILING_SERVICE_CLIENT_SECRET, OAUTH_PLAYGROUND);
const sendMail = (to, url, text) => {
    oauth2Client.setCredentials({
        refresh_token: process.env.MAILING_SERVICE_REFRESH_TOKEN,
    });
    const smtpTransport = nodemailer_1.default.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: 'oauth2',
            user: process.env.SENDER_EMAIL_ADDRESS,
            clientId: process.env.MAILING_SERVICE_CLIENT_ID,
            clientSecret: process.env.MAILING_SERVICE_CLIENT_SECRET,
            refreshToken: process.env.MAILING_SERVICE_REFRESH_TOKEN,
        },
    });
    const mailOptions = {
        from: process.env.SENDER_EMAIL_ADDRESS,
        to: to,
        subject: 'Your Vaccine Validator Request',
        html: `
        <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
        <h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome to the Department of Health and Sanitation Republic of Poland.</h2>
        <p>Congratulations! Your request has been collectively added into our system
            For the confirmation please click the button below to validate your email address. Thank you and stay safe
        </p>
        
        <a href=${url} style="background: crimson; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">${text}</a>
    
        <p>If the button doesn't work for any reason, you can also click on the link below:</p>
    
        <div>${url}</div>
        </div>
    `,
    };
    smtpTransport.sendMail(mailOptions, (err, information) => {
        if (err)
            return err;
        return information;
    });
};
exports.sendMail = sendMail;
//# sourceMappingURL=sendMail.js.map