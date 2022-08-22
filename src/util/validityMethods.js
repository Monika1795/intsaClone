const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const handleRegisterValidation = (data) => {
  const errors = {};
  if (!data.email || !validateEmail(data.email)) {
    errors.email = "enter valid email";
  }
  if (!data.fullName) {
    errors.fullName = "full name required";
  }
  if (!data.userName) {
    errors.userName = "user name required";
  }
  if (!data.password) {
    errors.password = "password required";
  }
  if (data.password.length < 6) {
    errors.password = "password should contain minimum 6 characters ";
  }

  return errors;
};

export const handleLoginValidation = (data) => {
  const errors = {};
  if (!data.email || !validateEmail(data.email)) {
    errors.email = "enter valid email";
  }
  if (!data.password) {
    errors.password = "password required";
  }
  if (data.password.length < 6) {
    errors.password = "password should contain minimum 6 characters ";
  }

  return errors;
};
