import '../styles/estimatecard.css'

export default function EstimateCard ({estimate, i, deleteEstimate}) {
    let {firstName, lastName, uuid, telephone, email, areas, date} = estimate

    let grandTotal = 0

    areas.forEach((area) => {
        let {roomLength, roomWidth} = area
        let roomTotal = roomLength * roomWidth
        grandTotal += roomTotal
    })

    return (
        <div className="card">
            <div className='cardHeader'>
                <p>{date}</p>
            </div>
            <div className="cardInfo">
                <p>Client: {firstName + ' ' + lastName} </p>
                <p>phone: {telephone}</p>
                <p>email: {email}</p>
                <p>number of rooms: {areas.length}</p>
                <ul className='roomUL'>
                    {areas.map((area, i) => <li key={i}>{area.roomName} <span className='lowLite'>({area.roomLength} x {area.roomWidth})</span></li>)}
                </ul>
                <p>Estimate Total: <span className='greenMe'>${grandTotal}</span></p>
            </div>
            <div className="cardFooter">
                <button onClick={() => deleteEstimate(i)}>Delete Estimate</button>
            </div>
        </div>
    )
}