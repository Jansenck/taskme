import joi from "joi";

const taskValidation = joi.object({
    name: joi.string().empty().required(),
    description: joi.string().empty()
});

export { taskValidation };