import { useState } from "react"
import NewRoom from "./NewRoom"

export default function RoomList ({customer}) {
    const [roomCount, setRoomCount] = useState(4)
    let rooms = []


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

    let getEstimate = () => {
        let allRooms = Array.from(document.getElementsByClassName('room'))
        allRooms.forEach((room, i) => {
            let roomObj = {
                roomName: room.children[0].value,
                roomLength: room.children[1].value,
                roomWidth: room.children[2].value
            }
            console.log(roomObj)
            customer.areas.push(roomObj)
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