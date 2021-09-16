interface LoginDataType {
  id: string;
  password: string;
}

const loginValidation = (loginData: LoginDataType) => {
  const { id, password } = loginData;

  const hasId = !!id.trim();
  const hasPassword = !!password.trim();

  if (!hasId || !hasPassword) {
    if (!hasId) {
      console.error("The ID has not been delivered.");
      return false;
    } else if (!hasPassword) {
      console.error("The Password has not been delivered.");
      return false;
    } else {
      throw new Error(`UnHandled Login Error`);
    }
  }

  const idReg = /^[a-zA-Z0-9]{4,20}$/g;
  const passwordReg = /^[a-zA-Z0-9]{8,50}$/g;

  if (!idReg.test(id)) {
    console.error("The ID must be a value between 4 and 20 characters.");
    return false;
  } else if (!passwordReg.test(password)) {
    console.error("The PASSWORD must be a value between 8 and 50 characters.");
    return false;
  } else {
    return true;
  }
};

export default loginValidation;
