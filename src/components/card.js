import React, {useState, useEffect} from "react";
import './card.css'

const images = ["https://s3.duellinksmeta.com/cards/60c2b3aca0e24f2d54a5314c_w420.webp",
                "https://s3.duellinksmeta.com/cards/60c2b3aca0e24f2d54a53152_w420.webp",
                "https://s3.duellinksmeta.com/cards/60c2b3aca0e24f2d54a5314f_w420.webp",
                "https://s3.duellinksmeta.com/cards/60c2b3aca0e24f2d54a5314a_w420.webp",
                "https://s3.duellinksmeta.com/cards/60c2b3aca0e24f2d54a5314e_w420.webp",
                "https://s3.duellinksmeta.com/cards/60c2b3aca0e24f2d54a53151_w420.webp",
                "https://s3.duellinksmeta.com/cards/60c2b3aca0e24f2d54a53149_w420.webp",
                "https://s3.duellinksmeta.com/cards/60c2b3aca0e24f2d54a5314d_w420.webp",
                "https://s3.duellinksmeta.com/cards/60c2b3aca0e24f2d54a5314b_w420.webp"]

export default function Card({image}){

    const string = "url(" + images[image] + ")"

    return (
        <div className="carddiv">
            <div className="card_position">
                <button className="carta_front">
                </button>
                <button className="carta_back" style={{'backgroundImage':string}}>

                </button>
            </div>
        </div>

    )



}

