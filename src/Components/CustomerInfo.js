import { useNavigate } from "react-router-dom"
import {v4 as uuidv4} from 'uuid' 

export default function CustomerInfo ({StartNewEstimate}) {
    let navigate = useNavigate()

    function handleClick () {
        let firstName = document.getElementById('firstName').value
        let lastName = document.getElementById('lastName').value
        let telephone = document.getElementById('telephone').value
        let email = document.getElementById('email').value
        let uuid = uuidv4()
        let date = new Date().toDateString()
        let path = `/addingrooms/${uuid}`
        StartNewEstimate({firstName, lastName, telephone, email, date, uuid})
        clearInputs()
        setTimeout(() => {
            navigate(path)
        }, 100);

    }

    function clearInputs () {
        document.getElementById('firstName').value = ''
        document.getElementById('lastName').value = ''
        document.getElementById('telephone').value = ''
        document.getElementById('email').value = ''
    }

    return (
        <div className="infoSection CustomerInfo">
            <p>Please enter your name and contact information.</p>
            <div>
                <input id='firstName' type='text' placeholder="First Name" required></input>
                <input id='lastName' type='text' placeholder="Last Name" required></input>
            </div>
            <div>
                <input id='telephone' type='tel' placeholder="Phone Number" required></input>
                <input id='email' type='email' placeholder="email" required></input>
            </div>
            <div>
               <button onClick={() => handleClick() }>Start Estimate!</button>
            </div>
        </div>
    )
}