import React from "react";
import Ellipse from "./Ellipse";
import MoreButton from "./MoreButton";
import ShelterCards from "./ShelterCard";
import Title from "./Title";
import shelterImage from '../images/shelter.jpg'

export default function Shelter(props){
    return(
        <div className="shelter">
            <div className="shelter_cards">
                <ShelterCards image={shelterImage} name='Lorem Ipsum' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... tovább.'/>
                <ShelterCards image={shelterImage} name='Lorem Ipsum' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... tovább.'/>
                <ShelterCards image={shelterImage} name='Lorem Ipsum' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... tovább.'/>
            </div>
            <div className="shelter_title">
                <Title title='Menhelyek'/>
                <MoreButton/>
            </div>
            <Ellipse name='mobile-slider2'/>
        </div>
    )
}