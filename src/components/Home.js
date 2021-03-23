import React from 'react'
import {
    HomeContainer, HeroSection, TopSection, 
    Intro, Divider, CTASection, CTAButton, 
    Blog, BlogSamples, BlogButton, 
    Participation, Community, CommButton, 
    Blueprint, BPButton, Shop, ShopButton, 
    CTALower, CTASignup, Podcast, PodcastSamples, 
    Footer, Social, Links

} from './HomeStyles'

function Home() {
    return (
        <HomeContainer>
            <HeroSection>
                <TopSection>
                    <div className = "logo"></div>
                    <ul>
                        <a href="#">Heart</a>
                        <a href="#">Home</a>
                        <a href="#">Health</a>
                        <a href="#">Harmony</a>
                    </ul>
                </TopSection>
                <Intro>
                    <div className="title">
                        <h3>Welcome to Renassaince Wife</h3>
                        <h2>Description</h2>
                    </div>
                    <div className="img"></div>
                </Intro>
            </HeroSection>
            <Divider></Divider>
            <CTASection>
                <h3 className="title">Mission</h3>
                <p>hoidfahoasifaoisdhfasiohdf</p>
                <CTAButton>LEARN MORE</CTAButton>
            </CTASection>

            <Blog>
                <div className="blog-desc">
                    <h1 className="title">The Blog</h1>
                    <p>dhhdf;khasd;fkhad;fkha;dskfh</p>
                </div>
                
                <BlogSamples>
                    <div className="sample">One</div>
                    <div className="sample">Two</div>
                    <div className="sample">Three</div>
                    <div className="sample">Four</div>
                </BlogSamples>

                <BlogButton>SEE ALL BLOG POSTS</BlogButton>
            </Blog>

            <Participation>
                <Community>
                    <div className = "comm-left">
                        <h3 className="title">The Community</h3>
                        <h2>Join women ........................</h2>
                        <CommButton>JOIN NOW</CommButton>
                    </div>
                    <img></img>
                </Community>

                <Blueprint>
                    <div className="bp-left">
                        <h3 className="title">Blueprint</h3>
                        <h2>hiuohadfoihafiohadfihoafd</h2>
                        <BPButton>GET YOURS NOW</BPButton>
                    </div>
                    <img></img>
                </Blueprint>
            </Participation>

            <Shop>
                <div className = "shop-left">
                    <h3 className="title">The Shop</h3>
                    <h2>hghyoihioh</h2>
                    <ShopButton>SHOP NOW</ShopButton>
                </div>
                <img></img>
            </Shop>

            <CTALower>
                <img></img>
                <div className="cta-right">
                    <h2>hoioiajfdoiafd</h2>
                    <p>hoiafhd[oihadfoaihfd</p>
                    <CTASignup>form</CTASignup>
                </div>
            </CTALower>

            <Podcast>
                <h1>The Podcast</h1>
                <p>hoihpoihafdihapifdohaidhf</p>
                <PodcastSamples>
                    <div className="pod-sample">
                        <img></img>
                        <button> x </button>
                        <p>Episode One</p>
                        <h3>Description</h3>
                        <div className="pod-brand">Ren Pod</div>
                    </div>
                </PodcastSamples>
                <PodcastSamples>
                    <div className="pod-sample">
                        <img></img>
                        <button> x </button>
                        <p>Episode Two</p>
                        <h3>Description</h3>
                        <div className="pod-brand">Ren Pod</div>
                    </div>
                </PodcastSamples>
                <PodcastSamples>
                    <div className="pod-sample">
                        <img></img>
                        <button> x </button>
                        <p>Episode Three</p>
                        <h3>Description</h3>
                        <div className="pod-brand">Ren Pod</div>
                    </div>
                </PodcastSamples>
            </Podcast>

            <Footer>
                <Social>
                    <a href = "#">Facebook</a>
                    <a href = "#">Instagram</a>
                    <a href = "#">LinkedIn</a>
                    <a href = "#">Podcast</a>
                    <a href = "#">Email</a>
                </Social>

                <Links>
                    <a href = "#">Home</a>
                    <a href = "#">Heart</a>
                    <a href = "#">Health</a>
                    <a href = "#">Harmony</a>
                </Links>
                <h4>Renaissance Wife | Copyright 2021</h4>
            </Footer>
           
        </HomeContainer>
    )
}


export default Home
