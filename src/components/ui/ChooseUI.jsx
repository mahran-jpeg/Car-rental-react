import React from 'react';

const ChooseUI = ({image,title,text}) => {
  return (
  <>
   <div className="choose__feature">
                  <figure className="choose__feature__img__wrapper">
                    <img src={image} alt="" className="choose__feature__img" />
                  </figure>
                  <div className="choose__feature__text">
                    <h4 className="choose__feature__text__title">
               {title}
                    </h4>
                    <p className="choose__feature__text__para">
               {text}
                    </p>
                  </div>
                </div>
  </>
  );
}

export default ChooseUI;
