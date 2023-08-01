import { useState } from 'react';

import Tasks from './components/Tasks/Tasks';

import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1>TODO LIST</h1>
			<Tasks/>
		</>
	);
}

export default App;
