import React from 'react';

import TasksList from '../../components/TasksList/TasksList';

const Home = (props) => {
	return (
		<>
			<TasksList tasks={props.tasks} setTasks={props.setTasks} />
		</>
	);
};

export default Home;
