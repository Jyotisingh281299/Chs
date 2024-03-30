import React from 'react';
import pharmacy_img from '../../assets/img/pharmacy-img.png';
import product_banner_1 from '../../assets/img/product-16.png';
import product_banner_2 from '../../assets/img/product-17.png';
import product_banner_3 from '../../assets/img/product-18.png';
import shape_11 from '../../assets/img/icons/shape-11.png';
import shape_12 from '../../assets/img/icons/shape-12.png';
import medicine_icon from '../../assets/img/icons/order-icon.svg';

const Contact = () => {

    return (
        <div>
            {/* <section className="section pharmacy-banner mt-5">
                <div className="pharmacy-shapes">
                    <div className="pharmacy-shape-left">
                        <img src="assets/img/shapes/shape-5.png" alt="" />
                        <img src="assets/img/shapes/shape-6.png" className="shape-six" alt="" />
                    </div>
                    <div className="pharmacy-shape-right">
                        <img src="assets/img/shapes/shape-8.png" className="shape-eight" alt="" />
                        <img src="assets/img/shapes/shape-7.png" className="shape-seven" alt="" />
                    </div>
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="pharmacy-content">
                                <h1>From the Leading Online Pharmacy </h1>
                                <h4>& Healthcare Platform Company</h4>
                                <p>Essentials Nutrition & Supplements from all over the suppliers around the World</p>
                            </div>
                            <div className="pharmacy-btn">
                                <a href="#" className="btn">Shop Now</a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="pharmacy-banner-img">
                                <img src={pharmacy_img} className="img-fluid" alt="Pharmacy Img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}


            <section className="section welcome-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 d-flex">
                            <div className="shop-card suppliment-card">
                                <div className="row align-items-center">
                                    <div className="col-md-7">
                                        <div className="shop-content">
                                            <h5>10% Cashback on Dietary <span>Suppliments</span></h5>
                                            <p>Code: CARE12</p>
                                            <a href="#" className="btn">Shop Now</a>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="shop-img">
                                            <img src={product_banner_1} alt="Product Img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex">
                            <div className="shop-card freshner-card">
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <div className="shop-content">
                                            <h5><span>Say yes</span> to New Throat Freshner</h5>
                                            <h6>Refresh your day the fruity way</h6>
                                            <a href="#" className="btn">Shop Now</a>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="shop-img">
                                            <img src={product_banner_2} alt="Product Img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex">
                            <div className="shop-card product-worth-card">
                                <div className="row align-items-center">
                                    <div className="col-md-7">
                                        <div className="shop-content">
                                            <h5>Get a Product Worth <span>1000</span> in a Pack</h5>
                                            <p>Code: CARE12</p>
                                            <a href="#" className="btn">Shop Now</a>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="shop-img">
                                            <img src={product_banner_3} alt="Product Img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='container'>
                <div class="row">
                    <div class="col-md-6 d-flex aos aos-init aos-animate" data-aos="fade-up">
                        <div class="categorie-card cash-card">
                            <div class="categorie-details">
                                <h4>Cash On delivery Available</h4>
                                <p>Order Now, Pay Later</p>
                            </div>
                            <div class="categorie-btn">
                                <a href="#" class="btn">
                                    <img src={medicine_icon} alt="Order Icon" /> Order Now
                                </a>
                            </div>
                            <div class="categorie-shapes">
                                <div class="categorie-shape-top">
                                    <img src={shape_11} alt="Shape Img" />
                                </div>
                                <div class="categorie-shape-bottom">
                                    <img src={shape_12} alt="Shape Img" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 d-flex aos aos-init aos-animate" data-aos="fade-up">
                        <div class="categorie-card sale-card">
                            <div class="categorie-details">
                                <h4>Sale of the Month</h4>
                                <p>Offer Prices in all medecines</p>
                            </div>
                            <div class="categorie-btn">
                                <a href="#" class="btn">View Medicines
                                    <img src={medicine_icon} alt="Medicine Icon" />
                                </a>
                            </div>
                            <div class="categorie-shapes">
                                <div class="categorie-shape-top">
                                    <img src={shape_11} alt="Shape Img" />
                                </div>
                                <div class="categorie-shape-bottom">
                                    <img src={shape_12} alt="Shape Img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;
