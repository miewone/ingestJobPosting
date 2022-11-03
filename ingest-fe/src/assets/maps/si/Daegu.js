import React from "react";

class Daegu extends React.Component {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ background: "#eaeaea" }}
        width="800"
        height="988"
        overflow="visible"
      >
        <defs>
          <filter id="dropshadow">
            <feGaussianBlur in="SourceAlpha" stdDeviation="7"></feGaussianBlur>
            <feOffset result="offsetblur"></feOffset>
            <feMerge>
              <feMergeNode></feMergeNode>
              <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
          </filter>
          <filter id="dropshadow2">
            <feGaussianBlur
              in="SourceAlpha"
              stdDeviation="1.4"
            ></feGaussianBlur>
            <feOffset dx="1" dy="1" result="offsetblur"></feOffset>
            <feMerge>
              <feMergeNode></feMergeNode>
              <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
          </filter>
        </defs>
        <g filter="url(#dropshadow)">
          <path
            id="CD27110"
            d="M476 366l14 5-2 18-4 18-12-3-14-3-16 1-7-3-9-7 7-21-1-8 3 1v-6l20 3 13 2z"
            className="OUTLINE"
          ></path>
          <path
            id="CD27140"
            d="M624 83l11 7 22 5 14 7 7 12 8 8-2 8-2 6 4 9 8 10 10 7-1 17-1 6-6 11 2 11 3 8 2 8-5 12-4 12 3 13 6 10 10 6 11 9 3 16 1 18 5 18-3 21 1 14-9 16-8 9-10 7-14 3-11-2-6-9-17-5-20 6-19-2-13-5-7-16-12-7-14-1-9-5-13-3-11 7-10 5-11 11-27-10-6-9-3-2 7-7 7-13 20-8 6-4v-2l-5-8-2-15 7-9 1-9-1-20-3-9-6-9-2-21-3-16 1-17-4-13-5-8-3-15-11-13-8-6 4-13 4-7 11-16 10-3 21-5 7-3h5l9 3 11-1 9-1 12-5 22-4z"
            className="OUTLINE"
          ></path>
          <path
            id="CD27170"
            d="M437 343l-2 15v6l-3-1 1 8-7 21-22 6-6 3-18 3-7-2-10-6-13-7-6-8-10-3 6-7-1-9-4-9 3-7 9-4 19-4 19-13 15 9 19 4z"
            className="OUTLINE"
          ></path>
          <path
            id="CD27200"
            d="M435 399l7 3 16-1 14 3 12 3-1 14v4l-1 7-1 15 2 12-3 5-8 18-10 8-8 9-12-5-7-8-10-9-6-9-12-10-6-10 5-16 9-10 10-11 1-19z"
            className="OUTLINE"
          ></path>
          <path
            id="CD27230"
            d="M496 157l3 15 5 8 4 13-1 17 3 16 2 21 6 9 3 9 1 20-1 9-7 9 2 15 5 8v2l-6 4-20 8-7 13-7 7 3 2 6 9-14-5-8-3-13-2-20-3 2-15-18-5-19-4-15-9-19 13-19 4-20-12-15 5 2-18 3-12 9-10 10-8 7-9 8-11 5-13 4-9v-18l-2-16 1-17-6-6-3-17v-12l17 1 11 13 8 15 7-4 6-11 12-6 10-7 19-3 13-4 8-9 16-6 8 6z"
            className="OUTLINE"
          ></path>
          <path
            id="CD27260"
            d="M454 499l8-9 10-8 8-18 3-5-2-12 1-15 1-7v-4l1-14 4-18 2-18 27 10 11-11 10-5 11-7 13 3 9 5 14 1 12 7 7 16 13 5 19 2 20-6 17 5 6 9-4 25-3 11-11 5-11 17 8 18v20l-10 11-11 8-13 2-9 7-10 2-3-4h-2l-5-3-11-3-20-5-8-7-4-1-9 1-13-1-11 1-11-5-9 5-8-3-18-3z"
            className="OUTLINE"
          ></path>
          <path
            id="CD27290"
            d="M334 378l10 3 6 8 13 7 10 6 7 2 18-3 6-3 22-6-1 19-10 11-9 10-5 16 6 10 12 10 6 9 10 9 7 8 12 5-5 15-12 8-15 1-1 14 1 19-8 11-13 2-7-10-8-8-8-9h-13l-15-10-8-7-9-12-7-11-6-12-6-4-27-5-8 3-1-18-10-13-11-11 2-15 3-20 8-16 9-10h7l8 5h18l8-3z"
            className="OUTLINE"
          ></path>
          <path
            id="CD27710"
            d="M314 486l6 4 6 12 7 11 9 12 8 7 15 10h13l8 9 8 8 7 10 13-2 8-11-1-19 1-14 15-1 12-8 5-15 19 4 18 3 8 3 9-5 11 5 11-1 13 1 9-1 4 1 8 7 20 5 11 3 5 3h2l4 9 1 13 5 10 3 14 8 18 5 8v3l-1 10-4 17-1 17-6 12-7 7 1 5-3 2h-8l-15 4-18 6-10 9-10 8-17 4-11 3-6 4-9-6-5-8 1-15-6-17v-20l-19-2-18 6-18-6-20 4-8 7-7 7-15 9-8 9-12 6-10 7-3 1 4 7 4 19 2 15-5 17-12 5-19 15-5 21-2 18 5 19-5 10-12 3-16 5-16-2h-22l-19-1-15 4-8 9-9 8-7 11-6-2-6-3-6 6h-5v1l-5 6-9 8h-5l-2-4-2 3-3-1-7 2-14 8-13 7-14-5 8-7 11-5 11-8 7-10 6-10 5-17-4-18-7-8-8-7-12-9-9-8-10-10-9-9-8-10-6-10-7-19-2-18 9-14 16 3 8 3 9 4 19 3 21 5 11 3 9 2h7l9-5 12-11 4-8v-23l-4-12-10-9-8-7-11-8-12-6-13-7-10-7-8-11-6-9v-7l5-9 8-15 7-10 4-8 7-20 5-11 8-9 8-9 8-4 32 1 10 3h20l19-2 9-10 10-10 8-3zm-72-250l3 3 9 1 12 11v6l-4 11-1 15-9 16 6 21 15 5 8 3 1-4 7-2 8 11 15 2 15-5 20 12-9 4-3 7 4 9 1 9-6 7-14 5-8 3h-18l-8-5h-7l-9 10-5 8-3 8-3 20-2 15-19-11-19-8-18-3-8-2-10-1-14-2-23-1-20 1-10-7v-16l4-11 4-8 5-18 6-15 5-10 7-12 15-18 9-18 4-9 11-12 7-6 7-2 21-8 8-10v-3z"
            className="OUTLINE"
          ></path>
        </g>
        <g filter="url(#dropshadow2)">
          <path d="M221 361l-65 97H77m197 180L156 458" className="LINE"></path>
          <circle cx="221" cy="361" r="2" className="POINT"></circle>
          <circle cx="274" cy="638" r="2" className="POINT"></circle>
        </g>
        <g filter="url(#dropshadow2)">
          <text id="LCD27110" x="459" y="382" className="TEXT">
            중구
          </text>
          <text id="LCD27140" x="608" y="243" className="TEXT">
            동구
          </text>
          <text id="LCD27170" x="387" y="365" className="TEXT">
            서구
          </text>
          <text id="LCD27200" x="447" y="445" className="TEXT">
            남구
          </text>
          <text id="LCD27230" x="431" y="256" className="TEXT">
            북구
          </text>
          <text id="LCD27260" x="571" y="446" className="TEXT">
            수성구
          </text>
          <text id="LCD27290" x="355" y="461" className="TEXT">
            달서구
          </text>
          <text id="LCD27710" x="77" y="458" className="TEXT">
            달성군
          </text>
        </g>
      </svg>
    );
  }
}

export default Daegu;
