import styles from "./Menu.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import Search from "./Search";
import { useState } from "react";

export default function Menu() {
  const [searched, setSearched] = useState("");

  return (
    <main>
      <nav className={styles.nav}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>
      <section className={styles.menu}>
        <h3 className={styles.menu__title}>Cardápio</h3>
        <Search searched={searched} setSearched={setSearched} />
      </section>
    </main>
  );
}
