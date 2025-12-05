import useMediaQuery from "../hooks/useMediaquery.ts"
import { images } from "../assets/Images.tsx"
import {team} from "../Data/Data.tsx"
import Button from "../Components/Ui/Button.tsx"
import SubCardA from "../Components/Ui/SubCardA"
import SubCardRA from "../Components/Ui/SubCardRA"
import CardA from "../Components/Ui/CardA"

export interface AboutProps {}

const About: React.FC<AboutProps> = ({}) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

    return (
      <section>
        {isAboveMediumScreens ? (
            <div className="w-[1440px] px-[165px]">
                <div className="bg-background-primary h-[224px] flex flex-col items-center justify-center gap-[30px]">
                    <div className="text-center">
                        <h1 className="text-[36px] text-text-primary font-bold font-[garamond]">ABOUT MOON</h1>
                        <p className="text-[16px] text-text-secondary">Moon's handmade ceramic products have been around <br /> since 1650, let's explore our journey</p> 
                    </div>
                </div>
                <div className=" flex flex-col mb-[70px]">
                    <SubCardA title="1910" description="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices." imageUrl={images.cup}></SubCardA>
                    <SubCardRA title="1990" description="Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi. dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit " imageUrl={images.mug}></SubCardRA>
                    <SubCardA title="2010" description="Rutrum vitae risus eget, vulputate aliquam nisi ex gravida neque tempus. sit aliquam sit nullam neque ultrices. " imageUrl={images.blueplate}></SubCardA>
                </div>
                <div className="flex h-[400px]">
                    <img src={images.crafting} alt="crafting" className="w-[555px]"/>
                    <div className="text-text-primary py-[36px] px-[45px] w-[550.5px]">
                        <h1 className="text-[28px] font-[garamond] font-bold mb-[10px]">HOW WE WORKS</h1>
                        <div className="flex flex-col gap-[5px]">
                            <p className="font-bold text-[18px]">Product design</p>
                            <p className="text-text-secondary">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis.</p>
                            <p className="font-bold text-[18px]">Crafted</p>
                            <p className="text-text-secondary">Rutrum vitae risus eget, vulputate aliquam nisi ex gravida neque tempus.</p>
                            <p className="font-bold text-[18px]">Sell product</p>
                            <p className="text-text-secondary">Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi.</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <h1 className="text-[36px] text-center font-bold font-[garamond] my-[20px]">MEET OUR TEAM</h1>
                    <div className="flex gap-[20px]">
                        {team.map ((item, index) => (
                            <CardA
                                key={index}
                                title={item.title}
                                role={item.role}
                                imageUrl={item.img}/>
                        ))}
                    </div>

                </div>
                <div className="bg-background-primary flex flex-col items-center justify-center gap-6 text-center px-[50px] h-[400px]">
                    <p className="text-[18px] text-text-tertiary font-semibold">Sign up for emails</p> 
                    <h1 className="text-[37px] font-bold font-[garamond] text-text-primary ">FOR NEWS, COLLECTIONS & MORE</h1>
                    <input type="text" placeholder="Enter your email address" className="w-[389px] text-text-primary border-b-2 border-text-primary text-center p-2 placeholder:text-[16px] placeholder:text-text-secondary"/>
                    <Button type="primary" size="small">SIGN UP</Button>
                  </div>
            </div>
        ):(
            <div className="w-[430px]">
                <div className="bg-background-primary h-[248px] px-[20px] ">
                    <div className="flex flex-col justify-center items-center text-center w-[390px] h-[248px] py-[64px]">
                        <h1 className="text-[36px] text-text-primary font-bold font-[garamond]">ABOUT MOON</h1>
                        <div className="size-[24px]"></div>
                        <p className="text-[16px] text-text-secondary w-[309px]">Moon's handmade ceramic products have been around since 1650, let's explore our journey</p> 
                    </div>
                </div>
                <div className="">
                    <SubCardA title="1910" description="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices." imageUrl={images.cup} ></SubCardA>
                    <SubCardA title="1990" description="Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi. dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit" imageUrl={images.mug} ></SubCardA>
                    <SubCardA title="2010" description="Rutrum vitae risus eget, vulputate aliquam nisi ex gravida neque tempus. sit aliquam sit nullam neque ultrices." imageUrl={images.blueplate} ></SubCardA>
                </div>
                <div>
                    <img src={images.crafting} alt="crafting" className="w-full"/>
                    <div className="text-text-primary h-[371px] py-[36px] px-[20px]">
                        <h1 className="text-[28px] font-[garamond] font-bold tracking-[0.04rem]">HOW WE WORKS</h1>
                        <div className="size-[24px]"></div>
                        <div className="flex flex-col gap-[5px]">
                            <p className="font-semibold text-[18px]">Product design</p>
                            <p className="text-text-secondary">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis.</p>
                            <p className="font-semibold text-[18px]">Crafted</p>
                            <p className="text-text-secondary">Rutrum vitae risus eget, vulputate aliquam nisi ex gravida neque tempus.</p>
                            <p className="font-semibold text-[18px]">Sell product</p>
                            <p className="text-text-secondary">Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi.</p>
                        </div>
                    </div>
                </div>
                
                <div className="h-[535px] py-[36px]">
                    <h1 className="text-[36px] text-center font-bold font-[garamond]">MEET OUR TEAM</h1>
                    <div className="size-[48px]"></div>
                    <div className="flex gap-[20px] h-[379px] pl-[20px] ">
                        <CardA title="BERNIE PATTERSON" role="CEO & Founder" imageUrl={images.bernie}></CardA>
                        <CardA title="OPHELIA" role="Creative" imageUrl={images.opheli}></CardA>
                    </div>

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
        )}
      </section>
  )
}

export default About
