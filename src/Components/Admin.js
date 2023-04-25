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
            <div className='adminHeader'>
                <div className='headerItem'>
                    <p>Price per square foot: $1</p>
                    <button>Update Pricing</button>
                </div>
                <div className='headerItem'>
                    <p>Sort by:</p>
                    <select>
                        <option value='date'>Date</option>
                        <potion value='lowFirst'>Price: Low to High</potion>
                        <option value='highFirst'>Price: High to Low</option>
                        <option value='aFirst'>Name: A to Z</option>
                        <option value='zFirst'>Name: Z to A</option>
                    </select>
                </div>
            </div>
            <div className="cardBox">
                {showAllEstimate()}
            </div>
        </div>
    )
}