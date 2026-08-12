import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("mario");
    const [isPending, setIsPending] = useState(false); //form is not submitting yet
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        
        setIsPending(true); //form is submitted fetch is started

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(()=>{
            setIsPending(false); //fetch is completed here
            //history.go(-1)
            navigate('/');
        })
    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title</label>
                <input
                value={title}
                type="text" required
                onChange={(e)=>setTitle(e.target.value)}
                />

                <label>Blog body</label>
                <textarea
                value= {body}
                onChange={(e)=>setBody(e.target.value)}
                required
                />
                <label>Blog author</label>
                <select 
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
                >

                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                { !isPending && <button>Add Blog</button>}
                { isPending && <button disabled>Adding Blog ...</button>}

                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
     );
}
 
export default Create;