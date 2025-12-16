import useMediaQuery from "../hooks/useMediaquery.ts"
import Button from "../Components/Ui/Button.tsx"
import { images, icons } from "../assets/Images.tsx"

export interface ContactProps {}

const Contact: React.FC<ContactProps> = ({}) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

    return (
      <section>
        {isAboveMediumScreens ? (
            <div className="w-auto">
                <div className="h-[545px] flex flex-col gap-[10px]">
                    <img src={images.cherryd} className="w-full h-full"/>
                    <div className="relative bg-text-primary w-[400px] h-full flex flex-col items-center justify-center gap-[42px] -mt-[555px] ml-[105px]">
                        <div><img src={icons.signbrown}/></div>
                        <div className="flex flex-col gap-[30px] text-text-title text-center">
                            <h1 className="text-[37px] font-bold font-[garamond] border-b-2 pb-[30px]">CONTACT US</h1>
                            <p className="text-[14px]">Follow us on social media</p>
                            <div className="flex justify-center gap-[16px]">
                                <a href=""><img src={icons.facebook}/></a>
                                <a href=""><img src={icons.twitter}/></a>
                                <a href=""><img src={icons.instagram}/></a>
                                <a href=""><img src={icons.linkedin}/></a>
                                <a href=""><img src={icons.youtube}/></a>
                            </div> 
                        </div>
                    </div>
                </div>

                <div className="text-center my-[30px]">
                    <h1 className="text-[37px] font-bold font-[garamond] text-text-primary">GET IN TOUCH WITH US</h1>
                    <span className="text-text-secondary">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit <br /> phasellus mollis sit aliquam sit nullam.</span>
                </div>
                <div className="text-center flex flex-col gap-[30px] mb-[30px]">
                    <div className="flex flex-col">
                        <span className="text-text-secondary font-bold">Office Hours:</span>
                        <span className="text-brown-light">Monday - Friday 8:00 am to 5:00am pm</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-text-secondary font-bold">Email:</span>
                        <span className="text-brown-light">contact@company.com</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-text-secondary font-bold">Phone:</span>
                        <span className="text-brown-light">(414) 687 - 5892</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-text-secondary font-bold">Location:</span>
                        <span className="text-brown-light">59 Middle Point Rd <br /> San Francisco, 80412</span>
                    </div>
                </div>

                <div className="text-text-primary mb-[50px] mx-[105px]">
                    <div className="grid grid-cols-2 gap-[30px] mb-[30px] ">
                        <div>
                            <label htmlFor="Name" className="font-bold">Name</label>
                            <input placeholder="Samatha Clarken" className="border-text-primary border-2 w-full h-[52px] px-[20px] placeholder:text-text-tertiary"/>
                        </div>
                        <div>
                            <label htmlFor="Name" className="font-bold">Email</label>
                            <input placeholder="example@youremail.com" className="border-text-primary border-2 w-full h-[52px] px-[20px] placeholder:text-text-tertiary"/>
                        </div>
                        <div>
                            <label htmlFor="Name" className="font-bold">Phone</label>
                            <input placeholder="(123) 456 - 7890" className="border-text-primary border-2 w-full h-[52px] px-[20px] placeholder:text-text-tertiary"/>
                        </div>
                        <div>
                            <label htmlFor="Name" className="font-bold">Company</label>
                            <input placeholder="Moon" className="border-text-primary border-2 w-full h-[52px] px-[20px] placeholder:text-text-tertiary"/>
                        </div>
                    </div>
                    <div className="mb-[30px]">
                        <label htmlFor="Name" className="font-bold">Message</label>
                        <input placeholder="Type your message here..." className="border-text-primary border-2 w-full h-[141px] pb-[100px] px-[20px] placeholder:text-text-tertiary"/>
                    </div>

                    <Button type="tertiary" size="full" ><span className="flex justify-center">SEND MESSAGE <img src={icons.arrowright} className="size-[12px] mt-[5.5px] ml-[3px]"/></span></Button>
                </div>
                <div>
                    <img src={images.mapd} alt="map" className="w-auto" />
                </div>

                
                
                
            </div>
        ):(
            <div className="w-[430px]">
                <div className="h-[752px]">
                    <div><img src={images.cherry} className="w-full h-[398px]"/></div>
                    <div className="bg-text-primary h-[354px] flex flex-col items-center justify-center gap-[30px]">
                        <div><img src={icons.signbrown} className="h-[47.59px] w-[50.04]"/></div>
                        <div className="flex flex-col gap-[30px] w-[246px] h-[184px] text-text-title text-center">
                            <h1 className="text-[36px] font-bold font-[garamond] tracking-[0.04rem]">CONTACT US</h1>
                            <div className="flex flex-col gap-[20px] border-t-[1px] py-[30px]">
                                <p className="text-[14px] font-semibold">Follow us on social media</p>
                                <div className="flex justify-center gap-[16px]">
                                    <a href=""><img src={icons.facebook}/></a>
                                    <a href=""><img src={icons.twitter}/></a>
                                    <a href=""><img src={icons.instagram}/></a>
                                    <a href=""><img src={icons.linkedin}/></a>
                                    <a href=""><img src={icons.youtube}/></a>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center text-center gap-[12px] h-[248px] py-[40px] px-[20px]">
                    <h1 className="text-[36px] font-bold font-[garamond] text-text-primary tracking-[0.02rem]">GET IN TOUCH WITH US</h1>
                    <span className="text-text-secondary w-[290px]">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.</span>
                </div>
                <div className="text-center flex flex-col gap-[30px] h-[238px] px-[20px] text-[14px]">
                    <div className="flex flex-col gap-[12px]">
                        <span className="text-text-secondary font-bold">Office Hours:</span>
                        <span className="text-brown-light">Monday - Friday 8:00 am to 5:00am pm</span>
                    </div>
                    <div className="flex flex-col gap-[12px]">
                        <span className="text-text-secondary font-bold">Email:</span>
                        <span className="text-brown-light">contact@company.com</span>
                    </div>
                    <div className="flex flex-col gap-[12px]">
                        <span className="text-text-secondary font-bold">Phone:</span>
                        <span className="text-brown-light">(414) 687 - 5892</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-[12px]">
                        <span className="text-text-secondary font-bold">Location:</span>
                        <span className="text-brown-light w-[146px]">59 Middle Point Rd San Francisco, 80412</span>
                    </div>
                </div>
                <div className="text-text-primary flex flex-col gap-[60px] py-[40px] px-[20px] mt-[100px] text-center ">
                    <div className="flex flex-col justify-start items-start gap-[12px] h-[74px]">
                        <label htmlFor="Name" className="font-semibold">Name</label>
                        <input placeholder="Samatha Clarken" className="border-text-primary border-[1px] w-full h-[52px] px-[16px] py-[21px] placeholder:text-text-tertiary"/>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-[12px] h-[74px]">
                        <label htmlFor="Name" className="font-semibold">Email</label>
                        <input placeholder="example@youremail.com" className="border-text-primary border-[1px] w-full h-[52px] px-[16px] py-[21px] placeholder:text-text-tertiary"/>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-[12px] h-[74px]">
                        <label htmlFor="Name" className="font-semibold">Phone</label>
                        <input placeholder="(123) 456 - 7890" className="border-text-primary border-[1px] w-full h-[52px] px-[16px] py-[21px] placeholder:text-text-tertiary"/>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-[12px] h-[74px]">
                        <label htmlFor="Name" className="font-semibold">Company</label>
                        <input placeholder="Moon" className="border-text-primary border-[1px] w-full h-[52px] px-[16px] py-[21px] placeholder:text-text-tertiary"/>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-[12px] h-[163px]">
                        <label htmlFor="Name" className="font-semibold">Message</label>
                        <input placeholder="Type your message here..." className="border-text-primary border-[1px] w-full h-[141px] pt-[21px] pb-[100px] px-[16px] placeholder:text-text-tertiary"/>
                    </div>

                    <Button type="tertiary" size="full" ><span className="flex gap-[3px] justify-center items-center"><span> SEND MESSAGE </span><img src={icons.arrowright} className="size-[8.4px]"/></span></Button>
                </div>
                <div>
                    <img src={images.map} alt="map" className="w-full" />
                </div>
                
            </div>
        )}
      </section>
  )
}

export default Contact
