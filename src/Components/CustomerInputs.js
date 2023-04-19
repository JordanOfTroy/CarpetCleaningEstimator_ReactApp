import { useState, useEffect } from 'react' 
import '../styles/customerInputs.css'
import CustomerInfo from './CustomerInfo'


export default function CustomerInputs () {
    const [estimates, setEstimates] = useState([])
      
      function StartNewEstimate(obj) {
        obj.areas = []
        setEstimates([...estimates, obj])
      }
    
      useEffect(() => {
        let check = localStorage.getItem('estimates')
        check ? updateLocalStorage(estimates) : initiateLocalStorage(estimates)
      }, [estimates])
    
      let updateLocalStorage = (arr) => {
        localStorage.setItem('estimates', JSON.stringify(arr))
      }
    
      let initiateLocalStorage = (arr) => {
        window.localStorage.setItem('estimates', JSON.stringify(arr))
      }
    
      let getEstimatesFromLocalStorage = () => {
        return JSON.parse(localStorage.getItem('estimates'))
      }
      
    return (
        <div>
           <CustomerInfo
            StartNewEstimate={StartNewEstimate}
           />
        </div>
    )
}