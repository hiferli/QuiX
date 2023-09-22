import axios from 'axios'
import './App.css';
import { QUIZ_DATA } from './Statics/QuizData'
import { useEffect, useState } from 'react';

function App() {
	const [questions, setQuestions] = useState({})

	const getQuestions = async () => {
		const API = QUIZ_DATA.QUIZ_API + 'amount=' + QUIZ_DATA.NUMBER_OF_QUESTIONS;
		
		await axios.get(API)
			.then((response) => setQuestions(response.data))
			.then(() => console.log(questions))
			.catch((error) => console.log(error))			
	}

	useEffect(() => {
		getQuestions();
	}, [])


	return (
		<>
			<h1>Welcome</h1>
		</>
	);
}

export default App;
