import React, { useState, useRef, useEffect } from "react";
import { ReactComponent as Kr } from '../assets/kr.svg'



const InfoMap = () => {
    const [locations, setLocations] = useState([]);
    const testRef = useRef();
    useEffect( ()=> {
        setLocations(Object.entries(testRef.current.childNodes)
            .filter(node => node[1].nodeName == "path")
            .map((val) => {
                console.log(val[1]);
                return {name : val[1].attributes.name.value , id :val[1].id};
            }))
        
    },[]);
    console.log(locations);
    return (
        <div>
            <Kr onClick={(e) => {
                    console.log(e);
                }}
                ref = {testRef}
             />

        </div>

    )
}

export default InfoMap;