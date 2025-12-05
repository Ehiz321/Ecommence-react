import { icons } from "../assets/Images.tsx"
import { shop, shopd } from "../Data/Data.tsx"
import CartCard from "../Components/Ui/CartCard.tsx"
import useMediaQuery from "../hooks/useMediaquery.ts"

export interface ShopProps {}

const Shop: React.FC<ShopProps> = ({}) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  
  return (
    <section>
      {isAboveMediumScreens ? ( 
        <div className="w-[1440px] pt-[20px] pb-[60px] px-[165px] gap-[50px]">
          <div className="flex gap-[15px] mb-[40px] mt-[20px] text-[14px]">
            <span className="text-text-tertiary">Home</span> 
            <span className="text-text-primary">/</span>
            <span className="text-text-primary">Shop</span>
          </div>
          <div className="flex justify-between text-text-primary text-[14px] mb-[30px]">
              <div className="font-bold"><span>Showing 120 items</span></div>
              <div>
                <div className="flex gap-[10px]">
                    <span className="">Sort by:</span>
                    <div className="flex justify-between gap-[7px] w-[120px]">
                        <span>Name</span>
                        <button><img src={icons.down} /></button>
                    </div>
                </div>
              </div>
          </div>

          <div className="grid grid-cols-[0.5fr,2fr] gap-[60px] mb-[50px]">

            <div className="text-text-senary text-[14px] border-text-tertiary w-[200px]">
              <div>
                <div className="flex flex-col gap-[10px] border-t-2 ">
                  <span className="font-bold mt-[20px] text-text-primary">Category</span>
                  <div className="flex items-center gap-[10px]">
                    <input type="checkbox" className=" appearance-none size-[18px] rounded-none border-[1px] border-text-tertiary checked:border-text-primary"/>
                    <label>Dinnerware</label>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <input type="checkbox" className=" appearance-none size-[18px] rounded-none border-[1px] border-text-tertiary checked:border-text-primary"/>
                    <label>Ceramic</label>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <input type="checkbox" className=" appearance-none size-[18px] rounded-none border-[1px] border-text-tertiary checked:border-text-primary"/>
                    <label>Furniture</label>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <input type="checkbox" className=" appearance-none size-[18px] rounded-none border-[1px] border-text-tertiary checked:border-text-primary"/>
                    <label>Decor Art</label>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <input type="checkbox" className=" appearance-none size-[18px] rounded-none border-[1px] border-text-tertiary checked:border-text-primary"/>
                    <label>Gifts sets</label>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-[10px] border-t-2 my-[20px]">
                  <span className="font-bold mt-[20px] text-text-primary">Price Range</span>
                  <div className="flex items-center gap-[10px]">
                    <input type="checkbox" className=" appearance-none size-[18px] rounded-none border-[1px] border-text-tertiary checked:border-text-primary"/>
                    <label>$0 - $10</label>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <input type="checkbox" className=" appearance-none size-[18px] rounded-none border-[1px] border-text-tertiary checked:border-text-primary"/>
                    <label>$10 - $50</label>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <input type="checkbox" className=" appearance-none size-[18px] rounded-none border-[1px] border-text-tertiary checked:border-text-primary"/>
                    <label>$50 - $100</label>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <input type="checkbox" className=" appearance-none size-[18px] rounded-none border-[1px] border-text-tertiary checked:border-text-primary"/>
                    <label>$100 - $200</label>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <input type="checkbox" className=" appearance-none size-[18px] rounded-none border-[1px] border-text-tertiary checked:border-text-primary"/>
                    <label>&gt; $200 </label>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-[10px] border-t-2 my-[20px]">
                  <span className="font-bold mt-[20px] text-text-primary">Color</span>
                  <div className="flex gap-[10px]">
                    <div className="flex items-center">
                      <input type="checkbox" className=" appearance-none size-[18px] rounded-none border-[1px] border-text-tertiary checked:border-text-primary"/>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className=" appearance-none size-[18px] rounded-none bg-brown-light checked:border-text-primary"/>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className=" appearance-none size-[18px] rounded-none bg-checkbox-green checked:border-text-primary"/>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className=" appearance-none size-[18px] rounded-none bg-checkbox-red checked:border-text-primary"/>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className=" appearance-none size-[18px] rounded-none bg-checkbox-violet checked:border-text-primary"/>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-[10px] border-t-2 my-[20px]">
                  <span className="font-bold mt-[20px] text-text-primary">Tags</span>
                  <div className="flex items-center gap-[10px]">
                    <input type="checkbox" className=" appearance-none size-[18px] rounded-none border-[1px] border-text-tertiary checked:border-text-primary"/>
                    <label>Dinnerware</label>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <input type="checkbox" className=" appearance-none size-[18px] rounded-none border-[1px] border-text-tertiary checked:border-text-primary"/>
                    <label>Ceramic</label>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <input type="checkbox" className=" appearance-none size-[18px] rounded-none border-[1px] border-text-tertiary checked:border-text-primary"/>
                    <label>Furniture</label>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <input type="checkbox" className=" appearance-none size-[18px] rounded-none border-[1px] border-text-tertiary checked:border-text-primary"/>
                    <label>Decor Art</label>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <input type="checkbox" className=" appearance-none size-[18px] rounded-none border-[1px] border-text-tertiary checked:border-text-primary"/>
                    <label>Gifts sets</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-[30px]">
               {shopd.map((item, index) => (
                    <CartCard
                      key={index}
                      title={item.title}
                      price="$49.00"
                      description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit."
                      imageUrl={item.img}
                    />
                  ))}
            </div>

          </div>
          <div className="text-text-primary text-[14px] mb-[30px] flex gap-[2px] justify-end">
              <img src={icons.left} className="w-[6px] h-[11px] mx-[13px] mt-[10px]"/>
              <span className="bg-text-primary text-background-primary border-text-primary border-2 px-[13px] py-[5px]">1</span>
              <span className="px-[13px] py-[5px] border-text-primary border-2">2</span>
              <span className="px-[13px] py-[5px] border-background-primary border-2">3</span>
              <span className="px-[13px] py-[5px] border-background-primary border-2">4</span>
              <img src={icons.right} className="w-[6px] h-[11px] mx-[13px] mt-[10px]"/>
          </div>

              

        </div>
        ) :(
              
        <div className="w-[430px]">
              <div className="flex flex-col gap-[50px] h-[100px] pt-[20px] px-[20px] text-[14px]">
                  <div className="flex w-[390px] gap-[10px]">
                      <span className="text-text-tertiary">Home</span> 
                      <span className="text-text-primary">/</span>
                      <span className="text-text-primary">Shop</span>
                  </div>
                  <div className="flex justify-between text-text-primary">
                      <div className="flex gap-[6px]">
                          <img src={icons.filter} className=" h-[10px] mt-[5px]"/>
                          <span className="font-bold">FILTER</span>
                      </div>
                      <div className="flex gap-[10px]">
                        <span className="">Sort by:</span>
                        <div className="flex justify-between gap-[7px] w-[120px]">
                            <span>Name</span>
                            <button><img src={icons.down} /></button>
                        </div>
                      </div>
                  </div>
              </div>
                  
              <div className="flex flex-col gap-[31px] h-[2197px] px-[20px] pt-[23px]">
                  <div className=" font-semibold text-[14px]"><span>Showing 120 items</span></div>
                  <div className="grid grid-cols-2 gap-[40px] px-[10px] justify-items-center">
                    {shop.map((item, index) => (
                      <CartCard
                        key={index}
                        title={item.title}
                        price="$49.00"
                        description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit."
                        imageUrl={item.img}
                      />
                    ))}
                </div>
              </div>

              <div className="pb-[100px] ">
                <div className="text-text-primary text-[14px] flex gap-[2px] mt-[70px] -mb-[40px] justify-center">
                    <img src={icons.left} className="w-[6px] h-[11px] mx-[13px] mt-[10px]"/>
                    <span className="bg-text-primary text-background-primary border-text-primary border-[1px] px-[13px] py-[5px]">1</span>
                    <span className="px-[13px] py-[5px] border-text-primary border-[1px]">2</span>
                    <span className="px-[13px] py-[5px] border-background-primary border-[1px]">3</span>
                    <span className="px-[13px] py-[5px] border-background-primary border-[1px]">4</span>
                    <img src={icons.right} className="w-[6px] h-[11px] mx-[13px] mt-[10px]"/>
                </div>
              </div>
              

          </div>
              
          
        )}
        
    </section>
  )
}

export default Shop