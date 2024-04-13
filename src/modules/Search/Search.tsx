import { ChangeEvent } from "react";
import styles from "./search.module.css";

interface SearchProps {
	value: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ value, onChange }: SearchProps) => {
	// const { searchString, handleInputChange  } = useSearch(notes);
	return (
		<div className="search">
			<input
				type="search"
				className={styles["search__input"]}
				value={value}
				onChange={onChange}
				placeholder="Найти заметку..."
			/>
		</div>
	);
};

export default Search;
