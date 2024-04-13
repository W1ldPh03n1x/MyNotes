import styles from "./notes.module.css";

interface NoteProps {
	isEditing: boolean;
	toggleIsEditing: () => void;
	deleteNote: () => void;
	title: JSX.Element;
	content: JSX.Element;
	lastUpdate: string;
}

const Item = ({
	isEditing,
	toggleIsEditing,
	deleteNote,
	title,
	content,
	lastUpdate,
}: NoteProps) => {
	return (
		<div className={styles["item"] + (isEditing ? ` ${styles["item--editing"]}` : "")}>
			<header className={styles["item__header"]}>
				<div className={styles["item__title"]}>{title}</div>
			</header>
			<hr></hr>
			<main className={styles["item__content"]}>{content}</main>
			<footer className={styles["item__footer"]}>
				<div className={styles["item__edit-widget"]}>
					<button
						className={styles["item__edit-button"]}
						onClick={() => toggleIsEditing()}
					>
						{isEditing ? "Сохранить" : "Изменить"}
					</button>
					{isEditing && (
						<button
							className={
								styles["item__edit-button"] + ` ${styles["item__delete-button"]}`
							}
							onClick={() => {
								toggleIsEditing();
								deleteNote();
							}}
						>
							Удалить
						</button>
					)}
				</div>
				<span>{lastUpdate}</span>
			</footer>
		</div>
	);
};

export default Item;
