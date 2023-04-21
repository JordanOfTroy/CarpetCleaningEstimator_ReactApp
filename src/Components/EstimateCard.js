import '../styles/estimatecard.css'

export default function EstimateCard ({estimate}) {
    let {firstName, lastName, uuid, telephone, email, areas, date} = estimate

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
                <p>estimate total: $100</p>
            </div>
            <div className="cardFooter">
                <button>Delete Estimate</button>
            </div>
        </div>
    )
}