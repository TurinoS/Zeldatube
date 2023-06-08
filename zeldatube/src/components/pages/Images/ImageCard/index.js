import { Link } from 'react-router-dom';
import styles from './ImageCard.module.css';

export default function ImageCard({ src, alt, linkDaImagem }) {
    return(
        <div className={styles.container}>
            <button>x</button>
            <Link to={linkDaImagem} className={styles.card}>
                <img src={src} alt={alt} />
            </Link>
        </div>
    )
}