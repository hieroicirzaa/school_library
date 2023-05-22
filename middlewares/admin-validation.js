const { check, validationResult } = require('express-validator');

const rules = [
  check('username')
    .notEmpty().withMessage('username cannot be empty')
    .isString().withMessage('username must be a string')
    .trim()
    .escape(),

  check('name')
  .notEmpty().withMessage('name cannot be empty')
  .isString().withMessage('name must be a string')
  .trim()
  .escape(),

  check('contact')
    .notEmpty().withMessage('contact cannot be empty')
    .isNumeric().withMessage('contact must be a number'),

  check('address')
    .notEmpty().withMessage('address cannot be empty')
    .trim()
    .escape(),

    check('password')
    .notEmpty().withMessage('password cannot be empty')
    .trim()
    .escape(),
];

const validationAdmin = [
  //rules
  rules,
  //Response
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = validationAdmin;