import { useState, useEffect } from "react"
import { UserSendMoneyCard } from "./UserSendMoneyCard";
import axios from 'axios'

export function UserSearchAndDisplay({loggedInUser, userBalance}) {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`)
            .then((res) => {
                setUsers(res.data.user);
            })
    }, [filter])

    return (
        <div className="px-10 h-fit bg-[#002E6E]">
            <div className="flex flex-col gap-4">
                <div className="text-white font-bold text-xl sm:text-2xl">Users</div>
                <input onChange={(e) => {
                    setFilter(e.target.value);
                }} className="rounded border font-medium border-black w-full py-2 px-3 text-xs sm:text-2xl" placeholder="Search users..." />
            </div>
            {users.length === 0 ?
                <div className=" text-slate-400 bg-slate-200 text-5xl text-center place-content-center px-2 my-5 h-96">
                    No Contacts
                </div>
                :
                <div className="flex flex-col bg-slate-100 px-2 my-5 overflow-auto h-96">
                    {users.map((user, index) => {
                        return (user._id !== loggedInUser._id ? <div key={index}>
                        <UserSendMoneyCard key={user._id} user={user} />
                        <hr className="border border-gray-300" />
                    </div> : <></>)
                    })}
                </div>
            }

        </div>
    )
}