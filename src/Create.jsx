import {useState} from "react";

const Create = () => {
    const [title, setTitle] = useState("");

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
                required
                />
                <label>Blog author</label>
                <select>
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                <button>Add Blog</button>
                <p>{title}</p>
            </form>
        </div>
     );
}
 
export default Create;