import styles from './Footer.module.css';
import { FaRegCopyright } from 'react-icons/fa'

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <p><FaRegCopyright />Desenvolvido por <span>Paulo Turino</span>.</p>
        </footer>
    )
}