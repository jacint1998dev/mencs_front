import React from "react";

export default function BigAnimalCard(props){
    return(
      <div>
        <div className="big_card_frame" style={{
            backgroundImage: `url(${props.background})`,
          }}>
        </div>
            <i className="fa-regular fa-heart"></i>
            <div className="big_card_name_frame">
                  <div className="big_card_name_frame2">
                    <h2 className="big_card_name">{props.name}</h2>
                    <div className="big_card_frame3">
                        <p className="big_card_text">{props.text}</p>
                    </div>
                  </div>
            </div>
        
        </div>
    )
}