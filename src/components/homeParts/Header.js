import React from 'react'
import {HeroSection, Divider} from '../styles/HomeStyles'
import Nav from '../reusable/Nav'

function Header() {
    return (
        <div>
            <Nav/>
            <HeroSection>
            <div class="container">
                <div class="row hero-body">
                    <div class="col-sm-8 intro">
                        <h3>Welcome to Renassaince Wife</h3>
                        <h4 className="titleH1">Where you can finally accomplish all the things you always meant to.</h4>
                    </div>
                    <div class="col-sm-4 lana"><img src = "https://renaissancewife.com/wp-content/uploads/2021/04/headshotbent.png"/></div>

                    <div className="meetLana">
                        <h3>Lana Vaughan</h3>
                        <h5>Wife | Mother | Mentor Extraordinaire</h5>
                    </div>
                </div> 
            </div>
            </HeroSection>
            <Divider/>
        </div>
    )
}

export default Header
