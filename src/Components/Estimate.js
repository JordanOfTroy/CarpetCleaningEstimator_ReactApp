import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function Estimate () {
    let { uuid } = useParams()
    let customer = {}
    let ppsf = 1
    let grandTotal = 0
    let homePath = `/`
    let navigate = useNavigate()

    let goHome = () => {
        setTimeout(() => {
            navigate(homePath)
        }, 100);
    }

    let getCustomer = (custID) => {
        let estimates = JSON.parse(localStorage.getItem('estimates'))
        estimates.forEach((estimate) => {
            if (estimate.uuid === custID) {
                customer = {...estimate}
            }
        })
    }

    let getTotal = (l, w) => {
        let total = l * w * ppsf
        // console.log("GTB", grandTotal)
        grandTotal += total
        // console.log("GTA", grandTotal)
        // console.log(`~~~~~`)
        return total
    }

    let displayAreas = (arr) => {
        let HTML = []
        arr.forEach((ele, i) => {
            let { roomName, roomLength, roomWidth} = ele
            let total = getTotal(roomLength, roomWidth )
            HTML.push (
            <div>
                <p>{roomName} - ${total}</p>
            </div>
            )
        })
        return HTML
    }

    let showCustomer = () => {
        getCustomer(uuid)
        return (
            <>
            <p>Thank you {customer.firstName}. Your carpet cleaning estimate has been outlined below.</p>
            {displayAreas(customer.areas)}
            <h1>Grand Total : ${grandTotal}</h1>
            <p>If you would like to schedule an appointment, please call 1-800-GOT-DIRT. Thank you.</p>
            </>
        )

    }

    return (
        <div>
            {showCustomer()}
            <button onClick={() => goHome()}>Start A New Estimate</button>
        </div>
    )
}