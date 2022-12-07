import React from "react";
import "../../style/mapText.css"
const here = "부산";
class Busan extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.locations)
    this.svgRef = React.createRef();
    console.log(this.svgRef)
  }
  componentDidMount() {
    console.log(this.svgRef["current"].childNodes[1].childNodes)
    this.props.selectedCallback(here, this.props.skill);
    console.log(this.props.locations);
    Object.values(this.svgRef["current"].childNodes[1].childNodes).map(value => {
      value.style.fill = value.tagName == 'path' ? `${this.props.locations[Object.entries(value)[1][1].name] ? `hsl(10 100% ${68 - Math.log2(this.props.locations[Object.entries(value)[1][1].name]) * 5}%)` : 'rgb(166, 166, 166)'}` : undefined;
    })
  }
  componentDidUpdate(prevProps) {
    if (this.props.locations !== prevProps.locations) {
      Object.values(this.svgRef["current"].childNodes[1].childNodes).map(value => {
        value.style.fill = value.tagName == 'path' ? `${this.props.locations[Object.entries(value)[1][1].name] ? `hsl(10 100% ${68 - Math.log2(this.props.locations[Object.entries(value)[1][1].name]) * 5}%)` : 'rgb(166, 166, 166)'}` : undefined;
      })
    }
    if (this.props.skill !== prevProps.skill) {
      this.props.selectedCallback(here, this.props.skill);

    }
  }
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        overflow="hidden"
        viewBox="400 0 3000 2000"
        onClick={this.props.click}
        ref={this.svgRef}

      >
        <defs>
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
        </defs>
        <g filter="url(#dropshadow2)">
          <path
            d="M3041.55 580.675 2860.16 648.535 2649.02 1241.88 2441.16 1137.32 2371.93 942.403 2213.55 707.819 2319.07 498.797 2249.85 422.444 2503.83 495.911 2599.54 334.877 2869.98 334.877 3041.55 580.675Z"
            name="기장군"
            stroke="#FFFFFF" strokeWidth="16.5292" strokeMiterlimit="8" />
          <path d="M1708.38 1166.88 1848.55 1226.32 1815.92 1447.27 1767.07 1512.4 1597.55 1537.88 1597.55 1455.76Z"
            name="사상구"
            stroke="#FFFFFF" strokeWidth="16.5292" strokeMiterlimit="8" />
          <path
            d="M2253.8 1232.88 2300.74 1320.9 2297.67 1323.63 2319.56 1345.65 2266.37 1430.88 2175.56 1340.13 2250.73 1243.85Z"
            name="수영구"
            stroke="#FFFFFF" strokeWidth="16.5292" strokeMiterlimit="8" />
          <path d="M1963.55 1191.88 2252.55 1238.16 2171.92 1339.55 2114.8 1356.88Z" stroke="#FFFFFF"
            name="연제구"
            strokeWidth="16.5292" strokeMiterlimit="8" />
          <path
            d="M1041.55 1674.44 1071.37 1708.55 1137.73 1887.33 1048.19 2122.88 912.097 1836.25 1031.55 1765.31 968.555 1731.2 1041.55 1674.44ZM1472.83 1646.1 1479.46 1648.9 1479.46 1657.47 1399.82 1719.92 1084.64 1705.66 1051.46 1674.44 1107.92 1572.28 895.554 1379.33 1190.83 1328.25 1243.92 1404.87 1280.47 1123.92 1751.55 1018.88 1715.1 1172.12 1715.1 1172.12 1598.92 1461.63 1598.92 1461.63 1486.1 1595.02 1472.83 1646.1Z"
            name="강서구"
            stroke="#FFFFFF" strokeWidth="16.5292" strokeMiterlimit="8" />
          <path d="M2367.55 941.407 2225.46 1125.88 2020.6 1057.77 1944.55 1037.92 1954.46 844.972 2212.2 705.878Z"
            name="금정구"
            stroke="#FFFFFF" strokeWidth="16.5292" strokeMiterlimit="8" />
          <path
            d="M1562.92 1706.78 1482.55 1653.27 1482.55 1641.97 1492.57 1596.87 1492.57 1594.07 1589.71 1455.88 1589.71 1540.47 1763.74 1515.08 1800.55 1842.17 1653.31 1808.28 1649.94 1892.88 1582.96 1799.87 1562.92 1706.78Z"
            name="사하구"
            stroke="#FFFFFF" strokeWidth="16.5292" strokeMiterlimit="8" />
          <path
            d="M2223.55 1126.88 2366.8 944.878 2436.69 1138.08 2646.55 1241.68 2586.57 1334.08 2366.8 1364.88 2336.8 1336.88 2300.18 1320.08 2250.18 1230.48 2223.55 1126.88Z"
            name="해운대구"
            stroke="#FFFFFF" strokeWidth="16.5292" strokeMiterlimit="8" />
          <path
            d="M1703.55 1173.1 1740.36 1019.45 1810.71 848.76 1954.58 845.878 1944.56 1039.38 2021.55 1059.3 1947.93 1178.78 1847.52 1232.88Z"
            name="북구"
            stroke="#FFFFFF" strokeWidth="16.5292" strokeMiterlimit="8" />
          <path
            d="M2176.9 1636.88 2163.92 1569.87 2053.54 1561.48 2050.27 1488.88 2040.55 1430.25 2115.27 1354.86 2167.19 1340.88 2277.57 1452.62 2290.55 1608.92 2176.9 1636.88Z"
            name="남구"
            stroke="#FFFFFF" strokeWidth="16.5292" strokeMiterlimit="8" />
          <path d="M2025.79 1059.88 2226.6 1127.05 2252.56 1230.71 2249.29 1241.88 1970.7 1197.04 1954.55 1177.51Z"
            name="동래구"
            stroke="#FFFFFF" strokeWidth="16.5292" strokeMiterlimit="8" />
          <path
            d="M1852.62 1229.08 1952.02 1175.88 1968.55 1195.48 2117.56 1355.08 2041.42 1427.88 1879.15 1455.88 1819.55 1447.48Z"
            name="부산진구"
            stroke="#FFFFFF" strokeWidth="16.5292" strokeMiterlimit="8" />
          <path
            d="M2103.06 1671.28 2165.55 1826.88 1912.1 1682.58 1905.55 1648.68 1912.1 1640.18 1941.76 1634.57 1945.04 1634.57 1961.5 1628.88 2103.06 1671.28 2103.06 1671.28Z"
            name="영도구"
            stroke="#FFFFFF" strokeWidth="16.5292" strokeMiterlimit="8" />
          <path d="M1877.56 1458.4 2037.3 1430.88 2040.56 1488.74 2040.56 1491.47 1978.62 1554.88 1884.08 1543.88Z"
            name="동구"
            stroke="#FFFFFF" strokeWidth="16.5292" strokeMiterlimit="8" />
          <path
            d="M1866.95 1728.18 1860.29 1794.13 1804.37 1842.88 1761.55 1518.95 1814.2 1455.88 1870.23 1461.64 1880.06 1553.37 1880.06 1665.11 1896.55 1685.2 1866.95 1728.18Z"
            name="서구"
            stroke="#FFFFFF" strokeWidth="16.5292" strokeMiterlimit="8" />
          <path d="M1886.56 1636.88 1926.3 1628.7 1982.56 1557.76 1886.56 1546.88Z" stroke="#FFFFFF"
            name="중구"
            strokeWidth="16.5292" strokeMiterlimit="8" />
        </g>
        <g filter="url(#dropshadow)">
          <text
            fontWeight="400"
            className="mapfont TEXT"
            x="2400.66"
            y="795">기장군</text>
          <text
            fontWeight="400"
            className="mapfont TEXT"
            x="1696.09"
            y="1360">사상구</text>
          <text
            fontWeight="400"
            className="mapfont TEXT"
            x="2220.55"
            y="1389">수영구</text>
          <text
            fontWeight="400"
            className="mapfont TEXT"
            x="2051.01"
            y="1302">연제구</text>
          <text
            fontWeight="400"
            className="mapfont TEXT"
            x="1296.74"
            y="1478">강서구</text>
          <text
            fontWeight="400"
            className="mapfont TEXT"
            x="2079.13"
            y="923">금정구</text>
          <text
            fontWeight="400"
            className="mapfont TEXT"
            x="1514.3"
            y="1681">사하구</text>
          <text
            fontWeight="400"
            className="mapfont TEXT"
            x="2299.03"
            y="1262">해운대구</text>
          <text
            fontWeight="400"
            className="mapfont TEXT"
            x="1774.79"
            y="1047">북구</text>
          <text
            fontWeight="400"
            className="mapfont TEXT"
            x="2107.92"
            y="1485">남구</text>
          <text
            fontWeight="400"
            className="mapfont TEXT"
            x="2026.2"
            y="1168">동래구</text>
          <text
            fontWeight="400"
            className="mapfont TEXT"
            x="1902.31"
            y="1373">진구</text>
          <text
            fontWeight="400"
            className="mapfont TEXT"
            x="2008.84"
            y="1735">영도구</text>
          <text
            fontWeight="400"
            className="mapfont TEXT"
            x="1941.02"
            y="1500">동구</text>
          <text
            fontWeight="400"
            className="mapfont TEXT"
            x="1761.11"
            y="1657">서구</text>
          <text
            fontWeight="400" fontSize="14"
            className="mapfont TEXT"
            x="1921.55"
            y="1597">중구</text>
        </g>
      </svg>
    );
  }
}

export default Busan;
