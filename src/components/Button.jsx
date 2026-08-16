function Button({ text, type, onClick }) {
  return (
    <button
      className={type}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;