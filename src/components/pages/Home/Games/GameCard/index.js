import { Link } from 'react-router-dom';
import styles from './GameCard.module.css';

export default function GameCard({ linkExterno, src, titulo, ano }) {
    return(
        <Link to={linkExterno} target='_blank' className={styles.card}>
            <img src={src} alt={titulo} />
            <h3>{titulo}</h3>
            <p>Ano de lançamento: {ano}</p>
            <p className={styles.saiba_mais}>Saiba mais</p>
        </Link>
    )
}