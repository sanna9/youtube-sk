const Button = ({ label, onClick, ariaLabel, isSelected }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      aria-pressed={isSelected}
      className="p-2 bg-gray-100 rounded"
    >
      {label}
    </button>
  );
};

export default Button;
