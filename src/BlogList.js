const BlogList = ({blogs, title}) => {

    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button>Read More</button>
                    <i className="trash alternate outline icon"
                    style={{color:'red', marginLeft:"390px"}}></i>
                </div>
            ))}
        </div>

     );
}
 
export default BlogList;