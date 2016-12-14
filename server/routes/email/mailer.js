// import nodemailer from 'nodemailer';
// import ses from 'nodemailer-ses-transport';

const nodemailer = require('nodemailer');
const ses = require('nodemailer-ses-transport');

const transporter = nodemailer.createTransport(ses({
  accessKeyId: 'AKIAJH4X2XUWG2AUJK2A',
  secretAccessKey: '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',
  region: 'us-west-2'
}));

const emailAddress = 'rainesinternationaldev@gmail.com';

exports.sendMail = (candidateName, attachment) => {
  console.log('candidateName', candidateName);
  console.log('attachment', attachment);
  attachment[0].filename = attachment[0].originalFilename;
  return new Promise((resolve, reject) => {
    console.log('~~~~~~~~~IN THE PROMISE')
    transporter.sendMail({
      from: emailAddress,
      to:   emailAddress,
      subject: `Resume submission from ${candidateName}`,
      text: `Resume submission from ${candidateName}`,
      attachments: attachment
    }, (err) => {
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~CALLBACK FOR SENDING MAIL')
      if (err) reject(err);
      resolve('SENDING COMPLETE');
    })
  });
}