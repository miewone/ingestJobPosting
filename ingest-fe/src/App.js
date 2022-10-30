import React, { useState, useEffect, useRef } from 'react';

import WordCloud from "./components/WordCloud";
import words from "./components/words";
import words2 from "./components/words2";
import axios from "axios";

const Counter = (array) => {
    var count = {};
    array.forEach(val => count[val] = (count[val] || 0) + 1);
    return count;
}

let jobpostingSkills = []

const App = () => {
    const [sousrce, setSource] = useState([]);
    useEffect(() => {
        const apiGetSkills = async () => {
            await axios.get("/jobinfo/skills")
                .then((res) => {
                    jobpostingSkills = Object.entries(Counter(res.data)).map(values => {return {text : values[0].toUpperCase()  ,value : Math.log2(values[1]) * 10}});
                    setSource(jobpostingSkills);
                })
                .catch((err) => {
                    console.log(err);
                })
        };
        sousrce != undefined ? apiGetSkills() : sousrce
    }, [])
    return (
        <div >
            <label>
                <input type="radio" value="1" name="test1" onClick={() => setSource(jobpostingSkills)} />
                test
            </label>
            <label>
                <input type="radio" value="2" name="test1" onClick={() => setSource(words2)} />
                test2
            </label>
            <WordCloud source={sousrce} />
            
        </div>
    );
};

export default App;