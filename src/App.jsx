import React, { useState, useEffect, useRef } from 'react';

import Home from './pages/Home/Home';

import './App.css';

function App() {
	let ref = useRef(false);
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const storedTasks = localStorage.getItem('tasks');

		if (storedTasks) {
			setTasks(JSON.parse(storedTasks));
		}
	}, []);

	useEffect(() => {
		if (ref.current === false) {
			ref.current = true;
		} else {
			localStorage.setItem('tasks', JSON.stringify(tasks));
		}
	}, [tasks]);

	return (
		<>
			<Home tasks={tasks} setTasks={setTasks} />
		</>
	);
}

export default App;
