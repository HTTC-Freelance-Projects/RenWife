import React from 'react'
import {Link} from 'react-router-dom'
import {TopNav} from '../../components/styles/NavStyles'
import RenWifeLogo from '../../images/RenWifeLogo.png'

function Nav() {

  

    return (
        <TopNav>
            <nav class="level py-3 nav is-desktop">
                <p class="level-item has-text-centered"><Link to= '/' class="link is-info">Home</Link></p>
                <p class="level-item has-text-centered"><Link to = '/heart' class="link is-info">Heart</Link></p>
                <p class="level-item has-text-centered"><Link to = '/health' class="link is-info">Health</Link></p>
                <p class="level-item has-text-centered"><img src={RenWifeLogo} alt="Renaissance Wife Logo" class="logo"/></p>
                <p class="level-item has-text-centered"><Link to = '/harmony'class="link is-info">Harmony</Link></p>
                <p class="level-item has-text-centered"><a href = "" class="link is-info">Blog</a></p>
                <p class="level-item has-text-centered"><Link to = '/contact' class="link is-info">Contact</Link></p>
            </nav> 

        
        
        </TopNav>
    )
}

export default Nav
