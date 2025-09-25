import { useState } from 'react'
import styles from '../App.module.scss'

export const AddTask = ({ onAddBtn }) => {
	const [inputValue, setInputValue] = useState('')
    const [errorShown, setErrorShown] = useState(false)

	const handleSubmit = () => {
		const todoText = inputValue

		if (todoText.trim()) {
			onAddBtn(todoText)
            setInputValue('')
            setErrorShown(false)
		} else {
			setErrorShown(true)
		}
	}

    const errorShowClass = errorShown ? styles.show : ''

	return (
		<>
			<div className={styles.todoList__addTask}>
				<input
					onChange={e => setInputValue(e.target.value)}
					type="text"
                    value={inputValue}
					placeholder="Dodaj nowe zadanie"
					className={styles.todoList__input}
				/>
				<button onClick={handleSubmit} className={styles.todoList__addBtn}>
					+
				</button>
			</div>
            <p className={`${styles.error} ${errorShowClass}`}>Podaj treść zadania!</p>
		</>
	)
}
