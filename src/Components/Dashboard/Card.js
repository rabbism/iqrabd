import React, { useEffect, useState } from 'react';
import Cards from './Cards';

const Card = () => {
    const [img, setImg] =useState([])



    useEffect(() => {
        fetch("https://sleepy-depths-81993.herokuapp.com/slider")
          .then((res) => res.json())
          .then((data) => setImg(data));
      }, []);
    return (
        <div className="card-components main-wrapper">
            
            <div className="row">
        <div className="col-12">
          <div className="title mt-30 mb-30">
            <h2>Image</h2>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
       
       {

        img.map(data =><Cards key={data_id} data={data}></Cards>)
       
       }
        </div>
    
        
      </div>
        </div>
    );
};

export default Card;