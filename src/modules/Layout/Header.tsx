import React from "react";
import styles from "./layout.module.css";

const Header = ({
	toggleTheme,
	children,
}: {
	toggleTheme: () => void;
	children: React.ReactNode;
}) => {
	const [isScrolled, setIsScrolled] = React.useState(false);
	window.onscroll = () => {
		setIsScrolled(window.scrollY > 0);
	};
	return (
		<div className={styles["header"] + (isScrolled ? ` ${styles["header--scrolled"]}` : "")}>
			<div className={styles["header__wrapper"]}>
				<div className={styles["header__top"]}>
					<span className={styles["header__title"]}>MyNotes</span>
					<button
						type="button"
						className={styles["header__toggle-theme-button"]}
						onClick={toggleTheme}
					>
						Сменить тему
					</button>
				</div>
				<div className="header__bottom">{children}</div>
			</div>
		</div>
	);
};

export default Header;
