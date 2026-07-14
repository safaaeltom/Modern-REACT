import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const[name, setName] = useState('yousif');

    useEffect(()=>{
        console.log('use effect ran');
        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setBlogs(data);
        })
    }, []);

    return ( 
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
            <button onClick={()=>setName('yahya')}>toggle me</button>
            <p>{name}</p>
        </div>
     );
}
 
export default Home;