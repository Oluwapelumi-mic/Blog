import React, { useState } from "react";
import BlogList from "./BlogList";
import AddBlog from './AddBlog';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My React Journey', body: 'stuffs', author: 'Adedeji', id: 1 },
        { title: 'My Django Documentation', body: 'stuffs', author: 'Iyere', id: 2 },
        { title: 'Full Stack at last!', body: 'stuffs', author: 'Adedeji', id: 3 },
    ]);

    const addBlogHandler = (newBlog) => {
        console.log(newBlog);
        setBlogs([...blogs, newBlog]);
    };

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" />
            <AddBlog addBlogHandler={addBlogHandler} />
        </div>
    );
}

export default Home;
