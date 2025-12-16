export interface CardAProps {
  title: string;
  role: string;
  imageUrl?: string;
  children?: React.ReactNode;
};

const CardA: React.FC<CardAProps> = ({ title, imageUrl, children, role }) => {
  return (
    <div className="flex flex-col gap-[10px] w-[255px] h-[379px]">
      {imageUrl && <img className="w-full h-[321px]" src={imageUrl} alt={title} />}
      
      <div className="flex flex-col gap-[12px] text-center">
        <div className="font-semibold text-[14px] text-text-primary tracking-[0.06rem]">{title}</div>
        <div className="text-[14px] text-text-secondary mb-2">{role}</div>
      </div>

      {children && <div className="px-6 pt-4 pb-2">{children}</div>}
    </div>
  );
};

export default CardA;
