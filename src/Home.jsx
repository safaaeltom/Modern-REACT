import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] =useState(null);
    const[name, setName] = useState('Yousif');
    const[count, setCount] = useState(0);

    useEffect(()=>{
      setTimeout (()=>{
        fetch('http://localhost:8000/blogs')
          .then(res => {
            if(!res.ok){
              throw Error('could not fetch data')
            }
            return res.json();
          })
          .then(data => {
            setBlogs(data);
            setIsLoading(false);
            setError(null);
          })
          .catch(err=>{
            setError(err.message);
            setIsLoading(false);
          })
      }, 3000);
    }, []);

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading ...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
            <button onClick={()=>setName('Safaa')}>Change user</button>
            <p>{name}</p>
            <button onClick={()=>setCount(count + 1)}>Number of units</button>
            <p>{count}</p>
        </div>
     );
}
 
export default Home;