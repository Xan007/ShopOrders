import * as Joi from 'joi';

export const configuration = () => ({
  database: {
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_PORT: parseInt(process.env.DB_PORT) || 5432,
  },
});

export const validationSchema = Joi.object({
  database: {
    DB_USER: Joi.string().required(),
    DB_PASSWORD: Joi.string().required(),
    DB_PORT: Joi.number().required(),
  },
});
