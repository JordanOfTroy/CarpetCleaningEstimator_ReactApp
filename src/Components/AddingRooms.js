import { useParams } from "react-router-dom";
import RoomList from "./RoomList";

export default function AddingRooms () {
    let { uuid } = useParams();
    let estimates = JSON.parse(localStorage.getItem('estimates'))
    let customer = {}
    
    estimates.forEach(estimate => {
        if (estimate.uuid === uuid) {
            customer = estimate
        }
    });

    return (
        <div>
            <p>Hello <span>{customer.firstName}</span>! Please tell us which rooms you would like cleaned. </p>
            
            <RoomList
                customer = {customer}
            />
        </div>
    )
} 