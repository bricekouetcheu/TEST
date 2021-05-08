import React, { useState, useEffect } from 'react';
import axios from "axios";
import Cards from './Cards';

const Countries = () => {
    const [data , setData] = useState([]); //pour definir les données a afficher
    const[sortedData,setSortedData]=useState([]);
    const[playOnce, setPlayOnce]=useState(true);
    const[rangeValue,setRangeValue] = useState(40 );
    const[selectedRadio,setselectedRadio]=useState('')

    const radios =  ["Africa",'Europe','America','Asia','Oceania'];

     useEffect(()=>{
         if (playOnce)//pour bloquer les appels infinis
         {
            axios
            .get(
               "https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag"
                )
            .then(res => {
                setData(res.data);
                setPlayOnce(false);
            });

         }
        

        const sortedCountry = ()=>{ 
              const countryObj = Object.keys(data).map((i) => data[i]);//pour tranformer l'array data en un nouvelle array (sinon ca marche pas)
              const sortedArray = countryObj.sort((a , b ) =>
               b.population - a.population
            ) ;

            sortedArray.length=rangeValue
            ;
            setSortedData(sortedArray);

            
           // console.log(sortedArray);
        }

        sortedCountry();

        

        //console.log(data);

       

     },[data ,rangeValue, playOnce]);//pour relancer le useEffect
     
    
    
     



    return (
        <div className="countries">
            <div className="sort-container">
                <input type="range" min="1" max="250" value={rangeValue} onChange = {(e) => setRangeValue(e.target.value)}></input> 
                <ul>
                    {radios.map((radio)=>{//pour passer les element du tableau aux input radio
                        return(
                      <li key={radio}>
                        <input type="radio" value={radio} id={radio} checked = {radio == selectedRadio} onChange={(e)=>setselectedRadio(e.target.value)} />
                        <label htmlFor={radio}> {radio}</label>
                       </li>

                        );
                        
                        
                    })}
                </ul>
            </div>
            <ul className="countries-list">
                
                {sortedData.map( (country) => (
                 <Cards country = {country} key= {country.name} > </Cards>//permet de passer les donnes
                ))}

                
                
                
             </ul>

        </div>
        

    
    );
};

export default Countries;


