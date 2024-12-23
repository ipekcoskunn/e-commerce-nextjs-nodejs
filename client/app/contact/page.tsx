import React from 'react'

const Contact = () => {
    return (
        <div className="contact-section">
            <div className="auto-container container">
                <div className="row">

                    <div className="contact-block col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="inner-box">
                            <img src="/images/icons/free.png" alt="Services 1" />
                            <p className="text">100% Güvenli <br /> Hesaplı , Kaliteli </p>
                        </div>
                    </div>

                    <div className="contact-block col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="inner-box">
                            <img src="/images/icons/people.png" alt="Services 1" />
                            <p className="text">Müşteri Memnuniyeti <br /> Önemi <br /> </p>
                        </div>
                    </div>

                    <div className="contact-block col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="inner-box">
                            <img src="/images/icons/world.png" alt="Services 1" />
                            <p className="text">Dünya'dan Ulaşın <br /> 0541 581 42 12</p>
                        </div>
                    </div>

                    <div className="contact-block col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="inner-box">
                            <img src="/images/icons/paper-fly.png" alt="Services 1" />
                            <p className="text">Bize Ulaşın <br /> info@ecommerce.com</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Contact