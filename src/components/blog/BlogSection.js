import React, {useState} from 'react'
import {blogData} from './index.js'
import Button from '../Button'
import {Blog, BlogSamples, Divider} from '../styles/HomeStyles'
import BlogCard from './BlogInfo'
import Harmony from '../../images/Harmony.jpg'
import Health from '../../images/Health.jpg'
import Heart from '../../images/Heart.jpg'
import Home from '../../images/Home.jpg'

export default function BlogSection() {
    const [data] = useState(blogData);
   
    return (
        <>
             <Blog>
                 {/* <h2 className="blog-header">The Blog</h2>
                 {data.map((blog, index) => (
                    <BlogCard props={blog} key={index}/>
                 ))}
                 */}

                <div className="blog-desc">
                    <h1 className="blogTitle">The Blog</h1>
                </div>
                
                <BlogSamples>
                <div className = "sample-top">
                <div className="sample">
                        <img src={Heart}
                            className = "blog-img"
                            alt=""
                            />
                        <p>Heart</p>
                        <h4>The Heart of the Matter is Your Heart Matters. </h4>
                        <p>Taking time to really listen to your own heart may seem like an easy assignment but in this era of constant input and never ending demands for our attention, it is harder than you may think. </p>
                        <Button />
                </div>

                    <div className="sample">
                        <img src={Home}
                            className = "blog-img"
                            alt=""
                            />
                        <p>Home</p>
                        <h4>The Heart of the Matter is Your Heart Matters. </h4>
                        <p>Taking time to really listen to your own heart may seem like an easy assignment but in this era of constant input and never ending demands for our attention, it is harder than you may think. </p>
                       <Button />
                    </div>

                
                </div>

                <div className="sample-bottom">
                    <div className="sample">
                        <img src={Health}
                            className = "blog-img"
                            alt=""
                            />
                        <p>Health</p>
                        <h4>The Heart of the Matter is Your Heart Matters. </h4>
                        <p>Taking time to really listen to your own heart may seem like an easy assignment but in this era of constant input and never ending demands for our attention, it is harder than you may think. </p>
                        <Button />
                    </div>

                    <div className="sample">
                        <img src={Harmony}
                            className = "blog-img"
                            alt=""
                            />
                        <p>Harmony</p>
                        <h4>The Heart of the Matter is Your Heart Matters. </h4>
                        <p>Taking time to really listen to your own heart may seem like an easy assignment but in this era of constant input and never ending demands for our attention, it is harder than you may think. </p>
                        <Button />
                    </div>
                </div>
        
                </BlogSamples>

                <div className="btn-btm">SEE ALL BLOG POSTS</div>


            </Blog>
            <Divider />
        </>

       
    )
}
