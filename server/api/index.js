import Router from 'koa-router'
import emailApi from '../routes/email'
const api = new Router({ prefix: '/api' })
api.use('/email', emailApi.routes())
export default api