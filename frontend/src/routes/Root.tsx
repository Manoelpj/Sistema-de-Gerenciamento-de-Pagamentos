import { Outlet } from "react-router";
import Aside from "../components/sidebar/Aside";

export default function Root(){
    return(
        <div className="flex flex-row ">
            <Aside/>
            <Outlet/>
            {/* <Footer/> */}
        </div>
    );
}