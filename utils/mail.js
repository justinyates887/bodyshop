const nodeMailer = require('nodemailer');
require ('dotenv').config()
const pkg = require('../package.json')

const pass = process.env.EMAIL_PASS

async function mail(values) {

    const transporter = nodeMailer.createTransport({
        host: "localhost",
        service: 'gmail',
        port: 587,
        secure: pkg.stage == 'development' ? false : true,
        requireTLS: pkg.stage == 'development' ? false : true,
        ignoreTLS: pkg.stage == 'development' ? true : false,
        auth: {
          user: 'associatedpoolsinc@gmail.com',
          pass: `${pass}`
        }
    });

    transporter.verify(function(error, success) {
        if (error) {
          console.log(error);
        } else {
          console.log("Server is ready to take our messages!");
        }
    });
        
    const mailMessage = {
        from: `associatedpoolsinc@gmail.com`,
        to: 'justin@associatedpoolsinc.com',
        subject: `Contact form submission by ${values.name}`,
        text: `From: ${values.name} \n\
                Date: ${values.date} \n\
                Phone: ${values.phone} \n\
                Email: ${values.email}
                Message: ${values.message}`
    };
        
    transporter.sendMail(mailMessage, function(error){
        if (error) {
            console.log(error);
        } 
    });

}

module.exports = { mail }