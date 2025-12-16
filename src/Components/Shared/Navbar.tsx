import Navlink from "./Navlink.tsx"
import { icons } from "../../assets/Images.tsx"
import useMediaQuery from "../../hooks/useMediaquery.ts"

export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  return (
    <nav>
      {isAboveMediumScreens ? (
        <div className="flex items-center w-auto bg-background-primary border-b px-[105px] py-[28px] h-[82px] text-[14px]">
            <div className= "flex items-center justify-between w-full">
              <div className="w-[145px] h-[38.33px]">
                <img src={icons.logoblack} alt="logo" />
              </div>
              
              <div className="flex items-center justify-between  h-[10px] gap-[60px]">
                <Navlink label="Home" to="/" />
                <Navlink label="Shop" to="/Shop" />
                <Navlink label="About" to="/About" />
                <Navlink label="Contact" to="/Contact" />
              </div>
              
              <div className="flex items-center justify-between  h-[20px] gap-[24px]">
                <Navlink label="" to="/" icon={<img src={icons.search}/>}/>
                <Navlink label="" to="/" icon={<img src={icons.avatar}/>}/>
                <Navlink label="" to="/" icon={<img src={icons.heart}/>}/>
                <Navlink label="" to="/" icon={<img src={icons.shoppingcart}/>}/>
              </div>
            </div>
        </div>
      
      ) :(
        <div className="flex items-center justify-between w-[430px] bg-background-primary border-b p-[20px] h-[82px]">
            <div className="flex items-center justify-between w-full">
              <div>
                <Navlink label="" to="/" icon={<img src={icons.menu}/>}/>
              </div>
              <div>
                <img src={icons.logoblack} alt="logo" />
              </div>
              <div>
                <Navlink label="" to="/" icon={<img src={icons.shoppingcart}/>}/>
              </div>
            </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
