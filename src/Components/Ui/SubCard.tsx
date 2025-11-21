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
          <div className=" flex">
            <div className="bg-background-secondary w-[555px] h-[293px] flex flex-col items-center justify-center gap-6">
              <div className="text-center flex flex-col gap-[10px] px-[80px]">
                <h1 className="text-[28px] font-bold text-text-primary tracking-[.30rem]">{title}</h1>
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
          <div className="bg-background-secondary h-[700px]">
            <div className=" h-[350px] flex flex-col items-center justify-center gap-6">
              <div className="text-center flex flex-col gap-[10px] p-[50px] -mt-[50px]">
                <h1 className="text-[37px] font-bold text-text-primary tracking-[.30rem]">{title}</h1>
                <p className="text-[16px] text-text-secondary px-[30px]">{description}</p>
              </div>
              <Button type="secondary">LEARN MORE</Button>
            </div> 
      
            {imageUrl && <img className="w-screen h-[350px]" src={imageUrl} alt={title} />}

            {children && <div className="px-6 pt-4 pb-2">{children}</div>}
          </div>
        </div>
      )}
    </div>
    
  );
};

export default SubCard;
