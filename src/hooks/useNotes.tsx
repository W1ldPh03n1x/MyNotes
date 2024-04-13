import { useEffect, useState } from "react";
import { Note } from "../modules/Notes";

export const useNotes = (initialNotes: Note[] = []) => {
	const [notes, setNotes] = useState<Note[]>(initialNotes);
	const [syncronized, setSyncronized] = useState(false);

	useEffect(() => {
		setNotes(extractNotesFromLocalStorage());
		setSyncronized(true);
	}, []);

	useEffect(() => {
		if (!syncronized) return;
		// const extractedNotes = extractNotesFromLocalStorage();
		// if (extractedNotes.length > 0 && notes.length === 0) {
		// 	setNotes(extractedNotes);
		// } else {
		saveNotesToLocalStorage();
		// }
	}, [notes]);

	const saveNotesToLocalStorage = () => {
		localStorage.setItem("notes", JSON.stringify(notes));
	};

	const extractNotesFromLocalStorage = () => {
		const extractedNotes = localStorage.getItem("notes");
		if (extractedNotes) {
			const extractedNotesObject = JSON.parse(extractedNotes, (key, value) => {
				// console.log("key:", key, "value:", value);
				// console.log("key type:", typeof key, "value type:", typeof value);

				if (key === "createdAt") return new Date(value);
				if (key !== "" && typeof value === "object") {
					return new Note(value._title, value._text, value.lastUpdate, value.createdAt);
				}
				return value;
			});
			return extractedNotesObject;
		}
		return [];
	};

	const clearNotesFromLocalStorage = () => {
		localStorage.removeItem("notes");
	};

	const addNote = (note: Note) => {
		setNotes([note, ...notes]);
	};

	const createNewNote = () => {
		addNote(new Note());
	};

	const editNoteTemplate = (index: number) => {
		return (updatedNote: Note) => {
			const newNotes = [updatedNote].concat(notes.filter((_, i) => i !== index));
			setNotes(newNotes);
		};
	};

	const editNoteByIndex = (index: number, updatedNote: Note) => {
		editNoteTemplate(index)(updatedNote);
	};

	const editNoteByDate = (date: Date, updatedNote: Note) => {
		setNotes([updatedNote].concat(notes.filter((note) => note.createdAt !== date)));
		// setNotes(notes.map((note) => (note.createdAt === date ? updatedNote : note)));
	};

	const editNote = (note: Note) => {
		editNoteByDate(note.createdAt, note);
	};

	const deleteNoteTemplate = (index: number) => {
		return () => {
			const newNotes = notes.filter((_, i) => i !== index);
			setNotes(newNotes);
		};
	};

	const deleteNoteByIndex = (index: number) => {
		deleteNoteTemplate(index)();
	};

	const deleteNodeByDate = (date: Date) => {
		setNotes(notes.filter((note) => note.createdAt.getTime() !== date.getTime()));
		console.log(notes.filter((note) => note.createdAt.getTime() !== date.getTime()));
	};

	const deleteNote = (note: Note) => {
		deleteNodeByDate(note.createdAt);
		console.log(note);
	};

	const deleteAllNotes = () => {
		setNotes([]);
		clearNotesFromLocalStorage();
	};

	return {
		addNote,
		editNote,
		createNewNote,
		editNoteByIndex,
		deleteNote,
		editNoteTemplate,
		deleteNoteByIndex,
		deleteNoteTemplate,
		deleteAllNotes,
		notes,
	};
};
