import React from 'react';

import Task from '../Task/Task';

import styles from './TasksList.module.css';

const TasksList = (props) => {
	return (
		<ul className={styles['tasks-list']}>
			{props.tasks.map((task) => {
				return (
					<Task
						key={task.id}
						task={task}
						tasks={props.tasks}
						setTasks={props.setTasks}
					/>
				);
			})}
		</ul>
	);
};

export default TasksList;
