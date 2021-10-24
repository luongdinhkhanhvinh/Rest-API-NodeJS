import { object, string, ref } from "yup";
import { DEFAULT_MIN_PASSWORD, REGEX_PASSWORD } from "../common/constant";
import { ValidateMessage } from "../common/message";

export const createUserSchema = object({
  body: object({
    name: string().required(ValidateMessage.nameIsRequired),
    password: string()
      .required(ValidateMessage.passwordIsRequired)
      .min(DEFAULT_MIN_PASSWORD, ValidateMessage.passwordIsTooShort)
      .matches(REGEX_PASSWORD, ValidateMessage.passwordToMatch),
    passwordConfirmation: string().oneOf(
      [ref("password"), null],
      ValidateMessage.passwordMustMatch
    ),
    email: string()
      .email(ValidateMessage.emailValid)
      .required(ValidateMessage.emailIsRequired),
  }),
});

export const createUserSessionSchema = object({
  body: object({
    password: string()
      .required(ValidateMessage.passwordIsRequired)
      .min(DEFAULT_MIN_PASSWORD, ValidateMessage.passwordIsTooShort)
      .matches(REGEX_PASSWORD, ValidateMessage.passwordToMatch),

    email: string()
      .email(ValidateMessage.emailValid)
      .required(ValidateMessage.emailIsRequired),
  }),
});
