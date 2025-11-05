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
        <div className="flex flex-row items-center gap-[10px]" onClick={navigate(url)}>
            {svg}
            <span className="text-[16px] text-[#4D8170]">{texto}</span>
        </div>
    );
}

// falta adicionar o react router no projeto e na main.tsx pra fazer funcionar o useNavigate
// ver se o mouse trocar pra mãozinha, se não trocar usar o cursor-pointer
// adicionar o hover, mas antes deve criar os elementos transparents pra poder usar o hover neles.