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
            {showAllEstimate()}
        </div>
    )
}