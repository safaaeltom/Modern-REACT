import { useNavigate, useParams } from "react-router-dom";
import useFetch from './useFetch'

const BlogDetails = () => {
    const { id } = useParams();
    const {data:blog, isLoading, error} = useFetch('http://localhost:8000/blogs/' + id)
    const navigate = useNavigate();
    
    const handleDelete=()=>{
      fetch('http://localhost:8000/blogs/' + blog.id, {
        method: 'DELETE'
      }).then(()=>{
        navigate('/');
      })
    }

    return ( 
      <div className="blog-details">
        <h1>Blog Details</h1>
        {error && <div>{error}</div>}
        {isLoading && <div>Loading...</div>}
        {blog && (
            <article>
               <h2>{blog.title}</h2>
               <h3>Written by: {blog.author}</h3>
               <p>{blog.body}</p>
               <button onClick={handleDelete}>Delete</button>
            </article>
          )}
      </div>
    );
}
 
export default BlogDetails;