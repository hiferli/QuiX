import axios from 'axios'
import './App.css';
import { useEffect, useState } from 'react';
import Home from './Pages/Home'
import Quiz from './Pages/Quiz'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';


function App() {
	const [questions, setQuestions] = useState({})
	const [email, setEmail] = useState('');

	return (
		<>

			<Router>
				<div>
					<Routes>
						<Route exact path="/" element={<Home email={email} setEmail={setEmail} />} />
						<Route exact path="/quiz" element={email ? <Quiz email={email} questions={questions} /> : <Navigate to='/' />} />
					</Routes>
				</div>
			</Router>

			{/* <Home email={email} setEmail={setEmail} /> */}

			{/* Add condition wherein if there's no email you can't proceed with the questions */}
			{/* <Quiz email={email} questions={questions} /> */}

		</>
	)
}

export default App;
