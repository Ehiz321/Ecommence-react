import Button from "./Button";
import useMediaQuery from "../../hooks/useMediaquery.ts"

export interface CartCardProps {
  title: string;
  price: string;
  description: string;
  imageUrl?: string;
  children?: React.ReactNode;
};

const CartCard: React.FC<CartCardProps> = ({ title, price, description, imageUrl, children }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  return (
    <div>
      {isAboveMediumScreens ? (
        <div>
          <div className="w-[255px] h-[530px] flex flex-col justify-between">
            <div className="flex flex-col gap-[10px]">
              {imageUrl && <img className="w-[255px] h-[321px]" src={imageUrl} alt={title} />}
      
              <div className="py-[10px] mb-[50px] ">
                <div className="font-semibold text-[14px] text-text-primary tracking-[0.05rem] ">{title}</div>
                <div className="font-semibold text-[14px] text-text-primary ">{price}</div>
                <p className="text-text-tertiary text-[14px]">{description}</p>
              </div>

              <Button type="primary" size="mediumd">ADD TO CART</Button>

            </div>
      {children && <div className="px-6 pt-4 pb-2">{children}</div>}
          </div>
        </div>
      ):(
        <div>
          <div className="w-[190px] h-[500px] flex flex-col justify-between">
            <div>
              {imageUrl && <img className="w-full h-[240px]" src={imageUrl} alt={title} />}
      
              <div className="py-[10px] mb-[50px] ">
                <div className="font-semibold  text-[14px] text-text-primary h-[52px] tracking-[0.06rem]">{title}</div>
                <div className="font-semibold  text-[14px] text-text-primary h-[54px]">{price}</div>
                <p className="text-text-tertiary text-[14px]">{description}</p>
              </div>

              <Button type="primary" size="medium">ADD TO CART</Button>

            </div>
      

      

      {children && <div className="px-6 pt-4 pb-2">{children}</div>}
          </div>
        </div>
      )}
    </div>
    
  );
};

export default CartCard;
