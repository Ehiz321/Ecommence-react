import { images } from "../assets/Images.tsx"
import { categories, bestSellers, newArrivals } from "../Data/Data.tsx"
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
        <div className="w-[1440px]">
              <div style={{ backgroundImage: `url(${images.platesd})` }} className="h-[640px] px-[165px] flex flex-col gap-[10px]">
                <div className="bg-brown-dark w-[420px] h-[640px] flex flex-col items-center justify-center gap-[42px]">
                  <div><img src={images.sign} className="w-[85.43px] h-[81.24px]"/></div>
                  <div className="text-text-title text-center flex flex-col gap-[20px] w-[273px]">
                    <span>Handcrafted in Viet Nam since 1650</span> 
                    <span className="text-[36px] font-bold font-[garamond] tracking-[0.04rem]">BAT TRANG DINNER SET</span>
                  </div>
                  <Button type="first" size="first">SHOP NOW</Button>
                </div>
              </div>
               <div className="bg-background-primary h-[451px] flex gap-[30px] py-[80px] px-[165px]">
                {categories.map((item, index) =>(
                  <Card
                    key={index}
                    title={item.title}
                    imageUrl={item.img}/>
                ))}
              </div>
              <div className="mx-[165px]">
                <TitleCard title="UP TO 40% OFF OUR CHRISTMAS COLLECTION" description="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices." imageUrl={images.threeplates}></TitleCard>
              </div>
              <div className="mb-[100px] mx-[165px]">
                <h1 className="font-bold text-center m-[30px] text-[30px] text-text-primary font-[garamond]">BEST SELLERS</h1>
                <div className="grid grid-cols-4 gap-[30px] ">
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
              <div className="mx-[165px]">
                <SubCard title="MADE IN VIET NAM SINCE 1450" description="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices." imageUrl={images.soldering}></SubCard>
                <SubCardR title="OUR HISTORY" description="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit " imageUrl={images.pottery}></SubCardR>
              </div>
              <div className="mt-[70px] mx-[165px]">
                <h1 className="font-bold font-[garamond] text-center m-[30px] text-[30px]">DISCOVER NEW ARRIVALS</h1>
                <div className="grid grid-cols-4 gap-[30px]">
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
              <div className="w-[1440px] px-[165px]">
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
              <div className="bg-background-primary h-[351px]">
                <div className="flex gap-[20px] pl-[20px]">
                    <Card title="TABLEWARE" imageUrl={images.tableware}></Card>
                    <div className="flex flex-col gap-[23px]">
                      <img src={images.homed} className=""/>
                      <div className="flex justify-around">
                        <div className="font-semibold text-[18px] text-text-primary tracking-[0.06rem]">HOME D</div>
                      </div>
                    </div>
                </div>
              </div>
              <div>
                <TitleCard title="UP TO 40% OFF OUR CHRISTMAS COLLECTION" description="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices." imageUrl={images.threeplates}></TitleCard>
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
                <SubCard title="MADE IN VIET NAM SINCE 1450" description="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices." imageUrl={images.soldering}></SubCard>
                <SubCard title="OUR HISTORY" description="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices." imageUrl={images.pottery}></SubCard>
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