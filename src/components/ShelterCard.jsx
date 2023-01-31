import React from "react";

export default function ShelterCards(props){
    return(
        <div className="shelter_card_box">
            <div className="shelter_content">
            <img src={props.image} alt=''></img>
            <div className="shelter_text_frame">
                <h2 className="shelter_name">{props.name}</h2>
                <p className="shelter_text">{props.text}</p>
            </div>
            </div>
        </div>
    )
}