import React from "react";

export default function DoctorCard(props){
    return(
        <div className="doctor_contact">
                <div className="doctor-rectangle" style={{
            backgroundImage: `url(${props.background})`
        }}>
                </div>
            <div className="doctor-card-frame">
                <h3 className="doctor-card-title">{props.title}</h3>
                <div className="doctor-card-text">
                        <p className="doctor-location">{props.location}</p>
                        <p className="doctor-open-time">{props.time}</p>
                </div>
            </div>
        </div>
    )
}