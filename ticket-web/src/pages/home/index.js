import React from "react";
import Nav from "../../layout/nav";
import videoBanner from "../../assets/video/pexels-2022395.mp4";
import imgAbout from "../../assets/img/pexels-alexander-suhorucov-6457579.jpg";
const home = () => {
  return (
    <>
      <Nav />
      <section className="hero-section" id="section_1">
        <div className="section-overlay"></div>

        <div className="container d-flex justify-content-center align-items-center">
          <div className="row">
            <div className="col-12 mt-auto mb-5 text-center">
              <small>Festava Live Presents</small>

              <h1 className="text-white mb-5">Night Live 2025</h1>

              <a className="btn custom-btn smoothscroll" href="#section_2">
                Let's begin
              </a>
            </div>

            <div className="col-lg-12 col-12 mt-auto d-flex flex-column flex-lg-row text-center">
              <div className="date-wrap">
                <h5 className="text-white">
                  <i
                    className="fa fa-clock-o me-2"
                    style={{ color: "red" }}
                  ></i>
                  10 - 12<sup>th</sup>, Dec 2025
                </h5>
              </div>

              <div className="location-wrap mx-auto py-3 py-lg-0">
                <h5 className="text-white">
                  <i
                    className="fa fa-map-marker me-2"
                    style={{ color: "red" }}
                  ></i>
                  National Center, United States
                </h5>
              </div>

              <div className="social-share">
                <ul className="social-icon d-flex align-items-center justify-content-center">
                  <span className="text-white me-3">Share:</span>

                  <li className="social-icon-item">
                    <div href="#" className="social-icon-link">
                      <span className="bi-facebook"></span>
                    </div>
                  </li>

                  <li className="social-icon-item">
                    <div href="#" className="social-icon-link">
                      <span className="bi-twitter"></span>
                    </div>
                  </li>

                  <li className="social-icon-item">
                    <div href="#" className="social-icon-link">
                      <span className="bi-instagram"></span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="video-wrap">
          <video autoPlay loop muted className="custom-video" poster="">
            <source src={videoBanner} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      <section className="about-section section-padding" id="section_2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
              <div class="services-info">
                <h2 className="text-white mb-4">About Festava 2022</h2>

                <p className="text-white">
                  Festava Live is free CSS template provided by TemplateMo
                  website. This layout is built on Bootstrap v5.2.2 CSS library.
                  You are free to use this template for your commercial website.
                </p>

                <h6 className="text-white mt-4">Once in Lifetime Experience</h6>

                <p className="text-white">
                  You are not allowed to redistribute the template ZIP file on
                  any other website without a permission.
                </p>

                <h6 className="text-white mt-4">Whole Night Party</h6>

                <p className="text-white">
                  Please tell your friends about our website. Thank you.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="about-text-wrap">
                <img
                  src={imgAbout}
                  class="about-image img-fluid"
                  alt="pict-alt"
                />

                <div className="about-text-info d-flex">
                  <div class="d-flex">
                    <i className="about-text-icon bi-person"></i>
                  </div>

                  <div className="ms-4">
                    <h3>a happy moment</h3>

                    <p className="mb-0">
                      your amazing festival experience with us
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default home;
