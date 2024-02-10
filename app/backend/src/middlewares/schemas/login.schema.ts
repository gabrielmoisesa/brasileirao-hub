import Joi = require('joi');

const body = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export default {
  body,
};
