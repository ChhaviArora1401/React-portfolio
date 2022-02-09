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
.image {
    width: 60%;
}

`
const Intro = () => {
    return <Wrapper>
        <div className="main-content">
            <div className='intro'>
                <div className='image'><img src="imh.k" /></div>
                <div>
                    <h3>HI THERE! I'M</h3>
                    <h1><span>CHHAVI</span> ARORA</h1>
                    <p>A Front-End Web Developer passionate about creating interactive applications and experiences on the web.</p>
                    <div>
                        <button>Resume</button>
                        <span><button>linkedin</button></span>
                        <span><button>Github</button></span>
                        <span><button>twitter</button></span>
                    </div>
                </div>
            </div>
        </div>
    </Wrapper >
};

export default Intro