import Button from "./Button";
import useMediaQuery from "../../hooks/useMediaquery"

export interface TitleCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  children?: React.ReactNode;
};

const TitleCard: React.FC<TitleCardProps> = ({ title, imageUrl, description, children }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  return (
    <div>
      {isAboveMediumScreens ? (
      <div>
        <div className="grid grid-cols-2">
          <div className="bg-background-secondary flex flex-col items-center justify-center gap-6 px-[55px]">
            <div className="text-center flex flex-col gap-[10px]">
                <h1 className="text-[28px] font-bold text-text-primary tracking-[.15rem]">{title}</h1>
                <p className="text-[16px] text-text-secondary px-[30px]">{description}</p>
            </div>
            <Button type="secondary">SHOP NOW</Button>
          </div> 
      
        {imageUrl && <img className="w-full h-[348px]" src={imageUrl} alt={title} />}

        {children && <div className="px-6 pt-4 pb-2">{children}</div>}
        </div>
      </div>
      ):(
      <div>
       <div className="h-[800px]">
        <div className="bg-background-secondary h-[400px] flex flex-col items-center justify-center gap-6">
            <div className="text-center flex flex-col gap-[10px]">
                <h1 className="text-[37px] font-bold text-text-primary tracking-[.30rem]">{title}</h1>
                <p className="text-[16px] text-text-secondary px-[30px]">{description}</p>
            </div>
            <Button type="secondary">SHOP NOW</Button>
        </div> 
      
        {imageUrl && <img className="w-full h-[400px]" src={imageUrl} alt={title} />}

        {children && <div className="px-6 pt-4 pb-2">{children}</div>}
        </div>
      </div>
      )}
      
   
    </div>
    
  );
};

export default TitleCard;
