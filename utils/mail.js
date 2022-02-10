const nodeMailer = require('nodemailer');
require ('dotenv')
const pkg = require('../package.json')

const pass = process.env.EMAIL_PASS

async function mail(values) {
    const transporter = nodeMailer.createTransport({
        host: 'localhost',
        service: 'gmail',
        port: 587,
        secure: pkg.stage == 'development' ? false : true,
        //requireTLS:true, this is for deployment
        ignoreTLS: true, // this is for dev
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
        from: 'associatedpoolsinc@gmail.com',
        to: 'bryan@associatedpoolsinc.com',
        subject: `Contact form submission by ${values.values.firstName}`,
        text: `From: ${values.values.firstName} ${values.values.lastName} \n\
                Email: ${values.values.email} \n\
                Phone: ${values.values.phone} \n\
                Project Address: ${values.values.addressOne}\n\
                ${values.values.addressTwo}\n\
                City: ${values.values.city}\n\
                State: ${values.values.state} \n\
                Zip: ${values.values.zip} \n\
                Message: ${values.values.message}`
    };
        
    transporter.sendMail(mailMessage, function(error){
        if (error) {
            console.log(error);
        } 
    });

}

module.exports = { mail }