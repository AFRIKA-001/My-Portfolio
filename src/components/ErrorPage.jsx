import NavigationBar from "./NavigationBar";
import { PlugZap } from "lucide-react";
import { Link } from "react-router-dom";

function ErrorMessage(){
    return(
<>

<div className="my-20">
    <PlugZap className="mx-auto text-red-600 animate-pulse h-8 w-8 lg:h-16 lg:w-16" />
    <h1 className=" text-lg lg:text-5xl text-red-600 text-center pb-4 lg:pb-10">404 - Page Not Found</h1>
    <p className="  text-lg lg:text-2xl text-center lg:font-mono text-white pb-4">The page you are looking for does not exist.</p>
    <button className="bg-red-600 hover:bg-red-700 text-white flex mx-auto font-bold py-2 px-4 rounded cursor-pointer animate-bounce">
     <Link to="/"> Go Back</Link>
    </button>
</div>

</>


    );
}
export default ErrorMessage;    