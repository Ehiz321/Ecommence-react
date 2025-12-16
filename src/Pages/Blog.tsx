import { images, icons } from "../assets/Images.tsx"
import useMediaQuery from "../hooks/useMediaquery.ts"
import { blog, blogleft, blogright } from "../Data/Data.tsx"
import BlogCard from "../Components/Ui/BlogCard.tsx"

export interface BlogProps {}

const Blog: React.FC<BlogProps> = ({}) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

    return (
      <section>
        {isAboveMediumScreens ? (
            <div className="w-auto">
                <div className="w-full flex">
                    <img className="w-[625px] h-[429px]" src={images.birdcupd}/>
                    <div className="bg-background-secondary w-full h-[429px] flex flex-col items-center justify-center gap-6">
                        <div className="text-center flex flex-col gap-[10px] px-[80px]">
                            <h1 className="text-[28px] font-bold font-[garamond] text-text-primary tracking-[0.04rem]">WHAT'S IN A GARDEN SET?</h1>
                            <p className="text-[16px] text-text-secondary">Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi. dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit </p>
                        </div>
                    </div> 
                </div>

                <div className="grid grid-cols-[2fr,1fr] py-[50px] px-[105px] gap-[12px]">
                    <div>
                        <div className="flex gap-[12px] ">
                            <div className="flex flex-col gap-[30px]">
                            {blogleft.map((item, index) => (
                                <BlogCard
                                key={index}
                                title={item.title}
                                description={item.description}
                                icon={item.icon}
                                imageUrl={item.img}
                                />
                            ))}
                            </div>
                            <div className="flex flex-col">
                            {blogright.map((item, index) => (
                                <BlogCard
                                key={index}
                                title={item.title}
                                description={item.description}
                                icon={item.icon}
                                imageUrl={item.img}
                                />
                            ))}
                            </div>
                        </div>
                        <div className="text-text-primary text-[14px] flex gap-[2px] mt-[30px] justify-center">
                            <img src={icons.left} className="w-[6px] h-[11px] mx-[13px] mt-[10px]"/>
                            <span className="bg-text-primary text-background-primary border-text-primary border-2 px-[13px] py-[5px]">1</span>
                            <span className="px-[13px] py-[5px] border-text-primary border-2">2</span>
                            <span className="px-[13px] py-[5px] border-background-primary border-2">3</span>
                            <span className="px-[13px] py-[5px] border-background-primary border-2">4</span>
                            <img src={icons.right} className="w-[6px] h-[11px] mx-[13px] mt-[10px]"/>
                        </div>

                    </div>
                    <div className="">
                        <div className="text-text-primary grid gap-[40px]">
                            <div>
                                <input type="text" placeholder="Search for product..." className="border-text-primary border-2 w-[346px] h-[48px] placeholder:text-text-tertiary placeholder:text-[14px] placeholder:pl-[45px] rounded-none"/>
                                <img src={icons.search} className="-mt-[33px] ml-[15px]"/>
                            </div>
                            <h1 className="text-[24px] font-bold tracking-[.10rem]">POPULAR POSTS</h1>
                            <div className="flex">
                                <img src={images.birdcup} className="w-[119px] h-[80px]" />
                                <p className="pt-[30px] pl-[25px]">What’s in a Garden set?</p>
                            </div>
                            <div className="flex">
                                <img src={images.cups} className="w-[119px] h-[80px]" />
                                <p className="pt-[30px] pl-[25px]">How Can I Use Ceramic When I Decorate?</p>
                            </div>
                            <div className="flex">
                                <img src={images.flowerg} className="w-[119px] h-[80px]" />
                                <p className="pt-[30px] pl-[25px]">The secrets to a Living Room set?</p>
                            </div>

                            <div className="grid gap-[30px]">
                                <h1 className="text-[24px] font-bold tracking-[.10rem]">CATEGORIES</h1>
                                <ul className="text-text-senary grid gap-[10px]">
                                    <li>Dinnerware (3)</li>
                                    <li>Ceramic (5)</li>
                                    <li>Furniture (7)</li>
                                    <li>Decor Art (2)</li>
                                    <li>Gifts sets (8)</li>
                                </ul>
                            </div>
                            <div className="grid gap-[30px]">
                                <h1 className="text-[24px] font-bold tracking-[.10rem]">TAGS POST</h1>
                                <div className="text-text-tertiary text-[14px] flex gap-[10px]">
                                    <span className="border-text-tertiary border-2 p-[8px]">Ceramic</span>
                                    <span className="border-text-tertiary border-2 p-[8px]">Kitchen</span>
                                    <span className="border-text-tertiary border-2 p-[8px]">Gifts sets</span>
                                    <span className="border-text-tertiary border-2 p-[8px]">Lamp</span>
                                </div>
                                <div className="text-text-tertiary text-[14px] flex gap-[10px] -mt-[20px]">
                                    <span className="border-text-tertiary border-2 p-[8px]">Flower vase</span>
                                    <span className="border-text-tertiary border-2 p-[8px]">Plate</span>
                                    <span className="border-text-tertiary border-2 p-[8px]">Kitchen</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ):(
            <div className="flex flex-col w-[430px]">
                <div><img src={images.birdcup} className="w-full h-[398px]"/></div>
                <div className="bg-background-secondary h-[316px] flex flex-col py-[56px] px-[30px] text-center">
                    <h1 className="text-[28px] font-bold font-[garamond] text-text-primary tracking-[0.04rem]">WHAT'S IN <br /> A GARDEN SET?</h1>
                    <div className="size-[24px]"></div>
                    <p className="text-text-secondary">Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi. dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit </p>
                    <div className="size-[24px]"></div>
                </div>
                <div className="flex flex-col py-[40px] px-[20px] gap-[30px]">
                    <div className="flex flex-col gap-[30px]">
                        {blog.map((item, index) => (
                            <BlogCard
                            key={index}
                            title={item.title}
                            description={item.description}
                            icon={item.icon}
                            imageUrl={item.img}
                            />
                        ))}
                    </div>
                    <div className="text-text-primary text-[14px] flex gap-[2px] mb-[30px] justify-center">
                        <img src={icons.left} className="w-[6px] h-[11px] mx-[13px] mt-[10px]"/>
                        <span className="bg-text-primary text-background-primary border-text-primary border-2 px-[13px] py-[5px]">1</span>
                        <span className="px-[13px] py-[5px] border-text-primary border-2">2</span>
                        <span className="px-[13px] py-[5px] border-background-primary border-2">3</span>
                        <span className="px-[13px] py-[5px] border-background-primary border-2">4</span>
                        <img src={icons.right} className="w-[6px] h-[11px] mx-[13px] mt-[10px]"/>
                    </div>
                </div>

                <div className="text-text-primary flex flex-col py-[40px] px-[20px] gap-[60px]">
                    <div className="flex flex-col gap-[40px]">
                        <h1 className="text-[24px] font-semibold tracking-[0.06rem]">POPULAR POSTS</h1>
                        <div className="flex flex-col gap-[20px] ">
                            <div className="flex gap-[20px]">
                                <img src={images.birdcup} className="w-[119px] h-[80px]" />
                                <p className="flex items-center">What’s in a Garden set?</p>
                            </div>
                            <div className="flex gap-[20px]">
                                <img src={images.cups} className="w-[119px] h-[80px]" />
                                <p className="flex items-center">How Can I Use Ceramic When I Decorate?</p>
                            </div>
                            <div className="flex gap-[20px]">
                                <img src={images.flowerg} className="w-[119px] h-[80px]" />
                                <p className="flex items-center">The secrets to a Living Room set?</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-[40px]">
                        <h1 className="text-[24px] font-semibold tracking-[0.06rem]">CATEGORIES</h1>
                        <ul className="text-text-senary flex flex-col gap-[20px]">
                            <li>Dinnerware (3)</li>
                            <li>Ceramic (5)</li>
                            <li>Furniture (7)</li>
                            <li>Decor Art (2)</li>
                            <li>Gifts sets (8)</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-[40px]">
                        <h1 className="text-[24px] font-semibold tracking-[0.06rem]">TAGS POST</h1>
                        <div className="flex flex-col gap-[10px]">
                            <div className="text-text-tertiary text-[14px] flex gap-[10px]">
                                <span className="border-text-tertiary border-2 p-[8px]">Ceramic</span>
                                <span className="border-text-tertiary border-2 p-[8px]">Kitchen</span>
                                <span className="border-text-tertiary border-2 p-[8px]">Gifts sets</span>
                                <span className="border-text-tertiary border-2 p-[8px]">Lamp</span>
                            </div>
                            <div className="text-text-tertiary text-[14px] flex gap-[10px]">
                                <span className="border-text-tertiary border-2 p-[8px]">Flower vase</span>
                                <span className="border-text-tertiary border-2 p-[8px]">Plate</span>
                                <span className="border-text-tertiary border-2 p-[8px]">Kitchen</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
      </section>
  )
}

export default Blog
