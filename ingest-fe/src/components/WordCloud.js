import React, { useState, useEffect,useRef, memo } from 'react';
import ReactWordcloud from "react-wordcloud";
import { Resizable } from "re-resizable";
import axios from 'axios';
import Mapkr  from "../assets/Mapkr"
import { select } from "d3-selection";

const KR_LOCATION = ["충청북도", "인천", "강원", "서울", "경기", "전라북도", "광주", "충청남도", "대전", "대구", "경상남도", "전라남도", "부산", "울산", "경상북도", "제주도", "세종"]
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
const size = [600, 400];

let locationz = "";
const WordCloud = ({ source }) => {
    const [pocusloations,setPocuslocations] = useState('');
    const [locations, setLocations] = useState([]);
    const [getMaplocations, setGetMapLocations] = useState([]);

    const options = {
        colors: ["#4E197F", "#2A63B3", "#4FB35D"],
        enableTooltip: false,
        deterministic: true,
        fontFamily: "Lora",
        fontSizes: [10, 40],
        fontStyles: "normal",
        fontWeight: "700",
        padding: 1.5,
        rotations: 1,
        rotationAngles: [0, 90],
        scale: "liner",
        spiral: "archimedean",
        transitionDuration: 1000
    };

    const searchLocationBySkill = async (e) => {
        CounterKrLocations = Counter(KR_LOCATION);
        await axios.get(`/jobinfo/locations/${e.text}`)
            .then((res) => {
                console.log(e);
                setPocuslocations(e.text);
                const data = res.data.map(value => {
                    findLocationInlocation(value)
                })
                setLocations(data)
            })
            .catch((err) => {
                console.log(err);
            });
    }
    function getCallback(callback) {
        return function (word, event) {
        
          const isActive = callback !== "onWordMouseOut";
          const element = event.target;
          const text = select(element);
          const multiSize = 1.5
          console.log(text);
          const textOriginfontSzie =text.attr("font-size").split("px")[0];
          text
            .transition()
            .attr("background", "black");
            // .attr("font-size", isActive ? textOriginfontSzie*multiSize+"px" : textOriginfontSzie/multiSize+"px");
        };
      }

    const callbacks = {
        // getWordColor: word => word.value > 50 ? "blue" : "red",
        onWordClick: searchLocationBySkill,
        // onWordMouseOver: searchLocationBySkill,
        // onWordMouseOut: getCallback("onWordMouseOut"),
        // getWordTooltip: word => `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`,
    }

    const testRef = useRef();
    useEffect(() => {
        setGetMapLocations(Object.entries(testRef.current.svgRef.current.childNodes)
            .filter(node => node[1].nodeName == "path")
            .map((val) => {
                return { name: val[1].attributes.name.value, id: val[1].id };
            }));
    }, []);
    return (
        // <div style={{ display: 'flex'}}>
        <div style={{ display: 'flex'}}>
            {/* <Resizable
                defaultSize={{
                    width: 500,
                    height: 250
                }}
                style={resizeStyle}

            > */}
            <div style={{position:"absolute", left:"50%"}}>
                {pocusloations}
            </div>
            <div style={{marginTop:"5em", width: "40%", height: "100%"}}>
                <ReactWordcloud 
                    callbacks={callbacks}
                    words={source}
                    options={options}
                    maxWords={50} 
                    // size={size}
                />
            </div>
            {/* </Resizable> */}
            {/* <InfoMap /> */}
            {console.log(Object.entries(CounterKrLocations))}
            <div style={{ width: "50%", height: "100%" }}>
                <Mapkr 
                    click={(e)=>{console.log(e.target[Object.keys(e.target)[1]].id)}}
                    // onClick={(e)=>{console.log(e)}}
                    locations = {CounterKrLocations}
                    ref={testRef}
                />
            </div>
            <div style={{display: 'flex',flexDirection:'column',width: "10%",position:'absolute',right:'20em'}}>
                {Object.entries(CounterKrLocations).map(value => {
                    return (
                    value[1] > 0 && <div style={{display: 'flex'}}>
                        <div  style={{background: `hsl(10 100% ${68-Math.log2(value[1])*5}%)`,width:"20px",borderRadius:'90%',padding:'0.2em'}}>
                        </div >
                        {value[0]} : {value[1]}
                    </div>)
                })}
            </div>
        </div>
    );
};

export default WordCloud;