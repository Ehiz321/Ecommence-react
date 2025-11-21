import { Link } from "react-router-dom";

export interface NavlinkProps {
    to: string;
    label: string; 
    heading : string;

}

const Navlink: React.FC<NavlinkProps> = ({to,  label, heading }) =>{
     return (
    <Link to={to}> 
    <span className="text-[14px]">{label} </span>
    <span className="font-bold text-[16px]">{heading}</span>
    </Link>
  );
}

export default Navlink;
