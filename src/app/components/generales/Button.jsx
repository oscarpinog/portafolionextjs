export function Button({ children, onClick, variant = "primary" }) {
    const baseStyles = "px-4 py-2 font-semibold rounded shadow focus:outline-none";
    const variants = {
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      secondary: "bg-gray-600 text-white hover:bg-gray-700",
      danger: "bg-red-600 text-white hover:bg-red-700",
    };
    return (
      <button className={`${baseStyles} ${variants[variant]}`} onClick={onClick}>
        {children}
      </button>
    );
  }export default Button;