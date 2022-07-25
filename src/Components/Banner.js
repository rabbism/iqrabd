import React from 'react';
import {Container, Grid} from '@mui/material';



const Banner = () => {


  return (

    
    <>
      
      <section id='Banner' className='section_padding'>

        <Container>

          <Grid container spacing={3} className="d_flex">

            <Grid item xs={9}>

              <div className="banner_img">
                <img src="assets/images/banner_img.png" alt="" />
              </div>

            </Grid>

          </Grid>

        </Container>

      </section>

    </>


  )


}

export default Banner