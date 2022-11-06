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

import "../assets/style/wordcloud.css";
let CounterKrLocations = "";


let selectedCategory = [];
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

let categoryActive = false;
const WordCloud = () => {
    const [source, setSource] = useState([]);
    const [locations, setLocations] = useState([]);
    const [semiLocation, setSemiLocation] = useState([]);
    const [category, setCategory] = useState([]);
    const [selectLocation, setSelectLocation] = useState("");
    const [selectedSkill, setSelectSkill] = useState("");
    const [categoryNavIsActive, setCategoryNavIsActive] = useState(false);
    const [maxWord, setMaxWord] = useState(50);

    const testRef = useRef();
    // const [allLocations,setAllLocations] = useState({});



    const selectedLocationSkills = async (location, skill) => {
        console.log(location + "," + skill)
        await axios.post("/jobinfo/semilocation",
            {
                "location": location,
                "skills": skill
            }).then((res) => {
                setSemiLocation(res.data);
            }).catch((err) => {
                console.log(err);
            });
    }
    const searchLocationBySkill = async (e) => {
        CounterKrLocations = ""
        setSelectSkill(e.text);
        await axios.get(`/jobinfo/locations/${e.text}`)
            .then((res) => {
                setLocations(res.data)
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const getAllSkills = async () => {
        categoryActive = true;
        setLocations({});
        await axios.get("/jobinfo/skills")
            .then((res) => {
                setSource(Object.entries(Counter(res.data)).map(values => { return { text: values[0].toUpperCase(), value: Math.log2(values[1]) * 10 } }));
            })
            .catch((err) => {
                console.log(err);
            });
        await axios.get("/category/onlycategory")
            .then((res) => {
                setCategory(res.data)
            })
            .catch((err) => {
                console.log(err)
            });
    };
    const getAllLocations = async () => {
        // isActive = false;
        setSource([])
        categoryActive = false;
        await axios.get('/jobinfo/exposebylocation')
            .then((res) => {
                setLocations(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const getSkillsOfCategory = async (category) => {
        if (selectedCategory.includes(category)) {
            console.log("응 포함");
            console.log(category);
            selectedCategory = selectedCategory.filter(value => value != category)
        } else {
            selectedCategory.push(category);
        }
        console.log(selectedCategory);
        setSource({});
        let sourcies = [];
        for (let i = 0; i < selectedCategory.length; i++) {
            await axios.post("/category/search", selectedCategory[i])
                .then((res) => {
                    sourcies = [...sourcies, ...Object.entries(res.data).map(values => { return { text: values[0].toUpperCase(), value: values[1] } })]
                    // setSource();
                })
                .catch((err) => {
                    console.log(err)
                });
        }
        console.log(sourcies);
        await setSource(sourcies);
        console.log("source");
        console.log(source);
    }
    const selectedLocation = {
        "CD43": <Chungcheongbuk className="semiMap" selectedCallback={selectedLocationSkills} locations={semiLocation} skill={selectedSkill} />,
        "CD44": <Chungcheongnam className="semiMap" selectedCallback={selectedLocationSkills} locations={semiLocation} skill={selectedSkill} />,
        "CD42": <Gangwon className="semiMap" selectedCallback={selectedLocationSkills} locations={semiLocation} skill={selectedSkill} />,
        "CD41": <Gyeonggl className="semiMap" selectedCallback={selectedLocationSkills} locations={semiLocation} skill={selectedSkill} />,
        "CD47": <Gyeosangbuk className="semiMap" selectedCallback={selectedLocationSkills} locations={semiLocation} skill={selectedSkill} />,
        "CD48": <Gyeosangnam className="semiMap" selectedCallback={selectedLocationSkills} locations={semiLocation} skill={selectedSkill} />,
        "CD50": <Jejuo className="semiMap" selectedCallback={selectedLocationSkills} locations={semiLocation} skill={selectedSkill} />,
        "CD45": <Jeonlabukdo className="semiMap" selectedCallback={selectedLocationSkills} locations={semiLocation} skill={selectedSkill} />,
        "CD46": <Jeonranamdo className="semiMap" selectedCallback={selectedLocationSkills} locations={semiLocation} skill={selectedSkill} />,
        "CD26": <Busan className="semiMap" selectedCallback={selectedLocationSkills} locations={semiLocation} skill={selectedSkill} />,
        "CD25": <Seoul className="semiMap" selectedCallback={selectedLocationSkills} locations={semiLocation} skill={selectedSkill} />,
        "CD27": <Daegu className="semiMap" selectedCallback={selectedLocationSkills} locations={semiLocation} skill={selectedSkill} />,
        "CD30": <Daijeon className="semiMap" selectedCallback={selectedLocationSkills} locations={semiLocation} skill={selectedSkill} />,
        "CD29": <Gwangju className="semiMap" selectedCallback={selectedLocationSkills} locations={semiLocation} skill={selectedSkill} />,
        "CD28": <Incheon className="semiMap" selectedCallback={selectedLocationSkills} locations={semiLocation} skill={selectedSkill} />,
        "CD36": <Sejong className="semiMap" selectedCallback={selectedLocationSkills} locations={semiLocation} skill={selectedSkill} />,
        "CD31": <Ulsan className="semiMap" selectedCallback={selectedLocationSkills} locations={semiLocation} skill={selectedSkill} />
    }

    const callbacks = {
        onWordClick: searchLocationBySkill,
    };
    return (
        <div>
            <div style={{ display: 'flex' }}>
                <div>
                    <div>
                        <input type="radio" class="btn-check" name="options-outlined" id="company" autocomplete="off" />
                        <label class="btn btn-outline-success" for="company">회사</label>
                        <input type="radio" class="btn-check" name="options-outlined" id="skill" autocomplete="off" onChange={getAllSkills} />
                        <label class="btn btn-outline-success" for="skill">기술</label>
                        <input type="radio" class="btn-check" name="options-outlined" id="location" autocomplete="off" onChange={getAllLocations} />
                        <label class="btn btn-outline-success" for="location">지역</label>
                        {/* 
                        <label>
                            <input type="radio" value="1" name="test1" />
                            회사
                        </label>
                        <label>
                            <input type="radio" value="2" name="test1" onChange={getAllSkills} />
                            기술
                        </label>
                        <label>
                            <input type="radio" value="2" name="test1" onChange={getAllLocations} />
                            지역
                        </label> */}
                    </div>
                    {categoryActive && <div style={{ width: "100%" }}>
                        <button className="categoryAll" onClick={() => { setCategoryNavIsActive(!categoryNavIsActive) }}>전체</button>
                        <button className="more-button" onClick={() => { setCategoryNavIsActive(!categoryNavIsActive) }} type="button"><i className="jp-chevron-down"></i></button>
                        {/* <div style={{ display: 'flex', flexDirection: "row" }}> */}
                        {categoryNavIsActive && <ul className="item-nav__list">
                            {category && category.map((value, idx) => {
                                return (
                                    <li>
                                        {/* <input type="radio" name="category" onChange={() => getSkillsOfCategory(value)} /> */}
                                        {source && console.log(typeof (source))}
                                        <input type="checkbox" class="btn-check" onChange={() => { getSkillsOfCategory(value) }} id={idx + value} autocomplete="off"></input>
                                        <label class="btn btn-outline-secondary" for={idx + value}>{value}</label><br />
                                        {/* <button type="radio" name="category" onChange={() => getSkillsOfCategory(value)} /> */}

                                    </li>
                                )
                            })}
                        </ul>}
                    </div>}

                </div>

            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* <div>
                    표시될 단어 수<input type="text" />
                </div>
                <div style={{ position: "absolute", left: "50%" }}>
                    {pocusloations}
                </div> */}
                <div style={{width:"41%"}}>
                    {categoryActive && <div class="btn-group" style={{display:"flex",flexDirection:"row-reverse"}}>
                        <div>
                        <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            단어 수
                        </button>
                        <ul class="dropdown-menu">
                            <li onClick={() => {
                                setMaxWord(50)
                                console.log(maxWord)
                                }}>50</li>
                            <li onClick={() => {setMaxWord(100)}}>100</li>
                            <li onClick={() => {setMaxWord(150)}}>150</li>
                        </ul>
                        </div>
                        
                    </div>}
                    {categoryActive && <div style={{ marginTop: "5em", width: "100%", height: "50%" }}>
                        {<ReactWordcloud
                            callbacks={callbacks}
                            words={source}
                            options={options}
                            maxWords={maxWord} // TODO : 최대 노출 문자 지정하게 끔 기능 구현.
                            // size={[500,400]}
                        />}
                    </div>}

                </div>
                <div style={{ display: 'flex', width: "50%", height: "100%" }}>
                    <div style={{ display: 'flex', width: "50%", height: "100%" }}>
                        <Mapkr
                            click={(e) => { setSelectLocation(e.target[Object.keys(e.target)[1]].id) }}
                            className="semiMap" selectedCallback={selectedLocationSkills} locations={locations}
                            ref={testRef}
                        />
                        {/* <div>
                            {locations && <div style={{ display: 'flex', flexDirection: 'column', width: "11%" }}>
                                {Object.entries(locations).map((value, idx) => {
                                    return (
                                        value[0].length > 0 && value[1] > 0 && <div style={{ display: 'flex' }}>
                                            <div style={{ background: `hsl(10 100% ${68 - Math.log2(value[1]) * 5}%)`, width: "20px", borderRadius: '90%', padding: '0.2em' }} key={value[0] + idx}>
                                            </div >
                                            {value[0]} : {value[1]}
                                        </div>)
                                })}
                            </div>}
                        </div> */}
                    </div>


                    {selectLocation && selectedLocation[selectLocation]}
                </div>


            </div>
        </div>
    );
};

export default WordCloud;