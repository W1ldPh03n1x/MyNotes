import List from "./List";

// export interface Note {
// 	title: string;
// 	content: string;
// 	lastUpdate: string;
// }

export class Note {
	_title: string;
	_text: string;
	lastUpdate: string;
	createdAt: Date;

	constructor(
		title: string = "Без названия",
		text: string = "",
		lastUpdate: string = new Date().toDateString(),
		createdAt: Date = new Date(),
	) {
		this._title = title;
		this._text = text;
		this.lastUpdate = lastUpdate;
		this.createdAt = createdAt;
	}

	static copy(note: Note) {
		return new Note(note._title, note._text, note.lastUpdate, note.createdAt);
	}

	updateNote() {
		this.lastUpdate = new Date().toDateString();
		return this;
	}

	set title(title: string) {
		this._title = title;
		this.updateNote();
		console.log(title);
	}

	setTitle(title: string) {
		this.title = title;
		return this;
	}

	get title() {
		return this._title;
	}

	set text(text: string) {
		this._text = text;
		this.updateNote();
	}

	get text() {
		return this._text;
	}

	setText(text: string) {
		this.text = text;
		return this;
	}
}

export default List;
