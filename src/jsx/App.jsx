import { KanbanPage } from "./01-pages/KanbanPage"
import { TaskProvider } from "../context/TaskContext"

const App = () => {
	return(
		<TaskProvider>
			<KanbanPage />
		</TaskProvider>
	)
}

export { App }
