import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { WarningAtEnd } from "../components/WarningAtEnd";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import logo from "../images/main-logo.png";

export function Signin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [displayError, setDisplayError] = useState("");
  const [checkForEmptyField, setCheckForEmptyField] = useState(false);

  return (
    <div className="bg-[#5CADFF] h-screen flex justify-center items-center">
      <div className="border-4 rounded-lg bg-white px-7 py-10 my-5 flex flex-col gap-4">
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          {<IoIosArrowRoundBack size={30} />}
        </button>

        <img src={logo} alt="trust pay logo" width="400px" />

        <Heading text={"Sign In"} />

        <SubHeading text={"Enter your credentials to access your account"} />

        <Input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          label={"Email"}
          placeholder={"jyotiranjan0216@example.com"}
        />

        <Input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          label={"Password"}
        />

        <Button
          onClick={async () => {
            if(username === "" || password === "") {
              setCheckForEmptyField(true);
              setDisplayError(() => false);
            }
            else {
              await axios
              .post("https://trust-pay-backend-lx2m.onrender.com/api/v1/user/signin", {
                username,
                password,
              })
              .then((response) => {
                console.log(response);
                console.log(response.data.message);
                console.log(response.data.token);
                localStorage.setItem("token", `Bearer ${response.data.token}`);
                navigate("/dashboard");
              })  
              .catch((error) => {
                setCheckForEmptyField(false);
                setDisplayError(() => true);
                console.log(error);
                console.log(error.response.data.message);
              });
            }
          }}
          text="Sign In"
        />

        {checkForEmptyField ? <div className="text-red-600">All fields are required!</div> : <></>}
        
        {displayError ? (
          <div className="text-red-600">Error: Email/password is incorrect</div>
        ) : (
          <div></div>
        )}

        <WarningAtEnd
          text="Don't have an account?"
          to="/signup"
          linkText="Sign Up"
        />
      </div>
    </div>
  );
}