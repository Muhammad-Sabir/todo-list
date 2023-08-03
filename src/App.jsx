import React, { useState, useEffect, useRef } from 'react';

import Home from './pages/Home/Home';

import './App.css';

// const INITIAL_TASKS = [
// 	{ id: 't01', statement: 'Watch Harry Potter' },
// 	{ id: 't02', statement: 'Finish the project' },
// 	{ id: 't03', statement: 'Go to the gym' },
// 	{ id: 't04', statement: 'Buy groceries' },
// 	{ id: 't05', statement: 'Read a book' },
// 	{ id: 't06', statement: 'Call a friend' },
// 	{ id: 't07', statement: 'Write a blog post' },
// 	{ id: 't08', statement: 'Take a walk' },
// 	{ id: 't09', statement: 'Do some coding' },
// 	{ id: 't10', statement: 'Watch a movie' },
// ];

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
