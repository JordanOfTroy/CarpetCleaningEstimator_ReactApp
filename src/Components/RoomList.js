import { useState } from "react"
import { useNavigate } from "react-router-dom"
import NewRoom from "./NewRoom"

export default function RoomList ({customer}) {
    const [roomCount, setRoomCount] = useState(4)
    let rooms = []
    let navigate = useNavigate()


    let createInitialRooms = () => {
        for (let i=0; i < roomCount; i++) {
            rooms.push(<NewRoom key={i}/>)
        }
        return rooms
    }

    let addANewRoom = () => {
        let newCount = roomCount + 1
        setRoomCount(newCount)
    }

    let updateLocalStorage = (obj) => {
        let newArr = []
        let estimates = JSON.parse(localStorage.getItem('estimates'))
        // console.log(estimates)
        estimates.forEach((estimate, i) => {
            // console.log(estimate.uuid)
            // console.log(obj.uuid)
            if (estimate.uuid === obj.uuid) {
                estimate.areas = obj.areas
            }
            newArr.push(estimate)
        })
        localStorage.setItem('estimates', JSON.stringify(newArr))
        // let path = 
        setTimeout(() => {
            navigate(`/estimate/${obj.uuid}`)
        }, 100);
    }

    let getEstimate = () => {
        let allRooms = Array.from(document.getElementsByClassName('room'))
        allRooms.forEach((room, i) => {
            if (room.children[0].value.length > 0) {
                let roomObj = {
                    roomName: room.children[0].value,
                    roomLength: room.children[1].value,
                    roomWidth: room.children[2].value
                }
                // console.log(roomObj)
                customer.areas.push(roomObj)
                // console.log('dafuq',roomObj)
            }
            // console.log('customer', customer)
            updateLocalStorage(customer)
        })
    }

    return (
        <>
        <div>
            <div className="roomHeader">
                <p>Room Name</p>
                <p>Length</p>
                <p>Width</p>
            </div>
            <div className="rooms">
                {createInitialRooms()}
            </div>
        </div>
        <div className="buttons">
            <button onClick={() => addANewRoom()}>Add New Room</button>
            <button onClick={() => getEstimate()}>Get Estimate</button>
        </div>

        </>
    )
}