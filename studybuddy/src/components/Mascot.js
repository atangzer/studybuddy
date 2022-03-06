import React, {useEffect, useState} from "react"; 
import './Mascot.css';


function MascotTail() {
    return (
      <div className="Mascot">
        <div className="Mascot-tail"></div>
      </div>
    );
}

function MascotLookAround() {
    return (
        <div className="Mascot">
            <div className="Mascot-look-around"></div>
        </div>
    );
}

function MascotJumping() {
    return (
        <div className="Mascot">
            <div className="Mascot-jumping"></div>
        </div>
    );
}

function MascotJumpingLook() {
    return (
        <div className="Mascot">
            <div className="Mascot-jumping-look"></div>
        </div>
    );
}

function MascotTailScared() {
    return (
        <div className="Mascot">
            <div className="Mascot-tail-scared"></div>
        </div>
    );
}

function MascotSnooze() {
    return (
        <div className="Mascot">
            <div className="Mascot-snooze"></div>
        </div>
    );
}

function MascotSploot() {
    return (
        <div className="Mascot">
            <div className="Mascot-sploot"></div>
        </div>
    );
}

function MascotAnimation() {
    return (
        <div className="Mascot">
            <div className="Mascot-animation"></div>
        </div>
    );
}


export default MascotTail;
export {MascotLookAround, MascotJumping, MascotJumpingLook, MascotTailScared, MascotSnooze, MascotSploot, MascotAnimation};