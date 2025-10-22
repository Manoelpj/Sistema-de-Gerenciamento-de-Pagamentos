interface TitleGenericProps{
    title:string;
}

export default function TitleGeneric({title}:TitleGenericProps){
    return(
        <h1 className="text-[#6366f1] text-[64px]">{title}</h1>
    )
}