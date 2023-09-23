import React from 'react'

const Question = ({ index, question}) => {
    const decodeHtml = (html) => {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }

    const shuffle = (array) => {
        array.sort(() => Math.random() - 0.5);
    }
    
    const makeOptions = () => {
        let allOptions = [];
        
        question.incorrect_answers.forEach(answer => {
            allOptions.push({option: answer, answer: 'incorrect'})
        });
        
        let correct = question.correct_answer
        allOptions.push({option: correct, answer: 'correct'})

        console.log(question.question)
        allOptions.forEach(option => {
            console.log(option)
        });
        
        shuffle(allOptions);
        return allOptions;
    }

    return (
        <>
            <p>Question: {index}</p>
            <h4>{decodeHtml(question.question)}</h4>
            
            
                {
                    makeOptions().map(
                        (radio) =>{
                            const {option , answer} = radio

                            // Continue tomorrow from here
                            // Do the thing that marks the question as correct or incorrect
                            return (
                                <label>
                                    <input type="radio" value={option} name={question.question} />
                                    {option}
                                    <br />
                                </label>
                            )
                        } 
                    )
                }
        </>
    )
}

export default Question

/*
Sample Data:

{
    "category": "Entertainment: Video Games",
    "type": "multiple",
    "difficulty": "medium",
    "question": "In Hitman: Blood Money, what is the name of the target in the mission &quot;Death of a Showman&quot;?",
    "correct_answer": "Joseph Clarence",
    "incorrect_answers": [
        "The Swing King",
        "Maynard John",
        "Manuel Delgado"
    ]
}
*/