import { Link } from 'react-router-dom';

const Navbar = () => {
    return (       
            <nav> 
                <div className="container">
                    <div className="logo">
                        <img src="./img/mozy.svg" alt="logo"></img>
                        <p>myBlogs</p>
                    </div>
                    
                    <div className="links">
                        <Link to="/">Home</Link>
                        <Link to="/create" >New Blog</Link>
                    </div>
                </div>                       
            </nav>        
     );
}
 
export default Navbar;