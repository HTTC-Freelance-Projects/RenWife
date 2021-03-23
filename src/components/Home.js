import React from 'react'
import 
    {HomeContainer, HeroSection, TopSection, 
    Intro, Divider, CTASection, 
    Blog, BlogSamples, Participation, Community,
    Blueprint, Shop,  CTALower, CTASignup, 
    Podcast, PodcastSamples, Footer, Social, Links}

 from './HomeStyles'

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
                        <h1>Where you can finally accomplish all the things you meant to.</h1>
                    </div>
                    <div className="img">image of Lana from front of site</div>
                </Intro>
            </HeroSection>
            <Divider></Divider>
            <CTASection>
                <h3 className="title">Mission</h3>
                <p>hoidfahoasifaoisdhfasiohdf</p>
                <div className="btn">LEARN MORE</div>
            </CTASection>

            <Blog>
                <div className="blog-desc">
                    <h1 className="title">The Blog</h1>
                    <p>dhhdf;khasd;fkhad;fkha;dskfh</p>
                </div>
                
                <BlogSamples>
                    
                    <div className="sample">
                    <img className = "blog-img"></img>
                        <p>Category</p>
                        <h4>Title</h4>
                        <p>ahdjklfhaldfhaljhfajfhasdlkjfhalskfhalsdjh</p>
                        <a href = "#">Read More ></a>
                    </div>
                    <div className="sample">
                    <img className = "blog-img"></img>
                        <p>Category</p>
                        <h4>Title</h4>
                        <p>Desc</p>
                        <div className="btn">Read More</div>
                    </div>
                    <div className="sample">
                    <img className = "blog-img"></img>
                        <p>Category</p>
                        <h4>Title</h4>
                        <p>Desc</p>
                        <div className="btn">Read More</div>
                    </div>
                    <div className="sample">
                        <img className = "blog-img"></img>
                        <p>Category</p>
                        <h4>Title</h4>
                        <p>Desc</p>
                        <div className="btn">Read More</div>
                    </div>
        
                </BlogSamples>

                <div className="btn">SEE ALL BLOG POSTS</div>
            </Blog>

            <Participation>
                <Community>
                    <div className = "comm-left">
                        <h3 className="title">The Community</h3>
                        <h2>You're not alone.</h2>
                        <p>Personal growth is just that, personal, but it doesn't have to be in isolation. Join others who are on their journey to personal growth for encouragement, support, and inspiration.</p>
                        <div className="btn">JOIN NOW</div>
                    </div>
                    <img></img>
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

            <CTALower>
                <img></img>
                <div className="cta-right">
                    <h2>hoioiajfdoiafd</h2>
                    <p>hoiafhd[oihadfoaihfd</p>
                    <CTASignup>
                        <p>form</p>
                        <div className="btn">Sign Up</div>
                    </CTASignup>
                    
                </div>
            </CTALower>

            <Podcast>
                <h1>The Podcast</h1>
                <p>hoihpoihafdihapifdohaidhf</p>
            
                <PodcastSamples>
                    <div className="pod-sample one">
                        <div className = "pod-box">
                            <img></img>
                            <div className="pod-btn"> > </div>
                            <p>Episode One</p>
                            <h3>Description</h3>
                        </div>
                        <div className="pod-brand">Ren Pod</div>
                    </div>
              
                    <div className="pod-sample two">
                    <div className = "pod-box">
                        <img></img>
                        <div className="pod-btn"> > </div>
                        <p>Episode Two</p>
                        <h3>Description</h3>
                        </div>
                        <div className="pod-brand">Ren Pod</div>
                    </div>
                    <div className="pod-sample three">
                    <div className = "pod-box">
                        <img></img>
                        <div className="pod-btn"> > </div>
                        <p>Episode Two</p>
                        <h3>Description</h3>
                        </div>
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
           
        </HomeContainer>
    )
}


export default Home
