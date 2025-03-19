import {SendMoneyBtn} from './SendMoneyBtn'
export function UserSendMoneyCard({ user }) {
    return (
        <div className="flex flex-row gap-2 justify-between items-center my-5">
            <div className="flex gap-2 justify-center items-center">
                {console.log("user.firstName")}
                <div className="rounded-full flex justify-center items-center w-8 h-8 bg-slate-400 text-xs sm:text-2xl">{user.firstName[0].toUpperCase()}</div>
                <div className="font-bold rext-xl text-xs sm:text-2xl">{user.firstName} {user.lastName}</div>
            </div>
            <SendMoneyBtn user={user} />
        </div>
    )
}