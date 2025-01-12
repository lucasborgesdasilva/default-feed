import styles from "./styles.module.css"

import logo from "../../assets/logo.svg"

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logotipo" />
      <h1 className={styles.title}>Default Feed</h1>
    </header>
  )
}