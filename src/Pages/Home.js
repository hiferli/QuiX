import React from 'react'
import { useNavigate } from "react-router-dom";

const Home = ({email , setEmail}) => {
    let navigate = useNavigate(); 

    const isEmailValid = () => {
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (regexEmail.test(email)) {
            return true;
        } else {
            return false;
        }

    }

    const handleForm = (event) => {
        event.preventDefault();

        if (!isEmailValid()) {
            alert("Please enter a valid email address");
        }
        
        navigate('/quiz')  
    }

    return (
        <>
            <h1>Welcome to Quix</h1>
            <h3>Challenge your ability</h3>

            <div className="rules">
                <ol>
                    <li>Rule 1</li>
                    <li>Rule 2</li>
                    <li>Rule 3</li>
                    <li>Rule 4</li>
                </ol>
            </div>

            <h2>To proceed, please enter your Email Address</h2>

            <form onSubmit={handleForm}>
                <input type="email" name="email" id="email" onChange={(event) => setEmail(event.target.value)} />
                <button type='submit'>Proceed Ahead</button>
            </form>
        </>
    );
}

export default Home