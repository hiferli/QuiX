import React, { useEffect, useState } from 'react'
import { QUIZ_DATA } from '../Statics/QuizData';
import { useNavigate } from "react-router-dom";

const Result = ({ result }) => {
    const [score, setScore] = useState(0);
    const [correctMarked, setCorrectMarked] = useState([]);
    const [incorrectMarked, setIncorrectMarked] = useState([]);

    const decodeHtml = (html) => {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }

    const correctMarks = (difficulty) => {
        // If need special scoring methods, use this, else comment this out till the second last line

        if (difficulty === 'easy'){
            return QUIZ_DATA.EASY_QUESTION_SCORE;
        } else if (difficulty === 'medium'){
            return QUIZ_DATA.MEDIUM_QUESTION_SCORE;
        } else if(difficulty === 'hard'){
            return QUIZ_DATA.HARD_QUESTION_SCORE;
        }

        // till here

        return QUIZ_DATA.DEFAULT_SCORE;
    }

    useEffect(() => {
        // console.log(result.results);

        result.results.forEach(submission => {
            if (submission.correct_answer === submission.choice) {
                // console.log("correct")
                setCorrectMarked(correctMarked => [...correctMarked, submission]);
                setScore(score => score + correctMarks(submission.difficulty));
            } else {
                // console.log("incorrectcorrect")
                setIncorrectMarked(incorrectMarked => [...incorrectMarked, submission]);
                setScore(score => score - QUIZ_DATA.INCORRECT_SCORE);
            }
        });
    }, [])

    let navigate = useNavigate(); 

    return (
        <>
            <h1 className='text-5xl font-bold m-5'>Results are here!</h1>
            <h1 className='text-7xl'>Your Score is: <span className='text-[#4D6B73] bg-transparent'>{score}</span></h1>
            <h2 className='text-2xl inline-block m-3'><span className='text-[#6BAA75]'><b>{correctMarked.length}</b></span> questions were scored correct, while <span className='text-[#D64045]'><b>{incorrectMarked.length}</b></span> questions were wrong</h2>
            <br />

            <h1 className='text-4xl'>Analysis</h1>
            <h2 className='m-2 text-3xl text-[#6BAA75] underline'>Corsssrectly Marked Questions</h2>
            
            <div className="correct">
                {
                    correctMarked.length
                        ?
                        correctMarked.map(
                            (question) => (
                                <div className='border-2 border-[#4D6B73] rounded-md m-[25px]  p-3'>
                                    <p className='font-medium text-3xl m-2'>{decodeHtml(question.question)}</p>
                                    <p className='text-2xl'>You marked <span className='text-[#6BAA75]'><i><b>{decodeHtml(question.correct_answer)}</b></i></span></p>
                                </div>
                            )
                        )
                        :
                        <>
                            <p className='text-2xl'>None 🥲</p>
                            
                        </>
                }
            </div>

            <br /><br />

            <h2 className='text-3xl text-[#D64045] underline'>Incorrectly Marked Questions</h2>
            
            <div className="incorrect ">
                {
                    incorrectMarked
                        ?
                        incorrectMarked.map(
                            (question) => (
                                <div className='border-2 border-[#4D6B73] rounded-md m-[25px]  p-3'>
                                    <p className='font-medium text-3xl m-2'>{decodeHtml(question.question)}</p>
                                    <p className='text-2xl'> {
                                            question.choice === undefined
                                            ? 
                                                <span className='text-[#D64045]'>You marked nothing</span>
                                            :
                                            <span>You marked <span className='text-[#D64045]'><i><b>{question.choice}</b></i></span></span>
                                        }
                                        , while the correct option was <span className='text-[#6BAA75]'><i><b>{decodeHtml(question.correct_answer)}</b></i></span></p>
                                    
                                </div>
                            )
                        )
                        :
                        <>
                            <p className='text-2xl'>None 😎</p>
                            
                        </>
                }
            </div>
            <br />
            <button className='bg-[#4D6B73] text-[#FFFEF2] p-2 rounded-md font-semibold text-xl border-2 border-black m-2' onClick={() => navigate('/')}>Retake Test</button>
        </>
    )
}

export default Result


/*
Sample Input
    {
        "category": "Entertainment: Video Games",
        "type": "multiple",
        "difficulty": "easy",
        "question": "In Final Fantasy XIV, what is the name of the Deep Dungeon that was introduced in the expansion pack, Heavensward?",
        "correct_answer": "Palace of the Dead",
        "incorrect_answers": [
            "Heaven on High",
            "Aetherochemical Research Facility",
            "Sunken Temple of Qarn"
        ],
        "choice": "Palace of the Dead"
    }
*/