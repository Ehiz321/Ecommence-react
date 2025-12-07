import { icons } from "../assets/Images.tsx"
import Button from "../Components/Ui/Button.tsx"
import useMediaQuery from "../hooks/useMediaquery.ts"

export interface CheckOutProps {}

const CheckOut: React.FC<CheckOutProps> = ({}) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  
  return (
    <section>
      {isAboveMediumScreens ? ( 
        <div className="flex flex-col gap-[50px] w-[1440px] pt-[20px] pb-[80px] px-[165px]">
            <div className="flex gap-[10px]">
                <span className="text-text-tertiary">Home</span>
                <span className="text-text-tertiary">/</span>
                <span className="text-text-tertiary">Shipping</span>
                <span className="text-text-primary">/</span>
                <span className="text-text-primary">Payment</span>
            </div>

            <div className="grid grid-cols-[1.7fr,1fr] gap-[50px]">
                <div className="flex flex-col gap-[40px] text-text-primary w-full">
                    <span className="text-[20px] font-semibold">Billing Details</span>
                    <div className="flex flex-col gap-[24px]">
                      <div className="flex gap-[20px]">
                        <div className="flex flex-col gap-[12px]">
                          <label className="font-semibold text-[14px]">First Name *</label>
                          <input type="text" placeholder="Samatha Clarken" className="w-[323px] h-[48px] border-text-primary border py-[21px] px-[16px] placeholder:text-[14px] placeholder:text-text-tertiary"/>
                        </div>
                        <div className="flex flex-col gap-[12px]">
                          <label className="font-semibold text-[14px]">Last Name *</label>
                          <input type="text" placeholder="Clarken" className="w-[323px] h-[48px] border-text-primary border py-[21px] px-[16px] placeholder:text-[14px] placeholder:text-text-tertiary"/>
                        </div>
                      </div>
                      <div className="flex gap-[20px]">
                        <div className="flex flex-col gap-[12px]">
                          <label className="font-semibold text-[14px]">Company</label>
                          <input type="text" placeholder="Moon" className="w-[323px] h-[48px] border-text-primary border py-[21px] px-[16px] placeholder:text-[14px] placeholder:text-text-tertiary"/>
                        </div>
                        <div className="flex flex-col gap-[12px]">
                          <label className="font-semibold text-[14px]">Country / Region *</label>
                          <input type="text" placeholder="United states" className="w-[323px] h-[48px] border-text-primary border py-[21px] px-[16px] placeholder:text-[14px] placeholder:text-text-tertiary"/>
                          <img src={icons.down} className="absolute h-[12px] ml-[290px] mt-[53px]"/>
                        </div>
                      </div>

                        <div className="flex flex-col gap-[12px]">
                          <label className="font-semibold text-[14px]">Street address *</label>
                          <input type="text" placeholder="Address" className="w-full h-[48px] border-text-primary border py-[21px] px-[16px] placeholder:text-[14px] placeholder:text-text-tertiary"/>
                        </div>
                      <div className="flex gap-[20px]">
                        <div className="flex flex-col gap-[12px]">
                          <label className="font-semibold text-[14px]">Town / City *</label>
                          <input type="text" placeholder="City" className="w-[323px] h-[48px] border-text-primary border py-[21px] px-[16px] placeholder:text-[14px] placeholder:text-text-tertiary"/>
                        </div>
                        <div className="flex flex-col gap-[12px]">
                          <label className="font-semibold text-[14px]">State *</label>
                          <input type="text" placeholder="State" className="w-[323px] h-[48px] border-text-primary border py-[21px] px-[16px] placeholder:text-[14px] placeholder:text-text-tertiary"/>
                          <img src={icons.down} className="absolute h-[12px] ml-[290px] mt-[53px]"/>
                        </div>
                      </div>

                        <div className="flex flex-col gap-[12px]">
                          <label className="font-semibold text-[14px]">ZIP Code</label>
                          <input type="text" placeholder="Zip code" className="w-full h-[48px] border-text-primary border py-[21px] px-[16px] placeholder:text-[14px] placeholder:text-text-tertiary"/>
                        </div>
                        <div className="flex flex-col gap-[12px]">
                          <label className="font-semibold text-[14px]">Phone *</label>
                          <input type="text" placeholder="(123) 456 - 7890" className="w-full h-[48px] border-text-primary border py-[21px] px-[16px] placeholder:text-[14px] placeholder:text-text-tertiary"/>
                        </div>
                        <div className="flex flex-col gap-[12px]">
                          <label className="font-semibold text-[14px]">Email</label>
                          <input type="text" placeholder="example@youremail.com" className="w-full h-[48px] border-text-primary border py-[21px] px-[16px] placeholder:text-[14px] placeholder:text-text-tertiary"/>
                        </div>
                        <div className="flex flex-col gap-[12px]">
                          <label className="font-semibold text-[14px]">Order notes</label>
                          <input type="text" placeholder="Type your message here" className="w-full h-[128px] border-text-primary border pb-[100px] px-[16px] placeholder:text-[14px] placeholder:text-text-tertiary"/>
                        </div>

                        <div className="flex justify-between">
                            <div className="flex justify-start items-center gap-[8px] w-[333px]">
                                <img src={icons.left} className="size-[10px]"/>
                                <span className="font-semibold text-[12px] tracking-[0.08rem]">RETURN TO CART</span>
                            </div>
                            <div className="w-[333px]">
                                <Button type="tertiary" size="full">CONTINUE TO SHIPPING <img src={icons.arrowright}/></Button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col gap-[48px]">
                  <div className="flex flex-col gap-[40px] text-text-primary">
                    <div className="pb-[20px] h-[35px] flex justify-between border-b font-semibold">
                        <span className="text-[20px]">Product</span>
                        <span className="text-[20px]">Subtotal</span>
                    </div>

                    <div className="flex flex-col gap-[5px]">
                      <div className="flex justify-between">
                        <span className="text-[14px]">Porcelain Dinner Plate (27cm)</span>
                        <span className="text-[14px]">$59.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[14px]">Ophelia Matte Natural Vase</span>
                        <span className="text-[14px]">$168.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[14px]">Luana Bowl</span>
                        <span className="text-[14px]">$49.00</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[5px] font-semibold">
                      <div className="flex justify-between">
                        <span className="text-[14px]">Subtotal</span>
                        <span className="text-[14px]">$475.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[14px]">Shipping</span>
                        <span className="text-[14px]">$15.00</span>
                      </div>
                    </div>
                    <div className="pt-[20px] h-[35px] flex justify-between border-t font-semibold ">
                        <span className="font-semibold text-[20px]">Total</span>
                        <span className="font-semibold text-[20px]">$490.00</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[10px] p-[30px] bg-text-primary text-background-primary">
                    <span className="font-semibold text-[20px] ">Payment</span>
                    <div className="flex justify-between items-center py-[20px] border-b border-background-primary">
                      <div className="flex gap-[12px]">
                        <img src={icons.radio}/>
                        <span className="text-[14px]">Credit card</span>
                      </div>
                      <div className="flex gap-[10px]">
                        <img src={icons.visa}/>
                        <img src={icons.mastercard}/>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[20px] py-[20px]">
                      <input type="text" placeholder="Card number" className="border border-background-primary bg-text-primary w-full h-[42px] px-[10px] placeholder:text-[14px] placeholder:text-text-quinary "/>
                      <input type="text" placeholder="Name on card" className="border border-background-primary bg-text-primary w-full h-[42px] px-[10px] placeholder:text-[14px] placeholder:text-text-quinary "/>
                      <div className="flex gap-[20px]">
                        <input type="text" placeholder="Expiration date" className="border border-background-primary bg-text-primary w-full h-[42px] px-[10px] placeholder:text-[14px] placeholder:text-text-quinary "/>
                        <input type="text" placeholder="Security code" className="border border-background-primary bg-text-primary w-full h-[42px] px-[10px] placeholder:text-[14px] placeholder:text-text-quinary "/>
                      </div>
                    </div>
                    <div className="flex gap-[12px] py-[20px] w-full h-[64px] border-t border-background-primary">
                      <img src={icons.circle}/>
                      <img src={icons.paypal}/>
                    </div>
                    <Button type="footer" size="full">PLACE ORDER</Button>

                  </div>
                </div>
            </div>          
        </div>
        ) :(
        <div className="w-[430px] flex flex-col pt-[20px] pb-[80px] px-[20px] gap-[50px]">
            <div className="flex gap-[10px]">
                <span className="text-text-tertiary">Home</span>
                <span className="text-text-tertiary">/</span>
                <span className="text-text-tertiary">Shipping</span>
                <span className="text-text-primary">/</span>
                <span className="text-text-primary">Payment</span>
            </div>
            <div className="flex flex-col gap-[60px] text-text-primary">
                <span className="text-[20px] font-semibold">Billing Details</span>
                <div className="flex flex-col gap-[24px]">
                    <div className="flex flex-col gap-[12px]">
                      <label className="font-semibold text-[14px]">First Name *</label>
                      <input type="text" placeholder="Samatha Clarken" className="w-full h-[48px] border-text-primary border py-[21px] px-[16px] placeholder:text-[14px] placeholder:text-text-tertiary"/>
                    </div>
                    <div className="flex flex-col gap-[12px]">
                      <label className="font-semibold text-[14px]">Last Name *</label>
                      <input type="text" placeholder="Clarken" className="w-full h-[48px] border-text-primary border py-[21px] px-[16px] placeholder:text-[14px] placeholder:text-text-tertiary"/>
                    </div>
                    <div className="flex flex-col gap-[12px]">
                      <label className="font-semibold text-[14px]">Company</label>
                      <input type="text" placeholder="Moon" className="w-full h-[48px] border-text-primary border py-[21px] px-[16px] placeholder:text-[14px] placeholder:text-text-tertiary"/>
                    </div>
                    <div className="flex flex-col gap-[12px]">
                      <label className="font-semibold text-[14px]">Country / Region *</label>
                      <input type="text" placeholder="United states" className="w-full h-[48px] border-text-primary border py-[21px] px-[16px] placeholder:text-[14px] placeholder:text-text-tertiary"/>
                      <img src={icons.down} className="absolute h-[12px] ml-[350px] mt-[53px]"/>
                    </div>
                    <div className="flex flex-col gap-[12px]">
                      <label className="font-semibold text-[14px]">Street address *</label>
                      <input type="text" placeholder="Address" className="w-full h-[48px] border-text-primary border py-[21px] px-[16px] placeholder:text-[14px] placeholder:text-text-tertiary"/>
                    </div>
                    <div className="flex flex-col gap-[12px]">
                      <label className="font-semibold text-[14px]">Town / City *</label>
                      <input type="text" placeholder="City" className="w-full h-[48px] border-text-primary border py-[21px] px-[16px] placeholder:text-[14px] placeholder:text-text-tertiary"/>
                    </div>
                    <div className="flex flex-col gap-[12px]">
                      <label className="font-semibold text-[14px]">State *</label>
                      <input type="text" placeholder="State" className="w-full h-[48px] border-text-primary border py-[21px] px-[16px] placeholder:text-[14px] placeholder:text-text-tertiary"/>
                      <img src={icons.down} className="absolute h-[12px] ml-[350px] mt-[53px]"/>
                    </div>
                    <div className="flex flex-col gap-[12px]">
                      <label className="font-semibold text-[14px]">ZIP Code</label>
                      <input type="text" placeholder="Zip code" className="w-full h-[48px] border-text-primary border py-[21px] px-[16px] placeholder:text-[14px] placeholder:text-text-tertiary"/>
                    </div>
                    <div className="flex flex-col gap-[12px]">
                      <label className="font-semibold text-[14px]">Phone *</label>
                      <input type="text" placeholder="(123) 456 - 7890" className="w-full h-[48px] border-text-primary border py-[21px] px-[16px] placeholder:text-[14px] placeholder:text-text-tertiary"/>
                    </div>
                    <div className="flex flex-col gap-[12px]">
                      <label className="font-semibold text-[14px]">Email</label>
                      <input type="text" placeholder="example@youremail.com" className="w-full h-[48px] border-text-primary border py-[21px] px-[16px] placeholder:text-[14px] placeholder:text-text-tertiary"/>
                    </div>
                    <div className="flex flex-col gap-[12px]">
                      <label className="font-semibold text-[14px]">Order notes</label>
                      <input type="text" placeholder="Type your message here" className="w-full h-[141px] border-text-primary border pb-[100px] px-[16px] placeholder:text-[14px] placeholder:text-text-tertiary"/>
                    </div>

                    <div className="flex justify-center gap-[8px]">
                      <img src={icons.left}/>
                      <span className="font-semibold text-[12px] tracking-[0.08rem]">RETURN TO CART</span>
                    </div>

                    <Button type="tertiary" size="full">CONTINUE TO SHIPPING <img src={icons.arrowright}/></Button>
                </div>

            </div>
            <div className="flex flex-col gap-[48px]">
                <div className="flex flex-col gap-[40px] text-text-primary">
                   <div className="pb-[20px] h-[35px] flex justify-between border-b font-semibold">
                      <span className="text-[20px]">Product</span>
                      <span className="text-[20px]">Subtotal</span>
                  </div>

                  <div className="flex flex-col gap-[5px]">
                    <div className="flex justify-between">
                      <span className="text-[14px]">Porcelain Dinner Plate (27cm)</span>
                      <span className="text-[14px]">$59.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[14px]">Ophelia Matte Natural Vase</span>
                      <span className="text-[14px]">$168.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[14px]">Luana Bowl</span>
                      <span className="text-[14px]">$49.00</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[5px] font-semibold">
                    <div className="flex justify-between">
                      <span className="text-[14px]">Subtotal</span>
                      <span className="text-[14px]">$475.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[14px]">Shipping</span>
                      <span className="text-[14px]">$15.00</span>
                    </div>
                  </div>
                   <div className="pt-[20px] h-[35px] flex justify-between border-t font-semibold ">
                      <span className="font-semibold text-[20px]">Total</span>
                      <span className="font-semibold text-[20px]">$490.00</span>
                  </div>
                </div>
                <div className="flex flex-col gap-[10px] p-[30px] bg-text-primary text-background-primary">
                  <span className="font-semibold text-[20px] ">Payment</span>
                  <div className="flex justify-between items-center py-[20px] border-b border-background-primary">
                    <div className="flex gap-[12px]">
                      <img src={icons.radio}/>
                      <span className="text-[14px]">Credit card</span>
                    </div>
                    <div className="flex gap-[10px]">
                      <img src={icons.visa}/>
                      <img src={icons.mastercard}/>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[20px] py-[20px]">
                    <input type="text" placeholder="Card number" className="border border-background-primary bg-text-primary w-full h-[42px] px-[10px] placeholder:text-[14px] placeholder:text-text-quinary "/>
                    <input type="text" placeholder="Name on card" className="border border-background-primary bg-text-primary w-full h-[42px] px-[10px] placeholder:text-[14px] placeholder:text-text-quinary "/>
                    <input type="text" placeholder="Expiration date " className="border border-background-primary bg-text-primary w-full h-[42px] px-[10px] placeholder:text-[14px] placeholder:text-text-quinary "/>
                    <input type="text" placeholder="Security code" className="border border-background-primary bg-text-primary w-full h-[42px] px-[10px] placeholder:text-[14px] placeholder:text-text-quinary "/>
                  </div>
                  <div className="flex gap-[12px] py-[20px] w-full h-[64px] border-t border-background-primary">
                    <img src={icons.circle}/>
                    <img src={icons.paypal}/>
                  </div>
                  <Button type="footer" size="full">PLACE ORDER</Button>

                </div>
            </div>

        </div>
        )}
        
    </section>
  )
}

export default CheckOut