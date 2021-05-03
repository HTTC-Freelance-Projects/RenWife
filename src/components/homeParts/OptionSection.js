import React from 'react'
import { Button } from 'semantic-ui-react'
import CommunityBG from '../../images/CommunityBG.png'
import sword from '../../images/sword.png'
import {Participation, Community, Blueprint, Shop } from '../styles/HomeStyles'
function OptionSection() {
    return (
        <div>
            <Participation>
                <Blueprint>
                    <div className="bp-left">
                        <h3 className="title">Blueprint</h3>
                        <h2>jjkhlkj</h2>
                        <Button>Get Yours Now</Button>
                    </div>
                    <img></img>
                </Blueprint>
                <Community>
                    <div className = "comm-left">
                        <h3 className="title">The Community</h3>
                        <h2>You're not alone.</h2>
                        {/* <p>
                            Personal growth is just that, personal, but it doesn't have to be in isolation. </p> */}
                            
                            <p>Join others who are on their journey to personal growth for encouragement, support, and inspiration.</p>
                        <Button className="optBtn">Join Now</Button>
                        
                    </div>
                    
                    <img src={CommunityBG}
                        className="commImg"
                        alt="You are not alone. Community. Three women laughing together."
                        />
                        
                
                </Community>

                {/* <Blueprint>
                    <div className="bp-left">
                        <h3 className="title">Blueprint</h3>
                        <h2>hiuohadfoihafiohadfihoafd</h2>
                        <div className="btn">GET YOURS NOW</div>
                    </div>
                    <img></img>
                </Blueprint> */}
            </Participation>

            <Shop>
            
                <div className="shopBox">
                    
                        <div className = "shop-left">
                            <p className="shopTitle">Renaissance <br />Wife<br/>Shoppe</p>
                        </div>
                        <img src = {sword}
                            className="sword"
                            alt="renaissance wife sword and shield for shop"
                            />
                        <Button className="shopBtn">Shop Now</Button>
                     

                
                </div>
                
            </Shop> 
        </div>
    )
}

export default OptionSection
