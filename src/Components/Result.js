import React, { useEffect, useState } from 'react'

const Result = ({ result }) => {
    const [correctMarked, setCorrectMarked] = useState([]);
    const [incorrectMarked, setIncorrectMarked] = useState([]);

    useEffect(() => {
        console.log(result.results);
        
        result.results.forEach(submission => {
            if(submission.correct_answer === submission.choice){
                // console.log("correct")
                setCorrectMarked(correctMarked => [...correctMarked , submission]);
            } else {
                // console.log("incorrectcorrect")
                setIncorrectMarked(incorrectMarked => [...incorrectMarked , submission]);
            }
        });
    }, [])

    return (
        <>
            <h1>Results are here!</h1>
            <h2>{correctMarked.length} questions were scored correct, while {incorrectMarked.length} questions were wrong</h2>
        </>
    )
}

export default Result