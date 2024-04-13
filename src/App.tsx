import Layout from "./modules/Layout";
import styles from "./app.module.css";
import { useNotes } from "./hooks/useNotes";
import { SearchNote } from "./modules/Search";
import NotesList from "./modules/Notes/List";
import NewNoteButton from "./modules/Notes/NewNoteButton";
import { useSearch } from "./hooks/useSearch";
import { useTheme } from "./hooks/useTheme";

const App = () => {
	const { controller, searchFilter } = useSearch();
	const { notes, createNewNote, editNote, deleteNote } = useNotes();
	const { theme, toggleTheme } = useTheme("light");

	return (
		<div className={styles["wrapper"] + " " + styles[`theme-${theme}`]}>
			<Layout.Header toggleTheme={toggleTheme}>
				<SearchNote {...controller} />
			</Layout.Header>
			<Layout.Main>
				<NotesList
					notes={searchFilter(notes)}
					// editNoteTemplate={editNoteTemplate}
					editNote={editNote}
					// deleteNoteTemplate={deleteNoteTemplate}
					deleteNote={deleteNote}
				/>
				<NewNoteButton createNote={createNewNote} />
			</Layout.Main>
		</div>
	);
};

export default App;
