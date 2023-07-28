import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";
import AddBlog from './AddBlog';
import { uuid } from 'uuidv4';

const LOCAL_STORAGE_KEY = "blogs"; // Define the key here before using it in the component

const Home = () => {
  const [blogs, setBlogs] = useState(() => {
    // Retrieve data from localStorage on initial mount, or use a default empty array if localStorage is empty or data is not available.
    const storedBlogs = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    return storedBlogs || [];
  });

  const addBlogHandler = (blog) => {
    console.log(blog);
    setBlogs([...blogs,{id:uuid(), ...blogs}]);
  };
  const removeBlogHandler = (id) => {
    const newBlogList = blogs.filter((blog) =>{
      return blog.id !== id ;
    });
    setBlogs(newBlogList);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(blogs));
  }, [blogs]);


  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" getBlogId={removeBlogHandler} />
      <AddBlog addBlogHandler={addBlogHandler} />
    </div>
  );
}

export default Home;
