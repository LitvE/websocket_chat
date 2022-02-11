const {Message} = require('./../models');

module.exports.getMany = async (req, res, next) => {
    try {
        const getMsgs = await Message.find().limit(10);
        res.status(200).send({ data: getMsgs });
      } catch (err) {
        res.status(500).send();
      }
};