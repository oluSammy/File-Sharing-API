import Joi from "joi";

export const validateFileSave = (data: Record<string, any>) => {
  const schema = Joi.object({
    imageId: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).required(),
  });

  return schema.validate(data);
};
