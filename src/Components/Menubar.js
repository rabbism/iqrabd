/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Container, Grid, } from '@mui/material';

const Menubar = (props) => {


  return (


    
    <>

    
      <section id='Menubar'>

        <Container>
            
          <Grid container spacing={3} className="d_flex">

            {/* Logo */}
            <Grid item xs={3}>
              
              {/* Img */}
              <div className="logo">
                <img src="assets/images/logo.png" alt="" />
              </div>

            </Grid>

            {/* Menubar item */}
            <Grid item xs={9}>
              
              <div className="menu_item">

                <ul>

                  <li> <a href="" className={props.active == 'home' && 'active'}>Home</a> </li>
                  <li> <a href="" className={props.active == 'aboutUs' && 'active'}>About Us</a> </li>
                  <li> <a href="" className={props.active == 'product' && 'active'}>Product</a> </li>
                  <li> <a href="" className={props.active == 'offers' && 'active'}>Offers</a> </li>
                  <li> <a href="" className={props.active == 'blog' && 'active'}>Blog</a> </li>
                  <li> <a href="" className={props.active == 'contuctUs' && 'active'}>Contact Us</a> </li>

                </ul>

              </div>

            </Grid>

          </Grid>

        </Container>

      </section>


    </>



  )

}

export default Menubar