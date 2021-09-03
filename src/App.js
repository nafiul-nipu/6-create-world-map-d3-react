import './App.css';

import { useWorldAtlas } from './components/useWorldAtlas';
import {useCities} from './components/useCities'
import { WorldMap } from './components/WorldMap';

const width = 960;
const height = 500;

function App() {
  const worldAtlas = useWorldAtlas()
  const cities = useCities()

  if(!worldAtlas || !cities){
    return <pre>Loading ...</pre>
  }

  
 

  return (
    <svg width={width} height={height}>      
      <WorldMap 
        worldAtlas={worldAtlas}
        cities={cities}
      />
    </svg>
  );

}

export default App;
 