export interface CardProps {
  title: string;
  imageUrl?: string;
  children?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ title, imageUrl, children }) => {
  return (
    <div className="w-[259px] rounded ">
      {imageUrl && <img className="w-full h-[255px]" src={imageUrl} alt={title} />}
      
      <div className="px-6 py-4">
        <div className="font-bold text-[18px] text-text-primary text-center mb-2">{title}</div>
      </div>

      {children && <div className="px-6 pt-4 pb-2">{children}</div>}
    </div>
  );
};

export default Card;
