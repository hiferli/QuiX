import axios from 'axios'
import './App.css';
import { QUIZ_DATA } from './Statics/QuizData'
import { useEffect, useState } from 'react';
import Home from './Pages/Home'

function App() {
	const [questions, setQuestions] = useState({})
	const [email, setEmail] = useState('');

	const getQuestions = async () => {
		const API = QUIZ_DATA.QUIZ_API + 'amount=' + QUIZ_DATA.NUMBER_OF_QUESTIONS;
		
		await axios.get(API)
			.then((response) => setQuestions(response.data))
			// .then(() => console.log(questions))
			.catch((error) => console.log(error))			
	}

	useEffect(() => {
		getQuestions();
	}, [])

	return (
		<>
			<Home email={email} setEmail={setEmail} />
		</>
	)
}

export default App;
