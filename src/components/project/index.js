import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
height: 70vh;
margin: 0% 1% 1% 8%;
.grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding: 1rem;
    align-items: center;
}
text-align: center;
.subitems {
    padding: 2%;
    margin: 2%;

}
`

const Pwrapper = styled.div`
display: flex;
flex-direction: column;
border-radius: 15px;
box-shadow: 0px 14px 28px rgb(134 151 168/8%);
-webkit-transition: all 0.3s ease-in;
transition: all 0.3s ease-in;
border: 1px solid #eee;
.image img {
    width: 50%;
    padding: 2%;
    border-radius: 20px;
}
`

const works = [
    {
        src: "https://media.istockphoto.com/photos/background-illustration-of-a-traditional-ouija-board-picture-id183373027",
        heading: "heading",
        techstats: ["React ",
            " HTML ",
            " CSS "],
        livelink: "",
        repolink: ""
    },
    {
        src: "",
        heading: "heading",
        techstats: ["react ",
            "juu ",
            "css "],
        livelink: "hl",
        repolink: "mn"
    }
];


const Project = () => {
    return <Wrapper id="works">
        <div className="main-content">
            <div className="grid" >
                {
                    works.map((li) => {
                        return <Work src={li.src} heading={li.heading} techstats={li.techstats} livelink={li.livelink} repolink={li.repolink} />
                    })
                }
            </div>
        </div>
    </Wrapper >
};

const Work = (props) => {
    return <Pwrapper>
        <div className='image'><img src={props.src} /></div>
        <div>
            <h3>{props.heading}</h3>
            <p>
                Technologies Used: <span className='subitems'>{props.techstats}</span>
            </p>
            <span><a href={props.livelink}>Live </a></span>
            <span><a href={props.repolink}> Repo</a></span>
        </div>
    </Pwrapper>
}

export default Project