import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
height: 90vh;
margin: 0% 1% 1% 8%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const Pwrapper = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 15px;
    box-shadow: 0px 14px 28px rgb(134 151 168/8%);
    -webkit-transition: all 0.3s ease-in;
    transition: all 0.3s ease-in;
    border: 1px solid #eee;
    width: 100%;
    img {
    display: block;
    width: 35%;
    padding: 3%;
    border-radius: 50px;
}
`
const Lwrapper = styled.div`

`


const works = [
    {
        src: "https://media.istockphoto.com/photos/background-illustration-of-a-traditional-ouija-board-picture-id183373027",
        heading: "heading",
        techstats: ["react", "html", "css"],
        livelink: "",
        repolink: ""
    },
    {
        src: "",
        heading: "heading",
        techstats: ["react", "html", "css"],
        livelink: "hl",
        repolink: "mn"
    }
];

const Points = () => {
    return <Lwrapper>
        {

        }
    </Lwrapper>
}

const Project = () => {
    return <Wrapper>
        <div>----- Some Info</div>
        <h3>ABOUT ME</h3>
        <div className="main-content">
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
            <span>Technologies Used:
                {
                }
            </span>
            <span><a href={props.livelink}>Live</a></span>
            <span><a href={props.repolink}>Repo</a></span>
        </div>
    </Pwrapper>
}

export default Project