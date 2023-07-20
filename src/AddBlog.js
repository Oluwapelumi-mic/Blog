import React from "react";

class AddBlog extends React.Component {
    state = {
        title:"",
        body:"",
        author:"",
    };
    add = (e) => {
        e.preventDefault();
        if (this.state.name ==="" || this.state.body ==="" || this.state.author ===""){
            alert("all the fields are Mandatory!")
            return;
        }
        this.props.addBlogHandler(this.state);
        this.setState({title:"",body:"",author:""});
    };
    render(){
        return(
        <div className="newBlog">
            <div className="ui main">
                <h2 style={{color: "black",}}> Add Blog</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label style= {{color: "#1e19b1",}}>Title</label>
                        <input type="text" name="title" placeholder="Blog title" value={this.state.title} onChange={ (e) => this.setState({title: e.target.value})}></input>
                    </div>
                    <div className="field">
                        <label style= {{color: "#1e19b1",}}>Content</label>
                        <input type="text" name="body" placeholder="Blog content"  value={this.state.body} onChange={ (e) => this.setState({body: e.target.value})}></input>
                    </div>
                    <div className="field">
                        <label style= {{color: "#1e19b1",}}>Author</label>
                        <input type="text" name="author" placeholder="Blog Author"  value={this.state.author} onChange={ (e) => this.setState({author: e.target.value})}></input>
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        </div>
        );
    }
}



export default AddBlog;