import { Link } from "react-router-dom";

const BlogList = ({ title, blogs }) => {
    // const blogs = pro.blogs;
    // const title = pro.title;
    return (
        <div className="blog-list">
            {
                blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                            <img src={`https://picsum.photos/id/${blog.id + 16}/300/200`}></img>
                            <h2>{blog.title}</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <p>Made by {blog.author}</p>
                        </Link>                 
                    </div>
                ))
            } 
        </div>
     );
}
 
export default BlogList;