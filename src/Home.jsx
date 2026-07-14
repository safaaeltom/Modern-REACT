import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const[name, setName] = useState('Yousif');
    const[count, setCount] = useState(0);

    useEffect(()=>{
        console.log('Effect ran');
        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setBlogs(data);
        })
    }, [count]);

    return ( 
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
            <button onClick={()=>setName('Safaa')}>Change user</button>
            <p>{name}</p>
            <button onClick={()=>setCount(count + 1)}>Number of units</button>
            <p>{count}</p>
        </div>
     );
}
 
export default Home;