import React from 'react'
import { useNavigate } from "react-router-dom";
import { QUIZ_DATA } from '../Statics/QuizData'

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
            <h1 className='mt-9 text-4xl '>Welcome to</h1>
            <h1 className='text-9xl text-[#4D6B73] font-serif font-black'>Quix</h1>
            <br />
            <h3 className='text-xl '>Challenge your ability</h3>

            <br /><br />
            <div className="rules m-2">
                <h2 className='text-4xl font-black text-[#D64045] text-transform: uppercase'>Rules</h2>
                <ol className='list-decimal'>
                    <li>You are required to enter your email address for starting the quiz. This email would be used to email your result to you as well as to the quiz creater</li>
                    <li>The quiz has total <span className='font-bold'>{QUIZ_DATA.NUMBER_OF_QUESTIONS}</span> questions waiting for you. You need to solve all of them (Atleast try to) solve all of them in a span of <span className='font-bold'>{QUIZ_DATA.QUIZ_TIME.MINUTES} minutes</span>.</li>
                    <li>You can use the <span className='font-bold text-[#6BAA75]'>Submit</span> button to submit the test. Alternatively, <span className='font-bold text-[#D64045]'>the test would be auto-submitted once the time is over</span></li>
                    <li className='text-orange-600 '>Crying is allowed, but please do so <i>quietly</i>.</li>
                </ol>
            </div>

            <br /><br />
            <h2 className='font-bold text-3xl'>To proceed, please enter your Email Address</h2>

            <form onSubmit={handleForm}>
                <br />
                <input className='px-5  border-2 rounded-md border-slate-300 hover:border-gray-400' placeholder='name@email.com' type="email" name="email" id="email" onChange={(event) => setEmail(event.target.value)} />
                <br />
                <button className='m-3 bg-[#4D6B73] hover:bg-white hover:text-gray-600 text-white py-1 px-4 border border-gray-400 rounded shadow' type='submit'>Proceed Ahead</button>

            </form>
        </>
    );
}

export default Home