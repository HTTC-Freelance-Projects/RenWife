import React from 'react'
import styled from 'styled-components'


const BlogInfo = ({image, category, title, description}) => {
    return (
        <BlogCardDiv>
            <img>{image}</img>
            <h3 className = "category">{category}</h3>
            <h3 className = "title"> {title}</h3>
            <p className="description">{description}</p>
        </BlogCardDiv>
    )
}

export default BlogInfo;


const BlogCardDiv = styled.div``
