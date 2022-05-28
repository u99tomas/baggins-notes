const { validationResult } = require('express-validator');

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) return next();
  return res.validationErrorWithData('Validation Error', errors.array());
};

module.exports = validate;
