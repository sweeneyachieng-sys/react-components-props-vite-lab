import React from 'react'
import Article from './Article';

function ArticleList(){

    
    return(
    <>
    <main>
        {blogData.articles.map((post) => (
            <Article key={post.id} blogData={post} />
        ))}
    </main>
    
    
    </>
    );
}

export default ArticleList;