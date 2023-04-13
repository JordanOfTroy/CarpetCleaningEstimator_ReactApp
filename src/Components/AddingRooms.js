import { useParams } from "react-router-dom";

export default function AddingRooms () {
    let { username } = useParams();

    return (
        <div>ADDING ROOMS for {username}</div>
    )
}