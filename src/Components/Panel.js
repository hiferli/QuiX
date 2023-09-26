import React from 'react'
import { QUIZ_DATA } from '../Statics/QuizData'

const Panel = ({ questions, setSelected }) => {
    return (
        <>
            {
                // console.log(questions)
                questions.map(
                    (question, index) => (
                        <span onClick={() => setSelected(index)} style={{ background: question.choice ? QUIZ_DATA.COLOR.MARKED : QUIZ_DATA.COLOR.UNMARKED, color: 'white' }}>
                            {index}&nbsp;
                        </span>
                    )
                )
            }
        </>
    )
}

export default Panel