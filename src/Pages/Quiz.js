import React, { useState, useLayoutEffect } from 'react'
import axios from 'axios'
import Question from '../Components/Question'
import { QUIZ_DATA } from '../Statics/QuizData'


const Quiz = ({ email }) => {
    const [questions, setQuestions] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

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
    }

    return (
        <>
            {
                !isLoading
                ?
                    <div>
                        <h1>All the best!</h1>

                        {
                            // console.log(questions)
                            questions.results.map(
                                (question , index) => (
                                    <Question key={index} index={index + 1} question={question} />
                                )
                            )
                        }

                        <button onClick={print}>Submit</button>
                    </div>
                :
                    <h1>Hang Tight!</h1>
            }
        </>
    )
}

export default Quiz