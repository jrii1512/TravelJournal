import React from "react"

export default function Vacation(props){
    console.log(props)
    return (
        <div className = "vacation">                                
            <img src = {props.imageUrl} className = "photo"/>
            <span className = "location">{props.location}</span>
            <a href = {props.googleMapsUrl} className = "mapUrl">Google Map</a>

            <span className = "title">{props.title}</span>

            <div className = "dates">
                <span>{props.startDate}</span>
                <span>{props.endDate}</span>
            </div>   
            
            <span className = "description">{props.description}</span>                    
        </div>
    )
}
