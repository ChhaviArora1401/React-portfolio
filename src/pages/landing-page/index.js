import React from 'react';
import styled from "styled-components";
import Intro from '../../components/main';
import About from '../../components/about';
import Skills from '../../components/skills';
import Project from '../../components/project';
import Contact from '../../components/Contact';
import Foot from "../../components/Footer/index";

const Wrapper = styled.div`
width: calc(100% - 90px);
margin-left: 90px;
overflow: hidden;
background: #f7f7f7;
`

const headings = [
    {
        pre_head: "SOME INFO",
        head: "ABOUT ME"
    },
    {
        pre_head: "CHECK OUT MY",
        head: "SKILLS"
    },
    {
        pre_head: "TAKE A LOOK AT MY",
        head: "PROJECTS"
    },
    {
        pre_head: "SAY HELLO",
        head: "CONTACT"
    }
];

const Main = () => {
    return <Wrapper>
        <div className="pageWrapper">
            <Intro />
            <main>
                <About pre_head={headings[0].pre_head} head={headings[0].head} />
                <Skills pre_head={headings[1].pre_head} head={headings[1].head} />
                <Project pre_head={headings[2].pre_head} head={headings[2].head} />
                <Contact pre_head={headings[3].pre_head} head={headings[3].head} />
            </main>
            <Foot />
        </div>
    </Wrapper >
};

export default Main