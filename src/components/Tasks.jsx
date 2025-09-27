import styles from '../App.module.scss'

export const Tasks = ({ tasks, setTasks, onDeleteBtn }) => {
	const handleDoneBtn = id => {
		setTasks(prevTasks =>
			prevTasks.map(task => {
				return task.id === id ? { ...task, done: !task.done } : task
			})
		)
	}

	const todosElement = tasks.map(task => (
		<li key={task.id} className={styles.todoList__todo}>
			<span className={`${styles.todoList__todoText} ${task.done ? styles.completed : ''}`}>{task.text}</span>
			<div className={styles.todoList__tools}>
				<button onClick={() => handleDoneBtn(task.id)} className={styles.btn}>
					<i className="fa-solid fa-check"></i>
				</button>
				<button onClick={() => onDeleteBtn(task.id)} className={styles.btn}>
					<i className="fa-solid fa-trash"></i>
				</button>
			</div>
		</li>
	))

	return <ul className={styles.todoList__todos}>{todosElement}</ul>
}

