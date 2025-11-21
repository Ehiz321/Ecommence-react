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
          <div className=" rounded w-[255px] h-[530px] -mb-[30px] flex flex-col justify-between">
            <div>
              {imageUrl && <img className="w-[255px] h-[321px]" src={imageUrl} alt={title} />}
      
              <div className="py-[10px] mb-[50px] ">
                <div className="font-bold text-[14px] text-text-primary ">{title}</div>
                <div className="font-bold text-[14px] text-text-primary mb-2 ">{price}</div>
                <p className="text-text-tertiary text-[14px]">{description}</p>
              </div>

        <Button type="primary" size="medium">ADD TO CART</Button>

            </div>
      

      

      {children && <div className="px-6 pt-4 pb-2">{children}</div>}
          </div>
        </div>
      ):(
        <div>
          <div className=" rounded w-[255px] -mb-[30px] flex flex-col justify-between">
            <div>
              {imageUrl && <img className="w-[255px] h-[290px]" src={imageUrl} alt={title} />}
      
              <div className="py-[10px] mb-[50px] tracking-[.15rem]">
                <div className="font-bold text-xl text-text-primary ">{title}</div>
                <div className="font-bold text-xl text-text-primary mb-2 ">{price}</div>
                <p className="text-text-tertiary">{description}</p>
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
