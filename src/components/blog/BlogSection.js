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
                    <h1 className="title">The Blog</h1>
                </div>
                
                <BlogSamples>
                <div className = "sample-top">
                    <div className="sample">
                        <img src={Home}
                            className = "blog-img"
                            alt=""
                            />
                        <p>Category</p>
                        <h4>Title</h4>
                        <p className="blog-desc">ahdjklfhaldfhaljhfajfhasdlkjfhalskfhalsdjh</p>
                       <Button />
                    </div>

                    <div className="sample">
                        <img src={Heart}
                            className = "blog-img"
                            alt=""
                            />
                        <p>Category</p>
                        <h4>Title</h4>
                        <p>Desc</p>
                        <Button />
                    </div>
                </div>

                <div className="sample-bottom">
                    <div className="sample">
                        <img src={Health}
                            className = "blog-img"
                            alt=""
                            />
                        <p>Category</p>
                        <h4>Title</h4>
                        <p>Desc</p>
                        <Button />
                    </div>

                    <div className="sample">
                        <img src={Harmony}
                            className = "blog-img"
                            alt=""
                            />
                        <p>Category</p>
                        <h4>Title</h4>
                        <p>Desc</p>
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
