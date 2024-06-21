import { NextApiRequest, NextApiResponse } from "next";

const { createTransport } = require("nodemailer");
const mailer = createTransport({
  service: "smtp.gmail.com",
  auth: { user: process.env.AUTH_EMAIL, pass: process.env.AUTH_PASS },
});
export async function handler(req: NextApiRequest, res: NextApiResponse) {
  mailer.sendMail(
    {
      from: req.body.email,
      to: process.env.AUTH_EMAIL,
      subject: "CTC",
      text: req.body.message,
    },
    (err: any, info: any) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({ message: "Email sent successfully!" });
      }
    }
  );
}
