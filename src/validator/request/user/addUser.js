const schema = (joi) =>
    joi.object().keys({
        name: joi.string().alphanum().required(),
        email: joi
            .string()
            .email({ minDomainSegments: 2 })
            .required(),
        mobile: joi
            .string()
            .regex(/^[0-9]{10}$/)
            .messages({ 'string.pattern.base': `Mobile number must have 10 digits.` })
            .required(),
        password: joi.string().min(4).required(),
    });


module.exports = schema;
