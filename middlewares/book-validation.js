const { check, validationResult } = require('express-validator');

const rules = [
  check('isbn')
  .notEmpty().withMessage('isbn cannot be empty')
  .isNumeric().withMessage('isbn must be a number'),

  check('title')
  .notEmpty().withMessage('title cannot be empty')
  .isString().withMessage('title must be a string')
  .trim()
  .escape(),

  check('author')
  .notEmpty().withMessage('author cannot be empty')
  .isString().withMessage('author must be a string')
  .trim()
  .escape(),

  check('publisher')
  .notEmpty().withMessage('publisher cannot be empty')
  .isString().withMessage('publisher must be a string')
  .trim()
  .escape(),

  check('category')
  .notEmpty().withMessage('category cannot be empty')
  .isString().withMessage('category must be a string')
  .trim()
  .escape(),

  check('stock')
  .notEmpty().withMessage('stock cannot be empty')
  .isNumeric().withMessage('stock must be a number')
];

const validationBook = [
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

module.exports = validationBook;