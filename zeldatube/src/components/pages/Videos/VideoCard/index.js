import { Link } from 'react-router-dom';
import styles from './VideoCard.module.css';
import { BiLike, BiSolidLike } from 'react-icons/bi';

export default function VideoCard({ src, titulo, canal, linkDoCanal }) {
    return(
        <div className={styles.container}>
            <button>x</button>
            <div className={styles.card}>
                <iframe 
                    src={src} 
                    title={titulo} 
                    frameBorder="0" 
                />
                
                <Link to={src} target='_blank'><h2>{titulo}</h2></Link>

                <div className={styles.info}>
                    <Link to={linkDoCanal} target='_blank'>{canal}</Link>
                    <BiLike className={styles.icon} />
                </div>
            </div>
        </div>
    )
}