import React from 'react';
import styled from "styled-components";
import { useState } from 'react';

const Wrapper = styled.section`
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
    margin: 0 auto;
    justify-content: space-evenly;
    align-items: center;
}

.c1 img {
    width: 20px;
}

.icon {
    display: inline-block;
    padding: 10px 18px;
    background: #f7f7f7;
    border-radius: 7px;
    font-size: 1.7rem;
    margin-bottom: 25px;
}

a {
    color: #333;
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

const Contact = (props) => {
    const [email, setEmail] = useState("");
    const [uname, setUname] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const hello = (e) => {
        e.preventDefault();
        console.log(email, uname, subject, message);
    };
    const { pre_head, head } = props;
    return <Wrapper className="main-content padding" id="contact">
        <div className='headings'>
            <span>{pre_head}</span>
            <p>{head}</p>
        </div>
        <div className="sectionContain">
            <h3>Get In Touch</h3>
            <div className='parti'>
                <div className='c1'>
                    <span className='icon'><i class="fa-solid fa-envelope"></i></span>
                    <a href="mailto:chhaviarora1401@gmail.com">chhaviarora1401@gmail.com</a>
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
                <input type="Submit" className='button' />
            </form>
        </div>
    </Wrapper >
};

export default Contact