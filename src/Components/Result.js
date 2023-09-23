import React, { useEffect, useState } from 'react'

const Result = ({ result }) => {
    const [correctMarked, setCorrectMarked] = useState([]);
    const [incorrectMarked, setIncorrectMarked] = useState([]);

    const decodeHtml = (html) => {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }

    useEffect(() => {
        console.log(result.results);

        result.results.forEach(submission => {
            if (submission.correct_answer === submission.choice) {
                // console.log("correct")
                setCorrectMarked(correctMarked => [...correctMarked, submission]);
            } else {
                // console.log("incorrectcorrect")
                setIncorrectMarked(incorrectMarked => [...incorrectMarked, submission]);
            }
        });
    }, [])

    return (
        <>
            <h1>Results are here!</h1>
            <h2>{correctMarked.length} questions were scored correct, while {incorrectMarked.length} questions were wrong</h2>
            <br />

            <h1>Analysis</h1>
            <h2>Correctly Marked Questions</h2>
            <hr />
            <div className="correct">
                {
                    correctMarked.length
                        ?
                        correctMarked.map(
                            (question) => (
                                <>
                                    <p>{decodeHtml(question.question)}</p>
                                    <hr />
                                </>
                            )
                        )
                        :
                        <>
                            <p>None 🥲</p>
                            <hr />
                        </>
                }
            </div>

            <h2>Incorrectly Marked Questions</h2>
            <hr />
            <div className="incorrect">
                {
                    incorrectMarked
                        ?
                        incorrectMarked.map(
                            (question) => (
                                <>
                                    <p>{decodeHtml(question.question)}</p>
                                    <p> {
                                            question.choice === undefined
                                            ? 
                                                <span>You marked nothing</span>
                                            :
                                                <span>You marked <i><b>{question.choice}</b></i></span>
                                        }
                                        , while the correct option was <i><b>{decodeHtml(question.correct_answer)}</b></i></p>
                                    <hr />
                                </>
                            )
                        )
                        :
                        <>
                            <p>None 😎</p>
                            <hr />
                        </>
                }
            </div>
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