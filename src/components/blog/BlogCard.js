import React from 'react'
import BlogInfo from './BlogInfo'


function BlogCard({props}) {
    return (
        <div>
            <BlogInfo 
                image={props.image}
                category={props.category}
                title={props.title}
                description= {props.description}
            />
        </div>
    )
}

export default BlogCard
