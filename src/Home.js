import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const[blogs, setBlogs] = useState([
        {title: 'My React Journey', body: 'stuffs', author:'Adedeji',  id: 1},
        {title: 'My Django Documentation', body: 'stuffs', author:'Iyere',  id: 2},
        {title: 'Full Stack at last!', body: 'stuffs', author:'Adedeji',  id: 3},
    ])
    
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" />
            
        </div>
    );
}
 
export default Home;