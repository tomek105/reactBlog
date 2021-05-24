import BlogList from "./BlogList";
import useFetch from './useFetch';

const Home = () => {
    const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs'); //custom made hook

    return ( 
        <div className="home">
            <div className="container">
                {error && <div>{error}</div>}
                {isLoading && <div>Loading...</div>}
                {blogs &&<BlogList blogs={blogs} title="Articles"/>}
            </div>           
        </div>
     );
}
 
export default Home;