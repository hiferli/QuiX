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
            <h1>Results are here!</h1>
            <h1>Your Score is: {score}</h1>
            <h2>{correctMarked.length} questions were scored correct, while {incorrectMarked.length} questions were wrong</h2>
            <br />

            <h1>Analysis</h1>
            <h2>Correctly Marked Questions</h2>
            
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
                            <p>None 🥲</p>
                            
                        </>
                }
            </div>

            <h2>Incorrectly Marked Questions</h2>
            
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
                            <p>None 😎</p>
                            
                        </>
                }
            </div>
            <br />
            <button onClick={() => navigate('/')}>Retake Test</button>
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