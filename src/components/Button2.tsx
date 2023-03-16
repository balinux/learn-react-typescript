import React from "react";

type ButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button2 = ({ onClick }: ButtonProps) => {
  return <button onClick={onClick}>Click me!</button>;
};

export default Button2;
