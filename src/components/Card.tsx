interface CardProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  size?: string;
}

const Card = ({ title, description, children, size = "small" }: CardProps) => {
  const getSizeClass = () => {
    switch (size) {
      case "small":
        return "w-1/4";
      case "medium":
        return "w-1/2";
      case "large":
        return "w-full";
      default:
        return "w-1/4";
    }
  };
  return (
    <div className={`border-rounded px-5 py-6 pb-7 bg-white ${getSizeClass()}`}>
      <h3 className="text-black text-2xl">{title}</h3>
      <p className="text-black">{description}</p>
      {children}
    </div>
  );
};

export default Card;
