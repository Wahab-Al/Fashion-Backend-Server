import React from 'react'
import Unlimited from '../../../assets/img/whyFashion/unlimited-possibilities.png'
import Transparency from '../../../assets/img/whyFashion/transparency.png'
import Excellent from '../../../assets/img/whyFashion/excellent.png'
import LogFashion from '../../../assets/img/LogFashion.png'
import './whyFashion.css'

export default function WhyFashion() {
    return (
        <> 
            <h2 className='text-center mt-md-4 mb-3'>Why <span className='WhyFashion-title'>Fash<img className='LogoIconImg' src={LogFashion} alt="LogoIcon" width={35} height={35}/>ion</span></h2>
            <div className="container why-us mt-2 flex-wrap flex-md-nowrap bg-body-tertiary rounded-4 p-4">
                <div className="first-section d-flex justify-content-around align-items-center gap-2 overflow-hidden">
                    <div className="top-positive col-12 col-md-7 p-2 mt-3">
                        <h5>✨ Unlimited Possibilities ✨</h5>
                        <p>
                            More than 560 million offers from around 50,000 merchants give you a complete overview of the market and put everything you’re looking for right at your fingertips — always at the best price. With smart filtering and sorting tools, you’ll easily find the deal that fits you perfectly. 📊 Expert reviews, 💬 user opinions, and our practical guides help you make confident purchase decisions. 📝 Wish lists and price alerts make shopping simple and comfortable. You’re in control: choose what you want to buy and from which store. 🚀 Even on the go, you can rely on our app for a seamless shopping experience anywhere.
                        </p>
                    </div>
                    <div className="img-section col-5 d-none d-md-block mt-3">
                        <img className='img-section-img' src={Unlimited} alt="" />
                    </div>
                </div>
                <div className="second-section d-flex justify-content-around align-items-center gap-2 overflow-hidden">
                    <div className="img-section col-5 d-none d-md-block mt-3">
                        <img className='img-section-img' src={Transparency} alt="" />
                    </div>
                    <div className="top-positive col-12 col-md-7 p-2 mt-3">
                        <h5>✨ Transparency for You ✨</h5>
                        <p>
                            It’s important to us that you always feel confident when shopping. Our mission is to provide transparency across millions of online offers. We want to empower you to decide what you truly need, so you can make the best purchase decision for yourself.Our greatest priority is supporting you while you shop. We don’t need to sell you anything, and we don’t have warehouses to clear out — that’s why our advice is always objective. The merchants listed with us pay a small fee for our service. For you, using idealo
                        </p>
                    </div>
                </div>
                <div className="third-section d-flex justify-content-around align-items-center gap-2 overflow-hidden">
                    <div className="top-positive col-12 col-md-7 p-2 mt-3">
                        <h5>✨ Excellent ✨</h5>
                        <p>
                            We are quite good at what we do and continuously win awards for our reliability and service. In addition, TÜV Saarland recognized us as the first price comparison platform with the seal “Certified Comparison Portal” for transparency, up-to-date information, data protection, and quality (06/2023). We are very proud that TÜV has certified our work as a price comparison service. This does not change the fact that around 1,000 employees from over 60 nations work every day to make shopping simple, worry-free, and secure for you — while constantly improving idealo.
                        </p>
                    </div>
                    <div className="img-section col-5 d-none d-md-block mt-3">
                        <img className='img-section-img' src={Excellent} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}


