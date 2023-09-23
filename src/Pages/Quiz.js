import React, { useState, useLayoutEffect } from 'react'
import axios from 'axios'
import Question from '../Components/Question'
import { QUIZ_DATA } from '../Statics/QuizData'
import AllQuestions from '../Components/AllQuestions'
import Result from '../Components/Result'


const Quiz = ({ email }) => {
    const [questions, setQuestions] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [isComplete, setIsComplete] = useState(false)

    const getQuestions = async () => {
        const API = QUIZ_DATA.QUIZ_API + 'amount=' + QUIZ_DATA.NUMBER_OF_QUESTIONS;

        try {
            setIsLoading(true);
            const questions = await axios.get(API);
            setQuestions(questions.data);
            // console.log(questions.data)
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    useLayoutEffect(() => {
        getQuestions();
    }, [])

    const print = () => {
        console.log(questions);
        setIsComplete(true);
    }

    return (
        <>
            {
                !isLoading
                ?
                    !isComplete 
                    ?
                        <div>
                            <AllQuestions questions={questions} />
                            <button onClick={print}>Submit</button>
                        </div>

                    :
                        <Result result={questions} />
                :

                <h1>Hang Tight!</h1>
            }
        </>
    )
}

export default Quiz