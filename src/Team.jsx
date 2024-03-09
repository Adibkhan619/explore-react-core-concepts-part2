import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(11)

    const handleAdd = () =>{
        const teamCount = team +1;
        setTeam(teamCount);
    }
    const handleRemove = () =>{
        setTeam(team - 1);
    }
    const teamStyle = {
        border: '2px solid red',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }
    return (
        <div style = {teamStyle}>
            <h3>Players: {team} </h3>
            <button style = {{margin:'20px'}} onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}