export default function EstimateCard ({estimate}) {
    let {firstName, lastName, uuid, telephone, email, areas, date} = estimate

    return (
        <div>
            <p>Client: {firstName + ' ' + lastName} </p>
            <p>phone: {telephone}</p>
            <p>email: {email}</p>
            <p>number of rooms: {areas.length}</p>
            <p>estimate total: $100</p>
            <hr/>
        </div>
    )
}