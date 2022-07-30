import { Grid } from "@mui/material";
import React, { useState } from "react";

const Item = (props) => {
  const { name, subject, img, price } = props.item;
  const [data,setData] =useState(0);

  
    const newPrice = parseInt(price);
    const sum = (newPrice * 30)  /100;
    const discountPrice =Math.ceil(sum);
    const result = newPrice -discountPrice;
    
    
  
  
  return (
    <>
      {/* Item */}
      <Grid item xs={3}>
        <div className="content_item_item">
          {/* img */}
          <div className="img">
            <img src={img} alt="" />
          </div>

          {/* text */}
          <div className="text">
            {/* Subject */}
            <div className="subject">
              <span>
                <strong>বিষয় :</strong>
                {subject}
              </span>
            </div>

            <h4>{name}</h4>
            <h3>
              {result} <del>{price}</del>
            </h3>
            <h5>
              <strong>প্রকাশনী :</strong> মাকতাবাতুল আযহার
            </h5>

            <a href="" className="view_details">
              View Details
            </a>
          </div>
        </div>
      </Grid>
    </>
  );
};

export default Item;
