import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secureConnection: false,
    tls: {
        ciphers: 'SSLv3',
    },
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
    },
})

export default async function handler(req, res) {
    const { name, surname, email, message } = req.body

    const mailOptions = {
        from: process.env.EMAIL,
        to: 'lazarocaceresdeveloper@gmail.com',
        subject: `Mensaje de ${name} ${surname}`,
        html: `<p style="font-weight: bold;">Escrito por: ${email}</p><p>${message}</p>`,
    }

    transporter.sendMail(mailOptions, error => {
        if (error) {
            return console.error(error)
        }
        res.status(200).json({ message: 'Mensaje enviado' })
    })
}
