
import styled from 'styled-components'
import {size} from './MediaQueries'

const flexMixin = `
    display:flex;
    flex-direction:column;
    justify-content: space-evenly;
    align-items:center;
`
 const titles = `
    font-family:Amarithe;
    color:#572a2a;
    font-size: 10rem;
    padding: 1.5%;
    width: 50vw;
 `

 const shopTitles = `
    font-family:Amarithe;
    color:black;
    font-weight:800;
    width: 50vw;
 `

export const HomeContainer = styled.section `
    width: 100vw;
    min-height: 100vh;
    ${flexMixin}

    .btn {
        background-color: none;
        border: 1px solid black;
        padding: .75%;
        width: 10vw;
    }


`
export const HeroSection = styled.section `
    ${flexMixin}

    .hero-body{
        ${flexMixin}
    }
    .intro {
        border: 1px solid #d6d6d6;
        margin-top: 3vh;
        width: 80vw;
       ${flexMixin}
    }

    .lana {
        width:80vw;
    }
`


export const Divider = styled.div `

    width: 100vw;
    height: 7vh;
    background: url(https://renaissancewife.com/wp-content/uploads/2018/10/Spacer2.png);
    box-shadow: inset 0px 0px 10px rgba(0,0,0, 0.9);

`
export const TopSection = styled.section `
    // width: 70vw;
    display: flex;
    flex-direction: row; 
    justify-content: space-around;


       ul a {
            padding: 3%;
            text-decoration: none;
        }
`
export const Intro = styled.section `
        @media (max-width: ${size.smMobile}) {
            display:flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            height: 75vh;
            padding: 2%;
        }

    .title {
        @media(max-width:${size.smMobile}) {
            width: 70vw;
            font-size:1rem;
            border: 1px solid #d6d6d6;
        }

        .titleH1 {
            font-size:1.2rem;
        }
    }

    .img { 
        border: 1px solid black; 
        width: 45%;

    }

    h1 {
        font-size: 2rem;
        padding: .5% 5%;
    }

`
// export const Divider = styled.section `
//     padding: 2%;
//     background-color:grey;
//     width: 100vw;
// `
export const CTA = styled.section `
    width: 100vw; 
    height: 30vh;

    background-color: #89815b;
    // display:flex;
    // flex-direction: column;
    // justify-content: space-around;
    // align-items:center;
    // padding-bottom: 2%;


    // .ctaBtn {
    //     max-width: 10%;
    // }
`
//Blog Section//
export const Blog = styled.section `
 min-width: 100vw;
 ${flexMixin}

 .btn-btm {
    width: 35vw;
    padding:2%;
    margin: 2%;
    border: 1px solid black;
}

.blogTitle{
    ${titles}

    @media(max-width:${size.smMobile}) {
        font-size: 5rem;
    }

`
export const BlogSamples = styled.section `
   
    @media(max-width: ${size.smMobile}) {
    width: 100vw;
    display:flex; 
    flex-direction:column;
    justify-content: space-around;
    }

    @media(min-width: ${size.smTablet}) {
        display:flex;
        flex-direction:row;
        width: 70vw;
    }
  

    .sample-top, .sample-bottom {
        width: 100vw;
        display:flex;
    }
        .sample {
            width: 47%;
            padding: 3.5%;
            margin-bottom: 2%;
            display:flex;
            flex-direction:column;
            justify-content:space-evenly;
            align-items:center;

            a{
                text-decoration: none;
            } 
        }

        .blog-img {
            width: 150px;
            height: 150px;

        }

        .blog-desc{
            width: 20vw;
            white-space: nowrap;
            overflow:hidden;
            text-overflow:ellipsis;
            
        }

`
//end Blog Section
export const Participation = styled.section `
        ${flexMixin}

        @media(max-width: ${size.lgMobile}) {
            ${flexMixin}
            width: 100vw;
            // background-color:yellow;
        }

        @media (min-width: ${size.smTablet}) {
            display:flex;
            flex-direction:row;
            justify-content: space-evenly; 
            width: 100vw;
            padding: 3%;

        }

        .btn {
            margin-left: 40%;
        }
`
export const Community = styled.section `

        @media(max-width: ${size.lgMobile}) {
            margin: 3vh 0 3vh 0;
            position:relative;
            text-align:center;
            color:black;
            width: 85%;
        }

        @media (min-width: ${size.smTablet}) {
            position:relative;
            text-align:center;
            width: 50%;
        }
        .commImg {
           width: 100%;

           @media(max-width: ${size.smMobile}){
               width: 72vw;
           }
        }

        .comm-left {
            @media(max-width: ${size.lgMobile}) {
                position: absolute;
                width: 55vw;
                top: 45%;
                left: 50%;
                transform: translate(-50%, -50%);
            }


                @media(min-width:${size.smTablet}) {
                    width: 22vw;
                    position: absolute;
                    top: 45%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
        }

        .comm-left .title {
            @media(max-width: ${size.lgMobile}) {
                font-size: 2rem;
                font-weight: 600;
            }

            @media(min-width: ${size.lgTablet}) {
                font-size: 2.4rem;
                font-weight: 700;
            }
        }

        .comm-left h2 {
            @media(min-width: ${size.lgMobile}) {
                font-size: 1.5rem;
                font-weight: 700;
            }
        }

        .comm-left p {
            @media(max-width: ${size.lgMobile}) {
                display:none;
            }

            @media(min-width: ${size.smTablet}) and (max-width:${size.tablet}) {
                font-size: 1.2rem;
            }

            @media(min-width: ${size.lgTablet}) {
                font-size: 2rem;
            }
        }

        .optBtn {
            @media(min-width: ${size.lgMobile}) {
                font-size: 1.5rem;
                font-weight: 700;
                width: 10vw;
            }
        }
`
export const Blueprint = styled.section `
        background-color: #d0dde8;
        width: 45%;
        display:flex;
        justify-content: center;
        align-items: center;

        .btn {
            width: 55%;
            margin-left: 27%;
        }       
`
export const Shop = styled.section `
        width: 100vw;
        display:flex;
        flex-direction:row;
        background-color: #f7f7f7;
        padding: 5%;

        @media{min-width: ${size.tablet}} {
            width: 50vw;
        }

        .shopBox {
            position:relative;
            text-align:center;

            @media(min-width: ${size.lgTablet}) {
                ${flexMixin}
                width: 70vw;
            }
        }

        .shop-left {
            width: 45%;
            height: 20vh;
        
            width: 50vw;
            position: absolute;
            top: 50%;   
            left: 50%;
            transform: translate(-50%, -50%);

            @media(min-width: ${size.smTablet}) and(max-width: ${size.tablet}) {
                top: 55%;
                left: 40%;
                
            }
        }
        
        .shopTitle{
            ${shopTitles}

                @media (max-width: ${size.lgMobile}){
                    font-size: 3rem;
                }
                
                @media(min-width: ${size.smTablet}) and (max-width: ${size.tablet}) {
                    font-size: 3rem;
                }
                
                @media(min-width: ${size.lgTablet}) {
                    font-size: 4.5rem;
                }
            }
        
        .sword {
           opacity:0.4;
        }

        .shopBtn {
            
            @media(min-width: ${size.lgTablet}) {
                width: 10vw;
                height: 3vh;
                font-size: 1rem;
            }
        }
`
export const CTALower = styled.section `
        width: 100vw;
        height: 30vh;
        background-color: #fdc2bd;
     
        display:flex;
        flex-direction:row;
        justify-content: space-around; 
        padding: 1%;
        margin: 3%;

        img {
            border: 1px solid black;
            width: 20vw;
        }
        .cta-right{
            width: 60vw;
            border: 1px solid black;
            display:flex;
            flex-direction:column;
            align-items:center;
            
        }

`
export const CTASignup = styled.section `
        display:flex;
        justify-content:space-around;
        width: 15vw;
`
export const Podcast = styled.section `
    width: 100vw;
    padding: 2%;
    ${flexMixin}

    .podTitle{
        ${titles}

        @media(max-width:${size.smMobile}) {
            font-size: 4rem;
        }
    }
    p{
        font-size: 2rem;
    }
`
export const PodcastSamples = styled.section `
    display:flex;
    flex-direction:row;
    justify-content: space-around; 
    margin-bottom: 3%;
    width: 100vw;

    .pod-sample {
        display:flex;
        flex-direction:column;
        justify-content: space-around;
        align-items:center;
        max-width: 30vw;

    }
    .pod-btn {
        border: 2px solid grey;
        background-color: white;
        width: 20%;
        border-radius: 100%;
    }


      
    

.one, .two, .three {
    width: 30vw;
    padding-bottom: 2%;
    border-bottom: 25px solid #d6b3d6;

}
.one, .three {
    background-color: #fde6f0;
}

.two {
    background-color: #dcdaee;
}

.pod-brand {
    background-color: #a781b2;
    min-width: 70%;
    margin-left: 10%;
    margin-top:-3%;
}

.pod-img {
    
        border: 1px solid grey;
        background-color:white;
        width: 85%;
        min-height: 20vh;
        margin-top: 3%;
        margin-left: 7%;

}
`



export const Footer = styled.section `
    background-color: #a78aad;
    width: 100vw;
`
export const Social = styled.section `
    display:flex;
    justify-content: space-evenly;
    padding: 2%;

    a{ 
        border: 1px solid black;
        height: 100px;
        width: 100px;
    }
`
export const Links = styled.section `
    display:flex;
    justify-content: space-evenly; 
    padding: 2%;

 
    ul {
        display:flex;
        flex-direction:column;
        
        a {text-decoration: none;}

    }
`

// export default HomeContainer;
