import React from "react";
import BigAnimalCard from "./BigAnimalCard";
import Ellipse from "./Ellipse";
import MoreButton from "./MoreButton";
import SmallAnimalCard from "./SmallAnimalCard";
import Title from "./Title";
import catImage from '../images/cat_image.jpg'
import dogImage from '../images/dog-5357794_1280.jpg'

export default function Animals(props)
{
    return(
        <div className="animals">
            <div className="animals-frame">
                <div className="animals-adopt">
                    <Title title='Adoptáció'/>
                    <MoreButton/>
                </div>
                    <Ellipse name='mobile-slider1' />
                <div className="small-animal-cards">
                    <SmallAnimalCard text="Kutya"/>
                    <SmallAnimalCard text="Cica"/>
                    <SmallAnimalCard text="Nyúl"/>
                    <SmallAnimalCard text="Madár"/>
                </div>
                <div className="big-animal-cards">
                    <BigAnimalCard background={catImage} name='Nyomi' text='keverék, 4 hónapos' />
                    <BigAnimalCard background={dogImage} name='Bloki' text='keverék, 4 hónapos' />
                    <BigAnimalCard background={catImage} name='Nyomi' text='keverék, 4 hónapos' />
                </div>
            </div>
        </div>
    )
}