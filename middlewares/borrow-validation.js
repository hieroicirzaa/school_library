const { check, validationResult } = require('express-validator');

const rules = [

  check('memberID')
    .notEmpty().withMessage('memberID cannot be empty')
    .isNumeric().withMessage('memberID must be a number'),
  check('adminID')
    .notEmpty().withMessage('adminID cannot be empty')
    .isNumeric().withMessage('adminID must be a number'),

    check('date_of_borrow')
    .notEmpty().withMessage('date_of_borrow cannot be empty'),

    check('date_of_return')
    .isEmpty(),

    check('status')
    .optional() 
    .isIn(['false', 'true']),
];

const validationBorrow = [
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

module.exports = validationBorrow;