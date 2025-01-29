import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";

interface ButtonProps {
  label: string;
  type: string;
  icon?: string;
}

const Button = ({ label, type = "primary", icon }: ButtonProps) => {
  const getTypeClass = () => {
    switch (type) {
      case "primary":
        return "bg-blue-500 text-white";
      case "secondary":
        return "bg-gray-500 text-white";
      case "success":
        return "bg-green-500 text-white";
      case "danger":
        return "bg-red-500 text-white";
      case "warning":
        return "bg-yellow-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const getIcon = () => {
    if (icon === "check") {
      return <FontAwesomeIcon className="ps-3" icon={faCheck} />;
    }
    if (icon === "plus") {
      return <FontAwesomeIcon className="ps-3" icon={faPlus} />;
    }
    return false;
  };

  return (
    <button className={`px-4 py-2 rounded-sm ${getTypeClass()}`}>
      {label}
      {icon ? getIcon() : null}
    </button>
  );
};

export default Button;
