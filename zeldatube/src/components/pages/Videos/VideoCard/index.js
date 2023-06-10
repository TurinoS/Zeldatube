import { Link } from 'react-router-dom';
import styles from './VideoCard.module.css';
import { BiLike, BiSolidLike } from 'react-icons/bi';

export default function VideoCard({ linkDoVideo, titulo, nomeDoCanal, linkDoCanal }) {
    return(
        <div className={styles.container}>
            <div className={styles.card}>
                <iframe 
                    src={linkDoVideo} 
                    title={titulo} 
                    frameBorder="0"
                />
                
                <Link to={linkDoVideo} target='_blank'><h3>{titulo}</h3></Link>

                <div className={styles.info}>
                    <Link to={linkDoCanal} target='_blank'>{nomeDoCanal}</Link>
                    <BiLike className={styles.icon} />
                </div>
            </div>
        </div>
    )
}