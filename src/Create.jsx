import {useState} from "react";

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
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
                <button>Add Blog</button>
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
     );
}
 
export default Create;