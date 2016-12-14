// import Router from 'koa-router'
// import emailApi from '../routes/email'
// const api = new Router({ prefix: '/api' })
// api.use('/email', emailApi.routes())
// export default api

const express = require('express');
const router = new express.Router();
router.use('/email', require('../routes/email'));

// Catch unregistered routes
router.use((req, res) => res.status(404).end());

module.exports = router;
