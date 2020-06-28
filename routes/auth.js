const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const pool = require('../config/db')
const {
    validateUser,
    isInvalidField,
    generateAuthToken
  } = require('../utils/common');


// @desc Signup page
// @route POST /auth/signup
router.post('/signup', async (req, res) => {
    try {
        const { first_name, last_name, email, password, password2 } = req.body;
        if (password !== password2) {
            return res.status(400).send({ signup_error: 'Passwords do not match' });
        }
        const validFieldsToUpdate = [
            'first_name',
            'last_name',
            'email',
            'password',
            'password2'
        ];
        const receivedFields = Object.keys(req.body);

        const isInvalidFieldProvided = isInvalidField(
            receivedFields,
            validFieldsToUpdate
        );
      
        if (isInvalidFieldProvided) {
            return res.status(400).send({
               signup_error: 'Invalid field.'
            });
        }
      
          const result = await pool.query(
            'select count(*) as count from users where email=$1',
            [email]
          );
          const count = result.rows[0].count;
          if (count > 0) {
            return res.status(400).send({
              signup_error: 'User with this email address already exists.'
            });
          }
      
          const hashedPassword = await bcrypt.hash(password, 8);
          await pool.query(
            'insert into users(first_name, last_name, email, password) values($1,$2,$3,$4)',
            [first_name, last_name, email, hashedPassword]
          );
          res.redirect('/');
    } catch (error) {
      console.log(error);
      res.render('errors/404');
    }
  });

module.exports = router;
