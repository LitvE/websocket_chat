const {Router} = require('express');
const messageRouter = require("./messageRouter");

const router = Router();
router.use('/message', messageRouter);

module.exports = router