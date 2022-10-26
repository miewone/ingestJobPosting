import { useState } from "react";
import WordCloud from "./components/WordCloud";
import words from "./components/words";
import words2 from "./components/words2";
import  {ReactComponent  as Kr} from './assets/kr.svg'
function App() {

  const [sousrce,setSource] = useState([]);
  return (
    <div >
      <label>
        <input type="radio" value="1" name="test1" onClick={() => setSource(words)}/>
        test
      </label>
      <label>
        <input type="radio" value="2" name="test1" onClick={() => setSource(words2)}/>
        test2
      </label>
      <WordCloud source={sousrce} />
      <Kr />
    </div>
  );
}

export default App;
