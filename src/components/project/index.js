import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
height: 90vh;
margin: 0% 1% 1% 8%;
// justify-content: center;
// align-items: center;
// flex-direction: column;
display: grid;
grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
    justify-items: center;
`

const Pwrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    box-shadow: 0px 14px 28px rgb(134 151 168/8%);
    -webkit-transition: all 0.3s ease-in;
    transition: all 0.3s ease-in;
    border: 1px solid #eee;
    img {
    display: block;
    width: 50%;
    padding: 2%;
    border-radius: 50px;
}
`

const works = [
    {
        src: "https://media.istockphoto.com/photos/background-illustration-of-a-traditional-ouija-board-picture-id183373027",
        heading: "heading",
        techstats: ["react",
            "html",
            "css"],
        livelink: "",
        repolink: ""
    },
    {
        src: "",
        heading: "heading",
        techstats: ["react", "juu", "css"],
        livelink: "hl",
        repolink: "mn"
    }
];


const Project = () => {
    return <Wrapper>
        <div className="main-content" id="works">
            {
                works.map((li) => {
                    return <Work src={li.src} heading={li.heading} techstats={li.techstats} livelink={li.livelink} repolink={li.repolink} />
                })
            }
        </div>
    </Wrapper >
};

const Work = (props) => {
    return <Pwrapper>
        <img src={props.src} />
        <div>
            <h3>{props.heading}</h3>
            <span>Technologies Used: <span>{props.techstats}</span>
            </span>
            <span><a href={props.livelink}>Live</a></span>
            <span><a href={props.repolink}>Repo</a></span>
        </div>
    </Pwrapper>
}

export default Project