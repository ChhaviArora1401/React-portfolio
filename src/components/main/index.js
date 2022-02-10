import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
height: 90vh;
margin: 0% 1% 1% 8%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
.intro {
    display: flex;
    flex-direction: row;
}
.image img{
    width: 70%;
    border-radius: 150px;
    box-shadow: 12px 0 #d9c8f1, 24px 0 #e2d6f3, 36px 0 #ece6f5;
}

a {
    text-decoration: none;
    margin: 0 15px;
}

.buttons {
    // display: flex;
}

.socials{
    margin: 0 30px;
}

.socials button {
    padding: 9px 10px;
    background-color: white;
    border-radius: 6px;
    color: #8444df;
    border: 1px solid #eee;
    -webkit-box-shadow: 0px 4px 6px rgb(134 151 168 / 10%);
    box-shadow: 0px 4px 6px rgb(134 151 168 / 10%);
    -webkit-transition: all 0.3s ease-in;
    transition: all 0.3s ease-in;
    display: inline-block;
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
    return <Wrapper>
        <div className="main-content">
            <div className='intro'>
                <div className='image'><img src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3" /></div>
                <div>
                    <h3>HI THERE! I'M</h3>
                    <h1><span>CHHAVI</span> ARORA</h1>
                    <p>A Front-End Web Developer passionate about creating interactive applications and experiences on the web.</p>
                    <div className='buttons'>
                        <button className='button'>Resume</button>
                        <span className='socials'>
                            <a href=""> <button>@</button></a>
                            <a href=""> <button>@</button></a>
                            <a href=""> <button>@</button></a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </Wrapper >
};

export default Intro