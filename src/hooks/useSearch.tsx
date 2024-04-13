import { ChangeEvent, useEffect, useState } from "react";
import { Note } from "../modules/Notes";

export const useSearch = () => {
	const [searchString, setSearchString] = useState("");

	const searchFilter = (notes: Note[]) => {
		return notes.filter(
			(note) =>
				note.title.toLowerCase().includes(searchString.toLowerCase()) ||
				note.text.toLowerCase().includes(searchString.toLowerCase()),
		);
	};

	useEffect(() => {}, [searchString]);

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => setSearchString(e.target.value);

	const controller = {
		value: searchString,
		onChange: handleInputChange,
	};

	return {
		searchString,
		setSearchString,
		controller,
		searchFilter,
	};
};
