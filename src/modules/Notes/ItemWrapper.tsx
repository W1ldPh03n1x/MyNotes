import React, { useEffect } from "react";
import Item from "./Item";

import { Note } from "./index";
import styles from "./notes.module.css";

interface NoteWrapperProps {
	note: Note;
	editNote: (note: Note) => void;
	deleteNote: (note: Note) => void;
}

const ItemWrapper = ({ note, editNote, deleteNote }: NoteWrapperProps) => {
	const [itemData, setItemData] = React.useState(note);
	const [isEditing, setIsEditing] = React.useState(false);

	useEffect(() => {
		setItemData(note);
	}, [note]);

	const editNoteTitle = (title: string) => {
		setItemData(Note.copy(itemData).setTitle(title));
	};

	const editNoteText = (title: string) => {
		setItemData(Note.copy(itemData).setText(title));
	};

	const toggleIsEditing = () => {
		if (isEditing) {
			editNote(itemData);
			console.log(itemData);
		}
		setIsEditing(!isEditing);
	};

	const headerInner: JSX.Element = isEditing ? (
		<input
			className={styles["item__title__input"]}
			value={itemData.title}
			onChange={({ target }) => editNoteTitle(target.value)}
		/>
	) : (
		<div className={styles["item__title"]}>{itemData.title}</div>
	);

	const mainInner: JSX.Element = isEditing ? (
		<textarea
			className={styles["item__content__input"]}
			onChange={({ target }) => editNoteText(target.value)}
			value={itemData.text}
		></textarea>
	) : (
		<div>{itemData.text}</div>
	);

	return (
		<Item
			isEditing={isEditing}
			toggleIsEditing={toggleIsEditing}
			deleteNote={() => deleteNote(itemData)}
			title={headerInner}
			content={mainInner}
			lastUpdate={itemData.lastUpdate}
		/>
	);
};

export default ItemWrapper;
