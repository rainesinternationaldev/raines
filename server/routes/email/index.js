import Router from 'koa-router';
import multiparty from 'multiparty';
import {sendMail} from './mailer';
import {subscribeUserToMailchimp} from './mailchimp';

const router = Router();

router.post('/resume', (ctx) => {
  var form = new multiparty.Form();
  return new Promise((resolve, reject) => {
    form.parse(ctx.req, (err, fields, files) => {
      console.log('the fields', fields)
      console.log('the files', files)

      // Subscribe user to relevant mailchimp list(s)
      let newsletterObj = JSON.parse(fields.newsletters[0]);
      let personal = JSON.parse(fields.personal[0]);
      var lists = [];
      for (let key in newsletterObj) {
        if (newsletterObj[key]) lists.push(key);
      }
      subscribeUserToMailchimp(lists, personal);

      // Send resume attachment to internal email
      sendMail(fields.candidateName[0], files.attachment)
        .then((completed) => {
          ctx.body = completed;
          resolve();
        })
        .catch((err) => {
          ctx.body = 'ERROR: ' + err;
          reject();
        })
    });
  });
})

export default router