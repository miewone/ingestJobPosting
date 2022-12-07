import React from "react";

const here = "세종";
class Sejongsi extends React.Component {
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
        viewBox="0 0 1000 1200"
        ref={this.svgRef}

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
        <g filter="url(#dropshadow)"><path name="반곡동" id="CD36110101" class="OUTLINE" d="M 521 807 l -4 12 1 7 -3 0 -2 -2 -1 7 0 7 0 0 -1 6 -18 3 -5 -7 1 -1 0 -1 0 0 0 0 -3 -6 -5 -9 -13 -10 4 -7 5 -6 2 -2 1 0 3 -5 7 -8 6 -5 12 2 4 3 1 -1 1 2 5 8 z " />
          <path name="소담동" id="CD36110102" class="OUTLINE" d="M 481 823 l 5 9 3 6 0 0 0 0 0 1 -1 1 5 7 -8 3 -5 3 -11 2 -3 -8 -5 -8 0 -1 -1 0 -3 -7 4 -7 0 -1 7 -10 z " />
          <path name="보람동" id="CD36110103" class="OUTLINE" d="M 457 831 l 3 7 1 0 0 1 5 8 3 8 -10 8 -6 3 -13 5 -8 -2 -8 -8 -7 -2 9 -5 7 -4 8 -4 9 -6 z " />
          <path name="대평동" id="CD36110104" class="OUTLINE" d="M 401 896 l -5 -6 -9 -4 4 -13 9 -6 6 -3 11 -5 7 2 8 8 8 2 -6 6 -7 4 -11 4 z " />
          <path name="가람동" id="CD36110105" class="OUTLINE" d="M 346 897 l -7 -1 -6 -7 -6 -8 -4 -10 10 -13 9 -5 -1 -1 0 -2 4 -1 -1 10 6 9 17 8 -7 12 -3 4 z " />
          <path name="한솔동" id="CD36110106" class="OUTLINE" d="M 367 876 l -17 -8 -6 -9 1 -10 18 -7 7 -3 1 -4 5 9 1 11 -10 7 1 3 1 3 -1 3 1 2 z " />
          <path name="나성동" id="CD36110107" class="OUTLINE" d="M 390 815 l 9 6 5 9 -4 15 -11 4 -7 2 0 0 0 0 -5 4 -1 -11 -5 -9 -4 -8 -5 -9 2 -13 11 4 z " />
          <path name="새롬동" id="CD36110108" class="OUTLINE" d="M 326 830 l 0 -9 9 1 13 -4 14 0 5 9 4 8 -1 4 -7 3 -18 7 -4 1 0 2 1 1 -6 -1 -2 -9 -2 -7 z " />
          <path name="다정동" id="CD36110109" class="OUTLINE" d="M 326 821 l -6 -19 -5 -4 -5 -7 14 -2 11 1 12 2 13 -1 4 14 -2 13 -14 0 -13 4 z " />
          <path name="어진동" id="CD36110110" class="OUTLINE" d="M 364 805 l -4 -14 0 -13 -1 -11 17 -3 12 0 15 2 5 5 1 1 0 -1 -1 0 6 -4 -6 -5 9 -2 4 8 -4 5 -4 3 -8 4 3 4 0 1 -5 5 -5 12 -3 5 0 1 -7 2 2 5 -15 -6 z " />
          <path name="종촌동" id="CD36110111" class="OUTLINE" d="M 359 767 l 1 11 0 13 -13 1 -12 -2 -11 -1 5 -3 1 -7 4 -14 15 1 z " />
          <path name="고운동" id="CD36110112" class="OUTLINE" d="M 325 686 l 8 3 6 5 6 7 3 9 -4 10 -7 7 -6 11 0 12 3 15 -4 14 -1 7 -5 3 -14 2 -5 -13 -4 -7 -3 -5 -4 -12 -6 -5 1 -3 4 -8 6 -13 4 -4 1 -9 -4 -5 -7 -9 4 -8 13 0 z " />
          <path name="아름동" id="CD36110113" class="OUTLINE" d="M 359 767 l -10 -1 -15 -1 -3 -15 0 -12 6 -11 7 -7 4 -10 13 0 15 3 -2 11 -9 8 -4 -1 -2 6 -2 12 z " />
          <path name="도담동" id="CD36110114" class="OUTLINE" d="M 359 767 l -2 -18 2 -12 2 -6 4 1 9 -8 2 -11 11 3 2 9 1 13 5 5 1 2 -2 3 2 2 -3 2 1 7 9 7 -15 -2 -12 0 z " />
          <path name="조치원읍" id="CD36110250" class="OUTLINE" d="M 485 498 l -2 14 -4 11 -7 6 0 5 10 8 -4 6 -4 8 -8 3 -11 -6 -9 -3 -1 -10 5 -7 0 -4 -7 -5 -7 -8 -3 -7 -7 -8 -11 0 -11 -2 -5 -14 -2 -11 -5 -5 -5 -10 -8 -6 -4 -9 3 -7 2 2 2 -1 0 -3 4 -5 14 -1 9 -4 -1 -2 6 -6 6 -8 3 -6 1 -10 15 -4 7 -5 3 0 3 8 -2 11 4 14 9 5 0 5 -1 5 0 3 9 9 2 10 3 4 -1 2 0 5 0 0 -1 4 3 5 8 10 z " />
          <path name="연기면" id="CD36110310" class="OUTLINE" d="M 443 633 l 6 5 6 5 11 11 6 -3 -2 8 2 11 2 11 1 4 0 1 1 3 6 6 12 6 7 4 7 3 11 6 6 8 4 9 5 7 14 1 14 -2 13 -1 11 2 -2 10 -10 3 -12 4 -12 2 -6 2 -8 2 -13 3 -14 5 -6 3 -7 8 -6 5 -7 8 -3 5 -1 0 -2 2 -5 6 -6 10 -5 7 0 1 -4 7 -7 9 -9 6 -8 4 -7 4 -9 5 -11 5 -6 3 -9 6 -4 13 9 4 5 6 -12 1 -15 4 -5 4 -7 4 -13 -1 -8 2 4 -3 -1 -2 -6 1 -6 -10 -3 -6 -5 -4 -8 -9 -1 -3 4 -7 7 -4 5 -6 5 -5 6 1 -9 5 -10 13 4 10 6 8 6 7 7 1 11 -5 3 -4 7 -12 2 -3 -1 -2 1 -3 -1 -3 -1 -3 10 -7 5 -4 0 0 0 0 7 -2 11 -4 4 -15 -5 -9 -9 -6 -2 -5 7 -2 0 -1 3 -5 5 -12 5 -5 0 -1 -3 -4 8 -4 4 -3 4 -5 -4 -8 -9 2 6 5 -6 4 1 0 0 1 -1 -1 -5 -5 -9 -7 -1 -7 3 -2 -2 -2 2 -3 -1 -2 -5 -5 -1 -13 -2 -9 -11 -3 -15 -3 -13 0 -3 -9 -6 -7 -6 -5 -8 -3 -15 4 -13 0 -4 8 -13 0 -13 -3 -5 -5 -1 -2 3 -5 0 -10 4 -16 6 -8 2 -2 -2 -2 2 -3 3 -12 15 -1 13 0 16 3 11 2 13 1 7 4 7 1 8 -1 7 -4 12 -1 5 7 4 1 7 -11 3 -7 2 0 1 0 4 1 6 -1 9 -2 z " />
          <path name="연동면" id="CD36110320" class="OUTLINE" d="M 524 544 l 1 4 6 6 5 9 10 5 5 7 6 5 -1 6 -1 2 3 6 5 8 11 -3 14 2 12 4 -6 4 5 9 6 11 5 11 -6 8 -3 10 1 12 0 15 3 16 5 3 5 7 7 10 -2 4 -5 9 -19 0 -10 4 -11 -2 -13 1 -14 2 -14 -1 -5 -7 -4 -9 -6 -8 -11 -6 -7 -3 -7 -4 -12 -6 -6 -6 -1 -3 0 -1 -1 -4 -2 -11 -2 -11 2 -8 -6 3 -1 -10 3 -14 5 -11 3 -7 1 -9 3 -13 6 -12 -5 -14 -5 -7 -2 -1 4 -8 4 -6 14 2 11 -1 z " />
          <path name="부강면" id="CD36110330" class="OUTLINE" d="M 636 821 l -8 -3 -11 -5 -6 -4 -9 -6 -5 -12 7 -12 5 -7 7 -6 7 -7 5 -6 -4 -10 -9 -9 5 -9 2 -4 -7 -10 -5 -7 -5 -3 -3 -16 0 -15 -1 -12 3 -10 6 -8 -5 -11 -6 -11 -5 -9 6 -4 15 -2 13 -4 6 -4 8 -3 12 -2 -6 6 -3 4 9 2 -8 13 6 4 7 10 0 12 7 5 5 13 2 8 8 1 14 2 15 -2 8 8 5 8 2 14 5 6 0 6 1 9 -9 1 -14 6 4 8 7 6 4 14 5 4 3 7 -1 10 -2 5 2 3 0 3 -1 3 3 4 1 9 -10 5 -13 3 -7 2 -3 1 -8 -7 -5 -5 -7 -6 -13 -5 -6 5 -5 7 z " />
          <path name="금남면" id="CD36110340" class="OUTLINE" d="M 615 819 l -4 14 2 10 6 15 5 5 -1 3 -4 8 -6 12 -2 8 -5 3 1 13 2 6 1 5 -4 6 -5 12 -6 7 -4 -2 -5 4 -7 6 -4 11 -4 9 -3 6 -1 11 -7 10 -9 6 -7 6 -9 5 -14 0 -12 4 -13 -9 -15 0 -12 5 -11 3 -4 9 -9 8 -5 1 -12 1 -12 2 -11 -2 -7 -3 -9 -2 -10 1 -7 9 -1 13 -11 4 -10 -2 -7 -10 -6 -7 -3 -12 -13 -1 -10 -3 -6 -7 -10 -2 -4 -11 -5 -5 -7 -9 -5 -6 -7 -4 -8 -4 10 0 13 -2 9 -4 3 -8 2 -14 2 -14 3 -7 4 -7 7 -6 10 -6 12 -5 10 -1 1 2 -4 3 8 -2 13 1 7 -4 5 -4 15 -4 12 -1 15 -11 11 -4 7 -4 6 -6 13 -5 6 -3 10 -8 11 -2 5 -3 8 -3 18 -3 1 -6 0 0 0 -7 1 -7 2 2 3 0 -1 -7 4 -12 -2 -13 -5 -8 -1 -2 -1 1 -4 -3 -12 -2 7 -8 6 -3 14 -5 13 -3 8 -2 6 -2 12 -2 12 -4 10 -3 2 -10 10 -4 19 0 9 9 4 10 -5 6 -7 7 -7 6 -5 7 -7 12 5 12 9 6 6 4 11 5 8 3 -6 2 z " />
          <path name="장군면" id="CD36110350" class="OUTLINE" d="M 326 830 l 6 6 2 7 2 9 -5 5 -5 6 -7 4 -4 7 1 3 8 9 5 4 3 6 6 10 -16 5 -10 6 -7 6 -4 7 -3 7 -2 14 -2 14 -3 8 -9 4 -13 2 -10 0 -16 -4 -8 -4 -2 -8 1 -10 1 -4 0 -3 -2 -7 -3 -11 8 -6 3 -11 -1 -13 -4 -9 -8 -1 -9 -8 -3 -8 -4 -11 1 -16 6 -13 -2 -12 -10 -7 -7 -3 -11 -1 -6 3 -2 -1 -6 -4 -5 -10 -2 -3 5 -6 3 -10 -6 -10 -7 -5 0 -11 5 -7 7 -6 8 -6 3 -10 -3 -8 -4 -6 -5 -10 -3 -9 -3 -2 0 -3 -1 -4 1 -2 2 -7 6 -14 11 -3 13 0 13 -3 -2 -3 -6 -7 -2 -11 4 -10 2 -6 4 -9 6 -10 9 0 10 -7 3 -13 4 -7 5 -6 5 -7 7 0 -1 1 1 1 1 6 4 14 5 14 2 7 1 3 0 3 1 4 0 7 -1 7 0 1 4 6 -3 12 -2 3 2 2 -2 2 -6 8 -4 16 0 10 -3 5 1 2 5 5 13 3 13 0 7 9 4 5 -1 9 -4 4 -6 13 -4 8 -1 3 7 5 3 12 3 5 4 7 5 13 5 7 5 4 6 19 z " />
          <path name="연서면" id="CD36110360" class="OUTLINE" d="M 217 486 l 6 -6 2 -10 1 -13 4 -9 12 -5 8 -4 6 -6 12 0 14 1 5 5 8 4 11 -4 10 -1 7 -1 6 0 3 2 7 -3 3 1 4 1 6 -3 8 0 10 2 8 0 -3 7 4 9 8 6 5 10 5 5 2 11 5 14 11 2 11 0 7 8 3 7 7 8 7 5 0 4 -5 7 1 10 9 3 11 6 8 -3 2 1 5 7 5 14 -6 12 -3 13 -1 9 -3 7 -5 11 -3 14 1 10 -11 -11 -6 -5 -6 -5 -14 -11 -9 2 -6 1 -4 -1 -1 0 -2 0 -3 7 -7 11 -4 -1 -5 -7 -12 1 -7 4 -8 1 -7 -1 -7 -4 -13 -1 -11 -2 -16 -3 -13 0 -15 1 -4 -6 0 -1 1 -7 0 -7 -1 -4 0 -3 -1 -3 -2 -7 -5 -14 -4 -14 -1 -6 -1 -1 1 -1 -8 -1 -12 -7 -8 -3 -1 -1 -6 3 -8 2 -8 -10 -4 -7 2 -10 2 -10 -7 -1 5 -6 5 -7 z " />
          <path name="전의면" id="CD36110370" class="OUTLINE" d="M 223 480 l -6 6 -3 12 -5 7 -5 6 -8 9 -7 -11 -5 -5 -3 -1 1 -1 -6 1 -8 2 -1 0 -4 -8 -7 -10 -7 -5 -9 -4 -6 -3 -7 -5 -1 -11 -3 -16 -9 -8 5 -7 6 -7 10 -2 -6 -15 3 -14 -2 -12 -2 -7 1 -2 -5 -6 -1 -13 2 -12 6 -6 7 -10 -5 -11 -7 -12 5 -14 6 -11 7 -7 3 -10 -3 -13 -2 -7 -3 -7 3 -5 -1 -1 -7 -8 -3 -7 -6 -8 -3 -11 -4 -15 3 -5 3 1 2 -2 8 4 7 -3 7 -5 8 4 4 3 5 -2 8 -2 8 4 1 3 -1 2 5 1 11 5 1 1 1 -1 5 3 12 1 9 0 7 -7 2 -11 10 -6 3 -8 4 -7 2 -7 13 1 4 5 11 3 9 3 3 10 8 8 4 1 7 -2 3 0 6 8 6 9 8 6 4 10 10 6 -1 8 -5 11 -4 6 -6 7 -11 2 -14 1 -7 -5 -7 -6 -11 1 -6 5 -5 6 1 10 3 8 3 10 -1 8 -11 2 -6 -4 -7 -6 -3 9 -3 5 1 2 1 2 1 -1 2 7 -4 9 -7 7 -6 5 -2 6 1 5 0 1 4 7 3 14 -3 12 3 14 -1 13 3 14 4 9 6 5 2 15 -6 6 -8 4 -12 5 -4 9 -1 13 z " />
          <path name="전동면" id="CD36110380" class="OUTLINE" d="M 424 393 l -1 10 -3 6 -6 8 -6 6 1 2 -9 4 -14 1 -4 5 0 3 -2 1 -2 -2 -8 0 -10 -2 -8 0 -6 3 -4 -1 -3 -1 -7 3 -3 -2 -6 0 -7 1 -10 1 -11 4 -8 -4 -5 -5 -14 -1 -12 0 -2 -15 -6 -5 -4 -9 -3 -14 1 -13 -3 -14 3 -12 -3 -14 -4 -7 0 -1 -1 -5 2 -6 6 -5 7 -7 4 -9 -2 -7 -1 1 -1 -2 -1 -2 3 -5 3 -9 7 6 6 4 11 -2 1 -8 -3 -10 -3 -8 -1 -10 5 -6 6 -5 11 -1 7 6 7 5 14 -1 11 -2 6 -7 4 -6 5 -11 1 -8 9 -2 7 6 10 5 16 1 10 -5 13 2 11 6 5 3 11 2 13 8 15 4 12 3 9 7 -1 8 0 7 -3 8 0 12 -5 11 -6 8 -8 9 -11 4 -10 1 -2 8 -4 11 -3 9 -5 7 -3 13 -5 7 -2 -1 -4 -1 -3 8 5 11 z " />
          <path name="소정면" id="CD36110390" class="OUTLINE" d="M 253 141 l -2 7 -4 7 -3 8 -10 6 -2 11 -7 7 -9 0 -12 -1 -5 -3 -1 1 -1 -1 -11 -5 -5 -1 1 -2 -1 -3 -8 -4 -8 2 -5 2 -4 -3 -8 -4 -7 5 -7 3 -8 -4 -2 2 -3 -1 -3 5 4 15 3 11 6 8 3 7 -8 7 -9 3 -4 -1 -3 -2 -5 2 -8 1 -2 -9 -3 -12 -5 -5 -3 -10 -5 -12 -12 -4 2 -9 7 -7 7 -4 11 -7 9 -3 5 -8 4 -12 5 -6 5 -5 10 -3 7 -10 13 -3 7 2 8 6 5 5 17 -1 13 2 11 1 16 2 12 8 4 11 z " />
        </g><g filter="url(#dropshadow2)"><path class="LINE" d="M 411 877 l -68 234 " />
          <path class="LINE" d="M 445 855 l -13 259 " />
          <path class="LINE" d="M 472 838 l 83 251 " />
          <path class="LINE" d="M 501 813 l 173 143 " />
          <path class="LINE" d="M 318 712 l -262 -142 " />
          <path class="LINE" d="M 349 741 l -287 -89 " />
          <path class="LINE" d="M 342 877 l -200 214 " />
          <path class="LINE" d="M 362 855 l -236 155 " />
          <path class="LINE" d="M 383 831 l -298 117 " />
          <path class="LINE" d="M 346 831 l -278 51 " />
          <path class="LINE" d="M 339 803 l -277 7 " />
          <path class="LINE" d="M 343 777 l -283 -44 " />
          <circle class="POINT" cx="318" cy="712" r="2" />
          <circle class="POINT" cx="349" cy="741" r="2" />
          <circle class="POINT" cx="343" cy="777" r="2" />
          <circle class="POINT" cx="339" cy="803" r="2" />
          <circle class="POINT" cx="346" cy="831" r="2" />
          <circle class="POINT" cx="383" cy="831" r="2" />
          <circle class="POINT" cx="362" cy="855" r="2" />
          <circle class="POINT" cx="342" cy="877" r="2" />
          <circle class="POINT" cx="411" cy="877" r="2" />
          <circle class="POINT" cx="445" cy="855" r="2" />
          <circle class="POINT" cx="472" cy="838" r="2" />
          <circle class="POINT" cx="501" cy="813" r="2" />
        </g><g filter="url(#dropshadow2)"><text className="mapfont TEXT" id="LCD36110101" class="TEXT" x="674" y="956">반곡동</text>
          <text className="mapfont TEXT" id="LCD36110102" class="TEXT" x="555" y="1089">소담동</text>
          <text className="mapfont TEXT" id="LCD36110103" class="TEXT" x="432" y="1114">보람동</text>
          <text className="mapfont TEXT" id="LCD36110104" class="TEXT" x="344" y="1114">대평동</text>
          <text className="mapfont TEXT" id="LCD36110105" class="TEXT" x="142" y="1091">가람동</text>
          <text className="mapfont TEXT" id="LCD36110106" class="TEXT" x="126" y="1010">한솔동</text>
          <text className="mapfont TEXT" id="LCD36110107" class="TEXT" x="85" y="948">나성동</text>
          <text className="mapfont TEXT" id="LCD36110108" class="TEXT" x="71" y="883">새롬동</text>
          <text className="mapfont TEXT" id="LCD36110109" class="TEXT" x="61" y="811">다정동</text>
          <text className="mapfont TEXT" id="LCD36110110" class="TEXT" x="384" y="792">어진동</text>
          <text className="mapfont TEXT" id="LCD36110111" class="TEXT" x="60" y="733">종촌동</text>
          <text className="mapfont TEXT" id="LCD36110112" class="TEXT" x="56" y="570">고운동</text>
          <text className="mapfont TEXT" id="LCD36110113" class="TEXT" x="62" y="652">아름동</text>
          <text className="mapfont TEXT" id="LCD36110114" class="TEXT" x="374" y="741">도담동</text>
          <text className="mapfont TEXT" id="LCD36110250" class="TEXT" x="439" y="469">조치원읍</text>
          <text className="mapfont TEXT" id="LCD36110310" class="TEXT" x="443" y="731">연기면</text>
          <text className="mapfont TEXT" id="LCD36110320" class="TEXT" x="538" y="648">연동면</text>
          <text className="mapfont TEXT" id="LCD36110330" class="TEXT" x="660" y="718">부강면</text>
          <text className="mapfont TEXT" id="LCD36110340" class="TEXT" x="472" y="921">금남면</text>
          <text className="mapfont TEXT" id="LCD36110350" class="TEXT" x="250" y="780">장군면</text>
          <text className="mapfont TEXT" id="LCD36110360" class="TEXT" x="342" y="540">연서면</text>
          <text className="mapfont TEXT" id="LCD36110370" class="TEXT" x="196" y="315">전의면</text>
          <text className="mapfont TEXT" id="LCD36110380" class="TEXT" x="353" y="326">전동면</text>
          <text className="mapfont TEXT" id="LCD36110390" class="TEXT" x="151" y="142">소정면</text>
        </g>
      </svg>
    );
  }
}

export default Sejongsi;
