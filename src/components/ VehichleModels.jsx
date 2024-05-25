import React from "react";
import Model from "./ui/Model";
import CarModel from "../assets/model-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import {
  faCar,
  faCircleCheck,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import ModelSkeleton from "./ui/ModelSkeleton";
import axios from "axios";
const VehicleModels = ({carModels,setCarModel,setBookingOpen,setSelectedModel}) => {
 
const[sort, setSort]= useState('')

function sortModels(){
  if(sort ==="HIGH_TO_LOW"){
   setCarModel( carModels.slice().sort((a,b)=> b.per_day_price -a.per_day_price))
  }
  if(sort ==="LOW_TO_HIGH"){
   
   }

   else if(sort === 'RATING'){
    setCarModel( carModels.slice().sort((a,b)=> b.rating -a.rating ))
   }
}



  useEffect(()=>{
sortModels();
  },[sort])
  return (
    <section id="models">
      <div className="container">
        <div className="row models__row">
          <div className="models__header">
            <h2 className="models__header__title">Vehicle Models</h2>
            <select 
            defaultValue="" 
            className="models__header__sort" 
            value={sort}
            onChange={(event)=>{
            setSort(event.target.value)
            }}>
              <option value="" className="models__header__sort__option">
                Sort
              </option>
              <option
                value="HIGH_TO_LOW"
                className="models__header__sort__option"
              >
                Price (High to low)
              </option>
              <option
                value="LOW_TO_HIGH"
                className="models__header__sort__option"
              >
                Price (Low to High)
              </option>
              <option value="RATING" className="models__header__sort__option">
                Rating
              </option>
            </select>
          </div>
          <div className="models__list">
            {carModels.length > 0
              ? carModels.map((model) => <Model 
              model={model} 
              key={model.id} 
              setBookingOpen={setBookingOpen} 
              setSelectedModel={setSelectedModel}
              />)
              : new Array(20)
                  .fill(0)
                  .map( (_,index) => <ModelSkeleton key={index} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleModels;
