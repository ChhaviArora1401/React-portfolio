import React from 'react';
import styled from "styled-components";

const Wrapper = styled.section`
flex-direction: column;
font-size: 1.25rem;
font-weight: 500;
article {
    text-align: justify;
}
`
const About = (props) => {
    const { pre_head, head } = props;
    return <Wrapper id="about" className="main-content padding">
        <div className='headings'>
            <span>{pre_head}</span>
            <p>{head}</p>
        </div>
        <article className='about sectionContain'>
            <p>A self-taught front end developer who loves coding.
                My front end journey started since March 2021.
                I try to create new things on my own from scratch and also like to learn from good developers.
                Recently, I am pursuing BCA from graduated from <span className='color-text'>Vivekananda Institute of Professional Studies</span>.
                I am passionate about coding and solving problems through code,
                and I am excited to work alongside other amazing programmers and learn so much more!</p>
        </article>
    </Wrapper >
};

export default About