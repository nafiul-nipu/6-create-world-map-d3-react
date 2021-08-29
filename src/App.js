import './App.css';

import { useData } from './components/useData';
import { WorldMap } from './components/WorldMap';

const width = 960;
const height = 500;

function App() {
  const data = useData()

  if(!data){
    return <pre>Loading ...</pre>
  }

  
 

  return (
    <svg width={width} height={height}>      
      <WorldMap 
        data={data}
      />
    </svg>
  );

}

export default App;
 