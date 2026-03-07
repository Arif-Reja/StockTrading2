

interface Props {
    heading : string,
    description : string
}

export default function Universe(props : Props){
    return (
        <div className="flex gap-3 flex-col">
            <h1 className="text-2xl font-medium text-gray-700">{props.heading}</h1>
            <p className="text-[16px] font-normal text-gray-600">{props.description}</p>
        </div>
    )
}