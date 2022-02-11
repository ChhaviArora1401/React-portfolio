import React from 'react';
import styled from "styled-components";
import { useState } from 'react';

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
    const [email, setEmail] = useState("");
    const [uname, setUname] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const hello = (e) => {
        e.preventDefault();
        console.log(email, uname, subject, message);
    };
    return <Wrapper>
        <div className="main-content" id="contact">
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
            <form onSubmit={(e) => hello(e)}>
                <div className='half'>
                    <input onChange={(e) => setUname(e.target.value)} type="text" placeholder='Name' name="uname" className="fields" defaultValue={uname} />
                    <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Email' name="email" className="fields" defaultValue={email} />
                </div>
                <input onChange={(e) => setSubject(e.target.value)} type="text" placeholder='Subject' name="subject" className="fields full" defaultValue={subject} />
                <input onChange={(e) => setMessage(e.target.value)} type="text" placeholder='Message' name="message" className="fields full" defaultValue={message} />
                <input type="Submit" className='button' style={{ display: "block" }} />
            </form>
        </div>
    </Wrapper >
};

export default Contact