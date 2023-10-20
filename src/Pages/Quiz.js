import React, { useState, useLayoutEffect, useEffect } from 'react';
import axios from 'axios';
import { QUIZ_DATA } from '../Statics/QuizData';
import AllQuestions from '../Components/AllQuestions';
import Result from '../Components/Result';
import Timer from '../Components/Timer';
import { useNavigate } from 'react-router-dom';
import Duck from '../Statics/Duck.gif';
import Button from '../Components/Button';

const Quiz = ({ email }) => {
    const [questions, setQuestions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isComplete, setIsComplete] = useState(false);
    const [remainTime, setRemainTime] = useState(0);

    // time amount here is in seconds
    const timeAmount =
        QUIZ_DATA.QUIZ_TIME.MINUTES * 60 + QUIZ_DATA.QUIZ_TIME.SECONDS;

    let navigate = useNavigate();

    const getQuestions = async () => {
        const API = `${QUIZ_DATA.QUIZ_API}amount=${QUIZ_DATA.NUMBER_OF_QUESTIONS}`;

        try {
            setIsLoading(true);
            const questions = await axios.get(API);
            setQuestions(questions.data);
            // console.log(questions.data)
        } catch (error) {
            console.log(error);
            alert('Error getting questions! Please try again');
            navigate('/');
        } finally {
            setIsLoading(false);
        }
    };

    useLayoutEffect(() => {
        // console.log(minutes);
        // console.log(seconds)
        if (!email) {
            alert('Please enter your email to get started!');
            navigate('/');
        }

        getQuestions();
    }, []);

    const print = () => {
        console.log(questions);
        setIsComplete(true);
    };

    return (
        <>
            {!isLoading ? (
                !isComplete ? (
                    <div>
                        <Timer
                            initalTimeAmount={timeAmount}
                            callBack={(time) => {
                                setRemainTime(time);
                                if (time <= 0) setIsComplete(true);
                            }}
                        />
                        <AllQuestions questions={questions} />
                        <Button
                            className=" fixed bottom-0 left-0 p-2 rounded-md font-semibold text-xl  m-2"
                            onClick={print}
                        >
                            Submit
                        </Button>
                    </div>
                ) : (
                    <Result
                        result={questions}
                        initialTime={timeAmount}
                        remainTime={remainTime}
                    />
                )
            ) : (
                <div className="loading h-screen flex items-center justify-center">
                    <img width={100} height={100} src={Duck} alt="Loading" />
                    <h1 className="font-serif text-2xl">Hang Tight!</h1>
                </div>
            )}
        </>
    );
};

export default Quiz;

// < div style = "padding-top:125.326%;position:relative;" > <iframe src="https://gifer.com/embed/XOsX" width="100%" height="100%" style='position:absolute;top:0;left:0;' frameBorder="0" allowFullScreen></iframe></div > <p><a href="https://gifer.com">via GIFER</a></p>
