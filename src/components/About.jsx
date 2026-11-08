import React from 'react'
import blogData from "../data/blog";

function About({image= blogData.image, 
    about = blogData.about}){

    return(
    <>
    <aside>
        <img src={image} alt="blog logo" />

        <p>{about}</p>
    </aside>
    
    
    </>
    );
}

export default About;