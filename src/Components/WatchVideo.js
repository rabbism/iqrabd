import React from "react";
import { Container, Grid } from "@mui/material";

import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const WatchVideo = () => {
  const settings = {
    dots: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <>
      <section id="video_part" className="section_padding">
        <Container>
          <Slider {...settings} className="px-3">
            <div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/9wkyXmO-p2o"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>

            <div>
              <div className="img">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/9wkyXmO-p2o"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <div>
              <div className="w-100">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/9wkyXmO-p2o"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div>
              <div className="img">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/9wkyXmO-p2o"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <div>
              <div className="img">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/9wkyXmO-p2o"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <div>
              <div className="img">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/9wkyXmO-p2o"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </Slider>

          {/* <Grid container spacing={3} className="d_flex">

                        
                        <Grid item xs={4}>

                            <div className="img">
                                <img src="assets/images/video1.png" alt="" />
                                <div className="video_left">
                                    <img src="assets/images/video_left.png" alt="" />
                                </div>
                            </div>

                        </Grid>

                     
                        <Grid item xs={4}>

                            <div className="img">
                                <img src="assets/images/video2.png" alt="" />
                            </div>

                        </Grid>

                       
                        <Grid item xs={4}>

                            <div className="img">
                                <img src="assets/images/video3.png" alt="" />
                                <div className="right">
                                    <img src="assets/images/video_right.png" alt="" />
                                </div>
                            </div>

                        </Grid> */}

          {/* </Grid> */}
        </Container>
      </section>
    </>
  );
};

export default WatchVideo;
