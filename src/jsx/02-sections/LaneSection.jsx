import { useContext } from "react"
import { TaskContext } from "../../context/TaskContext"
import { TaksComponent } from "../03-components/TaskComponent"
import { FormComponent } from "../03-components/FormComponent"

const LaneSection = () => {
	const { lane }  = useContext( TaskContext )
	
	return(
		<>
			{
				lane.map( t => (
					<div key={t.id}>
						<FormComponent id={t.id}></FormComponent>
						<article className="lane" >
							<div className="lane__info">
								<h2 className="lane__title">{t.title}</h2>
								<span className="lane__number">({t.tasks.length})</span>
							</div>
							<div className="lane__tasks">
								<TaksComponent task={t.tasks} type={t.id} title={t.title}></TaksComponent>
							</div>
						</article>
					</div>
				))
			}
		</>
		
	)
}

export { LaneSection }