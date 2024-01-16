// "use client";
import "./Button.css";

const Button = ({ title, onClick }) => {
  return (
    <div className="ButtonContainer" onClick={onClick}>
      {title}
    </div>
  );
};

export default Button;
