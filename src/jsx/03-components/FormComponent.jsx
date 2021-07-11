import { useContext, useState } from "react"
import { TaskContext } from "../../context/TaskContext"
import uuid from 'react-uuid'

const FormComponent = ({id}) => {

	const { lane, setLanes } = useContext(TaskContext)
	const [name, setName] = useState('')

	const createTask = (e) => {
		e.preventDefault()
		let currentID = parseInt(e.target.id)

		if(name.trim().length > 0) {
			setLanes( lane.map( t => {
					if (t.id === currentID) 
						return { ...t, tasks:[ {id: uuid(), name: name, timestamp: new Date().toDateString()}, ...t.tasks ] }
					return t
				}
			))
			setName('')
		}
	}

	return(
		<form className="form" >
			<input 
				className="form__input" 
				type="text" name="task" 
				placeholder="Add a new task"
				autoComplete="off" 
				value={ name } 
				onChange={ (e)=>setName(e.target.value) }
			/>
			<button 
				className="form__submit" 
				type="submit" 
				id={id}
				onClick={ createTask } 
			>
				Add task
			</button>
		</form>
	)
}

export { FormComponent }