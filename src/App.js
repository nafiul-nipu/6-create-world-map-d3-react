import './App.css';

import { useWorldAtlas } from './components/useWorldAtlas';
import {useCities} from './components/useCities'
import { WorldMap } from './components/WorldMap';
import { scaleSqrt, max } from 'd3';

const width = 960;
const height = 500;

function App() {
  const worldAtlas = useWorldAtlas()
  const cities = useCities()

  if(!worldAtlas || !cities){
    return <pre>Loading ...</pre>
  }

  const sizeValue = d => d.population;
  const maxRadius = 15;

  const sizeScale = scaleSqrt()
                    .domain([0, max(cities, sizeValue)])
                    .range([0, maxRadius])
 

  return (
    <svg width={width} height={height}>      
      <WorldMap 
        worldAtlas={worldAtlas}
        cities={cities}
        sizeScale={sizeScale}
        sizeValue = {sizeValue}
      />
    </svg>
  );

}

export default App;
 