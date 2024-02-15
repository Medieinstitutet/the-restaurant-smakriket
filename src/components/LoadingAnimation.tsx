import check from "../assets/uNI7346QZ7.json";
import Lottie  from "lottie-react";
import { useEffect } from "react";
import { UseGlobalContext } from "../context/GlobalContext";


export const LoadingAnimation = () => {

    const { setLoading, } = UseGlobalContext()



/* !!! TABORT -- RAD 14-26 */

    useEffect(() => {
        // Funktionen som körs efter en viss tid
        const delayedFunction = () => {
         if(setLoading)
          setLoading(false)
        };
    
        // Starta setTimeout efter komponenten har monterats
        const timeoutId = setTimeout(delayedFunction, 3000); // Fördröj i 2 sekunder
    
        // Rensa upp efter komponenten har avmonterats
        return () => clearTimeout(timeoutId);
      }, []); 


  return (
    <section className="loadingContainer">

<Lottie
                    animationData={check}
                    loop={true}
                    autoPlay={true}
                    
    
                />


    </section>
  )
}
