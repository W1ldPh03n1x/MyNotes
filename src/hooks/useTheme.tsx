import { useEffect, useState } from "react";

export const useTheme = (mode: "light" | "dark") => {
	const [theme, setTheme] = useState<"light" | "dark">(mode);
	const [syncronized, setSyncronized] = useState(false);
	useEffect(() => {
		if (syncronized) localStorage.setItem("theme", theme);
		else {
			setTheme(localStorage.getItem("theme") as "light" | "dark");
			setSyncronized(true);
		}
	});
	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};
	return { theme, toggleTheme };
};
