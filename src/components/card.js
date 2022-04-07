import React, {useState, useEffect} from "react";
import './card.css'
import cardaudio from '../assets/Card-flip-sound-effect.mp3'
import dingaudio from '../assets/ding-sound-effect_2.mp3'
import useStateManager from './statemanager'


const images = ["https://s3.duellinksmeta.com/cards/60c2b3aca0e24f2d54a5314c_w420.webp",
                "https://s3.duellinksmeta.com/cards/60c2b3aca0e24f2d54a53152_w420.webp",
                "https://s3.duellinksmeta.com/cards/60c2b3aca0e24f2d54a5314f_w420.webp",
                "https://s3.duellinksmeta.com/cards/60c2b3aca0e24f2d54a5314a_w420.webp",
                "https://s3.duellinksmeta.com/cards/60c2b3aca0e24f2d54a5314e_w420.webp",
                "https://s3.duellinksmeta.com/cards/60c2b3aca0e24f2d54a53151_w420.webp",
                "https://s3.duellinksmeta.com/cards/60c2b3aca0e24f2d54a53149_w420.webp",
                "https://s3.duellinksmeta.com/cards/60c2b3aca0e24f2d54a5314d_w420.webp",
                "https://s3.duellinksmeta.com/cards/60c2b3aca0e24f2d54a5314b_w420.webp"]

const Card = ({image}) => {

    const {a,b,addMovement, pair, checkLeft, checkLogLength, checkLog, removeLog, addLog} = useStateManager();

    const string = "url(" + images[image] + ")"

    const [cardState, cardRotate] = useState(false);

    const card_audio = new Audio(cardaudio)
    card_audio.volume = 0.2;
    const ding_audio = new Audio(dingaudio)
    ding_audio.volume = 0.2;

    const rotate = () => {

        const flip = () => {
            card_audio.play()
            cardRotate((cardState) => !cardState);
            addMovement()
        }

        if (!checkLeft(image)){
            console.log("Ya haz hecho esta pareja")
            return
        }

        if (checkLogLength() && !cardState){
            return
        }

        //Si la carta no esta girada
        flip()
        if (!cardState) {
            //Checkeamos is la carta esta en el log
            //Si esta en el log, la borramos del log y la giramos hemos hecho una pareja
            if (checkLog(image)) {
                ding_audio.play()
                pair(image)
            //Si no esta en el log la agregamos y le damos vuelta
            } else {
                addLog(image)
            }

        //Si la carta esta girada, la giramos y la quitamos del log y ponemos el sonido
        } else {
            removeLog(image);
        }
    }

    return (
        <div className={`card ${cardState ? 'rotated' : ''}`} onClick={rotate}>
            <div className="card_position">
                <div className="carta_front" ></div>
                <div className="carta_back" style={{'backgroundImage':string}}> </div>
            </div>
        </div>
    )

}

export default Card;

