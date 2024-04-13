import styles from "./notes.module.css";

const NewNoteButton = ({ createNote }: { createNote: () => void }) => {
	const handleClick = () => {
		createNote();
	};
	return (
		<div className={styles["new-note-button"]}>
			<button onClick={handleClick}>
				{/* <span>&#9998;</span> */}
				{/* <span>Создать заметку</span> */}
				<span>+</span>
				{/* <span>&times;</span> */}
			</button>
		</div>
	);
};

export default NewNoteButton;
