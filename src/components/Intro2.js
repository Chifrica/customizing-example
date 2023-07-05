function Intro2(props){
    const design = {
        padding: "20px",
        border: "1px solid gray",
        background: "#fff",
        margin: "20px 0"
    }

    return (

        <div className="blog-post-intro">
             
            <h2>Why I love front-end web development</h2>
            <div style = {design}>
                {props.children}
                <p>In this blog post, I'll list 10 reasons why I love to work as a front-end developer.</p>
                <p className="link">Read more...</p>
            </div>
        </div>
    );
};

export default Intro2;