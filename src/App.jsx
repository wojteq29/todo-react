import { useState } from 'react'
import { Tasks } from './components/Tasks'
import { AddTask } from './components/AddTask'
import styles from './App.module.scss'

function App() {
	const [tasks, setTasks] = useState([])
	const [nextId, setNextId] = useState(1)
	const uncompletedTasks = tasks.filter(task => task.done === false)

	return (
		<div className={styles.todoList}>
			<h1>Zadania</h1>

			<AddTask
				onAddBtn={todoText => {
					setTasks(prevTasks => [{ text: todoText, id: nextId, done: false }, ...prevTasks])
					setNextId(prevId => prevId + 1)
				}}
			/>
			<Tasks
				tasks={tasks}
				setTasks={setTasks}
				onDeleteBtn={id => {
					setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
				}}
			/>

			<h2>{uncompletedTasks.length > 0 ? `${uncompletedTasks.length} do zrobienia` : 'Brak zadań do wykonania.'}</h2>
		</div>
	)
}

export default App
