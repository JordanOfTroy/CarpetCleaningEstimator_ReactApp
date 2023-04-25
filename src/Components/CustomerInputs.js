import { useState, useEffect } from 'react' 
import '../styles/customerInputs.css'
import CustomerInfo from './CustomerInfo'


export default function CustomerInputs () {
    const [estimates, setEstimates] = useState(() => {
        let check = JSON.parse(localStorage.getItem('estimates'))
        if (check) {
            return check
        } else {
            return []
        }
    })
      
      function StartNewEstimate(obj) {
        let existingEstiamtes = JSON.parse(localStorage.getItem('estimates'))
        console.log(existingEstiamtes)
        obj.areas = []
        setEstimates([...existingEstiamtes, obj])
      }
    
      useEffect(() => {
        updateLocalStorage(estimates)
      }, [estimates])

    
      let updateLocalStorage = (arr) => {
        localStorage.setItem('estimates', JSON.stringify(arr))
      }
    
      
    return (
        <div>
           <CustomerInfo
            StartNewEstimate={StartNewEstimate}
           />
        </div>
    )
}