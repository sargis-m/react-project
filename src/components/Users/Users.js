import React, {useEffect, useState} from "react";
import './Users.css';
import axios from "axios";

function Users() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((data) => {
            console.log(data);
            setPost(data?.data);
        });
    }, []);

    return (
        <div className="users-section">
            <hr/>
            <h1>Axios Example (Users)</h1>
            {post.map((item, i) => {
                return (
                    <div key={i}>
                        <p>{item?.name}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Users;