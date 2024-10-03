import { Logo } from "../../assets/Logo"
import styles from "./styles.module.css"

export function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <h1 className={styles.title}>Ignite Feed</h1>
    </header>
  )
}