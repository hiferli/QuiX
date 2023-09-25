import React from 'react'
import Question from './Question'
import Panel from './Panel'

const AllQuestions = ({ questions }) => {
    return (
        <div>
            <h1>All the best!</h1>
            <Panel questions={questions.results} />

            {
                // console.log(questions)
                questions.results.map(
                    (question, index) => (
                        <Question key={index} index={index + 1} question={question} />
                    )
                )
            }

        </div>
    )
}

export default AllQuestions