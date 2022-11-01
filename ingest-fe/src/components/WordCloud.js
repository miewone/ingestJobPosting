import React, { useState, useEffect,useRef, memo } from 'react';
import ReactWordcloud from "react-wordcloud";
import { Resizable } from "re-resizable";
import axios from 'axios';
import Mapkr  from "../assets/Mapkr"
import { select } from "d3-selection";

let CounterKrLocations = ""


const WordCloud = ({ source }) => {
    const [pocusloations,setPocuslocations] = useState('');
    const [locations, setLocations] = useState([]);


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
        CounterKrLocations = ""
        await axios.get(`/jobinfo/locations/${e.text}`)
            .then((res) => {
                setLocations(res.data)
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
    return (
        <div style={{ display: 'flex'}}>
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
            <div style={{ width: "50%", height: "100%" }}>
                <Mapkr 
                    click={(e)=>{console.log(e.target[Object.keys(e.target)[1]].id)}}
                    locations = {locations}
                    ref={testRef}
                />
            </div>
            <div style={{display: 'flex',flexDirection:'column',width: "10%",position:'absolute',right:'1em'}}>
                {Object.entries(locations).map((value,idx) => {
                    return (
                    value[0].length > 0 && value[1] > 0 && <div style={{display: 'flex'}}>
                        <div  style={{background: `hsl(10 100% ${68-Math.log2(value[1])*5}%)`,width:"20px",borderRadius:'90%',padding:'0.2em'}} key={value[0]+idx}>
                        </div >
                        {value[0]} : {value[1]}
                    </div>)
                })}
            </div>
        </div>
    );
};

export default WordCloud;