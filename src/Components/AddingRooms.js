import { useParams } from "react-router-dom";

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
            <h1>Hello {customer.firstName}! Please tell us which rooms you would like cleaned. </h1>
        </div>
    )
}