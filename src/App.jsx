import React, { useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';

import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<NewTask />
			<Tasks />
		</>
	);
}

export default App;
