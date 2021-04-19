
import styled from 'styled-components'
import {size} from './MediaQueries'

export const HomeContainer = styled.section `
    width: 100vw;
    min-height: 100vh;
    background-color: #fff; 
    display:flex; 
    flex-direction: column;
    justify-content:space-around;
    align-items: center;

    .btn {
        background-color: none;
        border: 1px solid black;
        padding: .75%;
        width: 10vw;
    }
`
export const HeroSection = styled.section `
    width: 100vw;
    max-height: 100vh;
    background-color: #fec7c4;
    display:flex; 
    flex-direction:column; 

`

export const ImgWrap = styled.div`
    max-width: 90vw;

    @media (min-width: ${size.mobile}) and (max-width: ${size.tablet}) {
        background-color:red;
    }

    @media (min-width: ${size.tablet}) and (max-width: ${size.desktop}) {
        background-color:green;
    }

    
    .spacerImg {
        width: 96vw;
        height: 7vh;
        margin: 0 1% 0 1%;
        background: url(https://renaissancewife.com/wp-content/uploads/2018/10/Spacer2.png);
        box-shadow: inset 0px 0px 10px rgba(0,0,0, 0.9);
    }

    .headerImg {
        width: 95vw;
        height: 27vh;
        margin: .5% 1% .5% 2%;
        border-radius: 1%;
        background:url(https://renaissancewife.com/wp-content/uploads/2021/04/header7.png);
        background-repeat: no-repeat;
        box-shadow: inset 0px 0px 10px rgba(0,0,0, 0.9);

     
    }
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
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    height: 75vh;
    padding: 2%;

    .title {
        width: 45%;
        border: 1px solid black;
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
export const Divider = styled.section `
    padding: 2%;
    background-color:grey;
    width: 100vw;
`
export const CTASection = styled.section `
    width: 100vw; 
    height: 50vh;

    background-color: #d5b1d5;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items:center;
    padding-bottom: 2%;


    .ctaBtn {
        max-width: 10%;
    }
`
export const Blog = styled.section `
    width: 100vw;   
    padding-bottom: 5%; 

    .more-blog {
        margin: 2%;
    }
`
export const BlogSamples = styled.section `
    width: 100vw;
    display:flex; 
    flex-direction: row; 
    justify-content: space-evenly;
  

        .sample {
            width: 20%;
            padding: 1%;
            margin-bottom: 2%;

            a{
                text-decoration: none;
            }

           
        }

        .blog-img {
            width: 150px;
            height: 150px;

        }
`
export const Participation = styled.section `
        display:flex;
        flex-direction:row;
        justify-content: space-evenly; 
        padding: 3%;

        .btn {
            margin-left: 40%;
        }
`
export const Community = styled.section `
        width: 45%;
        background-color: #cae4d7;
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
        justify-content: space-around; 
        background-color: #f0dbde;
        padding: 5%;

        .shop-left {
            width: 25%;
            margin-left: 4%;
        }

        img {
            width: 60%;
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
`
export const PodcastSamples = styled.section `
    display:flex;
    flex-direction:row;
    justify-content: space-around; 
    margin-bottom: 3%;

    .pod-sample {
        display:flex;
        flex-direction:column;
        justify-content: space-around;
        align-items:center;
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
