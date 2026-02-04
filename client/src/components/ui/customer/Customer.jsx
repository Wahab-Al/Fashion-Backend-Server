import './Customer.css'

import Hiba from '../../../assets/img/customers/Hiba.jpg'
import Ruba from '../../../assets/img/customers/Noga.jpg'
import Aahser from '../../../assets/img/customers/Aahser.jpg'

export default function Customer() {
  return (
    <>
      <h2 className='customer-title text-uppercase text-center'>Customers <span className='text-dark'>Voices</span></h2>
      <div id="testimonialCarousel" className="carousel slide py-5" data-bs-ride="carousel">
          <div className="carousel-indicators mb-n5">
            <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="0" className="active" aria-current="true"></button>
            <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="1"></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  {/* First Customer */}
                  <div className="col-md-4 col-12 mb-4">
                    <div className="testimonial-card">
                      <div className="quote-box">
                        <i className="fas fa-quote-left mb-3"></i>
                        <p>Absolutely stunning quality! The fabric feels premium and the fit is perfect for any occasion.</p>
                      </div>
                      <div className="customer-info mt-3 text-center">
                        <img src={Hiba} className="user-img mb-2" alt="Hiba" />
                      </div>
                        <h5 className="fw-bold text-center">Hiba</h5>
                    </div>
                  </div>

                  {/* Second Customer */}
                  <div className="col-md-4 col-12 mb-4">
                    <div className="testimonial-card">
                      <div className="quote-box">
                        <i className="fas fa-quote-left mb-3"></i>
                        <p>A true masterpiece of design. I’ve never received so many compliments on an outfit before.</p>
                      </div>
                      <div className="customer-info mt-3 text-center">
                        <img src={Aahser} className="user-img mb-2" alt="Ahmed" />
                      </div>
                        <h5 className="fw-bold text-center">Aahser</h5>
                    </div>
                  </div>

                {/* Third Customer */}
                <div className="col-md-4 col-12 mb-4">
                    <div className="testimonial-card">
                      <div className="quote-box">
                        <i className="fas fa-quote-left mb-3"></i>
                        <p>Fast, reliable, and incredibly intuitive. This is definitely a game-changer for my daily routine.</p>
                      </div>
                      <div className="customer-info mt-3 text-center">
                        <img src={Ruba} className="user-img mb-2" alt="Ahmed" />
                      </div>
                        <h5 className="fw-bold text-center">Ruba</h5>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

