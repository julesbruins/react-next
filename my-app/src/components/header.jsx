import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
        <nav>
            <ul>
                <li><a href="/">link 1</a></li>
                <li><a href="/">link 2</a></li>
                <li><a href="/">link 3</a></li>
                <li><a href="/">link 4</a></li>
            </ul>
        </nav>
    </header>
  );
}

