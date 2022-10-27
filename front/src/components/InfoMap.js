import React, { useState, useRef, useEffect } from "react";
import { ReactComponent as Kr } from '../assets/kr.svg'


const  decodeUnicode = (unicodeString) => {
	const r = /\\u([\d\w]{4})/gi;
	unicodeString = unicodeString.replace(r,  (match, grp) => {
	    return String.fromCharCode(parseInt(grp, 16)); } );
	return unicodeString;
}

const InfoMap = () => {
    const [locations, setLocations] = useState([]);
    const testRef = useRef();
    useEffect( ()=> {
        setLocations(Object.entries(testRef.current.childNodes)
            .filter(node => node[1].nodeName == "path")
            .map((val) => {
                return {name : decodeUnicode(val[1].attributes.name.value) , id :val[1].id};
            }))
        
    },[]);
    console.log(locations);
    return (
        <div>
            <Kr onClick={(e) => {
                    console.log(decodeUnicode(e.target.attributes.name.value));
                }}
                ref = {testRef}
             />

        </div>

    )
}

export default InfoMap;