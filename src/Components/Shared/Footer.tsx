import { icons } from "../../assets/Images.tsx"
import FootLink from "./FootLink.tsx"
import Button from "../Ui/Button.tsx"

import useMediaQuery from "../../hooks/useMediaquery.ts"

export interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  return (
    <nav>
      {isAboveMediumScreens ? (
      // <div className="bg-text-primary w-[1440px]">
      //   <div className="text-text-quaternary flex px-[80px] h-[318px] border-b-[1px] mx-[165px]">
      //       <div className="flex flex-col gap-[32px] w-[300px] my-[50px] mr-[50px]">
      //           <img src={icons.logowhite} alt="logo" className=" w-[145px]" />
      //           <p>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam</p>
      //           <Button type="footer" size="foot" ><span className="flex">GET STARTED <img src={icons.arrowright} className="size-[9px] mt-[5px] ml-[3px]"/></span></Button>
      //       </div>
      //       <div  className="flex items-center justify-between border-l-[1px] w-[486px] pl-[75px]">
      //           <div className="flex flex-col gap-[32px]">
      //             <div>
      //               <FootLink heading="ABOUT US" label="" to="/" />
      //             </div>
      //             <div className="flex flex-col gap-[9px]">
      //               <FootLink heading="" label="Mission" to="/" />
      //               <FootLink heading="" label="Our team" to="/" />
      //               <FootLink heading="" label="Awards" to="/" />
      //               <FootLink heading="" label="Testimonials" to="/" />
      //               <FootLink heading="" label="Privacy policy" to="/" />
      //             </div>
                    
                    
      //           </div>
      //           <div className="flex flex-col gap-[32px]">
      //             <div>
      //               <FootLink heading="SERVICES" label="" to="/" />
      //             </div>
      //             <div className="flex flex-col gap-[9px]">
      //               <FootLink heading="" label="Web design" to="/" />
      //               <FootLink heading="" label="Web development" to="/" />
      //               <FootLink heading="" label="Mobile design" to="/" />
      //               <FootLink heading="" label="UI/UX design" to="/" />
      //               <FootLink heading="" label="Branding design" to="/" />
      //             </div>
                    
                    
      //           </div>
      //           <div className="flex flex-col gap-[32px]">
      //             <div>
      //               <FootLink heading="PORTFOLIO" label="" to="/" />
      //             </div>
      //             <div className="flex flex-col gap-[9px]">
      //               <FootLink heading="" label="Corporate websites" to="/" />
      //               <FootLink heading="" label="E-commerce" to="/" />
      //               <FootLink heading="" label="Mobile apps" to="/" />
      //               <FootLink heading="" label="Landing pages" to="/" />
      //               <FootLink heading="" label="UI/UX projects" to="/" />
      //             </div>
                    
                    
      //           </div>
      //       </div>
      //   </div>
      //   <div className="p-[20px] text-center">
      //     <span className="text-text-quinary">Copyright &copy; 2023 Moon| All Rights Reserved |
      //       <span className="text-text-tertiary"><FootLink heading="" label="Terms and Conditions" to="/"></FootLink></span> |
      //       <span className="text-text-tertiary"><FootLink heading="" label="Privacy Policy" to="/"></FootLink> </span>
      //       </span>
      //   </div>
      // </div>
      <div className="w-[1440px] px-[165px] bg-text-primary">
        <div className="w-full flex justify-between px-[80px] text-text-quaternary">
          <div className="w-[303.45px] h-[215.33px]">
            <div className="size-[48px]"></div>
            <img src={icons.logowhite} alt="logo" className=" w-[145px] h-[38.33pspan]" />
            <div className="size-[24px]"></div>
            <span className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma</span>
            <div className="size-[32px]"></div>
            <Button type="footer" size="foot" ><span className="flex">GET STARTED <img src={icons.arrowright} className="size-[9px] mt-[5px] ml-[3px]"/></span></Button>
          </div>

          <hr className="bg-background-tertiary h-[318px] border"/>

          <div className="w-[486px] h-[248px] flex flex-col gap-[10px]">
          <div className="size-[48px]"></div>
            <div className="flex gap-[72px]">
              <div className="flex flex-col gap-[32px]">
                <span className="font-semibold tracking-[0.06rem]">ABOUT US</span>
                <div className="flex flex-col gap-[6px]">
                       <FootLink label="Mission" to="/" />
                       <FootLink label="Our team" to="/" />
                       <FootLink label="Awards" to="/" />
                       <FootLink label="Testimonials" to="/" />
                       <FootLink label="Privacy policy" to="/" />
                </div>
              </div>
              <div className="flex flex-col gap-[32px]">
                <span className="font-semibold tracking-[0.06rem]">SERVICES</span>
                <div className="flex flex-col gap-[6px]">
                       <FootLink label="Web design" to="/" />
                       <FootLink label="Web development" to="/" />
                       <FootLink label="Mobile design" to="/" />
                       <FootLink label="UI/UX design" to="/" />
                       <FootLink label="Branding design" to="/" />
                </div>
              </div>
              <div className="flex flex-col gap-[32px]">
                <span className="font-semibold tracking-[0.06rem]">PORTFOLIO</span>
                <div className="flex flex-col gap-[6px]">
                       <FootLink label="Corporate websites" to="/" />
                       <FootLink label="E-commerce" to="/" />
                       <FootLink label="Mobile apps" to="/" />
                       <FootLink label="Landing pages" to="/" />
                       <FootLink label="UI/UX projects" to="/" />
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="text-center w-full h-[86px] border-t-[2px] border-background-tertiary p-[32px] ">
          <span className="text-text-quinary">Copyright &copy; Moon </span>
          <span className="text-background-tertiary">|</span>
          <span className="text-text-quinary"> All Rights Reserved </span>
          <span className="text-background-tertiary">|</span>
          <span className="text-text-tertiary"><u> Terms and Conditions </u></span>
          <span className="text-background-tertiary">|</span>
          <span className="text-text-tertiary"><u> Privacy Policy</u></span>

        </div>
      </div>
      ) :(
        <div className="bg-text-primary w-[430px] px-[20px] pt-[30px]">
          <div className="text-text-quaternary grid grid-rows-1 gap-[30px] w-[390px]">
            <div className="flex flex-col w-[303.45px] h-[199.33px] gap-[30px]">
                <img src={icons.logowhite} alt="logo" className=" w-[145px] h-[38.33px]" />
                <p className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma</p>
                <Button type="footer" size="foot" ><span className="flex">GET STARTED <img src={icons.arrowright} className="size-[9px] mt-[5px] ml-[3px]"/></span></Button>
            </div>
            <hr />
            <div  className="grid grid-cols-2 gap-[30px]">
                <div className="flex flex-col gap-[30px]">
                  <div>
                <span className="font-semibold tracking-[0.06rem]">ABOUT US</span>
                  </div>
                  <div className="flex flex-col gap-[24px]">
                    <FootLink label="Mission" to="/" />
                    <FootLink label="Our team" to="/" />
                    <FootLink label="Awards" to="/" />
                    <FootLink label="Testimonials" to="/" />
                    <FootLink label="Privacy policy" to="/" />
                  </div>
                    
                    
                </div>
                <div className="flex flex-col gap-[30px]">
                  <div>
                <span className="font-semibold tracking-[0.06rem]">ABOUT US</span>
                  </div>
                  <div className="flex flex-col gap-[24px]">
                    <FootLink label="Web design" to="/" />
                    <FootLink label="Web development" to="/" />
                    <FootLink label="Mobile design" to="/" />
                    <FootLink label="UI/UX design" to="/" />
                    <FootLink label="Branding design" to="/" />
                  </div>
                    
                    
                </div>
                <div className="flex flex-col gap-[30px]">
                  <div>
                <span className="font-semibold tracking-[0.06rem]">ABOUT US</span>
                  </div>
                  <div className="flex flex-col gap-[24px]">
                    <FootLink label="Corporate websites" to="/" />
                    <FootLink label="E-commerce" to="/" />
                    <FootLink label="Mobile apps" to="/" />
                    <FootLink label="Landing pages" to="/" />
                    <FootLink label="UI/UX projects" to="/" />
                  </div>
                    
                    
                </div>
            </div>
            <hr />
        </div>
        <div className="flex flex-col p-[20px] justify-center items-center text-[16px]">
          <span className="text-text-quinary">Copyright &copy; 2023 Moon</span>
          <span className="text-text-quinary">All Rights Reserved </span>
          <span className="flex gap-[5px]">
            <u className="text-text-tertiary"><FootLink label="Terms and Conditions" to="/"></FootLink></u>
            <span className="text-background-tertiary">|</span>
            <u className="text-text-tertiary"><FootLink label="Privacy Policy" to="/"></FootLink></u>
          </span>
          
          
        </div>
        </div>
      )}
    </nav>
  )
}

export default Footer
