export function Balance({userBalance}) {

    return (
        <div className="text-xl flex gap-3 px-10 sm:text-2xl">
            <div className=" font-bold">Your Balance</div>
            <div className="font-medium">${userBalance.toFixed(3)}</div>
        </div>
    )
}