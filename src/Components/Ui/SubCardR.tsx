import Button from "./Button";

export interface SubCardRProps {
  title: string;
  description: string;
  imageUrl?: string;
  children?: React.ReactNode;
};

const SubCardR: React.FC<SubCardRProps> = ({ title, imageUrl, description, children }) => {
  return (
    <div className="flex -mt-[107px]">
        {imageUrl && <img className="w-[555px] h-[293px]" src={imageUrl} alt={title} />}
        <div className="bg-background-secondary w-[555px] h-[293px] flex flex-col items-center justify-center gap-6">
            <div className="text-center flex flex-col gap-[10px] px-[100px]">
                <h1 className="text-[28px] font-bold text-text-primary tracking-[.30rem]">{title}</h1>
                <p className="text-[16px] text-text-secondary">{description}</p>
            </div>
            <Button type="secondary">LEARN MORE</Button>
        </div> 

      {children && <div className="px-6 pt-4 pb-2">{children}</div>}
    </div>
  );
};

export default SubCardR;
