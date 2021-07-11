import { useContext } from "react"
import { TaskContext } from "../../context/TaskContext"

const TaksComponent = ({ task, type, title }) => {

	const { lane, setLanes } = useContext(TaskContext)

	const changeTask = (e,op) => {
		let currentLane = parseInt(e.target.id) // Get teh current Lane-ID
		let currentID = e.currentTarget.value // Get the current Task-ID
		let currentTask = lane.find( t => t.id === currentLane ).tasks.find( t => t.id === currentID ) // Found the current task
		let otherTask = lane.find( t => t.id === currentLane ).tasks.filter( t => t.id !== currentID ) // All tasks - current
	
		setLanes( lane.map( t => {
				if (t.id === currentLane) 
					return { ...t, tasks: otherTask } // Delete the task of the current lane
				else if (t.id === (eval(`${currentLane}${op}1`))) 
					return { ...t, tasks: [ currentTask, ...t.tasks ] } // Add the task to the next/back lane
				return t
			}
		))
	}

	const deleteTask = (e) =>{
		let currentLane = parseInt(e.target.id) // Get teh current Lane-ID
		let currentID = e.currentTarget.value // Get the current Task-ID
		let otherTask = lane.find( t => t.id === currentLane ).tasks.filter( t => t.id !== currentID ) // All tasks - current

		setLanes( lane.map( t => {
				if (t.id === currentLane) 
					return { ...t, tasks: otherTask } // Delete the task of the current lane
				return t
			}
		))
	}

	return(
		<>
			{
				task.length === 0 ? <p className="task__empty">Nothing to see here...</p> : 
				task.map( t => (
					
					<article className={`task task--${title}`} key={t.id}> 
						<p className="task__name">{t.name}</p>
						<div className="task__info">
							<span className="task__timestamp">{t.timestamp}</span>
							<div className="task__buttons">

								{ type > 0 && 
									<button className="task__button" type="button" title="Previous Stage"
										value={t.id} 
										id={type} 
										onClick={(e)=>changeTask(e,'-')}
									>
										&#129040;
									</button>
								}
								{ type < 2 && 
									<button className="task__button" type="button" title="Next Stage"
										value={t.id} 
										id={type} 
										onClick={(e)=>changeTask(e,'+')}
									>
										&#129042;
									</button> 
								}
								<button className="task__button" type="button" title="Delete Task"
									value={t.id} 
									id={type} 
									onClick={deleteTask}
								>
									&#215;
								</button>
							</div>
						</div>
					</article>
				))
			}
		</>
	)
}

export { TaksComponent }