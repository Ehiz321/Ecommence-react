export interface ButtonProps {
  children: React.ReactNode;
  type?:  "first"| "primary" | "secondary" | "tertiary" | "footer" | "cart" ;
  size?:  "first"| "none" | "mini" | "small" | "cartsmall" | "medium" | "mediumd" | "cartmedium" | "large" | "foot" | "full";
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  type = "primary",
  size = "none",
  onClick,
}) => {

  const baseStyles = "flex justify-center items-center gap-[3px]";

  const typeStyles: Record<"first" | "primary" | "secondary" | "tertiary" | "footer" | "cart", string> ={
    first :"bg-background-primary text-brown-dark font-semibold  ",
    primary : "bg-background-primary text-text-primary border-text-primary border-[1px] font-semibold tracking-[0.08rem]",
    secondary : "text-text-primary border-b-text-primary border-b-[1px] font-bold",
    tertiary : "bg-text-primary text-background-primary border-text-primary border-[1px] tracking-[0.08rem] font-semibold ",
    footer: "text-text-quaternary border-text-quaternary border-[1px] font-semibold",
    cart :"bg-text-primary text-background-primary border-text-primary border-[1px]",
  }

  const sizeStyles: Record<"none" | "mini" | "small" | "cartsmall" | "medium" | "mediumd" | "cartmedium" | "large" | "foot" | "full" | "first" , string> = {
    none: "",
    first: "w-[220px] h-[40px] text-[14px] py-[15px] px-[18px]",
    mini: "size-[48px]",
    small:"w-[108px] h-[39px] px-[24px] py-[15px] text-[12px]",
    medium: "w-[190px] h-[39px] text-[12px]", 
    mediumd: "w-[255px] h-[39px] text-[12px]", 
    cartsmall:"w-[130px] h-[48px] px-[12px]",
    cartmedium: "w-[357px] h-[48px] px-[16px]", 
    large: "w-[440px] h-[48px] px-[16px]", 
    foot: "w-[150px] h-[48px] px-4 py-2 text-[12px]",
    full: "w-full h-[40px] py-[14px] px-[24px] text-[14px]",
  };

 const styles = `${baseStyles} ${typeStyles[type]} ${sizeStyles[size]}`;

  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
