import { Link } from "react-router-dom";

export interface NavlinkProps {
    to: string;
    label: string;
    icon?: React.ReactNode;

}

const Navlink: React.FC<NavlinkProps> = ({to,  label, icon }) =>{
     return (
    <Link to={to}> 
    <span>{label} </span>
    {icon && <span>{icon}</span> }
    </Link>
  );
}

export default Navlink;
