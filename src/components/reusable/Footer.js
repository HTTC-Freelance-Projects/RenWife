import React from 'react'
import {Social, Links, Divider} from '../styles/HomeStyles'

function Footer() {
    return (
        <div>
            <Footer>
                <Social>
                    <a href = "#">Facebook</a>
                    <a href = "#">Instagram</a>
                    <a href = "#">LinkedIn</a>
                    <a href = "#">Podcast</a>
                    <a href = "#">Email</a>
                </Social>
                    <Divider></Divider>
                <Links>
                    <a href = "#">Home</a>
                        <div>
                        <a href = "#">Blog</a>
                            <ul>
                                <a href = "#">Home</a>
                                <a href = "#">Heart</a>
                                <a href = "#">Health</a>
                                <a href = "#">Harmony</a>
                            </ul>
                    </div>
                   
                </Links>
                <h4>Renaissance Wife | Copyright 2021</h4>
            </Footer>
        </div>
    )
}

export default Footer
