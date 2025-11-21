import Navlink from "./Navlink.tsx"
import logo from "../../assets/Icons/logo.png"
import menu from "../../assets/Icons/menu.png"
import search from "../../assets/icons/search.png"
import heart from "../../assets/icons/heart.png"
import avatar from "../../assets/icons/avatar.png"
import shoppingcart from "../../assets/icons/shopping-cart.png"
import useMediaQuery from "../../hooks/useMediaquery.ts"

export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const flexBetween = "flex items-center justify-between"
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  return (
    <nav>
      {isAboveMediumScreens ? (
      <div className={`${flexBetween} top-0 z-30 w-full py-5 bg-background-primary`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className= {`${flexBetween} w-full gap-16`}>
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div className= {`${flexBetween} gap-[60px]`}>
              <Navlink label="Home" to="/" />
              <Navlink label="Shop" to="/" />
              <Navlink label="About" to="/" />
              <Navlink label="Contact" to="/" />
            </div>
            <div className= {`${flexBetween} gap-[24px]`}>
              <Navlink label="" to="/" icon={<img src={search}/>}/>
              <Navlink label="" to="/" icon={<img src={avatar}/>}/>
              <Navlink label="" to="/" icon={<img src={heart}/>}/>
              <Navlink label="" to="/" icon={<img src={shoppingcart}/>}/>
            </div>

          </div>

        </div>

      </div>
      ) :(
        <div className={`${flexBetween} top-0 z-30 w-full py-5 bg-background-primary`}>
          <div className={`${flexBetween} mx-auto w-5/6`}>
            <div className= {`${flexBetween} w-full gap-16`}>
              <div>
                <Navlink label="" to="/" icon={<img src={menu}/>}/>
              </div>
              <div>
                <img src={logo} alt="logo" />
              </div>
              <div>
                <Navlink label="" to="/" icon={<img src={shoppingcart}/>}/>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
