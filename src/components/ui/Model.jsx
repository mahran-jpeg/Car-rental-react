import React from 'react';
import CarModel from "../../assets/model-img.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect,useState } from 'react';
import { faCar, faCircleCheck, faStar } from '@fortawesome/free-solid-svg-icons';
const Model = ({model}) => {
  return (
  <>
   <div className="model">
              <img src={`https://car-rental-api.up.railway.app/${model.image}`} alt="Car Model" className="model__img" />
              <div className="model__details model__details-1">
                <h3 className="model__details__name">{model.make} {model.model}</h3>
                <h4 className="model__details__price">
                  $ {Math.floor(model.per_day_price)}
                  <span className="model__details__price__span"> per day</span>
                </h4>
              </div>
              <div className="model__details model__details-2">
                <div className="model__detail">
                  <FontAwesomeIcon icon={faStar} className='model__detail__icon' />
                  <div className="span model__detail__text">{model.rating}</div>
                </div>
                <div className="model__detail model__detail-right">
                  <FontAwesomeIcon icon={faCar} className='model__detail__icon' />
                  <div className="span model__detail__text">{model.fuel}</div>
                </div>
                <div className="model__detail">
                  <FontAwesomeIcon icon={faCar} className='model__detail__icon' />
                  <div className="span model__detail__text">{model.make}</div>
                </div>
                <div className="model__detail model__detail-right">
                  <FontAwesomeIcon icon={faCar} className='model__detail__icon' />
                  <div className="span model__detail__text">{model.transmission}</div>
                </div>
              </div>
              <button className="model__btn">
                <span className="model__btn__span">Book Ride</span>
                <FontAwesomeIcon icon={faCircleCheck} />
              </button>
            </div>
  </>
  );
}

export default Model;