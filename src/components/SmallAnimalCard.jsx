import React from "react";

export default function SmallAnimalCard(props){
    return(
        <div className="small_card_frame">
            <div className="small_card-rectangle"></div>
            <p className="small_card_text">{props.text}</p>
        </div>
    )
}