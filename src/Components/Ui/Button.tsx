export interface ButtonProps {
  children: React.ReactNode;
  type?:  "first"| "primary" | "secondary" | "footer";
  size?: "none" | "small" | "medium" | "foot";
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  type = "primary",
  size = "none",
  onClick,
}) => {
  const baseStyles = "font-bold tracking-[.10rem]";

  const typeStyles: Record<"first" | "primary" | "secondary" | "footer", string> ={
    first :"bg-background-primary text-brown-dark",
    primary : "bg-background-primary text-text-primary border-text-primary border-2 ",
    secondary : "text-text-primary border-b-text-primary border-b-2",
    footer: "text-text-quaternary border-text-quaternary border-2",
  }

  const sizeStyles: Record<"none" | "small" | "medium" | "foot", string> = {
    none: "",
    small:"w-[135px] px-4 py-2",
    medium: "w-[255px] px-4 py-2", 
    foot: "w-[150px] px-4 py-2 text-[12px]",
  };

 const styles = `${baseStyles} ${typeStyles[type]} ${sizeStyles[size]}`;

  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
