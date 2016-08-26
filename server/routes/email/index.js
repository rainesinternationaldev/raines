import Router from 'koa-router';
const router = Router();

router.get('/:name', ctx => {
  let name = ctx.params.name;
  ctx.body = `Hello ${name}!`
})

require('./mailer');
export default router