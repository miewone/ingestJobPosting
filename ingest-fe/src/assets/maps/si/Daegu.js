import React from "react";

const here = "대구";
class Daegu extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.locations)
    this.svgRef = React.createRef();
    console.log(this.svgRef)
    // this.svgRef.current.childNodes[1].map(value => {
    //   console.log(value)
    // })
  }
  componentDidMount(){
    this.props.selectedCallback(here,this.props.skill);
    Object.values(this.svgRef["current"].childNodes[1].childNodes).map(value => {
      value.style.fill = `${this.props.locations[Object.entries(value)[1][1].name] ? `hsl(10 100% ${68-Math.log2(this.props.locations[Object.entries(value)[1][1].name])*5}%)`:'rgb(166, 166, 166)'}`
    })
  }
  componentDidUpdate(prevProps) {
    
    if (this.props.locations !== prevProps.locations) {
      console.log(this.props.locations)
      Object.values(this.svgRef["current"].childNodes[1].childNodes).map(value => {
        value.style.fill = `${this.props.locations[Object.entries(value)[1][1].name] ? `hsl(10 100% ${68-Math.log2(this.props.locations[Object.entries(value)[1][1].name])*5}%)`:'rgb(166, 166, 166)'}`;
        value.textContent = value.textContent.split('\t')[0]
        if( this.props.locations[Object.entries(value)[1][1].name]){
          value.textContent += `\t( ${this.props.locations[Object.entries(value)[1][1].name]} )`
        }
      })
    }
    if(this.props.skill !== prevProps.skill){
      this.props.selectedCallback(here,this.props.skill);

    }
  }
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="600"
        height="600"
        overflow="hidden"
        ref={this.svgRef}
        viewBox="0 0 1000 1000"
      >
        <defs>
          <filter id="dropshadow">
            <feGaussianBlur in="SourceAlpha" stdDeviation="7" />
            <feOffset dx="0" dy="0" result="offsetblur" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="dropshadow2">
            <feGaussianBlur in="SourceAlpha" stdDeviation="1.4" />
            <feOffset dx="1" dy="1" result="offsetblur" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g filter="url(#dropshadow)"><path name="중구" id="CD27110" class="OUTLINE" d="M 476 366 l 14 5 -2 18 -4 18 -12 -3 -14 -3 -16 1 -7 -3 -9 -7 7 -21 -1 -8 3 1 0 -6 20 3 13 2 z " />
          <path name="동구" id="CD27140" class="OUTLINE" d="M 624 83 l 11 7 22 5 14 7 7 12 8 8 -2 8 -2 6 4 9 8 10 10 7 -1 17 -1 6 -6 11 2 11 3 8 2 8 -5 12 -4 12 3 13 6 10 10 6 11 9 3 16 1 18 5 18 -3 21 1 14 -9 16 -8 9 -10 7 -14 3 -11 -2 -6 -9 -17 -5 -20 6 -19 -2 -13 -5 -7 -16 -12 -7 -14 -1 -9 -5 -13 -3 -11 7 -10 5 -11 11 -27 -10 -6 -9 -3 -2 7 -7 7 -13 20 -8 6 -4 0 -2 -5 -8 -2 -15 7 -9 1 -9 -1 -20 -3 -9 -6 -9 -2 -21 -3 -16 1 -17 -4 -13 -5 -8 -3 -15 -11 -13 -8 -6 4 -13 4 -7 11 -16 10 -3 21 -5 7 -3 5 0 9 3 11 -1 9 -1 12 -5 22 -4 z " />
          <path name="서구" id="CD27170" class="OUTLINE" d="M 437 343 l -2 15 0 6 -3 -1 1 8 -7 21 -22 6 -6 3 -18 3 -7 -2 -10 -6 -13 -7 -6 -8 -10 -3 6 -7 -1 -9 -4 -9 3 -7 9 -4 19 -4 19 -13 15 9 19 4 z " />
          <path name="남구" id="CD27200" class="OUTLINE" d="M 435 399 l 7 3 16 -1 14 3 12 3 -1 14 0 4 -1 7 -1 15 2 12 -3 5 -8 18 -10 8 -8 9 -12 -5 -7 -8 -10 -9 -6 -9 -12 -10 -6 -10 5 -16 9 -10 10 -11 1 -19 z " />
          <path name="북구" id="CD27230" class="OUTLINE" d="M 496 157 l 3 15 5 8 4 13 -1 17 3 16 2 21 6 9 3 9 1 20 -1 9 -7 9 2 15 5 8 0 2 -6 4 -20 8 -7 13 -7 7 3 2 6 9 -14 -5 -8 -3 -13 -2 -20 -3 2 -15 -18 -5 -19 -4 -15 -9 -19 13 -19 4 -20 -12 -15 5 2 -18 3 -12 9 -10 10 -8 7 -9 8 -11 5 -13 4 -9 0 -18 -2 -16 1 -17 -6 -6 -3 -17 0 -12 17 1 11 13 8 15 7 -4 6 -11 12 -6 10 -7 19 -3 13 -4 8 -9 16 -6 8 6 z " />
          <path name="수성구" id="CD27260" class="OUTLINE" d="M 454 499 l 8 -9 10 -8 8 -18 3 -5 -2 -12 1 -15 1 -7 0 -4 1 -14 4 -18 2 -18 27 10 11 -11 10 -5 11 -7 13 3 9 5 14 1 12 7 7 16 13 5 19 2 20 -6 17 5 6 9 -4 25 -3 11 -11 5 -11 17 8 18 0 20 -10 11 -11 8 -13 2 -9 7 -10 2 -3 -4 -2 0 -5 -3 -11 -3 -20 -5 -8 -7 -4 -1 -9 1 -13 -1 -11 1 -11 -5 -9 5 -8 -3 -18 -3 z " />
          <path name="달서구" id="CD27290" class="OUTLINE" d="M 334 378 l 10 3 6 8 13 7 10 6 7 2 18 -3 6 -3 22 -6 -1 19 -10 11 -9 10 -5 16 6 10 12 10 6 9 10 9 7 8 12 5 -5 15 -12 8 -15 1 -1 14 1 19 -8 11 -13 2 -7 -10 -8 -8 -8 -9 -13 0 -15 -10 -8 -7 -9 -12 -7 -11 -6 -12 -6 -4 -27 -5 -8 3 -1 -18 -10 -13 -11 -11 2 -15 3 -20 8 -16 9 -10 7 0 8 5 18 0 8 -3 z " />
          <path name="달성군" id="CD27710" class="OUTLINE" d="M 314 486 l 6 4 6 12 7 11 9 12 8 7 15 10 13 0 8 9 8 8 7 10 13 -2 8 -11 -1 -19 1 -14 15 -1 12 -8 5 -15 19 4 18 3 8 3 9 -5 11 5 11 -1 13 1 9 -1 4 1 8 7 20 5 11 3 5 3 2 0 4 9 1 13 5 10 3 14 8 18 5 8 0 3 -1 10 -4 17 -1 17 -6 12 -7 7 1 5 -3 2 -8 0 -15 4 -18 6 -10 9 -10 8 -17 4 -11 3 -6 4 -9 -6 -5 -8 1 -15 -6 -17 0 -20 -19 -2 -18 6 -18 -6 -20 4 -8 7 -7 7 -15 9 -8 9 -12 6 -10 7 -3 1 4 7 4 19 2 15 -5 17 -12 5 -19 15 -5 21 -2 18 5 19 -5 10 -12 3 -16 5 -16 -2 -22 0 -19 -1 -15 4 -8 9 -9 8 -7 11 -6 -2 -6 -3 -6 6 -5 0 0 1 -5 6 -9 8 -5 0 -2 -4 -2 3 -3 -1 -7 2 -14 8 -13 7 -14 -5 8 -7 11 -5 11 -8 7 -10 6 -10 5 -17 -4 -18 -7 -8 -8 -7 -12 -9 -9 -8 -10 -10 -9 -9 -8 -10 -6 -10 -7 -19 -2 -18 9 -14 16 3 8 3 9 4 19 3 21 5 11 3 9 2 7 0 9 -5 12 -11 4 -8 0 -23 -4 -12 -10 -9 -8 -7 -11 -8 -12 -6 -13 -7 -10 -7 -8 -11 -6 -9 0 -7 5 -9 8 -15 7 -10 4 -8 7 -20 5 -11 8 -9 8 -9 8 -4 32 1 10 3 20 0 19 -2 9 -10 10 -10 8 -3 z M 242 236 l 3 3 9 1 12 11 0 6 -4 11 -1 15 -9 16 6 21 15 5 8 3 1 -4 7 -2 8 11 15 2 15 -5 20 12 -9 4 -3 7 4 9 1 9 -6 7 -14 5 -8 3 -18 0 -8 -5 -7 0 -9 10 -5 8 -3 8 -3 20 -2 15 -19 -11 -19 -8 -18 -3 -8 -2 -10 -1 -14 -2 -23 -1 -20 1 -10 -7 0 -16 4 -11 4 -8 5 -18 6 -15 5 -10 7 -12 15 -18 9 -18 4 -9 11 -12 7 -6 7 -2 21 -8 8 -10 0 -2 0 -1 z " />
        </g><g filter="url(#dropshadow2)"><path class="LINE" d="M 221 361 l -65 97 -79 0 M 274 638 l -118 -180 " />
          <circle class="POINT" cx="221" cy="361" r="2" />
          <circle class="POINT" cx="274" cy="638" r="2" />
        </g><g filter="url(#dropshadow2)"><text id="LCD27110" class="TEXT" x="459" y="382">중구</text>
          <text id="LCD27140" class="TEXT" x="608" y="243">동구</text>
          <text id="LCD27170" class="TEXT" x="387" y="365">서구</text>
          <text id="LCD27200" class="TEXT" x="447" y="445">남구</text>
          <text id="LCD27230" class="TEXT" x="431" y="256">북구</text>
          <text id="LCD27260" class="TEXT" x="571" y="446">수성구</text>
          <text id="LCD27290" class="TEXT" x="355" y="461">달서구</text>
          <text id="LCD27710" class="TEXT" x="77" y="458">달성군</text>
        </g></svg>
    );
  }
}

export default Daegu;
