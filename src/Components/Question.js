import React, { useEffect, useState } from 'react';
import Button from './Button';

const Question = ({ index, question }) => {
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');

    const decodeHtml = (html) => {
        var txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value;
    };

    const shuffle = (array) => {
        array.sort(() => Math.random() - 0.5);
    };

    const makeOptions = () => {
        let allOptions = [];

        question.incorrect_answers.forEach((answer) => {
            allOptions.push({ option: answer, answer: 'incorrect' });
        });

        let correct = question.correct_answer;
        allOptions.push({ option: correct, answer: 'correct' });

        // console.log(question.question)
        // allOptions.forEach(option => {
        //     console.log(option)
        // });

        shuffle(allOptions);
        setOptions(allOptions);
    };

    useEffect(() => {
        makeOptions();
    }, []);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleReset = () => {
        setSelectedOption('');
        delete question.choice;
        // console.log(question)
    };

    const storeResult = (event) => {
        handleOptionChange(event);
        const choice = event.target.value;
        question.choice = choice;
        // console.log(question)
    };

    return (
        <div className="border-2 border-[#4D6B73] rounded-md m-[25px] p-3 flex flex-col items-center m-fit">
            <p className="text-xl text-left italic underline underline-offset-2 self-start">
                Question: {index}
            </p>
            <h4 className="font-semibold text-3xl m-2 max-sm:text-xl">
                {decodeHtml(question.question)}
            </h4>
            <div className="flex flex-col items-start w-fit self-center p-5 text-center gap-3 ">
                {options.map((radio) => {
                    const { option } = radio;

                    // Continue tomorrow from here
                    // Do the thing that marks the question as correct or incorrect
                    return (
                        <label className="text-3xl flex gap-3 max-sm:text-xl">
                            <input
                                type="radio"
                                value={option}
                                name={question.question}
                                onChange={(event) => storeResult(event)}
                                checked={selectedOption === option}
                            />
                            <h3>{decodeHtml(option)}</h3>
                            <br />
                        </label>
                    );
                })}
            </div>
            <Button onClick={handleReset}>Reset</Button>
        </div>
    );
};

export default Question;

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

