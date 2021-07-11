import { LaneSection } from "../02-sections/LaneSection"
import { HeaderSection } from "../02-sections/HeaderSection"

const KanbanPage = () => {
	return(
		<div className="kanban">
			<HeaderSection />
			<main className="main">
				<LaneSection></LaneSection>
			</main>
		</div>
	)
}

export { KanbanPage }