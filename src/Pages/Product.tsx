import { images, icons } from "../assets/Images.tsx"
import CartCard from "../Components/Ui/CartCard.tsx"
import Button from "../Components/Ui/Button.tsx"
import useMediaQuery from "../hooks/useMediaquery.ts"

export interface ProductProps {}

const Product: React.FC<ProductProps> = ({}) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  
  return (
    <section>
      {isAboveMediumScreens ? ( 
        <div className="w-[1440px] px-[165px]">
            <div>
                    <div className="flex gap-[15px] mt-[20px]">
                        <span className="text-text-tertiary">Home</span> 
                        <span className="text-text-tertiary">/</span>
                        <span className="text-text-tertiary">Shop</span>
                        <span className="text-text-primary">/</span>
                        <span className="text-text-primary">Marin White Dinner Plate</span>
                    </div>
                    <div className="grid grid-cols-2 gap-[88px] mt-[50px]">
                        <div className="mb-[40px]">
                            <img src={images.blue}  className="h-[701px] w-[535p] mb-[40px]"/>
                            <div className="flex size-[100px] w-[535px] gap-[3px]">
                                <img src={images.blue1}  className=""/>
                                <img src={images.blue2}  className=""/>
                                <img src={images.blue3}  className=""/>
                                <img src={images.blue4}  className=""/>
                                <img src={images.blue5}  className=""/>
                            </div>
                        </div>
                        <div className="text-text-primary">
                            <span className="font-semibold text-[20px] tracking-[.10rem]">MARIN WHITE DINNER PLATE</span>
                            <div className="flex gap-[20px]">
                                <img src={icons.stars} className="w-[84px] h-[11px] mt-[7px]"/>
                                <span>(1256 Reviews)</span>
                                <span className="ml-[27px]">Stock: <span className="text-brown-light">In stock</span></span>
                            </div>
                            <div className="text-[24px] flex gap-[16px]">
                                <span>$35</span>
                                <span className="text-text-tertiary">$50</span>
                            </div>
                            <div className="flex flex-col gap-[10px] my-[20px]">
                                <span className="font-semibold">Color : <span className="text-brown-dark">Blue</span></span>
                                <div className="flex items-center gap-[24px]">
                                    <div className="bg-background-primary size-[46px] border-text-primary border-[1px] pl-[4px] pt-[4px] ">
                                    <input type="checkbox" className=" appearance-none size-[36px] rounded-none border-[1px] bg-checkbox-gray checked:border-text-primary"/>
                                    </div>
                                    <div>
                                    <input type="checkbox" className=" appearance-none size-[36px] rounded-none border-[1px]  checked:border-text-primary"/>
                                    </div>
                                    <div>
                                    <input type="checkbox" className=" appearance-none size-[36px] rounded-none bg-checkbox-orange checked:border-text-primary"/>
                                    </div>
                                    <div>
                                    <input type="checkbox" className=" appearance-none size-[36px] rounded-none bg-checkbox-darkblue checked:border-text-primary"/>
                                    </div>
                                    <div>
                                    <input type="checkbox" className=" appearance-none size-[36px] rounded-none bg-checkbox-peach checked:border-text-primary"/>
                                    </div>
                                    <div>
                                    <input type="checkbox" className=" appearance-none size-[36px] rounded-none bg-checkbox-pink checked:border-text-primary"/>
                                    </div>
                                    <div>
                                    <input type="checkbox" className=" appearance-none size-[36px] rounded-none bg-checkbox-ashblue checked:border-text-primary"/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-[15px] my-[50px]">
                                <div className="flex gap-[15px]">
                                    <Button type="primary" size="cartsmall" >
                                        <div className="flex gap-[30px]">
                                            <div>-</div>
                                            <div>1</div>
                                            <div>+</div>
                                        </div>
                                    </Button>
                                    <Button type="cart" size="cartmedium" >ADD TO CART</Button>
                                </div>
                                <div className="flex gap-[15px]">
                                    <Button type="primary" size="large" >BUY NOW</Button>
                                    <Button type="primary" size="mini" ><img src={icons.heart}/></Button>
                                </div>
                            </div>
                            <div>
                                <span className="font-semibold">Share this:</span>
                                <div className="flex gap-[20px] mt-[20px]">
                                    <a href="#"><img src={icons.fb} /></a>
                                    <a href="#"><img src={icons.x} /></a>
                                    <a href="#"><img src={icons.ig} /></a>
                                    <a href="#"><img src={icons.ln} /></a>
                                </div>
                            </div>
                            <div className="my-[50px]">
                                <div className="flex justify-between border-y-[1px] py-[15px] font-semibold">
                                    <span>Details</span>
                                    <button>+</button>
                                </div>
                                <div className="flex justify-between border-y-[1px] py-[15px] font-semibold">
                                    <span>Dimensions</span>
                                    <button>+</button>
                                </div>
                                <div className="flex justify-between border-y-[1px] py-[15px] font-semibold">
                                    <span>Reviews</span>
                                    <button>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
                
                <div className="mb-[100px] mt-[30px]">
                    <span className="text-text-primary text-[37px] font-bold font-[garamond]">SIMILAR ITEMS</span>
                    <div className="grid grid-cols-4 gap-[13px] mt-[20px]">
                        <CartCard title="PORCELAIN DINNER PLATE" price="$49.00" description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu." imageUrl={images.mari}></CartCard>
                        <CartCard title="OPHELIA MATTE NATURAL  VASE" price="$70.00" description="Lorem ipsum dolor sit amet conse bolli tetur." imageUrl={images.valo}></CartCard>
                        <CartCard title="PORCELAIN DINNER PLATE  VASE" price="$70.00" description="Lorem ipsum dolor sit amet conse bolli tetur." imageUrl={images.julo}></CartCard>
                        <CartCard title="LUANA BOWL  VASE" price="$70.00" description="Lorem ipsum dolor sit amet conse bolli tetur." imageUrl={images.rimbowl}></CartCard>
                    </div>
                </div>
        </div>
        ) :(
            <div className="w-[430px]">
                <div className="flex gap-[10px] pt-[20px] pb-[50px] px-[20px]">
                    <span className="text-text-tertiary">Home</span> 
                    <span className="text-text-tertiary">/</span>
                    <span className="text-text-tertiary">Shop</span>
                    <span className="text-text-primary">/</span>
                    <span className="text-text-primary">Marin White Dinner Plate</span>
                </div>
                <div className="flex flex-col gap-[40px] h-[1415px]">
                    <div className="flex flex-col gap-[36px] px-[20px]">
                        <div>
                            <img src={images.blue}  className="w-full h-[511px]"/>
                        </div>
                        
                        <div className="flex gap-[3px] size-[100px]">
                            <img src={images.blue1}  className=""/>
                            <img src={images.blue2}  className=""/>
                            <img src={images.blue3}  className=""/>
                            <img src={images.blue4}  className=""/>
                        </div>
                    </div>
                    <div className="text-text-primary flex flex-col gap-[48px] pt-[10px] pb-[30px]">
                        <div className="flex flex-col gap-[8px] px-[20px]">
                            <div className="font-semibold text-[20px] tracking-[0.06rem]">MARIN WHITE DINNER PLATE</div>
                            <div className="flex gap-[15px]">
                                <img src={icons.stars} className="w-[84px] h-[11px] mt-[7px]"/>
                                <span>(1256 Reviews)</span>
                                <span className="ml-[27px]">Stock: <span className="text-brown-light">In stock</span></span>
                            </div>
                            <div className="text-[24px] flex gap-[16px] tracking-[0.06rem]">
                                <span>$35</span>
                                <span className="text-text-tertiary">$50</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[16px] px-[20px]">
                            <span className="font-semibold">Color : <span className="text-brown-dark">Blue</span></span>
                            <div className="flex gap-[20px]">
                                <div className="bg-background-primary size-[48px] border-text-primary border-[1px] pt-[5px] pl-[5px] ">
                                <input type="checkbox" className=" appearance-none size-[36px] rounded-none border-[1px] bg-checkbox-gray border-text-tertiary checked:border-text-primary"/>
                                </div>
                                <div className="flex gap-[21px] pt-[5px]">
                                    <div>
                                    <input type="checkbox" className=" appearance-none size-[36px] rounded-none border-[1px]  checked:border-text-primary"/>
                                    </div>
                                    <div>
                                    <input type="checkbox" className=" appearance-none size-[36px] rounded-none bg-checkbox-orange checked:border-text-primary"/>
                                    </div>
                                    <div>
                                    <input type="checkbox" className=" appearance-none size-[36px] rounded-none bg-checkbox-darkblue checked:border-text-primary"/>
                                    </div>
                                    <div>
                                    <input type="checkbox" className=" appearance-none size-[36px] rounded-none bg-checkbox-peach checked:border-text-primary"/>
                                    </div>
                                    <div>
                                    <input type="checkbox" className=" appearance-none size-[36px] rounded-none bg-checkbox-pink checked:border-text-primary"/>
                                    </div>
                                    <div>
                                    <input type="checkbox" className=" appearance-none size-[36px] rounded-none bg-checkbox-ashblue checked:border-text-primary"/>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="flex flex-col gap-[12px] px-[20px]">
                            <div className="flex gap-[10px]">
                                <Button type="primary" size="cartsmall" >
                                    <div className="flex gap-[30px]">
                                        <div>-</div>
                                        <div>1</div>
                                        <div>+</div>
                                    </div>
                                </Button>
                                <Button type="cart" size="cartmedium" >ADD TO CART</Button>
                            </div>
                            <div className="flex gap-[10px]">
                                <Button type="primary" size="large" >BUY NOW</Button>
                                <Button type="primary" size="mini" ><img src={icons.heart}/></Button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[20px] px-[20px]">
                            <span className="font-semibold">Share this:</span>
                            <div className="flex gap-[20px]">
                                <a href="#"><img src={icons.fb} /></a>
                                <a href="#"><img src={icons.x} /></a>
                                <a href="#"><img src={icons.ig} /></a>
                                <a href="#"><img src={icons.ln} /></a>
                            </div>
                        </div>
                        <div className="px-[20px]">
                            <div className="flex justify-between border-y-[1px] py-[15px] font-semibold">
                                <span>Details</span>
                                <button>+</button>
                            </div>
                            <div className="flex justify-between border-y-[1px] py-[15px] font-semibold">
                                <span>Dimensions</span>
                                <button>+</button>
                            </div>
                            <div className="flex justify-between border-y-[1px] py-[15px] font-semibold">
                                <span>Reviews</span>
                                <button>+</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="py-[60px] px-[20px]">
                    <span className="text-text-primary text-[36px] font-bold font-[garamond]">SIMILAR ITEMS</span>
                    <div className="size-[48px]"></div>
                    <div className="grid grid-cols-2 gap-[30px]">
                        <CartCard title="PORCELAIN DINNER PLATE" price="$49.00" description="Lorem ipsum dolor sit amet conse bolli tetur." imageUrl={images.mari}></CartCard>
                        <CartCard title="OPHELIA MATTE NATURAL  VASE" price="$70.00" description="Lorem ipsum dolor sit amet conse bolli tetur." imageUrl={images.val}></CartCard>
                    </div>
                </div>
            </div>
        )}
        
    </section>
  )
}

export default Product