export interface CardProps {
  title: string;
  imageUrl?: string;
  children?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ title, imageUrl, children }) => {
  return (
    <div className="flex flex-col gap-[23px] w-[255px] h-[291px]">
      {imageUrl && <img className="size-[255px]" src={imageUrl} alt={title} />}
      
      <div className="flex justify-around">
        <div className="font-semibold text-[18px] text-text-primary tracking-[0.06rem]">{title}</div>
      </div>

      {children && <div className="px-6 pt-4 pb-2">{children}</div>}
    </div>
  );
};

export default Card;
