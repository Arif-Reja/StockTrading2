import Image from "next/image";


interface PriceProps{
    src : string;
    alt : string;
    width : number;
    height : number;
    text : string;
}

export default function Price({src, alt, width, height, text} : PriceProps){
    return (
        <div className="flex">
            <Image src={src} alt={alt} width={width} height={height} />
            <p className="text-[10px] pt-[22px]">{text}</p>
        </div>
    )
}