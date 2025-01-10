import { FC } from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border shadow-md border-gray-300 outline-none rounded w-[120px] py-1 text-black font-medium hover:bg-blue-300"
    >
      {label}
    </button>
  );
};

export default Button;
