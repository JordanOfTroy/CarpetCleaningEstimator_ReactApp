import '../styles/customerInputs.css'
import CustomerInfo from './CustomerInfo'

export default function CustomerInputs ({StartNewEstimate}) {
    return (
        <div>
           <CustomerInfo
            StartNewEstimate={StartNewEstimate}
           />
        </div>
    )
}