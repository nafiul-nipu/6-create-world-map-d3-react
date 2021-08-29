import { useState, useEffect } from "react";
import { csv } from "d3";

const csvUrl = "https://gist.githubusercontent.com/nafiul-nipu/59ac40e9ab526145f255c2033bbaa797/raw/week_temperature_sf.csv"

export const useData = () =>{
    const [data, setData] = useState(null)
   
    useEffect(() =>{
      // //  loadding the data
      const row = d => {
        d.temperature = +d.temperature
        d.timestamp = new Date(d.timestamp)
        return d
      }
      csv(csvUrl, row).then(setData);
    }, []);
  
    return data
  }