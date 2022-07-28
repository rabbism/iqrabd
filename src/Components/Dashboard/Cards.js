import React from "react";

const Cards = (props) => {
  const { name, image, email } = props.item;
  console.log(props.img);
  return (
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
      <div className="card-style-3 mb-30">
        <div class="card-image">
          <a href="#0">
            <img className ="img-thumbnail" src={`data:${image.contentType};base64,${image.img}`} alt="" />
          </a>
        </div>
        <div className="card-content">
          <h4>
            <a href="#0">{name} </a>
          </h4>
          <p>
            {email}
          </p>
          <a href="#0" className="read-more">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
