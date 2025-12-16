import useMediaQuery from "../../hooks/useMediaquery"

export interface SubCardAProps {
  title: string;
  description: string;
  imageUrl?: string;
  children?: React.ReactNode;
};

const SubCardA: React.FC<SubCardAProps> = ({ title, imageUrl, description, children }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  return (
    <div>
      {isAboveMediumScreens ? (
        <div>
          <div className=" flex w-auto h-[348px]">
            <div className="bg-background-secondary w-[555px] h-[348px] flex flex-col items-center justify-center gap-[30px]">
              <div className="text-center flex flex-col gap-[10px] px-[80px]">
                <h1 className="text-[28px] font-bold font-[garamond] text-text-primary tracking-[.30rem]">{title}</h1>
                <p className="text-[16px] text-text-secondary">{description}</p>
              </div>
            </div> 
      
            {imageUrl && <img className="w-[555px] h-[348px] " src={imageUrl} alt={title} />}

            {children && <div className="px-6 pt-4 pb-2">{children}</div>}
          </div>
        </div>
      ):(
        <div>
          <div className="bg-background-secondary h-[560px]">
            {imageUrl && <img className="w-full h-[300px]" src={imageUrl} alt={title} />}
            <div className=" h-[260px] py-[40px] px-[48px] text-center">
                <h1 className="text-[28px] font-bold text-text-primary tracking-[0.04rem] font-[garamond]">{title}</h1>
                <div className="size-[24px]"></div>
                <p className=" text-text-secondary">{description}</p>
            </div>

            {children && <div className="px-6 pt-4 pb-2">{children}</div>}
          </div>
        </div>
      )}
    </div>
    
  );
};

export default SubCardA;
