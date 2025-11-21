import Button from "./Button";

export interface BlogCardProps {
  heading: string;  
  title: string;
  description: string;
  imageUrl?: string;
  children?: React.ReactNode;
};

const BlogCard: React.FC<BlogCardProps> = ({ title, imageUrl, description, children, heading }) => {
  return (
    <div className="h-[668px]">
        <div>{imageUrl && <img className="w-full h-[]" src={imageUrl} alt={title} />}</div>
        <div className="bg-background-secondary h-[] flex flex-col items-center justify-center gap-6">
            <div className="text-center flex flex-col gap-[10px]">
                <p className="text-[18px] font-semibold text-text-tertiary">{heading}</p>
                <h1 className="text-[37px] font-bold text-text-primary tracking-[.30rem]">{title}</h1>
                <p className="text-[16px] text-text-secondary px-[30px]">{description}</p>
            </div>
            <Button type="secondary">READ MORE</Button>
        </div> 
        <div className="h-[] flex flex-col items-center justify-center gap-6">
            <div className="text-center flex flex-col gap-[10px]">
                <p className="text-[18px] font-semibold text-text-tertiary">{heading}</p>
                <h1 className="text-[37px] font-bold text-text-primary tracking-[.30rem]">{title}</h1>
                
            </div>
            <Button type="secondary">SIGN UP</Button>
        </div> 
        <div>

        </div>
      

      {children && <div className="px-6 pt-4 pb-2">{children}</div>}
    </div>
  );
};

export default BlogCard;
