import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

export const SendMoney = () => {
    console.log("change");
    const [checkInsufficientBal, setCheckInsufficientBal] = useState(false);
    const [queryparm] = useSearchParams();      // get the params from search url.
    const receiverName = queryparm.get("name").split('-');
    const receiverID = queryparm.get("id");
    console.log("receiverID: ", receiverID);
    const [amount, setAmount] = useState(0);
    console.log("amount: ", amount);
    const navigate = useNavigate();
    return <div className="flex justify-center h-screen bg-gray-100">
        <div className="h-full flex flex-col justify-center">
            <div
                className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg"
            >
                <button onClick={() => {
                    navigate(-1);
                }}>{<IoIosArrowRoundBack size={30} />}</button>
                <div className="flex flex-col">
                    <h2 className="text-3xl font-bold text-center">Send Money To</h2>
                </div>
                <div className="p-6">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center">
                            <span className="text-2xl text-white">{receiverName[0][0].toUpperCase()}</span>
                        </div>
                        <h3 className="text-2xl font-semibold">{receiverName[0]} {receiverName[1]}</h3>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                // for="amount"
                            >
                                Amount (in Rs)
                            </label>
                            <input
                                onChange={(e) => {
                                    setAmount(() => e.target.value);
                                }}
                                type="number"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                id="amount"
                                placeholder="Enter amount"
                            />
                        </div>
                        {checkInsufficientBal ? <div className="text-red-600">*Insufficient Balance</div> : <></>}
                        <button onClick={async () => {
                            await axios
                                .post(`https://trust-pay-backend-lx2m.onrender.com/api/v1/account/transfer`, 
                                    {
                                        amount: amount,
                                        to: receiverID
                                    },
                                    {
                                        headers: {
                                            'Authorization': localStorage.getItem("token")  // sending current logged in user token
                                        }
                                    }
                                )
                                .then((response) => {
                                    setCheckInsufficientBal(false);
                                    // navigate("/dashboard");
                                    window.location.href = '/dashboard';  // Causes a full reload of the page, as we want to update the userBalance in dashboard page. So, if we use useNavigate(), then page doesn't loads instead only the part or components changes which are required. As we have used useEffect(, []) with emtpy[], so this only works when page loads. Thatswhy it's required to load the dashboard page.
                                })
                                .catch((err) => {
                                    setCheckInsufficientBal(() => true);
                                    console.log(err.response.data.message);
                                })
                        }} className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-cyan-500 hover:opacity-70 text-white">
                            Initiate Transfer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}