import { useContext } from "react";
import { AdminLoginContext } from "../context/AdminLogin";

export const Home = () => {


  const {adminLogin, setAdminLogin} = useContext(AdminLoginContext)

console.log(adminLogin)

  return <>{adminLogin ? 


<>

{/* en komponent för admin */}


</>

  : 
 
  
<>

{/* en komponent för kund */}


</>}</>;
};
