import FootLink from "./FootLink.tsx"
import logow from "../../assets/Icons/logow.png"
import arrowright from "../../assets/Icons/arrowright.png"
import Button from "../Ui/Button.tsx"

import useMediaQuery from "../../hooks/useMediaquery.ts"

export interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  const flexBetween = "flex items-center justify-between"
  const col = "flex flex-col"
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  return (
    <nav>
      {isAboveMediumScreens ? (
      <div className="bg-text-primary">
        <div className="text-text-quaternary flex px-[80px] h-[318px] border-b-2 mx-[104px]">
            <div className={ `${col} gap-[32px] w-[300px] my-[50px] mr-[50px]`}>
                <img src={logow} alt="logo" className=" w-[145px]" />
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam</p>
                <Button type="footer" size="foot" ><span className="flex">GET STARTED <img src={arrowright} className="size-[9px] mt-[5px] ml-[3px]"/></span></Button>
            </div>
            <div  className= {`${flexBetween} border-l-2 w-[486px] pl-[75px]`}>
                <div className={`${col} gap-[32px]`}>
                  <div>
                    <FootLink heading="ABOUT US" label="" to="/" />
                  </div>
                  <div className={`${col} gap-[9px]`}>
                    <FootLink heading="" label="Mission" to="/" />
                    <FootLink heading="" label="Our team" to="/" />
                    <FootLink heading="" label="Awards" to="/" />
                    <FootLink heading="" label="Testimonials" to="/" />
                    <FootLink heading="" label="Privacy policy" to="/" />
                  </div>
                    
                    
                </div>
                <div className={`${col} gap-[32px]`}>
                  <div>
                    <FootLink heading="SERVICES" label="" to="/" />
                  </div>
                  <div className={`${col} gap-[9px]`}>
                    <FootLink heading="" label="Web design" to="/" />
                    <FootLink heading="" label="Web development" to="/" />
                    <FootLink heading="" label="Mobile design" to="/" />
                    <FootLink heading="" label="UI/UX design" to="/" />
                    <FootLink heading="" label="Branding design" to="/" />
                  </div>
                    
                    
                </div>
                <div className={`${col} gap-[32px]`}>
                  <div>
                    <FootLink heading="PORTFOLIO" label="" to="/" />
                  </div>
                  <div className={`${col} gap-[9px]`}>
                    <FootLink heading="" label="Corporate websites" to="/" />
                    <FootLink heading="" label="E-commerce" to="/" />
                    <FootLink heading="" label="Mobile apps" to="/" />
                    <FootLink heading="" label="Landing pages" to="/" />
                    <FootLink heading="" label="UI/UX projects" to="/" />
                  </div>
                    
                    
                </div>
            </div>
        </div>
        <div className="p-[20px] text-center">
          <span className="text-text-quinary">Copyright &copy; 2023 Moon| All Rights Reserved |
            <span className="text-text-tertiary"><FootLink heading="" label="Terms and Conditions" to="/"></FootLink></span> |
            <span className="text-text-tertiary"><FootLink heading="" label="Privacy Policy" to="/"></FootLink> </span>
            </span>
        </div>
      </div>
      ) :(
        <div className="bg-text-primary p-[20px]">
          <div className="text-text-quaternary grid grid-rows-1">
            <div className={`${col} gap-[32px] border-b-2 pb-[40px]`}>
                <img src={logow} alt="logo" className=" w-[145px]" />
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma</p>
                <Button type="footer" size="foot" ><span className="flex">GET STARTED <img src={arrowright} className="size-[9px] mt-[5px] ml-[3px]"/></span></Button>
            </div>
            <div  className="grid grid-cols-2 border-b-2 pb-[40px]">
                <div className={`${col} gap-[20px] mt-[40px]`}>
                  <div>
                    <FootLink heading="ABOUT US" label="" to="/" />
                  </div>
                  <div className={`${col} gap-[6px]`}>
                    <FootLink heading="" label="Mission" to="/" />
                    <FootLink heading="" label="Our team" to="/" />
                    <FootLink heading="" label="Awards" to="/" />
                    <FootLink heading="" label="Testimonials" to="/" />
                    <FootLink heading="" label="Privacy policy" to="/" />
                  </div>
                    
                    
                </div>
                <div className={`${col} gap-[20px] mt-[40px]`}>
                  <div>
                    <FootLink heading="SERVICES" label="" to="/" />
                  </div>
                  <div className={`${col} gap-[6px]`}>
                    <FootLink heading="" label="Web design" to="/" />
                    <FootLink heading="" label="Web development" to="/" />
                    <FootLink heading="" label="Mobile design" to="/" />
                    <FootLink heading="" label="UI/UX design" to="/" />
                    <FootLink heading="" label="Branding design" to="/" />
                  </div>
                    
                    
                </div>
                <div className={`${col} gap-[20px] mt-[40px]`}>
                  <div>
                    <FootLink heading="PORTFOLIO" label="" to="/" />
                  </div>
                  <div className={`${col} gap-[6px]`}>
                    <FootLink heading="" label="Corporate websites" to="/" />
                    <FootLink heading="" label="E-commerce" to="/" />
                    <FootLink heading="" label="Mobile apps" to="/" />
                    <FootLink heading="" label="Landing pages" to="/" />
                    <FootLink heading="" label="UI/UX projects" to="/" />
                  </div>
                    
                    
                </div>
            </div>
        </div>
        <div className={`${col} p-[20px] justify-center items-center text-[16px]`}>
          <span className="text-text-quinary">Copyright &copy; 2023 Moon</span>
          <span className="text-text-quinary">All Rights Reserved </span>
          <span className="flex gap-[5px]">
            <u className="text-text-tertiary"><FootLink heading="" label="Terms and Conditions" to="/"></FootLink></u>
            <span className="text-background-tertiary">|</span>
            <u className="text-text-tertiary"><FootLink heading="" label="Privacy Policy" to="/"></FootLink></u>
          </span>
          
          
        </div>
        </div>
      )}
    </nav>
  )
}

export default Footer
