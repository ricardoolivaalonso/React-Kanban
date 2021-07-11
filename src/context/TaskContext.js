import { createContext, useState, useEffect } from 'react'
import { initialTasks } from './initialTasks'

const TaskContext = createContext()

const TaskProvider = ({children}) => {

	const tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : initialTasks
	const [lane, setLanes] = useState(tasks)

	useEffect(()=>{
		localStorage.setItem('tasks', JSON.stringify(lane))
	}, [lane])

	return(
		<TaskContext.Provider value={ {lane, setLanes} }>
			{children}
		</TaskContext.Provider>
	)
}

export { TaskContext, TaskProvider }

