import { Navigate, useNavigate } from 'react-router-dom'

export function WarningAtEnd(props) {
    const navigate = useNavigate();
    return (
        <p className="text-sm font-light text-black">
            {props.text} <button onClick={() => {
                navigate(props.to);
            }} className="font-medium text-primary-800 hover:underline">{props.linkText}</button>
        </p>
    )
}