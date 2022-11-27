import React from "react";
import "../style/mapText.css";
import "../style/mapOnButton.css"
class Mapkr extends React.Component {
  constructor(props) {
    super(props);
    console.log(this);
    this.svgRef = React.createRef();
  }
  componentDidUpdate(prevProps) {
    if (this.props.locations !== prevProps.locations) {
      Object.values(this.svgRef["current"].childNodes[1].childNodes).map(value => {
        value.style.fill = `${this.props.locations[Object.entries(value)[1][1].name] ? `hsl(10 100% ${68 - Math.log2(this.props.locations[Object.entries(value)[1][1].name]) * 5}%)` : 'rgb(166, 166, 166)'}`
      })
    }
  }
  render() {
    return (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          width="400"
          height="600"
          // overflow="visible"
          viewBox="0 0 600 1107"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.2"
          version="1.2"
          // preserveAspectRatio="none"
          onClick={this.props.click}
          onMouseMove={this.props.hover}
          onMouseLeave={this.props.leave}
          // onMouseOver={this.props.hover}
          ref={this.svgRef}
        >
          {/* hsv(9, 100%, 168%) */}
          <defs>
            <filter id="dropshadow">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3"></feGaussianBlur>
              <feOffset dx="2" dy="2" result="offsetblur"></feOffset>
              <feMerge>
                <feMergeNode></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
              </feMerge>
            </filter>
          </defs>
          <g filter="url(#dropshadow)">
            <path
              id="서울"
              d="M178 231l-4 2-4 3h-1v1l-3 1-4-5h-4l-6 1-4 3-2-1-1-1-3 2-3-3-1-3-2-3-1-2-3 2-3 1-2-4v-8l-3-1-2-1-3-2 2-4 3-3v-2h1l4 2 7 1 2-2v1h2l1-4 2-8 7-1 4 2v-3l1-1 2-4 3-4h2l3 2 7 2 2 8 1 4 1 1v5l-1 6h3l8-1v5l-4 3-1 5z"

              name="서울"
              className="OUTLINE"
            ></path>
            <path
              id="부산"
              d="M496 722v4h-1l-2-5-1 6-1-2h-1l-1 1-1 2v1l-1-1-1-6-1-6-2 3-2-3v2h-1 1l-4 1-2-5-1 5-1 2h-2l-7-2v-2l2-2-1-3-5-4-2-2 4-1h9v-5l1-6 5-1 6-2 7-1 4-6 1-4h2l3 1 1-3 6-3 4-1 1-5 3-6h7l3-2v-3l2-3 1 3h3l4-1 4 4 1 3v1l-1 1 5 1-7 4-1 6-1 4h-1v-1l-1 2-1 1 2 2-1 4-2 4-3 6-3 4v1h-9l-2-1-1 4-1 4 1-1v4h-7l-2-4-1 1-3 4z"

              name="부산"
              className="OUTLINE"
            ></path>
            <path
              id="대구"
              d="M441 530l3 1 3 7v4l2 9 1 7-4 4-2-1v4l-1 2-3 6-2 7v8l-4 2-4 2-3 1-3-5h-6l-5 3-1 6-3 7-2 3h-5l-7 3-7 1v-8l-4-4-1-3 5-2h6v-5l-5-4-1-5 3-5 3-2 8-1v-5l-8-4h-6v-5l2-5 3-4 3-3 5-1 2 7 3 3h1l2-4 3-7v-7l2 2 1 1 3-2 6-4 3-3 5-1z"

              name="대구"
              className="OUTLINE"
            ></path>
            <path
              id="인천"
              d="M91 229l1-2v1h2v-1h1l-1-1h2l-4-5v-5l1-3h1-1v-1l1-1v-1l4-1 4-1-5-1-3-1-1-1-2 1 1-3 5-3 3-4 4 1 3 3 5 4 4 3 5 2-2 4-1 3-1 5-2 2 2 5 2 3-1 7-1 2-2 3-1-3-1 6-7 2-1 6-6 1h-1l-3-5-2-4-1-5 5-2-4-2v-3l-2 2zm-9-10l3 1 1 2 2 3-2 2-4 1-8 5-9 7-4-2-3-3h-1l-2 1-2-4 4-5 4-2 7-1 7-3 1-4zm-18-63l3 2 4 4 7 4v4l2 3-1 2-2 4 2 3-1 4v3h2v2l-1 1 1 1-1 1 1 2 1 2 1 1h-1l-5 4-8 1h-8l-5-4v-4l4-3v-5l-2-4h1v-1l-5-3-1-8v-7l4-4h1z"

              name="인천"
              className="OUTLINE"
            ></path>
            <path
              id="광주"
              d="M113 687l2 3 6 3 7-3 4-2h4l1-1h4l4 3 2 3-1 1 1 1 3 4 6 3 1 4-1 7-4 4-3 4-7 1h-7l-6 2-1 1h-1l-1 1-4 1-8-1v-4l-4-5-4-1h-7l-4-7-1-1 3-3 2-6 2-4h2l1 1 4-4 1-4z"

              name="광주"
              className="OUTLINE"
            ></path>
            <path
              id="대전"
              d="M223 432l1 6 4 1h3l4-4h1v2l-1 2 3 2 2 6 5 1v5l-2 6-2 3-2 7-1 8 1 7-5 3-2 4-7-1-3-4-2-1 1-2-1-2 1-1-3-2-2 6-1 6-3 4-1 1-1-4-3-4-1 1h-1l-2-3-1-7-5-4 1-2 1-3 2-8 1-7v-6l9-3 2-3 2-3 2-5z"

              name="대전"
              className="OUTLINE"
            ></path>
            <path
              id="울산"
              d="M550 641l2 6-1 7-1 8-3 3h-1v1l-2 1-5-1 1-1v-1l-1-3-4-4-4 1h-3l-1-3-1-7-4-1-6-2-4-5-2-3-4-3-5-3-1-3-3 1h-3l-3-2-4-4 5-5v-8l3-4h1l1 1 4-3h3l-2-3v-2l1-1v-1l2-4 4-2 4-1 9-1h5l4 3 3 3 4 7 6-1 3-2 4-2 7 2h1l7 3 2 8v7l-1 8-2 4 2-1-2 5-1 4-1-1v1l-2 1-2-6-3-6-3-1 2 2-2 1 2 1 1 3-3 1h2l1 1v4z"

              name="울산"
              className="OUTLINE"
            ></path>
            <path
              id="세종"
              d="M184 410l-2-2v-5l1-9-1-4-1 1h-1l-1-4 3-4h3l5 2 5 3 6 3h2l2 1 2 2-2 4-1 4 2 4v6l2 1 3 3 6 2 3 4 3 2v8l-6 2-2 5-2 3-2 3-9 3-6-1-6-4-1-3-3-9v-7l2-7 1-4-1 1z"

              name="세종"
              className="OUTLINE"
            ></path>
            <path
              id="경기"
              d="M81 192l1-2-1-1-1-7-1-3 1-3 1-4-2-3v-5l4 2 4 2 4 1 3-1 4-2h4l3 5-1-4-1-12-1-1v-1l3-2-1-5 1-3v-5l-1 1-1-4 3-6 7-2 7-2 3-2 5-2 1-4 1-1 1-1 3-3 1-6 1-7 4-4 3-2 3 2h1l3-5 1-3 1-2 2-3 3-7 8 2 3-5h8l3 1 3-1h1l1 3 4 9 1 5 6 1 4-2 3-3h4l-1 1-1 5v6l4 2 3 3 2-1 5-3h5l6 2 1 5 1 8 2 6 6 2 6 1 2 5 6 3 4 3 1 3-1 1 1 2v1l-1 4-4 3-5 4-4 6v5l-1 2 1 2 1 6-3 3-1 4 7 1-1 7v8h8l5 1 4 3 5 3 3 4h8l1-1 3 2 7 3 4 3 1 2-5 2-4 2 1 1h-1l-3 4 2 5 2 3v6l-1 3-1 5-4 7v8l-1 7v6l-1 4-1 6-4 6-2 5-4 3h-8v7l-3 4-1 1-1-1-1 1v-1 3l-5 3v2l-2 1-4-2h-2l-3 1-2-1h-3l-2 5-3 4-5 3-4 3 1 1 1 1-5 4-4 2-4 2-4 1 1 3v1l-2 3-4-4-6-3-3-3-5-3-5-2-8 2-1 3h-3l-4 1-7 1-8 2-6 2-3 4v-4l-8 1-8-1v-7l3-8-9-1 2-7-6-3-1-5-10-11v-9l-2 1-1-1-1 1h-1l1-4 2-3h-3l-1-4-3-5h-2l-2 1-2-1 2 3-7 1v-14l3-2-1-1h1l6-4h2l-3 1-4 4-2 3 2 1 4 3 3 3-1 1 2 1 3 3v5l2-1 3-1-2-2v-1l1-1-1-2-1-2 5-3 6 1h5l1 2-1 1 1 1v1l1-4h1l-1 6 3-6 1-4 2-1-1-1h3l4 3 1 1 1-2h1l2 1-1-2-7-3-7-2-4-1h-1l-2-2-8-5-1-4 9-7 7-2-5-2v-1l1-1v-1l1-2 1-7-2-3-2-5 2-2 1-5 1-3 3 2 2 1 3 1v8l2 4 3-1 3-2 1 2 2 3 1 3 3 3 3-2 1 1 2 1 4-3 6-1h4l4 5 3-1v-1h1l4-3 4-2 3-8 1-5 4-3v-5l-8 1h-3l1-6v-5l-1-1-1-4-2-8-7-2-3-2h-2l-3 4-2 4-1 1v3l-4-2-7 1-2 8-1 4h-2v-1l-2 2-7-1-4-2h-1v2l-3 3-5-2-4-3-5-4-3-3-4-1-3 4-5 3-7-1-2-5zm39 100l-5 1-3 4-5 4-2 2 9 10h5l-1-7-1-2v-1l3-2 5-4-3-2 1-1 1-1-1-2 1-4z"

              name="경기"
              className="OUTLINE"
            ></path>
            <path
              id="강원도"
              d="M409 61l2 3v3l3 4 3 5-2 4 2-1 2 4 1 6 2 4 2 4 4 5h1-1l2 3 4 6 5 5 1 3 4 5h1v3l4 6 4 4 3 5 2 4 3 3 3 5v-1 1l3 4 4 4 5 5 3 4 3 2 4 5 3 4 4 6v5l2 5h-1 1l4 4 4 3v1-1l1 4v4-1l1 4 2 7 4 4 4 4 2 4 1 1-1-1v2l2 4 4 3 4 3 2 7 1 4v-1l1 2 3 3 2 3h1l1 1 2 1v3l1 1 2 5v6l1 8 2 5h-1l-1-1-1 1-1-1-1 1-5 4-5 2-3 4-3 4v7h1-5l-6-3-5-4-3-2-7-1-3 5h-3l-4-2v1l-1-1h-9l-3-2-4 1-4 6-7 1-6-5-4-2h-2l-3 4-1 7-6-1-4-1-5-3-5-3-2-2-2 1h-1v-1h-1l-2 1-3-1-6-2-4-4-2-2-2 2-5 1h-5l-4-7-2-3-1 1-2-1-1 1-2-1-1 1-1-1v1h-1 1l-4 2-6-1-1-3 5-4 4-5-10-2-3-2h-2l-3-2-5-1-3 5-3-1-2-1h-1l-1-1-2 4-2 2-4 2h-2l-3 1-2-5-2-4v-1l-4-3-7 1-5 4v1l1 5v4l-2 3-4 2-1-1h-3l-2 1-1-1-1 1-4 1h-7l-4-5-2-7 1-6 1-4v-6l1-7v-8l4-7 1-5 1-3v-6l-2-3-2-5 3-4h1l-1-1 4-2 5-2-1-2-4-3-7-3-3-2-1 1h-8l-3-4-5-3-4-3-5-1h-8v-8l1-7-7-1 1-4 3-3-1-5-1-3 1-2v-5l4-6 5-4 4-3 1-4v-1l-1-2 1-1-1-3-4-3-6-3-2-5-6-1-6-2-2-6-1-8-1-5-6-2h-5l-5 3-2 1-3-3-4-2v-6l1-5 1-1h-4l-3 3-4 2-6-1-1-5-4-9-1-3h-1l-3 1-3-1v-6h-1l-1-3 3-1-1-1 2-2 2-2 1 4 6-2 2-2h-1l2-1 4-2 7 1 4 4h1v-1l-1-1h1v-1 1h1v1l8 1 3-6h6l8 3 3 1 4 2 4-2 4-2 6-3 5 1 1 1 7 1v2l2-2 1 2h9l3-2 5 4 5 3h7l5-5 4 1 8 3 2 3 1 1 1-1 2 1 2-3h5l6-2 3-5 6-1 7-1 2-6 5-3 6-1 1-5 2-6h5v-5 1-2h-3l3-1 4-8 1-8-1-6 4-2 6 3 1 4 2 8 3 5 2 4 2 6 2 6 3 4 3 5 3 7 1 3z"

              name="강원도"
              className="OUTLINE"
            ></path>
            <path
              id="충청북도"
              d="M321 275l4 3v1l2 4 2 5 3-1h2l4-2 2-2 2-4 1 1h1l2 1 3 1 3-5 5 1 3 2h2l3 2 10 2-4 5-5 4 1 3 6 1 4-2h-1 1v-1l1 1 1-1 2 1 1-1 1 1h1l1-1 2 3 4 7h5l5-1 2-2 2 2 4 4 6 2 3 1 2-1h1v1h1l2-1 2 2 5 3-4 1-2 2-3-1v1l-5 3-3 5-4 3-4 4-4 2-4 4-2 5-3 7 2 8-2 6-5 1-7 1-7-3-4-3-4-4-4-2-3 4-2 6h-6l-5-2-1-1-3 2-4 4-1 2-3-3-3 1-1 5-1 8 3 4 1 2h-5l-3-3h-1l-4 2-3-2-2-1-3 6-6 2-3 1-1 1v1l4 1 4 3 1 5-1 4-1 2 1 1-2-1-4-5-2-4v-1l-4 4v4l-1 1-6 2 1 5 7 3 2 5 4 3v5l-3 3v5l-1 4v2l2 2-2 3-1 3 3 3-1 2h1v3l-3 4-3 5 1 6h6l2-3 2 3 4 3 2 2h1l1 1h2l3-3 6 1 2 5 2 6 1 2-4-1h-7v8l-1 6-3 4v3l-1 3-3 6-5 2-4 3-4 2-9-1-8 2-6-2-5-2-2-3-3 3-2-1-5-3-1-7-4-9v-13l-2-6-6-2h-8l-1-7 1-8 2-7 2-3 2-6v-5l-5-1-2-6-3-2 1-2v-2h-1l-4 4h-3l-4-1-1-6v-8l-3-2-3-4-6-2-3-3-2-1v-6l-2-4 1-4 2-4-2-2-1-2 3-4 5-5 5-4 7 1-1-5-1-5-5-4-5-2-2-5-3-5-3-3 2-3v-1l-1-3 4-1 4-2 4-2 5-4-1-1-1-1 4-3 5-3 3-4 2-5h3l2 1 3-1h2l4 2 2-1v-2l5-3v-3 1l1-1 1 1 1-1 3-4v-7h8l4-3 2-5 4-6 2 7 4 5h7l4-1 1-1 1 1 2-1h3l1 1 4-2 2-3v-4l-1-5v-1l5-4z"

              name="충청북도"
              className="OUTLINE"
            ></path>
            <path
              id="충청남도"
              d="M53 418l1 8 2 5 2 2v4l-1 2 3 2 1 2-1 5-6-1-5-2v-3h1l-3-2-1-6-2 2 1-5 1-3h-2v-11l-2-3v-2l3-3 6 1v3h-1v1zm-23-64l1 1 2-3 4-3 2-6v-8l2-4 1 1-1 2 1 1h1l-2 3v4l2 4 1 3-2 2h1l-1 2-2 4 3 3h-1 1l-1 1-3 3 6-1 2-5 4 3v-1l-1-3 1-1 3-5 6-3v-9h-1l-1 1h-2l-2-1-2-2-4-3 5-1 2-1h-1l-1-2-6-2 3-3v-1l3 1 2-1h6l2 1 3 1 2-4 8-7 3 3 5 2 3 1v1l6 3 3 2 10 1 6 2 7-1 2 5 2 7 2 4 1 3 11 3 4-2 3-4 6-2 8-2 7-1 4-1h3l1-3 8-2 5 2 5 3 3 3 6 3 4 4 3 3 3 5 2 5 5 2 5 4 1 5 1 5-7-1-5 4-5 5-3 4-1 1h-2l-6-3-5-3-5-2h-3l-3 4 1 4h1l1-1 1 4-1 9v5l4 3 2 3 1-1-1 4-2 7v7l3 9 1 3 6 4 6 1v6l-1 7-2 8-1 3-1 2 5 4 1 7 2 3h1l1-1 3 4 1 4 1-1 3-4 1-6 2-6 3 2-1 1 1 2-1 2 2 1 3 4 7 1 2-4 5-3h8l6 2 2 6v13l4 9 1 7-1 4h1v2l-2 1 1 3-1 2h-1l-3-4-8-2-2 8-5 2-7-1-3-5-1-3-4 2-5-3-3-6-1-7-1-5-3-2-6 2-5 1h-2l-3 3-7 1-8 2-2 2h-6l-3-1-3-3-3-8-4-2-3-2-1 1h-2l-4-2-4 1-2 2-7 3-2 7v5l-6 3-7 4-8 4-2 2h-1v1l-7-2-4 1 1-3-3-6-3-4-1-3 3-2-4-2-2-2-1-2-6-3-4-2-3-1-4 1 1 2-2-1v-3l1-1 3-1 3-9v-7l1-3v-1l1-1-1-3-5-6 2-5 6-3h5l-4-1-4-2-4-3-5-3 1-5 1-2 2-1 2-2-3 1h-1v-1l1-1-2-3-1-6-1-9-2-6-1-6-7-4v-1l-7-2-5 1-3 3-4 2-1-6-2-9-3-3v-3l1-3 1-4h-1v-1l-1 2-4 3-5 4-3 2h-5l1-6h7l-1-6-4-4h-4l-1 4-2 4-2 1 1-3 1-3-1-2-1-4 2-1v-1h-1l1-1h1l1-4 2-7 2 4 2 4 2 3-1-5-1-4-1-1 2-3v-7l3-4v1-1 1l2-1 4-1-2 3-2 2z"

              name="충청남도"
              className="OUTLINE"
            ></path>
            <path
              id="전라북도"
              d="M134 519v-5l2-7 7-3 2-2 4-1 4 2h2l1-1 3 2 4 2 3 8 3 3 3 1h6l2-2 8-2 7-1 3-3h2l5-1 6-2 3 2 1 5 1 7 3 6 5 3 4-2 1 3 3 5 7 1 5-2 2-8 8 2 3 4h1l1-2-1-3 2-1v-2h-1l1-4 5 3 2 1 3-3 2 3 5 2 6 2 8-2 9 1 2 4v1l2 4 3 7-4 7-3 2-3 5-4 3-3 2-6 2-5 2-3 6-3 4-5 3-2 8v5l-3 3-2 7-1 8-2 4-1 3-2 8 6 6 2 8v5l4 3-1 5-3 3-3 5-2 3v1l1 4-2 3-4 4-3-3-4-2-5-4-4-2-6-1-4 1-2 4-4 5-4 1-3-2h-1l-3 2h-8l-4-1-5-3-2 2-2 1-4-3-3 1-4 3-5 2-8-3-1-4v-8l-4-3v-2l3-3-1-4-1-3-1-4-3 1-2-1-1 4-1 2-2 2h-1l-1 5-7-1-4-3-2-5-5-3-1-1-2 1-1-4-6 2-5 1-4 4v7l-3 3v3l-3 3-3 3-5 3-4 1 1 2H85l-1 1h1l-2 2-7-1-2-5-1-4h-2l-1 1-1-4-1-8-2-3-6-2 4-9 1-3 4-5 4-3h1l2-1v1l1-1v1h1v1l1-2v1h1-1v-1l4-1 3 2 1 1v-2l2-4 2-3h4l4 4 2 5-1-5-2-5-8-2H75l-3 1-3-3-4-3-1-1 1-2h-1l1-1-1-2h1l3-2 6-5 1-1h1l1-2 3-2-1-3-4-4-3-6-4-11h-2l-3-1v-2l5-2 6-11 3-8-1-2-1-7 5 1v-1h12l7-2 7-2 4 2 3-2v-4l8-4 7-4zm-64 54l1 6 2 3 3 6 6 7h2l3-3 3-5 2-8 1-4h4l7-1-1-8-1-4-3-5-7-1-2-6-1-6h-5l-6 1-4 12-2 4-1 5z"

              name="전라북도"
              className="OUTLINE"
            ></path>
            <path
              id="전라남도"
              d="M118 837l1-4-1-7-2-4h1v-1l-1-3 1-3v-1l-1 3-2 8v9l-2 8-3 2 2 3-3 4-3 2-7 4h-4v1l-4 4-2 6-2 5-2 4-7 2-3 3h-3v-3l1-2v-1l1-1-1-1v-1l-3-3-4 1v1l-1-1 1-1v-1l-1-2h1l-1-1 1-1h-1l3-3 1-7-6-2v-2l2 1-1-4v-4l-1-4-1-4v1-1l-2 1v-3l-2-2 1-1-2-1-2-1-2 3h-3l-3-4-9-3-2-3-1-1-1 1-1-4-2-6-3-5v-1l1-1-1-1 1-2 2-5 3-8 5 1 3 5 2 3 2 2 3-3 2-3v-1l-2-4 3-4 6-1 3-1-6-1h-7l1-7 5-4v-5l-2-4-1 1 2-5-1-6v-6l-2-4-1-3-1 5v8l-4 3h-2l-3-3-2-5-1-2 3-2 6-1v-3h-2l4-3 4-3 1-2-5-3-4-2-1-1h1l1-2-4-1-2 5-2 1v-1l-1-1-1-1-2 3-2 6h-2l-1-2-1 2-2-7-3-1v2l-1-1-1-2h-1l-2-1-3-1 1-1v-1l-1-2v-2l5-1 6 1 4 1h2v-1l-2-3 1-3v-1l1 1 3-2 4 1 2 1 3-3 3-1-1 5-1 4v3h2l1-1v3l3 4 1-1 1-2v-1l2 2 1 6v4l2-1 1 1 1-1v-2l2-3 2-6v-4l-5-3-3-4h-1l-1-2-3-4-1-5 2-4-4 2-3 1 1-2v-2h-1l1 1v1h-2l-3-4 1-5 1 2 2-1v-2h1-2l2-4h-1v-2l4-1 4-2-1-3 1-1v-2l1-2 3-6 4 1 2 3v-3l-4-4-1-4 2-6 3-1 6 2 2 3 1 8 1 4 1-1h2l1 4 2 5 7 1 2-2h-1l1-1h10l-1-2 4-1 5-3 3-3 3-3v-3l3-3v-7l4-4 5-1 6-2 1 4 2-1 1 1 5 3 2 5 4 3 7 1 1-5h1l2-2 1-2 1-4 2 1 3-1 1 4 1 3 1 4-3 3v2l4 3v8l1 4 8 3 5-2 4-3 3-1 4 3 2-1 2-2 5 3 4 1h8l3-2h1l3 2 4-1 4-5 2-4 4-1 6 1 4 2 5 4 4 2 3 3 3 8 2 3 1 4v8l4 6 5 3 4 6v4l4 4 3 4 4 3 3 5 1 2v3l-3 6-5 3-1-2-3 5-3 3v2l-3-2-2 3-1 1h-4l-5-3-1-5-3 8 5 3v1l-2 5 1 3h1v-1l3 3h9l3-2v-1l-1-1h5l3 2 3-2 2 7-2 6-2 9 1 2-1 1-5 2-3 1-3-3-4-2-1 1-2 3v4l-3-1v5l2 9v3l-3-2-5-1-1 3-2-2-2-4v-5l3-3-2-1-1-1-1 1 1-4 3-2 1-6-3-3h-1 1v-1 1l1-1v1-2l-4-4-4-1 2-5-2-2v-2l-1-3v-4h1-1l-4 3-1 6-6 1-1-3-1 1v-1l-1 1-4 4-7-1-4-1 4 2 4 3h3l1 1 1-1-3 3-3 3 1 1h-1v1l1 3-2 2v6l2 3h1l3 3 4 4 1 1 3 2 2 1v1l2 1h-3l1 2h1l1 1 1-1 1 4-1 7h-6l-7 1-2 3 1 2 4 1-1 1 1 1-1 1-2 4-4 2v-1l-2 1 1 3-2 1-3-1-1 1-1 1-3 2-1 5-3-1v-1l1 1-1-2-3-3-2-3h1l-1-3-6-3-3-3-1 1-1 1v-1l-1 1-3-1h-3v1h1-2l-2-1-1 1-2-1v1l-1-1-2-3v-4l1-1 1-1 2-2 1-4 2 2 2-4 1-2-1-1 1-1 3-3 6-3 2-6 2-4 3-1 2 5v4l1 1h4l2-5 2-7-3-6-3 1-3 2h-4l-3-4-4 3-2 4-3 5-6 1-4-2v-1l-3 4-3 4h-2l1 1-4 2-3 4h-2l-2 2h-8l-4-1 4 2 4 3-1 1h1l-2 4 3 3-1 2v-1h-1l-3 4-1 7v6l-5 2-2 4-2-1h-6l-1 4-4-2-3-2-1 1h-2l-1-1-1 1-2-4v-4h-1zm-57-14l3-2 2-2-4-2-2-3-2 1v-2h-1l-1-3-2-3h-1l-1 2h-3l-1-4 1 2h1l1-3-1-3h2l-1-2-2-1-4 4h-3l1 4 2 5 3 6 5 3 4 2zm-12-25h3l3 4 3-2 2-1v4l-3 4 4 3 4 2 4 1 3 1v1h1v-2l-4-4-3-4 4 3 7 2 5 3 5 1 2 1 1-1-8-2-4-4 1-2 1-2h-1 1l-3 1-6-2 2-1-3-1-2-3-4-2 2-3-1-1h-1l-2 1-2-2-1 1h-2v-1h-2l-4 2-1 2v1zm73-71l4-1 1-1h1l1-1 6-2h7l7-1 3-4 4-4 1-7-1-4-6-3-3-4-1-1 1-1-2-3-4-3h-4l-1 1h-4l-4 2-7 3-6-3-2-3-4 1-1 4-4 4-2-1h-1l-2 4-2 6-3 3 1 1 4 7h7l4 1 4 5v4zM95 876h-1l-1-7v-5l6-2 6 2 3 6 1 4 2 4 2 6-4-1h1-3l-7-1zm96-33h1v1l1 3-2 6-2 3-10 1-7-4v-6l3-3v1l4 2 5-3h6zM27 823l5 2 4 3-1 1 4 2 3 2 2 2 3 6 1 4-1-1-2 3v6l-4 5-2 2-1-2-2 2-1-1v2l-3 1-5 2 1 1-3 1-3 1-5 1-7 1H5l1-1H5l1-1 1-2-5-2-2-8 3-4 1 1h1l-1-3 5-4 4-1v-1l4-3 4-3v-1h-1l2-3zm254-29l2 1 5 3v2h-1l-1-1-1 1v-1 3l2 5h2v11l1 5h-6l-3-1h-1v-1l-3-3v-7l4-3 1-5-1-6-1-1v-1z"

              name="전라남도"
              className="OUTLINE"
            ></path>
            <path
              id="경상북도"
              d="M560 528l7 2 5-4 3-4 3-4 1-1 3-4 3 2 2 6-1 8-2 3h-1l-1 4v4h-1v-1 1l-2 2-2 3v2h1l1 4v4l-1-1-1 1 1 4-1 3v1l-1 3v4l-1-1-1 4-1 8-2 7-1 6-2 4-2 4-7-3h-1l-7-2-4 2-3 2-6 1-4-7-3-3-4-3h-5l-9 1-4 1-4 2-2 4v1l-1 1v2l2 3h-3l-4 3-1-1h-1l-3 4h-7l-5-4h-3l-3 1-4 3-4 5-5 1-6 3h-8l-7-2-8-1-7 2-6-3-3-3-3-3-1-7v-5l1-6 5-3h6l3 5 3-1 4-2 4-2v-8l2-7 3-6 1-2v-4l2 1 4-4-1-7-2-9v-4l-3-7-3-1h-9l-5 1-3 3-7 4-2 2-1-1-2-2v7l-3 7-2 4h-1l-3-3-2-7-5 1-3 3-3 4-2 5v5h6l8 4v5l-8 1-3 2-3 5 1 5 5 4v5h-6l-5 2 1 3 4 4v8l-5-3-3-3-7-1-8 1-3 2h-2l-3-2-5-3 2-3h1l2-4-1-7-2-4-3-3-5-4-2-4-1-4h-2l-5-2h-8l-7-2-5-3h-1l-3 1-1-4-4-3-4-5 4-7-3-7-2-4v-1l-2-4 4-2 4-3 5-2 3-6 1-3v-3l3-4 1-6v-8h7l4 1-1-2-2-6-2-5-6-1-3 3h-2l-1-1h-1l-2-2-4-3-2-3-2 3h-6l-1-6 3-5 3-4v-3h-1l1-2-3-3 1-3 2-3-2-2v-2l1-4v-5l3-3v-5l-4-3-2-5-7-3-1-5 6-2 1-1v-4l4-4v1l2 4 4 5 2 1-1-1 1-2 1-4-1-5-4-3-4-1v-1l1-1 3-1 6-2 3-6 2 1 3 2 4-2h1l3 3h5l-1-2-3-4 1-8 1-5 3-1 3 3 1-2 4-4 3-2 1 1 5 2h6l2-6 3-4 4 2 4 4 4 3 7 3 7-1 5-1 2-6-2-8 3-7 2-5 4-4 4-2 4-4 4-3 3-5 5-3v-1l3 1 2-2 4-1 5 3 4 1 6 1 1-7 3-4h2l4 2 6 5 7-1 4-6 4-1 3 2h9l1 1 1-1 3 2h3l3-5 7 1 3 2 5 4 6 3h5-1v-7l3-4 3-4 5-2 5-4 1-1 1 1 1-1 1 1h1v-1l1 2 1 4 2 5 6 7-1 3v2l-1 2 1 3v6l-1 1 1 1v1l1 5v6l1 5-1-1v4l4 7 2 3h-1l1 1 1 4 3 7v15l-2 5-1-2-1 1-3 5-2 6v7l4 8 1 5v2l1 2-1 2v1l-1 3v7l-2 8-3 6-2 3-1 6-1 7v7l1 8-1 4v-1l1 4 2 3 1 5 1 5 6 3v3l-4 4-4 3h-1l-2 4 6 2zm237-323l2 1h1l-1 3v6l1 2-3 2-3 3h-6l-4-2-3-5 1-5 6-2 4-2h2z"

              name="경상북도"
              className="OUTLINE"
            ></path>
            <path
              id="경상남도"
              d="M307 751l4 2v5l-1 4h-1l-1 4 1 4h1l-1 1 3 3 3 4h3l-1-1 4-2 7-1 4 1 1 1v12l-1 4-1 4 1 2h1l-1 1-1 1-2-1-1 1-2-3-4 1-6-3-2-8-6 2-2 6-6-1-2-6 1-4-1 1-1-4-2-3-2-4v-7l2-3v-5l3-1 2-5zm134-20l3 1 1 2-2 3v2h-1v4l3 3 1 5v4l-1 2-2 3-1 3h2l-1 1 2-1 3-2 3-1-1 1-2 5-1 4-2-1-1 1-1 1 3 2v7l-2-3h-1l-1 1-3-1-2 3-3 4-1 3 4 4h3l-1 1-1 1v-1h-3l-4 2-6 1-1-3h-2l2-5-1-3-2 1h-2l-1-3 5-3v-10 1l-1-2-2 1v1l-3 2-4 2-1 3h-1l-2-4-3-3-1-4v-4l1-1 3-3 4-4h1l3 3 4 1v-1l4 1h4l-1-2 1-1h-1l-3-4 2-5 5-1 3-5h2l-1-1h1l1 1v-4zm-12-38l-4 1-3 2-2 4 1 3v1l2 3v4l-1-1h-1l-1 1 4 2 3 6 2 2-2 1 3 2-2 1-3 1-4 1 1-2 1-1-4-1 3-3-4-1-3-4-3 1-1 2h-2l-1-1-2-1-1 2h-1l-3-1v5l-3 2-3 2-7 4v4l2-3 5-2 4-2v-2l1-1 1 1h1l1-1 2 1-1 4 1 4 1-1v2l2 1-4 3-2 2h-2l-4-1-1 2 4 2-2 3-1 5-1 7 1 6 1-2h1l1-1-1-1h1v-2l-1-1 4 2 1 5-1-2-1 4-2 4-4 2h-6v-4l5-1-5-3-1-3-1 2v-1l-1 2-2-1-1-1-2 1-2-1-1 1-1-1h-1 1l-1-3 4-1 4-1v-1l-3-5-1-4-1 1v-1h-1l-1 2-2 3v3l-4 2-2-1v-1l-1-1 1-1v-2h-10l-2 7-6 1-4 2v1l-3-4-3-2 3-1h-4v-1h-1 1l-1 1-4-1-5-4-1-3v1l2-2 1-2-1-2v-4l1-2-2-2v-5l1-4 2-3-3 2-2 5-1 4h-2l1-3h-2 1l-3 1 2 2 2 4v3h-1v1l-1 1h1v-1h-1l-1-1-2 2-3-2h-1v1l-3 1-1-2v-2l-4-3 1 3-1 2h1l-1 1h1v2l-2 1-4 5h-5l-2-2-1 1-5 2-4 1-1-1-2-5 3-6v-3l-1-2-3-5-4-3-3-4-4-4v-4l-4-6-5-3-4-6v-8l-1-4-2-3-3-8 4-4 2-3-1-4v-1l2-3 3-5 3-3 1-5-4-3v-5l-2-8-6-6 2-8 1-3 2-4 1-8 2-7 3-3v-5l2-8 5-3 3-4 3-6 5-2 6-2 3-2 4-3 3-5 3-2 4 5 4 3 1 4 3-1h1l5 3 7 2h8l5 2h2l1 4 2 4 5 4 3 3 2 4 1 7-2 4h-1l-2 3 5 3 3 2h2l3-2 8-1 7 1 3 3 5 3 7-1 7-3h5l2-3 3-7v5l1 7 3 3 3 3 6 3 7-2 8 1 7 2h8l6-3 5-1 4-5 4-3 3-1h3l5 4h7v8l-5 5 4 4 3 2h3l3-1 1 3 5 3 4 3 2 3 4 5 6 2 4 1 1 7-2 3v3l-3 2h-7l-3 6-1 5-4 1-6 3-1 3-3-1h-2l-1 4-4 6-7 1-6 2-5 1-1 6v5h-9l-4 1 2 2 5 4 1 3-2 2-3 2-4 1 2-2v-1l-4-1-2 6-3-2-1-3-3 1-2-1h-2l-1 1v-3l-2-6-2 3-1 1v-1l-1-1v-1l-1 1-3-3-3 2h1-1l1 1h-1l-2-5-2-6 4-6z"

              name="경상남도"
              className="OUTLINE"
            ></path>
            <path
              id="제주도"
              d="M115 1034l5 2 3 2 5 3 6 2 3 5-1 4h1l1 1 2 1-2 1h3l-1 7-2 1-3 7-4 4-3 5-3 5-5 4h-5l-3 1-1 1-2 1v1l-3 1-8 2h-6l-3 2-6 3h-7l-8 1-7 1-7-1H39l-6 1-3 5-6-1-3-4-4-3-5-2-2-4-2-8 2-7 3-4h2l3-3 4-3 3-5 3-4 4-2 6-4 4-2 5-1 6-1 7-3 4-2 4-1 5-1-1 1 4-1 7-1 6-2 3-3 1 1h1v1h1l2-1h4l6-1z"

              name="제주도"
              className="OUTLINE"
            ></path>
          </g>
          <g filter="url(#dropshadow)">
            <text x="156" y="214" className="TEXT">
              서울특별시
            </text>
            <text x="503" y="695" className="TEXT">
              부산광역시
            </text>
            <text x="418" y="567" className="TEXT">
              대구광역시
            </text>
            <text x="67" y="177" className="TEXT">
              인천광역시
            </text>
            <text x="127" y="707" className="TEXT">
              광주광역시
            </text>
            <text x="221" y="463" className="TEXT">
              대전광역시
            </text>
            <text x="531" y="622" className="TEXT">
              울산광역시
            </text>
            <text x="199" y="418" className="TEXT">
              세종특별자치시
            </text>
            <text x="216" y="245" className="TEXT">
              경기도
            </text>
            <text x="370" y="179" className="TEXT">
              강원도
            </text>
            <text x="294" y="381" className="TEXT">
              충청북도
            </text>
            <text x="105" y="449" className="TEXT">
              충청남도
            </text>
            <text x="179" y="592" className="TEXT">
              전라북도
            </text>
            <text x="138" y="764" className="TEXT">
              전라남도
            </text>
            <text x="447" y="460" className="TEXT">
              경상북도
            </text>
            <text x="367" y="672" className="TEXT">
              경상남도
            </text>
            <text x="76" y="1070" className="TEXT">
              제주특별자치도
            </text>
          </g>
        </svg>
        <button className="mapOnBtn">
          
        </button>
      </>
    );
  }
}
export default Mapkr;
