import React from 'react';
import styled from "styled-components";

const Wrapper = styled.section`
.grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 1rem;
    align-items: center;
}
`

const Pwrapper = styled.div`
display: flex;
flex-direction: row;
border-radius: 15px;
box-shadow: 0px 14px 28px rgb(134 151 168/8%);
border: 1px solid #eee;
justify-content: space-evenly;
align-items: flex-start;
padding: 15px 0 10px 0;
.image {
    flex: 0 0 350px;
    border-radius: 10px;
    height: auto;
}
img {
    width: 100%;
    border-radius: 10px;
    border: 1px solid #ddd;
}
.desc {
    width: 55%;
}
a {
    color: #8444df;
}
`

const works = [
    {
        src: "assets/fanwiki.png",
        heading: "Fanwiki",
        techstats: [
            "React",
            "HTML",
            "CSS",
            "JavaScript"
        ],
        livelink: "https://fanwiki.netlify.app/"
    },
    {
        src: "assets/rabear.png",
        heading: "Fanwiki",
        techstats: [
            "React",
            "HTML",
            "CSS",
            "JavaScript"
        ],
        livelink: "https://rabear.io/"
    },
    {
        src: "assets/cake-bake.png",
        heading: "Cake Bake",
        techstats: [
            "PHP",
            "HTML",
            "CSS",
            "JavaScript"
        ],
        livelink: "http://cake-bake.rf.gd/"
    },
    {
        src: "assets/halloween.png",
        heading: "heading",
        techstats: [
            "PHP",
            "HTML",
            "CSS",
            "JavaScript"
        ],
        livelink: "http://halloween-carnival.rf.gd/"
    },
    {
        src: "assets/imgur.png",
        heading: "Imgur Clone",
        techstats: [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        livelink: "https://chhaviarora1401.github.io/Imgur-Clone/"
    },
    {
        src: "assets/despoina.png",
        heading: "Despoina",
        techstats: [
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap 4"
        ],
        livelink: "despoina-ac075.web.app"
    },
    {
        src: "assets/david.png",
        heading: "David Chu's China Bistro",
        techstats: [
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap",
            "Ajax"
        ],
        livelink: "https://chhaviarora1401.github.io/Restaurant-Website/"
    }
];

const Iwrapper = styled.span`
padding: 2%;
`

const Tech = (props) => {
    return <Iwrapper className='color-text'>
        <span className='subitems'>{props.span}</span>
    </Iwrapper>
};


const Project = (props) => {
    const { pre_head, head } = props;
    return <Wrapper id="works" className="padding">
        <div className='headings'>
            <span>{pre_head}</span>
            <p>{head}</p>
        </div>
        <div className="sectionContain">
            {
                works.map((li) => {
                    return <Work src={li.src} heading={li.heading} span={li.techstats} livelink={li.livelink} repolink={li.repolink} />
                })
            }
        </div>
    </Wrapper >
};

const Work = (props) => {
    return <Pwrapper>
        <div className='image'>
            <img src={props.src} />
        </div>
        <div className='desc'>
            <h3>{props.heading}</h3>
            Technologies Used:
            {
                props.span.map((li) => {
                    return <>
                        <Tech span={li} />
                    </>
                })
            }
            <p>
                <span><a href={props.livelink}>Live </a></span>
            </p>
        </div>
    </Pwrapper >
}

export default Project