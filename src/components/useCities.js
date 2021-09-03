import { useState, useEffect } from "react";
import { csv } from "d3";

const csvUrl = "https://gist.githubusercontent.com/nafiul-nipu/c7b84b52ca0f5b8a297d7bf858b7d183/raw/worldcities_clean.csv"


const row = d => {
    d.lat = +d.lat
    d.lng = +d.lng
    d.population = +d.population
    
    return d
};


export const useCities = () =>{
    const [data, setData] = useState(null)
   
    useEffect(() =>{
      // //  loadding the data
      csv(csvUrl, row).then(setData);
    }, []);
  
    return data
  }