import plates from "../assets/Images/plates.png"
import platesd from "../assets/Images/platesd.png"
import threeplates from "../assets/Images/three-plates.png"
import tableware from "../assets/Images/tableware.png"
import homedecor from "../assets/Images/home-decor.png"
import holiday from "../assets/Images/holiday.png"
import collection from "../assets/Images/collection.png"
import bowl from "../assets/Images/mercer-grey-bowl.png"
import holden from "../assets/Images/holden-vase.png"
import porcelain from "../assets/Images/porcelain.png"
import warrick from "../assets/Images/WarrickVase.png"
import opheliavase from "../assets/Images/Opheliavase.png"
import blue from "../assets/Images/marin-blue-salad-plate.png"
import alura from "../assets/Images/alura-cream-tall-vase.png"
import low from "../assets/Images/mercer-low-bowl.png"
import mariblue from "../assets/Images/mari-blue-salad-plate.png"
import valovase from "../assets/Images/valo-matte-white-vase.png"
import julo from "../assets/Images/julo-blue-salad-plate.png"
import rim from "../assets/Images/mercer-black-rim-bowl.png"
import soldering from "../assets/Images/soldering.png"
import pottery from "../assets/Images/pottery-wheel-process.png"
import sign from "../assets/Icons/logosign.png"
import blog from "../assets/Images/blog.png"
import Card from "../Components/Ui/Card.tsx"
import Button from "../Components/Ui/Button.tsx"
import CartCard from "../Components/Ui/CartCard.tsx"
import TitleCard from "../Components/Ui/TitleCard.tsx"
import SubCard from "../Components/Ui/SubCard.tsx"
import SubCardR from "../Components/Ui/SubCardR.tsx"
import useMediaQuery from "../hooks/useMediaquery.ts"

export interface Props {}

const HomePage: React.FC<Props> = ({}) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  
  return (
    <section>
      {/* {isAboveMediumScreens ? ():()} */}
      {isAboveMediumScreens ? ( 
        <div>
              <div className="h-[640px]">
                <div><img src={platesd} className="w-screen h-[600px]"/></div>
                <div className="absolute bg-brown-dark w-[390px] h-[600px] flex flex-col items-center justify-center gap-6 -mt-[600px] ml-[105px] ">
                  <div><img src={sign} className="w-[85px]"/></div>
                  <div className="text-text-title text-center"><p className="text-[20px]">Handcrafted in Viet Nam since 1650</p> <h1 className="text-[37px] font-bold">BAT TRANG <br /> DINNER SET</h1></div>
                  <Button type="first" size="medium">SHOP NOW</Button>
                </div>
              </div>
               <div className="bg-background-primary h-[300px] flex gap-[30px] mx-[104px] my-[40px]">
                <Card title="TABLEWARE" imageUrl={tableware}></Card>
                <Card title="HOME DECOR" imageUrl={homedecor}></Card>
                <Card title="HOLIDAY" imageUrl={holiday}></Card>
                <Card title="COLLECTION" imageUrl={collection}></Card>
              </div>
              <div className="mx-[104px]">
                <TitleCard title="UP TO 40% OFF OUR CHRISTMAS COLLECTION" description="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices." imageUrl={threeplates}></TitleCard>
              </div>
              <div className="mb-[100px] mx-[147px]">
                <h1 className="font-bold text-center m-[30px] text-[28px] tracking-[.30rem] text-text-primary">BEST SELLERS</h1>
                <div className="grid grid-cols-4 gap-[100px] justify-items-center ">
                  <CartCard title="SMALL ECRU CERAMIC COMPOTE" price="$49.00" description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit." imageUrl={bowl}></CartCard>
                  <CartCard title="WARRICK WHITE VASE 14" price="$49.00" description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit." imageUrl={holden}></CartCard>
                  <CartCard title="PORCELAIN DINNER PLATE" price="$49.00" description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit." imageUrl={porcelain}></CartCard>
                  <CartCard title="WARRRICK WHITE VASE" price="$49.00" description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit." imageUrl={warrick}></CartCard>
                  <CartCard title="ROUNDED DUAL HANDLED VASE" price="$49.00" description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit." imageUrl={opheliavase}></CartCard>
                  <CartCard title="MARIN WHITE DINNER PLATE" price="$49.00" description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit." imageUrl={blue}></CartCard>
                  <CartCard title="TALL CREAM CERAMIC VASE" price="$49.00" description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit." imageUrl={alura}></CartCard>
                  <CartCard title="LUANA BOWL" price="$49.00" description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit." imageUrl={low}></CartCard>
                </div>
              </div>
              <div className="mx-[104px]">
                <SubCard title="MADE IN VIET NAM SINCE 1450" description="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices." imageUrl={soldering}></SubCard>
                <SubCardR title="OUR HISTORY" description="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit " imageUrl={pottery}></SubCardR>
              </div>
              <div className="mt-[70px] mb-[100px] mx-[97px]">
                <h1 className="font-bold text-center mb-[40px] text-[28px] tracking-[.30rem]">DISCOVER NEW ARRIVALS</h1>
                <div className="grid grid-cols-4 gap-y-[100px] justify-items-center ">
                  <CartCard title="PORCELAIN DINNER PLATE" price="$49.00" description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit." imageUrl={mariblue}></CartCard>
                  <CartCard title="OPHELIA MATTE NATURAL VASE" price="$49.00" description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit." imageUrl={valovase}></CartCard>
                  <CartCard title="PORCELAIN DINNER PLATE" price="$49.00" description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit." imageUrl={julo}></CartCard>
                  <CartCard title="LUANA BOWL" price="$49.00" description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit." imageUrl={rim}></CartCard>
                </div>
              </div>
              <div className="tracking-[.05rem] mx-[104px] mb-[100px]">
                <h1 className="font-bold text-center mb-[40px] text-[28px] ">OUR BLOG</h1>
                <div className="flex mb-[50px]">
                  <div className="bg-background-secondary flex flex-col items-center justify-center gap-6 text-center px-[60px] w-[555px]">
                      <p className="text-[18px] text-text-tertiary font-semibold">TABLEWARE</p> 
                      <h1 className="text-[28px] font-bold text-text-primary">THE SECRETS TO A KITCHEN ROOM</h1>
                      <p className="text-[16px] text-text-secondary">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.</p>
                    <Button type="secondary">READ MORE</Button>
                  </div>
                  <div><img src={blog} className="w-[555px]"/></div>
                  
                </div>
                <div className="bg-background-primary flex flex-col items-center justify-center gap-6 text-center px-[50px]">
                    <p className="text-[18px] text-text-tertiary font-semibold">Sign up for emails</p> 
                    <h1 className="text-[28px] font-bold text-text-primary">FOR NEWS, COLLECTIONS & MORE</h1>
                    <input type="text" placeholder="Enter your email address" className="text-text-primary border-b-2 border-text-primary w-[389px] text-center p-2 placeholder:text-[16px] placeholder:text-text-primary "/>
                  <Button type="primary" size="small">SIGN UP</Button>
                </div>
              </div>



        </div>
        ) :(
            <div>
              <div className="grid-rows-2 h-[900px] mb-[50px]">
                <div><img src={plates} className="w-screen h-[500px]"/></div>
                <div className="bg-brown-dark h-[400px] flex flex-col items-center justify-center gap-6">
                  <div><img src={sign}/></div>
                  <div className="text-text-title text-center"><p className="text-[20px]">Handcrafted in Viet Nam since 1650</p> <h1 className="text-[37px] font-bold">BAT TRANG <br /> DINNER SET</h1></div>
                  <Button type="first" size="medium">SHOP NOW</Button>
                </div>
              </div>
              <div className="bg-background-primary h-[351px] flex gap-[55px] pl-[25px]">
                <Card title="TABLEWARE" imageUrl={tableware}></Card>
                <Card title="HOME D" imageUrl={homedecor}></Card>
              </div>
              <div>
                <TitleCard title="UP TO 40% OFF OUR CHRISTMAS COLLECTION" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia animi blanditiis nihil distinctio nobis. Consequuntur quae asperiores ex quis excepturi nostrum, eos eum nobis, ipsa illo similique dolorem quidem dolor." imageUrl={threeplates}></TitleCard>
              </div>

              <div className="mb-[100px]">
                <h1 className="font-bold text-center m-[30px] text-[37px] tracking-[.30rem] text-text-primary">BEST SELLERS</h1>
                <div className="grid grid-cols-2 gap-y-[100px] justify-items-center ">
                  <CartCard title="SMALL ECRU CERAMIC COMPOTE" price="$49.00" description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit." imageUrl={bowl}></CartCard>
                  <CartCard title="WARRICK WHITE VASE 14" price="$49.00" description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit." imageUrl={holden}></CartCard>
                  <CartCard title="PORCELAIN DINNER PLATE" price="$49.00" description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit." imageUrl={porcelain}></CartCard>
                  <CartCard title="WARRRICK WHITE VASE" price="$49.00" description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit." imageUrl={warrick}></CartCard>
                  <CartCard title="ROUNDED DUAL HANDLED VASE" price="$49.00" description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit." imageUrl={opheliavase}></CartCard>
                  <CartCard title="MARIN WHITE DINNER PLATE" price="$49.00" description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit." imageUrl={blue}></CartCard>
                  <CartCard title="TALL CREAM CERAMIC VASE" price="$49.00" description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit." imageUrl={alura}></CartCard>
                  <CartCard title="LUANA BOWL" price="$49.00" description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit Lorem ipsum ." imageUrl={low}></CartCard>
                </div>
              </div>

              <div>
                <SubCard title="MADE IN VIET NAM SINCE 1450" description="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices." imageUrl={soldering}></SubCard>
                <SubCard title="OUR HISTORY" description="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices." imageUrl={pottery}></SubCard>
              </div>

              <div className="mt-[50px] mb-[100px]">
                <h1 className="font-bold text-center mb-[40px] text-[37px] tracking-[.30rem]">DISCOVER NEW ARRIVALS</h1>
                <div className="grid grid-cols-2 gap-y-[100px] justify-items-center ">
                  <CartCard title="PORCELAIN DINNER PLATE" price="$49.00" description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit." imageUrl={mariblue}></CartCard>
                  <CartCard title="OPHELIA MATTE NATURAL VASE" price="$49.00" description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit." imageUrl={valovase}></CartCard>
                  <CartCard title="PORCELAIN DINNER PLATE" price="$49.00" description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit." imageUrl={julo}></CartCard>
                  <CartCard title="LUANA BOWL" price="$49.00" description="Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit Lorem ipsum dolor sit amet ." imageUrl={rim}></CartCard>
                </div>
              </div>

              <div className="tracking-[.30rem]">
                <h1 className="font-bold text-center mb-[40px] text-[37px] ">OUR BLOG</h1>
                <div className="grid grid-rows-3">
                  <div><img src={blog} className="w-screen h-[400px]"/></div>
                  <div className="bg-background-secondary flex flex-col items-center justify-center gap-6 text-center px-[50px] h-[400px]">
                      <p className="text-[18px] text-text-tertiary font-semibold">TABLEWARE</p> 
                      <h1 className="text-[37px] font-bold text-text-primary">THE SECRETS TO A KITCHEN ROOM</h1>
                      <p className="text-[16px] text-text-secondary">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.</p>
                    <Button type="secondary">READ MORE</Button>
                  </div>
                  <div className="bg-background-primary flex flex-col items-center justify-center gap-6 text-center px-[50px] h-[400px]">
                      <p className="text-[18px] text-text-tertiary font-semibold">Sign up for emails</p> 
                      <h1 className="text-[37px] font-bold text-text-primary">FOR NEWS, COLLECTIONS & MORE</h1>
                      <input type="text" placeholder="Enter your email address" className="text-text-primary border-b-2 border-text-primary w-full text-center p-2 placeholder:text-[16px] placeholder:text-text-primary"/>
                    <Button type="primary" size="small">SIGN UP</Button>
                  </div>
                </div>
              </div>
            </div>
          
        )}
        
    </section>
  )
}

export default HomePage