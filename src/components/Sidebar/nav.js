import React from 'react';
import styled from "styled-components";
import Side from "./index";

const Wrapper = styled.header`
z-index: 30;
height: 50px;
color: blue;
width: 100%;
`

const Nav = () => {
  return <Wrapper>
    <Side />

  </Wrapper >
};

export default Nav