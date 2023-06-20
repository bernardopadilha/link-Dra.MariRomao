import styles from './styles.module.scss';

export function Header() {
  return(
    <section className={styles.container} >
      <div className={styles.content} >
        <div>
          <a href="#" title="Clínica Romão" ></a>
        </div>
        <div className={styles.title}>
          <h3>Dra. Mariana Romão</h3>
          <h3>Médica Radiologista</h3>
          <h4>CRM/SC 23222 | RQE 21538</h4>
        </div>
      </div>
      <div className={styles.divider}></div>
    </section>
  );
}