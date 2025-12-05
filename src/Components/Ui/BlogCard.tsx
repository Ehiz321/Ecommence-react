import useMediaQuery from "../../hooks/useMediaquery.ts"

export interface BlogCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  icon: string;
  children?: React.ReactNode;
};

const BlogCard: React.FC<BlogCardProps> = ({ title, imageUrl, icon, description, children}) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

  return (
    <div>
      {isAboveMediumScreens ? (
        <div className="flex flex-col w-[352px] h-[430px] gap-[30px]">
        <div>{imageUrl && <img className="w-full h-[235px]" src={imageUrl} alt={title} />}</div>
        <div className="flex flex-col gap-[10px]">
          <div className="flex gap-[14px] text-text-secondary font-semibold text-[12px]">
              {icon && <img src={icon} alt={title} />}
              <span className="text-[12px] pt-[3px]">Brain Clark</span>
              <span><hr className="w-[22.84px] mt-[11px] border-background-tertiary"/></span>
              <span className="text-[12px] pt-[3px]">Jan 24, 2024</span>
          </div>
          <div className="text-[18px] font-semibold text-text-primary">{title}</div>
          <div className="text-text-secondary text-[14px]">{description}</div>
        </div> 

      

      {children && <div className="px-6 pt-4 pb-2">{children}</div>}
    </div>
      ):(
        <div className="flex flex-col w-[390px] h-[430px] gap-[30px]">
        <div>{imageUrl && <img className="w-full h-[235px]" src={imageUrl} alt={title} />}</div>
        <div className="flex flex-col gap-[10px]">
          <div className="flex gap-[14px] text-text-secondary font-semibold text-[12px]">
              {icon && <img src={icon} alt={title} />}
              <span className="text-[12px] pt-[3px]">Brain Clark</span>
              <span><hr className="w-[22.84px] mt-[11px] border-background-tertiary"/></span>
              <span className="text-[12px] pt-[3px]">Jan 24, 2024</span>
          </div>
          <div className="text-[18px] font-semibold text-text-primary">{title}</div>
          <div className="text-text-secondary text-[14px]">{description}</div>
        </div> 

      

      {children && <div className="px-6 pt-4 pb-2">{children}</div>}
    </div>
      )}
    </div>
    
  );
};

export default BlogCard;
