import React from 'react'
import { QUIZ_DATA } from '../Statics/QuizData'

const Panel = ({ questions, setSelected }) => {
    return (
        <div className='p-3 bg-[#4D6B73]'>
            <h1 className='text-4xl bg-[#4D6B73] text-[#FFFEF2]'>Question List</h1>
            <h3 className='bg-[#4D6B73] text-[#FFFEF2]'>Click on the button to reach the question</h3>
            <br />

            {
                // console.log(questions)
                questions.map(
                    (question, index) => (
                        <span className={`text-[#FFFEF2] border w-9 text-center rounded-md inline-block m-1 p-2 font-bold ${question.choice ? `bg-[#6BAA75]` : `bg-[#D64045]`}`}  onClick={() => setSelected(index)} 
                        // style={{ background: question.choice ? QUIZ_DATA.COLOR.MARKED : QUIZ_DATA.COLOR.UNMARKED }}
                        >
                            {index}
                        </span>
                    )
                )
            }
        </div>
    )
}

export default Panel