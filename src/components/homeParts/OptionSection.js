import React from 'react'
import { Button } from 'semantic-ui-react'
import CommunityBG from '../../images/CommunityBG.png'
import {Participation, Community, Blueprint, Shop } from '../styles/HomeStyles'
function OptionSection() {
    return (
        <div>
            <Participation>
                <Community>
                    <div className = "comm-left">
                        <h3 className="title">The Community</h3>
                        <h2>You're not alone.</h2>
                        <p>Personal growth is just that, personal, but it doesn't have to be in isolation. Join others who are on their journey to personal growth for encouragement, support, and inspiration.</p>
                        <Button>Join Now</Button>
                    </div>
                    
                    <img src={CommunityBG}
                        className="commImg"
                        alt="You are not alone. Community. Three women laughing together."
                        />
                        
                
                </Community>

                <Blueprint>
                    <div className="bp-left">
                        <h3 className="title">Blueprint</h3>
                        <h2>hiuohadfoihafiohadfihoafd</h2>
                        <div className="btn">GET YOURS NOW</div>
                    </div>
                    <img></img>
                </Blueprint>
            </Participation>

            <Shop>
                <div className = "shop-left">
                    <h3 className="title">The Shop</h3>
                    <h2>"passthrough links"</h2>
                    <div className="btn">SHOP NOW</div>
                </div>
                <img></img>
            </Shop>
        </div>
    )
}

export default OptionSection
