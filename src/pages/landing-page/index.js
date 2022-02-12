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

const Cwrapper = styled.div`
.headings {
    margin: 0 0 0 25%;
}

.headings span {
    font-size: 0.75rem;
}
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

const CommonComponent = (props) => {
    const { pre_head, head } = props;
    return <Cwrapper>
        <div className='headings'>
            <span>{pre_head}</span>
            <h2>{head}</h2>
        </div>
        {props.children}
    </Cwrapper>
};


const Main = () => {
    return <Wrapper>
        <Intro />
        <CommonComponent pre_head={headings[0].pre_head} head={headings[0].head} id="about">
            <About />
        </CommonComponent>
        <CommonComponent pre_head={headings[1].pre_head} head={headings[1].head}>
            <Skills />
        </CommonComponent>
        <CommonComponent pre_head={headings[2].pre_head} head={headings[2].head}>
            <Project />
        </CommonComponent>
        <CommonComponent pre_head={headings[3].pre_head} head={headings[3].head}>
            <Contact />
        </CommonComponent>
    </Wrapper >
};

export default Main