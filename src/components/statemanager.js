import React, {useState, useEffect} from "react";
import celebaudio from '../assets/celebration.mp3'

const celebration = new Audio(celebaudio)
celebration.volume = 0.2;


const log = []
const left = [0,1,2,3,4,5,6,7,8]
let movements = 0

const useStateManager = () => {

    const addLog = (meme) => {
        log.push(meme)
        console.log(log)
    }

    //remove meme from log
    const removeLog = (meme) => {
        log.splice(log.indexOf(meme), 1)
        console.log(log)
    }

    //check if meme is already in log
    const checkLog = (meme) => {
        if (log.includes(meme)) {
            return true
        } else {
            return false
        }
    }

    //check if log has 2 memes
    const checkLogLength = () => {
        if (log.length === 2) {
            return true
        } else {
            return false
        }
    }

    const checkLeft = (meme) => {
        if (left.includes(meme)) {
            return true
        } else {
            return false
        }
    }

    const pair = (meme) => {
        left.splice(left.indexOf(meme), 1)
        removeLog(meme)
        console.log(left)
        console.log(log)
        checkComplete()

    }

    //Check if left is empty
    const checkComplete = () => {
        if (left.length === 0) {
            celebration.play()
            alert("You won!")
        }
    }

    const addMovement = () => {
        movements += 1
    }

    const getMovements = () => {
        return movements
    }

    const getLeftLength = () => {
        return left.length
    }

    return {
        addLog,
        removeLog,
        checkLog,
        checkLogLength,
        checkLeft,
        pair,
        addMovement,
        getMovements,
        getLeftLength

    }

}

export default useStateManager;

