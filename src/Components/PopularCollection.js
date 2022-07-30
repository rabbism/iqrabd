import React, { useEffect, useState } from 'react';
import { Container, Grid} from '@mui/material';
import { BsArrowRight } from 'react-icons/bs';
import Item from './Item';



const PopularCollection = () => {

    const[items,setItems]=useState([]);
useEffect(()=>{
    fetch("https://sleepy-depths-81993.herokuapp.com/items")
    .then(res => res.json())
    .then(data => setItems(data))
},[])
    


    return (

        <>
        
            <section id='flash_sale' className='PopularCollection section_padding'>

                <Container>

                    {/* Header Part */}

                    <Grid container spacing={3} className="d_flex">

                        <Grid item xs={12}>

                            <div className="header_part d_flex d_justify">

                                <h2 >
                                    Popular Collection
                                    <svg width="74" height="26" viewBox="0 0 74 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M33.1348 1.5L2.00009 1.5" stroke="#FF4434" stroke-width="3" stroke-linecap="round"/>
                                        <path d="M72.1689 24L14.0819 24" stroke="#FF4434" stroke-width="3" stroke-linecap="round"/>
                                    </svg>
                                </h2>

                                <div className="view_all_part">
                                    <a href="" className='view_all d_flex'> View All  <BsArrowRight /></a>
                                </div>

                            </div>
                            

                        </Grid>

                    </Grid>

                    {/* content Item */}
                    <div className="content_item">
                        {
                            items.length ===0 ? <div class="d-flex justify-content-center">
                            <div class="spinner-border" role="status">
                              <span class="visually-hidden">Loading...</span>
                            </div>
                          </div>:
                           <Grid container spacing={3} className="d_flex">

                           {
                                    items.map(item => <Item key={item._id} item={item}></Item>)
                             }
   
                           </Grid>
                        }

                       

                    </div>

                </Container>

                {/* Popular */}
                <div className="Popular_bottom_dots">
                    <img src="assets/images/popular.png" alt="" />
                </div>

                {/* lefg_bg */}
                <div className="Popularleft_bg">
                    <img src="assets/images/popular_left.png" alt="" />
                </div>

            </section>

        </>

    )


}

export default PopularCollection