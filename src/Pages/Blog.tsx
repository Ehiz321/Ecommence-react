import { images, icons } from "../assets/Images.tsx"
import useMediaQuery from "../hooks/useMediaquery.ts"
import { blog, blogleft, blogright, popularposts, tagspost1, tagspost2 } from "../Data/Data.tsx"
import { categories} from "../Data/List.tsx"
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
                        <div className="text-text-primary flex flex-col gap-[40px]">
                            <div>
                                <input type="text" placeholder="Search for product..." className="border-text-primary border-2 w-[346px] h-[48px] placeholder:text-text-tertiary placeholder:text-[14px] placeholder:pl-[45px] rounded-none"/>
                                <img src={icons.search} className="-mt-[33px] ml-[15px]"/>
                            </div>
                            <h1 className="text-[24px] font-bold tracking-[.10rem]">POPULAR POSTS</h1>
                            {popularposts.map((item, index) => (
                                <div key={index} className="flex gap-[20px]">
                                    <img src={item.img} className="w-[119px] h-[80px]" />
                                    <span className="flex items-center">{item.title}</span>
                                </div>
                            ))}


                            <div className="flex flex-col gap-[30px]">
                                <h1 className="text-[24px] font-bold tracking-[.10rem]">CATEGORIES</h1>
                                <ul className="text-text-senary flex flex-col gap-[10px]">
                                    {categories.map((item, index) => (
                                        <li key={index}>
                                             {item.name} ({item.count})
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-col gap-[30px]">
                                <h1 className="text-[24px] font-bold tracking-[.10rem]">TAGS POST</h1>
                                <div className="text-text-tertiary text-[14px] flex gap-[10px]">
                                    {tagspost1.map((item, index) => (
                                        <div key={index}>
                                            <span className="border-text-tertiary border p-[8px]">{item.title}</span>
                                        </div>
                                    ))}
                                </div>     
                                <div className="text-text-tertiary text-[14px] flex gap-[10px]">
                                    {tagspost2.map((item, index) => (
                                        <div key={index}>
                                            <span className="border-text-tertiary border p-[8px]">{item.title}</span>
                                        </div>
                                    ))}
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
                            {popularposts.map((item, index) => (
                                <div key={index} className="flex gap-[20px]">
                                    <img src={item.img} className="w-[119px] h-[80px]" />
                                    <span className="flex items-center">{item.title}</span>
                                </div>
                            ))}                    
                    </div>

                    <div className="flex flex-col gap-[40px]">
                        <h1 className="text-[24px] font-semibold tracking-[0.06rem]">CATEGORIES</h1>
                            <ul className="text-text-senary flex flex-col gap-[20px]">
                                {categories.map((item, index) => (
                                    <li key={index}>
                                            {item.name} ({item.count})
                                    </li>
                                ))}
                            </ul>
                    </div>
                    <div className="flex flex-col gap-[40px]">
                        <h1 className="text-[24px] font-semibold tracking-[0.06rem]">TAGS POST</h1>
                        <div className="flex flex-col gap-[30px]">
                                <div className="text-text-tertiary text-[14px] flex gap-[10px]">
                                    {tagspost1.map((item, index) => (
                                        <div key={index}>
                                            <span className="border-text-tertiary border p-[8px]">{item.title}</span>
                                        </div>
                                    ))}
                                </div>     
                                <div className="text-text-tertiary text-[14px] flex gap-[10px]">
                                    {tagspost2.map((item, index) => (
                                        <div key={index}>
                                            <span className="border-text-tertiary border p-[8px]">{item.title}</span>
                                        </div>
                                    ))}
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
