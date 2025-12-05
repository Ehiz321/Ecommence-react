export interface SubCardRProps {
  title: string;
  description: string;
  imageUrl?: string;
  children?: React.ReactNode;
};

const SubCardR: React.FC<SubCardRProps> = ({ title, imageUrl, description, children }) => {
  return (
    <div>
        <div className=" flex w-[1110px] h-[348px]">
           {imageUrl && <img className="w-[555px] h-[348px] " src={imageUrl} alt={title} />}
            <div className="bg-background-secondary w-[555px] h-[348px] flex flex-col items-center justify-center gap-[30px]">
              <div className="text-center flex flex-col gap-[10px] px-[80px]">
                <h1 className="text-[28px] font-bold font-[garamond] text-text-primary tracking-[.30rem]">{title}</h1>
                <p className="text-[16px] text-text-secondary">{description}</p>
              </div>
            </div> 

            {children && <div className="px-6 pt-4 pb-2">{children}</div>}
          </div>
        </div>
  );
};

export default SubCardR;
