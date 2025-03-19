

export function Input(props) {
    return (
        <>
            <div className="flex flex-col">
                <div className="font-bold text-lg">{props.label}</div>
                <input onChange={props.onChange} className="border border-zinc-400 rounded px-3 h-10 min-w-full hover:border-black" type={props.inputType} placeholder={props.placeholder} />
                <div className="text-red-600">{props.emailWarning}</div>
            </div>
        </>
    )
}