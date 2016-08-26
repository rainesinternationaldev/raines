import nodemailer from 'nodemailer';
import ses from 'nodemailer-ses-transport';

const transporter = nodemailer.createTransport(ses({
  accessKeyId: 'AKIAJH4X2XUWG2AUJK2A',
  secretAccessKey: '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',
  region: 'us-west-2'
}));

transporter.sendMail({
  from: 'rainesinternationaldev@gmail.com',
  to: 'rainesinternationaldev@gmail.com',
  subject: 'My Amazon SES Simple Test Email',
  text: 'Amazon SES is cool'
}, (err) => {
  console.log(err)
})