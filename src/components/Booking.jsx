import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons/faCalendarAlt";
import { faCar } from "@fortawesome/free-solid-svg-icons/faCar";
import { faLocation } from "@fortawesome/free-solid-svg-icons/faLocation";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Booking = ({ carModels,bookingOpen,setBookingOpen,selectedModel,setSelectedModel }) => {

  return (
    <>
      <div className={`booking ${bookingOpen && 'booking-open'}`}>
        <div className="booking__container">
          <button className="booking__close" onClick={()=>{
            setBookingOpen(false)
          }}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <h3 className="booking__title">Book a car</h3>
          <form action="" className="booking__form">
            <div className="form__item">
              <label htmlFor="" className="form__item__label">
                <FontAwesomeIcon icon={faCar} />
                <span>
                  Select your Model <span className="required">*</span>
                </span>
              </label>
              <select className="form__item__select" value={selectedModel} 
              onChange={(event)=>
                
                setSelectedModel(event.target.value)
  }>
                <option value='' disabled>
                  Select
                </option>
                {carModels.map((model)=>(
                  <option key={`${model.id}`}  value={`${model.make} ${model.model}`}>
                    {model.make} {model.model}
                  </option>
                ))}
              </select>
            </div>
            <div className="form__item">
              <label htmlFor="" className="form__item__label">
                <FontAwesomeIcon icon={faLocationDot} />
                <span>
                Pick-up <span className="required">*</span>
                </span>
              </label>
              <select
                name="
  "
                id=""
                className="form__item__select"
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="New york" >
                  New York
                </option>
                <option value="London" >
                 London
                </option>
                <option value="Sydney" >
                  Sydney
                </option>
                <option value="Beijing" >
                Beijing
                </option>
                <option value="Los Angeles" >
                 Los Angeles
                </option>
                
              </select>
            </div>
            <div className="form__item">
              <label htmlFor="" className="form__item__label">
                <FontAwesomeIcon icon={faLocationDot} />
                <span>
                Drop-off <span className="required">*</span>
                </span>
              </label>
              <select
                name="
  "
                id=""
                className="form__item__select"
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="New york" >
                  New York
                </option>
                <option value="London" >
                 London
                </option>
                <option value="Sydney" >
                  Sydney
                </option>
                <option value="Beijing" >
                Beijing
                </option>
                <option value="Los Angeles" >
                 Los Angeles
                </option>
                
              </select>
            </div>
            <div className="form__item">
              <label htmlFor="" className="form__item__label">
                <FontAwesomeIcon icon={faCalendarAlt} />
                <span>
              Pick-up <span className="required">*</span>
                </span>
              </label>
             <input type="date" className="form__item__input" />
            </div>
            <div className="form__item">
              <label htmlFor="" className="form__item__label">
                <FontAwesomeIcon icon={faCalendarAlt} />
                <span>
                Drop-off <span className="required">*</span>
                </span>
              </label>
             <input type="date" className="form__item__input" />
            </div>
            <div className="form__item">
              <button className="form__item__submit">
                Book Ride
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Booking;
