/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Container, Grid } from '@mui/material';
import { AiFillStar } from 'react-icons/ai'


const Review = () => {



    return (

        

        <>
        
            <section id='Review' className='section_padding'>

                <Container>

                    <Grid container spacing={3} className="d_flex">

                        {/* left */}
                        <Grid item xs={6}>

                            
                            <div className="header_part">

                                <h4>একজন মুসলিম হিসেবে আমাদের সব চেয়ে বড় দায়িত্ব জ্ঞান তথা ইলম অর্জন করা। সাহাবায়ে কেরামের প্রতি আমাদের কর্তব্য যেন-তেন কোন বিষয় নয়। এটি দ্বীন ইসলামের প্রতি আমাদের কর্তব্যেরই একটি অংশ।</h4>

                                <h3>Abu al-Qasim al-Zahrawi</h3>
                                <p>পাবনা বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয় এর শিক্ষার্থী</p>

                                <div className="review_star">
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                </div>

                            </div>
                            

                        </Grid>

                        {/* Right */}
                        <Grid item xs={6}>

                            
                            <div className="right">

                                <div className="img">
                                    <img src="assets/images/review.png" alt="" />
                                    <div className="overlay">
                                        <img src="assets/images/koma.png" alt="" />
                                    </div>
                                </div>

                            </div>
                            

                        </Grid>

                    </Grid>

                </Container>

            </section>

        </>



    )



}

export default Review