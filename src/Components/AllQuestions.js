import React, { useEffect, useState } from 'react'
import Question from './Question'
import Panel from './Panel'

const AllQuestions = ({ questions }) => {
    const [selected, setSelected] = useState(1);

    useEffect(() => {
        var element = document.getElementById(selected);
        
        if(element){
            element.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        } 
    }, [selected])

    return (
        <div>
            <h1>All the best!</h1>
            <Panel id={0} questions={questions.results} setSelected={setSelected} />

            {
                // console.log(questions)
                // Continue from here to make highlight for each question.
                questions.results.map(
                    (question, index) => (
                        <div id={index}>
                            <Question key={index} index={index + 1} question={question} />
                        </div>
                    )
                )
            }

        </div>
    )
}

export default AllQuestions