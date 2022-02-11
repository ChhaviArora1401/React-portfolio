import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
height: 50vh;
margin: 0% 1% 1% 8%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
.skills {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 1.5rem;
    grid-row-gap: 3rem;
    justify-items: center;
}

`

const Iwrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
    font-size: 0.8rem;
    background-color: white;
    padding: 10px 0;
    border-radius: 15px;
    width: 50%;
    height: 90%;
    box-shadow: 0px 4px 8px rgb(134 151 168/10%);
    border: 1px solid #eee;
    justify-content: space-between;
    img {
        width: 40%;
    }
`
const icon = [
    {
        src: "https://alexcalia.com/assets/skills/api.svg",
        span: "HTML"
    },
    {
        src: "https://alexcalia.com/assets/skills/api.svg",
        span: "CSS"
    },
    {
        src: "https://alexcalia.com/assets/skills/api.svg",
        span: "JavaScript"
    },
    {
        src: "https://alexcalia.com/assets/skills/api.svg",
        span: "React"
    },
    {
        src: "https://alexcalia.com/assets/skills/api.svg",
        span: "Git"
    },
    {
        src: "https://alexcalia.com/assets/skills/api.svg",
        span: "VS Code"
    },
    {
        src: "https://alexcalia.com/assets/skills/api.svg",
        span: "name"
    },
    {
        src: "https://alexcalia.com/assets/skills/api.svg",
        span: "name"
    },
    {
        src: "https://alexcalia.com/assets/skills/api.svg",
        span: "name"
    },
    {
        src: "https://alexcalia.com/assets/skills/api.svg",
        span: "name"
    }
];

const Icons = (props) => {
    return <Iwrapper>
        <img src={props.src} />
        <span>{props.span}</span>
    </Iwrapper>
};


const Skills = () => {
    return <Wrapper>
        <div className="main-content">
            <div className='skills' id="skills">
                {
                    icon.map((li) => {
                        return <Icons src={li.src} span={li.span} />
                    })
                }
            </div>
        </div>
    </Wrapper >
};

export default Skills