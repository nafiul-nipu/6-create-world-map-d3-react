import { curveNatural, line } from "d3";

export const LinePlot = ({
    data, 
    xScale, 
    yScale, 
    xValue, 
    yValue, 
    tooltipFormat, 
    radius}) => (
        <g className='mark'> 
            <path 
                d={line()
                    .x(d=>xScale(xValue(d)))
                    .y(d=>yScale(yValue(d)))
                    .curve(curveNatural)
                    (data)}
            />
            {/* {data.map(d => 
                <circle                     
                    cx={xScale(xValue(d))}
                    cy={yScale(yValue(d))}
                    r={radius}
                >
                    <title>{tooltipFormat(xValue(d))}</title>
                </circle>
            )} */}
        </g>
    );