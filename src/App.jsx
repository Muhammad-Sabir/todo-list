import React, { useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';

import './App.css';

const INITIAL_TASKS = [
	{ id: 't01', statement: 'Watch Harry Potter' },
	{ id: 't02', statement: 'Finish the project' },
	{ id: 't03', statement: 'Go to the gym' },
	{ id: 't04', statement: 'Buy groceries' },
	{ id: 't05', statement: 'Read a book' },
	{ id: 't06', statement: 'Call a friend' },
	{ id: 't07', statement: 'Write a blog post' },
	{ id: 't08', statement: 'Take a walk' },
	{ id: 't09', statement: 'Do some coding' },
	{ id: 't10', statement: 'Watch a movie' },
];

function App() {
	const [tasks, setTasks] = useState(INITIAL_TASKS);

	const addTaskHandler = (newTask) => {
		setTasks((prevState) => {
			return [newTask, ...prevState];
		});
	};

	const deleteTaskHandler = (id) => {
		setTasks((prevState) => {
			return prevState.filter((task) => task.id !== id);
		});
	};

	return (
		<>
			<NewTask onAddTask={addTaskHandler} />
			<Tasks onDeleteTask={deleteTaskHandler} tasks={tasks} />
		</>
	);
}

export default App;
