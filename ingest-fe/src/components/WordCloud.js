import React, { useState, useEffect, useRef } from 'react';
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
import Modal from "../components/utils/Modal"
import JobPostingList from './JobPostingList';
import "../assets/style/wordcloud.css";
import Logo from "../assets/icon/guchung.jpg"
import Point from "../assets/icon/point.png"
let CounterKrLocations = "";


let selectedCategory = [];
const Counter = (array) => {
    var count = {};
    array.forEach(val => count[val] = (count[val] || 0) + 1);
    return count;
};

const options = {
    colors: ["#2B3A55", "#CE7777", "#E8C4C4"],
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
    const [modalOpen, setModalOpen] = useState(false);
    const [describe, setDescribe] = useState(true);
    const testRef = useRef();
    const [xy, setXY] = useState({ x: 0, y: 0 })
    const [tipVisible, setTipVisible] = useState(false);
    // const [allLocations,setAllLocations] = useState({});



    const selectedLocationSkills = async (location, skill) => {
        await axios.post("/jobinfo/semilocation",
            {
                "location": location,
                "skills": skill
            }).then((res) => {
                console.log("로케이션~~")
                console.log(res.data)
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
                console.log(res.data);
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
        setSource([]);
        setSelectSkill("");
        categoryActive = false;
        await axios.get('/jobinfo/exposebylocation')
            .then((res) => {
                setLocations(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const getSkillsOfCategory = async (category) => {
        if (selectedCategory.includes(category)) {
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
        setSource(sourcies);
    }
    const selectedLocation = {
        "충청북도": <Chungcheongbuk className="semiMap" selectedCallback={selectedLocationSkills} locations={semiLocation} skill={selectedSkill} />,
        "충청남도": <Chungcheongnam className="semiMap" selectedCallback={selectedLocationSkills} locations={semiLocation} skill={selectedSkill} />,
        "강원도": <Gangwon className="semiMap" selectedCallback={selectedLocationSkills} locations={semiLocation} skill={selectedSkill} />,
        "경기": <Gyeonggl className="semiMap" selectedCallback={selectedLocationSkills} locations={semiLocation} skill={selectedSkill} />,
        "경상북도": <Gyeosangbuk className="semiMap" selectedCallback={selectedLocationSkills} locations={semiLocation} skill={selectedSkill} />,
        "경상남도": <Gyeosangnam className="semiMap" selectedCallback={selectedLocationSkills} locations={semiLocation} skill={selectedSkill} />,
        "제주도": <Jejuo className="semiMap" selectedCallback={selectedLocationSkills} locations={semiLocation} skill={selectedSkill} />,
        "전라북도": <Jeonlabukdo className="semiMap" selectedCallback={selectedLocationSkills} locations={semiLocation} skill={selectedSkill} />,
        "전라남도": <Jeonranamdo className="semiMap" selectedCallback={selectedLocationSkills} locations={semiLocation} skill={selectedSkill} />,
        "부산": <Busan className="semiMap" selectedCallback={selectedLocationSkills} locations={semiLocation} skill={selectedSkill} />,
        "서울": <Seoul className="semiMap" selectedCallback={selectedLocationSkills} locations={semiLocation} skill={selectedSkill} />,
        "대구": <Daegu className="semiMap" selectedCallback={selectedLocationSkills} locations={semiLocation} skill={selectedSkill} />,
        "대전": <Daijeon className="semiMap" selectedCallback={selectedLocationSkills} locations={semiLocation} skill={selectedSkill} />,
        "광주": <Gwangju className="semiMap" selectedCallback={selectedLocationSkills} locations={semiLocation} skill={selectedSkill} />,
        "인천": <Incheon className="semiMap" selectedCallback={selectedLocationSkills} locations={semiLocation} skill={selectedSkill} />,
        "세종": <Sejong className="semiMap" selectedCallback={selectedLocationSkills} locations={semiLocation} skill={selectedSkill} />,
        "울산": <Ulsan className="semiMap" selectedCallback={selectedLocationSkills} locations={semiLocation} skill={selectedSkill} />
    }

    const callbacks = {
        onWordClick: searchLocationBySkill,
    };
    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    const openDescribe = () => {
        setDescribe(true);
    };
    const closeDescribe = () => {
        setDescribe(false);
    };
    return (
        <div style={{ width: "85%", margin: "2em" }}>
            <div>
                <div>
                    <div className='headnav'>
                        <Modal open={describe} close={closeDescribe} header="설명" className="describe">
                            <main style={{ display: "flex"}}>
                                <div style={{ display: "flex", flexDirection:"column"}}>
                                <input type="radio" className="btn-check" name="options-outlined" id="skill" autoComplete="off"/>
                                <label className="btn btn-outline-success" for="skill">기술</label>
                                <input type="radio" className="btn-check" name="options-outlined" id="location" autoComplete="off"/>
                                <label className="btn btn-outline-success" for="location">지역</label>
                                <span>
                                위 버튼을 누르면 워드맵과 지역에 표시가 됩니다.
                                </span>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <span>
                                지도에서 클릭 이벤트가 일어나면 상세보기가 가능합니다.>>
                                </span>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <span>
                                확인 하셨으면 <button type="button" onClick={closeDescribe} class="btn btn-primary btn-lg">닫기</button>를 눌러주세요!
                                </span>
                                </div>
                                <div >
                                    <Mapkr/>
                                </div>
                            </main>
                        </Modal>
                        {selectLocation && <Modal open={modalOpen} close={closeModal} header={selectLocation + "\t\t" + selectedSkill}>
                            <main style={{ display: "flex" }}>
                                <div style={{ width: "38%", display: "flex", alignContent: "center", justifyContent: "center" }}>

                                    {selectLocation && selectedLocation[selectLocation]}
                                </div>
                                <div style={{ width: "62%" }}>
                                    <JobPostingList skill={selectedSkill} location={selectLocation} />
                                </div>
                            </main>
                        </Modal>}
                        <nav className='nav'>
                            {/* <input type="radio" className="btn-check" name="options-outlined" id="company" autoComplete="off" />
                            <label className="btn btn-outline-success" for="company">회사</label>
                            <input type="radio" className="btn-check" name="options-outlined" id="jobs" autoComplete="off" />
                            <label className="btn btn-outline-success" for="jobs">직무</label> */}
                            <img src={Logo} width="14%" />
                            <input type="radio" className="btn-check" name="options-outlined" id="skill" autoComplete="off" onChange={getAllSkills} />
                            <label className="btn btn-outline-success" for="skill">기술</label>
                            <input type="radio" className="btn-check" name="options-outlined" id="location" autoComplete="off" onChange={getAllLocations} />
                            <label className="btn btn-outline-success" for="location">지역</label>
                            {categoryActive &&
                                <div>
                                    <button className="categoryAll" onClick={() => { setCategoryNavIsActive(!categoryNavIsActive) }}>카테고리 선택</button>
                                    <button className="more-button" onClick={() => { setCategoryNavIsActive(!categoryNavIsActive) }} type="button"><i className="jp-chevron-down"></i></button>
                                </div> 
                                }
                        </nav>
                        <div>
                            {categoryNavIsActive && <ul className="item-nav__list">
                                {category && category.map((value, idx) => {
                                    return (
                                        <li>
                                            {/* <input type="radio" name="category" onChange={() => getSkillsOfCategory(value)} /> */}
                                            {source && console.log(typeof (source))}
                                            <input type="checkbox" className="btn-check" onChange={() => { getSkillsOfCategory(value) }} id={idx + value} autocomplete="off"></input>
                                            <label className="btn btn-outline-secondary categorylist" for={idx + value}>{value}</label><br />
                                            {/* <button type="radio" name="category" onChange={() => getSkillsOfCategory(value)} /> */}

                                        </li>
                                    )
                                })}
                            </ul>}
                        </div>
                    </div>


                </div>

            </div>

            <div className='itembody'>
                <div style={{ width: categoryActive ? "41%" : "1%" }}>
                    <div>
                        {<div className="btn-group" style={{ display: "flex", flexDirection: "row-reverse" }}>
                            {source.length > 1 && <div>
                                <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    단어 수
                                </button>
                                <ul className="dropdown-menu">
                                    <li onClick={() => { setMaxWord(50) }}>50</li>
                                    <li onClick={() => { setMaxWord(100) }}>100</li>
                                    <li onClick={() => { setMaxWord(150) }}>150</li>
                                </ul>
                            </div>}

                        </div>}
                        {
                            <div style={{ marginTop: "5em", width: "100%", height: "50%" }}>
                                {source.length > 1 && <ReactWordcloud
                                    callbacks={callbacks}
                                    words={source}
                                    options={options}
                                    maxWords={maxWord} // TODO : 최대 노출 문자 지정하게 끔 기능 구현.
                                // size={[500,400]}
                                /> }
                            </div>
                        }
                    </div>

                </div>
                <div style={{ display: 'flex', width: "50%", height: "100%", alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', width: "50%", height: "100%" }}>
                        <Mapkr
                            click={(e) => {
                                // if(selectedSkill.length > 1){
                                setSelectLocation(e.target[Object.keys(e.target)[1]].id)
                                e.target[Object.keys(e.target)[1]].id && openModal();
                                // }
                            }}
                            hover={(e) => {
                                if (selectedSkill.length < 1) {
                                    setXY({ x: e.clientX, y: e.clientY });
                                    setTipVisible(true);
                                }
                            }}
                            leave={(e) => {
                                setTipVisible(false);

                            }}

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

                </div>


            </div>
            {selectedSkill.length < 1 && locations.length < 1 && tipVisible && <div className='tip' style={{ position: "absolute", left: xy.x, top: xy.y + 30, zIndex: "99" }}>
                먼저 눌러주세요!
            </div>}

        </div>
    );
};

export default WordCloud;