import MiddleNav from "./MiddleNav";
import BottonNav from "./BottonNav";

export default function NavBar(){
    return(
        <>
           <header className="w-full">
               <div className="lg:block">
                   <MiddleNav/>
               </div>
               <BottonNav/>
           </header>
        </>
    )
}
