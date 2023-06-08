import VideoCard from 'components/pages/Videos/VideoCard';
import styles from './Videos.module.css';

export default function Videos() {
    return(
        <main className={styles.container}>
            <h1>Confira os vídeos e canais mais relevantes</h1>

            <div className={styles.cards}>
                <VideoCard 
                    src="https://www.youtube.com/embed/KPxbYSeXXwU" 
                    titulo="Aprenda a fazer uma speedrun de Zelda Tears of the Kingdom"
                    linkDoCanal='https://www.youtube.com/@PointCrow'
                    canal='PointCrow'
                />
                <VideoCard 
                    src="https://www.youtube.com/embed/KPxbYSeXXwU" 
                    titulo="Aprenda a fazer uma speedrun de Zelda Tears of the Kingdom"
                    linkDoCanal='https://www.youtube.com/@PointCrow'
                    canal='PointCrow'
                />
            </div>
        </main>
    )
}