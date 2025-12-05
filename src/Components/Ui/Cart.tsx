import Button from "./Button";
import useMediaQuery from "../../hooks/useMediaquery"

export interface CartProps {
  title: string;
  price: string;
  subtotal: string;
  imageUrl?: string;
  icon?: string;
  children?: React.ReactNode;
};


const Cart: React.FC<CartProps> = ({  title, imageUrl, icon, price, subtotal, children }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  return (
    <div>
      {isAboveMediumScreens ? (
        <div className="flex items-center gap-[10px] w-[1110px] h-[181px] border-b-[1px] border-text-primary py-[20px] text-text-primary text-[14px]">
            <div className="flex justify-center w-[50px] h-[20px]">{icon && <img className="size-[20px]" src={icon} />}</div>
            {imageUrl && <img className="w-[120px] h-full" src={imageUrl} alt={title} />}
            <div className="font-semibold tracking-[0.06rem] flex justify-center w-[400px]">{title}</div>
                <div className="flex justify-center w-[180px]">{price}</div>
                <div className="flex justify-center w-[130px]">
                    <Button type="primary" size="cartsmall" >
                        <div className="flex gap-[30px]">
                            <div>-</div>
                            <div>1</div>
                            <div>+</div>
                        </div>
                    </Button>
                </div>
                <div className="flex justify-center text-brown-light w-[180px]">{subtotal}</div>

            {children && <div className="px-6 pt-4 pb-2">{children}</div>}
        </div>
      ):(
      <div className="flex flex-col gap-[20px] w-[390px] h-[369px] border-b-[1px] border-text-primary py-[30px] text-text-primary text-[14px]">
        <div className="flex justify-center w-[50px] h-[20px]">{icon && <img className="size-[20px]" src={icon} />}</div>
        <div className="flex gap-[20px] h-[141px]">
            {imageUrl && <img className="w-[120px] h-full" src={imageUrl} alt={title} />}
            <div className="font-semibold tracking-[0.06rem] flex items-center">{title}</div>
        </div>
        <div className="flex justify-between h-[10px]">
            <div>PRICE:</div>
            <div>{price}</div>
        </div>
        <div className="flex justify-between items-center h-[48px]">
            <div>QUANTITY:</div>
            <div>
                <Button type="primary" size="cartsmall" >
                    <div className="flex gap-[30px]">
                        <div>-</div>
                        <div>1</div>
                        <div>+</div>
                    </div>
                </Button>
            </div>
        </div>
        <div className="flex justify-between h-[10px]">
            <div>SUBTOTAL:</div>
            <div className="text-brown-light">{subtotal}</div>
        </div>

        {children && <div className="px-6 pt-4 pb-2">{children}</div>}
    </div>
      )}
      
   
    </div>
    
  );
};

export default Cart;
