import React, { useState, useEffect } from "react";

import { ReactComponent as Kr } from '../assets/kr.svg'



const InfoMap = () => {
    const [locations, setLocations] = useState([]);
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", '../assets/kr.svg', false);
    rawFile.onreadystatechange = () => {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var xmlasstring = rawFile.responseText;
                console.log('Your xml file as string', xmlasstring)
            }
        }
    }
    return (
        <div>
            <Kr onClick={(e) => {
                console.log(e.target.id);
            }} />

        </div>

    )
}

export default InfoMap;