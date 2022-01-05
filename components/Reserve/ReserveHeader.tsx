import styles from "./../About/header.module.scss";

export const ReserveHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.bgimg} />

      <svg className={styles.BottomShape} width="100%" viewBox="0 0 765 83" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.5 82.5V1.5C302.248 103.34 469.591 105.27 764.5 1.5V82.5H0.5Z" fill="white" stroke="white" />
      </svg>
      <section className={styles.Card}>
        <h1>Rezerviraj</h1>
      </section>
    </header>
  );
};