import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
.side {
  background-color: #8444df;
  position: absolute;
  transition: 0.3s;
  height: 100vh;
  width: 110px;
  text-decoration: none;
  font-size: 20px;
  color: white;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 10;
}

.side:hover {
    width: 220px;
}

.text {
  visibility: hidden;
  color: #fff; 
//   z-index: 1;
}

.side:hover .text {
  visibility: visible;
}

.logo {
    text-align: center;
    padding: 30px 15px;
    font-size: 3rem;
    letter-spacing: 1px;
    font-weight: 300;
    background-color: #773dc8;
}

.menu {
    display: flex;
    flex-direction: column;
    font-size: 0.85em;
    max-height: 300px;
    text-align: center;
}

.menu .subitem{
    display: flex;  
    padding: 12px 0px 12px 30px;
    margin: 0 15px 5px 15px;
    margin-bottom: 5px;
}

.subitem .text {
    margin: 0 15px 0 15px;
}

.menu .subitem:hover {
    background-color: #9D69E5;
    border-radius: 10px;
    -webkit-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.2);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.2);
}

.end {
    margin-bottom: 20px;
    display: flex;
}

.end .last {
    display: flex;  
    padding: 12px 0px 12px 30px;
    margin: 0 15px 5px 15px;
}

.last .text {
    font-size: 8px;
    margin: 0 15px 0 0px;
    float: right;
    // writing-mode: vertical-lr;
    // text-orientation: upright;
}


`
const Side = () => {
    return <Wrapper>
        <div className="side">
            <div className='logo'>
                CA
            </div>
            <div className='menu'>
                <div className="subitem"><span className='icon'>@</span> <span className="text">Home</span></div>
                <div className="subitem"><span className='icon'>@</span> <span className="text">About</span></div>
                <div className="subitem"><span className='icon'>@</span> <span className="text">Skills</span></div>
                <div className="subitem"><span className='icon'>@</span> <span className="text">Works</span></div>
                <div className="subitem"><span className='icon'>@</span> <span className="text">Contact</span></div>
            </div>
            <div className='end'>
                <div className="last"><span className='icon'>@</span> <span className="text">Scroll down</span></div>
            </div>
        </div>
    </Wrapper >
};

export default Side