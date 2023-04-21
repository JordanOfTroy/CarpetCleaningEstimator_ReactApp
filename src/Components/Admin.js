import '../styles/admin.css'
import EstimateCard from "./EstimateCard";

export default function Admin () {

    function showAllEstimate () {
        let results = []
        let estimates = JSON.parse(localStorage.getItem('estimates'))
        estimates.forEach(estimate => {
            results.push(<EstimateCard estimate = {estimate}/>)
        });
        return results
    }

    return (
        <div>
            <div className='pricingInfo'>
                <p>Price per square foot: $1</p>
                <button>Update Pricing</button>
            </div>
            <div className="cardBox">
                {showAllEstimate()}
            </div>
        </div>
    )
}