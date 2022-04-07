import React, {useState, useEffect} from "react";
import './card.css'
import cardaudio from '../assets/Card-flip-sound-effect.mp3'
import dingaudio from '../assets/ding-sound-effect_2.mp3'
import useStateManager from './statemanager'

//Card art from: thegentlehoneybee

const images = ["https://64.media.tumblr.com/c6959d109e26493553c54c77712e5d7a/83593f888efdcaa0-1f/s540x810/e5d05285d5f00354a62e8756853889b4d26eefda.jpg",
                "https://64.media.tumblr.com/33fe0a5927bbd2fd4e3dd7a90e9f8a9b/58df82f0b7fd7623-01/s540x810/3b7bfc7390b99a7e6351a2e392b62e9176323186.jpg",
                "https://64.media.tumblr.com/c1b8c871fe2e779457d75190fcb42df8/58df82f0b7fd7623-72/s540x810/9e91f1502da295a45cb25459466b098114424237.jpg",
                "https://64.media.tumblr.com/63597e567d88d8536a04f16f736584a3/83593f888efdcaa0-0f/s540x810/78d28372fc02f0ce788283dba94acb948c787eab.jpg",
                "https://64.media.tumblr.com/427c2b264fd284e71ac4a8885675974c/c45a69df1a75ec42-1d/s540x810/8fbf4f94849f9de3edd789d927a1c2ffaf72afab.jpg",
                "https://64.media.tumblr.com/4cb6061d450e49f52d2fe0273680d3f6/60ea9971ef09178e-02/s540x810/ff4e0ff38eeda8ea3fb63227436fbc9ff3bf01ce.jpg",
                "https://64.media.tumblr.com/05eeb269b3643b70afa273a9f5fa77d1/60ea9971ef09178e-a2/s540x810/d6c3554de8aff75cc6b1c0f59074116c395bda5b.jpg",
                "https://64.media.tumblr.com/2e865d84cf6735d3ea7d4abb75f6cdd3/4cff2dfb7689bf73-d5/s540x810/e7859623989e0cc8fa7d7c6b8675cac5c730f899.jpg",
                "https://64.media.tumblr.com/b3d87e8e9972c5cbad959456aeaee541/4cff2dfb7689bf73-a6/s540x810/0cd28c63adbce0fca08aa58cd9855de59ada0c50.jpg"]

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

