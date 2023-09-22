import axios from 'axios'
import './App.css';
import { useEffect, useState } from 'react';
import Home from './Pages/Home'
import Quiz from './Pages/Quiz'

function App() {
	const [questions, setQuestions] = useState({})
	const [email, setEmail] = useState('');

	return (
		<>
			{/* <Home email={email} setEmail={setEmail} /> */}

			{/* Add condition wherein if there's no email you can't proceed with the questions */}
			<Quiz email={email} questions={questions} />
			
		</>
	)
}

export default App;
