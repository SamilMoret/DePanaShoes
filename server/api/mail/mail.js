import nodemailer from 'nodemailer'; 


const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'anderadarve@gmail.com',
        pass: 'ziwikichbgrhmfln'
    }
});



export const sendMail = prod => {
    transporter.sendMail({
        from: "ecommerce <ecommerce@gmail.com",
        to: "a.adarve@utp.edu.co",
        subject: "Stock at its minimun",
        text: `The following product's stock which id's is${prod.id}. is almost empty`
    }).then(console.info)
    .catch(console.catch)
}
