import ReactWordcloud from "react-wordcloud";
import { Resizable } from "re-resizable";
import words from "./components/words";

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

const resizeStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd"
};

function App() {
  return (
    <div >
      <Resizable
        defaultSize={{
          width: 500,
          height: 250
        }}
        style={resizeStyle}

      >
        <div style={{ width: "100%", height: "100%" }}>
          <ReactWordcloud words={words} options={options} />
        </div>
      </Resizable>
    </div>
  );
}

export default App;
