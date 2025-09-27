import { useState } from 'react'
import { Tasks } from './components/Tasks'
import { AddTask } from './components/AddTask'
import styles from './App.module.scss'

function App() {
	const [isTodoShown, setIsTodoShown] = useState(false)
	const [tasks, setTasks] = useState([])
	const [nextId, setNextId] = useState(1)
	const uncompletedTasks = tasks.filter(task => task.done === false)

	const toggleTodoScreen = () => {
		setIsTodoShown(prev => !prev)
	}

	return (
		<>
			{isTodoShown ? (
				<div className={styles.todoList}>
					<button className={`${styles.btn} ${styles.returnBtn}`} onClick={toggleTodoScreen}>
						<i className="fa-solid fa-chevron-left"></i> Wróć
					</button>
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

					<h2 className={styles.todoList__h2}>
						{uncompletedTasks.length > 0 ? `${uncompletedTasks.length} do zrobienia` : 'Brak zadań do wykonania.'}
					</h2>
				</div>
			) : (
				<header className={styles.header}>
					<div className={styles.header__img}></div>
					<div className={`${styles.header__content} ${styles.wrapper}`}>
						<div className={styles.header__textBox}>
							<h1 className={styles.header__heading}>Zarządzanie Zadaniami & To-Do Lista</h1>
							<p className={styles.header__text}>
								To produktywne narzędzie zostało zaprojektowane, aby pomóc Ci lepiej zarządzać projektem zadań!
							</p>
						</div>
						<button className={`${styles.btn} ${styles.header__btn}`} onClick={toggleTodoScreen}>
							Zaczynamy <i className={`${styles.header__btnIcon} fa-solid fa-arrow-right`}></i>
						</button>
					</div>
				</header>
			)}
		</>
	)
}

export default App
