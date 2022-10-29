import React, { useState, useRef, useEffect } from "react";
// import { ReactComponent as Kr } from '../assets/kr.svg'
import Mapkr  from "../assets/Mapkr"



const InfoMap = () => {
    const [locations, setLocations] = useState([]);
    const testRef = useRef();
    useEffect( ()=> {
        setLocations(Object.entries(testRef.current.svgRef.current.childNodes)
            .filter(node => node[1].nodeName == "path")
            .map((val) => {
                return {name : val[1].attributes.name.value , id :val[1].id};
            }))
    },[]);
    console.log(testRef)
    return (
        <div>
            <Mapkr 
                // click={(e)=>{console.log(e.target[Object.keys(e.target)[1]].id)}}
                onClick={(e)=>{console.log(e)}}
                ref={testRef}
             />
             {/* <Kr/> */}
        </div>
    )
}

export default InfoMap;