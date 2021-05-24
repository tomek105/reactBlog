import { useHistory, useParams } from "react-router-dom";
import  useFetch  from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const  { data: blog, isLoading, error } = useFetch(`http://localhost:8000/blogs/${id}`);
    const history = useHistory();
    const handleClick = () =>{
        fetch(`http://localhost:8000/blogs/${id}`,{
            method:"DELETE"
        })
        .then(()=>{
            history.push("/");
        })
    }
    return ( 
        <div className="blog-details">
            <div className="container">
                { isLoading && <div>Loading...</div> }
                { error && <div>{ error }</div> }
                { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <img src={`https://picsum.photos/id/${blog.id + 46}/1120/300`}></img>
                    <p>Written by: { blog.author }</p>
                    <div> { blog.body}</div>
                    <button className="blog-details--button deleteButton" onClick={handleClick}>Delete</button>
                    <button className="blog-details--button backButton" onClick={() => history.push("/")}>Back</button>
                </article> 
                )}        
            </div>      
        </div>
     );
}
 
export default BlogDetails;