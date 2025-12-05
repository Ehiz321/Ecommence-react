import { images, icons } from "../assets/Images.tsx"
import CartCard from "../Components/Ui/Cart.tsx"
import Button from "../Components/Ui/Button.tsx"
import useMediaQuery from "../hooks/useMediaquery.ts"

export interface CartProps {}

const Cart: React.FC<CartProps> = ({}) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  
  return (
    <section>
      {isAboveMediumScreens ? ( 
        <div className="flex flex-col gap-[50px] w-[1440px] pt-[20px] pb-[80px] px-[165px]">
            <div className="flex gap-[10px]">
              <span className="text-text-tertiary">Home</span>
              <span className="text-text-primary">/</span>
              <span className="text-text-primary">Shopping Cart</span>
            </div>
            <div className="flex flex-col gap-[40px]">
              <span className="text-[24px] text-text-primary font-semibold">Cart (3 item)</span>
              <div>
                <div className="bg-text-primary text-background-primary text-[14px] font-semibold  tracking-[0.06rem] flex items-center  gap-[10px] h-[48px]">
                  <div className="w-[50px] h-[20px] flex justify-center"><img src={icons.trash}/></div>
                  <div className="w-[120px] h-[20px] flex justify-center">PHOTO</div>
                  <div className="w-[400px] h-[20px] flex justify-center">PRODUCT</div>
                  <div className="w-[180px] h-[20px] flex justify-center">PRICE</div>
                  <div className="w-[130px] h-[20px] flex justify-center">QUALITY</div>
                  <div className="w-[180px] h-[20px] flex justify-center">SUBTOTAL</div>
                </div>
                <div>
                  <CartCard title="PORCELAIN DINNER PLATE (27CM)" icon={icons.close} imageUrl={images.mariblue} price="$59" subtotal="$98"/>
                  <CartCard title="OPHELIA MATTE NATRUAL VASE" icon={icons.close} imageUrl={images.valovase} price="$168" subtotal="$168"/>
                  <CartCard title="PORCELAIN DINNER PLATE" icon={icons.close} imageUrl={images.julo} price="$70" subtotal="$70"/>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-[10px]">
                  <input type="text" placeholder="Coupon code" className="w-[206px] h-[48px] border-text-primary border-[1px] py-[21px] px-[16px] placeholder:text-[14px] placeholder:text-text-tertiary"/>
                  <Button type="tertiary" size="foot">APPLY COUPON</Button>
                </div>

                <Button type="tertiary" size="foot">UPDATE CART</Button>
              </div>
              <div className="flex justify-end">
                  <div className="flex flex-col gap-[40px] bg-text-primary text-background-primary h-[267px] w-[540px] py-[40px] px-[50px]">
                    <span className="text-[20px] font-semibold">Cart totals</span>
                    <div className="flex flex-col gap-[20px]">
                        <div className="flex justify-between font-semibold h-[12px]">
                            <span>Subtotal</span>
                            <span>$465.00</span>
                        </div>
                        <div className="flex justify-between font-semibold h-[12px]">
                            <span>Cart totals</span>
                            <span>$500.00</span>
                        </div>
                    </div>
                    <Button type="footer" size="full">PROCEED TO CHECKOUT</Button>
                  </div>
              </div>
            </div>
        </div>
        ) :(
        <div className="flex flex-col gap-[50px] w-[430px] pt-[20px] pb-[80px] px-[20px]">
            <div className="flex gap-[10px]">
              <span className="text-text-tertiary">Home</span>
              <span className="text-text-primary">/</span>
              <span className="text-text-primary">Shopping Cart</span>
            </div>
            <div className="flex flex-col gap-[40px]">
              <span className="text-[24px] text-text-primary font-semibold">Cart (3 item)</span>
              <div>
                <CartCard title="PORCELAIN DINNER PLATE (27CM)" icon={icons.close} imageUrl={images.mariblue} price="$59" subtotal="$98"/>
                <CartCard title="OPHELIA MATTE NATRUAL VASE" icon={icons.close} imageUrl={images.valovase} price="$168" subtotal="$168"/>
                <CartCard title="PORCELAIN DINNER PLATE" icon={icons.close} imageUrl={images.julo} price="$70" subtotal="$70"/>
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <input type="text" placeholder="Coupon code" className="w-full h-[48px] border-text-primary border-[1px] py-[21px] px-[16px] placeholder:text-[14px] placeholder:text-text-tertiary"/>
              <Button type="tertiary" size="full">APPLY COUPON</Button>
              <Button type="tertiary" size="full">UPDATE CART</Button>
            </div>
            <div className="flex flex-col gap-[40px] bg-text-primary text-background-primary h-[247px] py-[30px] px-[20px]">
              <span className="text-[20px] font-semibold">Cart totals</span>
              <div className="flex flex-col gap-[20px]">
                  <div className="flex justify-between font-semibold h-[12px]">
                      <span>Subtotal</span>
                      <span>$465.00</span>
                  </div>
                  <div className="flex justify-between font-semibold h-[12px]">
                      <span>Cart totals</span>
                      <span>$500.00</span>
                  </div>
              </div>
              <Button type="footer" size="full">PROCEED TO CHECKOUT</Button>
            </div>
        </div>
        )}
        
    </section>
  )
}

export default Cart