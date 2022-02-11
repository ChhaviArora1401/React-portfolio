import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
height: 50vh;
margin: 0% 1% 1% 8%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`
const About = (props) => {
    return <Wrapper>
        <p>{props.p}</p>
        <h3>{props.h3}</h3>
        <div className="main-content">
            <div className='about' id="about">
                <div>
                    <p>A self-taught front end developer who loves coding. My front end journey started since March 2021. I try to create new things on my own from scratch and also like to learn from good developers. Recently, I am pursuing BCA from graduated from Vivekananda Institute of Professional Studies. I am passionate about coding and solving problems through code, and I am excited to work alongside other amazing programmers and learn so much more!</p>
                </div>
            </div>
        </div>
    </Wrapper >
};

export default About