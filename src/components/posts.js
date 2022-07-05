import react from 'react';
import {useState} from 'react';
import axios from "axios";
import { useNavigate } from "react-router";


const Posts = () => {
    //Making State to store ID entered by user
    const [input, setInput] = useState('');
    //initializing Navigate to Detail Page
    let navigate = useNavigate();

    //Function to get ID entered by user
    const handleChange = event => {
        setInput(event.target.value);
    };

    const handleClick = event => {
        event.preventDefault();
        if (input.length === 0) {
            alert("Please enter ID");
        } else {
            // 👇️ POST request for given ID
            axios.get(`http://localhost:3000/posts/${input}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                if (res.status === 200) {
                    //navigate to detail Page with data
                    console.log(res);
                    navigate(`/details`, {state: res.data});
                }
            })
                .catch(err => {
                    alert("No Data Found asdhasdh asdasdhj");
                });
        }
        ;
    }

     return (
        <div>
            <input
                type="text"
                id="id"
                name="id"
                onChange={handleChange}
                value={input}
                autoComplete="off"
            />

            <button onClick={handleClick}>Send</button>
        </div>
    );
};

export default Posts;
