import { FC } from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border-2 border-blue-800 rounded min-w-28 py-1 text-black font-medium hover:bg-blue-300"
    >
      {label}
    </button>
  );
};

export default Button;
