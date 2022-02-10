import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
height: 90vh;
margin: 0% 1% 1% 8%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
.parti {
    display: flex;
    justify-content: space-between;    
}
.c1 {
    height: 150px;
    padding: 2.5% 7%;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 4px 8px rgb(134 151 168/10%);
    border: 1px solid #eee;
    border-radius: 15px;
    width: 40%;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 20px;
}

.c1 img {
    width: 20px;
}
.icon {
    display: inline-block;
    padding: 18px;
    background: #f7f7f7;
    border-radius: 7px;
    font-size: 1.7rem;
    margin-bottom: 25px;
}

.half {
    display: flex;
}

.fields {
    border: 1px solid #eee;
    -webkit-transition: all 0.3s ease-in;
    transition: all 0.3s ease-in;
    padding: 11px 20px;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    letter-spacing: 1px;  
    margin: 1%;  
    width: 94.5%;
}
`
const Contact = () => {
    return <Wrapper>
        <div>
            ----- Some Info
            <h3>ABOUT ME</h3>
        </div>

        <div className="main-content">
            <h3>Get In Touch</h3>
            <div className='parti'>
                <div className='c1'>
                    <span className='icon'><img src="https://alexcalia.com/assets/skills/api.svg" /></span>
                    <span>chhaviarora1401@gmail.com</span>
                    Email me
                </div>
                <div className='c1'>
                    <span className='icon'><img src="https://alexcalia.com/assets/skills/api.svg" /></span>
                    <span>email</span>
                    Email me
                </div>
            </div>
            <h3>Contact Form</h3>
            <form>
                <div className='half'>
                    <input type="text" placeholder='Name' name="name" className="fields" />
                    <input type="text" placeholder='Email' name="email" className="fields" />
                </div>
                <input type="text" placeholder='Subject' name="name" className="fields full" />
                <input type="text" placeholder='Message' name="name" className="fields full" />
                <input type="Submit" className='button' style={{ display: "block" }} />
            </form>
        </div>
    </Wrapper >
};

export default Contact