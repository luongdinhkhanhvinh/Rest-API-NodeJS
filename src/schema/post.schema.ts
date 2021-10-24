import { object, string } from "yup";
import { DEFAULT_BODY_VALUE } from "../common/constant";
import { ValidateMessage } from "../common/message";

const payload = {
  body: object({
    title: string().required(ValidateMessage.titleIsRequired),
    body: string()
      .required(ValidateMessage.bodyIsRequired)
      .min(DEFAULT_BODY_VALUE, ValidateMessage.bodyIsTooShort),
  }),
};

const params = {
  params: object({
    postId: string().required(ValidateMessage.postIdIsRequired),
  }),
};

export const createPostSchema = object({
  ...payload,
});

export const updatePostSchema = object({
  ...params,
  ...payload,
});

export const deletePostSchema = object({
  ...params,
});
