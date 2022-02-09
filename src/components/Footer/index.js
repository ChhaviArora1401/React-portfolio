import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
height: 50px;
margin-top: 2%;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
`
const Foot = () => {
    return <Wrapper>
        <center>© Chhavi Arora 2022</center>
    </Wrapper >
};

export default Foot