import { ButtonContainer } from "./buttonStyles";

interface ButtonProps {
  onClick?: (e?: any) => void;
  type?: "button" | "submit" | undefined;
  style?: any;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, style, type }) => {
  return (
    <ButtonContainer style={style} onClick={onClick} type={type}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
