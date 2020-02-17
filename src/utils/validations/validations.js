export const validateComment = (value) => {
  const isValidPassword = (value.length >= 4) && isValidComment(value);
  return isValidPassword;
};

export const validateRating = (value) => {
  const isValidUsername = (value.length === 1 && isNumeric(value) && validateRange(value));
  return isValidUsername;
};

export const validatePassword = (value) => {
  const isValidPassword = value.length >= 4;
  return isValidPassword;
};

export const validateUsername = (value) => {
  const isValidUsername = (value.length >= 4) && isAlphaNumeric(value);
  return isValidUsername;
};

export const validateFirstname = (value) => {
  const isValidUsername = (value.length >= 2) && isAlpha(value);
  return isValidUsername;
};

export const validateLastname = (value) => {
  const isValidUsername = (value.length >= 2) && isAlpha(value);
  return isValidUsername;
};

const isValidComment = (value) => {
  const regularExpression = /^[?.!,'":\w\-\s]+$/;
  const isAlphaNum = regularExpression.test(value);
  return isAlphaNum;
};

const isAlphaNumeric = (value) => {
  const regularExpression = /^[a-zA-Z0-9]+$/;
  const isAlphaNum = regularExpression.test(value);
  return isAlphaNum;
};

const isNumeric = (value) => {
  const regularExpression = /^[0-9]+$/;
  const isNum = regularExpression.test(value);
  return isNum;
};

const isAlpha = (value) => {
  const regularExpression = /^[a-zA-Z]+$/;
  const isAlphaNum = regularExpression.test(value);
  return isAlphaNum;
};

const validateRange = (value) => {
  const regularExpression = /^[1-5]+$/;
  const isInRange = regularExpression.test(value);
  return isInRange;
};
