const { clearHash } = require('../services/cache');

module.exports = async (req, res, next) => {
  await next();

  // clear hash after executing
  clearHash(req.user.id);
};
