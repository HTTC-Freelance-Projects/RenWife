import React from 'react'
import Layout from '../reusable/Layout'
import BlogSection from '../blog/BlogSection'
import CallToAction from '../reusable/CallToAction'
import Header from '../homeParts/Header'
import OptionSection from '../homeParts/OptionSection'
import PodcastSection from '../homeParts/PodcastSection'

import {Footer, HomeContainer} from '../styles/HomeStyles'

function Home() {
    return (
        <>
        {/* <Layout> */}
                <Header/>
                <CallToAction/>
                <BlogSection />
                <PodcastSection />
                <OptionSection />
                <CallToAction/>
                {/* <PodcastSection /> */}
        {/* </Layout> */}

       
        </>
    )
}


export default Home
