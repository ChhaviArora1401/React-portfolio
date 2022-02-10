import React from 'react';
import styled from "styled-components";
import Intro from '../../components/main';
import About from '../../components/about';
import Skills from '../../components/skills';
import Project from '../../components/project';
import Contact from '../../components/Contact';

const Wrapper = styled.div`
background: #f7f7f7;
`

// const headings = [
//     {
//         pre_head: "SOME INFO",
//         head: "ABOUT ME"
//     },
//     {
//         pre_head: "CHECK OUT MY",
//         head: "SKILLS"
//     },
//     {
//         pre_head: "TAKE A LOOK AT MY",
//         head: "PROJECTS"
//     },
//     {
//         pre_head: "SAY HELLO",
//         head: "CONTACT"
//     }
// ];

const Main = () => {
    return <Wrapper>
        <Intro />
        <About />
        <Skills />
        <Project />
        <Contact />
    </Wrapper >
};

export default Main