import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
height: 90vh;
margin: 0% 1% 1% 8%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
.project {
    display: flex;
    flex-direction: row;
    border-radius: 15px;
    box-shadow: 0px 14px 28px rgb(134 151 168/8%);
    -webkit-transition: all 0.3s ease-in;
    transition: all 0.3s ease-in;
    border: 1px solid #eee;
    width: 100%;
}
img {
    width: 60%;
}
`
const Project = () => {
    return <Wrapper>
        <div>----- Some Info</div>
        <h3>ABOUT ME</h3>
        <div className="main-content">
            <div className='project'>
                <img src="kxg.doidg" />
                <div>
                    <h3>heading</h3>
                    <span>Technologies Used:</span>
                    <ol>
                        <li>Completely built with hooks and functional components</li>
                        <li>Emulates time passage, and stock prices update randomly as each "day" passes </li>
                    </ol>
                    <span href="/">Live</span>
                    <span href="/">Live</span>
                </div>
            </div>
        </div>
    </Wrapper >
};

export default Project