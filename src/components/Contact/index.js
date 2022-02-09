import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
height: 90vh;
margin: 0% 1% 1% 8%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
.parti {
    display: flex;
    justify-content: space-between;
}
.c1 {
    padding: 3%;
    display: flex;
    flex-direction: column;
}
.full {
    width: 100%;
}
`
const Contact = () => {
    return <Wrapper>
        <div>----- Some Info</div>
        <h3>ABOUT ME</h3>
        <div className="main-content">
            <div className='Contact'>
                Get In Touch
                <div className='parti'>
                    <div className='c1'>
                        <span>icon</span>
                        <span>email</span>
                        Email me
                    </div>
                    <div className='c1'>
                        <span>icon</span>
                        <span>email</span>
                        Email me
                    </div>
                </div>
                Contact Form
                <div className=''>
                    <form>
                        <div className='half'>
                            <input type="text" placeholder='name' name="name" />
                            <input type="text" placeholder='name' name="name" />
                        </div>
                        <input type="text" placeholder='name' name="name" className='full' />
                        <input type="text" placeholder='name' name="name" className='full' />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </Wrapper >
};

export default Contact