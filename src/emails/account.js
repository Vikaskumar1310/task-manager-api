const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'vkk1310@gmail.com',
        subject: 'Thanks for joining in with me in learning node.js!',
        text: `Welcome to the Task manager app, ${name}. Let me know how you get along with the app. Thanks Vikas`
    });
};

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'vkk1310@gmail.com',
        subject: 'Sorry to see you go',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
};