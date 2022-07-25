import { Grid } from '@mui/material';
import React from 'react';

const Item = (props) => {
    const{name,subject,img,price} =props.item
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
                            <span><strong>বিষয় :</strong>{subject}</span>
                        </div>

                        <h4>{name}</h4>
                        <h3>{price} <del>34 TK</del></h3>
                        <h5><strong>প্রকাশনী :</strong> মাকতাবাতুল আযহার</h5>

                        <a href="" className='view_details'>View Details</a>

                    </div>

                </div>

            </Grid>
        </>
    );
};

export default Item;