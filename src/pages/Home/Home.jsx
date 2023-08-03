import React from 'react';

import TasksList from '../../components/TasksList/TasksList';
import AddTask from '../../components/AddTask/AddTask';

const Home = (props) => {
	return (
		<>
			<AddTask tasks={props.tasks} setTasks={props.setTasks} />

			<TasksList tasks={props.tasks} setTasks={props.setTasks} />
		</>
	);
};

export default Home;
