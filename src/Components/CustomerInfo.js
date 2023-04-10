export default function CustomerInfo ({StartNewEstimate}) {

    function handleClick () {
        let firstName = document.getElementById('firstName').value
        let lastName = document.getElementById('lastName').value
        let telephone = document.getElementById('telephone').value
        let email = document.getElementById('email').value
        let date = new Date()
        StartNewEstimate({firstName, lastName, telephone, email, date})
        clearInputs()
    }

    function clearInputs () {
        document.getElementById('firstName').value = ''
        document.getElementById('lastName').value = ''
        document.getElementById('telephone').value = ''
        document.getElementById('email').value = ''
    }

    return (
        <div className="infoSection CustomerInfo">
            <div>
                <input id='firstName' type='text' placeholder="First Name" required></input>
                <input id='lastName' type='text' placeholder="Last Name" required></input>
            </div>
            <div>
                <input id='telephone' type='tel' placeholder="Phone Number" required></input>
                <input id='email' type='email' placeholder="email" required></input>
            </div>
            <div>
               <button onClick={() => handleClick()}>Start Estimate!</button>
            </div>
        </div>
    )
}