import React from 'react';
import styled from "styled-components";

const Wrapper = styled.header`
height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

.intro {
    display: flex;
    flex-direction: row;
}

.image img{
    width: 60%;
    border-radius: 150px;
    box-shadow: 12px 0 #d9c8f1, 24px 0 #e2d6f3, 36px 0 #ece6f5;
}

.image {
    display: flex;
    flex: 0 0 50%;
    justify-content: center;
    width: 100%;
    position: relative;
}

h1 {
    font-size: 2.5rem;
    letter-spacing: 2px;
    margin: 24px 0;
}

a {
    text-decoration: none;
    margin: 0 15px 0 0;
}

.buttons {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
}

.socials {
    margin: 0 30px;
    display: flex;
    font-size: 20px;
}

.socials button {
    padding: 9px 10px;
    background-color: white;
    border-radius: 6px;
    color: #8444df;
    border: 1px solid #eee;
    box-shadow: 0px 4px 6px rgb(134 151 168/10%);
    display: inline-block;
}

.socials a {
    margin: 0 15px 0 15px;
}

.socials button:hover {
    box-shadow: 0 7px 15px rgba(0, 0, 0, 0.2);
}

.socials button:focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

`
const Intro = () => {
    return <Wrapper id="home" className="main-content">
        <div className='intro sectionContain'>
            <div className='image'><img src="https://images.vexels.com/media/users/3/201965/isolated/preview/27f19dc897b1e9a9a96e008bd2e119bb-cute-square-shape.png" /></div>
            <div style={{ padding: "30px 0" }}>
                <em>HI THERE! I'M</em>
                <h1 className='head'><span className='color-text'>CHHAVI</span> ARORA</h1>
                <p>A <span className='color-text'>Front-End Web Developer</span> passionate about creating interactive applications and experiences on the web.</p>
                <div className='buttons'>
                    <a href="https://docs.google.com/document/d/19R6mDWTHA-pDuHBmTGzNiMyo1B1Xp642g2EN_1RuQn0/edit"><button className='button-intro'>Resume</button></a>
                    <span className='socials'>
                        <a href="https://www.linkedin.com/in/chhaviarora1401/"><button><i class="fa-brands fa-linkedin"></i></button></a>
                        <a href="https://github.com/ChhaviArora1401"><button><i class="fa-brands fa-github-square"></i></button></a>
                        <a href="https://twitter.com/chhaviarora1401"><button><i class="fa-brands fa-twitter-square"></i></button></a>
                    </span>
                </div>
            </div>
        </div>
    </Wrapper >
};

export default Intro