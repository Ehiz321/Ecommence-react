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
        <div className="grid grid-cols-2 h-[348px] ">
          <div className="bg-background-secondary h-[348px] flex flex-col items-center justify-center py-[64px] px-[60px] gap-[30px]">
            <div className="text-center flex flex-col gap-[30px]">
                <h1 className="text-[28px] font-bold font-[garamond] text-text-primary tracking-[0.04rem]">{title}</h1>
                <p className="text-text-secondary">{description}</p>
            </div>
            <Button type="secondary">SHOP NOW</Button>
        </div> 
      
        {imageUrl && <img className="w-full h-[348px]" src={imageUrl} alt={title} />}

        {children && <div className="px-6 pt-4 pb-2">{children}</div>}
        </div>
      </div>
      ):(
      <div>
       <div className="h-[668px]">
        <div className="bg-background-secondary h-[320px] flex flex-col items-center justify-center py-[50px] px-[20px] gap-[30px]">
            <div className="text-center flex flex-col gap-[30px]">
                <h1 className="text-[28px] font-bold font-[garamond] text-text-primary tracking-[0.04rem]">{title}</h1>
                <p className="text-text-secondary">{description}</p>
            </div>
            <Button type="secondary">SHOP NOW</Button>
        </div> 
      
        {imageUrl && <img className="w-full h-[348px]" src={imageUrl} alt={title} />}

        {children && <div className="px-6 pt-4 pb-2">{children}</div>}
        </div>
      </div>
      )}
      
   
    </div>
    
  );
};

export default TitleCard;
