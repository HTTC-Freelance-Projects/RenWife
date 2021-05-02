import React from 'react'
import styled from 'styled-components'

export default function Button() {
    return (
        <Btn>
            Read More 
            </Btn>
    )
}


const Btn = styled.div`
    width: 15vw;
    // background-image: linear-gradient(to right, rgb(124, 179, 66), rgb(137, 129, 91));
    border-radius:5px;
    background-color:black;
    color:white;
    padding:1.5%;
`