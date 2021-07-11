import uuid from 'react-uuid'

const initialTasks = [
	{
		id: 0,
		title: 'todo',
		tasks: [
			{
				id: uuid(),
				name: 'Learn about a distributed version control system such as Git',
				timestamp: new Date().toDateString()
			},
		]
	},
	{
		id: 1,
		title: 'doing',
		tasks: [
			{
				id: uuid(),
				name: 'Take a class at your local community center that interests you',
				timestamp: new Date().toDateString()
			}
		]
	},
	{
		id: 2,
		title: 'done',
		tasks: [
			{
				id: uuid(),
				name: 'Fix something that\'s broken in your house',
				timestamp: new Date().toDateString()
			}
		]
	}
]

export { initialTasks }