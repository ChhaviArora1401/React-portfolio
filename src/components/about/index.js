import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
height: 90vh;
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
            <div className='about'>
                <div>
                    <p>I'm a front-end web developer with a background in computer systems and network infrastructure. My 8 years of IT experience has given me a strong foundation for web development and building complex solutions. Recently, I graduated from the Juno College Immersive Web Development Bootcamp. I am passionate about coding and solving problems through code, and I am excited to work alongside other amazing programmers and learn so much more!</p>
                </div>
            </div>
        </div>
    </Wrapper >
};

export default About