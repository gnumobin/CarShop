import React from "react";

const Button = ({ text, variant }) => {
  // Define classes based on the variant
  const variantClasses = {
    blindado: "border-line text-line",
    hibrido: "bg-secondary text-[rgba(0,0,0,0.7)] border-secondary",
    eletrico: "bg-tertiary text-[rgba(0,0,0,0.6)] border-tertiary",
  };

  return (
    <button
      className={`px-4 rounded-full font-extrabold text-2xl transition duration-300 border ${
        variantClasses[variant] || "bg-gray-200 text-gray-800"
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
