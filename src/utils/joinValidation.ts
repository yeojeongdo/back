interface JoinDataType {
  id: string;
  password: string;
  confirmPassword: string;
  birth: string;
  sex: string;
}

const joinValidation = (joinData: JoinDataType) => {
  const { id, password, confirmPassword, birth, sex } = joinData;

  const hasId = !!id.trim();
  const hasPassword = !!password.trim();
  const hasConfirmPassword = !!confirmPassword.trim();
  const hasBirth = !!birth.trim();
  const hasSex = !!sex.trim();

  if (!hasId || !hasPassword || !hasConfirmPassword || !hasBirth || !hasSex) {
    if (!hasId) {
      console.error("The ID has not been delivered.");
      return false;
    } else if (!hasPassword) {
      console.error("The Password has not been delivered.");
      return false;
    } else if (!hasConfirmPassword) {
      console.error("The Password Check has not been delivered.");
      return false;
    } else if (!hasBirth) {
      console.error("The Birth Check has not been delivered.");
      return false;
    } else if (!hasSex) {
      console.error("The sex Check has not been delivered.");
      return false;
    } else {
      throw new Error(`UnHandled Join Error`);
    }
  }

  if (password !== confirmPassword) {
    console.error("The password doesn't match.");
    return false;
  }

  const idReg = /^[a-zA-Z0-9]{4,20}$/g;
  const passwordReg = /^[a-zA-Z0-9]{8,50}$/g;
  const birthReg = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
};

export default joinValidation;
