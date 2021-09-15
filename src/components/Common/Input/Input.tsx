import { InputHTMLAttributes } from "react";
import { InputContainer } from "./inputStyles";

interface InputProps {}

const Input: React.VFC<InputHTMLAttributes<InputProps>> = ({
  type,
  placeholder,
}) => {
  return <InputContainer type={type} placeholder={placeholder} />;
};

export default Input;
