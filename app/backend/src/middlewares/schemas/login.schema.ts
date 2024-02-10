import Joi = require('joi');

const requiredFieldMessage = 'All fields must be filled';
export const invalidFormatMessage = 'Invalid email or password';

const body = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
}).messages({
  'any.required': requiredFieldMessage,
  'any.empty': requiredFieldMessage,
  'string.empty': requiredFieldMessage,
  'string.email': invalidFormatMessage,
  'string.min': invalidFormatMessage,
});

export default {
  body,
};
