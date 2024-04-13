import { Note } from "./index";
import styles from "./notes.module.css";
import ItemWrapper from "./ItemWrapper";

interface NotesListProps {
	notes: Note[];
	// editNoteTemplate: (i: number) => (note: Note) => void;
	// deleteNoteTemplate: (i: number) => () => void;
	editNote: (note: Note) => void;
	deleteNote: (note: Note) => void;
}

const NotesList = ({ notes, editNote, deleteNote }: NotesListProps) => {
	// const [noteList, setNoteList] = React.useState<Note[]>(notes);

	return (
		<div className={styles["list"]}>
			{notes.length > 0 ? (
				[...notes].map((note, i) => (
					<ItemWrapper key={i} note={note} editNote={editNote} deleteNote={deleteNote} />
				))
			) : (
				<div> Заметок нет </div>
			)}
		</div>
	);
};

export default NotesList;
