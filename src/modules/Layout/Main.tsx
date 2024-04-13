import styles from "./layout.module.css";

const Main = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className={styles["main"]}>
			<div className={styles["main__wrapper"]}>{children}</div>
		</main>
	);
};

export default Main;
