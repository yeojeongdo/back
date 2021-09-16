import { InputHTMLAttributes } from "react";
import { InputContainer } from "./inputStyles";

interface InputProps {}

const Input: React.VFC<InputHTMLAttributes<InputProps>> = ({
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <InputContainer
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
