import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from 'nodemailer';

export class MailtrapMailProvider implements IMailProvider{
    private transporter;

    constructor(){
        this.transporter = nodemailer.createTransport({
            host: '',
            port: 2525,
            auth:{
                user: '',
                pass: ''
            }
        })
    }

    async sendMail(message: IMessage): Promise<void> {
       await this.transporter.sendMail({
        to:{
            name: message.to.name,
            email: message.to.email,
        },
        from: {
            name: message.from.name,
            email: message.from.email,
        },
        subject: message.subject,
        html: message.body
       })
    }

}