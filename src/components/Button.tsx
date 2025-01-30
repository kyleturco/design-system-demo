import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";

interface ButtonProps {
  label: string;
  type: string;
  icon?: string;
}

const Button = ({ label, type = "primary", icon }: ButtonProps) => {
  const getTypeClass = () => {
    switch (type) {
      case "primary":
        return "bg-blue-500 hover:bg-blue-600 text-white";
      case "secondary":
        return "bg-gray-500 hover:bg-gray-600 text-white";
      case "success":
        return "bg-green-500 hover:bg-green-600 text-white";
      case "danger":
        return "bg-red-500 hover:bg-red-600 text-white";
      case "warning":
        return "bg-yellow-500 hover:bg-yellow-600 text-white";
      default:
        return "bg-gray-500 hover:bg-gray-600 text-white";
    }
  };

  const getIcon = () => {
    if (icon === "check") {
      return <FontAwesomeIcon className="ps-3" icon={faCheck} />;
    }
    if (icon === "plus") {
      return <FontAwesomeIcon className="ps-3" icon={faPlus} />;
    }
    if (icon === "down") {
      return <FontAwesomeIcon className="ps-3" icon={faChevronDown} />;
    }
    return false;
  };

  return (
    <button className={`px-4 py-2 rounded-sm cursor-pointer ${getTypeClass()}`}>
      {label}
      {icon ? getIcon() : null}
    </button>
  );
};

export default Button;
