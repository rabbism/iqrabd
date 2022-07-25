import React from 'react';
import { Container, Grid } from '@mui/material';

const WatchVideo = () => {


    return (


        <>
        

            <section id='video_part' className='section_padding'>

                <Container>

                    <Grid container spacing={3} className="d_flex">

                        {/* Item */}
                        <Grid item xs={4}>

                            <div className="img">
                                <img src="assets/images/video1.png" alt="" />
                                <div className="video_left">
                                    <img src="assets/images/video_left.png" alt="" />
                                </div>
                            </div>

                        </Grid>

                        {/* Item */}
                        <Grid item xs={4}>

                            <div className="img">
                                <img src="assets/images/video2.png" alt="" />
                            </div>

                        </Grid>

                        {/* Item */}
                        <Grid item xs={4}>

                            <div className="img">
                                <img src="assets/images/video3.png" alt="" />
                                <div className="right">
                                    <img src="assets/images/video_right.png" alt="" />
                                </div>
                            </div>

                        </Grid>

                    </Grid>

                </Container>

            </section>


        
        </>


    )


}

export default WatchVideo