import type { JSX } from "react"
import { useNavigate } from "react-router-dom";

interface LinkNavegacaoProps{
    texto:string;
    url:string;
    svg: JSX.Element;
}

export default function LinkNavegacao({texto, url, svg}:LinkNavegacaoProps){
    const navigate = useNavigate();
    return(
            <div className="flex items-center
            w-[245px] h-[50px] 
            rounded-[5px] bg-transparent hover:bg-[#E6E6E6]
            transition-all duration-200 cursor-pointer">
                <div className="flex flex-row items-center gap-[8px] ml-[10px]">
                    {svg}
                    <span className="text-[16px] text-[#4D8170]">{texto}</span>
                </div>
            </div>
    );
}