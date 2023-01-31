import React from "react";
import MoreButton from "./MoreButton";
import Title from "./Title";
import DoctorCard from "./DoctorCard";
import Ellipse from "./Ellipse";
import veterinaryImage from '../images/veterinary-85925_1280.jpg'

export default function Doctor(props){
    return (
        <div>
            <div className="doctor_frame">
                <Title title='Állatorvosok'/>
                <MoreButton/>
            </div>
            <DoctorCard background={veterinaryImage} 
                        title='Kiskedvenc állatorvos'
                        location='Székelyudvarhely '
                        time='Ma: 9:00 - 17:00'/>

            <Ellipse name='mobile-slider3'/>
        </div>
    )
}