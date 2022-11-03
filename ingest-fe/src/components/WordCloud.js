import React, { useState, useEffect, useRef, memo } from 'react';
import ReactWordcloud from "react-wordcloud";
import axios from 'axios';
import Mapkr from "../assets/maps/Mapkr"
import Chungcheongbuk from "../assets/maps/do/Chungcheongbuk"
import Chungcheongnam from "../assets/maps/do/Chungcheongnam"
import Gangwon from "../assets/maps/do/Gangwon"
import Gyeonggl from "../assets/maps/do/Gyeonggi"
import Gyeosangbuk from "../assets/maps/do/Gyeosangbuk"
import Gyeosangnam from "../assets/maps/do/Gyeosangnam"
import Jejuo from "../assets/maps/do/Jejuo"
import Jeonlabukdo from "../assets/maps/do/Jeonlabukdo"
import Jeonranamdo from "../assets/maps/do/Jeonranamdo"
import Busan from "../assets/maps/si/Busan"
import Daegu from "../assets/maps/si/Daegu"
import Daijeon from "../assets/maps/si/Daijeon"
import Gwangju from "../assets/maps/si/Gwangju"
import Incheon from "../assets/maps/si/Incheon"
import Sejong from "../assets/maps/si/Sejong"
import Seoul from "../assets/maps/si/Seoul"
import Ulsan from "../assets/maps/si/Ulsan"

// import "../assets/style/wordcloud.css";
let CounterKrLocations = "";
let isActive = false;
const Counter = (array) => {
    var count = {};
    array.forEach(val => count[val] = (count[val] || 0) + 1);
    return count;
};

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

let jobpostingSkills = [];

const WordCloud = () => {
    const [source, setSource] = useState([]);
    const [locations, setLocations] = useState([]);
    const [category,setCategory] = useState([]);
    const testRef = useRef();
    // const [allLocations,setAllLocations] = useState({});

    

    const searchLocationBySkill = async (e) => {
        CounterKrLocations = ""
        await axios.get(`/jobinfo/locations/${e.text}`)
            .then((res) => {
                console.log(res.data)
                setLocations(res.data)
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const getAllSkills = async () => {
        // isActive = true;
        setLocations({});
        await axios.get("/jobinfo/skills")
            .then((res) => {
                setSource(Object.entries(Counter(res.data)).map(values => {return {text : values[0].toUpperCase()  ,value : Math.log2(values[1]) * 10}}));
            })
            .catch((err) => {
                console.log(err);
            });
        await axios.get("/category/onlycategory")
            .then((res)=> {
                setCategory(res.data)
            })
            .catch((err)=>{
                console.log(err)
            });
    };
    const getAllLocations = async() =>{
        // isActive = false;
        await axios.get('/jobinfo/exposebylocation')
            .then((res) => {
                setLocations(res.data);
            })
            .catch((err)=>{
                console.log(err);
            });
    };
    const getSkillsOfCategory = async (category)=> {
        await axios.post("/category/search",category)
        .then((res)=> {
            console.log(res.data)
            setSource(Object.entries(res.data).map(values => {return {text : values[0].toUpperCase()  ,value : Math.log2(values[1]) * 10}}));
        })
        .catch((err)=>{
            console.log(err)
        });
    }
    // function getCallback(callback) {
    //     return function (word, event) {

    //         const isActive = callback !== "onWordMouseOut";
    //         const element = event.target;
    //         const text = select(element);
    //         const multiSize = 1.5
    //         console.log(text);
    //         const textOriginfontSzie = text.attr("font-size").split("px")[0];
    //         text
    //             .transition()
    //             .attr("background", "black");
    //         // .attr("font-size", isActive ? textOriginfontSzie*multiSize+"px" : textOriginfontSzie/multiSize+"px");
    //     };
    // }

    const callbacks = {
        onWordClick: searchLocationBySkill,
    };

    console.log(source);
    return (
        <div>
            <label>
                <input type="radio" value="1" name="test1"  />
                전체공고 로딩
            </label>
            <label>
                <input type="radio" value="2" name="test1"  onChange={getAllSkills}/>
                스킬 - 내부에 체크박스로 카테고리 별로 볼 수 있게
            </label>
            <label>
                <input type="radio" value="2" name="test1"  onChange={getAllLocations} />
                지역
            </label>
            <label>
                <input type="radio" value="2" name="test1"  />
                복지
            </label>
            <div  style={{ display: 'flex' }}>
                {/* <div>
                    표시될 단어 수<input type="text" />
                </div>
                <div style={{ position: "absolute", left: "50%" }}>
                    {pocusloations}
                </div> */}
                <div style={{ display: 'flex' ,flexDirection:"column"}}>
                    {category && category.map(value => {
                        return(
                            <label>
                                <input type="radio" name="category" onChange={() => getSkillsOfCategory(value)}/> 
                                {value}
                            </label>
                        )
                    })}
                </div>
                <div style={{ marginTop: "5em", width: "40%", height: "100%" }}>
                    {<ReactWordcloud
                        callbacks={callbacks}
                        words={source}
                        options={options}
                        maxWords={100} // TODO : 최대 노출 문자 지정하게 끔 기능 구현.
                    // size={size}
                    />}
                </div>
                <div style={{ display:'flex',width: "50%", height: "100%" }}>
                    <Mapkr
                        click={(e) => { console.log(e.target[Object.keys(e.target)[1]].id) }}
                        locations={locations}
                        ref={testRef}
                    />
                    {/* <Chungcheongbuk/> */}
                     {/* <Chungcheongnam/> */}
                    {/* <Gangwon/> */}
                    {/* <Gyeonggl/>  */}
                    {/* <Gyeosangbuk/> */}
                    {/* <Gyeosangnam/> */}
                    {/* <Jejuo/> */}
                    {/* <Jeonlabukdo/> */}
                    {/* <Jeonranamdo/> */}
                    <Busan/>
                    {/* <Daegu/> */}
                    {/* <Daijeon/> */}
                    {/* <Gwangju/> */}
                    {/* <Incheon/> */}
                    {/* <Sejong/> */}
                    {/* <Seoul/> */}
                    <Ulsan/>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', width: "10%", position: 'absolute', right: '1em' }}>
                    {Object.entries(locations).map((value, idx) => {
                        return (
                            value[0].length > 0 && value[1] > 0 && <div style={{ display: 'flex' }}>
                                <div style={{ background: `hsl(10 100% ${68 - Math.log2(value[1]) * 5}%)`, width: "20px", borderRadius: '90%', padding: '0.2em' }} key={value[0] + idx}>
                                </div >
                                {value[0]} : {value[1]}
                            </div>)
                    })}
                </div>
            </div>
        </div>
    );
};

export default WordCloud;