import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
height: 90vh;
margin: 0% 1% 1% 8%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
.skills span {
    display: flex;
    flex-direction: column;
}

.skills span img {
    width: 30%;
}
`

const Iwrapper = styled.div`
    
`
const icon = [
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
        <div>----- some Info</div>
        <h3>ABOUT ME</h3>
        <div className="main-content">
            <div className='skills'>
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