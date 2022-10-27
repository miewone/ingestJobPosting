import React, { useState, useRef, useEffect } from "react";
import { ReactComponent as Kr } from '../assets/kr.svg'



const InfoMap = () => {
    const [locations, setLocations] = useState([]);
    const testRef = useRef()
    useEffect( ()=> {
        setLocations(Object.entries(testRef.current.childNodes).map((val) => {
            return val[1].id
        }))
    },[])
    console.log(testRef.current.childNodes)
    console.log(locations)
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