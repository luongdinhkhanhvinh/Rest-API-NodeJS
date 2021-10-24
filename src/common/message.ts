export enum ValidateMessage {
  //Title message
  "titleIsRequired" = "Title is required",

  // Body message
  "bodyIsRequired" = "Body is required",
  "bodyIsTooShort" = "Body is too short - should be 120 chars minimum.",

  // PostId message
  "postIdIsRequired" = "postId is required",

  // Name message
  "nameIsRequired" = "Name is required",

  // Password message
  "passwordIsRequired" = "Password is required",
  "passwordIsTooShort" = "Password is too short - should be 6 chars minimum.",
  "passwordToMatch" = "Password can only contain Latin letters.",
  "passwordMustMatch" = "Passwords must match",

  // Email message
  "emailValid" = "Must be a valid email",
  "emailIsRequired" = "Email is required",
}

export enum ConnectedMessage {
  "databaseConnected" = "Database connected",
  "connectError" = "Connection to the database failed. Please try again",
}

export enum ControllerMessage {
  "invalidField" = "Invalid username or password",
}
