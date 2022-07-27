import React from 'react';

const Cards = (props) => {
  const {name,image}=props.img
  console.log(props.img)
    return (
        <div className="card-style-2 mb-30">
              <div className="card-image">
                <a href="#0">
                  <img src={`data:image/png;base64,${image}`}alt="" />
                </a>
              </div>
              <div className="card-content">
                <h4><a href="#0">{name} </a></h4>
                <p>
                  With supporting text below as a natural lead-in to
                  additional content. consectetur adipiscing elit. Integer
                  posuere erat a ante.
                </p>
              </div>
            </div>
    );
};

export default Cards;