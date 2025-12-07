import { Link } from "react-router-dom";

export interface NavlinkProps {
    to: string;
    label: string;

}

const Navlink: React.FC<NavlinkProps> = ({to,  label}) =>{
     return (
    <Link to={to}> 
    <span className="text-[14px]">{label} </span>
    </Link>
  );
}

export default Navlink;
