import React from 'react'
import './ourApps.css'
import GoogleApp from '../../../assets/img/apps/GoogleAppStore.svg'
import AppleApp from '../../../assets/img/apps/AppleStore.svg'
import HuaweiApp from '../../../assets/img/apps/HuaweiAppStore.svg'
import LogFashion from '../../../assets/img/LogFashion.png'

export default function OurApps() {
    return (
        <>
            <h5 className='text-center fs-6 mt-3'>Get the <span className='ourApps-title text-uppercase'>Fash<img className='LogoIconImg' src={LogFashion} alt="LogoIcon" width={35} height={35}/>oin</span> on your mobile</h5>
            <div className="container apps-container d-flex justify-content-center align-items-center ">
                <div className="google">
                    <img className='' src={GoogleApp} alt="" />
                </div>
                <div className="apple">
                    <img className='' src={AppleApp} alt="" />
                </div>
                <div className="huawei">
                    <img className='' src={HuaweiApp} alt="" />
                </div>
            </div>
        </>
    )
}


