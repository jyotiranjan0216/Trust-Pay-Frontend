import { useNavigate } from 'react-router-dom'

export function SendMoneyBtn({ user }) {
    const navigate = useNavigate();
    return (
        <button onClick={() => {
            console.log("user data to send money: ", user);
            navigate("/sendmoney?id=" + user._id + "&name=" + user.firstName + "-" + user.lastName);
        }} className="bg-[#2260c4] rounded-lg font-semibold text-white px-4 py-2 text-xs lg:text-2xl text-nowrap hover:opacity-90">Send Money</button>
    )
}