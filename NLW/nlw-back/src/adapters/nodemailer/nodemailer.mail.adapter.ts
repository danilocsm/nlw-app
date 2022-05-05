import { MailAdapter, SendMailData } from "../mail.adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "d8be558957a95c",
    pass: "e67f78e0cf29be",
  },
});

export class NodemailerMailAdadpter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Danilo Medeiros <danilocrgm@gmail.com>",
      subject,
      html: body,
    });
  }
}
