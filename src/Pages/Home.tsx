import { images } from "../assets/Images.tsx"
import { categories, bestSellers, newArrivals, title, sub, subr } from "../Data/Data.tsx"
import Card from "../Components/Ui/Card.tsx"
import Button from "../Components/Ui/Button.tsx"
import CartCard from "../Components/Ui/CartCard.tsx"
import TitleCard from "../Components/Ui/TitleCard.tsx"
import SubCard from "../Components/Ui/SubCard.tsx"
import SubCardR from "../Components/Ui/SubCardR.tsx"
import useMediaQuery from "../hooks/useMediaquery.ts"

export interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  
  return (
    <section>
      {/* {isAboveMediumScreens ? ():()} */}
      {isAboveMediumScreens ? ( 
        <div className="w-auto">
              <div className="h-[640px] flex flex-col gap-[10px]">
                <img src={images.platesd} className="w-full h-full"/>
                <div className="relative bg-brown-dark w-[400px] h-full flex flex-col items-center justify-center gap-[42px] -mt-[650px] ml-[105px]">
                  <div><img src={images.sign} className="w-[85.43px] h-[81.24px]"/></div>
                  <div className="text-text-title text-center flex flex-col gap-[20px] w-[273px]">
                    <span>Handcrafted in Viet Nam since 1650</span> 
                    <span className="text-[36px] font-bold font-[garamond] tracking-[0.04rem]">BAT TRANG DINNER SET</span>
                  </div>
                  <Button type="first" size="first">SHOP NOW</Button>
                </div>
              </div>
               <div className="bg-background-primary h-[451px] flex gap-[30px] py-[80px] px-[105px]">
                {categories.map((item, index) =>(
                  <Card
                    key={index}
                    title={item.title}
                    imageUrl={item.img}/>
                ))}
              </div>
              <div className="mx-[105px]">
                {title.map((item, index) =>(
                  <TitleCard
                    key={index}
                    title={item.title}
                    description={item.description}
                    imageUrl={item.img}/>
                ))}
              </div>
              <div className="mb-[100px] mx-[105px]">
                <h1 className="font-bold text-center m-[30px] text-[30px] text-text-primary font-[garamond]">BEST SELLERS</h1>
                <div className="grid grid-cols-4 gap-[12px] ">
                  {bestSellers.map((item, index) => (
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
              <div className="mx-[105px]">
                {sub.map((item, index) =>(
                  <SubCard
                    key={index}
                    title={item.title}
                    description={item.description}
                    imageUrl={item.img}/>
                ))}
                {subr.map((item, index) =>(
                  <SubCardR
                    key={index}
                    title={item.title}
                    description={item.description}
                    imageUrl={item.img}/>
                ))}
              </div>
              <div className="mt-[70px] mx-[105px]">
                <h1 className="font-bold font-[garamond] text-center m-[30px] text-[30px]">DISCOVER NEW ARRIVALS</h1>
                <div className="grid grid-cols-4 gap-[12px]">
                  {newArrivals.map((item, index) => (
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
              <div className="w-auto px-[105px]">
                <h1 className="font-bold font-[garamond] text-center text-[30px] p-[30px] ">OUR BLOG</h1>
                <div className="flex">
                    <div className="bg-background-secondary flex flex-col items-center justify-center text-center px-[60px] py-[64px] h-[385px] w-[555px]">
                        <p className="text-[18px] text-text-tertiary font-semibold tracking-[0.06rem]">TABLEWARE</p>
                        <div className="size-[24px]"></div>
                        <h1 className="text-[28px] font-bold font-[garamond] text-text-primary tracking-[0.04rem]">THE SECRETS TO A KITCHEN ROOM</h1>
                        <div className="size-[24px]"></div>
                        <p className="text-[16px] text-text-secondary">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.</p>
                        <div className="size-[24px]"></div>
                      <Button type="secondary" size="none">READ MORE</Button>
                    </div>
                    <div><img src={images.blog} className="h-[383px] w-[555px]"/></div>
                  </div>
              </div>

              <div className="bg-background-primary flex flex-col items-center justify-center text-center h-[315px] p-[40px]">
                  <p className="text-[16px] text-text-tertiary font-semibold">Sign up for emails</p>
                  <div className="size-[24px]"></div>
                  <h1 className="text-[28px] tracking-[0.04rem] font-bold font-[garamond] text-text-primary">FOR NEWS, COLLECTIONS & MORE</h1>
                  <div className="size-[24px]"></div>
                  <input type="text" placeholder="Enter your email address" className="text-text-primary border-b-[1px] border-text-primary w-[389px] text-center p-2 placeholder:text-[16px] placeholder:text-text-primary"/>
                  <div className="size-[32px]"></div>
                <Button type="primary" size="small">SIGN UP</Button>
              </div>



        </div>
        ) :(
            <div className="w-[430px]">
              <div className="grid-rows-2 h-[752px] mb-[50px]">
                <div><img src={images.plates} className="w-full h-[398px]"/></div>
                <div className="bg-brown-dark h-[354px] flex flex-col items-center justify-center gap-[30px]">
                  <div><img src={images.sign} className="w-[50.04px] h-[47.59px]"/></div>
                  <div className="text-text-title text-center"><p className="text-[16px]">Handcrafted in Viet Nam since 1650</p> <h1 className="text-[36px] font-bold font-[garamond] tracking-[0.04rem]">BAT TRANG <br /> DINNER SET</h1></div>
                  <Button type="first" size="first">SHOP NOW</Button>
                </div>
              </div>
              <div className="bg-background-primary h-[351px] px-[20px] flex overflow-x-scroll scrollbar-hide ">
                <div className="flex gap-[30px]">
                  {categories.map((item, index) =>(
                    <Card
                      key={index}
                      title={item.title}
                      imageUrl={item.img}/>
                  ))}
                </div>
              </div>
              <div>
                {title.map((item, index) =>(
                  <TitleCard
                    key={index}
                    title={item.title}
                    description={item.description}
                    imageUrl={item.img}/>
                ))}
              </div>

              <div className="h-[2292px] py-[40px] px-[20px]">
                <h1 className="font-bold text-center text-[36px] text-text-primary font-[garamond]">BEST SELLERS</h1>
                <div className="size-[48px]"></div>
                <div className="grid grid-cols-2 justify-items-center px-[10px] gap-[40px]">
                    {bestSellers.map((item, index) => (
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

              <div>
                {sub.map((item, index) =>(
                  <SubCard
                    key={index}
                    title={item.title}
                    description={item.description}
                    imageUrl={item.img}/>
                ))}
                {subr.map((item, index) =>(
                  <SubCard
                    key={index}
                    title={item.title}
                    description={item.description}
                    imageUrl={item.img}/>
                ))}
              </div>

              <div className="h-[1212px] py-[40px] px-[20px]">
                <h1 className="font-bold font-[garamond] text-center text-[29.9px] ">DISCOVER NEW ARRIVALS</h1>
                <div className="size-[48px]"></div>
                <div className="grid grid-cols-2 justify-items-center px-[10px] gap-[40px]">
                   {newArrivals.map((item, index) => (
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

              <div className="h-[1093px] py-[30px]">
                <h1 className="font-bold font-[garamond] text-center text-[30px] ">OUR BLOG</h1>
                <div>
                  <div><img src={images.blog} className="h-[297px]"/></div>
                  <div className="bg-background-secondary flex flex-col items-center justify-center text-center p-[40px] h-[337px]">
                      <p className="text-[18px] text-text-tertiary font-semibold tracking-[0.06rem]">TABLEWARE</p>
                      <div className="size-[24px]"></div>
                      <h1 className="text-[28px] font-bold font-[garamond] text-text-primary tracking-[0.04rem]">THE SECRETS TO A KITCHEN ROOM</h1>
                      <div className="size-[24px]"></div>
                      <p className="text-[16px] text-text-secondary">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.</p>
                      <div className="size-[24px]"></div>
                    <Button type="secondary" size="none">READ MORE</Button>
                  </div>
                  <div className="bg-background-primary flex flex-col items-center justify-center text-center h-[315px] p-[40px]">
                      <p className="text-[16px] text-text-tertiary font-semibold">Sign up for emails</p>
                      <div className="size-[24px]"></div>
                      <h1 className="text-[28px] tracking-[0.04rem] font-bold font-[garamond] text-text-primary">FOR NEWS, COLLECTIONS & MORE</h1>
                      <div className="size-[24px]"></div>
                      <input type="text" placeholder="Enter your email address" className="text-text-primary border-b-[1px] border-text-primary w-full text-center p-2 placeholder:text-[16px] placeholder:text-text-primary"/>
                      <div className="size-[32px]"></div>
                    <Button type="primary" size="small">SIGN UP</Button>
                  </div>
                </div>
              </div>
            </div>
          
        )}
        
    </section>
  )
}

export default Home