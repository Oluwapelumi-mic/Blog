import React from "react";

class AddBlog extends React.Component {
    render(){
        return(
        <div className="newBlog">
            <div className="ui main">
                <h2 style={{color: "black",}}> Add Blog</h2>
                <form className="ui form">
                    <div className="field">
                        <label style= {{color: "#1e19b1",}}>Title</label>
                        <input type="text" name="title" placeholder="Blog title"></input>
                    </div>
                    <div className="field">
                        <label style= {{color: "#1e19b1",}}>Content</label>
                        <input type="text" name="body" placeholder="Blog content"></input>
                    </div>
                    <div className="field">
                        <label style= {{color: "#1e19b1",}}>Author</label>
                        <input type="text" name="author" placeholder="Blog Author"></input>
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        </div>
        );
    }
}



export default AddBlog;