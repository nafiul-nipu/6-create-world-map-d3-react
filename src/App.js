import './App.css';
import {scaleLinear,  extent, scaleTime, timeFormat} from 'd3';

import { useData } from './components/useData';
import { AxisBottom } from './components/AxisBottom';
import { AxisLeft } from './components/AxisLeft';
import { LinePlot } from './components/LinePlot';

const width = 960;
const height = 500;
const margin = {top:20, right:30, bottom:65, left:90} 

const xAxisLabelOffset = 50
const yAxisLabelOffset = 40

function App() {
  const data = useData()

  if(!data){
    return <pre>Loading ...</pre>
  }

  const innerHeight = height - margin.top - margin.bottom
  const innerWidth = width - margin.left - margin.right

  const xValue = d => d.timestamp;
  const xAxisLabel = 'Time'


  const yValue = d => d.temperature;
  const yAxisLabel = 'Temperature'


  const xAxisTickFormat = timeFormat('%a')

  const xScale = scaleTime()
                  .domain(extent(data, xValue))
                  .range([0, innerWidth])
                  .nice()

  const yScale = scaleLinear()
                  .domain(extent(data, yValue))
                  .range([innerHeight, 0])
                  .nice()
 

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
      
      <AxisBottom 
        xScale ={xScale}
        innerHeight = {innerHeight}
        tickFormat = {xAxisTickFormat}
        tickOffset = {5}
      />

      <text
        className='axis-label'
        x={innerWidth / 2}
        y={innerHeight + xAxisLabelOffset}
        textAnchor='middle'
      >{xAxisLabel}</text>

      <AxisLeft 
        yScale = {yScale}
        innerWidth={innerWidth}
        tickOffset = {5}
      />
      
      <text
        className='axis-label'       
        textAnchor='middle'
        transform={`translate(${-yAxisLabelOffset}, ${innerHeight / 2} )rotate(-90)`}
      >{yAxisLabel}</text>

      <LinePlot 
        data={data}
        xScale = {xScale}
        yScale = {yScale}
        xValue = {xValue}
        yValue = {yValue}
        tooltipFormat = {xAxisTickFormat}
        radius={4}
      />
      </g>
    </svg>
  );

}

export default App;
 