import React, { useState, useEffect,useRef } from 'react';
import ReactWordcloud from "react-wordcloud";
import { Resizable } from "re-resizable";
import axios from 'axios';
import InfoMap from "./InfoMap";
import Mapkr  from "../assets/Mapkr"


const KR_LOCATION = ["충청북도", "인천", "강원", "서울", "경기", "전라북도", "광주", "충천남도", "대전", "대구", "경상남도", "전라남도", "부산", "울산", "경상북도", "제주도", "세종"]
const findLocationInlocation = (str) => {
    KR_LOCATION.map(value => {
        if (value.includes(str)){
            CounterKrLocations[value] +=1
        }
    })
}
const Counter = (array) => {
    var count = {};
    array.forEach(val => count[val] = (count[val] || 0) );
    return count;
}

let CounterKrLocations = Counter(KR_LOCATION);



const resizeStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd"
};
let locationz = "";
const WordCloud = ({ source }) => {
    const [locations, setLocations] = useState([]);
    const [getMaplocations, setGetMapLocations] = useState([]);

    const options = {
        colors: ["#4E197F", "#2A63B3", "#4FB35D", "#E19D23", "#CC3A38"],
        enableTooltip: false,
        deterministic: false,
        fontFamily: "Lora",
        fontSizes: [10, 40],
        fontStyles: "normal",
        fontWeight: "700",
        padding: 1,
        rotations: 1,
        rotationAngles: [0, 90],
        scale: "liner",
        spiral: "archimedean",
        transitionDuration: 1000
    };

    const searchLocationBySkill = async (e) => {
        let resDataLocations = []
        CounterKrLocations = Counter(KR_LOCATION);
        await axios.get(`/jobinfo/locations/${e.text}`)
            .then((res) => {
                // console.log("클릭 데이터")
                // console.log(res.data)
                // // locationz = res.data
                // console.log(typeof(res.data))
                const data = res.data.map(value => {
                    findLocationInlocation(value)
                })
                setLocations(data)
            })
            .catch((err) => {
                console.log(err);
            })

    }

    const callbacks = {
        // getWordColor: word => word.value > 50 ? "blue" : "red",
        onWordClick: searchLocationBySkill,
        // onWordMouseOver: console.log,
        // getWordTooltip: word => `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`,
    }

    const testRef = useRef();
    useEffect(() => {
        setGetMapLocations(Object.entries(testRef.current.svgRef.current.childNodes)
            .filter(node => node[1].nodeName == "path")
            .map((val) => {
                return { name: val[1].attributes.name.value, id: val[1].id };
            }));
    }, [locations]);
    return (
        <div style={{ display: 'flex'}}>
            {/* <Resizable
                defaultSize={{
                    width: 500,
                    height: 250
                }}
                style={resizeStyle}

            > */}
                <div style={{marginTop:"5em", width: "50%", height: "100%"}}>
                    <ReactWordcloud callbacks={callbacks} words={source} options={options} />
                </div>
            {/* </Resizable> */}
            {/* <InfoMap /> */}
            <div style={{ width: "50%", height: "100%" }}>
                <Mapkr 
                    click={(e)=>{console.log(e.target[Object.keys(e.target)[1]].id)}}
                    // onClick={(e)=>{console.log(e)}}
                    locations = {CounterKrLocations}
                    ref={testRef}
                />
            </div>
        </div>
    );
};

export default WordCloud;