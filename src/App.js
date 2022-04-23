import React from "react"
import data from "./data"
import Vacation from "./Vacation"

export default function App(){
    
    const vacation = data.map(loma => {
        return(
            <Vacation 
                key = {data.id}
                {...loma}                
            />
        )
    })
    
    return (
        <div>
            <div className = "header">
                <h3 className = "myTravelJournal">My Travel Journal</h3>
            </div>    
            {vacation}
        </div>
    )
}
