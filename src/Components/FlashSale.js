import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import Countdown from './Countdown';
import { BsArrowRight } from 'react-icons/bs';
import Item from './Item';


const FlashSale = () => {
const[items,setItems]=useState([]);
useEffect(()=>{
    fetch("https://sleepy-depths-81993.herokuapp.com/items")
    .then(res => res.json())
    .then(data => setItems(data))
},[])


    return (

        
        <>
        
            <section id='flash_sale' className='section_padding'>

                <Container>

                    {/* Header Part */}
                    <div className="header_part">

                        <Grid container spacing={3} className="d_flex">

                            <Grid item xs={6}>

                                <h3 className='d_flex'>
                                    Flash Sale
                                    <svg width="74" height="26" viewBox="0 0 74 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M33.1348 2L2.00009 2" stroke="#111A45" stroke-width="3" stroke-linecap="round"/>
                                        <path d="M72.1689 24.5L14.0819 24.5" stroke="#111A45" stroke-width="3" stroke-linecap="round"/>
                                    </svg>
                                </h3>

                                <h2>Special Discount Offer for Items</h2>

                            </Grid>

                            <Grid item xs={6}>

                                <div className="right">
                                    <h4>Hurry Up! Offer End In:</h4>
                                
                                    <Countdown></Countdown>
                                </div>

                            </Grid> 

                        </Grid>

                    </div>

                    {/* content Item */}
                    <div className="content_item">

                        <Grid container spacing={3} className="d_flex">

                          {
                                 items.map(item => <Item key={item._id} item={item}></Item>)
                          }

                        </Grid>

                    </div>

                </Container>

                {/* right_bg */}
                <div className="Flash_right_bg">
                    <img src="assets/images/banner_bgs.png" alt="" />
                </div>

                {/* bottom */}
                <div className="Flash_bottom_dots">
                    <img src="assets/images/dots.png" alt="" />
                </div>

            </section>
        
        </>


    )


}

export default FlashSale