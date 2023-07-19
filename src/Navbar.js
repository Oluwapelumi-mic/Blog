const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Iyere Blog </h1>
            <div className="links">
                <a href="/"> Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: '#1e19b1',

                }}> New Blog</a>
                
            </div>
        </nav>
    );
}
 
export default Navbar;