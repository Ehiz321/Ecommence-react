import Button from "./Button";
import useMediaQuery from "../../hooks/useMediaquery"

export interface SubCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  children?: React.ReactNode;
};

const SubCard: React.FC<SubCardProps> = ({ title, imageUrl, description, children }) => {
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
              <Button type="secondary">LEARN MORE</Button>
            </div> 
      
            {imageUrl && <img className="w-[555px] h-[400px] " src={imageUrl} alt={title} />}

            {children && <div className="px-6 pt-4 pb-2">{children}</div>}
          </div>
        </div>
      ):(
        <div>
          <div className="bg-background-secondary h-[600px]">
            <div className=" h-[300px] flex flex-col items-center justify-center">
              <div className="text-center flex flex-col p-[40px] -mt-[30px]">
                <h1 className="text-[28px] font-bold font-[garamond] text-text-primary tracking-[0.04rem]">{title}</h1>
                <p className="text-[16px] text-text-secondary">{description}</p>
              </div>
              <Button type="secondary" size="none">LEARN MORE</Button> 
            </div> 
      
            {imageUrl && <img className="w-full h-[300px]" src={imageUrl} alt={title} />}

            {children && <div className="px-6 pt-4 pb-2">{children}</div>}
          </div>
        </div>
      )}
    </div>
    
  );
};

export default SubCard;
